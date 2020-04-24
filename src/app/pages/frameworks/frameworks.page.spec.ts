import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrameworksPage } from './frameworks.page';

describe('FrameworksPage', () => {
  let component: FrameworksPage;
  let fixture: ComponentFixture<FrameworksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrameworksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
