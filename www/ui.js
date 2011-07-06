mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root110 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node55 = $("<span>");
  root110.append(node55);
  var condSubs14 = new mobl.CompSubscription();
  subs__.addSub(condSubs14);
  var oldValue14;
  var renderCond14 = function() {
    var value58 = value.get();
    if(oldValue14 === value58) return;
    oldValue14 = value58;
    var subs__ = condSubs14;
    subs__.unsubscribe();
    node55.empty();
    if(value58) {
      var nodes75 = $("<span>");
      node55.append(nodes75);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl25();
      }));
      
      function renderControl25() {
        subs__.addSub((elements)(function(elements, callback) {
          var root111 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root111); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes75;
          nodes75 = node.contents();
          oldNodes.replaceWith(nodes75);
        }));
      }
      renderControl25();
      
      
    } else {
      var nodes76 = $("<span>");
      node55.append(nodes76);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root112 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes77 = $("<span>");
        root112.append(nodes77);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root113 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root113); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes77;
          nodes77 = node.contents();
          oldNodes.replaceWith(nodes77);
        }));
        var nodes78 = $("<span>");
        root112.append(nodes78);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root114 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root114); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes78;
          nodes78 = node.contents();
          oldNodes.replaceWith(nodes78);
        }));
        callback(root112); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes76;
        nodes76 = node.contents();
        oldNodes.replaceWith(nodes76);
      }));
      
      
    }
  };
  renderCond14();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond14();
  }));
  
  callback(root110); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root115 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node56 = $("<div>");
  
  var ref59 = mobl.ref(ui.headerStyle);
  if(ref59.get() !== null) {
    node56.attr('class', ref59.get());
    subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
      node56.attr('class', val);
    }));
    
  }
  subs__.addSub(ref59.rebind());
  
  var val29 = onclick.get();
  if(val29 !== null) {
    subs__.addSub(mobl.domBind(node56, 'tap', val29));
  }
  
  var ref60 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref60.get() !== null) {
    node56.attr('style', ref60.get());
    subs__.addSub(ref60.addEventListener('change', function(_, ref, val) {
      node56.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node56.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref60.rebind());
  
  
  var node59 = $("<div>");
  
  var ref58 = mobl.ref(ui.headerContainerStyle);
  if(ref58.get() !== null) {
    node59.attr('class', ref58.get());
    subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
      node59.attr('class', val);
    }));
    
  }
  subs__.addSub(ref58.rebind());
  
  
  var node60 = $("<div>");
  
  var ref56 = text;
  node60.text(""+ref56.get());
  var ignore11 = false;
  subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
    if(ignore11) return;
    node60.text(""+val);
  }));
  subs__.addSub(ref56.rebind());
  
  
  var ref57 = mobl.ref(ui.headerTextStyle);
  if(ref57.get() !== null) {
    node60.attr('class', ref57.get());
    subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
      node60.attr('class', val);
    }));
    
  }
  subs__.addSub(ref57.rebind());
  
  node59.append(node60);
  node56.append(node59);
  var nodes79 = $("<span>");
  node56.append(nodes79);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl26();
  }));
  
  function renderControl26() {
    subs__.addSub((elements)(function(elements, callback) {
      var root116 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root116); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes79;
      nodes79 = node.contents();
      oldNodes.replaceWith(nodes79);
    }));
  }
  renderControl26();
  root115.append(node56);
  
  var node57 = $("<span>");
  root115.append(node57);
  var condSubs15 = new mobl.CompSubscription();
  subs__.addSub(condSubs15);
  var oldValue15;
  var renderCond15 = function() {
    var value59 = fixedPosition.get();
    if(oldValue15 === value59) return;
    oldValue15 = value59;
    var subs__ = condSubs15;
    subs__.unsubscribe();
    node57.empty();
    if(value59) {
      
      var node58 = $("<div>");
      node58.attr('id', "hello");
      node58.attr('style', "height: 2.9em;");
      
      node57.append(node58);
      
      
    } else {
      
    }
  };
  renderCond15();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond15();
  }));
  
  callback(root115); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root117 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref61 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref61.get() !== null) {
    sp.attr('class', ref61.get());
    subs__.addSub(ref61.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref61.rebind());
  
  var val30 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val30));
  }
  
  var val31 = function(event, callback) {
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
  if(val31 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val31));
  }
  
  var val32 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after9(result__) {
                    var tmp106 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after9);if(result__ !== undefined) after9(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val32 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val32));
  }
  
  var val33 = function(event, callback) {
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
  if(val33 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val33));
  }
  
  var ref62 = text;
  sp.text(""+ref62.get());
  var ignore12 = false;
  subs__.addSub(ref62.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref62.rebind());
  
  
  root117.append(sp);
  callback(root117); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root118 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes80 = $("<span>");
  root118.append(nodes80);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root119 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root119); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes80;
    nodes80 = node.contents();
    oldNodes.replaceWith(nodes80);
  }));
  callback(root118); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root120 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes81 = $("<span>");
  root120.append(nodes81);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root121 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root121); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes81;
    nodes81 = node.contents();
    oldNodes.replaceWith(nodes81);
  }));
  callback(root120); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root122 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node61 = $("<ul>");
  
  var ref63 = mobl.ref(ui.groupStyle);
  if(ref63.get() !== null) {
    node61.attr('class', ref63.get());
    subs__.addSub(ref63.addEventListener('change', function(_, ref, val) {
      node61.attr('class', val);
    }));
    
  }
  subs__.addSub(ref63.rebind());
  
  var nodes82 = $("<span>");
  node61.append(nodes82);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl27();
  }));
  
  function renderControl27() {
    subs__.addSub((elements)(function(elements, callback) {
      var root123 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root123); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes82;
      nodes82 = node.contents();
      oldNodes.replaceWith(nodes82);
    }));
  }
  renderControl27();
  root122.append(node61);
  callback(root122); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root124 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<img>");
  
  var ref64 = url;
  if(ref64.get() !== null) {
    node62.attr('src', ref64.get());
    subs__.addSub(ref64.addEventListener('change', function(_, ref, val) {
      node62.attr('src', val);
    }));
    
  }
  subs__.addSub(ref64.rebind());
  
  var ref65 = width;
  if(ref65.get() !== null) {
    node62.attr('width', ref65.get());
    subs__.addSub(ref65.addEventListener('change', function(_, ref, val) {
      node62.attr('width', val);
    }));
    
  }
  subs__.addSub(ref65.rebind());
  
  var ref66 = height;
  if(ref66.get() !== null) {
    node62.attr('height', ref66.get());
    subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
      node62.attr('height', val);
    }));
    
  }
  subs__.addSub(ref66.rebind());
  
  var ref67 = style;
  if(ref67.get() !== null) {
    node62.attr('class', ref67.get());
    subs__.addSub(ref67.addEventListener('change', function(_, ref, val) {
      node62.attr('class', val);
    }));
    
  }
  subs__.addSub(ref67.rebind());
  
  var val34 = onclick.get();
  if(val34 !== null) {
    subs__.addSub(mobl.domBind(node62, 'tap', val34));
  }
  
  var ref68 = valign;
  if(ref68.get() !== null) {
    node62.attr('valign', ref68.get());
    subs__.addSub(ref68.addEventListener('change', function(_, ref, val) {
      node62.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref68.rebind());
  
  var ref69 = align;
  if(ref69.get() !== null) {
    node62.attr('align', ref69.get());
    subs__.addSub(ref69.addEventListener('change', function(_, ref, val) {
      node62.attr('align', val);
    }));
    
  }
  subs__.addSub(ref69.rebind());
  
  root124.append(node62);
  callback(root124); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root125 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref70 = mobl.ref(ui.itemStyle);
  if(ref70.get() !== null) {
    el.attr('class', ref70.get());
    subs__.addSub(ref70.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref70.rebind());
  
  var ref71 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref71.get() !== null) {
    el.attr('class', ref71.get());
    subs__.addSub(ref71.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref71.rebind());
  
  var val35 = onswipe.get();
  if(val35 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val35));
  }
  
  var val36 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp107 = result__;
                                           function after10(result__) {
                                             var tmp108 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after10);if(result__ !== undefined) after10(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp109 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val36 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val36));
  }
  
  var nodes83 = $("<span>");
  el.append(nodes83);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl28();
  }));
  
  function renderControl28() {
    subs__.addSub((elements)(function(elements, callback) {
      var root126 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root126); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes83;
      nodes83 = node.contents();
      oldNodes.replaceWith(nodes83);
    }));
  }
  renderControl28();
  root125.append(el);
  callback(root125); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root127 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node63 = $("<input>");
  node63.attr('type', "checkbox");
  
  var ref73 = b;
  node63.attr('checked', !!ref73.get());
  subs__.addSub(ref73.addEventListener('change', function(_, ref, val) {
    if(ref === ref73) node63.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node63, 'change', function() {
    b.set(!!node63.attr('checked'));
  }));
  
  var val38 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val38 !== null) {
    subs__.addSub(mobl.domBind(node63, 'tap', val38));
  }
  
  var val39 = onchange.get();
  if(val39 !== null) {
    subs__.addSub(mobl.domBind(node63, 'change', val39));
  }
  
  root127.append(node63);
  
  root127.append(" ");
  
  var node64 = $("<span>");
  
  var ref72 = label;
  node64.text(""+ref72.get());
  var ignore13 = false;
  subs__.addSub(ref72.addEventListener('change', function(_, ref, val) {
    if(ignore13) return;
    node64.text(""+val);
  }));
  subs__.addSub(ref72.rebind());
  
  
  var val37 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after11(result__) {
                    var tmp110 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after11);if(result__ !== undefined) after11(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val37 !== null) {
    subs__.addSub(mobl.domBind(node64, 'tap', val37));
  }
  
  root127.append(node64);
  callback(root127); return subs__;
  
  
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
  var root128 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node65 = $("<span>");
  root128.append(node65);
  var condSubs16 = new mobl.CompSubscription();
  subs__.addSub(condSubs16);
  var oldValue16;
  var renderCond16 = function() {
    var value60 = label.get();
    if(oldValue16 === value60) return;
    oldValue16 = value60;
    var subs__ = condSubs16;
    subs__.unsubscribe();
    node65.empty();
    if(value60) {
      var nodes84 = $("<span>");
      node65.append(nodes84);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root129 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root129); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes84;
        nodes84 = node.contents();
        oldNodes.replaceWith(nodes84);
      }));
      
      
    } else {
      
    }
  };
  renderCond16();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond16();
  }));
  
  
  var node66 = $("<span>");
  root128.append(node66);
  var condSubs17 = new mobl.CompSubscription();
  subs__.addSub(condSubs17);
  var oldValue17;
  var renderCond17 = function() {
    var value61 = validator.get();
    if(oldValue17 === value61) return;
    oldValue17 = value61;
    var subs__ = condSubs17;
    subs__.unsubscribe();
    node66.empty();
    if(value61) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after15(result__) {
        var tmp111 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp112 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node67 = $("<input>");
        
        var ref74 = inputType;
        if(ref74.get() !== null) {
          node67.attr('type', ref74.get());
          subs__.addSub(ref74.addEventListener('change', function(_, ref, val) {
            node67.attr('type', val);
          }));
          
        }
        subs__.addSub(ref74.rebind());
        
        var ref75 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref75.get() !== null) {
          node67.attr('class', ref75.get());
          subs__.addSub(ref75.addEventListener('change', function(_, ref, val) {
            node67.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node67.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node67.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node67.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref75.rebind());
        
        var ref76 = placeholder;
        if(ref76.get() !== null) {
          node67.attr('placeholder', ref76.get());
          subs__.addSub(ref76.addEventListener('change', function(_, ref, val) {
            node67.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref76.rebind());
        
        var ref77 = temp;
        node67.val(""+ref77.get());
        var ignore14 = false;
        subs__.addSub(ref77.addEventListener('change', function(_, ref, val) {
          if(ignore14) return;
          node67.val(""+val);
        }));
        subs__.addSub(ref77.rebind());
        
        subs__.addSub(mobl.domBind(node67, 'keyup change', function() {
          ignore14 = true;
          temp.set(mobl.stringTomobl__String(node67.val()));
          ignore14 = false;
        }));
        
        
        var val40 = onchange.get();
        if(val40 !== null) {
          subs__.addSub(mobl.domBind(node67, 'change', val40));
        }
        
        var val41 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after12(result__) {
                          var tmp113 = result__;
                          function after13(result__) {
                            var tmp114 = result__;
                            var result__ = tmp114;
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
                          var result__ = validator.get()(temp.get(), after13);if(result__ !== undefined) after13(result__);
                        }
                        var result__ = onkeyup.get()(event, after12);if(result__ !== undefined) after12(result__);
                      } else {
                        {
                          function after14(result__) {
                            var tmp114 = result__;
                            var result__ = tmp114;
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
                          var result__ = validator.get()(temp.get(), after14);if(result__ !== undefined) after14(result__);
                        }
                      }
                    };
        if(val41 !== null) {
          subs__.addSub(mobl.domBind(node67, 'keyup', val41));
        }
        
        var val42 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val42 !== null) {
          subs__.addSub(mobl.domBind(node67, 'blur', val42));
        }
        
        node66.append(node67);
        var nodes85 = $("<span>");
        node66.append(nodes85);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root130 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root130); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes85;
          nodes85 = node.contents();
          oldNodes.replaceWith(nodes85);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after15);if(result__ !== undefined) after15(result__);
    } else {
      
      var node68 = $("<input>");
      
      var ref78 = inputType;
      if(ref78.get() !== null) {
        node68.attr('type', ref78.get());
        subs__.addSub(ref78.addEventListener('change', function(_, ref, val) {
          node68.attr('type', val);
        }));
        
      }
      subs__.addSub(ref78.rebind());
      
      var ref79 = style;
      if(ref79.get() !== null) {
        node68.attr('class', ref79.get());
        subs__.addSub(ref79.addEventListener('change', function(_, ref, val) {
          node68.attr('class', val);
        }));
        
      }
      subs__.addSub(ref79.rebind());
      
      var ref80 = placeholder;
      if(ref80.get() !== null) {
        node68.attr('placeholder', ref80.get());
        subs__.addSub(ref80.addEventListener('change', function(_, ref, val) {
          node68.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref80.rebind());
      
      var ref81 = s;
      node68.val(""+ref81.get());
      var ignore15 = false;
      subs__.addSub(ref81.addEventListener('change', function(_, ref, val) {
        if(ignore15) return;
        node68.val(""+val);
      }));
      subs__.addSub(ref81.rebind());
      
      subs__.addSub(mobl.domBind(node68, 'keyup change', function() {
        ignore15 = true;
        s.set(mobl.stringTomobl__String(node68.val()));
        ignore15 = false;
      }));
      
      
      var val43 = onchange.get();
      if(val43 !== null) {
        subs__.addSub(mobl.domBind(node68, 'change', val43));
      }
      
      var val44 = onkeyup.get();
      if(val44 !== null) {
        subs__.addSub(mobl.domBind(node68, 'keyup', val44));
      }
      
      var val45 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val45 !== null) {
        subs__.addSub(mobl.domBind(node68, 'blur', val45));
      }
      
      node66.append(node68);
      
      
    }
  };
  renderCond17();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond17();
  }));
  
  callback(root128); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root131 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes86 = $("<span>");
  root131.append(nodes86);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root132 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root132); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes86;
    nodes86 = node.contents();
    oldNodes.replaceWith(nodes86);
  }));
  callback(root131); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root133 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes87 = $("<span>");
  root133.append(nodes87);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root134 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root134); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes87;
    nodes87 = node.contents();
    oldNodes.replaceWith(nodes87);
  }));
  callback(root133); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root135 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node69 = $("<span>");
  root135.append(node69);
  var condSubs18 = new mobl.CompSubscription();
  subs__.addSub(condSubs18);
  var oldValue18;
  var renderCond18 = function() {
    var value62 = label.get();
    if(oldValue18 === value62) return;
    oldValue18 = value62;
    var subs__ = condSubs18;
    subs__.unsubscribe();
    node69.empty();
    if(value62) {
      var nodes88 = $("<span>");
      node69.append(nodes88);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root136 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root136); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes88;
        nodes88 = node.contents();
        oldNodes.replaceWith(nodes88);
      }));
      
      
    } else {
      
    }
  };
  renderCond18();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond18();
  }));
  
  
  var node70 = $("<input>");
  node70.attr('type', "range");
  
  var ref82 = n;
  node70.val(""+ref82.get());
  var ignore16 = false;
  subs__.addSub(ref82.addEventListener('change', function(_, ref, val) {
    if(ignore16) return;
    node70.val(""+val);
  }));
  subs__.addSub(ref82.rebind());
  
  subs__.addSub(mobl.domBind(node70, 'keyup change', function() {
    ignore16 = true;
    n.set(mobl.stringTomobl__Num(node70.val()));
    ignore16 = false;
  }));
  
  
  var ref83 = min;
  if(ref83.get() !== null) {
    node70.attr('min', ref83.get());
    subs__.addSub(ref83.addEventListener('change', function(_, ref, val) {
      node70.attr('min', val);
    }));
    
  }
  subs__.addSub(ref83.rebind());
  
  var ref84 = max;
  if(ref84.get() !== null) {
    node70.attr('max', ref84.get());
    subs__.addSub(ref84.addEventListener('change', function(_, ref, val) {
      node70.attr('max', val);
    }));
    
  }
  subs__.addSub(ref84.rebind());
  
  var ref85 = step;
  if(ref85.get() !== null) {
    node70.attr('step', ref85.get());
    subs__.addSub(ref85.addEventListener('change', function(_, ref, val) {
      node70.attr('step', val);
    }));
    
  }
  subs__.addSub(ref85.rebind());
  node70.attr('style', "width: 99%;");
  
  var val46 = onchange.get();
  if(val46 !== null) {
    subs__.addSub(mobl.domBind(node70, 'change', val46));
  }
  
  var val47 = onkeyup.get();
  if(val47 !== null) {
    subs__.addSub(mobl.domBind(node70, 'keyup', val47));
  }
  
  var ref86 = placeholder;
  if(ref86.get() !== null) {
    node70.attr('placeholder', ref86.get());
    subs__.addSub(ref86.addEventListener('change', function(_, ref, val) {
      node70.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref86.rebind());
  
  root135.append(node70);
  callback(root135); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root137 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after16(result__) {
      var tmp115 = result__;
      var result__ = tmp115;
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
    var result__ = validator.get()(n2, after16);if(result__ !== undefined) after16(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes89 = $("<span>");
  root137.append(nodes89);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root138 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root138); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes89;
    nodes89 = node.contents();
    oldNodes.replaceWith(nodes89);
  }));
  callback(root137); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root139 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node71 = $("<span>");
  root139.append(node71);
  var condSubs19 = new mobl.CompSubscription();
  subs__.addSub(condSubs19);
  var oldValue19;
  var renderCond19 = function() {
    var value63 = label.get();
    if(oldValue19 === value63) return;
    oldValue19 = value63;
    var subs__ = condSubs19;
    subs__.unsubscribe();
    node71.empty();
    if(value63) {
      
      var node72 = $("<span>");
      node72.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref90 = label;
      node72.text(""+ref90.get());
      var ignore18 = false;
      subs__.addSub(ref90.addEventListener('change', function(_, ref, val) {
        if(ignore18) return;
        node72.text(""+val);
      }));
      subs__.addSub(ref90.rebind());
      
      
      node71.append(node72);
      
      var node73 = $("<span>");
      node73.attr('style', "float: left");
      
      
      var node74 = $("<input>");
      node74.attr('type', "password");
      
      var ref87 = style;
      if(ref87.get() !== null) {
        node74.attr('class', ref87.get());
        subs__.addSub(ref87.addEventListener('change', function(_, ref, val) {
          node74.attr('class', val);
        }));
        
      }
      subs__.addSub(ref87.rebind());
      
      var ref88 = placeholder;
      if(ref88.get() !== null) {
        node74.attr('placeholder', ref88.get());
        subs__.addSub(ref88.addEventListener('change', function(_, ref, val) {
          node74.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref88.rebind());
      
      var ref89 = s;
      node74.val(""+ref89.get());
      var ignore17 = false;
      subs__.addSub(ref89.addEventListener('change', function(_, ref, val) {
        if(ignore17) return;
        node74.val(""+val);
      }));
      subs__.addSub(ref89.rebind());
      
      subs__.addSub(mobl.domBind(node74, 'keyup change', function() {
        ignore17 = true;
        s.set(mobl.stringTomobl__String(node74.val()));
        ignore17 = false;
      }));
      
      
      var val48 = onchange.get();
      if(val48 !== null) {
        subs__.addSub(mobl.domBind(node74, 'change', val48));
      }
      
      var val49 = onkeyup.get();
      if(val49 !== null) {
        subs__.addSub(mobl.domBind(node74, 'keyup', val49));
      }
      
      var val50 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val50 !== null) {
        subs__.addSub(mobl.domBind(node74, 'blur', val50));
      }
      
      node73.append(node74);
      node71.append(node73);
      
      
      
      
    } else {
      
      var node75 = $("<input>");
      node75.attr('type', "password");
      
      var ref91 = style;
      if(ref91.get() !== null) {
        node75.attr('class', ref91.get());
        subs__.addSub(ref91.addEventListener('change', function(_, ref, val) {
          node75.attr('class', val);
        }));
        
      }
      subs__.addSub(ref91.rebind());
      
      var ref92 = placeholder;
      if(ref92.get() !== null) {
        node75.attr('placeholder', ref92.get());
        subs__.addSub(ref92.addEventListener('change', function(_, ref, val) {
          node75.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref92.rebind());
      
      var ref93 = s;
      node75.val(""+ref93.get());
      var ignore19 = false;
      subs__.addSub(ref93.addEventListener('change', function(_, ref, val) {
        if(ignore19) return;
        node75.val(""+val);
      }));
      subs__.addSub(ref93.rebind());
      
      subs__.addSub(mobl.domBind(node75, 'keyup change', function() {
        ignore19 = true;
        s.set(mobl.stringTomobl__String(node75.val()));
        ignore19 = false;
      }));
      
      
      var val51 = onchange.get();
      if(val51 !== null) {
        subs__.addSub(mobl.domBind(node75, 'change', val51));
      }
      
      var val52 = onkeyup.get();
      if(val52 !== null) {
        subs__.addSub(mobl.domBind(node75, 'keyup', val52));
      }
      
      var val53 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val53 !== null) {
        subs__.addSub(mobl.domBind(node75, 'blur', val53));
      }
      
      node71.append(node75);
      
      
    }
  };
  renderCond19();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond19();
  }));
  
  callback(root139); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root140 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref98 = style;
  if(ref98.get() !== null) {
    sel.attr('class', ref98.get());
    subs__.addSub(ref98.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref98.rebind());
  
  var val54 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after17(result__) {
                    var tmp117 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after17);if(result__ !== undefined) after17(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val54 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val54));
  }
  
  
  var node76 = mobl.loadingSpan();
  sel.append(node76);
  var list11;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList11 = function() {
    var subs__ = listSubs__;
    list11 = options.get();
    list11.list(function(results11) {
      node76.empty();
      for(var i11 = 0; i11 < results11.length; i11++) {
        (function() {
          var iternode11 = $("<span>");
          node76.append(iternode11);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results11), i11), "_2");
          
          var node77 = $("<option>");
          
          var ref94 = optionDescription;
          node77.text(""+ref94.get());
          var ignore20 = false;
          subs__.addSub(ref94.addEventListener('change', function(_, ref, val) {
            if(ignore20) return;
            node77.text(""+val);
          }));
          subs__.addSub(ref94.rebind());
          
          
          var ref95 = optionStyle;
          if(ref95.get() !== null) {
            node77.attr('class', ref95.get());
            subs__.addSub(ref95.addEventListener('change', function(_, ref, val) {
              node77.attr('class', val);
            }));
            
          }
          subs__.addSub(ref95.rebind());
          
          var ref96 = optionValue;
          if(ref96.get() !== null) {
            node77.attr('value', ref96.get());
            subs__.addSub(ref96.addEventListener('change', function(_, ref, val) {
              node77.attr('value', val);
            }));
            
          }
          subs__.addSub(ref96.rebind());
          
          var ref97 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref97.get() !== null) {
            node77.attr('selected', ref97.get());
            subs__.addSub(ref97.addEventListener('change', function(_, ref, val) {
              node77.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node77.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node77.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref97.rebind());
          
          iternode11.append(node77);
          
          var oldNodes = iternode11;
          iternode11 = iternode11.contents();
          oldNodes.replaceWith(iternode11);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list11.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList11(true); }));
    });
  };
  renderList11();
  
  root140.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root140); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root141 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes90 = $("<span>");
    root141.append(nodes90);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root142 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node78 = mobl.loadingSpan();
      root142.append(node78);
      var list12;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList12 = function() {
        var subs__ = listSubs__;
        list12 = tabs.get();
        list12.list(function(results12) {
          node78.empty();
          for(var i12 = 0; i12 < results12.length; i12++) {
            (function() {
              var iternode12 = $("<span>");
              node78.append(iternode12);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results12), i12), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results12), i12), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results12), i12), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp75 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp75.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp75.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp75.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp75.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp74 = mobl.ref(result__);
              
              var nodes91 = $("<span>");
              iternode12.append(nodes91);
              subs__.addSub((mobl.span)(tmp75, mobl.ref(null), tmp74, mobl.ref(null), function(_, callback) {
                var root143 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes92 = $("<span>");
                root143.append(nodes92);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root144 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root144); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes92;
                  nodes92 = node.contents();
                  oldNodes.replaceWith(nodes92);
                }));
                callback(root143); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes91;
                nodes91 = node.contents();
                oldNodes.replaceWith(nodes91);
              }));
              
              var oldNodes = iternode12;
              iternode12 = iternode12.contents();
              oldNodes.replaceWith(iternode12);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list12.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
        });
      };
      renderList12();
      
      callback(root142); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes90;
      nodes90 = node.contents();
      oldNodes.replaceWith(nodes90);
    }));
    
    var node79 = mobl.loadingSpan();
    root141.append(node79);
    var list13;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList13 = function() {
      var subs__ = listSubs__;
      list13 = tabs.get();
      list13.list(function(results13) {
        node79.empty();
        for(var i13 = 0; i13 < results13.length; i13++) {
          (function() {
            var iternode13 = $("<span>");
            node79.append(iternode13);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results13), i13), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results13), i13), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results13), i13), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp76 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp76.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp76.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp76.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp76.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes93 = $("<span>");
            iternode13.append(nodes93);
            subs__.addSub((mobl.block)(tmp76, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root145 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes94 = $("<span>");
              root145.append(nodes94);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root146 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes95 = $("<span>");
                root146.append(nodes95);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl29();
                }));
                
                function renderControl29() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root147 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root147); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes95;
                    nodes95 = node.contents();
                    oldNodes.replaceWith(nodes95);
                  }));
                }
                renderControl29();
                callback(root146); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes94;
                nodes94 = node.contents();
                oldNodes.replaceWith(nodes94);
              }));
              callback(root145); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes93;
              nodes93 = node.contents();
              oldNodes.replaceWith(nodes93);
            }));
            
            var oldNodes = iternode13;
            iternode13 = iternode13.contents();
            oldNodes.replaceWith(iternode13);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list13.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
      });
    };
    renderList13();
    
    callback(root141); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes90 = $("<span>");
      root141.append(nodes90);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node78 = mobl.loadingSpan();
        root142.append(node78);
        var list12;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList12 = function() {
          var subs__ = listSubs__;
          list12 = tabs.get();
          list12.list(function(results12) {
            node78.empty();
            for(var i12 = 0; i12 < results12.length; i12++) {
              (function() {
                var iternode12 = $("<span>");
                node78.append(iternode12);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results12), i12), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results12), i12), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results12), i12), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp75 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp75.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp75.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp75.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp75.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp74 = mobl.ref(result__);
                
                var nodes91 = $("<span>");
                iternode12.append(nodes91);
                subs__.addSub((mobl.span)(tmp75, mobl.ref(null), tmp74, mobl.ref(null), function(_, callback) {
                  var root143 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes92 = $("<span>");
                  root143.append(nodes92);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root144 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root144); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes92;
                    nodes92 = node.contents();
                    oldNodes.replaceWith(nodes92);
                  }));
                  callback(root143); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes91;
                  nodes91 = node.contents();
                  oldNodes.replaceWith(nodes91);
                }));
                
                var oldNodes = iternode12;
                iternode12 = iternode12.contents();
                oldNodes.replaceWith(iternode12);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list12.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList12(true); }));
          });
        };
        renderList12();
        
        callback(root142); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes90;
        nodes90 = node.contents();
        oldNodes.replaceWith(nodes90);
      }));
      
      var node79 = mobl.loadingSpan();
      root141.append(node79);
      var list13;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList13 = function() {
        var subs__ = listSubs__;
        list13 = tabs.get();
        list13.list(function(results13) {
          node79.empty();
          for(var i13 = 0; i13 < results13.length; i13++) {
            (function() {
              var iternode13 = $("<span>");
              node79.append(iternode13);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results13), i13), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results13), i13), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results13), i13), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp76 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp76.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp76.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp76.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp76.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes93 = $("<span>");
              iternode13.append(nodes93);
              subs__.addSub((mobl.block)(tmp76, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root145 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes94 = $("<span>");
                root145.append(nodes94);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root146 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes95 = $("<span>");
                  root146.append(nodes95);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl29();
                  }));
                  
                  function renderControl29() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root147 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root147); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes95;
                      nodes95 = node.contents();
                      oldNodes.replaceWith(nodes95);
                    }));
                  }
                  renderControl29();
                  callback(root146); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes94;
                  nodes94 = node.contents();
                  oldNodes.replaceWith(nodes94);
                }));
                callback(root145); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes93;
                nodes93 = node.contents();
                oldNodes.replaceWith(nodes93);
              }));
              
              var oldNodes = iternode13;
              iternode13 = iternode13.contents();
              oldNodes.replaceWith(iternode13);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list13.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList13(true); }));
        });
      };
      renderList13();
      
      callback(root141); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node80 = $("<div>");
  
  var ref102 = mobl.ref(ui.searchboxStyle);
  if(ref102.get() !== null) {
    node80.attr('class', ref102.get());
    subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
      node80.attr('class', val);
    }));
    
  }
  subs__.addSub(ref102.rebind());
  
  
  var node81 = $("<input>");
  node81.attr('type', "search");
  
  var ref99 = mobl.ref(ui.searchBoxInputStyle);
  if(ref99.get() !== null) {
    node81.attr('class', ref99.get());
    subs__.addSub(ref99.addEventListener('change', function(_, ref, val) {
      node81.attr('class', val);
    }));
    
  }
  subs__.addSub(ref99.rebind());
  
  var ref100 = placeholder;
  if(ref100.get() !== null) {
    node81.attr('placeholder', ref100.get());
    subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
      node81.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref100.rebind());
  
  var ref101 = s;
  node81.val(""+ref101.get());
  var ignore21 = false;
  subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
    if(ignore21) return;
    node81.val(""+val);
  }));
  subs__.addSub(ref101.rebind());
  
  subs__.addSub(mobl.domBind(node81, 'keyup change', function() {
    ignore21 = true;
    s.set(mobl.stringTomobl__String(node81.val()));
    ignore21 = false;
  }));
  
  
  var val55 = onsearch.get();
  if(val55 !== null) {
    subs__.addSub(mobl.domBind(node81, 'change', val55));
  }
  
  var val56 = onkeyup.get();
  if(val56 !== null) {
    subs__.addSub(mobl.domBind(node81, 'keyup', val56));
  }
  node81.attr('autocorrect', false);
  node81.attr('autocapitalize', false);
  node81.attr('autocomplete', false);
  
  node80.append(node81);
  root148.append(node80);
  callback(root148); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root149 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref103 = mobl.ref(ui.contextMenuStyle);
  if(ref103.get() !== null) {
    menu.attr('class', ref103.get());
    subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref103.rebind());
  
  var nodes96 = $("<span>");
  menu.append(nodes96);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl30();
  }));
  
  function renderControl30() {
    subs__.addSub((elements)(function(elements, callback) {
      var root150 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root150); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes96;
      nodes96 = node.contents();
      oldNodes.replaceWith(nodes96);
    }));
  }
  renderControl30();
  root149.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val57 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp120 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val57 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val57));
  }
  
  root149.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root149); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root151 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp104 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp104.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node82 = $("<span>");
  root151.append(node82);
  var condSubs20 = new mobl.CompSubscription();
  subs__.addSub(condSubs20);
  var oldValue20;
  var renderCond20 = function() {
    var value64 = tmp104.get();
    if(oldValue20 === value64) return;
    oldValue20 = value64;
    var subs__ = condSubs20;
    subs__.unsubscribe();
    node82.empty();
    if(value64) {
      items.get().one(function(result__) {
        var tmp121 = result__;
        var current = mobl.ref(result__);
        
        var node83 = $("<div>");
        node83.attr('width', "100%");
        
        
        var node84 = $("<div>");
        node84.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes99 = $("<span>");
        node84.append(nodes99);
        subs__.addSub((ui.group)(function(_, callback) {
          var root154 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node87 = mobl.loadingSpan();
          root154.append(node87);
          var list14;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList14 = function() {
            var subs__ = listSubs__;
            list14 = items.get();
            list14.list(function(results14) {
              node87.empty();
              for(var i14 = 0; i14 < results14.length; i14++) {
                (function() {
                  var iternode14 = $("<span>");
                  node87.append(iternode14);
                  var it;
                  it = mobl.ref(mobl.ref(results14), i14);
                  var result__ = it.get() == current.get();
                  var tmp82 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp82.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp82.set(it.get() == current.get());
                  }));
                  
                  
                  var node88 = $("<span>");
                  iternode14.append(node88);
                  var condSubs22 = new mobl.CompSubscription();
                  subs__.addSub(condSubs22);
                  var oldValue22;
                  var renderCond22 = function() {
                    var value66 = tmp82.get();
                    if(oldValue22 === value66) return;
                    oldValue22 = value66;
                    var subs__ = condSubs22;
                    subs__.unsubscribe();
                    node88.empty();
                    if(value66) {
                      var nodes100 = $("<span>");
                      node88.append(nodes100);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root155 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes101 = $("<span>");
                        root155.append(nodes101);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl32();
                        }));
                        
                        function renderControl32() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root156 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root156); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes101;
                            nodes101 = node.contents();
                            oldNodes.replaceWith(nodes101);
                          }));
                        }
                        renderControl32();
                        callback(root155); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes100;
                        nodes100 = node.contents();
                        oldNodes.replaceWith(nodes100);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp81 = mobl.ref(result__);
                      
                      var nodes102 = $("<span>");
                      node88.append(nodes102);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp81, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root157 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes103 = $("<span>");
                        root157.append(nodes103);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl33();
                        }));
                        
                        function renderControl33() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root158 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root158); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes103;
                            nodes103 = node.contents();
                            oldNodes.replaceWith(nodes103);
                          }));
                        }
                        renderControl33();
                        callback(root157); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes102;
                        nodes102 = node.contents();
                        oldNodes.replaceWith(nodes102);
                      }));
                      
                      
                    }
                  };
                  renderCond22();
                  subs__.addSub(tmp82.addEventListener('change', function() {
                    renderCond22();
                  }));
                  
                  
                  var oldNodes = iternode14;
                  iternode14 = iternode14.contents();
                  oldNodes.replaceWith(iternode14);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list14.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList14(true); }));
            });
          };
          renderList14();
          
          callback(root154); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes99;
          nodes99 = node.contents();
          oldNodes.replaceWith(nodes99);
        }));
        node83.append(node84);
        
        var node85 = $("<div>");
        node85.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node86 = $("<span>");
        node85.append(node86);
        var condSubs21 = new mobl.CompSubscription();
        subs__.addSub(condSubs21);
        var oldValue21;
        var renderCond21 = function() {
          var value65 = current.get();
          if(oldValue21 === value65) return;
          oldValue21 = value65;
          var subs__ = condSubs21;
          subs__.unsubscribe();
          node86.empty();
          if(value65) {
            var nodes97 = $("<span>");
            node86.append(nodes97);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl31();
            }));
            
            function renderControl31() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root152 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root152); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes97;
                nodes97 = node.contents();
                oldNodes.replaceWith(nodes97);
              }));
            }
            renderControl31();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp83 = mobl.ref(result__);
            
            var nodes98 = $("<span>");
            node86.append(nodes98);
            subs__.addSub((mobl.label)(tmp83, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root153 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root153); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes98;
              nodes98 = node.contents();
              oldNodes.replaceWith(nodes98);
            }));
            
            
          }
        };
        renderCond21();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond21();
        }));
        
        node83.append(node85);
        node82.append(node83);
        
        
        
        
        
        
      });
    } else {
      var nodes104 = $("<span>");
      node82.append(nodes104);
      subs__.addSub((ui.group)(function(_, callback) {
        var root159 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node89 = mobl.loadingSpan();
        root159.append(node89);
        var list15;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList15 = function() {
          var subs__ = listSubs__;
          list15 = items.get();
          list15.list(function(results15) {
            node89.empty();
            for(var i15 = 0; i15 < results15.length; i15++) {
              (function() {
                var iternode15 = $("<span>");
                node89.append(iternode15);
                var it;
                it = mobl.ref(mobl.ref(results15), i15);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp122 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp77 = mobl.ref(result__);
                
                var nodes105 = $("<span>");
                iternode15.append(nodes105);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp77, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root160 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes106 = $("<span>");
                  root160.append(nodes106);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl34();
                  }));
                  
                  function renderControl34() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root161 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root161); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes106;
                      nodes106 = node.contents();
                      oldNodes.replaceWith(nodes106);
                    }));
                  }
                  renderControl34();
                  callback(root160); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes105;
                  nodes105 = node.contents();
                  oldNodes.replaceWith(nodes105);
                }));
                
                var oldNodes = iternode15;
                iternode15 = iternode15.contents();
                oldNodes.replaceWith(iternode15);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList15(true); }));
          });
        };
        renderList15();
        
        callback(root159); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes104;
        nodes104 = node.contents();
        oldNodes.replaceWith(nodes104);
      }));
      
      
    }
  };
  renderCond20();
  subs__.addSub(tmp104.addEventListener('change', function() {
    renderCond20();
  }));
  
  callback(root151); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root162 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp80 = mobl.ref(result__);
  
  var nodes107 = $("<span>");
  root162.append(nodes107);
  subs__.addSub((ui.header)(tmp80, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root163 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp79 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp78 = mobl.ref(result__);
    
    var nodes108 = $("<span>");
    root163.append(nodes108);
    subs__.addSub((ui.backButton)(tmp78, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp79, function(_, callback) {
      var root164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes108;
      nodes108 = node.contents();
      oldNodes.replaceWith(nodes108);
    }));
    callback(root163); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes107;
    nodes107 = node.contents();
    oldNodes.replaceWith(nodes107);
  }));
  var nodes109 = $("<span>");
  root162.append(nodes109);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl35();
  }));
  
  function renderControl35() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root165); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes109;
      nodes109 = node.contents();
      oldNodes.replaceWith(nodes109);
    }));
  }
  renderControl35();
  callback(root162); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root166 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes110 = $("<span>");
  root166.append(nodes110);
  subs__.addSub((ui.group)(function(_, callback) {
    var root167 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node90 = mobl.loadingSpan();
    root167.append(node90);
    var list16;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList16 = function() {
      var subs__ = listSubs__;
      list16 = coll.get();
      list16.list(function(results16) {
        node90.empty();
        for(var i16 = 0; i16 < results16.length; i16++) {
          (function() {
            var iternode16 = $("<span>");
            node90.append(iternode16);
            var it;
            it = mobl.ref(mobl.ref(results16), i16);
            var result__ = it.get() == selected.get();
            var tmp85 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp85.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp85.set(it.get() == selected.get());
            }));
            
            
            var node91 = $("<span>");
            iternode16.append(node91);
            var condSubs23 = new mobl.CompSubscription();
            subs__.addSub(condSubs23);
            var oldValue23;
            var renderCond23 = function() {
              var value67 = tmp85.get();
              if(oldValue23 === value67) return;
              oldValue23 = value67;
              var subs__ = condSubs23;
              subs__.unsubscribe();
              node91.empty();
              if(value67) {
                var nodes111 = $("<span>");
                node91.append(nodes111);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root168 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes112 = $("<span>");
                  root168.append(nodes112);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl36();
                  }));
                  
                  function renderControl36() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root169 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root169); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes112;
                      nodes112 = node.contents();
                      oldNodes.replaceWith(nodes112);
                    }));
                  }
                  renderControl36();
                  callback(root168); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes111;
                  nodes111 = node.contents();
                  oldNodes.replaceWith(nodes111);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp84 = mobl.ref(result__);
                
                var nodes113 = $("<span>");
                node91.append(nodes113);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp84, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root170 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes114 = $("<span>");
                  root170.append(nodes114);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl37();
                  }));
                  
                  function renderControl37() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root171 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root171); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes114;
                      nodes114 = node.contents();
                      oldNodes.replaceWith(nodes114);
                    }));
                  }
                  renderControl37();
                  callback(root170); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes113;
                  nodes113 = node.contents();
                  oldNodes.replaceWith(nodes113);
                }));
                
                
              }
            };
            renderCond23();
            subs__.addSub(tmp85.addEventListener('change', function() {
              renderCond23();
            }));
            
            
            var oldNodes = iternode16;
            iternode16 = iternode16.contents();
            oldNodes.replaceWith(iternode16);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list16.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList16(true); }));
      });
    };
    renderList16();
    
    callback(root167); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes110;
    nodes110 = node.contents();
    oldNodes.replaceWith(nodes110);
  }));
  callback(root166); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root172 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp123 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp86 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp86.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp86.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp86.set(coll.get().limit(n.get()));
    }));
    
    
    var node92 = mobl.loadingSpan();
    root172.append(node92);
    var list17;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList17 = function() {
      var subs__ = listSubs__;
      list17 = tmp86.get();
      list17.list(function(results17) {
        node92.empty();
        for(var i17 = 0; i17 < results17.length; i17++) {
          (function() {
            var iternode17 = $("<span>");
            node92.append(iternode17);
            var it;
            it = mobl.ref(mobl.ref(results17), i17);
            var nodes115 = $("<span>");
            iternode17.append(nodes115);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl38();
            }));
            
            function renderControl38() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root173 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root173); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes115;
                nodes115 = node.contents();
                oldNodes.replaceWith(nodes115);
              }));
            }
            renderControl38();
            
            var oldNodes = iternode17;
            iternode17 = iternode17.contents();
            oldNodes.replaceWith(iternode17);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list17.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
        subs__.addSub(tmp86.addEventListener('change', function() { listSubs__.unsubscribe(); renderList17(true); }));
      });
    };
    renderList17();
    
    var result__ = n.get() < total.get();
    var tmp88 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp88.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp88.set(n.get() < total.get());
    }));
    
    
    var node93 = $("<span>");
    root172.append(node93);
    var condSubs24 = new mobl.CompSubscription();
    subs__.addSub(condSubs24);
    var oldValue24;
    var renderCond24 = function() {
      var value68 = tmp88.get();
      if(oldValue24 === value68) return;
      oldValue24 = value68;
      var subs__ = condSubs24;
      subs__.unsubscribe();
      node93.empty();
      if(value68) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp87 = mobl.ref(result__);
        
        var nodes116 = $("<span>");
        node93.append(nodes116);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp87, mobl.ref(null), function(_, callback) {
          var root174 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes117 = $("<span>");
          root174.append(nodes117);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root175 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root175); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes117;
            nodes117 = node.contents();
            oldNodes.replaceWith(nodes117);
          }));
          callback(root174); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes116;
          nodes116 = node.contents();
          oldNodes.replaceWith(nodes116);
        }));
        
        
      } else {
        
      }
    };
    renderCond24();
    subs__.addSub(tmp88.addEventListener('change', function() {
      renderCond24();
    }));
    
    callback(root172); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root176 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes118 = $("<span>");
  root176.append(nodes118);
  subs__.addSub((ui.group)(function(_, callback) {
    var root177 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node94 = mobl.loadingSpan();
    root177.append(node94);
    var list18;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList18 = function() {
      var subs__ = listSubs__;
      list18 = items.get();
      list18.list(function(results18) {
        node94.empty();
        for(var i18 = 0; i18 < results18.length; i18++) {
          (function() {
            var iternode18 = $("<span>");
            node94.append(iternode18);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results18), i18), "_1");it = mobl.ref(mobl.ref(mobl.ref(results18), i18), "_2");
            var nodes119 = $("<span>");
            iternode18.append(nodes119);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root178 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes120 = $("<span>");
              root178.append(nodes120);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root179 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root179); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes120;
                nodes120 = node.contents();
                oldNodes.replaceWith(nodes120);
              }));
              callback(root178); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes119;
              nodes119 = node.contents();
              oldNodes.replaceWith(nodes119);
            }));
            
            var oldNodes = iternode18;
            iternode18 = iternode18.contents();
            oldNodes.replaceWith(iternode18);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list18.addEventListener('change', function() { listSubs__.unsubscribe(); renderList18(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList18(true); }));
      });
    };
    renderList18();
    
    callback(root177); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes118;
    nodes118 = node.contents();
    oldNodes.replaceWith(nodes118);
  }));
  callback(root176); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root180 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll70) {
    coll70 = coll70.reverse();
    function processOne4() {
      var it;
      it = coll70.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll70.length > 0) processOne4(); else rest4();
      
    }
    function rest4() {
      var nodes121 = $("<span>");
      root180.append(nodes121);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root181 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp89 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp90 = mobl.ref(result__);
        
        var nodes122 = $("<span>");
        root181.append(nodes122);
        subs__.addSub((ui.backButton)(tmp90, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp89, function(_, callback) {
          var root182 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root182); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes122;
          nodes122 = node.contents();
          oldNodes.replaceWith(nodes122);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll69) {
                           coll69 = coll69.reverse();
                           function processOne3() {
                             var checked;var it;
                             var tmp125 = coll69.pop();
                             checked = tmp125._1;it = tmp125._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll69.length > 0) processOne3(); else rest3();
                               
                             } else {
                               {
                                 
                                 if(coll69.length > 0) processOne3(); else rest3();
                                 
                               }
                             }
                           }
                           function rest3() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll69.length > 0) processOne3(); else rest3();
                         });
                         
                       };
        var tmp91 = mobl.ref(result__);
        
        var nodes123 = $("<span>");
        root181.append(nodes123);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp91, function(_, callback) {
          var root183 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root183); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes123;
          nodes123 = node.contents();
          oldNodes.replaceWith(nodes123);
        }));
        callback(root181); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes121;
        nodes121 = node.contents();
        oldNodes.replaceWith(nodes121);
      }));
      var nodes124 = $("<span>");
      root180.append(nodes124);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root184); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes124;
        nodes124 = node.contents();
        oldNodes.replaceWith(nodes124);
      }));
      callback(root180); return subs__;
      
      
    }
    if(coll70.length > 0) processOne4(); else rest4();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root185 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes125 = $("<span>");
  root185.append(nodes125);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root186 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root186); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes125;
    nodes125 = node.contents();
    oldNodes.replaceWith(nodes125);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp92 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp92.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp92.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp92.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp92.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp92.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes126 = $("<span>");
  root185.append(nodes126);
  subs__.addSub((ui.masterDetail)(tmp92, masterItem, detailItem, function(_, callback) {
    var root187 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root187); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes126;
    nodes126 = node.contents();
    oldNodes.replaceWith(nodes126);
  }));
  callback(root185); return subs__;
  
  
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
  var root188 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes127 = $("<span>");
  root188.append(nodes127);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root189 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node95 = mobl.loadingSpan();
    root189.append(node95);
    var list19;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList19 = function() {
      var subs__ = listSubs__;
      list19 = sections.get();
      list19.list(function(results19) {
        node95.empty();
        for(var i19 = 0; i19 < results19.length; i19++) {
          (function() {
            var iternode19 = $("<span>");
            node95.append(iternode19);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results19), i19), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results19), i19), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp94 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp94.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp94.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp94.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp94.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp93 = mobl.ref(result__);
            
            var nodes128 = $("<span>");
            iternode19.append(nodes128);
            subs__.addSub((mobl.span)(tmp94, mobl.ref(null), tmp93, mobl.ref(null), function(_, callback) {
              var root190 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes129 = $("<span>");
              root190.append(nodes129);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root191 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root191); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes129;
                nodes129 = node.contents();
                oldNodes.replaceWith(nodes129);
              }));
              callback(root190); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes128;
              nodes128 = node.contents();
              oldNodes.replaceWith(nodes128);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp95 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp95.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp95.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp95.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp95.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes130 = $("<span>");
            iternode19.append(nodes130);
            subs__.addSub((mobl.block)(tmp95, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root192 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes131 = $("<span>");
              root192.append(nodes131);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl39();
              }));
              
              function renderControl39() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root193 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root193); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes131;
                  nodes131 = node.contents();
                  oldNodes.replaceWith(nodes131);
                }));
              }
              renderControl39();
              callback(root192); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes130;
              nodes130 = node.contents();
              oldNodes.replaceWith(nodes130);
            }));
            
            var oldNodes = iternode19;
            iternode19 = iternode19.contents();
            oldNodes.replaceWith(iternode19);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list19.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
      });
    };
    renderList19();
    
    callback(root189); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes127;
    nodes127 = node.contents();
    oldNodes.replaceWith(nodes127);
  }));
  callback(root188); return subs__;
  
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
  var root194 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node96 = $("<table>");
  
  var ref104 = style;
  if(ref104.get() !== null) {
    node96.attr('class', ref104.get());
    subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
      node96.attr('class', val);
    }));
    
  }
  subs__.addSub(ref104.rebind());
  
  var nodes132 = $("<span>");
  node96.append(nodes132);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl40();
  }));
  
  function renderControl40() {
    subs__.addSub((elements)(function(elements, callback) {
      var root195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root195); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes132;
      nodes132 = node.contents();
      oldNodes.replaceWith(nodes132);
    }));
  }
  renderControl40();
  root194.append(node96);
  callback(root194); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root196 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node97 = $("<tr>");
  
  var ref105 = style;
  if(ref105.get() !== null) {
    node97.attr('class', ref105.get());
    subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
      node97.attr('class', val);
    }));
    
  }
  subs__.addSub(ref105.rebind());
  
  var nodes133 = $("<span>");
  node97.append(nodes133);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl41();
  }));
  
  function renderControl41() {
    subs__.addSub((elements)(function(elements, callback) {
      var root197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root197); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes133;
      nodes133 = node.contents();
      oldNodes.replaceWith(nodes133);
    }));
  }
  renderControl41();
  root196.append(node97);
  callback(root196); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root198 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node98 = $("<td>");
  
  var ref106 = width;
  if(ref106.get() !== null) {
    node98.attr('width', ref106.get());
    subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
      node98.attr('width', val);
    }));
    
  }
  subs__.addSub(ref106.rebind());
  
  var ref107 = style;
  if(ref107.get() !== null) {
    node98.attr('class', ref107.get());
    subs__.addSub(ref107.addEventListener('change', function(_, ref, val) {
      node98.attr('class', val);
    }));
    
  }
  subs__.addSub(ref107.rebind());
  
  var nodes134 = $("<span>");
  node98.append(nodes134);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl42();
  }));
  
  function renderControl42() {
    subs__.addSub((elements)(function(elements, callback) {
      var root199 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root199); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes134;
      nodes134 = node.contents();
      oldNodes.replaceWith(nodes134);
    }));
  }
  renderControl42();
  root198.append(node98);
  callback(root198); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root200 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node99 = $("<td>");
  
  var ref108 = width;
  if(ref108.get() !== null) {
    node99.attr('width', ref108.get());
    subs__.addSub(ref108.addEventListener('change', function(_, ref, val) {
      node99.attr('width', val);
    }));
    
  }
  subs__.addSub(ref108.rebind());
  
  var ref109 = style;
  if(ref109.get() !== null) {
    node99.attr('class', ref109.get());
    subs__.addSub(ref109.addEventListener('change', function(_, ref, val) {
      node99.attr('class', val);
    }));
    
  }
  subs__.addSub(ref109.rebind());
  
  var nodes135 = $("<span>");
  node99.append(nodes135);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl43();
  }));
  
  function renderControl43() {
    subs__.addSub((elements)(function(elements, callback) {
      var root201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root201); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes135;
      nodes135 = node.contents();
      oldNodes.replaceWith(nodes135);
    }));
  }
  renderControl43();
  root200.append(node99);
  callback(root200); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root202 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node100 = $("<td>");
  
  var ref110 = width;
  if(ref110.get() !== null) {
    node100.attr('width', ref110.get());
    subs__.addSub(ref110.addEventListener('change', function(_, ref, val) {
      node100.attr('width', val);
    }));
    
  }
  subs__.addSub(ref110.rebind());
  
  var ref111 = style;
  if(ref111.get() !== null) {
    node100.attr('class', ref111.get());
    subs__.addSub(ref111.addEventListener('change', function(_, ref, val) {
      node100.attr('class', val);
    }));
    
  }
  subs__.addSub(ref111.rebind());
  
  
  var node101 = $("<strong>");
  
  var nodes136 = $("<span>");
  node101.append(nodes136);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl44();
  }));
  
  function renderControl44() {
    subs__.addSub((elements)(function(elements, callback) {
      var root203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes136;
      nodes136 = node.contents();
      oldNodes.replaceWith(nodes136);
    }));
  }
  renderControl44();
  node100.append(node101);
  root202.append(node100);
  callback(root202); return subs__;
  
  
  
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
  items.list(function(coll71) {
    coll71 = coll71.reverse();
    function processOne5() {
      var item;
      item = coll71.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll71.length > 0) processOne5(); else rest5();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll71.length > 0) processOne5(); else rest5();
          
        }
      }
    }
    function rest5() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll71.length > 0) processOne5(); else rest5();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root204 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes137 = $("<span>");
  root204.append(nodes137);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl45();
  }));
  
  function renderControl45() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root205); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes137;
      nodes137 = node.contents();
      oldNodes.replaceWith(nodes137);
    }));
  }
  renderControl45();
  callback(root204); return subs__;
  
  return subs__;
};

ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root206 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp105 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp105.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node102 = $("<span>");
  root206.append(node102);
  var condSubs25 = new mobl.CompSubscription();
  subs__.addSub(condSubs25);
  var oldValue25;
  var renderCond25 = function() {
    var value69 = tmp105.get();
    if(oldValue25 === value69) return;
    oldValue25 = value69;
    var subs__ = condSubs25;
    subs__.unsubscribe();
    node102.empty();
    if(value69) {
      
      var current = mobl.ref(null);
      
      var node103 = $("<div>");
      node103.attr('width', "100%");
      
      
      var node104 = $("<div>");
      node104.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes139 = $("<span>");
      node104.append(nodes139);
      subs__.addSub((ui.group)(function(_, callback) {
        var root208 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node107 = mobl.loadingSpan();
        root208.append(node107);
        var list20;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList20 = function() {
          var subs__ = listSubs__;
          list20 = items.get();
          list20.list(function(results20) {
            node107.empty();
            for(var i20 = 0; i20 < results20.length; i20++) {
              (function() {
                var iternode20 = $("<span>");
                node107.append(iternode20);
                var it;
                it = mobl.ref(mobl.ref(results20), i20);
                var result__ = it.get() == current.get();
                var tmp101 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp101.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp101.set(it.get() == current.get());
                }));
                
                
                var node108 = $("<span>");
                iternode20.append(node108);
                var condSubs27 = new mobl.CompSubscription();
                subs__.addSub(condSubs27);
                var oldValue27;
                var renderCond27 = function() {
                  var value71 = tmp101.get();
                  if(oldValue27 === value71) return;
                  oldValue27 = value71;
                  var subs__ = condSubs27;
                  subs__.unsubscribe();
                  node108.empty();
                  if(value71) {
                    var nodes140 = $("<span>");
                    node108.append(nodes140);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root209 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp132 = result__;
                        var tmp98 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp130 = result__;
                            var result__ = tmp130;
                            tmp98.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp131 = result__;
                            var result__ = tmp131;
                            tmp98.set(result__);
                            
                          });
                        }));
                        
                        var nodes141 = $("<span>");
                        root209.append(nodes141);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl47();
                        }));
                        
                        function renderControl47() {
                          subs__.addSub((masterItem.get())(it, tmp98, function(elements, callback) {
                            var root210 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root210); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes141;
                            nodes141 = node.contents();
                            oldNodes.replaceWith(nodes141);
                          }));
                        }
                        renderControl47();
                        callback(root209); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes140;
                      nodes140 = node.contents();
                      oldNodes.replaceWith(nodes140);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = true;
                                     ui.visible.set(result__);
                                     mathJAX.renderMaths(function(result__) {
                                       var tmp136 = result__;
                                       var result__ = plot.renderPlot("corePlotArea", current.get());
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   };
                    var tmp100 = mobl.ref(result__);
                    
                    var nodes142 = $("<span>");
                    node108.append(nodes142);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp100, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root211 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp135 = result__;
                        var tmp99 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp133 = result__;
                            var result__ = tmp133;
                            tmp99.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp134 = result__;
                            var result__ = tmp134;
                            tmp99.set(result__);
                            
                          });
                        }));
                        
                        var nodes143 = $("<span>");
                        root211.append(nodes143);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl48();
                        }));
                        
                        function renderControl48() {
                          subs__.addSub((masterItem.get())(it, tmp99, function(elements, callback) {
                            var root212 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root212); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes143;
                            nodes143 = node.contents();
                            oldNodes.replaceWith(nodes143);
                          }));
                        }
                        renderControl48();
                        callback(root211); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes142;
                      nodes142 = node.contents();
                      oldNodes.replaceWith(nodes142);
                    }));
                    
                    
                  }
                };
                renderCond27();
                subs__.addSub(tmp101.addEventListener('change', function() {
                  renderCond27();
                }));
                
                
                var oldNodes = iternode20;
                iternode20 = iternode20.contents();
                oldNodes.replaceWith(iternode20);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list20.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
          });
        };
        renderList20();
        
        callback(root208); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes139;
        nodes139 = node.contents();
        oldNodes.replaceWith(nodes139);
      }));
      node103.append(node104);
      
      var node105 = $("<div>");
      node105.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
      
      var result__ = current.get() && ui.visible.get();
      var tmp103 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        tmp103.set(current.get() && ui.visible.get());
      }));
      subs__.addSub(ui.visible.addEventListener('change', function() {
        tmp103.set(current.get() && ui.visible.get());
      }));
      
      
      var node106 = $("<span>");
      node105.append(node106);
      var condSubs26 = new mobl.CompSubscription();
      subs__.addSub(condSubs26);
      var oldValue26;
      var renderCond26 = function() {
        var value70 = tmp103.get();
        if(oldValue26 === value70) return;
        oldValue26 = value70;
        var subs__ = condSubs26;
        subs__.unsubscribe();
        node106.empty();
        if(value70) {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp129 = result__;
            var tmp102 = mobl.ref(result__);
            subs__.addSub(current.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp127 = result__;
                var result__ = tmp127;
                tmp102.set(result__);
                
              });
            }));
            subs__.addSub(items.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp128 = result__;
                var result__ = tmp128;
                tmp102.set(result__);
                
              });
            }));
            
            var nodes138 = $("<span>");
            node106.append(nodes138);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl46();
            }));
            
            function renderControl46() {
              subs__.addSub((detail.get())(current, tmp102, function(elements, callback) {
                var root207 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root207); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes138;
                nodes138 = node.contents();
                oldNodes.replaceWith(nodes138);
              }));
            }
            renderControl46();
            
            
          });
        } else {
          
        }
      };
      renderCond26();
      subs__.addSub(tmp103.addEventListener('change', function() {
        renderCond26();
      }));
      
      node103.append(node105);
      node102.append(node103);
      
      
      
      
      
      
    } else {
      
      var current = mobl.ref(null);
      var nodes144 = $("<span>");
      node102.append(nodes144);
      subs__.addSub((ui.group)(function(_, callback) {
        var root213 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node109 = mobl.loadingSpan();
        root213.append(node109);
        var list21;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList21 = function() {
          var subs__ = listSubs__;
          list21 = items.get();
          list21.list(function(results21) {
            node109.empty();
            for(var i21 = 0; i21 < results21.length; i21++) {
              (function() {
                var iternode21 = $("<span>");
                node109.append(iternode21);
                var it;
                it = mobl.ref(mobl.ref(results21), i21);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mathJAX.renderMaths(function(result__) {
                                   var tmp140 = result__;
                                   var result__ = plot.renderPlot("corePlotArea", it.get());
                                   mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp141 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
                               };
                var tmp97 = mobl.ref(result__);
                
                var nodes145 = $("<span>");
                iternode21.append(nodes145);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp97, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root214 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp139 = result__;
                    var tmp96 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp137 = result__;
                        var result__ = tmp137;
                        tmp96.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp138 = result__;
                        var result__ = tmp138;
                        tmp96.set(result__);
                        
                      });
                    }));
                    
                    var nodes146 = $("<span>");
                    root214.append(nodes146);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl49();
                    }));
                    
                    function renderControl49() {
                      subs__.addSub((masterItem.get())(it, tmp96, function(elements, callback) {
                        var root215 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root215); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes146;
                        nodes146 = node.contents();
                        oldNodes.replaceWith(nodes146);
                      }));
                    }
                    renderControl49();
                    callback(root214); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes145;
                  nodes145 = node.contents();
                  oldNodes.replaceWith(nodes145);
                }));
                
                var oldNodes = iternode21;
                iternode21 = iternode21.contents();
                oldNodes.replaceWith(iternode21);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list21.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
          });
        };
        renderList21();
        
        callback(root213); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes144;
        nodes144 = node.contents();
        oldNodes.replaceWith(nodes144);
      }));
      
      
    }
  };
  renderCond25();
  subs__.addSub(tmp105.addEventListener('change', function() {
    renderCond25();
  }));
  
  callback(root206); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root216 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes147 = $("<span>");
  root216.append(nodes147);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root217 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes148 = $("<span>");
    root217.append(nodes148);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root218); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes148;
      nodes148 = node.contents();
      oldNodes.replaceWith(nodes148);
    }));
    callback(root217); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes147;
    nodes147 = node.contents();
    oldNodes.replaceWith(nodes147);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes149 = $("<span>");
  root216.append(nodes149);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root219 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root219); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes149;
    nodes149 = node.contents();
    oldNodes.replaceWith(nodes149);
  }));
  callback(root216); return subs__;
  
  
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
