import { Component, Input } from '@angular/core';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-country-grid',
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.scss'
})
export class CountryGridComponent {
  @Input()
  public listCountries?:Country[];
}
