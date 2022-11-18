import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-editarproductos',
  templateUrl: './editarproductos.page.html',
  styleUrls: ['./editarproductos.page.scss'],
})
export class EditarproductosPage implements OnInit {
  producto={};

  constructor(private router: Router) { }

  async Guardar(producto)
  {
    const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=editarProducto&id="+producto.id
    +"&nombre="+producto.nombre
    +"&descripcion="+producto.descripcion
    +"&cantidad="+producto.cantidad
    +"&preciodecosto="+producto.preciodecosto
    +"&preciodeventa="+producto.preciodeventa
    +"&urldeproducto="+producto.urldeproducto
    +"&idusuario="+producto.idusuario);
    const datos=await resultado.json()
    console.log(datos.estatus);
    if(datos.estatus=="Error")
    alert("Algo paso, no se puedo guardar la información!!");
    else
    this.router.navigate(['/productos']);
  
  }
  
  
 async Eliminar(id)
{
  const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=eliminarProducto&id="+id);
  const datos=await resultado.json()
  console.log(datos.estatus);
  if(datos.estatus=="Error")
  alert("Algo paso, no se puedo eliminar la información!!");
  else
  this.router.navigate(['/productos']);
}

  ngOnInit() {
    const routerState=this.router.getCurrentNavigation().extras.state;
    console.log(routerState);
    if(!!routerState.producto.id)
    {
    // this.nombreTienda=routerState.usuario.tienda;
     this.producto=routerState.producto;
    }
    else
    this.router.navigate(['/']);
    
  }

}
