import { Component } from '@angular/core';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';
import { ITask, TaskService } from '../task.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [UpdateTaskComponent, DeleteTaskComponent, CardModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {

  tasks: ITask[] = [];

  constructor(private _taskService: TaskService) {}

  ngOnInit() {
    // this._taskService.getTasks();
    this.getTasks();

  }

  getTasks() {
    this.tasks = this._taskService.getTasks();
  }

}
