import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/components/about-page/about-page.component';
import { ContactPageComponent } from './shared/components/contact-page/contact-page.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { CountriesRoutingModule } from './countries/countries-routing.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries/by-capital'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Esto se define en el router principal. En este caso, es el de app
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
