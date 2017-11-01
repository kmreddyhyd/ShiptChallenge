import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId:module.id,
    selector: 'github',
    templateUrl: 'github.component.html',
    providers:[GithubService]
})
export class GithubComponent { 
    user:any;
    followers:any;
    username:string;
    
    constructor(private _githubService:GithubService){
        console.log('Github Component Init...');   
    }
    
    search(){
        this._githubService.updateUsername(this.username);
        
        this._githubService.getUser().subscribe(user => {
            //console.log(user);
            this.user = user;
        });
        
        this._githubService.getFollowers().subscribe(followers => {
            this.followers = followers;
        });
    }
}