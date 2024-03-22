import { TestBed } from '@angular/core/testing';

import { NazioniService } from './nazioni.service';

describe('NazioniService', () => {
  let service: NazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
