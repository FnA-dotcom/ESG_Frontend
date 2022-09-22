import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from 'src/app/shared/services/date.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  fromDate=undefined;
  toDate=undefined;

  stackedData: any;
  stackedOptions: any;

  data: any;
  chartOptions: any;

  subscription: Subscription;

    
 

  marketingData;
  marketingDataOptions;

  org=[
    'floresville',
    'schertz',
    
  ];
   periods=[
     '1964','1965','1966',    '1967',    '1968',    '1969',    '1970',    '1971',    '1972',    '1973',    '1974',
    '1975',    '1976',    '1977',    '1978',    '1979',    '1980',    '1981',    '1982',    '1983',    '1984',    '1985',
    '1986',    '1987',    '1988',    '1989',    '1990',    '1991',    '1992',    '1993',    '1994',    '1995',    '1996',
    '1997',    '1998',    '1999',    '2000',    '2001',    '2002',    '2003',    '2004',    '2005',    '2006',    '2007',
    '2008',    '2009',    '2010',    '2011',    '2012',    '2013',    '2014',    '2015',    '2016',    '2017',    '2018',
    '2019',    '2020',    '2021',    '2022',
   ];

  selectedOrganization;
  selectedPeriod;
  selectedRecievedDate;
  configService: any;
  config: any;

  florenceBarData={
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

florencePieData={
  labels: ['S1','S2','S3'],
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



schertzBarData={
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

schertzPieData={
  labels: ['S1','S2','S3'],
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




  constructor(private dateService:DateService) { }

  ngOnInit(): void {

    this.selectedOrganization=localStorage.getItem('facilityName');

    if(this.selectedOrganization==='schertz')
    {
      this.stackedData=this.schertzBarData;
      this.data=this.schertzPieData
    }
    else
    {
      this.stackedData=this.florenceBarData;
      this.data=this.florencePieData;
    }

  }
     updateChartOptions() {
      this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
  }
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

  

}
