import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesLibrosComponent } from './detalles-libros.component';

describe('DetallesLibrosComponent', () => {
  let component: DetallesLibrosComponent;
  let fixture: ComponentFixture<DetallesLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
