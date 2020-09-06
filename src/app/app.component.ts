import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appReady = true;
  public welcomeMessage = 'Welcome. Loading the most popular movies!';
}
