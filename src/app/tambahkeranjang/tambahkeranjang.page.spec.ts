import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahkeranjangPage } from './tambahkeranjang.page';

describe('TambahkeranjangPage', () => {
  let component: TambahkeranjangPage;
  let fixture: ComponentFixture<TambahkeranjangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahkeranjangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahkeranjangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
