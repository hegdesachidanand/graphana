import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CanComponentDeactivate } from '../services/authdeactivate.guard';
import { MetricsDataService } from '../services/metrics-data.service';

@Component({
  selector: 'app-metrics-form',
  templateUrl: './metrics-form.component.html',
  styleUrls: ['./metrics-form.component.css']
})
export class MetricsFormComponent implements OnInit,CanComponentDeactivate {
  metricsForm: FormGroup;
  status: boolean = false;
  constructor(private authservice:AuthService,private router:Router,private metricsdata:MetricsDataService) {
    this.metricsForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      columns: new FormControl('1', []),
      rows: new FormControl('1', []),
    });
   }

  ngOnInit(): void {
  }
  saveMetricsdata(){
  
   const metricsdatas=this.metricsForm.value;
    console.log(metricsdatas);
    this.status=true;
    this.metricsdata.add(metricsdatas).subscribe(()=>{
      this.router.navigate(['']);
    });
  }
  canDeactivate() {
    return this.status;
  }
}
