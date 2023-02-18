import { Component } from '@angular/core';
import { __values } from 'tslib';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {


nuevo: Personaje={
  nombre: 'Maestro Roshi',
  poder: 1000
}

constructor(){ //Inyección de dependencias

}
 
}
