import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inktober',
  templateUrl: './inktober.component.html',
  styleUrls: ['./inktober.component.css']
})
export class InktoberComponent implements OnInit {

  constructor() { }
  weeks = 2;
  queryAll = (item: string) => document.querySelectorAll(item);
  query = (item: string) => document.querySelector(item);

  inktoberImg(location: Element, max: number, getPlace: string[]) {
    let length = 0;
    for (let i = 0; i < max; i++) {
      const locationID = getPlace[0] + (i + 1) + getPlace[1];
      if (locationID !== `#${location.id}`) { length++; }
    }
    if (length === max) { location.style.display = 'none'; }
  }

  inktoberClick(event: MouseEvent) {
    const id: string = event.target.children[0]
      ? event.target.children[0].id
      : event.target.id;

    let getItem: Element;
    for (getItem of this.queryAll('[class^=Inktober-day]')) { getItem.classList.remove('selected'); }
    for (getItem of this.queryAll(`div.${id}`)) { getItem.classList.add('selected'); }
  }

  findWeeks(id: string) {
    const findID = this.query(`#${id}`);
    const br = document.createElement('br');
    let weekRegex: RegExp;
    for (let i = 0; i < this.weeks; i++) {
      weekRegex = RegExp(`^Week${i + 1}`);
      if (weekRegex.test(id)) {
        const parent = findID.parentNode;
        parent.insertBefore(br, findID);
      }
    }
  }

  ngOnInit() {
    let getItem: Element;
    for (getItem of this.queryAll('[id^=Week]')) {
      this.findWeeks(getItem.id);
      this.inktoberImg(getItem, this.weeks, ['#Week', '']);
    }
    for (getItem of this.queryAll('[id$=Inktober]')) {
      this.inktoberImg(getItem, this.weeks * 7, ['#day-', '-Inktober']);
    }
  }

}
