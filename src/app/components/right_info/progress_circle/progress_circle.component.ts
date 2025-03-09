import { Component, Input, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart, ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: "app-progress-circle",
  standalone: true,
  templateUrl: "./progress_circle.component.html",
  imports: [
    ChartComponent
  ],
  styleUrls: ["./progress_circle.component.css"]
})
export class ProgressCircleComponent{
  @ViewChild("chart") chart: any;
  @Input() progress: number = 0;
  @Input() label: string = '';

  public chartOptions: Partial<ChartOptions> = {};

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      series: [this.progress],
      chart: {
        height: 190,
        width: 120,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          },
          dataLabels: {
            name: {
              fontSize: "14px"
            },
            value: {
              fontSize: "14px",
              formatter: (val) => `${val}%`
            }
          },
        }
      },

      labels: [this.label],
    };
  }
}
