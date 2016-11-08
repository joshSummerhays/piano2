import { Piano2Page } from './app.po';

describe('piano2 App', function() {
  let page: Piano2Page;

  beforeEach(() => {
    page = new Piano2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
