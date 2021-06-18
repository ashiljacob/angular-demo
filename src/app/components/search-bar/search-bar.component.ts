import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cowin } from 'src/app/interface/Cowin';
import { APIResponse } from 'src/app/models';
import { SearchService } from './SearchService';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {



  constructor(private router:Router ,private service: SearchService) { }

  ngOnInit(): void {
  }
  // onSubmit(form:NgForm){
  //   console.log("Form Sended ",form.value);
  //   this.service
  //   .searchVaccineSlotByPin(form.value)
  //   .subscribe((pinListN: APIResponse<Cowin>)=> {
  //           console.log(pinListN.sessions[0].slots);
  //     });
  // }

}
