mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root5805 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2019 = $("<span>");
  root5805.append(node2019);
  var condSubs497 = new mobl.CompSubscription();
  subs__.addSub(condSubs497);
  var oldValue497;
  var renderCond497 = function() {
    var value2401 = value.get();
    if(oldValue497 === value2401) return;
    oldValue497 = value2401;
    var subs__ = condSubs497;
    subs__.unsubscribe();
    node2019.empty();
    if(value2401) {
      var nodes4481 = $("<span>");
      node2019.append(nodes4481);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl796();
      }));
      
      function renderControl796() {
        subs__.addSub((elements)(function(elements, callback) {
          var root5806 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5806); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4481;
          nodes4481 = node.contents();
          oldNodes.replaceWith(nodes4481);
        }));
      }
      renderControl796();
      
      
    } else {
      var nodes4482 = $("<span>");
      node2019.append(nodes4482);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5807 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes4483 = $("<span>");
        root5807.append(nodes4483);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root5808 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5808); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4483;
          nodes4483 = node.contents();
          oldNodes.replaceWith(nodes4483);
        }));
        var nodes4484 = $("<span>");
        root5807.append(nodes4484);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root5809 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5809); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4484;
          nodes4484 = node.contents();
          oldNodes.replaceWith(nodes4484);
        }));
        callback(root5807); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4482;
        nodes4482 = node.contents();
        oldNodes.replaceWith(nodes4482);
      }));
      
      
    }
  };
  renderCond497();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond497();
  }));
  
  callback(root5805); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root5810 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2020 = $("<div>");
  
  var ref1965 = mobl.ref(ui.headerStyle);
  if(ref1965.get() !== null) {
    node2020.attr('class', ref1965.get());
    subs__.addSub(ref1965.addEventListener('change', function(_, ref, val) {
      node2020.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1965.rebind());
  
  var val998 = onclick.get();
  if(val998 !== null) {
    subs__.addSub(mobl.domBind(node2020, 'tap', val998));
  }
  
  var ref1966 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1966.get() !== null) {
    node2020.attr('style', ref1966.get());
    subs__.addSub(ref1966.addEventListener('change', function(_, ref, val) {
      node2020.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2020.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1966.rebind());
  
  
  var node2023 = $("<div>");
  
  var ref1964 = mobl.ref(ui.headerContainerStyle);
  if(ref1964.get() !== null) {
    node2023.attr('class', ref1964.get());
    subs__.addSub(ref1964.addEventListener('change', function(_, ref, val) {
      node2023.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1964.rebind());
  
  
  var node2024 = $("<div>");
  
  var ref1962 = text;
  node2024.text(""+ref1962.get());
  var ignore386 = false;
  subs__.addSub(ref1962.addEventListener('change', function(_, ref, val) {
    if(ignore386) return;
    node2024.text(""+val);
  }));
  subs__.addSub(ref1962.rebind());
  
  
  var ref1963 = mobl.ref(ui.headerTextStyle);
  if(ref1963.get() !== null) {
    node2024.attr('class', ref1963.get());
    subs__.addSub(ref1963.addEventListener('change', function(_, ref, val) {
      node2024.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1963.rebind());
  
  node2023.append(node2024);
  node2020.append(node2023);
  var nodes4485 = $("<span>");
  node2020.append(nodes4485);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl797();
  }));
  
  function renderControl797() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5811 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5811); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4485;
      nodes4485 = node.contents();
      oldNodes.replaceWith(nodes4485);
    }));
  }
  renderControl797();
  root5810.append(node2020);
  
  var node2021 = $("<span>");
  root5810.append(node2021);
  var condSubs498 = new mobl.CompSubscription();
  subs__.addSub(condSubs498);
  var oldValue498;
  var renderCond498 = function() {
    var value2402 = fixedPosition.get();
    if(oldValue498 === value2402) return;
    oldValue498 = value2402;
    var subs__ = condSubs498;
    subs__.unsubscribe();
    node2021.empty();
    if(value2402) {
      
      var node2022 = $("<div>");
      node2022.attr('id', "hello");
      node2022.attr('style', "height: 2.9em;");
      
      node2021.append(node2022);
      
      
    } else {
      
    }
  };
  renderCond498();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond498();
  }));
  
  callback(root5810); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5812 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1967 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1967.get() !== null) {
    sp.attr('class', ref1967.get());
    subs__.addSub(ref1967.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1967.rebind());
  
  var val999 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val999 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val999));
  }
  
  var val1000 = function(event, callback) {
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
  if(val1000 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1000));
  }
  
  var val1001 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after306(result__) {
                    var tmp4163 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after306);if(result__ !== undefined) after306(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1001 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1001));
  }
  
  var val1002 = function(event, callback) {
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
  if(val1002 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1002));
  }
  
  var ref1968 = text;
  sp.text(""+ref1968.get());
  var ignore387 = false;
  subs__.addSub(ref1968.addEventListener('change', function(_, ref, val) {
    if(ignore387) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1968.rebind());
  
  
  root5812.append(sp);
  callback(root5812); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5813 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4486 = $("<span>");
  root5813.append(nodes4486);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5814 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5814); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4486;
    nodes4486 = node.contents();
    oldNodes.replaceWith(nodes4486);
  }));
  callback(root5813); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5815 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4487 = $("<span>");
  root5815.append(nodes4487);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5816 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5816); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4487;
    nodes4487 = node.contents();
    oldNodes.replaceWith(nodes4487);
  }));
  callback(root5815); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root5817 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2025 = $("<ul>");
  
  var ref1969 = mobl.ref(ui.groupStyle);
  if(ref1969.get() !== null) {
    node2025.attr('class', ref1969.get());
    subs__.addSub(ref1969.addEventListener('change', function(_, ref, val) {
      node2025.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1969.rebind());
  
  var nodes4488 = $("<span>");
  node2025.append(nodes4488);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl798();
  }));
  
  function renderControl798() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5818 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5818); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4488;
      nodes4488 = node.contents();
      oldNodes.replaceWith(nodes4488);
    }));
  }
  renderControl798();
  root5817.append(node2025);
  callback(root5817); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root5819 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2026 = $("<img>");
  
  var ref1970 = url;
  if(ref1970.get() !== null) {
    node2026.attr('src', ref1970.get());
    subs__.addSub(ref1970.addEventListener('change', function(_, ref, val) {
      node2026.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1970.rebind());
  
  var ref1971 = width;
  if(ref1971.get() !== null) {
    node2026.attr('width', ref1971.get());
    subs__.addSub(ref1971.addEventListener('change', function(_, ref, val) {
      node2026.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1971.rebind());
  
  var ref1972 = height;
  if(ref1972.get() !== null) {
    node2026.attr('height', ref1972.get());
    subs__.addSub(ref1972.addEventListener('change', function(_, ref, val) {
      node2026.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1972.rebind());
  
  var ref1973 = style;
  if(ref1973.get() !== null) {
    node2026.attr('class', ref1973.get());
    subs__.addSub(ref1973.addEventListener('change', function(_, ref, val) {
      node2026.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1973.rebind());
  
  var val1003 = onclick.get();
  if(val1003 !== null) {
    subs__.addSub(mobl.domBind(node2026, 'tap', val1003));
  }
  
  var ref1974 = valign;
  if(ref1974.get() !== null) {
    node2026.attr('valign', ref1974.get());
    subs__.addSub(ref1974.addEventListener('change', function(_, ref, val) {
      node2026.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1974.rebind());
  
  var ref1975 = align;
  if(ref1975.get() !== null) {
    node2026.attr('align', ref1975.get());
    subs__.addSub(ref1975.addEventListener('change', function(_, ref, val) {
      node2026.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1975.rebind());
  
  root5819.append(node2026);
  callback(root5819); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root5820 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1976 = mobl.ref(ui.itemStyle);
  if(ref1976.get() !== null) {
    el.attr('class', ref1976.get());
    subs__.addSub(ref1976.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1976.rebind());
  
  var ref1977 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1977.get() !== null) {
    el.attr('class', ref1977.get());
    subs__.addSub(ref1977.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1977.rebind());
  
  var val1004 = onswipe.get();
  if(val1004 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1004));
  }
  
  var val1005 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4164 = result__;
                                           function after307(result__) {
                                             var tmp4165 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after307);if(result__ !== undefined) after307(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4166 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1005 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1005));
  }
  
  var nodes4489 = $("<span>");
  el.append(nodes4489);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl799();
  }));
  
  function renderControl799() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5821); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4489;
      nodes4489 = node.contents();
      oldNodes.replaceWith(nodes4489);
    }));
  }
  renderControl799();
  root5820.append(el);
  callback(root5820); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root5822 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2027 = $("<input>");
  node2027.attr('type', "checkbox");
  
  var ref1979 = b;
  node2027.attr('checked', !!ref1979.get());
  subs__.addSub(ref1979.addEventListener('change', function(_, ref, val) {
    if(ref === ref1979) node2027.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2027, 'change', function() {
    b.set(!!node2027.attr('checked'));
  }));
  
  var val1007 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1007 !== null) {
    subs__.addSub(mobl.domBind(node2027, 'tap', val1007));
  }
  
  var val1008 = onchange.get();
  if(val1008 !== null) {
    subs__.addSub(mobl.domBind(node2027, 'change', val1008));
  }
  
  root5822.append(node2027);
  
  root5822.append(" ");
  
  var node2028 = $("<span>");
  
  var ref1978 = label;
  node2028.text(""+ref1978.get());
  var ignore388 = false;
  subs__.addSub(ref1978.addEventListener('change', function(_, ref, val) {
    if(ignore388) return;
    node2028.text(""+val);
  }));
  subs__.addSub(ref1978.rebind());
  
  
  var val1006 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after308(result__) {
                    var tmp4167 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after308);if(result__ !== undefined) after308(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1006 !== null) {
    subs__.addSub(mobl.domBind(node2028, 'tap', val1006));
  }
  
  root5822.append(node2028);
  callback(root5822); return subs__;
  
  
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
  var root5823 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2029 = $("<span>");
  root5823.append(node2029);
  var condSubs499 = new mobl.CompSubscription();
  subs__.addSub(condSubs499);
  var oldValue499;
  var renderCond499 = function() {
    var value2403 = label.get();
    if(oldValue499 === value2403) return;
    oldValue499 = value2403;
    var subs__ = condSubs499;
    subs__.unsubscribe();
    node2029.empty();
    if(value2403) {
      var nodes4490 = $("<span>");
      node2029.append(nodes4490);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root5824 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5824); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4490;
        nodes4490 = node.contents();
        oldNodes.replaceWith(nodes4490);
      }));
      
      
    } else {
      
    }
  };
  renderCond499();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond499();
  }));
  
  
  var node2030 = $("<span>");
  root5823.append(node2030);
  var condSubs500 = new mobl.CompSubscription();
  subs__.addSub(condSubs500);
  var oldValue500;
  var renderCond500 = function() {
    var value2404 = validator.get();
    if(oldValue500 === value2404) return;
    oldValue500 = value2404;
    var subs__ = condSubs500;
    subs__.unsubscribe();
    node2030.empty();
    if(value2404) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after312(result__) {
        var tmp4168 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp4169 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2031 = $("<input>");
        
        var ref1980 = inputType;
        if(ref1980.get() !== null) {
          node2031.attr('type', ref1980.get());
          subs__.addSub(ref1980.addEventListener('change', function(_, ref, val) {
            node2031.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1980.rebind());
        
        var ref1981 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1981.get() !== null) {
          node2031.attr('class', ref1981.get());
          subs__.addSub(ref1981.addEventListener('change', function(_, ref, val) {
            node2031.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2031.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2031.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2031.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1981.rebind());
        
        var ref1982 = placeholder;
        if(ref1982.get() !== null) {
          node2031.attr('placeholder', ref1982.get());
          subs__.addSub(ref1982.addEventListener('change', function(_, ref, val) {
            node2031.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1982.rebind());
        
        var ref1983 = temp;
        node2031.val(""+ref1983.get());
        var ignore389 = false;
        subs__.addSub(ref1983.addEventListener('change', function(_, ref, val) {
          if(ignore389) return;
          node2031.val(""+val);
        }));
        subs__.addSub(ref1983.rebind());
        
        subs__.addSub(mobl.domBind(node2031, 'keyup change', function() {
          ignore389 = true;
          temp.set(mobl.stringTomobl__String(node2031.val()));
          ignore389 = false;
        }));
        
        
        var val1009 = onchange.get();
        if(val1009 !== null) {
          subs__.addSub(mobl.domBind(node2031, 'change', val1009));
        }
        
        var val1010 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after309(result__) {
                          var tmp4170 = result__;
                          function after310(result__) {
                            var tmp4171 = result__;
                            var result__ = tmp4171;
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
                          var result__ = validator.get()(temp.get(), after310);if(result__ !== undefined) after310(result__);
                        }
                        var result__ = onkeyup.get()(event, after309);if(result__ !== undefined) after309(result__);
                      } else {
                        {
                          function after311(result__) {
                            var tmp4171 = result__;
                            var result__ = tmp4171;
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
                          var result__ = validator.get()(temp.get(), after311);if(result__ !== undefined) after311(result__);
                        }
                      }
                    };
        if(val1010 !== null) {
          subs__.addSub(mobl.domBind(node2031, 'keyup', val1010));
        }
        
        var val1011 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1011 !== null) {
          subs__.addSub(mobl.domBind(node2031, 'blur', val1011));
        }
        
        node2030.append(node2031);
        var nodes4491 = $("<span>");
        node2030.append(nodes4491);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root5825 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5825); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4491;
          nodes4491 = node.contents();
          oldNodes.replaceWith(nodes4491);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after312);if(result__ !== undefined) after312(result__);
    } else {
      
      var node2032 = $("<input>");
      
      var ref1984 = inputType;
      if(ref1984.get() !== null) {
        node2032.attr('type', ref1984.get());
        subs__.addSub(ref1984.addEventListener('change', function(_, ref, val) {
          node2032.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1984.rebind());
      
      var ref1985 = style;
      if(ref1985.get() !== null) {
        node2032.attr('class', ref1985.get());
        subs__.addSub(ref1985.addEventListener('change', function(_, ref, val) {
          node2032.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1985.rebind());
      
      var ref1986 = placeholder;
      if(ref1986.get() !== null) {
        node2032.attr('placeholder', ref1986.get());
        subs__.addSub(ref1986.addEventListener('change', function(_, ref, val) {
          node2032.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1986.rebind());
      
      var ref1987 = s;
      node2032.val(""+ref1987.get());
      var ignore390 = false;
      subs__.addSub(ref1987.addEventListener('change', function(_, ref, val) {
        if(ignore390) return;
        node2032.val(""+val);
      }));
      subs__.addSub(ref1987.rebind());
      
      subs__.addSub(mobl.domBind(node2032, 'keyup change', function() {
        ignore390 = true;
        s.set(mobl.stringTomobl__String(node2032.val()));
        ignore390 = false;
      }));
      
      
      var val1012 = onchange.get();
      if(val1012 !== null) {
        subs__.addSub(mobl.domBind(node2032, 'change', val1012));
      }
      
      var val1013 = onkeyup.get();
      if(val1013 !== null) {
        subs__.addSub(mobl.domBind(node2032, 'keyup', val1013));
      }
      
      var val1014 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1014 !== null) {
        subs__.addSub(mobl.domBind(node2032, 'blur', val1014));
      }
      
      node2030.append(node2032);
      
      
    }
  };
  renderCond500();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond500();
  }));
  
  callback(root5823); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5826 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4492 = $("<span>");
  root5826.append(nodes4492);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5827 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5827); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4492;
    nodes4492 = node.contents();
    oldNodes.replaceWith(nodes4492);
  }));
  callback(root5826); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5828 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4493 = $("<span>");
  root5828.append(nodes4493);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5829 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5829); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4493;
    nodes4493 = node.contents();
    oldNodes.replaceWith(nodes4493);
  }));
  callback(root5828); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root5830 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2033 = $("<span>");
  root5830.append(node2033);
  var condSubs501 = new mobl.CompSubscription();
  subs__.addSub(condSubs501);
  var oldValue501;
  var renderCond501 = function() {
    var value2405 = label.get();
    if(oldValue501 === value2405) return;
    oldValue501 = value2405;
    var subs__ = condSubs501;
    subs__.unsubscribe();
    node2033.empty();
    if(value2405) {
      var nodes4494 = $("<span>");
      node2033.append(nodes4494);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root5831 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5831); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4494;
        nodes4494 = node.contents();
        oldNodes.replaceWith(nodes4494);
      }));
      
      
    } else {
      
    }
  };
  renderCond501();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond501();
  }));
  
  
  var node2034 = $("<input>");
  node2034.attr('type', "range");
  
  var ref1988 = n;
  node2034.val(""+ref1988.get());
  var ignore391 = false;
  subs__.addSub(ref1988.addEventListener('change', function(_, ref, val) {
    if(ignore391) return;
    node2034.val(""+val);
  }));
  subs__.addSub(ref1988.rebind());
  
  subs__.addSub(mobl.domBind(node2034, 'keyup change', function() {
    ignore391 = true;
    n.set(mobl.stringTomobl__Num(node2034.val()));
    ignore391 = false;
  }));
  
  
  var ref1989 = min;
  if(ref1989.get() !== null) {
    node2034.attr('min', ref1989.get());
    subs__.addSub(ref1989.addEventListener('change', function(_, ref, val) {
      node2034.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1989.rebind());
  
  var ref1990 = max;
  if(ref1990.get() !== null) {
    node2034.attr('max', ref1990.get());
    subs__.addSub(ref1990.addEventListener('change', function(_, ref, val) {
      node2034.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1990.rebind());
  
  var ref1991 = step;
  if(ref1991.get() !== null) {
    node2034.attr('step', ref1991.get());
    subs__.addSub(ref1991.addEventListener('change', function(_, ref, val) {
      node2034.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1991.rebind());
  node2034.attr('style', "width: 99%;");
  
  var val1015 = onchange.get();
  if(val1015 !== null) {
    subs__.addSub(mobl.domBind(node2034, 'change', val1015));
  }
  
  var val1016 = onkeyup.get();
  if(val1016 !== null) {
    subs__.addSub(mobl.domBind(node2034, 'keyup', val1016));
  }
  
  var ref1992 = placeholder;
  if(ref1992.get() !== null) {
    node2034.attr('placeholder', ref1992.get());
    subs__.addSub(ref1992.addEventListener('change', function(_, ref, val) {
      node2034.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1992.rebind());
  
  root5830.append(node2034);
  callback(root5830); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5832 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after313(result__) {
      var tmp4172 = result__;
      var result__ = tmp4172;
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
    var result__ = validator.get()(n2, after313);if(result__ !== undefined) after313(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes4495 = $("<span>");
  root5832.append(nodes4495);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5833 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5833); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4495;
    nodes4495 = node.contents();
    oldNodes.replaceWith(nodes4495);
  }));
  callback(root5832); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root5834 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2035 = $("<span>");
  root5834.append(node2035);
  var condSubs502 = new mobl.CompSubscription();
  subs__.addSub(condSubs502);
  var oldValue502;
  var renderCond502 = function() {
    var value2406 = label.get();
    if(oldValue502 === value2406) return;
    oldValue502 = value2406;
    var subs__ = condSubs502;
    subs__.unsubscribe();
    node2035.empty();
    if(value2406) {
      
      var node2036 = $("<span>");
      node2036.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1996 = label;
      node2036.text(""+ref1996.get());
      var ignore393 = false;
      subs__.addSub(ref1996.addEventListener('change', function(_, ref, val) {
        if(ignore393) return;
        node2036.text(""+val);
      }));
      subs__.addSub(ref1996.rebind());
      
      
      node2035.append(node2036);
      
      var node2037 = $("<span>");
      node2037.attr('style', "float: left");
      
      
      var node2038 = $("<input>");
      node2038.attr('type', "password");
      
      var ref1993 = style;
      if(ref1993.get() !== null) {
        node2038.attr('class', ref1993.get());
        subs__.addSub(ref1993.addEventListener('change', function(_, ref, val) {
          node2038.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1993.rebind());
      
      var ref1994 = placeholder;
      if(ref1994.get() !== null) {
        node2038.attr('placeholder', ref1994.get());
        subs__.addSub(ref1994.addEventListener('change', function(_, ref, val) {
          node2038.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1994.rebind());
      
      var ref1995 = s;
      node2038.val(""+ref1995.get());
      var ignore392 = false;
      subs__.addSub(ref1995.addEventListener('change', function(_, ref, val) {
        if(ignore392) return;
        node2038.val(""+val);
      }));
      subs__.addSub(ref1995.rebind());
      
      subs__.addSub(mobl.domBind(node2038, 'keyup change', function() {
        ignore392 = true;
        s.set(mobl.stringTomobl__String(node2038.val()));
        ignore392 = false;
      }));
      
      
      var val1017 = onchange.get();
      if(val1017 !== null) {
        subs__.addSub(mobl.domBind(node2038, 'change', val1017));
      }
      
      var val1018 = onkeyup.get();
      if(val1018 !== null) {
        subs__.addSub(mobl.domBind(node2038, 'keyup', val1018));
      }
      
      var val1019 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1019 !== null) {
        subs__.addSub(mobl.domBind(node2038, 'blur', val1019));
      }
      
      node2037.append(node2038);
      node2035.append(node2037);
      
      
      
      
    } else {
      
      var node2039 = $("<input>");
      node2039.attr('type', "password");
      
      var ref1997 = style;
      if(ref1997.get() !== null) {
        node2039.attr('class', ref1997.get());
        subs__.addSub(ref1997.addEventListener('change', function(_, ref, val) {
          node2039.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1997.rebind());
      
      var ref1998 = placeholder;
      if(ref1998.get() !== null) {
        node2039.attr('placeholder', ref1998.get());
        subs__.addSub(ref1998.addEventListener('change', function(_, ref, val) {
          node2039.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1998.rebind());
      
      var ref1999 = s;
      node2039.val(""+ref1999.get());
      var ignore394 = false;
      subs__.addSub(ref1999.addEventListener('change', function(_, ref, val) {
        if(ignore394) return;
        node2039.val(""+val);
      }));
      subs__.addSub(ref1999.rebind());
      
      subs__.addSub(mobl.domBind(node2039, 'keyup change', function() {
        ignore394 = true;
        s.set(mobl.stringTomobl__String(node2039.val()));
        ignore394 = false;
      }));
      
      
      var val1020 = onchange.get();
      if(val1020 !== null) {
        subs__.addSub(mobl.domBind(node2039, 'change', val1020));
      }
      
      var val1021 = onkeyup.get();
      if(val1021 !== null) {
        subs__.addSub(mobl.domBind(node2039, 'keyup', val1021));
      }
      
      var val1022 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1022 !== null) {
        subs__.addSub(mobl.domBind(node2039, 'blur', val1022));
      }
      
      node2035.append(node2039);
      
      
    }
  };
  renderCond502();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond502();
  }));
  
  callback(root5834); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root5835 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2004 = style;
  if(ref2004.get() !== null) {
    sel.attr('class', ref2004.get());
    subs__.addSub(ref2004.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2004.rebind());
  
  var val1023 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after314(result__) {
                    var tmp4174 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after314);if(result__ !== undefined) after314(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1023 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1023));
  }
  
  
  var node2040 = mobl.loadingSpan();
  sel.append(node2040);
  var list343;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList343 = function() {
    var subs__ = listSubs__;
    list343 = options.get();
    list343.list(function(results343) {
      node2040.empty();
      for(var i1189 = 0; i1189 < results343.length; i1189++) {
        (function() {
          var iternode343 = $("<span>");
          node2040.append(iternode343);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results343), i1189), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results343), i1189), "_2");
          
          var node2041 = $("<option>");
          
          var ref2000 = optionDescription;
          node2041.text(""+ref2000.get());
          var ignore395 = false;
          subs__.addSub(ref2000.addEventListener('change', function(_, ref, val) {
            if(ignore395) return;
            node2041.text(""+val);
          }));
          subs__.addSub(ref2000.rebind());
          
          
          var ref2001 = optionStyle;
          if(ref2001.get() !== null) {
            node2041.attr('class', ref2001.get());
            subs__.addSub(ref2001.addEventListener('change', function(_, ref, val) {
              node2041.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2001.rebind());
          
          var ref2002 = optionValue;
          if(ref2002.get() !== null) {
            node2041.attr('value', ref2002.get());
            subs__.addSub(ref2002.addEventListener('change', function(_, ref, val) {
              node2041.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2002.rebind());
          
          var ref2003 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2003.get() !== null) {
            node2041.attr('selected', ref2003.get());
            subs__.addSub(ref2003.addEventListener('change', function(_, ref, val) {
              node2041.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2041.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2041.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2003.rebind());
          
          iternode343.append(node2041);
          
          var oldNodes = iternode343;
          iternode343 = iternode343.contents();
          oldNodes.replaceWith(iternode343);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list343.addEventListener('change', function() { listSubs__.unsubscribe(); renderList343(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList343(true); }));
    });
  };
  renderList343();
  
  root5835.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root5835); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root5836 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes4496 = $("<span>");
    root5836.append(nodes4496);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5837 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2042 = mobl.loadingSpan();
      root5837.append(node2042);
      var list344;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList344 = function() {
        var subs__ = listSubs__;
        list344 = tabs.get();
        list344.list(function(results344) {
          node2042.empty();
          for(var i1190 = 0; i1190 < results344.length; i1190++) {
            (function() {
              var iternode344 = $("<span>");
              node2042.append(iternode344);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results344), i1190), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results344), i1190), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results344), i1190), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp4136 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4136.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4136.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp4136.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp4136.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp4135 = mobl.ref(result__);
              
              var nodes4497 = $("<span>");
              iternode344.append(nodes4497);
              subs__.addSub((mobl.span)(tmp4136, mobl.ref(null), tmp4135, mobl.ref(null), function(_, callback) {
                var root5838 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4498 = $("<span>");
                root5838.append(nodes4498);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root5839 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5839); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4498;
                  nodes4498 = node.contents();
                  oldNodes.replaceWith(nodes4498);
                }));
                callback(root5838); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4497;
                nodes4497 = node.contents();
                oldNodes.replaceWith(nodes4497);
              }));
              
              var oldNodes = iternode344;
              iternode344 = iternode344.contents();
              oldNodes.replaceWith(iternode344);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list344.addEventListener('change', function() { listSubs__.unsubscribe(); renderList344(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList344(true); }));
        });
      };
      renderList344();
      
      callback(root5837); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4496;
      nodes4496 = node.contents();
      oldNodes.replaceWith(nodes4496);
    }));
    
    var node2043 = mobl.loadingSpan();
    root5836.append(node2043);
    var list345;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList345 = function() {
      var subs__ = listSubs__;
      list345 = tabs.get();
      list345.list(function(results345) {
        node2043.empty();
        for(var i1191 = 0; i1191 < results345.length; i1191++) {
          (function() {
            var iternode345 = $("<span>");
            node2043.append(iternode345);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results345), i1191), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results345), i1191), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results345), i1191), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp4137 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp4137.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4137.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp4137.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp4137.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes4499 = $("<span>");
            iternode345.append(nodes4499);
            subs__.addSub((mobl.block)(tmp4137, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5840 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4500 = $("<span>");
              root5840.append(nodes4500);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root5841 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4501 = $("<span>");
                root5841.append(nodes4501);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl800();
                }));
                
                function renderControl800() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root5842 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5842); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4501;
                    nodes4501 = node.contents();
                    oldNodes.replaceWith(nodes4501);
                  }));
                }
                renderControl800();
                callback(root5841); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4500;
                nodes4500 = node.contents();
                oldNodes.replaceWith(nodes4500);
              }));
              callback(root5840); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4499;
              nodes4499 = node.contents();
              oldNodes.replaceWith(nodes4499);
            }));
            
            var oldNodes = iternode345;
            iternode345 = iternode345.contents();
            oldNodes.replaceWith(iternode345);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list345.addEventListener('change', function() { listSubs__.unsubscribe(); renderList345(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList345(true); }));
      });
    };
    renderList345();
    
    callback(root5836); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes4496 = $("<span>");
      root5836.append(nodes4496);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5837 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2042 = mobl.loadingSpan();
        root5837.append(node2042);
        var list344;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList344 = function() {
          var subs__ = listSubs__;
          list344 = tabs.get();
          list344.list(function(results344) {
            node2042.empty();
            for(var i1190 = 0; i1190 < results344.length; i1190++) {
              (function() {
                var iternode344 = $("<span>");
                node2042.append(iternode344);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results344), i1190), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results344), i1190), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results344), i1190), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp4136 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp4136.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp4136.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp4136.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp4136.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4135 = mobl.ref(result__);
                
                var nodes4497 = $("<span>");
                iternode344.append(nodes4497);
                subs__.addSub((mobl.span)(tmp4136, mobl.ref(null), tmp4135, mobl.ref(null), function(_, callback) {
                  var root5838 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4498 = $("<span>");
                  root5838.append(nodes4498);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root5839 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5839); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4498;
                    nodes4498 = node.contents();
                    oldNodes.replaceWith(nodes4498);
                  }));
                  callback(root5838); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4497;
                  nodes4497 = node.contents();
                  oldNodes.replaceWith(nodes4497);
                }));
                
                var oldNodes = iternode344;
                iternode344 = iternode344.contents();
                oldNodes.replaceWith(iternode344);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list344.addEventListener('change', function() { listSubs__.unsubscribe(); renderList344(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList344(true); }));
          });
        };
        renderList344();
        
        callback(root5837); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4496;
        nodes4496 = node.contents();
        oldNodes.replaceWith(nodes4496);
      }));
      
      var node2043 = mobl.loadingSpan();
      root5836.append(node2043);
      var list345;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList345 = function() {
        var subs__ = listSubs__;
        list345 = tabs.get();
        list345.list(function(results345) {
          node2043.empty();
          for(var i1191 = 0; i1191 < results345.length; i1191++) {
            (function() {
              var iternode345 = $("<span>");
              node2043.append(iternode345);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results345), i1191), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results345), i1191), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results345), i1191), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp4137 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4137.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4137.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp4137.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp4137.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes4499 = $("<span>");
              iternode345.append(nodes4499);
              subs__.addSub((mobl.block)(tmp4137, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root5840 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4500 = $("<span>");
                root5840.append(nodes4500);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root5841 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4501 = $("<span>");
                  root5841.append(nodes4501);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl800();
                  }));
                  
                  function renderControl800() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root5842 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5842); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4501;
                      nodes4501 = node.contents();
                      oldNodes.replaceWith(nodes4501);
                    }));
                  }
                  renderControl800();
                  callback(root5841); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4500;
                  nodes4500 = node.contents();
                  oldNodes.replaceWith(nodes4500);
                }));
                callback(root5840); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4499;
                nodes4499 = node.contents();
                oldNodes.replaceWith(nodes4499);
              }));
              
              var oldNodes = iternode345;
              iternode345 = iternode345.contents();
              oldNodes.replaceWith(iternode345);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list345.addEventListener('change', function() { listSubs__.unsubscribe(); renderList345(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList345(true); }));
        });
      };
      renderList345();
      
      callback(root5836); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root5843 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2044 = $("<div>");
  
  var ref2008 = mobl.ref(ui.searchboxStyle);
  if(ref2008.get() !== null) {
    node2044.attr('class', ref2008.get());
    subs__.addSub(ref2008.addEventListener('change', function(_, ref, val) {
      node2044.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2008.rebind());
  
  
  var node2045 = $("<input>");
  node2045.attr('type', "search");
  
  var ref2005 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2005.get() !== null) {
    node2045.attr('class', ref2005.get());
    subs__.addSub(ref2005.addEventListener('change', function(_, ref, val) {
      node2045.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2005.rebind());
  
  var ref2006 = placeholder;
  if(ref2006.get() !== null) {
    node2045.attr('placeholder', ref2006.get());
    subs__.addSub(ref2006.addEventListener('change', function(_, ref, val) {
      node2045.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2006.rebind());
  
  var ref2007 = s;
  node2045.val(""+ref2007.get());
  var ignore396 = false;
  subs__.addSub(ref2007.addEventListener('change', function(_, ref, val) {
    if(ignore396) return;
    node2045.val(""+val);
  }));
  subs__.addSub(ref2007.rebind());
  
  subs__.addSub(mobl.domBind(node2045, 'keyup change', function() {
    ignore396 = true;
    s.set(mobl.stringTomobl__String(node2045.val()));
    ignore396 = false;
  }));
  
  
  var val1024 = onsearch.get();
  if(val1024 !== null) {
    subs__.addSub(mobl.domBind(node2045, 'change', val1024));
  }
  
  var val1025 = onkeyup.get();
  if(val1025 !== null) {
    subs__.addSub(mobl.domBind(node2045, 'keyup', val1025));
  }
  node2045.attr('autocorrect', false);
  node2045.attr('autocapitalize', false);
  node2045.attr('autocomplete', false);
  
  node2044.append(node2045);
  root5843.append(node2044);
  callback(root5843); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root5844 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2009 = mobl.ref(ui.contextMenuStyle);
  if(ref2009.get() !== null) {
    menu.attr('class', ref2009.get());
    subs__.addSub(ref2009.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2009.rebind());
  
  var nodes4502 = $("<span>");
  menu.append(nodes4502);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl801();
  }));
  
  function renderControl801() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5845 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5845); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4502;
      nodes4502 = node.contents();
      oldNodes.replaceWith(nodes4502);
    }));
  }
  renderControl801();
  root5844.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1026 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp4177 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1026 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1026));
  }
  
  root5844.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root5844); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root5846 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp4162 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4162.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2046 = $("<span>");
  root5846.append(node2046);
  var condSubs503 = new mobl.CompSubscription();
  subs__.addSub(condSubs503);
  var oldValue503;
  var renderCond503 = function() {
    var value2407 = tmp4162.get();
    if(oldValue503 === value2407) return;
    oldValue503 = value2407;
    var subs__ = condSubs503;
    subs__.unsubscribe();
    node2046.empty();
    if(value2407) {
      items.get().one(function(result__) {
        var tmp4178 = result__;
        var current = mobl.ref(result__);
        
        var node2047 = $("<div>");
        node2047.attr('width', "100%");
        
        
        var node2048 = $("<div>");
        node2048.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes4505 = $("<span>");
        node2048.append(nodes4505);
        subs__.addSub((ui.group)(function(_, callback) {
          var root5849 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2051 = mobl.loadingSpan();
          root5849.append(node2051);
          var list346;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList346 = function() {
            var subs__ = listSubs__;
            list346 = items.get();
            list346.list(function(results346) {
              node2051.empty();
              for(var i1192 = 0; i1192 < results346.length; i1192++) {
                (function() {
                  var iternode346 = $("<span>");
                  node2051.append(iternode346);
                  var it;
                  it = mobl.ref(mobl.ref(results346), i1192);
                  var result__ = it.get() == current.get();
                  var tmp4143 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4143.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4143.set(it.get() == current.get());
                  }));
                  
                  
                  var node2052 = $("<span>");
                  iternode346.append(node2052);
                  var condSubs505 = new mobl.CompSubscription();
                  subs__.addSub(condSubs505);
                  var oldValue505;
                  var renderCond505 = function() {
                    var value2409 = tmp4143.get();
                    if(oldValue505 === value2409) return;
                    oldValue505 = value2409;
                    var subs__ = condSubs505;
                    subs__.unsubscribe();
                    node2052.empty();
                    if(value2409) {
                      var nodes4506 = $("<span>");
                      node2052.append(nodes4506);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root5850 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4507 = $("<span>");
                        root5850.append(nodes4507);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl803();
                        }));
                        
                        function renderControl803() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5851 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5851); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4507;
                            nodes4507 = node.contents();
                            oldNodes.replaceWith(nodes4507);
                          }));
                        }
                        renderControl803();
                        callback(root5850); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4506;
                        nodes4506 = node.contents();
                        oldNodes.replaceWith(nodes4506);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp4142 = mobl.ref(result__);
                      
                      var nodes4508 = $("<span>");
                      node2052.append(nodes4508);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4142, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root5852 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4509 = $("<span>");
                        root5852.append(nodes4509);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl804();
                        }));
                        
                        function renderControl804() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5853 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5853); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4509;
                            nodes4509 = node.contents();
                            oldNodes.replaceWith(nodes4509);
                          }));
                        }
                        renderControl804();
                        callback(root5852); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4508;
                        nodes4508 = node.contents();
                        oldNodes.replaceWith(nodes4508);
                      }));
                      
                      
                    }
                  };
                  renderCond505();
                  subs__.addSub(tmp4143.addEventListener('change', function() {
                    renderCond505();
                  }));
                  
                  
                  var oldNodes = iternode346;
                  iternode346 = iternode346.contents();
                  oldNodes.replaceWith(iternode346);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list346.addEventListener('change', function() { listSubs__.unsubscribe(); renderList346(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList346(true); }));
            });
          };
          renderList346();
          
          callback(root5849); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4505;
          nodes4505 = node.contents();
          oldNodes.replaceWith(nodes4505);
        }));
        node2047.append(node2048);
        
        var node2049 = $("<div>");
        node2049.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2050 = $("<span>");
        node2049.append(node2050);
        var condSubs504 = new mobl.CompSubscription();
        subs__.addSub(condSubs504);
        var oldValue504;
        var renderCond504 = function() {
          var value2408 = current.get();
          if(oldValue504 === value2408) return;
          oldValue504 = value2408;
          var subs__ = condSubs504;
          subs__.unsubscribe();
          node2050.empty();
          if(value2408) {
            var nodes4503 = $("<span>");
            node2050.append(nodes4503);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl802();
            }));
            
            function renderControl802() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root5847 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5847); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4503;
                nodes4503 = node.contents();
                oldNodes.replaceWith(nodes4503);
              }));
            }
            renderControl802();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp4144 = mobl.ref(result__);
            
            var nodes4504 = $("<span>");
            node2050.append(nodes4504);
            subs__.addSub((mobl.label)(tmp4144, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5848 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5848); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4504;
              nodes4504 = node.contents();
              oldNodes.replaceWith(nodes4504);
            }));
            
            
          }
        };
        renderCond504();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond504();
        }));
        
        node2047.append(node2049);
        node2046.append(node2047);
        
        
        
        
        
        
      });
    } else {
      var nodes4510 = $("<span>");
      node2046.append(nodes4510);
      subs__.addSub((ui.group)(function(_, callback) {
        var root5854 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2053 = mobl.loadingSpan();
        root5854.append(node2053);
        var list347;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList347 = function() {
          var subs__ = listSubs__;
          list347 = items.get();
          list347.list(function(results347) {
            node2053.empty();
            for(var i1193 = 0; i1193 < results347.length; i1193++) {
              (function() {
                var iternode347 = $("<span>");
                node2053.append(iternode347);
                var it;
                it = mobl.ref(mobl.ref(results347), i1193);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4179 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp4138 = mobl.ref(result__);
                
                var nodes4511 = $("<span>");
                iternode347.append(nodes4511);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4138, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5855 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4512 = $("<span>");
                  root5855.append(nodes4512);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl805();
                  }));
                  
                  function renderControl805() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root5856 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5856); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4512;
                      nodes4512 = node.contents();
                      oldNodes.replaceWith(nodes4512);
                    }));
                  }
                  renderControl805();
                  callback(root5855); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4511;
                  nodes4511 = node.contents();
                  oldNodes.replaceWith(nodes4511);
                }));
                
                var oldNodes = iternode347;
                iternode347 = iternode347.contents();
                oldNodes.replaceWith(iternode347);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list347.addEventListener('change', function() { listSubs__.unsubscribe(); renderList347(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList347(true); }));
          });
        };
        renderList347();
        
        callback(root5854); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4510;
        nodes4510 = node.contents();
        oldNodes.replaceWith(nodes4510);
      }));
      
      
    }
  };
  renderCond503();
  subs__.addSub(tmp4162.addEventListener('change', function() {
    renderCond503();
  }));
  
  callback(root5846); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root5857 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp4141 = mobl.ref(result__);
  
  var nodes4513 = $("<span>");
  root5857.append(nodes4513);
  subs__.addSub((ui.header)(tmp4141, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5858 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4140 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4139 = mobl.ref(result__);
    
    var nodes4514 = $("<span>");
    root5858.append(nodes4514);
    subs__.addSub((ui.backButton)(tmp4139, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4140, function(_, callback) {
      var root5859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5859); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4514;
      nodes4514 = node.contents();
      oldNodes.replaceWith(nodes4514);
    }));
    callback(root5858); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4513;
    nodes4513 = node.contents();
    oldNodes.replaceWith(nodes4513);
  }));
  var nodes4515 = $("<span>");
  root5857.append(nodes4515);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl806();
  }));
  
  function renderControl806() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5860 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5860); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4515;
      nodes4515 = node.contents();
      oldNodes.replaceWith(nodes4515);
    }));
  }
  renderControl806();
  callback(root5857); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root5861 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes4516 = $("<span>");
  root5861.append(nodes4516);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5862 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2054 = mobl.loadingSpan();
    root5862.append(node2054);
    var list348;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList348 = function() {
      var subs__ = listSubs__;
      list348 = coll.get();
      list348.list(function(results348) {
        node2054.empty();
        for(var i1194 = 0; i1194 < results348.length; i1194++) {
          (function() {
            var iternode348 = $("<span>");
            node2054.append(iternode348);
            var it;
            it = mobl.ref(mobl.ref(results348), i1194);
            var result__ = it.get() == selected.get();
            var tmp4146 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp4146.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp4146.set(it.get() == selected.get());
            }));
            
            
            var node2055 = $("<span>");
            iternode348.append(node2055);
            var condSubs506 = new mobl.CompSubscription();
            subs__.addSub(condSubs506);
            var oldValue506;
            var renderCond506 = function() {
              var value2410 = tmp4146.get();
              if(oldValue506 === value2410) return;
              oldValue506 = value2410;
              var subs__ = condSubs506;
              subs__.unsubscribe();
              node2055.empty();
              if(value2410) {
                var nodes4517 = $("<span>");
                node2055.append(nodes4517);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5863 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4518 = $("<span>");
                  root5863.append(nodes4518);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl807();
                  }));
                  
                  function renderControl807() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root5864 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5864); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4518;
                      nodes4518 = node.contents();
                      oldNodes.replaceWith(nodes4518);
                    }));
                  }
                  renderControl807();
                  callback(root5863); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4517;
                  nodes4517 = node.contents();
                  oldNodes.replaceWith(nodes4517);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4145 = mobl.ref(result__);
                
                var nodes4519 = $("<span>");
                node2055.append(nodes4519);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4145, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root5865 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4520 = $("<span>");
                  root5865.append(nodes4520);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl808();
                  }));
                  
                  function renderControl808() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root5866 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5866); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4520;
                      nodes4520 = node.contents();
                      oldNodes.replaceWith(nodes4520);
                    }));
                  }
                  renderControl808();
                  callback(root5865); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4519;
                  nodes4519 = node.contents();
                  oldNodes.replaceWith(nodes4519);
                }));
                
                
              }
            };
            renderCond506();
            subs__.addSub(tmp4146.addEventListener('change', function() {
              renderCond506();
            }));
            
            
            var oldNodes = iternode348;
            iternode348 = iternode348.contents();
            oldNodes.replaceWith(iternode348);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list348.addEventListener('change', function() { listSubs__.unsubscribe(); renderList348(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList348(true); }));
      });
    };
    renderList348();
    
    callback(root5862); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4516;
    nodes4516 = node.contents();
    oldNodes.replaceWith(nodes4516);
  }));
  callback(root5861); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root5867 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp4180 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp4147 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp4147.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp4147.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp4147.set(coll.get().limit(n.get()));
    }));
    
    
    var node2056 = mobl.loadingSpan();
    root5867.append(node2056);
    var list349;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList349 = function() {
      var subs__ = listSubs__;
      list349 = tmp4147.get();
      list349.list(function(results349) {
        node2056.empty();
        for(var i1195 = 0; i1195 < results349.length; i1195++) {
          (function() {
            var iternode349 = $("<span>");
            node2056.append(iternode349);
            var it;
            it = mobl.ref(mobl.ref(results349), i1195);
            var nodes4521 = $("<span>");
            iternode349.append(nodes4521);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl809();
            }));
            
            function renderControl809() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root5868 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5868); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4521;
                nodes4521 = node.contents();
                oldNodes.replaceWith(nodes4521);
              }));
            }
            renderControl809();
            
            var oldNodes = iternode349;
            iternode349 = iternode349.contents();
            oldNodes.replaceWith(iternode349);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list349.addEventListener('change', function() { listSubs__.unsubscribe(); renderList349(true); }));
        subs__.addSub(tmp4147.addEventListener('change', function() { listSubs__.unsubscribe(); renderList349(true); }));
      });
    };
    renderList349();
    
    var result__ = n.get() < total.get();
    var tmp4149 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp4149.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp4149.set(n.get() < total.get());
    }));
    
    
    var node2057 = $("<span>");
    root5867.append(node2057);
    var condSubs507 = new mobl.CompSubscription();
    subs__.addSub(condSubs507);
    var oldValue507;
    var renderCond507 = function() {
      var value2411 = tmp4149.get();
      if(oldValue507 === value2411) return;
      oldValue507 = value2411;
      var subs__ = condSubs507;
      subs__.unsubscribe();
      node2057.empty();
      if(value2411) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4148 = mobl.ref(result__);
        
        var nodes4522 = $("<span>");
        node2057.append(nodes4522);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp4148, mobl.ref(null), function(_, callback) {
          var root5869 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes4523 = $("<span>");
          root5869.append(nodes4523);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root5870 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5870); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4523;
            nodes4523 = node.contents();
            oldNodes.replaceWith(nodes4523);
          }));
          callback(root5869); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4522;
          nodes4522 = node.contents();
          oldNodes.replaceWith(nodes4522);
        }));
        
        
      } else {
        
      }
    };
    renderCond507();
    subs__.addSub(tmp4149.addEventListener('change', function() {
      renderCond507();
    }));
    
    callback(root5867); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root5871 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4524 = $("<span>");
  root5871.append(nodes4524);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5872 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2058 = mobl.loadingSpan();
    root5872.append(node2058);
    var list350;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList350 = function() {
      var subs__ = listSubs__;
      list350 = items.get();
      list350.list(function(results350) {
        node2058.empty();
        for(var i1196 = 0; i1196 < results350.length; i1196++) {
          (function() {
            var iternode350 = $("<span>");
            node2058.append(iternode350);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results350), i1196), "_1");it = mobl.ref(mobl.ref(mobl.ref(results350), i1196), "_2");
            var nodes4525 = $("<span>");
            iternode350.append(nodes4525);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root5873 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4526 = $("<span>");
              root5873.append(nodes4526);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root5874 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5874); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4526;
                nodes4526 = node.contents();
                oldNodes.replaceWith(nodes4526);
              }));
              callback(root5873); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4525;
              nodes4525 = node.contents();
              oldNodes.replaceWith(nodes4525);
            }));
            
            var oldNodes = iternode350;
            iternode350 = iternode350.contents();
            oldNodes.replaceWith(iternode350);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list350.addEventListener('change', function() { listSubs__.unsubscribe(); renderList350(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList350(true); }));
      });
    };
    renderList350();
    
    callback(root5872); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4524;
    nodes4524 = node.contents();
    oldNodes.replaceWith(nodes4524);
  }));
  callback(root5871); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root5875 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll3042) {
    coll3042 = coll3042.reverse();
    function processOne186() {
      var it;
      it = coll3042.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll3042.length > 0) processOne186(); else rest186();
      
    }
    function rest186() {
      var nodes4527 = $("<span>");
      root5875.append(nodes4527);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root5876 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4150 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp4151 = mobl.ref(result__);
        
        var nodes4528 = $("<span>");
        root5876.append(nodes4528);
        subs__.addSub((ui.backButton)(tmp4151, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4150, function(_, callback) {
          var root5877 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5877); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4528;
          nodes4528 = node.contents();
          oldNodes.replaceWith(nodes4528);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll3041) {
                           coll3041 = coll3041.reverse();
                           function processOne185() {
                             var checked;var it;
                             var tmp4182 = coll3041.pop();
                             checked = tmp4182._1;it = tmp4182._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll3041.length > 0) processOne185(); else rest185();
                               
                             } else {
                               {
                                 
                                 if(coll3041.length > 0) processOne185(); else rest185();
                                 
                               }
                             }
                           }
                           function rest185() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll3041.length > 0) processOne185(); else rest185();
                         });
                         
                       };
        var tmp4152 = mobl.ref(result__);
        
        var nodes4529 = $("<span>");
        root5876.append(nodes4529);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4152, function(_, callback) {
          var root5878 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5878); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4529;
          nodes4529 = node.contents();
          oldNodes.replaceWith(nodes4529);
        }));
        callback(root5876); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4527;
        nodes4527 = node.contents();
        oldNodes.replaceWith(nodes4527);
      }));
      var nodes4530 = $("<span>");
      root5875.append(nodes4530);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root5879 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5879); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4530;
        nodes4530 = node.contents();
        oldNodes.replaceWith(nodes4530);
      }));
      callback(root5875); return subs__;
      
      
    }
    if(coll3042.length > 0) processOne186(); else rest186();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root5880 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes4531 = $("<span>");
  root5880.append(nodes4531);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5881 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5881); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4531;
    nodes4531 = node.contents();
    oldNodes.replaceWith(nodes4531);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp4153 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp4153.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp4153.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp4153.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp4153.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp4153.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes4532 = $("<span>");
  root5880.append(nodes4532);
  subs__.addSub((ui.masterDetail)(tmp4153, masterItem, detailItem, function(_, callback) {
    var root5882 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5882); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4532;
    nodes4532 = node.contents();
    oldNodes.replaceWith(nodes4532);
  }));
  callback(root5880); return subs__;
  
  
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
  var root5883 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes4533 = $("<span>");
  root5883.append(nodes4533);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5884 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2059 = mobl.loadingSpan();
    root5884.append(node2059);
    var list351;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList351 = function() {
      var subs__ = listSubs__;
      list351 = sections.get();
      list351.list(function(results351) {
        node2059.empty();
        for(var i1197 = 0; i1197 < results351.length; i1197++) {
          (function() {
            var iternode351 = $("<span>");
            node2059.append(iternode351);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results351), i1197), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results351), i1197), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp4155 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4155.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4155.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp4155.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp4155.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp4154 = mobl.ref(result__);
            
            var nodes4534 = $("<span>");
            iternode351.append(nodes4534);
            subs__.addSub((mobl.span)(tmp4155, mobl.ref(null), tmp4154, mobl.ref(null), function(_, callback) {
              var root5885 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4535 = $("<span>");
              root5885.append(nodes4535);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root5886 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5886); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4535;
                nodes4535 = node.contents();
                oldNodes.replaceWith(nodes4535);
              }));
              callback(root5885); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4534;
              nodes4534 = node.contents();
              oldNodes.replaceWith(nodes4534);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp4156 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4156.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4156.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp4156.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp4156.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes4536 = $("<span>");
            iternode351.append(nodes4536);
            subs__.addSub((mobl.block)(tmp4156, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5887 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4537 = $("<span>");
              root5887.append(nodes4537);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl810();
              }));
              
              function renderControl810() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root5888 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5888); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4537;
                  nodes4537 = node.contents();
                  oldNodes.replaceWith(nodes4537);
                }));
              }
              renderControl810();
              callback(root5887); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4536;
              nodes4536 = node.contents();
              oldNodes.replaceWith(nodes4536);
            }));
            
            var oldNodes = iternode351;
            iternode351 = iternode351.contents();
            oldNodes.replaceWith(iternode351);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list351.addEventListener('change', function() { listSubs__.unsubscribe(); renderList351(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList351(true); }));
      });
    };
    renderList351();
    
    callback(root5884); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4533;
    nodes4533 = node.contents();
    oldNodes.replaceWith(nodes4533);
  }));
  callback(root5883); return subs__;
  
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
  var root5889 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2060 = $("<table>");
  
  var ref2010 = style;
  if(ref2010.get() !== null) {
    node2060.attr('class', ref2010.get());
    subs__.addSub(ref2010.addEventListener('change', function(_, ref, val) {
      node2060.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2010.rebind());
  
  var nodes4538 = $("<span>");
  node2060.append(nodes4538);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl811();
  }));
  
  function renderControl811() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5890 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5890); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4538;
      nodes4538 = node.contents();
      oldNodes.replaceWith(nodes4538);
    }));
  }
  renderControl811();
  root5889.append(node2060);
  callback(root5889); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root5891 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2061 = $("<tr>");
  
  var ref2011 = style;
  if(ref2011.get() !== null) {
    node2061.attr('class', ref2011.get());
    subs__.addSub(ref2011.addEventListener('change', function(_, ref, val) {
      node2061.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2011.rebind());
  
  var nodes4539 = $("<span>");
  node2061.append(nodes4539);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl812();
  }));
  
  function renderControl812() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5892 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5892); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4539;
      nodes4539 = node.contents();
      oldNodes.replaceWith(nodes4539);
    }));
  }
  renderControl812();
  root5891.append(node2061);
  callback(root5891); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root5893 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2062 = $("<td>");
  
  var ref2012 = width;
  if(ref2012.get() !== null) {
    node2062.attr('width', ref2012.get());
    subs__.addSub(ref2012.addEventListener('change', function(_, ref, val) {
      node2062.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2012.rebind());
  
  var ref2013 = style;
  if(ref2013.get() !== null) {
    node2062.attr('class', ref2013.get());
    subs__.addSub(ref2013.addEventListener('change', function(_, ref, val) {
      node2062.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2013.rebind());
  
  var nodes4540 = $("<span>");
  node2062.append(nodes4540);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl813();
  }));
  
  function renderControl813() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5894 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5894); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4540;
      nodes4540 = node.contents();
      oldNodes.replaceWith(nodes4540);
    }));
  }
  renderControl813();
  root5893.append(node2062);
  callback(root5893); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root5895 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2063 = $("<td>");
  
  var ref2014 = width;
  if(ref2014.get() !== null) {
    node2063.attr('width', ref2014.get());
    subs__.addSub(ref2014.addEventListener('change', function(_, ref, val) {
      node2063.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2014.rebind());
  
  var ref2015 = style;
  if(ref2015.get() !== null) {
    node2063.attr('class', ref2015.get());
    subs__.addSub(ref2015.addEventListener('change', function(_, ref, val) {
      node2063.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2015.rebind());
  
  var nodes4541 = $("<span>");
  node2063.append(nodes4541);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl814();
  }));
  
  function renderControl814() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5896 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5896); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4541;
      nodes4541 = node.contents();
      oldNodes.replaceWith(nodes4541);
    }));
  }
  renderControl814();
  root5895.append(node2063);
  callback(root5895); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root5897 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2064 = $("<td>");
  
  var ref2016 = width;
  if(ref2016.get() !== null) {
    node2064.attr('width', ref2016.get());
    subs__.addSub(ref2016.addEventListener('change', function(_, ref, val) {
      node2064.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2016.rebind());
  
  var ref2017 = style;
  if(ref2017.get() !== null) {
    node2064.attr('class', ref2017.get());
    subs__.addSub(ref2017.addEventListener('change', function(_, ref, val) {
      node2064.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2017.rebind());
  
  
  var node2065 = $("<strong>");
  
  var nodes4542 = $("<span>");
  node2065.append(nodes4542);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl815();
  }));
  
  function renderControl815() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5898 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5898); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4542;
      nodes4542 = node.contents();
      oldNodes.replaceWith(nodes4542);
    }));
  }
  renderControl815();
  node2064.append(node2065);
  root5897.append(node2064);
  callback(root5897); return subs__;
  
  
  
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
  items.list(function(coll3043) {
    coll3043 = coll3043.reverse();
    function processOne187() {
      var item;
      item = coll3043.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll3043.length > 0) processOne187(); else rest187();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll3043.length > 0) processOne187(); else rest187();
          
        }
      }
    }
    function rest187() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll3043.length > 0) processOne187(); else rest187();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root5899 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp4184 = result__;
    var current = mobl.ref(result__);
    
    var node2066 = $("<div>");
    node2066.attr('width', "100%");
    
    
    var node2067 = $("<div>");
    node2067.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes4544 = $("<span>");
    node2067.append(nodes4544);
    subs__.addSub((ui.group)(function(_, callback) {
      var root5901 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2072 = mobl.loadingSpan();
      root5901.append(node2072);
      var list352;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList352 = function() {
        var subs__ = listSubs__;
        list352 = items.get();
        list352.list(function(results352) {
          node2072.empty();
          for(var i1198 = 0; i1198 < results352.length; i1198++) {
            (function() {
              var iternode352 = $("<span>");
              node2072.append(iternode352);
              var it;
              it = mobl.ref(mobl.ref(results352), i1198);
              var result__ = it.get() == current.get();
              var tmp4160 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp4160.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp4160.set(it.get() == current.get());
              }));
              
              
              var node2073 = $("<span>");
              iternode352.append(node2073);
              var condSubs509 = new mobl.CompSubscription();
              subs__.addSub(condSubs509);
              var oldValue509;
              var renderCond509 = function() {
                var value2413 = tmp4160.get();
                if(oldValue509 === value2413) return;
                oldValue509 = value2413;
                var subs__ = condSubs509;
                subs__.unsubscribe();
                node2073.empty();
                if(value2413) {
                  var nodes4545 = $("<span>");
                  node2073.append(nodes4545);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root5902 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4196 = result__;
                      var tmp4157 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4194 = result__;
                          var result__ = tmp4194;
                          tmp4157.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4195 = result__;
                          var result__ = tmp4195;
                          tmp4157.set(result__);
                          
                        });
                      }));
                      
                      var nodes4546 = $("<span>");
                      root5902.append(nodes4546);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl817();
                      }));
                      
                      function renderControl817() {
                        subs__.addSub((masterItem.get())(it, tmp4157, function(elements, callback) {
                          var root5903 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root5903); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4546;
                          nodes4546 = node.contents();
                          oldNodes.replaceWith(nodes4546);
                        }));
                      }
                      renderControl817();
                      callback(root5902); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4545;
                    nodes4545 = node.contents();
                    oldNodes.replaceWith(nodes4545);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp4159 = mobl.ref(result__);
                  
                  var nodes4547 = $("<span>");
                  node2073.append(nodes4547);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4159, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root5904 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4199 = result__;
                      var tmp4158 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4197 = result__;
                          var result__ = tmp4197;
                          tmp4158.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4198 = result__;
                          var result__ = tmp4198;
                          tmp4158.set(result__);
                          
                        });
                      }));
                      
                      var nodes4548 = $("<span>");
                      root5904.append(nodes4548);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl818();
                      }));
                      
                      function renderControl818() {
                        subs__.addSub((masterItem.get())(it, tmp4158, function(elements, callback) {
                          var root5905 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root5905); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4548;
                          nodes4548 = node.contents();
                          oldNodes.replaceWith(nodes4548);
                        }));
                      }
                      renderControl818();
                      callback(root5904); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4547;
                    nodes4547 = node.contents();
                    oldNodes.replaceWith(nodes4547);
                  }));
                  
                  
                }
              };
              renderCond509();
              subs__.addSub(tmp4160.addEventListener('change', function() {
                renderCond509();
              }));
              
              
              var oldNodes = iternode352;
              iternode352 = iternode352.contents();
              oldNodes.replaceWith(iternode352);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list352.addEventListener('change', function() { listSubs__.unsubscribe(); renderList352(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList352(true); }));
        });
      };
      renderList352();
      
      callback(root5901); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4544;
      nodes4544 = node.contents();
      oldNodes.replaceWith(nodes4544);
    }));
    node2066.append(node2067);
    
    var node2068 = $("<div>");
    node2068.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    items.get().count(function(result__) {
      var tmp4193 = result__;
      var result__ = tmp4193 != 0;
      var tmp4192 = result__;
      var result__ = current.get() && tmp4192;
      var tmp4191 = result__;
      var tmp4161 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        items.get().count(function(result__) {
          var tmp4187 = result__;
          var result__ = tmp4187 != 0;
          var tmp4186 = result__;
          var result__ = current.get() && tmp4186;
          var tmp4185 = result__;
          var result__ = tmp4185;
          tmp4161.set(result__);
          
        });
      }));
      subs__.addSub(items.addEventListener('change', function() {
        items.get().count(function(result__) {
          var tmp4190 = result__;
          var result__ = tmp4190 != 0;
          var tmp4189 = result__;
          var result__ = current.get() && tmp4189;
          var tmp4188 = result__;
          var result__ = tmp4188;
          tmp4161.set(result__);
          
        });
      }));
      
      
      var node2069 = $("<span>");
      node2068.append(node2069);
      var condSubs508 = new mobl.CompSubscription();
      subs__.addSub(condSubs508);
      var oldValue508;
      var renderCond508 = function() {
        var value2412 = tmp4161.get();
        if(oldValue508 === value2412) return;
        oldValue508 = value2412;
        var subs__ = condSubs508;
        subs__.unsubscribe();
        node2069.empty();
        if(value2412) {
          var nodes4543 = $("<span>");
          node2069.append(nodes4543);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl816();
          }));
          
          function renderControl816() {
            subs__.addSub((detail.get())(current, function(elements, callback) {
              var root5900 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5900); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4543;
              nodes4543 = node.contents();
              oldNodes.replaceWith(nodes4543);
            }));
          }
          renderControl816();
          
          
        } else {
          
          var node2070 = $("<div>");
          node2070.attr('style', "padding:20px");
          
          
          var node2071 = $("<h2>");
          
          
          node2071.append("Add more questions.");
          node2070.append(node2071);
          node2069.append(node2070);
          
          
          
        }
      };
      renderCond508();
      subs__.addSub(tmp4161.addEventListener('change', function() {
        renderCond508();
      }));
      
      node2066.append(node2068);
      root5899.append(node2066);
      callback(root5899); return subs__;
      
    });
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
