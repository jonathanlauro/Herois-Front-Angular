import { Component, OnInit } from '@angular/core';
import { HeroisService } from './shared/services/herois.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {

  herois:Heroi[] = [];
  constructor(private heroiService:HeroisService) { }

  ngOnInit() {
    this.heroiService.buscarHerois().subscribe((res)=>{
        this.herois = res;
    });
  }



}

export class Heroi{

  forca: Number;
  id: Number;
  idade: Number;
  nome: string;

  constructor(){}
}