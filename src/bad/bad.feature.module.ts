import {NgModule} from '@angular/core';
import {routing} from './bad.routes';
import {BadModule} from './inner/bad.module';

@NgModule({
    imports: [
        routing,
        BadModule
    ],
    declarations: [
    ],
    providers: [
    ],
    bootstrap: []
})
export class BadFeatureModule {
}