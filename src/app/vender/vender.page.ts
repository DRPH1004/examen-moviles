import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';
import { ProductosPage } from '../productos/productos.page';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.page.html',
  styleUrls: ['./vender.page.scss'],
})

export class VenderPage implements OnInit {
  registros=[];
  registros2=[];

  idusuario=0;
  cantidades=0;
  

  constructor(private router: Router) { }

  ngOnInit() {
    
    const routerState=this.router.getCurrentNavigation().extras.state;
    console.log(routerState);
    if(!!routerState.usuario.idusuario)
    {
    // this.nombreTienda=routerState.usuario.tienda;
     this.idusuario=routerState.usuario.idusuario;

    }
    else
    this.router.navigate(['/']);
  }

  async ionViewWillEnter() {
      
    //cargar el listado de productos
      const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=clientes&id="+this.idusuario)
      this.registros=await resultado.json()
      console.log(this.registros);
      
      const resultado2=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=productos&id="+this.idusuario)
      this.registros2=await resultado2.json()
      console.log(this.registros2);

      //this.cantidades=this.registros2.


  }
  

}
