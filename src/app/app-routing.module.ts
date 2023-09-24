import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LayoutHomeUsuarioComponent } from './layout-home-usuario/layout-home-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ValiarComponent } from './valiar/valiar.component';
import { CancelarreservaComponent } from './cancelarreserva/cancelarreserva.component';


const routes: Routes = [
  {path: 'layout', component: LayoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'layout-home-usuario', component: LayoutHomeUsuarioComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'avaliar', component: ValiarComponent},
  {path: 'cancelarReserva', component: CancelarreservaComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
