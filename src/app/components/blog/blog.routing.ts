import {Routes, RouterModule} from '@angular/router';
import { BlogComponent } from './blog.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SinglePostComponent } from './single-post/single-post.component';


const blogRoutes: Routes = [
    {path: '', component: BlogComponent,
        children: [
            {path: 'blog', component: PostsListComponent},
            {path: 'post/:postid', component: SinglePostComponent},
            {path: '', redirectTo: '/blog', pathMatch:'full'}
    ]},
];


export const blogRouting = RouterModule.forChild(blogRoutes);