import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Metrics } from '../metrics';
import { MetricsDataService } from '../services/metrics-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards: Array<Metrics> =[];
  constructor(private metricsService: MetricsDataService) {}

  ngOnInit() {
    this.metricsService.get().subscribe(data => {
      this.cards = data;
      console.log(this.cards);
    })
  }

  editMetrics(cardId: number) {
    
  }

}
