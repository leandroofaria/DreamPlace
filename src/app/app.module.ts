import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { QuartosComponent } from './quartos/quartos.component';
import { PasseiosComponent } from './passeios/passeios.component';
import { PacotesComponent } from './pacotes/pacotes.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { HeadComponent } from './head/head.component';
import { LayoutHomeUsuarioComponent } from './layout-home-usuario/layout-home-usuario.component';
import { MenuHomeUsuarioComponent } from './menu-home-usuario/menu-home-usuario.component';
import { FooterhomeUsuarioComponent } from './footerhome-usuario/footerhome-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ValiarComponent } from './valiar/valiar.component';
import { CancelarreservaComponent } from './cancelarreserva/cancelarreserva.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    CadastroComponent,
    UsuarioComponent,
    HomeUserComponent,
    MenuComponent,
    FooterComponent,
    QuartosComponent,
    PasseiosComponent,
    PacotesComponent,
    FaleConoscoComponent,
    HeadComponent,
    LayoutHomeUsuarioComponent,
    MenuHomeUsuarioComponent,
    FooterhomeUsuarioComponent,
    PerfilComponent,
    ReservaComponent,
    ValiarComponent,
    CancelarreservaComponent,
    
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
