import { AerialGracePage } from './app.po';

describe('aerial-grace App', () => {
  let page: AerialGracePage;

  beforeEach(() => {
    page = new AerialGracePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
