import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PostsListComponent } from './components/blog/posts-list/posts-list.component';
import { SinglePostComponent } from './components/blog/single-post/single-post.component';

const appRoutes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: LandingPageComponent},
    {path: 'blog', component: BlogComponent,
        children: [
            {path: '', component: PostsListComponent},
            {path: 'post', component: SinglePostComponent}
        ]},
    {path: '**', redirectTo: 'home', pathMatch:'full'}

];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);