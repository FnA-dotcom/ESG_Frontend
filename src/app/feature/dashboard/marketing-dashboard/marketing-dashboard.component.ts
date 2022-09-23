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
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
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
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
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
