import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interface/country.interface';
import { CacheStore } from '../interface/cache-store.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { 
    this.loadLocalStorage()
  }

  public cacheStore:CacheStore = {
    byCountries: { countries: []},
  }

  private saveLocalStorage() {
    localStorage.setItem('countries', JSON.stringify(this.cacheStore))
  }

  private loadLocalStorage() {
    if(!localStorage.getItem('countries')) return
    this.cacheStore = JSON.parse(localStorage.getItem('countries')!)
  }

  // clearCountriesCache() {
  //   console.log('Antes de limpiar el caché de países:', this.cacheStore.byCountries);
  //   this.cacheStore.byCountries = { countries: [] };
  //   this.saveLocalStorage();
  //   console.log('Después de limpiar el caché de países:', this.cacheStore.byCountries);
  // }
  
  // clearRegionsCache() {
  //   console.log('Antes de limpiar el caché de region:', this.cacheStore.byRegions);
  //   this.cacheStore.byRegions = { countries: [] };
  //   this.saveLocalStorage();
  //   console.log('Después de limpiar el caché de region:', this.cacheStore.byRegions);
  // }

  searchCountries(term:string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        tap( countries => { this.cacheStore.byCountries = { countries}}),
        tap( () => this.saveLocalStorage()),
        catchError(() => of([]))
      )
  }

  searchRegions(term:string):Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        tap( countries => { this.cacheStore.byCountries = { countries}}),
        tap( () => this.saveLocalStorage()),
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



