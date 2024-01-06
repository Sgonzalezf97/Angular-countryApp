import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Observable, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  // esto es un Observable que se crea manualmente
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string=""

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
      this.debouncerSubscription = this.debouncer.pipe(
        debounceTime(500)
      )
      .subscribe(value =>{
        this.onDebounce.emit(value)
      })
  }

  ngOnDestroy(): void {
      this.debouncerSubscription?.unsubscribe;
      // console.log("destruido")
  }

  public emitValue(value:string):void{
    this.onValue.emit(value)
  }

  public onKeyPress(seachTerm:string){
    this.debouncer.next(seachTerm)
  }

}
