mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1069 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node291 = $("<span>");
  root1069.append(node291);
  var condSubs71 = new mobl.CompSubscription();
  subs__.addSub(condSubs71);
  var oldValue71;
  var renderCond71 = function() {
    var value287 = value.get();
    if(oldValue71 === value287) return;
    oldValue71 = value287;
    var subs__ = condSubs71;
    subs__.unsubscribe();
    node291.empty();
    if(value287) {
      var nodes847 = $("<span>");
      node291.append(nodes847);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl124();
      }));
      
      function renderControl124() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1070 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1070); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes847;
          nodes847 = node.contents();
          oldNodes.replaceWith(nodes847);
        }));
      }
      renderControl124();
      
      
    } else {
      var nodes848 = $("<span>");
      node291.append(nodes848);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1071 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes849 = $("<span>");
        root1071.append(nodes849);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1072 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1072); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes849;
          nodes849 = node.contents();
          oldNodes.replaceWith(nodes849);
        }));
        var nodes850 = $("<span>");
        root1071.append(nodes850);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1073 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1073); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes850;
          nodes850 = node.contents();
          oldNodes.replaceWith(nodes850);
        }));
        callback(root1071); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes848;
        nodes848 = node.contents();
        oldNodes.replaceWith(nodes848);
      }));
      
      
    }
  };
  renderCond71();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond71();
  }));
  
  callback(root1069); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1074 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node292 = $("<div>");
  
  var ref309 = mobl.ref(ui.headerStyle);
  if(ref309.get() !== null) {
    node292.attr('class', ref309.get());
    subs__.addSub(ref309.addEventListener('change', function(_, ref, val) {
      node292.attr('class', val);
    }));
    
  }
  subs__.addSub(ref309.rebind());
  
  var val148 = onclick.get();
  if(val148 !== null) {
    subs__.addSub(mobl.domBind(node292, 'tap', val148));
  }
  
  var ref310 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref310.get() !== null) {
    node292.attr('style', ref310.get());
    subs__.addSub(ref310.addEventListener('change', function(_, ref, val) {
      node292.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node292.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref310.rebind());
  
  
  var node295 = $("<div>");
  
  var ref308 = mobl.ref(ui.headerContainerStyle);
  if(ref308.get() !== null) {
    node295.attr('class', ref308.get());
    subs__.addSub(ref308.addEventListener('change', function(_, ref, val) {
      node295.attr('class', val);
    }));
    
  }
  subs__.addSub(ref308.rebind());
  
  
  var node296 = $("<div>");
  
  var ref306 = text;
  node296.text(""+ref306.get());
  var ignore58 = false;
  subs__.addSub(ref306.addEventListener('change', function(_, ref, val) {
    if(ignore58) return;
    node296.text(""+val);
  }));
  subs__.addSub(ref306.rebind());
  
  
  var ref307 = mobl.ref(ui.headerTextStyle);
  if(ref307.get() !== null) {
    node296.attr('class', ref307.get());
    subs__.addSub(ref307.addEventListener('change', function(_, ref, val) {
      node296.attr('class', val);
    }));
    
  }
  subs__.addSub(ref307.rebind());
  
  node295.append(node296);
  node292.append(node295);
  var nodes851 = $("<span>");
  node292.append(nodes851);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl125();
  }));
  
  function renderControl125() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1075 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1075); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes851;
      nodes851 = node.contents();
      oldNodes.replaceWith(nodes851);
    }));
  }
  renderControl125();
  root1074.append(node292);
  
  var node293 = $("<span>");
  root1074.append(node293);
  var condSubs72 = new mobl.CompSubscription();
  subs__.addSub(condSubs72);
  var oldValue72;
  var renderCond72 = function() {
    var value288 = fixedPosition.get();
    if(oldValue72 === value288) return;
    oldValue72 = value288;
    var subs__ = condSubs72;
    subs__.unsubscribe();
    node293.empty();
    if(value288) {
      
      var node294 = $("<div>");
      node294.attr('id', "hello");
      node294.attr('style', "height: 2.9em;");
      
      node293.append(node294);
      
      
    } else {
      
    }
  };
  renderCond72();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond72();
  }));
  
  callback(root1074); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1076 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref311 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref311.get() !== null) {
    sp.attr('class', ref311.get());
    subs__.addSub(ref311.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref311.rebind());
  
  var val149 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val149 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val149));
  }
  
  var val150 = function(event, callback) {
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
  if(val150 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val150));
  }
  
  var val151 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after45(result__) {
                    var tmp846 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after45);if(result__ !== undefined) after45(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val151 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val151));
  }
  
  var val152 = function(event, callback) {
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
  if(val152 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val152));
  }
  
  var ref312 = text;
  sp.text(""+ref312.get());
  var ignore59 = false;
  subs__.addSub(ref312.addEventListener('change', function(_, ref, val) {
    if(ignore59) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref312.rebind());
  
  
  root1076.append(sp);
  callback(root1076); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1077 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes852 = $("<span>");
  root1077.append(nodes852);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1078 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1078); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes852;
    nodes852 = node.contents();
    oldNodes.replaceWith(nodes852);
  }));
  callback(root1077); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1079 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes853 = $("<span>");
  root1079.append(nodes853);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1080 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1080); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes853;
    nodes853 = node.contents();
    oldNodes.replaceWith(nodes853);
  }));
  callback(root1079); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1081 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node297 = $("<ul>");
  
  var ref313 = mobl.ref(ui.groupStyle);
  if(ref313.get() !== null) {
    node297.attr('class', ref313.get());
    subs__.addSub(ref313.addEventListener('change', function(_, ref, val) {
      node297.attr('class', val);
    }));
    
  }
  subs__.addSub(ref313.rebind());
  
  var nodes854 = $("<span>");
  node297.append(nodes854);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl126();
  }));
  
  function renderControl126() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1082 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1082); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes854;
      nodes854 = node.contents();
      oldNodes.replaceWith(nodes854);
    }));
  }
  renderControl126();
  root1081.append(node297);
  callback(root1081); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1083 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node298 = $("<img>");
  
  var ref314 = url;
  if(ref314.get() !== null) {
    node298.attr('src', ref314.get());
    subs__.addSub(ref314.addEventListener('change', function(_, ref, val) {
      node298.attr('src', val);
    }));
    
  }
  subs__.addSub(ref314.rebind());
  
  var ref315 = width;
  if(ref315.get() !== null) {
    node298.attr('width', ref315.get());
    subs__.addSub(ref315.addEventListener('change', function(_, ref, val) {
      node298.attr('width', val);
    }));
    
  }
  subs__.addSub(ref315.rebind());
  
  var ref316 = height;
  if(ref316.get() !== null) {
    node298.attr('height', ref316.get());
    subs__.addSub(ref316.addEventListener('change', function(_, ref, val) {
      node298.attr('height', val);
    }));
    
  }
  subs__.addSub(ref316.rebind());
  
  var ref317 = style;
  if(ref317.get() !== null) {
    node298.attr('class', ref317.get());
    subs__.addSub(ref317.addEventListener('change', function(_, ref, val) {
      node298.attr('class', val);
    }));
    
  }
  subs__.addSub(ref317.rebind());
  
  var val153 = onclick.get();
  if(val153 !== null) {
    subs__.addSub(mobl.domBind(node298, 'tap', val153));
  }
  
  var ref318 = valign;
  if(ref318.get() !== null) {
    node298.attr('valign', ref318.get());
    subs__.addSub(ref318.addEventListener('change', function(_, ref, val) {
      node298.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref318.rebind());
  
  var ref319 = align;
  if(ref319.get() !== null) {
    node298.attr('align', ref319.get());
    subs__.addSub(ref319.addEventListener('change', function(_, ref, val) {
      node298.attr('align', val);
    }));
    
  }
  subs__.addSub(ref319.rebind());
  
  root1083.append(node298);
  callback(root1083); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1084 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref320 = mobl.ref(ui.itemStyle);
  if(ref320.get() !== null) {
    el.attr('class', ref320.get());
    subs__.addSub(ref320.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref320.rebind());
  
  var ref321 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref321.get() !== null) {
    el.attr('class', ref321.get());
    subs__.addSub(ref321.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref321.rebind());
  
  var val154 = onswipe.get();
  if(val154 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val154));
  }
  
  var val155 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp847 = result__;
                                           function after46(result__) {
                                             var tmp848 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after46);if(result__ !== undefined) after46(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp849 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val155 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val155));
  }
  
  var nodes855 = $("<span>");
  el.append(nodes855);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl127();
  }));
  
  function renderControl127() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1085 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1085); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes855;
      nodes855 = node.contents();
      oldNodes.replaceWith(nodes855);
    }));
  }
  renderControl127();
  root1084.append(el);
  callback(root1084); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1086 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node299 = $("<input>");
  node299.attr('type', "checkbox");
  
  var ref323 = b;
  node299.attr('checked', !!ref323.get());
  subs__.addSub(ref323.addEventListener('change', function(_, ref, val) {
    if(ref === ref323) node299.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node299, 'change', function() {
    b.set(!!node299.attr('checked'));
  }));
  
  var val157 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val157 !== null) {
    subs__.addSub(mobl.domBind(node299, 'tap', val157));
  }
  
  var val158 = onchange.get();
  if(val158 !== null) {
    subs__.addSub(mobl.domBind(node299, 'change', val158));
  }
  
  root1086.append(node299);
  
  root1086.append(" ");
  
  var node300 = $("<span>");
  
  var ref322 = label;
  node300.text(""+ref322.get());
  var ignore60 = false;
  subs__.addSub(ref322.addEventListener('change', function(_, ref, val) {
    if(ignore60) return;
    node300.text(""+val);
  }));
  subs__.addSub(ref322.rebind());
  
  
  var val156 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after47(result__) {
                    var tmp850 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after47);if(result__ !== undefined) after47(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val156 !== null) {
    subs__.addSub(mobl.domBind(node300, 'tap', val156));
  }
  
  root1086.append(node300);
  callback(root1086); return subs__;
  
  
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
  var root1087 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node301 = $("<span>");
  root1087.append(node301);
  var condSubs73 = new mobl.CompSubscription();
  subs__.addSub(condSubs73);
  var oldValue73;
  var renderCond73 = function() {
    var value289 = label.get();
    if(oldValue73 === value289) return;
    oldValue73 = value289;
    var subs__ = condSubs73;
    subs__.unsubscribe();
    node301.empty();
    if(value289) {
      var nodes856 = $("<span>");
      node301.append(nodes856);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1088 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1088); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes856;
        nodes856 = node.contents();
        oldNodes.replaceWith(nodes856);
      }));
      
      
    } else {
      
    }
  };
  renderCond73();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond73();
  }));
  
  
  var node302 = $("<span>");
  root1087.append(node302);
  var condSubs74 = new mobl.CompSubscription();
  subs__.addSub(condSubs74);
  var oldValue74;
  var renderCond74 = function() {
    var value290 = validator.get();
    if(oldValue74 === value290) return;
    oldValue74 = value290;
    var subs__ = condSubs74;
    subs__.unsubscribe();
    node302.empty();
    if(value290) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after51(result__) {
        var tmp851 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp852 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node303 = $("<input>");
        
        var ref324 = inputType;
        if(ref324.get() !== null) {
          node303.attr('type', ref324.get());
          subs__.addSub(ref324.addEventListener('change', function(_, ref, val) {
            node303.attr('type', val);
          }));
          
        }
        subs__.addSub(ref324.rebind());
        
        var ref325 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref325.get() !== null) {
          node303.attr('class', ref325.get());
          subs__.addSub(ref325.addEventListener('change', function(_, ref, val) {
            node303.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node303.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node303.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node303.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref325.rebind());
        
        var ref326 = placeholder;
        if(ref326.get() !== null) {
          node303.attr('placeholder', ref326.get());
          subs__.addSub(ref326.addEventListener('change', function(_, ref, val) {
            node303.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref326.rebind());
        
        var ref327 = temp;
        node303.val(""+ref327.get());
        var ignore61 = false;
        subs__.addSub(ref327.addEventListener('change', function(_, ref, val) {
          if(ignore61) return;
          node303.val(""+val);
        }));
        subs__.addSub(ref327.rebind());
        
        subs__.addSub(mobl.domBind(node303, 'keyup change', function() {
          ignore61 = true;
          temp.set(mobl.stringTomobl__String(node303.val()));
          ignore61 = false;
        }));
        
        
        var val159 = onchange.get();
        if(val159 !== null) {
          subs__.addSub(mobl.domBind(node303, 'change', val159));
        }
        
        var val160 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after48(result__) {
                          var tmp853 = result__;
                          function after49(result__) {
                            var tmp854 = result__;
                            var result__ = tmp854;
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
                          var result__ = validator.get()(temp.get(), after49);if(result__ !== undefined) after49(result__);
                        }
                        var result__ = onkeyup.get()(event, after48);if(result__ !== undefined) after48(result__);
                      } else {
                        {
                          function after50(result__) {
                            var tmp854 = result__;
                            var result__ = tmp854;
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
                          var result__ = validator.get()(temp.get(), after50);if(result__ !== undefined) after50(result__);
                        }
                      }
                    };
        if(val160 !== null) {
          subs__.addSub(mobl.domBind(node303, 'keyup', val160));
        }
        
        var val161 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val161 !== null) {
          subs__.addSub(mobl.domBind(node303, 'blur', val161));
        }
        
        node302.append(node303);
        var nodes857 = $("<span>");
        node302.append(nodes857);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1089 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1089); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes857;
          nodes857 = node.contents();
          oldNodes.replaceWith(nodes857);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after51);if(result__ !== undefined) after51(result__);
    } else {
      
      var node304 = $("<input>");
      
      var ref328 = inputType;
      if(ref328.get() !== null) {
        node304.attr('type', ref328.get());
        subs__.addSub(ref328.addEventListener('change', function(_, ref, val) {
          node304.attr('type', val);
        }));
        
      }
      subs__.addSub(ref328.rebind());
      
      var ref329 = style;
      if(ref329.get() !== null) {
        node304.attr('class', ref329.get());
        subs__.addSub(ref329.addEventListener('change', function(_, ref, val) {
          node304.attr('class', val);
        }));
        
      }
      subs__.addSub(ref329.rebind());
      
      var ref330 = placeholder;
      if(ref330.get() !== null) {
        node304.attr('placeholder', ref330.get());
        subs__.addSub(ref330.addEventListener('change', function(_, ref, val) {
          node304.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref330.rebind());
      
      var ref331 = s;
      node304.val(""+ref331.get());
      var ignore62 = false;
      subs__.addSub(ref331.addEventListener('change', function(_, ref, val) {
        if(ignore62) return;
        node304.val(""+val);
      }));
      subs__.addSub(ref331.rebind());
      
      subs__.addSub(mobl.domBind(node304, 'keyup change', function() {
        ignore62 = true;
        s.set(mobl.stringTomobl__String(node304.val()));
        ignore62 = false;
      }));
      
      
      var val162 = onchange.get();
      if(val162 !== null) {
        subs__.addSub(mobl.domBind(node304, 'change', val162));
      }
      
      var val163 = onkeyup.get();
      if(val163 !== null) {
        subs__.addSub(mobl.domBind(node304, 'keyup', val163));
      }
      
      var val164 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val164 !== null) {
        subs__.addSub(mobl.domBind(node304, 'blur', val164));
      }
      
      node302.append(node304);
      
      
    }
  };
  renderCond74();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond74();
  }));
  
  callback(root1087); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1090 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes858 = $("<span>");
  root1090.append(nodes858);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1091 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1091); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes858;
    nodes858 = node.contents();
    oldNodes.replaceWith(nodes858);
  }));
  callback(root1090); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1092 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes859 = $("<span>");
  root1092.append(nodes859);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1093 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1093); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes859;
    nodes859 = node.contents();
    oldNodes.replaceWith(nodes859);
  }));
  callback(root1092); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1094 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node305 = $("<span>");
  root1094.append(node305);
  var condSubs75 = new mobl.CompSubscription();
  subs__.addSub(condSubs75);
  var oldValue75;
  var renderCond75 = function() {
    var value291 = label.get();
    if(oldValue75 === value291) return;
    oldValue75 = value291;
    var subs__ = condSubs75;
    subs__.unsubscribe();
    node305.empty();
    if(value291) {
      var nodes860 = $("<span>");
      node305.append(nodes860);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1095 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1095); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes860;
        nodes860 = node.contents();
        oldNodes.replaceWith(nodes860);
      }));
      
      
    } else {
      
    }
  };
  renderCond75();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond75();
  }));
  
  
  var node306 = $("<input>");
  node306.attr('type', "range");
  
  var ref332 = n;
  node306.val(""+ref332.get());
  var ignore63 = false;
  subs__.addSub(ref332.addEventListener('change', function(_, ref, val) {
    if(ignore63) return;
    node306.val(""+val);
  }));
  subs__.addSub(ref332.rebind());
  
  subs__.addSub(mobl.domBind(node306, 'keyup change', function() {
    ignore63 = true;
    n.set(mobl.stringTomobl__Num(node306.val()));
    ignore63 = false;
  }));
  
  
  var ref333 = min;
  if(ref333.get() !== null) {
    node306.attr('min', ref333.get());
    subs__.addSub(ref333.addEventListener('change', function(_, ref, val) {
      node306.attr('min', val);
    }));
    
  }
  subs__.addSub(ref333.rebind());
  
  var ref334 = max;
  if(ref334.get() !== null) {
    node306.attr('max', ref334.get());
    subs__.addSub(ref334.addEventListener('change', function(_, ref, val) {
      node306.attr('max', val);
    }));
    
  }
  subs__.addSub(ref334.rebind());
  
  var ref335 = step;
  if(ref335.get() !== null) {
    node306.attr('step', ref335.get());
    subs__.addSub(ref335.addEventListener('change', function(_, ref, val) {
      node306.attr('step', val);
    }));
    
  }
  subs__.addSub(ref335.rebind());
  node306.attr('style', "width: 99%;");
  
  var val165 = onchange.get();
  if(val165 !== null) {
    subs__.addSub(mobl.domBind(node306, 'change', val165));
  }
  
  var val166 = onkeyup.get();
  if(val166 !== null) {
    subs__.addSub(mobl.domBind(node306, 'keyup', val166));
  }
  
  var ref336 = placeholder;
  if(ref336.get() !== null) {
    node306.attr('placeholder', ref336.get());
    subs__.addSub(ref336.addEventListener('change', function(_, ref, val) {
      node306.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref336.rebind());
  
  root1094.append(node306);
  callback(root1094); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1096 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after52(result__) {
      var tmp855 = result__;
      var result__ = tmp855;
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
    var result__ = validator.get()(n2, after52);if(result__ !== undefined) after52(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes861 = $("<span>");
  root1096.append(nodes861);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1097 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1097); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes861;
    nodes861 = node.contents();
    oldNodes.replaceWith(nodes861);
  }));
  callback(root1096); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1098 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node307 = $("<span>");
  root1098.append(node307);
  var condSubs76 = new mobl.CompSubscription();
  subs__.addSub(condSubs76);
  var oldValue76;
  var renderCond76 = function() {
    var value292 = label.get();
    if(oldValue76 === value292) return;
    oldValue76 = value292;
    var subs__ = condSubs76;
    subs__.unsubscribe();
    node307.empty();
    if(value292) {
      
      var node308 = $("<span>");
      node308.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref340 = label;
      node308.text(""+ref340.get());
      var ignore65 = false;
      subs__.addSub(ref340.addEventListener('change', function(_, ref, val) {
        if(ignore65) return;
        node308.text(""+val);
      }));
      subs__.addSub(ref340.rebind());
      
      
      node307.append(node308);
      
      var node309 = $("<span>");
      node309.attr('style', "float: left");
      
      
      var node310 = $("<input>");
      node310.attr('type', "password");
      
      var ref337 = style;
      if(ref337.get() !== null) {
        node310.attr('class', ref337.get());
        subs__.addSub(ref337.addEventListener('change', function(_, ref, val) {
          node310.attr('class', val);
        }));
        
      }
      subs__.addSub(ref337.rebind());
      
      var ref338 = placeholder;
      if(ref338.get() !== null) {
        node310.attr('placeholder', ref338.get());
        subs__.addSub(ref338.addEventListener('change', function(_, ref, val) {
          node310.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref338.rebind());
      
      var ref339 = s;
      node310.val(""+ref339.get());
      var ignore64 = false;
      subs__.addSub(ref339.addEventListener('change', function(_, ref, val) {
        if(ignore64) return;
        node310.val(""+val);
      }));
      subs__.addSub(ref339.rebind());
      
      subs__.addSub(mobl.domBind(node310, 'keyup change', function() {
        ignore64 = true;
        s.set(mobl.stringTomobl__String(node310.val()));
        ignore64 = false;
      }));
      
      
      var val167 = onchange.get();
      if(val167 !== null) {
        subs__.addSub(mobl.domBind(node310, 'change', val167));
      }
      
      var val168 = onkeyup.get();
      if(val168 !== null) {
        subs__.addSub(mobl.domBind(node310, 'keyup', val168));
      }
      
      var val169 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val169 !== null) {
        subs__.addSub(mobl.domBind(node310, 'blur', val169));
      }
      
      node309.append(node310);
      node307.append(node309);
      
      
      
      
    } else {
      
      var node311 = $("<input>");
      node311.attr('type', "password");
      
      var ref341 = style;
      if(ref341.get() !== null) {
        node311.attr('class', ref341.get());
        subs__.addSub(ref341.addEventListener('change', function(_, ref, val) {
          node311.attr('class', val);
        }));
        
      }
      subs__.addSub(ref341.rebind());
      
      var ref342 = placeholder;
      if(ref342.get() !== null) {
        node311.attr('placeholder', ref342.get());
        subs__.addSub(ref342.addEventListener('change', function(_, ref, val) {
          node311.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref342.rebind());
      
      var ref343 = s;
      node311.val(""+ref343.get());
      var ignore66 = false;
      subs__.addSub(ref343.addEventListener('change', function(_, ref, val) {
        if(ignore66) return;
        node311.val(""+val);
      }));
      subs__.addSub(ref343.rebind());
      
      subs__.addSub(mobl.domBind(node311, 'keyup change', function() {
        ignore66 = true;
        s.set(mobl.stringTomobl__String(node311.val()));
        ignore66 = false;
      }));
      
      
      var val170 = onchange.get();
      if(val170 !== null) {
        subs__.addSub(mobl.domBind(node311, 'change', val170));
      }
      
      var val171 = onkeyup.get();
      if(val171 !== null) {
        subs__.addSub(mobl.domBind(node311, 'keyup', val171));
      }
      
      var val172 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val172 !== null) {
        subs__.addSub(mobl.domBind(node311, 'blur', val172));
      }
      
      node307.append(node311);
      
      
    }
  };
  renderCond76();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond76();
  }));
  
  callback(root1098); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1099 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref348 = style;
  if(ref348.get() !== null) {
    sel.attr('class', ref348.get());
    subs__.addSub(ref348.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref348.rebind());
  
  var val173 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after53(result__) {
                    var tmp857 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after53);if(result__ !== undefined) after53(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val173 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val173));
  }
  
  
  var node312 = mobl.loadingSpan();
  sel.append(node312);
  var list50;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList50 = function() {
    var subs__ = listSubs__;
    list50 = options.get();
    list50.list(function(results50) {
      node312.empty();
      for(var i221 = 0; i221 < results50.length; i221++) {
        (function() {
          var iternode50 = $("<span>");
          node312.append(iternode50);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results50), i221), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results50), i221), "_2");
          
          var node313 = $("<option>");
          
          var ref344 = optionDescription;
          node313.text(""+ref344.get());
          var ignore67 = false;
          subs__.addSub(ref344.addEventListener('change', function(_, ref, val) {
            if(ignore67) return;
            node313.text(""+val);
          }));
          subs__.addSub(ref344.rebind());
          
          
          var ref345 = optionStyle;
          if(ref345.get() !== null) {
            node313.attr('class', ref345.get());
            subs__.addSub(ref345.addEventListener('change', function(_, ref, val) {
              node313.attr('class', val);
            }));
            
          }
          subs__.addSub(ref345.rebind());
          
          var ref346 = optionValue;
          if(ref346.get() !== null) {
            node313.attr('value', ref346.get());
            subs__.addSub(ref346.addEventListener('change', function(_, ref, val) {
              node313.attr('value', val);
            }));
            
          }
          subs__.addSub(ref346.rebind());
          
          var ref347 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref347.get() !== null) {
            node313.attr('selected', ref347.get());
            subs__.addSub(ref347.addEventListener('change', function(_, ref, val) {
              node313.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node313.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node313.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref347.rebind());
          
          iternode50.append(node313);
          
          var oldNodes = iternode50;
          iternode50 = iternode50.contents();
          oldNodes.replaceWith(iternode50);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list50.addEventListener('change', function() { listSubs__.unsubscribe(); renderList50(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList50(true); }));
    });
  };
  renderList50();
  
  root1099.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1099); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1100 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes862 = $("<span>");
    root1100.append(nodes862);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1101 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node314 = mobl.loadingSpan();
      root1101.append(node314);
      var list51;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList51 = function() {
        var subs__ = listSubs__;
        list51 = tabs.get();
        list51.list(function(results51) {
          node314.empty();
          for(var i222 = 0; i222 < results51.length; i222++) {
            (function() {
              var iternode51 = $("<span>");
              node314.append(iternode51);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results51), i222), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results51), i222), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results51), i222), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp818 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp818.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp818.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp818.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp818.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp817 = mobl.ref(result__);
              
              var nodes863 = $("<span>");
              iternode51.append(nodes863);
              subs__.addSub((mobl.span)(tmp818, mobl.ref(null), tmp817, mobl.ref(null), function(_, callback) {
                var root1102 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes864 = $("<span>");
                root1102.append(nodes864);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1103 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1103); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes864;
                  nodes864 = node.contents();
                  oldNodes.replaceWith(nodes864);
                }));
                callback(root1102); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes863;
                nodes863 = node.contents();
                oldNodes.replaceWith(nodes863);
              }));
              
              var oldNodes = iternode51;
              iternode51 = iternode51.contents();
              oldNodes.replaceWith(iternode51);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list51.addEventListener('change', function() { listSubs__.unsubscribe(); renderList51(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList51(true); }));
        });
      };
      renderList51();
      
      callback(root1101); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes862;
      nodes862 = node.contents();
      oldNodes.replaceWith(nodes862);
    }));
    
    var node315 = mobl.loadingSpan();
    root1100.append(node315);
    var list52;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList52 = function() {
      var subs__ = listSubs__;
      list52 = tabs.get();
      list52.list(function(results52) {
        node315.empty();
        for(var i223 = 0; i223 < results52.length; i223++) {
          (function() {
            var iternode52 = $("<span>");
            node315.append(iternode52);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results52), i223), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results52), i223), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results52), i223), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp819 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp819.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp819.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp819.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp819.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes865 = $("<span>");
            iternode52.append(nodes865);
            subs__.addSub((mobl.block)(tmp819, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1104 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes866 = $("<span>");
              root1104.append(nodes866);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1105 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes867 = $("<span>");
                root1105.append(nodes867);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl128();
                }));
                
                function renderControl128() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1106 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1106); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes867;
                    nodes867 = node.contents();
                    oldNodes.replaceWith(nodes867);
                  }));
                }
                renderControl128();
                callback(root1105); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes866;
                nodes866 = node.contents();
                oldNodes.replaceWith(nodes866);
              }));
              callback(root1104); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes865;
              nodes865 = node.contents();
              oldNodes.replaceWith(nodes865);
            }));
            
            var oldNodes = iternode52;
            iternode52 = iternode52.contents();
            oldNodes.replaceWith(iternode52);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list52.addEventListener('change', function() { listSubs__.unsubscribe(); renderList52(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList52(true); }));
      });
    };
    renderList52();
    
    callback(root1100); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes862 = $("<span>");
      root1100.append(nodes862);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1101 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node314 = mobl.loadingSpan();
        root1101.append(node314);
        var list51;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList51 = function() {
          var subs__ = listSubs__;
          list51 = tabs.get();
          list51.list(function(results51) {
            node314.empty();
            for(var i222 = 0; i222 < results51.length; i222++) {
              (function() {
                var iternode51 = $("<span>");
                node314.append(iternode51);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results51), i222), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results51), i222), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results51), i222), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp818 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp818.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp818.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp818.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp818.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp817 = mobl.ref(result__);
                
                var nodes863 = $("<span>");
                iternode51.append(nodes863);
                subs__.addSub((mobl.span)(tmp818, mobl.ref(null), tmp817, mobl.ref(null), function(_, callback) {
                  var root1102 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes864 = $("<span>");
                  root1102.append(nodes864);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1103 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1103); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes864;
                    nodes864 = node.contents();
                    oldNodes.replaceWith(nodes864);
                  }));
                  callback(root1102); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes863;
                  nodes863 = node.contents();
                  oldNodes.replaceWith(nodes863);
                }));
                
                var oldNodes = iternode51;
                iternode51 = iternode51.contents();
                oldNodes.replaceWith(iternode51);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list51.addEventListener('change', function() { listSubs__.unsubscribe(); renderList51(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList51(true); }));
          });
        };
        renderList51();
        
        callback(root1101); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes862;
        nodes862 = node.contents();
        oldNodes.replaceWith(nodes862);
      }));
      
      var node315 = mobl.loadingSpan();
      root1100.append(node315);
      var list52;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList52 = function() {
        var subs__ = listSubs__;
        list52 = tabs.get();
        list52.list(function(results52) {
          node315.empty();
          for(var i223 = 0; i223 < results52.length; i223++) {
            (function() {
              var iternode52 = $("<span>");
              node315.append(iternode52);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results52), i223), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results52), i223), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results52), i223), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp819 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp819.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp819.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp819.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp819.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes865 = $("<span>");
              iternode52.append(nodes865);
              subs__.addSub((mobl.block)(tmp819, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1104 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes866 = $("<span>");
                root1104.append(nodes866);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1105 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes867 = $("<span>");
                  root1105.append(nodes867);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl128();
                  }));
                  
                  function renderControl128() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1106 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1106); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes867;
                      nodes867 = node.contents();
                      oldNodes.replaceWith(nodes867);
                    }));
                  }
                  renderControl128();
                  callback(root1105); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes866;
                  nodes866 = node.contents();
                  oldNodes.replaceWith(nodes866);
                }));
                callback(root1104); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes865;
                nodes865 = node.contents();
                oldNodes.replaceWith(nodes865);
              }));
              
              var oldNodes = iternode52;
              iternode52 = iternode52.contents();
              oldNodes.replaceWith(iternode52);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list52.addEventListener('change', function() { listSubs__.unsubscribe(); renderList52(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList52(true); }));
        });
      };
      renderList52();
      
      callback(root1100); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1107 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node316 = $("<div>");
  
  var ref352 = mobl.ref(ui.searchboxStyle);
  if(ref352.get() !== null) {
    node316.attr('class', ref352.get());
    subs__.addSub(ref352.addEventListener('change', function(_, ref, val) {
      node316.attr('class', val);
    }));
    
  }
  subs__.addSub(ref352.rebind());
  
  
  var node317 = $("<input>");
  node317.attr('type', "search");
  
  var ref349 = mobl.ref(ui.searchBoxInputStyle);
  if(ref349.get() !== null) {
    node317.attr('class', ref349.get());
    subs__.addSub(ref349.addEventListener('change', function(_, ref, val) {
      node317.attr('class', val);
    }));
    
  }
  subs__.addSub(ref349.rebind());
  
  var ref350 = placeholder;
  if(ref350.get() !== null) {
    node317.attr('placeholder', ref350.get());
    subs__.addSub(ref350.addEventListener('change', function(_, ref, val) {
      node317.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref350.rebind());
  
  var ref351 = s;
  node317.val(""+ref351.get());
  var ignore68 = false;
  subs__.addSub(ref351.addEventListener('change', function(_, ref, val) {
    if(ignore68) return;
    node317.val(""+val);
  }));
  subs__.addSub(ref351.rebind());
  
  subs__.addSub(mobl.domBind(node317, 'keyup change', function() {
    ignore68 = true;
    s.set(mobl.stringTomobl__String(node317.val()));
    ignore68 = false;
  }));
  
  
  var val174 = onsearch.get();
  if(val174 !== null) {
    subs__.addSub(mobl.domBind(node317, 'change', val174));
  }
  
  var val175 = onkeyup.get();
  if(val175 !== null) {
    subs__.addSub(mobl.domBind(node317, 'keyup', val175));
  }
  node317.attr('autocorrect', false);
  node317.attr('autocapitalize', false);
  node317.attr('autocomplete', false);
  
  node316.append(node317);
  root1107.append(node316);
  callback(root1107); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1108 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref353 = mobl.ref(ui.contextMenuStyle);
  if(ref353.get() !== null) {
    menu.attr('class', ref353.get());
    subs__.addSub(ref353.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref353.rebind());
  
  var nodes868 = $("<span>");
  menu.append(nodes868);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl129();
  }));
  
  function renderControl129() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1109 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1109); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes868;
      nodes868 = node.contents();
      oldNodes.replaceWith(nodes868);
    }));
  }
  renderControl129();
  root1108.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val176 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp860 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val176 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val176));
  }
  
  root1108.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1108); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1110 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp845 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp845.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node318 = $("<span>");
  root1110.append(node318);
  var condSubs77 = new mobl.CompSubscription();
  subs__.addSub(condSubs77);
  var oldValue77;
  var renderCond77 = function() {
    var value293 = tmp845.get();
    if(oldValue77 === value293) return;
    oldValue77 = value293;
    var subs__ = condSubs77;
    subs__.unsubscribe();
    node318.empty();
    if(value293) {
      items.get().one(function(result__) {
        var tmp861 = result__;
        var current = mobl.ref(result__);
        
        var node319 = $("<div>");
        node319.attr('width', "100%");
        
        
        var node320 = $("<div>");
        node320.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes871 = $("<span>");
        node320.append(nodes871);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1113 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node323 = mobl.loadingSpan();
          root1113.append(node323);
          var list53;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList53 = function() {
            var subs__ = listSubs__;
            list53 = items.get();
            list53.list(function(results53) {
              node323.empty();
              for(var i224 = 0; i224 < results53.length; i224++) {
                (function() {
                  var iternode53 = $("<span>");
                  node323.append(iternode53);
                  var it;
                  it = mobl.ref(mobl.ref(results53), i224);
                  var result__ = it.get() == current.get();
                  var tmp825 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp825.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp825.set(it.get() == current.get());
                  }));
                  
                  
                  var node324 = $("<span>");
                  iternode53.append(node324);
                  var condSubs79 = new mobl.CompSubscription();
                  subs__.addSub(condSubs79);
                  var oldValue79;
                  var renderCond79 = function() {
                    var value295 = tmp825.get();
                    if(oldValue79 === value295) return;
                    oldValue79 = value295;
                    var subs__ = condSubs79;
                    subs__.unsubscribe();
                    node324.empty();
                    if(value295) {
                      var nodes872 = $("<span>");
                      node324.append(nodes872);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1114 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes873 = $("<span>");
                        root1114.append(nodes873);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl131();
                        }));
                        
                        function renderControl131() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1115 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1115); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes873;
                            nodes873 = node.contents();
                            oldNodes.replaceWith(nodes873);
                          }));
                        }
                        renderControl131();
                        callback(root1114); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes872;
                        nodes872 = node.contents();
                        oldNodes.replaceWith(nodes872);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp824 = mobl.ref(result__);
                      
                      var nodes874 = $("<span>");
                      node324.append(nodes874);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp824, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1116 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes875 = $("<span>");
                        root1116.append(nodes875);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl132();
                        }));
                        
                        function renderControl132() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1117 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1117); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes875;
                            nodes875 = node.contents();
                            oldNodes.replaceWith(nodes875);
                          }));
                        }
                        renderControl132();
                        callback(root1116); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes874;
                        nodes874 = node.contents();
                        oldNodes.replaceWith(nodes874);
                      }));
                      
                      
                    }
                  };
                  renderCond79();
                  subs__.addSub(tmp825.addEventListener('change', function() {
                    renderCond79();
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
          
          callback(root1113); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes871;
          nodes871 = node.contents();
          oldNodes.replaceWith(nodes871);
        }));
        node319.append(node320);
        
        var node321 = $("<div>");
        node321.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node322 = $("<span>");
        node321.append(node322);
        var condSubs78 = new mobl.CompSubscription();
        subs__.addSub(condSubs78);
        var oldValue78;
        var renderCond78 = function() {
          var value294 = current.get();
          if(oldValue78 === value294) return;
          oldValue78 = value294;
          var subs__ = condSubs78;
          subs__.unsubscribe();
          node322.empty();
          if(value294) {
            var nodes869 = $("<span>");
            node322.append(nodes869);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl130();
            }));
            
            function renderControl130() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1111 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1111); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes869;
                nodes869 = node.contents();
                oldNodes.replaceWith(nodes869);
              }));
            }
            renderControl130();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp826 = mobl.ref(result__);
            
            var nodes870 = $("<span>");
            node322.append(nodes870);
            subs__.addSub((mobl.label)(tmp826, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1112 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1112); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes870;
              nodes870 = node.contents();
              oldNodes.replaceWith(nodes870);
            }));
            
            
          }
        };
        renderCond78();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond78();
        }));
        
        node319.append(node321);
        node318.append(node319);
        
        
        
        
        
        
      });
    } else {
      var nodes876 = $("<span>");
      node318.append(nodes876);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1118 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node325 = mobl.loadingSpan();
        root1118.append(node325);
        var list54;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList54 = function() {
          var subs__ = listSubs__;
          list54 = items.get();
          list54.list(function(results54) {
            node325.empty();
            for(var i225 = 0; i225 < results54.length; i225++) {
              (function() {
                var iternode54 = $("<span>");
                node325.append(iternode54);
                var it;
                it = mobl.ref(mobl.ref(results54), i225);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp862 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp820 = mobl.ref(result__);
                
                var nodes877 = $("<span>");
                iternode54.append(nodes877);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp820, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1119 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes878 = $("<span>");
                  root1119.append(nodes878);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl133();
                  }));
                  
                  function renderControl133() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1120 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1120); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes878;
                      nodes878 = node.contents();
                      oldNodes.replaceWith(nodes878);
                    }));
                  }
                  renderControl133();
                  callback(root1119); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes877;
                  nodes877 = node.contents();
                  oldNodes.replaceWith(nodes877);
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
        
        callback(root1118); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes876;
        nodes876 = node.contents();
        oldNodes.replaceWith(nodes876);
      }));
      
      
    }
  };
  renderCond77();
  subs__.addSub(tmp845.addEventListener('change', function() {
    renderCond77();
  }));
  
  callback(root1110); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1121 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp823 = mobl.ref(result__);
  
  var nodes879 = $("<span>");
  root1121.append(nodes879);
  subs__.addSub((ui.header)(tmp823, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1122 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp822 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp821 = mobl.ref(result__);
    
    var nodes880 = $("<span>");
    root1122.append(nodes880);
    subs__.addSub((ui.backButton)(tmp821, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp822, function(_, callback) {
      var root1123 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1123); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes880;
      nodes880 = node.contents();
      oldNodes.replaceWith(nodes880);
    }));
    callback(root1122); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes879;
    nodes879 = node.contents();
    oldNodes.replaceWith(nodes879);
  }));
  var nodes881 = $("<span>");
  root1121.append(nodes881);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl134();
  }));
  
  function renderControl134() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1124 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1124); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes881;
      nodes881 = node.contents();
      oldNodes.replaceWith(nodes881);
    }));
  }
  renderControl134();
  callback(root1121); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1125 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes882 = $("<span>");
  root1125.append(nodes882);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1126 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node326 = mobl.loadingSpan();
    root1126.append(node326);
    var list55;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList55 = function() {
      var subs__ = listSubs__;
      list55 = coll.get();
      list55.list(function(results55) {
        node326.empty();
        for(var i226 = 0; i226 < results55.length; i226++) {
          (function() {
            var iternode55 = $("<span>");
            node326.append(iternode55);
            var it;
            it = mobl.ref(mobl.ref(results55), i226);
            var result__ = it.get() == selected.get();
            var tmp828 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp828.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp828.set(it.get() == selected.get());
            }));
            
            
            var node327 = $("<span>");
            iternode55.append(node327);
            var condSubs80 = new mobl.CompSubscription();
            subs__.addSub(condSubs80);
            var oldValue80;
            var renderCond80 = function() {
              var value296 = tmp828.get();
              if(oldValue80 === value296) return;
              oldValue80 = value296;
              var subs__ = condSubs80;
              subs__.unsubscribe();
              node327.empty();
              if(value296) {
                var nodes883 = $("<span>");
                node327.append(nodes883);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1127 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes884 = $("<span>");
                  root1127.append(nodes884);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl135();
                  }));
                  
                  function renderControl135() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1128 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1128); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes884;
                      nodes884 = node.contents();
                      oldNodes.replaceWith(nodes884);
                    }));
                  }
                  renderControl135();
                  callback(root1127); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes883;
                  nodes883 = node.contents();
                  oldNodes.replaceWith(nodes883);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp827 = mobl.ref(result__);
                
                var nodes885 = $("<span>");
                node327.append(nodes885);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp827, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1129 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes886 = $("<span>");
                  root1129.append(nodes886);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl136();
                  }));
                  
                  function renderControl136() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1130 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1130); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes886;
                      nodes886 = node.contents();
                      oldNodes.replaceWith(nodes886);
                    }));
                  }
                  renderControl136();
                  callback(root1129); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes885;
                  nodes885 = node.contents();
                  oldNodes.replaceWith(nodes885);
                }));
                
                
              }
            };
            renderCond80();
            subs__.addSub(tmp828.addEventListener('change', function() {
              renderCond80();
            }));
            
            
            var oldNodes = iternode55;
            iternode55 = iternode55.contents();
            oldNodes.replaceWith(iternode55);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list55.addEventListener('change', function() { listSubs__.unsubscribe(); renderList55(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList55(true); }));
      });
    };
    renderList55();
    
    callback(root1126); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes882;
    nodes882 = node.contents();
    oldNodes.replaceWith(nodes882);
  }));
  callback(root1125); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1131 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp863 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp829 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp829.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp829.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp829.set(coll.get().limit(n.get()));
    }));
    
    
    var node328 = mobl.loadingSpan();
    root1131.append(node328);
    var list56;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList56 = function() {
      var subs__ = listSubs__;
      list56 = tmp829.get();
      list56.list(function(results56) {
        node328.empty();
        for(var i227 = 0; i227 < results56.length; i227++) {
          (function() {
            var iternode56 = $("<span>");
            node328.append(iternode56);
            var it;
            it = mobl.ref(mobl.ref(results56), i227);
            var nodes887 = $("<span>");
            iternode56.append(nodes887);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl137();
            }));
            
            function renderControl137() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1132 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1132); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes887;
                nodes887 = node.contents();
                oldNodes.replaceWith(nodes887);
              }));
            }
            renderControl137();
            
            var oldNodes = iternode56;
            iternode56 = iternode56.contents();
            oldNodes.replaceWith(iternode56);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list56.addEventListener('change', function() { listSubs__.unsubscribe(); renderList56(true); }));
        subs__.addSub(tmp829.addEventListener('change', function() { listSubs__.unsubscribe(); renderList56(true); }));
      });
    };
    renderList56();
    
    var result__ = n.get() < total.get();
    var tmp831 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp831.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp831.set(n.get() < total.get());
    }));
    
    
    var node329 = $("<span>");
    root1131.append(node329);
    var condSubs81 = new mobl.CompSubscription();
    subs__.addSub(condSubs81);
    var oldValue81;
    var renderCond81 = function() {
      var value297 = tmp831.get();
      if(oldValue81 === value297) return;
      oldValue81 = value297;
      var subs__ = condSubs81;
      subs__.unsubscribe();
      node329.empty();
      if(value297) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp830 = mobl.ref(result__);
        
        var nodes888 = $("<span>");
        node329.append(nodes888);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp830, mobl.ref(null), function(_, callback) {
          var root1133 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes889 = $("<span>");
          root1133.append(nodes889);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1134 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1134); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes889;
            nodes889 = node.contents();
            oldNodes.replaceWith(nodes889);
          }));
          callback(root1133); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes888;
          nodes888 = node.contents();
          oldNodes.replaceWith(nodes888);
        }));
        
        
      } else {
        
      }
    };
    renderCond81();
    subs__.addSub(tmp831.addEventListener('change', function() {
      renderCond81();
    }));
    
    callback(root1131); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1135 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes890 = $("<span>");
  root1135.append(nodes890);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1136 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node330 = mobl.loadingSpan();
    root1136.append(node330);
    var list57;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList57 = function() {
      var subs__ = listSubs__;
      list57 = items.get();
      list57.list(function(results57) {
        node330.empty();
        for(var i228 = 0; i228 < results57.length; i228++) {
          (function() {
            var iternode57 = $("<span>");
            node330.append(iternode57);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results57), i228), "_1");it = mobl.ref(mobl.ref(mobl.ref(results57), i228), "_2");
            var nodes891 = $("<span>");
            iternode57.append(nodes891);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1137 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes892 = $("<span>");
              root1137.append(nodes892);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1138 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1138); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes892;
                nodes892 = node.contents();
                oldNodes.replaceWith(nodes892);
              }));
              callback(root1137); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes891;
              nodes891 = node.contents();
              oldNodes.replaceWith(nodes891);
            }));
            
            var oldNodes = iternode57;
            iternode57 = iternode57.contents();
            oldNodes.replaceWith(iternode57);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list57.addEventListener('change', function() { listSubs__.unsubscribe(); renderList57(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList57(true); }));
      });
    };
    renderList57();
    
    callback(root1136); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes890;
    nodes890 = node.contents();
    oldNodes.replaceWith(nodes890);
  }));
  callback(root1135); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1139 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll358) {
    coll358 = coll358.reverse();
    function processOne34() {
      var it;
      it = coll358.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll358.length > 0) processOne34(); else rest34();
      
    }
    function rest34() {
      var nodes893 = $("<span>");
      root1139.append(nodes893);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1140 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp832 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp833 = mobl.ref(result__);
        
        var nodes894 = $("<span>");
        root1140.append(nodes894);
        subs__.addSub((ui.backButton)(tmp833, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp832, function(_, callback) {
          var root1141 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1141); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes894;
          nodes894 = node.contents();
          oldNodes.replaceWith(nodes894);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll357) {
                           coll357 = coll357.reverse();
                           function processOne33() {
                             var checked;var it;
                             var tmp865 = coll357.pop();
                             checked = tmp865._1;it = tmp865._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll357.length > 0) processOne33(); else rest33();
                               
                             } else {
                               {
                                 
                                 if(coll357.length > 0) processOne33(); else rest33();
                                 
                               }
                             }
                           }
                           function rest33() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll357.length > 0) processOne33(); else rest33();
                         });
                         
                       };
        var tmp834 = mobl.ref(result__);
        
        var nodes895 = $("<span>");
        root1140.append(nodes895);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp834, function(_, callback) {
          var root1142 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1142); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes895;
          nodes895 = node.contents();
          oldNodes.replaceWith(nodes895);
        }));
        callback(root1140); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes893;
        nodes893 = node.contents();
        oldNodes.replaceWith(nodes893);
      }));
      var nodes896 = $("<span>");
      root1139.append(nodes896);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1143 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1143); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes896;
        nodes896 = node.contents();
        oldNodes.replaceWith(nodes896);
      }));
      callback(root1139); return subs__;
      
      
    }
    if(coll358.length > 0) processOne34(); else rest34();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1144 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes897 = $("<span>");
  root1144.append(nodes897);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1145 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1145); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes897;
    nodes897 = node.contents();
    oldNodes.replaceWith(nodes897);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp835 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp835.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp835.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp835.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp835.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp835.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes898 = $("<span>");
  root1144.append(nodes898);
  subs__.addSub((ui.masterDetail)(tmp835, masterItem, detailItem, function(_, callback) {
    var root1146 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1146); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes898;
    nodes898 = node.contents();
    oldNodes.replaceWith(nodes898);
  }));
  callback(root1144); return subs__;
  
  
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
  var root1147 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes899 = $("<span>");
  root1147.append(nodes899);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1148 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node331 = mobl.loadingSpan();
    root1148.append(node331);
    var list58;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList58 = function() {
      var subs__ = listSubs__;
      list58 = sections.get();
      list58.list(function(results58) {
        node331.empty();
        for(var i229 = 0; i229 < results58.length; i229++) {
          (function() {
            var iternode58 = $("<span>");
            node331.append(iternode58);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results58), i229), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results58), i229), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp837 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp837.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp837.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp837.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp837.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp836 = mobl.ref(result__);
            
            var nodes900 = $("<span>");
            iternode58.append(nodes900);
            subs__.addSub((mobl.span)(tmp837, mobl.ref(null), tmp836, mobl.ref(null), function(_, callback) {
              var root1149 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes901 = $("<span>");
              root1149.append(nodes901);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1150 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1150); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes901;
                nodes901 = node.contents();
                oldNodes.replaceWith(nodes901);
              }));
              callback(root1149); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes900;
              nodes900 = node.contents();
              oldNodes.replaceWith(nodes900);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp838 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp838.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp838.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp838.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp838.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes902 = $("<span>");
            iternode58.append(nodes902);
            subs__.addSub((mobl.block)(tmp838, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1151 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes903 = $("<span>");
              root1151.append(nodes903);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl138();
              }));
              
              function renderControl138() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1152 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1152); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes903;
                  nodes903 = node.contents();
                  oldNodes.replaceWith(nodes903);
                }));
              }
              renderControl138();
              callback(root1151); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes902;
              nodes902 = node.contents();
              oldNodes.replaceWith(nodes902);
            }));
            
            var oldNodes = iternode58;
            iternode58 = iternode58.contents();
            oldNodes.replaceWith(iternode58);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list58.addEventListener('change', function() { listSubs__.unsubscribe(); renderList58(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList58(true); }));
      });
    };
    renderList58();
    
    callback(root1148); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes899;
    nodes899 = node.contents();
    oldNodes.replaceWith(nodes899);
  }));
  callback(root1147); return subs__;
  
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
  var root1153 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node332 = $("<table>");
  
  var ref354 = style;
  if(ref354.get() !== null) {
    node332.attr('class', ref354.get());
    subs__.addSub(ref354.addEventListener('change', function(_, ref, val) {
      node332.attr('class', val);
    }));
    
  }
  subs__.addSub(ref354.rebind());
  
  var nodes904 = $("<span>");
  node332.append(nodes904);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl139();
  }));
  
  function renderControl139() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1154 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1154); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes904;
      nodes904 = node.contents();
      oldNodes.replaceWith(nodes904);
    }));
  }
  renderControl139();
  root1153.append(node332);
  callback(root1153); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1155 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node333 = $("<tr>");
  
  var ref355 = style;
  if(ref355.get() !== null) {
    node333.attr('class', ref355.get());
    subs__.addSub(ref355.addEventListener('change', function(_, ref, val) {
      node333.attr('class', val);
    }));
    
  }
  subs__.addSub(ref355.rebind());
  
  var nodes905 = $("<span>");
  node333.append(nodes905);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl140();
  }));
  
  function renderControl140() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1156); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes905;
      nodes905 = node.contents();
      oldNodes.replaceWith(nodes905);
    }));
  }
  renderControl140();
  root1155.append(node333);
  callback(root1155); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1157 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node334 = $("<td>");
  
  var ref356 = width;
  if(ref356.get() !== null) {
    node334.attr('width', ref356.get());
    subs__.addSub(ref356.addEventListener('change', function(_, ref, val) {
      node334.attr('width', val);
    }));
    
  }
  subs__.addSub(ref356.rebind());
  
  var ref357 = style;
  if(ref357.get() !== null) {
    node334.attr('class', ref357.get());
    subs__.addSub(ref357.addEventListener('change', function(_, ref, val) {
      node334.attr('class', val);
    }));
    
  }
  subs__.addSub(ref357.rebind());
  
  var nodes906 = $("<span>");
  node334.append(nodes906);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl141();
  }));
  
  function renderControl141() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1158); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes906;
      nodes906 = node.contents();
      oldNodes.replaceWith(nodes906);
    }));
  }
  renderControl141();
  root1157.append(node334);
  callback(root1157); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1159 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node335 = $("<td>");
  
  var ref358 = width;
  if(ref358.get() !== null) {
    node335.attr('width', ref358.get());
    subs__.addSub(ref358.addEventListener('change', function(_, ref, val) {
      node335.attr('width', val);
    }));
    
  }
  subs__.addSub(ref358.rebind());
  
  var ref359 = style;
  if(ref359.get() !== null) {
    node335.attr('class', ref359.get());
    subs__.addSub(ref359.addEventListener('change', function(_, ref, val) {
      node335.attr('class', val);
    }));
    
  }
  subs__.addSub(ref359.rebind());
  
  var nodes907 = $("<span>");
  node335.append(nodes907);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl142();
  }));
  
  function renderControl142() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1160); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes907;
      nodes907 = node.contents();
      oldNodes.replaceWith(nodes907);
    }));
  }
  renderControl142();
  root1159.append(node335);
  callback(root1159); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1161 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node336 = $("<td>");
  
  var ref360 = width;
  if(ref360.get() !== null) {
    node336.attr('width', ref360.get());
    subs__.addSub(ref360.addEventListener('change', function(_, ref, val) {
      node336.attr('width', val);
    }));
    
  }
  subs__.addSub(ref360.rebind());
  
  var ref361 = style;
  if(ref361.get() !== null) {
    node336.attr('class', ref361.get());
    subs__.addSub(ref361.addEventListener('change', function(_, ref, val) {
      node336.attr('class', val);
    }));
    
  }
  subs__.addSub(ref361.rebind());
  
  
  var node337 = $("<strong>");
  
  var nodes908 = $("<span>");
  node337.append(nodes908);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl143();
  }));
  
  function renderControl143() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1162); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes908;
      nodes908 = node.contents();
      oldNodes.replaceWith(nodes908);
    }));
  }
  renderControl143();
  node336.append(node337);
  root1161.append(node336);
  callback(root1161); return subs__;
  
  
  
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
  items.list(function(coll359) {
    coll359 = coll359.reverse();
    function processOne35() {
      var item;
      item = coll359.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll359.length > 0) processOne35(); else rest35();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll359.length > 0) processOne35(); else rest35();
          
        }
      }
    }
    function rest35() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll359.length > 0) processOne35(); else rest35();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1163 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes909 = $("<span>");
  root1163.append(nodes909);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl144();
  }));
  
  function renderControl144() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes909;
      nodes909 = node.contents();
      oldNodes.replaceWith(nodes909);
    }));
  }
  renderControl144();
  callback(root1163); return subs__;
  
  return subs__;
};

