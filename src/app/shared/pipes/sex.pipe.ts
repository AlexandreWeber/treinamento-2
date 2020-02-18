import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sex'})

export class SexPipe implements PipeTransform {
  // PIPE usado para formatar os valores no app.component.html
  // Não esquecer de adicionar ele no declarations do módulo
  transform(value: any): any {
    if (value === 'M') {
      return 'Masculino'; // FIXME: Traduzir
    }

    if (value === 'F') {
      return 'Feminino'; // FIXME: Traduzir
    }

    return 'Outro'; // FIXME: Traduzir
  }

}
