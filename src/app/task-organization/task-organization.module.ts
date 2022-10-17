import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms";

import { ToDoComponent } from "./components/to-do/to-do.component";
import { ItemCreatorComponent } from "./components/to-do/item-creator/item-creator.component";
import { ToDoListComponent } from "./components/to-do/to-do-list/to-do-list.component";
import { ToDoItemComponent } from "./components/to-do/to-do-list/to-do-item/to-do-item.component";

import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import {
  TaskService,
  UniqueTaskValidatorService,
} from "src/app/task-organization/services";

@NgModule({
  declarations: [
    ToDoComponent,
    ItemCreatorComponent,
    ToDoListComponent,
    ToDoItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
})
export class TaskOrganizationModule {}
