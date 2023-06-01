import { TestBed } from '@angular/core/testing';

import { PostDatabaseService } from './post-database.service';

describe('PostDatabaseService', () => {
  let service: PostDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
