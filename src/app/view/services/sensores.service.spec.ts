/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SensoresService } from './sensores.service';

describe('Service: Sensores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensoresService]
    });
  });

  it('should ...', inject([SensoresService], (service: SensoresService) => {
    expect(service).toBeTruthy();
  }));
});
