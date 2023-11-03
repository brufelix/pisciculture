// tabela.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PeriodicElement } from '../components/table/table.component';
import { Service } from '.';

@Injectable({
    providedIn: 'root'
})
export class TableService {
    private tableData: any = [];

    getTableData() {
        return this.tableData;
    }

    updateData(newData: any[]) {
        this.tableData = newData;
    }
}
