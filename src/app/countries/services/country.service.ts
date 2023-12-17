import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  public searchCountryByAlphaCode( code: string): Observable<Country | null> {

    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        // Modificar la información
        map( countries => countries.length > 0 ? countries[0] : null ),
        // "of" construye un observable basado en el argumento. En este caso: []
        catchError( () => of(null) )
      );
  }

  public searchCapital(term: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ term }`;

    return this.http.get<Country[]>( url )
      .pipe(
        // "of" construye un observable basado en el argumento. En este caso: []
        catchError( () => of([]) )
      );
  }

  public searchCountry(term: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ term }`;

    return this.http.get<Country[]>( url )
      .pipe(
        // "of" construye un observable basado en el argumento. En este caso: []
        catchError( () => of([]) )
      );
  }

  public searchRegion(term: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ term }`;

    return this.http.get<Country[]>( url )
      .pipe(
        // "of" construye un observable basado en el argumento. En este caso: []
        catchError( () => of([]) )
      );
  }

}
