import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Metrics } from '../metrics';

@Injectable({
  providedIn: 'root'
})
export class MetricsDataService {

  constructor(private httpclient:HttpClient) { }
  add(metricsData: Metrics): Observable<Metrics>{
    return this.httpclient.post<Metrics>('http://localhost:3000/metrics',metricsData);

  }
  get(): Observable<Array<Metrics>> {
    return this.httpclient.get<Array<Metrics>>('http://localhost:3000/metrics')
  }
  updateMetrics(metricsData: Metrics): Observable<Metrics>{
    return this.httpclient.put<Metrics>(`${'http://localhost:3000/metrics'}/${metricsData.id}`,metricsData);

  }
  getMetrics(id:number): Observable<Metrics>{
    return this.httpclient.get<Metrics>(`${'http://localhost:3000/metrics'}/${id}`);

  }
}
