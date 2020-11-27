import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { ToastrService } from 'ngx-toastr';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  user: SocialUser;
  loggedIn: boolean;

  constructor(public dialog: MatDialog,private authService: SocialAuthService,private toastr: ToastrService) { }

  openDialog() {
    const dialogRef = this.dialog.open(UserprofileComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: true
      //  hasBackdrop: true

    });

    dialogRef.afterClosed().subscribe(result => {


    });
  }



  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
   // this.loggedIn=false;
  //  localStorage.removeItem("user");
    this.toastr.success('Sign Out', 'Success');
   // console.log(this.loggedIn)
  }


  ngOnInit(): void {
 
    //  this.user=JSON.parse(localStorage.getItem("user"));

    this.authService.authState.subscribe((user) => {
      this.user = user;
    //  localStorage.setItem("user",JSON.stringify(this.user));
      this.loggedIn = (this.user!=null);
    });
  }

  popUp(){
    this.toastr.success('Message', 'Success');
    }

}