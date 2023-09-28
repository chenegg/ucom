import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../part1/page2/WatherForecase';
import { User } from './users';

@Injectable({
  providedIn: 'root',
})
export class ConnToWebAPIService {
  constructor(private http: HttpClient) {}

  readonly rootUrl = 'https://mod08api.azurewebsites.net';

  Get117(): Observable<string> {
    return this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, {
      responseType: 'text',
    });
  }

  GetWeatherForecast() {
    return this.http.get<WeatherForecast[]>(`${this.rootUrl}/WeatherForecast`);
  }

  getUser(id: number) {
    return this.http.get<User[]>(`${this.rootUrl}/WeatherForecast/${id}`);
  }

  GetUserByOptions(id: number, observe: string) {
    let options: any;
    switch (observe) {
      case 'body':
        options = { observe: 'body', responseType: 'text' };
        break;
      case 'response':
        options = { observe: 'response', responseType: 'text' };
        break;
      default:
        options = {};
    }

    return this.http.get<User[]>(
      `${this.rootUrl}/WeatherForecast/${id}`,
      options
    );
  }

  POSTUser(user: User) {
    return this.http.post(`${this.rootUrl}/WeatherForecast/`, user, {
      responseType: 'text',
    });
  }

  GetDownload(file: string) {
    return this.http.get(`${this.rootUrl}/WeatherForecast/download/${file}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob',
    });
  }
}
