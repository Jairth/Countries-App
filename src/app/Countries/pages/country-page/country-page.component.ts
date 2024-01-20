import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {
  country?:Country;

  constructor(
    private countriesService:CountriesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => 
          this.countriesService.searchByCode(id))
      ).subscribe( country => {
        if(!country) {
          return this.router.navigateByUrl('');
        }
        return this.country = country
      })
  }
}
