import {Component} from '@angular/core';
import {BadResolver} from './bad.resolver';

@Component({
    selector: 'bad',
    template: '<div></div>'
})
export class BadComponent {

    static resolve = {
        demo: BadResolver
    }

}