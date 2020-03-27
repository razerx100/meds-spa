import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private breakpoint_observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  is_handset: Observable<BreakpointState> = this.breakpoint_observer.observe(Breakpoints.Handset);
}
