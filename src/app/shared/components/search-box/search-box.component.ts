import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(500))
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  ngOnDestroy() {
    this.debouncerSuscription?.unsubscribe();
  }

  keyPress(searchTerm:string) { 
    this.debouncer.next(searchTerm)
  }
}
