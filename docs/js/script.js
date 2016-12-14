function callWKWebviewWithTitle(){
  window.webkit.messageHandlers.title.postMessage("Bridge WKWebView Demo");
}
function callWKWebviewWithImageUrl(){
  window.webkit.messageHandlers.imageUrl.postMessage("http://farm6.staticflickr.com/5613/15634745431_af629b9374.jpg");
}
function callWKWebviewWithStatusBarStyleDefault(){
  window.webkit.messageHandlers.statusBarStyleDefault.postMessage(true);
}
function callWKWebviewWithStatusBarStyleLight(){
  window.webkit.messageHandlers.statusBarStyleDefault.postMessage(false);
}
function callWKWebviewWithStatusBarShow(){
  window.webkit.messageHandlers.statusBarHidden.postMessage(false);
}
function callWKWebviewWithStatusBarHide(){
  window.webkit.messageHandlers.statusBarHidden.postMessage(true);
}
