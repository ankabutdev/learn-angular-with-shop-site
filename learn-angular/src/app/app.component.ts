import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html', // domain
  // templateUrl: '../app/temp/temp.component.html',
  styleUrl: './app.component.css'// domain
  // styleUrl: '../app/temp/temp.component.css',
})
export class AppComponent {
  title = 'learn-angular';
  toggleUserMenu() {
     var userMenu = document.getElementById('user-menu') as HTMLElement;
     if (userMenu.classList.contains('hidden')) {
        userMenu.classList.remove('hidden');
     } else {
        userMenu.classList.add('hidden');
     }
  }
}
