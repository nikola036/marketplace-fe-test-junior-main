import { Component, OnInit, Input } from "@angular/core";

import { TaskService } from "src/app/task-organization/services";

import { Task } from "task";

@Component({
  selector: "app-to-do-item",
  templateUrl: "./to-do-item.component.html",
  styleUrls: ["./to-do-item.component.scss"],
})
export class ToDoItemComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  deleteTask() {
    this.taskService.deleteTask(this.task.id).subscribe(() => {
      this.taskService.listUpadted$.emit(true);
    });
  }
}
