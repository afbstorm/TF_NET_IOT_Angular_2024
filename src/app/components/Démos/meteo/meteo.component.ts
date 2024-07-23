import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MeteoModel } from '../../../models/meteo.model';
import { MeteoService } from '../../../services/meteo.service';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent {

  model: MeteoModel

  constructor(private meteoService: MeteoService) {
    this.meteoService.getCurrentWeather(40, 4)
      .subscribe({
        // méthode éxécutée en cas de success
        next: response => this.model = response,
        // méthode éxécutée en cas d'échec
        error: err => {}
      })
  }
}
