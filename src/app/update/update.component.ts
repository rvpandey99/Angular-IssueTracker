import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocaljsonService } from '../localjson.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() public ID;

  @Output() public upevent = new EventEmitter();
  issues: any;
  constructor(private _localjsonService: LocaljsonService, private _router: Router) { }

  ngOnInit() {
    this.issues = this._localjsonService.getJSON();
  }

  update(data) {
    for (let i = 0; i < this.issues.length; i++) {
      if (data.Id === this.issues[i].Id) {
        this.issues[i] = data;
      }
    }
    this._localjsonService.setJSON(this.issues);
    this.upevent.emit( false );
    // this._router.navigate(['issues']);
  }
}
