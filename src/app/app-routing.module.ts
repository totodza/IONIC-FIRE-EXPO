import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate, Router } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import {NologinGuard} from "./guards/nologin.guard"



const routes: Routes = [
  {
  path: 'home',loadChildren:  './home/home.module#HomePageModule',canActivate:[AuthGuard]},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'login',loadChildren: './componetes/login/login.module#LoginPageModule',canActivate:[NologinGuard]},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
