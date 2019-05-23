import { TestBed } from '@angular/core/testing';

import { EventLoggingService } from './event-logging.service';

describe('EventLoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventLoggingService = TestBed.get(EventLoggingService);
    expect(service).toBeTruthy();
  });
});
