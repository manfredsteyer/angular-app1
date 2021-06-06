import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @Input() message: string;
  // @Output() clicked = new EventEmitter<string>();

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  showMessage(){
    // alert(this.message);
  }

  // constructor(private router: Router) { }

  // ngOnInit(): void {
  //   this.router.navigateByUrl(location.pathname.substr(1));
  //   window.addEventListener('popstate', () => {
  //     this.router.navigateByUrl(location.pathname.substr(1));
  //   });
  // }
}
