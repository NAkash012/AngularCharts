import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bar',
  templateUrl: './diagram-bar.component.html',
  styleUrls: ['./diagram-bar.component.css']
})
export class DiagramBarComponent implements OnInit {
  chart: Chart;
  valueTokyo = '#7cb5ec';
  valueNewYork = '#434348';
  ngOnInit() {
    this.init();
  }

  toAddColorTokyo(postInputTokyo) {
    this.valueTokyo = postInputTokyo.value;
    this.changeChart();
    console.log(this.valueTokyo);
  }
  toAddColorNewYork(postInputNewYork) {
    this.valueNewYork = postInputNewYork.value;
    this.changeChart();
    console.log(this.valueNewYork);
  }
  changeChart() {
    const newBarChart = new Chart({
    chart: {
      backgroundColor: '#FCFFC5',
      type: 'bar'
    },
    title: {
      text: 'Bar Chart',
      x: 50
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      color: this.valueTokyo
    },
    {
      name: 'New York',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      color: this.valueNewYork
    }
  ]
  });
  this.chart = newBarChart;

}
  init() {
    const chart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Bar Chart',
        x: 50
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      },
      {
        name: 'New York',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }]
    });
    this.chart = chart;

  }
}
