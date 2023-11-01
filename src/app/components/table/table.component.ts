import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Service } from 'src/app/services';

export interface PeriodicElement {
    tem: string;
    ph: number;
    qtdracao: number;
    data: string;
    periodo: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//     { ph: 1, tem: '12', qtdracao: 1.0079, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 2, tem: '16', qtdracao: 4.0026, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 3, tem: '12', qtdracao: 6.941, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 4, tem: '144', qtdracao: 9.0122, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 5, tem: '23', qtdracao: 10.811, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 6, tem: '412', qtdracao: 12.0107, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 7, tem: '12', qtdracao: 14.0067, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 8, tem: '43', qtdracao: 15.9994, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 9, tem: '23', qtdracao: 18.9984, data: '25/12/2025', periodo: "Manhã" },
//     { ph: 10, tem: '20', qtdracao: 20.1797, data: '25/12/2025', periodo: "Manhã" },
// ];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'app-table',
    styleUrls: ['table.component.css'],
    templateUrl: 'table.component.html',
    standalone: true,
    imports: [MatTableModule],
})
export class Table implements OnInit {
    constructor(private service: Service) { }

    displayedColumns: string[] = ['tem', 'ph', 'qtdracao', 'periodo', 'data'];
    dataSource = [];

    ngOnInit(): void {
        this.service.getData().subscribe(data => {
            this.dataSource = data;
        });
    }
}
