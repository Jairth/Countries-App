import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrl: './filter-box.component.scss'
})
export class FilterBoxComponent {
  public listRegions:string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  public active:boolean = false
  public currentFilter:string = 'Filter by Region'

  @Output()
  public textFilter = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  openListRegions() {
    this.active = !this.active
  }

  openList(e:Event) {
    e.stopPropagation();
    this.openListRegions();
  }

  closeListRegions() {
    this.active = false;
  }

  currentListFilter(e: Event) {
    e.stopPropagation();
    
    if (!(e?.target instanceof HTMLLIElement)) {
      return;
    }
  
    const text = e.target.textContent ?? '';
    this.textFilter.emit(text)
    
    this.currentFilter = text;
    this.closeListRegions();
  }



  @HostListener('document:click', ['$event'])
    handleDocumentClick(event: Event) {   
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.closeListRegions();
    }
  }
}
