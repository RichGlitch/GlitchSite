import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const appRoutes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: LandingPageComponent},
    {path: 'blog', component: BlogComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);