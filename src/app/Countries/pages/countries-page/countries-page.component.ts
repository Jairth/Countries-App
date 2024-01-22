import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interface/country.interface';


@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.scss'
})
export class CountriesPageComponent {
  public country?:Country;
  listCountries:Country[] = [];


  constructor(
    private countriesService:CountriesService,
  ){}

  ngOnInit() {
    this.listCountries = this.countriesService.cacheStore.byCountries.countries;
  }


  searchByCountries(term:string) {
    this.countriesService.searchCountries(term)
      .subscribe(countries => {
        this.listCountries = countries;
      }
    )
  }

  searchByRegion(term:string) {
    this.countriesService.searchRegions(term)
      .subscribe(countries => {
        this.listCountries = countries;
      })
  }
}
