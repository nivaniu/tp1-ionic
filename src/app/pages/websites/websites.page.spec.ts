import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebsitesPage } from './websites.page';

describe('WebsitesPage', () => {
  let component: WebsitesPage;
  let fixture: ComponentFixture<WebsitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebsitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
