import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
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
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    

    fromDate = undefined;
    toDate = undefined;

    stackedData: any;
    stackedOptions: any;

    data: any;
    // chartOptions: any;

    subscription: Subscription;

    scope1: any;
    scope1Options:any;

    scope2: any;
    scope2Options:any;

    scope3: any;
    scope3Options:any;

    card1Counter=100;

    showScope1:boolean=false;
    showScope2:boolean=false;
    showScope3:boolean=false;

    selectedYear;


    marketingData;
    marketingDataOptions;

    org = [
        'Floresville',
        'Schertz',

    ];
    periods = [
       '2018', '2019', '2020', '2021', '2022',
    ];

    categories=[
        'Vehicle', 'Building', 'Electrical', 'Goods & Supply'
    ]

    selectedOrganization;
    selectedPeriod;
    selectedCategory;
    selectedRecievedDate;
    configService: any;
    config: any;

    florenceBarData = {
        labels: ['S1', 'S2', 'S3',],
        datasets: [{
            type: 'bar',
            label: 'Scope 1',
            backgroundColor: '#21332a',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34

            ]
        }, {
            type: 'bar',
            label: 'Scope 2',
            backgroundColor: '#66BB6A',
            data: [
                50,
                25,
                12,
                48,
                90,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Scope 3',
            backgroundColor: '#e63a47',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    };

    florencePieData = {
        labels: ['S1', 'S2', 'S3'],
        datasets: [
            {
                data: [100, 200, 400],
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



    schertzBarData = {
        labels: ['S1', 'S2', 'S3',],
        datasets: [{
            type: 'bar',
            label: 'Scope 1',
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
        }, {
            type: 'bar',
            label: 'Scope 2',
            backgroundColor: '#66BB6A',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ]
        }, {
            type: 'bar',
            label: 'Scope 3',
            backgroundColor: '#e63a47',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    };

    schertzPieData = {
        labels: ['S1', 'S2', 'S3'],
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
    // scope2Options: { plugins: { legend: { labels: { color: string; }; }; }; scales: { x: { ticks: { color: string; }; grid: { color: string; }; }; y: { ticks: { color: string; callback: (label: any, index: any, labels: any) => string; }; grid: { color: string; }; }; }; };


    


    constructor(private dateService: DateService) { }

    ngOnInit(): void {

        this.getChartOptions();

        this.getCard1Counter();

        this.selectedOrganization = localStorage.getItem('facilityName');

        if (this.selectedOrganization === 'Schertz') {
            // this.stackedData = this.schertzBarData;
            // this.data = this.schertzPieData
        }
        else {
            // this.stackedData = this.florenceBarData;
            // this.data = this.florencePieData;
        }

        


        this.scope1 = {
            labels: ['Fossil Fuels', 'Medical Facilities', 'Anesthtics', 'Fleet & Leased Vehicles'],
            datasets: [
                {
                    type: 'bar',
                    label: ['Scope1 Report',],
                    backgroundColor: ['#141615', '#1d352b', '#4C8554', '#A0B588'],
                    data: [85, 52, 78, 100,]
                },

            ]
        };
        this.scope1Options =  {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057',
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057',
                        // callback: (label, index, labels) => {
                        //     return label + ' tCo2';
                        //   }
                    },
                    grid: {
                        color: '#fff'
                    }
                }
            }
        };
        this.scope2 = {
            labels: ['Electricity', 'Steam', 'Heat', 'Cooling'],
            datasets: [
                {
                    type: 'bar',
                    label: ['Report',],
                    backgroundColor: ['#315e3f', '#dad8cd', '#2e3432', '#21332a'],
                    data: [85, 52, 78, 100, + "CO2"]
                },

            ]
        };
        this.scope2Options =  {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057',
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057',
                        // callback: (label, index, labels) => {
                        //     return label + ' tCo2';
                        //   }
                    },
                    grid: {
                        color: '#fff'
                    }
                }
            }
        };

        this.scope3 = {
            labels: ['Inhalers', 'Water', 'Waste', 'Business Travel', 'Energy well-to-tank', ' Medical Devices',
                     'Medivines', 'Fright Transport', 'Business Service', 'Food Service', 'Construction', 'Contracted Health Service'
                     , 'Manufacturing ', 'ICT', 'Staff Commuting'],
            datasets: [
                {
                    type: 'bar',
                    label: ['Report',],
                    backgroundColor: ['#141615', '#2e3432', '#1d352b', '#315e3f', '#4c8554', '#a0b588', '#dad8cd', '#141615', '#2e3432', '#1d352b', '#315e3f', '#4c8554', '#a0b588', '#dad8cd', '#21332a'],
                    data: [185, 52, 78, 100, 190, 95, 166, 75, 79, 150, 124, 110, 100, 102, 184, + "CO2"]


                },

            ]
        };

        this. scope3Options =  {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057',
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057',
                        // callback: (label, index, labels) => {
                        //     return label + ' tCo2';
                        //   }
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '% Cases/Status',
                        fontColor: '#757575',
                        fontSize: 12
                      },
                    grid: {
                        color: '#fff'
                    }
                }
            }
        };

       

        this.stackedOptions = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };



    }

    getChartOptions()
    {
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
                click:(event, chartContext,config)=>
                {
                //   console.log(config);
                //   console.log(chartContext);
                //   console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
                //   console.log(config.config.series[config.seriesIndex])
                //   console.log(config.config.series[config.seriesIndex].name);
                //   console.log();
                //   console.log(config.config.xaxis.categories[config.dataPointIndex]);
    
                  let scopeType=config.config.series[config.seriesIndex].name;
                  let scopeValue=config.config.series[config.seriesIndex].data[config.dataPointIndex];
                  let scopeYear=config.config.xaxis.categories[config.dataPointIndex];

                  this.selectedYear=scopeYear;
    
      
                  if(scopeType === 'Scope 1')
                  {
                    this.showScope1=true;
                    
                  }
                  else if(scopeType === 'Scope 2')
                  {
                    this.showScope2=true;
                  }
                  else if(scopeType === 'Scope 3')
                  {
                    this.showScope3=true;
                  }
                  else
                  {
                    return;
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
    // updateChartOptions() {
    //     this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
    // }
    getLightTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        }
    }

    getDarkTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        }
    }


    getCard1Counter()
    {
      
       const interval = setInterval(() => {
          if(this.card1Counter>=899)
          {clearInterval(interval)}
          this.card1Counter++;
        }, 1);
        
      
    }
    
    onFacilitySelection(event)
    {
        localStorage.setItem('facilityName',event.value)

    }


    showScopeOne()
    {
        alert('function');
    }


}
