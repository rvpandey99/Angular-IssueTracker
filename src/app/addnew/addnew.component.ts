import { Component, OnInit } from '@angular/core';
import { LocaljsonService } from '../localjson.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  date = new Date();
  createdDate = this.date.toString();
  issueId = (this.date.getTime()).toString();
  constructor(private _localjsonService: LocaljsonService) {
  }
  issues: any;
  status = 'Open';
  severity = 'Minor';
  addNew(data: any) {
    // const issueObj = {
    //     Id: data.Id,
    //     CreatedDate: data.CreatedDate,
    //     Description: data.Description,
    //     Severity: data.Severity,
    //     Status: data.Status
    // };
    this.issues.push(data);
    this._localjsonService.setJSON(this.issues);
    alert('You have added a new issue. Please note down the issue id: ' + this.issueId);
  }

  ngOnInit() {
    this.issues = this._localjsonService.getJSON();
  }

}

