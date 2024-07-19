import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ITask, TaskService } from '../task.service';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.css'
})
export class DeleteTaskComponent {

  @Input() id: string;
  @Output() delete: EventEmitter<ITask[]> = new EventEmitter<ITask[]>();

  constructor(private _taskService: TaskService) {}

  deleteTask(id: string) {
    this._taskService.removeTask(id);
    this.delete.emit(this._taskService.getTasks());
  }

}
