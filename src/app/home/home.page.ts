import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfis = [];

  constructor() {
    this.perfis = [
      {
        'avatar':'http://img.ibxk.com.br/ns/rexposta/2018/12/28/28144435736741.jpg?watermark=neaki&w=600',
        'nome':'Brunin',
        'idade':18,
        'likes':0
      },
      {
        'avatar':'https://i.ytimg.com/vi/r2t8inao-iE/maxresdefault.jpg',
        'nome':'10/10',
        'idade':15,
        'likes':0
      }
    ]
  }
}
