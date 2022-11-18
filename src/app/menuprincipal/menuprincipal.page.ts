import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
})
export class MenuprincipalPage implements OnInit {

  nombreTienda='';
  idusuario:number;  
  constructor(private router:Router, private route:ActivatedRoute) 
  { }
  iraProductos()
  {
   
    const parametros:NavigationExtras={
      state:{
        usuario:{idusuario:this.idusuario}
      }
    };

    this.router.navigateByUrl('/productos',parametros);

  }
  iraClientes(){
    const parametros:NavigationExtras={
      state:{
        usuario:{idusuario:this.idusuario}
      }
    };

    this.router.navigateByUrl('/clientes',parametros);

  }
  iraVender(){
    const parametros:NavigationExtras={
      state:{
        usuario:{idusuario:this.idusuario}
      }
    };

    this.router.navigateByUrl('/vender',parametros);

  }
  iraReportes(){
    const parametros:NavigationExtras={
      state:{
        usuario:{idusuario:this.idusuario}
      }
    };

    this.router.navigateByUrl('/reportes',parametros);

  }


  ngOnInit() {

   const routerState=this.router.getCurrentNavigation().extras.state;
    console.log(routerState);
    if(!!routerState.usuario.tienda)
    {
     this.nombreTienda=routerState.usuario.tienda;
     this.idusuario=routerState.usuario.idusuario;
    }
    else
    this.router.navigate(['/']);
  }

}
