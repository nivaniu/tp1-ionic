import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkSoftwarePage } from './network-software.page';

describe('NetworkSoftwarePage', () => {
  let component: NetworkSoftwarePage;
  let fixture: ComponentFixture<NetworkSoftwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkSoftwarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkSoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
