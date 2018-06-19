import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component ({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {
  chart: Chart;
  valueChrome = '#000000';
  valueFirefox = '#7cb5ec';
  valueSafari = '#f7a35c';
  valueIe = '#434348';
  valueOpera = '#8085e9';
  valueOthers = '#f15c80';

  ngOnInit() {
    this.init();
  }

  toAddColorChrome(postInputChrome) {
    this.valueChrome = postInputChrome.value;
    this.changeChart();
  }

  toAddColorFirefox(postInputFirefox) {
    this.valueFirefox = postInputFirefox.value;
    this.changeChart();
  }
  toAddColorSafari(postInputSafari) {
    this.valueSafari = postInputSafari.value;
    this.changeChart();
  }
  toAddColorIe(postInputIe) {
    this.valueIe = postInputIe.value;
    this.changeChart();
  }
  toAddColorOpera(postInputOpera) {
    this.valueOpera = postInputOpera.value;
    this.changeChart();
  }
  toAddColorOthers(postInputOthers) {
    this.valueOthers = postInputOthers.value;
    this.changeChart();
  }
  changeChart() {
    const newChart = new Chart({
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Pie Chart'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
            {
                name: 'Firefox',
                y: 45.0,
                color: this.valueFirefox
            },
            {
                name: 'IE',
                y: 22.8,
                color: this.valueIe
            },
            {
                name: 'Chrome',
                y: 14.8,
                color: this.valueChrome,
                sliced: true,
                selected: true
            },
            {
                name: 'Safari',
                y: 8.5,
                color: this.valueSafari
            },
            {
                name: 'Opera',
                y: 6.2,
                color: this.valueOpera
            },
            {
                name: 'Others',
                y: 0.7,
                color: this.valueOthers
            }
        ]
    }]
    });
    this.chart = newChart;
  }

  init() {
    console.log('init is called');
    const chart = new Chart({
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Pie Chart'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
            ['Firefox', 45.0],
            ['IE', 22.8],
            {
                name: 'Chrome',
                y: 14.8,
                color: '#000',
                sliced: true,
                selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
        ]
    }]
    });
    this.chart = chart;
  }
}
