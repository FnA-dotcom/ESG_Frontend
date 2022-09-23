import { Component, OnInit, ViewChild } from '@angular/core';
import { DateService } from 'src/app/shared/services/date.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  
};

@Component({
  selector: 'app-marketing-dashboard',
  templateUrl: './marketing-dashboard.component.html',
  styleUrls: ['./marketing-dashboard.component.scss']
})
export class MarketingDashboardComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  fromDate=undefined;
  toDate=undefined;

  marketingData;
  marketingDataOptions;

  recievedDates=[
    'Today',
    'Yesterday',
    'This Week',
    'This Month',
    'This Year',
    'Last Week',
    'Last Month',
    'Last Year',
    'Last 7 Days',
    'Last 30 Days',
    'Last 60 Days',
    'Last 90 Days',
    'Last 12 Months',
  ];

  selectedRecievedDate;


  constructor(private dateService:DateService) {
    this.chartOptions = {
      series: [
        {
          name: "Scope 1",
          data: [44, 55, 57,87,14 ],
          color: '#1d352b'
        
        },
        {
          name: "Scope 2",
          data: [76, 85, 101, 102,44],
          color:  '#315e3f'
        },
        {
          name: "Scope 3",
          data: [35, 41, 36,110,90 ],
          color:  '#4c8554'
        },
     
       
      ],
      chart: {
        type: "bar",
        height: 350,
        events:{
          click:function(event, chartContext,config)
          {
            console.log(config);
            // console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
            // console.log(config.config.series[config.seriesIndex])
            // console.log(config.config.series[config.seriesIndex].name)
            // console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex]);

            if(config.config.series[config.seriesIndex].name === undefined)
            {
              return;
            }
            else if(config.config.series[config.seriesIndex].name === 'Net Profit')
            {
              alert('Net Profit Selected');
            }
            else if(config.config.series[config.seriesIndex].name === 'Revenue')
            {
              alert('Revenue Selected');
            }
            else if(config.config.series[config.seriesIndex].name === 'Free Cash Flow')
            {
              alert('Free Cash Flow Selected');
            }
          }
        }
      },
      legend: {
        show:true,
        position: 'top',
        floating: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false,
        // style: {
        //   colors: ['#1d352b', '#315e3f', '#4c8554']
        // }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['#1d352b', '#315e3f', '#4c8554']
      },
      xaxis: {
        categories: [
          "2018",
          "2019",
          "2020",
          "2021",
          "2022"
        ]
      },
      yaxis: {
        title: {
          text: " (tCO2)"
        }
      },
      fill: {
        opacity: 1,
        colors: ['#1d352b', '#315e3f', '#4c8554',]
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return " " + val + " tCO2";
          }
        }
      }
    };
   }

  ngOnInit(): void {
    this.marketingData={
      labels: [
        'First Visit',
        'Return Patient',
        'Online Reviews',
        'Facebook',
        'Map Search',
        'Google Search',
        'VictoriaER.com',
        'Website Ads',
        'Online Ads',
        'Twitter',
        'LinkedIn',
        'Email Blast',
        'YouTube',
        'TV',
        'Billboard',
        'Radio',
        'Brochure',
        'Direct Mail',
        'Citizens/DeTar',
        'Lives/Work Nearby',
        'Family/Friend',
        'Urgent Care',
        'Newspaper/Magazine',
        'School',
        'Hotel',
        ],
      datasets: [
          {   label:'Marketing Source',
              data: [10025,2268,4792,687,499,3893,987,190,125,7,15,22,31,729,1116,271,52,32,255,1343,3828,312,32,51,17],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  '#EC407A',
                  '#AB47BC',
                  '#42A5F5',
                  '#f5425a',
                  '#66BB6A',
                  '#FFCA28',
                  '#26A69A',
                  '#aa923b',
                  '#154c79',
                  '#83aab9',
                  '#02e862',
                  '#dc3545',
                  "#FFB74D"
              ],
    
          }
      ]
    };
  }

  onDateRangeSelect(event)
  {
    let val=event.value;

    let dates:{from:Date,to:Date}=this.dateService.dateFilter(val);
    this.fromDate=dates.from;
    this.toDate=dates.to;
    


  }


  applyFilter()
  {
    if(this.fromDate === undefined || this.toDate === undefined)
    {
      alert('Please Select To/From Dates');
    }
    else
    {
      this.marketingData={
        labels: [
          'First Visit',
          'Return Patient',
          'Online Reviews',
          'Facebook',
          'Map Search',
          'Google Search',
          'VictoriaER.com',
          'Website Ads',
          'Online Ads',
          'Twitter',
          'LinkedIn',
          'Email Blast',
          'YouTube',
          'TV',
          'Billboard',
          'Radio',
          'Brochure',
          'Direct Mail',
          'Citizens/DeTar',
          'Lives/Work Nearby',
          'Family/Friend',
          'Urgent Care',
          'Newspaper/Magazine',
          'School',
          'Hotel',
          ],
        datasets: [
            {   label:'Marketing Source',
                data: [5000,2268,4792,687,499,3893,987,190,125,7,15,22,31,729,1116,271,52,32,255,1343,3828,312,32,51,17],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726",
                    '#EC407A',
                    '#AB47BC',
                    '#42A5F5',
                    '#f5425a',
                    '#66BB6A',
                    '#FFCA28',
                    '#26A69A',
                    '#aa923b',
                    '#154c79',
                    '#83aab9',
                    '#02e862',
                    '#dc3545',
                    "#FFB74D"
                ],
      
            }
        ]
      };
    }
   
  }

}
