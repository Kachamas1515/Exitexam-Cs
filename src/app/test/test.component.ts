import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  statusarr = [];
  patirntsarr = [];
  hospitalsarr = [];


  constructor(private httpClient: HttpClient ) { }

  ngOnInit()  {
    this.httpClient.get('http://localhost:8080/status').subscribe((res: any) => {
      this.statusarr = res;
      console.log("status",this.statusarr);
    //   if(this.stu == this.studentarr[0].id){
    //     this.nth = this.studentarr[0].name_th 
    //     this.nen = this.studentarr[0].name_en
    //     this.surth = this.studentarr[0].surname_th 
    //     this.suren = this.studentarr[0].surname_en
    //     this.fac = this.studentarr[0].faculty
    // }
    });

this.httpClient.get('http://localhost:8080/patirnts').subscribe((res: any) => {
  this.patirntsarr = res;
  console.log("pt",this.patirntsarr);
//   if(this.stu == this.studentarr[0].id){
//     this.nth = this.studentarr[0].name_th 
//     this.nen = this.studentarr[0].name_en
//     this.surth = this.studentarr[0].surname_th 
//     this.suren = this.studentarr[0].surname_en
//     this.fac = this.studentarr[0].faculty
// }
});

this.httpClient.get('http://localhost:8080/hospitals').subscribe((res: any) => {
  this.hospitalsarr = res;
  console.log("hospitals",this.hospitalsarr);
//   if(this.stu == this.studentarr[0].id){
//     this.nth = this.studentarr[0].name_th 
//     this.nen = this.studentarr[0].name_en
//     this.surth = this.studentarr[0].surname_th 
//     this.suren = this.studentarr[0].surname_en
//     this.fac = this.studentarr[0].faculty
// }
});

}

}
