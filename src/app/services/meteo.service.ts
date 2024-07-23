import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeteoModel } from '../models/meteo.model';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private baseUri: string = 'https://api.openweathermap.org/data/2.5/weather';
  private readonly baseParams = {
    appid: 'd52e50e34214ff0b92247f788638eeb9',
    units: 'metric',
    lang: 'fr'
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrentWeather(lat: number, lon: number) {
    return this.httpClient.get<MeteoModel>(this.baseUri, { params: { 
      ...this.baseParams, lat, lon 
    } })
  }
}
