import { CLITestPage } from './app.po';

describe('clitest App', () => {
  let page: CLITestPage;

  beforeEach(() => {
    page = new CLITestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
