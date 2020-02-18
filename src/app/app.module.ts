import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { SexPipe } from './shared/pipes/sex.pipe';

@NgModule({
  // Aqui nos declarations serão incluidos os componentes, pipes e diretivas
  declarations: [
    AppComponent,
    SexPipe
  ],
  // Aqui nos imports vamos informar os módulos que devem ser importados
  imports: [
    AppRoutingModule,
    BrowserModule,
    PoModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  // Aqui nos providers vamos informar os serviços que farão parte dos módulos
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
