import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/task-organization/services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  taskCounter: number;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.listLoaded$.subscribe((num) => {
      this.taskCounter = num;
    });
  }
}
