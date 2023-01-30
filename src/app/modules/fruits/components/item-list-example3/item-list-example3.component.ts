import { Component } from '@angular/core';
import { distinct } from 'rxjs';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-item-list-example3',
  templateUrl: './item-list-example3.component.html',
  styleUrls: ['./item-list-example3.component.css']
})
export class ItemListExample3Component {

  constructor(private service: GroceryService) {
    this.GetAll();
    this.service.RefreshRequired.subscribe(response => {
      this.GetAll();
    })
  }

  GetAll() {
    this.service.GetAll().subscribe((result: any) => {
      var newArray = this.filterByReference(result, this.droppedVegetables);
      newArray = this.filterByReference(newArray, this.droppedFruits);
      newArray = newArray.filter((a: any, i: any) => newArray.findIndex((s: any) => a.itemType === s.itemType && a.itemDetail === s.itemDetail) === i)
      this.itemList = newArray.sort((a: any, b: any) => b.itemid - a.itemid);
      console.warn(this.itemList);
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

  //Refer :  https://www.npmjs.com/package/ng-drag-drop#demo   https://plnkr.co/edit/2bjGgzWnbFrciEiCKLew?p=preview&preview
  droppedFruits: any = [];
  droppedVegetables: any = [];
  itemList: any = [];

  onFruitDrop(e: any) {
    console.log(e.dragData)
    this.droppedFruits.push(e.dragData);
    this.removeItem(e.dragData, this.itemList);
  }

  onVegetableDrop(e: any) {
    this.droppedVegetables.push(e.dragData);
    this.removeItem(e.dragData, this.itemList);
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.itemDetail
    }).indexOf(item.itemDetail);
    list.splice(index, 1);
  }
}
