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
  card1Counter: number=400;
  card2Counter: number=300;
  card3Counter: number=400;
 
  target1: number=500;
  target2: number=400;
  target3: number=400;
  counterArray: number[];
 

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
  
  this.stackedOptions = {
    plugins: {
        tooltips: {
            mode: 'index',
            intersect: false
        },
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            stacked: true,
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            stacked: true,
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
};

this.scope1 = {
  labels: ['Scope 1', 'Scope 2', 'Scope 3'],
  datasets: [
      {
          label: 'Actual',
          backgroundColor: '#1D352B',
          data: [30,40,70]
      },
      {
          label: 'Target',
          backgroundColor: '#4C8554',
          data: [20,30,40]
      }
  ]
};

    this.counterArray=[this.card1Counter,this.card2Counter,this.card3Counter]
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
    onPeriodChange(event)
    {
      
        
        let currentYear=event.value;
        
        if(currentYear==='2018')
        { 
            

            this.getCard1Counter(800);

            this.card1Counter=800;
            this.card2Counter=700;
            this.card3Counter=600;
           
            this.target1=900;
            this.target2=800;
            this.target3=800;

            this.scope1 = {
              labels: ['Scope 1', 'Scope 2', 'Scope 3'],
              datasets: [
                  {
                      label: 'Actual',
                      backgroundColor: '#1D352B',
                      data: [800,700,600]
                  },
                  {
                      label: 'Target',
                      backgroundColor: '#4C8554',
                      data: [900,800,700]
                  }
              ]
            };
            this.data={
              labels: ['Actual','Target'],
              datasets: [
                  {
                      data: [2500, 2100],
                      backgroundColor: [
                          "rgb(33, 51, 42)",
                          "rgb(76, 133, 84)",
                          
                      ],
                    
                  }
              ]
            };
            
            

           
        }
        else if(currentYear==='2019')
        {
            this.card1Counter=700;
            this.card2Counter=600;
            this.card3Counter=500;
           
            this.target1=800;
            this.target2=700;
            this.target3=600;
            this.scope1 = {
              labels: ['Scope 1', 'Scope 2', 'Scope 3'],
              datasets: [
                  {
                      label: 'Actual',
                      backgroundColor: '#1D352B',
                      data: [700,600,500]
                  },
                  {
                      label: 'Target',
                      backgroundColor: '#4C8554',
                      data: [800,700,600]
                  }
              ]
            };
            this.data={
              labels: ['Actual','Target'],
              datasets: [
                  {
                      data: [2100, 1800],
                      backgroundColor: [
                          "rgb(33, 51, 42)",
                          "rgb(76, 133, 84)",
                          
                      ],
                    
                  }
              ]
            };
            
            
        }
        else if(currentYear==='2020')
        {
            this.card1Counter=400;
            this.card2Counter=300;
            this.card3Counter=350;
           
            this.target1=600;
            this.target2=400;
            this.target3=500;
            this.scope1 = {
              labels: ['Scope 1', 'Scope 2', 'Scope 3'],
              datasets: [
                  {
                      label: 'Actual',
                      backgroundColor: '#1D352B',
                      data: [400,300,350]
                  },
                  {
                      label: 'Target',
                      backgroundColor: '#4C8554',
                      data: [600,400,500]
                  }
              ]
            };
            this.data={
              labels: ['Actual','Target'],
              datasets: [
                  {
                      data: [1500, 1050],
                      backgroundColor: [
                          "rgb(33, 51, 42)",
                          "rgb(76, 133, 84)",
                          
                      ],
                    
                  }
              ]
            };
        }
        else if(currentYear==='2021')
        {
            this.card1Counter=700;
            this.card2Counter=800;
            this.card3Counter=650;
            this.target1=800;
            this.target2=900;
            this.target3=900;
            this.scope1 = {
              labels: ['Scope 1', 'Scope 2', 'Scope 3'],
              datasets: [
                  {
                      label: 'Actual',
                      backgroundColor: '#1D352B',
                      data: [700,800,650]
                  },
                  {
                      label: 'Target',
                      backgroundColor: '#4C8554',
                      data: [800,900,900]
                  }
              ]
            };
            this.data={
              labels: ['Actual','Target'],
              datasets: [
                  {
                      data: [2600, 2150],
                      backgroundColor: [
                          "rgb(33, 51, 42)",
                          "rgb(76, 133, 84)",
                          
                      ],
                    
                  }
              ]
            };
        }
        else if(currentYear==='2022')
        {
            this.card1Counter=400;
            this.card2Counter=200;
            this.card3Counter=300;
            this.target1=500;
            this.target2=400;
            this.target3=400;
            this.scope1 = {
              labels: ['Scope 1', 'Scope 2', 'Scope 3'],
              datasets: [
                  {
                      label: 'Actual',
                      backgroundColor: '#1D352B',
                      data: [400,200,300]
                  },
                  {
                      label: 'Target',
                      backgroundColor: '#4C8554',
                      data: [500,400,400]
                  }
              ]
            };
            this.data={
              labels: ['Actual','Target'],
              datasets: [
                  {
                      data: [1300, 900],
                      backgroundColor: [
                          "rgb(33, 51, 42)",
                          "rgb(76, 133, 84)",
                          
                      ],
                    
                  }
              ]
            };
        }
    }
    getCard1Counter(count)
    {
        this.card1Counter=0;
       const interval = setInterval(() => {
          if(this.card1Counter=count-1)
          {clearInterval(interval)}
          this.card1Counter++;
        }, 100);

}
}
