import { Country } from './country.interface';

export interface CacheStore {
  byCountries: TermCountries;
  // byRegions: TermCountries;
}

export interface TermCountries {
  // term:string;
  countries: Country[];
}
