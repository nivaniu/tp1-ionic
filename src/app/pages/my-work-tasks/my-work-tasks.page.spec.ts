import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyWorkTasksPage } from './my-work-tasks.page';

describe('MyWorkTasksPage', () => {
  let component: MyWorkTasksPage;
  let fixture: ComponentFixture<MyWorkTasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkTasksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyWorkTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
