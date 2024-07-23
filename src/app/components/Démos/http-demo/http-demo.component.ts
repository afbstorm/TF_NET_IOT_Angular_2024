import { Component, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-demo',
  standalone: true,
  imports: [],
  templateUrl: './http-demo.component.html',
  styleUrl: './http-demo.component.css'
})
export class HttpDemoComponent implements OnDestroy {

  // Subscription se rattache à une propriété qui va elle même contenir un observable. 
  // Ce qui va nous permettre d'accèder à des méthodes inaccessible sans ce typage.
  dataObs: Subscription;
  todos: ITodoJsonplaceholder[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.dataObs = this._dataService.getData().subscribe({
      next: (data) => this.todos = data,
      error: (err) => console.error(err),
      complete: () => console.log('Opération completée')
    })
  }

  ngOnDestroy(): void {
    this.dataObs.unsubscribe()
  }
}

interface ITodoJsonplaceholder {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}