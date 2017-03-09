import { CryptJpPage } from './app.po';

describe('crypt-jp App', function() {
  let page: CryptJpPage;

  beforeEach(() => {
    page = new CryptJpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
