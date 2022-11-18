import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-agregarclientes',
  templateUrl: './agregarclientes.page.html',
  styleUrls: ['./agregarclientes.page.scss'],
})
export class AgregarclientesPage implements OnInit {
  producto={};
  idusuario:number;
  constructor(private router: Router) { }


  async guardarProducto(producto){
    const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=gregarCliente"
    +"&nombre="+producto.nombre
    +"&domicilio="+producto.domicilio
    +"&telefono="+producto.telefono
    +"&correo="+producto.correo    
    +"&urlfoto="+producto.urlfoto
    +"&idusuario="+this.idusuario);
    const datos=await resultado.json()
    console.log(datos.estatus);

    if(datos.estatus=="Error"){

    alert("Algo paso, no se puedo guardar la información!!");}

    else
    this.router.navigate(['/clientes']);
  }

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

}
