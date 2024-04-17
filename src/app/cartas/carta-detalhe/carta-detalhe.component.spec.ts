import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaDetalheComponent } from './carta-detalhe.component';

describe('CartaDetalheComponent', () => {
  let component: CartaDetalheComponent;
  let fixture: ComponentFixture<CartaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
