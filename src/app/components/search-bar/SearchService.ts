import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cowin } from "src/app/interface/Cowin";
import { APIResponse } from "src/app/models";

@Injectable()
export class SearchService{

    constructor(private http: HttpClient) { }


    searchVaccineSlotByPin(pin : string): Observable<APIResponse<Cowin>>{
        console.log(pin.search);
        const url_new = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin.search}&date=11-06-2021`;
        console.log(url_new)
        return this.http.get<APIResponse<Cowin>>(url_new);
}
}