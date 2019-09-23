import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.page.html',
  styleUrls: ['./respuesta.page.scss'],
})
export class RespuestaPage implements OnInit {

  consumiciones: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.consumiciones = "1";
    let param = this.route.snapshot.paramMap.get('consumiciones');
    if(param){
      this.consumiciones = param;
    }
  }

}
