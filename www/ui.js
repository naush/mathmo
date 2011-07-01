mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root8239 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1053 = $("<span>");
  root8239.append(node1053);
  var condSubs256 = new mobl.CompSubscription();
  subs__.addSub(condSubs256);
  var oldValue256;
  var renderCond256 = function() {
    var value620 = value.get();
    if(oldValue256 === value620) return;
    oldValue256 = value620;
    var subs__ = condSubs256;
    subs__.unsubscribe();
    node1053.empty();
    if(value620) {
      var nodes7193 = $("<span>");
      node1053.append(nodes7193);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl387();
      }));
      
      function renderControl387() {
        subs__.addSub((elements)(function(elements, callback) {
          var root8240 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8240); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7193;
          nodes7193 = node.contents();
          oldNodes.replaceWith(nodes7193);
        }));
      }
      renderControl387();
      
      
    } else {
      var nodes7194 = $("<span>");
      node1053.append(nodes7194);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8241 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7195 = $("<span>");
        root8241.append(nodes7195);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root8242 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8242); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7195;
          nodes7195 = node.contents();
          oldNodes.replaceWith(nodes7195);
        }));
        var nodes7196 = $("<span>");
        root8241.append(nodes7196);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root8243 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8243); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7196;
          nodes7196 = node.contents();
          oldNodes.replaceWith(nodes7196);
        }));
        callback(root8241); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7194;
        nodes7194 = node.contents();
        oldNodes.replaceWith(nodes7194);
      }));
      
      
    }
  };
  renderCond256();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond256();
  }));
  
  callback(root8239); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root8244 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1054 = $("<div>");
  
  var ref1018 = mobl.ref(ui.headerStyle);
  if(ref1018.get() !== null) {
    node1054.attr('class', ref1018.get());
    subs__.addSub(ref1018.addEventListener('change', function(_, ref, val) {
      node1054.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1018.rebind());
  
  var val450 = onclick.get();
  if(val450 !== null) {
    subs__.addSub(mobl.domBind(node1054, 'tap', val450));
  }
  
  var ref1019 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1019.get() !== null) {
    node1054.attr('style', ref1019.get());
    subs__.addSub(ref1019.addEventListener('change', function(_, ref, val) {
      node1054.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1054.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1019.rebind());
  
  
  var node1057 = $("<div>");
  
  var ref1017 = mobl.ref(ui.headerContainerStyle);
  if(ref1017.get() !== null) {
    node1057.attr('class', ref1017.get());
    subs__.addSub(ref1017.addEventListener('change', function(_, ref, val) {
      node1057.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1017.rebind());
  
  
  var node1058 = $("<div>");
  
  var ref1015 = text;
  node1058.text(""+ref1015.get());
  var ignore187 = false;
  subs__.addSub(ref1015.addEventListener('change', function(_, ref, val) {
    if(ignore187) return;
    node1058.text(""+val);
  }));
  subs__.addSub(ref1015.rebind());
  
  
  var ref1016 = mobl.ref(ui.headerTextStyle);
  if(ref1016.get() !== null) {
    node1058.attr('class', ref1016.get());
    subs__.addSub(ref1016.addEventListener('change', function(_, ref, val) {
      node1058.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1016.rebind());
  
  node1057.append(node1058);
  node1054.append(node1057);
  var nodes7197 = $("<span>");
  node1054.append(nodes7197);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl388();
  }));
  
  function renderControl388() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8245); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7197;
      nodes7197 = node.contents();
      oldNodes.replaceWith(nodes7197);
    }));
  }
  renderControl388();
  root8244.append(node1054);
  
  var node1055 = $("<span>");
  root8244.append(node1055);
  var condSubs257 = new mobl.CompSubscription();
  subs__.addSub(condSubs257);
  var oldValue257;
  var renderCond257 = function() {
    var value621 = fixedPosition.get();
    if(oldValue257 === value621) return;
    oldValue257 = value621;
    var subs__ = condSubs257;
    subs__.unsubscribe();
    node1055.empty();
    if(value621) {
      
      var node1056 = $("<div>");
      node1056.attr('id', "hello");
      node1056.attr('style', "height: 2.9em;");
      
      node1055.append(node1056);
      
      
    } else {
      
    }
  };
  renderCond257();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond257();
  }));
  
  callback(root8244); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8246 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1020 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1020.get() !== null) {
    sp.attr('class', ref1020.get());
    subs__.addSub(ref1020.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1020.rebind());
  
  var val451 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val451 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val451));
  }
  
  var val452 = function(event, callback) {
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
  if(val452 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val452));
  }
  
  var val453 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after117(result__) {
                    var tmp7120 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after117);if(result__ !== undefined) after117(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val453 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val453));
  }
  
  var val454 = function(event, callback) {
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
  if(val454 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val454));
  }
  
  var ref1021 = text;
  sp.text(""+ref1021.get());
  var ignore188 = false;
  subs__.addSub(ref1021.addEventListener('change', function(_, ref, val) {
    if(ignore188) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1021.rebind());
  
  
  root8246.append(sp);
  callback(root8246); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8247 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7198 = $("<span>");
  root8247.append(nodes7198);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8248 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8248); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7198;
    nodes7198 = node.contents();
    oldNodes.replaceWith(nodes7198);
  }));
  callback(root8247); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8249 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7199 = $("<span>");
  root8249.append(nodes7199);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8250 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8250); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7199;
    nodes7199 = node.contents();
    oldNodes.replaceWith(nodes7199);
  }));
  callback(root8249); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root8251 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1059 = $("<ul>");
  
  var ref1022 = mobl.ref(ui.groupStyle);
  if(ref1022.get() !== null) {
    node1059.attr('class', ref1022.get());
    subs__.addSub(ref1022.addEventListener('change', function(_, ref, val) {
      node1059.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1022.rebind());
  
  var nodes7200 = $("<span>");
  node1059.append(nodes7200);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl389();
  }));
  
  function renderControl389() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8252 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8252); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7200;
      nodes7200 = node.contents();
      oldNodes.replaceWith(nodes7200);
    }));
  }
  renderControl389();
  root8251.append(node1059);
  callback(root8251); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root8253 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1060 = $("<img>");
  
  var ref1023 = url;
  if(ref1023.get() !== null) {
    node1060.attr('src', ref1023.get());
    subs__.addSub(ref1023.addEventListener('change', function(_, ref, val) {
      node1060.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1023.rebind());
  
  var ref1024 = width;
  if(ref1024.get() !== null) {
    node1060.attr('width', ref1024.get());
    subs__.addSub(ref1024.addEventListener('change', function(_, ref, val) {
      node1060.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1024.rebind());
  
  var ref1025 = height;
  if(ref1025.get() !== null) {
    node1060.attr('height', ref1025.get());
    subs__.addSub(ref1025.addEventListener('change', function(_, ref, val) {
      node1060.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1025.rebind());
  
  var ref1026 = style;
  if(ref1026.get() !== null) {
    node1060.attr('class', ref1026.get());
    subs__.addSub(ref1026.addEventListener('change', function(_, ref, val) {
      node1060.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1026.rebind());
  
  var val455 = onclick.get();
  if(val455 !== null) {
    subs__.addSub(mobl.domBind(node1060, 'tap', val455));
  }
  
  var ref1027 = valign;
  if(ref1027.get() !== null) {
    node1060.attr('valign', ref1027.get());
    subs__.addSub(ref1027.addEventListener('change', function(_, ref, val) {
      node1060.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1027.rebind());
  
  var ref1028 = align;
  if(ref1028.get() !== null) {
    node1060.attr('align', ref1028.get());
    subs__.addSub(ref1028.addEventListener('change', function(_, ref, val) {
      node1060.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1028.rebind());
  
  root8253.append(node1060);
  callback(root8253); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root8254 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1029 = mobl.ref(ui.itemStyle);
  if(ref1029.get() !== null) {
    el.attr('class', ref1029.get());
    subs__.addSub(ref1029.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1029.rebind());
  
  var ref1030 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1030.get() !== null) {
    el.attr('class', ref1030.get());
    subs__.addSub(ref1030.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1030.rebind());
  
  var val456 = onswipe.get();
  if(val456 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val456));
  }
  
  var val457 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp7121 = result__;
                                           function after118(result__) {
                                             var tmp7122 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after118);if(result__ !== undefined) after118(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp7123 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val457 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val457));
  }
  
  var nodes7201 = $("<span>");
  el.append(nodes7201);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl390();
  }));
  
  function renderControl390() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8255); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7201;
      nodes7201 = node.contents();
      oldNodes.replaceWith(nodes7201);
    }));
  }
  renderControl390();
  root8254.append(el);
  callback(root8254); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root8256 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1061 = $("<input>");
  node1061.attr('type', "checkbox");
  
  var ref1032 = b;
  node1061.attr('checked', !!ref1032.get());
  subs__.addSub(ref1032.addEventListener('change', function(_, ref, val) {
    if(ref === ref1032) node1061.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1061, 'change', function() {
    b.set(!!node1061.attr('checked'));
  }));
  
  var val459 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val459 !== null) {
    subs__.addSub(mobl.domBind(node1061, 'tap', val459));
  }
  
  var val460 = onchange.get();
  if(val460 !== null) {
    subs__.addSub(mobl.domBind(node1061, 'change', val460));
  }
  
  root8256.append(node1061);
  
  root8256.append(" ");
  
  var node1062 = $("<span>");
  
  var ref1031 = label;
  node1062.text(""+ref1031.get());
  var ignore189 = false;
  subs__.addSub(ref1031.addEventListener('change', function(_, ref, val) {
    if(ignore189) return;
    node1062.text(""+val);
  }));
  subs__.addSub(ref1031.rebind());
  
  
  var val458 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after119(result__) {
                    var tmp7124 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after119);if(result__ !== undefined) after119(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val458 !== null) {
    subs__.addSub(mobl.domBind(node1062, 'tap', val458));
  }
  
  root8256.append(node1062);
  callback(root8256); return subs__;
  
  
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
  var root8257 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1063 = $("<span>");
  root8257.append(node1063);
  var condSubs258 = new mobl.CompSubscription();
  subs__.addSub(condSubs258);
  var oldValue258;
  var renderCond258 = function() {
    var value622 = label.get();
    if(oldValue258 === value622) return;
    oldValue258 = value622;
    var subs__ = condSubs258;
    subs__.unsubscribe();
    node1063.empty();
    if(value622) {
      var nodes7202 = $("<span>");
      node1063.append(nodes7202);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7202;
        nodes7202 = node.contents();
        oldNodes.replaceWith(nodes7202);
      }));
      
      
    } else {
      
    }
  };
  renderCond258();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond258();
  }));
  
  
  var node1064 = $("<span>");
  root8257.append(node1064);
  var condSubs259 = new mobl.CompSubscription();
  subs__.addSub(condSubs259);
  var oldValue259;
  var renderCond259 = function() {
    var value623 = validator.get();
    if(oldValue259 === value623) return;
    oldValue259 = value623;
    var subs__ = condSubs259;
    subs__.unsubscribe();
    node1064.empty();
    if(value623) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after123(result__) {
        var tmp7125 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp7126 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1065 = $("<input>");
        
        var ref1033 = inputType;
        if(ref1033.get() !== null) {
          node1065.attr('type', ref1033.get());
          subs__.addSub(ref1033.addEventListener('change', function(_, ref, val) {
            node1065.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1033.rebind());
        
        var ref1034 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1034.get() !== null) {
          node1065.attr('class', ref1034.get());
          subs__.addSub(ref1034.addEventListener('change', function(_, ref, val) {
            node1065.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1065.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1065.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1065.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1034.rebind());
        
        var ref1035 = placeholder;
        if(ref1035.get() !== null) {
          node1065.attr('placeholder', ref1035.get());
          subs__.addSub(ref1035.addEventListener('change', function(_, ref, val) {
            node1065.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1035.rebind());
        
        var ref1036 = temp;
        node1065.val(""+ref1036.get());
        var ignore190 = false;
        subs__.addSub(ref1036.addEventListener('change', function(_, ref, val) {
          if(ignore190) return;
          node1065.val(""+val);
        }));
        subs__.addSub(ref1036.rebind());
        
        subs__.addSub(mobl.domBind(node1065, 'keyup change', function() {
          ignore190 = true;
          temp.set(mobl.stringTomobl__String(node1065.val()));
          ignore190 = false;
        }));
        
        
        var val461 = onchange.get();
        if(val461 !== null) {
          subs__.addSub(mobl.domBind(node1065, 'change', val461));
        }
        
        var val462 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after120(result__) {
                          var tmp7127 = result__;
                          function after121(result__) {
                            var tmp7128 = result__;
                            var result__ = tmp7128;
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
                          var result__ = validator.get()(temp.get(), after121);if(result__ !== undefined) after121(result__);
                        }
                        var result__ = onkeyup.get()(event, after120);if(result__ !== undefined) after120(result__);
                      } else {
                        {
                          function after122(result__) {
                            var tmp7128 = result__;
                            var result__ = tmp7128;
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
                          var result__ = validator.get()(temp.get(), after122);if(result__ !== undefined) after122(result__);
                        }
                      }
                    };
        if(val462 !== null) {
          subs__.addSub(mobl.domBind(node1065, 'keyup', val462));
        }
        
        var val463 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val463 !== null) {
          subs__.addSub(mobl.domBind(node1065, 'blur', val463));
        }
        
        node1064.append(node1065);
        var nodes7203 = $("<span>");
        node1064.append(nodes7203);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root8259 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8259); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7203;
          nodes7203 = node.contents();
          oldNodes.replaceWith(nodes7203);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after123);if(result__ !== undefined) after123(result__);
    } else {
      
      var node1066 = $("<input>");
      
      var ref1037 = inputType;
      if(ref1037.get() !== null) {
        node1066.attr('type', ref1037.get());
        subs__.addSub(ref1037.addEventListener('change', function(_, ref, val) {
          node1066.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1037.rebind());
      
      var ref1038 = style;
      if(ref1038.get() !== null) {
        node1066.attr('class', ref1038.get());
        subs__.addSub(ref1038.addEventListener('change', function(_, ref, val) {
          node1066.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1038.rebind());
      
      var ref1039 = placeholder;
      if(ref1039.get() !== null) {
        node1066.attr('placeholder', ref1039.get());
        subs__.addSub(ref1039.addEventListener('change', function(_, ref, val) {
          node1066.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1039.rebind());
      
      var ref1040 = s;
      node1066.val(""+ref1040.get());
      var ignore191 = false;
      subs__.addSub(ref1040.addEventListener('change', function(_, ref, val) {
        if(ignore191) return;
        node1066.val(""+val);
      }));
      subs__.addSub(ref1040.rebind());
      
      subs__.addSub(mobl.domBind(node1066, 'keyup change', function() {
        ignore191 = true;
        s.set(mobl.stringTomobl__String(node1066.val()));
        ignore191 = false;
      }));
      
      
      var val464 = onchange.get();
      if(val464 !== null) {
        subs__.addSub(mobl.domBind(node1066, 'change', val464));
      }
      
      var val465 = onkeyup.get();
      if(val465 !== null) {
        subs__.addSub(mobl.domBind(node1066, 'keyup', val465));
      }
      
      var val466 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val466 !== null) {
        subs__.addSub(mobl.domBind(node1066, 'blur', val466));
      }
      
      node1064.append(node1066);
      
      
    }
  };
  renderCond259();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond259();
  }));
  
  callback(root8257); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8260 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7204 = $("<span>");
  root8260.append(nodes7204);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8261 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8261); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7204;
    nodes7204 = node.contents();
    oldNodes.replaceWith(nodes7204);
  }));
  callback(root8260); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8262 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7205 = $("<span>");
  root8262.append(nodes7205);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8263 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8263); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7205;
    nodes7205 = node.contents();
    oldNodes.replaceWith(nodes7205);
  }));
  callback(root8262); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root8264 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1067 = $("<span>");
  root8264.append(node1067);
  var condSubs260 = new mobl.CompSubscription();
  subs__.addSub(condSubs260);
  var oldValue260;
  var renderCond260 = function() {
    var value624 = label.get();
    if(oldValue260 === value624) return;
    oldValue260 = value624;
    var subs__ = condSubs260;
    subs__.unsubscribe();
    node1067.empty();
    if(value624) {
      var nodes7206 = $("<span>");
      node1067.append(nodes7206);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8265 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8265); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7206;
        nodes7206 = node.contents();
        oldNodes.replaceWith(nodes7206);
      }));
      
      
    } else {
      
    }
  };
  renderCond260();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond260();
  }));
  
  
  var node1068 = $("<input>");
  node1068.attr('type', "range");
  
  var ref1041 = n;
  node1068.val(""+ref1041.get());
  var ignore192 = false;
  subs__.addSub(ref1041.addEventListener('change', function(_, ref, val) {
    if(ignore192) return;
    node1068.val(""+val);
  }));
  subs__.addSub(ref1041.rebind());
  
  subs__.addSub(mobl.domBind(node1068, 'keyup change', function() {
    ignore192 = true;
    n.set(mobl.stringTomobl__Num(node1068.val()));
    ignore192 = false;
  }));
  
  
  var ref1042 = min;
  if(ref1042.get() !== null) {
    node1068.attr('min', ref1042.get());
    subs__.addSub(ref1042.addEventListener('change', function(_, ref, val) {
      node1068.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1042.rebind());
  
  var ref1043 = max;
  if(ref1043.get() !== null) {
    node1068.attr('max', ref1043.get());
    subs__.addSub(ref1043.addEventListener('change', function(_, ref, val) {
      node1068.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1043.rebind());
  
  var ref1044 = step;
  if(ref1044.get() !== null) {
    node1068.attr('step', ref1044.get());
    subs__.addSub(ref1044.addEventListener('change', function(_, ref, val) {
      node1068.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1044.rebind());
  node1068.attr('style', "width: 99%;");
  
  var val467 = onchange.get();
  if(val467 !== null) {
    subs__.addSub(mobl.domBind(node1068, 'change', val467));
  }
  
  var val468 = onkeyup.get();
  if(val468 !== null) {
    subs__.addSub(mobl.domBind(node1068, 'keyup', val468));
  }
  
  var ref1045 = placeholder;
  if(ref1045.get() !== null) {
    node1068.attr('placeholder', ref1045.get());
    subs__.addSub(ref1045.addEventListener('change', function(_, ref, val) {
      node1068.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1045.rebind());
  
  root8264.append(node1068);
  callback(root8264); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8266 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after124(result__) {
      var tmp7129 = result__;
      var result__ = tmp7129;
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
    var result__ = validator.get()(n2, after124);if(result__ !== undefined) after124(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7207 = $("<span>");
  root8266.append(nodes7207);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8267 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8267); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7207;
    nodes7207 = node.contents();
    oldNodes.replaceWith(nodes7207);
  }));
  callback(root8266); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root8268 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1069 = $("<span>");
  root8268.append(node1069);
  var condSubs261 = new mobl.CompSubscription();
  subs__.addSub(condSubs261);
  var oldValue261;
  var renderCond261 = function() {
    var value625 = label.get();
    if(oldValue261 === value625) return;
    oldValue261 = value625;
    var subs__ = condSubs261;
    subs__.unsubscribe();
    node1069.empty();
    if(value625) {
      
      var node1070 = $("<span>");
      node1070.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1049 = label;
      node1070.text(""+ref1049.get());
      var ignore194 = false;
      subs__.addSub(ref1049.addEventListener('change', function(_, ref, val) {
        if(ignore194) return;
        node1070.text(""+val);
      }));
      subs__.addSub(ref1049.rebind());
      
      
      node1069.append(node1070);
      
      var node1071 = $("<span>");
      node1071.attr('style', "float: left");
      
      
      var node1072 = $("<input>");
      node1072.attr('type', "password");
      
      var ref1046 = style;
      if(ref1046.get() !== null) {
        node1072.attr('class', ref1046.get());
        subs__.addSub(ref1046.addEventListener('change', function(_, ref, val) {
          node1072.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1046.rebind());
      
      var ref1047 = placeholder;
      if(ref1047.get() !== null) {
        node1072.attr('placeholder', ref1047.get());
        subs__.addSub(ref1047.addEventListener('change', function(_, ref, val) {
          node1072.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1047.rebind());
      
      var ref1048 = s;
      node1072.val(""+ref1048.get());
      var ignore193 = false;
      subs__.addSub(ref1048.addEventListener('change', function(_, ref, val) {
        if(ignore193) return;
        node1072.val(""+val);
      }));
      subs__.addSub(ref1048.rebind());
      
      subs__.addSub(mobl.domBind(node1072, 'keyup change', function() {
        ignore193 = true;
        s.set(mobl.stringTomobl__String(node1072.val()));
        ignore193 = false;
      }));
      
      
      var val469 = onchange.get();
      if(val469 !== null) {
        subs__.addSub(mobl.domBind(node1072, 'change', val469));
      }
      
      var val470 = onkeyup.get();
      if(val470 !== null) {
        subs__.addSub(mobl.domBind(node1072, 'keyup', val470));
      }
      
      var val471 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val471 !== null) {
        subs__.addSub(mobl.domBind(node1072, 'blur', val471));
      }
      
      node1071.append(node1072);
      node1069.append(node1071);
      
      
      
      
    } else {
      
      var node1073 = $("<input>");
      node1073.attr('type', "password");
      
      var ref1050 = style;
      if(ref1050.get() !== null) {
        node1073.attr('class', ref1050.get());
        subs__.addSub(ref1050.addEventListener('change', function(_, ref, val) {
          node1073.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1050.rebind());
      
      var ref1051 = placeholder;
      if(ref1051.get() !== null) {
        node1073.attr('placeholder', ref1051.get());
        subs__.addSub(ref1051.addEventListener('change', function(_, ref, val) {
          node1073.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1051.rebind());
      
      var ref1052 = s;
      node1073.val(""+ref1052.get());
      var ignore195 = false;
      subs__.addSub(ref1052.addEventListener('change', function(_, ref, val) {
        if(ignore195) return;
        node1073.val(""+val);
      }));
      subs__.addSub(ref1052.rebind());
      
      subs__.addSub(mobl.domBind(node1073, 'keyup change', function() {
        ignore195 = true;
        s.set(mobl.stringTomobl__String(node1073.val()));
        ignore195 = false;
      }));
      
      
      var val472 = onchange.get();
      if(val472 !== null) {
        subs__.addSub(mobl.domBind(node1073, 'change', val472));
      }
      
      var val473 = onkeyup.get();
      if(val473 !== null) {
        subs__.addSub(mobl.domBind(node1073, 'keyup', val473));
      }
      
      var val474 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val474 !== null) {
        subs__.addSub(mobl.domBind(node1073, 'blur', val474));
      }
      
      node1069.append(node1073);
      
      
    }
  };
  renderCond261();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond261();
  }));
  
  callback(root8268); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root8269 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1057 = style;
  if(ref1057.get() !== null) {
    sel.attr('class', ref1057.get());
    subs__.addSub(ref1057.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1057.rebind());
  
  var val475 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after125(result__) {
                    var tmp7131 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after125);if(result__ !== undefined) after125(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val475 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val475));
  }
  
  
  var node1074 = mobl.loadingSpan();
  sel.append(node1074);
  var list143;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList143 = function() {
    var subs__ = listSubs__;
    list143 = options.get();
    list143.list(function(results143) {
      node1074.empty();
      for(var i1892 = 0; i1892 < results143.length; i1892++) {
        (function() {
          var iternode143 = $("<span>");
          node1074.append(iternode143);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results143), i1892), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results143), i1892), "_2");
          
          var node1075 = $("<option>");
          
          var ref1053 = optionDescription;
          node1075.text(""+ref1053.get());
          var ignore196 = false;
          subs__.addSub(ref1053.addEventListener('change', function(_, ref, val) {
            if(ignore196) return;
            node1075.text(""+val);
          }));
          subs__.addSub(ref1053.rebind());
          
          
          var ref1054 = optionStyle;
          if(ref1054.get() !== null) {
            node1075.attr('class', ref1054.get());
            subs__.addSub(ref1054.addEventListener('change', function(_, ref, val) {
              node1075.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1054.rebind());
          
          var ref1055 = optionValue;
          if(ref1055.get() !== null) {
            node1075.attr('value', ref1055.get());
            subs__.addSub(ref1055.addEventListener('change', function(_, ref, val) {
              node1075.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1055.rebind());
          
          var ref1056 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1056.get() !== null) {
            node1075.attr('selected', ref1056.get());
            subs__.addSub(ref1056.addEventListener('change', function(_, ref, val) {
              node1075.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1075.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1075.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1056.rebind());
          
          iternode143.append(node1075);
          
          var oldNodes = iternode143;
          iternode143 = iternode143.contents();
          oldNodes.replaceWith(iternode143);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list143.addEventListener('change', function() { listSubs__.unsubscribe(); renderList143(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList143(true); }));
    });
  };
  renderList143();
  
  root8269.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root8269); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root8270 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7208 = $("<span>");
    root8270.append(nodes7208);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1076 = mobl.loadingSpan();
      root8271.append(node1076);
      var list144;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList144 = function() {
        var subs__ = listSubs__;
        list144 = tabs.get();
        list144.list(function(results144) {
          node1076.empty();
          for(var i1893 = 0; i1893 < results144.length; i1893++) {
            (function() {
              var iternode144 = $("<span>");
              node1076.append(iternode144);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results144), i1893), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results144), i1893), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results144), i1893), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp7086 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7086.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7086.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp7086.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp7086.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp7085 = mobl.ref(result__);
              
              var nodes7209 = $("<span>");
              iternode144.append(nodes7209);
              subs__.addSub((mobl.span)(tmp7086, mobl.ref(null), tmp7085, mobl.ref(null), function(_, callback) {
                var root8272 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7210 = $("<span>");
                root8272.append(nodes7210);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root8273 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8273); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7210;
                  nodes7210 = node.contents();
                  oldNodes.replaceWith(nodes7210);
                }));
                callback(root8272); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7209;
                nodes7209 = node.contents();
                oldNodes.replaceWith(nodes7209);
              }));
              
              var oldNodes = iternode144;
              iternode144 = iternode144.contents();
              oldNodes.replaceWith(iternode144);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list144.addEventListener('change', function() { listSubs__.unsubscribe(); renderList144(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList144(true); }));
        });
      };
      renderList144();
      
      callback(root8271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7208;
      nodes7208 = node.contents();
      oldNodes.replaceWith(nodes7208);
    }));
    
    var node1077 = mobl.loadingSpan();
    root8270.append(node1077);
    var list145;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList145 = function() {
      var subs__ = listSubs__;
      list145 = tabs.get();
      list145.list(function(results145) {
        node1077.empty();
        for(var i1894 = 0; i1894 < results145.length; i1894++) {
          (function() {
            var iternode145 = $("<span>");
            node1077.append(iternode145);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results145), i1894), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results145), i1894), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results145), i1894), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp7087 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp7087.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp7087.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp7087.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp7087.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7211 = $("<span>");
            iternode145.append(nodes7211);
            subs__.addSub((mobl.block)(tmp7087, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8274 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7212 = $("<span>");
              root8274.append(nodes7212);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root8275 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7213 = $("<span>");
                root8275.append(nodes7213);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl391();
                }));
                
                function renderControl391() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root8276 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8276); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7213;
                    nodes7213 = node.contents();
                    oldNodes.replaceWith(nodes7213);
                  }));
                }
                renderControl391();
                callback(root8275); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7212;
                nodes7212 = node.contents();
                oldNodes.replaceWith(nodes7212);
              }));
              callback(root8274); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7211;
              nodes7211 = node.contents();
              oldNodes.replaceWith(nodes7211);
            }));
            
            var oldNodes = iternode145;
            iternode145 = iternode145.contents();
            oldNodes.replaceWith(iternode145);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list145.addEventListener('change', function() { listSubs__.unsubscribe(); renderList145(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList145(true); }));
      });
    };
    renderList145();
    
    callback(root8270); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7208 = $("<span>");
      root8270.append(nodes7208);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8271 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1076 = mobl.loadingSpan();
        root8271.append(node1076);
        var list144;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList144 = function() {
          var subs__ = listSubs__;
          list144 = tabs.get();
          list144.list(function(results144) {
            node1076.empty();
            for(var i1893 = 0; i1893 < results144.length; i1893++) {
              (function() {
                var iternode144 = $("<span>");
                node1076.append(iternode144);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results144), i1893), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results144), i1893), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results144), i1893), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp7086 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp7086.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp7086.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp7086.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp7086.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7085 = mobl.ref(result__);
                
                var nodes7209 = $("<span>");
                iternode144.append(nodes7209);
                subs__.addSub((mobl.span)(tmp7086, mobl.ref(null), tmp7085, mobl.ref(null), function(_, callback) {
                  var root8272 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7210 = $("<span>");
                  root8272.append(nodes7210);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root8273 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8273); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7210;
                    nodes7210 = node.contents();
                    oldNodes.replaceWith(nodes7210);
                  }));
                  callback(root8272); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7209;
                  nodes7209 = node.contents();
                  oldNodes.replaceWith(nodes7209);
                }));
                
                var oldNodes = iternode144;
                iternode144 = iternode144.contents();
                oldNodes.replaceWith(iternode144);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list144.addEventListener('change', function() { listSubs__.unsubscribe(); renderList144(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList144(true); }));
          });
        };
        renderList144();
        
        callback(root8271); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7208;
        nodes7208 = node.contents();
        oldNodes.replaceWith(nodes7208);
      }));
      
      var node1077 = mobl.loadingSpan();
      root8270.append(node1077);
      var list145;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList145 = function() {
        var subs__ = listSubs__;
        list145 = tabs.get();
        list145.list(function(results145) {
          node1077.empty();
          for(var i1894 = 0; i1894 < results145.length; i1894++) {
            (function() {
              var iternode145 = $("<span>");
              node1077.append(iternode145);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results145), i1894), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results145), i1894), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results145), i1894), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp7087 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7087.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7087.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp7087.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp7087.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7211 = $("<span>");
              iternode145.append(nodes7211);
              subs__.addSub((mobl.block)(tmp7087, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8274 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7212 = $("<span>");
                root8274.append(nodes7212);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root8275 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7213 = $("<span>");
                  root8275.append(nodes7213);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl391();
                  }));
                  
                  function renderControl391() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root8276 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8276); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7213;
                      nodes7213 = node.contents();
                      oldNodes.replaceWith(nodes7213);
                    }));
                  }
                  renderControl391();
                  callback(root8275); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7212;
                  nodes7212 = node.contents();
                  oldNodes.replaceWith(nodes7212);
                }));
                callback(root8274); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7211;
                nodes7211 = node.contents();
                oldNodes.replaceWith(nodes7211);
              }));
              
              var oldNodes = iternode145;
              iternode145 = iternode145.contents();
              oldNodes.replaceWith(iternode145);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list145.addEventListener('change', function() { listSubs__.unsubscribe(); renderList145(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList145(true); }));
        });
      };
      renderList145();
      
      callback(root8270); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root8277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1078 = $("<div>");
  
  var ref1061 = mobl.ref(ui.searchboxStyle);
  if(ref1061.get() !== null) {
    node1078.attr('class', ref1061.get());
    subs__.addSub(ref1061.addEventListener('change', function(_, ref, val) {
      node1078.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1061.rebind());
  
  
  var node1079 = $("<input>");
  node1079.attr('type', "search");
  
  var ref1058 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1058.get() !== null) {
    node1079.attr('class', ref1058.get());
    subs__.addSub(ref1058.addEventListener('change', function(_, ref, val) {
      node1079.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1058.rebind());
  
  var ref1059 = placeholder;
  if(ref1059.get() !== null) {
    node1079.attr('placeholder', ref1059.get());
    subs__.addSub(ref1059.addEventListener('change', function(_, ref, val) {
      node1079.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1059.rebind());
  
  var ref1060 = s;
  node1079.val(""+ref1060.get());
  var ignore197 = false;
  subs__.addSub(ref1060.addEventListener('change', function(_, ref, val) {
    if(ignore197) return;
    node1079.val(""+val);
  }));
  subs__.addSub(ref1060.rebind());
  
  subs__.addSub(mobl.domBind(node1079, 'keyup change', function() {
    ignore197 = true;
    s.set(mobl.stringTomobl__String(node1079.val()));
    ignore197 = false;
  }));
  
  
  var val476 = onsearch.get();
  if(val476 !== null) {
    subs__.addSub(mobl.domBind(node1079, 'change', val476));
  }
  
  var val477 = onkeyup.get();
  if(val477 !== null) {
    subs__.addSub(mobl.domBind(node1079, 'keyup', val477));
  }
  node1079.attr('autocorrect', false);
  node1079.attr('autocapitalize', false);
  node1079.attr('autocomplete', false);
  
  node1078.append(node1079);
  root8277.append(node1078);
  callback(root8277); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root8278 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1062 = mobl.ref(ui.contextMenuStyle);
  if(ref1062.get() !== null) {
    menu.attr('class', ref1062.get());
    subs__.addSub(ref1062.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1062.rebind());
  
  var nodes7214 = $("<span>");
  menu.append(nodes7214);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl392();
  }));
  
  function renderControl392() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8279); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7214;
      nodes7214 = node.contents();
      oldNodes.replaceWith(nodes7214);
    }));
  }
  renderControl392();
  root8278.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val478 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp7134 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val478 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val478));
  }
  
  root8278.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root8278); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root8280 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7118 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7118.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1080 = $("<span>");
  root8280.append(node1080);
  var condSubs262 = new mobl.CompSubscription();
  subs__.addSub(condSubs262);
  var oldValue262;
  var renderCond262 = function() {
    var value626 = tmp7118.get();
    if(oldValue262 === value626) return;
    oldValue262 = value626;
    var subs__ = condSubs262;
    subs__.unsubscribe();
    node1080.empty();
    if(value626) {
      items.get().one(function(result__) {
        var tmp7135 = result__;
        var current = mobl.ref(result__);
        
        var node1081 = $("<div>");
        node1081.attr('width', "100%");
        
        
        var node1082 = $("<div>");
        node1082.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7217 = $("<span>");
        node1082.append(nodes7217);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8283 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1085 = mobl.loadingSpan();
          root8283.append(node1085);
          var list146;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList146 = function() {
            var subs__ = listSubs__;
            list146 = items.get();
            list146.list(function(results146) {
              node1085.empty();
              for(var i1895 = 0; i1895 < results146.length; i1895++) {
                (function() {
                  var iternode146 = $("<span>");
                  node1085.append(iternode146);
                  var it;
                  it = mobl.ref(mobl.ref(results146), i1895);
                  var result__ = it.get() == current.get();
                  var tmp7093 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7093.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7093.set(it.get() == current.get());
                  }));
                  
                  
                  var node1086 = $("<span>");
                  iternode146.append(node1086);
                  var condSubs264 = new mobl.CompSubscription();
                  subs__.addSub(condSubs264);
                  var oldValue264;
                  var renderCond264 = function() {
                    var value628 = tmp7093.get();
                    if(oldValue264 === value628) return;
                    oldValue264 = value628;
                    var subs__ = condSubs264;
                    subs__.unsubscribe();
                    node1086.empty();
                    if(value628) {
                      var nodes7218 = $("<span>");
                      node1086.append(nodes7218);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root8284 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7219 = $("<span>");
                        root8284.append(nodes7219);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl394();
                        }));
                        
                        function renderControl394() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8285 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8285); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7219;
                            nodes7219 = node.contents();
                            oldNodes.replaceWith(nodes7219);
                          }));
                        }
                        renderControl394();
                        callback(root8284); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7218;
                        nodes7218 = node.contents();
                        oldNodes.replaceWith(nodes7218);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7092 = mobl.ref(result__);
                      
                      var nodes7220 = $("<span>");
                      node1086.append(nodes7220);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7092, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root8286 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7221 = $("<span>");
                        root8286.append(nodes7221);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl395();
                        }));
                        
                        function renderControl395() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8287 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8287); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7221;
                            nodes7221 = node.contents();
                            oldNodes.replaceWith(nodes7221);
                          }));
                        }
                        renderControl395();
                        callback(root8286); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7220;
                        nodes7220 = node.contents();
                        oldNodes.replaceWith(nodes7220);
                      }));
                      
                      
                    }
                  };
                  renderCond264();
                  subs__.addSub(tmp7093.addEventListener('change', function() {
                    renderCond264();
                  }));
                  
                  
                  var oldNodes = iternode146;
                  iternode146 = iternode146.contents();
                  oldNodes.replaceWith(iternode146);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list146.addEventListener('change', function() { listSubs__.unsubscribe(); renderList146(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList146(true); }));
            });
          };
          renderList146();
          
          callback(root8283); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7217;
          nodes7217 = node.contents();
          oldNodes.replaceWith(nodes7217);
        }));
        node1081.append(node1082);
        
        var node1083 = $("<div>");
        node1083.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1084 = $("<span>");
        node1083.append(node1084);
        var condSubs263 = new mobl.CompSubscription();
        subs__.addSub(condSubs263);
        var oldValue263;
        var renderCond263 = function() {
          var value627 = current.get();
          if(oldValue263 === value627) return;
          oldValue263 = value627;
          var subs__ = condSubs263;
          subs__.unsubscribe();
          node1084.empty();
          if(value627) {
            var nodes7215 = $("<span>");
            node1084.append(nodes7215);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl393();
            }));
            
            function renderControl393() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root8281 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8281); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7215;
                nodes7215 = node.contents();
                oldNodes.replaceWith(nodes7215);
              }));
            }
            renderControl393();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp7094 = mobl.ref(result__);
            
            var nodes7216 = $("<span>");
            node1084.append(nodes7216);
            subs__.addSub((mobl.label)(tmp7094, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8282 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8282); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7216;
              nodes7216 = node.contents();
              oldNodes.replaceWith(nodes7216);
            }));
            
            
          }
        };
        renderCond263();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond263();
        }));
        
        node1081.append(node1083);
        node1080.append(node1081);
        
        
        
        
        
        
      });
    } else {
      var nodes7222 = $("<span>");
      node1080.append(nodes7222);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8288 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1087 = mobl.loadingSpan();
        root8288.append(node1087);
        var list147;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList147 = function() {
          var subs__ = listSubs__;
          list147 = items.get();
          list147.list(function(results147) {
            node1087.empty();
            for(var i1896 = 0; i1896 < results147.length; i1896++) {
              (function() {
                var iternode147 = $("<span>");
                node1087.append(iternode147);
                var it;
                it = mobl.ref(mobl.ref(results147), i1896);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7136 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7088 = mobl.ref(result__);
                
                var nodes7223 = $("<span>");
                iternode147.append(nodes7223);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7088, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8289 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7224 = $("<span>");
                  root8289.append(nodes7224);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl396();
                  }));
                  
                  function renderControl396() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root8290 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8290); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7224;
                      nodes7224 = node.contents();
                      oldNodes.replaceWith(nodes7224);
                    }));
                  }
                  renderControl396();
                  callback(root8289); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7223;
                  nodes7223 = node.contents();
                  oldNodes.replaceWith(nodes7223);
                }));
                
                var oldNodes = iternode147;
                iternode147 = iternode147.contents();
                oldNodes.replaceWith(iternode147);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list147.addEventListener('change', function() { listSubs__.unsubscribe(); renderList147(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList147(true); }));
          });
        };
        renderList147();
        
        callback(root8288); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7222;
        nodes7222 = node.contents();
        oldNodes.replaceWith(nodes7222);
      }));
      
      
    }
  };
  renderCond262();
  subs__.addSub(tmp7118.addEventListener('change', function() {
    renderCond262();
  }));
  
  callback(root8280); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8291 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7091 = mobl.ref(result__);
  
  var nodes7225 = $("<span>");
  root8291.append(nodes7225);
  subs__.addSub((ui.header)(tmp7091, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8292 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7090 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7089 = mobl.ref(result__);
    
    var nodes7226 = $("<span>");
    root8292.append(nodes7226);
    subs__.addSub((ui.backButton)(tmp7089, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7090, function(_, callback) {
      var root8293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8293); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7226;
      nodes7226 = node.contents();
      oldNodes.replaceWith(nodes7226);
    }));
    callback(root8292); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7225;
    nodes7225 = node.contents();
    oldNodes.replaceWith(nodes7225);
  }));
  var nodes7227 = $("<span>");
  root8291.append(nodes7227);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl397();
  }));
  
  function renderControl397() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8294 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8294); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7227;
      nodes7227 = node.contents();
      oldNodes.replaceWith(nodes7227);
    }));
  }
  renderControl397();
  callback(root8291); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root8295 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7228 = $("<span>");
  root8295.append(nodes7228);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1088 = mobl.loadingSpan();
    root8296.append(node1088);
    var list148;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList148 = function() {
      var subs__ = listSubs__;
      list148 = coll.get();
      list148.list(function(results148) {
        node1088.empty();
        for(var i1897 = 0; i1897 < results148.length; i1897++) {
          (function() {
            var iternode148 = $("<span>");
            node1088.append(iternode148);
            var it;
            it = mobl.ref(mobl.ref(results148), i1897);
            var result__ = it.get() == selected.get();
            var tmp7096 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp7096.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp7096.set(it.get() == selected.get());
            }));
            
            
            var node1089 = $("<span>");
            iternode148.append(node1089);
            var condSubs265 = new mobl.CompSubscription();
            subs__.addSub(condSubs265);
            var oldValue265;
            var renderCond265 = function() {
              var value629 = tmp7096.get();
              if(oldValue265 === value629) return;
              oldValue265 = value629;
              var subs__ = condSubs265;
              subs__.unsubscribe();
              node1089.empty();
              if(value629) {
                var nodes7229 = $("<span>");
                node1089.append(nodes7229);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8297 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7230 = $("<span>");
                  root8297.append(nodes7230);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl398();
                  }));
                  
                  function renderControl398() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root8298 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8298); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7230;
                      nodes7230 = node.contents();
                      oldNodes.replaceWith(nodes7230);
                    }));
                  }
                  renderControl398();
                  callback(root8297); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7229;
                  nodes7229 = node.contents();
                  oldNodes.replaceWith(nodes7229);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7095 = mobl.ref(result__);
                
                var nodes7231 = $("<span>");
                node1089.append(nodes7231);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7095, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root8299 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7232 = $("<span>");
                  root8299.append(nodes7232);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl399();
                  }));
                  
                  function renderControl399() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root8300 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8300); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7232;
                      nodes7232 = node.contents();
                      oldNodes.replaceWith(nodes7232);
                    }));
                  }
                  renderControl399();
                  callback(root8299); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7231;
                  nodes7231 = node.contents();
                  oldNodes.replaceWith(nodes7231);
                }));
                
                
              }
            };
            renderCond265();
            subs__.addSub(tmp7096.addEventListener('change', function() {
              renderCond265();
            }));
            
            
            var oldNodes = iternode148;
            iternode148 = iternode148.contents();
            oldNodes.replaceWith(iternode148);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list148.addEventListener('change', function() { listSubs__.unsubscribe(); renderList148(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList148(true); }));
      });
    };
    renderList148();
    
    callback(root8296); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7228;
    nodes7228 = node.contents();
    oldNodes.replaceWith(nodes7228);
  }));
  callback(root8295); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root8301 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp7137 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp7097 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp7097.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp7097.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp7097.set(coll.get().limit(n.get()));
    }));
    
    
    var node1090 = mobl.loadingSpan();
    root8301.append(node1090);
    var list149;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList149 = function() {
      var subs__ = listSubs__;
      list149 = tmp7097.get();
      list149.list(function(results149) {
        node1090.empty();
        for(var i1898 = 0; i1898 < results149.length; i1898++) {
          (function() {
            var iternode149 = $("<span>");
            node1090.append(iternode149);
            var it;
            it = mobl.ref(mobl.ref(results149), i1898);
            var nodes7233 = $("<span>");
            iternode149.append(nodes7233);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl400();
            }));
            
            function renderControl400() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root8302 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8302); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7233;
                nodes7233 = node.contents();
                oldNodes.replaceWith(nodes7233);
              }));
            }
            renderControl400();
            
            var oldNodes = iternode149;
            iternode149 = iternode149.contents();
            oldNodes.replaceWith(iternode149);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list149.addEventListener('change', function() { listSubs__.unsubscribe(); renderList149(true); }));
        subs__.addSub(tmp7097.addEventListener('change', function() { listSubs__.unsubscribe(); renderList149(true); }));
      });
    };
    renderList149();
    
    var result__ = n.get() < total.get();
    var tmp7099 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp7099.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp7099.set(n.get() < total.get());
    }));
    
    
    var node1091 = $("<span>");
    root8301.append(node1091);
    var condSubs266 = new mobl.CompSubscription();
    subs__.addSub(condSubs266);
    var oldValue266;
    var renderCond266 = function() {
      var value630 = tmp7099.get();
      if(oldValue266 === value630) return;
      oldValue266 = value630;
      var subs__ = condSubs266;
      subs__.unsubscribe();
      node1091.empty();
      if(value630) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7098 = mobl.ref(result__);
        
        var nodes7234 = $("<span>");
        node1091.append(nodes7234);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp7098, mobl.ref(null), function(_, callback) {
          var root8303 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7235 = $("<span>");
          root8303.append(nodes7235);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root8304 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8304); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7235;
            nodes7235 = node.contents();
            oldNodes.replaceWith(nodes7235);
          }));
          callback(root8303); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7234;
          nodes7234 = node.contents();
          oldNodes.replaceWith(nodes7234);
        }));
        
        
      } else {
        
      }
    };
    renderCond266();
    subs__.addSub(tmp7099.addEventListener('change', function() {
      renderCond266();
    }));
    
    callback(root8301); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root8305 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7236 = $("<span>");
  root8305.append(nodes7236);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1092 = mobl.loadingSpan();
    root8306.append(node1092);
    var list150;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList150 = function() {
      var subs__ = listSubs__;
      list150 = items.get();
      list150.list(function(results150) {
        node1092.empty();
        for(var i1899 = 0; i1899 < results150.length; i1899++) {
          (function() {
            var iternode150 = $("<span>");
            node1092.append(iternode150);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results150), i1899), "_1");it = mobl.ref(mobl.ref(mobl.ref(results150), i1899), "_2");
            var nodes7237 = $("<span>");
            iternode150.append(nodes7237);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root8307 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7238 = $("<span>");
              root8307.append(nodes7238);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root8308 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8308); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7238;
                nodes7238 = node.contents();
                oldNodes.replaceWith(nodes7238);
              }));
              callback(root8307); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7237;
              nodes7237 = node.contents();
              oldNodes.replaceWith(nodes7237);
            }));
            
            var oldNodes = iternode150;
            iternode150 = iternode150.contents();
            oldNodes.replaceWith(iternode150);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list150.addEventListener('change', function() { listSubs__.unsubscribe(); renderList150(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList150(true); }));
      });
    };
    renderList150();
    
    callback(root8306); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7236;
    nodes7236 = node.contents();
    oldNodes.replaceWith(nodes7236);
  }));
  callback(root8305); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root8309 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll808) {
    coll808 = coll808.reverse();
    function processOne262() {
      var it;
      it = coll808.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll808.length > 0) processOne262(); else rest262();
      
    }
    function rest262() {
      var nodes7239 = $("<span>");
      root8309.append(nodes7239);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root8310 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7100 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7101 = mobl.ref(result__);
        
        var nodes7240 = $("<span>");
        root8310.append(nodes7240);
        subs__.addSub((ui.backButton)(tmp7101, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7100, function(_, callback) {
          var root8311 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8311); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7240;
          nodes7240 = node.contents();
          oldNodes.replaceWith(nodes7240);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll807) {
                           coll807 = coll807.reverse();
                           function processOne261() {
                             var checked;var it;
                             var tmp7139 = coll807.pop();
                             checked = tmp7139._1;it = tmp7139._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll807.length > 0) processOne261(); else rest261();
                               
                             } else {
                               {
                                 
                                 if(coll807.length > 0) processOne261(); else rest261();
                                 
                               }
                             }
                           }
                           function rest261() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll807.length > 0) processOne261(); else rest261();
                         });
                         
                       };
        var tmp7102 = mobl.ref(result__);
        
        var nodes7241 = $("<span>");
        root8310.append(nodes7241);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7102, function(_, callback) {
          var root8312 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8312); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7241;
          nodes7241 = node.contents();
          oldNodes.replaceWith(nodes7241);
        }));
        callback(root8310); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7239;
        nodes7239 = node.contents();
        oldNodes.replaceWith(nodes7239);
      }));
      var nodes7242 = $("<span>");
      root8309.append(nodes7242);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root8313 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8313); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7242;
        nodes7242 = node.contents();
        oldNodes.replaceWith(nodes7242);
      }));
      callback(root8309); return subs__;
      
      
    }
    if(coll808.length > 0) processOne262(); else rest262();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root8314 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7243 = $("<span>");
  root8314.append(nodes7243);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8315 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8315); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7243;
    nodes7243 = node.contents();
    oldNodes.replaceWith(nodes7243);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp7103 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp7103.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp7103.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp7103.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp7103.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp7103.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7244 = $("<span>");
  root8314.append(nodes7244);
  subs__.addSub((ui.masterDetail)(tmp7103, masterItem, detailItem, function(_, callback) {
    var root8316 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8316); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7244;
    nodes7244 = node.contents();
    oldNodes.replaceWith(nodes7244);
  }));
  callback(root8314); return subs__;
  
  
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
  var root8317 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7245 = $("<span>");
  root8317.append(nodes7245);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8318 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1093 = mobl.loadingSpan();
    root8318.append(node1093);
    var list151;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList151 = function() {
      var subs__ = listSubs__;
      list151 = sections.get();
      list151.list(function(results151) {
        node1093.empty();
        for(var i1900 = 0; i1900 < results151.length; i1900++) {
          (function() {
            var iternode151 = $("<span>");
            node1093.append(iternode151);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results151), i1900), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results151), i1900), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp7105 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7105.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7105.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp7105.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp7105.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp7104 = mobl.ref(result__);
            
            var nodes7246 = $("<span>");
            iternode151.append(nodes7246);
            subs__.addSub((mobl.span)(tmp7105, mobl.ref(null), tmp7104, mobl.ref(null), function(_, callback) {
              var root8319 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7247 = $("<span>");
              root8319.append(nodes7247);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8320 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8320); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7247;
                nodes7247 = node.contents();
                oldNodes.replaceWith(nodes7247);
              }));
              callback(root8319); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7246;
              nodes7246 = node.contents();
              oldNodes.replaceWith(nodes7246);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp7106 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7106.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7106.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp7106.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp7106.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7248 = $("<span>");
            iternode151.append(nodes7248);
            subs__.addSub((mobl.block)(tmp7106, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8321 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7249 = $("<span>");
              root8321.append(nodes7249);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl401();
              }));
              
              function renderControl401() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root8322 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8322); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7249;
                  nodes7249 = node.contents();
                  oldNodes.replaceWith(nodes7249);
                }));
              }
              renderControl401();
              callback(root8321); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7248;
              nodes7248 = node.contents();
              oldNodes.replaceWith(nodes7248);
            }));
            
            var oldNodes = iternode151;
            iternode151 = iternode151.contents();
            oldNodes.replaceWith(iternode151);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list151.addEventListener('change', function() { listSubs__.unsubscribe(); renderList151(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList151(true); }));
      });
    };
    renderList151();
    
    callback(root8318); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7245;
    nodes7245 = node.contents();
    oldNodes.replaceWith(nodes7245);
  }));
  callback(root8317); return subs__;
  
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
  var root8323 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1094 = $("<table>");
  
  var ref1063 = style;
  if(ref1063.get() !== null) {
    node1094.attr('class', ref1063.get());
    subs__.addSub(ref1063.addEventListener('change', function(_, ref, val) {
      node1094.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1063.rebind());
  
  var nodes7250 = $("<span>");
  node1094.append(nodes7250);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl402();
  }));
  
  function renderControl402() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8324); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7250;
      nodes7250 = node.contents();
      oldNodes.replaceWith(nodes7250);
    }));
  }
  renderControl402();
  root8323.append(node1094);
  callback(root8323); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root8325 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1095 = $("<tr>");
  
  var ref1064 = style;
  if(ref1064.get() !== null) {
    node1095.attr('class', ref1064.get());
    subs__.addSub(ref1064.addEventListener('change', function(_, ref, val) {
      node1095.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1064.rebind());
  
  var nodes7251 = $("<span>");
  node1095.append(nodes7251);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl403();
  }));
  
  function renderControl403() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8326 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8326); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7251;
      nodes7251 = node.contents();
      oldNodes.replaceWith(nodes7251);
    }));
  }
  renderControl403();
  root8325.append(node1095);
  callback(root8325); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root8327 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1096 = $("<td>");
  
  var ref1065 = width;
  if(ref1065.get() !== null) {
    node1096.attr('width', ref1065.get());
    subs__.addSub(ref1065.addEventListener('change', function(_, ref, val) {
      node1096.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1065.rebind());
  
  var ref1066 = style;
  if(ref1066.get() !== null) {
    node1096.attr('class', ref1066.get());
    subs__.addSub(ref1066.addEventListener('change', function(_, ref, val) {
      node1096.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1066.rebind());
  
  var nodes7252 = $("<span>");
  node1096.append(nodes7252);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl404();
  }));
  
  function renderControl404() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8328 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8328); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7252;
      nodes7252 = node.contents();
      oldNodes.replaceWith(nodes7252);
    }));
  }
  renderControl404();
  root8327.append(node1096);
  callback(root8327); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root8329 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1097 = $("<td>");
  
  var ref1067 = width;
  if(ref1067.get() !== null) {
    node1097.attr('width', ref1067.get());
    subs__.addSub(ref1067.addEventListener('change', function(_, ref, val) {
      node1097.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1067.rebind());
  
  var ref1068 = style;
  if(ref1068.get() !== null) {
    node1097.attr('class', ref1068.get());
    subs__.addSub(ref1068.addEventListener('change', function(_, ref, val) {
      node1097.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1068.rebind());
  
  var nodes7253 = $("<span>");
  node1097.append(nodes7253);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl405();
  }));
  
  function renderControl405() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8330 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8330); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7253;
      nodes7253 = node.contents();
      oldNodes.replaceWith(nodes7253);
    }));
  }
  renderControl405();
  root8329.append(node1097);
  callback(root8329); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root8331 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1098 = $("<td>");
  
  var ref1069 = width;
  if(ref1069.get() !== null) {
    node1098.attr('width', ref1069.get());
    subs__.addSub(ref1069.addEventListener('change', function(_, ref, val) {
      node1098.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1069.rebind());
  
  var ref1070 = style;
  if(ref1070.get() !== null) {
    node1098.attr('class', ref1070.get());
    subs__.addSub(ref1070.addEventListener('change', function(_, ref, val) {
      node1098.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1070.rebind());
  
  
  var node1099 = $("<strong>");
  
  var nodes7254 = $("<span>");
  node1099.append(nodes7254);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl406();
  }));
  
  function renderControl406() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8332 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8332); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7254;
      nodes7254 = node.contents();
      oldNodes.replaceWith(nodes7254);
    }));
  }
  renderControl406();
  node1098.append(node1099);
  root8331.append(node1098);
  callback(root8331); return subs__;
  
  
  
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
  items.list(function(coll809) {
    coll809 = coll809.reverse();
    function processOne263() {
      var item;
      item = coll809.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll809.length > 0) processOne263(); else rest263();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll809.length > 0) processOne263(); else rest263();
          
        }
      }
    }
    function rest263() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll809.length > 0) processOne263(); else rest263();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root8333 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7119 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7119.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1100 = $("<span>");
  root8333.append(node1100);
  var condSubs267 = new mobl.CompSubscription();
  subs__.addSub(condSubs267);
  var oldValue267;
  var renderCond267 = function() {
    var value631 = tmp7119.get();
    if(oldValue267 === value631) return;
    oldValue267 = value631;
    var subs__ = condSubs267;
    subs__.unsubscribe();
    node1100.empty();
    if(value631) {
      items.get().one(function(result__) {
        var tmp7141 = result__;
        var current = mobl.ref(result__);
        
        var node1101 = $("<div>");
        node1101.attr('width', "100%");
        
        
        var node1102 = $("<div>");
        node1102.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7256 = $("<span>");
        node1102.append(nodes7256);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8335 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1105 = mobl.loadingSpan();
          root8335.append(node1105);
          var list152;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList152 = function() {
            var subs__ = listSubs__;
            list152 = items.get();
            list152.list(function(results152) {
              node1105.empty();
              for(var i1901 = 0; i1901 < results152.length; i1901++) {
                (function() {
                  var iternode152 = $("<span>");
                  node1105.append(iternode152);
                  var it;
                  it = mobl.ref(mobl.ref(results152), i1901);
                  var result__ = it.get() == current.get();
                  var tmp7115 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7115.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7115.set(it.get() == current.get());
                  }));
                  
                  
                  var node1106 = $("<span>");
                  iternode152.append(node1106);
                  var condSubs269 = new mobl.CompSubscription();
                  subs__.addSub(condSubs269);
                  var oldValue269;
                  var renderCond269 = function() {
                    var value633 = tmp7115.get();
                    if(oldValue269 === value633) return;
                    oldValue269 = value633;
                    var subs__ = condSubs269;
                    subs__.unsubscribe();
                    node1106.empty();
                    if(value633) {
                      var nodes7257 = $("<span>");
                      node1106.append(nodes7257);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root8336 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7147 = result__;
                          var tmp7112 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7145 = result__;
                              var result__ = tmp7145;
                              tmp7112.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7146 = result__;
                              var result__ = tmp7146;
                              tmp7112.set(result__);
                              
                            });
                          }));
                          
                          var nodes7258 = $("<span>");
                          root8336.append(nodes7258);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl408();
                          }));
                          
                          function renderControl408() {
                            subs__.addSub((masterItem.get())(it, tmp7112, function(elements, callback) {
                              var root8337 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root8337); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7258;
                              nodes7258 = node.contents();
                              oldNodes.replaceWith(nodes7258);
                            }));
                          }
                          renderControl408();
                          callback(root8336); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7257;
                        nodes7257 = node.contents();
                        oldNodes.replaceWith(nodes7257);
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
                      var tmp7114 = mobl.ref(result__);
                      
                      var nodes7259 = $("<span>");
                      node1106.append(nodes7259);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7114, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root8338 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7150 = result__;
                          var tmp7113 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7148 = result__;
                              var result__ = tmp7148;
                              tmp7113.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7149 = result__;
                              var result__ = tmp7149;
                              tmp7113.set(result__);
                              
                            });
                          }));
                          
                          var nodes7260 = $("<span>");
                          root8338.append(nodes7260);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl409();
                          }));
                          
                          function renderControl409() {
                            subs__.addSub((masterItem.get())(it, tmp7113, function(elements, callback) {
                              var root8339 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root8339); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7260;
                              nodes7260 = node.contents();
                              oldNodes.replaceWith(nodes7260);
                            }));
                          }
                          renderControl409();
                          callback(root8338); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7259;
                        nodes7259 = node.contents();
                        oldNodes.replaceWith(nodes7259);
                      }));
                      
                      
                    }
                  };
                  renderCond269();
                  subs__.addSub(tmp7115.addEventListener('change', function() {
                    renderCond269();
                  }));
                  
                  
                  var oldNodes = iternode152;
                  iternode152 = iternode152.contents();
                  oldNodes.replaceWith(iternode152);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list152.addEventListener('change', function() { listSubs__.unsubscribe(); renderList152(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList152(true); }));
            });
          };
          renderList152();
          
          callback(root8335); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7256;
          nodes7256 = node.contents();
          oldNodes.replaceWith(nodes7256);
        }));
        node1101.append(node1102);
        
        var node1103 = $("<div>");
        node1103.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp7117 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp7117.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp7117.set(current.get() && ui.visible.get());
        }));
        
        
        var node1104 = $("<span>");
        node1103.append(node1104);
        var condSubs268 = new mobl.CompSubscription();
        subs__.addSub(condSubs268);
        var oldValue268;
        var renderCond268 = function() {
          var value632 = tmp7117.get();
          if(oldValue268 === value632) return;
          oldValue268 = value632;
          var subs__ = condSubs268;
          subs__.unsubscribe();
          node1104.empty();
          if(value632) {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp7144 = result__;
              var tmp7116 = mobl.ref(result__);
              subs__.addSub(current.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp7142 = result__;
                  var result__ = tmp7142;
                  tmp7116.set(result__);
                  
                });
              }));
              subs__.addSub(items.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp7143 = result__;
                  var result__ = tmp7143;
                  tmp7116.set(result__);
                  
                });
              }));
              
              var nodes7255 = $("<span>");
              node1104.append(nodes7255);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl407();
              }));
              
              function renderControl407() {
                subs__.addSub((detail.get())(current, tmp7116, function(elements, callback) {
                  var root8334 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8334); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7255;
                  nodes7255 = node.contents();
                  oldNodes.replaceWith(nodes7255);
                }));
              }
              renderControl407();
              
              
            });
          } else {
            
          }
        };
        renderCond268();
        subs__.addSub(tmp7117.addEventListener('change', function() {
          renderCond268();
        }));
        
        node1101.append(node1103);
        node1100.append(node1101);
        
        
        
        
        
        
      });
    } else {
      var nodes7261 = $("<span>");
      node1100.append(nodes7261);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8340 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1107 = mobl.loadingSpan();
        root8340.append(node1107);
        var list153;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList153 = function() {
          var subs__ = listSubs__;
          list153 = items.get();
          list153.list(function(results153) {
            node1107.empty();
            for(var i1902 = 0; i1902 < results153.length; i1902++) {
              (function() {
                var iternode153 = $("<span>");
                node1107.append(iternode153);
                var it;
                it = mobl.ref(mobl.ref(results153), i1902);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7154 = result__;
                                 mobl.sleep(200, function(result__) {
                                   var tmp7155 = result__;
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp7156 = result__;
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 });
                                 });
                               };
                var tmp7108 = mobl.ref(result__);
                
                var nodes7262 = $("<span>");
                iternode153.append(nodes7262);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7108, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8341 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp7153 = result__;
                    var tmp7107 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7151 = result__;
                        var result__ = tmp7151;
                        tmp7107.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7152 = result__;
                        var result__ = tmp7152;
                        tmp7107.set(result__);
                        
                      });
                    }));
                    
                    var nodes7263 = $("<span>");
                    root8341.append(nodes7263);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl410();
                    }));
                    
                    function renderControl410() {
                      subs__.addSub((masterItem.get())(it, tmp7107, function(elements, callback) {
                        var root8342 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root8342); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7263;
                        nodes7263 = node.contents();
                        oldNodes.replaceWith(nodes7263);
                      }));
                    }
                    renderControl410();
                    callback(root8341); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7262;
                  nodes7262 = node.contents();
                  oldNodes.replaceWith(nodes7262);
                }));
                
                var oldNodes = iternode153;
                iternode153 = iternode153.contents();
                oldNodes.replaceWith(iternode153);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list153.addEventListener('change', function() { listSubs__.unsubscribe(); renderList153(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList153(true); }));
          });
        };
        renderList153();
        
        callback(root8340); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7261;
        nodes7261 = node.contents();
        oldNodes.replaceWith(nodes7261);
      }));
      
      
    }
  };
  renderCond267();
  subs__.addSub(tmp7119.addEventListener('change', function() {
    renderCond267();
  }));
  
  callback(root8333); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8343 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7111 = mobl.ref(result__);
  
  var nodes7264 = $("<span>");
  root8343.append(nodes7264);
  subs__.addSub((ui.header)(tmp7111, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8344 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7110 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7109 = mobl.ref(result__);
    
    var nodes7265 = $("<span>");
    root8344.append(nodes7265);
    subs__.addSub((ui.backButton)(tmp7109, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7110, function(_, callback) {
      var root8345 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8345); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7265;
      nodes7265 = node.contents();
      oldNodes.replaceWith(nodes7265);
    }));
    callback(root8344); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7264;
    nodes7264 = node.contents();
    oldNodes.replaceWith(nodes7264);
  }));
  var nodes7266 = $("<span>");
  root8343.append(nodes7266);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl411();
  }));
  
  function renderControl411() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8346 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8346); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7266;
      nodes7266 = node.contents();
      oldNodes.replaceWith(nodes7266);
    }));
  }
  renderControl411();
  callback(root8343); return subs__;
  
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root8347 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7267 = $("<span>");
  root8347.append(nodes7267);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8348 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes7268 = $("<span>");
    root8348.append(nodes7268);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8349 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8349); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7268;
      nodes7268 = node.contents();
      oldNodes.replaceWith(nodes7268);
    }));
    callback(root8348); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7267;
    nodes7267 = node.contents();
    oldNodes.replaceWith(nodes7267);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes7269 = $("<span>");
  root8347.append(nodes7269);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root8350 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8350); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7269;
    nodes7269 = node.contents();
    oldNodes.replaceWith(nodes7269);
  }));
  callback(root8347); return subs__;
  
  
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
