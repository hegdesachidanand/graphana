import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MetricsDataService } from '../services/metrics-data.service';

@Component({
  selector: 'app-edit-metricsform',
  templateUrl: './edit-metricsform.component.html',
  styleUrls: ['./edit-metricsform.component.css']
})
export class EditMetricsformComponent implements OnInit {
  metrics$: Observable<any> = new Observable<any>();
  status: boolean = false;
  metricsForm: FormGroup;
  constructor(private authService: AuthService,
    private router: Router,
    private metricsService:MetricsDataService,
    private activatedRoute: ActivatedRoute) {
    this.metricsForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      cols: new FormControl('1', []),
      rows: new FormControl('1', []),
      id: new FormControl('', [])
    });
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id') ?? 0;
      console.log(id);
      this.metricsService.getMetrics(+id).subscribe(data => {
        this.metricsForm.setValue(data);
        
      })
    })
  }
 saveMetrics() {
    const metricsData = this.metricsForm.value;
    this.status=true;
    this.metricsService.updateMetrics(metricsData).subscribe(() => {
      this.router.navigate(['']);
    });
  }
  canDeactivate() {
    return this.status;
  }
}
