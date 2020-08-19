import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SickcattlePage } from './sickcattle.page';

describe('SickcattlePage', () => {
  let component: SickcattlePage;
  let fixture: ComponentFixture<SickcattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SickcattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SickcattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
