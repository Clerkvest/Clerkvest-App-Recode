import { TestBed } from '@angular/core/testing';

import { ImageControllerService } from './image-controller.service';

describe('ImageControllerService', () => {
  let service: ImageControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
