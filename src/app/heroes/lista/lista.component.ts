import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Batman', 'Horseman', 'Thor'];
  public deletedHero?: string;

  removeLastHeroe(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
