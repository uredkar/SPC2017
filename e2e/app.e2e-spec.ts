import { SPC2017Page } from './app.po';

describe('spc2017 App', function() {
  let page: SPC2017Page;

  beforeEach(() => {
    page = new SPC2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
