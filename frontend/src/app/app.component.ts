import { Component,OnInit } from '@angular/core';
import { UserService } from './user.service';
import {Userclass}from './userclass';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router , private userService:UserService ){}
  ngOnInit(){}
  title = 'app';
  newUser(event:any){
    event.preventDefault();
    this.userService.setter(new Userclass());
    this.router.navigate(['/create-update']);
  }
}
