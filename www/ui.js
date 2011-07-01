mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node299 = $("<span>");
  root1367.append(node299);
  var condSubs64 = new mobl.CompSubscription();
  subs__.addSub(condSubs64);
  var oldValue64;
  var renderCond64 = function() {
    var value168 = value.get();
    if(oldValue64 === value168) return;
    oldValue64 = value168;
    var subs__ = condSubs64;
    subs__.unsubscribe();
    node299.empty();
    if(value168) {
      var nodes1104 = $("<span>");
      node299.append(nodes1104);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl129();
      }));
      
      function renderControl129() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1368 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1368); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1104;
          nodes1104 = node.contents();
          oldNodes.replaceWith(nodes1104);
        }));
      }
      renderControl129();
      
      
    } else {
      var nodes1105 = $("<span>");
      node299.append(nodes1105);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1369 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1106 = $("<span>");
        root1369.append(nodes1106);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1370 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1370); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1106;
          nodes1106 = node.contents();
          oldNodes.replaceWith(nodes1106);
        }));
        var nodes1107 = $("<span>");
        root1369.append(nodes1107);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1371 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1371); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1107;
          nodes1107 = node.contents();
          oldNodes.replaceWith(nodes1107);
        }));
        callback(root1369); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1105;
        nodes1105 = node.contents();
        oldNodes.replaceWith(nodes1105);
      }));
      
      
    }
  };
  renderCond64();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond64();
  }));
  
  callback(root1367); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1372 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node300 = $("<div>");
  
  var ref313 = mobl.ref(ui.headerStyle);
  if(ref313.get() !== null) {
    node300.attr('class', ref313.get());
    subs__.addSub(ref313.addEventListener('change', function(_, ref, val) {
      node300.attr('class', val);
    }));
    
  }
  subs__.addSub(ref313.rebind());
  
  var val150 = onclick.get();
  if(val150 !== null) {
    subs__.addSub(mobl.domBind(node300, 'tap', val150));
  }
  
  var ref314 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref314.get() !== null) {
    node300.attr('style', ref314.get());
    subs__.addSub(ref314.addEventListener('change', function(_, ref, val) {
      node300.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node300.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref314.rebind());
  
  
  var node303 = $("<div>");
  
  var ref312 = mobl.ref(ui.headerContainerStyle);
  if(ref312.get() !== null) {
    node303.attr('class', ref312.get());
    subs__.addSub(ref312.addEventListener('change', function(_, ref, val) {
      node303.attr('class', val);
    }));
    
  }
  subs__.addSub(ref312.rebind());
  
  
  var node304 = $("<div>");
  
  var ref310 = text;
  node304.text(""+ref310.get());
  var ignore55 = false;
  subs__.addSub(ref310.addEventListener('change', function(_, ref, val) {
    if(ignore55) return;
    node304.text(""+val);
  }));
  subs__.addSub(ref310.rebind());
  
  
  var ref311 = mobl.ref(ui.headerTextStyle);
  if(ref311.get() !== null) {
    node304.attr('class', ref311.get());
    subs__.addSub(ref311.addEventListener('change', function(_, ref, val) {
      node304.attr('class', val);
    }));
    
  }
  subs__.addSub(ref311.rebind());
  
  node303.append(node304);
  node300.append(node303);
  var nodes1108 = $("<span>");
  node300.append(nodes1108);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl130();
  }));
  
  function renderControl130() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1373 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1373); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1108;
      nodes1108 = node.contents();
      oldNodes.replaceWith(nodes1108);
    }));
  }
  renderControl130();
  root1372.append(node300);
  
  var node301 = $("<span>");
  root1372.append(node301);
  var condSubs65 = new mobl.CompSubscription();
  subs__.addSub(condSubs65);
  var oldValue65;
  var renderCond65 = function() {
    var value169 = fixedPosition.get();
    if(oldValue65 === value169) return;
    oldValue65 = value169;
    var subs__ = condSubs65;
    subs__.unsubscribe();
    node301.empty();
    if(value169) {
      
      var node302 = $("<div>");
      node302.attr('id', "hello");
      node302.attr('style', "height: 2.9em;");
      
      node301.append(node302);
      
      
    } else {
      
    }
  };
  renderCond65();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond65();
  }));
  
  callback(root1372); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref315 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref315.get() !== null) {
    sp.attr('class', ref315.get());
    subs__.addSub(ref315.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref315.rebind());
  
  var val151 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val151 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val151));
  }
  
  var val152 = function(event, callback) {
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
  if(val152 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val152));
  }
  
  var val153 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after36(result__) {
                    var tmp1084 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after36);if(result__ !== undefined) after36(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val153 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val153));
  }
  
  var val154 = function(event, callback) {
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
  if(val154 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val154));
  }
  
  var ref316 = text;
  sp.text(""+ref316.get());
  var ignore56 = false;
  subs__.addSub(ref316.addEventListener('change', function(_, ref, val) {
    if(ignore56) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref316.rebind());
  
  
  root1374.append(sp);
  callback(root1374); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1109 = $("<span>");
  root1375.append(nodes1109);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1376 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1376); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1109;
    nodes1109 = node.contents();
    oldNodes.replaceWith(nodes1109);
  }));
  callback(root1375); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1377 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1110 = $("<span>");
  root1377.append(nodes1110);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1378 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1378); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1110;
    nodes1110 = node.contents();
    oldNodes.replaceWith(nodes1110);
  }));
  callback(root1377); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node305 = $("<ul>");
  
  var ref317 = mobl.ref(ui.groupStyle);
  if(ref317.get() !== null) {
    node305.attr('class', ref317.get());
    subs__.addSub(ref317.addEventListener('change', function(_, ref, val) {
      node305.attr('class', val);
    }));
    
  }
  subs__.addSub(ref317.rebind());
  
  var nodes1111 = $("<span>");
  node305.append(nodes1111);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl131();
  }));
  
  function renderControl131() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1380); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1111;
      nodes1111 = node.contents();
      oldNodes.replaceWith(nodes1111);
    }));
  }
  renderControl131();
  root1379.append(node305);
  callback(root1379); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1381 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node306 = $("<img>");
  
  var ref318 = url;
  if(ref318.get() !== null) {
    node306.attr('src', ref318.get());
    subs__.addSub(ref318.addEventListener('change', function(_, ref, val) {
      node306.attr('src', val);
    }));
    
  }
  subs__.addSub(ref318.rebind());
  
  var ref319 = width;
  if(ref319.get() !== null) {
    node306.attr('width', ref319.get());
    subs__.addSub(ref319.addEventListener('change', function(_, ref, val) {
      node306.attr('width', val);
    }));
    
  }
  subs__.addSub(ref319.rebind());
  
  var ref320 = height;
  if(ref320.get() !== null) {
    node306.attr('height', ref320.get());
    subs__.addSub(ref320.addEventListener('change', function(_, ref, val) {
      node306.attr('height', val);
    }));
    
  }
  subs__.addSub(ref320.rebind());
  
  var ref321 = style;
  if(ref321.get() !== null) {
    node306.attr('class', ref321.get());
    subs__.addSub(ref321.addEventListener('change', function(_, ref, val) {
      node306.attr('class', val);
    }));
    
  }
  subs__.addSub(ref321.rebind());
  
  var val155 = onclick.get();
  if(val155 !== null) {
    subs__.addSub(mobl.domBind(node306, 'tap', val155));
  }
  
  var ref322 = valign;
  if(ref322.get() !== null) {
    node306.attr('valign', ref322.get());
    subs__.addSub(ref322.addEventListener('change', function(_, ref, val) {
      node306.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref322.rebind());
  
  var ref323 = align;
  if(ref323.get() !== null) {
    node306.attr('align', ref323.get());
    subs__.addSub(ref323.addEventListener('change', function(_, ref, val) {
      node306.attr('align', val);
    }));
    
  }
  subs__.addSub(ref323.rebind());
  
  root1381.append(node306);
  callback(root1381); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1382 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref324 = mobl.ref(ui.itemStyle);
  if(ref324.get() !== null) {
    el.attr('class', ref324.get());
    subs__.addSub(ref324.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref324.rebind());
  
  var ref325 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref325.get() !== null) {
    el.attr('class', ref325.get());
    subs__.addSub(ref325.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref325.rebind());
  
  var val156 = onswipe.get();
  if(val156 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val156));
  }
  
  var val157 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1085 = result__;
                                           function after37(result__) {
                                             var tmp1086 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after37);if(result__ !== undefined) after37(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1087 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val157 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val157));
  }
  
  var nodes1112 = $("<span>");
  el.append(nodes1112);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl132();
  }));
  
  function renderControl132() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1383 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1383); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1112;
      nodes1112 = node.contents();
      oldNodes.replaceWith(nodes1112);
    }));
  }
  renderControl132();
  root1382.append(el);
  callback(root1382); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node307 = $("<input>");
  node307.attr('type', "checkbox");
  
  var ref327 = b;
  node307.attr('checked', !!ref327.get());
  subs__.addSub(ref327.addEventListener('change', function(_, ref, val) {
    if(ref === ref327) node307.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node307, 'change', function() {
    b.set(!!node307.attr('checked'));
  }));
  
  var val159 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val159 !== null) {
    subs__.addSub(mobl.domBind(node307, 'tap', val159));
  }
  
  var val160 = onchange.get();
  if(val160 !== null) {
    subs__.addSub(mobl.domBind(node307, 'change', val160));
  }
  
  root1384.append(node307);
  
  root1384.append(" ");
  
  var node308 = $("<span>");
  
  var ref326 = label;
  node308.text(""+ref326.get());
  var ignore57 = false;
  subs__.addSub(ref326.addEventListener('change', function(_, ref, val) {
    if(ignore57) return;
    node308.text(""+val);
  }));
  subs__.addSub(ref326.rebind());
  
  
  var val158 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after38(result__) {
                    var tmp1088 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after38);if(result__ !== undefined) after38(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val158 !== null) {
    subs__.addSub(mobl.domBind(node308, 'tap', val158));
  }
  
  root1384.append(node308);
  callback(root1384); return subs__;
  
  
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
  var root1385 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node309 = $("<span>");
  root1385.append(node309);
  var condSubs66 = new mobl.CompSubscription();
  subs__.addSub(condSubs66);
  var oldValue66;
  var renderCond66 = function() {
    var value170 = label.get();
    if(oldValue66 === value170) return;
    oldValue66 = value170;
    var subs__ = condSubs66;
    subs__.unsubscribe();
    node309.empty();
    if(value170) {
      var nodes1113 = $("<span>");
      node309.append(nodes1113);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1386 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1386); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1113;
        nodes1113 = node.contents();
        oldNodes.replaceWith(nodes1113);
      }));
      
      
    } else {
      
    }
  };
  renderCond66();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond66();
  }));
  
  
  var node310 = $("<span>");
  root1385.append(node310);
  var condSubs67 = new mobl.CompSubscription();
  subs__.addSub(condSubs67);
  var oldValue67;
  var renderCond67 = function() {
    var value171 = validator.get();
    if(oldValue67 === value171) return;
    oldValue67 = value171;
    var subs__ = condSubs67;
    subs__.unsubscribe();
    node310.empty();
    if(value171) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after42(result__) {
        var tmp1089 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1090 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node311 = $("<input>");
        
        var ref328 = inputType;
        if(ref328.get() !== null) {
          node311.attr('type', ref328.get());
          subs__.addSub(ref328.addEventListener('change', function(_, ref, val) {
            node311.attr('type', val);
          }));
          
        }
        subs__.addSub(ref328.rebind());
        
        var ref329 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref329.get() !== null) {
          node311.attr('class', ref329.get());
          subs__.addSub(ref329.addEventListener('change', function(_, ref, val) {
            node311.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node311.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node311.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node311.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref329.rebind());
        
        var ref330 = placeholder;
        if(ref330.get() !== null) {
          node311.attr('placeholder', ref330.get());
          subs__.addSub(ref330.addEventListener('change', function(_, ref, val) {
            node311.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref330.rebind());
        
        var ref331 = temp;
        node311.val(""+ref331.get());
        var ignore58 = false;
        subs__.addSub(ref331.addEventListener('change', function(_, ref, val) {
          if(ignore58) return;
          node311.val(""+val);
        }));
        subs__.addSub(ref331.rebind());
        
        subs__.addSub(mobl.domBind(node311, 'keyup change', function() {
          ignore58 = true;
          temp.set(mobl.stringTomobl__String(node311.val()));
          ignore58 = false;
        }));
        
        
        var val161 = onchange.get();
        if(val161 !== null) {
          subs__.addSub(mobl.domBind(node311, 'change', val161));
        }
        
        var val162 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after39(result__) {
                          var tmp1091 = result__;
                          function after40(result__) {
                            var tmp1092 = result__;
                            var result__ = tmp1092;
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
                          var result__ = validator.get()(temp.get(), after40);if(result__ !== undefined) after40(result__);
                        }
                        var result__ = onkeyup.get()(event, after39);if(result__ !== undefined) after39(result__);
                      } else {
                        {
                          function after41(result__) {
                            var tmp1092 = result__;
                            var result__ = tmp1092;
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
                          var result__ = validator.get()(temp.get(), after41);if(result__ !== undefined) after41(result__);
                        }
                      }
                    };
        if(val162 !== null) {
          subs__.addSub(mobl.domBind(node311, 'keyup', val162));
        }
        
        var val163 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val163 !== null) {
          subs__.addSub(mobl.domBind(node311, 'blur', val163));
        }
        
        node310.append(node311);
        var nodes1114 = $("<span>");
        node310.append(nodes1114);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1387 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1387); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1114;
          nodes1114 = node.contents();
          oldNodes.replaceWith(nodes1114);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after42);if(result__ !== undefined) after42(result__);
    } else {
      
      var node312 = $("<input>");
      
      var ref332 = inputType;
      if(ref332.get() !== null) {
        node312.attr('type', ref332.get());
        subs__.addSub(ref332.addEventListener('change', function(_, ref, val) {
          node312.attr('type', val);
        }));
        
      }
      subs__.addSub(ref332.rebind());
      
      var ref333 = style;
      if(ref333.get() !== null) {
        node312.attr('class', ref333.get());
        subs__.addSub(ref333.addEventListener('change', function(_, ref, val) {
          node312.attr('class', val);
        }));
        
      }
      subs__.addSub(ref333.rebind());
      
      var ref334 = placeholder;
      if(ref334.get() !== null) {
        node312.attr('placeholder', ref334.get());
        subs__.addSub(ref334.addEventListener('change', function(_, ref, val) {
          node312.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref334.rebind());
      
      var ref335 = s;
      node312.val(""+ref335.get());
      var ignore59 = false;
      subs__.addSub(ref335.addEventListener('change', function(_, ref, val) {
        if(ignore59) return;
        node312.val(""+val);
      }));
      subs__.addSub(ref335.rebind());
      
      subs__.addSub(mobl.domBind(node312, 'keyup change', function() {
        ignore59 = true;
        s.set(mobl.stringTomobl__String(node312.val()));
        ignore59 = false;
      }));
      
      
      var val164 = onchange.get();
      if(val164 !== null) {
        subs__.addSub(mobl.domBind(node312, 'change', val164));
      }
      
      var val165 = onkeyup.get();
      if(val165 !== null) {
        subs__.addSub(mobl.domBind(node312, 'keyup', val165));
      }
      
      var val166 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val166 !== null) {
        subs__.addSub(mobl.domBind(node312, 'blur', val166));
      }
      
      node310.append(node312);
      
      
    }
  };
  renderCond67();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond67();
  }));
  
  callback(root1385); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1388 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1115 = $("<span>");
  root1388.append(nodes1115);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1389 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1389); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1115;
    nodes1115 = node.contents();
    oldNodes.replaceWith(nodes1115);
  }));
  callback(root1388); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1116 = $("<span>");
  root1390.append(nodes1116);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1391 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1391); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1116;
    nodes1116 = node.contents();
    oldNodes.replaceWith(nodes1116);
  }));
  callback(root1390); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node313 = $("<span>");
  root1392.append(node313);
  var condSubs68 = new mobl.CompSubscription();
  subs__.addSub(condSubs68);
  var oldValue68;
  var renderCond68 = function() {
    var value172 = label.get();
    if(oldValue68 === value172) return;
    oldValue68 = value172;
    var subs__ = condSubs68;
    subs__.unsubscribe();
    node313.empty();
    if(value172) {
      var nodes1117 = $("<span>");
      node313.append(nodes1117);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1393); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1117;
        nodes1117 = node.contents();
        oldNodes.replaceWith(nodes1117);
      }));
      
      
    } else {
      
    }
  };
  renderCond68();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond68();
  }));
  
  
  var node314 = $("<input>");
  node314.attr('type', "range");
  
  var ref336 = n;
  node314.val(""+ref336.get());
  var ignore60 = false;
  subs__.addSub(ref336.addEventListener('change', function(_, ref, val) {
    if(ignore60) return;
    node314.val(""+val);
  }));
  subs__.addSub(ref336.rebind());
  
  subs__.addSub(mobl.domBind(node314, 'keyup change', function() {
    ignore60 = true;
    n.set(mobl.stringTomobl__Num(node314.val()));
    ignore60 = false;
  }));
  
  
  var ref337 = min;
  if(ref337.get() !== null) {
    node314.attr('min', ref337.get());
    subs__.addSub(ref337.addEventListener('change', function(_, ref, val) {
      node314.attr('min', val);
    }));
    
  }
  subs__.addSub(ref337.rebind());
  
  var ref338 = max;
  if(ref338.get() !== null) {
    node314.attr('max', ref338.get());
    subs__.addSub(ref338.addEventListener('change', function(_, ref, val) {
      node314.attr('max', val);
    }));
    
  }
  subs__.addSub(ref338.rebind());
  
  var ref339 = step;
  if(ref339.get() !== null) {
    node314.attr('step', ref339.get());
    subs__.addSub(ref339.addEventListener('change', function(_, ref, val) {
      node314.attr('step', val);
    }));
    
  }
  subs__.addSub(ref339.rebind());
  node314.attr('style', "width: 99%;");
  
  var val167 = onchange.get();
  if(val167 !== null) {
    subs__.addSub(mobl.domBind(node314, 'change', val167));
  }
  
  var val168 = onkeyup.get();
  if(val168 !== null) {
    subs__.addSub(mobl.domBind(node314, 'keyup', val168));
  }
  
  var ref340 = placeholder;
  if(ref340.get() !== null) {
    node314.attr('placeholder', ref340.get());
    subs__.addSub(ref340.addEventListener('change', function(_, ref, val) {
      node314.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref340.rebind());
  
  root1392.append(node314);
  callback(root1392); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1394 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after43(result__) {
      var tmp1093 = result__;
      var result__ = tmp1093;
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
    var result__ = validator.get()(n2, after43);if(result__ !== undefined) after43(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1118 = $("<span>");
  root1394.append(nodes1118);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1395 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1395); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1118;
    nodes1118 = node.contents();
    oldNodes.replaceWith(nodes1118);
  }));
  callback(root1394); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1396 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node315 = $("<span>");
  root1396.append(node315);
  var condSubs69 = new mobl.CompSubscription();
  subs__.addSub(condSubs69);
  var oldValue69;
  var renderCond69 = function() {
    var value173 = label.get();
    if(oldValue69 === value173) return;
    oldValue69 = value173;
    var subs__ = condSubs69;
    subs__.unsubscribe();
    node315.empty();
    if(value173) {
      
      var node316 = $("<span>");
      node316.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref344 = label;
      node316.text(""+ref344.get());
      var ignore62 = false;
      subs__.addSub(ref344.addEventListener('change', function(_, ref, val) {
        if(ignore62) return;
        node316.text(""+val);
      }));
      subs__.addSub(ref344.rebind());
      
      
      node315.append(node316);
      
      var node317 = $("<span>");
      node317.attr('style', "float: left");
      
      
      var node318 = $("<input>");
      node318.attr('type', "password");
      
      var ref341 = style;
      if(ref341.get() !== null) {
        node318.attr('class', ref341.get());
        subs__.addSub(ref341.addEventListener('change', function(_, ref, val) {
          node318.attr('class', val);
        }));
        
      }
      subs__.addSub(ref341.rebind());
      
      var ref342 = placeholder;
      if(ref342.get() !== null) {
        node318.attr('placeholder', ref342.get());
        subs__.addSub(ref342.addEventListener('change', function(_, ref, val) {
          node318.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref342.rebind());
      
      var ref343 = s;
      node318.val(""+ref343.get());
      var ignore61 = false;
      subs__.addSub(ref343.addEventListener('change', function(_, ref, val) {
        if(ignore61) return;
        node318.val(""+val);
      }));
      subs__.addSub(ref343.rebind());
      
      subs__.addSub(mobl.domBind(node318, 'keyup change', function() {
        ignore61 = true;
        s.set(mobl.stringTomobl__String(node318.val()));
        ignore61 = false;
      }));
      
      
      var val169 = onchange.get();
      if(val169 !== null) {
        subs__.addSub(mobl.domBind(node318, 'change', val169));
      }
      
      var val170 = onkeyup.get();
      if(val170 !== null) {
        subs__.addSub(mobl.domBind(node318, 'keyup', val170));
      }
      
      var val171 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val171 !== null) {
        subs__.addSub(mobl.domBind(node318, 'blur', val171));
      }
      
      node317.append(node318);
      node315.append(node317);
      
      
      
      
    } else {
      
      var node319 = $("<input>");
      node319.attr('type', "password");
      
      var ref345 = style;
      if(ref345.get() !== null) {
        node319.attr('class', ref345.get());
        subs__.addSub(ref345.addEventListener('change', function(_, ref, val) {
          node319.attr('class', val);
        }));
        
      }
      subs__.addSub(ref345.rebind());
      
      var ref346 = placeholder;
      if(ref346.get() !== null) {
        node319.attr('placeholder', ref346.get());
        subs__.addSub(ref346.addEventListener('change', function(_, ref, val) {
          node319.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref346.rebind());
      
      var ref347 = s;
      node319.val(""+ref347.get());
      var ignore63 = false;
      subs__.addSub(ref347.addEventListener('change', function(_, ref, val) {
        if(ignore63) return;
        node319.val(""+val);
      }));
      subs__.addSub(ref347.rebind());
      
      subs__.addSub(mobl.domBind(node319, 'keyup change', function() {
        ignore63 = true;
        s.set(mobl.stringTomobl__String(node319.val()));
        ignore63 = false;
      }));
      
      
      var val172 = onchange.get();
      if(val172 !== null) {
        subs__.addSub(mobl.domBind(node319, 'change', val172));
      }
      
      var val173 = onkeyup.get();
      if(val173 !== null) {
        subs__.addSub(mobl.domBind(node319, 'keyup', val173));
      }
      
      var val174 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val174 !== null) {
        subs__.addSub(mobl.domBind(node319, 'blur', val174));
      }
      
      node315.append(node319);
      
      
    }
  };
  renderCond69();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond69();
  }));
  
  callback(root1396); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1397 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref352 = style;
  if(ref352.get() !== null) {
    sel.attr('class', ref352.get());
    subs__.addSub(ref352.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref352.rebind());
  
  var val175 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after44(result__) {
                    var tmp1095 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after44);if(result__ !== undefined) after44(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val175 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val175));
  }
  
  
  var node320 = mobl.loadingSpan();
  sel.append(node320);
  var list44;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList44 = function() {
    var subs__ = listSubs__;
    list44 = options.get();
    list44.list(function(results44) {
      node320.empty();
      for(var i110 = 0; i110 < results44.length; i110++) {
        (function() {
          var iternode44 = $("<span>");
          node320.append(iternode44);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results44), i110), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results44), i110), "_2");
          
          var node321 = $("<option>");
          
          var ref348 = optionDescription;
          node321.text(""+ref348.get());
          var ignore64 = false;
          subs__.addSub(ref348.addEventListener('change', function(_, ref, val) {
            if(ignore64) return;
            node321.text(""+val);
          }));
          subs__.addSub(ref348.rebind());
          
          
          var ref349 = optionStyle;
          if(ref349.get() !== null) {
            node321.attr('class', ref349.get());
            subs__.addSub(ref349.addEventListener('change', function(_, ref, val) {
              node321.attr('class', val);
            }));
            
          }
          subs__.addSub(ref349.rebind());
          
          var ref350 = optionValue;
          if(ref350.get() !== null) {
            node321.attr('value', ref350.get());
            subs__.addSub(ref350.addEventListener('change', function(_, ref, val) {
              node321.attr('value', val);
            }));
            
          }
          subs__.addSub(ref350.rebind());
          
          var ref351 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref351.get() !== null) {
            node321.attr('selected', ref351.get());
            subs__.addSub(ref351.addEventListener('change', function(_, ref, val) {
              node321.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node321.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node321.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref351.rebind());
          
          iternode44.append(node321);
          
          var oldNodes = iternode44;
          iternode44 = iternode44.contents();
          oldNodes.replaceWith(iternode44);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list44.addEventListener('change', function() { listSubs__.unsubscribe(); renderList44(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList44(true); }));
    });
  };
  renderList44();
  
  root1397.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1397); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1398 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1119 = $("<span>");
    root1398.append(nodes1119);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1399 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node322 = mobl.loadingSpan();
      root1399.append(node322);
      var list45;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList45 = function() {
        var subs__ = listSubs__;
        list45 = tabs.get();
        list45.list(function(results45) {
          node322.empty();
          for(var i111 = 0; i111 < results45.length; i111++) {
            (function() {
              var iternode45 = $("<span>");
              node322.append(iternode45);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results45), i111), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results45), i111), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results45), i111), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp1050 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1050.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1050.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp1050.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp1050.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp1049 = mobl.ref(result__);
              
              var nodes1120 = $("<span>");
              iternode45.append(nodes1120);
              subs__.addSub((mobl.span)(tmp1050, mobl.ref(null), tmp1049, mobl.ref(null), function(_, callback) {
                var root1400 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1121 = $("<span>");
                root1400.append(nodes1121);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1401 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1401); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1121;
                  nodes1121 = node.contents();
                  oldNodes.replaceWith(nodes1121);
                }));
                callback(root1400); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1120;
                nodes1120 = node.contents();
                oldNodes.replaceWith(nodes1120);
              }));
              
              var oldNodes = iternode45;
              iternode45 = iternode45.contents();
              oldNodes.replaceWith(iternode45);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list45.addEventListener('change', function() { listSubs__.unsubscribe(); renderList45(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList45(true); }));
        });
      };
      renderList45();
      
      callback(root1399); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1119;
      nodes1119 = node.contents();
      oldNodes.replaceWith(nodes1119);
    }));
    
    var node323 = mobl.loadingSpan();
    root1398.append(node323);
    var list46;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList46 = function() {
      var subs__ = listSubs__;
      list46 = tabs.get();
      list46.list(function(results46) {
        node323.empty();
        for(var i112 = 0; i112 < results46.length; i112++) {
          (function() {
            var iternode46 = $("<span>");
            node323.append(iternode46);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results46), i112), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results46), i112), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results46), i112), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp1051 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp1051.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1051.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp1051.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp1051.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1122 = $("<span>");
            iternode46.append(nodes1122);
            subs__.addSub((mobl.block)(tmp1051, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1402 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1123 = $("<span>");
              root1402.append(nodes1123);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1403 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1124 = $("<span>");
                root1403.append(nodes1124);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl133();
                }));
                
                function renderControl133() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1404 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1404); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1124;
                    nodes1124 = node.contents();
                    oldNodes.replaceWith(nodes1124);
                  }));
                }
                renderControl133();
                callback(root1403); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1123;
                nodes1123 = node.contents();
                oldNodes.replaceWith(nodes1123);
              }));
              callback(root1402); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1122;
              nodes1122 = node.contents();
              oldNodes.replaceWith(nodes1122);
            }));
            
            var oldNodes = iternode46;
            iternode46 = iternode46.contents();
            oldNodes.replaceWith(iternode46);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list46.addEventListener('change', function() { listSubs__.unsubscribe(); renderList46(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList46(true); }));
      });
    };
    renderList46();
    
    callback(root1398); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1119 = $("<span>");
      root1398.append(nodes1119);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1399 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node322 = mobl.loadingSpan();
        root1399.append(node322);
        var list45;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList45 = function() {
          var subs__ = listSubs__;
          list45 = tabs.get();
          list45.list(function(results45) {
            node322.empty();
            for(var i111 = 0; i111 < results45.length; i111++) {
              (function() {
                var iternode45 = $("<span>");
                node322.append(iternode45);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results45), i111), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results45), i111), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results45), i111), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp1050 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp1050.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp1050.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp1050.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp1050.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1049 = mobl.ref(result__);
                
                var nodes1120 = $("<span>");
                iternode45.append(nodes1120);
                subs__.addSub((mobl.span)(tmp1050, mobl.ref(null), tmp1049, mobl.ref(null), function(_, callback) {
                  var root1400 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1121 = $("<span>");
                  root1400.append(nodes1121);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1401 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1401); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1121;
                    nodes1121 = node.contents();
                    oldNodes.replaceWith(nodes1121);
                  }));
                  callback(root1400); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1120;
                  nodes1120 = node.contents();
                  oldNodes.replaceWith(nodes1120);
                }));
                
                var oldNodes = iternode45;
                iternode45 = iternode45.contents();
                oldNodes.replaceWith(iternode45);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list45.addEventListener('change', function() { listSubs__.unsubscribe(); renderList45(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList45(true); }));
          });
        };
        renderList45();
        
        callback(root1399); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1119;
        nodes1119 = node.contents();
        oldNodes.replaceWith(nodes1119);
      }));
      
      var node323 = mobl.loadingSpan();
      root1398.append(node323);
      var list46;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList46 = function() {
        var subs__ = listSubs__;
        list46 = tabs.get();
        list46.list(function(results46) {
          node323.empty();
          for(var i112 = 0; i112 < results46.length; i112++) {
            (function() {
              var iternode46 = $("<span>");
              node323.append(iternode46);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results46), i112), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results46), i112), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results46), i112), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp1051 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1051.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1051.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp1051.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp1051.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1122 = $("<span>");
              iternode46.append(nodes1122);
              subs__.addSub((mobl.block)(tmp1051, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1402 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1123 = $("<span>");
                root1402.append(nodes1123);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1403 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1124 = $("<span>");
                  root1403.append(nodes1124);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl133();
                  }));
                  
                  function renderControl133() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1404 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1404); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1124;
                      nodes1124 = node.contents();
                      oldNodes.replaceWith(nodes1124);
                    }));
                  }
                  renderControl133();
                  callback(root1403); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1123;
                  nodes1123 = node.contents();
                  oldNodes.replaceWith(nodes1123);
                }));
                callback(root1402); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1122;
                nodes1122 = node.contents();
                oldNodes.replaceWith(nodes1122);
              }));
              
              var oldNodes = iternode46;
              iternode46 = iternode46.contents();
              oldNodes.replaceWith(iternode46);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list46.addEventListener('change', function() { listSubs__.unsubscribe(); renderList46(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList46(true); }));
        });
      };
      renderList46();
      
      callback(root1398); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1405 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node324 = $("<div>");
  
  var ref356 = mobl.ref(ui.searchboxStyle);
  if(ref356.get() !== null) {
    node324.attr('class', ref356.get());
    subs__.addSub(ref356.addEventListener('change', function(_, ref, val) {
      node324.attr('class', val);
    }));
    
  }
  subs__.addSub(ref356.rebind());
  
  
  var node325 = $("<input>");
  node325.attr('type', "search");
  
  var ref353 = mobl.ref(ui.searchBoxInputStyle);
  if(ref353.get() !== null) {
    node325.attr('class', ref353.get());
    subs__.addSub(ref353.addEventListener('change', function(_, ref, val) {
      node325.attr('class', val);
    }));
    
  }
  subs__.addSub(ref353.rebind());
  
  var ref354 = placeholder;
  if(ref354.get() !== null) {
    node325.attr('placeholder', ref354.get());
    subs__.addSub(ref354.addEventListener('change', function(_, ref, val) {
      node325.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref354.rebind());
  
  var ref355 = s;
  node325.val(""+ref355.get());
  var ignore65 = false;
  subs__.addSub(ref355.addEventListener('change', function(_, ref, val) {
    if(ignore65) return;
    node325.val(""+val);
  }));
  subs__.addSub(ref355.rebind());
  
  subs__.addSub(mobl.domBind(node325, 'keyup change', function() {
    ignore65 = true;
    s.set(mobl.stringTomobl__String(node325.val()));
    ignore65 = false;
  }));
  
  
  var val176 = onsearch.get();
  if(val176 !== null) {
    subs__.addSub(mobl.domBind(node325, 'change', val176));
  }
  
  var val177 = onkeyup.get();
  if(val177 !== null) {
    subs__.addSub(mobl.domBind(node325, 'keyup', val177));
  }
  node325.attr('autocorrect', false);
  node325.attr('autocapitalize', false);
  node325.attr('autocomplete', false);
  
  node324.append(node325);
  root1405.append(node324);
  callback(root1405); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1406 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref357 = mobl.ref(ui.contextMenuStyle);
  if(ref357.get() !== null) {
    menu.attr('class', ref357.get());
    subs__.addSub(ref357.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref357.rebind());
  
  var nodes1125 = $("<span>");
  menu.append(nodes1125);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl134();
  }));
  
  function renderControl134() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1407 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1407); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1125;
      nodes1125 = node.contents();
      oldNodes.replaceWith(nodes1125);
    }));
  }
  renderControl134();
  root1406.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val178 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1098 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val178 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val178));
  }
  
  root1406.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1406); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1082 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1082.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node326 = $("<span>");
  root1408.append(node326);
  var condSubs70 = new mobl.CompSubscription();
  subs__.addSub(condSubs70);
  var oldValue70;
  var renderCond70 = function() {
    var value174 = tmp1082.get();
    if(oldValue70 === value174) return;
    oldValue70 = value174;
    var subs__ = condSubs70;
    subs__.unsubscribe();
    node326.empty();
    if(value174) {
      items.get().one(function(result__) {
        var tmp1099 = result__;
        var current = mobl.ref(result__);
        
        var node327 = $("<div>");
        node327.attr('width', "100%");
        
        
        var node328 = $("<div>");
        node328.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1128 = $("<span>");
        node328.append(nodes1128);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1411 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node331 = mobl.loadingSpan();
          root1411.append(node331);
          var list47;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList47 = function() {
            var subs__ = listSubs__;
            list47 = items.get();
            list47.list(function(results47) {
              node331.empty();
              for(var i113 = 0; i113 < results47.length; i113++) {
                (function() {
                  var iternode47 = $("<span>");
                  node331.append(iternode47);
                  var it;
                  it = mobl.ref(mobl.ref(results47), i113);
                  var result__ = it.get() == current.get();
                  var tmp1057 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1057.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1057.set(it.get() == current.get());
                  }));
                  
                  
                  var node332 = $("<span>");
                  iternode47.append(node332);
                  var condSubs72 = new mobl.CompSubscription();
                  subs__.addSub(condSubs72);
                  var oldValue72;
                  var renderCond72 = function() {
                    var value176 = tmp1057.get();
                    if(oldValue72 === value176) return;
                    oldValue72 = value176;
                    var subs__ = condSubs72;
                    subs__.unsubscribe();
                    node332.empty();
                    if(value176) {
                      var nodes1129 = $("<span>");
                      node332.append(nodes1129);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1412 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1130 = $("<span>");
                        root1412.append(nodes1130);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl136();
                        }));
                        
                        function renderControl136() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1413 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1413); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1130;
                            nodes1130 = node.contents();
                            oldNodes.replaceWith(nodes1130);
                          }));
                        }
                        renderControl136();
                        callback(root1412); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1129;
                        nodes1129 = node.contents();
                        oldNodes.replaceWith(nodes1129);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp1056 = mobl.ref(result__);
                      
                      var nodes1131 = $("<span>");
                      node332.append(nodes1131);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1056, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1414 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1132 = $("<span>");
                        root1414.append(nodes1132);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl137();
                        }));
                        
                        function renderControl137() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1415 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1415); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1132;
                            nodes1132 = node.contents();
                            oldNodes.replaceWith(nodes1132);
                          }));
                        }
                        renderControl137();
                        callback(root1414); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1131;
                        nodes1131 = node.contents();
                        oldNodes.replaceWith(nodes1131);
                      }));
                      
                      
                    }
                  };
                  renderCond72();
                  subs__.addSub(tmp1057.addEventListener('change', function() {
                    renderCond72();
                  }));
                  
                  
                  var oldNodes = iternode47;
                  iternode47 = iternode47.contents();
                  oldNodes.replaceWith(iternode47);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list47.addEventListener('change', function() { listSubs__.unsubscribe(); renderList47(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList47(true); }));
            });
          };
          renderList47();
          
          callback(root1411); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1128;
          nodes1128 = node.contents();
          oldNodes.replaceWith(nodes1128);
        }));
        node327.append(node328);
        
        var node329 = $("<div>");
        node329.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node330 = $("<span>");
        node329.append(node330);
        var condSubs71 = new mobl.CompSubscription();
        subs__.addSub(condSubs71);
        var oldValue71;
        var renderCond71 = function() {
          var value175 = current.get();
          if(oldValue71 === value175) return;
          oldValue71 = value175;
          var subs__ = condSubs71;
          subs__.unsubscribe();
          node330.empty();
          if(value175) {
            var nodes1126 = $("<span>");
            node330.append(nodes1126);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl135();
            }));
            
            function renderControl135() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1409 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1409); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1126;
                nodes1126 = node.contents();
                oldNodes.replaceWith(nodes1126);
              }));
            }
            renderControl135();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp1058 = mobl.ref(result__);
            
            var nodes1127 = $("<span>");
            node330.append(nodes1127);
            subs__.addSub((mobl.label)(tmp1058, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1410 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1410); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1127;
              nodes1127 = node.contents();
              oldNodes.replaceWith(nodes1127);
            }));
            
            
          }
        };
        renderCond71();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond71();
        }));
        
        node327.append(node329);
        node326.append(node327);
        
        
        
        
        
        
      });
    } else {
      var nodes1133 = $("<span>");
      node326.append(nodes1133);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1416 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node333 = mobl.loadingSpan();
        root1416.append(node333);
        var list48;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList48 = function() {
          var subs__ = listSubs__;
          list48 = items.get();
          list48.list(function(results48) {
            node333.empty();
            for(var i114 = 0; i114 < results48.length; i114++) {
              (function() {
                var iternode48 = $("<span>");
                node333.append(iternode48);
                var it;
                it = mobl.ref(mobl.ref(results48), i114);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1100 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp1052 = mobl.ref(result__);
                
                var nodes1134 = $("<span>");
                iternode48.append(nodes1134);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1052, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1417 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1135 = $("<span>");
                  root1417.append(nodes1135);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl138();
                  }));
                  
                  function renderControl138() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1418 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1418); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1135;
                      nodes1135 = node.contents();
                      oldNodes.replaceWith(nodes1135);
                    }));
                  }
                  renderControl138();
                  callback(root1417); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1134;
                  nodes1134 = node.contents();
                  oldNodes.replaceWith(nodes1134);
                }));
                
                var oldNodes = iternode48;
                iternode48 = iternode48.contents();
                oldNodes.replaceWith(iternode48);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list48.addEventListener('change', function() { listSubs__.unsubscribe(); renderList48(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList48(true); }));
          });
        };
        renderList48();
        
        callback(root1416); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1133;
        nodes1133 = node.contents();
        oldNodes.replaceWith(nodes1133);
      }));
      
      
    }
  };
  renderCond70();
  subs__.addSub(tmp1082.addEventListener('change', function() {
    renderCond70();
  }));
  
  callback(root1408); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1419 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1055 = mobl.ref(result__);
  
  var nodes1136 = $("<span>");
  root1419.append(nodes1136);
  subs__.addSub((ui.header)(tmp1055, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1420 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1054 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1053 = mobl.ref(result__);
    
    var nodes1137 = $("<span>");
    root1420.append(nodes1137);
    subs__.addSub((ui.backButton)(tmp1053, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1054, function(_, callback) {
      var root1421 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1421); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1137;
      nodes1137 = node.contents();
      oldNodes.replaceWith(nodes1137);
    }));
    callback(root1420); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1136;
    nodes1136 = node.contents();
    oldNodes.replaceWith(nodes1136);
  }));
  var nodes1138 = $("<span>");
  root1419.append(nodes1138);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl139();
  }));
  
  function renderControl139() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1422 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1422); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1138;
      nodes1138 = node.contents();
      oldNodes.replaceWith(nodes1138);
    }));
  }
  renderControl139();
  callback(root1419); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1423 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1139 = $("<span>");
  root1423.append(nodes1139);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1424 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node334 = mobl.loadingSpan();
    root1424.append(node334);
    var list49;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList49 = function() {
      var subs__ = listSubs__;
      list49 = coll.get();
      list49.list(function(results49) {
        node334.empty();
        for(var i115 = 0; i115 < results49.length; i115++) {
          (function() {
            var iternode49 = $("<span>");
            node334.append(iternode49);
            var it;
            it = mobl.ref(mobl.ref(results49), i115);
            var result__ = it.get() == selected.get();
            var tmp1060 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp1060.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1060.set(it.get() == selected.get());
            }));
            
            
            var node335 = $("<span>");
            iternode49.append(node335);
            var condSubs73 = new mobl.CompSubscription();
            subs__.addSub(condSubs73);
            var oldValue73;
            var renderCond73 = function() {
              var value177 = tmp1060.get();
              if(oldValue73 === value177) return;
              oldValue73 = value177;
              var subs__ = condSubs73;
              subs__.unsubscribe();
              node335.empty();
              if(value177) {
                var nodes1140 = $("<span>");
                node335.append(nodes1140);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1425 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1141 = $("<span>");
                  root1425.append(nodes1141);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl140();
                  }));
                  
                  function renderControl140() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1426 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1426); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1141;
                      nodes1141 = node.contents();
                      oldNodes.replaceWith(nodes1141);
                    }));
                  }
                  renderControl140();
                  callback(root1425); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1140;
                  nodes1140 = node.contents();
                  oldNodes.replaceWith(nodes1140);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1059 = mobl.ref(result__);
                
                var nodes1142 = $("<span>");
                node335.append(nodes1142);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1059, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1427 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1143 = $("<span>");
                  root1427.append(nodes1143);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl141();
                  }));
                  
                  function renderControl141() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1428 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1428); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1143;
                      nodes1143 = node.contents();
                      oldNodes.replaceWith(nodes1143);
                    }));
                  }
                  renderControl141();
                  callback(root1427); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1142;
                  nodes1142 = node.contents();
                  oldNodes.replaceWith(nodes1142);
                }));
                
                
              }
            };
            renderCond73();
            subs__.addSub(tmp1060.addEventListener('change', function() {
              renderCond73();
            }));
            
            
            var oldNodes = iternode49;
            iternode49 = iternode49.contents();
            oldNodes.replaceWith(iternode49);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list49.addEventListener('change', function() { listSubs__.unsubscribe(); renderList49(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList49(true); }));
      });
    };
    renderList49();
    
    callback(root1424); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1139;
    nodes1139 = node.contents();
    oldNodes.replaceWith(nodes1139);
  }));
  callback(root1423); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1429 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp1101 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp1061 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp1061.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp1061.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp1061.set(coll.get().limit(n.get()));
    }));
    
    
    var node336 = mobl.loadingSpan();
    root1429.append(node336);
    var list50;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList50 = function() {
      var subs__ = listSubs__;
      list50 = tmp1061.get();
      list50.list(function(results50) {
        node336.empty();
        for(var i116 = 0; i116 < results50.length; i116++) {
          (function() {
            var iternode50 = $("<span>");
            node336.append(iternode50);
            var it;
            it = mobl.ref(mobl.ref(results50), i116);
            var nodes1144 = $("<span>");
            iternode50.append(nodes1144);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl142();
            }));
            
            function renderControl142() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1430 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1430); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1144;
                nodes1144 = node.contents();
                oldNodes.replaceWith(nodes1144);
              }));
            }
            renderControl142();
            
            var oldNodes = iternode50;
            iternode50 = iternode50.contents();
            oldNodes.replaceWith(iternode50);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list50.addEventListener('change', function() { listSubs__.unsubscribe(); renderList50(true); }));
        subs__.addSub(tmp1061.addEventListener('change', function() { listSubs__.unsubscribe(); renderList50(true); }));
      });
    };
    renderList50();
    
    var result__ = n.get() < total.get();
    var tmp1063 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp1063.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp1063.set(n.get() < total.get());
    }));
    
    
    var node337 = $("<span>");
    root1429.append(node337);
    var condSubs74 = new mobl.CompSubscription();
    subs__.addSub(condSubs74);
    var oldValue74;
    var renderCond74 = function() {
      var value178 = tmp1063.get();
      if(oldValue74 === value178) return;
      oldValue74 = value178;
      var subs__ = condSubs74;
      subs__.unsubscribe();
      node337.empty();
      if(value178) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1062 = mobl.ref(result__);
        
        var nodes1145 = $("<span>");
        node337.append(nodes1145);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp1062, mobl.ref(null), function(_, callback) {
          var root1431 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1146 = $("<span>");
          root1431.append(nodes1146);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1432 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1432); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1146;
            nodes1146 = node.contents();
            oldNodes.replaceWith(nodes1146);
          }));
          callback(root1431); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1145;
          nodes1145 = node.contents();
          oldNodes.replaceWith(nodes1145);
        }));
        
        
      } else {
        
      }
    };
    renderCond74();
    subs__.addSub(tmp1063.addEventListener('change', function() {
      renderCond74();
    }));
    
    callback(root1429); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1433 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1147 = $("<span>");
  root1433.append(nodes1147);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1434 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node338 = mobl.loadingSpan();
    root1434.append(node338);
    var list51;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList51 = function() {
      var subs__ = listSubs__;
      list51 = items.get();
      list51.list(function(results51) {
        node338.empty();
        for(var i117 = 0; i117 < results51.length; i117++) {
          (function() {
            var iternode51 = $("<span>");
            node338.append(iternode51);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results51), i117), "_1");it = mobl.ref(mobl.ref(mobl.ref(results51), i117), "_2");
            var nodes1148 = $("<span>");
            iternode51.append(nodes1148);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1435 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1149 = $("<span>");
              root1435.append(nodes1149);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1436 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1436); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1149;
                nodes1149 = node.contents();
                oldNodes.replaceWith(nodes1149);
              }));
              callback(root1435); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1148;
              nodes1148 = node.contents();
              oldNodes.replaceWith(nodes1148);
            }));
            
            var oldNodes = iternode51;
            iternode51 = iternode51.contents();
            oldNodes.replaceWith(iternode51);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list51.addEventListener('change', function() { listSubs__.unsubscribe(); renderList51(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList51(true); }));
      });
    };
    renderList51();
    
    callback(root1434); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1147;
    nodes1147 = node.contents();
    oldNodes.replaceWith(nodes1147);
  }));
  callback(root1433); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1437 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll193) {
    coll193 = coll193.reverse();
    function processOne37() {
      var it;
      it = coll193.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll193.length > 0) processOne37(); else rest37();
      
    }
    function rest37() {
      var nodes1150 = $("<span>");
      root1437.append(nodes1150);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1438 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1064 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1065 = mobl.ref(result__);
        
        var nodes1151 = $("<span>");
        root1438.append(nodes1151);
        subs__.addSub((ui.backButton)(tmp1065, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1064, function(_, callback) {
          var root1439 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1439); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1151;
          nodes1151 = node.contents();
          oldNodes.replaceWith(nodes1151);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll192) {
                           coll192 = coll192.reverse();
                           function processOne36() {
                             var checked;var it;
                             var tmp1103 = coll192.pop();
                             checked = tmp1103._1;it = tmp1103._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll192.length > 0) processOne36(); else rest36();
                               
                             } else {
                               {
                                 
                                 if(coll192.length > 0) processOne36(); else rest36();
                                 
                               }
                             }
                           }
                           function rest36() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll192.length > 0) processOne36(); else rest36();
                         });
                         
                       };
        var tmp1066 = mobl.ref(result__);
        
        var nodes1152 = $("<span>");
        root1438.append(nodes1152);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1066, function(_, callback) {
          var root1440 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1440); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1152;
          nodes1152 = node.contents();
          oldNodes.replaceWith(nodes1152);
        }));
        callback(root1438); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1150;
        nodes1150 = node.contents();
        oldNodes.replaceWith(nodes1150);
      }));
      var nodes1153 = $("<span>");
      root1437.append(nodes1153);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1441 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1441); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1153;
        nodes1153 = node.contents();
        oldNodes.replaceWith(nodes1153);
      }));
      callback(root1437); return subs__;
      
      
    }
    if(coll193.length > 0) processOne37(); else rest37();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1442 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1154 = $("<span>");
  root1442.append(nodes1154);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1443 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1443); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1154;
    nodes1154 = node.contents();
    oldNodes.replaceWith(nodes1154);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp1067 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1067.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1067.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1067.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1067.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1067.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1155 = $("<span>");
  root1442.append(nodes1155);
  subs__.addSub((ui.masterDetail)(tmp1067, masterItem, detailItem, function(_, callback) {
    var root1444 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1444); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1155;
    nodes1155 = node.contents();
    oldNodes.replaceWith(nodes1155);
  }));
  callback(root1442); return subs__;
  
  
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
  var root1445 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1156 = $("<span>");
  root1445.append(nodes1156);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1446 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node339 = mobl.loadingSpan();
    root1446.append(node339);
    var list52;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList52 = function() {
      var subs__ = listSubs__;
      list52 = sections.get();
      list52.list(function(results52) {
        node339.empty();
        for(var i118 = 0; i118 < results52.length; i118++) {
          (function() {
            var iternode52 = $("<span>");
            node339.append(iternode52);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results52), i118), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results52), i118), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp1069 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1069.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1069.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1069.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1069.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1068 = mobl.ref(result__);
            
            var nodes1157 = $("<span>");
            iternode52.append(nodes1157);
            subs__.addSub((mobl.span)(tmp1069, mobl.ref(null), tmp1068, mobl.ref(null), function(_, callback) {
              var root1447 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1158 = $("<span>");
              root1447.append(nodes1158);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1448 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1448); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1158;
                nodes1158 = node.contents();
                oldNodes.replaceWith(nodes1158);
              }));
              callback(root1447); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1157;
              nodes1157 = node.contents();
              oldNodes.replaceWith(nodes1157);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp1070 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1070.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1070.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1070.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1070.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1159 = $("<span>");
            iternode52.append(nodes1159);
            subs__.addSub((mobl.block)(tmp1070, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1449 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1160 = $("<span>");
              root1449.append(nodes1160);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl143();
              }));
              
              function renderControl143() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1450 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1450); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1160;
                  nodes1160 = node.contents();
                  oldNodes.replaceWith(nodes1160);
                }));
              }
              renderControl143();
              callback(root1449); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1159;
              nodes1159 = node.contents();
              oldNodes.replaceWith(nodes1159);
            }));
            
            var oldNodes = iternode52;
            iternode52 = iternode52.contents();
            oldNodes.replaceWith(iternode52);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list52.addEventListener('change', function() { listSubs__.unsubscribe(); renderList52(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList52(true); }));
      });
    };
    renderList52();
    
    callback(root1446); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1156;
    nodes1156 = node.contents();
    oldNodes.replaceWith(nodes1156);
  }));
  callback(root1445); return subs__;
  
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
  var root1451 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node340 = $("<table>");
  
  var ref358 = style;
  if(ref358.get() !== null) {
    node340.attr('class', ref358.get());
    subs__.addSub(ref358.addEventListener('change', function(_, ref, val) {
      node340.attr('class', val);
    }));
    
  }
  subs__.addSub(ref358.rebind());
  
  var nodes1161 = $("<span>");
  node340.append(nodes1161);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl144();
  }));
  
  function renderControl144() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1452); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1161;
      nodes1161 = node.contents();
      oldNodes.replaceWith(nodes1161);
    }));
  }
  renderControl144();
  root1451.append(node340);
  callback(root1451); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1453 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node341 = $("<tr>");
  
  var ref359 = style;
  if(ref359.get() !== null) {
    node341.attr('class', ref359.get());
    subs__.addSub(ref359.addEventListener('change', function(_, ref, val) {
      node341.attr('class', val);
    }));
    
  }
  subs__.addSub(ref359.rebind());
  
  var nodes1162 = $("<span>");
  node341.append(nodes1162);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl145();
  }));
  
  function renderControl145() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1454 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1454); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1162;
      nodes1162 = node.contents();
      oldNodes.replaceWith(nodes1162);
    }));
  }
  renderControl145();
  root1453.append(node341);
  callback(root1453); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1455 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node342 = $("<td>");
  
  var ref360 = width;
  if(ref360.get() !== null) {
    node342.attr('width', ref360.get());
    subs__.addSub(ref360.addEventListener('change', function(_, ref, val) {
      node342.attr('width', val);
    }));
    
  }
  subs__.addSub(ref360.rebind());
  
  var ref361 = style;
  if(ref361.get() !== null) {
    node342.attr('class', ref361.get());
    subs__.addSub(ref361.addEventListener('change', function(_, ref, val) {
      node342.attr('class', val);
    }));
    
  }
  subs__.addSub(ref361.rebind());
  
  var nodes1163 = $("<span>");
  node342.append(nodes1163);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl146();
  }));
  
  function renderControl146() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1456 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1456); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1163;
      nodes1163 = node.contents();
      oldNodes.replaceWith(nodes1163);
    }));
  }
  renderControl146();
  root1455.append(node342);
  callback(root1455); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1457 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node343 = $("<td>");
  
  var ref362 = width;
  if(ref362.get() !== null) {
    node343.attr('width', ref362.get());
    subs__.addSub(ref362.addEventListener('change', function(_, ref, val) {
      node343.attr('width', val);
    }));
    
  }
  subs__.addSub(ref362.rebind());
  
  var ref363 = style;
  if(ref363.get() !== null) {
    node343.attr('class', ref363.get());
    subs__.addSub(ref363.addEventListener('change', function(_, ref, val) {
      node343.attr('class', val);
    }));
    
  }
  subs__.addSub(ref363.rebind());
  
  var nodes1164 = $("<span>");
  node343.append(nodes1164);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl147();
  }));
  
  function renderControl147() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1458 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1458); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1164;
      nodes1164 = node.contents();
      oldNodes.replaceWith(nodes1164);
    }));
  }
  renderControl147();
  root1457.append(node343);
  callback(root1457); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1459 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node344 = $("<td>");
  
  var ref364 = width;
  if(ref364.get() !== null) {
    node344.attr('width', ref364.get());
    subs__.addSub(ref364.addEventListener('change', function(_, ref, val) {
      node344.attr('width', val);
    }));
    
  }
  subs__.addSub(ref364.rebind());
  
  var ref365 = style;
  if(ref365.get() !== null) {
    node344.attr('class', ref365.get());
    subs__.addSub(ref365.addEventListener('change', function(_, ref, val) {
      node344.attr('class', val);
    }));
    
  }
  subs__.addSub(ref365.rebind());
  
  
  var node345 = $("<strong>");
  
  var nodes1165 = $("<span>");
  node345.append(nodes1165);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl148();
  }));
  
  function renderControl148() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1460); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1165;
      nodes1165 = node.contents();
      oldNodes.replaceWith(nodes1165);
    }));
  }
  renderControl148();
  node344.append(node345);
  root1459.append(node344);
  callback(root1459); return subs__;
  
  
  
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
  items.list(function(coll194) {
    coll194 = coll194.reverse();
    function processOne38() {
      var item;
      item = coll194.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll194.length > 0) processOne38(); else rest38();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll194.length > 0) processOne38(); else rest38();
          
        }
      }
    }
    function rest38() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll194.length > 0) processOne38(); else rest38();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root1461 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1083 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1083.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node346 = $("<span>");
  root1461.append(node346);
  var condSubs75 = new mobl.CompSubscription();
  subs__.addSub(condSubs75);
  var oldValue75;
  var renderCond75 = function() {
    var value179 = tmp1083.get();
    if(oldValue75 === value179) return;
    oldValue75 = value179;
    var subs__ = condSubs75;
    subs__.unsubscribe();
    node346.empty();
    if(value179) {
      items.get().one(function(result__) {
        var tmp1105 = result__;
        var current = mobl.ref(result__);
        
        var node347 = $("<div>");
        node347.attr('width', "100%");
        
        
        var node348 = $("<div>");
        node348.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1167 = $("<span>");
        node348.append(nodes1167);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1463 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node351 = mobl.loadingSpan();
          root1463.append(node351);
          var list53;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList53 = function() {
            var subs__ = listSubs__;
            list53 = items.get();
            list53.list(function(results53) {
              node351.empty();
              for(var i119 = 0; i119 < results53.length; i119++) {
                (function() {
                  var iternode53 = $("<span>");
                  node351.append(iternode53);
                  var it;
                  it = mobl.ref(mobl.ref(results53), i119);
                  var result__ = it.get() == current.get();
                  var tmp1079 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1079.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1079.set(it.get() == current.get());
                  }));
                  
                  
                  var node352 = $("<span>");
                  iternode53.append(node352);
                  var condSubs77 = new mobl.CompSubscription();
                  subs__.addSub(condSubs77);
                  var oldValue77;
                  var renderCond77 = function() {
                    var value181 = tmp1079.get();
                    if(oldValue77 === value181) return;
                    oldValue77 = value181;
                    var subs__ = condSubs77;
                    subs__.unsubscribe();
                    node352.empty();
                    if(value181) {
                      var nodes1168 = $("<span>");
                      node352.append(nodes1168);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1464 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1111 = result__;
                          var tmp1076 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp1109 = result__;
                              var result__ = tmp1109;
                              tmp1076.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp1110 = result__;
                              var result__ = tmp1110;
                              tmp1076.set(result__);
                              
                            });
                          }));
                          
                          var nodes1169 = $("<span>");
                          root1464.append(nodes1169);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl150();
                          }));
                          
                          function renderControl150() {
                            subs__.addSub((masterItem.get())(it, tmp1076, function(elements, callback) {
                              var root1465 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root1465); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes1169;
                              nodes1169 = node.contents();
                              oldNodes.replaceWith(nodes1169);
                            }));
                          }
                          renderControl150();
                          callback(root1464); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1168;
                        nodes1168 = node.contents();
                        oldNodes.replaceWith(nodes1168);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = true;
                                       ui.visible.set(result__);
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp1078 = mobl.ref(result__);
                      
                      var nodes1170 = $("<span>");
                      node352.append(nodes1170);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1078, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1466 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1114 = result__;
                          var tmp1077 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp1112 = result__;
                              var result__ = tmp1112;
                              tmp1077.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp1113 = result__;
                              var result__ = tmp1113;
                              tmp1077.set(result__);
                              
                            });
                          }));
                          
                          var nodes1171 = $("<span>");
                          root1466.append(nodes1171);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl151();
                          }));
                          
                          function renderControl151() {
                            subs__.addSub((masterItem.get())(it, tmp1077, function(elements, callback) {
                              var root1467 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root1467); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes1171;
                              nodes1171 = node.contents();
                              oldNodes.replaceWith(nodes1171);
                            }));
                          }
                          renderControl151();
                          callback(root1466); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1170;
                        nodes1170 = node.contents();
                        oldNodes.replaceWith(nodes1170);
                      }));
                      
                      
                    }
                  };
                  renderCond77();
                  subs__.addSub(tmp1079.addEventListener('change', function() {
                    renderCond77();
                  }));
                  
                  
                  var oldNodes = iternode53;
                  iternode53 = iternode53.contents();
                  oldNodes.replaceWith(iternode53);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list53.addEventListener('change', function() { listSubs__.unsubscribe(); renderList53(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList53(true); }));
            });
          };
          renderList53();
          
          callback(root1463); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1167;
          nodes1167 = node.contents();
          oldNodes.replaceWith(nodes1167);
        }));
        node347.append(node348);
        
        var node349 = $("<div>");
        node349.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp1081 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp1081.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp1081.set(current.get() && ui.visible.get());
        }));
        
        
        var node350 = $("<span>");
        node349.append(node350);
        var condSubs76 = new mobl.CompSubscription();
        subs__.addSub(condSubs76);
        var oldValue76;
        var renderCond76 = function() {
          var value180 = tmp1081.get();
          if(oldValue76 === value180) return;
          oldValue76 = value180;
          var subs__ = condSubs76;
          subs__.unsubscribe();
          node350.empty();
          if(value180) {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp1108 = result__;
              var tmp1080 = mobl.ref(result__);
              subs__.addSub(current.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp1106 = result__;
                  var result__ = tmp1106;
                  tmp1080.set(result__);
                  
                });
              }));
              subs__.addSub(items.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp1107 = result__;
                  var result__ = tmp1107;
                  tmp1080.set(result__);
                  
                });
              }));
              
              var nodes1166 = $("<span>");
              node350.append(nodes1166);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl149();
              }));
              
              function renderControl149() {
                subs__.addSub((detail.get())(current, tmp1080, function(elements, callback) {
                  var root1462 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1462); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1166;
                  nodes1166 = node.contents();
                  oldNodes.replaceWith(nodes1166);
                }));
              }
              renderControl149();
              
              
            });
          } else {
            
          }
        };
        renderCond76();
        subs__.addSub(tmp1081.addEventListener('change', function() {
          renderCond76();
        }));
        
        node347.append(node349);
        node346.append(node347);
        
        
        
        
        
        
      });
    } else {
      var nodes1172 = $("<span>");
      node346.append(nodes1172);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1468 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node353 = mobl.loadingSpan();
        root1468.append(node353);
        var list54;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList54 = function() {
          var subs__ = listSubs__;
          list54 = items.get();
          list54.list(function(results54) {
            node353.empty();
            for(var i120 = 0; i120 < results54.length; i120++) {
              (function() {
                var iternode54 = $("<span>");
                node353.append(iternode54);
                var it;
                it = mobl.ref(mobl.ref(results54), i120);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1118 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp1072 = mobl.ref(result__);
                
                var nodes1173 = $("<span>");
                iternode54.append(nodes1173);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1072, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1469 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp1117 = result__;
                    var tmp1071 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1115 = result__;
                        var result__ = tmp1115;
                        tmp1071.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1116 = result__;
                        var result__ = tmp1116;
                        tmp1071.set(result__);
                        
                      });
                    }));
                    
                    var nodes1174 = $("<span>");
                    root1469.append(nodes1174);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl152();
                    }));
                    
                    function renderControl152() {
                      subs__.addSub((masterItem.get())(it, tmp1071, function(elements, callback) {
                        var root1470 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root1470); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1174;
                        nodes1174 = node.contents();
                        oldNodes.replaceWith(nodes1174);
                      }));
                    }
                    renderControl152();
                    callback(root1469); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1173;
                  nodes1173 = node.contents();
                  oldNodes.replaceWith(nodes1173);
                }));
                
                var oldNodes = iternode54;
                iternode54 = iternode54.contents();
                oldNodes.replaceWith(iternode54);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list54.addEventListener('change', function() { listSubs__.unsubscribe(); renderList54(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList54(true); }));
          });
        };
        renderList54();
        
        callback(root1468); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1172;
        nodes1172 = node.contents();
        oldNodes.replaceWith(nodes1172);
      }));
      
      
    }
  };
  renderCond75();
  subs__.addSub(tmp1083.addEventListener('change', function() {
    renderCond75();
  }));
  
  callback(root1461); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1471 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1075 = mobl.ref(result__);
  
  var nodes1175 = $("<span>");
  root1471.append(nodes1175);
  subs__.addSub((ui.header)(tmp1075, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1472 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp1119 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp1120 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1074 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1073 = mobl.ref(result__);
        
        var nodes1176 = $("<span>");
        root1472.append(nodes1176);
        subs__.addSub((ui.backButton)(tmp1073, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1074, function(_, callback) {
          var root1473 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1473); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1176;
          nodes1176 = node.contents();
          oldNodes.replaceWith(nodes1176);
        }));
        callback(root1472); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes1175;
    nodes1175 = node.contents();
    oldNodes.replaceWith(nodes1175);
  }));
  var nodes1177 = $("<span>");
  root1471.append(nodes1177);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl153();
  }));
  
  function renderControl153() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1474 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1474); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1177;
      nodes1177 = node.contents();
      oldNodes.replaceWith(nodes1177);
    }));
  }
  renderControl153();
  callback(root1471); return subs__;
  
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root1475 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1178 = $("<span>");
  root1475.append(nodes1178);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1476 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1179 = $("<span>");
    root1476.append(nodes1179);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1477 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1477); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1179;
      nodes1179 = node.contents();
      oldNodes.replaceWith(nodes1179);
    }));
    callback(root1476); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1178;
    nodes1178 = node.contents();
    oldNodes.replaceWith(nodes1178);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes1180 = $("<span>");
  root1475.append(nodes1180);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root1478 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1478); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1180;
    nodes1180 = node.contents();
    oldNodes.replaceWith(nodes1180);
  }));
  callback(root1475); return subs__;
  
  
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
