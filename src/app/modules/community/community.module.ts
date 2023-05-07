import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityListComponent } from './community-list/community-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommunityComponent } from './community/community.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  declarations: [CommunityListComponent, CommunityComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    PipesModule,
  ],
  providers: [],
})
export class CommunityModule {}
