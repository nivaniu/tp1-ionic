import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileDevPage } from './mobile-dev.page';

describe('MobileDevPage', () => {
  let component: MobileDevPage;
  let fixture: ComponentFixture<MobileDevPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDevPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileDevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
