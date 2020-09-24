import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialproyectPage } from './socialproyect.page';

describe('SocialproyectPage', () => {
  let component: SocialproyectPage;
  let fixture: ComponentFixture<SocialproyectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialproyectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialproyectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
