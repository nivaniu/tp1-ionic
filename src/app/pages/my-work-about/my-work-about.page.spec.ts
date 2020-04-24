import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyWorkAboutPage } from './my-work-about.page';

describe('MyWorkAboutPage', () => {
  let component: MyWorkAboutPage;
  let fixture: ComponentFixture<MyWorkAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyWorkAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
