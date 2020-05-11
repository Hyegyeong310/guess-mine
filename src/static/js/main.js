(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNoti = handleMessageNoti;

function handleMessageNoti(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGkiLCJkYXRhIiwibWVzc2FnZSIsIm5pY2tuYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUFBLE1BQzlCQyxPQUQ4QixHQUNSRCxJQURRLENBQzlCQyxPQUQ4QjtBQUFBLE1BQ3JCQyxRQURxQixHQUNSRixJQURRLENBQ3JCRSxRQURxQjtBQUV0Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZUFBNEJELE9BQTVCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZU5vdGkoZGF0YSkge1xuICBjb25zdCB7IG1lc3NhZ2UsIG5pY2tuYW1lIH0gPSBkYXRhO1xuICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX06ICR7bWVzc2FnZX1gKTtcbn1cbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNicname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNoti", _chat.handleMessageNoti);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTdhYjI4NjkuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY25hbWUiLCJuaWNrbmFtZSIsIm9uIiwiaGFuZGxlTWVzc2FnZU5vdGkiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUEwQjtBQUFFRCxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBMUI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkgsT0FBcEI7QUFDRDs7QUFFRCxTQUFTSSxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtBQUM1QlIsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFSSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDRDs7QUFFRFIsTUFBTSxDQUFDUyxFQUFQLENBQVUsYUFBVixFQUF5QkMsdUJBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTWVzc2FnZU5vdGkgfSBmcm9tIFwiLi9jaGF0XCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcblxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xuICBjb25zb2xlLmxvZyhgWW91OiAke21lc3NhZ2V9YCk7XG59XG5cbmZ1bmN0aW9uIHNldE5pY25hbWUobmlja25hbWUpIHtcbiAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLCB7IG5pY2tuYW1lIH0pO1xufVxuXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aVwiLCBoYW5kbGVNZXNzYWdlTm90aSk7XG4iXX0=
},{"./chat":1}]},{},[2])