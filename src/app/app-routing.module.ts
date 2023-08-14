import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path: 'layout', component: LayoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
