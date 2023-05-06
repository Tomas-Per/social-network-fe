import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [AppComponent, ToolbarComponent, HomeComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule,
    AuthModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
