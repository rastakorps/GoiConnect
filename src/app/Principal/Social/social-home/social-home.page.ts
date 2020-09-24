import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/Pages/Social/home/home.page';
import { MarketPage } from 'src/app/Pages/Social/market/market.page';
import { StoriesPage } from 'src/app/Pages/Social/stories/stories.page';
import { ChatPage } from 'src/app/Pages/Social/chat/chat.page';
import { ProfilePage } from 'src/app/Pages/Social/profile/profile.page';

@Component({
  selector: 'app-social-home',
  templateUrl: './social-home.page.html',
  styleUrls: ['./social-home.page.scss'],
})
export class SocialHomePage implements OnInit {
  homePage = HomePage;
  marketPage = MarketPage;
  storiesPage = StoriesPage;
  chatPage = ChatPage;
  profilePage = ProfilePage;
  constructor() { }

  ngOnInit() {
  }

}
