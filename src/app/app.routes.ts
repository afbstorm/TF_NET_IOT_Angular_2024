import { Routes } from '@angular/router';
import { BindingsComponent } from './components/Démos/bindings/bindings.component';
import { PipesComponent } from './components/Démos/pipes/pipes.component';
import { ChronoComponent } from './components/Exos/chrono/chrono.component';
import { DirectivesComponent } from './components/Démos/directives/directives.component';
import { ParentComponent } from './components/Démos/inout/parent/parent.component';

export const routes: Routes = [
    {path: 'demos', children: [
        {path: 'bindings', component: BindingsComponent},
        {path: 'pipes', component: PipesComponent},
        {path: 'directives', component: DirectivesComponent},
        {path: 'inout', component: ParentComponent}
    ]},
    {path: 'exos', children: [
        {path: 'chrono', component: ChronoComponent}
    ]}
];

