import { ComponentFixture, TestBed, fakeAsync, tick, async, waitForAsync } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from 'src/app/core/services/movie.service';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieService: MovieService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    // MovieService provided to the TestBed
    movieService = TestBed.inject(MovieService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate n number array', () => {
    const result = component.generateArray(10);
    expect(result.length).toBe(10);
  });
});


