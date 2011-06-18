mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root6625 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2452 = $("<span>");
  root6625.append(node2452);
  var condSubs601 = new mobl.CompSubscription();
  subs__.addSub(condSubs601);
  var oldValue601;
  var renderCond601 = function() {
    var value2625 = value.get();
    if(oldValue601 === value2625) return;
    oldValue601 = value2625;
    var subs__ = condSubs601;
    subs__.unsubscribe();
    node2452.empty();
    if(value2625) {
      var nodes5037 = $("<span>");
      node2452.append(nodes5037);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl982();
      }));
      
      function renderControl982() {
        subs__.addSub((elements)(function(elements, callback) {
          var root6626 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6626); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5037;
          nodes5037 = node.contents();
          oldNodes.replaceWith(nodes5037);
        }));
      }
      renderControl982();
      
      
    } else {
      var nodes5038 = $("<span>");
      node2452.append(nodes5038);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6627 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes5039 = $("<span>");
        root6627.append(nodes5039);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root6628 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6628); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5039;
          nodes5039 = node.contents();
          oldNodes.replaceWith(nodes5039);
        }));
        var nodes5040 = $("<span>");
        root6627.append(nodes5040);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root6629 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6629); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5040;
          nodes5040 = node.contents();
          oldNodes.replaceWith(nodes5040);
        }));
        callback(root6627); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5038;
        nodes5038 = node.contents();
        oldNodes.replaceWith(nodes5038);
      }));
      
      
    }
  };
  renderCond601();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond601();
  }));
  
  callback(root6625); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root6630 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2453 = $("<div>");
  
  var ref2413 = mobl.ref(ui.headerStyle);
  if(ref2413.get() !== null) {
    node2453.attr('class', ref2413.get());
    subs__.addSub(ref2413.addEventListener('change', function(_, ref, val) {
      node2453.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2413.rebind());
  
  var val1230 = onclick.get();
  if(val1230 !== null) {
    subs__.addSub(mobl.domBind(node2453, 'tap', val1230));
  }
  
  var ref2414 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2414.get() !== null) {
    node2453.attr('style', ref2414.get());
    subs__.addSub(ref2414.addEventListener('change', function(_, ref, val) {
      node2453.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2453.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2414.rebind());
  
  
  var node2456 = $("<div>");
  
  var ref2412 = mobl.ref(ui.headerContainerStyle);
  if(ref2412.get() !== null) {
    node2456.attr('class', ref2412.get());
    subs__.addSub(ref2412.addEventListener('change', function(_, ref, val) {
      node2456.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2412.rebind());
  
  
  var node2457 = $("<div>");
  
  var ref2410 = text;
  node2457.text(""+ref2410.get());
  var ignore474 = false;
  subs__.addSub(ref2410.addEventListener('change', function(_, ref, val) {
    if(ignore474) return;
    node2457.text(""+val);
  }));
  subs__.addSub(ref2410.rebind());
  
  
  var ref2411 = mobl.ref(ui.headerTextStyle);
  if(ref2411.get() !== null) {
    node2457.attr('class', ref2411.get());
    subs__.addSub(ref2411.addEventListener('change', function(_, ref, val) {
      node2457.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2411.rebind());
  
  node2456.append(node2457);
  node2453.append(node2456);
  var nodes5041 = $("<span>");
  node2453.append(nodes5041);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl983();
  }));
  
  function renderControl983() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6631 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6631); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5041;
      nodes5041 = node.contents();
      oldNodes.replaceWith(nodes5041);
    }));
  }
  renderControl983();
  root6630.append(node2453);
  
  var node2454 = $("<span>");
  root6630.append(node2454);
  var condSubs602 = new mobl.CompSubscription();
  subs__.addSub(condSubs602);
  var oldValue602;
  var renderCond602 = function() {
    var value2626 = fixedPosition.get();
    if(oldValue602 === value2626) return;
    oldValue602 = value2626;
    var subs__ = condSubs602;
    subs__.unsubscribe();
    node2454.empty();
    if(value2626) {
      
      var node2455 = $("<div>");
      node2455.attr('id', "hello");
      node2455.attr('style', "height: 2.9em;");
      
      node2454.append(node2455);
      
      
    } else {
      
    }
  };
  renderCond602();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond602();
  }));
  
  callback(root6630); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6632 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2415 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2415.get() !== null) {
    sp.attr('class', ref2415.get());
    subs__.addSub(ref2415.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2415.rebind());
  
  var val1231 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1231 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1231));
  }
  
  var val1232 = function(event, callback) {
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
  if(val1232 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1232));
  }
  
  var val1233 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after378(result__) {
                    var tmp4634 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after378);if(result__ !== undefined) after378(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1233 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1233));
  }
  
  var val1234 = function(event, callback) {
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
  if(val1234 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1234));
  }
  
  var ref2416 = text;
  sp.text(""+ref2416.get());
  var ignore475 = false;
  subs__.addSub(ref2416.addEventListener('change', function(_, ref, val) {
    if(ignore475) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2416.rebind());
  
  
  root6632.append(sp);
  callback(root6632); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6633 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5042 = $("<span>");
  root6633.append(nodes5042);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root6634 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6634); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5042;
    nodes5042 = node.contents();
    oldNodes.replaceWith(nodes5042);
  }));
  callback(root6633); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6635 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5043 = $("<span>");
  root6635.append(nodes5043);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root6636 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6636); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5043;
    nodes5043 = node.contents();
    oldNodes.replaceWith(nodes5043);
  }));
  callback(root6635); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root6637 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2458 = $("<ul>");
  
  var ref2417 = mobl.ref(ui.groupStyle);
  if(ref2417.get() !== null) {
    node2458.attr('class', ref2417.get());
    subs__.addSub(ref2417.addEventListener('change', function(_, ref, val) {
      node2458.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2417.rebind());
  
  var nodes5044 = $("<span>");
  node2458.append(nodes5044);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl984();
  }));
  
  function renderControl984() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6638 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6638); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5044;
      nodes5044 = node.contents();
      oldNodes.replaceWith(nodes5044);
    }));
  }
  renderControl984();
  root6637.append(node2458);
  callback(root6637); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root6639 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2459 = $("<img>");
  
  var ref2418 = url;
  if(ref2418.get() !== null) {
    node2459.attr('src', ref2418.get());
    subs__.addSub(ref2418.addEventListener('change', function(_, ref, val) {
      node2459.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2418.rebind());
  
  var ref2419 = width;
  if(ref2419.get() !== null) {
    node2459.attr('width', ref2419.get());
    subs__.addSub(ref2419.addEventListener('change', function(_, ref, val) {
      node2459.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2419.rebind());
  
  var ref2420 = height;
  if(ref2420.get() !== null) {
    node2459.attr('height', ref2420.get());
    subs__.addSub(ref2420.addEventListener('change', function(_, ref, val) {
      node2459.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2420.rebind());
  
  var ref2421 = style;
  if(ref2421.get() !== null) {
    node2459.attr('class', ref2421.get());
    subs__.addSub(ref2421.addEventListener('change', function(_, ref, val) {
      node2459.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2421.rebind());
  
  var val1235 = onclick.get();
  if(val1235 !== null) {
    subs__.addSub(mobl.domBind(node2459, 'tap', val1235));
  }
  
  var ref2422 = valign;
  if(ref2422.get() !== null) {
    node2459.attr('valign', ref2422.get());
    subs__.addSub(ref2422.addEventListener('change', function(_, ref, val) {
      node2459.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2422.rebind());
  
  var ref2423 = align;
  if(ref2423.get() !== null) {
    node2459.attr('align', ref2423.get());
    subs__.addSub(ref2423.addEventListener('change', function(_, ref, val) {
      node2459.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2423.rebind());
  
  root6639.append(node2459);
  callback(root6639); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root6640 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2424 = mobl.ref(ui.itemStyle);
  if(ref2424.get() !== null) {
    el.attr('class', ref2424.get());
    subs__.addSub(ref2424.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2424.rebind());
  
  var ref2425 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2425.get() !== null) {
    el.attr('class', ref2425.get());
    subs__.addSub(ref2425.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2425.rebind());
  
  var val1236 = onswipe.get();
  if(val1236 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1236));
  }
  
  var val1237 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4635 = result__;
                                           function after379(result__) {
                                             var tmp4636 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after379);if(result__ !== undefined) after379(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4637 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1237 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1237));
  }
  
  var nodes5045 = $("<span>");
  el.append(nodes5045);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl985();
  }));
  
  function renderControl985() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6641 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6641); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5045;
      nodes5045 = node.contents();
      oldNodes.replaceWith(nodes5045);
    }));
  }
  renderControl985();
  root6640.append(el);
  callback(root6640); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root6642 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2460 = $("<input>");
  node2460.attr('type', "checkbox");
  
  var ref2427 = b;
  node2460.attr('checked', !!ref2427.get());
  subs__.addSub(ref2427.addEventListener('change', function(_, ref, val) {
    if(ref === ref2427) node2460.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2460, 'change', function() {
    b.set(!!node2460.attr('checked'));
  }));
  
  var val1239 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1239 !== null) {
    subs__.addSub(mobl.domBind(node2460, 'tap', val1239));
  }
  
  var val1240 = onchange.get();
  if(val1240 !== null) {
    subs__.addSub(mobl.domBind(node2460, 'change', val1240));
  }
  
  root6642.append(node2460);
  
  root6642.append(" ");
  
  var node2461 = $("<span>");
  
  var ref2426 = label;
  node2461.text(""+ref2426.get());
  var ignore476 = false;
  subs__.addSub(ref2426.addEventListener('change', function(_, ref, val) {
    if(ignore476) return;
    node2461.text(""+val);
  }));
  subs__.addSub(ref2426.rebind());
  
  
  var val1238 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after380(result__) {
                    var tmp4638 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after380);if(result__ !== undefined) after380(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1238 !== null) {
    subs__.addSub(mobl.domBind(node2461, 'tap', val1238));
  }
  
  root6642.append(node2461);
  callback(root6642); return subs__;
  
  
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
  var root6643 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2462 = $("<span>");
  root6643.append(node2462);
  var condSubs603 = new mobl.CompSubscription();
  subs__.addSub(condSubs603);
  var oldValue603;
  var renderCond603 = function() {
    var value2627 = label.get();
    if(oldValue603 === value2627) return;
    oldValue603 = value2627;
    var subs__ = condSubs603;
    subs__.unsubscribe();
    node2462.empty();
    if(value2627) {
      var nodes5046 = $("<span>");
      node2462.append(nodes5046);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root6644 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6644); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5046;
        nodes5046 = node.contents();
        oldNodes.replaceWith(nodes5046);
      }));
      
      
    } else {
      
    }
  };
  renderCond603();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond603();
  }));
  
  
  var node2463 = $("<span>");
  root6643.append(node2463);
  var condSubs604 = new mobl.CompSubscription();
  subs__.addSub(condSubs604);
  var oldValue604;
  var renderCond604 = function() {
    var value2628 = validator.get();
    if(oldValue604 === value2628) return;
    oldValue604 = value2628;
    var subs__ = condSubs604;
    subs__.unsubscribe();
    node2463.empty();
    if(value2628) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after384(result__) {
        var tmp4639 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp4640 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2464 = $("<input>");
        
        var ref2428 = inputType;
        if(ref2428.get() !== null) {
          node2464.attr('type', ref2428.get());
          subs__.addSub(ref2428.addEventListener('change', function(_, ref, val) {
            node2464.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2428.rebind());
        
        var ref2429 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2429.get() !== null) {
          node2464.attr('class', ref2429.get());
          subs__.addSub(ref2429.addEventListener('change', function(_, ref, val) {
            node2464.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2464.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2464.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2464.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2429.rebind());
        
        var ref2430 = placeholder;
        if(ref2430.get() !== null) {
          node2464.attr('placeholder', ref2430.get());
          subs__.addSub(ref2430.addEventListener('change', function(_, ref, val) {
            node2464.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2430.rebind());
        
        var ref2431 = temp;
        node2464.val(""+ref2431.get());
        var ignore477 = false;
        subs__.addSub(ref2431.addEventListener('change', function(_, ref, val) {
          if(ignore477) return;
          node2464.val(""+val);
        }));
        subs__.addSub(ref2431.rebind());
        
        subs__.addSub(mobl.domBind(node2464, 'keyup change', function() {
          ignore477 = true;
          temp.set(mobl.stringTomobl__String(node2464.val()));
          ignore477 = false;
        }));
        
        
        var val1241 = onchange.get();
        if(val1241 !== null) {
          subs__.addSub(mobl.domBind(node2464, 'change', val1241));
        }
        
        var val1242 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after381(result__) {
                          var tmp4641 = result__;
                          function after382(result__) {
                            var tmp4642 = result__;
                            var result__ = tmp4642;
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
                          var result__ = validator.get()(temp.get(), after382);if(result__ !== undefined) after382(result__);
                        }
                        var result__ = onkeyup.get()(event, after381);if(result__ !== undefined) after381(result__);
                      } else {
                        {
                          function after383(result__) {
                            var tmp4642 = result__;
                            var result__ = tmp4642;
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
                          var result__ = validator.get()(temp.get(), after383);if(result__ !== undefined) after383(result__);
                        }
                      }
                    };
        if(val1242 !== null) {
          subs__.addSub(mobl.domBind(node2464, 'keyup', val1242));
        }
        
        var val1243 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1243 !== null) {
          subs__.addSub(mobl.domBind(node2464, 'blur', val1243));
        }
        
        node2463.append(node2464);
        var nodes5047 = $("<span>");
        node2463.append(nodes5047);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root6645 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6645); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5047;
          nodes5047 = node.contents();
          oldNodes.replaceWith(nodes5047);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after384);if(result__ !== undefined) after384(result__);
    } else {
      
      var node2465 = $("<input>");
      
      var ref2432 = inputType;
      if(ref2432.get() !== null) {
        node2465.attr('type', ref2432.get());
        subs__.addSub(ref2432.addEventListener('change', function(_, ref, val) {
          node2465.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2432.rebind());
      
      var ref2433 = style;
      if(ref2433.get() !== null) {
        node2465.attr('class', ref2433.get());
        subs__.addSub(ref2433.addEventListener('change', function(_, ref, val) {
          node2465.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2433.rebind());
      
      var ref2434 = placeholder;
      if(ref2434.get() !== null) {
        node2465.attr('placeholder', ref2434.get());
        subs__.addSub(ref2434.addEventListener('change', function(_, ref, val) {
          node2465.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2434.rebind());
      
      var ref2435 = s;
      node2465.val(""+ref2435.get());
      var ignore478 = false;
      subs__.addSub(ref2435.addEventListener('change', function(_, ref, val) {
        if(ignore478) return;
        node2465.val(""+val);
      }));
      subs__.addSub(ref2435.rebind());
      
      subs__.addSub(mobl.domBind(node2465, 'keyup change', function() {
        ignore478 = true;
        s.set(mobl.stringTomobl__String(node2465.val()));
        ignore478 = false;
      }));
      
      
      var val1244 = onchange.get();
      if(val1244 !== null) {
        subs__.addSub(mobl.domBind(node2465, 'change', val1244));
      }
      
      var val1245 = onkeyup.get();
      if(val1245 !== null) {
        subs__.addSub(mobl.domBind(node2465, 'keyup', val1245));
      }
      
      var val1246 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1246 !== null) {
        subs__.addSub(mobl.domBind(node2465, 'blur', val1246));
      }
      
      node2463.append(node2465);
      
      
    }
  };
  renderCond604();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond604();
  }));
  
  callback(root6643); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6646 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5048 = $("<span>");
  root6646.append(nodes5048);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6647 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6647); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5048;
    nodes5048 = node.contents();
    oldNodes.replaceWith(nodes5048);
  }));
  callback(root6646); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6648 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5049 = $("<span>");
  root6648.append(nodes5049);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6649 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6649); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5049;
    nodes5049 = node.contents();
    oldNodes.replaceWith(nodes5049);
  }));
  callback(root6648); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root6650 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2466 = $("<span>");
  root6650.append(node2466);
  var condSubs605 = new mobl.CompSubscription();
  subs__.addSub(condSubs605);
  var oldValue605;
  var renderCond605 = function() {
    var value2629 = label.get();
    if(oldValue605 === value2629) return;
    oldValue605 = value2629;
    var subs__ = condSubs605;
    subs__.unsubscribe();
    node2466.empty();
    if(value2629) {
      var nodes5050 = $("<span>");
      node2466.append(nodes5050);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root6651 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6651); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5050;
        nodes5050 = node.contents();
        oldNodes.replaceWith(nodes5050);
      }));
      
      
    } else {
      
    }
  };
  renderCond605();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond605();
  }));
  
  
  var node2467 = $("<input>");
  node2467.attr('type', "range");
  
  var ref2436 = n;
  node2467.val(""+ref2436.get());
  var ignore479 = false;
  subs__.addSub(ref2436.addEventListener('change', function(_, ref, val) {
    if(ignore479) return;
    node2467.val(""+val);
  }));
  subs__.addSub(ref2436.rebind());
  
  subs__.addSub(mobl.domBind(node2467, 'keyup change', function() {
    ignore479 = true;
    n.set(mobl.stringTomobl__Num(node2467.val()));
    ignore479 = false;
  }));
  
  
  var ref2437 = min;
  if(ref2437.get() !== null) {
    node2467.attr('min', ref2437.get());
    subs__.addSub(ref2437.addEventListener('change', function(_, ref, val) {
      node2467.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2437.rebind());
  
  var ref2438 = max;
  if(ref2438.get() !== null) {
    node2467.attr('max', ref2438.get());
    subs__.addSub(ref2438.addEventListener('change', function(_, ref, val) {
      node2467.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2438.rebind());
  
  var ref2439 = step;
  if(ref2439.get() !== null) {
    node2467.attr('step', ref2439.get());
    subs__.addSub(ref2439.addEventListener('change', function(_, ref, val) {
      node2467.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2439.rebind());
  node2467.attr('style', "width: 99%;");
  
  var val1247 = onchange.get();
  if(val1247 !== null) {
    subs__.addSub(mobl.domBind(node2467, 'change', val1247));
  }
  
  var val1248 = onkeyup.get();
  if(val1248 !== null) {
    subs__.addSub(mobl.domBind(node2467, 'keyup', val1248));
  }
  
  var ref2440 = placeholder;
  if(ref2440.get() !== null) {
    node2467.attr('placeholder', ref2440.get());
    subs__.addSub(ref2440.addEventListener('change', function(_, ref, val) {
      node2467.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2440.rebind());
  
  root6650.append(node2467);
  callback(root6650); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6652 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after385(result__) {
      var tmp4643 = result__;
      var result__ = tmp4643;
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
    var result__ = validator.get()(n2, after385);if(result__ !== undefined) after385(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes5051 = $("<span>");
  root6652.append(nodes5051);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6653 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6653); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5051;
    nodes5051 = node.contents();
    oldNodes.replaceWith(nodes5051);
  }));
  callback(root6652); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root6654 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2468 = $("<span>");
  root6654.append(node2468);
  var condSubs606 = new mobl.CompSubscription();
  subs__.addSub(condSubs606);
  var oldValue606;
  var renderCond606 = function() {
    var value2630 = label.get();
    if(oldValue606 === value2630) return;
    oldValue606 = value2630;
    var subs__ = condSubs606;
    subs__.unsubscribe();
    node2468.empty();
    if(value2630) {
      
      var node2469 = $("<span>");
      node2469.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2444 = label;
      node2469.text(""+ref2444.get());
      var ignore481 = false;
      subs__.addSub(ref2444.addEventListener('change', function(_, ref, val) {
        if(ignore481) return;
        node2469.text(""+val);
      }));
      subs__.addSub(ref2444.rebind());
      
      
      node2468.append(node2469);
      
      var node2470 = $("<span>");
      node2470.attr('style', "float: left");
      
      
      var node2471 = $("<input>");
      node2471.attr('type', "password");
      
      var ref2441 = style;
      if(ref2441.get() !== null) {
        node2471.attr('class', ref2441.get());
        subs__.addSub(ref2441.addEventListener('change', function(_, ref, val) {
          node2471.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2441.rebind());
      
      var ref2442 = placeholder;
      if(ref2442.get() !== null) {
        node2471.attr('placeholder', ref2442.get());
        subs__.addSub(ref2442.addEventListener('change', function(_, ref, val) {
          node2471.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2442.rebind());
      
      var ref2443 = s;
      node2471.val(""+ref2443.get());
      var ignore480 = false;
      subs__.addSub(ref2443.addEventListener('change', function(_, ref, val) {
        if(ignore480) return;
        node2471.val(""+val);
      }));
      subs__.addSub(ref2443.rebind());
      
      subs__.addSub(mobl.domBind(node2471, 'keyup change', function() {
        ignore480 = true;
        s.set(mobl.stringTomobl__String(node2471.val()));
        ignore480 = false;
      }));
      
      
      var val1249 = onchange.get();
      if(val1249 !== null) {
        subs__.addSub(mobl.domBind(node2471, 'change', val1249));
      }
      
      var val1250 = onkeyup.get();
      if(val1250 !== null) {
        subs__.addSub(mobl.domBind(node2471, 'keyup', val1250));
      }
      
      var val1251 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1251 !== null) {
        subs__.addSub(mobl.domBind(node2471, 'blur', val1251));
      }
      
      node2470.append(node2471);
      node2468.append(node2470);
      
      
      
      
    } else {
      
      var node2472 = $("<input>");
      node2472.attr('type', "password");
      
      var ref2445 = style;
      if(ref2445.get() !== null) {
        node2472.attr('class', ref2445.get());
        subs__.addSub(ref2445.addEventListener('change', function(_, ref, val) {
          node2472.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2445.rebind());
      
      var ref2446 = placeholder;
      if(ref2446.get() !== null) {
        node2472.attr('placeholder', ref2446.get());
        subs__.addSub(ref2446.addEventListener('change', function(_, ref, val) {
          node2472.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2446.rebind());
      
      var ref2447 = s;
      node2472.val(""+ref2447.get());
      var ignore482 = false;
      subs__.addSub(ref2447.addEventListener('change', function(_, ref, val) {
        if(ignore482) return;
        node2472.val(""+val);
      }));
      subs__.addSub(ref2447.rebind());
      
      subs__.addSub(mobl.domBind(node2472, 'keyup change', function() {
        ignore482 = true;
        s.set(mobl.stringTomobl__String(node2472.val()));
        ignore482 = false;
      }));
      
      
      var val1252 = onchange.get();
      if(val1252 !== null) {
        subs__.addSub(mobl.domBind(node2472, 'change', val1252));
      }
      
      var val1253 = onkeyup.get();
      if(val1253 !== null) {
        subs__.addSub(mobl.domBind(node2472, 'keyup', val1253));
      }
      
      var val1254 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1254 !== null) {
        subs__.addSub(mobl.domBind(node2472, 'blur', val1254));
      }
      
      node2468.append(node2472);
      
      
    }
  };
  renderCond606();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond606();
  }));
  
  callback(root6654); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root6655 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2452 = style;
  if(ref2452.get() !== null) {
    sel.attr('class', ref2452.get());
    subs__.addSub(ref2452.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2452.rebind());
  
  var val1255 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after386(result__) {
                    var tmp4645 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after386);if(result__ !== undefined) after386(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1255 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1255));
  }
  
  
  var node2473 = mobl.loadingSpan();
  sel.append(node2473);
  var list430;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList430 = function() {
    var subs__ = listSubs__;
    list430 = options.get();
    list430.list(function(results430) {
      node2473.empty();
      for(var i1276 = 0; i1276 < results430.length; i1276++) {
        (function() {
          var iternode430 = $("<span>");
          node2473.append(iternode430);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results430), i1276), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results430), i1276), "_2");
          
          var node2474 = $("<option>");
          
          var ref2448 = optionDescription;
          node2474.text(""+ref2448.get());
          var ignore483 = false;
          subs__.addSub(ref2448.addEventListener('change', function(_, ref, val) {
            if(ignore483) return;
            node2474.text(""+val);
          }));
          subs__.addSub(ref2448.rebind());
          
          
          var ref2449 = optionStyle;
          if(ref2449.get() !== null) {
            node2474.attr('class', ref2449.get());
            subs__.addSub(ref2449.addEventListener('change', function(_, ref, val) {
              node2474.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2449.rebind());
          
          var ref2450 = optionValue;
          if(ref2450.get() !== null) {
            node2474.attr('value', ref2450.get());
            subs__.addSub(ref2450.addEventListener('change', function(_, ref, val) {
              node2474.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2450.rebind());
          
          var ref2451 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2451.get() !== null) {
            node2474.attr('selected', ref2451.get());
            subs__.addSub(ref2451.addEventListener('change', function(_, ref, val) {
              node2474.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2474.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2474.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2451.rebind());
          
          iternode430.append(node2474);
          
          var oldNodes = iternode430;
          iternode430 = iternode430.contents();
          oldNodes.replaceWith(iternode430);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list430.addEventListener('change', function() { listSubs__.unsubscribe(); renderList430(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList430(true); }));
    });
  };
  renderList430();
  
  root6655.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root6655); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root6656 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes5052 = $("<span>");
    root6656.append(nodes5052);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root6657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2475 = mobl.loadingSpan();
      root6657.append(node2475);
      var list431;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList431 = function() {
        var subs__ = listSubs__;
        list431 = tabs.get();
        list431.list(function(results431) {
          node2475.empty();
          for(var i1277 = 0; i1277 < results431.length; i1277++) {
            (function() {
              var iternode431 = $("<span>");
              node2475.append(iternode431);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results431), i1277), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results431), i1277), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results431), i1277), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp4607 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4607.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4607.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp4607.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp4607.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp4606 = mobl.ref(result__);
              
              var nodes5053 = $("<span>");
              iternode431.append(nodes5053);
              subs__.addSub((mobl.span)(tmp4607, mobl.ref(null), tmp4606, mobl.ref(null), function(_, callback) {
                var root6658 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5054 = $("<span>");
                root6658.append(nodes5054);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root6659 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6659); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5054;
                  nodes5054 = node.contents();
                  oldNodes.replaceWith(nodes5054);
                }));
                callback(root6658); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5053;
                nodes5053 = node.contents();
                oldNodes.replaceWith(nodes5053);
              }));
              
              var oldNodes = iternode431;
              iternode431 = iternode431.contents();
              oldNodes.replaceWith(iternode431);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list431.addEventListener('change', function() { listSubs__.unsubscribe(); renderList431(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList431(true); }));
        });
      };
      renderList431();
      
      callback(root6657); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5052;
      nodes5052 = node.contents();
      oldNodes.replaceWith(nodes5052);
    }));
    
    var node2476 = mobl.loadingSpan();
    root6656.append(node2476);
    var list432;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList432 = function() {
      var subs__ = listSubs__;
      list432 = tabs.get();
      list432.list(function(results432) {
        node2476.empty();
        for(var i1278 = 0; i1278 < results432.length; i1278++) {
          (function() {
            var iternode432 = $("<span>");
            node2476.append(iternode432);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results432), i1278), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results432), i1278), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results432), i1278), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp4608 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp4608.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4608.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp4608.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp4608.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes5055 = $("<span>");
            iternode432.append(nodes5055);
            subs__.addSub((mobl.block)(tmp4608, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6660 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5056 = $("<span>");
              root6660.append(nodes5056);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root6661 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5057 = $("<span>");
                root6661.append(nodes5057);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl986();
                }));
                
                function renderControl986() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root6662 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6662); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5057;
                    nodes5057 = node.contents();
                    oldNodes.replaceWith(nodes5057);
                  }));
                }
                renderControl986();
                callback(root6661); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5056;
                nodes5056 = node.contents();
                oldNodes.replaceWith(nodes5056);
              }));
              callback(root6660); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5055;
              nodes5055 = node.contents();
              oldNodes.replaceWith(nodes5055);
            }));
            
            var oldNodes = iternode432;
            iternode432 = iternode432.contents();
            oldNodes.replaceWith(iternode432);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list432.addEventListener('change', function() { listSubs__.unsubscribe(); renderList432(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList432(true); }));
      });
    };
    renderList432();
    
    callback(root6656); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes5052 = $("<span>");
      root6656.append(nodes5052);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6657 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2475 = mobl.loadingSpan();
        root6657.append(node2475);
        var list431;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList431 = function() {
          var subs__ = listSubs__;
          list431 = tabs.get();
          list431.list(function(results431) {
            node2475.empty();
            for(var i1277 = 0; i1277 < results431.length; i1277++) {
              (function() {
                var iternode431 = $("<span>");
                node2475.append(iternode431);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results431), i1277), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results431), i1277), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results431), i1277), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp4607 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp4607.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp4607.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp4607.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp4607.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4606 = mobl.ref(result__);
                
                var nodes5053 = $("<span>");
                iternode431.append(nodes5053);
                subs__.addSub((mobl.span)(tmp4607, mobl.ref(null), tmp4606, mobl.ref(null), function(_, callback) {
                  var root6658 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5054 = $("<span>");
                  root6658.append(nodes5054);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root6659 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6659); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5054;
                    nodes5054 = node.contents();
                    oldNodes.replaceWith(nodes5054);
                  }));
                  callback(root6658); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5053;
                  nodes5053 = node.contents();
                  oldNodes.replaceWith(nodes5053);
                }));
                
                var oldNodes = iternode431;
                iternode431 = iternode431.contents();
                oldNodes.replaceWith(iternode431);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list431.addEventListener('change', function() { listSubs__.unsubscribe(); renderList431(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList431(true); }));
          });
        };
        renderList431();
        
        callback(root6657); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5052;
        nodes5052 = node.contents();
        oldNodes.replaceWith(nodes5052);
      }));
      
      var node2476 = mobl.loadingSpan();
      root6656.append(node2476);
      var list432;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList432 = function() {
        var subs__ = listSubs__;
        list432 = tabs.get();
        list432.list(function(results432) {
          node2476.empty();
          for(var i1278 = 0; i1278 < results432.length; i1278++) {
            (function() {
              var iternode432 = $("<span>");
              node2476.append(iternode432);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results432), i1278), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results432), i1278), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results432), i1278), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp4608 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4608.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4608.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp4608.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp4608.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes5055 = $("<span>");
              iternode432.append(nodes5055);
              subs__.addSub((mobl.block)(tmp4608, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root6660 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5056 = $("<span>");
                root6660.append(nodes5056);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root6661 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5057 = $("<span>");
                  root6661.append(nodes5057);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl986();
                  }));
                  
                  function renderControl986() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root6662 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6662); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5057;
                      nodes5057 = node.contents();
                      oldNodes.replaceWith(nodes5057);
                    }));
                  }
                  renderControl986();
                  callback(root6661); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5056;
                  nodes5056 = node.contents();
                  oldNodes.replaceWith(nodes5056);
                }));
                callback(root6660); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5055;
                nodes5055 = node.contents();
                oldNodes.replaceWith(nodes5055);
              }));
              
              var oldNodes = iternode432;
              iternode432 = iternode432.contents();
              oldNodes.replaceWith(iternode432);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list432.addEventListener('change', function() { listSubs__.unsubscribe(); renderList432(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList432(true); }));
        });
      };
      renderList432();
      
      callback(root6656); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root6663 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2477 = $("<div>");
  
  var ref2456 = mobl.ref(ui.searchboxStyle);
  if(ref2456.get() !== null) {
    node2477.attr('class', ref2456.get());
    subs__.addSub(ref2456.addEventListener('change', function(_, ref, val) {
      node2477.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2456.rebind());
  
  
  var node2478 = $("<input>");
  node2478.attr('type', "search");
  
  var ref2453 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2453.get() !== null) {
    node2478.attr('class', ref2453.get());
    subs__.addSub(ref2453.addEventListener('change', function(_, ref, val) {
      node2478.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2453.rebind());
  
  var ref2454 = placeholder;
  if(ref2454.get() !== null) {
    node2478.attr('placeholder', ref2454.get());
    subs__.addSub(ref2454.addEventListener('change', function(_, ref, val) {
      node2478.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2454.rebind());
  
  var ref2455 = s;
  node2478.val(""+ref2455.get());
  var ignore484 = false;
  subs__.addSub(ref2455.addEventListener('change', function(_, ref, val) {
    if(ignore484) return;
    node2478.val(""+val);
  }));
  subs__.addSub(ref2455.rebind());
  
  subs__.addSub(mobl.domBind(node2478, 'keyup change', function() {
    ignore484 = true;
    s.set(mobl.stringTomobl__String(node2478.val()));
    ignore484 = false;
  }));
  
  
  var val1256 = onsearch.get();
  if(val1256 !== null) {
    subs__.addSub(mobl.domBind(node2478, 'change', val1256));
  }
  
  var val1257 = onkeyup.get();
  if(val1257 !== null) {
    subs__.addSub(mobl.domBind(node2478, 'keyup', val1257));
  }
  node2478.attr('autocorrect', false);
  node2478.attr('autocapitalize', false);
  node2478.attr('autocomplete', false);
  
  node2477.append(node2478);
  root6663.append(node2477);
  callback(root6663); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root6664 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2457 = mobl.ref(ui.contextMenuStyle);
  if(ref2457.get() !== null) {
    menu.attr('class', ref2457.get());
    subs__.addSub(ref2457.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2457.rebind());
  
  var nodes5058 = $("<span>");
  menu.append(nodes5058);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl987();
  }));
  
  function renderControl987() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6665 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6665); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5058;
      nodes5058 = node.contents();
      oldNodes.replaceWith(nodes5058);
    }));
  }
  renderControl987();
  root6664.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1258 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp4648 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1258 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1258));
  }
  
  root6664.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root6664); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root6666 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp4633 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4633.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2479 = $("<span>");
  root6666.append(node2479);
  var condSubs607 = new mobl.CompSubscription();
  subs__.addSub(condSubs607);
  var oldValue607;
  var renderCond607 = function() {
    var value2631 = tmp4633.get();
    if(oldValue607 === value2631) return;
    oldValue607 = value2631;
    var subs__ = condSubs607;
    subs__.unsubscribe();
    node2479.empty();
    if(value2631) {
      items.get().one(function(result__) {
        var tmp4649 = result__;
        var current = mobl.ref(result__);
        
        var node2480 = $("<div>");
        node2480.attr('width', "100%");
        
        
        var node2481 = $("<div>");
        node2481.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes5061 = $("<span>");
        node2481.append(nodes5061);
        subs__.addSub((ui.group)(function(_, callback) {
          var root6669 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2484 = mobl.loadingSpan();
          root6669.append(node2484);
          var list433;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList433 = function() {
            var subs__ = listSubs__;
            list433 = items.get();
            list433.list(function(results433) {
              node2484.empty();
              for(var i1279 = 0; i1279 < results433.length; i1279++) {
                (function() {
                  var iternode433 = $("<span>");
                  node2484.append(iternode433);
                  var it;
                  it = mobl.ref(mobl.ref(results433), i1279);
                  var result__ = it.get() == current.get();
                  var tmp4614 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4614.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4614.set(it.get() == current.get());
                  }));
                  
                  
                  var node2485 = $("<span>");
                  iternode433.append(node2485);
                  var condSubs609 = new mobl.CompSubscription();
                  subs__.addSub(condSubs609);
                  var oldValue609;
                  var renderCond609 = function() {
                    var value2633 = tmp4614.get();
                    if(oldValue609 === value2633) return;
                    oldValue609 = value2633;
                    var subs__ = condSubs609;
                    subs__.unsubscribe();
                    node2485.empty();
                    if(value2633) {
                      var nodes5062 = $("<span>");
                      node2485.append(nodes5062);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root6670 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5063 = $("<span>");
                        root6670.append(nodes5063);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl989();
                        }));
                        
                        function renderControl989() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root6671 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root6671); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5063;
                            nodes5063 = node.contents();
                            oldNodes.replaceWith(nodes5063);
                          }));
                        }
                        renderControl989();
                        callback(root6670); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5062;
                        nodes5062 = node.contents();
                        oldNodes.replaceWith(nodes5062);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp4613 = mobl.ref(result__);
                      
                      var nodes5064 = $("<span>");
                      node2485.append(nodes5064);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4613, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root6672 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5065 = $("<span>");
                        root6672.append(nodes5065);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl990();
                        }));
                        
                        function renderControl990() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root6673 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root6673); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5065;
                            nodes5065 = node.contents();
                            oldNodes.replaceWith(nodes5065);
                          }));
                        }
                        renderControl990();
                        callback(root6672); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5064;
                        nodes5064 = node.contents();
                        oldNodes.replaceWith(nodes5064);
                      }));
                      
                      
                    }
                  };
                  renderCond609();
                  subs__.addSub(tmp4614.addEventListener('change', function() {
                    renderCond609();
                  }));
                  
                  
                  var oldNodes = iternode433;
                  iternode433 = iternode433.contents();
                  oldNodes.replaceWith(iternode433);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list433.addEventListener('change', function() { listSubs__.unsubscribe(); renderList433(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList433(true); }));
            });
          };
          renderList433();
          
          callback(root6669); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5061;
          nodes5061 = node.contents();
          oldNodes.replaceWith(nodes5061);
        }));
        node2480.append(node2481);
        
        var node2482 = $("<div>");
        node2482.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2483 = $("<span>");
        node2482.append(node2483);
        var condSubs608 = new mobl.CompSubscription();
        subs__.addSub(condSubs608);
        var oldValue608;
        var renderCond608 = function() {
          var value2632 = current.get();
          if(oldValue608 === value2632) return;
          oldValue608 = value2632;
          var subs__ = condSubs608;
          subs__.unsubscribe();
          node2483.empty();
          if(value2632) {
            var nodes5059 = $("<span>");
            node2483.append(nodes5059);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl988();
            }));
            
            function renderControl988() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root6667 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6667); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5059;
                nodes5059 = node.contents();
                oldNodes.replaceWith(nodes5059);
              }));
            }
            renderControl988();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp4615 = mobl.ref(result__);
            
            var nodes5060 = $("<span>");
            node2483.append(nodes5060);
            subs__.addSub((mobl.label)(tmp4615, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6668 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6668); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5060;
              nodes5060 = node.contents();
              oldNodes.replaceWith(nodes5060);
            }));
            
            
          }
        };
        renderCond608();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond608();
        }));
        
        node2480.append(node2482);
        node2479.append(node2480);
        
        
        
        
        
        
      });
    } else {
      var nodes5066 = $("<span>");
      node2479.append(nodes5066);
      subs__.addSub((ui.group)(function(_, callback) {
        var root6674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2486 = mobl.loadingSpan();
        root6674.append(node2486);
        var list434;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList434 = function() {
          var subs__ = listSubs__;
          list434 = items.get();
          list434.list(function(results434) {
            node2486.empty();
            for(var i1280 = 0; i1280 < results434.length; i1280++) {
              (function() {
                var iternode434 = $("<span>");
                node2486.append(iternode434);
                var it;
                it = mobl.ref(mobl.ref(results434), i1280);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4650 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp4609 = mobl.ref(result__);
                
                var nodes5067 = $("<span>");
                iternode434.append(nodes5067);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4609, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root6675 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5068 = $("<span>");
                  root6675.append(nodes5068);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl991();
                  }));
                  
                  function renderControl991() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root6676 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6676); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5068;
                      nodes5068 = node.contents();
                      oldNodes.replaceWith(nodes5068);
                    }));
                  }
                  renderControl991();
                  callback(root6675); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5067;
                  nodes5067 = node.contents();
                  oldNodes.replaceWith(nodes5067);
                }));
                
                var oldNodes = iternode434;
                iternode434 = iternode434.contents();
                oldNodes.replaceWith(iternode434);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list434.addEventListener('change', function() { listSubs__.unsubscribe(); renderList434(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList434(true); }));
          });
        };
        renderList434();
        
        callback(root6674); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5066;
        nodes5066 = node.contents();
        oldNodes.replaceWith(nodes5066);
      }));
      
      
    }
  };
  renderCond607();
  subs__.addSub(tmp4633.addEventListener('change', function() {
    renderCond607();
  }));
  
  callback(root6666); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root6677 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp4612 = mobl.ref(result__);
  
  var nodes5069 = $("<span>");
  root6677.append(nodes5069);
  subs__.addSub((ui.header)(tmp4612, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root6678 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4611 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4610 = mobl.ref(result__);
    
    var nodes5070 = $("<span>");
    root6678.append(nodes5070);
    subs__.addSub((ui.backButton)(tmp4610, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4611, function(_, callback) {
      var root6679 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6679); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5070;
      nodes5070 = node.contents();
      oldNodes.replaceWith(nodes5070);
    }));
    callback(root6678); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5069;
    nodes5069 = node.contents();
    oldNodes.replaceWith(nodes5069);
  }));
  var nodes5071 = $("<span>");
  root6677.append(nodes5071);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl992();
  }));
  
  function renderControl992() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root6680 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6680); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5071;
      nodes5071 = node.contents();
      oldNodes.replaceWith(nodes5071);
    }));
  }
  renderControl992();
  callback(root6677); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root6681 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes5072 = $("<span>");
  root6681.append(nodes5072);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6682 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2487 = mobl.loadingSpan();
    root6682.append(node2487);
    var list435;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList435 = function() {
      var subs__ = listSubs__;
      list435 = coll.get();
      list435.list(function(results435) {
        node2487.empty();
        for(var i1281 = 0; i1281 < results435.length; i1281++) {
          (function() {
            var iternode435 = $("<span>");
            node2487.append(iternode435);
            var it;
            it = mobl.ref(mobl.ref(results435), i1281);
            var result__ = it.get() == selected.get();
            var tmp4617 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp4617.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp4617.set(it.get() == selected.get());
            }));
            
            
            var node2488 = $("<span>");
            iternode435.append(node2488);
            var condSubs610 = new mobl.CompSubscription();
            subs__.addSub(condSubs610);
            var oldValue610;
            var renderCond610 = function() {
              var value2634 = tmp4617.get();
              if(oldValue610 === value2634) return;
              oldValue610 = value2634;
              var subs__ = condSubs610;
              subs__.unsubscribe();
              node2488.empty();
              if(value2634) {
                var nodes5073 = $("<span>");
                node2488.append(nodes5073);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root6683 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5074 = $("<span>");
                  root6683.append(nodes5074);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl993();
                  }));
                  
                  function renderControl993() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root6684 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6684); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5074;
                      nodes5074 = node.contents();
                      oldNodes.replaceWith(nodes5074);
                    }));
                  }
                  renderControl993();
                  callback(root6683); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5073;
                  nodes5073 = node.contents();
                  oldNodes.replaceWith(nodes5073);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4616 = mobl.ref(result__);
                
                var nodes5075 = $("<span>");
                node2488.append(nodes5075);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4616, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root6685 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5076 = $("<span>");
                  root6685.append(nodes5076);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl994();
                  }));
                  
                  function renderControl994() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root6686 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6686); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5076;
                      nodes5076 = node.contents();
                      oldNodes.replaceWith(nodes5076);
                    }));
                  }
                  renderControl994();
                  callback(root6685); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5075;
                  nodes5075 = node.contents();
                  oldNodes.replaceWith(nodes5075);
                }));
                
                
              }
            };
            renderCond610();
            subs__.addSub(tmp4617.addEventListener('change', function() {
              renderCond610();
            }));
            
            
            var oldNodes = iternode435;
            iternode435 = iternode435.contents();
            oldNodes.replaceWith(iternode435);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list435.addEventListener('change', function() { listSubs__.unsubscribe(); renderList435(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList435(true); }));
      });
    };
    renderList435();
    
    callback(root6682); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5072;
    nodes5072 = node.contents();
    oldNodes.replaceWith(nodes5072);
  }));
  callback(root6681); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root6687 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp4651 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp4618 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp4618.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp4618.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp4618.set(coll.get().limit(n.get()));
    }));
    
    
    var node2489 = mobl.loadingSpan();
    root6687.append(node2489);
    var list436;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList436 = function() {
      var subs__ = listSubs__;
      list436 = tmp4618.get();
      list436.list(function(results436) {
        node2489.empty();
        for(var i1282 = 0; i1282 < results436.length; i1282++) {
          (function() {
            var iternode436 = $("<span>");
            node2489.append(iternode436);
            var it;
            it = mobl.ref(mobl.ref(results436), i1282);
            var nodes5077 = $("<span>");
            iternode436.append(nodes5077);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl995();
            }));
            
            function renderControl995() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root6688 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6688); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5077;
                nodes5077 = node.contents();
                oldNodes.replaceWith(nodes5077);
              }));
            }
            renderControl995();
            
            var oldNodes = iternode436;
            iternode436 = iternode436.contents();
            oldNodes.replaceWith(iternode436);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list436.addEventListener('change', function() { listSubs__.unsubscribe(); renderList436(true); }));
        subs__.addSub(tmp4618.addEventListener('change', function() { listSubs__.unsubscribe(); renderList436(true); }));
      });
    };
    renderList436();
    
    var result__ = n.get() < total.get();
    var tmp4620 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp4620.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp4620.set(n.get() < total.get());
    }));
    
    
    var node2490 = $("<span>");
    root6687.append(node2490);
    var condSubs611 = new mobl.CompSubscription();
    subs__.addSub(condSubs611);
    var oldValue611;
    var renderCond611 = function() {
      var value2635 = tmp4620.get();
      if(oldValue611 === value2635) return;
      oldValue611 = value2635;
      var subs__ = condSubs611;
      subs__.unsubscribe();
      node2490.empty();
      if(value2635) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4619 = mobl.ref(result__);
        
        var nodes5078 = $("<span>");
        node2490.append(nodes5078);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp4619, mobl.ref(null), function(_, callback) {
          var root6689 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes5079 = $("<span>");
          root6689.append(nodes5079);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root6690 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root6690); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes5079;
            nodes5079 = node.contents();
            oldNodes.replaceWith(nodes5079);
          }));
          callback(root6689); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5078;
          nodes5078 = node.contents();
          oldNodes.replaceWith(nodes5078);
        }));
        
        
      } else {
        
      }
    };
    renderCond611();
    subs__.addSub(tmp4620.addEventListener('change', function() {
      renderCond611();
    }));
    
    callback(root6687); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root6691 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5080 = $("<span>");
  root6691.append(nodes5080);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6692 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2491 = mobl.loadingSpan();
    root6692.append(node2491);
    var list437;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList437 = function() {
      var subs__ = listSubs__;
      list437 = items.get();
      list437.list(function(results437) {
        node2491.empty();
        for(var i1283 = 0; i1283 < results437.length; i1283++) {
          (function() {
            var iternode437 = $("<span>");
            node2491.append(iternode437);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results437), i1283), "_1");it = mobl.ref(mobl.ref(mobl.ref(results437), i1283), "_2");
            var nodes5081 = $("<span>");
            iternode437.append(nodes5081);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root6693 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5082 = $("<span>");
              root6693.append(nodes5082);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root6694 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6694); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5082;
                nodes5082 = node.contents();
                oldNodes.replaceWith(nodes5082);
              }));
              callback(root6693); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5081;
              nodes5081 = node.contents();
              oldNodes.replaceWith(nodes5081);
            }));
            
            var oldNodes = iternode437;
            iternode437 = iternode437.contents();
            oldNodes.replaceWith(iternode437);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list437.addEventListener('change', function() { listSubs__.unsubscribe(); renderList437(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList437(true); }));
      });
    };
    renderList437();
    
    callback(root6692); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5080;
    nodes5080 = node.contents();
    oldNodes.replaceWith(nodes5080);
  }));
  callback(root6691); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root6695 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll3246) {
    coll3246 = coll3246.reverse();
    function processOne210() {
      var it;
      it = coll3246.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll3246.length > 0) processOne210(); else rest210();
      
    }
    function rest210() {
      var nodes5083 = $("<span>");
      root6695.append(nodes5083);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root6696 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4621 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp4622 = mobl.ref(result__);
        
        var nodes5084 = $("<span>");
        root6696.append(nodes5084);
        subs__.addSub((ui.backButton)(tmp4622, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4621, function(_, callback) {
          var root6697 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6697); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5084;
          nodes5084 = node.contents();
          oldNodes.replaceWith(nodes5084);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll3245) {
                           coll3245 = coll3245.reverse();
                           function processOne209() {
                             var checked;var it;
                             var tmp4653 = coll3245.pop();
                             checked = tmp4653._1;it = tmp4653._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll3245.length > 0) processOne209(); else rest209();
                               
                             } else {
                               {
                                 
                                 if(coll3245.length > 0) processOne209(); else rest209();
                                 
                               }
                             }
                           }
                           function rest209() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll3245.length > 0) processOne209(); else rest209();
                         });
                         
                       };
        var tmp4623 = mobl.ref(result__);
        
        var nodes5085 = $("<span>");
        root6696.append(nodes5085);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4623, function(_, callback) {
          var root6698 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6698); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5085;
          nodes5085 = node.contents();
          oldNodes.replaceWith(nodes5085);
        }));
        callback(root6696); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5083;
        nodes5083 = node.contents();
        oldNodes.replaceWith(nodes5083);
      }));
      var nodes5086 = $("<span>");
      root6695.append(nodes5086);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root6699 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6699); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5086;
        nodes5086 = node.contents();
        oldNodes.replaceWith(nodes5086);
      }));
      callback(root6695); return subs__;
      
      
    }
    if(coll3246.length > 0) processOne210(); else rest210();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root6700 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes5087 = $("<span>");
  root6700.append(nodes5087);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root6701 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6701); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5087;
    nodes5087 = node.contents();
    oldNodes.replaceWith(nodes5087);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp4624 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp4624.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp4624.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp4624.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp4624.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp4624.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes5088 = $("<span>");
  root6700.append(nodes5088);
  subs__.addSub((ui.masterDetail)(tmp4624, masterItem, detailItem, function(_, callback) {
    var root6702 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6702); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5088;
    nodes5088 = node.contents();
    oldNodes.replaceWith(nodes5088);
  }));
  callback(root6700); return subs__;
  
  
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
  var root6703 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes5089 = $("<span>");
  root6703.append(nodes5089);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root6704 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2492 = mobl.loadingSpan();
    root6704.append(node2492);
    var list438;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList438 = function() {
      var subs__ = listSubs__;
      list438 = sections.get();
      list438.list(function(results438) {
        node2492.empty();
        for(var i1284 = 0; i1284 < results438.length; i1284++) {
          (function() {
            var iternode438 = $("<span>");
            node2492.append(iternode438);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results438), i1284), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results438), i1284), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp4626 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4626.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4626.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp4626.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp4626.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp4625 = mobl.ref(result__);
            
            var nodes5090 = $("<span>");
            iternode438.append(nodes5090);
            subs__.addSub((mobl.span)(tmp4626, mobl.ref(null), tmp4625, mobl.ref(null), function(_, callback) {
              var root6705 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5091 = $("<span>");
              root6705.append(nodes5091);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root6706 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6706); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5091;
                nodes5091 = node.contents();
                oldNodes.replaceWith(nodes5091);
              }));
              callback(root6705); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5090;
              nodes5090 = node.contents();
              oldNodes.replaceWith(nodes5090);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp4627 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4627.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4627.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp4627.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp4627.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes5092 = $("<span>");
            iternode438.append(nodes5092);
            subs__.addSub((mobl.block)(tmp4627, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6707 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5093 = $("<span>");
              root6707.append(nodes5093);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl996();
              }));
              
              function renderControl996() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root6708 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6708); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5093;
                  nodes5093 = node.contents();
                  oldNodes.replaceWith(nodes5093);
                }));
              }
              renderControl996();
              callback(root6707); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5092;
              nodes5092 = node.contents();
              oldNodes.replaceWith(nodes5092);
            }));
            
            var oldNodes = iternode438;
            iternode438 = iternode438.contents();
            oldNodes.replaceWith(iternode438);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list438.addEventListener('change', function() { listSubs__.unsubscribe(); renderList438(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList438(true); }));
      });
    };
    renderList438();
    
    callback(root6704); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5089;
    nodes5089 = node.contents();
    oldNodes.replaceWith(nodes5089);
  }));
  callback(root6703); return subs__;
  
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
  var root6709 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2493 = $("<table>");
  
  var ref2458 = style;
  if(ref2458.get() !== null) {
    node2493.attr('class', ref2458.get());
    subs__.addSub(ref2458.addEventListener('change', function(_, ref, val) {
      node2493.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2458.rebind());
  
  var nodes5094 = $("<span>");
  node2493.append(nodes5094);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl997();
  }));
  
  function renderControl997() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6710 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6710); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5094;
      nodes5094 = node.contents();
      oldNodes.replaceWith(nodes5094);
    }));
  }
  renderControl997();
  root6709.append(node2493);
  callback(root6709); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root6711 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2494 = $("<tr>");
  
  var ref2459 = style;
  if(ref2459.get() !== null) {
    node2494.attr('class', ref2459.get());
    subs__.addSub(ref2459.addEventListener('change', function(_, ref, val) {
      node2494.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2459.rebind());
  
  var nodes5095 = $("<span>");
  node2494.append(nodes5095);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl998();
  }));
  
  function renderControl998() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6712 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6712); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5095;
      nodes5095 = node.contents();
      oldNodes.replaceWith(nodes5095);
    }));
  }
  renderControl998();
  root6711.append(node2494);
  callback(root6711); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root6713 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2495 = $("<td>");
  
  var ref2460 = width;
  if(ref2460.get() !== null) {
    node2495.attr('width', ref2460.get());
    subs__.addSub(ref2460.addEventListener('change', function(_, ref, val) {
      node2495.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2460.rebind());
  
  var ref2461 = style;
  if(ref2461.get() !== null) {
    node2495.attr('class', ref2461.get());
    subs__.addSub(ref2461.addEventListener('change', function(_, ref, val) {
      node2495.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2461.rebind());
  
  var nodes5096 = $("<span>");
  node2495.append(nodes5096);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl999();
  }));
  
  function renderControl999() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6714 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6714); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5096;
      nodes5096 = node.contents();
      oldNodes.replaceWith(nodes5096);
    }));
  }
  renderControl999();
  root6713.append(node2495);
  callback(root6713); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root6715 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2496 = $("<td>");
  
  var ref2462 = width;
  if(ref2462.get() !== null) {
    node2496.attr('width', ref2462.get());
    subs__.addSub(ref2462.addEventListener('change', function(_, ref, val) {
      node2496.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2462.rebind());
  
  var ref2463 = style;
  if(ref2463.get() !== null) {
    node2496.attr('class', ref2463.get());
    subs__.addSub(ref2463.addEventListener('change', function(_, ref, val) {
      node2496.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2463.rebind());
  
  var nodes5097 = $("<span>");
  node2496.append(nodes5097);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1000();
  }));
  
  function renderControl1000() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6716 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6716); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5097;
      nodes5097 = node.contents();
      oldNodes.replaceWith(nodes5097);
    }));
  }
  renderControl1000();
  root6715.append(node2496);
  callback(root6715); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root6717 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2497 = $("<td>");
  
  var ref2464 = width;
  if(ref2464.get() !== null) {
    node2497.attr('width', ref2464.get());
    subs__.addSub(ref2464.addEventListener('change', function(_, ref, val) {
      node2497.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2464.rebind());
  
  var ref2465 = style;
  if(ref2465.get() !== null) {
    node2497.attr('class', ref2465.get());
    subs__.addSub(ref2465.addEventListener('change', function(_, ref, val) {
      node2497.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2465.rebind());
  
  
  var node2498 = $("<strong>");
  
  var nodes5098 = $("<span>");
  node2498.append(nodes5098);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1001();
  }));
  
  function renderControl1001() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6718 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6718); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5098;
      nodes5098 = node.contents();
      oldNodes.replaceWith(nodes5098);
    }));
  }
  renderControl1001();
  node2497.append(node2498);
  root6717.append(node2497);
  callback(root6717); return subs__;
  
  
  
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
  items.list(function(coll3247) {
    coll3247 = coll3247.reverse();
    function processOne211() {
      var item;
      item = coll3247.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll3247.length > 0) processOne211(); else rest211();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll3247.length > 0) processOne211(); else rest211();
          
        }
      }
    }
    function rest211() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll3247.length > 0) processOne211(); else rest211();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root6719 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp4655 = result__;
    var current = mobl.ref(result__);
    
    var node2499 = $("<div>");
    node2499.attr('width', "100%");
    
    
    var node2500 = $("<div>");
    node2500.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes5101 = $("<span>");
    node2500.append(nodes5101);
    subs__.addSub((ui.group)(function(_, callback) {
      var root6722 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2504 = mobl.loadingSpan();
      root6722.append(node2504);
      var list440;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList440 = function() {
        var subs__ = listSubs__;
        list440 = items.get();
        list440.list(function(results440) {
          node2504.empty();
          for(var i1286 = 0; i1286 < results440.length; i1286++) {
            (function() {
              var iternode440 = $("<span>");
              node2504.append(iternode440);
              var it;
              it = mobl.ref(mobl.ref(results440), i1286);
              var result__ = it.get() == current.get();
              var tmp4631 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp4631.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp4631.set(it.get() == current.get());
              }));
              
              
              var node2505 = $("<span>");
              iternode440.append(node2505);
              var condSubs613 = new mobl.CompSubscription();
              subs__.addSub(condSubs613);
              var oldValue613;
              var renderCond613 = function() {
                var value2637 = tmp4631.get();
                if(oldValue613 === value2637) return;
                oldValue613 = value2637;
                var subs__ = condSubs613;
                subs__.unsubscribe();
                node2505.empty();
                if(value2637) {
                  var nodes5102 = $("<span>");
                  node2505.append(nodes5102);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root6723 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4658 = result__;
                      var tmp4628 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4656 = result__;
                          var result__ = tmp4656;
                          tmp4628.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4657 = result__;
                          var result__ = tmp4657;
                          tmp4628.set(result__);
                          
                        });
                      }));
                      
                      var nodes5103 = $("<span>");
                      root6723.append(nodes5103);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1003();
                      }));
                      
                      function renderControl1003() {
                        subs__.addSub((masterItem.get())(it, tmp4628, function(elements, callback) {
                          var root6724 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6724); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes5103;
                          nodes5103 = node.contents();
                          oldNodes.replaceWith(nodes5103);
                        }));
                      }
                      renderControl1003();
                      callback(root6723); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5102;
                    nodes5102 = node.contents();
                    oldNodes.replaceWith(nodes5102);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp4630 = mobl.ref(result__);
                  
                  var nodes5104 = $("<span>");
                  node2505.append(nodes5104);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4630, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root6725 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4661 = result__;
                      var tmp4629 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4659 = result__;
                          var result__ = tmp4659;
                          tmp4629.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4660 = result__;
                          var result__ = tmp4660;
                          tmp4629.set(result__);
                          
                        });
                      }));
                      
                      var nodes5105 = $("<span>");
                      root6725.append(nodes5105);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1004();
                      }));
                      
                      function renderControl1004() {
                        subs__.addSub((masterItem.get())(it, tmp4629, function(elements, callback) {
                          var root6726 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6726); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes5105;
                          nodes5105 = node.contents();
                          oldNodes.replaceWith(nodes5105);
                        }));
                      }
                      renderControl1004();
                      callback(root6725); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5104;
                    nodes5104 = node.contents();
                    oldNodes.replaceWith(nodes5104);
                  }));
                  
                  
                }
              };
              renderCond613();
              subs__.addSub(tmp4631.addEventListener('change', function() {
                renderCond613();
              }));
              
              
              var oldNodes = iternode440;
              iternode440 = iternode440.contents();
              oldNodes.replaceWith(iternode440);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list440.addEventListener('change', function() { listSubs__.unsubscribe(); renderList440(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList440(true); }));
        });
      };
      renderList440();
      
      callback(root6722); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5101;
      nodes5101 = node.contents();
      oldNodes.replaceWith(nodes5101);
    }));
    node2499.append(node2500);
    
    var node2501 = $("<div>");
    node2501.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    var nodes5099 = $("<span>");
    node2501.append(nodes5099);
    subs__.addSub((ui.group)(function(_, callback) {
      var root6720 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2502 = mobl.loadingSpan();
      root6720.append(node2502);
      var list439;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList439 = function() {
        var subs__ = listSubs__;
        list439 = items.get();
        list439.list(function(results439) {
          node2502.empty();
          for(var i1285 = 0; i1285 < results439.length; i1285++) {
            (function() {
              var iternode439 = $("<span>");
              node2502.append(iternode439);
              var it;
              it = mobl.ref(mobl.ref(results439), i1285);
              var result__ = it.get() == current.get();
              var tmp4632 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp4632.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp4632.set(it.get() == current.get());
              }));
              
              
              var node2503 = $("<span>");
              iternode439.append(node2503);
              var condSubs612 = new mobl.CompSubscription();
              subs__.addSub(condSubs612);
              var oldValue612;
              var renderCond612 = function() {
                var value2636 = tmp4632.get();
                if(oldValue612 === value2636) return;
                oldValue612 = value2636;
                var subs__ = condSubs612;
                subs__.unsubscribe();
                node2503.empty();
                if(value2636) {
                  var nodes5100 = $("<span>");
                  node2503.append(nodes5100);
                  subs__.addSub(detail.addEventListener('change', function() {
                    renderControl1002();
                  }));
                  
                  function renderControl1002() {
                    subs__.addSub((detail.get())(it, function(elements, callback) {
                      var root6721 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6721); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5100;
                      nodes5100 = node.contents();
                      oldNodes.replaceWith(nodes5100);
                    }));
                  }
                  renderControl1002();
                  
                  
                } else {
                  
                }
              };
              renderCond612();
              subs__.addSub(tmp4632.addEventListener('change', function() {
                renderCond612();
              }));
              
              
              var oldNodes = iternode439;
              iternode439 = iternode439.contents();
              oldNodes.replaceWith(iternode439);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list439.addEventListener('change', function() { listSubs__.unsubscribe(); renderList439(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList439(true); }));
        });
      };
      renderList439();
      
      callback(root6720); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5099;
      nodes5099 = node.contents();
      oldNodes.replaceWith(nodes5099);
    }));
    node2499.append(node2501);
    root6719.append(node2499);
    callback(root6719); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
