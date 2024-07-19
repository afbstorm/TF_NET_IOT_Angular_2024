import { Injectable } from '@angular/core';

export interface ITask {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _taskList: ITask[] = [];

  constructor() { }

  getTasks(): ITask[] {
    return this._taskList;
  }

  addTask(task: ITask): void {
    this._taskList.push(task);
  }

  removeTask(id: string): void {
    this._taskList = this._taskList.filter(task => task.id !== id)
  }

  completeTask(id: string) {
    this._taskList = this._taskList.map((task: ITask) => {
      if (task.id === id) {
        return {...task, isCompleted: true}
      }
      return task;
    })
  }
}