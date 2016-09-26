/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataaccessService } from './dataaccess.service';

describe('Service: Dataaccess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataaccessService]
    });
  });

  it('should ...', inject([DataaccessService], (service: DataaccessService) => {
    expect(service).toBeTruthy();
  }));
});
