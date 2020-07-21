import {TestBed} from '@angular/core/testing';

import {UserSettingsRepositoryService} from './user-settings-repository.service';

describe('UserSettingsRepositoryService', () => {
  let service: UserSettingsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSettingsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
