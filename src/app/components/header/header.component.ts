import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public loggedInuser: any = "";

  constructor(private service: AuthService) { }
  ngOnInit(): void {
    console.log(this.service.getToken());
    this.loggedInuser = this.service.getToken();
  }
  
  logout(): void {
    this.service.logout();
  }
}
