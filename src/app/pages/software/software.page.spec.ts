import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoftwarePage } from './software.page';

describe('SoftwarePage', () => {
  let component: SoftwarePage;
  let fixture: ComponentFixture<SoftwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
