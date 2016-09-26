/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TracingService } from './tracing.service';

describe('Service: Tracing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TracingService]
    });
  });

  it('should ...', inject([TracingService], (service: TracingService) => {
    expect(service).toBeTruthy();
  }));
});
