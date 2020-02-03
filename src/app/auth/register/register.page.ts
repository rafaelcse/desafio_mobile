import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(form) {
    this.authService.register(form.value).subscribe((res) => {

      console.log(res);
      this.router.navigateByUrl('home');
    },
      (error) => {
        console.log('oops', error);
        if (error.status) {
          alert(error.error);
        }
      });
  }


}
