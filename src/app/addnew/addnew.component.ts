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

  addNew(data: any) {
    const issueObj = {
        Id: this.issueId,
        CreatedDate: this.createdDate,
        Description: data.description,
        Severity: data.radios,
        Status: data.statusradios
    };
    this.issues.push(issueObj);
    this._localjsonService.setJSON(this.issues);
    alert('You have added a new issue. Please note down the issue id: ' + this.issueId);
  }

  ngOnInit() {
    this.issues = this._localjsonService.getJSON();
  }

}

