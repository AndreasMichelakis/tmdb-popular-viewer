import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-viewer',
  templateUrl: './movie-viewer.component.html',
  styleUrls: ['./movie-viewer.component.scss']
})
export class MovieViewerComponent implements OnInit {

  public movie: Movie;

  constructor(private movieService: MovieService) {
    this.subsribeToSelectedMovie();
  }

  ngOnInit(): void {
  }

  /**
   *  Subscribes to changes in the MovieService selected movie.
   *  Essentialy replacing contents of local variable
   */
  subsribeToSelectedMovie(): void {
    this.movieService.getCurrentMovieView().subscribe((currentlyViewingMovie) => {
      this.movie = currentlyViewingMovie;
    });
  }
  /**
   * Returns a string URL pointing to the w500 movie image at the API.
   * @param posterPath The poster_path of a movie
   */
  public getPosterUrl(posterPath: string): string {
    return 'https://image.tmdb.org/t/p/w500/' + posterPath;
  }


}
