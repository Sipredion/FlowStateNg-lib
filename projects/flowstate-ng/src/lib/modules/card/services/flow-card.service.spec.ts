import { TestBed } from '@angular/core/testing';

import { FlowCardService } from './flow-card.service';

describe('FlowCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowCardService = TestBed.get(FlowCardService);
    expect(service).toBeTruthy();
  });
});
