import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudiesPage } from './studies.page';

describe('StudiesPage', () => {
  let component: StudiesPage;
  let fixture: ComponentFixture<StudiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
