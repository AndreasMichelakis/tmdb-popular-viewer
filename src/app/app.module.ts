import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { HeaderComponent } from './core/header/header.component';
import { MovieService } from './core/services/movie.service';
import { ApiService } from './core/http/api/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [HttpClientModule, ApiService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
