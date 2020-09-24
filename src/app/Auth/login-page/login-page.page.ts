import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from  '../user';
import { AuthResponse } from '../auth-response';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  private UserData: User = {
    name: "",
    email: "",
    password:"",
    password_confirmation: ""
  };
  private authResponse : AuthResponse;
  constructor(
    private router : Router,
    private nativeStorage : NativeStorage,
    public loadingController : LoadingController,
    public alertController : AlertController,
    public authService : AuthService
  ) { }

  ngOnInit(){
    this.initializeAuthResponse();
    this.getAccessDataUser();
  }

  ionViewWillEnter(){
    
  }

  private initializeAuthResponse() {
    this.authResponse = {
      response :{
        name: "",
        status: 0,
        statusText: "",
        accessUserData : {
          token_type:"",
          expires_in:0,
          access_token:"",
          refresh_token:""
        },
        errors : {
          formErrors : {
            name : [],
            email : [],
            password : []
          },
          dbErrors : {
            error : "",
            message : ""
          }
        }
      }
    };
  }

  private async getAccessDataUser(){
    await this.nativeStorage.getItem('AccessDataUser').then(
      data => {
        this.authResponse.response.accessUserData = data;
      },
      error => console.error(error)
    );
  }

  private printAccessDataUser(){
    console.log(this.authResponse.response.accessUserData);
  }
  async presentAlertConfirm(messageAlert) {
    const alert = await this.alertController.create({
      header: 'Errors',
      message: messageAlert,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentLoading(loading) {
    await loading.present();
  }

  async loginForm(){
    this.initializeAuthResponse();
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    }); 
    await this.presentLoading(loading);

    this.authService.login(this.UserData).subscribe(
      async ( Response : (any) ) => {
        this.authResponse.response.name = "";
        this.authResponse.response.status = 200;
        this.authResponse.response.statusText = "Ok";
        this.authResponse.response.accessUserData = Response;
        console.log(this.authResponse);
        
        await this.nativeStorage.setItem('AccessDataUser', this.authResponse.response.accessUserData ).then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
        loading.dismiss();
      },
      ( Errors : (any) ) => {
        var ErrorsHTML = "";
        loading.dismiss();
        console.log(Errors);
        this.authResponse.response.name = Errors.name;
        this.authResponse.response.status = Errors.status;
        this.authResponse.response.statusText = Errors.statusText;
        if(Errors.error.error != null && Errors.error.error == "invalid_grant"){
          this.authResponse.response.errors.dbErrors = Errors.error;
          ErrorsHTML = ErrorsHTML + "<li>"+ "Invalid credentials" +"</li>";
        }else {
          this.authResponse.response.errors.formErrors = Errors.error;
          if(this.authResponse.response.errors.formErrors.name != null){
            this.authResponse.response.errors.formErrors.name.forEach(element => {
              ErrorsHTML = ErrorsHTML + "<li>"+ element +"</li>";
              //console.log(element);
            });
          }
          if(this.authResponse.response.errors.formErrors.email != null){
            this.authResponse.response.errors.formErrors.email.forEach(element => {
              ErrorsHTML = ErrorsHTML + "<li>"+ element +"</li>";
              //console.log(element);
            });
          }
          if(this.authResponse.response.errors.formErrors.password != null){
            this.authResponse.response.errors.formErrors.password.forEach(element => {
              ErrorsHTML = ErrorsHTML + "<li>"+ element +"</li>";
              //console.log(element);
            });
          }
        }
        //ErrorsHTML = ErrorsHTML + "<br>" + "<strong> Error Request: </strong>" + response['statusText'];
        this.presentAlertConfirm(ErrorsHTML);
        console.log(this.authResponse);
      },
      () => {
        loading.dismiss();
        console.log("Termino")
      } 
    );
  }

  public RegisterPage(){
    this.router.navigate(['/register-page']);
  }

}
