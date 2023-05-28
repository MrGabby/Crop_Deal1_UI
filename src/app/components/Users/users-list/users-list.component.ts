import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UsersService } from '../../../services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

Users: User[] = [];
currentUser: User;

  constructor(private usersService:UsersService,private auth:AuthService) { }
  ngOnInit() {

  this.usersService.getallusers().subscribe({ next :(users)=> {
    this.Users = users;

 this.auth.getCurrentUser().subscribe({next:(user)=>{
 this.currentUser = user
  console.log(user);
}
});

  },
  error:(response)=> {
    console.log(response);}

  })
}
}
