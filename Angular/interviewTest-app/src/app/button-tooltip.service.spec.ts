import { TestBed, inject } from '@angular/core/testing';

import { ButtonTooltipService } from './button-tooltip.service';

describe('ButtonTooltipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonTooltipService]
    });
  });

  it('should be created', inject([ButtonTooltipService], (service: ButtonTooltipService) => {
    expect(service).toBeTruthy();
  }));
});
