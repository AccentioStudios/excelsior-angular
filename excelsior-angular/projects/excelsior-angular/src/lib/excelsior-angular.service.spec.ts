import { TestBed } from '@angular/core/testing';

import { ExcelsiorAngularService } from './excelsior-angular.service';

describe('ExcelsiorAngularService', () => {
  let service: ExcelsiorAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelsiorAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
