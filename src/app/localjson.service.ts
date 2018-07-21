import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaljsonService {

  constructor() { }

  setJSON(data: any) {
    localStorage.setItem('issues', JSON.stringify(data));
  }
  getJSON() {
    if (localStorage.getItem('issues') === null || localStorage.getItem('issues') == undefined){
      return [{
        Id: 0,
        CreatedDate: (new Date()).toString(),
        Description: 'Default',
        Severity: 'Minor',
        Status: 'Closed'
      }];
    } else {
      return JSON.parse(localStorage.getItem('issues'));
    }
  }
}
