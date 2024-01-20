import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interface/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  searchCountries(term:string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    console.log('Llamando al servicio con término:', term);
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )
  }

  searchRegions(term:string):Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
    )
  }

  searchByCode(code:string):Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of(null) )
      )
  }
}



