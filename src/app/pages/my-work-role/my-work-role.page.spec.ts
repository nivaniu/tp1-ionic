import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyWorkRolePage } from './my-work-role.page';

describe('MyWorkRolePage', () => {
  let component: MyWorkRolePage;
  let fixture: ComponentFixture<MyWorkRolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkRolePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyWorkRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
