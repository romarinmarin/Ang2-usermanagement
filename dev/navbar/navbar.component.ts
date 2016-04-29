import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'


@Component({
    selector:'my-navbar',
    templateUrl: 'dev/navbar/navbar.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class NavbarComponent {

    constructor(private _router : Router){}

    isCurrentRoute(route) {
        var instruction =  this._router.generate(route);
         return this._router.isRouteActive(instruction);
    }

}