import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchMenuComponent } from './search-menu/search-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crisis-management-app';
  display = false;

  constructor(public dialog: MatDialog) { }

  displaySearchBox(): void {
    const dialogRef = this.dialog.open(SearchMenuComponent, {
      width: '600px',
      height: '600px',
      data: { name: "Veena", animal: "MAttt" },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
