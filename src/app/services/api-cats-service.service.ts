import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cats } from '../interfaces/cats';

@Injectable({
  providedIn: 'root',
})
export class ApiCatsServiceService {
  API_URL!: string;
  API_KEY!: string;
  API_IMG!: string;
  API_IMG_KEY!: string;

  constructor(private http: HttpClient, private router: Router) {}

  getCats() {
    this.API_URL = environment.API_URL;
    this.API_KEY = environment.API_KEY;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.API_KEY}`
    );
    return this.http.get<Cats[]>(`${this.API_URL}`, { headers }).pipe(
      map((response: Cats[]) => {
        console.log(response);
        return response;
      }),
      catchError((error) => {
        // Maneja el error
        console.error('Error al obtener los datos:', error);
        return throwError(
          'Algo salió mal; por favor intenta de nuevo más tarde.'
        );
      })
    );
  }

  getImageCat(imgId: string) {
    this.API_IMG = environment.API_IMG;
    this.API_IMG_KEY = imgId;

    return this.http.get<any>(`${this.API_IMG}${this.API_IMG_KEY}`).pipe(
      map((response: any) => {
        return response.url;
      }),
      catchError((error) => {
        // Maneja el error
        console.error('Error al obtener los datos:', error);
        return throwError(
          'Algo salió mal; por favor intenta de nuevo más tarde.'
        );
      })
    );
  }
}
