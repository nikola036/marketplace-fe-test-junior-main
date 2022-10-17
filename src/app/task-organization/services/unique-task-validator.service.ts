import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { TaskService } from "src/app/task-organization/services";

@Injectable({
  providedIn: "root",
})
export class UniqueTaskValidatorService {
  static createValidator(taskService: TaskService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      return taskService.getList().pipe(
        map((allTasks) => {
          const controlTask = allTasks.some(
            (item) => item.text.toLowerCase() == control.value.toLowerCase()
          );

          return controlTask ? { taskExists: true } : null;
        })
      );
    };
  }
}
