describe('NYT app', function() {
  it('should have a title', function() {
    browser.get('http://localhost:9000/');

    expect(browser.getTitle()).toEqual('NYT Explorer');
  });

  it('should have an article date that is the same as the date that is selected by the slider', function() {
    browser.get('http://localhost:9000/');
  
    expect(element(by.css('p .date')).getText()).
        toEqual(element(by.binding('vm.dateInWords')).getText());
  });
});