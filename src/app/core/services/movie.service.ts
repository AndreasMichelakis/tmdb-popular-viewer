import { Injectable } from '@angular/core';
import { ApiService } from '../http/api/api.service';
import { Movie } from 'src/app/shared/models/movie';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private popularMovies: Subject<Movie[]> = new Subject<Movie[]>();
  private currentlyViewing: Subject<Movie> = new Subject<Movie>();
  private pageCounter = 1;

  constructor(private api: ApiService) {
    this.loadNextTwoPages();
  }

  /**
   * Feed a new array to the popularMovies subject
   */
  setMovieArray(movie): void {
    this.popularMovies.next(movie);
  }

  /**
   * Returns an observable of the popularMovies subject
   * The last two pages of popular movies fetched from the API
   */
  getMovieArray(): Observable<Movie[]> {
    return this.popularMovies.asObservable();
  }

  /**
   * Feed a new array to the popularMovies subject
   */
  setCurrentMovieView(movie): void {
    this.currentlyViewing.next(movie);
  }

  /**
   * Returns an observable of the currentlyViewing subject
   * The movie currently selected and viewed by the user
   */
  getCurrentMovieView(): Observable<Movie> {
    return this.currentlyViewing.asObservable();
  }

  /**
   * Returns the next two pages of popular movies
   */
  async getNextTwoPages(): Promise<Movie[]> {
    try {
      const pageOne = this.api.getPopularMovies(this.pageCounter);
      const pageTwo = this.api.getPopularMovies(this.pageCounter + 1);
      const twoPages = await Promise.all([pageOne, pageTwo]).then((res) => {
        return res[0].concat(res[1]);
      });
      this.pageCounter = this.pageCounter + 2;
      console.log(this.pageCounter);
      return twoPages;
    } catch (err) {
      console.warn(err); // TODO:Add some handling
      return [];
    }
  }

  /**
   * Gets ands sends to observable the next two pages of movies
   */
  async loadNextTwoPages(): Promise<void> {
    await this.getNextTwoPages().then((fourtyMovies) => {
      this.setMovieArray(fourtyMovies);
    }).catch((exc) => {
      console.warn(exc);
    });
  }
}




