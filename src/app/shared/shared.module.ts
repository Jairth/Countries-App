import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MainComponent } from './pages/main/main.component';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { HeaderComponent } from './pages/header/header.component';
import { CountriesModule } from '../Countries/countries.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchBoxComponent,
    MainComponent,
    FilterBoxComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SearchBoxComponent,
    MainComponent,
    HeaderComponent,
    FilterBoxComponent,
    RouterModule,
  ]
})
export class SharedModule { }
