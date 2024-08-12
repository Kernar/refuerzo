import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demos/demo/demo.component';
import { FlujoComponent } from './controles/flujo/flujo.component';
import { PropiedadesComponent } from './controles/propiedades/propiedades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, FlujoComponent, PropiedadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'refuerzo';
}
