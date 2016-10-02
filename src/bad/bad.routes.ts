import {Routes, RouterModule} from '@angular/router';

import {BadComponent} from './inner/bad.component';

const badRoutes: Routes = [
    {path: '/bad', component: BadComponent, resolve: BadComponent.resolve},
];

export const routing = RouterModule.forChild(badRoutes);
