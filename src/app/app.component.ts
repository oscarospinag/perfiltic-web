import {Component} from '@angular/core';
import {LoginService} from './services/login.service';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService: LoginService) {
  }

  user: User = new User();

  login() {
    this.loginService.login(this.user).subscribe(data => {
      console.log(data);
    });
  }
}
