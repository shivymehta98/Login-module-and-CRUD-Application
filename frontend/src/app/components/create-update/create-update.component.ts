import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import{Userclass}from '../../userclass';
import{Router}from '@angular/router';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
      private userclass:Userclass;
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.userclass=this.userService.getter();
  }
createOrUpdate(){
if(this.userclass._id==undefined){
  this.userService.createUser(this.userclass).subscribe(
    data=>{
      console.log(data);
      this.router.navigate(['/list']);
    },
    error=>{
      console.log(error);
    }
  )
}else{
  this.userService.updateUser(this.userclass).subscribe(
    data=>{
      console.log(data);
      this.router.navigate(['/list']);
    },
    error=>{
      console.log(error);
    }
  )

}
}
}
