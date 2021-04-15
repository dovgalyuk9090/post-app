import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import {ShareModule} from './shared/share.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterseptor} from "./shared/auth.interseptor";

const INTERSEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterseptor
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [
    INTERSEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
