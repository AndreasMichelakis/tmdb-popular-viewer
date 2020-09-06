import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SortMethod } from '../../../shared/models/sort-method.enum';
import { SuccesfulResponse } from 'src/app/shared/models/successful-response';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})

/**
 * Used for communication with The Movie Database API
 */
export class ApiService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '9198fa6d9a9713bc6b03ee9582525917';

  constructor(private http: HttpClient) { }

  /**
   * Request for a popular movies from the API
   * @param page The page to retrieve (each holds 20 titles)
   * @param sortBy The sort method to use
   */
  getPopularMovies(page = 1, sortBy = SortMethod.Most_Popular): Promise<Movie[]> {
    return this.http.get(this.baseUrl + '/movie/popular', {
      params: new HttpParams()
        .set('api_key', this.apiKey)
        .set('sort_method', sortBy)
        .set('page', page.toString())
    }).toPromise().then((res: SuccesfulResponse) => {
      return res.results;
    });
  }
}

