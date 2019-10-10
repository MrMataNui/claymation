import { Component, OnInit } from '@angular/core';
import { datesId, getMonths } from './description';

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  styleUrls: ['./sculptures.component.css']
})
export class SculpturesComponent implements OnInit {
  constructor() {}
  objectKeys = Object.keys;
  datesId = datesId;
  getMonths = getMonths;

  monthId = (item: string) => item.replace(/(\w+)(2019)/, '$2$1');

  queryAll = (item: string) => document.querySelectorAll(item);
  query = (item: string) => document.querySelector(item);

  monthClick(event: any) {
    const getID = (item: string) => document.getElementById(item);
    const id = event.target.id;
    for (const datesItem of this.queryAll('#dates div')) {
      datesItem.classList.remove('selected');
    }
    for (const monthsItem of this.queryAll('#months li')) {
      monthsItem.classList.remove('selected');
    }
    getID(id).classList.add('selected');
    getID('months').children[id].classList.add('selected');
  }

  yearChange(event: any) {
    const yearNum: Element = this.queryAll('#date2019 #year-num')[0];
    const date = event.target.id;
    const getYears = [2019, 2020];
    let getNumber: number = parseInt(yearNum.innerHTML.trim(), 10);
    switch (date) {
      case 'previous-year':
        if (getYears.includes(getNumber - 1)) {
          getNumber--;
        }
        break;
      case 'following-year':
        if (getYears.includes(getNumber + 1)) {
          getNumber++;
        }
        break;
    }
    yearNum.innerHTML = getNumber.toString();
  }

  ngOnInit() {}
}
