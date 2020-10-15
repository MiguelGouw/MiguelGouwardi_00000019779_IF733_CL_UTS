import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDataPage } from './add-data.page';

describe('AddDataPage', () => {
  let component: AddDataPage;
  let fixture: ComponentFixture<AddDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
