import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  consumiciones: number;

  constructor(
    private router: Router
  ) {}

  ngOnInit(){
    this.consumiciones = 1;
  }

  consumir(){
    this.router.navigateByUrl("/respuesta/"+this.consumiciones);
  }

}
