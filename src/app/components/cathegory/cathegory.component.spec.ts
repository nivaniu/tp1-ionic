import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CathegoryComponent } from './cathegory.component';

describe('CathegoryComponent', () => {
  let component: CathegoryComponent;
  let fixture: ComponentFixture<CathegoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CathegoryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CathegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
