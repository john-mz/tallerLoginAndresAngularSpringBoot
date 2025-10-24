import { Routes } from '@angular/router';
import { Dashboard } from './componentes/dashboard/dashboard';
import { Home } from './componentes/home/home';
import { Login } from './auth/login/login';
import { Principal } from './principal/principal';
import { Reportes } from './componentes/reportes/reportes';

export const routes: Routes = [
    { path: '', component: Principal,
        children: [
            {path: 'home', component: Home},
            {path: 'dashboard', component: Dashboard},
            {path: 'reportes', component: Reportes}
        ]
    },
    { path: 'login', component: Login }
    
];