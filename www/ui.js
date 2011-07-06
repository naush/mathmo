mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1443 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node521 = $("<span>");
  root1443.append(node521);
  var condSubs125 = new mobl.CompSubscription();
  subs__.addSub(condSubs125);
  var oldValue125;
  var renderCond125 = function() {
    var value537 = value.get();
    if(oldValue125 === value537) return;
    oldValue125 = value537;
    var subs__ = condSubs125;
    subs__.unsubscribe();
    node521.empty();
    if(value537) {
      var nodes1069 = $("<span>");
      node521.append(nodes1069);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl235();
      }));
      
      function renderControl235() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1444 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1444); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1069;
          nodes1069 = node.contents();
          oldNodes.replaceWith(nodes1069);
        }));
      }
      renderControl235();
      
      
    } else {
      var nodes1070 = $("<span>");
      node521.append(nodes1070);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1445 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1071 = $("<span>");
        root1445.append(nodes1071);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1446 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1446); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1071;
          nodes1071 = node.contents();
          oldNodes.replaceWith(nodes1071);
        }));
        var nodes1072 = $("<span>");
        root1445.append(nodes1072);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1447 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1447); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1072;
          nodes1072 = node.contents();
          oldNodes.replaceWith(nodes1072);
        }));
        callback(root1445); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1070;
        nodes1070 = node.contents();
        oldNodes.replaceWith(nodes1070);
      }));
      
      
    }
  };
  renderCond125();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond125();
  }));
  
  callback(root1443); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1448 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node522 = $("<div>");
  
  var ref542 = mobl.ref(ui.headerStyle);
  if(ref542.get() !== null) {
    node522.attr('class', ref542.get());
    subs__.addSub(ref542.addEventListener('change', function(_, ref, val) {
      node522.attr('class', val);
    }));
    
  }
  subs__.addSub(ref542.rebind());
  
  var val276 = onclick.get();
  if(val276 !== null) {
    subs__.addSub(mobl.domBind(node522, 'tap', val276));
  }
  
  var ref543 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref543.get() !== null) {
    node522.attr('style', ref543.get());
    subs__.addSub(ref543.addEventListener('change', function(_, ref, val) {
      node522.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node522.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref543.rebind());
  
  
  var node525 = $("<div>");
  
  var ref541 = mobl.ref(ui.headerContainerStyle);
  if(ref541.get() !== null) {
    node525.attr('class', ref541.get());
    subs__.addSub(ref541.addEventListener('change', function(_, ref, val) {
      node525.attr('class', val);
    }));
    
  }
  subs__.addSub(ref541.rebind());
  
  
  var node526 = $("<div>");
  
  var ref539 = text;
  node526.text(""+ref539.get());
  var ignore103 = false;
  subs__.addSub(ref539.addEventListener('change', function(_, ref, val) {
    if(ignore103) return;
    node526.text(""+val);
  }));
  subs__.addSub(ref539.rebind());
  
  
  var ref540 = mobl.ref(ui.headerTextStyle);
  if(ref540.get() !== null) {
    node526.attr('class', ref540.get());
    subs__.addSub(ref540.addEventListener('change', function(_, ref, val) {
      node526.attr('class', val);
    }));
    
  }
  subs__.addSub(ref540.rebind());
  
  node525.append(node526);
  node522.append(node525);
  var nodes1073 = $("<span>");
  node522.append(nodes1073);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl236();
  }));
  
  function renderControl236() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1449 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1449); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1073;
      nodes1073 = node.contents();
      oldNodes.replaceWith(nodes1073);
    }));
  }
  renderControl236();
  root1448.append(node522);
  
  var node523 = $("<span>");
  root1448.append(node523);
  var condSubs126 = new mobl.CompSubscription();
  subs__.addSub(condSubs126);
  var oldValue126;
  var renderCond126 = function() {
    var value538 = fixedPosition.get();
    if(oldValue126 === value538) return;
    oldValue126 = value538;
    var subs__ = condSubs126;
    subs__.unsubscribe();
    node523.empty();
    if(value538) {
      
      var node524 = $("<div>");
      node524.attr('id', "hello");
      node524.attr('style', "height: 2.9em;");
      
      node523.append(node524);
      
      
    } else {
      
    }
  };
  renderCond126();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond126();
  }));
  
  callback(root1448); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1450 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref544 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref544.get() !== null) {
    sp.attr('class', ref544.get());
    subs__.addSub(ref544.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref544.rebind());
  
  var val277 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val277 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val277));
  }
  
  var val278 = function(event, callback) {
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
  if(val278 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val278));
  }
  
  var val279 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after81(result__) {
                    var tmp1001 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after81);if(result__ !== undefined) after81(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val279 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val279));
  }
  
  var val280 = function(event, callback) {
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
  if(val280 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val280));
  }
  
  var ref545 = text;
  sp.text(""+ref545.get());
  var ignore104 = false;
  subs__.addSub(ref545.addEventListener('change', function(_, ref, val) {
    if(ignore104) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref545.rebind());
  
  
  root1450.append(sp);
  callback(root1450); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1451 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1074 = $("<span>");
  root1451.append(nodes1074);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1452 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1452); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1074;
    nodes1074 = node.contents();
    oldNodes.replaceWith(nodes1074);
  }));
  callback(root1451); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1453 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1075 = $("<span>");
  root1453.append(nodes1075);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1454 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1454); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1075;
    nodes1075 = node.contents();
    oldNodes.replaceWith(nodes1075);
  }));
  callback(root1453); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1455 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node527 = $("<ul>");
  
  var ref546 = mobl.ref(ui.groupStyle);
  if(ref546.get() !== null) {
    node527.attr('class', ref546.get());
    subs__.addSub(ref546.addEventListener('change', function(_, ref, val) {
      node527.attr('class', val);
    }));
    
  }
  subs__.addSub(ref546.rebind());
  
  var nodes1076 = $("<span>");
  node527.append(nodes1076);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl237();
  }));
  
  function renderControl237() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1456 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1456); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1076;
      nodes1076 = node.contents();
      oldNodes.replaceWith(nodes1076);
    }));
  }
  renderControl237();
  root1455.append(node527);
  callback(root1455); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1457 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node528 = $("<img>");
  
  var ref547 = url;
  if(ref547.get() !== null) {
    node528.attr('src', ref547.get());
    subs__.addSub(ref547.addEventListener('change', function(_, ref, val) {
      node528.attr('src', val);
    }));
    
  }
  subs__.addSub(ref547.rebind());
  
  var ref548 = width;
  if(ref548.get() !== null) {
    node528.attr('width', ref548.get());
    subs__.addSub(ref548.addEventListener('change', function(_, ref, val) {
      node528.attr('width', val);
    }));
    
  }
  subs__.addSub(ref548.rebind());
  
  var ref549 = height;
  if(ref549.get() !== null) {
    node528.attr('height', ref549.get());
    subs__.addSub(ref549.addEventListener('change', function(_, ref, val) {
      node528.attr('height', val);
    }));
    
  }
  subs__.addSub(ref549.rebind());
  
  var ref550 = style;
  if(ref550.get() !== null) {
    node528.attr('class', ref550.get());
    subs__.addSub(ref550.addEventListener('change', function(_, ref, val) {
      node528.attr('class', val);
    }));
    
  }
  subs__.addSub(ref550.rebind());
  
  var val281 = onclick.get();
  if(val281 !== null) {
    subs__.addSub(mobl.domBind(node528, 'tap', val281));
  }
  
  var ref551 = valign;
  if(ref551.get() !== null) {
    node528.attr('valign', ref551.get());
    subs__.addSub(ref551.addEventListener('change', function(_, ref, val) {
      node528.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref551.rebind());
  
  var ref552 = align;
  if(ref552.get() !== null) {
    node528.attr('align', ref552.get());
    subs__.addSub(ref552.addEventListener('change', function(_, ref, val) {
      node528.attr('align', val);
    }));
    
  }
  subs__.addSub(ref552.rebind());
  
  root1457.append(node528);
  callback(root1457); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1458 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref553 = mobl.ref(ui.itemStyle);
  if(ref553.get() !== null) {
    el.attr('class', ref553.get());
    subs__.addSub(ref553.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref553.rebind());
  
  var ref554 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref554.get() !== null) {
    el.attr('class', ref554.get());
    subs__.addSub(ref554.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref554.rebind());
  
  var val282 = onswipe.get();
  if(val282 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val282));
  }
  
  var val283 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1002 = result__;
                                           function after82(result__) {
                                             var tmp1003 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after82);if(result__ !== undefined) after82(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1004 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val283 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val283));
  }
  
  var nodes1077 = $("<span>");
  el.append(nodes1077);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl238();
  }));
  
  function renderControl238() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1077;
      nodes1077 = node.contents();
      oldNodes.replaceWith(nodes1077);
    }));
  }
  renderControl238();
  root1458.append(el);
  callback(root1458); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1460 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node529 = $("<input>");
  node529.attr('type', "checkbox");
  
  var ref556 = b;
  node529.attr('checked', !!ref556.get());
  subs__.addSub(ref556.addEventListener('change', function(_, ref, val) {
    if(ref === ref556) node529.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node529, 'change', function() {
    b.set(!!node529.attr('checked'));
  }));
  
  var val285 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val285 !== null) {
    subs__.addSub(mobl.domBind(node529, 'tap', val285));
  }
  
  var val286 = onchange.get();
  if(val286 !== null) {
    subs__.addSub(mobl.domBind(node529, 'change', val286));
  }
  
  root1460.append(node529);
  
  root1460.append(" ");
  
  var node530 = $("<span>");
  
  var ref555 = label;
  node530.text(""+ref555.get());
  var ignore105 = false;
  subs__.addSub(ref555.addEventListener('change', function(_, ref, val) {
    if(ignore105) return;
    node530.text(""+val);
  }));
  subs__.addSub(ref555.rebind());
  
  
  var val284 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after83(result__) {
                    var tmp1005 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after83);if(result__ !== undefined) after83(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val284 !== null) {
    subs__.addSub(mobl.domBind(node530, 'tap', val284));
  }
  
  root1460.append(node530);
  callback(root1460); return subs__;
  
  
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
  var root1461 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node531 = $("<span>");
  root1461.append(node531);
  var condSubs127 = new mobl.CompSubscription();
  subs__.addSub(condSubs127);
  var oldValue127;
  var renderCond127 = function() {
    var value539 = label.get();
    if(oldValue127 === value539) return;
    oldValue127 = value539;
    var subs__ = condSubs127;
    subs__.unsubscribe();
    node531.empty();
    if(value539) {
      var nodes1078 = $("<span>");
      node531.append(nodes1078);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1462 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1462); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1078;
        nodes1078 = node.contents();
        oldNodes.replaceWith(nodes1078);
      }));
      
      
    } else {
      
    }
  };
  renderCond127();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond127();
  }));
  
  
  var node532 = $("<span>");
  root1461.append(node532);
  var condSubs128 = new mobl.CompSubscription();
  subs__.addSub(condSubs128);
  var oldValue128;
  var renderCond128 = function() {
    var value540 = validator.get();
    if(oldValue128 === value540) return;
    oldValue128 = value540;
    var subs__ = condSubs128;
    subs__.unsubscribe();
    node532.empty();
    if(value540) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after87(result__) {
        var tmp1006 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1007 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node533 = $("<input>");
        
        var ref557 = inputType;
        if(ref557.get() !== null) {
          node533.attr('type', ref557.get());
          subs__.addSub(ref557.addEventListener('change', function(_, ref, val) {
            node533.attr('type', val);
          }));
          
        }
        subs__.addSub(ref557.rebind());
        
        var ref558 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref558.get() !== null) {
          node533.attr('class', ref558.get());
          subs__.addSub(ref558.addEventListener('change', function(_, ref, val) {
            node533.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node533.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node533.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node533.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref558.rebind());
        
        var ref559 = placeholder;
        if(ref559.get() !== null) {
          node533.attr('placeholder', ref559.get());
          subs__.addSub(ref559.addEventListener('change', function(_, ref, val) {
            node533.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref559.rebind());
        
        var ref560 = temp;
        node533.val(""+ref560.get());
        var ignore106 = false;
        subs__.addSub(ref560.addEventListener('change', function(_, ref, val) {
          if(ignore106) return;
          node533.val(""+val);
        }));
        subs__.addSub(ref560.rebind());
        
        subs__.addSub(mobl.domBind(node533, 'keyup change', function() {
          ignore106 = true;
          temp.set(mobl.stringTomobl__String(node533.val()));
          ignore106 = false;
        }));
        
        
        var val287 = onchange.get();
        if(val287 !== null) {
          subs__.addSub(mobl.domBind(node533, 'change', val287));
        }
        
        var val288 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after84(result__) {
                          var tmp1008 = result__;
                          function after85(result__) {
                            var tmp1009 = result__;
                            var result__ = tmp1009;
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
                          var result__ = validator.get()(temp.get(), after85);if(result__ !== undefined) after85(result__);
                        }
                        var result__ = onkeyup.get()(event, after84);if(result__ !== undefined) after84(result__);
                      } else {
                        {
                          function after86(result__) {
                            var tmp1009 = result__;
                            var result__ = tmp1009;
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
                          var result__ = validator.get()(temp.get(), after86);if(result__ !== undefined) after86(result__);
                        }
                      }
                    };
        if(val288 !== null) {
          subs__.addSub(mobl.domBind(node533, 'keyup', val288));
        }
        
        var val289 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val289 !== null) {
          subs__.addSub(mobl.domBind(node533, 'blur', val289));
        }
        
        node532.append(node533);
        var nodes1079 = $("<span>");
        node532.append(nodes1079);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1463 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1463); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1079;
          nodes1079 = node.contents();
          oldNodes.replaceWith(nodes1079);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after87);if(result__ !== undefined) after87(result__);
    } else {
      
      var node534 = $("<input>");
      
      var ref561 = inputType;
      if(ref561.get() !== null) {
        node534.attr('type', ref561.get());
        subs__.addSub(ref561.addEventListener('change', function(_, ref, val) {
          node534.attr('type', val);
        }));
        
      }
      subs__.addSub(ref561.rebind());
      
      var ref562 = style;
      if(ref562.get() !== null) {
        node534.attr('class', ref562.get());
        subs__.addSub(ref562.addEventListener('change', function(_, ref, val) {
          node534.attr('class', val);
        }));
        
      }
      subs__.addSub(ref562.rebind());
      
      var ref563 = placeholder;
      if(ref563.get() !== null) {
        node534.attr('placeholder', ref563.get());
        subs__.addSub(ref563.addEventListener('change', function(_, ref, val) {
          node534.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref563.rebind());
      
      var ref564 = s;
      node534.val(""+ref564.get());
      var ignore107 = false;
      subs__.addSub(ref564.addEventListener('change', function(_, ref, val) {
        if(ignore107) return;
        node534.val(""+val);
      }));
      subs__.addSub(ref564.rebind());
      
      subs__.addSub(mobl.domBind(node534, 'keyup change', function() {
        ignore107 = true;
        s.set(mobl.stringTomobl__String(node534.val()));
        ignore107 = false;
      }));
      
      
      var val290 = onchange.get();
      if(val290 !== null) {
        subs__.addSub(mobl.domBind(node534, 'change', val290));
      }
      
      var val291 = onkeyup.get();
      if(val291 !== null) {
        subs__.addSub(mobl.domBind(node534, 'keyup', val291));
      }
      
      var val292 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val292 !== null) {
        subs__.addSub(mobl.domBind(node534, 'blur', val292));
      }
      
      node532.append(node534);
      
      
    }
  };
  renderCond128();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond128();
  }));
  
  callback(root1461); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1464 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1080 = $("<span>");
  root1464.append(nodes1080);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1465 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1465); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1080;
    nodes1080 = node.contents();
    oldNodes.replaceWith(nodes1080);
  }));
  callback(root1464); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1466 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1081 = $("<span>");
  root1466.append(nodes1081);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1467 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1467); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1081;
    nodes1081 = node.contents();
    oldNodes.replaceWith(nodes1081);
  }));
  callback(root1466); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1468 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node535 = $("<span>");
  root1468.append(node535);
  var condSubs129 = new mobl.CompSubscription();
  subs__.addSub(condSubs129);
  var oldValue129;
  var renderCond129 = function() {
    var value541 = label.get();
    if(oldValue129 === value541) return;
    oldValue129 = value541;
    var subs__ = condSubs129;
    subs__.unsubscribe();
    node535.empty();
    if(value541) {
      var nodes1082 = $("<span>");
      node535.append(nodes1082);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1469 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1469); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1082;
        nodes1082 = node.contents();
        oldNodes.replaceWith(nodes1082);
      }));
      
      
    } else {
      
    }
  };
  renderCond129();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond129();
  }));
  
  
  var node536 = $("<input>");
  node536.attr('type', "range");
  
  var ref565 = n;
  node536.val(""+ref565.get());
  var ignore108 = false;
  subs__.addSub(ref565.addEventListener('change', function(_, ref, val) {
    if(ignore108) return;
    node536.val(""+val);
  }));
  subs__.addSub(ref565.rebind());
  
  subs__.addSub(mobl.domBind(node536, 'keyup change', function() {
    ignore108 = true;
    n.set(mobl.stringTomobl__Num(node536.val()));
    ignore108 = false;
  }));
  
  
  var ref566 = min;
  if(ref566.get() !== null) {
    node536.attr('min', ref566.get());
    subs__.addSub(ref566.addEventListener('change', function(_, ref, val) {
      node536.attr('min', val);
    }));
    
  }
  subs__.addSub(ref566.rebind());
  
  var ref567 = max;
  if(ref567.get() !== null) {
    node536.attr('max', ref567.get());
    subs__.addSub(ref567.addEventListener('change', function(_, ref, val) {
      node536.attr('max', val);
    }));
    
  }
  subs__.addSub(ref567.rebind());
  
  var ref568 = step;
  if(ref568.get() !== null) {
    node536.attr('step', ref568.get());
    subs__.addSub(ref568.addEventListener('change', function(_, ref, val) {
      node536.attr('step', val);
    }));
    
  }
  subs__.addSub(ref568.rebind());
  node536.attr('style', "width: 99%;");
  
  var val293 = onchange.get();
  if(val293 !== null) {
    subs__.addSub(mobl.domBind(node536, 'change', val293));
  }
  
  var val294 = onkeyup.get();
  if(val294 !== null) {
    subs__.addSub(mobl.domBind(node536, 'keyup', val294));
  }
  
  var ref569 = placeholder;
  if(ref569.get() !== null) {
    node536.attr('placeholder', ref569.get());
    subs__.addSub(ref569.addEventListener('change', function(_, ref, val) {
      node536.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref569.rebind());
  
  root1468.append(node536);
  callback(root1468); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1470 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after88(result__) {
      var tmp1010 = result__;
      var result__ = tmp1010;
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
    var result__ = validator.get()(n2, after88);if(result__ !== undefined) after88(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1083 = $("<span>");
  root1470.append(nodes1083);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1471 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1471); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1083;
    nodes1083 = node.contents();
    oldNodes.replaceWith(nodes1083);
  }));
  callback(root1470); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1472 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node537 = $("<span>");
  root1472.append(node537);
  var condSubs130 = new mobl.CompSubscription();
  subs__.addSub(condSubs130);
  var oldValue130;
  var renderCond130 = function() {
    var value542 = label.get();
    if(oldValue130 === value542) return;
    oldValue130 = value542;
    var subs__ = condSubs130;
    subs__.unsubscribe();
    node537.empty();
    if(value542) {
      
      var node538 = $("<span>");
      node538.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref573 = label;
      node538.text(""+ref573.get());
      var ignore110 = false;
      subs__.addSub(ref573.addEventListener('change', function(_, ref, val) {
        if(ignore110) return;
        node538.text(""+val);
      }));
      subs__.addSub(ref573.rebind());
      
      
      node537.append(node538);
      
      var node539 = $("<span>");
      node539.attr('style', "float: left");
      
      
      var node540 = $("<input>");
      node540.attr('type', "password");
      
      var ref570 = style;
      if(ref570.get() !== null) {
        node540.attr('class', ref570.get());
        subs__.addSub(ref570.addEventListener('change', function(_, ref, val) {
          node540.attr('class', val);
        }));
        
      }
      subs__.addSub(ref570.rebind());
      
      var ref571 = placeholder;
      if(ref571.get() !== null) {
        node540.attr('placeholder', ref571.get());
        subs__.addSub(ref571.addEventListener('change', function(_, ref, val) {
          node540.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref571.rebind());
      
      var ref572 = s;
      node540.val(""+ref572.get());
      var ignore109 = false;
      subs__.addSub(ref572.addEventListener('change', function(_, ref, val) {
        if(ignore109) return;
        node540.val(""+val);
      }));
      subs__.addSub(ref572.rebind());
      
      subs__.addSub(mobl.domBind(node540, 'keyup change', function() {
        ignore109 = true;
        s.set(mobl.stringTomobl__String(node540.val()));
        ignore109 = false;
      }));
      
      
      var val295 = onchange.get();
      if(val295 !== null) {
        subs__.addSub(mobl.domBind(node540, 'change', val295));
      }
      
      var val296 = onkeyup.get();
      if(val296 !== null) {
        subs__.addSub(mobl.domBind(node540, 'keyup', val296));
      }
      
      var val297 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val297 !== null) {
        subs__.addSub(mobl.domBind(node540, 'blur', val297));
      }
      
      node539.append(node540);
      node537.append(node539);
      
      
      
      
    } else {
      
      var node541 = $("<input>");
      node541.attr('type', "password");
      
      var ref574 = style;
      if(ref574.get() !== null) {
        node541.attr('class', ref574.get());
        subs__.addSub(ref574.addEventListener('change', function(_, ref, val) {
          node541.attr('class', val);
        }));
        
      }
      subs__.addSub(ref574.rebind());
      
      var ref575 = placeholder;
      if(ref575.get() !== null) {
        node541.attr('placeholder', ref575.get());
        subs__.addSub(ref575.addEventListener('change', function(_, ref, val) {
          node541.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref575.rebind());
      
      var ref576 = s;
      node541.val(""+ref576.get());
      var ignore111 = false;
      subs__.addSub(ref576.addEventListener('change', function(_, ref, val) {
        if(ignore111) return;
        node541.val(""+val);
      }));
      subs__.addSub(ref576.rebind());
      
      subs__.addSub(mobl.domBind(node541, 'keyup change', function() {
        ignore111 = true;
        s.set(mobl.stringTomobl__String(node541.val()));
        ignore111 = false;
      }));
      
      
      var val298 = onchange.get();
      if(val298 !== null) {
        subs__.addSub(mobl.domBind(node541, 'change', val298));
      }
      
      var val299 = onkeyup.get();
      if(val299 !== null) {
        subs__.addSub(mobl.domBind(node541, 'keyup', val299));
      }
      
      var val300 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val300 !== null) {
        subs__.addSub(mobl.domBind(node541, 'blur', val300));
      }
      
      node537.append(node541);
      
      
    }
  };
  renderCond130();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond130();
  }));
  
  callback(root1472); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1473 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref581 = style;
  if(ref581.get() !== null) {
    sel.attr('class', ref581.get());
    subs__.addSub(ref581.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref581.rebind());
  
  var val301 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after89(result__) {
                    var tmp1012 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after89);if(result__ !== undefined) after89(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val301 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val301));
  }
  
  
  var node542 = mobl.loadingSpan();
  sel.append(node542);
  var list97;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList97 = function() {
    var subs__ = listSubs__;
    list97 = options.get();
    list97.list(function(results97) {
      node542.empty();
      for(var i139 = 0; i139 < results97.length; i139++) {
        (function() {
          var iternode97 = $("<span>");
          node542.append(iternode97);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results97), i139), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results97), i139), "_2");
          
          var node543 = $("<option>");
          
          var ref577 = optionDescription;
          node543.text(""+ref577.get());
          var ignore112 = false;
          subs__.addSub(ref577.addEventListener('change', function(_, ref, val) {
            if(ignore112) return;
            node543.text(""+val);
          }));
          subs__.addSub(ref577.rebind());
          
          
          var ref578 = optionStyle;
          if(ref578.get() !== null) {
            node543.attr('class', ref578.get());
            subs__.addSub(ref578.addEventListener('change', function(_, ref, val) {
              node543.attr('class', val);
            }));
            
          }
          subs__.addSub(ref578.rebind());
          
          var ref579 = optionValue;
          if(ref579.get() !== null) {
            node543.attr('value', ref579.get());
            subs__.addSub(ref579.addEventListener('change', function(_, ref, val) {
              node543.attr('value', val);
            }));
            
          }
          subs__.addSub(ref579.rebind());
          
          var ref580 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref580.get() !== null) {
            node543.attr('selected', ref580.get());
            subs__.addSub(ref580.addEventListener('change', function(_, ref, val) {
              node543.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node543.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node543.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref580.rebind());
          
          iternode97.append(node543);
          
          var oldNodes = iternode97;
          iternode97 = iternode97.contents();
          oldNodes.replaceWith(iternode97);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list97.addEventListener('change', function() { listSubs__.unsubscribe(); renderList97(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList97(true); }));
    });
  };
  renderList97();
  
  root1473.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1473); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1474 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1084 = $("<span>");
    root1474.append(nodes1084);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1475 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node544 = mobl.loadingSpan();
      root1475.append(node544);
      var list98;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList98 = function() {
        var subs__ = listSubs__;
        list98 = tabs.get();
        list98.list(function(results98) {
          node544.empty();
          for(var i140 = 0; i140 < results98.length; i140++) {
            (function() {
              var iternode98 = $("<span>");
              node544.append(iternode98);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp970 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp970.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp970.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp970.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp970.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp969 = mobl.ref(result__);
              
              var nodes1085 = $("<span>");
              iternode98.append(nodes1085);
              subs__.addSub((mobl.span)(tmp970, mobl.ref(null), tmp969, mobl.ref(null), function(_, callback) {
                var root1476 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1086 = $("<span>");
                root1476.append(nodes1086);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1477 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1477); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1086;
                  nodes1086 = node.contents();
                  oldNodes.replaceWith(nodes1086);
                }));
                callback(root1476); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1085;
                nodes1085 = node.contents();
                oldNodes.replaceWith(nodes1085);
              }));
              
              var oldNodes = iternode98;
              iternode98 = iternode98.contents();
              oldNodes.replaceWith(iternode98);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list98.addEventListener('change', function() { listSubs__.unsubscribe(); renderList98(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList98(true); }));
        });
      };
      renderList98();
      
      callback(root1475); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1084;
      nodes1084 = node.contents();
      oldNodes.replaceWith(nodes1084);
    }));
    
    var node545 = mobl.loadingSpan();
    root1474.append(node545);
    var list99;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList99 = function() {
      var subs__ = listSubs__;
      list99 = tabs.get();
      list99.list(function(results99) {
        node545.empty();
        for(var i141 = 0; i141 < results99.length; i141++) {
          (function() {
            var iternode99 = $("<span>");
            node545.append(iternode99);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp971 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp971.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp971.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp971.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp971.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1087 = $("<span>");
            iternode99.append(nodes1087);
            subs__.addSub((mobl.block)(tmp971, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1478 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1088 = $("<span>");
              root1478.append(nodes1088);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1479 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1089 = $("<span>");
                root1479.append(nodes1089);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl239();
                }));
                
                function renderControl239() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1480 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1480); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1089;
                    nodes1089 = node.contents();
                    oldNodes.replaceWith(nodes1089);
                  }));
                }
                renderControl239();
                callback(root1479); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1088;
                nodes1088 = node.contents();
                oldNodes.replaceWith(nodes1088);
              }));
              callback(root1478); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1087;
              nodes1087 = node.contents();
              oldNodes.replaceWith(nodes1087);
            }));
            
            var oldNodes = iternode99;
            iternode99 = iternode99.contents();
            oldNodes.replaceWith(iternode99);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list99.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
      });
    };
    renderList99();
    
    callback(root1474); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1084 = $("<span>");
      root1474.append(nodes1084);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1475 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node544 = mobl.loadingSpan();
        root1475.append(node544);
        var list98;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList98 = function() {
          var subs__ = listSubs__;
          list98 = tabs.get();
          list98.list(function(results98) {
            node544.empty();
            for(var i140 = 0; i140 < results98.length; i140++) {
              (function() {
                var iternode98 = $("<span>");
                node544.append(iternode98);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp970 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp970.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp970.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp970.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp970.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp969 = mobl.ref(result__);
                
                var nodes1085 = $("<span>");
                iternode98.append(nodes1085);
                subs__.addSub((mobl.span)(tmp970, mobl.ref(null), tmp969, mobl.ref(null), function(_, callback) {
                  var root1476 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1086 = $("<span>");
                  root1476.append(nodes1086);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1477 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1477); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1086;
                    nodes1086 = node.contents();
                    oldNodes.replaceWith(nodes1086);
                  }));
                  callback(root1476); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1085;
                  nodes1085 = node.contents();
                  oldNodes.replaceWith(nodes1085);
                }));
                
                var oldNodes = iternode98;
                iternode98 = iternode98.contents();
                oldNodes.replaceWith(iternode98);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list98.addEventListener('change', function() { listSubs__.unsubscribe(); renderList98(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList98(true); }));
          });
        };
        renderList98();
        
        callback(root1475); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1084;
        nodes1084 = node.contents();
        oldNodes.replaceWith(nodes1084);
      }));
      
      var node545 = mobl.loadingSpan();
      root1474.append(node545);
      var list99;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList99 = function() {
        var subs__ = listSubs__;
        list99 = tabs.get();
        list99.list(function(results99) {
          node545.empty();
          for(var i141 = 0; i141 < results99.length; i141++) {
            (function() {
              var iternode99 = $("<span>");
              node545.append(iternode99);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp971 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp971.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp971.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp971.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp971.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1087 = $("<span>");
              iternode99.append(nodes1087);
              subs__.addSub((mobl.block)(tmp971, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1478 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1088 = $("<span>");
                root1478.append(nodes1088);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1479 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1089 = $("<span>");
                  root1479.append(nodes1089);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl239();
                  }));
                  
                  function renderControl239() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1480 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1480); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1089;
                      nodes1089 = node.contents();
                      oldNodes.replaceWith(nodes1089);
                    }));
                  }
                  renderControl239();
                  callback(root1479); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1088;
                  nodes1088 = node.contents();
                  oldNodes.replaceWith(nodes1088);
                }));
                callback(root1478); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1087;
                nodes1087 = node.contents();
                oldNodes.replaceWith(nodes1087);
              }));
              
              var oldNodes = iternode99;
              iternode99 = iternode99.contents();
              oldNodes.replaceWith(iternode99);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list99.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
        });
      };
      renderList99();
      
      callback(root1474); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1481 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node546 = $("<div>");
  
  var ref585 = mobl.ref(ui.searchboxStyle);
  if(ref585.get() !== null) {
    node546.attr('class', ref585.get());
    subs__.addSub(ref585.addEventListener('change', function(_, ref, val) {
      node546.attr('class', val);
    }));
    
  }
  subs__.addSub(ref585.rebind());
  
  
  var node547 = $("<input>");
  node547.attr('type', "search");
  
  var ref582 = mobl.ref(ui.searchBoxInputStyle);
  if(ref582.get() !== null) {
    node547.attr('class', ref582.get());
    subs__.addSub(ref582.addEventListener('change', function(_, ref, val) {
      node547.attr('class', val);
    }));
    
  }
  subs__.addSub(ref582.rebind());
  
  var ref583 = placeholder;
  if(ref583.get() !== null) {
    node547.attr('placeholder', ref583.get());
    subs__.addSub(ref583.addEventListener('change', function(_, ref, val) {
      node547.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref583.rebind());
  
  var ref584 = s;
  node547.val(""+ref584.get());
  var ignore113 = false;
  subs__.addSub(ref584.addEventListener('change', function(_, ref, val) {
    if(ignore113) return;
    node547.val(""+val);
  }));
  subs__.addSub(ref584.rebind());
  
  subs__.addSub(mobl.domBind(node547, 'keyup change', function() {
    ignore113 = true;
    s.set(mobl.stringTomobl__String(node547.val()));
    ignore113 = false;
  }));
  
  
  var val302 = onsearch.get();
  if(val302 !== null) {
    subs__.addSub(mobl.domBind(node547, 'change', val302));
  }
  
  var val303 = onkeyup.get();
  if(val303 !== null) {
    subs__.addSub(mobl.domBind(node547, 'keyup', val303));
  }
  node547.attr('autocorrect', false);
  node547.attr('autocapitalize', false);
  node547.attr('autocomplete', false);
  
  node546.append(node547);
  root1481.append(node546);
  callback(root1481); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1482 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref586 = mobl.ref(ui.contextMenuStyle);
  if(ref586.get() !== null) {
    menu.attr('class', ref586.get());
    subs__.addSub(ref586.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref586.rebind());
  
  var nodes1090 = $("<span>");
  menu.append(nodes1090);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl240();
  }));
  
  function renderControl240() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1483 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1483); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1090;
      nodes1090 = node.contents();
      oldNodes.replaceWith(nodes1090);
    }));
  }
  renderControl240();
  root1482.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val304 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1015 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val304 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val304));
  }
  
  root1482.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1482); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1484 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp999 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp999.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node548 = $("<span>");
  root1484.append(node548);
  var condSubs131 = new mobl.CompSubscription();
  subs__.addSub(condSubs131);
  var oldValue131;
  var renderCond131 = function() {
    var value543 = tmp999.get();
    if(oldValue131 === value543) return;
    oldValue131 = value543;
    var subs__ = condSubs131;
    subs__.unsubscribe();
    node548.empty();
    if(value543) {
      items.get().one(function(result__) {
        var tmp1016 = result__;
        var current = mobl.ref(result__);
        
        var node549 = $("<div>");
        node549.attr('width', "100%");
        
        
        var node550 = $("<div>");
        node550.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1093 = $("<span>");
        node550.append(nodes1093);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1487 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node553 = mobl.loadingSpan();
          root1487.append(node553);
          var list100;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList100 = function() {
            var subs__ = listSubs__;
            list100 = items.get();
            list100.list(function(results100) {
              node553.empty();
              for(var i142 = 0; i142 < results100.length; i142++) {
                (function() {
                  var iternode100 = $("<span>");
                  node553.append(iternode100);
                  var it;
                  it = mobl.ref(mobl.ref(results100), i142);
                  var result__ = it.get() == current.get();
                  var tmp977 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp977.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp977.set(it.get() == current.get());
                  }));
                  
                  
                  var node554 = $("<span>");
                  iternode100.append(node554);
                  var condSubs133 = new mobl.CompSubscription();
                  subs__.addSub(condSubs133);
                  var oldValue133;
                  var renderCond133 = function() {
                    var value545 = tmp977.get();
                    if(oldValue133 === value545) return;
                    oldValue133 = value545;
                    var subs__ = condSubs133;
                    subs__.unsubscribe();
                    node554.empty();
                    if(value545) {
                      var nodes1094 = $("<span>");
                      node554.append(nodes1094);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1488 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1095 = $("<span>");
                        root1488.append(nodes1095);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl242();
                        }));
                        
                        function renderControl242() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1489 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1489); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1095;
                            nodes1095 = node.contents();
                            oldNodes.replaceWith(nodes1095);
                          }));
                        }
                        renderControl242();
                        callback(root1488); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1094;
                        nodes1094 = node.contents();
                        oldNodes.replaceWith(nodes1094);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp976 = mobl.ref(result__);
                      
                      var nodes1096 = $("<span>");
                      node554.append(nodes1096);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp976, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1490 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1097 = $("<span>");
                        root1490.append(nodes1097);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl243();
                        }));
                        
                        function renderControl243() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1491 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1491); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1097;
                            nodes1097 = node.contents();
                            oldNodes.replaceWith(nodes1097);
                          }));
                        }
                        renderControl243();
                        callback(root1490); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1096;
                        nodes1096 = node.contents();
                        oldNodes.replaceWith(nodes1096);
                      }));
                      
                      
                    }
                  };
                  renderCond133();
                  subs__.addSub(tmp977.addEventListener('change', function() {
                    renderCond133();
                  }));
                  
                  
                  var oldNodes = iternode100;
                  iternode100 = iternode100.contents();
                  oldNodes.replaceWith(iternode100);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list100.addEventListener('change', function() { listSubs__.unsubscribe(); renderList100(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList100(true); }));
            });
          };
          renderList100();
          
          callback(root1487); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1093;
          nodes1093 = node.contents();
          oldNodes.replaceWith(nodes1093);
        }));
        node549.append(node550);
        
        var node551 = $("<div>");
        node551.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node552 = $("<span>");
        node551.append(node552);
        var condSubs132 = new mobl.CompSubscription();
        subs__.addSub(condSubs132);
        var oldValue132;
        var renderCond132 = function() {
          var value544 = current.get();
          if(oldValue132 === value544) return;
          oldValue132 = value544;
          var subs__ = condSubs132;
          subs__.unsubscribe();
          node552.empty();
          if(value544) {
            var nodes1091 = $("<span>");
            node552.append(nodes1091);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl241();
            }));
            
            function renderControl241() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1485 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1485); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1091;
                nodes1091 = node.contents();
                oldNodes.replaceWith(nodes1091);
              }));
            }
            renderControl241();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp978 = mobl.ref(result__);
            
            var nodes1092 = $("<span>");
            node552.append(nodes1092);
            subs__.addSub((mobl.label)(tmp978, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1486 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1486); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1092;
              nodes1092 = node.contents();
              oldNodes.replaceWith(nodes1092);
            }));
            
            
          }
        };
        renderCond132();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond132();
        }));
        
        node549.append(node551);
        node548.append(node549);
        
        
        
        
        
        
      });
    } else {
      var nodes1098 = $("<span>");
      node548.append(nodes1098);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1492 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node555 = mobl.loadingSpan();
        root1492.append(node555);
        var list101;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList101 = function() {
          var subs__ = listSubs__;
          list101 = items.get();
          list101.list(function(results101) {
            node555.empty();
            for(var i143 = 0; i143 < results101.length; i143++) {
              (function() {
                var iternode101 = $("<span>");
                node555.append(iternode101);
                var it;
                it = mobl.ref(mobl.ref(results101), i143);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1017 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp972 = mobl.ref(result__);
                
                var nodes1099 = $("<span>");
                iternode101.append(nodes1099);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp972, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1493 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1100 = $("<span>");
                  root1493.append(nodes1100);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl244();
                  }));
                  
                  function renderControl244() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1494 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1494); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1100;
                      nodes1100 = node.contents();
                      oldNodes.replaceWith(nodes1100);
                    }));
                  }
                  renderControl244();
                  callback(root1493); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1099;
                  nodes1099 = node.contents();
                  oldNodes.replaceWith(nodes1099);
                }));
                
                var oldNodes = iternode101;
                iternode101 = iternode101.contents();
                oldNodes.replaceWith(iternode101);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list101.addEventListener('change', function() { listSubs__.unsubscribe(); renderList101(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList101(true); }));
          });
        };
        renderList101();
        
        callback(root1492); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1098;
        nodes1098 = node.contents();
        oldNodes.replaceWith(nodes1098);
      }));
      
      
    }
  };
  renderCond131();
  subs__.addSub(tmp999.addEventListener('change', function() {
    renderCond131();
  }));
  
  callback(root1484); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1495 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp975 = mobl.ref(result__);
  
  var nodes1101 = $("<span>");
  root1495.append(nodes1101);
  subs__.addSub((ui.header)(tmp975, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1496 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp974 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp973 = mobl.ref(result__);
    
    var nodes1102 = $("<span>");
    root1496.append(nodes1102);
    subs__.addSub((ui.backButton)(tmp973, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp974, function(_, callback) {
      var root1497 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1497); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1102;
      nodes1102 = node.contents();
      oldNodes.replaceWith(nodes1102);
    }));
    callback(root1496); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1101;
    nodes1101 = node.contents();
    oldNodes.replaceWith(nodes1101);
  }));
  var nodes1103 = $("<span>");
  root1495.append(nodes1103);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl245();
  }));
  
  function renderControl245() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1498 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1498); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1103;
      nodes1103 = node.contents();
      oldNodes.replaceWith(nodes1103);
    }));
  }
  renderControl245();
  callback(root1495); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1499 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1104 = $("<span>");
  root1499.append(nodes1104);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1500 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node556 = mobl.loadingSpan();
    root1500.append(node556);
    var list102;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList102 = function() {
      var subs__ = listSubs__;
      list102 = coll.get();
      list102.list(function(results102) {
        node556.empty();
        for(var i144 = 0; i144 < results102.length; i144++) {
          (function() {
            var iternode102 = $("<span>");
            node556.append(iternode102);
            var it;
            it = mobl.ref(mobl.ref(results102), i144);
            var result__ = it.get() == selected.get();
            var tmp980 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp980.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp980.set(it.get() == selected.get());
            }));
            
            
            var node557 = $("<span>");
            iternode102.append(node557);
            var condSubs134 = new mobl.CompSubscription();
            subs__.addSub(condSubs134);
            var oldValue134;
            var renderCond134 = function() {
              var value546 = tmp980.get();
              if(oldValue134 === value546) return;
              oldValue134 = value546;
              var subs__ = condSubs134;
              subs__.unsubscribe();
              node557.empty();
              if(value546) {
                var nodes1105 = $("<span>");
                node557.append(nodes1105);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1501 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1106 = $("<span>");
                  root1501.append(nodes1106);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl246();
                  }));
                  
                  function renderControl246() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1502 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1502); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1106;
                      nodes1106 = node.contents();
                      oldNodes.replaceWith(nodes1106);
                    }));
                  }
                  renderControl246();
                  callback(root1501); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1105;
                  nodes1105 = node.contents();
                  oldNodes.replaceWith(nodes1105);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp979 = mobl.ref(result__);
                
                var nodes1107 = $("<span>");
                node557.append(nodes1107);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp979, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1503 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1108 = $("<span>");
                  root1503.append(nodes1108);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl247();
                  }));
                  
                  function renderControl247() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1504 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1504); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1108;
                      nodes1108 = node.contents();
                      oldNodes.replaceWith(nodes1108);
                    }));
                  }
                  renderControl247();
                  callback(root1503); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1107;
                  nodes1107 = node.contents();
                  oldNodes.replaceWith(nodes1107);
                }));
                
                
              }
            };
            renderCond134();
            subs__.addSub(tmp980.addEventListener('change', function() {
              renderCond134();
            }));
            
            
            var oldNodes = iternode102;
            iternode102 = iternode102.contents();
            oldNodes.replaceWith(iternode102);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list102.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
      });
    };
    renderList102();
    
    callback(root1500); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1104;
    nodes1104 = node.contents();
    oldNodes.replaceWith(nodes1104);
  }));
  callback(root1499); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1505 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp1018 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp981 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp981.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp981.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp981.set(coll.get().limit(n.get()));
    }));
    
    
    var node558 = mobl.loadingSpan();
    root1505.append(node558);
    var list103;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList103 = function() {
      var subs__ = listSubs__;
      list103 = tmp981.get();
      list103.list(function(results103) {
        node558.empty();
        for(var i145 = 0; i145 < results103.length; i145++) {
          (function() {
            var iternode103 = $("<span>");
            node558.append(iternode103);
            var it;
            it = mobl.ref(mobl.ref(results103), i145);
            var nodes1109 = $("<span>");
            iternode103.append(nodes1109);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl248();
            }));
            
            function renderControl248() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1506 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1506); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1109;
                nodes1109 = node.contents();
                oldNodes.replaceWith(nodes1109);
              }));
            }
            renderControl248();
            
            var oldNodes = iternode103;
            iternode103 = iternode103.contents();
            oldNodes.replaceWith(iternode103);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list103.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
        subs__.addSub(tmp981.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
      });
    };
    renderList103();
    
    var result__ = n.get() < total.get();
    var tmp983 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp983.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp983.set(n.get() < total.get());
    }));
    
    
    var node559 = $("<span>");
    root1505.append(node559);
    var condSubs135 = new mobl.CompSubscription();
    subs__.addSub(condSubs135);
    var oldValue135;
    var renderCond135 = function() {
      var value547 = tmp983.get();
      if(oldValue135 === value547) return;
      oldValue135 = value547;
      var subs__ = condSubs135;
      subs__.unsubscribe();
      node559.empty();
      if(value547) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp982 = mobl.ref(result__);
        
        var nodes1110 = $("<span>");
        node559.append(nodes1110);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp982, mobl.ref(null), function(_, callback) {
          var root1507 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1111 = $("<span>");
          root1507.append(nodes1111);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1508 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1508); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1111;
            nodes1111 = node.contents();
            oldNodes.replaceWith(nodes1111);
          }));
          callback(root1507); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1110;
          nodes1110 = node.contents();
          oldNodes.replaceWith(nodes1110);
        }));
        
        
      } else {
        
      }
    };
    renderCond135();
    subs__.addSub(tmp983.addEventListener('change', function() {
      renderCond135();
    }));
    
    callback(root1505); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1509 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1112 = $("<span>");
  root1509.append(nodes1112);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1510 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node560 = mobl.loadingSpan();
    root1510.append(node560);
    var list104;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList104 = function() {
      var subs__ = listSubs__;
      list104 = items.get();
      list104.list(function(results104) {
        node560.empty();
        for(var i146 = 0; i146 < results104.length; i146++) {
          (function() {
            var iternode104 = $("<span>");
            node560.append(iternode104);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results104), i146), "_1");it = mobl.ref(mobl.ref(mobl.ref(results104), i146), "_2");
            var nodes1113 = $("<span>");
            iternode104.append(nodes1113);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1511 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1114 = $("<span>");
              root1511.append(nodes1114);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1512 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1512); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1114;
                nodes1114 = node.contents();
                oldNodes.replaceWith(nodes1114);
              }));
              callback(root1511); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1113;
              nodes1113 = node.contents();
              oldNodes.replaceWith(nodes1113);
            }));
            
            var oldNodes = iternode104;
            iternode104 = iternode104.contents();
            oldNodes.replaceWith(iternode104);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list104.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
      });
    };
    renderList104();
    
    callback(root1510); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1112;
    nodes1112 = node.contents();
    oldNodes.replaceWith(nodes1112);
  }));
  callback(root1509); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1513 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll657) {
    coll657 = coll657.reverse();
    function processOne39() {
      var it;
      it = coll657.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll657.length > 0) processOne39(); else rest39();
      
    }
    function rest39() {
      var nodes1115 = $("<span>");
      root1513.append(nodes1115);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1514 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp984 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp985 = mobl.ref(result__);
        
        var nodes1116 = $("<span>");
        root1514.append(nodes1116);
        subs__.addSub((ui.backButton)(tmp985, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp984, function(_, callback) {
          var root1515 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1515); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1116;
          nodes1116 = node.contents();
          oldNodes.replaceWith(nodes1116);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll656) {
                           coll656 = coll656.reverse();
                           function processOne38() {
                             var checked;var it;
                             var tmp1020 = coll656.pop();
                             checked = tmp1020._1;it = tmp1020._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll656.length > 0) processOne38(); else rest38();
                               
                             } else {
                               {
                                 
                                 if(coll656.length > 0) processOne38(); else rest38();
                                 
                               }
                             }
                           }
                           function rest38() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll656.length > 0) processOne38(); else rest38();
                         });
                         
                       };
        var tmp986 = mobl.ref(result__);
        
        var nodes1117 = $("<span>");
        root1514.append(nodes1117);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp986, function(_, callback) {
          var root1516 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1516); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1117;
          nodes1117 = node.contents();
          oldNodes.replaceWith(nodes1117);
        }));
        callback(root1514); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1115;
        nodes1115 = node.contents();
        oldNodes.replaceWith(nodes1115);
      }));
      var nodes1118 = $("<span>");
      root1513.append(nodes1118);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1517 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1517); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1118;
        nodes1118 = node.contents();
        oldNodes.replaceWith(nodes1118);
      }));
      callback(root1513); return subs__;
      
      
    }
    if(coll657.length > 0) processOne39(); else rest39();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1518 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1119 = $("<span>");
  root1518.append(nodes1119);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1519 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1519); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1119;
    nodes1119 = node.contents();
    oldNodes.replaceWith(nodes1119);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp987 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp987.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp987.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp987.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp987.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp987.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1120 = $("<span>");
  root1518.append(nodes1120);
  subs__.addSub((ui.masterDetail)(tmp987, masterItem, detailItem, function(_, callback) {
    var root1520 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1520); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1120;
    nodes1120 = node.contents();
    oldNodes.replaceWith(nodes1120);
  }));
  callback(root1518); return subs__;
  
  
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
  var root1521 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1121 = $("<span>");
  root1521.append(nodes1121);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1522 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node561 = mobl.loadingSpan();
    root1522.append(node561);
    var list105;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList105 = function() {
      var subs__ = listSubs__;
      list105 = sections.get();
      list105.list(function(results105) {
        node561.empty();
        for(var i147 = 0; i147 < results105.length; i147++) {
          (function() {
            var iternode105 = $("<span>");
            node561.append(iternode105);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results105), i147), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results105), i147), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp989 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp989.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp989.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp989.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp989.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp988 = mobl.ref(result__);
            
            var nodes1122 = $("<span>");
            iternode105.append(nodes1122);
            subs__.addSub((mobl.span)(tmp989, mobl.ref(null), tmp988, mobl.ref(null), function(_, callback) {
              var root1523 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1123 = $("<span>");
              root1523.append(nodes1123);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1524 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1524); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1123;
                nodes1123 = node.contents();
                oldNodes.replaceWith(nodes1123);
              }));
              callback(root1523); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1122;
              nodes1122 = node.contents();
              oldNodes.replaceWith(nodes1122);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp990 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp990.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp990.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp990.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp990.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1124 = $("<span>");
            iternode105.append(nodes1124);
            subs__.addSub((mobl.block)(tmp990, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1525 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1125 = $("<span>");
              root1525.append(nodes1125);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl249();
              }));
              
              function renderControl249() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1526 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1526); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1125;
                  nodes1125 = node.contents();
                  oldNodes.replaceWith(nodes1125);
                }));
              }
              renderControl249();
              callback(root1525); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1124;
              nodes1124 = node.contents();
              oldNodes.replaceWith(nodes1124);
            }));
            
            var oldNodes = iternode105;
            iternode105 = iternode105.contents();
            oldNodes.replaceWith(iternode105);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list105.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
      });
    };
    renderList105();
    
    callback(root1522); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1121;
    nodes1121 = node.contents();
    oldNodes.replaceWith(nodes1121);
  }));
  callback(root1521); return subs__;
  
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
  var root1527 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node562 = $("<table>");
  
  var ref587 = style;
  if(ref587.get() !== null) {
    node562.attr('class', ref587.get());
    subs__.addSub(ref587.addEventListener('change', function(_, ref, val) {
      node562.attr('class', val);
    }));
    
  }
  subs__.addSub(ref587.rebind());
  
  var nodes1126 = $("<span>");
  node562.append(nodes1126);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl250();
  }));
  
  function renderControl250() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1528 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1528); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1126;
      nodes1126 = node.contents();
      oldNodes.replaceWith(nodes1126);
    }));
  }
  renderControl250();
  root1527.append(node562);
  callback(root1527); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1529 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node563 = $("<tr>");
  
  var ref588 = style;
  if(ref588.get() !== null) {
    node563.attr('class', ref588.get());
    subs__.addSub(ref588.addEventListener('change', function(_, ref, val) {
      node563.attr('class', val);
    }));
    
  }
  subs__.addSub(ref588.rebind());
  
  var nodes1127 = $("<span>");
  node563.append(nodes1127);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl251();
  }));
  
  function renderControl251() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1530); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1127;
      nodes1127 = node.contents();
      oldNodes.replaceWith(nodes1127);
    }));
  }
  renderControl251();
  root1529.append(node563);
  callback(root1529); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1531 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node564 = $("<td>");
  
  var ref589 = width;
  if(ref589.get() !== null) {
    node564.attr('width', ref589.get());
    subs__.addSub(ref589.addEventListener('change', function(_, ref, val) {
      node564.attr('width', val);
    }));
    
  }
  subs__.addSub(ref589.rebind());
  
  var ref590 = style;
  if(ref590.get() !== null) {
    node564.attr('class', ref590.get());
    subs__.addSub(ref590.addEventListener('change', function(_, ref, val) {
      node564.attr('class', val);
    }));
    
  }
  subs__.addSub(ref590.rebind());
  
  var nodes1128 = $("<span>");
  node564.append(nodes1128);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl252();
  }));
  
  function renderControl252() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1532 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1532); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1128;
      nodes1128 = node.contents();
      oldNodes.replaceWith(nodes1128);
    }));
  }
  renderControl252();
  root1531.append(node564);
  callback(root1531); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1533 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node565 = $("<td>");
  
  var ref591 = width;
  if(ref591.get() !== null) {
    node565.attr('width', ref591.get());
    subs__.addSub(ref591.addEventListener('change', function(_, ref, val) {
      node565.attr('width', val);
    }));
    
  }
  subs__.addSub(ref591.rebind());
  
  var ref592 = style;
  if(ref592.get() !== null) {
    node565.attr('class', ref592.get());
    subs__.addSub(ref592.addEventListener('change', function(_, ref, val) {
      node565.attr('class', val);
    }));
    
  }
  subs__.addSub(ref592.rebind());
  
  var nodes1129 = $("<span>");
  node565.append(nodes1129);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl253();
  }));
  
  function renderControl253() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1534 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1534); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1129;
      nodes1129 = node.contents();
      oldNodes.replaceWith(nodes1129);
    }));
  }
  renderControl253();
  root1533.append(node565);
  callback(root1533); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1535 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node566 = $("<td>");
  
  var ref593 = width;
  if(ref593.get() !== null) {
    node566.attr('width', ref593.get());
    subs__.addSub(ref593.addEventListener('change', function(_, ref, val) {
      node566.attr('width', val);
    }));
    
  }
  subs__.addSub(ref593.rebind());
  
  var ref594 = style;
  if(ref594.get() !== null) {
    node566.attr('class', ref594.get());
    subs__.addSub(ref594.addEventListener('change', function(_, ref, val) {
      node566.attr('class', val);
    }));
    
  }
  subs__.addSub(ref594.rebind());
  
  
  var node567 = $("<strong>");
  
  var nodes1130 = $("<span>");
  node567.append(nodes1130);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl254();
  }));
  
  function renderControl254() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1536 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1536); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1130;
      nodes1130 = node.contents();
      oldNodes.replaceWith(nodes1130);
    }));
  }
  renderControl254();
  node566.append(node567);
  root1535.append(node566);
  callback(root1535); return subs__;
  
  
  
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
  items.list(function(coll658) {
    coll658 = coll658.reverse();
    function processOne40() {
      var item;
      item = coll658.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll658.length > 0) processOne40(); else rest40();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll658.length > 0) processOne40(); else rest40();
          
        }
      }
    }
    function rest40() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll658.length > 0) processOne40(); else rest40();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mDetailScreen = function(it, detail, number, callback, screenCallback) {
  var root1537 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1131 = $("<span>");
  root1537.append(nodes1131);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl255();
  }));
  
  function renderControl255() {
    subs__.addSub((detail.get())(it, number, function(elements, callback) {
      var root1538 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1538); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1131;
      nodes1131 = node.contents();
      oldNodes.replaceWith(nodes1131);
    }));
  }
  renderControl255();
  callback(root1537); return subs__;
  
  return subs__;
};

ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root1539 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1000 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1000.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node568 = $("<span>");
  root1539.append(node568);
  var condSubs136 = new mobl.CompSubscription();
  subs__.addSub(condSubs136);
  var oldValue136;
  var renderCond136 = function() {
    var value548 = tmp1000.get();
    if(oldValue136 === value548) return;
    oldValue136 = value548;
    var subs__ = condSubs136;
    subs__.unsubscribe();
    node568.empty();
    if(value548) {
      
      var current = mobl.ref(null);
      
      var node569 = $("<div>");
      node569.attr('width', "100%");
      
      
      var node570 = $("<div>");
      node570.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes1133 = $("<span>");
      node570.append(nodes1133);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1541 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node573 = mobl.loadingSpan();
        root1541.append(node573);
        var list106;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList106 = function() {
          var subs__ = listSubs__;
          list106 = items.get();
          list106.list(function(results106) {
            node573.empty();
            for(var i148 = 0; i148 < results106.length; i148++) {
              (function() {
                var iternode106 = $("<span>");
                node573.append(iternode106);
                var it;
                it = mobl.ref(mobl.ref(results106), i148);
                var result__ = it.get() == current.get();
                var tmp996 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp996.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp996.set(it.get() == current.get());
                }));
                
                
                var node574 = $("<span>");
                iternode106.append(node574);
                var condSubs138 = new mobl.CompSubscription();
                subs__.addSub(condSubs138);
                var oldValue138;
                var renderCond138 = function() {
                  var value550 = tmp996.get();
                  if(oldValue138 === value550) return;
                  oldValue138 = value550;
                  var subs__ = condSubs138;
                  subs__.unsubscribe();
                  node574.empty();
                  if(value550) {
                    var nodes1134 = $("<span>");
                    node574.append(nodes1134);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root1542 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1027 = result__;
                        var tmp993 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1025 = result__;
                            var result__ = tmp1025;
                            tmp993.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1026 = result__;
                            var result__ = tmp1026;
                            tmp993.set(result__);
                            
                          });
                        }));
                        
                        var nodes1135 = $("<span>");
                        root1542.append(nodes1135);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl257();
                        }));
                        
                        function renderControl257() {
                          subs__.addSub((masterItem.get())(it, tmp993, function(elements, callback) {
                            var root1543 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1543); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1135;
                            nodes1135 = node.contents();
                            oldNodes.replaceWith(nodes1135);
                          }));
                        }
                        renderControl257();
                        callback(root1542); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1134;
                      nodes1134 = node.contents();
                      oldNodes.replaceWith(nodes1134);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = true;
                                     ui.visible.set(result__);
                                     mathJAX.renderMaths(function(result__) {
                                       var tmp1031 = result__;
                                       var result__ = plot.renderPlot("corePlotArea", current.get());
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   };
                    var tmp995 = mobl.ref(result__);
                    
                    var nodes1136 = $("<span>");
                    node574.append(nodes1136);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp995, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root1544 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1030 = result__;
                        var tmp994 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1028 = result__;
                            var result__ = tmp1028;
                            tmp994.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1029 = result__;
                            var result__ = tmp1029;
                            tmp994.set(result__);
                            
                          });
                        }));
                        
                        var nodes1137 = $("<span>");
                        root1544.append(nodes1137);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl258();
                        }));
                        
                        function renderControl258() {
                          subs__.addSub((masterItem.get())(it, tmp994, function(elements, callback) {
                            var root1545 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1545); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1137;
                            nodes1137 = node.contents();
                            oldNodes.replaceWith(nodes1137);
                          }));
                        }
                        renderControl258();
                        callback(root1544); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1136;
                      nodes1136 = node.contents();
                      oldNodes.replaceWith(nodes1136);
                    }));
                    
                    
                  }
                };
                renderCond138();
                subs__.addSub(tmp996.addEventListener('change', function() {
                  renderCond138();
                }));
                
                
                var oldNodes = iternode106;
                iternode106 = iternode106.contents();
                oldNodes.replaceWith(iternode106);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list106.addEventListener('change', function() { listSubs__.unsubscribe(); renderList106(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList106(true); }));
          });
        };
        renderList106();
        
        callback(root1541); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1133;
        nodes1133 = node.contents();
        oldNodes.replaceWith(nodes1133);
      }));
      node569.append(node570);
      
      var node571 = $("<div>");
      node571.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
      
      var result__ = current.get() && ui.visible.get();
      var tmp998 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        tmp998.set(current.get() && ui.visible.get());
      }));
      subs__.addSub(ui.visible.addEventListener('change', function() {
        tmp998.set(current.get() && ui.visible.get());
      }));
      
      
      var node572 = $("<span>");
      node571.append(node572);
      var condSubs137 = new mobl.CompSubscription();
      subs__.addSub(condSubs137);
      var oldValue137;
      var renderCond137 = function() {
        var value549 = tmp998.get();
        if(oldValue137 === value549) return;
        oldValue137 = value549;
        var subs__ = condSubs137;
        subs__.unsubscribe();
        node572.empty();
        if(value549) {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp1024 = result__;
            var tmp997 = mobl.ref(result__);
            subs__.addSub(current.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp1022 = result__;
                var result__ = tmp1022;
                tmp997.set(result__);
                
              });
            }));
            subs__.addSub(items.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp1023 = result__;
                var result__ = tmp1023;
                tmp997.set(result__);
                
              });
            }));
            
            var nodes1132 = $("<span>");
            node572.append(nodes1132);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl256();
            }));
            
            function renderControl256() {
              subs__.addSub((detail.get())(current, tmp997, function(elements, callback) {
                var root1540 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1540); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1132;
                nodes1132 = node.contents();
                oldNodes.replaceWith(nodes1132);
              }));
            }
            renderControl256();
            
            
          });
        } else {
          
        }
      };
      renderCond137();
      subs__.addSub(tmp998.addEventListener('change', function() {
        renderCond137();
      }));
      
      node569.append(node571);
      node568.append(node569);
      
      
      
      
      
      
    } else {
      var nodes1138 = $("<span>");
      node568.append(nodes1138);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1546 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node575 = mobl.loadingSpan();
        root1546.append(node575);
        var list107;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList107 = function() {
          var subs__ = listSubs__;
          list107 = items.get();
          list107.list(function(results107) {
            node575.empty();
            for(var i149 = 0; i149 < results107.length; i149++) {
              (function() {
                var iternode107 = $("<span>");
                node575.append(iternode107);
                var it;
                it = mobl.ref(mobl.ref(results107), i149);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 ui.indexOf(it.get(), items.get(), function(result__) {
                                   var tmp1036 = result__;
                                   mobl.call('ui.mDetailScreen', [it, detail, mobl.ref(tmp1036), mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp1035 = result__;
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp1037 = result__;
                                     var result__ = plot.renderPlot("corePlotArea", it.get());
                                     if(callback && callback.apply) callback(); return;
                                   });
                                   });
                                 });
                               };
                var tmp992 = mobl.ref(result__);
                
                var nodes1139 = $("<span>");
                iternode107.append(nodes1139);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp992, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1547 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp1034 = result__;
                    var tmp991 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1032 = result__;
                        var result__ = tmp1032;
                        tmp991.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1033 = result__;
                        var result__ = tmp1033;
                        tmp991.set(result__);
                        
                      });
                    }));
                    
                    var nodes1140 = $("<span>");
                    root1547.append(nodes1140);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl259();
                    }));
                    
                    function renderControl259() {
                      subs__.addSub((masterItem.get())(it, tmp991, function(elements, callback) {
                        var root1548 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root1548); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1140;
                        nodes1140 = node.contents();
                        oldNodes.replaceWith(nodes1140);
                      }));
                    }
                    renderControl259();
                    callback(root1547); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1139;
                  nodes1139 = node.contents();
                  oldNodes.replaceWith(nodes1139);
                }));
                
                var oldNodes = iternode107;
                iternode107 = iternode107.contents();
                oldNodes.replaceWith(iternode107);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list107.addEventListener('change', function() { listSubs__.unsubscribe(); renderList107(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList107(true); }));
          });
        };
        renderList107();
        
        callback(root1546); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1138;
        nodes1138 = node.contents();
        oldNodes.replaceWith(nodes1138);
      }));
      
      
    }
  };
  renderCond136();
  subs__.addSub(tmp1000.addEventListener('change', function() {
    renderCond136();
  }));
  
  callback(root1539); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root1549 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1141 = $("<span>");
  root1549.append(nodes1141);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1550 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1142 = $("<span>");
    root1550.append(nodes1142);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1551 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1551); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1142;
      nodes1142 = node.contents();
      oldNodes.replaceWith(nodes1142);
    }));
    callback(root1550); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1141;
    nodes1141 = node.contents();
    oldNodes.replaceWith(nodes1141);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes1143 = $("<span>");
  root1549.append(nodes1143);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root1552 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1552); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1143;
    nodes1143 = node.contents();
    oldNodes.replaceWith(nodes1143);
  }));
  callback(root1549); return subs__;
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
ui.delStyle = 'ui__delStyle';
ui.delPushedStyle = 'ui__delPushedStyle';
ui.itemStyle = 'ui__itemStyle';
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
