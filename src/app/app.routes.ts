import { Routes } from '@angular/router';
import { BindingsComponent } from './components/Démos/bindings/bindings.component';
import { PipesComponent } from './components/Démos/pipes/pipes.component';

export const routes: Routes = [
    {path: 'demos', children: [
        {path: 'bindings', component: BindingsComponent},
        {path: 'pipes', component: PipesComponent}
    ]},
    {path: 'exos', children: [

    ]}
];

