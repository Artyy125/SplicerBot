import { Injectable,Component } from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ButtonTooltipService {
  // toggling buttons
   toggleTooltip(event,tooltip: NgbTooltip,tooltip2: NgbTooltip): void {
    if (event.target.id === "button1")
    {
      tooltip.toggle();
      if (tooltip2.isOpen)
      {
        tooltip2.close();
      }
    }
    else if(event.target.id === "button2")
    {
      tooltip2.toggle()
      if (tooltip.isOpen)
      {
        tooltip.close();
      }
    }
  }
  // closing buttons by pressing esc key
  // also an accessibility feature which can enable tooltips by pressing enter and shift key
  checkKeyDown(event,tooltip: NgbTooltip,tooltip2: NgbTooltip) : void{ 
    if (event.keyCode === 27) {
      tooltip.close();
      tooltip2.close();
    }
    else if (event.keyCode === 13) {
      tooltip.toggle();
    }
    else if (event.keyCode === 16) {
      tooltip2.toggle();
    } 
  }

  // tooltip will be moved to the bottom of button while schrolling and it's reached to the edge of screen
  changeTooltipPositionOnSchrolling(event,tooltip: NgbTooltip,tooltip2: NgbTooltip) : void{
    if (event.value == false)
    {
      tooltip.placement = "bottom";
      tooltip2.placement = "bottom";
    }
    else
    {
      tooltip.placement = "top";
      tooltip2.placement = "top";
    }
  }
  // closing tooltip by clicking outside of buttons
  closeTooltipByclickingOutside(event,tooltip: NgbTooltip,tooltip2: NgbTooltip) : void{
    if(event.target.localName != 'button')
    {
      tooltip.close();
      tooltip2.close();
    }
  }
}
