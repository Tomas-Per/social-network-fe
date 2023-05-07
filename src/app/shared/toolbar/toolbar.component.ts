import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(
    public authService: AuthService,
    private searchService: SearchService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  search(searchTerm: string) {
    if (searchTerm !== '' && searchTerm !== null) {
      this.searchService.search(searchTerm);
      this.router.navigate(['/search']);
    }
  }
}
