import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';

import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should set headers', () => {
    let header = service.getHeaders();

    expect(header.get('Authorization')).toContain('Bearer');
    // expect(header.get('Accept')).toBe('application/json');
    // expect(header.get('Content-Type')).toBe('application/json');
  });

  it('should get basePath variable', () => {

    environment.basePath = 'localhost:0000';

    let basePath = service.getBasePath();
    expect(basePath).toBe('localhost:0000');

    environment.basePath = undefined;
    basePath = service.getBasePath();
    expect(basePath).toBe('localhost:8080');
  });
});
