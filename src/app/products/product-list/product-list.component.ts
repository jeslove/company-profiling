import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DataServicesService } from 'src/app/data-services.service';

import {Profiling} from '../../profiling';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product!: Profiling[];

  constructor(private dataBox: DataServicesService) { }

  dataFile: any;

  ngOnInit(): void
  {
    Aos.init();

    this.dataFile = this.dataBox.peoductData;
  }
}
