mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root440 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node220 = $("<span>");
  root440.append(node220);
  var condSubs56 = new mobl.CompSubscription();
  subs__.addSub(condSubs56);
  var oldValue56;
  var renderCond56 = function() {
    var value136 = value.get();
    if(oldValue56 === value136) return;
    oldValue56 = value136;
    var subs__ = condSubs56;
    subs__.unsubscribe();
    node220.empty();
    if(value136) {
      var nodes300 = $("<span>");
      node220.append(nodes300);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl100();
      }));
      
      function renderControl100() {
        subs__.addSub((elements)(function(elements, callback) {
          var root441 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root441); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes300;
          nodes300 = node.contents();
          oldNodes.replaceWith(nodes300);
        }));
      }
      renderControl100();
      
      
    } else {
      var nodes301 = $("<span>");
      node220.append(nodes301);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root442 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes302 = $("<span>");
        root442.append(nodes302);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root443 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root443); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes302;
          nodes302 = node.contents();
          oldNodes.replaceWith(nodes302);
        }));
        var nodes303 = $("<span>");
        root442.append(nodes303);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root444 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root444); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes303;
          nodes303 = node.contents();
          oldNodes.replaceWith(nodes303);
        }));
        callback(root442); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes301;
        nodes301 = node.contents();
        oldNodes.replaceWith(nodes301);
      }));
      
      
    }
  };
  renderCond56();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond56();
  }));
  
  callback(root440); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root445 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node221 = $("<div>");
  
  var ref227 = mobl.ref(ui.headerStyle);
  if(ref227.get() !== null) {
    node221.attr('class', ref227.get());
    subs__.addSub(ref227.addEventListener('change', function(_, ref, val) {
      node221.attr('class', val);
    }));
    
  }
  subs__.addSub(ref227.rebind());
  
  var val116 = onclick.get();
  if(val116 !== null) {
    subs__.addSub(mobl.domBind(node221, 'tap', val116));
  }
  
  var ref228 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref228.get() !== null) {
    node221.attr('style', ref228.get());
    subs__.addSub(ref228.addEventListener('change', function(_, ref, val) {
      node221.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node221.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref228.rebind());
  
  
  var node224 = $("<div>");
  
  var ref226 = mobl.ref(ui.headerContainerStyle);
  if(ref226.get() !== null) {
    node224.attr('class', ref226.get());
    subs__.addSub(ref226.addEventListener('change', function(_, ref, val) {
      node224.attr('class', val);
    }));
    
  }
  subs__.addSub(ref226.rebind());
  
  
  var node225 = $("<div>");
  
  var ref224 = text;
  node225.text(""+ref224.get());
  var ignore44 = false;
  subs__.addSub(ref224.addEventListener('change', function(_, ref, val) {
    if(ignore44) return;
    node225.text(""+val);
  }));
  subs__.addSub(ref224.rebind());
  
  
  var ref225 = mobl.ref(ui.headerTextStyle);
  if(ref225.get() !== null) {
    node225.attr('class', ref225.get());
    subs__.addSub(ref225.addEventListener('change', function(_, ref, val) {
      node225.attr('class', val);
    }));
    
  }
  subs__.addSub(ref225.rebind());
  
  node224.append(node225);
  node221.append(node224);
  var nodes304 = $("<span>");
  node221.append(nodes304);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl101();
  }));
  
  function renderControl101() {
    subs__.addSub((elements)(function(elements, callback) {
      var root446 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root446); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes304;
      nodes304 = node.contents();
      oldNodes.replaceWith(nodes304);
    }));
  }
  renderControl101();
  root445.append(node221);
  
  var node222 = $("<span>");
  root445.append(node222);
  var condSubs57 = new mobl.CompSubscription();
  subs__.addSub(condSubs57);
  var oldValue57;
  var renderCond57 = function() {
    var value137 = fixedPosition.get();
    if(oldValue57 === value137) return;
    oldValue57 = value137;
    var subs__ = condSubs57;
    subs__.unsubscribe();
    node222.empty();
    if(value137) {
      
      var node223 = $("<div>");
      node223.attr('id', "hello");
      node223.attr('style', "height: 2.9em;");
      
      node222.append(node223);
      
      
    } else {
      
    }
  };
  renderCond57();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond57();
  }));
  
  callback(root445); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root447 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref229 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref229.get() !== null) {
    sp.attr('class', ref229.get());
    subs__.addSub(ref229.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref229.rebind());
  
  var val117 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val117 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val117));
  }
  
  var val118 = function(event, callback) {
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
  if(val118 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val118));
  }
  
  var val119 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after36(result__) {
                    var tmp310 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after36);if(result__ !== undefined) after36(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val119 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val119));
  }
  
  var val120 = function(event, callback) {
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
  if(val120 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val120));
  }
  
  var ref230 = text;
  sp.text(""+ref230.get());
  var ignore45 = false;
  subs__.addSub(ref230.addEventListener('change', function(_, ref, val) {
    if(ignore45) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref230.rebind());
  
  
  root447.append(sp);
  callback(root447); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root448 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes305 = $("<span>");
  root448.append(nodes305);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root449 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root449); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes305;
    nodes305 = node.contents();
    oldNodes.replaceWith(nodes305);
  }));
  callback(root448); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root450 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes306 = $("<span>");
  root450.append(nodes306);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root451 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root451); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes306;
    nodes306 = node.contents();
    oldNodes.replaceWith(nodes306);
  }));
  callback(root450); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root452 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node226 = $("<ul>");
  
  var ref231 = mobl.ref(ui.groupStyle);
  if(ref231.get() !== null) {
    node226.attr('class', ref231.get());
    subs__.addSub(ref231.addEventListener('change', function(_, ref, val) {
      node226.attr('class', val);
    }));
    
  }
  subs__.addSub(ref231.rebind());
  
  var nodes307 = $("<span>");
  node226.append(nodes307);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl103();
  }));
  
  function renderControl103() {
    subs__.addSub((elements)(function(elements, callback) {
      var root453 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root453); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes307;
      nodes307 = node.contents();
      oldNodes.replaceWith(nodes307);
    }));
  }
  renderControl103();
  root452.append(node226);
  callback(root452); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root454 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node227 = $("<img>");
  
  var ref232 = url;
  if(ref232.get() !== null) {
    node227.attr('src', ref232.get());
    subs__.addSub(ref232.addEventListener('change', function(_, ref, val) {
      node227.attr('src', val);
    }));
    
  }
  subs__.addSub(ref232.rebind());
  
  var ref233 = width;
  if(ref233.get() !== null) {
    node227.attr('width', ref233.get());
    subs__.addSub(ref233.addEventListener('change', function(_, ref, val) {
      node227.attr('width', val);
    }));
    
  }
  subs__.addSub(ref233.rebind());
  
  var ref234 = height;
  if(ref234.get() !== null) {
    node227.attr('height', ref234.get());
    subs__.addSub(ref234.addEventListener('change', function(_, ref, val) {
      node227.attr('height', val);
    }));
    
  }
  subs__.addSub(ref234.rebind());
  
  var ref235 = style;
  if(ref235.get() !== null) {
    node227.attr('class', ref235.get());
    subs__.addSub(ref235.addEventListener('change', function(_, ref, val) {
      node227.attr('class', val);
    }));
    
  }
  subs__.addSub(ref235.rebind());
  
  var val121 = onclick.get();
  if(val121 !== null) {
    subs__.addSub(mobl.domBind(node227, 'tap', val121));
  }
  
  var ref236 = valign;
  if(ref236.get() !== null) {
    node227.attr('valign', ref236.get());
    subs__.addSub(ref236.addEventListener('change', function(_, ref, val) {
      node227.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref236.rebind());
  
  var ref237 = align;
  if(ref237.get() !== null) {
    node227.attr('align', ref237.get());
    subs__.addSub(ref237.addEventListener('change', function(_, ref, val) {
      node227.attr('align', val);
    }));
    
  }
  subs__.addSub(ref237.rebind());
  
  root454.append(node227);
  callback(root454); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root455 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref238 = mobl.ref(ui.itemStyle);
  if(ref238.get() !== null) {
    el.attr('class', ref238.get());
    subs__.addSub(ref238.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref238.rebind());
  
  var ref239 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref239.get() !== null) {
    el.attr('class', ref239.get());
    subs__.addSub(ref239.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref239.rebind());
  
  var val122 = onswipe.get();
  if(val122 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val122));
  }
  
  var val123 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp311 = result__;
                                           function after37(result__) {
                                             var tmp312 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after37);if(result__ !== undefined) after37(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp313 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val123 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val123));
  }
  
  var nodes308 = $("<span>");
  el.append(nodes308);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl104();
  }));
  
  function renderControl104() {
    subs__.addSub((elements)(function(elements, callback) {
      var root456 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root456); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes308;
      nodes308 = node.contents();
      oldNodes.replaceWith(nodes308);
    }));
  }
  renderControl104();
  root455.append(el);
  callback(root455); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root457 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node228 = $("<input>");
  node228.attr('type', "checkbox");
  
  var ref241 = b;
  node228.attr('checked', !!ref241.get());
  subs__.addSub(ref241.addEventListener('change', function(_, ref, val) {
    if(ref === ref241) node228.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node228, 'change', function() {
    b.set(!!node228.attr('checked'));
  }));
  
  var val125 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val125 !== null) {
    subs__.addSub(mobl.domBind(node228, 'tap', val125));
  }
  
  var val126 = onchange.get();
  if(val126 !== null) {
    subs__.addSub(mobl.domBind(node228, 'change', val126));
  }
  
  root457.append(node228);
  
  root457.append(" ");
  
  var node229 = $("<span>");
  
  var ref240 = label;
  node229.text(""+ref240.get());
  var ignore46 = false;
  subs__.addSub(ref240.addEventListener('change', function(_, ref, val) {
    if(ignore46) return;
    node229.text(""+val);
  }));
  subs__.addSub(ref240.rebind());
  
  
  var val124 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after38(result__) {
                    var tmp314 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after38);if(result__ !== undefined) after38(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val124 !== null) {
    subs__.addSub(mobl.domBind(node229, 'tap', val124));
  }
  
  root457.append(node229);
  callback(root457); return subs__;
  
  
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
  var root458 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node230 = $("<span>");
  root458.append(node230);
  var condSubs58 = new mobl.CompSubscription();
  subs__.addSub(condSubs58);
  var oldValue58;
  var renderCond58 = function() {
    var value138 = label.get();
    if(oldValue58 === value138) return;
    oldValue58 = value138;
    var subs__ = condSubs58;
    subs__.unsubscribe();
    node230.empty();
    if(value138) {
      var nodes309 = $("<span>");
      node230.append(nodes309);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root459 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root459); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes309;
        nodes309 = node.contents();
        oldNodes.replaceWith(nodes309);
      }));
      
      
    } else {
      
    }
  };
  renderCond58();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond58();
  }));
  
  
  var node231 = $("<span>");
  root458.append(node231);
  var condSubs59 = new mobl.CompSubscription();
  subs__.addSub(condSubs59);
  var oldValue59;
  var renderCond59 = function() {
    var value139 = validator.get();
    if(oldValue59 === value139) return;
    oldValue59 = value139;
    var subs__ = condSubs59;
    subs__.unsubscribe();
    node231.empty();
    if(value139) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after42(result__) {
        var tmp315 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp316 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node232 = $("<input>");
        
        var ref242 = inputType;
        if(ref242.get() !== null) {
          node232.attr('type', ref242.get());
          subs__.addSub(ref242.addEventListener('change', function(_, ref, val) {
            node232.attr('type', val);
          }));
          
        }
        subs__.addSub(ref242.rebind());
        
        var ref243 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref243.get() !== null) {
          node232.attr('class', ref243.get());
          subs__.addSub(ref243.addEventListener('change', function(_, ref, val) {
            node232.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node232.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node232.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node232.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref243.rebind());
        
        var ref244 = placeholder;
        if(ref244.get() !== null) {
          node232.attr('placeholder', ref244.get());
          subs__.addSub(ref244.addEventListener('change', function(_, ref, val) {
            node232.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref244.rebind());
        
        var ref245 = temp;
        node232.val(""+ref245.get());
        var ignore47 = false;
        subs__.addSub(ref245.addEventListener('change', function(_, ref, val) {
          if(ignore47) return;
          node232.val(""+val);
        }));
        subs__.addSub(ref245.rebind());
        
        subs__.addSub(mobl.domBind(node232, 'keyup change', function() {
          ignore47 = true;
          temp.set(mobl.stringTomobl__String(node232.val()));
          ignore47 = false;
        }));
        
        
        var val127 = onchange.get();
        if(val127 !== null) {
          subs__.addSub(mobl.domBind(node232, 'change', val127));
        }
        
        var val128 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after39(result__) {
                          var tmp317 = result__;
                          function after40(result__) {
                            var tmp318 = result__;
                            var result__ = tmp318;
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
                            var tmp318 = result__;
                            var result__ = tmp318;
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
        if(val128 !== null) {
          subs__.addSub(mobl.domBind(node232, 'keyup', val128));
        }
        
        var val129 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val129 !== null) {
          subs__.addSub(mobl.domBind(node232, 'blur', val129));
        }
        
        node231.append(node232);
        var nodes310 = $("<span>");
        node231.append(nodes310);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root460 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root460); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes310;
          nodes310 = node.contents();
          oldNodes.replaceWith(nodes310);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after42);if(result__ !== undefined) after42(result__);
    } else {
      
      var node233 = $("<input>");
      
      var ref246 = inputType;
      if(ref246.get() !== null) {
        node233.attr('type', ref246.get());
        subs__.addSub(ref246.addEventListener('change', function(_, ref, val) {
          node233.attr('type', val);
        }));
        
      }
      subs__.addSub(ref246.rebind());
      
      var ref247 = style;
      if(ref247.get() !== null) {
        node233.attr('class', ref247.get());
        subs__.addSub(ref247.addEventListener('change', function(_, ref, val) {
          node233.attr('class', val);
        }));
        
      }
      subs__.addSub(ref247.rebind());
      
      var ref248 = placeholder;
      if(ref248.get() !== null) {
        node233.attr('placeholder', ref248.get());
        subs__.addSub(ref248.addEventListener('change', function(_, ref, val) {
          node233.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref248.rebind());
      
      var ref249 = s;
      node233.val(""+ref249.get());
      var ignore48 = false;
      subs__.addSub(ref249.addEventListener('change', function(_, ref, val) {
        if(ignore48) return;
        node233.val(""+val);
      }));
      subs__.addSub(ref249.rebind());
      
      subs__.addSub(mobl.domBind(node233, 'keyup change', function() {
        ignore48 = true;
        s.set(mobl.stringTomobl__String(node233.val()));
        ignore48 = false;
      }));
      
      
      var val130 = onchange.get();
      if(val130 !== null) {
        subs__.addSub(mobl.domBind(node233, 'change', val130));
      }
      
      var val131 = onkeyup.get();
      if(val131 !== null) {
        subs__.addSub(mobl.domBind(node233, 'keyup', val131));
      }
      
      var val132 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val132 !== null) {
        subs__.addSub(mobl.domBind(node233, 'blur', val132));
      }
      
      node231.append(node233);
      
      
    }
  };
  renderCond59();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond59();
  }));
  
  callback(root458); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root461 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes311 = $("<span>");
  root461.append(nodes311);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root462 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root462); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes311;
    nodes311 = node.contents();
    oldNodes.replaceWith(nodes311);
  }));
  callback(root461); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root463 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes312 = $("<span>");
  root463.append(nodes312);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root464 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root464); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes312;
    nodes312 = node.contents();
    oldNodes.replaceWith(nodes312);
  }));
  callback(root463); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root465 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node234 = $("<span>");
  root465.append(node234);
  var condSubs60 = new mobl.CompSubscription();
  subs__.addSub(condSubs60);
  var oldValue60;
  var renderCond60 = function() {
    var value140 = label.get();
    if(oldValue60 === value140) return;
    oldValue60 = value140;
    var subs__ = condSubs60;
    subs__.unsubscribe();
    node234.empty();
    if(value140) {
      var nodes313 = $("<span>");
      node234.append(nodes313);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root466 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root466); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes313;
        nodes313 = node.contents();
        oldNodes.replaceWith(nodes313);
      }));
      
      
    } else {
      
    }
  };
  renderCond60();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond60();
  }));
  
  
  var node235 = $("<input>");
  node235.attr('type', "range");
  
  var ref250 = n;
  node235.val(""+ref250.get());
  var ignore49 = false;
  subs__.addSub(ref250.addEventListener('change', function(_, ref, val) {
    if(ignore49) return;
    node235.val(""+val);
  }));
  subs__.addSub(ref250.rebind());
  
  subs__.addSub(mobl.domBind(node235, 'keyup change', function() {
    ignore49 = true;
    n.set(mobl.stringTomobl__Num(node235.val()));
    ignore49 = false;
  }));
  
  
  var ref251 = min;
  if(ref251.get() !== null) {
    node235.attr('min', ref251.get());
    subs__.addSub(ref251.addEventListener('change', function(_, ref, val) {
      node235.attr('min', val);
    }));
    
  }
  subs__.addSub(ref251.rebind());
  
  var ref252 = max;
  if(ref252.get() !== null) {
    node235.attr('max', ref252.get());
    subs__.addSub(ref252.addEventListener('change', function(_, ref, val) {
      node235.attr('max', val);
    }));
    
  }
  subs__.addSub(ref252.rebind());
  
  var ref253 = step;
  if(ref253.get() !== null) {
    node235.attr('step', ref253.get());
    subs__.addSub(ref253.addEventListener('change', function(_, ref, val) {
      node235.attr('step', val);
    }));
    
  }
  subs__.addSub(ref253.rebind());
  node235.attr('style', "width: 99%;");
  
  var val133 = onchange.get();
  if(val133 !== null) {
    subs__.addSub(mobl.domBind(node235, 'change', val133));
  }
  
  var val134 = onkeyup.get();
  if(val134 !== null) {
    subs__.addSub(mobl.domBind(node235, 'keyup', val134));
  }
  
  var ref254 = placeholder;
  if(ref254.get() !== null) {
    node235.attr('placeholder', ref254.get());
    subs__.addSub(ref254.addEventListener('change', function(_, ref, val) {
      node235.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref254.rebind());
  
  root465.append(node235);
  callback(root465); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root467 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after43(result__) {
      var tmp319 = result__;
      var result__ = tmp319;
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
  var nodes314 = $("<span>");
  root467.append(nodes314);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root468 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root468); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes314;
    nodes314 = node.contents();
    oldNodes.replaceWith(nodes314);
  }));
  callback(root467); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root469 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node236 = $("<span>");
  root469.append(node236);
  var condSubs61 = new mobl.CompSubscription();
  subs__.addSub(condSubs61);
  var oldValue61;
  var renderCond61 = function() {
    var value141 = label.get();
    if(oldValue61 === value141) return;
    oldValue61 = value141;
    var subs__ = condSubs61;
    subs__.unsubscribe();
    node236.empty();
    if(value141) {
      
      var node237 = $("<span>");
      node237.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref258 = label;
      node237.text(""+ref258.get());
      var ignore51 = false;
      subs__.addSub(ref258.addEventListener('change', function(_, ref, val) {
        if(ignore51) return;
        node237.text(""+val);
      }));
      subs__.addSub(ref258.rebind());
      
      
      node236.append(node237);
      
      var node238 = $("<span>");
      node238.attr('style', "float: left");
      
      
      var node239 = $("<input>");
      node239.attr('type', "password");
      
      var ref255 = style;
      if(ref255.get() !== null) {
        node239.attr('class', ref255.get());
        subs__.addSub(ref255.addEventListener('change', function(_, ref, val) {
          node239.attr('class', val);
        }));
        
      }
      subs__.addSub(ref255.rebind());
      
      var ref256 = placeholder;
      if(ref256.get() !== null) {
        node239.attr('placeholder', ref256.get());
        subs__.addSub(ref256.addEventListener('change', function(_, ref, val) {
          node239.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref256.rebind());
      
      var ref257 = s;
      node239.val(""+ref257.get());
      var ignore50 = false;
      subs__.addSub(ref257.addEventListener('change', function(_, ref, val) {
        if(ignore50) return;
        node239.val(""+val);
      }));
      subs__.addSub(ref257.rebind());
      
      subs__.addSub(mobl.domBind(node239, 'keyup change', function() {
        ignore50 = true;
        s.set(mobl.stringTomobl__String(node239.val()));
        ignore50 = false;
      }));
      
      
      var val135 = onchange.get();
      if(val135 !== null) {
        subs__.addSub(mobl.domBind(node239, 'change', val135));
      }
      
      var val136 = onkeyup.get();
      if(val136 !== null) {
        subs__.addSub(mobl.domBind(node239, 'keyup', val136));
      }
      
      var val137 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val137 !== null) {
        subs__.addSub(mobl.domBind(node239, 'blur', val137));
      }
      
      node238.append(node239);
      node236.append(node238);
      
      
      
      
    } else {
      
      var node240 = $("<input>");
      node240.attr('type', "password");
      
      var ref259 = style;
      if(ref259.get() !== null) {
        node240.attr('class', ref259.get());
        subs__.addSub(ref259.addEventListener('change', function(_, ref, val) {
          node240.attr('class', val);
        }));
        
      }
      subs__.addSub(ref259.rebind());
      
      var ref260 = placeholder;
      if(ref260.get() !== null) {
        node240.attr('placeholder', ref260.get());
        subs__.addSub(ref260.addEventListener('change', function(_, ref, val) {
          node240.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref260.rebind());
      
      var ref261 = s;
      node240.val(""+ref261.get());
      var ignore52 = false;
      subs__.addSub(ref261.addEventListener('change', function(_, ref, val) {
        if(ignore52) return;
        node240.val(""+val);
      }));
      subs__.addSub(ref261.rebind());
      
      subs__.addSub(mobl.domBind(node240, 'keyup change', function() {
        ignore52 = true;
        s.set(mobl.stringTomobl__String(node240.val()));
        ignore52 = false;
      }));
      
      
      var val138 = onchange.get();
      if(val138 !== null) {
        subs__.addSub(mobl.domBind(node240, 'change', val138));
      }
      
      var val139 = onkeyup.get();
      if(val139 !== null) {
        subs__.addSub(mobl.domBind(node240, 'keyup', val139));
      }
      
      var val140 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val140 !== null) {
        subs__.addSub(mobl.domBind(node240, 'blur', val140));
      }
      
      node236.append(node240);
      
      
    }
  };
  renderCond61();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond61();
  }));
  
  callback(root469); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root470 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref266 = style;
  if(ref266.get() !== null) {
    sel.attr('class', ref266.get());
    subs__.addSub(ref266.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref266.rebind());
  
  var val141 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after44(result__) {
                    var tmp321 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after44);if(result__ !== undefined) after44(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val141 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val141));
  }
  
  
  var node241 = mobl.loadingSpan();
  sel.append(node241);
  var list44;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList44 = function() {
    var subs__ = listSubs__;
    list44 = options.get();
    list44.list(function(results44) {
      node241.empty();
      for(var i44 = 0; i44 < results44.length; i44++) {
        (function() {
          var iternode44 = $("<span>");
          node241.append(iternode44);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results44), i44), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results44), i44), "_2");
          
          var node242 = $("<option>");
          
          var ref262 = optionDescription;
          node242.text(""+ref262.get());
          var ignore53 = false;
          subs__.addSub(ref262.addEventListener('change', function(_, ref, val) {
            if(ignore53) return;
            node242.text(""+val);
          }));
          subs__.addSub(ref262.rebind());
          
          
          var ref263 = optionStyle;
          if(ref263.get() !== null) {
            node242.attr('class', ref263.get());
            subs__.addSub(ref263.addEventListener('change', function(_, ref, val) {
              node242.attr('class', val);
            }));
            
          }
          subs__.addSub(ref263.rebind());
          
          var ref264 = optionValue;
          if(ref264.get() !== null) {
            node242.attr('value', ref264.get());
            subs__.addSub(ref264.addEventListener('change', function(_, ref, val) {
              node242.attr('value', val);
            }));
            
          }
          subs__.addSub(ref264.rebind());
          
          var ref265 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref265.get() !== null) {
            node242.attr('selected', ref265.get());
            subs__.addSub(ref265.addEventListener('change', function(_, ref, val) {
              node242.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node242.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node242.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref265.rebind());
          
          iternode44.append(node242);
          
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
  
  root470.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root470); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root471 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes315 = $("<span>");
    root471.append(nodes315);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root472 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node243 = mobl.loadingSpan();
      root472.append(node243);
      var list45;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList45 = function() {
        var subs__ = listSubs__;
        list45 = tabs.get();
        list45.list(function(results45) {
          node243.empty();
          for(var i45 = 0; i45 < results45.length; i45++) {
            (function() {
              var iternode45 = $("<span>");
              node243.append(iternode45);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results45), i45), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results45), i45), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results45), i45), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp279 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp279.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp279.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp279.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp279.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp278 = mobl.ref(result__);
              
              var nodes316 = $("<span>");
              iternode45.append(nodes316);
              subs__.addSub((mobl.span)(tmp279, mobl.ref(null), tmp278, mobl.ref(null), function(_, callback) {
                var root473 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes317 = $("<span>");
                root473.append(nodes317);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root474 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root474); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes317;
                  nodes317 = node.contents();
                  oldNodes.replaceWith(nodes317);
                }));
                callback(root473); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes316;
                nodes316 = node.contents();
                oldNodes.replaceWith(nodes316);
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
      
      callback(root472); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes315;
      nodes315 = node.contents();
      oldNodes.replaceWith(nodes315);
    }));
    
    var node244 = mobl.loadingSpan();
    root471.append(node244);
    var list46;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList46 = function() {
      var subs__ = listSubs__;
      list46 = tabs.get();
      list46.list(function(results46) {
        node244.empty();
        for(var i46 = 0; i46 < results46.length; i46++) {
          (function() {
            var iternode46 = $("<span>");
            node244.append(iternode46);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results46), i46), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results46), i46), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results46), i46), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp280 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp280.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp280.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp280.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp280.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes318 = $("<span>");
            iternode46.append(nodes318);
            subs__.addSub((mobl.block)(tmp280, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root475 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes319 = $("<span>");
              root475.append(nodes319);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root476 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes320 = $("<span>");
                root476.append(nodes320);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl105();
                }));
                
                function renderControl105() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root477 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root477); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes320;
                    nodes320 = node.contents();
                    oldNodes.replaceWith(nodes320);
                  }));
                }
                renderControl105();
                callback(root476); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes319;
                nodes319 = node.contents();
                oldNodes.replaceWith(nodes319);
              }));
              callback(root475); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes318;
              nodes318 = node.contents();
              oldNodes.replaceWith(nodes318);
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
    
    callback(root471); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes315 = $("<span>");
      root471.append(nodes315);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root472 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node243 = mobl.loadingSpan();
        root472.append(node243);
        var list45;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList45 = function() {
          var subs__ = listSubs__;
          list45 = tabs.get();
          list45.list(function(results45) {
            node243.empty();
            for(var i45 = 0; i45 < results45.length; i45++) {
              (function() {
                var iternode45 = $("<span>");
                node243.append(iternode45);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results45), i45), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results45), i45), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results45), i45), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp279 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp279.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp279.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp279.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp279.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp278 = mobl.ref(result__);
                
                var nodes316 = $("<span>");
                iternode45.append(nodes316);
                subs__.addSub((mobl.span)(tmp279, mobl.ref(null), tmp278, mobl.ref(null), function(_, callback) {
                  var root473 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes317 = $("<span>");
                  root473.append(nodes317);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root474 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root474); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes317;
                    nodes317 = node.contents();
                    oldNodes.replaceWith(nodes317);
                  }));
                  callback(root473); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes316;
                  nodes316 = node.contents();
                  oldNodes.replaceWith(nodes316);
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
        
        callback(root472); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes315;
        nodes315 = node.contents();
        oldNodes.replaceWith(nodes315);
      }));
      
      var node244 = mobl.loadingSpan();
      root471.append(node244);
      var list46;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList46 = function() {
        var subs__ = listSubs__;
        list46 = tabs.get();
        list46.list(function(results46) {
          node244.empty();
          for(var i46 = 0; i46 < results46.length; i46++) {
            (function() {
              var iternode46 = $("<span>");
              node244.append(iternode46);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results46), i46), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results46), i46), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results46), i46), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp280 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp280.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp280.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp280.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp280.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes318 = $("<span>");
              iternode46.append(nodes318);
              subs__.addSub((mobl.block)(tmp280, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root475 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes319 = $("<span>");
                root475.append(nodes319);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root476 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes320 = $("<span>");
                  root476.append(nodes320);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl105();
                  }));
                  
                  function renderControl105() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root477 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root477); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes320;
                      nodes320 = node.contents();
                      oldNodes.replaceWith(nodes320);
                    }));
                  }
                  renderControl105();
                  callback(root476); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes319;
                  nodes319 = node.contents();
                  oldNodes.replaceWith(nodes319);
                }));
                callback(root475); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes318;
                nodes318 = node.contents();
                oldNodes.replaceWith(nodes318);
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
      
      callback(root471); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root478 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node245 = $("<div>");
  
  var ref270 = mobl.ref(ui.searchboxStyle);
  if(ref270.get() !== null) {
    node245.attr('class', ref270.get());
    subs__.addSub(ref270.addEventListener('change', function(_, ref, val) {
      node245.attr('class', val);
    }));
    
  }
  subs__.addSub(ref270.rebind());
  
  
  var node246 = $("<input>");
  node246.attr('type', "search");
  
  var ref267 = mobl.ref(ui.searchBoxInputStyle);
  if(ref267.get() !== null) {
    node246.attr('class', ref267.get());
    subs__.addSub(ref267.addEventListener('change', function(_, ref, val) {
      node246.attr('class', val);
    }));
    
  }
  subs__.addSub(ref267.rebind());
  
  var ref268 = placeholder;
  if(ref268.get() !== null) {
    node246.attr('placeholder', ref268.get());
    subs__.addSub(ref268.addEventListener('change', function(_, ref, val) {
      node246.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref268.rebind());
  
  var ref269 = s;
  node246.val(""+ref269.get());
  var ignore54 = false;
  subs__.addSub(ref269.addEventListener('change', function(_, ref, val) {
    if(ignore54) return;
    node246.val(""+val);
  }));
  subs__.addSub(ref269.rebind());
  
  subs__.addSub(mobl.domBind(node246, 'keyup change', function() {
    ignore54 = true;
    s.set(mobl.stringTomobl__String(node246.val()));
    ignore54 = false;
  }));
  
  
  var val142 = onsearch.get();
  if(val142 !== null) {
    subs__.addSub(mobl.domBind(node246, 'change', val142));
  }
  
  var val143 = onkeyup.get();
  if(val143 !== null) {
    subs__.addSub(mobl.domBind(node246, 'keyup', val143));
  }
  node246.attr('autocorrect', false);
  node246.attr('autocapitalize', false);
  node246.attr('autocomplete', false);
  
  node245.append(node246);
  root478.append(node245);
  callback(root478); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root479 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref271 = mobl.ref(ui.contextMenuStyle);
  if(ref271.get() !== null) {
    menu.attr('class', ref271.get());
    subs__.addSub(ref271.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref271.rebind());
  
  var nodes321 = $("<span>");
  menu.append(nodes321);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl106();
  }));
  
  function renderControl106() {
    subs__.addSub((elements)(function(elements, callback) {
      var root480 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root480); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes321;
      nodes321 = node.contents();
      oldNodes.replaceWith(nodes321);
    }));
  }
  renderControl106();
  root479.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val144 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp324 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val144 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val144));
  }
  
  root479.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root479); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root481 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp308 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp308.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node247 = $("<span>");
  root481.append(node247);
  var condSubs62 = new mobl.CompSubscription();
  subs__.addSub(condSubs62);
  var oldValue62;
  var renderCond62 = function() {
    var value142 = tmp308.get();
    if(oldValue62 === value142) return;
    oldValue62 = value142;
    var subs__ = condSubs62;
    subs__.unsubscribe();
    node247.empty();
    if(value142) {
      items.get().one(function(result__) {
        var tmp325 = result__;
        var current = mobl.ref(result__);
        
        var node248 = $("<div>");
        node248.attr('width', "100%");
        
        
        var node249 = $("<div>");
        node249.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes324 = $("<span>");
        node249.append(nodes324);
        subs__.addSub((ui.group)(function(_, callback) {
          var root484 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node252 = mobl.loadingSpan();
          root484.append(node252);
          var list47;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList47 = function() {
            var subs__ = listSubs__;
            list47 = items.get();
            list47.list(function(results47) {
              node252.empty();
              for(var i47 = 0; i47 < results47.length; i47++) {
                (function() {
                  var iternode47 = $("<span>");
                  node252.append(iternode47);
                  var it;
                  it = mobl.ref(mobl.ref(results47), i47);
                  var result__ = it.get() == current.get();
                  var tmp286 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp286.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp286.set(it.get() == current.get());
                  }));
                  
                  
                  var node253 = $("<span>");
                  iternode47.append(node253);
                  var condSubs64 = new mobl.CompSubscription();
                  subs__.addSub(condSubs64);
                  var oldValue64;
                  var renderCond64 = function() {
                    var value144 = tmp286.get();
                    if(oldValue64 === value144) return;
                    oldValue64 = value144;
                    var subs__ = condSubs64;
                    subs__.unsubscribe();
                    node253.empty();
                    if(value144) {
                      var nodes325 = $("<span>");
                      node253.append(nodes325);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root485 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes326 = $("<span>");
                        root485.append(nodes326);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl108();
                        }));
                        
                        function renderControl108() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root486 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root486); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes326;
                            nodes326 = node.contents();
                            oldNodes.replaceWith(nodes326);
                          }));
                        }
                        renderControl108();
                        callback(root485); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes325;
                        nodes325 = node.contents();
                        oldNodes.replaceWith(nodes325);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp285 = mobl.ref(result__);
                      
                      var nodes327 = $("<span>");
                      node253.append(nodes327);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp285, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root487 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes328 = $("<span>");
                        root487.append(nodes328);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl109();
                        }));
                        
                        function renderControl109() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root488 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root488); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes328;
                            nodes328 = node.contents();
                            oldNodes.replaceWith(nodes328);
                          }));
                        }
                        renderControl109();
                        callback(root487); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes327;
                        nodes327 = node.contents();
                        oldNodes.replaceWith(nodes327);
                      }));
                      
                      
                    }
                  };
                  renderCond64();
                  subs__.addSub(tmp286.addEventListener('change', function() {
                    renderCond64();
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
          
          callback(root484); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes324;
          nodes324 = node.contents();
          oldNodes.replaceWith(nodes324);
        }));
        node248.append(node249);
        
        var node250 = $("<div>");
        node250.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node251 = $("<span>");
        node250.append(node251);
        var condSubs63 = new mobl.CompSubscription();
        subs__.addSub(condSubs63);
        var oldValue63;
        var renderCond63 = function() {
          var value143 = current.get();
          if(oldValue63 === value143) return;
          oldValue63 = value143;
          var subs__ = condSubs63;
          subs__.unsubscribe();
          node251.empty();
          if(value143) {
            var nodes322 = $("<span>");
            node251.append(nodes322);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl107();
            }));
            
            function renderControl107() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root482 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root482); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes322;
                nodes322 = node.contents();
                oldNodes.replaceWith(nodes322);
              }));
            }
            renderControl107();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp287 = mobl.ref(result__);
            
            var nodes323 = $("<span>");
            node251.append(nodes323);
            subs__.addSub((mobl.label)(tmp287, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root483 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root483); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes323;
              nodes323 = node.contents();
              oldNodes.replaceWith(nodes323);
            }));
            
            
          }
        };
        renderCond63();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond63();
        }));
        
        node248.append(node250);
        node247.append(node248);
        
        
        
        
        
        
      });
    } else {
      var nodes329 = $("<span>");
      node247.append(nodes329);
      subs__.addSub((ui.group)(function(_, callback) {
        var root489 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node254 = mobl.loadingSpan();
        root489.append(node254);
        var list48;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList48 = function() {
          var subs__ = listSubs__;
          list48 = items.get();
          list48.list(function(results48) {
            node254.empty();
            for(var i48 = 0; i48 < results48.length; i48++) {
              (function() {
                var iternode48 = $("<span>");
                node254.append(iternode48);
                var it;
                it = mobl.ref(mobl.ref(results48), i48);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp326 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp281 = mobl.ref(result__);
                
                var nodes330 = $("<span>");
                iternode48.append(nodes330);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp281, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root490 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes331 = $("<span>");
                  root490.append(nodes331);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl110();
                  }));
                  
                  function renderControl110() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root491 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root491); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes331;
                      nodes331 = node.contents();
                      oldNodes.replaceWith(nodes331);
                    }));
                  }
                  renderControl110();
                  callback(root490); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes330;
                  nodes330 = node.contents();
                  oldNodes.replaceWith(nodes330);
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
        
        callback(root489); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes329;
        nodes329 = node.contents();
        oldNodes.replaceWith(nodes329);
      }));
      
      
    }
  };
  renderCond62();
  subs__.addSub(tmp308.addEventListener('change', function() {
    renderCond62();
  }));
  
  callback(root481); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root492 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp284 = mobl.ref(result__);
  
  var nodes332 = $("<span>");
  root492.append(nodes332);
  subs__.addSub((ui.header)(tmp284, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root493 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp283 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp282 = mobl.ref(result__);
    
    var nodes333 = $("<span>");
    root493.append(nodes333);
    subs__.addSub((ui.backButton)(tmp282, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp283, function(_, callback) {
      var root494 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root494); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes333;
      nodes333 = node.contents();
      oldNodes.replaceWith(nodes333);
    }));
    callback(root493); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes332;
    nodes332 = node.contents();
    oldNodes.replaceWith(nodes332);
  }));
  var nodes334 = $("<span>");
  root492.append(nodes334);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl111();
  }));
  
  function renderControl111() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root495 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root495); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes334;
      nodes334 = node.contents();
      oldNodes.replaceWith(nodes334);
    }));
  }
  renderControl111();
  callback(root492); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root496 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes335 = $("<span>");
  root496.append(nodes335);
  subs__.addSub((ui.group)(function(_, callback) {
    var root497 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node255 = mobl.loadingSpan();
    root497.append(node255);
    var list49;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList49 = function() {
      var subs__ = listSubs__;
      list49 = coll.get();
      list49.list(function(results49) {
        node255.empty();
        for(var i49 = 0; i49 < results49.length; i49++) {
          (function() {
            var iternode49 = $("<span>");
            node255.append(iternode49);
            var it;
            it = mobl.ref(mobl.ref(results49), i49);
            var result__ = it.get() == selected.get();
            var tmp289 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp289.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp289.set(it.get() == selected.get());
            }));
            
            
            var node256 = $("<span>");
            iternode49.append(node256);
            var condSubs65 = new mobl.CompSubscription();
            subs__.addSub(condSubs65);
            var oldValue65;
            var renderCond65 = function() {
              var value145 = tmp289.get();
              if(oldValue65 === value145) return;
              oldValue65 = value145;
              var subs__ = condSubs65;
              subs__.unsubscribe();
              node256.empty();
              if(value145) {
                var nodes336 = $("<span>");
                node256.append(nodes336);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root498 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes337 = $("<span>");
                  root498.append(nodes337);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl112();
                  }));
                  
                  function renderControl112() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root499 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root499); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes337;
                      nodes337 = node.contents();
                      oldNodes.replaceWith(nodes337);
                    }));
                  }
                  renderControl112();
                  callback(root498); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes336;
                  nodes336 = node.contents();
                  oldNodes.replaceWith(nodes336);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp288 = mobl.ref(result__);
                
                var nodes338 = $("<span>");
                node256.append(nodes338);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp288, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root500 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes339 = $("<span>");
                  root500.append(nodes339);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl113();
                  }));
                  
                  function renderControl113() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root501 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root501); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes339;
                      nodes339 = node.contents();
                      oldNodes.replaceWith(nodes339);
                    }));
                  }
                  renderControl113();
                  callback(root500); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes338;
                  nodes338 = node.contents();
                  oldNodes.replaceWith(nodes338);
                }));
                
                
              }
            };
            renderCond65();
            subs__.addSub(tmp289.addEventListener('change', function() {
              renderCond65();
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
    
    callback(root497); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes335;
    nodes335 = node.contents();
    oldNodes.replaceWith(nodes335);
  }));
  callback(root496); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root502 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp327 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp290 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp290.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp290.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp290.set(coll.get().limit(n.get()));
    }));
    
    
    var node257 = mobl.loadingSpan();
    root502.append(node257);
    var list50;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList50 = function() {
      var subs__ = listSubs__;
      list50 = tmp290.get();
      list50.list(function(results50) {
        node257.empty();
        for(var i50 = 0; i50 < results50.length; i50++) {
          (function() {
            var iternode50 = $("<span>");
            node257.append(iternode50);
            var it;
            it = mobl.ref(mobl.ref(results50), i50);
            var nodes340 = $("<span>");
            iternode50.append(nodes340);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl114();
            }));
            
            function renderControl114() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root503 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root503); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes340;
                nodes340 = node.contents();
                oldNodes.replaceWith(nodes340);
              }));
            }
            renderControl114();
            
            var oldNodes = iternode50;
            iternode50 = iternode50.contents();
            oldNodes.replaceWith(iternode50);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list50.addEventListener('change', function() { listSubs__.unsubscribe(); renderList50(true); }));
        subs__.addSub(tmp290.addEventListener('change', function() { listSubs__.unsubscribe(); renderList50(true); }));
      });
    };
    renderList50();
    
    var result__ = n.get() < total.get();
    var tmp292 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp292.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp292.set(n.get() < total.get());
    }));
    
    
    var node258 = $("<span>");
    root502.append(node258);
    var condSubs66 = new mobl.CompSubscription();
    subs__.addSub(condSubs66);
    var oldValue66;
    var renderCond66 = function() {
      var value146 = tmp292.get();
      if(oldValue66 === value146) return;
      oldValue66 = value146;
      var subs__ = condSubs66;
      subs__.unsubscribe();
      node258.empty();
      if(value146) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp291 = mobl.ref(result__);
        
        var nodes341 = $("<span>");
        node258.append(nodes341);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp291, mobl.ref(null), function(_, callback) {
          var root504 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes342 = $("<span>");
          root504.append(nodes342);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root505 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root505); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes342;
            nodes342 = node.contents();
            oldNodes.replaceWith(nodes342);
          }));
          callback(root504); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes341;
          nodes341 = node.contents();
          oldNodes.replaceWith(nodes341);
        }));
        
        
      } else {
        
      }
    };
    renderCond66();
    subs__.addSub(tmp292.addEventListener('change', function() {
      renderCond66();
    }));
    
    callback(root502); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root506 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes343 = $("<span>");
  root506.append(nodes343);
  subs__.addSub((ui.group)(function(_, callback) {
    var root507 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node259 = mobl.loadingSpan();
    root507.append(node259);
    var list51;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList51 = function() {
      var subs__ = listSubs__;
      list51 = items.get();
      list51.list(function(results51) {
        node259.empty();
        for(var i51 = 0; i51 < results51.length; i51++) {
          (function() {
            var iternode51 = $("<span>");
            node259.append(iternode51);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results51), i51), "_1");it = mobl.ref(mobl.ref(mobl.ref(results51), i51), "_2");
            var nodes344 = $("<span>");
            iternode51.append(nodes344);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root508 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes345 = $("<span>");
              root508.append(nodes345);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root509 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root509); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes345;
                nodes345 = node.contents();
                oldNodes.replaceWith(nodes345);
              }));
              callback(root508); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes344;
              nodes344 = node.contents();
              oldNodes.replaceWith(nodes344);
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
    
    callback(root507); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes343;
    nodes343 = node.contents();
    oldNodes.replaceWith(nodes343);
  }));
  callback(root506); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root510 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll133) {
    coll133 = coll133.reverse();
    function processOne13() {
      var it;
      it = coll133.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll133.length > 0) processOne13(); else rest13();
      
    }
    function rest13() {
      var nodes346 = $("<span>");
      root510.append(nodes346);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root511 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp293 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp294 = mobl.ref(result__);
        
        var nodes347 = $("<span>");
        root511.append(nodes347);
        subs__.addSub((ui.backButton)(tmp294, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp293, function(_, callback) {
          var root512 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root512); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes347;
          nodes347 = node.contents();
          oldNodes.replaceWith(nodes347);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll132) {
                           coll132 = coll132.reverse();
                           function processOne12() {
                             var checked;var it;
                             var tmp329 = coll132.pop();
                             checked = tmp329._1;it = tmp329._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll132.length > 0) processOne12(); else rest12();
                               
                             } else {
                               {
                                 
                                 if(coll132.length > 0) processOne12(); else rest12();
                                 
                               }
                             }
                           }
                           function rest12() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll132.length > 0) processOne12(); else rest12();
                         });
                         
                       };
        var tmp295 = mobl.ref(result__);
        
        var nodes348 = $("<span>");
        root511.append(nodes348);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp295, function(_, callback) {
          var root513 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root513); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes348;
          nodes348 = node.contents();
          oldNodes.replaceWith(nodes348);
        }));
        callback(root511); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes346;
        nodes346 = node.contents();
        oldNodes.replaceWith(nodes346);
      }));
      var nodes349 = $("<span>");
      root510.append(nodes349);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root514 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root514); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes349;
        nodes349 = node.contents();
        oldNodes.replaceWith(nodes349);
      }));
      callback(root510); return subs__;
      
      
    }
    if(coll133.length > 0) processOne13(); else rest13();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root515 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes350 = $("<span>");
  root515.append(nodes350);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root516 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root516); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes350;
    nodes350 = node.contents();
    oldNodes.replaceWith(nodes350);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp296 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp296.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp296.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp296.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp296.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp296.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes351 = $("<span>");
  root515.append(nodes351);
  subs__.addSub((ui.masterDetail)(tmp296, masterItem, detailItem, function(_, callback) {
    var root517 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root517); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes351;
    nodes351 = node.contents();
    oldNodes.replaceWith(nodes351);
  }));
  callback(root515); return subs__;
  
  
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
  var root518 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes352 = $("<span>");
  root518.append(nodes352);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root519 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node260 = mobl.loadingSpan();
    root519.append(node260);
    var list52;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList52 = function() {
      var subs__ = listSubs__;
      list52 = sections.get();
      list52.list(function(results52) {
        node260.empty();
        for(var i52 = 0; i52 < results52.length; i52++) {
          (function() {
            var iternode52 = $("<span>");
            node260.append(iternode52);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results52), i52), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results52), i52), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp298 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp298.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp298.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp298.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp298.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp297 = mobl.ref(result__);
            
            var nodes353 = $("<span>");
            iternode52.append(nodes353);
            subs__.addSub((mobl.span)(tmp298, mobl.ref(null), tmp297, mobl.ref(null), function(_, callback) {
              var root520 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes354 = $("<span>");
              root520.append(nodes354);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root521 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root521); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes354;
                nodes354 = node.contents();
                oldNodes.replaceWith(nodes354);
              }));
              callback(root520); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes353;
              nodes353 = node.contents();
              oldNodes.replaceWith(nodes353);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp299 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp299.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp299.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp299.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp299.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes355 = $("<span>");
            iternode52.append(nodes355);
            subs__.addSub((mobl.block)(tmp299, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root522 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes356 = $("<span>");
              root522.append(nodes356);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl115();
              }));
              
              function renderControl115() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root523 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root523); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes356;
                  nodes356 = node.contents();
                  oldNodes.replaceWith(nodes356);
                }));
              }
              renderControl115();
              callback(root522); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes355;
              nodes355 = node.contents();
              oldNodes.replaceWith(nodes355);
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
    
    callback(root519); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes352;
    nodes352 = node.contents();
    oldNodes.replaceWith(nodes352);
  }));
  callback(root518); return subs__;
  
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
  var root524 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node261 = $("<table>");
  
  var ref272 = style;
  if(ref272.get() !== null) {
    node261.attr('class', ref272.get());
    subs__.addSub(ref272.addEventListener('change', function(_, ref, val) {
      node261.attr('class', val);
    }));
    
  }
  subs__.addSub(ref272.rebind());
  
  var nodes357 = $("<span>");
  node261.append(nodes357);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl116();
  }));
  
  function renderControl116() {
    subs__.addSub((elements)(function(elements, callback) {
      var root525 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root525); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes357;
      nodes357 = node.contents();
      oldNodes.replaceWith(nodes357);
    }));
  }
  renderControl116();
  root524.append(node261);
  callback(root524); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root526 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node262 = $("<tr>");
  
  var ref273 = style;
  if(ref273.get() !== null) {
    node262.attr('class', ref273.get());
    subs__.addSub(ref273.addEventListener('change', function(_, ref, val) {
      node262.attr('class', val);
    }));
    
  }
  subs__.addSub(ref273.rebind());
  
  var nodes358 = $("<span>");
  node262.append(nodes358);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl117();
  }));
  
  function renderControl117() {
    subs__.addSub((elements)(function(elements, callback) {
      var root527 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root527); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes358;
      nodes358 = node.contents();
      oldNodes.replaceWith(nodes358);
    }));
  }
  renderControl117();
  root526.append(node262);
  callback(root526); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root528 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node263 = $("<td>");
  
  var ref274 = width;
  if(ref274.get() !== null) {
    node263.attr('width', ref274.get());
    subs__.addSub(ref274.addEventListener('change', function(_, ref, val) {
      node263.attr('width', val);
    }));
    
  }
  subs__.addSub(ref274.rebind());
  
  var ref275 = style;
  if(ref275.get() !== null) {
    node263.attr('class', ref275.get());
    subs__.addSub(ref275.addEventListener('change', function(_, ref, val) {
      node263.attr('class', val);
    }));
    
  }
  subs__.addSub(ref275.rebind());
  
  var nodes359 = $("<span>");
  node263.append(nodes359);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl118();
  }));
  
  function renderControl118() {
    subs__.addSub((elements)(function(elements, callback) {
      var root529 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root529); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes359;
      nodes359 = node.contents();
      oldNodes.replaceWith(nodes359);
    }));
  }
  renderControl118();
  root528.append(node263);
  callback(root528); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root530 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node264 = $("<td>");
  
  var ref276 = width;
  if(ref276.get() !== null) {
    node264.attr('width', ref276.get());
    subs__.addSub(ref276.addEventListener('change', function(_, ref, val) {
      node264.attr('width', val);
    }));
    
  }
  subs__.addSub(ref276.rebind());
  
  var ref277 = style;
  if(ref277.get() !== null) {
    node264.attr('class', ref277.get());
    subs__.addSub(ref277.addEventListener('change', function(_, ref, val) {
      node264.attr('class', val);
    }));
    
  }
  subs__.addSub(ref277.rebind());
  
  var nodes360 = $("<span>");
  node264.append(nodes360);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl119();
  }));
  
  function renderControl119() {
    subs__.addSub((elements)(function(elements, callback) {
      var root531 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root531); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes360;
      nodes360 = node.contents();
      oldNodes.replaceWith(nodes360);
    }));
  }
  renderControl119();
  root530.append(node264);
  callback(root530); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root532 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node265 = $("<td>");
  
  var ref278 = width;
  if(ref278.get() !== null) {
    node265.attr('width', ref278.get());
    subs__.addSub(ref278.addEventListener('change', function(_, ref, val) {
      node265.attr('width', val);
    }));
    
  }
  subs__.addSub(ref278.rebind());
  
  var ref279 = style;
  if(ref279.get() !== null) {
    node265.attr('class', ref279.get());
    subs__.addSub(ref279.addEventListener('change', function(_, ref, val) {
      node265.attr('class', val);
    }));
    
  }
  subs__.addSub(ref279.rebind());
  
  
  var node266 = $("<strong>");
  
  var nodes361 = $("<span>");
  node266.append(nodes361);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl120();
  }));
  
  function renderControl120() {
    subs__.addSub((elements)(function(elements, callback) {
      var root533 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root533); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes361;
      nodes361 = node.contents();
      oldNodes.replaceWith(nodes361);
    }));
  }
  renderControl120();
  node265.append(node266);
  root532.append(node265);
  callback(root532); return subs__;
  
  
  
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
  items.list(function(coll134) {
    coll134 = coll134.reverse();
    function processOne14() {
      var item;
      item = coll134.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll134.length > 0) processOne14(); else rest14();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll134.length > 0) processOne14(); else rest14();
          
        }
      }
    }
    function rest14() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll134.length > 0) processOne14(); else rest14();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root534 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes362 = $("<span>");
  root534.append(nodes362);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl121();
  }));
  
  function renderControl121() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root535 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root535); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes362;
      nodes362 = node.contents();
      oldNodes.replaceWith(nodes362);
    }));
  }
  renderControl121();
  callback(root534); return subs__;
  
  return subs__;
};

ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root536 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp309 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp309.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node267 = $("<span>");
  root536.append(node267);
  var condSubs67 = new mobl.CompSubscription();
  subs__.addSub(condSubs67);
  var oldValue67;
  var renderCond67 = function() {
    var value147 = tmp309.get();
    if(oldValue67 === value147) return;
    oldValue67 = value147;
    var subs__ = condSubs67;
    subs__.unsubscribe();
    node267.empty();
    if(value147) {
      
      var current = mobl.ref(null);
      
      var node268 = $("<div>");
      node268.attr('width', "100%");
      
      
      var node269 = $("<div>");
      node269.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes364 = $("<span>");
      node269.append(nodes364);
      subs__.addSub((ui.group)(function(_, callback) {
        var root538 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node272 = mobl.loadingSpan();
        root538.append(node272);
        var list53;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList53 = function() {
          var subs__ = listSubs__;
          list53 = items.get();
          list53.list(function(results53) {
            node272.empty();
            for(var i53 = 0; i53 < results53.length; i53++) {
              (function() {
                var iternode53 = $("<span>");
                node272.append(iternode53);
                var it;
                it = mobl.ref(mobl.ref(results53), i53);
                var result__ = it.get() == current.get();
                var tmp305 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp305.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp305.set(it.get() == current.get());
                }));
                
                
                var node273 = $("<span>");
                iternode53.append(node273);
                var condSubs69 = new mobl.CompSubscription();
                subs__.addSub(condSubs69);
                var oldValue69;
                var renderCond69 = function() {
                  var value149 = tmp305.get();
                  if(oldValue69 === value149) return;
                  oldValue69 = value149;
                  var subs__ = condSubs69;
                  subs__.unsubscribe();
                  node273.empty();
                  if(value149) {
                    var nodes365 = $("<span>");
                    node273.append(nodes365);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root539 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp336 = result__;
                        var tmp302 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp334 = result__;
                            var result__ = tmp334;
                            tmp302.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp335 = result__;
                            var result__ = tmp335;
                            tmp302.set(result__);
                            
                          });
                        }));
                        
                        var nodes366 = $("<span>");
                        root539.append(nodes366);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl123();
                        }));
                        
                        function renderControl123() {
                          subs__.addSub((masterItem.get())(it, tmp302, function(elements, callback) {
                            var root540 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root540); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes366;
                            nodes366 = node.contents();
                            oldNodes.replaceWith(nodes366);
                          }));
                        }
                        renderControl123();
                        callback(root539); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes365;
                      nodes365 = node.contents();
                      oldNodes.replaceWith(nodes365);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = true;
                                     ui.visible.set(result__);
                                     mathJAX.renderMaths(function(result__) {
                                       var tmp340 = result__;
                                       var result__ = plot.renderPlot("corePlotArea", current.get());
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   };
                    var tmp304 = mobl.ref(result__);
                    
                    var nodes367 = $("<span>");
                    node273.append(nodes367);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp304, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root541 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp339 = result__;
                        var tmp303 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp337 = result__;
                            var result__ = tmp337;
                            tmp303.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp338 = result__;
                            var result__ = tmp338;
                            tmp303.set(result__);
                            
                          });
                        }));
                        
                        var nodes368 = $("<span>");
                        root541.append(nodes368);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl124();
                        }));
                        
                        function renderControl124() {
                          subs__.addSub((masterItem.get())(it, tmp303, function(elements, callback) {
                            var root542 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root542); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes368;
                            nodes368 = node.contents();
                            oldNodes.replaceWith(nodes368);
                          }));
                        }
                        renderControl124();
                        callback(root541); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes367;
                      nodes367 = node.contents();
                      oldNodes.replaceWith(nodes367);
                    }));
                    
                    
                  }
                };
                renderCond69();
                subs__.addSub(tmp305.addEventListener('change', function() {
                  renderCond69();
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
        
        callback(root538); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes364;
        nodes364 = node.contents();
        oldNodes.replaceWith(nodes364);
      }));
      node268.append(node269);
      
      var node270 = $("<div>");
      node270.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
      
      var result__ = current.get() && ui.visible.get();
      var tmp307 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        tmp307.set(current.get() && ui.visible.get());
      }));
      subs__.addSub(ui.visible.addEventListener('change', function() {
        tmp307.set(current.get() && ui.visible.get());
      }));
      
      
      var node271 = $("<span>");
      node270.append(node271);
      var condSubs68 = new mobl.CompSubscription();
      subs__.addSub(condSubs68);
      var oldValue68;
      var renderCond68 = function() {
        var value148 = tmp307.get();
        if(oldValue68 === value148) return;
        oldValue68 = value148;
        var subs__ = condSubs68;
        subs__.unsubscribe();
        node271.empty();
        if(value148) {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp333 = result__;
            var tmp306 = mobl.ref(result__);
            subs__.addSub(current.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp331 = result__;
                var result__ = tmp331;
                tmp306.set(result__);
                
              });
            }));
            subs__.addSub(items.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp332 = result__;
                var result__ = tmp332;
                tmp306.set(result__);
                
              });
            }));
            
            var nodes363 = $("<span>");
            node271.append(nodes363);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl122();
            }));
            
            function renderControl122() {
              subs__.addSub((detail.get())(current, tmp306, function(elements, callback) {
                var root537 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root537); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes363;
                nodes363 = node.contents();
                oldNodes.replaceWith(nodes363);
              }));
            }
            renderControl122();
            
            
          });
        } else {
          
        }
      };
      renderCond68();
      subs__.addSub(tmp307.addEventListener('change', function() {
        renderCond68();
      }));
      
      node268.append(node270);
      node267.append(node268);
      
      
      
      
      
      
    } else {
      var nodes369 = $("<span>");
      node267.append(nodes369);
      subs__.addSub((ui.group)(function(_, callback) {
        var root543 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node274 = mobl.loadingSpan();
        root543.append(node274);
        var list54;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList54 = function() {
          var subs__ = listSubs__;
          list54 = items.get();
          list54.list(function(results54) {
            node274.empty();
            for(var i54 = 0; i54 < results54.length; i54++) {
              (function() {
                var iternode54 = $("<span>");
                node274.append(iternode54);
                var it;
                it = mobl.ref(mobl.ref(results54), i54);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp344 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp301 = mobl.ref(result__);
                
                var nodes370 = $("<span>");
                iternode54.append(nodes370);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp301, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root544 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp343 = result__;
                    var tmp300 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp341 = result__;
                        var result__ = tmp341;
                        tmp300.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp342 = result__;
                        var result__ = tmp342;
                        tmp300.set(result__);
                        
                      });
                    }));
                    
                    var nodes371 = $("<span>");
                    root544.append(nodes371);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl125();
                    }));
                    
                    function renderControl125() {
                      subs__.addSub((masterItem.get())(it, tmp300, function(elements, callback) {
                        var root545 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root545); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes371;
                        nodes371 = node.contents();
                        oldNodes.replaceWith(nodes371);
                      }));
                    }
                    renderControl125();
                    callback(root544); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes370;
                  nodes370 = node.contents();
                  oldNodes.replaceWith(nodes370);
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
        
        callback(root543); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes369;
        nodes369 = node.contents();
        oldNodes.replaceWith(nodes369);
      }));
      
      
    }
  };
  renderCond67();
  subs__.addSub(tmp309.addEventListener('change', function() {
    renderCond67();
  }));
  
  callback(root536); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root546 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes372 = $("<span>");
  root546.append(nodes372);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root547 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes373 = $("<span>");
    root547.append(nodes373);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root548 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root548); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes373;
      nodes373 = node.contents();
      oldNodes.replaceWith(nodes373);
    }));
    callback(root547); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes372;
    nodes372 = node.contents();
    oldNodes.replaceWith(nodes372);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes374 = $("<span>");
  root546.append(nodes374);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root549 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root549); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes374;
    nodes374 = node.contents();
    oldNodes.replaceWith(nodes374);
  }));
  callback(root546); return subs__;
  
  
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
