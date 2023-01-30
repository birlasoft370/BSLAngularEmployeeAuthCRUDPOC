import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListExample3Component } from './item-list-example3.component';

describe('ItemListExample3Component', () => {
  let component: ItemListExample3Component;
  let fixture: ComponentFixture<ItemListExample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListExample3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
