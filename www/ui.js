mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('nrichRPG');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root8328 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3288 = $("<span>");
  root8328.append(node3288);
  var condSubs800 = new mobl.CompSubscription();
  subs__.addSub(condSubs800);
  var oldValue800;
  var renderCond800 = function() {
    var value3304 = value.get();
    if(oldValue800 === value3304) return;
    oldValue800 = value3304;
    var subs__ = condSubs800;
    subs__.unsubscribe();
    node3288.empty();
    if(value3304) {
      var nodes6230 = $("<span>");
      node3288.append(nodes6230);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1328();
      }));
      
      function renderControl1328() {
        subs__.addSub((elements)(function(elements, callback) {
          var root8329 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8329); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6230;
          nodes6230 = node.contents();
          oldNodes.replaceWith(nodes6230);
        }));
      }
      renderControl1328();
      
      
    } else {
      var nodes6231 = $("<span>");
      node3288.append(nodes6231);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8330 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes6232 = $("<span>");
        root8330.append(nodes6232);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root8331 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8331); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6232;
          nodes6232 = node.contents();
          oldNodes.replaceWith(nodes6232);
        }));
        var nodes6233 = $("<span>");
        root8330.append(nodes6233);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root8332 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8332); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6233;
          nodes6233 = node.contents();
          oldNodes.replaceWith(nodes6233);
        }));
        callback(root8330); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6231;
        nodes6231 = node.contents();
        oldNodes.replaceWith(nodes6231);
      }));
      
      
    }
  };
  renderCond800();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond800();
  }));
  
  callback(root8328); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root8333 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3289 = $("<div>");
  
  var ref3258 = mobl.ref(ui.headerStyle);
  if(ref3258.get() !== null) {
    node3289.attr('class', ref3258.get());
    subs__.addSub(ref3258.addEventListener('change', function(_, ref, val) {
      node3289.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3258.rebind());
  
  var val1666 = onclick.get();
  if(val1666 !== null) {
    subs__.addSub(mobl.domBind(node3289, 'tap', val1666));
  }
  
  var ref3259 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref3259.get() !== null) {
    node3289.attr('style', ref3259.get());
    subs__.addSub(ref3259.addEventListener('change', function(_, ref, val) {
      node3289.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node3289.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref3259.rebind());
  
  
  var node3292 = $("<div>");
  
  var ref3257 = mobl.ref(ui.headerContainerStyle);
  if(ref3257.get() !== null) {
    node3292.attr('class', ref3257.get());
    subs__.addSub(ref3257.addEventListener('change', function(_, ref, val) {
      node3292.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3257.rebind());
  
  
  var node3293 = $("<div>");
  
  var ref3255 = text;
  node3293.text(""+ref3255.get());
  var ignore640 = false;
  subs__.addSub(ref3255.addEventListener('change', function(_, ref, val) {
    if(ignore640) return;
    node3293.text(""+val);
  }));
  subs__.addSub(ref3255.rebind());
  
  
  var ref3256 = mobl.ref(ui.headerTextStyle);
  if(ref3256.get() !== null) {
    node3293.attr('class', ref3256.get());
    subs__.addSub(ref3256.addEventListener('change', function(_, ref, val) {
      node3293.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3256.rebind());
  
  node3292.append(node3293);
  node3289.append(node3292);
  var nodes6234 = $("<span>");
  node3289.append(nodes6234);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1329();
  }));
  
  function renderControl1329() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8334 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8334); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6234;
      nodes6234 = node.contents();
      oldNodes.replaceWith(nodes6234);
    }));
  }
  renderControl1329();
  root8333.append(node3289);
  
  var node3290 = $("<span>");
  root8333.append(node3290);
  var condSubs801 = new mobl.CompSubscription();
  subs__.addSub(condSubs801);
  var oldValue801;
  var renderCond801 = function() {
    var value3305 = fixedPosition.get();
    if(oldValue801 === value3305) return;
    oldValue801 = value3305;
    var subs__ = condSubs801;
    subs__.unsubscribe();
    node3290.empty();
    if(value3305) {
      
      var node3291 = $("<div>");
      node3291.attr('id', "hello");
      node3291.attr('style', "height: 2.9em;");
      
      node3290.append(node3291);
      
      
    } else {
      
    }
  };
  renderCond801();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond801();
  }));
  
  callback(root8333); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8335 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref3260 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref3260.get() !== null) {
    sp.attr('class', ref3260.get());
    subs__.addSub(ref3260.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref3260.rebind());
  
  var val1667 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1667 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1667));
  }
  
  var val1668 = function(event, callback) {
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
  if(val1668 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1668));
  }
  
  var val1669 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after513(result__) {
                    var tmp5711 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after513);if(result__ !== undefined) after513(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1669 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1669));
  }
  
  var val1670 = function(event, callback) {
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
  if(val1670 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1670));
  }
  
  var ref3261 = text;
  sp.text(""+ref3261.get());
  var ignore641 = false;
  subs__.addSub(ref3261.addEventListener('change', function(_, ref, val) {
    if(ignore641) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref3261.rebind());
  
  
  root8335.append(sp);
  callback(root8335); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8336 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6235 = $("<span>");
  root8336.append(nodes6235);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8337 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8337); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6235;
    nodes6235 = node.contents();
    oldNodes.replaceWith(nodes6235);
  }));
  callback(root8336); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8338 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6236 = $("<span>");
  root8338.append(nodes6236);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8339 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8339); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6236;
    nodes6236 = node.contents();
    oldNodes.replaceWith(nodes6236);
  }));
  callback(root8338); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root8340 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3294 = $("<ul>");
  
  var ref3262 = mobl.ref(ui.groupStyle);
  if(ref3262.get() !== null) {
    node3294.attr('class', ref3262.get());
    subs__.addSub(ref3262.addEventListener('change', function(_, ref, val) {
      node3294.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3262.rebind());
  
  var nodes6237 = $("<span>");
  node3294.append(nodes6237);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1330();
  }));
  
  function renderControl1330() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8341 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8341); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6237;
      nodes6237 = node.contents();
      oldNodes.replaceWith(nodes6237);
    }));
  }
  renderControl1330();
  root8340.append(node3294);
  callback(root8340); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root8342 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3295 = $("<img>");
  
  var ref3263 = url;
  if(ref3263.get() !== null) {
    node3295.attr('src', ref3263.get());
    subs__.addSub(ref3263.addEventListener('change', function(_, ref, val) {
      node3295.attr('src', val);
    }));
    
  }
  subs__.addSub(ref3263.rebind());
  
  var ref3264 = width;
  if(ref3264.get() !== null) {
    node3295.attr('width', ref3264.get());
    subs__.addSub(ref3264.addEventListener('change', function(_, ref, val) {
      node3295.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3264.rebind());
  
  var ref3265 = height;
  if(ref3265.get() !== null) {
    node3295.attr('height', ref3265.get());
    subs__.addSub(ref3265.addEventListener('change', function(_, ref, val) {
      node3295.attr('height', val);
    }));
    
  }
  subs__.addSub(ref3265.rebind());
  
  var ref3266 = style;
  if(ref3266.get() !== null) {
    node3295.attr('class', ref3266.get());
    subs__.addSub(ref3266.addEventListener('change', function(_, ref, val) {
      node3295.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3266.rebind());
  
  var val1671 = onclick.get();
  if(val1671 !== null) {
    subs__.addSub(mobl.domBind(node3295, 'tap', val1671));
  }
  
  var ref3267 = valign;
  if(ref3267.get() !== null) {
    node3295.attr('valign', ref3267.get());
    subs__.addSub(ref3267.addEventListener('change', function(_, ref, val) {
      node3295.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref3267.rebind());
  
  var ref3268 = align;
  if(ref3268.get() !== null) {
    node3295.attr('align', ref3268.get());
    subs__.addSub(ref3268.addEventListener('change', function(_, ref, val) {
      node3295.attr('align', val);
    }));
    
  }
  subs__.addSub(ref3268.rebind());
  
  root8342.append(node3295);
  callback(root8342); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root8343 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref3269 = mobl.ref(ui.itemStyle);
  if(ref3269.get() !== null) {
    el.attr('class', ref3269.get());
    subs__.addSub(ref3269.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3269.rebind());
  
  var ref3270 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref3270.get() !== null) {
    el.attr('class', ref3270.get());
    subs__.addSub(ref3270.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref3270.rebind());
  
  var val1672 = onswipe.get();
  if(val1672 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1672));
  }
  
  var val1673 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp5712 = result__;
                                           function after514(result__) {
                                             var tmp5713 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after514);if(result__ !== undefined) after514(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp5714 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1673 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1673));
  }
  
  var nodes6238 = $("<span>");
  el.append(nodes6238);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1331();
  }));
  
  function renderControl1331() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8344 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8344); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6238;
      nodes6238 = node.contents();
      oldNodes.replaceWith(nodes6238);
    }));
  }
  renderControl1331();
  root8343.append(el);
  callback(root8343); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root8345 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3296 = $("<input>");
  node3296.attr('type', "checkbox");
  
  var ref3272 = b;
  node3296.attr('checked', !!ref3272.get());
  subs__.addSub(ref3272.addEventListener('change', function(_, ref, val) {
    if(ref === ref3272) node3296.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node3296, 'change', function() {
    b.set(!!node3296.attr('checked'));
  }));
  
  var val1675 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1675 !== null) {
    subs__.addSub(mobl.domBind(node3296, 'tap', val1675));
  }
  
  var val1676 = onchange.get();
  if(val1676 !== null) {
    subs__.addSub(mobl.domBind(node3296, 'change', val1676));
  }
  
  root8345.append(node3296);
  
  root8345.append(" ");
  
  var node3297 = $("<span>");
  
  var ref3271 = label;
  node3297.text(""+ref3271.get());
  var ignore642 = false;
  subs__.addSub(ref3271.addEventListener('change', function(_, ref, val) {
    if(ignore642) return;
    node3297.text(""+val);
  }));
  subs__.addSub(ref3271.rebind());
  
  
  var val1674 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after515(result__) {
                    var tmp5715 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after515);if(result__ !== undefined) after515(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1674 !== null) {
    subs__.addSub(mobl.domBind(node3297, 'tap', val1674));
  }
  
  root8345.append(node3297);
  callback(root8345); return subs__;
  
  
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
  var root8346 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3298 = $("<span>");
  root8346.append(node3298);
  var condSubs802 = new mobl.CompSubscription();
  subs__.addSub(condSubs802);
  var oldValue802;
  var renderCond802 = function() {
    var value3306 = label.get();
    if(oldValue802 === value3306) return;
    oldValue802 = value3306;
    var subs__ = condSubs802;
    subs__.unsubscribe();
    node3298.empty();
    if(value3306) {
      var nodes6239 = $("<span>");
      node3298.append(nodes6239);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8347 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8347); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6239;
        nodes6239 = node.contents();
        oldNodes.replaceWith(nodes6239);
      }));
      
      
    } else {
      
    }
  };
  renderCond802();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond802();
  }));
  
  
  var node3299 = $("<span>");
  root8346.append(node3299);
  var condSubs803 = new mobl.CompSubscription();
  subs__.addSub(condSubs803);
  var oldValue803;
  var renderCond803 = function() {
    var value3307 = validator.get();
    if(oldValue803 === value3307) return;
    oldValue803 = value3307;
    var subs__ = condSubs803;
    subs__.unsubscribe();
    node3299.empty();
    if(value3307) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after519(result__) {
        var tmp5716 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp5717 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node3300 = $("<input>");
        
        var ref3273 = inputType;
        if(ref3273.get() !== null) {
          node3300.attr('type', ref3273.get());
          subs__.addSub(ref3273.addEventListener('change', function(_, ref, val) {
            node3300.attr('type', val);
          }));
          
        }
        subs__.addSub(ref3273.rebind());
        
        var ref3274 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref3274.get() !== null) {
          node3300.attr('class', ref3274.get());
          subs__.addSub(ref3274.addEventListener('change', function(_, ref, val) {
            node3300.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node3300.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node3300.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node3300.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref3274.rebind());
        
        var ref3275 = placeholder;
        if(ref3275.get() !== null) {
          node3300.attr('placeholder', ref3275.get());
          subs__.addSub(ref3275.addEventListener('change', function(_, ref, val) {
            node3300.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref3275.rebind());
        
        var ref3276 = temp;
        node3300.val(""+ref3276.get());
        var ignore643 = false;
        subs__.addSub(ref3276.addEventListener('change', function(_, ref, val) {
          if(ignore643) return;
          node3300.val(""+val);
        }));
        subs__.addSub(ref3276.rebind());
        
        subs__.addSub(mobl.domBind(node3300, 'keyup change', function() {
          ignore643 = true;
          temp.set(mobl.stringTomobl__String(node3300.val()));
          ignore643 = false;
        }));
        
        
        var val1677 = onchange.get();
        if(val1677 !== null) {
          subs__.addSub(mobl.domBind(node3300, 'change', val1677));
        }
        
        var val1678 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after516(result__) {
                          var tmp5718 = result__;
                          function after517(result__) {
                            var tmp5719 = result__;
                            var result__ = tmp5719;
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
                          var result__ = validator.get()(temp.get(), after517);if(result__ !== undefined) after517(result__);
                        }
                        var result__ = onkeyup.get()(event, after516);if(result__ !== undefined) after516(result__);
                      } else {
                        {
                          function after518(result__) {
                            var tmp5719 = result__;
                            var result__ = tmp5719;
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
                          var result__ = validator.get()(temp.get(), after518);if(result__ !== undefined) after518(result__);
                        }
                      }
                    };
        if(val1678 !== null) {
          subs__.addSub(mobl.domBind(node3300, 'keyup', val1678));
        }
        
        var val1679 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1679 !== null) {
          subs__.addSub(mobl.domBind(node3300, 'blur', val1679));
        }
        
        node3299.append(node3300);
        var nodes6240 = $("<span>");
        node3299.append(nodes6240);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root8348 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8348); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6240;
          nodes6240 = node.contents();
          oldNodes.replaceWith(nodes6240);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after519);if(result__ !== undefined) after519(result__);
    } else {
      
      var node3301 = $("<input>");
      
      var ref3277 = inputType;
      if(ref3277.get() !== null) {
        node3301.attr('type', ref3277.get());
        subs__.addSub(ref3277.addEventListener('change', function(_, ref, val) {
          node3301.attr('type', val);
        }));
        
      }
      subs__.addSub(ref3277.rebind());
      
      var ref3278 = style;
      if(ref3278.get() !== null) {
        node3301.attr('class', ref3278.get());
        subs__.addSub(ref3278.addEventListener('change', function(_, ref, val) {
          node3301.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3278.rebind());
      
      var ref3279 = placeholder;
      if(ref3279.get() !== null) {
        node3301.attr('placeholder', ref3279.get());
        subs__.addSub(ref3279.addEventListener('change', function(_, ref, val) {
          node3301.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3279.rebind());
      
      var ref3280 = s;
      node3301.val(""+ref3280.get());
      var ignore644 = false;
      subs__.addSub(ref3280.addEventListener('change', function(_, ref, val) {
        if(ignore644) return;
        node3301.val(""+val);
      }));
      subs__.addSub(ref3280.rebind());
      
      subs__.addSub(mobl.domBind(node3301, 'keyup change', function() {
        ignore644 = true;
        s.set(mobl.stringTomobl__String(node3301.val()));
        ignore644 = false;
      }));
      
      
      var val1680 = onchange.get();
      if(val1680 !== null) {
        subs__.addSub(mobl.domBind(node3301, 'change', val1680));
      }
      
      var val1681 = onkeyup.get();
      if(val1681 !== null) {
        subs__.addSub(mobl.domBind(node3301, 'keyup', val1681));
      }
      
      var val1682 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1682 !== null) {
        subs__.addSub(mobl.domBind(node3301, 'blur', val1682));
      }
      
      node3299.append(node3301);
      
      
    }
  };
  renderCond803();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond803();
  }));
  
  callback(root8346); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8349 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6241 = $("<span>");
  root8349.append(nodes6241);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8350 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8350); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6241;
    nodes6241 = node.contents();
    oldNodes.replaceWith(nodes6241);
  }));
  callback(root8349); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8351 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6242 = $("<span>");
  root8351.append(nodes6242);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8352 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8352); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6242;
    nodes6242 = node.contents();
    oldNodes.replaceWith(nodes6242);
  }));
  callback(root8351); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root8353 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3302 = $("<span>");
  root8353.append(node3302);
  var condSubs804 = new mobl.CompSubscription();
  subs__.addSub(condSubs804);
  var oldValue804;
  var renderCond804 = function() {
    var value3308 = label.get();
    if(oldValue804 === value3308) return;
    oldValue804 = value3308;
    var subs__ = condSubs804;
    subs__.unsubscribe();
    node3302.empty();
    if(value3308) {
      var nodes6243 = $("<span>");
      node3302.append(nodes6243);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8354 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8354); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6243;
        nodes6243 = node.contents();
        oldNodes.replaceWith(nodes6243);
      }));
      
      
    } else {
      
    }
  };
  renderCond804();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond804();
  }));
  
  
  var node3303 = $("<input>");
  node3303.attr('type', "range");
  
  var ref3281 = n;
  node3303.val(""+ref3281.get());
  var ignore645 = false;
  subs__.addSub(ref3281.addEventListener('change', function(_, ref, val) {
    if(ignore645) return;
    node3303.val(""+val);
  }));
  subs__.addSub(ref3281.rebind());
  
  subs__.addSub(mobl.domBind(node3303, 'keyup change', function() {
    ignore645 = true;
    n.set(mobl.stringTomobl__Num(node3303.val()));
    ignore645 = false;
  }));
  
  
  var ref3282 = min;
  if(ref3282.get() !== null) {
    node3303.attr('min', ref3282.get());
    subs__.addSub(ref3282.addEventListener('change', function(_, ref, val) {
      node3303.attr('min', val);
    }));
    
  }
  subs__.addSub(ref3282.rebind());
  
  var ref3283 = max;
  if(ref3283.get() !== null) {
    node3303.attr('max', ref3283.get());
    subs__.addSub(ref3283.addEventListener('change', function(_, ref, val) {
      node3303.attr('max', val);
    }));
    
  }
  subs__.addSub(ref3283.rebind());
  
  var ref3284 = step;
  if(ref3284.get() !== null) {
    node3303.attr('step', ref3284.get());
    subs__.addSub(ref3284.addEventListener('change', function(_, ref, val) {
      node3303.attr('step', val);
    }));
    
  }
  subs__.addSub(ref3284.rebind());
  node3303.attr('style', "width: 99%;");
  
  var val1683 = onchange.get();
  if(val1683 !== null) {
    subs__.addSub(mobl.domBind(node3303, 'change', val1683));
  }
  
  var val1684 = onkeyup.get();
  if(val1684 !== null) {
    subs__.addSub(mobl.domBind(node3303, 'keyup', val1684));
  }
  
  var ref3285 = placeholder;
  if(ref3285.get() !== null) {
    node3303.attr('placeholder', ref3285.get());
    subs__.addSub(ref3285.addEventListener('change', function(_, ref, val) {
      node3303.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3285.rebind());
  
  root8353.append(node3303);
  callback(root8353); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8355 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after520(result__) {
      var tmp5720 = result__;
      var result__ = tmp5720;
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
    var result__ = validator.get()(n2, after520);if(result__ !== undefined) after520(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes6244 = $("<span>");
  root8355.append(nodes6244);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8356 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8356); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6244;
    nodes6244 = node.contents();
    oldNodes.replaceWith(nodes6244);
  }));
  callback(root8355); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root8357 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3304 = $("<span>");
  root8357.append(node3304);
  var condSubs805 = new mobl.CompSubscription();
  subs__.addSub(condSubs805);
  var oldValue805;
  var renderCond805 = function() {
    var value3309 = label.get();
    if(oldValue805 === value3309) return;
    oldValue805 = value3309;
    var subs__ = condSubs805;
    subs__.unsubscribe();
    node3304.empty();
    if(value3309) {
      
      var node3305 = $("<span>");
      node3305.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref3289 = label;
      node3305.text(""+ref3289.get());
      var ignore647 = false;
      subs__.addSub(ref3289.addEventListener('change', function(_, ref, val) {
        if(ignore647) return;
        node3305.text(""+val);
      }));
      subs__.addSub(ref3289.rebind());
      
      
      node3304.append(node3305);
      
      var node3306 = $("<span>");
      node3306.attr('style', "float: left");
      
      
      var node3307 = $("<input>");
      node3307.attr('type', "password");
      
      var ref3286 = style;
      if(ref3286.get() !== null) {
        node3307.attr('class', ref3286.get());
        subs__.addSub(ref3286.addEventListener('change', function(_, ref, val) {
          node3307.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3286.rebind());
      
      var ref3287 = placeholder;
      if(ref3287.get() !== null) {
        node3307.attr('placeholder', ref3287.get());
        subs__.addSub(ref3287.addEventListener('change', function(_, ref, val) {
          node3307.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3287.rebind());
      
      var ref3288 = s;
      node3307.val(""+ref3288.get());
      var ignore646 = false;
      subs__.addSub(ref3288.addEventListener('change', function(_, ref, val) {
        if(ignore646) return;
        node3307.val(""+val);
      }));
      subs__.addSub(ref3288.rebind());
      
      subs__.addSub(mobl.domBind(node3307, 'keyup change', function() {
        ignore646 = true;
        s.set(mobl.stringTomobl__String(node3307.val()));
        ignore646 = false;
      }));
      
      
      var val1685 = onchange.get();
      if(val1685 !== null) {
        subs__.addSub(mobl.domBind(node3307, 'change', val1685));
      }
      
      var val1686 = onkeyup.get();
      if(val1686 !== null) {
        subs__.addSub(mobl.domBind(node3307, 'keyup', val1686));
      }
      
      var val1687 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1687 !== null) {
        subs__.addSub(mobl.domBind(node3307, 'blur', val1687));
      }
      
      node3306.append(node3307);
      node3304.append(node3306);
      
      
      
      
    } else {
      
      var node3308 = $("<input>");
      node3308.attr('type', "password");
      
      var ref3290 = style;
      if(ref3290.get() !== null) {
        node3308.attr('class', ref3290.get());
        subs__.addSub(ref3290.addEventListener('change', function(_, ref, val) {
          node3308.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3290.rebind());
      
      var ref3291 = placeholder;
      if(ref3291.get() !== null) {
        node3308.attr('placeholder', ref3291.get());
        subs__.addSub(ref3291.addEventListener('change', function(_, ref, val) {
          node3308.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3291.rebind());
      
      var ref3292 = s;
      node3308.val(""+ref3292.get());
      var ignore648 = false;
      subs__.addSub(ref3292.addEventListener('change', function(_, ref, val) {
        if(ignore648) return;
        node3308.val(""+val);
      }));
      subs__.addSub(ref3292.rebind());
      
      subs__.addSub(mobl.domBind(node3308, 'keyup change', function() {
        ignore648 = true;
        s.set(mobl.stringTomobl__String(node3308.val()));
        ignore648 = false;
      }));
      
      
      var val1688 = onchange.get();
      if(val1688 !== null) {
        subs__.addSub(mobl.domBind(node3308, 'change', val1688));
      }
      
      var val1689 = onkeyup.get();
      if(val1689 !== null) {
        subs__.addSub(mobl.domBind(node3308, 'keyup', val1689));
      }
      
      var val1690 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1690 !== null) {
        subs__.addSub(mobl.domBind(node3308, 'blur', val1690));
      }
      
      node3304.append(node3308);
      
      
    }
  };
  renderCond805();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond805();
  }));
  
  callback(root8357); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root8358 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref3297 = style;
  if(ref3297.get() !== null) {
    sel.attr('class', ref3297.get());
    subs__.addSub(ref3297.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3297.rebind());
  
  var val1691 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after521(result__) {
                    var tmp5722 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after521);if(result__ !== undefined) after521(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1691 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1691));
  }
  
  
  var node3309 = mobl.loadingSpan();
  sel.append(node3309);
  var list581;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList581 = function() {
    var subs__ = listSubs__;
    list581 = options.get();
    list581.list(function(results581) {
      node3309.empty();
      for(var i1454 = 0; i1454 < results581.length; i1454++) {
        (function() {
          var iternode581 = $("<span>");
          node3309.append(iternode581);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results581), i1454), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results581), i1454), "_2");
          
          var node3310 = $("<option>");
          
          var ref3293 = optionDescription;
          node3310.text(""+ref3293.get());
          var ignore649 = false;
          subs__.addSub(ref3293.addEventListener('change', function(_, ref, val) {
            if(ignore649) return;
            node3310.text(""+val);
          }));
          subs__.addSub(ref3293.rebind());
          
          
          var ref3294 = optionStyle;
          if(ref3294.get() !== null) {
            node3310.attr('class', ref3294.get());
            subs__.addSub(ref3294.addEventListener('change', function(_, ref, val) {
              node3310.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3294.rebind());
          
          var ref3295 = optionValue;
          if(ref3295.get() !== null) {
            node3310.attr('value', ref3295.get());
            subs__.addSub(ref3295.addEventListener('change', function(_, ref, val) {
              node3310.attr('value', val);
            }));
            
          }
          subs__.addSub(ref3295.rebind());
          
          var ref3296 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref3296.get() !== null) {
            node3310.attr('selected', ref3296.get());
            subs__.addSub(ref3296.addEventListener('change', function(_, ref, val) {
              node3310.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node3310.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node3310.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref3296.rebind());
          
          iternode581.append(node3310);
          
          var oldNodes = iternode581;
          iternode581 = iternode581.contents();
          oldNodes.replaceWith(iternode581);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list581.addEventListener('change', function() { listSubs__.unsubscribe(); renderList581(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList581(true); }));
    });
  };
  renderList581();
  
  root8358.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root8358); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root8359 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes6245 = $("<span>");
    root8359.append(nodes6245);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8360 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3311 = mobl.loadingSpan();
      root8360.append(node3311);
      var list582;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList582 = function() {
        var subs__ = listSubs__;
        list582 = tabs.get();
        list582.list(function(results582) {
          node3311.empty();
          for(var i1455 = 0; i1455 < results582.length; i1455++) {
            (function() {
              var iternode582 = $("<span>");
              node3311.append(iternode582);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results582), i1455), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results582), i1455), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results582), i1455), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp5685 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp5685.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp5685.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp5685.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp5685.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp5684 = mobl.ref(result__);
              
              var nodes6246 = $("<span>");
              iternode582.append(nodes6246);
              subs__.addSub((mobl.span)(tmp5685, mobl.ref(null), tmp5684, mobl.ref(null), function(_, callback) {
                var root8361 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6247 = $("<span>");
                root8361.append(nodes6247);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root8362 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8362); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6247;
                  nodes6247 = node.contents();
                  oldNodes.replaceWith(nodes6247);
                }));
                callback(root8361); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6246;
                nodes6246 = node.contents();
                oldNodes.replaceWith(nodes6246);
              }));
              
              var oldNodes = iternode582;
              iternode582 = iternode582.contents();
              oldNodes.replaceWith(iternode582);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list582.addEventListener('change', function() { listSubs__.unsubscribe(); renderList582(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList582(true); }));
        });
      };
      renderList582();
      
      callback(root8360); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6245;
      nodes6245 = node.contents();
      oldNodes.replaceWith(nodes6245);
    }));
    
    var node3312 = mobl.loadingSpan();
    root8359.append(node3312);
    var list583;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList583 = function() {
      var subs__ = listSubs__;
      list583 = tabs.get();
      list583.list(function(results583) {
        node3312.empty();
        for(var i1456 = 0; i1456 < results583.length; i1456++) {
          (function() {
            var iternode583 = $("<span>");
            node3312.append(iternode583);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results583), i1456), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results583), i1456), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results583), i1456), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp5686 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp5686.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp5686.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp5686.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp5686.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes6248 = $("<span>");
            iternode583.append(nodes6248);
            subs__.addSub((mobl.block)(tmp5686, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8363 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6249 = $("<span>");
              root8363.append(nodes6249);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root8364 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6250 = $("<span>");
                root8364.append(nodes6250);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1332();
                }));
                
                function renderControl1332() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root8365 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8365); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6250;
                    nodes6250 = node.contents();
                    oldNodes.replaceWith(nodes6250);
                  }));
                }
                renderControl1332();
                callback(root8364); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6249;
                nodes6249 = node.contents();
                oldNodes.replaceWith(nodes6249);
              }));
              callback(root8363); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6248;
              nodes6248 = node.contents();
              oldNodes.replaceWith(nodes6248);
            }));
            
            var oldNodes = iternode583;
            iternode583 = iternode583.contents();
            oldNodes.replaceWith(iternode583);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list583.addEventListener('change', function() { listSubs__.unsubscribe(); renderList583(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList583(true); }));
      });
    };
    renderList583();
    
    callback(root8359); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes6245 = $("<span>");
      root8359.append(nodes6245);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8360 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3311 = mobl.loadingSpan();
        root8360.append(node3311);
        var list582;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList582 = function() {
          var subs__ = listSubs__;
          list582 = tabs.get();
          list582.list(function(results582) {
            node3311.empty();
            for(var i1455 = 0; i1455 < results582.length; i1455++) {
              (function() {
                var iternode582 = $("<span>");
                node3311.append(iternode582);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results582), i1455), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results582), i1455), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results582), i1455), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp5685 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp5685.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp5685.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp5685.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp5685.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5684 = mobl.ref(result__);
                
                var nodes6246 = $("<span>");
                iternode582.append(nodes6246);
                subs__.addSub((mobl.span)(tmp5685, mobl.ref(null), tmp5684, mobl.ref(null), function(_, callback) {
                  var root8361 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6247 = $("<span>");
                  root8361.append(nodes6247);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root8362 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8362); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6247;
                    nodes6247 = node.contents();
                    oldNodes.replaceWith(nodes6247);
                  }));
                  callback(root8361); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6246;
                  nodes6246 = node.contents();
                  oldNodes.replaceWith(nodes6246);
                }));
                
                var oldNodes = iternode582;
                iternode582 = iternode582.contents();
                oldNodes.replaceWith(iternode582);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list582.addEventListener('change', function() { listSubs__.unsubscribe(); renderList582(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList582(true); }));
          });
        };
        renderList582();
        
        callback(root8360); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6245;
        nodes6245 = node.contents();
        oldNodes.replaceWith(nodes6245);
      }));
      
      var node3312 = mobl.loadingSpan();
      root8359.append(node3312);
      var list583;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList583 = function() {
        var subs__ = listSubs__;
        list583 = tabs.get();
        list583.list(function(results583) {
          node3312.empty();
          for(var i1456 = 0; i1456 < results583.length; i1456++) {
            (function() {
              var iternode583 = $("<span>");
              node3312.append(iternode583);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results583), i1456), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results583), i1456), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results583), i1456), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp5686 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp5686.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp5686.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp5686.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp5686.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes6248 = $("<span>");
              iternode583.append(nodes6248);
              subs__.addSub((mobl.block)(tmp5686, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8363 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6249 = $("<span>");
                root8363.append(nodes6249);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root8364 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6250 = $("<span>");
                  root8364.append(nodes6250);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1332();
                  }));
                  
                  function renderControl1332() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root8365 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8365); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6250;
                      nodes6250 = node.contents();
                      oldNodes.replaceWith(nodes6250);
                    }));
                  }
                  renderControl1332();
                  callback(root8364); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6249;
                  nodes6249 = node.contents();
                  oldNodes.replaceWith(nodes6249);
                }));
                callback(root8363); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6248;
                nodes6248 = node.contents();
                oldNodes.replaceWith(nodes6248);
              }));
              
              var oldNodes = iternode583;
              iternode583 = iternode583.contents();
              oldNodes.replaceWith(iternode583);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list583.addEventListener('change', function() { listSubs__.unsubscribe(); renderList583(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList583(true); }));
        });
      };
      renderList583();
      
      callback(root8359); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root8366 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3313 = $("<div>");
  
  var ref3301 = mobl.ref(ui.searchboxStyle);
  if(ref3301.get() !== null) {
    node3313.attr('class', ref3301.get());
    subs__.addSub(ref3301.addEventListener('change', function(_, ref, val) {
      node3313.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3301.rebind());
  
  
  var node3314 = $("<input>");
  node3314.attr('type', "search");
  
  var ref3298 = mobl.ref(ui.searchBoxInputStyle);
  if(ref3298.get() !== null) {
    node3314.attr('class', ref3298.get());
    subs__.addSub(ref3298.addEventListener('change', function(_, ref, val) {
      node3314.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3298.rebind());
  
  var ref3299 = placeholder;
  if(ref3299.get() !== null) {
    node3314.attr('placeholder', ref3299.get());
    subs__.addSub(ref3299.addEventListener('change', function(_, ref, val) {
      node3314.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3299.rebind());
  
  var ref3300 = s;
  node3314.val(""+ref3300.get());
  var ignore650 = false;
  subs__.addSub(ref3300.addEventListener('change', function(_, ref, val) {
    if(ignore650) return;
    node3314.val(""+val);
  }));
  subs__.addSub(ref3300.rebind());
  
  subs__.addSub(mobl.domBind(node3314, 'keyup change', function() {
    ignore650 = true;
    s.set(mobl.stringTomobl__String(node3314.val()));
    ignore650 = false;
  }));
  
  
  var val1692 = onsearch.get();
  if(val1692 !== null) {
    subs__.addSub(mobl.domBind(node3314, 'change', val1692));
  }
  
  var val1693 = onkeyup.get();
  if(val1693 !== null) {
    subs__.addSub(mobl.domBind(node3314, 'keyup', val1693));
  }
  node3314.attr('autocorrect', false);
  node3314.attr('autocapitalize', false);
  node3314.attr('autocomplete', false);
  
  node3313.append(node3314);
  root8366.append(node3313);
  callback(root8366); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root8367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref3302 = mobl.ref(ui.contextMenuStyle);
  if(ref3302.get() !== null) {
    menu.attr('class', ref3302.get());
    subs__.addSub(ref3302.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3302.rebind());
  
  var nodes6251 = $("<span>");
  menu.append(nodes6251);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1333();
  }));
  
  function renderControl1333() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8368); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6251;
      nodes6251 = node.contents();
      oldNodes.replaceWith(nodes6251);
    }));
  }
  renderControl1333();
  root8367.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1694 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp5725 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1694 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1694));
  }
  
  root8367.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root8367); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root8369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp5710 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp5710.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3315 = $("<span>");
  root8369.append(node3315);
  var condSubs806 = new mobl.CompSubscription();
  subs__.addSub(condSubs806);
  var oldValue806;
  var renderCond806 = function() {
    var value3310 = tmp5710.get();
    if(oldValue806 === value3310) return;
    oldValue806 = value3310;
    var subs__ = condSubs806;
    subs__.unsubscribe();
    node3315.empty();
    if(value3310) {
      items.get().one(function(result__) {
        var tmp5726 = result__;
        var current = mobl.ref(result__);
        
        var node3316 = $("<div>");
        node3316.attr('width', "100%");
        
        
        var node3317 = $("<div>");
        node3317.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes6254 = $("<span>");
        node3317.append(nodes6254);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8372 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3320 = mobl.loadingSpan();
          root8372.append(node3320);
          var list584;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList584 = function() {
            var subs__ = listSubs__;
            list584 = items.get();
            list584.list(function(results584) {
              node3320.empty();
              for(var i1457 = 0; i1457 < results584.length; i1457++) {
                (function() {
                  var iternode584 = $("<span>");
                  node3320.append(iternode584);
                  var it;
                  it = mobl.ref(mobl.ref(results584), i1457);
                  var result__ = it.get() == current.get();
                  var tmp5692 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp5692.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp5692.set(it.get() == current.get());
                  }));
                  
                  
                  var node3321 = $("<span>");
                  iternode584.append(node3321);
                  var condSubs808 = new mobl.CompSubscription();
                  subs__.addSub(condSubs808);
                  var oldValue808;
                  var renderCond808 = function() {
                    var value3312 = tmp5692.get();
                    if(oldValue808 === value3312) return;
                    oldValue808 = value3312;
                    var subs__ = condSubs808;
                    subs__.unsubscribe();
                    node3321.empty();
                    if(value3312) {
                      var nodes6255 = $("<span>");
                      node3321.append(nodes6255);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root8373 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6256 = $("<span>");
                        root8373.append(nodes6256);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1335();
                        }));
                        
                        function renderControl1335() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8374 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8374); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6256;
                            nodes6256 = node.contents();
                            oldNodes.replaceWith(nodes6256);
                          }));
                        }
                        renderControl1335();
                        callback(root8373); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6255;
                        nodes6255 = node.contents();
                        oldNodes.replaceWith(nodes6255);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp5691 = mobl.ref(result__);
                      
                      var nodes6257 = $("<span>");
                      node3321.append(nodes6257);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5691, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root8375 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6258 = $("<span>");
                        root8375.append(nodes6258);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1336();
                        }));
                        
                        function renderControl1336() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8376 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8376); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6258;
                            nodes6258 = node.contents();
                            oldNodes.replaceWith(nodes6258);
                          }));
                        }
                        renderControl1336();
                        callback(root8375); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6257;
                        nodes6257 = node.contents();
                        oldNodes.replaceWith(nodes6257);
                      }));
                      
                      
                    }
                  };
                  renderCond808();
                  subs__.addSub(tmp5692.addEventListener('change', function() {
                    renderCond808();
                  }));
                  
                  
                  var oldNodes = iternode584;
                  iternode584 = iternode584.contents();
                  oldNodes.replaceWith(iternode584);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list584.addEventListener('change', function() { listSubs__.unsubscribe(); renderList584(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList584(true); }));
            });
          };
          renderList584();
          
          callback(root8372); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6254;
          nodes6254 = node.contents();
          oldNodes.replaceWith(nodes6254);
        }));
        node3316.append(node3317);
        
        var node3318 = $("<div>");
        node3318.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node3319 = $("<span>");
        node3318.append(node3319);
        var condSubs807 = new mobl.CompSubscription();
        subs__.addSub(condSubs807);
        var oldValue807;
        var renderCond807 = function() {
          var value3311 = current.get();
          if(oldValue807 === value3311) return;
          oldValue807 = value3311;
          var subs__ = condSubs807;
          subs__.unsubscribe();
          node3319.empty();
          if(value3311) {
            var nodes6252 = $("<span>");
            node3319.append(nodes6252);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1334();
            }));
            
            function renderControl1334() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root8370 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8370); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6252;
                nodes6252 = node.contents();
                oldNodes.replaceWith(nodes6252);
              }));
            }
            renderControl1334();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp5693 = mobl.ref(result__);
            
            var nodes6253 = $("<span>");
            node3319.append(nodes6253);
            subs__.addSub((mobl.label)(tmp5693, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8371 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8371); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6253;
              nodes6253 = node.contents();
              oldNodes.replaceWith(nodes6253);
            }));
            
            
          }
        };
        renderCond807();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond807();
        }));
        
        node3316.append(node3318);
        node3315.append(node3316);
        
        
        
        
        
        
      });
    } else {
      var nodes6259 = $("<span>");
      node3315.append(nodes6259);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8377 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3322 = mobl.loadingSpan();
        root8377.append(node3322);
        var list585;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList585 = function() {
          var subs__ = listSubs__;
          list585 = items.get();
          list585.list(function(results585) {
            node3322.empty();
            for(var i1458 = 0; i1458 < results585.length; i1458++) {
              (function() {
                var iternode585 = $("<span>");
                node3322.append(iternode585);
                var it;
                it = mobl.ref(mobl.ref(results585), i1458);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp5727 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp5687 = mobl.ref(result__);
                
                var nodes6260 = $("<span>");
                iternode585.append(nodes6260);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5687, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8378 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6261 = $("<span>");
                  root8378.append(nodes6261);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1337();
                  }));
                  
                  function renderControl1337() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root8379 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8379); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6261;
                      nodes6261 = node.contents();
                      oldNodes.replaceWith(nodes6261);
                    }));
                  }
                  renderControl1337();
                  callback(root8378); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6260;
                  nodes6260 = node.contents();
                  oldNodes.replaceWith(nodes6260);
                }));
                
                var oldNodes = iternode585;
                iternode585 = iternode585.contents();
                oldNodes.replaceWith(iternode585);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list585.addEventListener('change', function() { listSubs__.unsubscribe(); renderList585(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList585(true); }));
          });
        };
        renderList585();
        
        callback(root8377); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6259;
        nodes6259 = node.contents();
        oldNodes.replaceWith(nodes6259);
      }));
      
      
    }
  };
  renderCond806();
  subs__.addSub(tmp5710.addEventListener('change', function() {
    renderCond806();
  }));
  
  callback(root8369); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8380 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp5690 = mobl.ref(result__);
  
  var nodes6262 = $("<span>");
  root8380.append(nodes6262);
  subs__.addSub((ui.header)(tmp5690, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8381 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5689 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5688 = mobl.ref(result__);
    
    var nodes6263 = $("<span>");
    root8381.append(nodes6263);
    subs__.addSub((ui.backButton)(tmp5688, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5689, function(_, callback) {
      var root8382 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8382); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6263;
      nodes6263 = node.contents();
      oldNodes.replaceWith(nodes6263);
    }));
    callback(root8381); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6262;
    nodes6262 = node.contents();
    oldNodes.replaceWith(nodes6262);
  }));
  var nodes6264 = $("<span>");
  root8380.append(nodes6264);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1338();
  }));
  
  function renderControl1338() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8383 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8383); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6264;
      nodes6264 = node.contents();
      oldNodes.replaceWith(nodes6264);
    }));
  }
  renderControl1338();
  callback(root8380); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root8384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes6265 = $("<span>");
  root8384.append(nodes6265);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3323 = mobl.loadingSpan();
    root8385.append(node3323);
    var list586;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList586 = function() {
      var subs__ = listSubs__;
      list586 = coll.get();
      list586.list(function(results586) {
        node3323.empty();
        for(var i1459 = 0; i1459 < results586.length; i1459++) {
          (function() {
            var iternode586 = $("<span>");
            node3323.append(iternode586);
            var it;
            it = mobl.ref(mobl.ref(results586), i1459);
            var result__ = it.get() == selected.get();
            var tmp5695 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp5695.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp5695.set(it.get() == selected.get());
            }));
            
            
            var node3324 = $("<span>");
            iternode586.append(node3324);
            var condSubs809 = new mobl.CompSubscription();
            subs__.addSub(condSubs809);
            var oldValue809;
            var renderCond809 = function() {
              var value3313 = tmp5695.get();
              if(oldValue809 === value3313) return;
              oldValue809 = value3313;
              var subs__ = condSubs809;
              subs__.unsubscribe();
              node3324.empty();
              if(value3313) {
                var nodes6266 = $("<span>");
                node3324.append(nodes6266);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8386 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6267 = $("<span>");
                  root8386.append(nodes6267);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1339();
                  }));
                  
                  function renderControl1339() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root8387 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8387); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6267;
                      nodes6267 = node.contents();
                      oldNodes.replaceWith(nodes6267);
                    }));
                  }
                  renderControl1339();
                  callback(root8386); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6266;
                  nodes6266 = node.contents();
                  oldNodes.replaceWith(nodes6266);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5694 = mobl.ref(result__);
                
                var nodes6268 = $("<span>");
                node3324.append(nodes6268);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5694, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root8388 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6269 = $("<span>");
                  root8388.append(nodes6269);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1340();
                  }));
                  
                  function renderControl1340() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root8389 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8389); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6269;
                      nodes6269 = node.contents();
                      oldNodes.replaceWith(nodes6269);
                    }));
                  }
                  renderControl1340();
                  callback(root8388); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6268;
                  nodes6268 = node.contents();
                  oldNodes.replaceWith(nodes6268);
                }));
                
                
              }
            };
            renderCond809();
            subs__.addSub(tmp5695.addEventListener('change', function() {
              renderCond809();
            }));
            
            
            var oldNodes = iternode586;
            iternode586 = iternode586.contents();
            oldNodes.replaceWith(iternode586);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list586.addEventListener('change', function() { listSubs__.unsubscribe(); renderList586(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList586(true); }));
      });
    };
    renderList586();
    
    callback(root8385); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6265;
    nodes6265 = node.contents();
    oldNodes.replaceWith(nodes6265);
  }));
  callback(root8384); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root8390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp5728 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp5696 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp5696.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp5696.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp5696.set(coll.get().limit(n.get()));
    }));
    
    
    var node3325 = mobl.loadingSpan();
    root8390.append(node3325);
    var list587;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList587 = function() {
      var subs__ = listSubs__;
      list587 = tmp5696.get();
      list587.list(function(results587) {
        node3325.empty();
        for(var i1460 = 0; i1460 < results587.length; i1460++) {
          (function() {
            var iternode587 = $("<span>");
            node3325.append(iternode587);
            var it;
            it = mobl.ref(mobl.ref(results587), i1460);
            var nodes6270 = $("<span>");
            iternode587.append(nodes6270);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1341();
            }));
            
            function renderControl1341() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root8391 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8391); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6270;
                nodes6270 = node.contents();
                oldNodes.replaceWith(nodes6270);
              }));
            }
            renderControl1341();
            
            var oldNodes = iternode587;
            iternode587 = iternode587.contents();
            oldNodes.replaceWith(iternode587);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list587.addEventListener('change', function() { listSubs__.unsubscribe(); renderList587(true); }));
        subs__.addSub(tmp5696.addEventListener('change', function() { listSubs__.unsubscribe(); renderList587(true); }));
      });
    };
    renderList587();
    
    var result__ = n.get() < total.get();
    var tmp5698 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp5698.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp5698.set(n.get() < total.get());
    }));
    
    
    var node3326 = $("<span>");
    root8390.append(node3326);
    var condSubs810 = new mobl.CompSubscription();
    subs__.addSub(condSubs810);
    var oldValue810;
    var renderCond810 = function() {
      var value3314 = tmp5698.get();
      if(oldValue810 === value3314) return;
      oldValue810 = value3314;
      var subs__ = condSubs810;
      subs__.unsubscribe();
      node3326.empty();
      if(value3314) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp5697 = mobl.ref(result__);
        
        var nodes6271 = $("<span>");
        node3326.append(nodes6271);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp5697, mobl.ref(null), function(_, callback) {
          var root8392 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes6272 = $("<span>");
          root8392.append(nodes6272);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root8393 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8393); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6272;
            nodes6272 = node.contents();
            oldNodes.replaceWith(nodes6272);
          }));
          callback(root8392); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6271;
          nodes6271 = node.contents();
          oldNodes.replaceWith(nodes6271);
        }));
        
        
      } else {
        
      }
    };
    renderCond810();
    subs__.addSub(tmp5698.addEventListener('change', function() {
      renderCond810();
    }));
    
    callback(root8390); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root8394 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6273 = $("<span>");
  root8394.append(nodes6273);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8395 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3327 = mobl.loadingSpan();
    root8395.append(node3327);
    var list588;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList588 = function() {
      var subs__ = listSubs__;
      list588 = items.get();
      list588.list(function(results588) {
        node3327.empty();
        for(var i1461 = 0; i1461 < results588.length; i1461++) {
          (function() {
            var iternode588 = $("<span>");
            node3327.append(iternode588);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results588), i1461), "_1");it = mobl.ref(mobl.ref(mobl.ref(results588), i1461), "_2");
            var nodes6274 = $("<span>");
            iternode588.append(nodes6274);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root8396 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6275 = $("<span>");
              root8396.append(nodes6275);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root8397 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8397); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6275;
                nodes6275 = node.contents();
                oldNodes.replaceWith(nodes6275);
              }));
              callback(root8396); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6274;
              nodes6274 = node.contents();
              oldNodes.replaceWith(nodes6274);
            }));
            
            var oldNodes = iternode588;
            iternode588 = iternode588.contents();
            oldNodes.replaceWith(iternode588);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list588.addEventListener('change', function() { listSubs__.unsubscribe(); renderList588(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList588(true); }));
      });
    };
    renderList588();
    
    callback(root8395); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6273;
    nodes6273 = node.contents();
    oldNodes.replaceWith(nodes6273);
  }));
  callback(root8394); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root8398 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll4017) {
    coll4017 = coll4017.reverse();
    function processOne261() {
      var it;
      it = coll4017.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll4017.length > 0) processOne261(); else rest261();
      
    }
    function rest261() {
      var nodes6276 = $("<span>");
      root8398.append(nodes6276);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root8399 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp5699 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp5700 = mobl.ref(result__);
        
        var nodes6277 = $("<span>");
        root8399.append(nodes6277);
        subs__.addSub((ui.backButton)(tmp5700, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5699, function(_, callback) {
          var root8400 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8400); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6277;
          nodes6277 = node.contents();
          oldNodes.replaceWith(nodes6277);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll4016) {
                           coll4016 = coll4016.reverse();
                           function processOne260() {
                             var checked;var it;
                             var tmp5730 = coll4016.pop();
                             checked = tmp5730._1;it = tmp5730._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll4016.length > 0) processOne260(); else rest260();
                               
                             } else {
                               {
                                 
                                 if(coll4016.length > 0) processOne260(); else rest260();
                                 
                               }
                             }
                           }
                           function rest260() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll4016.length > 0) processOne260(); else rest260();
                         });
                         
                       };
        var tmp5701 = mobl.ref(result__);
        
        var nodes6278 = $("<span>");
        root8399.append(nodes6278);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5701, function(_, callback) {
          var root8401 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8401); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6278;
          nodes6278 = node.contents();
          oldNodes.replaceWith(nodes6278);
        }));
        callback(root8399); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6276;
        nodes6276 = node.contents();
        oldNodes.replaceWith(nodes6276);
      }));
      var nodes6279 = $("<span>");
      root8398.append(nodes6279);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root8402 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8402); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6279;
        nodes6279 = node.contents();
        oldNodes.replaceWith(nodes6279);
      }));
      callback(root8398); return subs__;
      
      
    }
    if(coll4017.length > 0) processOne261(); else rest261();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root8403 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes6280 = $("<span>");
  root8403.append(nodes6280);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8404 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8404); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6280;
    nodes6280 = node.contents();
    oldNodes.replaceWith(nodes6280);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp5702 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp5702.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp5702.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp5702.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp5702.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp5702.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes6281 = $("<span>");
  root8403.append(nodes6281);
  subs__.addSub((ui.masterDetail)(tmp5702, masterItem, detailItem, function(_, callback) {
    var root8405 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8405); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6281;
    nodes6281 = node.contents();
    oldNodes.replaceWith(nodes6281);
  }));
  callback(root8403); return subs__;
  
  
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
  var root8406 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes6282 = $("<span>");
  root8406.append(nodes6282);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8407 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3328 = mobl.loadingSpan();
    root8407.append(node3328);
    var list589;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList589 = function() {
      var subs__ = listSubs__;
      list589 = sections.get();
      list589.list(function(results589) {
        node3328.empty();
        for(var i1462 = 0; i1462 < results589.length; i1462++) {
          (function() {
            var iternode589 = $("<span>");
            node3328.append(iternode589);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results589), i1462), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results589), i1462), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp5704 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp5704.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp5704.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp5704.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp5704.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp5703 = mobl.ref(result__);
            
            var nodes6283 = $("<span>");
            iternode589.append(nodes6283);
            subs__.addSub((mobl.span)(tmp5704, mobl.ref(null), tmp5703, mobl.ref(null), function(_, callback) {
              var root8408 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6284 = $("<span>");
              root8408.append(nodes6284);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8409 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8409); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6284;
                nodes6284 = node.contents();
                oldNodes.replaceWith(nodes6284);
              }));
              callback(root8408); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6283;
              nodes6283 = node.contents();
              oldNodes.replaceWith(nodes6283);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp5705 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp5705.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp5705.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp5705.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp5705.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes6285 = $("<span>");
            iternode589.append(nodes6285);
            subs__.addSub((mobl.block)(tmp5705, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8410 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6286 = $("<span>");
              root8410.append(nodes6286);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1342();
              }));
              
              function renderControl1342() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root8411 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8411); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6286;
                  nodes6286 = node.contents();
                  oldNodes.replaceWith(nodes6286);
                }));
              }
              renderControl1342();
              callback(root8410); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6285;
              nodes6285 = node.contents();
              oldNodes.replaceWith(nodes6285);
            }));
            
            var oldNodes = iternode589;
            iternode589 = iternode589.contents();
            oldNodes.replaceWith(iternode589);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list589.addEventListener('change', function() { listSubs__.unsubscribe(); renderList589(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList589(true); }));
      });
    };
    renderList589();
    
    callback(root8407); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6282;
    nodes6282 = node.contents();
    oldNodes.replaceWith(nodes6282);
  }));
  callback(root8406); return subs__;
  
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
  var root8412 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3329 = $("<table>");
  
  var ref3303 = style;
  if(ref3303.get() !== null) {
    node3329.attr('class', ref3303.get());
    subs__.addSub(ref3303.addEventListener('change', function(_, ref, val) {
      node3329.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3303.rebind());
  
  var nodes6287 = $("<span>");
  node3329.append(nodes6287);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1343();
  }));
  
  function renderControl1343() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8413 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8413); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6287;
      nodes6287 = node.contents();
      oldNodes.replaceWith(nodes6287);
    }));
  }
  renderControl1343();
  root8412.append(node3329);
  callback(root8412); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root8414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3330 = $("<tr>");
  
  var ref3304 = style;
  if(ref3304.get() !== null) {
    node3330.attr('class', ref3304.get());
    subs__.addSub(ref3304.addEventListener('change', function(_, ref, val) {
      node3330.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3304.rebind());
  
  var nodes6288 = $("<span>");
  node3330.append(nodes6288);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1344();
  }));
  
  function renderControl1344() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8415 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8415); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6288;
      nodes6288 = node.contents();
      oldNodes.replaceWith(nodes6288);
    }));
  }
  renderControl1344();
  root8414.append(node3330);
  callback(root8414); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root8416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3331 = $("<td>");
  
  var ref3305 = width;
  if(ref3305.get() !== null) {
    node3331.attr('width', ref3305.get());
    subs__.addSub(ref3305.addEventListener('change', function(_, ref, val) {
      node3331.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3305.rebind());
  
  var ref3306 = style;
  if(ref3306.get() !== null) {
    node3331.attr('class', ref3306.get());
    subs__.addSub(ref3306.addEventListener('change', function(_, ref, val) {
      node3331.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3306.rebind());
  
  var nodes6289 = $("<span>");
  node3331.append(nodes6289);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1345();
  }));
  
  function renderControl1345() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8417 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8417); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6289;
      nodes6289 = node.contents();
      oldNodes.replaceWith(nodes6289);
    }));
  }
  renderControl1345();
  root8416.append(node3331);
  callback(root8416); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root8418 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3332 = $("<td>");
  
  var ref3307 = width;
  if(ref3307.get() !== null) {
    node3332.attr('width', ref3307.get());
    subs__.addSub(ref3307.addEventListener('change', function(_, ref, val) {
      node3332.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3307.rebind());
  
  var ref3308 = style;
  if(ref3308.get() !== null) {
    node3332.attr('class', ref3308.get());
    subs__.addSub(ref3308.addEventListener('change', function(_, ref, val) {
      node3332.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3308.rebind());
  
  var nodes6290 = $("<span>");
  node3332.append(nodes6290);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1346();
  }));
  
  function renderControl1346() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8419 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8419); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6290;
      nodes6290 = node.contents();
      oldNodes.replaceWith(nodes6290);
    }));
  }
  renderControl1346();
  root8418.append(node3332);
  callback(root8418); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root8420 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3333 = $("<td>");
  
  var ref3309 = width;
  if(ref3309.get() !== null) {
    node3333.attr('width', ref3309.get());
    subs__.addSub(ref3309.addEventListener('change', function(_, ref, val) {
      node3333.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3309.rebind());
  
  var ref3310 = style;
  if(ref3310.get() !== null) {
    node3333.attr('class', ref3310.get());
    subs__.addSub(ref3310.addEventListener('change', function(_, ref, val) {
      node3333.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3310.rebind());
  
  
  var node3334 = $("<strong>");
  
  var nodes6291 = $("<span>");
  node3334.append(nodes6291);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1347();
  }));
  
  function renderControl1347() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8421 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8421); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6291;
      nodes6291 = node.contents();
      oldNodes.replaceWith(nodes6291);
    }));
  }
  renderControl1347();
  node3333.append(node3334);
  root8420.append(node3333);
  callback(root8420); return subs__;
  
  
  
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
  items.list(function(coll4018) {
    coll4018 = coll4018.reverse();
    function processOne262() {
      var item;
      item = coll4018.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll4018.length > 0) processOne262(); else rest262();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll4018.length > 0) processOne262(); else rest262();
          
        }
      }
    }
    function rest262() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll4018.length > 0) processOne262(); else rest262();
  });
  
};

