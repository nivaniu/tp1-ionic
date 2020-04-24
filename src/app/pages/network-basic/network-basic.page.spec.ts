import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkBasicPage } from './network-basic.page';

describe('NetworkBasicPage', () => {
  let component: NetworkBasicPage;
  let fixture: ComponentFixture<NetworkBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkBasicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
