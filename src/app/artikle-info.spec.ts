import { ArtikleInfo } from './artikle-info';

describe('ArtikleInfo', () => {
  it('should create an instance', () => {
    expect(new ArtikleInfo('default title', 'default content', 5, 'default author')).toBeTruthy();
  });
});
