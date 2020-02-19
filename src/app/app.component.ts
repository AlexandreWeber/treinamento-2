import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';
import { PoI18nService } from '@portinari/portinari-ui';
import { BeerService } from './shared/services/beer.service';
import { HttpClient } from '@angular/common/http';
import { CepService } from './shared/services/cep.service';

// FIXME: Colocar em arquivo separado
interface IBeer {
  name: string;
  description: string;
  image_url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name = 'TOTVS';
  inputValue = 'Teste';
  type = 2;
  nameTeste = 'Alexandre';
  showName2 = false;
  orderValue = 12540;
  literals = {};
  beers: Array<IBeer>;
  // usada no exemplo de pipe
  birthday = new Date(1988, 3, 15); // April 15, 1988

  cep: string;
  cepResponse = {};

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

  constructor(private poI18nService: PoI18nService,
              private beerService: BeerService,
              private cepService: CepService) {
    poI18nService.getLiterals()
      .subscribe((literals) => {
        this.literals = literals;
        const teste = this.literals['add'];
        console.log(teste);
      });
  }

  ngOnInit() {
    this.getBeer();
  }

  getBeer() {
    this.beerService.getRandomBeer().subscribe((responseBeer: any) => {
      this.beers = responseBeer;
    });
  }

  getCep(): void {
    this.cepService.getById(this.cep).subscribe((response) => {
        this.cepResponse = response;
    });
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
