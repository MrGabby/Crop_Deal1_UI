import { Component, OnInit } from '@angular/core';
import { User } from './models/User.model';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {


 islogin: boolean = false;
 flag:any
CurrentUser!:User
Admin:'Admin'
Dealer:'Dealer'
Farmer:'Farmer'
currentvalue:any
 constructor(private uservice:UsersService,private auth:AuthService) {
  this.auth.getCurrentUser().subscribe({next:(user)=>{
    this.CurrentUser = user
    console.log(this.CurrentUser)
  }
 });
 }

  ngOnInit(): void {
this.checkstorage();

this.uservice.GetUserByToken().subscribe({next:(user)=>{
/*   this.CurrentUser = user
console.log(this.CurrentUser.roles); */
this.auth.changeUserState(user);

  }});
  }
  title = 'Crop_deal1';

  checkstorage(){
    this.flag =localStorage.getItem('token');
    if(this.flag!=null){
      this.islogin =true;
    }
  }

  logout(){
    localStorage.clear();
    this.islogin=false;
  }



}
