const message = "Hello! Chào mừng đến với bài ví dụ về webpack"; // const let
module.exports = {
  Mes: message,
  check_number: function (event) {
    if(event.keyCode >= 48 && event.keyCode <= 57){
      console.log(event.keyCode);
      event.returnValue = true;
      return;
    }
    event.returnValue = false;
  },
  handle_number: function () {

      //ES6
      let arr = [];
      for (let i = 0; i < 3 ;i++) {
          arr[i] = function () {
            console.log(i);
          }
      }
      //ES5
      arr[0]();
      arr[1]();
      arr[2]();

      for (var i = 0; i < arr.length; i++) {
          console.log(i + typeof i + ': ');
          arr[i]();
      }
  }
};
