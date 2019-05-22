import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  people = 'people',
  starships = 'starships',
  planet = 'planet',
  films = 'films'
}

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  url = 'http://swapi.co/api/';
  apiKey = '';
  constructor(private http: HttpClient) { }
  /**
  /*
  /*
  */
  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }
  /**
  /*
  /*
  */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
