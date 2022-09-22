import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  dateFilter(val):{from:Date,to:Date}
  {
    if(val=="Today"){
      let date=new Date();
      return{
        from:date,
        to:date,
      }
    }
    else if(val=="Yesterday")
    {
      var today = new Date();
      let yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);
      return{
        from:yesterday,
        to:yesterday,
      }
  }
  else if(val=="This Week"){
      var date = new Date();
      var curr = new Date;
      var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
      return{
        from:firstday,
        to:new Date(),
      }
  }
  else if(val=="This Month"){
      var date = new Date();
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      return{
        from:firstDay,
        to:date,
      }
  }
  else if(val=="This Year"){
      var date = new Date();
      var firstDay = new Date(date.getFullYear(), 0);
      return{
        from:firstDay,
        to:date,
      }
  }
  else if(val=="Last Week"){
      var date = new Date();
      let firstDay=moment().subtract(1, "week").startOf("week");
      let finalFirstDate:Date=(firstDay['_d']);
      let lastDay= moment().subtract(1, "week").endOf("week");
      let finalLastDate:Date=(lastDay['_d']);
      return{
        from:finalFirstDate,
        to:finalLastDate,
      }
      
  }
  else if(val=="Last Month"){
      var date = new Date();
      let firstDay = moment().subtract(1, "month").startOf("month");//new Date(date.getFullYear(), 0);
      let finalFirstDate:Date=(firstDay['_d']);
      let lastDay=moment().subtract(1, "month").endOf("month");
      let finalLastDate:Date=(lastDay['_d']);
      return{
        from:finalFirstDate,
        to:finalLastDate,
      }
  }
  else if(val=="Last Year"){
     var date = new Date();
     let firstDay=moment().subtract(1, "year").startOf("year");
     let finalFirstDate:Date=(firstDay['_d']);
     let lastDay=moment().subtract(1, "year").endOf("year");
     let finalLastDate:Date=(lastDay['_d']);
     return{
      from:finalFirstDate,
      to:finalLastDate,
    }
  }
  else if(val=="Last 7 Days"){

    var date = new Date();
     let firstDay=moment().subtract(7,'d');
     let finalFirstDate:Date=(firstDay['_d']);
     return{
      from:finalFirstDate,
      to:date,
    }
  }
  else if(val=="Last 30 Days"){

    var date = new Date();
     let firstDay=moment().subtract(30,'d');
     let finalFirstDate:Date=(firstDay['_d']);
     return{
      from:finalFirstDate,
      to:date,
    }
  }
  else if(val=="Last 60 Days"){

    var date = new Date();
     let firstDay=moment().subtract(60,'d');
     let finalFirstDate:Date=(firstDay['_d']);
     return{
      from:finalFirstDate,
      to:date,
    }
  }
  else if(val=="Last 90 Days"){

    var date = new Date();
     let firstDay=moment().subtract(90,'d');
     let finalFirstDate:Date=(firstDay['_d']);
     return{
      from:finalFirstDate,
      to:date,
    }
  }
  else if(val=="Last 12 Months"){
    var date = new Date();
     let firstDay=moment().subtract(12,"month");
     let finalFirstDate:Date=(firstDay['_d']);
     return{
      from:finalFirstDate,
      to:date,
    }
  }
    else
    {let date=new Date();
      return{
        from:date,
        to:date,
      }
    }
  }


  getDate(check)
  {
    if(check === 'report')
    {
    let today=new Date();
    let changedDate = '';
    let pipe=new DatePipe('en-US');
    changedDate=pipe.transform(today,'full');
    let array=changedDate.split(',');
    let finalDate='';
    for(let i=0;i<array.length;i++)
    {
      finalDate=finalDate+' '+array[i]
    }
    return finalDate;
    }
    else{

      let datepipe = new DatePipe("en-use");

      let date=datepipe.transform(check,"MM/dd/yyyy");

      return date;
    }
  }  

}
