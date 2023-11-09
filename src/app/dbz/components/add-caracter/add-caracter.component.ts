import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-caracter',
  templateUrl: './add-caracter.component.html',
  styleUrls: ['./add-caracter.component.css']
})
export class AddCaracterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0};
  }
}