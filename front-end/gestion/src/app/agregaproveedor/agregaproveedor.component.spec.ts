import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaproveedorComponent } from './agregaproveedor.component';

describe('AgregaproveedorComponent', () => {
  let component: AgregaproveedorComponent;
  let fixture: ComponentFixture<AgregaproveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaproveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
