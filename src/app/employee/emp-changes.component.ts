/* tslint:disable:forin */
import {
  Component, Input, OnChanges,
  SimpleChanges
} from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-on-changes',
  template: `
  <div class="emp">
    <p> ----{{emp.first_name}} ---{{emp.last_name}} ---- {{emp.email}}</p>

    <h4>-- Change Log --</h4>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
  </div>
  `,
  styles: [
    '.emp {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ]
})


export class OnChangesComponent implements OnChanges {

  @Input() emp: Employee;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log('SimpleChanges');
    for (const propName in changes) {
      const chng = changes[propName];
      console.log('propName :' + propName + chng);
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  reset() { this.changeLog = []; }
}


