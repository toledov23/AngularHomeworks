import { Component, OnInit } from '@angular/core';
import { ServiceModuleTestService } from 'src/app/services/service-module-test.service';
import { ServiceTestService } from 'src/app/services/service-test.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {
  name: string = '';

  constructor(
    public myService: ServiceTestService,
    public service: ServiceModuleTestService,
    private dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró', result);
      this.name = result;
    });
  }

  ngOnInit(): void {
  }

}
