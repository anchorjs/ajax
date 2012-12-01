define(function() {

  function AjaxError(message, statusCode, statusText) {
    this.name = 'AjaxError';
    this.message = message || 'Ajax error';
    this.statusCode = statusCode;
    this.statusText = statusText;
  }
  AjaxError.prototype = new Error();
  AjaxError.prototype.constructor = AjaxError;

  return AjaxError;
});
