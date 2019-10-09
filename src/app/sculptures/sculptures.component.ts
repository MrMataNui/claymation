import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  styleUrls: ['./sculptures.component.css']
})
export class SculpturesComponent implements OnInit {
  constructor() {}
  queryAll = (item: string) => document.querySelectorAll(item);
  query = (item: string) => document.querySelector(item);

  monthClick(event: MouseEvent) {
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

  yearChange(event: MouseEvent) {
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

  timelineLink() {
    const months = [
      { id: '2019jan', name: 'January', class: 'selected' },
      { id: '2019mar', name: 'March' },
      { id: '2019may', name: 'May' },
      { id: '2019aug', name: 'August' },
      { id: '2019sep', name: 'September' },
      { id: '2019oct', name: 'Inktober', class: 'quotes' }
    ];
    let html = '';
    // tslint:disable-next-line:forin
    for (const i in months) {
      // if () { `class="${months[i].class}"`; }
      html += months[i].class
        ? `<li> <div id="${months[i].id}" class="${months[i].class}" (click)="monthClick($event)"> ${months[i].name} </div> </li>`
        : `<li> <div id="${months[i].id}" (click)="monthClick($event)"> ${months[i].name} </div> </li>`;
    }
    // this.query('#date2019 ul').innerHTML = html;
    console.log('html', html);
  }

  ngOnInit() {
    this.timelineLink();
  }
}
