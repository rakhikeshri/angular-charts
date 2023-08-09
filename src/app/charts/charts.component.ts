import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit{
  barchart: boolean = false;
  piechart: boolean = false;

  ngOnInit(): void {
    this.RenderChart('bar', 'barchart'); 
    this.RenderChart('pie', 'piechart'); 
    this.RenderChart('line', 'linechart'); 
    this.RenderChart('radar', 'radarchart'); 
    this.RenderChart('polarArea', 'polarAreachart'); 
    this.RenderChart('doughnut', 'doughnutchart');       
  }

  // showChart(chartType: any, chartName: string) {
  //   this.RenderChart(chartType, chartName); 
  // }

  RenderChart(chartType: any, chartName: string) {
    new Chart(chartName, {
      type: chartType,
      data: {
        labels: ['Raj', 'Surbhi', 'Deep', 'Anjali', 'Gopal', 'Mithu'],
        datasets: [
          {
            label: 'Marks',
            data: [400, 490, 300, 450, 420, 330],
            borderWidth: 2,
            backgroundColor: [
              '#ff5959',
              '#59ac59',
              '#b3b3ff',
              '#ffc04d',
              '#ffff59',
              '#d3a6d3',
            ],

          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        
      },
    });
  }
}
