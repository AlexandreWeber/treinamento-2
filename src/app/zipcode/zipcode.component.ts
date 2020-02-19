import { Component, OnInit } from '@angular/core';
import { CepService } from '../shared/services/cep.service';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  cep: string;
  cepResponse = {};

  constructor(private cepService: CepService) { }

  ngOnInit() { }

  getCep(): void {
    this.cepService.getById(this.cep).subscribe((response) => {
        this.cepResponse = response;
    });
  }


}
