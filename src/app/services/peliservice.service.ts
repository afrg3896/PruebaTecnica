import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeliserviceService {
  private apikey = `https://api.themoviedb.org/3/movie/popular?api_key=5ea1cdb92875dd91c4d8e205a1c8ed68&page=1`;
  constructor(private http: HttpClient) { }

  getLastMovies () {
    return this.http.get(this.apikey);
  }

  getMovieDetail(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5ea1cdb92875dd91c4d8e205a1c8ed68`)
  }
}
