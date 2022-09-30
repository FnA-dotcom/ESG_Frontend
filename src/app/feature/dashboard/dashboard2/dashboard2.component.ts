import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  color: any[];
};

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  stackedData: any;
  stackedOptions: any;

  // data: any;
  // chartOptions: any;

  overviewChart;

  scope1:any;

  ptVisistsPerMonthData;
  ptVisistsPerMonthDataOptions;

  selectedOrganization;
  selectedPeriod;

  monthlyVisitsByDoctorData;
  monthlyVisitsByDoctorOptions;

  userAccessSourceData;
  userAccessSourceOptions;

  innerSelectedPeriod;
  innerModalHeader;
  
  org = [
    'Floresville',
    'Schertz',

];
periods = [
   '2018', '2019', '2020', '2021', '2022',
];

data={
  labels: ['Actual','Target'],
  datasets: [
      {
          data: [536, 447],
          backgroundColor: [
              "rgb(33, 51, 42)",
              "rgb(76, 133, 84)",
              
          ],
          // hoverBackgroundColor: [
          //   "rgb(76, 61, 83)",
          //   "rgb(227, 147, 29)",
          // ]
      }
  ]
};

showModal:boolean=false;

  schertzStackedData={
    labels: ['RI 1', 'RI 2', 'RI 3', 'RI 4', ],
    datasets: [{
        type: 'bar',
        label: 'RI 1',
        backgroundColor: '#21332a',
        data: [
            50,
            25,
            12,
            48,
            90,
            76,
            42
        ]
    },
    
     {
        type: 'bar',
        label: 'RI 3',
        backgroundColor: '#10394c',
        data: [
            21,
            84,
            24,
            75,
            37,
            65,
            34
        ]

    }, 
     ]
};

floresvilleStackedData={
  labels: ['RI 1', 'RI 2', 'RI 3', 'RI 4', 'RI 5', 'RI 6'],
  datasets: [{
      type: 'bar',
      label: 'RI 1',
      backgroundColor: '#21332a',
      data: [
          100,
          50,
          24,
          96,
          45,
          35,
          84
      ]
  },
   {
      type: 'bar',
      label: 'RI 2',
      backgroundColor: '#d4af30',
      data: [
          11,
          42,
          12,
          35,
          18,
          35,
          14
      ]

  }, 
   {
      type: 'bar',
      label: 'RI 3',
      backgroundColor: '#10394c',
      data: [
          42,
          168,
          48,
          150,
          75,
          130,
          68
      ]

  }, 
   {
      type: 'bar',
      label: 'RI 4',
      backgroundColor: '#94a651',
      data: [
          35,
          95,
          35,
          95,
          74,
          130,
          70
      ]

  }, 
  ]
};

schertzPieData={
  labels: ['S1','S2','scope'],
  datasets: [
      {
          data: [200, 50, 100],
          backgroundColor: [
              "#e63a47",
              "#FFCE56",
              "#21332a",
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#3a5b41"
          ]
      }
  ]
};

floresvillePieData={
  labels: ['Vehicles','Technology','Buildongs','Other',],
  datasets: [
      {
          data: [100, 200, 150, 100,],
          backgroundColor: [
              "#a0b588",
              "#315e3f",
              "#2e3432",
              "#dad8cd",
          ],
          hoverBackgroundColor: [
              "#4c8554",
              "#1d352b",
              "#141615",
              "#dad8cd",
          ]
      }
  ]
};

schertzVisitPerMonth={
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Visits Per Month',
    backgroundColor: [
      '#EC407A',
      '#AB47BC',
      '#42A5F5',
      '#7E57C2',
      '#66BB6A',
      '#FFCA28',
      '#26A69A',
      '#aa923b',
      '#154c79',
      '#83aab9',
      '#02e862',
      '#dc3545'
    ],

    data: [550, 400, 800, 800, 600, 800, 300]
  }]
};

