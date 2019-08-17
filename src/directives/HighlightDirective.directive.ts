import { Directive, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[highlight]' // <a highlight></a>
})
export class HighlightDirective implements OnInit {
    
    constructor(private element : ElementRef) {

    }
    
    ngOnInit(): void {
        console.log(this.element.nativeElement);
        this.element.nativeElement.style.color = 'blue';
    }

    @HostListener('mouseover')
    onMouseOver() {
        this.element.nativeElement.style.color = 'red';
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.element.nativeElement.style.color = 'blue';
    }    
}