 import { Component, OnInit } from '@angular/core';
//  import { Store } from '@ngrx/store'
//  import { AppState } from '../app.reducer';
//  import * as actions from '../filtro/filtro.actions';


 @Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   //iltroActual: actions.filtrosValidos = 'todos'

  constructor() { }

  ngOnInit(): void {
   //   this.store.select('filtro').subscribe(filtro => {      
   //    this.filtroActual = filtro
   //   })
  }

}
