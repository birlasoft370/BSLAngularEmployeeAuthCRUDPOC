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
  itemTypedata = [{ id: 1, name: "vegetables" }, { id: 2, name: "fruits" }]

  addFruit = new FormGroup({
    id: new FormControl(0),
    detail: new FormControl('', Validators.required),
    itemType: new FormControl('', Validators.required)
  })

  collectFruit() {
    this.service.Save(this.FruitFormControl).subscribe(result => {
      console.log(result);
    });
  }

  get FruitFormControl() {
    return this.addFruit.controls;
  }
}
