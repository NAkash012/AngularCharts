import { Component, OnChanges, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component ({
  selector: 'app-graph-chart',
  templateUrl: './graph-chart.component.html',
  styleUrls: ['./graph-chart.component.css']
})

export class GraphChartComponent implements OnInit {
  chart: Chart;
  valueLine1 = '#7cb5ec';
  valueLine2 = '#434348';
  ngOnInit() {
    this.init();
  }
  toAddColorLine1(postInputLine1) {
    this.valueLine1 = postInputLine1.value;
    this.changeChart();
  }

  toAddColorLine2(postInputLine2) {
    this.valueLine2 = postInputLine2.value;
    this.changeChart();
  }

  changeChart() {
    const newChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Graph Chart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3, 4],
        color: this.valueLine1
      },
      {
        name: 'Line 2',
        data: [1, 4, 2, 3],
        color: this.valueLine2
      }
    ]
    });
    this.chart = newChart;
  }


  init() {
    const chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Graph Chart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3, 4]
      },
      {
        name: 'Line 2',
        data: [1, 4, 2, 3]
      }
    ]
    });
    this.chart = chart;
}
}