floresvilleVisitPerMonth={
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Visits Per Month',
    backgroundColor: [
      '#EC407A',
      '#AB47BC',
      '#42A5F5',
      '#7E57C2',
      '#66BB6A',
      '#FFCA28',
      '#26A69A',
      '#aa923b',
      '#154c79',
      '#83aab9',
      '#02e862',
      '#dc3545'
    ],

    data: [1108, 356, 417, 471, 491, 447, 536]
  }]
};



  graphDropdownOptions = ['Download SVG', 'Download PNG', 'Download CSV'];

  constructor() { }

  ngOnInit(): void {

    this.selectedOrganization = localStorage.getItem('facilityName');

    let locationName=localStorage.getItem('facilityName');

    if(locationName==='schertz')
    {
      this.stackedData=this.schertzStackedData;
      // this.data=this.schertzPieData;
      this.ptVisistsPerMonthData=this.schertzVisitPerMonth;
    }
    else
    {
      this.stackedData=this.floresvilleStackedData;
      // this.data=this.floresvillePieData;
      this.ptVisistsPerMonthData=this.floresvilleVisitPerMonth;
    }

    this.chartOptions = {
      series: [
        {
          name: "",
          data: [150,450,300,400,100,150,350,450,250,280,380,150,180,290,192,285, ]
   
       
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        events:{
          click:(event, chartContext,config)=>
          {
            // console.log(config);
            // console.log(chartContext);
          //   console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
          //   console.log(config.config.series[config.seriesIndex])
          //   console.log(config.config.series[config.seriesIndex].name);
          //   console.log();
          //   console.log(config.config.xaxis.categories[config.dataPointIndex]);

            let scopeType=config.config.series[config.seriesIndex].name;
            let scopeValue=config.config.series[config.seriesIndex].data[config.dataPointIndex];
            let scopeYear=config.config.xaxis.categories[config.dataPointIndex];

            

            this.innerModalHeader=scopeYear;

            this.showModal=true;
            
          

            
            
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      color: ['#4c8554'],
      xaxis: {
        categories: [
          "Stationary",
          "Mobile ",
          "Fugitive",         
          "Process emissions",
          "Electricity",
          "Steam",
          "Heat",
          "Cooling",
          "Purchased services",
          "Business travel",
          "Employee",
          "Waste disposal",
          "Use of sold products",
          "Investments",
          "Leased assets",
          "Franchises",
        ]
      }
    };
  
//   this.stackedOptions = {
//     plugins: {
//         tooltips: {
//             mode: 'index',
//             intersect: false
//         },
//         legend: {
//             labels: {
//                 color: '#495057'
//             }
//         }
//     },
//     scales: {
//         x: {
//             stacked: true,
//             ticks: {
//                 color: '#495057'
//             },
//             grid: {
//                 color: '#ebedef'
//             }
//         },
//         y: {
//             stacked: true,
//             ticks: {
//                 color: '#495057'
//             },
//             grid: {
//                 color: '#ebedef'
//             }
//         }
//     }
// };

this.scope1 = {
  labels: ['Scope 1', 'Scope 2', 'Scope 3'],
  datasets: [
      {
          label: 'Actual',
          backgroundColor: '#1D352B',
          data: [65, 59, 80]
      },
      {
          label: 'Target',
          backgroundColor: '#4C8554',
          data: [28, 48, 40]
      }
  ]
};


    this.overviewChart = {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: 'Patient Age',
          backgroundColor: 'rgb(89, 73, 214)',
          data: [17, 23, 26, 29, 19, 2, 0]
        },
      ]


    };

    // this.avgCovidPt=Math.floor((74/536)*100);





    this.userAccessSourceData = {
      labels: ['Return Patient',
        'Google',
        'Map Search',
        'Billboard',
        'Online Review',
        'TV',
        'Website',
        'Building Sign/DriveBy',
        'Facebook',
        'School',
        'Twitter',
        'Magazine',
        'Newspaper',
        'Family/Friend',
        'UrgentCare',
        'Community/Event'
      ],
      datasets: [
        {
          data: [31, 19, 77, 0, 5, 0, 1, 2, 0, 5, 0, 0, 0, 58, 0, 0],
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

  onFacilitySelection(event)
    {
        localStorage.setItem('facilityName',event.value)

    }

}
