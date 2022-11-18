import { Component } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre='';
  contrasena='';
  constructor(private router: Router, private alertController: AlertController) {}

   async Entrar()
  {
    //realizar llamada a la API
   const resultado=await fetch("https://aplicacionesmoviles2022.000webhostapp.com/apis.php?nombre="+
   this.nombre+"&contrasena="+this.contrasena+"&comando=login")
   const  datos=await resultado.json()
//Hay datos
   if(datos.records.length>0)
   {
    const parametros:NavigationExtras={
      state:{
        usuario:{idusuario:datos.records[0].id,
          tienda:datos.records[0].tienda}
      }
    };

    this.router.navigateByUrl('/menuprincipal',parametros);
   }
   else  //No hay datos
   {
    const alert = await this.alertController.create({
      header: 'Usuarios',
      message:'Usuario no encontrado!!',
      buttons: [

        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
           // this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();
   }
    

  }

}
