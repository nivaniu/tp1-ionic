import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalInterestsPage } from './personal-interests.page';

describe('PersonalInterestsPage', () => {
  let component: PersonalInterestsPage;
  let fixture: ComponentFixture<PersonalInterestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInterestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInterestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
