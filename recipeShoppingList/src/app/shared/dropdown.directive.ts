import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    //using an attribute selector
    selector: '[appDropdown]'
})
//adding 'open' css class for the bootstrap dropdown on click removes it on subseq click

export class DropdownDirective {
    
    //specify what on host to bind to
    @HostBinding('class.open')isOpen = false;
    

    //specify what on the host to listen for
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}