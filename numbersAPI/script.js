const NumbersAPI = (() => {
  const _api = {};

  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'http://numbersapi.com/1337/trivia?notfound=floor&fragment', true)
  xhr.onload = function(){
      if (xhr.status === 200) {
          alert('Data produced: ' + xhr.responseText);
          console.log(xhr.responseText)
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  }

//   $.get('http://numbersapi.com/1337/trivia?notfound=floor&fragment', function(data) {
//     $('#number').text(data);
// });



  // _api.get = (type = 'trivia', number = 'random') => {
  //   // implement an ajax call here to get data
  //       console.log('hello! I must be implemented tho');
  //       console.log(type, number)
  // } // get

  // return _api;
})();

// QUESTION: how would you call the get() method above?
// what is the purpose of structuring out code like this?
