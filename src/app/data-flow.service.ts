import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {

  constructor(private router: Router,
           //   private companyServiceService: CompanyServiceService
  ) { }

  private data;

  setData(data) {
    this.data = data;
    console.log('this is movie', this.data);
  }

  getData() {
    const temp = this.data;
    this.clearData();
    return temp;
  }

  clearData() {
    this.data = undefined;
  }
}
