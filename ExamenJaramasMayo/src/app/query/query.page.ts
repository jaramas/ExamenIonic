import { RestApiService, SearchType } from '../rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-query',
  templateUrl: './query.page.html',
  styleUrls: ['./query.page.scss'],
})
export class QueryPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private restApiService: RestApiService) {
  }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.restApiService.searchData(this.searchTerm, this.type);
  }

}
