// ajax.cache



(function() {

  // configure ajax
  ajax.options.cacheFirstPage = false; // we don't want to cache first page here
  ajax.options.autoScripts = false;
  ajax.options.autoCache = true;

  var location, data;
  
  test("test cache#insert", function() {
    
    // ensure that cache is empty here
    ajax.cache.empty();
    
    // insert our data
    location = "http://www.example.com/";
    data = "<p>Hello world!</p>";
    
    // run tests
    equal(ajax.cache.insert(location, data), data); // returns cached item
  });
  
  
  
  test("test cache#get with location passed", function() {
    
    // insert our data
    location = "http://www.example.com/";
    data = "<p>Hello world!</p>";
    
    ajax.cache.insert(location, data)
    
    // run tests
    equal(ajax.cache.get(location), data); // location passed
  });
  
  
  
  test("test cache#get with no params", function() {
    
    // insert our data
    location = "http://www.example.com/";
    data = "<p>Hello world!</p>";
    
    ajax.cache.insert(location, data);
    
    // run tests
    equal(ajax.cache.get()[location], data); // no params
  });
  
  test("test cache#empty empties cache", function() {
    
    // insert our data
    location = "http://www.example.com/";
    data = "<p>Hello world!</p>";
    
    ajax.cache.insert(location, data);
    
    ajax.cache.empty();
    
    // run tests
    equal(ajax.cache.get(location), undefined);
  });
  
}());
