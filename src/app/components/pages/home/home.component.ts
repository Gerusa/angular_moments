import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';

import { Moment } from 'src/app/Moment';

import { environment } from 'src/environments/environment';

// icone
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //todos os momentos do banco
  allMoments: Moment[] = [];

  //filtro apos a busca
  moments:  Moment[] = [];

  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      
      const data = items.data;

      data.map((item) => {
        //trata a data de criacao
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allMoments = items.data;
      this.moments = items.data;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter(moment =>
      moment.title.toLowerCase().includes(value));
  }

}
