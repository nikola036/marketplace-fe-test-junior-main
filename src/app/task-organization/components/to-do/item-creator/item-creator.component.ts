import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

import { Subscription } from "rxjs";

import {
  TaskService,
  UniqueTaskValidatorService,
} from "src/app/task-organization/services";

@Component({
  selector: "app-item-creator",
  templateUrl: "./item-creator.component.html",
  styleUrls: ["./item-creator.component.scss"],
})
export class ItemCreatorComponent implements OnInit, OnDestroy {
  taskForm: FormGroup;

  subscriptions = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      task: new FormControl(
        "",
        [Validators.pattern("^[a-zA-Z ]*$"), Validators.required],
        [UniqueTaskValidatorService.createValidator(this.taskService)]
      ),
    });
  }

  addTask() {
    if (this.taskForm.valid && this.taskForm.value.task) {
      const task = { text: this.taskForm.value.task.trim() };

      this.subscriptions.add(
        this.taskService.addTask(task).subscribe(() => {
          this.taskService.listUpadted$.emit(true);
        })
      );

      this.taskForm.reset();
    }
  }

  getErrorMessage() {
    const taskControl = this.taskForm.controls["task"];

    if (taskControl.errors?.["pattern"]) {
      return "Only text is allowed!";
    } else if (taskControl.errors?.["taskExists"]) {
      return "Task already exists!";
    }

    return;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
