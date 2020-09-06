import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies: Movie[] = [];
  private didLoadOnce = false;

  constructor(public movieService: MovieService) {
    this.subsribeToMovieArray();
  }

  ngOnInit(): void {
  }

  /**
   *  Subscribes to changes in the MovieService movie array.
   *  Expands local movie array uppon new movies.
   */
  subsribeToMovieArray(): void {
    this.movieService.getMovieArray().subscribe((movieArray) => {
      this.movies = this.movies.concat(movieArray);
    });
  }

  /**
   * Feeds a movie to the respective observable in the movieService.
   * Will set a movie into view.
   * @param movie The movie object to set in view
   */
  public setMovieInView(movie: Movie): void {
    this.movieService.setCurrentMovieView(movie);
  }

  @HostListener('scroll', ['$event'])
  public onScroll(event: any): void {
    // User has scrolled to the end of the list
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      if (!this.didLoadOnce) { // Load next two pages from server
        this.didLoadOnce = true;
        this.movieService.loadNextTwoPages().then(() => this.didLoadOnce = false);
      }
    }
  }

  /**
   * Generates and empty array of the given lenght
   * @param length The length of the desired array
   */
  generateArray(length: number): Array<any> {
    return Array(Math.round(length));
  }


}
