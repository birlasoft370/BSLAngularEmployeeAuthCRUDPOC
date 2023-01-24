import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitDashboardComponent } from './components/fruit-dashboard/fruit-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FruitDashboardComponent,
    ItemListComponent,
    ItemAddComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FruitsModule { }
