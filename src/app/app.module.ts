import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { APP_ROUTES } from './app.routing';
import { FooterComponent } from './shared/footer/footer.component';
import { PostsListComponent } from './components/blog/posts-list/posts-list.component';
import { PostItemComponent } from './components/blog/post-item/post-item.component';
import { SinglePostComponent } from './components/blog/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LandingPageComponent,
    FooterComponent,
    PostsListComponent,
    PostItemComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
