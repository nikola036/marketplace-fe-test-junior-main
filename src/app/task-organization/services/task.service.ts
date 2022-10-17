import { Injectable, EventEmitter } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Task } from "task";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  baseUrl: string = "http://localhost:3000/tasks";

  listUpadted$: EventEmitter<boolean> = new EventEmitter();
  listLoaded$: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) {}

  getList(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  addTask(task: Task): Observable<any> {
    const headers = { "content-type": "application/json" };
    const data = JSON.stringify(task);

    return this.http.post(this.baseUrl, data, { headers: headers });
  }

  deleteTask(taskId: number | undefined) {
    return this.http.delete(`${this.baseUrl}/${taskId}`);
  }
}
