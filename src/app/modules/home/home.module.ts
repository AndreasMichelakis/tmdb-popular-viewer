import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MovieViewerComponent } from './components/movie-viewer/movie-viewer.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent, MovieListComponent, MovieViewerComponent],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  exports: [HomeComponent, MovieListComponent, MovieViewerComponent],
  providers: [
    HttpClientModule
  ]
})
export class HomeModule { }
