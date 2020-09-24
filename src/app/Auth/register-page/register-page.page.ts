import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { User } from  '../user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthResponse } from '../auth-response';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
  private UserData: User = {
    name: "",
    email: "",
    password:"",
    password_confirmation: ""
  };
  private authResponse : AuthResponse;
  constructor(
    private router : Router,
    public loadingController : LoadingController,
    public alertController : AlertController,
    public authService : AuthService,
    private nativeStorage: NativeStorage
  ) { }
  //UserData : User
  
  ngOnInit(){

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

  async registerForm() {
    this.initializeAuthResponse();
    // Cuando se manda el formulario se crea un loading
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    }); 
    await this.presentLoading(loading);

    this.authService.register(this.UserData).subscribe(
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
        console.log("Exito");
        console.log(this.authResponse);
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
            });
          }
          if(this.authResponse.response.errors.formErrors.email != null){
            this.authResponse.response.errors.formErrors.email.forEach(element => {
              ErrorsHTML = ErrorsHTML + "<li>"+ element +"</li>";
            });
          }
          if(this.authResponse.response.errors.formErrors.password != null){
            this.authResponse.response.errors.formErrors.password.forEach(element => {
              ErrorsHTML = ErrorsHTML + "<li>"+ element +"</li>";
            });
          }
        }
        this.presentAlertConfirm(ErrorsHTML);
        console.log(this.authResponse);
      },
      () => {
        loading.dismiss();
        console.log("Termino")
      } 
    );
  }

  public LoginPage(){
    this.router.navigate(['/login-page']);
  }
}
