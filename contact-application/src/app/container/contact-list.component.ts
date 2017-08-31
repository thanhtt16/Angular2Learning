import { Component } from '@angular/core';
@Component({
    selector: 'tp-contact-list',
    templateUrl: './contact-list.component.html'
})

export class ContactListComponent{
    message: string = "Xin chao, ContactListComponent";
    printable = true;
    doClick(){
        this.message = "Button clicked";
        setTimeout(()=>{
            this.message = "Button done"
        }, 2000);
    }
}