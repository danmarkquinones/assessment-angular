import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  @Input() user;
  editMode = false
  users:User[]
  objIndex;

  ngOnInit() {
    this.userService.fetchData().subscribe(
      data => {this.users = data;}
    )
    
  }

  onEdit(user:User){
    this.userService.populateForm(user)
  }


  onUserAdded(userData:User){
    this.users.push({
      id:userData.id,
      name:userData.name,
      username:userData.username,
      email:userData.email,
    })
    console.log(this.users)
  }

  onUserUpdated(userData:User){

    this.objIndex = this.users.findIndex(
      (obj => obj.id == userData.id)
    )

    
    console.log(this.users[this.objIndex].name)
    console.log(userData.name)
    this.users[this.objIndex].name = userData.name,
    this.users[this.objIndex].username = userData.username,
    this.users[this.objIndex].email = userData.email
  
    // console.log('before' users[this.objIndex])
  }

  onDelete(user:User){
    if(confirm("Are you sure you want to delete this user?")){
      this.userService.deleteUser(user).subscribe(
        ()=>{
          console.log(this.users.length)
          this.users.forEach(
            (cur,index)=>{
              if(user.id === cur.id){
                this.users.splice(index,1)
              }
            }
          )
        }
      )
    }
    
  }

}
