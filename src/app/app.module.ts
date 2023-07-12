import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeroComponent } from './header/hero/hero.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NuestraVisionComponent } from './nuestra-vision/nuestra-vision.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeroComponent,
    ProyectosComponent,
    NuestraVisionComponent,
    QueHacemosComponent,
    QuienesSomosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
