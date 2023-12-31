import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // templateUrl: './app.component.html', // domain
  templateUrl: '../app/temp/temp.component.html',
  // styleUrl: './app.component.css'// domain
  styleUrl: '../app/temp/temp.component.css'
})
export class AppComponent {
  title = 'learn-angular';
}
