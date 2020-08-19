import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PregnantcattlePage } from './pregnantcattle.page';

describe('PregnantcattlePage', () => {
  let component: PregnantcattlePage;
  let fixture: ComponentFixture<PregnantcattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregnantcattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PregnantcattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
