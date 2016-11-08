import { TallerAngular2Page } from './app.po';

describe('taller-angular2 App', function() {
  let page: TallerAngular2Page;

  beforeEach(() => {
    page = new TallerAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
