import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTableItemComponent } from './books-table-item.component';

describe('BooksTableItemComponent', () => {
  let component: BooksTableItemComponent;
  let fixture: ComponentFixture<BooksTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
