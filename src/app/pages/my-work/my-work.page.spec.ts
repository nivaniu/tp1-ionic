import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyWorkPage } from './my-work.page';

describe('MyWorkPage', () => {
  let component: MyWorkPage;
  let fixture: ComponentFixture<MyWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