ui.current = mobl.ref(null);
ui.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp5732 = result__;
    var result__ = null;
    ui.current.set(result__);
    if(callback && callback.apply) callback(); return;
  });
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root8422 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3335 = $("<div>");
  node3335.attr('width', "100%");
  
  
  var node3336 = $("<div>");
  node3336.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
  
  var nodes6293 = $("<span>");
  node3336.append(nodes6293);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8424 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3341 = mobl.loadingSpan();
    root8424.append(node3341);
    var list590;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList590 = function() {
      var subs__ = listSubs__;
      list590 = items.get();
      list590.list(function(results590) {
        node3341.empty();
        for(var i1463 = 0; i1463 < results590.length; i1463++) {
          (function() {
            var iternode590 = $("<span>");
            node3341.append(iternode590);
            var it;
            it = mobl.ref(mobl.ref(results590), i1463);
            var result__ = it.get() == ui.current.get();
            var tmp5709 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp5709.set(it.get() == ui.current.get());
            }));
            subs__.addSub(ui.current.addEventListener('change', function() {
              tmp5709.set(it.get() == ui.current.get());
            }));
            
            
            var node3342 = $("<span>");
            iternode590.append(node3342);
            var condSubs812 = new mobl.CompSubscription();
            subs__.addSub(condSubs812);
            var oldValue812;
            var renderCond812 = function() {
              var value3316 = tmp5709.get();
              if(oldValue812 === value3316) return;
              oldValue812 = value3316;
              var subs__ = condSubs812;
              subs__.unsubscribe();
              node3342.empty();
              if(value3316) {
                var nodes6294 = $("<span>");
                node3342.append(nodes6294);
                subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8425 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp5735 = result__;
                    var tmp5706 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp5733 = result__;
                        var result__ = tmp5733;
                        tmp5706.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp5734 = result__;
                        var result__ = tmp5734;
                        tmp5706.set(result__);
                        
                      });
                    }));
                    
                    var nodes6295 = $("<span>");
                    root8425.append(nodes6295);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1349();
                    }));
                    
                    function renderControl1349() {
                      subs__.addSub((masterItem.get())(it, tmp5706, function(elements, callback) {
                        var root8426 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root8426); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6295;
                        nodes6295 = node.contents();
                        oldNodes.replaceWith(nodes6295);
                      }));
                    }
                    renderControl1349();
                    callback(root8425); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6294;
                  nodes6294 = node.contents();
                  oldNodes.replaceWith(nodes6294);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 ui.current.set(result__);
                                 var result__ = ui.scrollUp();
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5708 = mobl.ref(result__);
                
                var nodes6296 = $("<span>");
                node3342.append(nodes6296);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5708, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root8427 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp5738 = result__;
                    var tmp5707 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp5736 = result__;
                        var result__ = tmp5736;
                        tmp5707.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp5737 = result__;
                        var result__ = tmp5737;
                        tmp5707.set(result__);
                        
                      });
                    }));
                    
                    var nodes6297 = $("<span>");
                    root8427.append(nodes6297);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1350();
                    }));
                    
                    function renderControl1350() {
                      subs__.addSub((masterItem.get())(it, tmp5707, function(elements, callback) {
                        var root8428 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root8428); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6297;
                        nodes6297 = node.contents();
                        oldNodes.replaceWith(nodes6297);
                      }));
                    }
                    renderControl1350();
                    callback(root8427); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6296;
                  nodes6296 = node.contents();
                  oldNodes.replaceWith(nodes6296);
                }));
                
                
              }
            };
            renderCond812();
            subs__.addSub(tmp5709.addEventListener('change', function() {
              renderCond812();
            }));
            
            
            var oldNodes = iternode590;
            iternode590 = iternode590.contents();
            oldNodes.replaceWith(iternode590);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list590.addEventListener('change', function() { listSubs__.unsubscribe(); renderList590(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList590(true); }));
      });
    };
    renderList590();
    
    callback(root8424); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6293;
    nodes6293 = node.contents();
    oldNodes.replaceWith(nodes6293);
  }));
  node3335.append(node3336);
  
  var node3337 = $("<div>");
  node3337.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
  
  
  var node3338 = $("<span>");
  node3337.append(node3338);
  var condSubs811 = new mobl.CompSubscription();
  subs__.addSub(condSubs811);
  var oldValue811;
  var renderCond811 = function() {
    var value3315 = ui.current.get();
    if(oldValue811 === value3315) return;
    oldValue811 = value3315;
    var subs__ = condSubs811;
    subs__.unsubscribe();
    node3338.empty();
    if(value3315) {
      var nodes6292 = $("<span>");
      node3338.append(nodes6292);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl1348();
      }));
      
      function renderControl1348() {
        subs__.addSub((detail.get())(ui.current, function(elements, callback) {
          var root8423 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8423); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6292;
          nodes6292 = node.contents();
          oldNodes.replaceWith(nodes6292);
        }));
      }
      renderControl1348();
      
      
    } else {
      
      var node3339 = $("<div>");
      node3339.attr('style', "padding:20px");
      
      
      var node3340 = $("<h2>");
      
      
      node3340.append("Add more questions.");
      node3339.append(node3340);
      node3338.append(node3339);
      
      
      
    }
  };
  renderCond811();
  subs__.addSub(ui.current.addEventListener('change', function() {
    renderCond811();
  }));
  
  node3335.append(node3337);
  root8422.append(node3335);
  callback(root8422); return subs__;
  
  
  
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
