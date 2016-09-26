/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggingService } from './logging.service';

describe('Service: Logging', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggingService]
    });
  });

  it('should ...', inject([LoggingService], (service: LoggingService) => {
    expect(service).toBeTruthy();
  }));
});
