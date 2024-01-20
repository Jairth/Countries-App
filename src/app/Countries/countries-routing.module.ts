import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesPageComponent } from './pages/countries-page/countries-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


const routes: Routes = [
  {
    path:'countries',
    component: CountriesPageComponent,
  },
  {
    path: 'countries/by/:id',
    component: CountryPageComponent,
  },
  {
    path: '**',
    redirectTo: 'countries',
  }

]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }