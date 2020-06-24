import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  username: string;
  constructor() { }

  ngOnInit(): void {
  }

  logged_user(): boolean {
    if(sessionStorage.getItem('user')){
      this.get_user();
      return true;
    }
    else{
      return false;
    }
  }

  logout_user(): void {
    sessionStorage.removeItem('user');
  }

  get_user(): void {
    if(document.cookie){
      const data = document.cookie.split("=")
      if(data[0] == "current_user"){
        this.username = data[1];
      }
    }
  }
}
