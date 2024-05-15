import { TestBed } from '@angular/core/testing';

import { Lektion2Service } from './lektion2.service';

describe('Lektion2Service', () => {
  let service: Lektion2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lektion2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('variable should be set', () => {
    service.namn = "banana";
    service.foretag = "hej AB";

    expect(service.namn).toBe("banana");
    expect(service.namn).toBe("hej AB");

  });
});
