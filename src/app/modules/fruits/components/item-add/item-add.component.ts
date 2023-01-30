import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  constructor(private service: GroceryService) { }
  itemTypedata = [{ id: 1, name: "Vegetable" }, { id: 2, name: "Fruits" }]

  addItem = new FormGroup({
    itemid: new FormControl(0),
    itemDetail: new FormControl('', Validators.required),
    itemType: new FormControl('', Validators.required)
  })

  collectItem() {
    console.log(this.addItem.valid);
    if (this.addItem.valid) {
      this.service.Save(this.addItem.value).subscribe(result => {
        console.log(result);
        this.addItem.reset({
          itemid: 0,
          itemDetail: '',
          itemType: ''
        });
      });
    }
  }

  get addItemFormControl() {
    return this.addItem.controls;
  }
}
