import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import{Userclass}from '../../userclass';
import{Router}from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
private users:Userclass[];
  constructor(private _userService:UserService,private router:Router) { }

  ngOnInit() {
this.readUser();
  }
readUser(){
  this._userService.readUser().subscribe(
    data=>{
      console.log(data);
      this.users=data['msg'];
    },
    error=>{
      console.log(error);
    }
  )
}
doUpdate(user){
  this._userService.setter(user);
  this.router.navigate(['/create-update']);
}
doDelete(user){
  this._userService.deleteUser(user._id).subscribe(
    data=>{
      this.users.splice(this.users.indexOf(user),1);
    },
    error=>{

    }
  )

}
}
