import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class TransRptDateRangService {
    transUrl = "http://52.200.58.63:8113/payment/report/getReportByDate";
    byMrnUrl = "http://52.200.58.63:8113/payment/report/getReportByMrn";

    constructor(private http: HttpClient) {}

    trnsRptByDteRange(dateDate:any) {
      console.log("trnsRptByDteRange");
      console.log(dateDate);
      return this.http.post(this.transUrl,dateDate);
    }

    byPatientMrn(byMrn:any){
      return this.http.post(this.byMrnUrl,byMrn);
    }
}
