import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatecampPage } from './createcamp.page';

describe('CreatecampPage', () => {
  let component: CreatecampPage;
  let fixture: ComponentFixture<CreatecampPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecampPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatecampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
