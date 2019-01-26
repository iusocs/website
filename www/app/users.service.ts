import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private url = 'https://jsonplaceholder.typicode.com/users';
    constructor(private _http: Http){

    }
    getUsers(){
        return this._http.get(this.url).map(res => res.json())
    }
    getUser(id){
        return this._http.get(this.url + '/' + id).map(res=> res.json())//.find(res => res.id == id)
    }
    updateUser(id,userdata){
        return this._http.put(this.url + '/' + id, JSON.stringify(userdata)).map(res => res.json())
    }
    postUser(userdata){
        return this._http.post(this.url, JSON.stringify(userdata)).map(res => res.json())
    }
    deleteUser(id){
        return this._http.delete(this.url + '/' + id).map(res=> res.json())
    }
}
