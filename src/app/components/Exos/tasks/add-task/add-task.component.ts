import { Component } from '@angular/core';
import { nanoid } from 'nanoid';
import { ITask, TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  newTask: ITask = {
    id: nanoid(),
    title: '',
    description: '',
    isCompleted: false
  }

  constructor(private _taskService: TaskService) {}

  addTask(): void {
    if (this.newTask) {
      this._taskService.addTask(this.newTask);
      this._taskService.getTasks();
      this.newTask = {
        id: nanoid(),
        title: '',
        description: '',
        isCompleted: false
      }
    }
  }

}
