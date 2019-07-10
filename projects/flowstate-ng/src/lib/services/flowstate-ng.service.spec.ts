import { TestBed } from '@angular/core/testing';

import { FlowstateNgService } from './flowstate-ng.service';

describe('FlowstateNgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowstateNgService = TestBed.get(FlowstateNgService);
    expect(service).toBeTruthy();
  });
});
