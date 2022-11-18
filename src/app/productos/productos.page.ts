import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
   registros=[];
   idusuario=0;
  constructor(private router: Router) { }

  ngOnInit(): void {
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
    const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?comando=productos&id="+this.idusuario)
    this.registros=await resultado.json()
    console.log(this.registros);
  }

  agregarProducto()
  {
    const parametros:NavigationExtras={
      state:{usuario:{idusuario:this.idusuario}
      }
    };

    this.router.navigateByUrl('/agregarproducto',parametros);
  }

  Editar(producto){
   //alert("Id="+producto.id);
  
   const parametros:NavigationExtras={
    state:{
      producto:producto
    }
  };

  this.router.navigateByUrl('/editarproductos',parametros);
  
}

}
