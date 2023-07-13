import { TestBed } from '@angular/core/testing';

import { XmlDbService } from './xml-db.service';

describe('XmlDbService', () => {
  let service: XmlDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
