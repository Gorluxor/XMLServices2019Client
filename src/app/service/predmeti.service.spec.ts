import { TestBed, inject } from '@angular/core/testing';

import { PredmetiService } from './predmeti.service';

describe('PredmetiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredmetiService]
    });
  });

  it('should be created', inject([PredmetiService], (service: PredmetiService) => {
    expect(service).toBeTruthy();
  }));
});
