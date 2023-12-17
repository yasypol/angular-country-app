import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent implements OnInit, OnDestroy {

  // - Subject es un tipo especial de Observable
  // - debouncer sirve para esperar cierto tiempo después de que el usuario introduzca
  // datos en la caja de búsqueda, para lanzar la petición http
  private debouncer: Subject<string> = new Subject<string>();
  // debouncerSubscription guarda la suscripción realizada al Observable, para destruirla
  // cuando se destruya este objeto (SearchBoxComponent)
  private debouncerSubscription?: Subscription;

  @Input()
  public initialValue: string = '';

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()

  public ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        // Espera 1 segundo para ver si recibe más valores. Actúa de "barrera"
        debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit(value);
      });
  }

  public ngOnDestroy(): void {
    // Siempre hay que hacer un unsubscribe (excepto si se usa un http.get)
    // como en country.service -> getCountriesRequest()
    this.debouncerSubscription?.unsubscribe();
  }

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

  public onKeyPress( searchTerm: string): void {
    this.debouncer.next( searchTerm );
  }
}
