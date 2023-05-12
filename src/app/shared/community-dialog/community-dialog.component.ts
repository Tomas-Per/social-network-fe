import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommunityService } from 'src/app/core/services/community.service';

@Component({
  selector: 'app-community-dialog',
  templateUrl: './community-dialog.component.html',
  styleUrls: ['./community-dialog.component.scss'],
})
export class CommunityDialogComponent {
  name: string = '';
  description: string = '';

  constructor(
    private dialogRef: MatDialogRef<CommunityDialogComponent>,
    private communityService: CommunityService,
    @Inject(MAT_DIALOG_DATA)
    public data: { created_by: number; updated_by: number }
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  createCommunity() {
    this.communityService
      .createCommunity({
        name: this.name,
        description: this.description,
        created_by: this.data.created_by,
        updated_by: this.data.updated_by,
      })
      .subscribe((response) => {
        this.dialogRef.close();
        window.location.reload();
      });
  }
}
