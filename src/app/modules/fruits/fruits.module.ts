import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitDashboardComponent } from './components/fruit-dashboard/fruit-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemListExample2Component } from './components/item-list-example2/item-list-example2.component';
import { ItemListExample3Component } from './components/item-list-example3/item-list-example3.component';
import { NgDragDropModule } from 'ng-drag-drop';


@NgModule({
  declarations: [
    FruitDashboardComponent,
    ItemListComponent,
    ItemAddComponent,
    ItemListExample2Component,
    ItemListExample3Component
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgDragDropModule.forRoot(),
    FormsModule
  ]
})
export class FruitsModule { }
