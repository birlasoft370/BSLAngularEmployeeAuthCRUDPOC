import { Component } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  constructor(private service: GroceryService) {
    this.GetAll();
    this.service.RefreshRequired.subscribe(response => {
      this.GetAll();
    })
  }

  ngOnInit() { }

  itemList: any = [];
  vegList: any = [];
  fruitList: any = [];

  GetAll() {
    this.service.GetAll().subscribe(result => {
      console.log(result);
      this.itemList = result;
    });
  }
  moveVeg() {
    this.vegList = this.itemList.filter(function (el: any) {
      return el.itemTypeId === 1;
    });
    this.itemList = this.itemList.filter((el: any) => {
      return this.vegList.indexOf(el) < 0;
    });
  }

  moveFruit() {
    this.fruitList = this.itemList.filter(function (el: any) {
      return el.itemTypeId === 2;
    });

    this.itemList = this.itemList.filter((el: any) => {
      return this.fruitList.indexOf(el) < 0;
    });
  }
}

