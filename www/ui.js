mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root6929 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2616 = $("<span>");
  root6929.append(node2616);
  var condSubs640 = new mobl.CompSubscription();
  subs__.addSub(condSubs640);
  var oldValue640;
  var renderCond640 = function() {
    var value2752 = value.get();
    if(oldValue640 === value2752) return;
    oldValue640 = value2752;
    var subs__ = condSubs640;
    subs__.unsubscribe();
    node2616.empty();
    if(value2752) {
      var nodes5242 = $("<span>");
      node2616.append(nodes5242);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1051();
      }));
      
      function renderControl1051() {
        subs__.addSub((elements)(function(elements, callback) {
          var root6930 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6930); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5242;
          nodes5242 = node.contents();
          oldNodes.replaceWith(nodes5242);
        }));
      }
      renderControl1051();
      
      
    } else {
      var nodes5243 = $("<span>");
      node2616.append(nodes5243);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6931 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes5244 = $("<span>");
        root6931.append(nodes5244);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root6932 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6932); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5244;
          nodes5244 = node.contents();
          oldNodes.replaceWith(nodes5244);
        }));
        var nodes5245 = $("<span>");
        root6931.append(nodes5245);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root6933 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6933); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5245;
          nodes5245 = node.contents();
          oldNodes.replaceWith(nodes5245);
        }));
        callback(root6931); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5243;
        nodes5243 = node.contents();
        oldNodes.replaceWith(nodes5243);
      }));
      
      
    }
  };
  renderCond640();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond640();
  }));
  
  callback(root6929); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root6934 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2617 = $("<div>");
  
  var ref2581 = mobl.ref(ui.headerStyle);
  if(ref2581.get() !== null) {
    node2617.attr('class', ref2581.get());
    subs__.addSub(ref2581.addEventListener('change', function(_, ref, val) {
      node2617.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2581.rebind());
  
  var val1317 = onclick.get();
  if(val1317 !== null) {
    subs__.addSub(mobl.domBind(node2617, 'tap', val1317));
  }
  
  var ref2582 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2582.get() !== null) {
    node2617.attr('style', ref2582.get());
    subs__.addSub(ref2582.addEventListener('change', function(_, ref, val) {
      node2617.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2617.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2582.rebind());
  
  
  var node2620 = $("<div>");
  
  var ref2580 = mobl.ref(ui.headerContainerStyle);
  if(ref2580.get() !== null) {
    node2620.attr('class', ref2580.get());
    subs__.addSub(ref2580.addEventListener('change', function(_, ref, val) {
      node2620.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2580.rebind());
  
  
  var node2621 = $("<div>");
  
  var ref2578 = text;
  node2621.text(""+ref2578.get());
  var ignore507 = false;
  subs__.addSub(ref2578.addEventListener('change', function(_, ref, val) {
    if(ignore507) return;
    node2621.text(""+val);
  }));
  subs__.addSub(ref2578.rebind());
  
  
  var ref2579 = mobl.ref(ui.headerTextStyle);
  if(ref2579.get() !== null) {
    node2621.attr('class', ref2579.get());
    subs__.addSub(ref2579.addEventListener('change', function(_, ref, val) {
      node2621.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2579.rebind());
  
  node2620.append(node2621);
  node2617.append(node2620);
  var nodes5246 = $("<span>");
  node2617.append(nodes5246);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1052();
  }));
  
  function renderControl1052() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6935 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6935); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5246;
      nodes5246 = node.contents();
      oldNodes.replaceWith(nodes5246);
    }));
  }
  renderControl1052();
  root6934.append(node2617);
  
  var node2618 = $("<span>");
  root6934.append(node2618);
  var condSubs641 = new mobl.CompSubscription();
  subs__.addSub(condSubs641);
  var oldValue641;
  var renderCond641 = function() {
    var value2753 = fixedPosition.get();
    if(oldValue641 === value2753) return;
    oldValue641 = value2753;
    var subs__ = condSubs641;
    subs__.unsubscribe();
    node2618.empty();
    if(value2753) {
      
      var node2619 = $("<div>");
      node2619.attr('id', "hello");
      node2619.attr('style', "height: 2.9em;");
      
      node2618.append(node2619);
      
      
    } else {
      
    }
  };
  renderCond641();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond641();
  }));
  
  callback(root6934); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6936 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2583 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2583.get() !== null) {
    sp.attr('class', ref2583.get());
    subs__.addSub(ref2583.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2583.rebind());
  
  var val1318 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1318 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1318));
  }
  
  var val1319 = function(event, callback) {
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
  if(val1319 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1319));
  }
  
  var val1320 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after405(result__) {
                    var tmp4810 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after405);if(result__ !== undefined) after405(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1320 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1320));
  }
  
  var val1321 = function(event, callback) {
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
  if(val1321 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1321));
  }
  
  var ref2584 = text;
  sp.text(""+ref2584.get());
  var ignore508 = false;
  subs__.addSub(ref2584.addEventListener('change', function(_, ref, val) {
    if(ignore508) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2584.rebind());
  
  
  root6936.append(sp);
  callback(root6936); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6937 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5247 = $("<span>");
  root6937.append(nodes5247);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root6938 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6938); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5247;
    nodes5247 = node.contents();
    oldNodes.replaceWith(nodes5247);
  }));
  callback(root6937); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6939 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5248 = $("<span>");
  root6939.append(nodes5248);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root6940 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6940); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5248;
    nodes5248 = node.contents();
    oldNodes.replaceWith(nodes5248);
  }));
  callback(root6939); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root6941 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2622 = $("<ul>");
  
  var ref2585 = mobl.ref(ui.groupStyle);
  if(ref2585.get() !== null) {
    node2622.attr('class', ref2585.get());
    subs__.addSub(ref2585.addEventListener('change', function(_, ref, val) {
      node2622.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2585.rebind());
  
  var nodes5249 = $("<span>");
  node2622.append(nodes5249);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1053();
  }));
  
  function renderControl1053() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6942 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6942); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5249;
      nodes5249 = node.contents();
      oldNodes.replaceWith(nodes5249);
    }));
  }
  renderControl1053();
  root6941.append(node2622);
  callback(root6941); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root6943 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2623 = $("<img>");
  
  var ref2586 = url;
  if(ref2586.get() !== null) {
    node2623.attr('src', ref2586.get());
    subs__.addSub(ref2586.addEventListener('change', function(_, ref, val) {
      node2623.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2586.rebind());
  
  var ref2587 = width;
  if(ref2587.get() !== null) {
    node2623.attr('width', ref2587.get());
    subs__.addSub(ref2587.addEventListener('change', function(_, ref, val) {
      node2623.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2587.rebind());
  
  var ref2588 = height;
  if(ref2588.get() !== null) {
    node2623.attr('height', ref2588.get());
    subs__.addSub(ref2588.addEventListener('change', function(_, ref, val) {
      node2623.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2588.rebind());
  
  var ref2589 = style;
  if(ref2589.get() !== null) {
    node2623.attr('class', ref2589.get());
    subs__.addSub(ref2589.addEventListener('change', function(_, ref, val) {
      node2623.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2589.rebind());
  
  var val1322 = onclick.get();
  if(val1322 !== null) {
    subs__.addSub(mobl.domBind(node2623, 'tap', val1322));
  }
  
  var ref2590 = valign;
  if(ref2590.get() !== null) {
    node2623.attr('valign', ref2590.get());
    subs__.addSub(ref2590.addEventListener('change', function(_, ref, val) {
      node2623.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2590.rebind());
  
  var ref2591 = align;
  if(ref2591.get() !== null) {
    node2623.attr('align', ref2591.get());
    subs__.addSub(ref2591.addEventListener('change', function(_, ref, val) {
      node2623.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2591.rebind());
  
  root6943.append(node2623);
  callback(root6943); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root6944 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2592 = mobl.ref(ui.itemStyle);
  if(ref2592.get() !== null) {
    el.attr('class', ref2592.get());
    subs__.addSub(ref2592.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2592.rebind());
  
  var ref2593 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2593.get() !== null) {
    el.attr('class', ref2593.get());
    subs__.addSub(ref2593.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2593.rebind());
  
  var val1323 = onswipe.get();
  if(val1323 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1323));
  }
  
  var val1324 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4811 = result__;
                                           function after406(result__) {
                                             var tmp4812 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after406);if(result__ !== undefined) after406(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4813 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1324 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1324));
  }
  
  var nodes5250 = $("<span>");
  el.append(nodes5250);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1054();
  }));
  
  function renderControl1054() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6945 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6945); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5250;
      nodes5250 = node.contents();
      oldNodes.replaceWith(nodes5250);
    }));
  }
  renderControl1054();
  root6944.append(el);
  callback(root6944); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root6946 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2624 = $("<input>");
  node2624.attr('type', "checkbox");
  
  var ref2595 = b;
  node2624.attr('checked', !!ref2595.get());
  subs__.addSub(ref2595.addEventListener('change', function(_, ref, val) {
    if(ref === ref2595) node2624.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2624, 'change', function() {
    b.set(!!node2624.attr('checked'));
  }));
  
  var val1326 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1326 !== null) {
    subs__.addSub(mobl.domBind(node2624, 'tap', val1326));
  }
  
  var val1327 = onchange.get();
  if(val1327 !== null) {
    subs__.addSub(mobl.domBind(node2624, 'change', val1327));
  }
  
  root6946.append(node2624);
  
  root6946.append(" ");
  
  var node2625 = $("<span>");
  
  var ref2594 = label;
  node2625.text(""+ref2594.get());
  var ignore509 = false;
  subs__.addSub(ref2594.addEventListener('change', function(_, ref, val) {
    if(ignore509) return;
    node2625.text(""+val);
  }));
  subs__.addSub(ref2594.rebind());
  
  
  var val1325 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after407(result__) {
                    var tmp4814 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after407);if(result__ !== undefined) after407(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1325 !== null) {
    subs__.addSub(mobl.domBind(node2625, 'tap', val1325));
  }
  
  root6946.append(node2625);
  callback(root6946); return subs__;
  
  
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
  var root6947 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2626 = $("<span>");
  root6947.append(node2626);
  var condSubs642 = new mobl.CompSubscription();
  subs__.addSub(condSubs642);
  var oldValue642;
  var renderCond642 = function() {
    var value2754 = label.get();
    if(oldValue642 === value2754) return;
    oldValue642 = value2754;
    var subs__ = condSubs642;
    subs__.unsubscribe();
    node2626.empty();
    if(value2754) {
      var nodes5251 = $("<span>");
      node2626.append(nodes5251);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root6948 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6948); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5251;
        nodes5251 = node.contents();
        oldNodes.replaceWith(nodes5251);
      }));
      
      
    } else {
      
    }
  };
  renderCond642();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond642();
  }));
  
  
  var node2627 = $("<span>");
  root6947.append(node2627);
  var condSubs643 = new mobl.CompSubscription();
  subs__.addSub(condSubs643);
  var oldValue643;
  var renderCond643 = function() {
    var value2755 = validator.get();
    if(oldValue643 === value2755) return;
    oldValue643 = value2755;
    var subs__ = condSubs643;
    subs__.unsubscribe();
    node2627.empty();
    if(value2755) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after411(result__) {
        var tmp4815 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp4816 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2628 = $("<input>");
        
        var ref2596 = inputType;
        if(ref2596.get() !== null) {
          node2628.attr('type', ref2596.get());
          subs__.addSub(ref2596.addEventListener('change', function(_, ref, val) {
            node2628.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2596.rebind());
        
        var ref2597 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2597.get() !== null) {
          node2628.attr('class', ref2597.get());
          subs__.addSub(ref2597.addEventListener('change', function(_, ref, val) {
            node2628.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2628.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2628.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2628.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2597.rebind());
        
        var ref2598 = placeholder;
        if(ref2598.get() !== null) {
          node2628.attr('placeholder', ref2598.get());
          subs__.addSub(ref2598.addEventListener('change', function(_, ref, val) {
            node2628.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2598.rebind());
        
        var ref2599 = temp;
        node2628.val(""+ref2599.get());
        var ignore510 = false;
        subs__.addSub(ref2599.addEventListener('change', function(_, ref, val) {
          if(ignore510) return;
          node2628.val(""+val);
        }));
        subs__.addSub(ref2599.rebind());
        
        subs__.addSub(mobl.domBind(node2628, 'keyup change', function() {
          ignore510 = true;
          temp.set(mobl.stringTomobl__String(node2628.val()));
          ignore510 = false;
        }));
        
        
        var val1328 = onchange.get();
        if(val1328 !== null) {
          subs__.addSub(mobl.domBind(node2628, 'change', val1328));
        }
        
        var val1329 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after408(result__) {
                          var tmp4817 = result__;
                          function after409(result__) {
                            var tmp4818 = result__;
                            var result__ = tmp4818;
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
                          var result__ = validator.get()(temp.get(), after409);if(result__ !== undefined) after409(result__);
                        }
                        var result__ = onkeyup.get()(event, after408);if(result__ !== undefined) after408(result__);
                      } else {
                        {
                          function after410(result__) {
                            var tmp4818 = result__;
                            var result__ = tmp4818;
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
                          var result__ = validator.get()(temp.get(), after410);if(result__ !== undefined) after410(result__);
                        }
                      }
                    };
        if(val1329 !== null) {
          subs__.addSub(mobl.domBind(node2628, 'keyup', val1329));
        }
        
        var val1330 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1330 !== null) {
          subs__.addSub(mobl.domBind(node2628, 'blur', val1330));
        }
        
        node2627.append(node2628);
        var nodes5252 = $("<span>");
        node2627.append(nodes5252);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root6949 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6949); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5252;
          nodes5252 = node.contents();
          oldNodes.replaceWith(nodes5252);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after411);if(result__ !== undefined) after411(result__);
    } else {
      
      var node2629 = $("<input>");
      
      var ref2600 = inputType;
      if(ref2600.get() !== null) {
        node2629.attr('type', ref2600.get());
        subs__.addSub(ref2600.addEventListener('change', function(_, ref, val) {
          node2629.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2600.rebind());
      
      var ref2601 = style;
      if(ref2601.get() !== null) {
        node2629.attr('class', ref2601.get());
        subs__.addSub(ref2601.addEventListener('change', function(_, ref, val) {
          node2629.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2601.rebind());
      
      var ref2602 = placeholder;
      if(ref2602.get() !== null) {
        node2629.attr('placeholder', ref2602.get());
        subs__.addSub(ref2602.addEventListener('change', function(_, ref, val) {
          node2629.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2602.rebind());
      
      var ref2603 = s;
      node2629.val(""+ref2603.get());
      var ignore511 = false;
      subs__.addSub(ref2603.addEventListener('change', function(_, ref, val) {
        if(ignore511) return;
        node2629.val(""+val);
      }));
      subs__.addSub(ref2603.rebind());
      
      subs__.addSub(mobl.domBind(node2629, 'keyup change', function() {
        ignore511 = true;
        s.set(mobl.stringTomobl__String(node2629.val()));
        ignore511 = false;
      }));
      
      
      var val1331 = onchange.get();
      if(val1331 !== null) {
        subs__.addSub(mobl.domBind(node2629, 'change', val1331));
      }
      
      var val1332 = onkeyup.get();
      if(val1332 !== null) {
        subs__.addSub(mobl.domBind(node2629, 'keyup', val1332));
      }
      
      var val1333 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1333 !== null) {
        subs__.addSub(mobl.domBind(node2629, 'blur', val1333));
      }
      
      node2627.append(node2629);
      
      
    }
  };
  renderCond643();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond643();
  }));
  
  callback(root6947); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6950 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5253 = $("<span>");
  root6950.append(nodes5253);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6951 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6951); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5253;
    nodes5253 = node.contents();
    oldNodes.replaceWith(nodes5253);
  }));
  callback(root6950); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6952 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5254 = $("<span>");
  root6952.append(nodes5254);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6953 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6953); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5254;
    nodes5254 = node.contents();
    oldNodes.replaceWith(nodes5254);
  }));
  callback(root6952); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root6954 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2630 = $("<span>");
  root6954.append(node2630);
  var condSubs644 = new mobl.CompSubscription();
  subs__.addSub(condSubs644);
  var oldValue644;
  var renderCond644 = function() {
    var value2756 = label.get();
    if(oldValue644 === value2756) return;
    oldValue644 = value2756;
    var subs__ = condSubs644;
    subs__.unsubscribe();
    node2630.empty();
    if(value2756) {
      var nodes5255 = $("<span>");
      node2630.append(nodes5255);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root6955 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6955); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5255;
        nodes5255 = node.contents();
        oldNodes.replaceWith(nodes5255);
      }));
      
      
    } else {
      
    }
  };
  renderCond644();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond644();
  }));
  
  
  var node2631 = $("<input>");
  node2631.attr('type', "range");
  
  var ref2604 = n;
  node2631.val(""+ref2604.get());
  var ignore512 = false;
  subs__.addSub(ref2604.addEventListener('change', function(_, ref, val) {
    if(ignore512) return;
    node2631.val(""+val);
  }));
  subs__.addSub(ref2604.rebind());
  
  subs__.addSub(mobl.domBind(node2631, 'keyup change', function() {
    ignore512 = true;
    n.set(mobl.stringTomobl__Num(node2631.val()));
    ignore512 = false;
  }));
  
  
  var ref2605 = min;
  if(ref2605.get() !== null) {
    node2631.attr('min', ref2605.get());
    subs__.addSub(ref2605.addEventListener('change', function(_, ref, val) {
      node2631.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2605.rebind());
  
  var ref2606 = max;
  if(ref2606.get() !== null) {
    node2631.attr('max', ref2606.get());
    subs__.addSub(ref2606.addEventListener('change', function(_, ref, val) {
      node2631.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2606.rebind());
  
  var ref2607 = step;
  if(ref2607.get() !== null) {
    node2631.attr('step', ref2607.get());
    subs__.addSub(ref2607.addEventListener('change', function(_, ref, val) {
      node2631.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2607.rebind());
  node2631.attr('style', "width: 99%;");
  
  var val1334 = onchange.get();
  if(val1334 !== null) {
    subs__.addSub(mobl.domBind(node2631, 'change', val1334));
  }
  
  var val1335 = onkeyup.get();
  if(val1335 !== null) {
    subs__.addSub(mobl.domBind(node2631, 'keyup', val1335));
  }
  
  var ref2608 = placeholder;
  if(ref2608.get() !== null) {
    node2631.attr('placeholder', ref2608.get());
    subs__.addSub(ref2608.addEventListener('change', function(_, ref, val) {
      node2631.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2608.rebind());
  
  root6954.append(node2631);
  callback(root6954); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6956 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after412(result__) {
      var tmp4819 = result__;
      var result__ = tmp4819;
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
    var result__ = validator.get()(n2, after412);if(result__ !== undefined) after412(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes5256 = $("<span>");
  root6956.append(nodes5256);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6957 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6957); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5256;
    nodes5256 = node.contents();
    oldNodes.replaceWith(nodes5256);
  }));
  callback(root6956); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root6958 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2632 = $("<span>");
  root6958.append(node2632);
  var condSubs645 = new mobl.CompSubscription();
  subs__.addSub(condSubs645);
  var oldValue645;
  var renderCond645 = function() {
    var value2757 = label.get();
    if(oldValue645 === value2757) return;
    oldValue645 = value2757;
    var subs__ = condSubs645;
    subs__.unsubscribe();
    node2632.empty();
    if(value2757) {
      
      var node2633 = $("<span>");
      node2633.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2612 = label;
      node2633.text(""+ref2612.get());
      var ignore514 = false;
      subs__.addSub(ref2612.addEventListener('change', function(_, ref, val) {
        if(ignore514) return;
        node2633.text(""+val);
      }));
      subs__.addSub(ref2612.rebind());
      
      
      node2632.append(node2633);
      
      var node2634 = $("<span>");
      node2634.attr('style', "float: left");
      
      
      var node2635 = $("<input>");
      node2635.attr('type', "password");
      
      var ref2609 = style;
      if(ref2609.get() !== null) {
        node2635.attr('class', ref2609.get());
        subs__.addSub(ref2609.addEventListener('change', function(_, ref, val) {
          node2635.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2609.rebind());
      
      var ref2610 = placeholder;
      if(ref2610.get() !== null) {
        node2635.attr('placeholder', ref2610.get());
        subs__.addSub(ref2610.addEventListener('change', function(_, ref, val) {
          node2635.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2610.rebind());
      
      var ref2611 = s;
      node2635.val(""+ref2611.get());
      var ignore513 = false;
      subs__.addSub(ref2611.addEventListener('change', function(_, ref, val) {
        if(ignore513) return;
        node2635.val(""+val);
      }));
      subs__.addSub(ref2611.rebind());
      
      subs__.addSub(mobl.domBind(node2635, 'keyup change', function() {
        ignore513 = true;
        s.set(mobl.stringTomobl__String(node2635.val()));
        ignore513 = false;
      }));
      
      
      var val1336 = onchange.get();
      if(val1336 !== null) {
        subs__.addSub(mobl.domBind(node2635, 'change', val1336));
      }
      
      var val1337 = onkeyup.get();
      if(val1337 !== null) {
        subs__.addSub(mobl.domBind(node2635, 'keyup', val1337));
      }
      
      var val1338 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1338 !== null) {
        subs__.addSub(mobl.domBind(node2635, 'blur', val1338));
      }
      
      node2634.append(node2635);
      node2632.append(node2634);
      
      
      
      
    } else {
      
      var node2636 = $("<input>");
      node2636.attr('type', "password");
      
      var ref2613 = style;
      if(ref2613.get() !== null) {
        node2636.attr('class', ref2613.get());
        subs__.addSub(ref2613.addEventListener('change', function(_, ref, val) {
          node2636.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2613.rebind());
      
      var ref2614 = placeholder;
      if(ref2614.get() !== null) {
        node2636.attr('placeholder', ref2614.get());
        subs__.addSub(ref2614.addEventListener('change', function(_, ref, val) {
          node2636.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2614.rebind());
      
      var ref2615 = s;
      node2636.val(""+ref2615.get());
      var ignore515 = false;
      subs__.addSub(ref2615.addEventListener('change', function(_, ref, val) {
        if(ignore515) return;
        node2636.val(""+val);
      }));
      subs__.addSub(ref2615.rebind());
      
      subs__.addSub(mobl.domBind(node2636, 'keyup change', function() {
        ignore515 = true;
        s.set(mobl.stringTomobl__String(node2636.val()));
        ignore515 = false;
      }));
      
      
      var val1339 = onchange.get();
      if(val1339 !== null) {
        subs__.addSub(mobl.domBind(node2636, 'change', val1339));
      }
      
      var val1340 = onkeyup.get();
      if(val1340 !== null) {
        subs__.addSub(mobl.domBind(node2636, 'keyup', val1340));
      }
      
      var val1341 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1341 !== null) {
        subs__.addSub(mobl.domBind(node2636, 'blur', val1341));
      }
      
      node2632.append(node2636);
      
      
    }
  };
  renderCond645();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond645();
  }));
  
  callback(root6958); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root6959 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2620 = style;
  if(ref2620.get() !== null) {
    sel.attr('class', ref2620.get());
    subs__.addSub(ref2620.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2620.rebind());
  
  var val1342 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after413(result__) {
                    var tmp4821 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after413);if(result__ !== undefined) after413(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1342 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1342));
  }
  
  
  var node2637 = mobl.loadingSpan();
  sel.append(node2637);
  var list461;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList461 = function() {
    var subs__ = listSubs__;
    list461 = options.get();
    list461.list(function(results461) {
      node2637.empty();
      for(var i1307 = 0; i1307 < results461.length; i1307++) {
        (function() {
          var iternode461 = $("<span>");
          node2637.append(iternode461);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results461), i1307), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results461), i1307), "_2");
          
          var node2638 = $("<option>");
          
          var ref2616 = optionDescription;
          node2638.text(""+ref2616.get());
          var ignore516 = false;
          subs__.addSub(ref2616.addEventListener('change', function(_, ref, val) {
            if(ignore516) return;
            node2638.text(""+val);
          }));
          subs__.addSub(ref2616.rebind());
          
          
          var ref2617 = optionStyle;
          if(ref2617.get() !== null) {
            node2638.attr('class', ref2617.get());
            subs__.addSub(ref2617.addEventListener('change', function(_, ref, val) {
              node2638.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2617.rebind());
          
          var ref2618 = optionValue;
          if(ref2618.get() !== null) {
            node2638.attr('value', ref2618.get());
            subs__.addSub(ref2618.addEventListener('change', function(_, ref, val) {
              node2638.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2618.rebind());
          
          var ref2619 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2619.get() !== null) {
            node2638.attr('selected', ref2619.get());
            subs__.addSub(ref2619.addEventListener('change', function(_, ref, val) {
              node2638.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2638.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2638.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2619.rebind());
          
          iternode461.append(node2638);
          
          var oldNodes = iternode461;
          iternode461 = iternode461.contents();
          oldNodes.replaceWith(iternode461);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list461.addEventListener('change', function() { listSubs__.unsubscribe(); renderList461(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList461(true); }));
    });
  };
  renderList461();
  
  root6959.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root6959); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root6960 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes5257 = $("<span>");
    root6960.append(nodes5257);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root6961 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2639 = mobl.loadingSpan();
      root6961.append(node2639);
      var list462;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList462 = function() {
        var subs__ = listSubs__;
        list462 = tabs.get();
        list462.list(function(results462) {
          node2639.empty();
          for(var i1308 = 0; i1308 < results462.length; i1308++) {
            (function() {
              var iternode462 = $("<span>");
              node2639.append(iternode462);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results462), i1308), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results462), i1308), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results462), i1308), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp4783 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4783.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4783.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp4783.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp4783.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp4782 = mobl.ref(result__);
              
              var nodes5258 = $("<span>");
              iternode462.append(nodes5258);
              subs__.addSub((mobl.span)(tmp4783, mobl.ref(null), tmp4782, mobl.ref(null), function(_, callback) {
                var root6962 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5259 = $("<span>");
                root6962.append(nodes5259);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root6963 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6963); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5259;
                  nodes5259 = node.contents();
                  oldNodes.replaceWith(nodes5259);
                }));
                callback(root6962); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5258;
                nodes5258 = node.contents();
                oldNodes.replaceWith(nodes5258);
              }));
              
              var oldNodes = iternode462;
              iternode462 = iternode462.contents();
              oldNodes.replaceWith(iternode462);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list462.addEventListener('change', function() { listSubs__.unsubscribe(); renderList462(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList462(true); }));
        });
      };
      renderList462();
      
      callback(root6961); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5257;
      nodes5257 = node.contents();
      oldNodes.replaceWith(nodes5257);
    }));
    
    var node2640 = mobl.loadingSpan();
    root6960.append(node2640);
    var list463;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList463 = function() {
      var subs__ = listSubs__;
      list463 = tabs.get();
      list463.list(function(results463) {
        node2640.empty();
        for(var i1309 = 0; i1309 < results463.length; i1309++) {
          (function() {
            var iternode463 = $("<span>");
            node2640.append(iternode463);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results463), i1309), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results463), i1309), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results463), i1309), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp4784 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp4784.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4784.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp4784.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp4784.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes5260 = $("<span>");
            iternode463.append(nodes5260);
            subs__.addSub((mobl.block)(tmp4784, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6964 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5261 = $("<span>");
              root6964.append(nodes5261);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root6965 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5262 = $("<span>");
                root6965.append(nodes5262);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1055();
                }));
                
                function renderControl1055() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root6966 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6966); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5262;
                    nodes5262 = node.contents();
                    oldNodes.replaceWith(nodes5262);
                  }));
                }
                renderControl1055();
                callback(root6965); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5261;
                nodes5261 = node.contents();
                oldNodes.replaceWith(nodes5261);
              }));
              callback(root6964); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5260;
              nodes5260 = node.contents();
              oldNodes.replaceWith(nodes5260);
            }));
            
            var oldNodes = iternode463;
            iternode463 = iternode463.contents();
            oldNodes.replaceWith(iternode463);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list463.addEventListener('change', function() { listSubs__.unsubscribe(); renderList463(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList463(true); }));
      });
    };
    renderList463();
    
    callback(root6960); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes5257 = $("<span>");
      root6960.append(nodes5257);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6961 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2639 = mobl.loadingSpan();
        root6961.append(node2639);
        var list462;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList462 = function() {
          var subs__ = listSubs__;
          list462 = tabs.get();
          list462.list(function(results462) {
            node2639.empty();
            for(var i1308 = 0; i1308 < results462.length; i1308++) {
              (function() {
                var iternode462 = $("<span>");
                node2639.append(iternode462);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results462), i1308), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results462), i1308), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results462), i1308), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp4783 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp4783.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp4783.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp4783.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp4783.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4782 = mobl.ref(result__);
                
                var nodes5258 = $("<span>");
                iternode462.append(nodes5258);
                subs__.addSub((mobl.span)(tmp4783, mobl.ref(null), tmp4782, mobl.ref(null), function(_, callback) {
                  var root6962 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5259 = $("<span>");
                  root6962.append(nodes5259);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root6963 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6963); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5259;
                    nodes5259 = node.contents();
                    oldNodes.replaceWith(nodes5259);
                  }));
                  callback(root6962); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5258;
                  nodes5258 = node.contents();
                  oldNodes.replaceWith(nodes5258);
                }));
                
                var oldNodes = iternode462;
                iternode462 = iternode462.contents();
                oldNodes.replaceWith(iternode462);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list462.addEventListener('change', function() { listSubs__.unsubscribe(); renderList462(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList462(true); }));
          });
        };
        renderList462();
        
        callback(root6961); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5257;
        nodes5257 = node.contents();
        oldNodes.replaceWith(nodes5257);
      }));
      
      var node2640 = mobl.loadingSpan();
      root6960.append(node2640);
      var list463;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList463 = function() {
        var subs__ = listSubs__;
        list463 = tabs.get();
        list463.list(function(results463) {
          node2640.empty();
          for(var i1309 = 0; i1309 < results463.length; i1309++) {
            (function() {
              var iternode463 = $("<span>");
              node2640.append(iternode463);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results463), i1309), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results463), i1309), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results463), i1309), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp4784 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4784.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4784.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp4784.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp4784.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes5260 = $("<span>");
              iternode463.append(nodes5260);
              subs__.addSub((mobl.block)(tmp4784, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root6964 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5261 = $("<span>");
                root6964.append(nodes5261);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root6965 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5262 = $("<span>");
                  root6965.append(nodes5262);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1055();
                  }));
                  
                  function renderControl1055() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root6966 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6966); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5262;
                      nodes5262 = node.contents();
                      oldNodes.replaceWith(nodes5262);
                    }));
                  }
                  renderControl1055();
                  callback(root6965); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5261;
                  nodes5261 = node.contents();
                  oldNodes.replaceWith(nodes5261);
                }));
                callback(root6964); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5260;
                nodes5260 = node.contents();
                oldNodes.replaceWith(nodes5260);
              }));
              
              var oldNodes = iternode463;
              iternode463 = iternode463.contents();
              oldNodes.replaceWith(iternode463);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list463.addEventListener('change', function() { listSubs__.unsubscribe(); renderList463(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList463(true); }));
        });
      };
      renderList463();
      
      callback(root6960); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root6967 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2641 = $("<div>");
  
  var ref2624 = mobl.ref(ui.searchboxStyle);
  if(ref2624.get() !== null) {
    node2641.attr('class', ref2624.get());
    subs__.addSub(ref2624.addEventListener('change', function(_, ref, val) {
      node2641.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2624.rebind());
  
  
  var node2642 = $("<input>");
  node2642.attr('type', "search");
  
  var ref2621 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2621.get() !== null) {
    node2642.attr('class', ref2621.get());
    subs__.addSub(ref2621.addEventListener('change', function(_, ref, val) {
      node2642.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2621.rebind());
  
  var ref2622 = placeholder;
  if(ref2622.get() !== null) {
    node2642.attr('placeholder', ref2622.get());
    subs__.addSub(ref2622.addEventListener('change', function(_, ref, val) {
      node2642.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2622.rebind());
  
  var ref2623 = s;
  node2642.val(""+ref2623.get());
  var ignore517 = false;
  subs__.addSub(ref2623.addEventListener('change', function(_, ref, val) {
    if(ignore517) return;
    node2642.val(""+val);
  }));
  subs__.addSub(ref2623.rebind());
  
  subs__.addSub(mobl.domBind(node2642, 'keyup change', function() {
    ignore517 = true;
    s.set(mobl.stringTomobl__String(node2642.val()));
    ignore517 = false;
  }));
  
  
  var val1343 = onsearch.get();
  if(val1343 !== null) {
    subs__.addSub(mobl.domBind(node2642, 'change', val1343));
  }
  
  var val1344 = onkeyup.get();
  if(val1344 !== null) {
    subs__.addSub(mobl.domBind(node2642, 'keyup', val1344));
  }
  node2642.attr('autocorrect', false);
  node2642.attr('autocapitalize', false);
  node2642.attr('autocomplete', false);
  
  node2641.append(node2642);
  root6967.append(node2641);
  callback(root6967); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root6968 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2625 = mobl.ref(ui.contextMenuStyle);
  if(ref2625.get() !== null) {
    menu.attr('class', ref2625.get());
    subs__.addSub(ref2625.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2625.rebind());
  
  var nodes5263 = $("<span>");
  menu.append(nodes5263);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1056();
  }));
  
  function renderControl1056() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6969); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5263;
      nodes5263 = node.contents();
      oldNodes.replaceWith(nodes5263);
    }));
  }
  renderControl1056();
  root6968.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1345 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp4824 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1345 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1345));
  }
  
  root6968.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root6968); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root6970 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp4809 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4809.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2643 = $("<span>");
  root6970.append(node2643);
  var condSubs646 = new mobl.CompSubscription();
  subs__.addSub(condSubs646);
  var oldValue646;
  var renderCond646 = function() {
    var value2758 = tmp4809.get();
    if(oldValue646 === value2758) return;
    oldValue646 = value2758;
    var subs__ = condSubs646;
    subs__.unsubscribe();
    node2643.empty();
    if(value2758) {
      items.get().one(function(result__) {
        var tmp4825 = result__;
        var current = mobl.ref(result__);
        
        var node2644 = $("<div>");
        node2644.attr('width', "100%");
        
        
        var node2645 = $("<div>");
        node2645.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes5266 = $("<span>");
        node2645.append(nodes5266);
        subs__.addSub((ui.group)(function(_, callback) {
          var root6973 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2648 = mobl.loadingSpan();
          root6973.append(node2648);
          var list464;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList464 = function() {
            var subs__ = listSubs__;
            list464 = items.get();
            list464.list(function(results464) {
              node2648.empty();
              for(var i1310 = 0; i1310 < results464.length; i1310++) {
                (function() {
                  var iternode464 = $("<span>");
                  node2648.append(iternode464);
                  var it;
                  it = mobl.ref(mobl.ref(results464), i1310);
                  var result__ = it.get() == current.get();
                  var tmp4790 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4790.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4790.set(it.get() == current.get());
                  }));
                  
                  
                  var node2649 = $("<span>");
                  iternode464.append(node2649);
                  var condSubs648 = new mobl.CompSubscription();
                  subs__.addSub(condSubs648);
                  var oldValue648;
                  var renderCond648 = function() {
                    var value2760 = tmp4790.get();
                    if(oldValue648 === value2760) return;
                    oldValue648 = value2760;
                    var subs__ = condSubs648;
                    subs__.unsubscribe();
                    node2649.empty();
                    if(value2760) {
                      var nodes5267 = $("<span>");
                      node2649.append(nodes5267);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root6974 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5268 = $("<span>");
                        root6974.append(nodes5268);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1058();
                        }));
                        
                        function renderControl1058() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root6975 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root6975); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5268;
                            nodes5268 = node.contents();
                            oldNodes.replaceWith(nodes5268);
                          }));
                        }
                        renderControl1058();
                        callback(root6974); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5267;
                        nodes5267 = node.contents();
                        oldNodes.replaceWith(nodes5267);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp4789 = mobl.ref(result__);
                      
                      var nodes5269 = $("<span>");
                      node2649.append(nodes5269);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4789, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root6976 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5270 = $("<span>");
                        root6976.append(nodes5270);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1059();
                        }));
                        
                        function renderControl1059() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root6977 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root6977); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5270;
                            nodes5270 = node.contents();
                            oldNodes.replaceWith(nodes5270);
                          }));
                        }
                        renderControl1059();
                        callback(root6976); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5269;
                        nodes5269 = node.contents();
                        oldNodes.replaceWith(nodes5269);
                      }));
                      
                      
                    }
                  };
                  renderCond648();
                  subs__.addSub(tmp4790.addEventListener('change', function() {
                    renderCond648();
                  }));
                  
                  
                  var oldNodes = iternode464;
                  iternode464 = iternode464.contents();
                  oldNodes.replaceWith(iternode464);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list464.addEventListener('change', function() { listSubs__.unsubscribe(); renderList464(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList464(true); }));
            });
          };
          renderList464();
          
          callback(root6973); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5266;
          nodes5266 = node.contents();
          oldNodes.replaceWith(nodes5266);
        }));
        node2644.append(node2645);
        
        var node2646 = $("<div>");
        node2646.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2647 = $("<span>");
        node2646.append(node2647);
        var condSubs647 = new mobl.CompSubscription();
        subs__.addSub(condSubs647);
        var oldValue647;
        var renderCond647 = function() {
          var value2759 = current.get();
          if(oldValue647 === value2759) return;
          oldValue647 = value2759;
          var subs__ = condSubs647;
          subs__.unsubscribe();
          node2647.empty();
          if(value2759) {
            var nodes5264 = $("<span>");
            node2647.append(nodes5264);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1057();
            }));
            
            function renderControl1057() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root6971 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6971); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5264;
                nodes5264 = node.contents();
                oldNodes.replaceWith(nodes5264);
              }));
            }
            renderControl1057();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp4791 = mobl.ref(result__);
            
            var nodes5265 = $("<span>");
            node2647.append(nodes5265);
            subs__.addSub((mobl.label)(tmp4791, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6972 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6972); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5265;
              nodes5265 = node.contents();
              oldNodes.replaceWith(nodes5265);
            }));
            
            
          }
        };
        renderCond647();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond647();
        }));
        
        node2644.append(node2646);
        node2643.append(node2644);
        
        
        
        
        
        
      });
    } else {
      var nodes5271 = $("<span>");
      node2643.append(nodes5271);
      subs__.addSub((ui.group)(function(_, callback) {
        var root6978 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2650 = mobl.loadingSpan();
        root6978.append(node2650);
        var list465;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList465 = function() {
          var subs__ = listSubs__;
          list465 = items.get();
          list465.list(function(results465) {
            node2650.empty();
            for(var i1311 = 0; i1311 < results465.length; i1311++) {
              (function() {
                var iternode465 = $("<span>");
                node2650.append(iternode465);
                var it;
                it = mobl.ref(mobl.ref(results465), i1311);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4826 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp4785 = mobl.ref(result__);
                
                var nodes5272 = $("<span>");
                iternode465.append(nodes5272);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4785, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root6979 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5273 = $("<span>");
                  root6979.append(nodes5273);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1060();
                  }));
                  
                  function renderControl1060() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root6980 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6980); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5273;
                      nodes5273 = node.contents();
                      oldNodes.replaceWith(nodes5273);
                    }));
                  }
                  renderControl1060();
                  callback(root6979); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5272;
                  nodes5272 = node.contents();
                  oldNodes.replaceWith(nodes5272);
                }));
                
                var oldNodes = iternode465;
                iternode465 = iternode465.contents();
                oldNodes.replaceWith(iternode465);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list465.addEventListener('change', function() { listSubs__.unsubscribe(); renderList465(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList465(true); }));
          });
        };
        renderList465();
        
        callback(root6978); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5271;
        nodes5271 = node.contents();
        oldNodes.replaceWith(nodes5271);
      }));
      
      
    }
  };
  renderCond646();
  subs__.addSub(tmp4809.addEventListener('change', function() {
    renderCond646();
  }));
  
  callback(root6970); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root6981 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp4788 = mobl.ref(result__);
  
  var nodes5274 = $("<span>");
  root6981.append(nodes5274);
  subs__.addSub((ui.header)(tmp4788, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root6982 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4787 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4786 = mobl.ref(result__);
    
    var nodes5275 = $("<span>");
    root6982.append(nodes5275);
    subs__.addSub((ui.backButton)(tmp4786, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4787, function(_, callback) {
      var root6983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6983); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5275;
      nodes5275 = node.contents();
      oldNodes.replaceWith(nodes5275);
    }));
    callback(root6982); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5274;
    nodes5274 = node.contents();
    oldNodes.replaceWith(nodes5274);
  }));
  var nodes5276 = $("<span>");
  root6981.append(nodes5276);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1061();
  }));
  
  function renderControl1061() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root6984 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6984); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5276;
      nodes5276 = node.contents();
      oldNodes.replaceWith(nodes5276);
    }));
  }
  renderControl1061();
  callback(root6981); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root6985 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes5277 = $("<span>");
  root6985.append(nodes5277);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2651 = mobl.loadingSpan();
    root6986.append(node2651);
    var list466;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList466 = function() {
      var subs__ = listSubs__;
      list466 = coll.get();
      list466.list(function(results466) {
        node2651.empty();
        for(var i1312 = 0; i1312 < results466.length; i1312++) {
          (function() {
            var iternode466 = $("<span>");
            node2651.append(iternode466);
            var it;
            it = mobl.ref(mobl.ref(results466), i1312);
            var result__ = it.get() == selected.get();
            var tmp4793 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp4793.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp4793.set(it.get() == selected.get());
            }));
            
            
            var node2652 = $("<span>");
            iternode466.append(node2652);
            var condSubs649 = new mobl.CompSubscription();
            subs__.addSub(condSubs649);
            var oldValue649;
            var renderCond649 = function() {
              var value2761 = tmp4793.get();
              if(oldValue649 === value2761) return;
              oldValue649 = value2761;
              var subs__ = condSubs649;
              subs__.unsubscribe();
              node2652.empty();
              if(value2761) {
                var nodes5278 = $("<span>");
                node2652.append(nodes5278);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root6987 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5279 = $("<span>");
                  root6987.append(nodes5279);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1062();
                  }));
                  
                  function renderControl1062() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root6988 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6988); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5279;
                      nodes5279 = node.contents();
                      oldNodes.replaceWith(nodes5279);
                    }));
                  }
                  renderControl1062();
                  callback(root6987); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5278;
                  nodes5278 = node.contents();
                  oldNodes.replaceWith(nodes5278);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4792 = mobl.ref(result__);
                
                var nodes5280 = $("<span>");
                node2652.append(nodes5280);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4792, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root6989 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5281 = $("<span>");
                  root6989.append(nodes5281);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1063();
                  }));
                  
                  function renderControl1063() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root6990 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6990); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5281;
                      nodes5281 = node.contents();
                      oldNodes.replaceWith(nodes5281);
                    }));
                  }
                  renderControl1063();
                  callback(root6989); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5280;
                  nodes5280 = node.contents();
                  oldNodes.replaceWith(nodes5280);
                }));
                
                
              }
            };
            renderCond649();
            subs__.addSub(tmp4793.addEventListener('change', function() {
              renderCond649();
            }));
            
            
            var oldNodes = iternode466;
            iternode466 = iternode466.contents();
            oldNodes.replaceWith(iternode466);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list466.addEventListener('change', function() { listSubs__.unsubscribe(); renderList466(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList466(true); }));
      });
    };
    renderList466();
    
    callback(root6986); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5277;
    nodes5277 = node.contents();
    oldNodes.replaceWith(nodes5277);
  }));
  callback(root6985); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root6991 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp4827 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp4794 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp4794.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp4794.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp4794.set(coll.get().limit(n.get()));
    }));
    
    
    var node2653 = mobl.loadingSpan();
    root6991.append(node2653);
    var list467;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList467 = function() {
      var subs__ = listSubs__;
      list467 = tmp4794.get();
      list467.list(function(results467) {
        node2653.empty();
        for(var i1313 = 0; i1313 < results467.length; i1313++) {
          (function() {
            var iternode467 = $("<span>");
            node2653.append(iternode467);
            var it;
            it = mobl.ref(mobl.ref(results467), i1313);
            var nodes5282 = $("<span>");
            iternode467.append(nodes5282);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1064();
            }));
            
            function renderControl1064() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root6992 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6992); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5282;
                nodes5282 = node.contents();
                oldNodes.replaceWith(nodes5282);
              }));
            }
            renderControl1064();
            
            var oldNodes = iternode467;
            iternode467 = iternode467.contents();
            oldNodes.replaceWith(iternode467);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list467.addEventListener('change', function() { listSubs__.unsubscribe(); renderList467(true); }));
        subs__.addSub(tmp4794.addEventListener('change', function() { listSubs__.unsubscribe(); renderList467(true); }));
      });
    };
    renderList467();
    
    var result__ = n.get() < total.get();
    var tmp4796 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp4796.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp4796.set(n.get() < total.get());
    }));
    
    
    var node2654 = $("<span>");
    root6991.append(node2654);
    var condSubs650 = new mobl.CompSubscription();
    subs__.addSub(condSubs650);
    var oldValue650;
    var renderCond650 = function() {
      var value2762 = tmp4796.get();
      if(oldValue650 === value2762) return;
      oldValue650 = value2762;
      var subs__ = condSubs650;
      subs__.unsubscribe();
      node2654.empty();
      if(value2762) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4795 = mobl.ref(result__);
        
        var nodes5283 = $("<span>");
        node2654.append(nodes5283);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp4795, mobl.ref(null), function(_, callback) {
          var root6993 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes5284 = $("<span>");
          root6993.append(nodes5284);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root6994 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root6994); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes5284;
            nodes5284 = node.contents();
            oldNodes.replaceWith(nodes5284);
          }));
          callback(root6993); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5283;
          nodes5283 = node.contents();
          oldNodes.replaceWith(nodes5283);
        }));
        
        
      } else {
        
      }
    };
    renderCond650();
    subs__.addSub(tmp4796.addEventListener('change', function() {
      renderCond650();
    }));
    
    callback(root6991); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root6995 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5285 = $("<span>");
  root6995.append(nodes5285);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2655 = mobl.loadingSpan();
    root6996.append(node2655);
    var list468;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList468 = function() {
      var subs__ = listSubs__;
      list468 = items.get();
      list468.list(function(results468) {
        node2655.empty();
        for(var i1314 = 0; i1314 < results468.length; i1314++) {
          (function() {
            var iternode468 = $("<span>");
            node2655.append(iternode468);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results468), i1314), "_1");it = mobl.ref(mobl.ref(mobl.ref(results468), i1314), "_2");
            var nodes5286 = $("<span>");
            iternode468.append(nodes5286);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root6997 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5287 = $("<span>");
              root6997.append(nodes5287);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root6998 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6998); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5287;
                nodes5287 = node.contents();
                oldNodes.replaceWith(nodes5287);
              }));
              callback(root6997); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5286;
              nodes5286 = node.contents();
              oldNodes.replaceWith(nodes5286);
            }));
            
            var oldNodes = iternode468;
            iternode468 = iternode468.contents();
            oldNodes.replaceWith(iternode468);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list468.addEventListener('change', function() { listSubs__.unsubscribe(); renderList468(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList468(true); }));
      });
    };
    renderList468();
    
    callback(root6996); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5285;
    nodes5285 = node.contents();
    oldNodes.replaceWith(nodes5285);
  }));
  callback(root6995); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root6999 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll3387) {
    coll3387 = coll3387.reverse();
    function processOne219() {
      var it;
      it = coll3387.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll3387.length > 0) processOne219(); else rest219();
      
    }
    function rest219() {
      var nodes5288 = $("<span>");
      root6999.append(nodes5288);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root7000 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4797 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp4798 = mobl.ref(result__);
        
        var nodes5289 = $("<span>");
        root7000.append(nodes5289);
        subs__.addSub((ui.backButton)(tmp4798, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4797, function(_, callback) {
          var root7001 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7001); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5289;
          nodes5289 = node.contents();
          oldNodes.replaceWith(nodes5289);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll3386) {
                           coll3386 = coll3386.reverse();
                           function processOne218() {
                             var checked;var it;
                             var tmp4829 = coll3386.pop();
                             checked = tmp4829._1;it = tmp4829._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll3386.length > 0) processOne218(); else rest218();
                               
                             } else {
                               {
                                 
                                 if(coll3386.length > 0) processOne218(); else rest218();
                                 
                               }
                             }
                           }
                           function rest218() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll3386.length > 0) processOne218(); else rest218();
                         });
                         
                       };
        var tmp4799 = mobl.ref(result__);
        
        var nodes5290 = $("<span>");
        root7000.append(nodes5290);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4799, function(_, callback) {
          var root7002 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7002); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5290;
          nodes5290 = node.contents();
          oldNodes.replaceWith(nodes5290);
        }));
        callback(root7000); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5288;
        nodes5288 = node.contents();
        oldNodes.replaceWith(nodes5288);
      }));
      var nodes5291 = $("<span>");
      root6999.append(nodes5291);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root7003 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7003); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5291;
        nodes5291 = node.contents();
        oldNodes.replaceWith(nodes5291);
      }));
      callback(root6999); return subs__;
      
      
    }
    if(coll3387.length > 0) processOne219(); else rest219();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root7004 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes5292 = $("<span>");
  root7004.append(nodes5292);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root7005 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7005); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5292;
    nodes5292 = node.contents();
    oldNodes.replaceWith(nodes5292);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp4800 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp4800.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp4800.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp4800.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp4800.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp4800.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes5293 = $("<span>");
  root7004.append(nodes5293);
  subs__.addSub((ui.masterDetail)(tmp4800, masterItem, detailItem, function(_, callback) {
    var root7006 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7006); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5293;
    nodes5293 = node.contents();
    oldNodes.replaceWith(nodes5293);
  }));
  callback(root7004); return subs__;
  
  
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
  var root7007 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes5294 = $("<span>");
  root7007.append(nodes5294);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root7008 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2656 = mobl.loadingSpan();
    root7008.append(node2656);
    var list469;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList469 = function() {
      var subs__ = listSubs__;
      list469 = sections.get();
      list469.list(function(results469) {
        node2656.empty();
        for(var i1315 = 0; i1315 < results469.length; i1315++) {
          (function() {
            var iternode469 = $("<span>");
            node2656.append(iternode469);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results469), i1315), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results469), i1315), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp4802 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4802.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4802.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp4802.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp4802.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp4801 = mobl.ref(result__);
            
            var nodes5295 = $("<span>");
            iternode469.append(nodes5295);
            subs__.addSub((mobl.span)(tmp4802, mobl.ref(null), tmp4801, mobl.ref(null), function(_, callback) {
              var root7009 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5296 = $("<span>");
              root7009.append(nodes5296);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root7010 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7010); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5296;
                nodes5296 = node.contents();
                oldNodes.replaceWith(nodes5296);
              }));
              callback(root7009); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5295;
              nodes5295 = node.contents();
              oldNodes.replaceWith(nodes5295);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp4803 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4803.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4803.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp4803.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp4803.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes5297 = $("<span>");
            iternode469.append(nodes5297);
            subs__.addSub((mobl.block)(tmp4803, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root7011 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5298 = $("<span>");
              root7011.append(nodes5298);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1065();
              }));
              
              function renderControl1065() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root7012 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7012); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5298;
                  nodes5298 = node.contents();
                  oldNodes.replaceWith(nodes5298);
                }));
              }
              renderControl1065();
              callback(root7011); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5297;
              nodes5297 = node.contents();
              oldNodes.replaceWith(nodes5297);
            }));
            
            var oldNodes = iternode469;
            iternode469 = iternode469.contents();
            oldNodes.replaceWith(iternode469);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list469.addEventListener('change', function() { listSubs__.unsubscribe(); renderList469(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList469(true); }));
      });
    };
    renderList469();
    
    callback(root7008); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5294;
    nodes5294 = node.contents();
    oldNodes.replaceWith(nodes5294);
  }));
  callback(root7007); return subs__;
  
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
  var root7013 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2657 = $("<table>");
  
  var ref2626 = style;
  if(ref2626.get() !== null) {
    node2657.attr('class', ref2626.get());
    subs__.addSub(ref2626.addEventListener('change', function(_, ref, val) {
      node2657.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2626.rebind());
  
  var nodes5299 = $("<span>");
  node2657.append(nodes5299);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1066();
  }));
  
  function renderControl1066() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7014 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7014); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5299;
      nodes5299 = node.contents();
      oldNodes.replaceWith(nodes5299);
    }));
  }
  renderControl1066();
  root7013.append(node2657);
  callback(root7013); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root7015 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2658 = $("<tr>");
  
  var ref2627 = style;
  if(ref2627.get() !== null) {
    node2658.attr('class', ref2627.get());
    subs__.addSub(ref2627.addEventListener('change', function(_, ref, val) {
      node2658.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2627.rebind());
  
  var nodes5300 = $("<span>");
  node2658.append(nodes5300);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1067();
  }));
  
  function renderControl1067() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7016 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7016); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5300;
      nodes5300 = node.contents();
      oldNodes.replaceWith(nodes5300);
    }));
  }
  renderControl1067();
  root7015.append(node2658);
  callback(root7015); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root7017 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2659 = $("<td>");
  
  var ref2628 = width;
  if(ref2628.get() !== null) {
    node2659.attr('width', ref2628.get());
    subs__.addSub(ref2628.addEventListener('change', function(_, ref, val) {
      node2659.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2628.rebind());
  
  var ref2629 = style;
  if(ref2629.get() !== null) {
    node2659.attr('class', ref2629.get());
    subs__.addSub(ref2629.addEventListener('change', function(_, ref, val) {
      node2659.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2629.rebind());
  
  var nodes5301 = $("<span>");
  node2659.append(nodes5301);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1068();
  }));
  
  function renderControl1068() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7018 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7018); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5301;
      nodes5301 = node.contents();
      oldNodes.replaceWith(nodes5301);
    }));
  }
  renderControl1068();
  root7017.append(node2659);
  callback(root7017); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root7019 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2660 = $("<td>");
  
  var ref2630 = width;
  if(ref2630.get() !== null) {
    node2660.attr('width', ref2630.get());
    subs__.addSub(ref2630.addEventListener('change', function(_, ref, val) {
      node2660.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2630.rebind());
  
  var ref2631 = style;
  if(ref2631.get() !== null) {
    node2660.attr('class', ref2631.get());
    subs__.addSub(ref2631.addEventListener('change', function(_, ref, val) {
      node2660.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2631.rebind());
  
  var nodes5302 = $("<span>");
  node2660.append(nodes5302);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1069();
  }));
  
  function renderControl1069() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7020 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7020); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5302;
      nodes5302 = node.contents();
      oldNodes.replaceWith(nodes5302);
    }));
  }
  renderControl1069();
  root7019.append(node2660);
  callback(root7019); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root7021 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2661 = $("<td>");
  
  var ref2632 = width;
  if(ref2632.get() !== null) {
    node2661.attr('width', ref2632.get());
    subs__.addSub(ref2632.addEventListener('change', function(_, ref, val) {
      node2661.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2632.rebind());
  
  var ref2633 = style;
  if(ref2633.get() !== null) {
    node2661.attr('class', ref2633.get());
    subs__.addSub(ref2633.addEventListener('change', function(_, ref, val) {
      node2661.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2633.rebind());
  
  
  var node2662 = $("<strong>");
  
  var nodes5303 = $("<span>");
  node2662.append(nodes5303);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1070();
  }));
  
  function renderControl1070() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7022); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5303;
      nodes5303 = node.contents();
      oldNodes.replaceWith(nodes5303);
    }));
  }
  renderControl1070();
  node2661.append(node2662);
  root7021.append(node2661);
  callback(root7021); return subs__;
  
  
  
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
  items.list(function(coll3388) {
    coll3388 = coll3388.reverse();
    function processOne220() {
      var item;
      item = coll3388.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll3388.length > 0) processOne220(); else rest220();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll3388.length > 0) processOne220(); else rest220();
          
        }
      }
    }
    function rest220() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll3388.length > 0) processOne220(); else rest220();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root7023 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp4831 = result__;
    var current = mobl.ref(result__);
    
    var node2663 = $("<div>");
    node2663.attr('width', "100%");
    
    
    var node2664 = $("<div>");
    node2664.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes5305 = $("<span>");
    node2664.append(nodes5305);
    subs__.addSub((ui.group)(function(_, callback) {
      var root7025 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2669 = mobl.loadingSpan();
      root7025.append(node2669);
      var list470;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList470 = function() {
        var subs__ = listSubs__;
        list470 = items.get();
        list470.list(function(results470) {
          node2669.empty();
          for(var i1316 = 0; i1316 < results470.length; i1316++) {
            (function() {
              var iternode470 = $("<span>");
              node2669.append(iternode470);
              var it;
              it = mobl.ref(mobl.ref(results470), i1316);
              var result__ = it.get() == current.get();
              var tmp4807 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp4807.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp4807.set(it.get() == current.get());
              }));
              
              
              var node2670 = $("<span>");
              iternode470.append(node2670);
              var condSubs652 = new mobl.CompSubscription();
              subs__.addSub(condSubs652);
              var oldValue652;
              var renderCond652 = function() {
                var value2764 = tmp4807.get();
                if(oldValue652 === value2764) return;
                oldValue652 = value2764;
                var subs__ = condSubs652;
                subs__.unsubscribe();
                node2670.empty();
                if(value2764) {
                  var nodes5306 = $("<span>");
                  node2670.append(nodes5306);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root7026 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4834 = result__;
                      var tmp4804 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4832 = result__;
                          var result__ = tmp4832;
                          tmp4804.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4833 = result__;
                          var result__ = tmp4833;
                          tmp4804.set(result__);
                          
                        });
                      }));
                      
                      var nodes5307 = $("<span>");
                      root7026.append(nodes5307);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1072();
                      }));
                      
                      function renderControl1072() {
                        subs__.addSub((masterItem.get())(it, tmp4804, function(elements, callback) {
                          var root7027 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root7027); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes5307;
                          nodes5307 = node.contents();
                          oldNodes.replaceWith(nodes5307);
                        }));
                      }
                      renderControl1072();
                      callback(root7026); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5306;
                    nodes5306 = node.contents();
                    oldNodes.replaceWith(nodes5306);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp4806 = mobl.ref(result__);
                  
                  var nodes5308 = $("<span>");
                  node2670.append(nodes5308);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4806, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root7028 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4837 = result__;
                      var tmp4805 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4835 = result__;
                          var result__ = tmp4835;
                          tmp4805.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4836 = result__;
                          var result__ = tmp4836;
                          tmp4805.set(result__);
                          
                        });
                      }));
                      
                      var nodes5309 = $("<span>");
                      root7028.append(nodes5309);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1073();
                      }));
                      
                      function renderControl1073() {
                        subs__.addSub((masterItem.get())(it, tmp4805, function(elements, callback) {
                          var root7029 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root7029); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes5309;
                          nodes5309 = node.contents();
                          oldNodes.replaceWith(nodes5309);
                        }));
                      }
                      renderControl1073();
                      callback(root7028); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5308;
                    nodes5308 = node.contents();
                    oldNodes.replaceWith(nodes5308);
                  }));
                  
                  
                }
              };
              renderCond652();
              subs__.addSub(tmp4807.addEventListener('change', function() {
                renderCond652();
              }));
              
              
              var oldNodes = iternode470;
              iternode470 = iternode470.contents();
              oldNodes.replaceWith(iternode470);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list470.addEventListener('change', function() { listSubs__.unsubscribe(); renderList470(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList470(true); }));
        });
      };
      renderList470();
      
      callback(root7025); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5305;
      nodes5305 = node.contents();
      oldNodes.replaceWith(nodes5305);
    }));
    node2663.append(node2664);
    
    var node2665 = $("<div>");
    node2665.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    var result__ = current.get() && items.get();
    var tmp4808 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp4808.set(current.get() && items.get());
    }));
    subs__.addSub(items.addEventListener('change', function() {
      tmp4808.set(current.get() && items.get());
    }));
    
    
    var node2666 = $("<span>");
    node2665.append(node2666);
    var condSubs651 = new mobl.CompSubscription();
    subs__.addSub(condSubs651);
    var oldValue651;
    var renderCond651 = function() {
      var value2763 = tmp4808.get();
      if(oldValue651 === value2763) return;
      oldValue651 = value2763;
      var subs__ = condSubs651;
      subs__.unsubscribe();
      node2666.empty();
      if(value2763) {
        var nodes5304 = $("<span>");
        node2666.append(nodes5304);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl1071();
        }));
        
        function renderControl1071() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root7024 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root7024); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes5304;
            nodes5304 = node.contents();
            oldNodes.replaceWith(nodes5304);
          }));
        }
        renderControl1071();
        
        
      } else {
        
        var node2667 = $("<div>");
        node2667.attr('style', "padding:20px");
        
        
        var node2668 = $("<h2>");
        
        
        node2668.append("Add more questions.");
        node2667.append(node2668);
        node2666.append(node2667);
        
        
        
      }
    };
    renderCond651();
    subs__.addSub(tmp4808.addEventListener('change', function() {
      renderCond651();
    }));
    
    node2663.append(node2665);
    root7023.append(node2663);
    callback(root7023); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
