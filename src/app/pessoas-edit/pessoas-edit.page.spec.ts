import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PessoasEditPage } from './pessoas-edit.page';

describe('PessoasEditPage', () => {
  let component: PessoasEditPage;
  let fixture: ComponentFixture<PessoasEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PessoasEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
