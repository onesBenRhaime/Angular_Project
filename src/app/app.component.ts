import { Component } from '@angular/core';

// @component { format :  Annotaion  , role : decorateur = type de déclaration }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
