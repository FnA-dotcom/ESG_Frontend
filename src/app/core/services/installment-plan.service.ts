import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstallmentPlanService {

  url = 'http://52.200.58.63:8113/payment/collectPayment/createInstallments';

  constructor(private http: HttpClient) { }

  saveInstallmentPlan(data: any) {
    return this.http.post(this.url, data);
  }
}
