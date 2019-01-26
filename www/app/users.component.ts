import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {UsersService} from './users.service';

@Component({
    selector:'users',
    templateUrl:'app/users.component.html',
    providers: [UsersService],
    directives:[ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit{
    users;
    constructor(private _usersService: UsersService){
    }
    ngOnInit(){
        this._usersService.getUsers().subscribe(res => this.users = res);
    }
    deleteUser(user){
        if (confirm("Are you sure you want to delete this user? " + user.name)){
            var index = this.users.indexOf(user);
            this.users.splice(index,1);
            this._usersService.deleteUser(user.id)
            .subscribe(null,
                       error => {
                           alert("Could not delete the user")
                           this.users.splice(index,0,user);
                       })
        }
    }
}