ui.mMasterDetail = mobl.conditionalDef(ui.mMasterDetail, function() { return mobl.window.get().innerWidth > 500; }, function(items, masterItem, detail, elements, callback) {
  var root1165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp867 = result__;
    var current = mobl.ref(result__);
    
    var node338 = $("<div>");
    node338.attr('width', "100%");
    
    
    var node339 = $("<div>");
    node339.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes911 = $("<span>");
    node339.append(nodes911);
    subs__.addSub((ui.group)(function(_, callback) {
      var root1167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node342 = mobl.loadingSpan();
      root1167.append(node342);
      var list59;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList59 = function() {
        var subs__ = listSubs__;
        list59 = items.get();
        list59.list(function(results59) {
          node342.empty();
          for(var i230 = 0; i230 < results59.length; i230++) {
            (function() {
              var iternode59 = $("<span>");
              node342.append(iternode59);
              var it;
              it = mobl.ref(mobl.ref(results59), i230);
              var result__ = it.get() == current.get();
              var tmp842 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp842.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp842.set(it.get() == current.get());
              }));
              
              
              var node343 = $("<span>");
              iternode59.append(node343);
              var condSubs83 = new mobl.CompSubscription();
              subs__.addSub(condSubs83);
              var oldValue83;
              var renderCond83 = function() {
                var value299 = tmp842.get();
                if(oldValue83 === value299) return;
                oldValue83 = value299;
                var subs__ = condSubs83;
                subs__.unsubscribe();
                node343.empty();
                if(value299) {
                  var nodes912 = $("<span>");
                  node343.append(nodes912);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root1168 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp873 = result__;
                      var tmp839 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp871 = result__;
                          var result__ = tmp871;
                          tmp839.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp872 = result__;
                          var result__ = tmp872;
                          tmp839.set(result__);
                          
                        });
                      }));
                      
                      var nodes913 = $("<span>");
                      root1168.append(nodes913);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl146();
                      }));
                      
                      function renderControl146() {
                        subs__.addSub((masterItem.get())(it, tmp839, function(elements, callback) {
                          var root1169 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1169); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes913;
                          nodes913 = node.contents();
                          oldNodes.replaceWith(nodes913);
                        }));
                      }
                      renderControl146();
                      callback(root1168); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes912;
                    nodes912 = node.contents();
                    oldNodes.replaceWith(nodes912);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = true;
                                   ui.visible.set(result__);
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp877 = result__;
                                     var result__ = plot.renderPlot("corePlotArea", current.get());
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 };
                  var tmp841 = mobl.ref(result__);
                  
                  var nodes914 = $("<span>");
                  node343.append(nodes914);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp841, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root1170 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp876 = result__;
                      var tmp840 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp874 = result__;
                          var result__ = tmp874;
                          tmp840.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp875 = result__;
                          var result__ = tmp875;
                          tmp840.set(result__);
                          
                        });
                      }));
                      
                      var nodes915 = $("<span>");
                      root1170.append(nodes915);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl147();
                      }));
                      
                      function renderControl147() {
                        subs__.addSub((masterItem.get())(it, tmp840, function(elements, callback) {
                          var root1171 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1171); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes915;
                          nodes915 = node.contents();
                          oldNodes.replaceWith(nodes915);
                        }));
                      }
                      renderControl147();
                      callback(root1170); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes914;
                    nodes914 = node.contents();
                    oldNodes.replaceWith(nodes914);
                  }));
                  
                  
                }
              };
              renderCond83();
              subs__.addSub(tmp842.addEventListener('change', function() {
                renderCond83();
              }));
              
              
              var oldNodes = iternode59;
              iternode59 = iternode59.contents();
              oldNodes.replaceWith(iternode59);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list59.addEventListener('change', function() { listSubs__.unsubscribe(); renderList59(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList59(true); }));
        });
      };
      renderList59();
      
      callback(root1167); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes911;
      nodes911 = node.contents();
      oldNodes.replaceWith(nodes911);
    }));
    node338.append(node339);
    
    var node340 = $("<div>");
    node340.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
    
    var result__ = current.get() && ui.visible.get();
    var tmp844 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp844.set(current.get() && ui.visible.get());
    }));
    subs__.addSub(ui.visible.addEventListener('change', function() {
      tmp844.set(current.get() && ui.visible.get());
    }));
    
    
    var node341 = $("<span>");
    node340.append(node341);
    var condSubs82 = new mobl.CompSubscription();
    subs__.addSub(condSubs82);
    var oldValue82;
    var renderCond82 = function() {
      var value298 = tmp844.get();
      if(oldValue82 === value298) return;
      oldValue82 = value298;
      var subs__ = condSubs82;
      subs__.unsubscribe();
      node341.empty();
      if(value298) {
        ui.indexOf(current.get(), items.get(), function(result__) {
          var tmp870 = result__;
          var tmp843 = mobl.ref(result__);
          subs__.addSub(current.addEventListener('change', function() {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp868 = result__;
              var result__ = tmp868;
              tmp843.set(result__);
              
            });
          }));
          subs__.addSub(items.addEventListener('change', function() {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp869 = result__;
              var result__ = tmp869;
              tmp843.set(result__);
              
            });
          }));
          
          var nodes910 = $("<span>");
          node341.append(nodes910);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl145();
          }));
          
          function renderControl145() {
            subs__.addSub((detail.get())(current, tmp843, function(elements, callback) {
              var root1166 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1166); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes910;
              nodes910 = node.contents();
              oldNodes.replaceWith(nodes910);
            }));
          }
          renderControl145();
          
          
        });
      } else {
        
      }
    };
    renderCond82();
    subs__.addSub(tmp844.addEventListener('change', function() {
      renderCond82();
    }));
    
    node338.append(node340);
    root1165.append(node338);
    callback(root1165); return subs__;
    
    
    
    
    
  });
  return subs__;
});

ui.introduction = function(elements, callback) {
  var root1172 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes916 = $("<span>");
  root1172.append(nodes916);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1173 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes917 = $("<span>");
    root1173.append(nodes917);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1174 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1174); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes917;
      nodes917 = node.contents();
      oldNodes.replaceWith(nodes917);
    }));
    callback(root1173); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes916;
    nodes916 = node.contents();
    oldNodes.replaceWith(nodes916);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes918 = $("<span>");
  root1172.append(nodes918);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root1175 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1175); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes918;
    nodes918 = node.contents();
    oldNodes.replaceWith(nodes918);
  }));
  callback(root1172); return subs__;
  
  
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
