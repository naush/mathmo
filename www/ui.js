mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1071 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node408 = $("<span>");
  root1071.append(node408);
  var condSubs99 = new mobl.CompSubscription();
  subs__.addSub(condSubs99);
  var oldValue99;
  var renderCond99 = function() {
    var value823 = value.get();
    if(oldValue99 === value823) return;
    oldValue99 = value823;
    var subs__ = condSubs99;
    subs__.unsubscribe();
    node408.empty();
    if(value823) {
      var nodes811 = $("<span>");
      node408.append(nodes811);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl165();
      }));
      
      function renderControl165() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1072 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1072); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes811;
          nodes811 = node.contents();
          oldNodes.replaceWith(nodes811);
        }));
      }
      renderControl165();
      
      
    } else {
      var nodes812 = $("<span>");
      node408.append(nodes812);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1073 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes813 = $("<span>");
        root1073.append(nodes813);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1074 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1074); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes813;
          nodes813 = node.contents();
          oldNodes.replaceWith(nodes813);
        }));
        var nodes814 = $("<span>");
        root1073.append(nodes814);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1075 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1075); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes814;
          nodes814 = node.contents();
          oldNodes.replaceWith(nodes814);
        }));
        callback(root1073); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes812;
        nodes812 = node.contents();
        oldNodes.replaceWith(nodes812);
      }));
      
      
    }
  };
  renderCond99();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond99();
  }));
  
  callback(root1071); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1076 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node409 = $("<div>");
  
  var ref404 = mobl.ref(ui.headerStyle);
  if(ref404.get() !== null) {
    node409.attr('class', ref404.get());
    subs__.addSub(ref404.addEventListener('change', function(_, ref, val) {
      node409.attr('class', val);
    }));
    
  }
  subs__.addSub(ref404.rebind());
  
  var val205 = onclick.get();
  if(val205 !== null) {
    subs__.addSub(mobl.domBind(node409, 'tap', val205));
  }
  
  var ref405 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref405.get() !== null) {
    node409.attr('style', ref405.get());
    subs__.addSub(ref405.addEventListener('change', function(_, ref, val) {
      node409.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node409.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref405.rebind());
  
  
  var node412 = $("<div>");
  
  var ref403 = mobl.ref(ui.headerContainerStyle);
  if(ref403.get() !== null) {
    node412.attr('class', ref403.get());
    subs__.addSub(ref403.addEventListener('change', function(_, ref, val) {
      node412.attr('class', val);
    }));
    
  }
  subs__.addSub(ref403.rebind());
  
  
  var node413 = $("<div>");
  
  var ref401 = text;
  node413.text(""+ref401.get());
  var ignore79 = false;
  subs__.addSub(ref401.addEventListener('change', function(_, ref, val) {
    if(ignore79) return;
    node413.text(""+val);
  }));
  subs__.addSub(ref401.rebind());
  
  
  var ref402 = mobl.ref(ui.headerTextStyle);
  if(ref402.get() !== null) {
    node413.attr('class', ref402.get());
    subs__.addSub(ref402.addEventListener('change', function(_, ref, val) {
      node413.attr('class', val);
    }));
    
  }
  subs__.addSub(ref402.rebind());
  
  node412.append(node413);
  node409.append(node412);
  var nodes815 = $("<span>");
  node409.append(nodes815);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl166();
  }));
  
  function renderControl166() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1077 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1077); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes815;
      nodes815 = node.contents();
      oldNodes.replaceWith(nodes815);
    }));
  }
  renderControl166();
  root1076.append(node409);
  
  var node410 = $("<span>");
  root1076.append(node410);
  var condSubs100 = new mobl.CompSubscription();
  subs__.addSub(condSubs100);
  var oldValue100;
  var renderCond100 = function() {
    var value824 = fixedPosition.get();
    if(oldValue100 === value824) return;
    oldValue100 = value824;
    var subs__ = condSubs100;
    subs__.unsubscribe();
    node410.empty();
    if(value824) {
      
      var node411 = $("<div>");
      node411.attr('id', "hello");
      node411.attr('style', "height: 2.9em;");
      
      node410.append(node411);
      
      
    } else {
      
    }
  };
  renderCond100();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond100();
  }));
  
  callback(root1076); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1078 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref406 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref406.get() !== null) {
    sp.attr('class', ref406.get());
    subs__.addSub(ref406.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref406.rebind());
  
  var val206 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val206 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val206));
  }
  
  var val207 = function(event, callback) {
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
  if(val207 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val207));
  }
  
  var val208 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after63(result__) {
                    var tmp807 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after63);if(result__ !== undefined) after63(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val208 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val208));
  }
  
  var val209 = function(event, callback) {
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
  if(val209 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val209));
  }
  
  var ref407 = text;
  sp.text(""+ref407.get());
  var ignore80 = false;
  subs__.addSub(ref407.addEventListener('change', function(_, ref, val) {
    if(ignore80) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref407.rebind());
  
  
  root1078.append(sp);
  callback(root1078); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1079 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes816 = $("<span>");
  root1079.append(nodes816);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1080 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1080); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes816;
    nodes816 = node.contents();
    oldNodes.replaceWith(nodes816);
  }));
  callback(root1079); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1081 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes817 = $("<span>");
  root1081.append(nodes817);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1082 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1082); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes817;
    nodes817 = node.contents();
    oldNodes.replaceWith(nodes817);
  }));
  callback(root1081); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1083 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node414 = $("<ul>");
  
  var ref408 = mobl.ref(ui.groupStyle);
  if(ref408.get() !== null) {
    node414.attr('class', ref408.get());
    subs__.addSub(ref408.addEventListener('change', function(_, ref, val) {
      node414.attr('class', val);
    }));
    
  }
  subs__.addSub(ref408.rebind());
  
  var nodes818 = $("<span>");
  node414.append(nodes818);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl167();
  }));
  
  function renderControl167() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1084); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes818;
      nodes818 = node.contents();
      oldNodes.replaceWith(nodes818);
    }));
  }
  renderControl167();
  root1083.append(node414);
  callback(root1083); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1085 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node415 = $("<img>");
  
  var ref409 = url;
  if(ref409.get() !== null) {
    node415.attr('src', ref409.get());
    subs__.addSub(ref409.addEventListener('change', function(_, ref, val) {
      node415.attr('src', val);
    }));
    
  }
  subs__.addSub(ref409.rebind());
  
  var ref410 = width;
  if(ref410.get() !== null) {
    node415.attr('width', ref410.get());
    subs__.addSub(ref410.addEventListener('change', function(_, ref, val) {
      node415.attr('width', val);
    }));
    
  }
  subs__.addSub(ref410.rebind());
  
  var ref411 = height;
  if(ref411.get() !== null) {
    node415.attr('height', ref411.get());
    subs__.addSub(ref411.addEventListener('change', function(_, ref, val) {
      node415.attr('height', val);
    }));
    
  }
  subs__.addSub(ref411.rebind());
  
  var ref412 = style;
  if(ref412.get() !== null) {
    node415.attr('class', ref412.get());
    subs__.addSub(ref412.addEventListener('change', function(_, ref, val) {
      node415.attr('class', val);
    }));
    
  }
  subs__.addSub(ref412.rebind());
  
  var val210 = onclick.get();
  if(val210 !== null) {
    subs__.addSub(mobl.domBind(node415, 'tap', val210));
  }
  
  var ref413 = valign;
  if(ref413.get() !== null) {
    node415.attr('valign', ref413.get());
    subs__.addSub(ref413.addEventListener('change', function(_, ref, val) {
      node415.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref413.rebind());
  
  var ref414 = align;
  if(ref414.get() !== null) {
    node415.attr('align', ref414.get());
    subs__.addSub(ref414.addEventListener('change', function(_, ref, val) {
      node415.attr('align', val);
    }));
    
  }
  subs__.addSub(ref414.rebind());
  
  root1085.append(node415);
  callback(root1085); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1086 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref415 = mobl.ref(ui.itemStyle);
  if(ref415.get() !== null) {
    el.attr('class', ref415.get());
    subs__.addSub(ref415.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref415.rebind());
  
  var ref416 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref416.get() !== null) {
    el.attr('class', ref416.get());
    subs__.addSub(ref416.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref416.rebind());
  
  var val211 = onswipe.get();
  if(val211 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val211));
  }
  
  var val212 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp808 = result__;
                                           function after64(result__) {
                                             var tmp809 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after64);if(result__ !== undefined) after64(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp810 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val212 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val212));
  }
  
  var nodes819 = $("<span>");
  el.append(nodes819);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl168();
  }));
  
  function renderControl168() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1087 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1087); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes819;
      nodes819 = node.contents();
      oldNodes.replaceWith(nodes819);
    }));
  }
  renderControl168();
  root1086.append(el);
  callback(root1086); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1088 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node416 = $("<input>");
  node416.attr('type', "checkbox");
  
  var ref418 = b;
  node416.attr('checked', !!ref418.get());
  subs__.addSub(ref418.addEventListener('change', function(_, ref, val) {
    if(ref === ref418) node416.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node416, 'change', function() {
    b.set(!!node416.attr('checked'));
  }));
  
  var val214 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val214 !== null) {
    subs__.addSub(mobl.domBind(node416, 'tap', val214));
  }
  
  var val215 = onchange.get();
  if(val215 !== null) {
    subs__.addSub(mobl.domBind(node416, 'change', val215));
  }
  
  root1088.append(node416);
  
  root1088.append(" ");
  
  var node417 = $("<span>");
  
  var ref417 = label;
  node417.text(""+ref417.get());
  var ignore81 = false;
  subs__.addSub(ref417.addEventListener('change', function(_, ref, val) {
    if(ignore81) return;
    node417.text(""+val);
  }));
  subs__.addSub(ref417.rebind());
  
  
  var val213 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after65(result__) {
                    var tmp811 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after65);if(result__ !== undefined) after65(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val213 !== null) {
    subs__.addSub(mobl.domBind(node417, 'tap', val213));
  }
  
  root1088.append(node417);
  callback(root1088); return subs__;
  
  
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
  var root1089 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node418 = $("<span>");
  root1089.append(node418);
  var condSubs101 = new mobl.CompSubscription();
  subs__.addSub(condSubs101);
  var oldValue101;
  var renderCond101 = function() {
    var value825 = label.get();
    if(oldValue101 === value825) return;
    oldValue101 = value825;
    var subs__ = condSubs101;
    subs__.unsubscribe();
    node418.empty();
    if(value825) {
      var nodes820 = $("<span>");
      node418.append(nodes820);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1090 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1090); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes820;
        nodes820 = node.contents();
        oldNodes.replaceWith(nodes820);
      }));
      
      
    } else {
      
    }
  };
  renderCond101();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond101();
  }));
  
  
  var node419 = $("<span>");
  root1089.append(node419);
  var condSubs102 = new mobl.CompSubscription();
  subs__.addSub(condSubs102);
  var oldValue102;
  var renderCond102 = function() {
    var value826 = validator.get();
    if(oldValue102 === value826) return;
    oldValue102 = value826;
    var subs__ = condSubs102;
    subs__.unsubscribe();
    node419.empty();
    if(value826) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after69(result__) {
        var tmp812 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp813 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node420 = $("<input>");
        
        var ref419 = inputType;
        if(ref419.get() !== null) {
          node420.attr('type', ref419.get());
          subs__.addSub(ref419.addEventListener('change', function(_, ref, val) {
            node420.attr('type', val);
          }));
          
        }
        subs__.addSub(ref419.rebind());
        
        var ref420 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref420.get() !== null) {
          node420.attr('class', ref420.get());
          subs__.addSub(ref420.addEventListener('change', function(_, ref, val) {
            node420.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node420.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node420.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node420.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref420.rebind());
        
        var ref421 = placeholder;
        if(ref421.get() !== null) {
          node420.attr('placeholder', ref421.get());
          subs__.addSub(ref421.addEventListener('change', function(_, ref, val) {
            node420.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref421.rebind());
        
        var ref422 = temp;
        node420.val(""+ref422.get());
        var ignore82 = false;
        subs__.addSub(ref422.addEventListener('change', function(_, ref, val) {
          if(ignore82) return;
          node420.val(""+val);
        }));
        subs__.addSub(ref422.rebind());
        
        subs__.addSub(mobl.domBind(node420, 'keyup change', function() {
          ignore82 = true;
          temp.set(mobl.stringTomobl__String(node420.val()));
          ignore82 = false;
        }));
        
        
        var val216 = onchange.get();
        if(val216 !== null) {
          subs__.addSub(mobl.domBind(node420, 'change', val216));
        }
        
        var val217 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after66(result__) {
                          var tmp814 = result__;
                          function after67(result__) {
                            var tmp815 = result__;
                            var result__ = tmp815;
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
                          var result__ = validator.get()(temp.get(), after67);if(result__ !== undefined) after67(result__);
                        }
                        var result__ = onkeyup.get()(event, after66);if(result__ !== undefined) after66(result__);
                      } else {
                        {
                          function after68(result__) {
                            var tmp815 = result__;
                            var result__ = tmp815;
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
                          var result__ = validator.get()(temp.get(), after68);if(result__ !== undefined) after68(result__);
                        }
                      }
                    };
        if(val217 !== null) {
          subs__.addSub(mobl.domBind(node420, 'keyup', val217));
        }
        
        var val218 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val218 !== null) {
          subs__.addSub(mobl.domBind(node420, 'blur', val218));
        }
        
        node419.append(node420);
        var nodes821 = $("<span>");
        node419.append(nodes821);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1091 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1091); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes821;
          nodes821 = node.contents();
          oldNodes.replaceWith(nodes821);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after69);if(result__ !== undefined) after69(result__);
    } else {
      
      var node421 = $("<input>");
      
      var ref423 = inputType;
      if(ref423.get() !== null) {
        node421.attr('type', ref423.get());
        subs__.addSub(ref423.addEventListener('change', function(_, ref, val) {
          node421.attr('type', val);
        }));
        
      }
      subs__.addSub(ref423.rebind());
      
      var ref424 = style;
      if(ref424.get() !== null) {
        node421.attr('class', ref424.get());
        subs__.addSub(ref424.addEventListener('change', function(_, ref, val) {
          node421.attr('class', val);
        }));
        
      }
      subs__.addSub(ref424.rebind());
      
      var ref425 = placeholder;
      if(ref425.get() !== null) {
        node421.attr('placeholder', ref425.get());
        subs__.addSub(ref425.addEventListener('change', function(_, ref, val) {
          node421.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref425.rebind());
      
      var ref426 = s;
      node421.val(""+ref426.get());
      var ignore83 = false;
      subs__.addSub(ref426.addEventListener('change', function(_, ref, val) {
        if(ignore83) return;
        node421.val(""+val);
      }));
      subs__.addSub(ref426.rebind());
      
      subs__.addSub(mobl.domBind(node421, 'keyup change', function() {
        ignore83 = true;
        s.set(mobl.stringTomobl__String(node421.val()));
        ignore83 = false;
      }));
      
      
      var val219 = onchange.get();
      if(val219 !== null) {
        subs__.addSub(mobl.domBind(node421, 'change', val219));
      }
      
      var val220 = onkeyup.get();
      if(val220 !== null) {
        subs__.addSub(mobl.domBind(node421, 'keyup', val220));
      }
      
      var val221 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val221 !== null) {
        subs__.addSub(mobl.domBind(node421, 'blur', val221));
      }
      
      node419.append(node421);
      
      
    }
  };
  renderCond102();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond102();
  }));
  
  callback(root1089); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1092 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes822 = $("<span>");
  root1092.append(nodes822);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1093 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1093); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes822;
    nodes822 = node.contents();
    oldNodes.replaceWith(nodes822);
  }));
  callback(root1092); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1094 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes823 = $("<span>");
  root1094.append(nodes823);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1095 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1095); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes823;
    nodes823 = node.contents();
    oldNodes.replaceWith(nodes823);
  }));
  callback(root1094); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1096 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node422 = $("<span>");
  root1096.append(node422);
  var condSubs103 = new mobl.CompSubscription();
  subs__.addSub(condSubs103);
  var oldValue103;
  var renderCond103 = function() {
    var value827 = label.get();
    if(oldValue103 === value827) return;
    oldValue103 = value827;
    var subs__ = condSubs103;
    subs__.unsubscribe();
    node422.empty();
    if(value827) {
      var nodes824 = $("<span>");
      node422.append(nodes824);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1097 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1097); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes824;
        nodes824 = node.contents();
        oldNodes.replaceWith(nodes824);
      }));
      
      
    } else {
      
    }
  };
  renderCond103();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond103();
  }));
  
  
  var node423 = $("<input>");
  node423.attr('type', "range");
  
  var ref427 = n;
  node423.val(""+ref427.get());
  var ignore84 = false;
  subs__.addSub(ref427.addEventListener('change', function(_, ref, val) {
    if(ignore84) return;
    node423.val(""+val);
  }));
  subs__.addSub(ref427.rebind());
  
  subs__.addSub(mobl.domBind(node423, 'keyup change', function() {
    ignore84 = true;
    n.set(mobl.stringTomobl__Num(node423.val()));
    ignore84 = false;
  }));
  
  
  var ref428 = min;
  if(ref428.get() !== null) {
    node423.attr('min', ref428.get());
    subs__.addSub(ref428.addEventListener('change', function(_, ref, val) {
      node423.attr('min', val);
    }));
    
  }
  subs__.addSub(ref428.rebind());
  
  var ref429 = max;
  if(ref429.get() !== null) {
    node423.attr('max', ref429.get());
    subs__.addSub(ref429.addEventListener('change', function(_, ref, val) {
      node423.attr('max', val);
    }));
    
  }
  subs__.addSub(ref429.rebind());
  
  var ref430 = step;
  if(ref430.get() !== null) {
    node423.attr('step', ref430.get());
    subs__.addSub(ref430.addEventListener('change', function(_, ref, val) {
      node423.attr('step', val);
    }));
    
  }
  subs__.addSub(ref430.rebind());
  node423.attr('style', "width: 99%;");
  
  var val222 = onchange.get();
  if(val222 !== null) {
    subs__.addSub(mobl.domBind(node423, 'change', val222));
  }
  
  var val223 = onkeyup.get();
  if(val223 !== null) {
    subs__.addSub(mobl.domBind(node423, 'keyup', val223));
  }
  
  var ref431 = placeholder;
  if(ref431.get() !== null) {
    node423.attr('placeholder', ref431.get());
    subs__.addSub(ref431.addEventListener('change', function(_, ref, val) {
      node423.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref431.rebind());
  
  root1096.append(node423);
  callback(root1096); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1098 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after70(result__) {
      var tmp816 = result__;
      var result__ = tmp816;
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
    var result__ = validator.get()(n2, after70);if(result__ !== undefined) after70(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes825 = $("<span>");
  root1098.append(nodes825);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1099 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1099); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes825;
    nodes825 = node.contents();
    oldNodes.replaceWith(nodes825);
  }));
  callback(root1098); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1100 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node424 = $("<span>");
  root1100.append(node424);
  var condSubs104 = new mobl.CompSubscription();
  subs__.addSub(condSubs104);
  var oldValue104;
  var renderCond104 = function() {
    var value828 = label.get();
    if(oldValue104 === value828) return;
    oldValue104 = value828;
    var subs__ = condSubs104;
    subs__.unsubscribe();
    node424.empty();
    if(value828) {
      
      var node425 = $("<span>");
      node425.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref435 = label;
      node425.text(""+ref435.get());
      var ignore86 = false;
      subs__.addSub(ref435.addEventListener('change', function(_, ref, val) {
        if(ignore86) return;
        node425.text(""+val);
      }));
      subs__.addSub(ref435.rebind());
      
      
      node424.append(node425);
      
      var node426 = $("<span>");
      node426.attr('style', "float: left");
      
      
      var node427 = $("<input>");
      node427.attr('type', "password");
      
      var ref432 = style;
      if(ref432.get() !== null) {
        node427.attr('class', ref432.get());
        subs__.addSub(ref432.addEventListener('change', function(_, ref, val) {
          node427.attr('class', val);
        }));
        
      }
      subs__.addSub(ref432.rebind());
      
      var ref433 = placeholder;
      if(ref433.get() !== null) {
        node427.attr('placeholder', ref433.get());
        subs__.addSub(ref433.addEventListener('change', function(_, ref, val) {
          node427.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref433.rebind());
      
      var ref434 = s;
      node427.val(""+ref434.get());
      var ignore85 = false;
      subs__.addSub(ref434.addEventListener('change', function(_, ref, val) {
        if(ignore85) return;
        node427.val(""+val);
      }));
      subs__.addSub(ref434.rebind());
      
      subs__.addSub(mobl.domBind(node427, 'keyup change', function() {
        ignore85 = true;
        s.set(mobl.stringTomobl__String(node427.val()));
        ignore85 = false;
      }));
      
      
      var val224 = onchange.get();
      if(val224 !== null) {
        subs__.addSub(mobl.domBind(node427, 'change', val224));
      }
      
      var val225 = onkeyup.get();
      if(val225 !== null) {
        subs__.addSub(mobl.domBind(node427, 'keyup', val225));
      }
      
      var val226 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val226 !== null) {
        subs__.addSub(mobl.domBind(node427, 'blur', val226));
      }
      
      node426.append(node427);
      node424.append(node426);
      
      
      
      
    } else {
      
      var node428 = $("<input>");
      node428.attr('type', "password");
      
      var ref436 = style;
      if(ref436.get() !== null) {
        node428.attr('class', ref436.get());
        subs__.addSub(ref436.addEventListener('change', function(_, ref, val) {
          node428.attr('class', val);
        }));
        
      }
      subs__.addSub(ref436.rebind());
      
      var ref437 = placeholder;
      if(ref437.get() !== null) {
        node428.attr('placeholder', ref437.get());
        subs__.addSub(ref437.addEventListener('change', function(_, ref, val) {
          node428.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref437.rebind());
      
      var ref438 = s;
      node428.val(""+ref438.get());
      var ignore87 = false;
      subs__.addSub(ref438.addEventListener('change', function(_, ref, val) {
        if(ignore87) return;
        node428.val(""+val);
      }));
      subs__.addSub(ref438.rebind());
      
      subs__.addSub(mobl.domBind(node428, 'keyup change', function() {
        ignore87 = true;
        s.set(mobl.stringTomobl__String(node428.val()));
        ignore87 = false;
      }));
      
      
      var val227 = onchange.get();
      if(val227 !== null) {
        subs__.addSub(mobl.domBind(node428, 'change', val227));
      }
      
      var val228 = onkeyup.get();
      if(val228 !== null) {
        subs__.addSub(mobl.domBind(node428, 'keyup', val228));
      }
      
      var val229 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val229 !== null) {
        subs__.addSub(mobl.domBind(node428, 'blur', val229));
      }
      
      node424.append(node428);
      
      
    }
  };
  renderCond104();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond104();
  }));
  
  callback(root1100); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1101 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref443 = style;
  if(ref443.get() !== null) {
    sel.attr('class', ref443.get());
    subs__.addSub(ref443.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref443.rebind());
  
  var val230 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after71(result__) {
                    var tmp818 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after71);if(result__ !== undefined) after71(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val230 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val230));
  }
  
  
  var node429 = mobl.loadingSpan();
  sel.append(node429);
  var list72;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList72 = function() {
    var subs__ = listSubs__;
    list72 = options.get();
    list72.list(function(results72) {
      node429.empty();
      for(var i204 = 0; i204 < results72.length; i204++) {
        (function() {
          var iternode72 = $("<span>");
          node429.append(iternode72);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results72), i204), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results72), i204), "_2");
          
          var node430 = $("<option>");
          
          var ref439 = optionDescription;
          node430.text(""+ref439.get());
          var ignore88 = false;
          subs__.addSub(ref439.addEventListener('change', function(_, ref, val) {
            if(ignore88) return;
            node430.text(""+val);
          }));
          subs__.addSub(ref439.rebind());
          
          
          var ref440 = optionStyle;
          if(ref440.get() !== null) {
            node430.attr('class', ref440.get());
            subs__.addSub(ref440.addEventListener('change', function(_, ref, val) {
              node430.attr('class', val);
            }));
            
          }
          subs__.addSub(ref440.rebind());
          
          var ref441 = optionValue;
          if(ref441.get() !== null) {
            node430.attr('value', ref441.get());
            subs__.addSub(ref441.addEventListener('change', function(_, ref, val) {
              node430.attr('value', val);
            }));
            
          }
          subs__.addSub(ref441.rebind());
          
          var ref442 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref442.get() !== null) {
            node430.attr('selected', ref442.get());
            subs__.addSub(ref442.addEventListener('change', function(_, ref, val) {
              node430.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node430.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node430.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref442.rebind());
          
          iternode72.append(node430);
          
          var oldNodes = iternode72;
          iternode72 = iternode72.contents();
          oldNodes.replaceWith(iternode72);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list72.addEventListener('change', function() { listSubs__.unsubscribe(); renderList72(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList72(true); }));
    });
  };
  renderList72();
  
  root1101.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1101); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1102 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes826 = $("<span>");
    root1102.append(nodes826);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1103 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node431 = mobl.loadingSpan();
      root1103.append(node431);
      var list73;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList73 = function() {
        var subs__ = listSubs__;
        list73 = tabs.get();
        list73.list(function(results73) {
          node431.empty();
          for(var i205 = 0; i205 < results73.length; i205++) {
            (function() {
              var iternode73 = $("<span>");
              node431.append(iternode73);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results73), i205), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results73), i205), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results73), i205), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp780 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp780.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp780.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp780.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp780.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp779 = mobl.ref(result__);
              
              var nodes827 = $("<span>");
              iternode73.append(nodes827);
              subs__.addSub((mobl.span)(tmp780, mobl.ref(null), tmp779, mobl.ref(null), function(_, callback) {
                var root1104 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes828 = $("<span>");
                root1104.append(nodes828);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1105 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1105); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes828;
                  nodes828 = node.contents();
                  oldNodes.replaceWith(nodes828);
                }));
                callback(root1104); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes827;
                nodes827 = node.contents();
                oldNodes.replaceWith(nodes827);
              }));
              
              var oldNodes = iternode73;
              iternode73 = iternode73.contents();
              oldNodes.replaceWith(iternode73);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list73.addEventListener('change', function() { listSubs__.unsubscribe(); renderList73(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList73(true); }));
        });
      };
      renderList73();
      
      callback(root1103); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes826;
      nodes826 = node.contents();
      oldNodes.replaceWith(nodes826);
    }));
    
    var node432 = mobl.loadingSpan();
    root1102.append(node432);
    var list74;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList74 = function() {
      var subs__ = listSubs__;
      list74 = tabs.get();
      list74.list(function(results74) {
        node432.empty();
        for(var i206 = 0; i206 < results74.length; i206++) {
          (function() {
            var iternode74 = $("<span>");
            node432.append(iternode74);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results74), i206), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results74), i206), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results74), i206), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp781 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp781.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp781.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp781.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp781.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes829 = $("<span>");
            iternode74.append(nodes829);
            subs__.addSub((mobl.block)(tmp781, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1106 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes830 = $("<span>");
              root1106.append(nodes830);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1107 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes831 = $("<span>");
                root1107.append(nodes831);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl169();
                }));
                
                function renderControl169() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1108 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1108); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes831;
                    nodes831 = node.contents();
                    oldNodes.replaceWith(nodes831);
                  }));
                }
                renderControl169();
                callback(root1107); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes830;
                nodes830 = node.contents();
                oldNodes.replaceWith(nodes830);
              }));
              callback(root1106); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes829;
              nodes829 = node.contents();
              oldNodes.replaceWith(nodes829);
            }));
            
            var oldNodes = iternode74;
            iternode74 = iternode74.contents();
            oldNodes.replaceWith(iternode74);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list74.addEventListener('change', function() { listSubs__.unsubscribe(); renderList74(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList74(true); }));
      });
    };
    renderList74();
    
    callback(root1102); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes826 = $("<span>");
      root1102.append(nodes826);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1103 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node431 = mobl.loadingSpan();
        root1103.append(node431);
        var list73;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList73 = function() {
          var subs__ = listSubs__;
          list73 = tabs.get();
          list73.list(function(results73) {
            node431.empty();
            for(var i205 = 0; i205 < results73.length; i205++) {
              (function() {
                var iternode73 = $("<span>");
                node431.append(iternode73);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results73), i205), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results73), i205), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results73), i205), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp780 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp780.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp780.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp780.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp780.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp779 = mobl.ref(result__);
                
                var nodes827 = $("<span>");
                iternode73.append(nodes827);
                subs__.addSub((mobl.span)(tmp780, mobl.ref(null), tmp779, mobl.ref(null), function(_, callback) {
                  var root1104 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes828 = $("<span>");
                  root1104.append(nodes828);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1105 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1105); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes828;
                    nodes828 = node.contents();
                    oldNodes.replaceWith(nodes828);
                  }));
                  callback(root1104); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes827;
                  nodes827 = node.contents();
                  oldNodes.replaceWith(nodes827);
                }));
                
                var oldNodes = iternode73;
                iternode73 = iternode73.contents();
                oldNodes.replaceWith(iternode73);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list73.addEventListener('change', function() { listSubs__.unsubscribe(); renderList73(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList73(true); }));
          });
        };
        renderList73();
        
        callback(root1103); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes826;
        nodes826 = node.contents();
        oldNodes.replaceWith(nodes826);
      }));
      
      var node432 = mobl.loadingSpan();
      root1102.append(node432);
      var list74;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList74 = function() {
        var subs__ = listSubs__;
        list74 = tabs.get();
        list74.list(function(results74) {
          node432.empty();
          for(var i206 = 0; i206 < results74.length; i206++) {
            (function() {
              var iternode74 = $("<span>");
              node432.append(iternode74);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results74), i206), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results74), i206), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results74), i206), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp781 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp781.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp781.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp781.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp781.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes829 = $("<span>");
              iternode74.append(nodes829);
              subs__.addSub((mobl.block)(tmp781, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1106 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes830 = $("<span>");
                root1106.append(nodes830);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1107 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes831 = $("<span>");
                  root1107.append(nodes831);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl169();
                  }));
                  
                  function renderControl169() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1108 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1108); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes831;
                      nodes831 = node.contents();
                      oldNodes.replaceWith(nodes831);
                    }));
                  }
                  renderControl169();
                  callback(root1107); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes830;
                  nodes830 = node.contents();
                  oldNodes.replaceWith(nodes830);
                }));
                callback(root1106); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes829;
                nodes829 = node.contents();
                oldNodes.replaceWith(nodes829);
              }));
              
              var oldNodes = iternode74;
              iternode74 = iternode74.contents();
              oldNodes.replaceWith(iternode74);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list74.addEventListener('change', function() { listSubs__.unsubscribe(); renderList74(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList74(true); }));
        });
      };
      renderList74();
      
      callback(root1102); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1109 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node433 = $("<div>");
  
  var ref447 = mobl.ref(ui.searchboxStyle);
  if(ref447.get() !== null) {
    node433.attr('class', ref447.get());
    subs__.addSub(ref447.addEventListener('change', function(_, ref, val) {
      node433.attr('class', val);
    }));
    
  }
  subs__.addSub(ref447.rebind());
  
  
  var node434 = $("<input>");
  node434.attr('type', "search");
  
  var ref444 = mobl.ref(ui.searchBoxInputStyle);
  if(ref444.get() !== null) {
    node434.attr('class', ref444.get());
    subs__.addSub(ref444.addEventListener('change', function(_, ref, val) {
      node434.attr('class', val);
    }));
    
  }
  subs__.addSub(ref444.rebind());
  
  var ref445 = placeholder;
  if(ref445.get() !== null) {
    node434.attr('placeholder', ref445.get());
    subs__.addSub(ref445.addEventListener('change', function(_, ref, val) {
      node434.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref445.rebind());
  
  var ref446 = s;
  node434.val(""+ref446.get());
  var ignore89 = false;
  subs__.addSub(ref446.addEventListener('change', function(_, ref, val) {
    if(ignore89) return;
    node434.val(""+val);
  }));
  subs__.addSub(ref446.rebind());
  
  subs__.addSub(mobl.domBind(node434, 'keyup change', function() {
    ignore89 = true;
    s.set(mobl.stringTomobl__String(node434.val()));
    ignore89 = false;
  }));
  
  
  var val231 = onsearch.get();
  if(val231 !== null) {
    subs__.addSub(mobl.domBind(node434, 'change', val231));
  }
  
  var val232 = onkeyup.get();
  if(val232 !== null) {
    subs__.addSub(mobl.domBind(node434, 'keyup', val232));
  }
  node434.attr('autocorrect', false);
  node434.attr('autocapitalize', false);
  node434.attr('autocomplete', false);
  
  node433.append(node434);
  root1109.append(node433);
  callback(root1109); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1110 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref448 = mobl.ref(ui.contextMenuStyle);
  if(ref448.get() !== null) {
    menu.attr('class', ref448.get());
    subs__.addSub(ref448.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref448.rebind());
  
  var nodes832 = $("<span>");
  menu.append(nodes832);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl170();
  }));
  
  function renderControl170() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1111 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1111); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes832;
      nodes832 = node.contents();
      oldNodes.replaceWith(nodes832);
    }));
  }
  renderControl170();
  root1110.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val233 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp821 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val233 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val233));
  }
  
  root1110.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1110); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1112 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp806 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp806.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node435 = $("<span>");
  root1112.append(node435);
  var condSubs105 = new mobl.CompSubscription();
  subs__.addSub(condSubs105);
  var oldValue105;
  var renderCond105 = function() {
    var value829 = tmp806.get();
    if(oldValue105 === value829) return;
    oldValue105 = value829;
    var subs__ = condSubs105;
    subs__.unsubscribe();
    node435.empty();
    if(value829) {
      items.get().one(function(result__) {
        var tmp822 = result__;
        var current = mobl.ref(result__);
        
        var node436 = $("<div>");
        node436.attr('width', "100%");
        
        
        var node437 = $("<div>");
        node437.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes835 = $("<span>");
        node437.append(nodes835);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1115 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node440 = mobl.loadingSpan();
          root1115.append(node440);
          var list75;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList75 = function() {
            var subs__ = listSubs__;
            list75 = items.get();
            list75.list(function(results75) {
              node440.empty();
              for(var i207 = 0; i207 < results75.length; i207++) {
                (function() {
                  var iternode75 = $("<span>");
                  node440.append(iternode75);
                  var it;
                  it = mobl.ref(mobl.ref(results75), i207);
                  var result__ = it.get() == current.get();
                  var tmp787 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp787.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp787.set(it.get() == current.get());
                  }));
                  
                  
                  var node441 = $("<span>");
                  iternode75.append(node441);
                  var condSubs107 = new mobl.CompSubscription();
                  subs__.addSub(condSubs107);
                  var oldValue107;
                  var renderCond107 = function() {
                    var value831 = tmp787.get();
                    if(oldValue107 === value831) return;
                    oldValue107 = value831;
                    var subs__ = condSubs107;
                    subs__.unsubscribe();
                    node441.empty();
                    if(value831) {
                      var nodes836 = $("<span>");
                      node441.append(nodes836);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1116 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes837 = $("<span>");
                        root1116.append(nodes837);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl172();
                        }));
                        
                        function renderControl172() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1117 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1117); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes837;
                            nodes837 = node.contents();
                            oldNodes.replaceWith(nodes837);
                          }));
                        }
                        renderControl172();
                        callback(root1116); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes836;
                        nodes836 = node.contents();
                        oldNodes.replaceWith(nodes836);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp786 = mobl.ref(result__);
                      
                      var nodes838 = $("<span>");
                      node441.append(nodes838);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp786, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1118 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes839 = $("<span>");
                        root1118.append(nodes839);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl173();
                        }));
                        
                        function renderControl173() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1119 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1119); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes839;
                            nodes839 = node.contents();
                            oldNodes.replaceWith(nodes839);
                          }));
                        }
                        renderControl173();
                        callback(root1118); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes838;
                        nodes838 = node.contents();
                        oldNodes.replaceWith(nodes838);
                      }));
                      
                      
                    }
                  };
                  renderCond107();
                  subs__.addSub(tmp787.addEventListener('change', function() {
                    renderCond107();
                  }));
                  
                  
                  var oldNodes = iternode75;
                  iternode75 = iternode75.contents();
                  oldNodes.replaceWith(iternode75);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list75.addEventListener('change', function() { listSubs__.unsubscribe(); renderList75(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList75(true); }));
            });
          };
          renderList75();
          
          callback(root1115); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes835;
          nodes835 = node.contents();
          oldNodes.replaceWith(nodes835);
        }));
        node436.append(node437);
        
        var node438 = $("<div>");
        node438.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node439 = $("<span>");
        node438.append(node439);
        var condSubs106 = new mobl.CompSubscription();
        subs__.addSub(condSubs106);
        var oldValue106;
        var renderCond106 = function() {
          var value830 = current.get();
          if(oldValue106 === value830) return;
          oldValue106 = value830;
          var subs__ = condSubs106;
          subs__.unsubscribe();
          node439.empty();
          if(value830) {
            var nodes833 = $("<span>");
            node439.append(nodes833);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl171();
            }));
            
            function renderControl171() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1113 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1113); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes833;
                nodes833 = node.contents();
                oldNodes.replaceWith(nodes833);
              }));
            }
            renderControl171();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp788 = mobl.ref(result__);
            
            var nodes834 = $("<span>");
            node439.append(nodes834);
            subs__.addSub((mobl.label)(tmp788, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1114 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1114); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes834;
              nodes834 = node.contents();
              oldNodes.replaceWith(nodes834);
            }));
            
            
          }
        };
        renderCond106();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond106();
        }));
        
        node436.append(node438);
        node435.append(node436);
        
        
        
        
        
        
      });
    } else {
      var nodes840 = $("<span>");
      node435.append(nodes840);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1120 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node442 = mobl.loadingSpan();
        root1120.append(node442);
        var list76;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList76 = function() {
          var subs__ = listSubs__;
          list76 = items.get();
          list76.list(function(results76) {
            node442.empty();
            for(var i208 = 0; i208 < results76.length; i208++) {
              (function() {
                var iternode76 = $("<span>");
                node442.append(iternode76);
                var it;
                it = mobl.ref(mobl.ref(results76), i208);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp823 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp782 = mobl.ref(result__);
                
                var nodes841 = $("<span>");
                iternode76.append(nodes841);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp782, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1121 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes842 = $("<span>");
                  root1121.append(nodes842);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl174();
                  }));
                  
                  function renderControl174() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1122 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1122); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes842;
                      nodes842 = node.contents();
                      oldNodes.replaceWith(nodes842);
                    }));
                  }
                  renderControl174();
                  callback(root1121); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes841;
                  nodes841 = node.contents();
                  oldNodes.replaceWith(nodes841);
                }));
                
                var oldNodes = iternode76;
                iternode76 = iternode76.contents();
                oldNodes.replaceWith(iternode76);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list76.addEventListener('change', function() { listSubs__.unsubscribe(); renderList76(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList76(true); }));
          });
        };
        renderList76();
        
        callback(root1120); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes840;
        nodes840 = node.contents();
        oldNodes.replaceWith(nodes840);
      }));
      
      
    }
  };
  renderCond105();
  subs__.addSub(tmp806.addEventListener('change', function() {
    renderCond105();
  }));
  
  callback(root1112); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1123 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp785 = mobl.ref(result__);
  
  var nodes843 = $("<span>");
  root1123.append(nodes843);
  subs__.addSub((ui.header)(tmp785, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1124 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp784 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp783 = mobl.ref(result__);
    
    var nodes844 = $("<span>");
    root1124.append(nodes844);
    subs__.addSub((ui.backButton)(tmp783, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp784, function(_, callback) {
      var root1125 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1125); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes844;
      nodes844 = node.contents();
      oldNodes.replaceWith(nodes844);
    }));
    callback(root1124); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes843;
    nodes843 = node.contents();
    oldNodes.replaceWith(nodes843);
  }));
  var nodes845 = $("<span>");
  root1123.append(nodes845);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl175();
  }));
  
  function renderControl175() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1126 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1126); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes845;
      nodes845 = node.contents();
      oldNodes.replaceWith(nodes845);
    }));
  }
  renderControl175();
  callback(root1123); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1127 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes846 = $("<span>");
  root1127.append(nodes846);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1128 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node443 = mobl.loadingSpan();
    root1128.append(node443);
    var list77;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList77 = function() {
      var subs__ = listSubs__;
      list77 = coll.get();
      list77.list(function(results77) {
        node443.empty();
        for(var i209 = 0; i209 < results77.length; i209++) {
          (function() {
            var iternode77 = $("<span>");
            node443.append(iternode77);
            var it;
            it = mobl.ref(mobl.ref(results77), i209);
            var result__ = it.get() == selected.get();
            var tmp790 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp790.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp790.set(it.get() == selected.get());
            }));
            
            
            var node444 = $("<span>");
            iternode77.append(node444);
            var condSubs108 = new mobl.CompSubscription();
            subs__.addSub(condSubs108);
            var oldValue108;
            var renderCond108 = function() {
              var value832 = tmp790.get();
              if(oldValue108 === value832) return;
              oldValue108 = value832;
              var subs__ = condSubs108;
              subs__.unsubscribe();
              node444.empty();
              if(value832) {
                var nodes847 = $("<span>");
                node444.append(nodes847);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1129 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes848 = $("<span>");
                  root1129.append(nodes848);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl176();
                  }));
                  
                  function renderControl176() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1130 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1130); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes848;
                      nodes848 = node.contents();
                      oldNodes.replaceWith(nodes848);
                    }));
                  }
                  renderControl176();
                  callback(root1129); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes847;
                  nodes847 = node.contents();
                  oldNodes.replaceWith(nodes847);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp789 = mobl.ref(result__);
                
                var nodes849 = $("<span>");
                node444.append(nodes849);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp789, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1131 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes850 = $("<span>");
                  root1131.append(nodes850);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl177();
                  }));
                  
                  function renderControl177() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1132 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1132); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes850;
                      nodes850 = node.contents();
                      oldNodes.replaceWith(nodes850);
                    }));
                  }
                  renderControl177();
                  callback(root1131); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes849;
                  nodes849 = node.contents();
                  oldNodes.replaceWith(nodes849);
                }));
                
                
              }
            };
            renderCond108();
            subs__.addSub(tmp790.addEventListener('change', function() {
              renderCond108();
            }));
            
            
            var oldNodes = iternode77;
            iternode77 = iternode77.contents();
            oldNodes.replaceWith(iternode77);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list77.addEventListener('change', function() { listSubs__.unsubscribe(); renderList77(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList77(true); }));
      });
    };
    renderList77();
    
    callback(root1128); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes846;
    nodes846 = node.contents();
    oldNodes.replaceWith(nodes846);
  }));
  callback(root1127); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1133 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp824 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp791 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp791.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp791.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp791.set(coll.get().limit(n.get()));
    }));
    
    
    var node445 = mobl.loadingSpan();
    root1133.append(node445);
    var list78;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList78 = function() {
      var subs__ = listSubs__;
      list78 = tmp791.get();
      list78.list(function(results78) {
        node445.empty();
        for(var i210 = 0; i210 < results78.length; i210++) {
          (function() {
            var iternode78 = $("<span>");
            node445.append(iternode78);
            var it;
            it = mobl.ref(mobl.ref(results78), i210);
            var nodes851 = $("<span>");
            iternode78.append(nodes851);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl178();
            }));
            
            function renderControl178() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1134 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1134); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes851;
                nodes851 = node.contents();
                oldNodes.replaceWith(nodes851);
              }));
            }
            renderControl178();
            
            var oldNodes = iternode78;
            iternode78 = iternode78.contents();
            oldNodes.replaceWith(iternode78);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list78.addEventListener('change', function() { listSubs__.unsubscribe(); renderList78(true); }));
        subs__.addSub(tmp791.addEventListener('change', function() { listSubs__.unsubscribe(); renderList78(true); }));
      });
    };
    renderList78();
    
    var result__ = n.get() < total.get();
    var tmp793 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp793.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp793.set(n.get() < total.get());
    }));
    
    
    var node446 = $("<span>");
    root1133.append(node446);
    var condSubs109 = new mobl.CompSubscription();
    subs__.addSub(condSubs109);
    var oldValue109;
    var renderCond109 = function() {
      var value833 = tmp793.get();
      if(oldValue109 === value833) return;
      oldValue109 = value833;
      var subs__ = condSubs109;
      subs__.unsubscribe();
      node446.empty();
      if(value833) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp792 = mobl.ref(result__);
        
        var nodes852 = $("<span>");
        node446.append(nodes852);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp792, mobl.ref(null), function(_, callback) {
          var root1135 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes853 = $("<span>");
          root1135.append(nodes853);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1136 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1136); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes853;
            nodes853 = node.contents();
            oldNodes.replaceWith(nodes853);
          }));
          callback(root1135); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes852;
          nodes852 = node.contents();
          oldNodes.replaceWith(nodes852);
        }));
        
        
      } else {
        
      }
    };
    renderCond109();
    subs__.addSub(tmp793.addEventListener('change', function() {
      renderCond109();
    }));
    
    callback(root1133); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1137 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes854 = $("<span>");
  root1137.append(nodes854);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1138 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node447 = mobl.loadingSpan();
    root1138.append(node447);
    var list79;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList79 = function() {
      var subs__ = listSubs__;
      list79 = items.get();
      list79.list(function(results79) {
        node447.empty();
        for(var i211 = 0; i211 < results79.length; i211++) {
          (function() {
            var iternode79 = $("<span>");
            node447.append(iternode79);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results79), i211), "_1");it = mobl.ref(mobl.ref(mobl.ref(results79), i211), "_2");
            var nodes855 = $("<span>");
            iternode79.append(nodes855);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1139 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes856 = $("<span>");
              root1139.append(nodes856);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1140 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1140); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes856;
                nodes856 = node.contents();
                oldNodes.replaceWith(nodes856);
              }));
              callback(root1139); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes855;
              nodes855 = node.contents();
              oldNodes.replaceWith(nodes855);
            }));
            
            var oldNodes = iternode79;
            iternode79 = iternode79.contents();
            oldNodes.replaceWith(iternode79);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list79.addEventListener('change', function() { listSubs__.unsubscribe(); renderList79(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList79(true); }));
      });
    };
    renderList79();
    
    callback(root1138); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes854;
    nodes854 = node.contents();
    oldNodes.replaceWith(nodes854);
  }));
  callback(root1137); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1141 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1124) {
    coll1124 = coll1124.reverse();
    function processOne38() {
      var it;
      it = coll1124.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1124.length > 0) processOne38(); else rest38();
      
    }
    function rest38() {
      var nodes857 = $("<span>");
      root1141.append(nodes857);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp794 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp795 = mobl.ref(result__);
        
        var nodes858 = $("<span>");
        root1142.append(nodes858);
        subs__.addSub((ui.backButton)(tmp795, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp794, function(_, callback) {
          var root1143 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1143); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes858;
          nodes858 = node.contents();
          oldNodes.replaceWith(nodes858);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1123) {
                           coll1123 = coll1123.reverse();
                           function processOne37() {
                             var checked;var it;
                             var tmp826 = coll1123.pop();
                             checked = tmp826._1;it = tmp826._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1123.length > 0) processOne37(); else rest37();
                               
                             } else {
                               {
                                 
                                 if(coll1123.length > 0) processOne37(); else rest37();
                                 
                               }
                             }
                           }
                           function rest37() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1123.length > 0) processOne37(); else rest37();
                         });
                         
                       };
        var tmp796 = mobl.ref(result__);
        
        var nodes859 = $("<span>");
        root1142.append(nodes859);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp796, function(_, callback) {
          var root1144 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1144); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes859;
          nodes859 = node.contents();
          oldNodes.replaceWith(nodes859);
        }));
        callback(root1142); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes857;
        nodes857 = node.contents();
        oldNodes.replaceWith(nodes857);
      }));
      var nodes860 = $("<span>");
      root1141.append(nodes860);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1145 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1145); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes860;
        nodes860 = node.contents();
        oldNodes.replaceWith(nodes860);
      }));
      callback(root1141); return subs__;
      
      
    }
    if(coll1124.length > 0) processOne38(); else rest38();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1146 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes861 = $("<span>");
  root1146.append(nodes861);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1147 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1147); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes861;
    nodes861 = node.contents();
    oldNodes.replaceWith(nodes861);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp797 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp797.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp797.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp797.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp797.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp797.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes862 = $("<span>");
  root1146.append(nodes862);
  subs__.addSub((ui.masterDetail)(tmp797, masterItem, detailItem, function(_, callback) {
    var root1148 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1148); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes862;
    nodes862 = node.contents();
    oldNodes.replaceWith(nodes862);
  }));
  callback(root1146); return subs__;
  
  
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
  var root1149 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes863 = $("<span>");
  root1149.append(nodes863);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1150 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node448 = mobl.loadingSpan();
    root1150.append(node448);
    var list80;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList80 = function() {
      var subs__ = listSubs__;
      list80 = sections.get();
      list80.list(function(results80) {
        node448.empty();
        for(var i212 = 0; i212 < results80.length; i212++) {
          (function() {
            var iternode80 = $("<span>");
            node448.append(iternode80);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results80), i212), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results80), i212), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp799 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp799.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp799.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp799.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp799.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp798 = mobl.ref(result__);
            
            var nodes864 = $("<span>");
            iternode80.append(nodes864);
            subs__.addSub((mobl.span)(tmp799, mobl.ref(null), tmp798, mobl.ref(null), function(_, callback) {
              var root1151 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes865 = $("<span>");
              root1151.append(nodes865);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1152 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1152); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes865;
                nodes865 = node.contents();
                oldNodes.replaceWith(nodes865);
              }));
              callback(root1151); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes864;
              nodes864 = node.contents();
              oldNodes.replaceWith(nodes864);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp800 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp800.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp800.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp800.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp800.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes866 = $("<span>");
            iternode80.append(nodes866);
            subs__.addSub((mobl.block)(tmp800, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1153 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes867 = $("<span>");
              root1153.append(nodes867);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl179();
              }));
              
              function renderControl179() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1154 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1154); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes867;
                  nodes867 = node.contents();
                  oldNodes.replaceWith(nodes867);
                }));
              }
              renderControl179();
              callback(root1153); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes866;
              nodes866 = node.contents();
              oldNodes.replaceWith(nodes866);
            }));
            
            var oldNodes = iternode80;
            iternode80 = iternode80.contents();
            oldNodes.replaceWith(iternode80);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list80.addEventListener('change', function() { listSubs__.unsubscribe(); renderList80(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList80(true); }));
      });
    };
    renderList80();
    
    callback(root1150); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes863;
    nodes863 = node.contents();
    oldNodes.replaceWith(nodes863);
  }));
  callback(root1149); return subs__;
  
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
  var root1155 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node449 = $("<table>");
  
  var ref449 = style;
  if(ref449.get() !== null) {
    node449.attr('class', ref449.get());
    subs__.addSub(ref449.addEventListener('change', function(_, ref, val) {
      node449.attr('class', val);
    }));
    
  }
  subs__.addSub(ref449.rebind());
  
  var nodes868 = $("<span>");
  node449.append(nodes868);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl180();
  }));
  
  function renderControl180() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1156); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes868;
      nodes868 = node.contents();
      oldNodes.replaceWith(nodes868);
    }));
  }
  renderControl180();
  root1155.append(node449);
  callback(root1155); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1157 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node450 = $("<tr>");
  
  var ref450 = style;
  if(ref450.get() !== null) {
    node450.attr('class', ref450.get());
    subs__.addSub(ref450.addEventListener('change', function(_, ref, val) {
      node450.attr('class', val);
    }));
    
  }
  subs__.addSub(ref450.rebind());
  
  var nodes869 = $("<span>");
  node450.append(nodes869);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl181();
  }));
  
  function renderControl181() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1158); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes869;
      nodes869 = node.contents();
      oldNodes.replaceWith(nodes869);
    }));
  }
  renderControl181();
  root1157.append(node450);
  callback(root1157); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1159 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node451 = $("<td>");
  
  var ref451 = width;
  if(ref451.get() !== null) {
    node451.attr('width', ref451.get());
    subs__.addSub(ref451.addEventListener('change', function(_, ref, val) {
      node451.attr('width', val);
    }));
    
  }
  subs__.addSub(ref451.rebind());
  
  var ref452 = style;
  if(ref452.get() !== null) {
    node451.attr('class', ref452.get());
    subs__.addSub(ref452.addEventListener('change', function(_, ref, val) {
      node451.attr('class', val);
    }));
    
  }
  subs__.addSub(ref452.rebind());
  
  var nodes870 = $("<span>");
  node451.append(nodes870);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl182();
  }));
  
  function renderControl182() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1160); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes870;
      nodes870 = node.contents();
      oldNodes.replaceWith(nodes870);
    }));
  }
  renderControl182();
  root1159.append(node451);
  callback(root1159); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1161 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node452 = $("<td>");
  
  var ref453 = width;
  if(ref453.get() !== null) {
    node452.attr('width', ref453.get());
    subs__.addSub(ref453.addEventListener('change', function(_, ref, val) {
      node452.attr('width', val);
    }));
    
  }
  subs__.addSub(ref453.rebind());
  
  var ref454 = style;
  if(ref454.get() !== null) {
    node452.attr('class', ref454.get());
    subs__.addSub(ref454.addEventListener('change', function(_, ref, val) {
      node452.attr('class', val);
    }));
    
  }
  subs__.addSub(ref454.rebind());
  
  var nodes871 = $("<span>");
  node452.append(nodes871);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl183();
  }));
  
  function renderControl183() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1162); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes871;
      nodes871 = node.contents();
      oldNodes.replaceWith(nodes871);
    }));
  }
  renderControl183();
  root1161.append(node452);
  callback(root1161); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1163 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node453 = $("<td>");
  
  var ref455 = width;
  if(ref455.get() !== null) {
    node453.attr('width', ref455.get());
    subs__.addSub(ref455.addEventListener('change', function(_, ref, val) {
      node453.attr('width', val);
    }));
    
  }
  subs__.addSub(ref455.rebind());
  
  var ref456 = style;
  if(ref456.get() !== null) {
    node453.attr('class', ref456.get());
    subs__.addSub(ref456.addEventListener('change', function(_, ref, val) {
      node453.attr('class', val);
    }));
    
  }
  subs__.addSub(ref456.rebind());
  
  
  var node454 = $("<strong>");
  
  var nodes872 = $("<span>");
  node454.append(nodes872);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl184();
  }));
  
  function renderControl184() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes872;
      nodes872 = node.contents();
      oldNodes.replaceWith(nodes872);
    }));
  }
  renderControl184();
  node453.append(node454);
  root1163.append(node453);
  callback(root1163); return subs__;
  
  
  
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
  items.list(function(coll1125) {
    coll1125 = coll1125.reverse();
    function processOne39() {
      var item;
      item = coll1125.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1125.length > 0) processOne39(); else rest39();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1125.length > 0) processOne39(); else rest39();
          
        }
      }
    }
    function rest39() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1125.length > 0) processOne39(); else rest39();
  });
  
};

