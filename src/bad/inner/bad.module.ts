import {NgModule} from '@angular/core';
import {BadResolver} from './bad.resolver';
import {BadComponent} from './bad.component';

@NgModule({
    declarations: [
        BadComponent
    ],
    providers: [
        BadResolver
    ],
    exports: [
        BadComponent
    ]
})
export class BadModule {
}