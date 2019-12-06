import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PagenotFoundComponent } from './components/blog/shared/pagenot-found/pagenot-found.component';

const appRoutes: Routes = [
    {path: 'home', component: LandingPageComponent},
    {path: '**', component: PagenotFoundComponent},


];
export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true});