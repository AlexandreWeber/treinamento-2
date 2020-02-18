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
  type = 2;
  nameTeste = 'Alexandre';
  showName2 = false;
  orderValue = 12540;

  // usada no exemplo de pipe
  birthday = new Date(1988, 3, 15); // April 15, 1988

  // Essa variável é usado no HTML
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Clientes', action: this.onClick.bind(this) }
  ];

  isShowRed = true;

  showName = false;
  // Esse array é utilizado no *ngFor
  customerList = [
    {
      name: 'TOTVS',
      orders: [{ code: 1, value: 10 }, { code: 2, value: 20 }]
    },
    {
      name: 'Netflix',
      orders: [{ code: 100, value: 1000 }, { code: 200, value: 2000 }]
    }
  ];

  literals = {
    buttonLabel: 'Clique Aqui!!!', // Essa variavel é usada o HTML para mostrar a label do botão
    inputLabel: 'Two-Way'
  }



  private onClick() {
    alert('Clicked in menu item')
  }

  // Essa função está no botão do HTML
  changeName() {
    this.name = `${this.name} Alterado`;
  }

  changeTwoWay() {
    this.inputValue = 'Alterado no TS';
  }


  canShowName() {
    return true;
  }
}
