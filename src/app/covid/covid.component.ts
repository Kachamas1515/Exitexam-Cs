import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  statusarr = [];
  patirntsarr = [];
  hospitalsarr = [];
  all = []
  result = []
  count1 = []
  count2: number;
  count3: number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    // status call
    this.httpClient.get('http://localhost:8080/status').subscribe((res: any) => {
      res.forEach(item => {
        this.statusarr.push(item)
      });

      console.log("status", this.statusarr);

    });

    // ptcall
    this.httpClient.get('http://localhost:8080/patirnts').subscribe((res: any) => {
      res.forEach(item => {
        this.patirntsarr.push(item)
      });

      console.log("pt", this.patirntsarr);

      
      for (let i = 0; i < this.all.length; i++) {
        if (this.all[i].hid_pt == "3000") {
          this.result = this.all[i]
          break
        }
      }
      console.log(this.count3)

      this.patirntsarr.sort();
      console.log(this.patirntsarr);


    });

    // hoscall
    this.httpClient.get('http://localhost:8080/hospitals').subscribe((res: any) => {
      res.forEach(item => {
        this.hospitalsarr.push(item)
      });
      console.log("hos", this.hospitalsarr);
      
    });

    


  }


  // Reportcount(){
  //   var num = 0;
  //   for (var i = 0; i < this.patirntsarr.length ; i++){
  //   // this.patirntsarr[i].hid_pt == this.hospitalsarr[i].hid
  //   if(this.patirntsarr[i].hid_pt == 1000){
  //     this.count1 = num+1 ;

  //    } else if (this.patirntsarr[i].hid_pt == 2000){
  //     this.count2 = num+1 ;

  //    } else if (this.patirntsarr[i].hid_pt == 3000){
  //     this.count3 = num+1 ;
  //    } 
  //    console.log(this.count1);
  //    console.log(this.count2);
  //    console.log(this.count3);

  //   }
  // }

}
