import { Component, OnInit, ViewChild } from '@angular/core';
import { HomePage } from 'src/app/Pages/Profesional/home/home.page';
import { StoriesPage } from 'src/app/Pages/Profesional/stories/stories.page';
import { ChatPage } from 'src/app/Pages/Profesional/chat/chat.page';
import { ProfilePage } from 'src/app/Pages/Profesional/profile/profile.page';
import { NavController, IonNav } from '@ionic/angular';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';
import { BusinessPage } from 'src/app/Pages/Profesional/business/business.page';

@Component({
  selector: 'app-profesional-home',
  templateUrl: './profesional-home.page.html',
  styleUrls: ['./profesional-home.page.scss'],
})
export class ProfesionalHomePage implements OnInit {
  homePage = HomePage;
  storiesPage = StoriesPage;
  businessPage = BusinessPage;
  chatPage = ChatPage;
  profilePage = ProfilePage;

  @ViewChild('newsNav', {static: false}) newsNav: IonNav;
  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }

  OnTabChange(ev: CustomEvent<SuperTabChangeEventDetail>){
    switch (ev.detail.index){
      case 0:
        // console.log("Estas en apps");
        break;
      case 1:
        // console.log("Estas en social");
        break;
      case 2:
        // console.log("Estas en profesional")
        break;
    }
  }

}
