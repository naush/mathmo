mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('nrichRPG');
mobl.provides('mobl');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root7333 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2836 = $("<span>");
  root7333.append(node2836);
  var condSubs692 = new mobl.CompSubscription();
  subs__.addSub(condSubs692);
  var oldValue692;
  var renderCond692 = function() {
    var value2912 = value.get();
    if(oldValue692 === value2912) return;
    oldValue692 = value2912;
    var subs__ = condSubs692;
    subs__.unsubscribe();
    node2836.empty();
    if(value2912) {
      var nodes5514 = $("<span>");
      node2836.append(nodes5514);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1143();
      }));
      
      function renderControl1143() {
        subs__.addSub((elements)(function(elements, callback) {
          var root7334 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7334); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5514;
          nodes5514 = node.contents();
          oldNodes.replaceWith(nodes5514);
        }));
      }
      renderControl1143();
      
      
    } else {
      var nodes5515 = $("<span>");
      node2836.append(nodes5515);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7335 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes5516 = $("<span>");
        root7335.append(nodes5516);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root7336 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7336); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5516;
          nodes5516 = node.contents();
          oldNodes.replaceWith(nodes5516);
        }));
        var nodes5517 = $("<span>");
        root7335.append(nodes5517);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root7337 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7337); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5517;
          nodes5517 = node.contents();
          oldNodes.replaceWith(nodes5517);
        }));
        callback(root7335); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5515;
        nodes5515 = node.contents();
        oldNodes.replaceWith(nodes5515);
      }));
      
      
    }
  };
  renderCond692();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond692();
  }));
  
  callback(root7333); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root7338 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2837 = $("<div>");
  
  var ref2805 = mobl.ref(ui.headerStyle);
  if(ref2805.get() !== null) {
    node2837.attr('class', ref2805.get());
    subs__.addSub(ref2805.addEventListener('change', function(_, ref, val) {
      node2837.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2805.rebind());
  
  var val1433 = onclick.get();
  if(val1433 !== null) {
    subs__.addSub(mobl.domBind(node2837, 'tap', val1433));
  }
  
  var ref2806 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2806.get() !== null) {
    node2837.attr('style', ref2806.get());
    subs__.addSub(ref2806.addEventListener('change', function(_, ref, val) {
      node2837.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2837.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2806.rebind());
  
  
  var node2840 = $("<div>");
  
  var ref2804 = mobl.ref(ui.headerContainerStyle);
  if(ref2804.get() !== null) {
    node2840.attr('class', ref2804.get());
    subs__.addSub(ref2804.addEventListener('change', function(_, ref, val) {
      node2840.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2804.rebind());
  
  
  var node2841 = $("<div>");
  
  var ref2802 = text;
  node2841.text(""+ref2802.get());
  var ignore551 = false;
  subs__.addSub(ref2802.addEventListener('change', function(_, ref, val) {
    if(ignore551) return;
    node2841.text(""+val);
  }));
  subs__.addSub(ref2802.rebind());
  
  
  var ref2803 = mobl.ref(ui.headerTextStyle);
  if(ref2803.get() !== null) {
    node2841.attr('class', ref2803.get());
    subs__.addSub(ref2803.addEventListener('change', function(_, ref, val) {
      node2841.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2803.rebind());
  
  node2840.append(node2841);
  node2837.append(node2840);
  var nodes5518 = $("<span>");
  node2837.append(nodes5518);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1144();
  }));
  
  function renderControl1144() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7339 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7339); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5518;
      nodes5518 = node.contents();
      oldNodes.replaceWith(nodes5518);
    }));
  }
  renderControl1144();
  root7338.append(node2837);
  
  var node2838 = $("<span>");
  root7338.append(node2838);
  var condSubs693 = new mobl.CompSubscription();
  subs__.addSub(condSubs693);
  var oldValue693;
  var renderCond693 = function() {
    var value2913 = fixedPosition.get();
    if(oldValue693 === value2913) return;
    oldValue693 = value2913;
    var subs__ = condSubs693;
    subs__.unsubscribe();
    node2838.empty();
    if(value2913) {
      
      var node2839 = $("<div>");
      node2839.attr('id', "hello");
      node2839.attr('style', "height: 2.9em;");
      
      node2838.append(node2839);
      
      
    } else {
      
    }
  };
  renderCond693();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond693();
  }));
  
  callback(root7338); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7340 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2807 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2807.get() !== null) {
    sp.attr('class', ref2807.get());
    subs__.addSub(ref2807.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2807.rebind());
  
  var val1434 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1434 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1434));
  }
  
  var val1435 = function(event, callback) {
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
  if(val1435 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1435));
  }
  
  var val1436 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after441(result__) {
                    var tmp5045 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after441);if(result__ !== undefined) after441(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1436 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1436));
  }
  
  var val1437 = function(event, callback) {
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
  if(val1437 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1437));
  }
  
  var ref2808 = text;
  sp.text(""+ref2808.get());
  var ignore552 = false;
  subs__.addSub(ref2808.addEventListener('change', function(_, ref, val) {
    if(ignore552) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2808.rebind());
  
  
  root7340.append(sp);
  callback(root7340); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7341 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5519 = $("<span>");
  root7341.append(nodes5519);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root7342 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7342); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5519;
    nodes5519 = node.contents();
    oldNodes.replaceWith(nodes5519);
  }));
  callback(root7341); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7343 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5520 = $("<span>");
  root7343.append(nodes5520);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root7344 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7344); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5520;
    nodes5520 = node.contents();
    oldNodes.replaceWith(nodes5520);
  }));
  callback(root7343); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root7345 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2842 = $("<ul>");
  
  var ref2809 = mobl.ref(ui.groupStyle);
  if(ref2809.get() !== null) {
    node2842.attr('class', ref2809.get());
    subs__.addSub(ref2809.addEventListener('change', function(_, ref, val) {
      node2842.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2809.rebind());
  
  var nodes5521 = $("<span>");
  node2842.append(nodes5521);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1145();
  }));
  
  function renderControl1145() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7346 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7346); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5521;
      nodes5521 = node.contents();
      oldNodes.replaceWith(nodes5521);
    }));
  }
  renderControl1145();
  root7345.append(node2842);
  callback(root7345); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root7347 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2843 = $("<img>");
  
  var ref2810 = url;
  if(ref2810.get() !== null) {
    node2843.attr('src', ref2810.get());
    subs__.addSub(ref2810.addEventListener('change', function(_, ref, val) {
      node2843.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2810.rebind());
  
  var ref2811 = width;
  if(ref2811.get() !== null) {
    node2843.attr('width', ref2811.get());
    subs__.addSub(ref2811.addEventListener('change', function(_, ref, val) {
      node2843.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2811.rebind());
  
  var ref2812 = height;
  if(ref2812.get() !== null) {
    node2843.attr('height', ref2812.get());
    subs__.addSub(ref2812.addEventListener('change', function(_, ref, val) {
      node2843.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2812.rebind());
  
  var ref2813 = style;
  if(ref2813.get() !== null) {
    node2843.attr('class', ref2813.get());
    subs__.addSub(ref2813.addEventListener('change', function(_, ref, val) {
      node2843.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2813.rebind());
  
  var val1438 = onclick.get();
  if(val1438 !== null) {
    subs__.addSub(mobl.domBind(node2843, 'tap', val1438));
  }
  
  var ref2814 = valign;
  if(ref2814.get() !== null) {
    node2843.attr('valign', ref2814.get());
    subs__.addSub(ref2814.addEventListener('change', function(_, ref, val) {
      node2843.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2814.rebind());
  
  var ref2815 = align;
  if(ref2815.get() !== null) {
    node2843.attr('align', ref2815.get());
    subs__.addSub(ref2815.addEventListener('change', function(_, ref, val) {
      node2843.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2815.rebind());
  
  root7347.append(node2843);
  callback(root7347); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root7348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2816 = mobl.ref(ui.itemStyle);
  if(ref2816.get() !== null) {
    el.attr('class', ref2816.get());
    subs__.addSub(ref2816.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2816.rebind());
  
  var ref2817 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2817.get() !== null) {
    el.attr('class', ref2817.get());
    subs__.addSub(ref2817.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2817.rebind());
  
  var val1439 = onswipe.get();
  if(val1439 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1439));
  }
  
  var val1440 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp5046 = result__;
                                           function after442(result__) {
                                             var tmp5047 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after442);if(result__ !== undefined) after442(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp5048 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1440 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1440));
  }
  
  var nodes5522 = $("<span>");
  el.append(nodes5522);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1146();
  }));
  
  function renderControl1146() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7349 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7349); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5522;
      nodes5522 = node.contents();
      oldNodes.replaceWith(nodes5522);
    }));
  }
  renderControl1146();
  root7348.append(el);
  callback(root7348); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root7350 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2844 = $("<input>");
  node2844.attr('type', "checkbox");
  
  var ref2819 = b;
  node2844.attr('checked', !!ref2819.get());
  subs__.addSub(ref2819.addEventListener('change', function(_, ref, val) {
    if(ref === ref2819) node2844.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2844, 'change', function() {
    b.set(!!node2844.attr('checked'));
  }));
  
  var val1442 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1442 !== null) {
    subs__.addSub(mobl.domBind(node2844, 'tap', val1442));
  }
  
  var val1443 = onchange.get();
  if(val1443 !== null) {
    subs__.addSub(mobl.domBind(node2844, 'change', val1443));
  }
  
  root7350.append(node2844);
  
  root7350.append(" ");
  
  var node2845 = $("<span>");
  
  var ref2818 = label;
  node2845.text(""+ref2818.get());
  var ignore553 = false;
  subs__.addSub(ref2818.addEventListener('change', function(_, ref, val) {
    if(ignore553) return;
    node2845.text(""+val);
  }));
  subs__.addSub(ref2818.rebind());
  
  
  var val1441 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after443(result__) {
                    var tmp5049 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after443);if(result__ !== undefined) after443(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1441 !== null) {
    subs__.addSub(mobl.domBind(node2845, 'tap', val1441));
  }
  
  root7350.append(node2845);
  callback(root7350); return subs__;
  
  
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
  var root7351 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2846 = $("<span>");
  root7351.append(node2846);
  var condSubs694 = new mobl.CompSubscription();
  subs__.addSub(condSubs694);
  var oldValue694;
  var renderCond694 = function() {
    var value2914 = label.get();
    if(oldValue694 === value2914) return;
    oldValue694 = value2914;
    var subs__ = condSubs694;
    subs__.unsubscribe();
    node2846.empty();
    if(value2914) {
      var nodes5523 = $("<span>");
      node2846.append(nodes5523);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root7352 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7352); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5523;
        nodes5523 = node.contents();
        oldNodes.replaceWith(nodes5523);
      }));
      
      
    } else {
      
    }
  };
  renderCond694();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond694();
  }));
  
  
  var node2847 = $("<span>");
  root7351.append(node2847);
  var condSubs695 = new mobl.CompSubscription();
  subs__.addSub(condSubs695);
  var oldValue695;
  var renderCond695 = function() {
    var value2915 = validator.get();
    if(oldValue695 === value2915) return;
    oldValue695 = value2915;
    var subs__ = condSubs695;
    subs__.unsubscribe();
    node2847.empty();
    if(value2915) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after447(result__) {
        var tmp5050 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp5051 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2848 = $("<input>");
        
        var ref2820 = inputType;
        if(ref2820.get() !== null) {
          node2848.attr('type', ref2820.get());
          subs__.addSub(ref2820.addEventListener('change', function(_, ref, val) {
            node2848.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2820.rebind());
        
        var ref2821 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2821.get() !== null) {
          node2848.attr('class', ref2821.get());
          subs__.addSub(ref2821.addEventListener('change', function(_, ref, val) {
            node2848.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2848.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2848.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2848.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2821.rebind());
        
        var ref2822 = placeholder;
        if(ref2822.get() !== null) {
          node2848.attr('placeholder', ref2822.get());
          subs__.addSub(ref2822.addEventListener('change', function(_, ref, val) {
            node2848.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2822.rebind());
        
        var ref2823 = temp;
        node2848.val(""+ref2823.get());
        var ignore554 = false;
        subs__.addSub(ref2823.addEventListener('change', function(_, ref, val) {
          if(ignore554) return;
          node2848.val(""+val);
        }));
        subs__.addSub(ref2823.rebind());
        
        subs__.addSub(mobl.domBind(node2848, 'keyup change', function() {
          ignore554 = true;
          temp.set(mobl.stringTomobl__String(node2848.val()));
          ignore554 = false;
        }));
        
        
        var val1444 = onchange.get();
        if(val1444 !== null) {
          subs__.addSub(mobl.domBind(node2848, 'change', val1444));
        }
        
        var val1445 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after444(result__) {
                          var tmp5052 = result__;
                          function after445(result__) {
                            var tmp5053 = result__;
                            var result__ = tmp5053;
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
                          var result__ = validator.get()(temp.get(), after445);if(result__ !== undefined) after445(result__);
                        }
                        var result__ = onkeyup.get()(event, after444);if(result__ !== undefined) after444(result__);
                      } else {
                        {
                          function after446(result__) {
                            var tmp5053 = result__;
                            var result__ = tmp5053;
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
                          var result__ = validator.get()(temp.get(), after446);if(result__ !== undefined) after446(result__);
                        }
                      }
                    };
        if(val1445 !== null) {
          subs__.addSub(mobl.domBind(node2848, 'keyup', val1445));
        }
        
        var val1446 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1446 !== null) {
          subs__.addSub(mobl.domBind(node2848, 'blur', val1446));
        }
        
        node2847.append(node2848);
        var nodes5524 = $("<span>");
        node2847.append(nodes5524);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root7353 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7353); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5524;
          nodes5524 = node.contents();
          oldNodes.replaceWith(nodes5524);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after447);if(result__ !== undefined) after447(result__);
    } else {
      
      var node2849 = $("<input>");
      
      var ref2824 = inputType;
      if(ref2824.get() !== null) {
        node2849.attr('type', ref2824.get());
        subs__.addSub(ref2824.addEventListener('change', function(_, ref, val) {
          node2849.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2824.rebind());
      
      var ref2825 = style;
      if(ref2825.get() !== null) {
        node2849.attr('class', ref2825.get());
        subs__.addSub(ref2825.addEventListener('change', function(_, ref, val) {
          node2849.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2825.rebind());
      
      var ref2826 = placeholder;
      if(ref2826.get() !== null) {
        node2849.attr('placeholder', ref2826.get());
        subs__.addSub(ref2826.addEventListener('change', function(_, ref, val) {
          node2849.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2826.rebind());
      
      var ref2827 = s;
      node2849.val(""+ref2827.get());
      var ignore555 = false;
      subs__.addSub(ref2827.addEventListener('change', function(_, ref, val) {
        if(ignore555) return;
        node2849.val(""+val);
      }));
      subs__.addSub(ref2827.rebind());
      
      subs__.addSub(mobl.domBind(node2849, 'keyup change', function() {
        ignore555 = true;
        s.set(mobl.stringTomobl__String(node2849.val()));
        ignore555 = false;
      }));
      
      
      var val1447 = onchange.get();
      if(val1447 !== null) {
        subs__.addSub(mobl.domBind(node2849, 'change', val1447));
      }
      
      var val1448 = onkeyup.get();
      if(val1448 !== null) {
        subs__.addSub(mobl.domBind(node2849, 'keyup', val1448));
      }
      
      var val1449 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1449 !== null) {
        subs__.addSub(mobl.domBind(node2849, 'blur', val1449));
      }
      
      node2847.append(node2849);
      
      
    }
  };
  renderCond695();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond695();
  }));
  
  callback(root7351); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7354 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5525 = $("<span>");
  root7354.append(nodes5525);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7355 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7355); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5525;
    nodes5525 = node.contents();
    oldNodes.replaceWith(nodes5525);
  }));
  callback(root7354); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7356 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5526 = $("<span>");
  root7356.append(nodes5526);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7357 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7357); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5526;
    nodes5526 = node.contents();
    oldNodes.replaceWith(nodes5526);
  }));
  callback(root7356); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root7358 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2850 = $("<span>");
  root7358.append(node2850);
  var condSubs696 = new mobl.CompSubscription();
  subs__.addSub(condSubs696);
  var oldValue696;
  var renderCond696 = function() {
    var value2916 = label.get();
    if(oldValue696 === value2916) return;
    oldValue696 = value2916;
    var subs__ = condSubs696;
    subs__.unsubscribe();
    node2850.empty();
    if(value2916) {
      var nodes5527 = $("<span>");
      node2850.append(nodes5527);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root7359 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7359); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5527;
        nodes5527 = node.contents();
        oldNodes.replaceWith(nodes5527);
      }));
      
      
    } else {
      
    }
  };
  renderCond696();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond696();
  }));
  
  
  var node2851 = $("<input>");
  node2851.attr('type', "range");
  
  var ref2828 = n;
  node2851.val(""+ref2828.get());
  var ignore556 = false;
  subs__.addSub(ref2828.addEventListener('change', function(_, ref, val) {
    if(ignore556) return;
    node2851.val(""+val);
  }));
  subs__.addSub(ref2828.rebind());
  
  subs__.addSub(mobl.domBind(node2851, 'keyup change', function() {
    ignore556 = true;
    n.set(mobl.stringTomobl__Num(node2851.val()));
    ignore556 = false;
  }));
  
  
  var ref2829 = min;
  if(ref2829.get() !== null) {
    node2851.attr('min', ref2829.get());
    subs__.addSub(ref2829.addEventListener('change', function(_, ref, val) {
      node2851.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2829.rebind());
  
  var ref2830 = max;
  if(ref2830.get() !== null) {
    node2851.attr('max', ref2830.get());
    subs__.addSub(ref2830.addEventListener('change', function(_, ref, val) {
      node2851.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2830.rebind());
  
  var ref2831 = step;
  if(ref2831.get() !== null) {
    node2851.attr('step', ref2831.get());
    subs__.addSub(ref2831.addEventListener('change', function(_, ref, val) {
      node2851.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2831.rebind());
  node2851.attr('style', "width: 99%;");
  
  var val1450 = onchange.get();
  if(val1450 !== null) {
    subs__.addSub(mobl.domBind(node2851, 'change', val1450));
  }
  
  var val1451 = onkeyup.get();
  if(val1451 !== null) {
    subs__.addSub(mobl.domBind(node2851, 'keyup', val1451));
  }
  
  var ref2832 = placeholder;
  if(ref2832.get() !== null) {
    node2851.attr('placeholder', ref2832.get());
    subs__.addSub(ref2832.addEventListener('change', function(_, ref, val) {
      node2851.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2832.rebind());
  
  root7358.append(node2851);
  callback(root7358); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root7360 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after448(result__) {
      var tmp5054 = result__;
      var result__ = tmp5054;
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
    var result__ = validator.get()(n2, after448);if(result__ !== undefined) after448(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes5528 = $("<span>");
  root7360.append(nodes5528);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root7361 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7361); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5528;
    nodes5528 = node.contents();
    oldNodes.replaceWith(nodes5528);
  }));
  callback(root7360); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root7362 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2852 = $("<span>");
  root7362.append(node2852);
  var condSubs697 = new mobl.CompSubscription();
  subs__.addSub(condSubs697);
  var oldValue697;
  var renderCond697 = function() {
    var value2917 = label.get();
    if(oldValue697 === value2917) return;
    oldValue697 = value2917;
    var subs__ = condSubs697;
    subs__.unsubscribe();
    node2852.empty();
    if(value2917) {
      
      var node2853 = $("<span>");
      node2853.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2836 = label;
      node2853.text(""+ref2836.get());
      var ignore558 = false;
      subs__.addSub(ref2836.addEventListener('change', function(_, ref, val) {
        if(ignore558) return;
        node2853.text(""+val);
      }));
      subs__.addSub(ref2836.rebind());
      
      
      node2852.append(node2853);
      
      var node2854 = $("<span>");
      node2854.attr('style', "float: left");
      
      
      var node2855 = $("<input>");
      node2855.attr('type', "password");
      
      var ref2833 = style;
      if(ref2833.get() !== null) {
        node2855.attr('class', ref2833.get());
        subs__.addSub(ref2833.addEventListener('change', function(_, ref, val) {
          node2855.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2833.rebind());
      
      var ref2834 = placeholder;
      if(ref2834.get() !== null) {
        node2855.attr('placeholder', ref2834.get());
        subs__.addSub(ref2834.addEventListener('change', function(_, ref, val) {
          node2855.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2834.rebind());
      
      var ref2835 = s;
      node2855.val(""+ref2835.get());
      var ignore557 = false;
      subs__.addSub(ref2835.addEventListener('change', function(_, ref, val) {
        if(ignore557) return;
        node2855.val(""+val);
      }));
      subs__.addSub(ref2835.rebind());
      
      subs__.addSub(mobl.domBind(node2855, 'keyup change', function() {
        ignore557 = true;
        s.set(mobl.stringTomobl__String(node2855.val()));
        ignore557 = false;
      }));
      
      
      var val1452 = onchange.get();
      if(val1452 !== null) {
        subs__.addSub(mobl.domBind(node2855, 'change', val1452));
      }
      
      var val1453 = onkeyup.get();
      if(val1453 !== null) {
        subs__.addSub(mobl.domBind(node2855, 'keyup', val1453));
      }
      
      var val1454 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1454 !== null) {
        subs__.addSub(mobl.domBind(node2855, 'blur', val1454));
      }
      
      node2854.append(node2855);
      node2852.append(node2854);
      
      
      
      
    } else {
      
      var node2856 = $("<input>");
      node2856.attr('type', "password");
      
      var ref2837 = style;
      if(ref2837.get() !== null) {
        node2856.attr('class', ref2837.get());
        subs__.addSub(ref2837.addEventListener('change', function(_, ref, val) {
          node2856.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2837.rebind());
      
      var ref2838 = placeholder;
      if(ref2838.get() !== null) {
        node2856.attr('placeholder', ref2838.get());
        subs__.addSub(ref2838.addEventListener('change', function(_, ref, val) {
          node2856.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2838.rebind());
      
      var ref2839 = s;
      node2856.val(""+ref2839.get());
      var ignore559 = false;
      subs__.addSub(ref2839.addEventListener('change', function(_, ref, val) {
        if(ignore559) return;
        node2856.val(""+val);
      }));
      subs__.addSub(ref2839.rebind());
      
      subs__.addSub(mobl.domBind(node2856, 'keyup change', function() {
        ignore559 = true;
        s.set(mobl.stringTomobl__String(node2856.val()));
        ignore559 = false;
      }));
      
      
      var val1455 = onchange.get();
      if(val1455 !== null) {
        subs__.addSub(mobl.domBind(node2856, 'change', val1455));
      }
      
      var val1456 = onkeyup.get();
      if(val1456 !== null) {
        subs__.addSub(mobl.domBind(node2856, 'keyup', val1456));
      }
      
      var val1457 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1457 !== null) {
        subs__.addSub(mobl.domBind(node2856, 'blur', val1457));
      }
      
      node2852.append(node2856);
      
      
    }
  };
  renderCond697();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond697();
  }));
  
  callback(root7362); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root7363 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2844 = style;
  if(ref2844.get() !== null) {
    sel.attr('class', ref2844.get());
    subs__.addSub(ref2844.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2844.rebind());
  
  var val1458 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after449(result__) {
                    var tmp5056 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after449);if(result__ !== undefined) after449(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1458 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1458));
  }
  
  
  var node2857 = mobl.loadingSpan();
  sel.append(node2857);
  var list501;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList501 = function() {
    var subs__ = listSubs__;
    list501 = options.get();
    list501.list(function(results501) {
      node2857.empty();
      for(var i1347 = 0; i1347 < results501.length; i1347++) {
        (function() {
          var iternode501 = $("<span>");
          node2857.append(iternode501);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results501), i1347), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results501), i1347), "_2");
          
          var node2858 = $("<option>");
          
          var ref2840 = optionDescription;
          node2858.text(""+ref2840.get());
          var ignore560 = false;
          subs__.addSub(ref2840.addEventListener('change', function(_, ref, val) {
            if(ignore560) return;
            node2858.text(""+val);
          }));
          subs__.addSub(ref2840.rebind());
          
          
          var ref2841 = optionStyle;
          if(ref2841.get() !== null) {
            node2858.attr('class', ref2841.get());
            subs__.addSub(ref2841.addEventListener('change', function(_, ref, val) {
              node2858.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2841.rebind());
          
          var ref2842 = optionValue;
          if(ref2842.get() !== null) {
            node2858.attr('value', ref2842.get());
            subs__.addSub(ref2842.addEventListener('change', function(_, ref, val) {
              node2858.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2842.rebind());
          
          var ref2843 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2843.get() !== null) {
            node2858.attr('selected', ref2843.get());
            subs__.addSub(ref2843.addEventListener('change', function(_, ref, val) {
              node2858.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2858.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2858.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2843.rebind());
          
          iternode501.append(node2858);
          
          var oldNodes = iternode501;
          iternode501 = iternode501.contents();
          oldNodes.replaceWith(iternode501);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list501.addEventListener('change', function() { listSubs__.unsubscribe(); renderList501(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList501(true); }));
    });
  };
  renderList501();
  
  root7363.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root7363); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root7364 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes5529 = $("<span>");
    root7364.append(nodes5529);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root7365 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2859 = mobl.loadingSpan();
      root7365.append(node2859);
      var list502;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList502 = function() {
        var subs__ = listSubs__;
        list502 = tabs.get();
        list502.list(function(results502) {
          node2859.empty();
          for(var i1348 = 0; i1348 < results502.length; i1348++) {
            (function() {
              var iternode502 = $("<span>");
              node2859.append(iternode502);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results502), i1348), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results502), i1348), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results502), i1348), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp5018 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp5018.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp5018.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp5018.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp5018.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp5017 = mobl.ref(result__);
              
              var nodes5530 = $("<span>");
              iternode502.append(nodes5530);
              subs__.addSub((mobl.span)(tmp5018, mobl.ref(null), tmp5017, mobl.ref(null), function(_, callback) {
                var root7366 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5531 = $("<span>");
                root7366.append(nodes5531);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root7367 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7367); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5531;
                  nodes5531 = node.contents();
                  oldNodes.replaceWith(nodes5531);
                }));
                callback(root7366); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5530;
                nodes5530 = node.contents();
                oldNodes.replaceWith(nodes5530);
              }));
              
              var oldNodes = iternode502;
              iternode502 = iternode502.contents();
              oldNodes.replaceWith(iternode502);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list502.addEventListener('change', function() { listSubs__.unsubscribe(); renderList502(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList502(true); }));
        });
      };
      renderList502();
      
      callback(root7365); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5529;
      nodes5529 = node.contents();
      oldNodes.replaceWith(nodes5529);
    }));
    
    var node2860 = mobl.loadingSpan();
    root7364.append(node2860);
    var list503;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList503 = function() {
      var subs__ = listSubs__;
      list503 = tabs.get();
      list503.list(function(results503) {
        node2860.empty();
        for(var i1349 = 0; i1349 < results503.length; i1349++) {
          (function() {
            var iternode503 = $("<span>");
            node2860.append(iternode503);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results503), i1349), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results503), i1349), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results503), i1349), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp5019 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp5019.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp5019.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp5019.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp5019.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes5532 = $("<span>");
            iternode503.append(nodes5532);
            subs__.addSub((mobl.block)(tmp5019, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root7368 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5533 = $("<span>");
              root7368.append(nodes5533);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root7369 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5534 = $("<span>");
                root7369.append(nodes5534);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1147();
                }));
                
                function renderControl1147() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root7370 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7370); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5534;
                    nodes5534 = node.contents();
                    oldNodes.replaceWith(nodes5534);
                  }));
                }
                renderControl1147();
                callback(root7369); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5533;
                nodes5533 = node.contents();
                oldNodes.replaceWith(nodes5533);
              }));
              callback(root7368); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5532;
              nodes5532 = node.contents();
              oldNodes.replaceWith(nodes5532);
            }));
            
            var oldNodes = iternode503;
            iternode503 = iternode503.contents();
            oldNodes.replaceWith(iternode503);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list503.addEventListener('change', function() { listSubs__.unsubscribe(); renderList503(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList503(true); }));
      });
    };
    renderList503();
    
    callback(root7364); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes5529 = $("<span>");
      root7364.append(nodes5529);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7365 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2859 = mobl.loadingSpan();
        root7365.append(node2859);
        var list502;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList502 = function() {
          var subs__ = listSubs__;
          list502 = tabs.get();
          list502.list(function(results502) {
            node2859.empty();
            for(var i1348 = 0; i1348 < results502.length; i1348++) {
              (function() {
                var iternode502 = $("<span>");
                node2859.append(iternode502);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results502), i1348), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results502), i1348), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results502), i1348), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp5018 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp5018.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp5018.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp5018.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp5018.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5017 = mobl.ref(result__);
                
                var nodes5530 = $("<span>");
                iternode502.append(nodes5530);
                subs__.addSub((mobl.span)(tmp5018, mobl.ref(null), tmp5017, mobl.ref(null), function(_, callback) {
                  var root7366 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5531 = $("<span>");
                  root7366.append(nodes5531);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root7367 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root7367); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5531;
                    nodes5531 = node.contents();
                    oldNodes.replaceWith(nodes5531);
                  }));
                  callback(root7366); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5530;
                  nodes5530 = node.contents();
                  oldNodes.replaceWith(nodes5530);
                }));
                
                var oldNodes = iternode502;
                iternode502 = iternode502.contents();
                oldNodes.replaceWith(iternode502);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list502.addEventListener('change', function() { listSubs__.unsubscribe(); renderList502(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList502(true); }));
          });
        };
        renderList502();
        
        callback(root7365); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5529;
        nodes5529 = node.contents();
        oldNodes.replaceWith(nodes5529);
      }));
      
      var node2860 = mobl.loadingSpan();
      root7364.append(node2860);
      var list503;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList503 = function() {
        var subs__ = listSubs__;
        list503 = tabs.get();
        list503.list(function(results503) {
          node2860.empty();
          for(var i1349 = 0; i1349 < results503.length; i1349++) {
            (function() {
              var iternode503 = $("<span>");
              node2860.append(iternode503);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results503), i1349), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results503), i1349), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results503), i1349), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp5019 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp5019.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp5019.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp5019.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp5019.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes5532 = $("<span>");
              iternode503.append(nodes5532);
              subs__.addSub((mobl.block)(tmp5019, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root7368 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes5533 = $("<span>");
                root7368.append(nodes5533);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root7369 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5534 = $("<span>");
                  root7369.append(nodes5534);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1147();
                  }));
                  
                  function renderControl1147() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root7370 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7370); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5534;
                      nodes5534 = node.contents();
                      oldNodes.replaceWith(nodes5534);
                    }));
                  }
                  renderControl1147();
                  callback(root7369); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5533;
                  nodes5533 = node.contents();
                  oldNodes.replaceWith(nodes5533);
                }));
                callback(root7368); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes5532;
                nodes5532 = node.contents();
                oldNodes.replaceWith(nodes5532);
              }));
              
              var oldNodes = iternode503;
              iternode503 = iternode503.contents();
              oldNodes.replaceWith(iternode503);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list503.addEventListener('change', function() { listSubs__.unsubscribe(); renderList503(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList503(true); }));
        });
      };
      renderList503();
      
      callback(root7364); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root7371 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2861 = $("<div>");
  
  var ref2848 = mobl.ref(ui.searchboxStyle);
  if(ref2848.get() !== null) {
    node2861.attr('class', ref2848.get());
    subs__.addSub(ref2848.addEventListener('change', function(_, ref, val) {
      node2861.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2848.rebind());
  
  
  var node2862 = $("<input>");
  node2862.attr('type', "search");
  
  var ref2845 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2845.get() !== null) {
    node2862.attr('class', ref2845.get());
    subs__.addSub(ref2845.addEventListener('change', function(_, ref, val) {
      node2862.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2845.rebind());
  
  var ref2846 = placeholder;
  if(ref2846.get() !== null) {
    node2862.attr('placeholder', ref2846.get());
    subs__.addSub(ref2846.addEventListener('change', function(_, ref, val) {
      node2862.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2846.rebind());
  
  var ref2847 = s;
  node2862.val(""+ref2847.get());
  var ignore561 = false;
  subs__.addSub(ref2847.addEventListener('change', function(_, ref, val) {
    if(ignore561) return;
    node2862.val(""+val);
  }));
  subs__.addSub(ref2847.rebind());
  
  subs__.addSub(mobl.domBind(node2862, 'keyup change', function() {
    ignore561 = true;
    s.set(mobl.stringTomobl__String(node2862.val()));
    ignore561 = false;
  }));
  
  
  var val1459 = onsearch.get();
  if(val1459 !== null) {
    subs__.addSub(mobl.domBind(node2862, 'change', val1459));
  }
  
  var val1460 = onkeyup.get();
  if(val1460 !== null) {
    subs__.addSub(mobl.domBind(node2862, 'keyup', val1460));
  }
  node2862.attr('autocorrect', false);
  node2862.attr('autocapitalize', false);
  node2862.attr('autocomplete', false);
  
  node2861.append(node2862);
  root7371.append(node2861);
  callback(root7371); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root7372 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2849 = mobl.ref(ui.contextMenuStyle);
  if(ref2849.get() !== null) {
    menu.attr('class', ref2849.get());
    subs__.addSub(ref2849.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2849.rebind());
  
  var nodes5535 = $("<span>");
  menu.append(nodes5535);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1148();
  }));
  
  function renderControl1148() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7373 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7373); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5535;
      nodes5535 = node.contents();
      oldNodes.replaceWith(nodes5535);
    }));
  }
  renderControl1148();
  root7372.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1461 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp5059 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1461 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1461));
  }
  
  root7372.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root7372); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root7374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp5044 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp5044.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2863 = $("<span>");
  root7374.append(node2863);
  var condSubs698 = new mobl.CompSubscription();
  subs__.addSub(condSubs698);
  var oldValue698;
  var renderCond698 = function() {
    var value2918 = tmp5044.get();
    if(oldValue698 === value2918) return;
    oldValue698 = value2918;
    var subs__ = condSubs698;
    subs__.unsubscribe();
    node2863.empty();
    if(value2918) {
      items.get().one(function(result__) {
        var tmp5060 = result__;
        var current = mobl.ref(result__);
        
        var node2864 = $("<div>");
        node2864.attr('width', "100%");
        
        
        var node2865 = $("<div>");
        node2865.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes5538 = $("<span>");
        node2865.append(nodes5538);
        subs__.addSub((ui.group)(function(_, callback) {
          var root7377 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2868 = mobl.loadingSpan();
          root7377.append(node2868);
          var list504;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList504 = function() {
            var subs__ = listSubs__;
            list504 = items.get();
            list504.list(function(results504) {
              node2868.empty();
              for(var i1350 = 0; i1350 < results504.length; i1350++) {
                (function() {
                  var iternode504 = $("<span>");
                  node2868.append(iternode504);
                  var it;
                  it = mobl.ref(mobl.ref(results504), i1350);
                  var result__ = it.get() == current.get();
                  var tmp5025 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp5025.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp5025.set(it.get() == current.get());
                  }));
                  
                  
                  var node2869 = $("<span>");
                  iternode504.append(node2869);
                  var condSubs700 = new mobl.CompSubscription();
                  subs__.addSub(condSubs700);
                  var oldValue700;
                  var renderCond700 = function() {
                    var value2920 = tmp5025.get();
                    if(oldValue700 === value2920) return;
                    oldValue700 = value2920;
                    var subs__ = condSubs700;
                    subs__.unsubscribe();
                    node2869.empty();
                    if(value2920) {
                      var nodes5539 = $("<span>");
                      node2869.append(nodes5539);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root7378 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5540 = $("<span>");
                        root7378.append(nodes5540);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1150();
                        }));
                        
                        function renderControl1150() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root7379 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root7379); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5540;
                            nodes5540 = node.contents();
                            oldNodes.replaceWith(nodes5540);
                          }));
                        }
                        renderControl1150();
                        callback(root7378); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5539;
                        nodes5539 = node.contents();
                        oldNodes.replaceWith(nodes5539);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp5024 = mobl.ref(result__);
                      
                      var nodes5541 = $("<span>");
                      node2869.append(nodes5541);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5024, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root7380 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes5542 = $("<span>");
                        root7380.append(nodes5542);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1151();
                        }));
                        
                        function renderControl1151() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root7381 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root7381); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes5542;
                            nodes5542 = node.contents();
                            oldNodes.replaceWith(nodes5542);
                          }));
                        }
                        renderControl1151();
                        callback(root7380); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes5541;
                        nodes5541 = node.contents();
                        oldNodes.replaceWith(nodes5541);
                      }));
                      
                      
                    }
                  };
                  renderCond700();
                  subs__.addSub(tmp5025.addEventListener('change', function() {
                    renderCond700();
                  }));
                  
                  
                  var oldNodes = iternode504;
                  iternode504 = iternode504.contents();
                  oldNodes.replaceWith(iternode504);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list504.addEventListener('change', function() { listSubs__.unsubscribe(); renderList504(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList504(true); }));
            });
          };
          renderList504();
          
          callback(root7377); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5538;
          nodes5538 = node.contents();
          oldNodes.replaceWith(nodes5538);
        }));
        node2864.append(node2865);
        
        var node2866 = $("<div>");
        node2866.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2867 = $("<span>");
        node2866.append(node2867);
        var condSubs699 = new mobl.CompSubscription();
        subs__.addSub(condSubs699);
        var oldValue699;
        var renderCond699 = function() {
          var value2919 = current.get();
          if(oldValue699 === value2919) return;
          oldValue699 = value2919;
          var subs__ = condSubs699;
          subs__.unsubscribe();
          node2867.empty();
          if(value2919) {
            var nodes5536 = $("<span>");
            node2867.append(nodes5536);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1149();
            }));
            
            function renderControl1149() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root7375 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7375); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5536;
                nodes5536 = node.contents();
                oldNodes.replaceWith(nodes5536);
              }));
            }
            renderControl1149();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp5026 = mobl.ref(result__);
            
            var nodes5537 = $("<span>");
            node2867.append(nodes5537);
            subs__.addSub((mobl.label)(tmp5026, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root7376 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7376); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5537;
              nodes5537 = node.contents();
              oldNodes.replaceWith(nodes5537);
            }));
            
            
          }
        };
        renderCond699();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond699();
        }));
        
        node2864.append(node2866);
        node2863.append(node2864);
        
        
        
        
        
        
      });
    } else {
      var nodes5543 = $("<span>");
      node2863.append(nodes5543);
      subs__.addSub((ui.group)(function(_, callback) {
        var root7382 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2870 = mobl.loadingSpan();
        root7382.append(node2870);
        var list505;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList505 = function() {
          var subs__ = listSubs__;
          list505 = items.get();
          list505.list(function(results505) {
            node2870.empty();
            for(var i1351 = 0; i1351 < results505.length; i1351++) {
              (function() {
                var iternode505 = $("<span>");
                node2870.append(iternode505);
                var it;
                it = mobl.ref(mobl.ref(results505), i1351);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp5061 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp5020 = mobl.ref(result__);
                
                var nodes5544 = $("<span>");
                iternode505.append(nodes5544);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5020, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root7383 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5545 = $("<span>");
                  root7383.append(nodes5545);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1152();
                  }));
                  
                  function renderControl1152() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root7384 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7384); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5545;
                      nodes5545 = node.contents();
                      oldNodes.replaceWith(nodes5545);
                    }));
                  }
                  renderControl1152();
                  callback(root7383); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5544;
                  nodes5544 = node.contents();
                  oldNodes.replaceWith(nodes5544);
                }));
                
                var oldNodes = iternode505;
                iternode505 = iternode505.contents();
                oldNodes.replaceWith(iternode505);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list505.addEventListener('change', function() { listSubs__.unsubscribe(); renderList505(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList505(true); }));
          });
        };
        renderList505();
        
        callback(root7382); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5543;
        nodes5543 = node.contents();
        oldNodes.replaceWith(nodes5543);
      }));
      
      
    }
  };
  renderCond698();
  subs__.addSub(tmp5044.addEventListener('change', function() {
    renderCond698();
  }));
  
  callback(root7374); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root7385 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp5023 = mobl.ref(result__);
  
  var nodes5546 = $("<span>");
  root7385.append(nodes5546);
  subs__.addSub((ui.header)(tmp5023, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7386 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5022 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5021 = mobl.ref(result__);
    
    var nodes5547 = $("<span>");
    root7386.append(nodes5547);
    subs__.addSub((ui.backButton)(tmp5021, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5022, function(_, callback) {
      var root7387 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7387); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5547;
      nodes5547 = node.contents();
      oldNodes.replaceWith(nodes5547);
    }));
    callback(root7386); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5546;
    nodes5546 = node.contents();
    oldNodes.replaceWith(nodes5546);
  }));
  var nodes5548 = $("<span>");
  root7385.append(nodes5548);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1153();
  }));
  
  function renderControl1153() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root7388 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7388); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5548;
      nodes5548 = node.contents();
      oldNodes.replaceWith(nodes5548);
    }));
  }
  renderControl1153();
  callback(root7385); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root7389 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes5549 = $("<span>");
  root7389.append(nodes5549);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7390 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2871 = mobl.loadingSpan();
    root7390.append(node2871);
    var list506;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList506 = function() {
      var subs__ = listSubs__;
      list506 = coll.get();
      list506.list(function(results506) {
        node2871.empty();
        for(var i1352 = 0; i1352 < results506.length; i1352++) {
          (function() {
            var iternode506 = $("<span>");
            node2871.append(iternode506);
            var it;
            it = mobl.ref(mobl.ref(results506), i1352);
            var result__ = it.get() == selected.get();
            var tmp5028 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp5028.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp5028.set(it.get() == selected.get());
            }));
            
            
            var node2872 = $("<span>");
            iternode506.append(node2872);
            var condSubs701 = new mobl.CompSubscription();
            subs__.addSub(condSubs701);
            var oldValue701;
            var renderCond701 = function() {
              var value2921 = tmp5028.get();
              if(oldValue701 === value2921) return;
              oldValue701 = value2921;
              var subs__ = condSubs701;
              subs__.unsubscribe();
              node2872.empty();
              if(value2921) {
                var nodes5550 = $("<span>");
                node2872.append(nodes5550);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root7391 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5551 = $("<span>");
                  root7391.append(nodes5551);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1154();
                  }));
                  
                  function renderControl1154() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root7392 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7392); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5551;
                      nodes5551 = node.contents();
                      oldNodes.replaceWith(nodes5551);
                    }));
                  }
                  renderControl1154();
                  callback(root7391); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5550;
                  nodes5550 = node.contents();
                  oldNodes.replaceWith(nodes5550);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5027 = mobl.ref(result__);
                
                var nodes5552 = $("<span>");
                node2872.append(nodes5552);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5027, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root7393 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes5553 = $("<span>");
                  root7393.append(nodes5553);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1155();
                  }));
                  
                  function renderControl1155() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root7394 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root7394); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes5553;
                      nodes5553 = node.contents();
                      oldNodes.replaceWith(nodes5553);
                    }));
                  }
                  renderControl1155();
                  callback(root7393); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5552;
                  nodes5552 = node.contents();
                  oldNodes.replaceWith(nodes5552);
                }));
                
                
              }
            };
            renderCond701();
            subs__.addSub(tmp5028.addEventListener('change', function() {
              renderCond701();
            }));
            
            
            var oldNodes = iternode506;
            iternode506 = iternode506.contents();
            oldNodes.replaceWith(iternode506);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list506.addEventListener('change', function() { listSubs__.unsubscribe(); renderList506(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList506(true); }));
      });
    };
    renderList506();
    
    callback(root7390); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5549;
    nodes5549 = node.contents();
    oldNodes.replaceWith(nodes5549);
  }));
  callback(root7389); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root7395 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp5062 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp5029 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp5029.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp5029.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp5029.set(coll.get().limit(n.get()));
    }));
    
    
    var node2873 = mobl.loadingSpan();
    root7395.append(node2873);
    var list507;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList507 = function() {
      var subs__ = listSubs__;
      list507 = tmp5029.get();
      list507.list(function(results507) {
        node2873.empty();
        for(var i1353 = 0; i1353 < results507.length; i1353++) {
          (function() {
            var iternode507 = $("<span>");
            node2873.append(iternode507);
            var it;
            it = mobl.ref(mobl.ref(results507), i1353);
            var nodes5554 = $("<span>");
            iternode507.append(nodes5554);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1156();
            }));
            
            function renderControl1156() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root7396 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7396); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5554;
                nodes5554 = node.contents();
                oldNodes.replaceWith(nodes5554);
              }));
            }
            renderControl1156();
            
            var oldNodes = iternode507;
            iternode507 = iternode507.contents();
            oldNodes.replaceWith(iternode507);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list507.addEventListener('change', function() { listSubs__.unsubscribe(); renderList507(true); }));
        subs__.addSub(tmp5029.addEventListener('change', function() { listSubs__.unsubscribe(); renderList507(true); }));
      });
    };
    renderList507();
    
    var result__ = n.get() < total.get();
    var tmp5031 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp5031.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp5031.set(n.get() < total.get());
    }));
    
    
    var node2874 = $("<span>");
    root7395.append(node2874);
    var condSubs702 = new mobl.CompSubscription();
    subs__.addSub(condSubs702);
    var oldValue702;
    var renderCond702 = function() {
      var value2922 = tmp5031.get();
      if(oldValue702 === value2922) return;
      oldValue702 = value2922;
      var subs__ = condSubs702;
      subs__.unsubscribe();
      node2874.empty();
      if(value2922) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp5030 = mobl.ref(result__);
        
        var nodes5555 = $("<span>");
        node2874.append(nodes5555);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp5030, mobl.ref(null), function(_, callback) {
          var root7397 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes5556 = $("<span>");
          root7397.append(nodes5556);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root7398 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root7398); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes5556;
            nodes5556 = node.contents();
            oldNodes.replaceWith(nodes5556);
          }));
          callback(root7397); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes5555;
          nodes5555 = node.contents();
          oldNodes.replaceWith(nodes5555);
        }));
        
        
      } else {
        
      }
    };
    renderCond702();
    subs__.addSub(tmp5031.addEventListener('change', function() {
      renderCond702();
    }));
    
    callback(root7395); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root7399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5557 = $("<span>");
  root7399.append(nodes5557);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7400 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2875 = mobl.loadingSpan();
    root7400.append(node2875);
    var list508;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList508 = function() {
      var subs__ = listSubs__;
      list508 = items.get();
      list508.list(function(results508) {
        node2875.empty();
        for(var i1354 = 0; i1354 < results508.length; i1354++) {
          (function() {
            var iternode508 = $("<span>");
            node2875.append(iternode508);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results508), i1354), "_1");it = mobl.ref(mobl.ref(mobl.ref(results508), i1354), "_2");
            var nodes5558 = $("<span>");
            iternode508.append(nodes5558);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root7401 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5559 = $("<span>");
              root7401.append(nodes5559);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root7402 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7402); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5559;
                nodes5559 = node.contents();
                oldNodes.replaceWith(nodes5559);
              }));
              callback(root7401); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5558;
              nodes5558 = node.contents();
              oldNodes.replaceWith(nodes5558);
            }));
            
            var oldNodes = iternode508;
            iternode508 = iternode508.contents();
            oldNodes.replaceWith(iternode508);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list508.addEventListener('change', function() { listSubs__.unsubscribe(); renderList508(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList508(true); }));
      });
    };
    renderList508();
    
    callback(root7400); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5557;
    nodes5557 = node.contents();
    oldNodes.replaceWith(nodes5557);
  }));
  callback(root7399); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root7403 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll3561) {
    coll3561 = coll3561.reverse();
    function processOne231() {
      var it;
      it = coll3561.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll3561.length > 0) processOne231(); else rest231();
      
    }
    function rest231() {
      var nodes5560 = $("<span>");
      root7403.append(nodes5560);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root7404 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp5032 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp5033 = mobl.ref(result__);
        
        var nodes5561 = $("<span>");
        root7404.append(nodes5561);
        subs__.addSub((ui.backButton)(tmp5033, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5032, function(_, callback) {
          var root7405 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7405); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5561;
          nodes5561 = node.contents();
          oldNodes.replaceWith(nodes5561);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll3560) {
                           coll3560 = coll3560.reverse();
                           function processOne230() {
                             var checked;var it;
                             var tmp5064 = coll3560.pop();
                             checked = tmp5064._1;it = tmp5064._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll3560.length > 0) processOne230(); else rest230();
                               
                             } else {
                               {
                                 
                                 if(coll3560.length > 0) processOne230(); else rest230();
                                 
                               }
                             }
                           }
                           function rest230() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll3560.length > 0) processOne230(); else rest230();
                         });
                         
                       };
        var tmp5034 = mobl.ref(result__);
        
        var nodes5562 = $("<span>");
        root7404.append(nodes5562);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5034, function(_, callback) {
          var root7406 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7406); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes5562;
          nodes5562 = node.contents();
          oldNodes.replaceWith(nodes5562);
        }));
        callback(root7404); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5560;
        nodes5560 = node.contents();
        oldNodes.replaceWith(nodes5560);
      }));
      var nodes5563 = $("<span>");
      root7403.append(nodes5563);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root7407 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7407); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5563;
        nodes5563 = node.contents();
        oldNodes.replaceWith(nodes5563);
      }));
      callback(root7403); return subs__;
      
      
    }
    if(coll3561.length > 0) processOne231(); else rest231();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root7408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes5564 = $("<span>");
  root7408.append(nodes5564);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root7409 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7409); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5564;
    nodes5564 = node.contents();
    oldNodes.replaceWith(nodes5564);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp5035 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp5035.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp5035.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp5035.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp5035.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp5035.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes5565 = $("<span>");
  root7408.append(nodes5565);
  subs__.addSub((ui.masterDetail)(tmp5035, masterItem, detailItem, function(_, callback) {
    var root7410 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7410); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5565;
    nodes5565 = node.contents();
    oldNodes.replaceWith(nodes5565);
  }));
  callback(root7408); return subs__;
  
  
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
  var root7411 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes5566 = $("<span>");
  root7411.append(nodes5566);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root7412 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2876 = mobl.loadingSpan();
    root7412.append(node2876);
    var list509;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList509 = function() {
      var subs__ = listSubs__;
      list509 = sections.get();
      list509.list(function(results509) {
        node2876.empty();
        for(var i1355 = 0; i1355 < results509.length; i1355++) {
          (function() {
            var iternode509 = $("<span>");
            node2876.append(iternode509);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results509), i1355), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results509), i1355), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp5037 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp5037.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp5037.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp5037.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp5037.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp5036 = mobl.ref(result__);
            
            var nodes5567 = $("<span>");
            iternode509.append(nodes5567);
            subs__.addSub((mobl.span)(tmp5037, mobl.ref(null), tmp5036, mobl.ref(null), function(_, callback) {
              var root7413 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5568 = $("<span>");
              root7413.append(nodes5568);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root7414 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root7414); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes5568;
                nodes5568 = node.contents();
                oldNodes.replaceWith(nodes5568);
              }));
              callback(root7413); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5567;
              nodes5567 = node.contents();
              oldNodes.replaceWith(nodes5567);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp5038 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp5038.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp5038.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp5038.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp5038.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes5569 = $("<span>");
            iternode509.append(nodes5569);
            subs__.addSub((mobl.block)(tmp5038, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root7415 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes5570 = $("<span>");
              root7415.append(nodes5570);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1157();
              }));
              
              function renderControl1157() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root7416 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root7416); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes5570;
                  nodes5570 = node.contents();
                  oldNodes.replaceWith(nodes5570);
                }));
              }
              renderControl1157();
              callback(root7415); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes5569;
              nodes5569 = node.contents();
              oldNodes.replaceWith(nodes5569);
            }));
            
            var oldNodes = iternode509;
            iternode509 = iternode509.contents();
            oldNodes.replaceWith(iternode509);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list509.addEventListener('change', function() { listSubs__.unsubscribe(); renderList509(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList509(true); }));
      });
    };
    renderList509();
    
    callback(root7412); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5566;
    nodes5566 = node.contents();
    oldNodes.replaceWith(nodes5566);
  }));
  callback(root7411); return subs__;
  
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
  var root7417 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2877 = $("<table>");
  
  var ref2850 = style;
  if(ref2850.get() !== null) {
    node2877.attr('class', ref2850.get());
    subs__.addSub(ref2850.addEventListener('change', function(_, ref, val) {
      node2877.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2850.rebind());
  
  var nodes5571 = $("<span>");
  node2877.append(nodes5571);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1158();
  }));
  
  function renderControl1158() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7418 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7418); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5571;
      nodes5571 = node.contents();
      oldNodes.replaceWith(nodes5571);
    }));
  }
  renderControl1158();
  root7417.append(node2877);
  callback(root7417); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root7419 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2878 = $("<tr>");
  
  var ref2851 = style;
  if(ref2851.get() !== null) {
    node2878.attr('class', ref2851.get());
    subs__.addSub(ref2851.addEventListener('change', function(_, ref, val) {
      node2878.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2851.rebind());
  
  var nodes5572 = $("<span>");
  node2878.append(nodes5572);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1159();
  }));
  
  function renderControl1159() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7420 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7420); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5572;
      nodes5572 = node.contents();
      oldNodes.replaceWith(nodes5572);
    }));
  }
  renderControl1159();
  root7419.append(node2878);
  callback(root7419); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root7421 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2879 = $("<td>");
  
  var ref2852 = width;
  if(ref2852.get() !== null) {
    node2879.attr('width', ref2852.get());
    subs__.addSub(ref2852.addEventListener('change', function(_, ref, val) {
      node2879.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2852.rebind());
  
  var ref2853 = style;
  if(ref2853.get() !== null) {
    node2879.attr('class', ref2853.get());
    subs__.addSub(ref2853.addEventListener('change', function(_, ref, val) {
      node2879.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2853.rebind());
  
  var nodes5573 = $("<span>");
  node2879.append(nodes5573);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1160();
  }));
  
  function renderControl1160() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7422 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7422); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5573;
      nodes5573 = node.contents();
      oldNodes.replaceWith(nodes5573);
    }));
  }
  renderControl1160();
  root7421.append(node2879);
  callback(root7421); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root7423 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2880 = $("<td>");
  
  var ref2854 = width;
  if(ref2854.get() !== null) {
    node2880.attr('width', ref2854.get());
    subs__.addSub(ref2854.addEventListener('change', function(_, ref, val) {
      node2880.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2854.rebind());
  
  var ref2855 = style;
  if(ref2855.get() !== null) {
    node2880.attr('class', ref2855.get());
    subs__.addSub(ref2855.addEventListener('change', function(_, ref, val) {
      node2880.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2855.rebind());
  
  var nodes5574 = $("<span>");
  node2880.append(nodes5574);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1161();
  }));
  
  function renderControl1161() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7424); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5574;
      nodes5574 = node.contents();
      oldNodes.replaceWith(nodes5574);
    }));
  }
  renderControl1161();
  root7423.append(node2880);
  callback(root7423); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root7425 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2881 = $("<td>");
  
  var ref2856 = width;
  if(ref2856.get() !== null) {
    node2881.attr('width', ref2856.get());
    subs__.addSub(ref2856.addEventListener('change', function(_, ref, val) {
      node2881.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2856.rebind());
  
  var ref2857 = style;
  if(ref2857.get() !== null) {
    node2881.attr('class', ref2857.get());
    subs__.addSub(ref2857.addEventListener('change', function(_, ref, val) {
      node2881.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2857.rebind());
  
  
  var node2882 = $("<strong>");
  
  var nodes5575 = $("<span>");
  node2882.append(nodes5575);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1162();
  }));
  
  function renderControl1162() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7426 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7426); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5575;
      nodes5575 = node.contents();
      oldNodes.replaceWith(nodes5575);
    }));
  }
  renderControl1162();
  node2881.append(node2882);
  root7425.append(node2881);
  callback(root7425); return subs__;
  
  
  
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
  items.list(function(coll3562) {
    coll3562 = coll3562.reverse();
    function processOne232() {
      var item;
      item = coll3562.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll3562.length > 0) processOne232(); else rest232();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll3562.length > 0) processOne232(); else rest232();
          
        }
      }
    }
    function rest232() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll3562.length > 0) processOne232(); else rest232();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root7427 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp5066 = result__;
    var current = mobl.ref(result__);
    
    var node2883 = $("<div>");
    node2883.attr('width', "100%");
    
    
    var node2884 = $("<div>");
    node2884.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes5577 = $("<span>");
    node2884.append(nodes5577);
    subs__.addSub((ui.group)(function(_, callback) {
      var root7429 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2889 = mobl.loadingSpan();
      root7429.append(node2889);
      var list510;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList510 = function() {
        var subs__ = listSubs__;
        list510 = items.get();
        list510.list(function(results510) {
          node2889.empty();
          for(var i1356 = 0; i1356 < results510.length; i1356++) {
            (function() {
              var iternode510 = $("<span>");
              node2889.append(iternode510);
              var it;
              it = mobl.ref(mobl.ref(results510), i1356);
              var result__ = it.get() == current.get();
              var tmp5042 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp5042.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp5042.set(it.get() == current.get());
              }));
              
              
              var node2890 = $("<span>");
              iternode510.append(node2890);
              var condSubs704 = new mobl.CompSubscription();
              subs__.addSub(condSubs704);
              var oldValue704;
              var renderCond704 = function() {
                var value2924 = tmp5042.get();
                if(oldValue704 === value2924) return;
                oldValue704 = value2924;
                var subs__ = condSubs704;
                subs__.unsubscribe();
                node2890.empty();
                if(value2924) {
                  var nodes5578 = $("<span>");
                  node2890.append(nodes5578);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root7430 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp5072 = result__;
                      var tmp5039 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp5070 = result__;
                          var result__ = tmp5070;
                          tmp5039.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp5071 = result__;
                          var result__ = tmp5071;
                          tmp5039.set(result__);
                          
                        });
                      }));
                      
                      var nodes5579 = $("<span>");
                      root7430.append(nodes5579);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1164();
                      }));
                      
                      function renderControl1164() {
                        subs__.addSub((masterItem.get())(it, tmp5039, function(elements, callback) {
                          var root7431 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root7431); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes5579;
                          nodes5579 = node.contents();
                          oldNodes.replaceWith(nodes5579);
                        }));
                      }
                      renderControl1164();
                      callback(root7430); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5578;
                    nodes5578 = node.contents();
                    oldNodes.replaceWith(nodes5578);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp5041 = mobl.ref(result__);
                  
                  var nodes5580 = $("<span>");
                  node2890.append(nodes5580);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5041, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root7432 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp5075 = result__;
                      var tmp5040 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp5073 = result__;
                          var result__ = tmp5073;
                          tmp5040.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp5074 = result__;
                          var result__ = tmp5074;
                          tmp5040.set(result__);
                          
                        });
                      }));
                      
                      var nodes5581 = $("<span>");
                      root7432.append(nodes5581);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1165();
                      }));
                      
                      function renderControl1165() {
                        subs__.addSub((masterItem.get())(it, tmp5040, function(elements, callback) {
                          var root7433 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root7433); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes5581;
                          nodes5581 = node.contents();
                          oldNodes.replaceWith(nodes5581);
                        }));
                      }
                      renderControl1165();
                      callback(root7432); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes5580;
                    nodes5580 = node.contents();
                    oldNodes.replaceWith(nodes5580);
                  }));
                  
                  
                }
              };
              renderCond704();
              subs__.addSub(tmp5042.addEventListener('change', function() {
                renderCond704();
              }));
              
              
              var oldNodes = iternode510;
              iternode510 = iternode510.contents();
              oldNodes.replaceWith(iternode510);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list510.addEventListener('change', function() { listSubs__.unsubscribe(); renderList510(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList510(true); }));
        });
      };
      renderList510();
      
      callback(root7429); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5577;
      nodes5577 = node.contents();
      oldNodes.replaceWith(nodes5577);
    }));
    node2883.append(node2884);
    
    var node2885 = $("<div>");
    node2885.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    nrichRPG.questionAnswer.QA.all().count(function(result__) {
      var tmp5069 = result__;
      var tmp5043 = mobl.ref(result__);
      subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
        nrichRPG.questionAnswer.QA.all().count(function(result__) {
          var tmp5067 = result__;
          var result__ = tmp5067;
          tmp5043.set(result__);
          
        });
      }));
      subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
        nrichRPG.questionAnswer.QA.all().count(function(result__) {
          var tmp5068 = result__;
          var result__ = tmp5068;
          tmp5043.set(result__);
          
        });
      }));
      
      
      var node2886 = $("<span>");
      node2885.append(node2886);
      var condSubs703 = new mobl.CompSubscription();
      subs__.addSub(condSubs703);
      var oldValue703;
      var renderCond703 = function() {
        var value2923 = tmp5043.get();
        if(oldValue703 === value2923) return;
        oldValue703 = value2923;
        var subs__ = condSubs703;
        subs__.unsubscribe();
        node2886.empty();
        if(value2923) {
          var nodes5576 = $("<span>");
          node2886.append(nodes5576);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl1163();
          }));
          
          function renderControl1163() {
            subs__.addSub((detail.get())(current, function(elements, callback) {
              var root7428 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root7428); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes5576;
              nodes5576 = node.contents();
              oldNodes.replaceWith(nodes5576);
            }));
          }
          renderControl1163();
          
          
        } else {
          
          var node2887 = $("<div>");
          node2887.attr('style', "padding:20px");
          
          
          var node2888 = $("<h2>");
          
          
          node2888.append("Add more questions.");
          node2887.append(node2888);
          node2886.append(node2887);
          
          
          
        }
      };
      renderCond703();
      subs__.addSub(tmp5043.addEventListener('change', function() {
        renderCond703();
      }));
      
      node2883.append(node2885);
      root7427.append(node2883);
      callback(root7427); return subs__;
      
    });
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
