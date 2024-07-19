import { Component } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AddTaskComponent, ListTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
