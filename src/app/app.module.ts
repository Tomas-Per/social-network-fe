import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './modules/post/post.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AuthModule } from './modules/auth/auth.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './shared/home/home.component';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { CommunityModule } from './modules/community/community.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { PostDialogComponent } from './shared/post-dialog/post-dialog.component';
import { CommentDialogComponent } from './shared/comment-dialog/comment-dialog.component';
import { SearchComponent } from './shared/search/search.component';
import { PipesModule } from './core/pipes/pipes.module';
import { CommunityDialogComponent } from './shared/community-dialog/community-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SidenavComponent,
    PostDialogComponent,
    CommentDialogComponent,
    SearchComponent,
    CommunityDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule,
    AuthModule,
    CommunityModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    PipesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
