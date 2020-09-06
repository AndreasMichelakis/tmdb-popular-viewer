import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieViewerComponent } from './movie-viewer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieViewerComponent', () => {
  let component: MovieViewerComponent;
  let fixture: ComponentFixture<MovieViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieViewerComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a string url containing the given path', () => {
    expect(component.getPosterUrl('randomPath')).toEqual('https://image.tmdb.org/t/p/w500/randomPath');
  });
});
