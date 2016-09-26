/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppconfigService } from './appconfig.service';

describe('Service: Appconfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppconfigService]
    });
  });

  it('should ...', inject([AppconfigService], (service: AppconfigService) => {
    expect(service).toBeTruthy();
  }));
});
