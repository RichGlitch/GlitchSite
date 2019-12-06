import { NgModule } from "@angular/core";
import { MenuComponent } from "./shared/menu/menu.component";
import { BlogComponent } from './blog.component';
import { HeaderComponent } from "./shared/header/header.component";
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { blogRouting } from "./blog.routing";
import { BlogfooterComponent } from './shared/blogfooter/blogfooter.component';

@NgModule({
    declarations:[
        BlogComponent,
        MenuComponent,
        HeaderComponent,
        PostsListComponent,
        PostItemComponent,
        SinglePostComponent,
        BlogfooterComponent
    ],
    exports:[
        BlogComponent,
        MenuComponent,
        HeaderComponent,
        PostsListComponent,
        PostItemComponent,
        SinglePostComponent
    ],
    imports:[
        blogRouting
    ]
    
})

export class BlogModule {}