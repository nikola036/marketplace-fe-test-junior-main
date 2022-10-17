import { Component, OnInit, OnDestroy } from "@angular/core";

import { TaskService } from "src/app/task-organization/services";

import { Subscription } from "rxjs";

import { Task } from "task";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"],
})
export class ToDoListComponent implements OnInit, OnDestroy {
  todoTasks: Task[] = [];

  subscriptions = new Subscription();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadList();

    this.subscriptions.add(
      this.taskService.listUpadted$.subscribe((isUpdated: boolean) => {
        if (isUpdated) {
          this.loadList();
        }
      })
    );
  }

  loadList() {
    this.subscriptions.add(
      this.taskService.getList().subscribe((tasks) => {
        this.todoTasks = tasks;
        this.taskService.listLoaded$.emit(this.todoTasks.length);
      })
    );
  }

  ngOnDestroy(): void {}
}
