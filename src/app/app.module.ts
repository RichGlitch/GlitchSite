import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { APP_ROUTES } from './app.routing';
import { FooterComponent } from './shared/footer/footer.component';
import { BlogModule } from './components/blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
