import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  user: User={
    userid: '',
    name: '',
    contact: '',
    email_id: '',
    address: '',
    roles: '',
    password: '',
    is_subscribe: false
  }

  constructor(private route: ActivatedRoute,private service:UsersService,private router:Router) {}

    ngOnInit(): void {
     this.route.paramMap.subscribe({next: params => {
      const id = params.get('id');

      if(id){
        this.service.getuser(id).subscribe({ next: (response) => {
          this.user =response;
        }
      });

     }}});

    }
  UpdateUser() {
     this.service.UpdateUser(this.user.userid,this.user).subscribe({next:(response)=>{
      this.router.navigate(['Users']);
     }})
  }

deleteUser(id:number):void {
 this.service.DeleteUser(id).subscribe({next: (response)=>{
  this.router.navigate(['Users']);
 }});

}
  }


