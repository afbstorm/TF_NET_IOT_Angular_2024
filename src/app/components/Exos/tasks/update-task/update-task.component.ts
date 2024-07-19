import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ITask, TaskService } from '../task.service';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {

  @Input() id: string;
  @Output() complete: EventEmitter<ITask[]> = new EventEmitter<ITask[]>();

  constructor(private _taskService: TaskService) {}

  updateTask(id: string) {
    this._taskService.completeTask(id)
    this.complete.emit(this._taskService.getTasks());
  }

}
