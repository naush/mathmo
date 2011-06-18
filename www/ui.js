mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('nrichRPG');
mobl.provides('mobl');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root7636 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3001 = $("<span>");
  root7636.append(node3001);
  var condSubs731 = new mobl.CompSubscription();
  subs__.addSub(condSubs731);
  var oldValue731;
  var renderCond731 = function() {
    var value3047 = value.get();
    if(oldValue731 === value3047) return;
    oldValue731 = value3047;
    var subs__ = condSubs731;
    subs__.unsubscribe();
    node3001.empty();
    if(value3047) {
      var nodes5718 = $("<span>");
      node3001.append(nodes5718);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1212();
      }));
      
      function renderControl1212() {
        subs__.addSub((elements)(function(elements, callback) {
          var root7637 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7637); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5718;
          nodes5718 = node.contents();
          oldNodes.replaceWith(nodes5718);
        }));
      }
      renderControl1212();
      
      
    } else {
      var nodes5719 = $("<span>");
      node3001.append(nodes5719);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7638 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes5720 = $("<span>");
        root7638.append(nodes5720);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root7639 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7639); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5720;
          nodes5720 = node.contents();
          oldNodes.replaceWith(nodes5720);
        }));
        var nodes5721 = $("<span>");
        root7638.append(nodes5721);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root7640 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7640); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5721;
          nodes5721 = node.contents();
          oldNodes.replaceWith(nodes5721);
        }));
        callback(root7638); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5719;
        nodes5719 = node.contents();
        oldNodes.replaceWith(nodes5719);
      }));
      
      
    }
  };
  renderCond731();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond731();
  }));
  
  callback(root7636); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root7641 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3002 = $("<div>");
  
  var ref2973 = mobl.ref(ui.headerStyle);
  if(ref2973.get() !== null) {
    node3002.attr('class', ref2973.get());
    subs__.addSub(ref2973.addEventListener('change', function(_, ref, val) {
      node3002.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2973.rebind());
  
  var val1520 = onclick.get();
  if(val1520 !== null) {
    subs__.addSub(mobl.domBind(node3002, 'tap', val1520));
  }
  
  var ref2974 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2974.get() !== null) {
    node3002.attr('style', ref2974.get());
    subs__.addSub(ref2974.addEventListener('change', function(_, ref, val) {
      node3002.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node3002.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2974.rebind());
  
  
  var node3005 = $("<div>");
  
  var ref2972 = mobl.ref(ui.headerContainerStyle);
  if(ref2972.get() !== null) {
    node3005.attr('class', ref2972.get());
    subs__.addSub(ref2972.addEventListener('change', function(_, ref, val) {
      node3005.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2972.rebind());
  
  
  var node3006 = $("<div>");
  
  var ref2970 = text;
  node3006.text(""+ref2970.get());
  var ignore584 = false;
  subs__.addSub(ref2970.addEventListener('change', function(_, ref, val) {
    if(ignore584) return;
    node3006.text(""+val);
  }));
  subs__.addSub(ref2970.rebind());
  
  
  var ref2971 = mobl.ref(ui.headerTextStyle);
  if(ref2971.get() !== null) {
    node3006.attr('class', ref2971.get());
    subs__.addSub(ref2971.addEventListener('change', function(_, ref, val) {
      node3006.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2971.rebind());
  
  node3005.append(node3006);
  node3002.append(node3005);
  var nodes5722 = $("<span>");
  node3002.append(nodes5722);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1213();
  }));
  
  function renderControl1213() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7642 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7642); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5722;
      nodes5722 = node.contents();
      oldNodes.replaceWith(nodes5722);
    }));
  }
  renderControl1213();
  root7641.append(node3002);
  
  var node3003 = $("<span>");
  root7641.append(node3003);
  var condSubs732 = new mobl.CompSubscription();
  subs__.addSub(condSubs732);
  var oldValue732;
  var renderCond732 = function() {
    var value3048 = fixedPosition.get();
    if(oldValue732 === value3048) return;
    oldValue732 = value3048;
    var subs__ = condSubs732;
    subs__.unsubscribe();
    node3003.empty();
    if(value3048) {
      
      var node3004 = $("<div>");
      node3004.attr('id', "hello");
      node3004.attr('style', "height: 2.9em;");
      
      node3003.append(node3004);
      
      
    } else {
      
    }
  };
  renderCond732();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond732();
  }));
  
  callback(root7641); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7643 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2975 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2975.get() !== null) {
    sp.attr('class', ref2975.get());
    subs__.addSub(ref2975.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2975.rebind());
  
  var val1521 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1521 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1521));
  }
  
  var val1522 = function(event, callback) {
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
  if(val1522 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1522));
  }
  
  var val1523 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after468(result__) {
                    var tmp5228 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after468);if(result__ !== undefined) after468(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1523 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1523));
  }
  
  var val1524 = function(event, callback) {
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
  if(val1524 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1524));
  }
  
  var ref2976 = text;
  sp.text(""+ref2976.get());
  var ignore585 = false;
  subs__.addSub(ref2976.addEventListener('change', function(_, ref, val) {
    if(ignore585) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2976.rebind());
  
  
  root7643.append(sp);
  callback(root7643); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7644 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5723 = $("<span>");
  root7644.append(nodes5723);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root7645 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7645); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5723;
    nodes5723 = node.contents();
    oldNodes.replaceWith(nodes5723);
  }));
  callback(root7644); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7646 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5724 = $("<span>");
  root7646.append(nodes5724);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root7647 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7647); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5724;
    nodes5724 = node.contents();
    oldNodes.replaceWith(nodes5724);
  }));
  callback(root7646); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root7648 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3007 = $("<ul>");
  
  var ref2977 = mobl.ref(ui.groupStyle);
  if(ref2977.get() !== null) {
    node3007.attr('class', ref2977.get());
    subs__.addSub(ref2977.addEventListener('change', function(_, ref, val) {
      node3007.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2977.rebind());
  
  var nodes5725 = $("<span>");
  node3007.append(nodes5725);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1214();
  }));
  
  function renderControl1214() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7649 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7649); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5725;
      nodes5725 = node.contents();
      oldNodes.replaceWith(nodes5725);
    }));
  }
  renderControl1214();
  root7648.append(node3007);
  callback(root7648); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root7650 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3008 = $("<img>");
  
  var ref2978 = url;
  if(ref2978.get() !== null) {
    node3008.attr('src', ref2978.get());
    subs__.addSub(ref2978.addEventListener('change', function(_, ref, val) {
      node3008.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2978.rebind());
  
  var ref2979 = width;
  if(ref2979.get() !== null) {
    node3008.attr('width', ref2979.get());
    subs__.addSub(ref2979.addEventListener('change', function(_, ref, val) {
      node3008.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2979.rebind());
  
  var ref2980 = height;
  if(ref2980.get() !== null) {
    node3008.attr('height', ref2980.get());
    subs__.addSub(ref2980.addEventListener('change', function(_, ref, val) {
      node3008.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2980.rebind());
  
  var ref2981 = style;
  if(ref2981.get() !== null) {
    node3008.attr('class', ref2981.get());
    subs__.addSub(ref2981.addEventListener('change', function(_, ref, val) {
      node3008.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2981.rebind());
  
  var val1525 = onclick.get();
  if(val1525 !== null) {
    subs__.addSub(mobl.domBind(node3008, 'tap', val1525));
  }
  
  var ref2982 = valign;
  if(ref2982.get() !== null) {
    node3008.attr('valign', ref2982.get());
    subs__.addSub(ref2982.addEventListener('change', function(_, ref, val) {
      node3008.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2982.rebind());
  
  var ref2983 = align;
  if(ref2983.get() !== null) {
    node3008.attr('align', ref2983.get());
    subs__.addSub(ref2983.addEventListener('change', function(_, ref, val) {
      node3008.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2983.rebind());
  
  root7650.append(node3008);
  callback(root7650); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root7651 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2984 = mobl.ref(ui.itemStyle);
  if(ref2984.get() !== null) {
    el.attr('class', ref2984.get());
    subs__.addSub(ref2984.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2984.rebind());
  
  var ref2985 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2985.get() !== null) {
    el.attr('class', ref2985.get());
    subs__.addSub(ref2985.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2985.rebind());
  
  var val1526 = onswipe.get();
  if(val1526 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1526));
  }
  
  var val1527 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp5229 = result__;
                                           function after469(result__) {
                                             var tmp5230 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after469);if(result__ !== undefined) after469(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp5231 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1527 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1527));
  }
  
  var nodes5726 = $("<span>");
  el.append(nodes5726);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1215();
  }));
  
  function renderControl1215() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7652 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7652); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5726;
      nodes5726 = node.contents();
      oldNodes.replaceWith(nodes5726);
    }));
  }
  renderControl1215();
  root7651.append(el);
  callback(root7651); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root7653 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3009 = $("<input>");
  node3009.attr('type', "checkbox");
  
  var ref2987 = b;
  node3009.attr('checked', !!ref2987.get());
  subs__.addSub(ref2987.addEventListener('change', function(_, ref, val) {
    if(ref === ref2987) node3009.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node3009, 'change', function() {
    b.set(!!node3009.attr('checked'));
  }));
  
  var val1529 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1529 !== null) {
    subs__.addSub(mobl.domBind(node3009, 'tap', val1529));
  }
  
  var val1530 = onchange.get();
  if(val1530 !== null) {
    subs__.addSub(mobl.domBind(node3009, 'change', val1530));
  }
  
  root7653.append(node3009);
  
  root7653.append(" ");
  
  var node3010 = $("<span>");
  
  var ref2986 = label;
  node3010.text(""+ref2986.get());
  var ignore586 = false;
  subs__.addSub(ref2986.addEventListener('change', function(_, ref, val) {
    if(ignore586) return;
    node3010.text(""+val);
  }));
  subs__.addSub(ref2986.rebind());
  
  
  var val1528 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after470(result__) {
                    var tmp5232 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after470);if(result__ !== undefined) after470(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1528 !== null) {
    subs__.addSub(mobl.domBind(node3010, 'tap', val1528));
  }
  
  root7653.append(node3010);
  callback(root7653); return subs__;
  
  
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
  var root7654 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3011 = $("<span>");
  root7654.append(node3011);
  var condSubs733 = new mobl.CompSubscription();
  subs__.addSub(condSubs733);
  var oldValue733;
  var renderCond733 = function() {
    var value3049 = label.get();
    if(oldValue733 === value3049) return;
    oldValue733 = value3049;
    var subs__ = condSubs733;
    subs__.unsubscribe();
    node3011.empty();
    if(value3049) {
      var nodes5727 = $("<span>");
      node3011.append(nodes5727);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root7655 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7655); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5727;
        nodes5727 = node.contents();
        oldNodes.replaceWith(nodes5727);
      }));
      
      
    } else {
      
    }
  };
  renderCond733();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond733();
  }));
  
  
  var node3012 = $("<span>");
  root7654.append(node3012);
  var condSubs734 = new mobl.CompSubscription();
  subs__.addSub(condSubs734);
  var oldValue734;
  var renderCond734 = function() {
    var value3050 = validator.get();
    if(oldValue734 === value3050) return;
    oldValue734 = value3050;
    var subs__ = condSubs734;
    subs__.unsubscribe();
    node3012.empty();
    if(value3050) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after474(result__) {
        var tmp5233 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp5234 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node3013 = $("<input>");
        
        var ref2988 = inputType;
        if(ref2988.get() !== null) {
          node3013.attr('type', ref2988.get());
          subs__.addSub(ref2988.addEventListener('change', function(_, ref, val) {
            node3013.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2988.rebind());
        
        var ref2989 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2989.get() !== null) {
          node3013.attr('class', ref2989.get());
          subs__.addSub(ref2989.addEventListener('change', function(_, ref, val) {
            node3013.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node3013.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node3013.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node3013.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2989.rebind());
        
        var ref2990 = placeholder;
        if(ref2990.get() !== null) {
          node3013.attr('placeholder', ref2990.get());
          subs__.addSub(ref2990.addEventListener('change', function(_, ref, val) {
            node3013.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2990.rebind());
        
        var ref2991 = temp;
        node3013.val(""+ref2991.get());
        var ignore587 = false;
        subs__.addSub(ref2991.addEventListener('change', function(_, ref, val) {
          if(ignore587) return;
          node3013.val(""+val);
        }));
        subs__.addSub(ref2991.rebind());
        
        subs__.addSub(mobl.domBind(node3013, 'keyup change', function() {
          ignore587 = true;
          temp.set(mobl.stringTomobl__String(node3013.val()));
          ignore587 = false;
        }));
        
        
        var val1531 = onchange.get();
        if(val1531 !== null) {
          subs__.addSub(mobl.domBind(node3013, 'change', val1531));
        }
        
        var val1532 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after471(result__) {
                          var tmp5235 = result__;
                          function after472(result__) {
                            var tmp5236 = result__;
                            var result__ = tmp5236;
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
                          var result__ = validator.get()(temp.get(), after472);if(result__ !== undefined) after472(result__);
                        }
                        var result__ = onkeyup.get()(event, after471);if(result__ !== undefined) after471(result__);
                      } else {
                        {
                          function after473(result__) {
                            var tmp5236 = result__;
                            var result__ = tmp5236;
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
                          var result__ = validator.get()(temp.get(), after473);if(result__ !== undefined) after473(result__);
                        }
                      }
                    };
        if(val1532 !== null) {
          subs__.addSub(mobl.domBind(node3013, 'keyup', val1532));
        }
        
        var val1533 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1533 !== null) {
          subs__.addSub(mobl.domBind(node3013, 'blur', val1533));
        }
        
        node3012.append(node3013);
        var nodes5728 = $("<span>");
        node3012.append(nodes5728);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root7656 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7656); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5728;
          nodes5728 = node.contents();
          oldNodes.replaceWith(nodes5728);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after474);if(result__ !== undefined) after474(result__);
    } else {
      
      var node3014 = $("<input>");
      
      var ref2992 = inputType;
      if(ref2992.get() !== null) {
        node3014.attr('type', ref2992.get());
        subs__.addSub(ref2992.addEventListener('change', function(_, ref, val) {
          node3014.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2992.rebind());
      
      var ref2993 = style;
      if(ref2993.get() !== null) {
        node3014.attr('class', ref2993.get());
        subs__.addSub(ref2993.addEventListener('change', function(_, ref, val) {
          node3014.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2993.rebind());
      
      var ref2994 = placeholder;
      if(ref2994.get() !== null) {
        node3014.attr('placeholder', ref2994.get());
        subs__.addSub(ref2994.addEventListener('change', function(_, ref, val) {
          node3014.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2994.rebind());
      
      var ref2995 = s;
      node3014.val(""+ref2995.get());
      var ignore588 = false;
      subs__.addSub(ref2995.addEventListener('change', function(_, ref, val) {
        if(ignore588) return;
        node3014.val(""+val);
      }));
      subs__.addSub(ref2995.rebind());
      
      subs__.addSub(mobl.domBind(node3014, 'keyup change', function() {
        ignore588 = true;
        s.set(mobl.stringTomobl__String(node3014.val()));
        ignore588 = false;
      }));
      
      
      var val1534 = onchange.get();
      if(val1534 !== null) {
        subs__.addSub(mobl.domBind(node3014, 'change', val1534));
      }
      
      var val1535 = onkeyup.get();
      if(val1535 !== null) {
        subs__.addSub(mobl.domBind(node3014, 'keyup', val1535));
      }
      
      var val1536 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1536 !== null) {
        subs__.addSub(mobl.domBind(node3014, 'blur', val1536));
      }
      
      node3012.append(node3014);
      
      
    }
  };
  renderCond734();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond734();
  }));
  
  callback(root7654); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7657 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5729 = $("<span>");
  root7657.append(nodes5729);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7658 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7658); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5729;
    nodes5729 = node.contents();
    oldNodes.replaceWith(nodes5729);
  }));
  callback(root7657); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7659 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5730 = $("<span>");
  root7659.append(nodes5730);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7660 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7660); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5730;
    nodes5730 = node.contents();
    oldNodes.replaceWith(nodes5730);
  }));
  callback(root7659); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root7661 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3015 = $("<span>");
  root7661.append(node3015);
  var condSubs735 = new mobl.CompSubscription();
  subs__.addSub(condSubs735);
  var oldValue735;
  var renderCond735 = function() {
    var value3051 = label.get();
    if(oldValue735 === value3051) return;
    oldValue735 = value3051;
    var subs__ = condSubs735;
    subs__.unsubscribe();
    node3015.empty();
    if(value3051) {
      var nodes5731 = $("<span>");
      node3015.append(nodes5731);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root7662 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7662); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5731;
        nodes5731 = node.contents();
        oldNodes.replaceWith(nodes5731);
      }));
      
      
    } else {
      
    }
  };
  renderCond735();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond735();
  }));
  
  
  var node3016 = $("<input>");
  node3016.attr('type', "range");
  
  var ref2996 = n;
  node3016.val(""+ref2996.get());
  var ignore589 = false;
  subs__.addSub(ref2996.addEventListener('change', function(_, ref, val) {
    if(ignore589) return;
    node3016.val(""+val);
  }));
  subs__.addSub(ref2996.rebind());
  
  subs__.addSub(mobl.domBind(node3016, 'keyup change', function() {
    ignore589 = true;
    n.set(mobl.stringTomobl__Num(node3016.val()));
    ignore589 = false;
  }));
  
  
  var ref2997 = min;
  if(ref2997.get() !== null) {
    node3016.attr('min', ref2997.get());
    subs__.addSub(ref2997.addEventListener('change', function(_, ref, val) {
      node3016.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2997.rebind());
  
  var ref2998 = max;
  if(ref2998.get() !== null) {
    node3016.attr('max', ref2998.get());
    subs__.addSub(ref2998.addEventListener('change', function(_, ref, val) {
      node3016.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2998.rebind());
  
  var ref2999 = step;
  if(ref2999.get() !== null) {
    node3016.attr('step', ref2999.get());
    subs__.addSub(ref2999.addEventListener('change', function(_, ref, val) {
      node3016.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2999.rebind());
  node3016.attr('style', "width: 99%;");
  
  var val1537 = onchange.get();
  if(val1537 !== null) {
    subs__.addSub(mobl.domBind(node3016, 'change', val1537));
  }
  
  var val1538 = onkeyup.get();
  if(val1538 !== null) {
    subs__.addSub(mobl.domBind(node3016, 'keyup', val1538));
  }
  
  var ref3000 = placeholder;
  if(ref3000.get() !== null) {
    node3016.attr('placeholder', ref3000.get());
    subs__.addSub(ref3000.addEventListener('change', function(_, ref, val) {
      node3016.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3000.rebind());
  
  root7661.append(node3016);
  callback(root7661); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7663 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after475(result__) {
      var tmp5237 = result__;
      var result__ = tmp5237;
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
    var result__ = validator.get()(n2, after475);if(result__ !== undefined) after475(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes5732 = $("<span>");
  root7663.append(nodes5732);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7664 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7664); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5732;
    nodes5732 = node.contents();
    oldNodes.replaceWith(nodes5732);
  }));
  callback(root7663); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root7665 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3017 = $("<span>");
  root7665.append(node3017);
  var condSubs736 = new mobl.CompSubscription();
  subs__.addSub(condSubs736);
  var oldValue736;
  var renderCond736 = function() {
    var value3052 = label.get();
    if(oldValue736 === value3052) return;
    oldValue736 = value3052;
    var subs__ = condSubs736;
    subs__.unsubscribe();
    node3017.empty();
    if(value3052) {
      
      var node3018 = $("<span>");
      node3018.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref3004 = label;
      node3018.text(""+ref3004.get());
      var ignore591 = false;
      subs__.addSub(ref3004.addEventListener('change', function(_, ref, val) {
        if(ignore591) return;
        node3018.text(""+val);
      }));
      subs__.addSub(ref3004.rebind());
      
      
      node3017.append(node3018);
      
      var node3019 = $("<span>");
      node3019.attr('style', "float: left");
      
      
      var node3020 = $("<input>");
      node3020.attr('type', "password");
      
      var ref3001 = style;
      if(ref3001.get() !== null) {
        node3020.attr('class', ref3001.get());
        subs__.addSub(ref3001.addEventListener('change', function(_, ref, val) {
          node3020.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3001.rebind());
      
      var ref3002 = placeholder;
      if(ref3002.get() !== null) {
        node3020.attr('placeholder', ref3002.get());
        subs__.addSub(ref3002.addEventListener('change', function(_, ref, val) {
          node3020.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3002.rebind());
      
      var ref3003 = s;
      node3020.val(""+ref3003.get());
      var ignore590 = false;
      subs__.addSub(ref3003.addEventListener('change', function(_, ref, val) {
        if(ignore590) return;
        node3020.val(""+val);
      }));
      subs__.addSub(ref3003.rebind());
      
      subs__.addSub(mobl.domBind(node3020, 'keyup change', function() {
        ignore590 = true;
        s.set(mobl.stringTomobl__String(node3020.val()));
        ignore590 = false;
      }));
      
      
      var val1539 = onchange.get();
      if(val1539 !== null) {
        subs__.addSub(mobl.domBind(node3020, 'change', val1539));
      }
      
      var val1540 = onkeyup.get();
      if(val1540 !== null) {
        subs__.addSub(mobl.domBind(node3020, 'keyup', val1540));
      }
      
      var val1541 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1541 !== null) {
        subs__.addSub(mobl.domBind(node3020, 'blur', val1541));
      }
      
      node3019.append(node3020);
      node3017.append(node3019);
      
      
      
      
    } else {
      
      var node3021 = $("<input>");
      node3021.attr('type', "password");
      
      var ref3005 = style;
      if(ref3005.get() !== null) {
        node3021.attr('class', ref3005.get());
        subs__.addSub(ref3005.addEventListener('change', function(_, ref, val) {
          node3021.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3005.rebind());
      
      var ref3006 = placeholder;
      if(ref3006.get() !== null) {
        node3021.attr('placeholder', ref3006.get());
        subs__.addSub(ref3006.addEventListener('change', function(_, ref, val) {
          node3021.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3006.rebind());
      
      var ref3007 = s;
      node3021.val(""+ref3007.get());
      var ignore592 = false;
      subs__.addSub(ref3007.addEventListener('change', function(_, ref, val) {
        if(ignore592) return;
        node3021.val(""+val);
      }));
      subs__.addSub(ref3007.rebind());
      
      subs__.addSub(mobl.domBind(node3021, 'keyup change', function() {
        ignore592 = true;
        s.set(mobl.stringTomobl__String(node3021.val()));
        ignore592 = false;
      }));
      
      
      var val1542 = onchange.get();
      if(val1542 !== null) {
        subs__.addSub(mobl.domBind(node3021, 'change', val1542));
      }
      
      var val1543 = onkeyup.get();
      if(val1543 !== null) {
        subs__.addSub(mobl.domBind(node3021, 'keyup', val1543));
      }
      
      var val1544 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1544 !== null) {
        subs__.addSub(mobl.domBind(node3021, 'blur', val1544));
      }
      
      node3017.append(node3021);
      
      
    }
  };
  renderCond736();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond736();
  }));
  
  callback(root7665); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root7666 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref3012 = style;
  if(ref3012.get() !== null) {
    sel.attr('class', ref3012.get());
    subs__.addSub(ref3012.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3012.rebind());
  
  var val1545 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after476(result__) {
                    var tmp5239 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after476);if(result__ !== undefined) after476(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1545 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1545));
  }
  
  
  var node3022 = mobl.loadingSpan();
  sel.append(node3022);
  var list531;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList531 = function() {
    var subs__ = listSubs__;
    list531 = options.get();
    list531.list(function(results531) {
      node3022.empty();
      for(var i1377 = 0; i1377 < results531.length; i1377++) {
        (function() {
          var iternode531 = $("<span>");
          node3022.append(iternode531);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results531), i1377), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results531), i1377), "_2");
          
          var node3023 = $("<option>");
          
          var ref3008 = optionDescription;
          node3023.text(""+ref3008.get());
          var ignore593 = false;
          subs__.addSub(ref3008.addEventListener('change', function(_, ref, val) {
            if(ignore593) return;
            node3023.text(""+val);
          }));
          subs__.addSub(ref3008.rebind());
          
          
          var ref3009 = optionStyle;
          if(ref3009.get() !== null) {
            node3023.attr('class', ref3009.get());
            subs__.addSub(ref3009.addEventListener('change', function(_, ref, val) {
              node3023.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3009.rebind());
          
          var ref3010 = optionValue;
          if(ref3010.get() !== null) {
            node3023.attr('value', ref3010.get());
            subs__.addSub(ref3010.addEventListener('change', function(_, ref, val) {
              node3023.attr('value', val);
            }));
            
          }
          subs__.addSub(ref3010.rebind());
          
          var ref3011 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref3011.get() !== null) {
            node3023.attr('selected', ref3011.get());
            subs__.addSub(ref3011.addEventListener('change', function(_, ref, val) {
              node3023.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node3023.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node3023.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref3011.rebind());
          
          iternode531.append(node3023);
          
          var oldNodes = iternode531;
          iternode531 = iternode531.contents();
          oldNodes.replaceWith(iternode531);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list531.addEventListener('change', function() { listSubs__.unsubscribe(); renderList531(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList531(true); }));
    });
  };
  renderList531();
  
  root7666.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root7666); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root7667 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes5733 = $("<span>");
    root7667.append(nodes5733);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root7668 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3024 = mobl.loadingSpan();
      root7668.append(node3024);
      var list532;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList532 = function() {
        var subs__ = listSubs__;
        list532 = tabs.get();
        list532.list(function(results532) {
          node3024.empty();
          for(var i1378 = 0; i1378 < results532.length; i1378++) {
            (function() {
              var iternode532 = $("<span>");
              node3024.append(iternode532);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results532), i1378), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results532), i1378), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results532), i1378), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp5201 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp5201.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp5201.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp5201.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp5201.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp5200 = mobl.ref(result__);
              
              var nodes5734 = $("<span>");
              iternode532.append(nodes5734);
              subs__.addSub((mobl.span)(tmp5201, mobl.ref(null), tmp5200, mobl.ref(null), function(_, callback) {
                var root7669 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5735 = $("<span>");
                root7669.append(nodes5735);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root7670 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7670); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5735;
                  nodes5735 = node.contents();
                  oldNodes.replaceWith(nodes5735);
                }));
                callback(root7669); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5734;
                nodes5734 = node.contents();
                oldNodes.replaceWith(nodes5734);
              }));
              
              var oldNodes = iternode532;
              iternode532 = iternode532.contents();
              oldNodes.replaceWith(iternode532);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list532.addEventListener('change', function() { listSubs__.unsubscribe(); renderList532(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList532(true); }));
        });
      };
      renderList532();
      
      callback(root7668); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5733;
      nodes5733 = node.contents();
      oldNodes.replaceWith(nodes5733);
    }));
    
    var node3025 = mobl.loadingSpan();
    root7667.append(node3025);
    var list533;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList533 = function() {
      var subs__ = listSubs__;
      list533 = tabs.get();
      list533.list(function(results533) {
        node3025.empty();
        for(var i1379 = 0; i1379 < results533.length; i1379++) {
          (function() {
            var iternode533 = $("<span>");
            node3025.append(iternode533);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results533), i1379), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results533), i1379), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results533), i1379), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp5202 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp5202.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp5202.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp5202.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp5202.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes5736 = $("<span>");
            iternode533.append(nodes5736);
            subs__.addSub((mobl.block)(tmp5202, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root7671 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5737 = $("<span>");
              root7671.append(nodes5737);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root7672 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5738 = $("<span>");
                root7672.append(nodes5738);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1216();
                }));
                
                function renderControl1216() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root7673 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7673); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5738;
                    nodes5738 = node.contents();
                    oldNodes.replaceWith(nodes5738);
                  }));
                }
                renderControl1216();
                callback(root7672); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5737;
                nodes5737 = node.contents();
                oldNodes.replaceWith(nodes5737);
              }));
              callback(root7671); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5736;
              nodes5736 = node.contents();
              oldNodes.replaceWith(nodes5736);
            }));
            
            var oldNodes = iternode533;
            iternode533 = iternode533.contents();
            oldNodes.replaceWith(iternode533);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list533.addEventListener('change', function() { listSubs__.unsubscribe(); renderList533(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList533(true); }));
      });
    };
    renderList533();
    
    callback(root7667); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes5733 = $("<span>");
      root7667.append(nodes5733);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7668 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3024 = mobl.loadingSpan();
        root7668.append(node3024);
        var list532;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList532 = function() {
          var subs__ = listSubs__;
          list532 = tabs.get();
          list532.list(function(results532) {
            node3024.empty();
            for(var i1378 = 0; i1378 < results532.length; i1378++) {
              (function() {
                var iternode532 = $("<span>");
                node3024.append(iternode532);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results532), i1378), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results532), i1378), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results532), i1378), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp5201 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp5201.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp5201.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp5201.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp5201.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5200 = mobl.ref(result__);
                
                var nodes5734 = $("<span>");
                iternode532.append(nodes5734);
                subs__.addSub((mobl.span)(tmp5201, mobl.ref(null), tmp5200, mobl.ref(null), function(_, callback) {
                  var root7669 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5735 = $("<span>");
                  root7669.append(nodes5735);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root7670 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7670); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5735;
                    nodes5735 = node.contents();
                    oldNodes.replaceWith(nodes5735);
                  }));
                  callback(root7669); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5734;
                  nodes5734 = node.contents();
                  oldNodes.replaceWith(nodes5734);
                }));
                
                var oldNodes = iternode532;
                iternode532 = iternode532.contents();
                oldNodes.replaceWith(iternode532);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list532.addEventListener('change', function() { listSubs__.unsubscribe(); renderList532(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList532(true); }));
          });
        };
        renderList532();
        
        callback(root7668); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5733;
        nodes5733 = node.contents();
        oldNodes.replaceWith(nodes5733);
      }));
      
      var node3025 = mobl.loadingSpan();
      root7667.append(node3025);
      var list533;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList533 = function() {
        var subs__ = listSubs__;
        list533 = tabs.get();
        list533.list(function(results533) {
          node3025.empty();
          for(var i1379 = 0; i1379 < results533.length; i1379++) {
            (function() {
              var iternode533 = $("<span>");
              node3025.append(iternode533);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results533), i1379), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results533), i1379), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results533), i1379), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp5202 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp5202.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp5202.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp5202.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp5202.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes5736 = $("<span>");
              iternode533.append(nodes5736);
              subs__.addSub((mobl.block)(tmp5202, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root7671 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5737 = $("<span>");
                root7671.append(nodes5737);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root7672 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5738 = $("<span>");
                  root7672.append(nodes5738);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1216();
                  }));
                  
                  function renderControl1216() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root7673 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7673); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5738;
                      nodes5738 = node.contents();
                      oldNodes.replaceWith(nodes5738);
                    }));
                  }
                  renderControl1216();
                  callback(root7672); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5737;
                  nodes5737 = node.contents();
                  oldNodes.replaceWith(nodes5737);
                }));
                callback(root7671); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5736;
                nodes5736 = node.contents();
                oldNodes.replaceWith(nodes5736);
              }));
              
              var oldNodes = iternode533;
              iternode533 = iternode533.contents();
              oldNodes.replaceWith(iternode533);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list533.addEventListener('change', function() { listSubs__.unsubscribe(); renderList533(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList533(true); }));
        });
      };
      renderList533();
      
      callback(root7667); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root7674 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3026 = $("<div>");
  
  var ref3016 = mobl.ref(ui.searchboxStyle);
  if(ref3016.get() !== null) {
    node3026.attr('class', ref3016.get());
    subs__.addSub(ref3016.addEventListener('change', function(_, ref, val) {
      node3026.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3016.rebind());
  
  
  var node3027 = $("<input>");
  node3027.attr('type', "search");
  
  var ref3013 = mobl.ref(ui.searchBoxInputStyle);
  if(ref3013.get() !== null) {
    node3027.attr('class', ref3013.get());
    subs__.addSub(ref3013.addEventListener('change', function(_, ref, val) {
      node3027.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3013.rebind());
  
  var ref3014 = placeholder;
  if(ref3014.get() !== null) {
    node3027.attr('placeholder', ref3014.get());
    subs__.addSub(ref3014.addEventListener('change', function(_, ref, val) {
      node3027.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3014.rebind());
  
  var ref3015 = s;
  node3027.val(""+ref3015.get());
  var ignore594 = false;
  subs__.addSub(ref3015.addEventListener('change', function(_, ref, val) {
    if(ignore594) return;
    node3027.val(""+val);
  }));
  subs__.addSub(ref3015.rebind());
  
  subs__.addSub(mobl.domBind(node3027, 'keyup change', function() {
    ignore594 = true;
    s.set(mobl.stringTomobl__String(node3027.val()));
    ignore594 = false;
  }));
  
  
  var val1546 = onsearch.get();
  if(val1546 !== null) {
    subs__.addSub(mobl.domBind(node3027, 'change', val1546));
  }
  
  var val1547 = onkeyup.get();
  if(val1547 !== null) {
    subs__.addSub(mobl.domBind(node3027, 'keyup', val1547));
  }
  node3027.attr('autocorrect', false);
  node3027.attr('autocapitalize', false);
  node3027.attr('autocomplete', false);
  
  node3026.append(node3027);
  root7674.append(node3026);
  callback(root7674); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root7675 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref3017 = mobl.ref(ui.contextMenuStyle);
  if(ref3017.get() !== null) {
    menu.attr('class', ref3017.get());
    subs__.addSub(ref3017.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3017.rebind());
  
  var nodes5739 = $("<span>");
  menu.append(nodes5739);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1217();
  }));
  
  function renderControl1217() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7676 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7676); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5739;
      nodes5739 = node.contents();
      oldNodes.replaceWith(nodes5739);
    }));
  }
  renderControl1217();
  root7675.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1548 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp5242 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1548 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1548));
  }
  
  root7675.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root7675); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root7677 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp5227 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp5227.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3028 = $("<span>");
  root7677.append(node3028);
  var condSubs737 = new mobl.CompSubscription();
  subs__.addSub(condSubs737);
  var oldValue737;
  var renderCond737 = function() {
    var value3053 = tmp5227.get();
    if(oldValue737 === value3053) return;
    oldValue737 = value3053;
    var subs__ = condSubs737;
    subs__.unsubscribe();
    node3028.empty();
    if(value3053) {
      items.get().one(function(result__) {
        var tmp5243 = result__;
        var current = mobl.ref(result__);
        
        var node3029 = $("<div>");
        node3029.attr('width', "100%");
        
        
        var node3030 = $("<div>");
        node3030.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes5742 = $("<span>");
        node3030.append(nodes5742);
        subs__.addSub((ui.group)(function(_, callback) {
          var root7680 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3033 = mobl.loadingSpan();
          root7680.append(node3033);
          var list534;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList534 = function() {
            var subs__ = listSubs__;
            list534 = items.get();
            list534.list(function(results534) {
              node3033.empty();
              for(var i1380 = 0; i1380 < results534.length; i1380++) {
                (function() {
                  var iternode534 = $("<span>");
                  node3033.append(iternode534);
                  var it;
                  it = mobl.ref(mobl.ref(results534), i1380);
                  var result__ = it.get() == current.get();
                  var tmp5208 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp5208.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp5208.set(it.get() == current.get());
                  }));
                  
                  
                  var node3034 = $("<span>");
                  iternode534.append(node3034);
                  var condSubs739 = new mobl.CompSubscription();
                  subs__.addSub(condSubs739);
                  var oldValue739;
                  var renderCond739 = function() {
                    var value3055 = tmp5208.get();
                    if(oldValue739 === value3055) return;
                    oldValue739 = value3055;
                    var subs__ = condSubs739;
                    subs__.unsubscribe();
                    node3034.empty();
                    if(value3055) {
                      var nodes5743 = $("<span>");
                      node3034.append(nodes5743);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root7681 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5744 = $("<span>");
                        root7681.append(nodes5744);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1219();
                        }));
                        
                        function renderControl1219() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root7682 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root7682); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5744;
                            nodes5744 = node.contents();
                            oldNodes.replaceWith(nodes5744);
                          }));
                        }
                        renderControl1219();
                        callback(root7681); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5743;
                        nodes5743 = node.contents();
                        oldNodes.replaceWith(nodes5743);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp5207 = mobl.ref(result__);
                      
                      var nodes5745 = $("<span>");
                      node3034.append(nodes5745);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5207, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root7683 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5746 = $("<span>");
                        root7683.append(nodes5746);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1220();
                        }));
                        
                        function renderControl1220() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root7684 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root7684); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5746;
                            nodes5746 = node.contents();
                            oldNodes.replaceWith(nodes5746);
                          }));
                        }
                        renderControl1220();
                        callback(root7683); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5745;
                        nodes5745 = node.contents();
                        oldNodes.replaceWith(nodes5745);
                      }));
                      
                      
                    }
                  };
                  renderCond739();
                  subs__.addSub(tmp5208.addEventListener('change', function() {
                    renderCond739();
                  }));
                  
                  
                  var oldNodes = iternode534;
                  iternode534 = iternode534.contents();
                  oldNodes.replaceWith(iternode534);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list534.addEventListener('change', function() { listSubs__.unsubscribe(); renderList534(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList534(true); }));
            });
          };
          renderList534();
          
          callback(root7680); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5742;
          nodes5742 = node.contents();
          oldNodes.replaceWith(nodes5742);
        }));
        node3029.append(node3030);
        
        var node3031 = $("<div>");
        node3031.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node3032 = $("<span>");
        node3031.append(node3032);
        var condSubs738 = new mobl.CompSubscription();
        subs__.addSub(condSubs738);
        var oldValue738;
        var renderCond738 = function() {
          var value3054 = current.get();
          if(oldValue738 === value3054) return;
          oldValue738 = value3054;
          var subs__ = condSubs738;
          subs__.unsubscribe();
          node3032.empty();
          if(value3054) {
            var nodes5740 = $("<span>");
            node3032.append(nodes5740);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1218();
            }));
            
            function renderControl1218() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root7678 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7678); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5740;
                nodes5740 = node.contents();
                oldNodes.replaceWith(nodes5740);
              }));
            }
            renderControl1218();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp5209 = mobl.ref(result__);
            
            var nodes5741 = $("<span>");
            node3032.append(nodes5741);
            subs__.addSub((mobl.label)(tmp5209, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root7679 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7679); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5741;
              nodes5741 = node.contents();
              oldNodes.replaceWith(nodes5741);
            }));
            
            
          }
        };
        renderCond738();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond738();
        }));
        
        node3029.append(node3031);
        node3028.append(node3029);
        
        
        
        
        
        
      });
    } else {
      var nodes5747 = $("<span>");
      node3028.append(nodes5747);
      subs__.addSub((ui.group)(function(_, callback) {
        var root7685 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3035 = mobl.loadingSpan();
        root7685.append(node3035);
        var list535;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList535 = function() {
          var subs__ = listSubs__;
          list535 = items.get();
          list535.list(function(results535) {
            node3035.empty();
            for(var i1381 = 0; i1381 < results535.length; i1381++) {
              (function() {
                var iternode535 = $("<span>");
                node3035.append(iternode535);
                var it;
                it = mobl.ref(mobl.ref(results535), i1381);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp5244 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp5203 = mobl.ref(result__);
                
                var nodes5748 = $("<span>");
                iternode535.append(nodes5748);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5203, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root7686 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5749 = $("<span>");
                  root7686.append(nodes5749);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1221();
                  }));
                  
                  function renderControl1221() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root7687 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7687); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5749;
                      nodes5749 = node.contents();
                      oldNodes.replaceWith(nodes5749);
                    }));
                  }
                  renderControl1221();
                  callback(root7686); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5748;
                  nodes5748 = node.contents();
                  oldNodes.replaceWith(nodes5748);
                }));
                
                var oldNodes = iternode535;
                iternode535 = iternode535.contents();
                oldNodes.replaceWith(iternode535);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list535.addEventListener('change', function() { listSubs__.unsubscribe(); renderList535(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList535(true); }));
          });
        };
        renderList535();
        
        callback(root7685); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5747;
        nodes5747 = node.contents();
        oldNodes.replaceWith(nodes5747);
      }));
      
      
    }
  };
  renderCond737();
  subs__.addSub(tmp5227.addEventListener('change', function() {
    renderCond737();
  }));
  
  callback(root7677); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root7688 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp5206 = mobl.ref(result__);
  
  var nodes5750 = $("<span>");
  root7688.append(nodes5750);
  subs__.addSub((ui.header)(tmp5206, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7689 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5205 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5204 = mobl.ref(result__);
    
    var nodes5751 = $("<span>");
    root7689.append(nodes5751);
    subs__.addSub((ui.backButton)(tmp5204, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5205, function(_, callback) {
      var root7690 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7690); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5751;
      nodes5751 = node.contents();
      oldNodes.replaceWith(nodes5751);
    }));
    callback(root7689); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5750;
    nodes5750 = node.contents();
    oldNodes.replaceWith(nodes5750);
  }));
  var nodes5752 = $("<span>");
  root7688.append(nodes5752);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1222();
  }));
  
  function renderControl1222() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root7691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7691); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5752;
      nodes5752 = node.contents();
      oldNodes.replaceWith(nodes5752);
    }));
  }
  renderControl1222();
  callback(root7688); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root7692 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes5753 = $("<span>");
  root7692.append(nodes5753);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7693 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3036 = mobl.loadingSpan();
    root7693.append(node3036);
    var list536;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList536 = function() {
      var subs__ = listSubs__;
      list536 = coll.get();
      list536.list(function(results536) {
        node3036.empty();
        for(var i1382 = 0; i1382 < results536.length; i1382++) {
          (function() {
            var iternode536 = $("<span>");
            node3036.append(iternode536);
            var it;
            it = mobl.ref(mobl.ref(results536), i1382);
            var result__ = it.get() == selected.get();
            var tmp5211 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp5211.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp5211.set(it.get() == selected.get());
            }));
            
            
            var node3037 = $("<span>");
            iternode536.append(node3037);
            var condSubs740 = new mobl.CompSubscription();
            subs__.addSub(condSubs740);
            var oldValue740;
            var renderCond740 = function() {
              var value3056 = tmp5211.get();
              if(oldValue740 === value3056) return;
              oldValue740 = value3056;
              var subs__ = condSubs740;
              subs__.unsubscribe();
              node3037.empty();
              if(value3056) {
                var nodes5754 = $("<span>");
                node3037.append(nodes5754);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root7694 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5755 = $("<span>");
                  root7694.append(nodes5755);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1223();
                  }));
                  
                  function renderControl1223() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root7695 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7695); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5755;
                      nodes5755 = node.contents();
                      oldNodes.replaceWith(nodes5755);
                    }));
                  }
                  renderControl1223();
                  callback(root7694); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5754;
                  nodes5754 = node.contents();
                  oldNodes.replaceWith(nodes5754);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5210 = mobl.ref(result__);
                
                var nodes5756 = $("<span>");
                node3037.append(nodes5756);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5210, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root7696 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5757 = $("<span>");
                  root7696.append(nodes5757);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1224();
                  }));
                  
                  function renderControl1224() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root7697 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7697); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5757;
                      nodes5757 = node.contents();
                      oldNodes.replaceWith(nodes5757);
                    }));
                  }
                  renderControl1224();
                  callback(root7696); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5756;
                  nodes5756 = node.contents();
                  oldNodes.replaceWith(nodes5756);
                }));
                
                
              }
            };
            renderCond740();
            subs__.addSub(tmp5211.addEventListener('change', function() {
              renderCond740();
            }));
            
            
            var oldNodes = iternode536;
            iternode536 = iternode536.contents();
            oldNodes.replaceWith(iternode536);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list536.addEventListener('change', function() { listSubs__.unsubscribe(); renderList536(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList536(true); }));
      });
    };
    renderList536();
    
    callback(root7693); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5753;
    nodes5753 = node.contents();
    oldNodes.replaceWith(nodes5753);
  }));
  callback(root7692); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root7698 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp5245 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp5212 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp5212.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp5212.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp5212.set(coll.get().limit(n.get()));
    }));
    
    
    var node3038 = mobl.loadingSpan();
    root7698.append(node3038);
    var list537;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList537 = function() {
      var subs__ = listSubs__;
      list537 = tmp5212.get();
      list537.list(function(results537) {
        node3038.empty();
        for(var i1383 = 0; i1383 < results537.length; i1383++) {
          (function() {
            var iternode537 = $("<span>");
            node3038.append(iternode537);
            var it;
            it = mobl.ref(mobl.ref(results537), i1383);
            var nodes5758 = $("<span>");
            iternode537.append(nodes5758);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1225();
            }));
            
            function renderControl1225() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root7699 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7699); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5758;
                nodes5758 = node.contents();
                oldNodes.replaceWith(nodes5758);
              }));
            }
            renderControl1225();
            
            var oldNodes = iternode537;
            iternode537 = iternode537.contents();
            oldNodes.replaceWith(iternode537);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list537.addEventListener('change', function() { listSubs__.unsubscribe(); renderList537(true); }));
        subs__.addSub(tmp5212.addEventListener('change', function() { listSubs__.unsubscribe(); renderList537(true); }));
      });
    };
    renderList537();
    
    var result__ = n.get() < total.get();
    var tmp5214 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp5214.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp5214.set(n.get() < total.get());
    }));
    
    
    var node3039 = $("<span>");
    root7698.append(node3039);
    var condSubs741 = new mobl.CompSubscription();
    subs__.addSub(condSubs741);
    var oldValue741;
    var renderCond741 = function() {
      var value3057 = tmp5214.get();
      if(oldValue741 === value3057) return;
      oldValue741 = value3057;
      var subs__ = condSubs741;
      subs__.unsubscribe();
      node3039.empty();
      if(value3057) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp5213 = mobl.ref(result__);
        
        var nodes5759 = $("<span>");
        node3039.append(nodes5759);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp5213, mobl.ref(null), function(_, callback) {
          var root7700 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes5760 = $("<span>");
          root7700.append(nodes5760);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root7701 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root7701); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes5760;
            nodes5760 = node.contents();
            oldNodes.replaceWith(nodes5760);
          }));
          callback(root7700); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5759;
          nodes5759 = node.contents();
          oldNodes.replaceWith(nodes5759);
        }));
        
        
      } else {
        
      }
    };
    renderCond741();
    subs__.addSub(tmp5214.addEventListener('change', function() {
      renderCond741();
    }));
    
    callback(root7698); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root7702 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5761 = $("<span>");
  root7702.append(nodes5761);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7703 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3040 = mobl.loadingSpan();
    root7703.append(node3040);
    var list538;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList538 = function() {
      var subs__ = listSubs__;
      list538 = items.get();
      list538.list(function(results538) {
        node3040.empty();
        for(var i1384 = 0; i1384 < results538.length; i1384++) {
          (function() {
            var iternode538 = $("<span>");
            node3040.append(iternode538);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results538), i1384), "_1");it = mobl.ref(mobl.ref(mobl.ref(results538), i1384), "_2");
            var nodes5762 = $("<span>");
            iternode538.append(nodes5762);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root7704 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5763 = $("<span>");
              root7704.append(nodes5763);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root7705 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7705); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5763;
                nodes5763 = node.contents();
                oldNodes.replaceWith(nodes5763);
              }));
              callback(root7704); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5762;
              nodes5762 = node.contents();
              oldNodes.replaceWith(nodes5762);
            }));
            
            var oldNodes = iternode538;
            iternode538 = iternode538.contents();
            oldNodes.replaceWith(iternode538);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list538.addEventListener('change', function() { listSubs__.unsubscribe(); renderList538(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList538(true); }));
      });
    };
    renderList538();
    
    callback(root7703); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5761;
    nodes5761 = node.contents();
    oldNodes.replaceWith(nodes5761);
  }));
  callback(root7702); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root7706 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll3714) {
    coll3714 = coll3714.reverse();
    function processOne240() {
      var it;
      it = coll3714.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll3714.length > 0) processOne240(); else rest240();
      
    }
    function rest240() {
      var nodes5764 = $("<span>");
      root7706.append(nodes5764);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root7707 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp5215 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp5216 = mobl.ref(result__);
        
        var nodes5765 = $("<span>");
        root7707.append(nodes5765);
        subs__.addSub((ui.backButton)(tmp5216, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5215, function(_, callback) {
          var root7708 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7708); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5765;
          nodes5765 = node.contents();
          oldNodes.replaceWith(nodes5765);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll3713) {
                           coll3713 = coll3713.reverse();
                           function processOne239() {
                             var checked;var it;
                             var tmp5247 = coll3713.pop();
                             checked = tmp5247._1;it = tmp5247._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll3713.length > 0) processOne239(); else rest239();
                               
                             } else {
                               {
                                 
                                 if(coll3713.length > 0) processOne239(); else rest239();
                                 
                               }
                             }
                           }
                           function rest239() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll3713.length > 0) processOne239(); else rest239();
                         });
                         
                       };
        var tmp5217 = mobl.ref(result__);
        
        var nodes5766 = $("<span>");
        root7707.append(nodes5766);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5217, function(_, callback) {
          var root7709 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7709); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5766;
          nodes5766 = node.contents();
          oldNodes.replaceWith(nodes5766);
        }));
        callback(root7707); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5764;
        nodes5764 = node.contents();
        oldNodes.replaceWith(nodes5764);
      }));
      var nodes5767 = $("<span>");
      root7706.append(nodes5767);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root7710 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7710); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5767;
        nodes5767 = node.contents();
        oldNodes.replaceWith(nodes5767);
      }));
      callback(root7706); return subs__;
      
      
    }
    if(coll3714.length > 0) processOne240(); else rest240();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root7711 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes5768 = $("<span>");
  root7711.append(nodes5768);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root7712 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7712); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5768;
    nodes5768 = node.contents();
    oldNodes.replaceWith(nodes5768);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp5218 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp5218.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp5218.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp5218.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp5218.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp5218.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes5769 = $("<span>");
  root7711.append(nodes5769);
  subs__.addSub((ui.masterDetail)(tmp5218, masterItem, detailItem, function(_, callback) {
    var root7713 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7713); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5769;
    nodes5769 = node.contents();
    oldNodes.replaceWith(nodes5769);
  }));
  callback(root7711); return subs__;
  
  
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
  var root7714 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes5770 = $("<span>");
  root7714.append(nodes5770);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root7715 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3041 = mobl.loadingSpan();
    root7715.append(node3041);
    var list539;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList539 = function() {
      var subs__ = listSubs__;
      list539 = sections.get();
      list539.list(function(results539) {
        node3041.empty();
        for(var i1385 = 0; i1385 < results539.length; i1385++) {
          (function() {
            var iternode539 = $("<span>");
            node3041.append(iternode539);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results539), i1385), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results539), i1385), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp5220 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp5220.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp5220.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp5220.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp5220.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp5219 = mobl.ref(result__);
            
            var nodes5771 = $("<span>");
            iternode539.append(nodes5771);
            subs__.addSub((mobl.span)(tmp5220, mobl.ref(null), tmp5219, mobl.ref(null), function(_, callback) {
              var root7716 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5772 = $("<span>");
              root7716.append(nodes5772);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root7717 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7717); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5772;
                nodes5772 = node.contents();
                oldNodes.replaceWith(nodes5772);
              }));
              callback(root7716); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5771;
              nodes5771 = node.contents();
              oldNodes.replaceWith(nodes5771);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp5221 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp5221.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp5221.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp5221.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp5221.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes5773 = $("<span>");
            iternode539.append(nodes5773);
            subs__.addSub((mobl.block)(tmp5221, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root7718 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5774 = $("<span>");
              root7718.append(nodes5774);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1226();
              }));
              
              function renderControl1226() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root7719 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7719); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5774;
                  nodes5774 = node.contents();
                  oldNodes.replaceWith(nodes5774);
                }));
              }
              renderControl1226();
              callback(root7718); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5773;
              nodes5773 = node.contents();
              oldNodes.replaceWith(nodes5773);
            }));
            
            var oldNodes = iternode539;
            iternode539 = iternode539.contents();
            oldNodes.replaceWith(iternode539);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list539.addEventListener('change', function() { listSubs__.unsubscribe(); renderList539(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList539(true); }));
      });
    };
    renderList539();
    
    callback(root7715); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5770;
    nodes5770 = node.contents();
    oldNodes.replaceWith(nodes5770);
  }));
  callback(root7714); return subs__;
  
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
  var root7720 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3042 = $("<table>");
  
  var ref3018 = style;
  if(ref3018.get() !== null) {
    node3042.attr('class', ref3018.get());
    subs__.addSub(ref3018.addEventListener('change', function(_, ref, val) {
      node3042.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3018.rebind());
  
  var nodes5775 = $("<span>");
  node3042.append(nodes5775);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1227();
  }));
  
  function renderControl1227() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7721 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7721); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5775;
      nodes5775 = node.contents();
      oldNodes.replaceWith(nodes5775);
    }));
  }
  renderControl1227();
  root7720.append(node3042);
  callback(root7720); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root7722 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3043 = $("<tr>");
  
  var ref3019 = style;
  if(ref3019.get() !== null) {
    node3043.attr('class', ref3019.get());
    subs__.addSub(ref3019.addEventListener('change', function(_, ref, val) {
      node3043.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3019.rebind());
  
  var nodes5776 = $("<span>");
  node3043.append(nodes5776);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1228();
  }));
  
  function renderControl1228() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7723 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7723); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5776;
      nodes5776 = node.contents();
      oldNodes.replaceWith(nodes5776);
    }));
  }
  renderControl1228();
  root7722.append(node3043);
  callback(root7722); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root7724 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3044 = $("<td>");
  
  var ref3020 = width;
  if(ref3020.get() !== null) {
    node3044.attr('width', ref3020.get());
    subs__.addSub(ref3020.addEventListener('change', function(_, ref, val) {
      node3044.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3020.rebind());
  
  var ref3021 = style;
  if(ref3021.get() !== null) {
    node3044.attr('class', ref3021.get());
    subs__.addSub(ref3021.addEventListener('change', function(_, ref, val) {
      node3044.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3021.rebind());
  
  var nodes5777 = $("<span>");
  node3044.append(nodes5777);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1229();
  }));
  
  function renderControl1229() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7725 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7725); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5777;
      nodes5777 = node.contents();
      oldNodes.replaceWith(nodes5777);
    }));
  }
  renderControl1229();
  root7724.append(node3044);
  callback(root7724); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root7726 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3045 = $("<td>");
  
  var ref3022 = width;
  if(ref3022.get() !== null) {
    node3045.attr('width', ref3022.get());
    subs__.addSub(ref3022.addEventListener('change', function(_, ref, val) {
      node3045.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3022.rebind());
  
  var ref3023 = style;
  if(ref3023.get() !== null) {
    node3045.attr('class', ref3023.get());
    subs__.addSub(ref3023.addEventListener('change', function(_, ref, val) {
      node3045.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3023.rebind());
  
  var nodes5778 = $("<span>");
  node3045.append(nodes5778);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1230();
  }));
  
  function renderControl1230() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7727 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7727); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5778;
      nodes5778 = node.contents();
      oldNodes.replaceWith(nodes5778);
    }));
  }
  renderControl1230();
  root7726.append(node3045);
  callback(root7726); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root7728 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3046 = $("<td>");
  
  var ref3024 = width;
  if(ref3024.get() !== null) {
    node3046.attr('width', ref3024.get());
    subs__.addSub(ref3024.addEventListener('change', function(_, ref, val) {
      node3046.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3024.rebind());
  
  var ref3025 = style;
  if(ref3025.get() !== null) {
    node3046.attr('class', ref3025.get());
    subs__.addSub(ref3025.addEventListener('change', function(_, ref, val) {
      node3046.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3025.rebind());
  
  
  var node3047 = $("<strong>");
  
  var nodes5779 = $("<span>");
  node3047.append(nodes5779);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1231();
  }));
  
  function renderControl1231() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7729); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5779;
      nodes5779 = node.contents();
      oldNodes.replaceWith(nodes5779);
    }));
  }
  renderControl1231();
  node3046.append(node3047);
  root7728.append(node3046);
  callback(root7728); return subs__;
  
  
  
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
  items.list(function(coll3715) {
    coll3715 = coll3715.reverse();
    function processOne241() {
      var item;
      item = coll3715.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll3715.length > 0) processOne241(); else rest241();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll3715.length > 0) processOne241(); else rest241();
          
        }
      }
    }
    function rest241() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll3715.length > 0) processOne241(); else rest241();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root7730 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp5249 = result__;
    var current = mobl.ref(result__);
    
    var node3048 = $("<div>");
    node3048.attr('width', "100%");
    
    
    var node3049 = $("<div>");
    node3049.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes5781 = $("<span>");
    node3049.append(nodes5781);
    subs__.addSub((ui.group)(function(_, callback) {
      var root7732 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3054 = mobl.loadingSpan();
      root7732.append(node3054);
      var list540;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList540 = function() {
        var subs__ = listSubs__;
        list540 = items.get();
        list540.list(function(results540) {
          node3054.empty();
          for(var i1386 = 0; i1386 < results540.length; i1386++) {
            (function() {
              var iternode540 = $("<span>");
              node3054.append(iternode540);
              var it;
              it = mobl.ref(mobl.ref(results540), i1386);
              var result__ = it.get() == current.get();
              var tmp5225 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp5225.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp5225.set(it.get() == current.get());
              }));
              
              
              var node3055 = $("<span>");
              iternode540.append(node3055);
              var condSubs743 = new mobl.CompSubscription();
              subs__.addSub(condSubs743);
              var oldValue743;
              var renderCond743 = function() {
                var value3059 = tmp5225.get();
                if(oldValue743 === value3059) return;
                oldValue743 = value3059;
                var subs__ = condSubs743;
                subs__.unsubscribe();
                node3055.empty();
                if(value3059) {
                  var nodes5782 = $("<span>");
                  node3055.append(nodes5782);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root7733 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp5258 = result__;
                      var tmp5222 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp5256 = result__;
                          var result__ = tmp5256;
                          tmp5222.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp5257 = result__;
                          var result__ = tmp5257;
                          tmp5222.set(result__);
                          
                        });
                      }));
                      
                      var nodes5783 = $("<span>");
                      root7733.append(nodes5783);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1233();
                      }));
                      
                      function renderControl1233() {
                        subs__.addSub((masterItem.get())(it, tmp5222, function(elements, callback) {
                          var root7734 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root7734); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes5783;
                          nodes5783 = node.contents();
                          oldNodes.replaceWith(nodes5783);
                        }));
                      }
                      renderControl1233();
                      callback(root7733); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5782;
                    nodes5782 = node.contents();
                    oldNodes.replaceWith(nodes5782);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp5224 = mobl.ref(result__);
                  
                  var nodes5784 = $("<span>");
                  node3055.append(nodes5784);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5224, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root7735 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp5261 = result__;
                      var tmp5223 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp5259 = result__;
                          var result__ = tmp5259;
                          tmp5223.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp5260 = result__;
                          var result__ = tmp5260;
                          tmp5223.set(result__);
                          
                        });
                      }));
                      
                      var nodes5785 = $("<span>");
                      root7735.append(nodes5785);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1234();
                      }));
                      
                      function renderControl1234() {
                        subs__.addSub((masterItem.get())(it, tmp5223, function(elements, callback) {
                          var root7736 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root7736); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes5785;
                          nodes5785 = node.contents();
                          oldNodes.replaceWith(nodes5785);
                        }));
                      }
                      renderControl1234();
                      callback(root7735); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5784;
                    nodes5784 = node.contents();
                    oldNodes.replaceWith(nodes5784);
                  }));
                  
                  
                }
              };
              renderCond743();
              subs__.addSub(tmp5225.addEventListener('change', function() {
                renderCond743();
              }));
              
              
              var oldNodes = iternode540;
              iternode540 = iternode540.contents();
              oldNodes.replaceWith(iternode540);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list540.addEventListener('change', function() { listSubs__.unsubscribe(); renderList540(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList540(true); }));
        });
      };
      renderList540();
      
      callback(root7732); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5781;
      nodes5781 = node.contents();
      oldNodes.replaceWith(nodes5781);
    }));
    node3048.append(node3049);
    
    var node3050 = $("<div>");
    node3050.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    nrichRPG.questionAnswer.QA.all().one(function(result__) {
      var tmp5255 = result__;
      var result__ = tmp5255 != null;
      var tmp5254 = result__;
      var tmp5226 = mobl.ref(result__);
      subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
        nrichRPG.questionAnswer.QA.all().one(function(result__) {
          var tmp5251 = result__;
          var result__ = tmp5251 != null;
          var tmp5250 = result__;
          var result__ = tmp5250;
          tmp5226.set(result__);
          
        });
      }));
      subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
        nrichRPG.questionAnswer.QA.all().one(function(result__) {
          var tmp5253 = result__;
          var result__ = tmp5253 != null;
          var tmp5252 = result__;
          var result__ = tmp5252;
          tmp5226.set(result__);
          
        });
      }));
      
      
      var node3051 = $("<span>");
      node3050.append(node3051);
      var condSubs742 = new mobl.CompSubscription();
      subs__.addSub(condSubs742);
      var oldValue742;
      var renderCond742 = function() {
        var value3058 = tmp5226.get();
        if(oldValue742 === value3058) return;
        oldValue742 = value3058;
        var subs__ = condSubs742;
        subs__.unsubscribe();
        node3051.empty();
        if(value3058) {
          var nodes5780 = $("<span>");
          node3051.append(nodes5780);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl1232();
          }));
          
          function renderControl1232() {
            subs__.addSub((detail.get())(current, function(elements, callback) {
              var root7731 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7731); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5780;
              nodes5780 = node.contents();
              oldNodes.replaceWith(nodes5780);
            }));
          }
          renderControl1232();
          
          
        } else {
          
          var node3052 = $("<div>");
          node3052.attr('style', "padding:20px");
          
          
          var node3053 = $("<h2>");
          
          
          node3053.append("Add more questions.");
          node3052.append(node3053);
          node3051.append(node3052);
          
          
          
        }
      };
      renderCond742();
      subs__.addSub(tmp5226.addEventListener('change', function() {
        renderCond742();
      }));
      
      node3048.append(node3050);
      root7730.append(node3048);
      callback(root7730); return subs__;
      
    });
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
