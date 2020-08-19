import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CattlehousePage } from './cattlehouse.page';

describe('CattlehousePage', () => {
  let component: CattlehousePage;
  let fixture: ComponentFixture<CattlehousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattlehousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CattlehousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