ui.hasItem = function(it, items, callback) {
  var __this = this;
  var result__ = items;
  items.list(function(coll1126) {
    coll1126 = coll1126.reverse();
    function processOne40() {
      var item;
      item = coll1126.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = true;
        if(callback && callback.apply) callback(result__);
        return;
        
        if(coll1126.length > 0) processOne40(); else rest40();
        
      } else {
        {
          
          if(coll1126.length > 0) processOne40(); else rest40();
          
        }
      }
    }
    function rest40() {
      var result__ = false;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1126.length > 0) processOne40(); else rest40();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root1165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp828 = result__;
    var current = mobl.ref(result__);
    
    var node455 = $("<div>");
    node455.attr('width', "100%");
    
    
    var node456 = $("<div>");
    node456.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes874 = $("<span>");
    node456.append(nodes874);
    subs__.addSub((ui.group)(function(_, callback) {
      var root1167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node460 = mobl.loadingSpan();
      root1167.append(node460);
      var list82;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList82 = function() {
        var subs__ = listSubs__;
        list82 = items.get();
        list82.list(function(results82) {
          node460.empty();
          for(var i214 = 0; i214 < results82.length; i214++) {
            (function() {
              var iternode82 = $("<span>");
              node460.append(iternode82);
              var it;
              it = mobl.ref(mobl.ref(results82), i214);
              var result__ = it.get() == current.get();
              var tmp804 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp804.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp804.set(it.get() == current.get());
              }));
              
              
              var node461 = $("<span>");
              iternode82.append(node461);
              var condSubs111 = new mobl.CompSubscription();
              subs__.addSub(condSubs111);
              var oldValue111;
              var renderCond111 = function() {
                var value835 = tmp804.get();
                if(oldValue111 === value835) return;
                oldValue111 = value835;
                var subs__ = condSubs111;
                subs__.unsubscribe();
                node461.empty();
                if(value835) {
                  var nodes875 = $("<span>");
                  node461.append(nodes875);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root1168 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp831 = result__;
                      var tmp801 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp829 = result__;
                          var result__ = tmp829;
                          tmp801.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp830 = result__;
                          var result__ = tmp830;
                          tmp801.set(result__);
                          
                        });
                      }));
                      
                      var nodes876 = $("<span>");
                      root1168.append(nodes876);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl186();
                      }));
                      
                      function renderControl186() {
                        subs__.addSub((masterItem.get())(it, tmp801, function(elements, callback) {
                          var root1169 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1169); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes876;
                          nodes876 = node.contents();
                          oldNodes.replaceWith(nodes876);
                        }));
                      }
                      renderControl186();
                      callback(root1168); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes875;
                    nodes875 = node.contents();
                    oldNodes.replaceWith(nodes875);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp803 = mobl.ref(result__);
                  
                  var nodes877 = $("<span>");
                  node461.append(nodes877);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp803, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root1170 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp834 = result__;
                      var tmp802 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp832 = result__;
                          var result__ = tmp832;
                          tmp802.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp833 = result__;
                          var result__ = tmp833;
                          tmp802.set(result__);
                          
                        });
                      }));
                      
                      var nodes878 = $("<span>");
                      root1170.append(nodes878);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl187();
                      }));
                      
                      function renderControl187() {
                        subs__.addSub((masterItem.get())(it, tmp802, function(elements, callback) {
                          var root1171 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1171); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes878;
                          nodes878 = node.contents();
                          oldNodes.replaceWith(nodes878);
                        }));
                      }
                      renderControl187();
                      callback(root1170); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes877;
                    nodes877 = node.contents();
                    oldNodes.replaceWith(nodes877);
                  }));
                  
                  
                }
              };
              renderCond111();
              subs__.addSub(tmp804.addEventListener('change', function() {
                renderCond111();
              }));
              
              
              var oldNodes = iternode82;
              iternode82 = iternode82.contents();
              oldNodes.replaceWith(iternode82);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list82.addEventListener('change', function() { listSubs__.unsubscribe(); renderList82(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList82(true); }));
        });
      };
      renderList82();
      
      callback(root1167); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes874;
      nodes874 = node.contents();
      oldNodes.replaceWith(nodes874);
    }));
    node455.append(node456);
    
    var node457 = $("<div>");
    node457.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    
    var node458 = mobl.loadingSpan();
    node457.append(node458);
    var list81;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList81 = function() {
      var subs__ = listSubs__;
      list81 = items.get();
      list81.list(function(results81) {
        node458.empty();
        for(var i213 = 0; i213 < results81.length; i213++) {
          (function() {
            var iternode81 = $("<span>");
            node458.append(iternode81);
            var it;
            it = mobl.ref(mobl.ref(results81), i213);
            var result__ = it.get() == current.get();
            var tmp805 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp805.set(it.get() == current.get());
            }));
            subs__.addSub(current.addEventListener('change', function() {
              tmp805.set(it.get() == current.get());
            }));
            
            
            var node459 = $("<span>");
            iternode81.append(node459);
            var condSubs110 = new mobl.CompSubscription();
            subs__.addSub(condSubs110);
            var oldValue110;
            var renderCond110 = function() {
              var value834 = tmp805.get();
              if(oldValue110 === value834) return;
              oldValue110 = value834;
              var subs__ = condSubs110;
              subs__.unsubscribe();
              node459.empty();
              if(value834) {
                var nodes873 = $("<span>");
                node459.append(nodes873);
                subs__.addSub(detail.addEventListener('change', function() {
                  renderControl185();
                }));
                
                function renderControl185() {
                  subs__.addSub((detail.get())(it, function(elements, callback) {
                    var root1166 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1166); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes873;
                    nodes873 = node.contents();
                    oldNodes.replaceWith(nodes873);
                  }));
                }
                renderControl185();
                
                
              } else {
                
              }
            };
            renderCond110();
            subs__.addSub(tmp805.addEventListener('change', function() {
              renderCond110();
            }));
            
            
            var oldNodes = iternode81;
            iternode81 = iternode81.contents();
            oldNodes.replaceWith(iternode81);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list81.addEventListener('change', function() { listSubs__.unsubscribe(); renderList81(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList81(true); }));
      });
    };
    renderList81();
    
    node455.append(node457);
    root1165.append(node455);
    callback(root1165); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
