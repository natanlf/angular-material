import { CategriaComponent } from './components/categria/categria.component';

import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categoria', component: CategriaComponent },
    { path: 'about', component: AboutComponent }
]