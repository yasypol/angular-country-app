import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [

  {
    // http://localhost:4200/countries/by-capital
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
    // http://localhost:4200/countries/by-country
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    // http://localhost:4200/countries/by-region
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    // http://localhost:4200/countries/by/5
    path: 'by/:id',
    component: CountryPageComponent
  },
  {
    // http://localhost:4200/countries/by/5
    path: '**',
    redirectTo: 'by-country'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
