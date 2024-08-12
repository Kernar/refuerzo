import { Component } from '@angular/core';

@Component({
  selector: 'app-flujo',
  standalone: true,
  imports: [],
  templateUrl: './flujo.component.html',
  styleUrl: './flujo.component.css'
})
export class FlujoComponent {
  esAdmin = true;

  mensaje= "";

  ciudades = [{id:1, nombre:'la paz'},{id:2, nombre:'Santoiago'},{id:3, nombre:'Lima'},{}]

 guardar(){
  this.mensaje = "datos guardados"
 }

}
