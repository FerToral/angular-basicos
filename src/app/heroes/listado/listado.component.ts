import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'CapianAmerica', 'Hulk'];
  heroeBorrado: string = '';

  borrarHeroe(){
    // this.heroes.pop();

    // const heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado);

    this.heroeBorrado = this.heroes.shift() || '';

  }
  

 
  
}
