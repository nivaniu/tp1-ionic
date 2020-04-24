import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExperiencedPage } from './experienced.page';

describe('ExperiencedPage', () => {
  let component: ExperiencedPage;
  let fixture: ComponentFixture<ExperiencedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
