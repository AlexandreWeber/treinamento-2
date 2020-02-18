import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'TOTVS';
  inputValue = 'Teste';

  literals = {
    buttonLabel: 'Clique Aqui!!!',
    inputLabel: 'Two-Way'
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  changeName() {
    this.name = `${this.name} Alterado`;
  }

  changeTwoWay() {
    this.inputValue = 'Alterado no TS';
  }

}
