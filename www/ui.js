mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1404 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node129 = $("<span>");
  root1404.append(node129);
  var condSubs41 = new mobl.CompSubscription();
  subs__.addSub(condSubs41);
  var oldValue41;
  var renderCond41 = function() {
    var value65 = value.get();
    if(oldValue41 === value65) return;
    oldValue41 = value65;
    var subs__ = condSubs41;
    subs__.unsubscribe();
    node129.empty();
    if(value65) {
      var nodes1261 = $("<span>");
      node129.append(nodes1261);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl34();
      }));
      
      function renderControl34() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1405 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1405); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1261;
          nodes1261 = node.contents();
          oldNodes.replaceWith(nodes1261);
        }));
      }
      renderControl34();
      
      
    } else {
      var nodes1262 = $("<span>");
      node129.append(nodes1262);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1406 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1263 = $("<span>");
        root1406.append(nodes1263);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1407 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1407); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1263;
          nodes1263 = node.contents();
          oldNodes.replaceWith(nodes1263);
        }));
        var nodes1264 = $("<span>");
        root1406.append(nodes1264);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1408 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1408); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1264;
          nodes1264 = node.contents();
          oldNodes.replaceWith(nodes1264);
        }));
        callback(root1406); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1262;
        nodes1262 = node.contents();
        oldNodes.replaceWith(nodes1262);
      }));
      
      
    }
  };
  renderCond41();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond41();
  }));
  
  callback(root1404); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1409 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node130 = $("<div>");
  
  var ref100 = mobl.ref(ui.headerStyle);
  if(ref100.get() !== null) {
    node130.attr('class', ref100.get());
    subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
      node130.attr('class', val);
    }));
    
  }
  subs__.addSub(ref100.rebind());
  
  var val41 = onclick.get();
  if(val41 !== null) {
    subs__.addSub(mobl.domBind(node130, 'tap', val41));
  }
  
  var ref101 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref101.get() !== null) {
    node130.attr('style', ref101.get());
    subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
      node130.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node130.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref101.rebind());
  
  
  var node133 = $("<div>");
  
  var ref99 = mobl.ref(ui.headerContainerStyle);
  if(ref99.get() !== null) {
    node133.attr('class', ref99.get());
    subs__.addSub(ref99.addEventListener('change', function(_, ref, val) {
      node133.attr('class', val);
    }));
    
  }
  subs__.addSub(ref99.rebind());
  
  
  var node134 = $("<div>");
  
  var ref97 = text;
  node134.text(""+ref97.get());
  var ignore19 = false;
  subs__.addSub(ref97.addEventListener('change', function(_, ref, val) {
    if(ignore19) return;
    node134.text(""+val);
  }));
  subs__.addSub(ref97.rebind());
  
  
  var ref98 = mobl.ref(ui.headerTextStyle);
  if(ref98.get() !== null) {
    node134.attr('class', ref98.get());
    subs__.addSub(ref98.addEventListener('change', function(_, ref, val) {
      node134.attr('class', val);
    }));
    
  }
  subs__.addSub(ref98.rebind());
  
  node133.append(node134);
  node130.append(node133);
  var nodes1265 = $("<span>");
  node130.append(nodes1265);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl35();
  }));
  
  function renderControl35() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1410 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1410); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1265;
      nodes1265 = node.contents();
      oldNodes.replaceWith(nodes1265);
    }));
  }
  renderControl35();
  root1409.append(node130);
  
  var node131 = $("<span>");
  root1409.append(node131);
  var condSubs42 = new mobl.CompSubscription();
  subs__.addSub(condSubs42);
  var oldValue42;
  var renderCond42 = function() {
    var value66 = fixedPosition.get();
    if(oldValue42 === value66) return;
    oldValue42 = value66;
    var subs__ = condSubs42;
    subs__.unsubscribe();
    node131.empty();
    if(value66) {
      
      var node132 = $("<div>");
      node132.attr('id', "hello");
      node132.attr('style', "height: 2.9em;");
      
      node131.append(node132);
      
      
    } else {
      
    }
  };
  renderCond42();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond42();
  }));
  
  callback(root1409); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1411 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref102 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref102.get() !== null) {
    sp.attr('class', ref102.get());
    subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref102.rebind());
  
  var val42 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val42 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val42));
  }
  
  var val43 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val43 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val43));
  }
  
  var val44 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after9(result__) {
                    var tmp1305 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after9);if(result__ !== undefined) after9(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val44 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val44));
  }
  
  var val45 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val45 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val45));
  }
  
  var ref103 = text;
  sp.text(""+ref103.get());
  var ignore20 = false;
  subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
    if(ignore20) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref103.rebind());
  
  
  root1411.append(sp);
  callback(root1411); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1412 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1266 = $("<span>");
  root1412.append(nodes1266);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1413 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1413); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1266;
    nodes1266 = node.contents();
    oldNodes.replaceWith(nodes1266);
  }));
  callback(root1412); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1267 = $("<span>");
  root1414.append(nodes1267);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1415 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1415); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1267;
    nodes1267 = node.contents();
    oldNodes.replaceWith(nodes1267);
  }));
  callback(root1414); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node135 = $("<ul>");
  
  var ref104 = mobl.ref(ui.groupStyle);
  if(ref104.get() !== null) {
    node135.attr('class', ref104.get());
    subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
      node135.attr('class', val);
    }));
    
  }
  subs__.addSub(ref104.rebind());
  
  var nodes1268 = $("<span>");
  node135.append(nodes1268);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl36();
  }));
  
  function renderControl36() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1417 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1417); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1268;
      nodes1268 = node.contents();
      oldNodes.replaceWith(nodes1268);
    }));
  }
  renderControl36();
  root1416.append(node135);
  callback(root1416); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1418 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node136 = $("<img>");
  
  var ref105 = url;
  if(ref105.get() !== null) {
    node136.attr('src', ref105.get());
    subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
      node136.attr('src', val);
    }));
    
  }
  subs__.addSub(ref105.rebind());
  
  var ref106 = width;
  if(ref106.get() !== null) {
    node136.attr('width', ref106.get());
    subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
      node136.attr('width', val);
    }));
    
  }
  subs__.addSub(ref106.rebind());
  
  var ref107 = height;
  if(ref107.get() !== null) {
    node136.attr('height', ref107.get());
    subs__.addSub(ref107.addEventListener('change', function(_, ref, val) {
      node136.attr('height', val);
    }));
    
  }
  subs__.addSub(ref107.rebind());
  
  var ref109 = style;
  if(ref109.get() !== null) {
    node136.attr('class', ref109.get());
    subs__.addSub(ref109.addEventListener('change', function(_, ref, val) {
      node136.attr('class', val);
    }));
    
  }
  subs__.addSub(ref109.rebind());
  
  var val46 = onclick.get();
  if(val46 !== null) {
    subs__.addSub(mobl.domBind(node136, 'tap', val46));
  }
  
  var ref110 = valign;
  if(ref110.get() !== null) {
    node136.attr('valign', ref110.get());
    subs__.addSub(ref110.addEventListener('change', function(_, ref, val) {
      node136.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref110.rebind());
  
  var ref111 = align;
  if(ref111.get() !== null) {
    node136.attr('align', ref111.get());
    subs__.addSub(ref111.addEventListener('change', function(_, ref, val) {
      node136.attr('align', val);
    }));
    
  }
  subs__.addSub(ref111.rebind());
  
  root1418.append(node136);
  callback(root1418); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1419 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref112 = mobl.ref(ui.itemStyle);
  if(ref112.get() !== null) {
    el.attr('class', ref112.get());
    subs__.addSub(ref112.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref112.rebind());
  
  var ref113 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref113.get() !== null) {
    el.attr('class', ref113.get());
    subs__.addSub(ref113.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref113.rebind());
  
  var val47 = onswipe.get();
  if(val47 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val47));
  }
  
  var val48 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1306 = result__;
                                           function after10(result__) {
                                             var tmp1307 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after10);if(result__ !== undefined) after10(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1308 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val48 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val48));
  }
  
  var nodes1269 = $("<span>");
  el.append(nodes1269);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl37();
  }));
  
  function renderControl37() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1420 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1420); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1269;
      nodes1269 = node.contents();
      oldNodes.replaceWith(nodes1269);
    }));
  }
  renderControl37();
  root1419.append(el);
  callback(root1419); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1421 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node137 = $("<input>");
  node137.attr('type', "checkbox");
  
  var ref115 = b;
  node137.attr('checked', !!ref115.get());
  subs__.addSub(ref115.addEventListener('change', function(_, ref, val) {
    if(ref === ref115) node137.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node137, 'change', function() {
    b.set(!!node137.attr('checked'));
  }));
  
  var val50 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val50 !== null) {
    subs__.addSub(mobl.domBind(node137, 'tap', val50));
  }
  
  var val51 = onchange.get();
  if(val51 !== null) {
    subs__.addSub(mobl.domBind(node137, 'change', val51));
  }
  
  root1421.append(node137);
  
  root1421.append(" ");
  
  var node138 = $("<span>");
  
  var ref114 = label;
  node138.text(""+ref114.get());
  var ignore21 = false;
  subs__.addSub(ref114.addEventListener('change', function(_, ref, val) {
    if(ignore21) return;
    node138.text(""+val);
  }));
  subs__.addSub(ref114.rebind());
  
  
  var val49 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after11(result__) {
                    var tmp1309 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after11);if(result__ !== undefined) after11(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val49 !== null) {
    subs__.addSub(mobl.domBind(node138, 'tap', val49));
  }
  
  root1421.append(node138);
  callback(root1421); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';
