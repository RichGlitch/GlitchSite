//import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PostsListComponent } from './components/blog/posts-list/posts-list.component';
import { SinglePostComponent } from './components/blog/single-post/single-post.component';

const appRoutes: Routes = [
    // {path: '', component: BlogComponent,
    //     children: [
    //         {path: 'blog', component: PostsListComponent},
    //         {path: 'post', component: SinglePostComponent},
    //         {path: '', redirectTo: '/blog', pathMatch:'full'}
    //     ]},
    {path: 'home', component: LandingPageComponent}
    //{path: '**', redirectTo: 'blog', pathMatch:'full'}

];
//export const appRoutingProviders: any[] = [];
export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true});