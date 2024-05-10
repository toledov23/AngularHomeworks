import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective implements OnInit {

  constructor(private readonly el: ElementRef) { }

  ngOnInit(): void {
    // nativeElement es una propiedad de la clase ElementRef
    const nativeElement = this.el.nativeElement;
    if (nativeElement) {
      // textContent representa el contenido de texto de un nodo
      nativeElement.textContent = nativeElement.textContent.toUpperCase();
    }
  }

}
