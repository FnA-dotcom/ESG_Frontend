import { Component, OnInit, ViewChild } from '@angular/core';
import { DateService } from 'src/app/shared/services/date.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';








@Component({
  selector: 'app-marketing-dashboard',
  templateUrl: './marketing-dashboard.component.html',
  styleUrls: ['./marketing-dashboard.component.scss']
})
export class MarketingDashboardComponent implements OnInit {
  faCoffee = faCoffee;
  filmIcon = faFilm;
  fauser = faUser;
  house = faHouse;
  // ---- Chart-----
  lineStylesData: any;
  lineOptions: any;
  basicOptions: any;


  // ------ canvas---------
  multiAxisData: any;
  multiAxisOptions: any;



  constructor(private dateService: DateService,) {
  }

  ngOnInit(): void {

    this.lineStylesData = {

      labels: ['2014 ', '2015 ', '2016 ', '2017 ', '2018 ', '2019 ', '2020 ', '2021 ', '2022 ', '2023 ','2024' ],
      datasets: [
        {
          label: 'Carbon Rediction Tracking',
          data: [ 100, 90, 80, 70, 60, 50, 45,30,20,10,0],
          // data: [10, 20, 30, 40, 50, 60, 70,80,90,100],
          fill: true,
          borderColor: '#21332a',
          tension: .4,
          // backgroundColor: 'rgb(249, 255, 230)'
          backgroundColor: '#59815f98'
          // backgroundColor: '#59815f98'
        }
      ]

    };
    this.multiAxisData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Dataset 1',
        fill: true,
        borderColor: '#21332a',
        yAxisID: 'y',
        tension: .4,
        backgroundColor: '#59815f98',
        data: [65, 59, 80, 81, 56, 55, 10]

      }]
    };

    this.multiAxisOptions = {
      stacked: false,
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            // callback: (label) => {
            //   return label  + ' Time'; }


          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: '#495057'
          },
          scaleLabel: {
            display: true,
            labelString: '% Cases/Status',
            fontColor: '#757575',
            fontSize: 12
          },
          grid: {
            color: '#ebedef'
          }
        },
        y1:
        {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: '#495057'
          },
          grid: {
            drawOnChartArea: false,
            color: '#ebedef'
          }
        }
      }
    };
    this.lineOptions = {
     plugins:{
      datalabels:{
        aling:'end',
        anchor:'end',
        borderRadius: 4,
        backgroundColor: "teal",
        color: 'white',
        font:{
          weight: 'bold'
        }
      }
     },
      title: {
        display: true,
        text: 'dfksdjfkjdskfjdsfklsd',
        fontSize: 50
      },
      legend: {
        position: 'bottom'
      }
    };

  }

  onPeriodChange(event)
    {
        
        let currentYear=event.value;
        
        if(currentYear==='2018')
        { 
            

           
        }
        else if(currentYear==='2019')
        {
            
        }
        else if(currentYear==='2020')
        {
            
        }
        else if(currentYear==='2021')
        {
            
        }
        else if(currentYear==='2022')
        {
            
        }
    }

}
