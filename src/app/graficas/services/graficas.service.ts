import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getUsuariosRRSS() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRRSSDonaData() {
    return this.getUsuariosRRSS().pipe(
      delay(1500),
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return {labels, values};
      })
    );
  }
}
