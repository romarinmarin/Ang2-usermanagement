import { Component } from "angular2/core";
import {NavbarComponent} from './navbar/navbar.component'
import{RouteConfig} from 'angular2/router'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {HomeComponent} from './home/home.component'
import {UsersComponent} from './users/users.component'
import {PostsComponent} from './posts/posts.component'

@RouteConfig([
  {path: '/', name:'Home', component : HomeComponent, useAsDefault : true},
  {path: '/users', name:'Users', component : UsersComponent},
  {path: '/posts', name:'Posts', component : PostsComponent},


])

@Component({
  selector: "ng2-app",
  template: `
          <div class="container">
            <my-navbar></my-navbar>
            <router-outlet></router-outlet>
          </div>

           <div *ngIf="isLoading">
                <i class="fa fa-spinner fa-spin fa-3x"></i>
           </div>

  `,
  styles: [`

    `],
  directives:[NavbarComponent, HomeComponent, ROUTER_DIRECTIVES],

})

export class RootComponent {

  isLoading = true;

}
