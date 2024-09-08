import { TestBed } from '@angular/core/testing';

import { TextManipulatorService } from './text-manipulator.service';

describe('TextManipulatorService', () => {
  let service: TextManipulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextManipulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
