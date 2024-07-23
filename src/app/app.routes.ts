import { Routes } from '@angular/router';
import { BindingsComponent } from './components/Démos/bindings/bindings.component';
import { PipesComponent } from './components/Démos/pipes/pipes.component';
import { ChronoComponent } from './components/Exos/chrono/chrono.component';
import { DirectivesComponent } from './components/Démos/directives/directives.component';
import { ParentComponent } from './components/Démos/inout/parent/parent.component';
import { PanierComponent } from './components/Exos/panier/panier.component';
import { ServicesComponent } from './components/Démos/services/services.component';
import { TasksComponent } from './components/Exos/tasks/tasks.component';
import { FormulairesComponent } from './components/Démos/formulaires/formulaires.component';
import { HttpDemoComponent } from './components/Démos/http-demo/http-demo.component';
import { FanFormComponent } from './components/Exos/fan/fan-form/fan-form.component';
import { MeteoComponent } from './components/Démos/meteo/meteo.component';

export const routes: Routes = [
    {path: 'demos', children: [
        {path: 'bindings', component: BindingsComponent},
        {path: 'pipes', component: PipesComponent},
        {path: 'directives', component: DirectivesComponent},
        {path: 'inout', component: ParentComponent},
        {path: 'service', component: ServicesComponent},
        {path: 'formulaire', component: FormulairesComponent},
        {path: 'http', component: HttpDemoComponent}
        {path: 'meteo', component: MeteoComponent}
    ]},
    {path: 'exos', children: [
        {path: 'chrono', component: ChronoComponent},
        {path: 'panier', component: PanierComponent},
        {path: 'task', component: TasksComponent},
        {path: 'fan/create', component: FanFormComponent}
    ]}
];

