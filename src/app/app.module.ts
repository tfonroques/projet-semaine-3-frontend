import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalAppInterceptor } from './universal-app.interceptor';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { JWTTokenService } from './jwt-token.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    NewArticleComponent,
    ArticleListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalAppInterceptor,
      multi: true,
    },
    JWTTokenService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
