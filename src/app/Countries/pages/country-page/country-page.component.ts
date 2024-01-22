import { Name } from './../../interface/country.interface';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss'
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

  backPage() {
    this.router.navigateByUrl('/countries')
  }
}


// for (const name in list) {
    //   if (list.hasOwnProperty(name)) {
    //     const childObject = list[name];
  
    //     if (childObject && childObject.common) {
    //       this.listNativeNames.push(childObject.common);
    //     }
    //   }
    // }