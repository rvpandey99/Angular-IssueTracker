import { Component, OnInit } from '@angular/core';
import { LocaljsonService } from '../localjson.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  date = new Date();
  public createdDate = this.date.toString();
  public issueId = (this.date.getTime()).toString();
  constructor(private _localjsonService: LocaljsonService, private _router: Router) {
  }
  description: string;
  newDate: any;
  issues: any;
  status = 'Open';
  severity = 'Minor';
  addNew(data: any) {
    this.issues.push(data);
    this._localjsonService.setJSON(this.issues);
    alert('You have added a new issue. Please note down the issue id: ' + this.issueId);
    this._router.navigate(['issues']);
  }

  ngOnInit() {
    this.issues = this._localjsonService.getJSON();
  }

}

