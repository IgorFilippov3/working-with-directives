import { Directive, Output, EventEmitter, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[ctrlEnter]"
})
export class CtrlEnterDirective {
  @Output() onCtrlEnter: EventEmitter<string> = new EventEmitter();

  constructor(private element: ElementRef) {}

  @HostListener("keydown", ["$event"]) onKeyDown(event) {
    if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
			this.onCtrlEnter.emit(this.element.nativeElement.value);
		}
  }
}