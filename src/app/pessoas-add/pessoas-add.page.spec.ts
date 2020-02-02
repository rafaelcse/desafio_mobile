import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PessoasAddPage } from './pessoas-add.page';

describe('PessoasAddPage', () => {
  let component: PessoasAddPage;
  let fixture: ComponentFixture<PessoasAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PessoasAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
