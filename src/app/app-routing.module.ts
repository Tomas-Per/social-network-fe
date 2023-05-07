import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { PostListComponent } from './modules/post/post-list/post-list.component';
import { CommunityListComponent } from './modules/community/community-list/community-list.component';
import { CommunityComponent } from './modules/community/community/community.component';
import { PostPageComponent } from './modules/post/post-page/post-page.component';
import { SearchComponent } from './shared/search/search.component';

const routes: Routes = [
  // { path: '', redirectTo: '/' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostPageComponent },
  { path: 'communities', component: CommunityListComponent },
  { path: 'community/:id', component: CommunityComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
