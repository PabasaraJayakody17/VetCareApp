import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaccinecattlePage } from './vaccinecattle.page';

describe('VaccinecattlePage', () => {
  let component: VaccinecattlePage;
  let fixture: ComponentFixture<VaccinecattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinecattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaccinecattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
