import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListExample2Component } from './item-list-example2.component';

describe('ItemListExample2Component', () => {
  let component: ItemListExample2Component;
  let fixture: ComponentFixture<ItemListExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListExample2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