ui.textFieldInvalidStyle = 'ui__textFieldInvalidStyle';
ui.textFieldLabelStyle = 'ui__textFieldLabelStyle';
ui.validationMessageStyle = 'ui__validationMessageStyle';
ui.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


ui.textField = function(s, placeholder, label, inputType, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1422 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node139 = $("<span>");
  root1422.append(node139);
  var condSubs43 = new mobl.CompSubscription();
  subs__.addSub(condSubs43);
  var oldValue43;
  var renderCond43 = function() {
    var value67 = label.get();
    if(oldValue43 === value67) return;
    oldValue43 = value67;
    var subs__ = condSubs43;
    subs__.unsubscribe();
    node139.empty();
    if(value67) {
      var nodes1270 = $("<span>");
      node139.append(nodes1270);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1423 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1423); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1270;
        nodes1270 = node.contents();
        oldNodes.replaceWith(nodes1270);
      }));
      
      
    } else {
      
    }
  };
  renderCond43();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond43();
  }));
  
  
  var node140 = $("<span>");
  root1422.append(node140);
  var condSubs44 = new mobl.CompSubscription();
  subs__.addSub(condSubs44);
  var oldValue44;
  var renderCond44 = function() {
    var value68 = validator.get();
    if(oldValue44 === value68) return;
    oldValue44 = value68;
    var subs__ = condSubs44;
    subs__.unsubscribe();
    node140.empty();
    if(value68) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after15(result__) {
        var tmp1310 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1311 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node141 = $("<input>");
        
        var ref116 = inputType;
        if(ref116.get() !== null) {
          node141.attr('type', ref116.get());
          subs__.addSub(ref116.addEventListener('change', function(_, ref, val) {
            node141.attr('type', val);
          }));
          
        }
        subs__.addSub(ref116.rebind());
        
        var ref117 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref117.get() !== null) {
          node141.attr('class', ref117.get());
          subs__.addSub(ref117.addEventListener('change', function(_, ref, val) {
            node141.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node141.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node141.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node141.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref117.rebind());
        
        var ref118 = placeholder;
        if(ref118.get() !== null) {
          node141.attr('placeholder', ref118.get());
          subs__.addSub(ref118.addEventListener('change', function(_, ref, val) {
            node141.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref118.rebind());
        
        var ref119 = temp;
        node141.val(""+ref119.get());
        var ignore22 = false;
        subs__.addSub(ref119.addEventListener('change', function(_, ref, val) {
          if(ignore22) return;
          node141.val(""+val);
        }));
        subs__.addSub(ref119.rebind());
        
        subs__.addSub(mobl.domBind(node141, 'keyup change', function() {
          ignore22 = true;
          temp.set(mobl.stringTomobl__String(node141.val()));
          ignore22 = false;
        }));
        
        
        var val52 = onchange.get();
        if(val52 !== null) {
          subs__.addSub(mobl.domBind(node141, 'change', val52));
        }
        
        var val53 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after12(result__) {
                          var tmp1312 = result__;
                          function after13(result__) {
                            var tmp1313 = result__;
                            var result__ = tmp1313;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after13);if(result__ !== undefined) after13(result__);
                        }
                        var result__ = onkeyup.get()(event, after12);if(result__ !== undefined) after12(result__);
                      } else {
                        {
                          function after14(result__) {
                            var tmp1313 = result__;
                            var result__ = tmp1313;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after14);if(result__ !== undefined) after14(result__);
                        }
                      }
                    };
        if(val53 !== null) {
          subs__.addSub(mobl.domBind(node141, 'keyup', val53));
        }
        
        var val54 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val54 !== null) {
          subs__.addSub(mobl.domBind(node141, 'blur', val54));
        }
        
        node140.append(node141);
        var nodes1271 = $("<span>");
        node140.append(nodes1271);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1424 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1424); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1271;
          nodes1271 = node.contents();
          oldNodes.replaceWith(nodes1271);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after15);if(result__ !== undefined) after15(result__);
    } else {
      
      var node142 = $("<input>");
      
      var ref120 = inputType;
      if(ref120.get() !== null) {
        node142.attr('type', ref120.get());
        subs__.addSub(ref120.addEventListener('change', function(_, ref, val) {
          node142.attr('type', val);
        }));
        
      }
      subs__.addSub(ref120.rebind());
      
      var ref121 = style;
      if(ref121.get() !== null) {
        node142.attr('class', ref121.get());
        subs__.addSub(ref121.addEventListener('change', function(_, ref, val) {
          node142.attr('class', val);
        }));
        
      }
      subs__.addSub(ref121.rebind());
      
      var ref122 = placeholder;
      if(ref122.get() !== null) {
        node142.attr('placeholder', ref122.get());
        subs__.addSub(ref122.addEventListener('change', function(_, ref, val) {
          node142.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref122.rebind());
      
      var ref123 = s;
      node142.val(""+ref123.get());
      var ignore23 = false;
      subs__.addSub(ref123.addEventListener('change', function(_, ref, val) {
        if(ignore23) return;
        node142.val(""+val);
      }));
      subs__.addSub(ref123.rebind());
      
      subs__.addSub(mobl.domBind(node142, 'keyup change', function() {
        ignore23 = true;
        s.set(mobl.stringTomobl__String(node142.val()));
        ignore23 = false;
      }));
      
      
      var val55 = onchange.get();
      if(val55 !== null) {
        subs__.addSub(mobl.domBind(node142, 'change', val55));
      }
      
      var val56 = onkeyup.get();
      if(val56 !== null) {
        subs__.addSub(mobl.domBind(node142, 'keyup', val56));
      }
      
      var val57 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val57 !== null) {
        subs__.addSub(mobl.domBind(node142, 'blur', val57));
      }
      
      node140.append(node142);
      
      
    }
  };
  renderCond44();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond44();
  }));
  
  callback(root1422); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1425 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1272 = $("<span>");
  root1425.append(nodes1272);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1426 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1426); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1272;
    nodes1272 = node.contents();
    oldNodes.replaceWith(nodes1272);
  }));
  callback(root1425); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1427 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1273 = $("<span>");
  root1427.append(nodes1273);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1428 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1428); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1273;
    nodes1273 = node.contents();
    oldNodes.replaceWith(nodes1273);
  }));
  callback(root1427); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1429 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node143 = $("<span>");
  root1429.append(node143);
  var condSubs45 = new mobl.CompSubscription();
  subs__.addSub(condSubs45);
  var oldValue45;
  var renderCond45 = function() {
    var value69 = label.get();
    if(oldValue45 === value69) return;
    oldValue45 = value69;
    var subs__ = condSubs45;
    subs__.unsubscribe();
    node143.empty();
    if(value69) {
      var nodes1274 = $("<span>");
      node143.append(nodes1274);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1430 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1430); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1274;
        nodes1274 = node.contents();
        oldNodes.replaceWith(nodes1274);
      }));
      
      
    } else {
      
    }
  };
  renderCond45();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond45();
  }));
  
  
  var node144 = $("<input>");
  node144.attr('type', "range");
  
  var ref124 = n;
  node144.val(""+ref124.get());
  var ignore24 = false;
  subs__.addSub(ref124.addEventListener('change', function(_, ref, val) {
    if(ignore24) return;
    node144.val(""+val);
  }));
  subs__.addSub(ref124.rebind());
  
  subs__.addSub(mobl.domBind(node144, 'keyup change', function() {
    ignore24 = true;
    n.set(mobl.stringTomobl__Num(node144.val()));
    ignore24 = false;
  }));
  
  
  var ref125 = min;
  if(ref125.get() !== null) {
    node144.attr('min', ref125.get());
    subs__.addSub(ref125.addEventListener('change', function(_, ref, val) {
      node144.attr('min', val);
    }));
    
  }
  subs__.addSub(ref125.rebind());
  
  var ref126 = max;
  if(ref126.get() !== null) {
    node144.attr('max', ref126.get());
    subs__.addSub(ref126.addEventListener('change', function(_, ref, val) {
      node144.attr('max', val);
    }));
    
  }
  subs__.addSub(ref126.rebind());
  
  var ref127 = step;
  if(ref127.get() !== null) {
    node144.attr('step', ref127.get());
    subs__.addSub(ref127.addEventListener('change', function(_, ref, val) {
      node144.attr('step', val);
    }));
    
  }
  subs__.addSub(ref127.rebind());
  node144.attr('style', "width: 99%;");
  
  var val58 = onchange.get();
  if(val58 !== null) {
    subs__.addSub(mobl.domBind(node144, 'change', val58));
  }
  
  var val59 = onkeyup.get();
  if(val59 !== null) {
    subs__.addSub(mobl.domBind(node144, 'keyup', val59));
  }
  
  var ref128 = placeholder;
  if(ref128.get() !== null) {
    node144.attr('placeholder', ref128.get());
    subs__.addSub(ref128.addEventListener('change', function(_, ref, val) {
      node144.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref128.rebind());
  
  root1429.append(node144);
  callback(root1429); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1431 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after16(result__) {
      var tmp1314 = result__;
      var result__ = tmp1314;
      var m = result__;
      var result__ = !m;
      if(result__) {
        var result__ = n2;
        n.set(result__);
        var result__ = m;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = m;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    var result__ = validator.get()(n2, after16);if(result__ !== undefined) after16(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1275 = $("<span>");
  root1431.append(nodes1275);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1432 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1432); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1275;
    nodes1275 = node.contents();
    oldNodes.replaceWith(nodes1275);
  }));
  callback(root1431); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1433 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node145 = $("<span>");
  root1433.append(node145);
  var condSubs46 = new mobl.CompSubscription();
  subs__.addSub(condSubs46);
  var oldValue46;
  var renderCond46 = function() {
    var value70 = label.get();
    if(oldValue46 === value70) return;
    oldValue46 = value70;
    var subs__ = condSubs46;
    subs__.unsubscribe();
    node145.empty();
    if(value70) {
      
      var node146 = $("<span>");
      node146.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref132 = label;
      node146.text(""+ref132.get());
      var ignore26 = false;
      subs__.addSub(ref132.addEventListener('change', function(_, ref, val) {
        if(ignore26) return;
        node146.text(""+val);
      }));
      subs__.addSub(ref132.rebind());
      
      
      node145.append(node146);
      
      var node147 = $("<span>");
      node147.attr('style', "float: left");
      
      
      var node148 = $("<input>");
      node148.attr('type', "password");
      
      var ref129 = style;
      if(ref129.get() !== null) {
        node148.attr('class', ref129.get());
        subs__.addSub(ref129.addEventListener('change', function(_, ref, val) {
          node148.attr('class', val);
        }));
        
      }
      subs__.addSub(ref129.rebind());
      
      var ref130 = placeholder;
      if(ref130.get() !== null) {
        node148.attr('placeholder', ref130.get());
        subs__.addSub(ref130.addEventListener('change', function(_, ref, val) {
          node148.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref130.rebind());
      
      var ref131 = s;
      node148.val(""+ref131.get());
      var ignore25 = false;
      subs__.addSub(ref131.addEventListener('change', function(_, ref, val) {
        if(ignore25) return;
        node148.val(""+val);
      }));
      subs__.addSub(ref131.rebind());
      
      subs__.addSub(mobl.domBind(node148, 'keyup change', function() {
        ignore25 = true;
        s.set(mobl.stringTomobl__String(node148.val()));
        ignore25 = false;
      }));
      
      
      var val60 = onchange.get();
      if(val60 !== null) {
        subs__.addSub(mobl.domBind(node148, 'change', val60));
      }
      
      var val61 = onkeyup.get();
      if(val61 !== null) {
        subs__.addSub(mobl.domBind(node148, 'keyup', val61));
      }
      
      var val62 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val62 !== null) {
        subs__.addSub(mobl.domBind(node148, 'blur', val62));
      }
      
      node147.append(node148);
      node145.append(node147);
      
      
      
      
    } else {
      
      var node149 = $("<input>");
      node149.attr('type', "password");
      
      var ref133 = style;
      if(ref133.get() !== null) {
        node149.attr('class', ref133.get());
        subs__.addSub(ref133.addEventListener('change', function(_, ref, val) {
          node149.attr('class', val);
        }));
        
      }
      subs__.addSub(ref133.rebind());
      
      var ref134 = placeholder;
      if(ref134.get() !== null) {
        node149.attr('placeholder', ref134.get());
        subs__.addSub(ref134.addEventListener('change', function(_, ref, val) {
          node149.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref134.rebind());
      
      var ref135 = s;
      node149.val(""+ref135.get());
      var ignore27 = false;
      subs__.addSub(ref135.addEventListener('change', function(_, ref, val) {
        if(ignore27) return;
        node149.val(""+val);
      }));
      subs__.addSub(ref135.rebind());
      
      subs__.addSub(mobl.domBind(node149, 'keyup change', function() {
        ignore27 = true;
        s.set(mobl.stringTomobl__String(node149.val()));
        ignore27 = false;
      }));
      
      
      var val63 = onchange.get();
      if(val63 !== null) {
        subs__.addSub(mobl.domBind(node149, 'change', val63));
      }
      
      var val64 = onkeyup.get();
      if(val64 !== null) {
        subs__.addSub(mobl.domBind(node149, 'keyup', val64));
      }
      
      var val65 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val65 !== null) {
        subs__.addSub(mobl.domBind(node149, 'blur', val65));
      }
      
      node145.append(node149);
      
      
    }
  };
  renderCond46();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond46();
  }));
  
  callback(root1433); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1434 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref140 = style;
  if(ref140.get() !== null) {
    sel.attr('class', ref140.get());
    subs__.addSub(ref140.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref140.rebind());
  
  var val66 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after17(result__) {
                    var tmp1316 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after17);if(result__ !== undefined) after17(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val66 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val66));
  }
  
  
  var node150 = mobl.loadingSpan();
  sel.append(node150);
  var list10;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList10 = function() {
    var subs__ = listSubs__;
    list10 = options.get();
    list10.list(function(results10) {
      node150.empty();
      for(var i265 = 0; i265 < results10.length; i265++) {
        (function() {
          var iternode10 = $("<span>");
          node150.append(iternode10);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results10), i265), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results10), i265), "_2");
          
          var node151 = $("<option>");
          
          var ref136 = optionDescription;
          node151.text(""+ref136.get());
          var ignore28 = false;
          subs__.addSub(ref136.addEventListener('change', function(_, ref, val) {
            if(ignore28) return;
            node151.text(""+val);
          }));
          subs__.addSub(ref136.rebind());
          
          
          var ref137 = optionStyle;
          if(ref137.get() !== null) {
            node151.attr('class', ref137.get());
            subs__.addSub(ref137.addEventListener('change', function(_, ref, val) {
              node151.attr('class', val);
            }));
            
          }
          subs__.addSub(ref137.rebind());
          
          var ref138 = optionValue;
          if(ref138.get() !== null) {
            node151.attr('value', ref138.get());
            subs__.addSub(ref138.addEventListener('change', function(_, ref, val) {
              node151.attr('value', val);
            }));
            
          }
          subs__.addSub(ref138.rebind());
          
          var ref139 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref139.get() !== null) {
            node151.attr('selected', ref139.get());
            subs__.addSub(ref139.addEventListener('change', function(_, ref, val) {
              node151.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node151.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node151.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref139.rebind());
          
          iternode10.append(node151);
          
          var oldNodes = iternode10;
          iternode10 = iternode10.contents();
          oldNodes.replaceWith(iternode10);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list10.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
    });
  };
  renderList10();
  
  root1434.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1434); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1435 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1276 = $("<span>");
    root1435.append(nodes1276);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1436 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node152 = mobl.loadingSpan();
      root1436.append(node152);
      var list11;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList11 = function() {
        var subs__ = listSubs__;
        list11 = tabs.get();
        list11.list(function(results11) {
          node152.empty();
          for(var i266 = 0; i266 < results11.length; i266++) {
            (function() {
              var iternode11 = $("<span>");
              node152.append(iternode11);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results11), i266), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results11), i266), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results11), i266), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp1278 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp1278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp1278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp1277 = mobl.ref(result__);
              
              var nodes1277 = $("<span>");
              iternode11.append(nodes1277);
              subs__.addSub((mobl.span)(tmp1278, mobl.ref(null), tmp1277, mobl.ref(null), function(_, callback) {
                var root1437 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1278 = $("<span>");
                root1437.append(nodes1278);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1438 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1438); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1278;
                  nodes1278 = node.contents();
                  oldNodes.replaceWith(nodes1278);
                }));
                callback(root1437); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1277;
                nodes1277 = node.contents();
                oldNodes.replaceWith(nodes1277);
              }));
              
              var oldNodes = iternode11;
              iternode11 = iternode11.contents();
              oldNodes.replaceWith(iternode11);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list11.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
        });
      };
      renderList11();
      
      callback(root1436); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1276;
      nodes1276 = node.contents();
      oldNodes.replaceWith(nodes1276);
    }));
    
    var node153 = mobl.loadingSpan();
    root1435.append(node153);
    var list12;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList12 = function() {
      var subs__ = listSubs__;
      list12 = tabs.get();
      list12.list(function(results12) {
        node153.empty();
        for(var i267 = 0; i267 < results12.length; i267++) {
          (function() {
            var iternode12 = $("<span>");
            node153.append(iternode12);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results12), i267), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results12), i267), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results12), i267), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp1279 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp1279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp1279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp1279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1279 = $("<span>");
            iternode12.append(nodes1279);
            subs__.addSub((mobl.block)(tmp1279, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1439 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1280 = $("<span>");
              root1439.append(nodes1280);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1440 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1281 = $("<span>");
                root1440.append(nodes1281);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl38();
                }));
                
                function renderControl38() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1441 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1441); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1281;
                    nodes1281 = node.contents();
                    oldNodes.replaceWith(nodes1281);
                  }));
                }
                renderControl38();
                callback(root1440); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1280;
                nodes1280 = node.contents();
                oldNodes.replaceWith(nodes1280);
              }));
              callback(root1439); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1279;
              nodes1279 = node.contents();
              oldNodes.replaceWith(nodes1279);
            }));
            
            var oldNodes = iternode12;
            iternode12 = iternode12.contents();
            oldNodes.replaceWith(iternode12);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list12.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
      });
    };
    renderList12();
    
    callback(root1435); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1276 = $("<span>");
      root1435.append(nodes1276);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1436 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node152 = mobl.loadingSpan();
        root1436.append(node152);
        var list11;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList11 = function() {
          var subs__ = listSubs__;
          list11 = tabs.get();
          list11.list(function(results11) {
            node152.empty();
            for(var i266 = 0; i266 < results11.length; i266++) {
              (function() {
                var iternode11 = $("<span>");
                node152.append(iternode11);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results11), i266), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results11), i266), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results11), i266), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp1278 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp1278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp1278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp1278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp1278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1277 = mobl.ref(result__);
                
                var nodes1277 = $("<span>");
                iternode11.append(nodes1277);
                subs__.addSub((mobl.span)(tmp1278, mobl.ref(null), tmp1277, mobl.ref(null), function(_, callback) {
                  var root1437 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1278 = $("<span>");
                  root1437.append(nodes1278);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1438 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1438); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1278;
                    nodes1278 = node.contents();
                    oldNodes.replaceWith(nodes1278);
                  }));
                  callback(root1437); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1277;
                  nodes1277 = node.contents();
                  oldNodes.replaceWith(nodes1277);
                }));
                
                var oldNodes = iternode11;
                iternode11 = iternode11.contents();
                oldNodes.replaceWith(iternode11);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list11.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
          });
        };
        renderList11();
        
        callback(root1436); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1276;
        nodes1276 = node.contents();
        oldNodes.replaceWith(nodes1276);
      }));
      
      var node153 = mobl.loadingSpan();
      root1435.append(node153);
      var list12;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList12 = function() {
        var subs__ = listSubs__;
        list12 = tabs.get();
        list12.list(function(results12) {
          node153.empty();
          for(var i267 = 0; i267 < results12.length; i267++) {
            (function() {
              var iternode12 = $("<span>");
              node153.append(iternode12);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results12), i267), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results12), i267), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results12), i267), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp1279 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp1279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp1279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1279 = $("<span>");
              iternode12.append(nodes1279);
              subs__.addSub((mobl.block)(tmp1279, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1439 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1280 = $("<span>");
                root1439.append(nodes1280);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1440 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1281 = $("<span>");
                  root1440.append(nodes1281);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl38();
                  }));
                  
                  function renderControl38() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1441 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1441); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1281;
                      nodes1281 = node.contents();
                      oldNodes.replaceWith(nodes1281);
                    }));
                  }
                  renderControl38();
                  callback(root1440); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1280;
                  nodes1280 = node.contents();
                  oldNodes.replaceWith(nodes1280);
                }));
                callback(root1439); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1279;
                nodes1279 = node.contents();
                oldNodes.replaceWith(nodes1279);
              }));
              
              var oldNodes = iternode12;
              iternode12 = iternode12.contents();
              oldNodes.replaceWith(iternode12);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list12.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
        });
      };
      renderList12();
      
      callback(root1435); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1442 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node154 = $("<div>");
  
  var ref144 = mobl.ref(ui.searchboxStyle);
  if(ref144.get() !== null) {
    node154.attr('class', ref144.get());
    subs__.addSub(ref144.addEventListener('change', function(_, ref, val) {
      node154.attr('class', val);
    }));
    
  }
  subs__.addSub(ref144.rebind());
  
  
  var node155 = $("<input>");
  node155.attr('type', "search");
  
  var ref141 = mobl.ref(ui.searchBoxInputStyle);
  if(ref141.get() !== null) {
    node155.attr('class', ref141.get());
    subs__.addSub(ref141.addEventListener('change', function(_, ref, val) {
      node155.attr('class', val);
    }));
    
  }
  subs__.addSub(ref141.rebind());
  
  var ref142 = placeholder;
  if(ref142.get() !== null) {
    node155.attr('placeholder', ref142.get());
    subs__.addSub(ref142.addEventListener('change', function(_, ref, val) {
      node155.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref142.rebind());
  
  var ref143 = s;
  node155.val(""+ref143.get());
  var ignore29 = false;
  subs__.addSub(ref143.addEventListener('change', function(_, ref, val) {
    if(ignore29) return;
    node155.val(""+val);
  }));
  subs__.addSub(ref143.rebind());
  
  subs__.addSub(mobl.domBind(node155, 'keyup change', function() {
    ignore29 = true;
    s.set(mobl.stringTomobl__String(node155.val()));
    ignore29 = false;
  }));
  
  
  var val67 = onsearch.get();
  if(val67 !== null) {
    subs__.addSub(mobl.domBind(node155, 'change', val67));
  }
  
  var val68 = onkeyup.get();
  if(val68 !== null) {
    subs__.addSub(mobl.domBind(node155, 'keyup', val68));
  }
  node155.attr('autocorrect', false);
  node155.attr('autocapitalize', false);
  node155.attr('autocomplete', false);
  
  node154.append(node155);
  root1442.append(node154);
  callback(root1442); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1443 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref145 = mobl.ref(ui.contextMenuStyle);
  if(ref145.get() !== null) {
    menu.attr('class', ref145.get());
    subs__.addSub(ref145.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref145.rebind());
  
  var nodes1282 = $("<span>");
  menu.append(nodes1282);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl39();
  }));
  
  function renderControl39() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1444 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1444); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1282;
      nodes1282 = node.contents();
      oldNodes.replaceWith(nodes1282);
    }));
  }
  renderControl39();
  root1443.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val69 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1319 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val69 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val69));
  }
  
  root1443.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1443); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1445 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1304 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1304.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node156 = $("<span>");
  root1445.append(node156);
  var condSubs47 = new mobl.CompSubscription();
  subs__.addSub(condSubs47);
  var oldValue47;
  var renderCond47 = function() {
    var value71 = tmp1304.get();
    if(oldValue47 === value71) return;
    oldValue47 = value71;
    var subs__ = condSubs47;
    subs__.unsubscribe();
    node156.empty();
    if(value71) {
      items.get().one(function(result__) {
        var tmp1320 = result__;
        var current = mobl.ref(result__);
        
        var node157 = $("<div>");
        node157.attr('width', "100%");
        
        
        var node158 = $("<div>");
        node158.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1285 = $("<span>");
        node158.append(nodes1285);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1448 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node161 = mobl.loadingSpan();
          root1448.append(node161);
          var list13;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList13 = function() {
            var subs__ = listSubs__;
            list13 = items.get();
            list13.list(function(results13) {
              node161.empty();
              for(var i268 = 0; i268 < results13.length; i268++) {
                (function() {
                  var iternode13 = $("<span>");
                  node161.append(iternode13);
                  var it;
                  it = mobl.ref(mobl.ref(results13), i268);
                  var result__ = it.get() == current.get();
                  var tmp1285 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1285.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1285.set(it.get() == current.get());
                  }));
                  
                  
                  var node162 = $("<span>");
                  iternode13.append(node162);
                  var condSubs49 = new mobl.CompSubscription();
                  subs__.addSub(condSubs49);
                  var oldValue49;
                  var renderCond49 = function() {
                    var value73 = tmp1285.get();
                    if(oldValue49 === value73) return;
                    oldValue49 = value73;
                    var subs__ = condSubs49;
                    subs__.unsubscribe();
                    node162.empty();
                    if(value73) {
                      var nodes1286 = $("<span>");
                      node162.append(nodes1286);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1449 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1287 = $("<span>");
                        root1449.append(nodes1287);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl41();
                        }));
                        
                        function renderControl41() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1450 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1450); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1287;
                            nodes1287 = node.contents();
                            oldNodes.replaceWith(nodes1287);
                          }));
                        }
                        renderControl41();
                        callback(root1449); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1286;
                        nodes1286 = node.contents();
                        oldNodes.replaceWith(nodes1286);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp1284 = mobl.ref(result__);
                      
                      var nodes1288 = $("<span>");
                      node162.append(nodes1288);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1284, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1451 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1289 = $("<span>");
                        root1451.append(nodes1289);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl42();
                        }));
                        
                        function renderControl42() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1452 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1452); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1289;
                            nodes1289 = node.contents();
                            oldNodes.replaceWith(nodes1289);
                          }));
                        }
                        renderControl42();
                        callback(root1451); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1288;
                        nodes1288 = node.contents();
                        oldNodes.replaceWith(nodes1288);
                      }));
                      
                      
                    }
                  };
                  renderCond49();
                  subs__.addSub(tmp1285.addEventListener('change', function() {
                    renderCond49();
                  }));
                  
                  
                  var oldNodes = iternode13;
                  iternode13 = iternode13.contents();
                  oldNodes.replaceWith(iternode13);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list13.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
            });
          };
          renderList13();
          
          callback(root1448); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1285;
          nodes1285 = node.contents();
          oldNodes.replaceWith(nodes1285);
        }));
        node157.append(node158);
        
        var node159 = $("<div>");
        node159.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node160 = $("<span>");
        node159.append(node160);
        var condSubs48 = new mobl.CompSubscription();
        subs__.addSub(condSubs48);
        var oldValue48;
        var renderCond48 = function() {
          var value72 = current.get();
          if(oldValue48 === value72) return;
          oldValue48 = value72;
          var subs__ = condSubs48;
          subs__.unsubscribe();
          node160.empty();
          if(value72) {
            var nodes1283 = $("<span>");
            node160.append(nodes1283);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl40();
            }));
            
            function renderControl40() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1446 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1446); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1283;
                nodes1283 = node.contents();
                oldNodes.replaceWith(nodes1283);
              }));
            }
            renderControl40();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp1286 = mobl.ref(result__);
            
            var nodes1284 = $("<span>");
            node160.append(nodes1284);
            subs__.addSub((mobl.label)(tmp1286, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1447 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1447); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1284;
              nodes1284 = node.contents();
              oldNodes.replaceWith(nodes1284);
            }));
            
            
          }
        };
        renderCond48();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond48();
        }));
        
        node157.append(node159);
        node156.append(node157);
        
        
        
        
        
        
      });
    } else {
      var nodes1290 = $("<span>");
      node156.append(nodes1290);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1453 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node163 = mobl.loadingSpan();
        root1453.append(node163);
        var list14;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList14 = function() {
          var subs__ = listSubs__;
          list14 = items.get();
          list14.list(function(results14) {
            node163.empty();
            for(var i269 = 0; i269 < results14.length; i269++) {
              (function() {
                var iternode14 = $("<span>");
                node163.append(iternode14);
                var it;
                it = mobl.ref(mobl.ref(results14), i269);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1321 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp1280 = mobl.ref(result__);
                
                var nodes1291 = $("<span>");
                iternode14.append(nodes1291);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1280, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1454 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1292 = $("<span>");
                  root1454.append(nodes1292);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl43();
                  }));
                  
                  function renderControl43() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1455 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1455); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1292;
                      nodes1292 = node.contents();
                      oldNodes.replaceWith(nodes1292);
                    }));
                  }
                  renderControl43();
                  callback(root1454); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1291;
                  nodes1291 = node.contents();
                  oldNodes.replaceWith(nodes1291);
                }));
                
                var oldNodes = iternode14;
                iternode14 = iternode14.contents();
                oldNodes.replaceWith(iternode14);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list14.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
          });
        };
        renderList14();
        
        callback(root1453); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1290;
        nodes1290 = node.contents();
        oldNodes.replaceWith(nodes1290);
      }));
      
      
    }
  };
  renderCond47();
  subs__.addSub(tmp1304.addEventListener('change', function() {
    renderCond47();
  }));
  
  callback(root1445); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1456 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1283 = mobl.ref(result__);
  
  var nodes1293 = $("<span>");
  root1456.append(nodes1293);
  subs__.addSub((ui.header)(tmp1283, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1457 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1282 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1281 = mobl.ref(result__);
    
    var nodes1294 = $("<span>");
    root1457.append(nodes1294);
    subs__.addSub((ui.backButton)(tmp1281, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1282, function(_, callback) {
      var root1458 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1458); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1294;
      nodes1294 = node.contents();
      oldNodes.replaceWith(nodes1294);
    }));
    callback(root1457); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1293;
    nodes1293 = node.contents();
    oldNodes.replaceWith(nodes1293);
  }));
  var nodes1295 = $("<span>");
  root1456.append(nodes1295);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl44();
  }));
  
  function renderControl44() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1295;
      nodes1295 = node.contents();
      oldNodes.replaceWith(nodes1295);
    }));
  }
  renderControl44();
  callback(root1456); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1460 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1296 = $("<span>");
  root1460.append(nodes1296);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1461 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node164 = mobl.loadingSpan();
    root1461.append(node164);
    var list15;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList15 = function() {
      var subs__ = listSubs__;
      list15 = coll.get();
      list15.list(function(results15) {
        node164.empty();
        for(var i270 = 0; i270 < results15.length; i270++) {
          (function() {
            var iternode15 = $("<span>");
            node164.append(iternode15);
            var it;
            it = mobl.ref(mobl.ref(results15), i270);
            var result__ = it.get() == selected.get();
            var tmp1288 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp1288.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1288.set(it.get() == selected.get());
            }));
            
            
            var node165 = $("<span>");
            iternode15.append(node165);
            var condSubs50 = new mobl.CompSubscription();
            subs__.addSub(condSubs50);
            var oldValue50;
            var renderCond50 = function() {
              var value74 = tmp1288.get();
              if(oldValue50 === value74) return;
              oldValue50 = value74;
              var subs__ = condSubs50;
              subs__.unsubscribe();
              node165.empty();
              if(value74) {
                var nodes1297 = $("<span>");
                node165.append(nodes1297);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1462 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1298 = $("<span>");
                  root1462.append(nodes1298);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl45();
                  }));
                  
                  function renderControl45() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1463 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1463); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1298;
                      nodes1298 = node.contents();
                      oldNodes.replaceWith(nodes1298);
                    }));
                  }
                  renderControl45();
                  callback(root1462); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1297;
                  nodes1297 = node.contents();
                  oldNodes.replaceWith(nodes1297);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1287 = mobl.ref(result__);
                
                var nodes1299 = $("<span>");
                node165.append(nodes1299);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1287, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1464 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1300 = $("<span>");
                  root1464.append(nodes1300);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl46();
                  }));
                  
                  function renderControl46() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1465 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1465); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1300;
                      nodes1300 = node.contents();
                      oldNodes.replaceWith(nodes1300);
                    }));
                  }
                  renderControl46();
                  callback(root1464); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1299;
                  nodes1299 = node.contents();
                  oldNodes.replaceWith(nodes1299);
                }));
                
                
              }
            };
            renderCond50();
            subs__.addSub(tmp1288.addEventListener('change', function() {
              renderCond50();
            }));
            
            
            var oldNodes = iternode15;
            iternode15 = iternode15.contents();
            oldNodes.replaceWith(iternode15);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
      });
    };
    renderList15();
    
    callback(root1461); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1296;
    nodes1296 = node.contents();
    oldNodes.replaceWith(nodes1296);
  }));
  callback(root1460); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1466 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp1322 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp1289 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp1289.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp1289.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp1289.set(coll.get().limit(n.get()));
    }));
    
    
    var node166 = mobl.loadingSpan();
    root1466.append(node166);
    var list16;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList16 = function() {
      var subs__ = listSubs__;
      list16 = tmp1289.get();
      list16.list(function(results16) {
        node166.empty();
        for(var i271 = 0; i271 < results16.length; i271++) {
          (function() {
            var iternode16 = $("<span>");
            node166.append(iternode16);
            var it;
            it = mobl.ref(mobl.ref(results16), i271);
            var nodes1301 = $("<span>");
            iternode16.append(nodes1301);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl47();
            }));
            
            function renderControl47() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1467 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1467); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1301;
                nodes1301 = node.contents();
                oldNodes.replaceWith(nodes1301);
              }));
            }
            renderControl47();
            
            var oldNodes = iternode16;
            iternode16 = iternode16.contents();
            oldNodes.replaceWith(iternode16);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list16.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
        subs__.addSub(tmp1289.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
      });
    };
    renderList16();
    
    var result__ = n.get() < total.get();
    var tmp1291 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp1291.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp1291.set(n.get() < total.get());
    }));
    
    
    var node167 = $("<span>");
    root1466.append(node167);
    var condSubs51 = new mobl.CompSubscription();
    subs__.addSub(condSubs51);
    var oldValue51;
    var renderCond51 = function() {
      var value75 = tmp1291.get();
      if(oldValue51 === value75) return;
      oldValue51 = value75;
      var subs__ = condSubs51;
      subs__.unsubscribe();
      node167.empty();
      if(value75) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1290 = mobl.ref(result__);
        
        var nodes1302 = $("<span>");
        node167.append(nodes1302);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp1290, mobl.ref(null), function(_, callback) {
          var root1468 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1303 = $("<span>");
          root1468.append(nodes1303);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1469 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1469); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1303;
            nodes1303 = node.contents();
            oldNodes.replaceWith(nodes1303);
          }));
          callback(root1468); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1302;
          nodes1302 = node.contents();
          oldNodes.replaceWith(nodes1302);
        }));
        
        
      } else {
        
      }
    };
    renderCond51();
    subs__.addSub(tmp1291.addEventListener('change', function() {
      renderCond51();
    }));
    
    callback(root1466); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1470 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1304 = $("<span>");
  root1470.append(nodes1304);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1471 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node168 = mobl.loadingSpan();
    root1471.append(node168);
    var list17;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList17 = function() {
      var subs__ = listSubs__;
      list17 = items.get();
      list17.list(function(results17) {
        node168.empty();
        for(var i272 = 0; i272 < results17.length; i272++) {
          (function() {
            var iternode17 = $("<span>");
            node168.append(iternode17);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results17), i272), "_1");it = mobl.ref(mobl.ref(mobl.ref(results17), i272), "_2");
            var nodes1305 = $("<span>");
            iternode17.append(nodes1305);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1472 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1306 = $("<span>");
              root1472.append(nodes1306);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1473 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1473); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1306;
                nodes1306 = node.contents();
                oldNodes.replaceWith(nodes1306);
              }));
              callback(root1472); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1305;
              nodes1305 = node.contents();
              oldNodes.replaceWith(nodes1305);
            }));
            
            var oldNodes = iternode17;
            iternode17 = iternode17.contents();
            oldNodes.replaceWith(iternode17);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list17.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
      });
    };
    renderList17();
    
    callback(root1471); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1304;
    nodes1304 = node.contents();
    oldNodes.replaceWith(nodes1304);
  }));
  callback(root1470); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1474 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll82) {
    coll82 = coll82.reverse();
    function processOne46() {
      var it;
      it = coll82.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll82.length > 0) processOne46(); else rest46();
      
    }
    function rest46() {
      var nodes1307 = $("<span>");
      root1474.append(nodes1307);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1475 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1292 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1293 = mobl.ref(result__);
        
        var nodes1308 = $("<span>");
        root1475.append(nodes1308);
        subs__.addSub((ui.backButton)(tmp1293, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1292, function(_, callback) {
          var root1476 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1476); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1308;
          nodes1308 = node.contents();
          oldNodes.replaceWith(nodes1308);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll81) {
                           coll81 = coll81.reverse();
                           function processOne45() {
                             var checked;var it;
                             var tmp1324 = coll81.pop();
                             checked = tmp1324._1;it = tmp1324._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll81.length > 0) processOne45(); else rest45();
                               
                             } else {
                               {
                                 
                                 if(coll81.length > 0) processOne45(); else rest45();
                                 
                               }
                             }
                           }
                           function rest45() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll81.length > 0) processOne45(); else rest45();
                         });
                         
                       };
        var tmp1294 = mobl.ref(result__);
        
        var nodes1309 = $("<span>");
        root1475.append(nodes1309);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1294, function(_, callback) {
          var root1477 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1477); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1309;
          nodes1309 = node.contents();
          oldNodes.replaceWith(nodes1309);
        }));
        callback(root1475); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1307;
        nodes1307 = node.contents();
        oldNodes.replaceWith(nodes1307);
      }));
      var nodes1310 = $("<span>");
      root1474.append(nodes1310);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1478 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1478); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1310;
        nodes1310 = node.contents();
        oldNodes.replaceWith(nodes1310);
      }));
      callback(root1474); return subs__;
      
      
    }
    if(coll82.length > 0) processOne46(); else rest46();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1479 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1311 = $("<span>");
  root1479.append(nodes1311);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1480 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1480); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1311;
    nodes1311 = node.contents();
    oldNodes.replaceWith(nodes1311);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp1295 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1312 = $("<span>");
  root1479.append(nodes1312);
  subs__.addSub((ui.masterDetail)(tmp1295, masterItem, detailItem, function(_, callback) {
    var root1481 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1481); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1312;
    nodes1312 = node.contents();
    oldNodes.replaceWith(nodes1312);
  }));
  callback(root1479); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, activeSection, elements, callback) {
  var root1482 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1313 = $("<span>");
  root1482.append(nodes1313);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1483 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node169 = mobl.loadingSpan();
    root1483.append(node169);
    var list18;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList18 = function() {
      var subs__ = listSubs__;
      list18 = sections.get();
      list18.list(function(results18) {
        node169.empty();
        for(var i273 = 0; i273 < results18.length; i273++) {
          (function() {
            var iternode18 = $("<span>");
            node169.append(iternode18);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results18), i273), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results18), i273), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp1297 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1297.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1297.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1297.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1297.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1296 = mobl.ref(result__);
            
            var nodes1314 = $("<span>");
            iternode18.append(nodes1314);
            subs__.addSub((mobl.span)(tmp1297, mobl.ref(null), tmp1296, mobl.ref(null), function(_, callback) {
              var root1484 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1315 = $("<span>");
              root1484.append(nodes1315);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1485 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1485); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1315;
                nodes1315 = node.contents();
                oldNodes.replaceWith(nodes1315);
              }));
              callback(root1484); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1314;
              nodes1314 = node.contents();
              oldNodes.replaceWith(nodes1314);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp1298 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1298.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1298.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1298.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1298.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1316 = $("<span>");
            iternode18.append(nodes1316);
            subs__.addSub((mobl.block)(tmp1298, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1486 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1317 = $("<span>");
              root1486.append(nodes1317);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl48();
              }));
              
              function renderControl48() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1487 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1487); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1317;
                  nodes1317 = node.contents();
                  oldNodes.replaceWith(nodes1317);
                }));
              }
              renderControl48();
              callback(root1486); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1316;
              nodes1316 = node.contents();
              oldNodes.replaceWith(nodes1316);
            }));
            
            var oldNodes = iternode18;
            iternode18 = iternode18.contents();
            oldNodes.replaceWith(iternode18);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list18.addEventListener('change', function() { listSubs__.unsubscribe(); renderList18(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList18(true); }));
      });
    };
    renderList18();
    
    callback(root1483); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1313;
    nodes1313 = node.contents();
    oldNodes.replaceWith(nodes1313);
  }));
  callback(root1482); return subs__;
  
  return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(style, elements, callback) {
  var root1488 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node170 = $("<table>");
  
  var ref146 = style;
  if(ref146.get() !== null) {
    node170.attr('class', ref146.get());
    subs__.addSub(ref146.addEventListener('change', function(_, ref, val) {
      node170.attr('class', val);
    }));
    
  }
  subs__.addSub(ref146.rebind());
  
  var nodes1318 = $("<span>");
  node170.append(nodes1318);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl49();
  }));
  
  function renderControl49() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1489 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1489); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1318;
      nodes1318 = node.contents();
      oldNodes.replaceWith(nodes1318);
    }));
  }
  renderControl49();
  root1488.append(node170);
  callback(root1488); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1490 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node171 = $("<tr>");
  
  var ref147 = style;
  if(ref147.get() !== null) {
    node171.attr('class', ref147.get());
    subs__.addSub(ref147.addEventListener('change', function(_, ref, val) {
      node171.attr('class', val);
    }));
    
  }
  subs__.addSub(ref147.rebind());
  
  var nodes1319 = $("<span>");
  node171.append(nodes1319);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl50();
  }));
  
  function renderControl50() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1491 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1491); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1319;
      nodes1319 = node.contents();
      oldNodes.replaceWith(nodes1319);
    }));
  }
  renderControl50();
  root1490.append(node171);
  callback(root1490); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1492 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node172 = $("<td>");
  
  var ref148 = width;
  if(ref148.get() !== null) {
    node172.attr('width', ref148.get());
    subs__.addSub(ref148.addEventListener('change', function(_, ref, val) {
      node172.attr('width', val);
    }));
    
  }
  subs__.addSub(ref148.rebind());
  
  var ref149 = style;
  if(ref149.get() !== null) {
    node172.attr('class', ref149.get());
    subs__.addSub(ref149.addEventListener('change', function(_, ref, val) {
      node172.attr('class', val);
    }));
    
  }
  subs__.addSub(ref149.rebind());
  
  var nodes1320 = $("<span>");
  node172.append(nodes1320);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl51();
  }));
  
  function renderControl51() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1493 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1493); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1320;
      nodes1320 = node.contents();
      oldNodes.replaceWith(nodes1320);
    }));
  }
  renderControl51();
  root1492.append(node172);
  callback(root1492); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1494 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node173 = $("<td>");
  
  var ref150 = width;
  if(ref150.get() !== null) {
    node173.attr('width', ref150.get());
    subs__.addSub(ref150.addEventListener('change', function(_, ref, val) {
      node173.attr('width', val);
    }));
    
  }
  subs__.addSub(ref150.rebind());
  
  var ref151 = style;
  if(ref151.get() !== null) {
    node173.attr('class', ref151.get());
    subs__.addSub(ref151.addEventListener('change', function(_, ref, val) {
      node173.attr('class', val);
    }));
    
  }
  subs__.addSub(ref151.rebind());
  
  var nodes1321 = $("<span>");
  node173.append(nodes1321);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl52();
  }));
  
  function renderControl52() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1495 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1495); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1321;
      nodes1321 = node.contents();
      oldNodes.replaceWith(nodes1321);
    }));
  }
  renderControl52();
  root1494.append(node173);
  callback(root1494); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1496 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node174 = $("<td>");
  
  var ref152 = width;
  if(ref152.get() !== null) {
    node174.attr('width', ref152.get());
    subs__.addSub(ref152.addEventListener('change', function(_, ref, val) {
      node174.attr('width', val);
    }));
    
  }
  subs__.addSub(ref152.rebind());
  
  var ref153 = style;
  if(ref153.get() !== null) {
    node174.attr('class', ref153.get());
    subs__.addSub(ref153.addEventListener('change', function(_, ref, val) {
      node174.attr('class', val);
    }));
    
  }
  subs__.addSub(ref153.rebind());
  
  
  var node175 = $("<strong>");
  
  var nodes1322 = $("<span>");
  node175.append(nodes1322);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl53();
  }));
  
  function renderControl53() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1497 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1497); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1322;
      nodes1322 = node.contents();
      oldNodes.replaceWith(nodes1322);
    }));
  }
  renderControl53();
  node174.append(node175);
  root1496.append(node174);
  callback(root1496); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(ui));ui.indexOf = function(it, items, callback) {
  var __this = this;
  var result__ = 1;
  var counter = result__;
  var result__ = items;
  items.list(function(coll83) {
    coll83 = coll83.reverse();
    function processOne47() {
      var item;
      item = coll83.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll83.length > 0) processOne47(); else rest47();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll83.length > 0) processOne47(); else rest47();
          
        }
      }
    }
    function rest47() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll83.length > 0) processOne47(); else rest47();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrentQ = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root1498 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp1326 = result__;
    var current = mobl.ref(result__);
    
    var node176 = $("<div>");
    node176.attr('width', "100%");
    
    
    var node177 = $("<div>");
    node177.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes1324 = $("<span>");
    node177.append(nodes1324);
    subs__.addSub((ui.group)(function(_, callback) {
      var root1500 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node183 = mobl.loadingSpan();
      root1500.append(node183);
      var list19;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList19 = function() {
        var subs__ = listSubs__;
        list19 = items.get();
        list19.list(function(results19) {
          node183.empty();
          for(var i274 = 0; i274 < results19.length; i274++) {
            (function() {
              var iternode19 = $("<span>");
              node183.append(iternode19);
              var it;
              it = mobl.ref(mobl.ref(results19), i274);
              var result__ = it.get() == current.get();
              var tmp1302 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp1302.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp1302.set(it.get() == current.get());
              }));
              
              
              var node184 = $("<span>");
              iternode19.append(node184);
              var condSubs53 = new mobl.CompSubscription();
              subs__.addSub(condSubs53);
              var oldValue53;
              var renderCond53 = function() {
                var value77 = tmp1302.get();
                if(oldValue53 === value77) return;
                oldValue53 = value77;
                var subs__ = condSubs53;
                subs__.unsubscribe();
                node184.empty();
                if(value77) {
                  var nodes1325 = $("<span>");
                  node184.append(nodes1325);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root1501 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp1329 = result__;
                      var tmp1299 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1327 = result__;
                          var result__ = tmp1327;
                          tmp1299.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1328 = result__;
                          var result__ = tmp1328;
                          tmp1299.set(result__);
                          
                        });
                      }));
                      
                      var nodes1326 = $("<span>");
                      root1501.append(nodes1326);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl55();
                      }));
                      
                      function renderControl55() {
                        subs__.addSub((masterItem.get())(it, tmp1299, function(elements, callback) {
                          var root1502 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1502); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes1326;
                          nodes1326 = node.contents();
                          oldNodes.replaceWith(nodes1326);
                        }));
                      }
                      renderControl55();
                      callback(root1501); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1325;
                    nodes1325 = node.contents();
                    oldNodes.replaceWith(nodes1325);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = true;
                                   ui.visible.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp1301 = mobl.ref(result__);
                  
                  var nodes1327 = $("<span>");
                  node184.append(nodes1327);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1301, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root1503 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp1332 = result__;
                      var tmp1300 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1330 = result__;
                          var result__ = tmp1330;
                          tmp1300.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1331 = result__;
                          var result__ = tmp1331;
                          tmp1300.set(result__);
                          
                        });
                      }));
                      
                      var nodes1328 = $("<span>");
                      root1503.append(nodes1328);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl56();
                      }));
                      
                      function renderControl56() {
                        subs__.addSub((masterItem.get())(it, tmp1300, function(elements, callback) {
                          var root1504 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1504); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes1328;
                          nodes1328 = node.contents();
                          oldNodes.replaceWith(nodes1328);
                        }));
                      }
                      renderControl56();
                      callback(root1503); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1327;
                    nodes1327 = node.contents();
                    oldNodes.replaceWith(nodes1327);
                  }));
                  
                  
                }
              };
              renderCond53();
              subs__.addSub(tmp1302.addEventListener('change', function() {
                renderCond53();
              }));
              
              
              var oldNodes = iternode19;
              iternode19 = iternode19.contents();
              oldNodes.replaceWith(iternode19);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list19.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
        });
      };
      renderList19();
      
      callback(root1500); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1324;
      nodes1324 = node.contents();
      oldNodes.replaceWith(nodes1324);
    }));
    node176.append(node177);
    
    var node178 = $("<div>");
    node178.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    var result__ = current.get() && ui.visible.get();
    var tmp1303 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp1303.set(current.get() && ui.visible.get());
    }));
    subs__.addSub(ui.visible.addEventListener('change', function() {
      tmp1303.set(current.get() && ui.visible.get());
    }));
    
    
    var node179 = $("<span>");
    node178.append(node179);
    var condSubs52 = new mobl.CompSubscription();
    subs__.addSub(condSubs52);
    var oldValue52;
    var renderCond52 = function() {
      var value76 = tmp1303.get();
      if(oldValue52 === value76) return;
      oldValue52 = value76;
      var subs__ = condSubs52;
      subs__.unsubscribe();
      node179.empty();
      if(value76) {
        var nodes1323 = $("<span>");
        node179.append(nodes1323);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl54();
        }));
        
        function renderControl54() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root1499 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1499); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1323;
            nodes1323 = node.contents();
            oldNodes.replaceWith(nodes1323);
          }));
        }
        renderControl54();
        
        
      } else {
        
        var node181 = $("<div>");
        node181.attr('style', "padding:20px");
        
        
        var node182 = $("<h2>");
        
        
        node182.append("Add more questions.");
        node181.append(node182);
        node179.append(node181);
        
        
        
      }
    };
    renderCond52();
    subs__.addSub(tmp1303.addEventListener('change', function() {
      renderCond52();
    }));
    
    node176.append(node178);
    root1498.append(node176);
    callback(root1498); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
