import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JogosComponent } from './views/jogos/jogos.component';
import { BannerComponent } from './views/jogos/banner/banner.component';
import { DestaqueComponent } from './views/jogos/destaque/destaque.component';
import { NovidadesComponent } from './views/jogos/novidades/novidades.component';

@NgModule({
  declarations: [
    AppComponent,
    JogosComponent,
    BannerComponent,
    DestaqueComponent,
    NovidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
