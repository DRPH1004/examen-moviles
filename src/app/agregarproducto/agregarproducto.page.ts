import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.page.html',
  styleUrls: ['./agregarproducto.page.scss'],
})
export class AgregarproductoPage implements OnInit {
  producto={};
  idusuario:number;
  constructor(private router: Router) { }
  
  async guardarProducto(producto)
  {
    const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=agregarProducto"
    +"&nombre="+producto.nombre
    +"&descripcion="+producto.descripcion
    +"&cantidad="+producto.cantidad
    +"&preciodecosto="+producto.preciodecosto
    +"&preciodeventa="+producto.preciodeventa
    +"&urldeproducto="+producto.urldeproducto
    +"&idusuario="+this.idusuario);
    const datos=await resultado.json()
    console.log(datos.estatus);
    if(datos.estatus=="Error")
    alert("Algo paso, no se puedo guardar la información!!");
    else
    this.router.navigate(['/productos']);
  
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
