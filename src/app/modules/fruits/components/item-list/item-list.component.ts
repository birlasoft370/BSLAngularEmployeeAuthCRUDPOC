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
    this.service.GetAll().subscribe((result: any) => {
      var newArray = this.filterByReference(result, this.vegList);
      newArray = this.filterByReference(newArray, this.fruitList);
      console.log(newArray);
      this.itemList = newArray;
    });
  }

  // ref :- https://www.tutorialspoint.com/filter-an-array-containing-objects-based-on-another-array-containing-objects-in-javascript
  filterByReference = (arr1: any, arr2: any) => {
    let res = [];
    res = arr1.filter((el: any) => {
      return !arr2.find((element: any) => {
        return element.itemid === el.itemid;
      });
    });
    return res;
  }

  RemoveElementFromObjectArray(key: number) {
    this.itemList.forEach((value: any, index: any) => {
      if (value.itemid == key) this.itemList.splice(index, 1);
    });
  }

  moveVeg() {
    var tempListresult = this.itemList.filter(function (el: any) {
      return el.itemType === 'Vegetable';
    });

    tempListresult.forEach((item2: any) => this.vegList.push(item2));

    this.itemList = this.itemList.filter((el: any) => {
      return this.vegList.indexOf(el) < 0;
    });
  }

  moveFruit() {
   var tempfruitListresult = this.itemList.filter(function (el: any) {
      return el.itemType === 'Fruits';
    });

    tempfruitListresult.forEach((item2: any) => this.fruitList.push(item2));

    this.itemList = this.itemList.filter((el: any) => {
      return this.fruitList.indexOf(el) < 0;
    });
  }
}

