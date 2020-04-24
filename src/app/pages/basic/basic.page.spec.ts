import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicPage } from './basic.page';

describe('BasicPage', () => {
  let component: BasicPage;
  let fixture: ComponentFixture<BasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
