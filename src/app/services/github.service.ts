import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'kmreddyhyd';
    private client_id = '431d6af639113eba8ca4';
    private client_secret='2f2b1edc3fe735c1d4acfa54abced2100ff59d2f';
    
    constructor(private _http:Http){
        console.log('Github Service Init...');
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getFollowers(){
        return this._http.get('https://api.github.com/users/'+this.username+'/followers?per_page=100?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}