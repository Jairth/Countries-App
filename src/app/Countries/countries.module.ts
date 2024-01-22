import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryGridComponent } from './components/country-grid/country-grid.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    CountriesPageComponent,
    CountryPageComponent,
    CountryGridComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
})
export class CountriesModule { }
