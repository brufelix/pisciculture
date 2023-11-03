import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Service } from 'src/app/services';
import { DialogComponent } from '../modal/modal.component';
import { TableService } from 'src/app/services/table.service';

export interface PeriodicElement {
    tem: string;
    ph: number;
    qtdracao: number;
    data: string;
    periodo: string;
    editando: boolean
    id?: number
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'app-table',
    styleUrls: ['table.component.css'],
    templateUrl: 'table.component.html',
    standalone: true,
    imports: [MatTableModule, MatIconModule, FormsModule, CommonModule],
})
export class Table implements OnInit {
    displayedColumns: string[] = ['tem', 'ph', 'qtdracao', 'periodo', 'data', "actions"];
    dataSource: any[] = [];

    constructor(private service: Service, public dialog: MatDialog, private tableService: TableService) {
        this.dataSource = this.tableService.getTableData();
    }

    updateData() {
        this.service.getData().subscribe(data => {
            this.tableService.updateData(data);

            this.dataSource = this.tableService.getTableData()
        });
    }

    ngOnInit(): void {
        this.updateData()
    }

    remove(id: string) {
        this.service.remove(id)
            .subscribe(() => {
                this.service.getData()
                    .subscribe(data => {
                        this.dataSource = data;
                        console.log(this.dataSource)
                    });
            });

        return;
    }

    edit(data: PeriodicElement) {
        const dialogRef = this.dialog.open(DialogComponent, { data });

        dialogRef.afterClosed()
            .subscribe(() => {
                this.service.getData()
                    .subscribe(data => {
                        this.dataSource = data;
                        console.log(this.dataSource)
                    });
            });
    }
}
