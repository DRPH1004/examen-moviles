import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-editarclientes',
  templateUrl: './editarclientes.page.html',
  styleUrls: ['./editarclientes.page.scss'],
})
export class EditarclientesPage implements OnInit {
  producto={};

  constructor(private router: Router) { }
  
  async Guardar(producto)
  {
    const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=editarCliente&id="+producto.id
    +"&nombre="+producto.nombre
    +"&domicilio="+producto.domicilio
    +"&telefono="+producto.telefono
    +"&correo="+producto.correo    
    +"&urlfoto="+producto.urlfoto
    +"&idusuario="+producto.idusuario);
    const datos=await resultado.json()
    console.log(datos.estatus);
    
    if(datos.estatus=="Error")
    alert("Algo paso, no se puedo guardar la información!!");
    else
    this.router.navigate(['/clientes']);
  
  }
  
  
 async Eliminar(id)
  {
    const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=eliminarCliente&id="+id);
   const datos=await resultado.json()
    console.log(datos.estatus);
    if(datos.estatus=="Error")
    alert("Algo paso, no se puedo eliminar la información!!");
    else
    this.router.navigate(['/clientes']);
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
