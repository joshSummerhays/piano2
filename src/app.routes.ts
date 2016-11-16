import { AboutComponent } from './app/about';

export const AppRoutes [
    {path: '/about', component: AboutComponent},
    {path: '**', redirectTo: '/shopping-home', pathMatch: 'full'},
];