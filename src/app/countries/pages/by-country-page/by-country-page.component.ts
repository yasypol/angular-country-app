import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {

  }

  public searchByCountry(term: string): void {

    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries;
        console.log({countries});
      });
  }
}
