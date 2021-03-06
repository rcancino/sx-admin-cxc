import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { TdDataTableColumnComponent } from '@covalent/core/data-table/data-table-column/data-table-column.component';
import { ITdDataTableColumn } from '@covalent/core/data-table/data-table.component';

import { BehaviorSubject ,  Observable } from 'rxjs';
import {tap, catchError, finalize, debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';

import { NotascxcService } from '../../services';

@Component({
  selector: 'sx-facturas-selector',
  templateUrl: './facturas-selector.component.html',
  styles: []
})
export class FacturasSelectorComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    {
      name: 'sucursal.nombre',
      label: 'Sucursal',
      numeric: false,
      nested: true,
      width: 120
    },
    { name: 'tipo', label: 'Tipo', numeric: true, width: 70 },
    { name: 'documento', label: 'Factura', numeric: true, width: 70 },
    {
      name: 'fecha',
      label: 'Fecha',
      width: 100,
      format: date => this.datePipe.transform(date, 'dd/MM/yyyy')
    },
    {
      name: 'total',
      label: 'Total',
      numeric: true,
      format: value => this.currencyPipe.transform(value, 'USD')
    },
    {
      name: 'pagos',
      label: 'Pagos',
      numeric: true,
      format: value => this.currencyPipe.transform(value, 'USD')
    },
    {
      name: 'saldo',
      label: 'Saldo',
      numeric: true,
      format: value => this.currencyPipe.transform(value, 'USD')
    }
  ];

  rows = <any>[];

  selectedRows: any[] = [];

  control = new FormControl();

  procesando = false;

  cliente: any;
  cartera;

  constructor(
    public dialogRef: MatDialogRef<FacturasSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: NotascxcService,
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe
  ) {
    this.cliente = data.cliente;
    this.cartera = data.cartera || 'CRE';
  }

  ngOnInit() {
    this.control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.service
          .buscarFacturasPendientes({
            term: term,
            cliente: this.cliente.id,
            cartera: this.cartera
          }).pipe(
            tap(() => (this.procesando = true)),
            finalize(() => this.procesando = false)
          ))
        ).subscribe(res => (this.rows = res));
  }

  close() {
    this.dialogRef.close('close');
  }
}
