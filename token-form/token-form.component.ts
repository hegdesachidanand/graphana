import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-token-form',
  templateUrl: './token-form.component.html',
  styleUrls: ['./token-form.component.css']
})
export class TokenFormComponent implements OnInit {
token ="";
error: string | null = '';
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  validate() {
    console.log(this.authservice.redirectUrl+"  in 1estst if");
    if (this.token.length >= 5) {
      console.log(this.authservice.redirectUrl+"  in 1st if");
      this.authservice.isAuthenticated = true;
        if(this.authservice.redirectUrl !== null){
          console.log(this.authservice.redirectUrl+"    in cheking if");
          this.router.navigate([this.authservice.redirectUrl]);
        }
        else  {
          this.router.navigate(['']);
        }
      } else {
        this.authservice.isAuthenticated = false;
        this.error = "Invalid Token"
      }
    }
}
