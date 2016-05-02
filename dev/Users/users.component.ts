import {Component} from 'angular2/core';
import 'rxjs/add/operator/map'
import {UserService} from './user.service'
import {OnInit} from 'angular2/core'


@Component({
    templateUrl:'dev/users/users.component.html',

    providers: [UserService]
})
export class UsersComponent implements OnInit {


    users;

    constructor(private _userService:UserService) {
    }

    ngOnInit() {

        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }
}