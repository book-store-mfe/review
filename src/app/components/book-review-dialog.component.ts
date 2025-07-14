import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ProfileStateService } from '@bookstore-app/shared-lib';

@Component({
  selector: 'app-book-review-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './book-review-dialog.component.html',
  styleUrl: './book-review-dialog.component.scss'
})
export class BookReviewDialogComponent {
  data: any = inject(MAT_DIALOG_DATA);
  profile = inject(ProfileStateService);

}
