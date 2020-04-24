import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveLanguagesPage } from './live-languages.page';

describe('LiveLanguagesPage', () => {
  let component: LiveLanguagesPage;
  let fixture: ComponentFixture<LiveLanguagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveLanguagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveLanguagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
