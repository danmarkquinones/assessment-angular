import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm=this.userService.userForm
  user;

  @Output() userCreated: EventEmitter<User> = new EventEmitter();
  @Output() userUpdated: EventEmitter<User> = new EventEmitter();
  @Input() edit 
  
  constructor(private userService:UserService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    if(this.userForm.get('id').value == null){
      this.userService.addUser(this.userForm.value).subscribe(
        user => {
          this.user = user
          // console.log(user),
          this.userCreated.emit(this.user)
        })
    }else{
      this.userService.editUser(this.userForm.value).subscribe(
        user =>{
          this.user = user
          this.userUpdated.emit(this.user)
          console.log(user)
        }
      )
    }
  this.userForm.reset()
  }
}
