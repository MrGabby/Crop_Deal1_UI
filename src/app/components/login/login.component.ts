import { Component, NgModule } from '@angular/core';
import { User } from '../../models/User.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// @NgModule({ imports:[
//   FormsModule]
// })

export class LoginComponent {


  Username: string="";
  password: string="";

  CurrentUser!:User
  constructor( private auth:AuthService, private router:Router){


   }

  onSubmit() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.Username.trim() == "" || this.password.trim() == "") {
      alert("Please Enter All The Details!");
      this.password="";
    }
    else if (!this.Username.trim().match(mailformat)) {
      alert("Please Enter a Valid Email ID!");
      this.password="";
    }
    // else {
    //   console.log(this.Username + " " + this.password);
    //   this.auth.login({Username:this.Username.trim(), password:this.password.trim()}).subscribe({
    //    next: (res)=>{
    //     console.log(res);
    //        alert(res);
    //       //this.auth.setToken(res.token);
    //       // localStorage.setItem("token", res.token);
    //       this.router.navigate(['Users']);
    //     },
    //     error:(error)=>{
    //       alert(error.message);
    //       this.password="";
    //     }
    // });
    // }
    else {
      console.log(this.Username + " " + this.password);
      this.auth.login({Username:this.Username.trim(), password:this.password.trim()}).subscribe(
       {next:(res)=>{
       // console.log(res.token);
         //  alert(res.token);
          this.auth.setToken(res.token);
          localStorage.setItem("token", res.token);
         this.auth.changeUserState(res.payload);
     // console.log(res.payload);
           if(res.role=="Admin"){

          this.router.navigate(['Admin']);}
         else if(res.role=="Farmer"){
this.router.navigate(['Farmer']);
}
else if(res.role=="Dealer"){

  this.router.navigate(['Dealer']);
         }
           else {
            this.router.navigate(['Error']);
           }

        },
        error:(error)=>{

          alert(error.message);
          this.password="";
        }
      });
    }
  }

}
