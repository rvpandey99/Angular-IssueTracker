import { Component, OnInit } from '@angular/core';
import { LocaljsonService } from '../localjson.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  constructor(private _localjsonService: LocaljsonService) { }
  issues: any;
  default: boolean;

  ngOnInit() {
    this.issues = this._localjsonService.getJSON();
    if (this.issues.length < 2) {
      this.default = true;
    } else {
      this.default = false;
    }
  }

}
