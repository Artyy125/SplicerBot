import { Component,ViewChild,HostListener } from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipWindow } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip';
import {ButtonTooltipService} from './button-tooltip.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ButtonTooltipService,NgbTooltip]
})
export class AppComponent {
  firstTooltip = "This is the first tooltip";
  secondTooltip = "This is the second tooltip";
  constructor(private _buttonTooltip : ButtonTooltipService) { }

  @ViewChild('t') public tooltip: NgbTooltip;
  @ViewChild('t2') public tooltip2: NgbTooltip;
  title = 'Interview Test App';
  @HostListener('document:click', ['$event'])

  clickout(event) {
    this._buttonTooltip.closeTooltipByclickingOutside(event,this.tooltip,this.tooltip2);
  }
  action(event)
  {
    this._buttonTooltip.changeTooltipPositionOnSchrolling(event,this.tooltip,this.tooltip2);
  }
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this._buttonTooltip.checkKeyDown(event,this.tooltip,this.tooltip2);
  }
  public toggleTooltip(event): void {
    this._buttonTooltip.toggleTooltip(event,this.tooltip,this.tooltip2);
  }
  
}
