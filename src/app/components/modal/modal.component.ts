import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { PeriodicElement } from '../table/table.component';
import { Service } from 'src/app/services';
import { TableService } from 'src/app/services/table.service';

@Component({
    selector: 'app-meu-dialogo',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.css'],
})
export class DialogComponent {
    constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
        private service: Service, private tableService: TableService) {
        this.model = { ...this.data }
    }
    @Input() model: PeriodicElement = {} as PeriodicElement

    submitted: boolean = false;

    periodo = ["Manhã", "Tarde", "Noite",];

    close(): void {
        this.dialog.closeAll();
    }

    onSubmit() {
        this.service.edit(this.model)
            .subscribe(() =>
                this.service.getData()
                    .subscribe(data => {
                        this.tableService.updateData(data);
                        this.close()
                    })
            );
    }
}
