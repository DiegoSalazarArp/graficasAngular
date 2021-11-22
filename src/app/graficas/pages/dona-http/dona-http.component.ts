import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  colors: Color[] = [
    {
      backgroundColor: ['#D44F26', '#EB3567', '#B426D4'],
    },
  ];

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getUsuariosRRSS().subscribe((data) => {
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   console.log(labels);
    //   console.log(values);

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);
    // });

    this.graficasService
      .getUsuariosRRSSDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }
}
