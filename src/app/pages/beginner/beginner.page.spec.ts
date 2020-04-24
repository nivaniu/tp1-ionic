import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeginnerPage } from './beginner.page';

describe('BeginnerPage', () => {
  let component: BeginnerPage;
  let fixture: ComponentFixture<BeginnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
