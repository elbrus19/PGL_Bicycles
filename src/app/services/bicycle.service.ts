import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Bicycle } from '../models/bicycle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:3000/api/bicycles';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  constructor(private http: HttpClient) { }

  getBicycles(): Observable<Bicycle[]> {
    return this.http.get<Bicycle[]>(apiUrl)
      /*.pipe(
        tap(bicycle => console.log('fetched Bicycles'))
        ,
        catchError(this.handleError('getBicycles', []))
      );*/
  }

  /*private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }*/
}
