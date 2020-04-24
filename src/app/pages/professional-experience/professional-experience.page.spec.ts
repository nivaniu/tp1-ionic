import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfessionalExperiencePage } from './professional-experience.page';

describe('ProfessionalExperiencePage', () => {
  let component: ProfessionalExperiencePage;
  let fixture: ComponentFixture<ProfessionalExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
