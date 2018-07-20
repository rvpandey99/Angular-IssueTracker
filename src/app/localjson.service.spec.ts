import { TestBed, inject } from '@angular/core/testing';

import { LocaljsonService } from './localjson.service';

describe('LocaljsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaljsonService]
    });
  });

  it('should be created', inject([LocaljsonService], (service: LocaljsonService) => {
    expect(service).toBeTruthy();
  }));
});
