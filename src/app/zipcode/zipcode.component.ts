import { Component, OnInit } from '@angular/core';
import { CepService } from '../shared/services/cep.service';
import { PoNotificationService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  cep: string;
  cepResponse = {};

  users = [
    { name: 'Alexandre', lastDate: new Date() },
    { name: 'Maria', lastDate: new Date() },
  ];

  constructor(private cepService: CepService,
              private poNotification: PoNotificationService) { }

  ngOnInit() { }

  getCep(): void {
    this.cepService.getById(this.cep).subscribe((response) => {
      this.cepResponse = response;
    });
  }

  navigateToCep(userName: string) {
    this.poNotification.information(`O usuário ${userName} quer pesquisar um CEP`)
  }


}
