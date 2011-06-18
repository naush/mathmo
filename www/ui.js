mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1475 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node627 = $("<span>");
  root1475.append(node627);
  var condSubs151 = new mobl.CompSubscription();
  subs__.addSub(condSubs151);
  var oldValue151;
  var renderCond151 = function() {
    var value1143 = value.get();
    if(oldValue151 === value1143) return;
    oldValue151 = value1143;
    var subs__ = condSubs151;
    subs__.unsubscribe();
    node627.empty();
    if(value1143) {
      var nodes1083 = $("<span>");
      node627.append(nodes1083);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl257();
      }));
      
      function renderControl257() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1476 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1476); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1083;
          nodes1083 = node.contents();
          oldNodes.replaceWith(nodes1083);
        }));
      }
      renderControl257();
      
      
    } else {
      var nodes1084 = $("<span>");
      node627.append(nodes1084);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1477 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1085 = $("<span>");
        root1477.append(nodes1085);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1478 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1478); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1085;
          nodes1085 = node.contents();
          oldNodes.replaceWith(nodes1085);
        }));
        var nodes1086 = $("<span>");
        root1477.append(nodes1086);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1479 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1479); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1086;
          nodes1086 = node.contents();
          oldNodes.replaceWith(nodes1086);
        }));
        callback(root1477); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1084;
        nodes1084 = node.contents();
        oldNodes.replaceWith(nodes1084);
      }));
      
      
    }
  };
  renderCond151();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond151();
  }));
  
  callback(root1475); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1480 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node628 = $("<div>");
  
  var ref628 = mobl.ref(ui.headerStyle);
  if(ref628.get() !== null) {
    node628.attr('class', ref628.get());
    subs__.addSub(ref628.addEventListener('change', function(_, ref, val) {
      node628.attr('class', val);
    }));
    
  }
  subs__.addSub(ref628.rebind());
  
  var val321 = onclick.get();
  if(val321 !== null) {
    subs__.addSub(mobl.domBind(node628, 'tap', val321));
  }
  
  var ref629 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref629.get() !== null) {
    node628.attr('style', ref629.get());
    subs__.addSub(ref629.addEventListener('change', function(_, ref, val) {
      node628.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node628.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref629.rebind());
  
  
  var node631 = $("<div>");
  
  var ref627 = mobl.ref(ui.headerContainerStyle);
  if(ref627.get() !== null) {
    node631.attr('class', ref627.get());
    subs__.addSub(ref627.addEventListener('change', function(_, ref, val) {
      node631.attr('class', val);
    }));
    
  }
  subs__.addSub(ref627.rebind());
  
  
  var node632 = $("<div>");
  
  var ref625 = text;
  node632.text(""+ref625.get());
  var ignore123 = false;
  subs__.addSub(ref625.addEventListener('change', function(_, ref, val) {
    if(ignore123) return;
    node632.text(""+val);
  }));
  subs__.addSub(ref625.rebind());
  
  
  var ref626 = mobl.ref(ui.headerTextStyle);
  if(ref626.get() !== null) {
    node632.attr('class', ref626.get());
    subs__.addSub(ref626.addEventListener('change', function(_, ref, val) {
      node632.attr('class', val);
    }));
    
  }
  subs__.addSub(ref626.rebind());
  
  node631.append(node632);
  node628.append(node631);
  var nodes1087 = $("<span>");
  node628.append(nodes1087);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl258();
  }));
  
  function renderControl258() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1481 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1481); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1087;
      nodes1087 = node.contents();
      oldNodes.replaceWith(nodes1087);
    }));
  }
  renderControl258();
  root1480.append(node628);
  
  var node629 = $("<span>");
  root1480.append(node629);
  var condSubs152 = new mobl.CompSubscription();
  subs__.addSub(condSubs152);
  var oldValue152;
  var renderCond152 = function() {
    var value1144 = fixedPosition.get();
    if(oldValue152 === value1144) return;
    oldValue152 = value1144;
    var subs__ = condSubs152;
    subs__.unsubscribe();
    node629.empty();
    if(value1144) {
      
      var node630 = $("<div>");
      node630.attr('id', "hello");
      node630.attr('style', "height: 2.9em;");
      
      node629.append(node630);
      
      
    } else {
      
    }
  };
  renderCond152();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond152();
  }));
  
  callback(root1480); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1482 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref630 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref630.get() !== null) {
    sp.attr('class', ref630.get());
    subs__.addSub(ref630.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref630.rebind());
  
  var val322 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val322 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val322));
  }
  
  var val323 = function(event, callback) {
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
  if(val323 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val323));
  }
  
  var val324 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after99(result__) {
                    var tmp1031 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after99);if(result__ !== undefined) after99(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val324 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val324));
  }
  
  var val325 = function(event, callback) {
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
  if(val325 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val325));
  }
  
  var ref631 = text;
  sp.text(""+ref631.get());
  var ignore124 = false;
  subs__.addSub(ref631.addEventListener('change', function(_, ref, val) {
    if(ignore124) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref631.rebind());
  
  
  root1482.append(sp);
  callback(root1482); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1483 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1088 = $("<span>");
  root1483.append(nodes1088);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1484 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1484); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1088;
    nodes1088 = node.contents();
    oldNodes.replaceWith(nodes1088);
  }));
  callback(root1483); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1485 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1089 = $("<span>");
  root1485.append(nodes1089);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1486 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1486); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1089;
    nodes1089 = node.contents();
    oldNodes.replaceWith(nodes1089);
  }));
  callback(root1485); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1487 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node633 = $("<ul>");
  
  var ref632 = mobl.ref(ui.groupStyle);
  if(ref632.get() !== null) {
    node633.attr('class', ref632.get());
    subs__.addSub(ref632.addEventListener('change', function(_, ref, val) {
      node633.attr('class', val);
    }));
    
  }
  subs__.addSub(ref632.rebind());
  
  var nodes1090 = $("<span>");
  node633.append(nodes1090);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl259();
  }));
  
  function renderControl259() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1488); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1090;
      nodes1090 = node.contents();
      oldNodes.replaceWith(nodes1090);
    }));
  }
  renderControl259();
  root1487.append(node633);
  callback(root1487); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1489 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node634 = $("<img>");
  
  var ref633 = url;
  if(ref633.get() !== null) {
    node634.attr('src', ref633.get());
    subs__.addSub(ref633.addEventListener('change', function(_, ref, val) {
      node634.attr('src', val);
    }));
    
  }
  subs__.addSub(ref633.rebind());
  
  var ref634 = width;
  if(ref634.get() !== null) {
    node634.attr('width', ref634.get());
    subs__.addSub(ref634.addEventListener('change', function(_, ref, val) {
      node634.attr('width', val);
    }));
    
  }
  subs__.addSub(ref634.rebind());
  
  var ref635 = height;
  if(ref635.get() !== null) {
    node634.attr('height', ref635.get());
    subs__.addSub(ref635.addEventListener('change', function(_, ref, val) {
      node634.attr('height', val);
    }));
    
  }
  subs__.addSub(ref635.rebind());
  
  var ref636 = style;
  if(ref636.get() !== null) {
    node634.attr('class', ref636.get());
    subs__.addSub(ref636.addEventListener('change', function(_, ref, val) {
      node634.attr('class', val);
    }));
    
  }
  subs__.addSub(ref636.rebind());
  
  var val326 = onclick.get();
  if(val326 !== null) {
    subs__.addSub(mobl.domBind(node634, 'tap', val326));
  }
  
  var ref637 = valign;
  if(ref637.get() !== null) {
    node634.attr('valign', ref637.get());
    subs__.addSub(ref637.addEventListener('change', function(_, ref, val) {
      node634.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref637.rebind());
  
  var ref638 = align;
  if(ref638.get() !== null) {
    node634.attr('align', ref638.get());
    subs__.addSub(ref638.addEventListener('change', function(_, ref, val) {
      node634.attr('align', val);
    }));
    
  }
  subs__.addSub(ref638.rebind());
  
  root1489.append(node634);
  callback(root1489); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1490 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref639 = mobl.ref(ui.itemStyle);
  if(ref639.get() !== null) {
    el.attr('class', ref639.get());
    subs__.addSub(ref639.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref639.rebind());
  
  var ref640 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref640.get() !== null) {
    el.attr('class', ref640.get());
    subs__.addSub(ref640.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref640.rebind());
  
  var val327 = onswipe.get();
  if(val327 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val327));
  }
  
  var val328 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1032 = result__;
                                           function after100(result__) {
                                             var tmp1033 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after100);if(result__ !== undefined) after100(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1034 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val328 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val328));
  }
  
  var nodes1091 = $("<span>");
  el.append(nodes1091);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl260();
  }));
  
  function renderControl260() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1491 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1491); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1091;
      nodes1091 = node.contents();
      oldNodes.replaceWith(nodes1091);
    }));
  }
  renderControl260();
  root1490.append(el);
  callback(root1490); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1492 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node635 = $("<input>");
  node635.attr('type', "checkbox");
  
  var ref642 = b;
  node635.attr('checked', !!ref642.get());
  subs__.addSub(ref642.addEventListener('change', function(_, ref, val) {
    if(ref === ref642) node635.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node635, 'change', function() {
    b.set(!!node635.attr('checked'));
  }));
  
  var val330 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val330 !== null) {
    subs__.addSub(mobl.domBind(node635, 'tap', val330));
  }
  
  var val331 = onchange.get();
  if(val331 !== null) {
    subs__.addSub(mobl.domBind(node635, 'change', val331));
  }
  
  root1492.append(node635);
  
  root1492.append(" ");
  
  var node636 = $("<span>");
  
  var ref641 = label;
  node636.text(""+ref641.get());
  var ignore125 = false;
  subs__.addSub(ref641.addEventListener('change', function(_, ref, val) {
    if(ignore125) return;
    node636.text(""+val);
  }));
  subs__.addSub(ref641.rebind());
  
  
  var val329 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after101(result__) {
                    var tmp1035 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after101);if(result__ !== undefined) after101(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val329 !== null) {
    subs__.addSub(mobl.domBind(node636, 'tap', val329));
  }
  
  root1492.append(node636);
  callback(root1492); return subs__;
  
  
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
  var root1493 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node637 = $("<span>");
  root1493.append(node637);
  var condSubs153 = new mobl.CompSubscription();
  subs__.addSub(condSubs153);
  var oldValue153;
  var renderCond153 = function() {
    var value1145 = label.get();
    if(oldValue153 === value1145) return;
    oldValue153 = value1145;
    var subs__ = condSubs153;
    subs__.unsubscribe();
    node637.empty();
    if(value1145) {
      var nodes1092 = $("<span>");
      node637.append(nodes1092);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1494 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1494); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1092;
        nodes1092 = node.contents();
        oldNodes.replaceWith(nodes1092);
      }));
      
      
    } else {
      
    }
  };
  renderCond153();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond153();
  }));
  
  
  var node638 = $("<span>");
  root1493.append(node638);
  var condSubs154 = new mobl.CompSubscription();
  subs__.addSub(condSubs154);
  var oldValue154;
  var renderCond154 = function() {
    var value1146 = validator.get();
    if(oldValue154 === value1146) return;
    oldValue154 = value1146;
    var subs__ = condSubs154;
    subs__.unsubscribe();
    node638.empty();
    if(value1146) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after105(result__) {
        var tmp1036 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1037 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node639 = $("<input>");
        
        var ref643 = inputType;
        if(ref643.get() !== null) {
          node639.attr('type', ref643.get());
          subs__.addSub(ref643.addEventListener('change', function(_, ref, val) {
            node639.attr('type', val);
          }));
          
        }
        subs__.addSub(ref643.rebind());
        
        var ref644 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref644.get() !== null) {
          node639.attr('class', ref644.get());
          subs__.addSub(ref644.addEventListener('change', function(_, ref, val) {
            node639.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node639.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node639.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node639.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref644.rebind());
        
        var ref645 = placeholder;
        if(ref645.get() !== null) {
          node639.attr('placeholder', ref645.get());
          subs__.addSub(ref645.addEventListener('change', function(_, ref, val) {
            node639.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref645.rebind());
        
        var ref646 = temp;
        node639.val(""+ref646.get());
        var ignore126 = false;
        subs__.addSub(ref646.addEventListener('change', function(_, ref, val) {
          if(ignore126) return;
          node639.val(""+val);
        }));
        subs__.addSub(ref646.rebind());
        
        subs__.addSub(mobl.domBind(node639, 'keyup change', function() {
          ignore126 = true;
          temp.set(mobl.stringTomobl__String(node639.val()));
          ignore126 = false;
        }));
        
        
        var val332 = onchange.get();
        if(val332 !== null) {
          subs__.addSub(mobl.domBind(node639, 'change', val332));
        }
        
        var val333 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after102(result__) {
                          var tmp1038 = result__;
                          function after103(result__) {
                            var tmp1039 = result__;
                            var result__ = tmp1039;
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
                          var result__ = validator.get()(temp.get(), after103);if(result__ !== undefined) after103(result__);
                        }
                        var result__ = onkeyup.get()(event, after102);if(result__ !== undefined) after102(result__);
                      } else {
                        {
                          function after104(result__) {
                            var tmp1039 = result__;
                            var result__ = tmp1039;
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
                          var result__ = validator.get()(temp.get(), after104);if(result__ !== undefined) after104(result__);
                        }
                      }
                    };
        if(val333 !== null) {
          subs__.addSub(mobl.domBind(node639, 'keyup', val333));
        }
        
        var val334 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val334 !== null) {
          subs__.addSub(mobl.domBind(node639, 'blur', val334));
        }
        
        node638.append(node639);
        var nodes1093 = $("<span>");
        node638.append(nodes1093);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1495 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1495); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1093;
          nodes1093 = node.contents();
          oldNodes.replaceWith(nodes1093);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after105);if(result__ !== undefined) after105(result__);
    } else {
      
      var node640 = $("<input>");
      
      var ref647 = inputType;
      if(ref647.get() !== null) {
        node640.attr('type', ref647.get());
        subs__.addSub(ref647.addEventListener('change', function(_, ref, val) {
          node640.attr('type', val);
        }));
        
      }
      subs__.addSub(ref647.rebind());
      
      var ref648 = style;
      if(ref648.get() !== null) {
        node640.attr('class', ref648.get());
        subs__.addSub(ref648.addEventListener('change', function(_, ref, val) {
          node640.attr('class', val);
        }));
        
      }
      subs__.addSub(ref648.rebind());
      
      var ref649 = placeholder;
      if(ref649.get() !== null) {
        node640.attr('placeholder', ref649.get());
        subs__.addSub(ref649.addEventListener('change', function(_, ref, val) {
          node640.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref649.rebind());
      
      var ref650 = s;
      node640.val(""+ref650.get());
      var ignore127 = false;
      subs__.addSub(ref650.addEventListener('change', function(_, ref, val) {
        if(ignore127) return;
        node640.val(""+val);
      }));
      subs__.addSub(ref650.rebind());
      
      subs__.addSub(mobl.domBind(node640, 'keyup change', function() {
        ignore127 = true;
        s.set(mobl.stringTomobl__String(node640.val()));
        ignore127 = false;
      }));
      
      
      var val335 = onchange.get();
      if(val335 !== null) {
        subs__.addSub(mobl.domBind(node640, 'change', val335));
      }
      
      var val336 = onkeyup.get();
      if(val336 !== null) {
        subs__.addSub(mobl.domBind(node640, 'keyup', val336));
      }
      
      var val337 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val337 !== null) {
        subs__.addSub(mobl.domBind(node640, 'blur', val337));
      }
      
      node638.append(node640);
      
      
    }
  };
  renderCond154();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond154();
  }));
  
  callback(root1493); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1496 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1094 = $("<span>");
  root1496.append(nodes1094);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1497 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1497); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1094;
    nodes1094 = node.contents();
    oldNodes.replaceWith(nodes1094);
  }));
  callback(root1496); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1498 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1095 = $("<span>");
  root1498.append(nodes1095);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1499 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1499); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1095;
    nodes1095 = node.contents();
    oldNodes.replaceWith(nodes1095);
  }));
  callback(root1498); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1500 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node641 = $("<span>");
  root1500.append(node641);
  var condSubs155 = new mobl.CompSubscription();
  subs__.addSub(condSubs155);
  var oldValue155;
  var renderCond155 = function() {
    var value1147 = label.get();
    if(oldValue155 === value1147) return;
    oldValue155 = value1147;
    var subs__ = condSubs155;
    subs__.unsubscribe();
    node641.empty();
    if(value1147) {
      var nodes1096 = $("<span>");
      node641.append(nodes1096);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1501 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1501); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1096;
        nodes1096 = node.contents();
        oldNodes.replaceWith(nodes1096);
      }));
      
      
    } else {
      
    }
  };
  renderCond155();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond155();
  }));
  
  
  var node642 = $("<input>");
  node642.attr('type', "range");
  
  var ref651 = n;
  node642.val(""+ref651.get());
  var ignore128 = false;
  subs__.addSub(ref651.addEventListener('change', function(_, ref, val) {
    if(ignore128) return;
    node642.val(""+val);
  }));
  subs__.addSub(ref651.rebind());
  
  subs__.addSub(mobl.domBind(node642, 'keyup change', function() {
    ignore128 = true;
    n.set(mobl.stringTomobl__Num(node642.val()));
    ignore128 = false;
  }));
  
  
  var ref652 = min;
  if(ref652.get() !== null) {
    node642.attr('min', ref652.get());
    subs__.addSub(ref652.addEventListener('change', function(_, ref, val) {
      node642.attr('min', val);
    }));
    
  }
  subs__.addSub(ref652.rebind());
  
  var ref653 = max;
  if(ref653.get() !== null) {
    node642.attr('max', ref653.get());
    subs__.addSub(ref653.addEventListener('change', function(_, ref, val) {
      node642.attr('max', val);
    }));
    
  }
  subs__.addSub(ref653.rebind());
  
  var ref654 = step;
  if(ref654.get() !== null) {
    node642.attr('step', ref654.get());
    subs__.addSub(ref654.addEventListener('change', function(_, ref, val) {
      node642.attr('step', val);
    }));
    
  }
  subs__.addSub(ref654.rebind());
  node642.attr('style', "width: 99%;");
  
  var val338 = onchange.get();
  if(val338 !== null) {
    subs__.addSub(mobl.domBind(node642, 'change', val338));
  }
  
  var val339 = onkeyup.get();
  if(val339 !== null) {
    subs__.addSub(mobl.domBind(node642, 'keyup', val339));
  }
  
  var ref655 = placeholder;
  if(ref655.get() !== null) {
    node642.attr('placeholder', ref655.get());
    subs__.addSub(ref655.addEventListener('change', function(_, ref, val) {
      node642.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref655.rebind());
  
  root1500.append(node642);
  callback(root1500); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1502 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after106(result__) {
      var tmp1040 = result__;
      var result__ = tmp1040;
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
    var result__ = validator.get()(n2, after106);if(result__ !== undefined) after106(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1097 = $("<span>");
  root1502.append(nodes1097);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1503 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1503); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1097;
    nodes1097 = node.contents();
    oldNodes.replaceWith(nodes1097);
  }));
  callback(root1502); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1504 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node643 = $("<span>");
  root1504.append(node643);
  var condSubs156 = new mobl.CompSubscription();
  subs__.addSub(condSubs156);
  var oldValue156;
  var renderCond156 = function() {
    var value1148 = label.get();
    if(oldValue156 === value1148) return;
    oldValue156 = value1148;
    var subs__ = condSubs156;
    subs__.unsubscribe();
    node643.empty();
    if(value1148) {
      
      var node644 = $("<span>");
      node644.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref659 = label;
      node644.text(""+ref659.get());
      var ignore130 = false;
      subs__.addSub(ref659.addEventListener('change', function(_, ref, val) {
        if(ignore130) return;
        node644.text(""+val);
      }));
      subs__.addSub(ref659.rebind());
      
      
      node643.append(node644);
      
      var node645 = $("<span>");
      node645.attr('style', "float: left");
      
      
      var node646 = $("<input>");
      node646.attr('type', "password");
      
      var ref656 = style;
      if(ref656.get() !== null) {
        node646.attr('class', ref656.get());
        subs__.addSub(ref656.addEventListener('change', function(_, ref, val) {
          node646.attr('class', val);
        }));
        
      }
      subs__.addSub(ref656.rebind());
      
      var ref657 = placeholder;
      if(ref657.get() !== null) {
        node646.attr('placeholder', ref657.get());
        subs__.addSub(ref657.addEventListener('change', function(_, ref, val) {
          node646.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref657.rebind());
      
      var ref658 = s;
      node646.val(""+ref658.get());
      var ignore129 = false;
      subs__.addSub(ref658.addEventListener('change', function(_, ref, val) {
        if(ignore129) return;
        node646.val(""+val);
      }));
      subs__.addSub(ref658.rebind());
      
      subs__.addSub(mobl.domBind(node646, 'keyup change', function() {
        ignore129 = true;
        s.set(mobl.stringTomobl__String(node646.val()));
        ignore129 = false;
      }));
      
      
      var val340 = onchange.get();
      if(val340 !== null) {
        subs__.addSub(mobl.domBind(node646, 'change', val340));
      }
      
      var val341 = onkeyup.get();
      if(val341 !== null) {
        subs__.addSub(mobl.domBind(node646, 'keyup', val341));
      }
      
      var val342 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val342 !== null) {
        subs__.addSub(mobl.domBind(node646, 'blur', val342));
      }
      
      node645.append(node646);
      node643.append(node645);
      
      
      
      
    } else {
      
      var node647 = $("<input>");
      node647.attr('type', "password");
      
      var ref660 = style;
      if(ref660.get() !== null) {
        node647.attr('class', ref660.get());
        subs__.addSub(ref660.addEventListener('change', function(_, ref, val) {
          node647.attr('class', val);
        }));
        
      }
      subs__.addSub(ref660.rebind());
      
      var ref661 = placeholder;
      if(ref661.get() !== null) {
        node647.attr('placeholder', ref661.get());
        subs__.addSub(ref661.addEventListener('change', function(_, ref, val) {
          node647.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref661.rebind());
      
      var ref662 = s;
      node647.val(""+ref662.get());
      var ignore131 = false;
      subs__.addSub(ref662.addEventListener('change', function(_, ref, val) {
        if(ignore131) return;
        node647.val(""+val);
      }));
      subs__.addSub(ref662.rebind());
      
      subs__.addSub(mobl.domBind(node647, 'keyup change', function() {
        ignore131 = true;
        s.set(mobl.stringTomobl__String(node647.val()));
        ignore131 = false;
      }));
      
      
      var val343 = onchange.get();
      if(val343 !== null) {
        subs__.addSub(mobl.domBind(node647, 'change', val343));
      }
      
      var val344 = onkeyup.get();
      if(val344 !== null) {
        subs__.addSub(mobl.domBind(node647, 'keyup', val344));
      }
      
      var val345 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val345 !== null) {
        subs__.addSub(mobl.domBind(node647, 'blur', val345));
      }
      
      node643.append(node647);
      
      
    }
  };
  renderCond156();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond156();
  }));
  
  callback(root1504); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1505 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref667 = style;
  if(ref667.get() !== null) {
    sel.attr('class', ref667.get());
    subs__.addSub(ref667.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref667.rebind());
  
  var val346 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after107(result__) {
                    var tmp1042 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after107);if(result__ !== undefined) after107(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val346 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val346));
  }
  
  
  var node648 = mobl.loadingSpan();
  sel.append(node648);
  var list113;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList113 = function() {
    var subs__ = listSubs__;
    list113 = options.get();
    list113.list(function(results113) {
      node648.empty();
      for(var i245 = 0; i245 < results113.length; i245++) {
        (function() {
          var iternode113 = $("<span>");
          node648.append(iternode113);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results113), i245), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results113), i245), "_2");
          
          var node649 = $("<option>");
          
          var ref663 = optionDescription;
          node649.text(""+ref663.get());
          var ignore132 = false;
          subs__.addSub(ref663.addEventListener('change', function(_, ref, val) {
            if(ignore132) return;
            node649.text(""+val);
          }));
          subs__.addSub(ref663.rebind());
          
          
          var ref664 = optionStyle;
          if(ref664.get() !== null) {
            node649.attr('class', ref664.get());
            subs__.addSub(ref664.addEventListener('change', function(_, ref, val) {
              node649.attr('class', val);
            }));
            
          }
          subs__.addSub(ref664.rebind());
          
          var ref665 = optionValue;
          if(ref665.get() !== null) {
            node649.attr('value', ref665.get());
            subs__.addSub(ref665.addEventListener('change', function(_, ref, val) {
              node649.attr('value', val);
            }));
            
          }
          subs__.addSub(ref665.rebind());
          
          var ref666 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref666.get() !== null) {
            node649.attr('selected', ref666.get());
            subs__.addSub(ref666.addEventListener('change', function(_, ref, val) {
              node649.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node649.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node649.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref666.rebind());
          
          iternode113.append(node649);
          
          var oldNodes = iternode113;
          iternode113 = iternode113.contents();
          oldNodes.replaceWith(iternode113);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list113.addEventListener('change', function() { listSubs__.unsubscribe(); renderList113(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList113(true); }));
    });
  };
  renderList113();
  
  root1505.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1505); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1506 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1098 = $("<span>");
    root1506.append(nodes1098);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1507 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node650 = mobl.loadingSpan();
      root1507.append(node650);
      var list114;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList114 = function() {
        var subs__ = listSubs__;
        list114 = tabs.get();
        list114.list(function(results114) {
          node650.empty();
          for(var i246 = 0; i246 < results114.length; i246++) {
            (function() {
              var iternode114 = $("<span>");
              node650.append(iternode114);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results114), i246), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results114), i246), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results114), i246), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp1005 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1005.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1005.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp1005.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp1005.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp1004 = mobl.ref(result__);
              
              var nodes1099 = $("<span>");
              iternode114.append(nodes1099);
              subs__.addSub((mobl.span)(tmp1005, mobl.ref(null), tmp1004, mobl.ref(null), function(_, callback) {
                var root1508 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1100 = $("<span>");
                root1508.append(nodes1100);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1509 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1509); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1100;
                  nodes1100 = node.contents();
                  oldNodes.replaceWith(nodes1100);
                }));
                callback(root1508); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1099;
                nodes1099 = node.contents();
                oldNodes.replaceWith(nodes1099);
              }));
              
              var oldNodes = iternode114;
              iternode114 = iternode114.contents();
              oldNodes.replaceWith(iternode114);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list114.addEventListener('change', function() { listSubs__.unsubscribe(); renderList114(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList114(true); }));
        });
      };
      renderList114();
      
      callback(root1507); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1098;
      nodes1098 = node.contents();
      oldNodes.replaceWith(nodes1098);
    }));
    
    var node651 = mobl.loadingSpan();
    root1506.append(node651);
    var list115;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList115 = function() {
      var subs__ = listSubs__;
      list115 = tabs.get();
      list115.list(function(results115) {
        node651.empty();
        for(var i247 = 0; i247 < results115.length; i247++) {
          (function() {
            var iternode115 = $("<span>");
            node651.append(iternode115);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results115), i247), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results115), i247), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results115), i247), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp1006 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp1006.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1006.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp1006.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp1006.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1101 = $("<span>");
            iternode115.append(nodes1101);
            subs__.addSub((mobl.block)(tmp1006, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1510 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1102 = $("<span>");
              root1510.append(nodes1102);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1511 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1103 = $("<span>");
                root1511.append(nodes1103);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl261();
                }));
                
                function renderControl261() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1512 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1512); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1103;
                    nodes1103 = node.contents();
                    oldNodes.replaceWith(nodes1103);
                  }));
                }
                renderControl261();
                callback(root1511); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1102;
                nodes1102 = node.contents();
                oldNodes.replaceWith(nodes1102);
              }));
              callback(root1510); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1101;
              nodes1101 = node.contents();
              oldNodes.replaceWith(nodes1101);
            }));
            
            var oldNodes = iternode115;
            iternode115 = iternode115.contents();
            oldNodes.replaceWith(iternode115);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list115.addEventListener('change', function() { listSubs__.unsubscribe(); renderList115(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList115(true); }));
      });
    };
    renderList115();
    
    callback(root1506); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1098 = $("<span>");
      root1506.append(nodes1098);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1507 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node650 = mobl.loadingSpan();
        root1507.append(node650);
        var list114;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList114 = function() {
          var subs__ = listSubs__;
          list114 = tabs.get();
          list114.list(function(results114) {
            node650.empty();
            for(var i246 = 0; i246 < results114.length; i246++) {
              (function() {
                var iternode114 = $("<span>");
                node650.append(iternode114);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results114), i246), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results114), i246), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results114), i246), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp1005 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp1005.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp1005.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp1005.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp1005.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1004 = mobl.ref(result__);
                
                var nodes1099 = $("<span>");
                iternode114.append(nodes1099);
                subs__.addSub((mobl.span)(tmp1005, mobl.ref(null), tmp1004, mobl.ref(null), function(_, callback) {
                  var root1508 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1100 = $("<span>");
                  root1508.append(nodes1100);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1509 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1509); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1100;
                    nodes1100 = node.contents();
                    oldNodes.replaceWith(nodes1100);
                  }));
                  callback(root1508); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1099;
                  nodes1099 = node.contents();
                  oldNodes.replaceWith(nodes1099);
                }));
                
                var oldNodes = iternode114;
                iternode114 = iternode114.contents();
                oldNodes.replaceWith(iternode114);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list114.addEventListener('change', function() { listSubs__.unsubscribe(); renderList114(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList114(true); }));
          });
        };
        renderList114();
        
        callback(root1507); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1098;
        nodes1098 = node.contents();
        oldNodes.replaceWith(nodes1098);
      }));
      
      var node651 = mobl.loadingSpan();
      root1506.append(node651);
      var list115;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList115 = function() {
        var subs__ = listSubs__;
        list115 = tabs.get();
        list115.list(function(results115) {
          node651.empty();
          for(var i247 = 0; i247 < results115.length; i247++) {
            (function() {
              var iternode115 = $("<span>");
              node651.append(iternode115);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results115), i247), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results115), i247), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results115), i247), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp1006 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1006.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1006.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp1006.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp1006.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1101 = $("<span>");
              iternode115.append(nodes1101);
              subs__.addSub((mobl.block)(tmp1006, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1510 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1102 = $("<span>");
                root1510.append(nodes1102);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1511 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1103 = $("<span>");
                  root1511.append(nodes1103);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl261();
                  }));
                  
                  function renderControl261() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1512 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1512); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1103;
                      nodes1103 = node.contents();
                      oldNodes.replaceWith(nodes1103);
                    }));
                  }
                  renderControl261();
                  callback(root1511); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1102;
                  nodes1102 = node.contents();
                  oldNodes.replaceWith(nodes1102);
                }));
                callback(root1510); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1101;
                nodes1101 = node.contents();
                oldNodes.replaceWith(nodes1101);
              }));
              
              var oldNodes = iternode115;
              iternode115 = iternode115.contents();
              oldNodes.replaceWith(iternode115);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list115.addEventListener('change', function() { listSubs__.unsubscribe(); renderList115(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList115(true); }));
        });
      };
      renderList115();
      
      callback(root1506); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1513 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node652 = $("<div>");
  
  var ref671 = mobl.ref(ui.searchboxStyle);
  if(ref671.get() !== null) {
    node652.attr('class', ref671.get());
    subs__.addSub(ref671.addEventListener('change', function(_, ref, val) {
      node652.attr('class', val);
    }));
    
  }
  subs__.addSub(ref671.rebind());
  
  
  var node653 = $("<input>");
  node653.attr('type', "search");
  
  var ref668 = mobl.ref(ui.searchBoxInputStyle);
  if(ref668.get() !== null) {
    node653.attr('class', ref668.get());
    subs__.addSub(ref668.addEventListener('change', function(_, ref, val) {
      node653.attr('class', val);
    }));
    
  }
  subs__.addSub(ref668.rebind());
  
  var ref669 = placeholder;
  if(ref669.get() !== null) {
    node653.attr('placeholder', ref669.get());
    subs__.addSub(ref669.addEventListener('change', function(_, ref, val) {
      node653.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref669.rebind());
  
  var ref670 = s;
  node653.val(""+ref670.get());
  var ignore133 = false;
  subs__.addSub(ref670.addEventListener('change', function(_, ref, val) {
    if(ignore133) return;
    node653.val(""+val);
  }));
  subs__.addSub(ref670.rebind());
  
  subs__.addSub(mobl.domBind(node653, 'keyup change', function() {
    ignore133 = true;
    s.set(mobl.stringTomobl__String(node653.val()));
    ignore133 = false;
  }));
  
  
  var val347 = onsearch.get();
  if(val347 !== null) {
    subs__.addSub(mobl.domBind(node653, 'change', val347));
  }
  
  var val348 = onkeyup.get();
  if(val348 !== null) {
    subs__.addSub(mobl.domBind(node653, 'keyup', val348));
  }
  node653.attr('autocorrect', false);
  node653.attr('autocapitalize', false);
  node653.attr('autocomplete', false);
  
  node652.append(node653);
  root1513.append(node652);
  callback(root1513); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1514 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref672 = mobl.ref(ui.contextMenuStyle);
  if(ref672.get() !== null) {
    menu.attr('class', ref672.get());
    subs__.addSub(ref672.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref672.rebind());
  
  var nodes1104 = $("<span>");
  menu.append(nodes1104);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl262();
  }));
  
  function renderControl262() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1515 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1515); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1104;
      nodes1104 = node.contents();
      oldNodes.replaceWith(nodes1104);
    }));
  }
  renderControl262();
  root1514.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val349 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1045 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val349 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val349));
  }
  
  root1514.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1514); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1516 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1030 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1030.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node654 = $("<span>");
  root1516.append(node654);
  var condSubs157 = new mobl.CompSubscription();
  subs__.addSub(condSubs157);
  var oldValue157;
  var renderCond157 = function() {
    var value1149 = tmp1030.get();
    if(oldValue157 === value1149) return;
    oldValue157 = value1149;
    var subs__ = condSubs157;
    subs__.unsubscribe();
    node654.empty();
    if(value1149) {
      items.get().one(function(result__) {
        var tmp1046 = result__;
        var current = mobl.ref(result__);
        
        var node655 = $("<div>");
        node655.attr('width', "100%");
        
        
        var node656 = $("<div>");
        node656.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1107 = $("<span>");
        node656.append(nodes1107);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1519 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node659 = mobl.loadingSpan();
          root1519.append(node659);
          var list116;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList116 = function() {
            var subs__ = listSubs__;
            list116 = items.get();
            list116.list(function(results116) {
              node659.empty();
              for(var i248 = 0; i248 < results116.length; i248++) {
                (function() {
                  var iternode116 = $("<span>");
                  node659.append(iternode116);
                  var it;
                  it = mobl.ref(mobl.ref(results116), i248);
                  var result__ = it.get() == current.get();
                  var tmp1012 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1012.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1012.set(it.get() == current.get());
                  }));
                  
                  
                  var node660 = $("<span>");
                  iternode116.append(node660);
                  var condSubs159 = new mobl.CompSubscription();
                  subs__.addSub(condSubs159);
                  var oldValue159;
                  var renderCond159 = function() {
                    var value1151 = tmp1012.get();
                    if(oldValue159 === value1151) return;
                    oldValue159 = value1151;
                    var subs__ = condSubs159;
                    subs__.unsubscribe();
                    node660.empty();
                    if(value1151) {
                      var nodes1108 = $("<span>");
                      node660.append(nodes1108);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1520 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1109 = $("<span>");
                        root1520.append(nodes1109);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl264();
                        }));
                        
                        function renderControl264() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1521 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1521); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1109;
                            nodes1109 = node.contents();
                            oldNodes.replaceWith(nodes1109);
                          }));
                        }
                        renderControl264();
                        callback(root1520); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1108;
                        nodes1108 = node.contents();
                        oldNodes.replaceWith(nodes1108);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp1011 = mobl.ref(result__);
                      
                      var nodes1110 = $("<span>");
                      node660.append(nodes1110);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1011, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1522 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1111 = $("<span>");
                        root1522.append(nodes1111);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl265();
                        }));
                        
                        function renderControl265() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1523 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1523); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1111;
                            nodes1111 = node.contents();
                            oldNodes.replaceWith(nodes1111);
                          }));
                        }
                        renderControl265();
                        callback(root1522); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1110;
                        nodes1110 = node.contents();
                        oldNodes.replaceWith(nodes1110);
                      }));
                      
                      
                    }
                  };
                  renderCond159();
                  subs__.addSub(tmp1012.addEventListener('change', function() {
                    renderCond159();
                  }));
                  
                  
                  var oldNodes = iternode116;
                  iternode116 = iternode116.contents();
                  oldNodes.replaceWith(iternode116);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list116.addEventListener('change', function() { listSubs__.unsubscribe(); renderList116(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList116(true); }));
            });
          };
          renderList116();
          
          callback(root1519); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1107;
          nodes1107 = node.contents();
          oldNodes.replaceWith(nodes1107);
        }));
        node655.append(node656);
        
        var node657 = $("<div>");
        node657.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node658 = $("<span>");
        node657.append(node658);
        var condSubs158 = new mobl.CompSubscription();
        subs__.addSub(condSubs158);
        var oldValue158;
        var renderCond158 = function() {
          var value1150 = current.get();
          if(oldValue158 === value1150) return;
          oldValue158 = value1150;
          var subs__ = condSubs158;
          subs__.unsubscribe();
          node658.empty();
          if(value1150) {
            var nodes1105 = $("<span>");
            node658.append(nodes1105);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl263();
            }));
            
            function renderControl263() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1517 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1517); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1105;
                nodes1105 = node.contents();
                oldNodes.replaceWith(nodes1105);
              }));
            }
            renderControl263();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp1013 = mobl.ref(result__);
            
            var nodes1106 = $("<span>");
            node658.append(nodes1106);
            subs__.addSub((mobl.label)(tmp1013, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1518 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1518); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1106;
              nodes1106 = node.contents();
              oldNodes.replaceWith(nodes1106);
            }));
            
            
          }
        };
        renderCond158();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond158();
        }));
        
        node655.append(node657);
        node654.append(node655);
        
        
        
        
        
        
      });
    } else {
      var nodes1112 = $("<span>");
      node654.append(nodes1112);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1524 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node661 = mobl.loadingSpan();
        root1524.append(node661);
        var list117;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList117 = function() {
          var subs__ = listSubs__;
          list117 = items.get();
          list117.list(function(results117) {
            node661.empty();
            for(var i249 = 0; i249 < results117.length; i249++) {
              (function() {
                var iternode117 = $("<span>");
                node661.append(iternode117);
                var it;
                it = mobl.ref(mobl.ref(results117), i249);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1047 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp1007 = mobl.ref(result__);
                
                var nodes1113 = $("<span>");
                iternode117.append(nodes1113);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1007, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1525 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1114 = $("<span>");
                  root1525.append(nodes1114);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl266();
                  }));
                  
                  function renderControl266() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1526 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1526); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1114;
                      nodes1114 = node.contents();
                      oldNodes.replaceWith(nodes1114);
                    }));
                  }
                  renderControl266();
                  callback(root1525); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1113;
                  nodes1113 = node.contents();
                  oldNodes.replaceWith(nodes1113);
                }));
                
                var oldNodes = iternode117;
                iternode117 = iternode117.contents();
                oldNodes.replaceWith(iternode117);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list117.addEventListener('change', function() { listSubs__.unsubscribe(); renderList117(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList117(true); }));
          });
        };
        renderList117();
        
        callback(root1524); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1112;
        nodes1112 = node.contents();
        oldNodes.replaceWith(nodes1112);
      }));
      
      
    }
  };
  renderCond157();
  subs__.addSub(tmp1030.addEventListener('change', function() {
    renderCond157();
  }));
  
  callback(root1516); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1527 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1010 = mobl.ref(result__);
  
  var nodes1115 = $("<span>");
  root1527.append(nodes1115);
  subs__.addSub((ui.header)(tmp1010, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1528 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1009 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1008 = mobl.ref(result__);
    
    var nodes1116 = $("<span>");
    root1528.append(nodes1116);
    subs__.addSub((ui.backButton)(tmp1008, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1009, function(_, callback) {
      var root1529 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1529); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1116;
      nodes1116 = node.contents();
      oldNodes.replaceWith(nodes1116);
    }));
    callback(root1528); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1115;
    nodes1115 = node.contents();
    oldNodes.replaceWith(nodes1115);
  }));
  var nodes1117 = $("<span>");
  root1527.append(nodes1117);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl267();
  }));
  
  function renderControl267() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1530); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1117;
      nodes1117 = node.contents();
      oldNodes.replaceWith(nodes1117);
    }));
  }
  renderControl267();
  callback(root1527); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1531 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1118 = $("<span>");
  root1531.append(nodes1118);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1532 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node662 = mobl.loadingSpan();
    root1532.append(node662);
    var list118;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList118 = function() {
      var subs__ = listSubs__;
      list118 = coll.get();
      list118.list(function(results118) {
        node662.empty();
        for(var i250 = 0; i250 < results118.length; i250++) {
          (function() {
            var iternode118 = $("<span>");
            node662.append(iternode118);
            var it;
            it = mobl.ref(mobl.ref(results118), i250);
            var result__ = it.get() == selected.get();
            var tmp1015 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp1015.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1015.set(it.get() == selected.get());
            }));
            
            
            var node663 = $("<span>");
            iternode118.append(node663);
            var condSubs160 = new mobl.CompSubscription();
            subs__.addSub(condSubs160);
            var oldValue160;
            var renderCond160 = function() {
              var value1152 = tmp1015.get();
              if(oldValue160 === value1152) return;
              oldValue160 = value1152;
              var subs__ = condSubs160;
              subs__.unsubscribe();
              node663.empty();
              if(value1152) {
                var nodes1119 = $("<span>");
                node663.append(nodes1119);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1533 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1120 = $("<span>");
                  root1533.append(nodes1120);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl268();
                  }));
                  
                  function renderControl268() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1534 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1534); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1120;
                      nodes1120 = node.contents();
                      oldNodes.replaceWith(nodes1120);
                    }));
                  }
                  renderControl268();
                  callback(root1533); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1119;
                  nodes1119 = node.contents();
                  oldNodes.replaceWith(nodes1119);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1014 = mobl.ref(result__);
                
                var nodes1121 = $("<span>");
                node663.append(nodes1121);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1014, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1535 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1122 = $("<span>");
                  root1535.append(nodes1122);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl269();
                  }));
                  
                  function renderControl269() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1536 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1536); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1122;
                      nodes1122 = node.contents();
                      oldNodes.replaceWith(nodes1122);
                    }));
                  }
                  renderControl269();
                  callback(root1535); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1121;
                  nodes1121 = node.contents();
                  oldNodes.replaceWith(nodes1121);
                }));
                
                
              }
            };
            renderCond160();
            subs__.addSub(tmp1015.addEventListener('change', function() {
              renderCond160();
            }));
            
            
            var oldNodes = iternode118;
            iternode118 = iternode118.contents();
            oldNodes.replaceWith(iternode118);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list118.addEventListener('change', function() { listSubs__.unsubscribe(); renderList118(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList118(true); }));
      });
    };
    renderList118();
    
    callback(root1532); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1118;
    nodes1118 = node.contents();
    oldNodes.replaceWith(nodes1118);
  }));
  callback(root1531); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1537 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp1048 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp1016 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp1016.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp1016.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp1016.set(coll.get().limit(n.get()));
    }));
    
    
    var node664 = mobl.loadingSpan();
    root1537.append(node664);
    var list119;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList119 = function() {
      var subs__ = listSubs__;
      list119 = tmp1016.get();
      list119.list(function(results119) {
        node664.empty();
        for(var i251 = 0; i251 < results119.length; i251++) {
          (function() {
            var iternode119 = $("<span>");
            node664.append(iternode119);
            var it;
            it = mobl.ref(mobl.ref(results119), i251);
            var nodes1123 = $("<span>");
            iternode119.append(nodes1123);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl270();
            }));
            
            function renderControl270() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1538 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1538); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1123;
                nodes1123 = node.contents();
                oldNodes.replaceWith(nodes1123);
              }));
            }
            renderControl270();
            
            var oldNodes = iternode119;
            iternode119 = iternode119.contents();
            oldNodes.replaceWith(iternode119);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list119.addEventListener('change', function() { listSubs__.unsubscribe(); renderList119(true); }));
        subs__.addSub(tmp1016.addEventListener('change', function() { listSubs__.unsubscribe(); renderList119(true); }));
      });
    };
    renderList119();
    
    var result__ = n.get() < total.get();
    var tmp1018 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp1018.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp1018.set(n.get() < total.get());
    }));
    
    
    var node665 = $("<span>");
    root1537.append(node665);
    var condSubs161 = new mobl.CompSubscription();
    subs__.addSub(condSubs161);
    var oldValue161;
    var renderCond161 = function() {
      var value1153 = tmp1018.get();
      if(oldValue161 === value1153) return;
      oldValue161 = value1153;
      var subs__ = condSubs161;
      subs__.unsubscribe();
      node665.empty();
      if(value1153) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1017 = mobl.ref(result__);
        
        var nodes1124 = $("<span>");
        node665.append(nodes1124);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp1017, mobl.ref(null), function(_, callback) {
          var root1539 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1125 = $("<span>");
          root1539.append(nodes1125);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1540 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1540); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1125;
            nodes1125 = node.contents();
            oldNodes.replaceWith(nodes1125);
          }));
          callback(root1539); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1124;
          nodes1124 = node.contents();
          oldNodes.replaceWith(nodes1124);
        }));
        
        
      } else {
        
      }
    };
    renderCond161();
    subs__.addSub(tmp1018.addEventListener('change', function() {
      renderCond161();
    }));
    
    callback(root1537); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1541 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1126 = $("<span>");
  root1541.append(nodes1126);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1542 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node666 = mobl.loadingSpan();
    root1542.append(node666);
    var list120;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList120 = function() {
      var subs__ = listSubs__;
      list120 = items.get();
      list120.list(function(results120) {
        node666.empty();
        for(var i252 = 0; i252 < results120.length; i252++) {
          (function() {
            var iternode120 = $("<span>");
            node666.append(iternode120);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results120), i252), "_1");it = mobl.ref(mobl.ref(mobl.ref(results120), i252), "_2");
            var nodes1127 = $("<span>");
            iternode120.append(nodes1127);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1543 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1128 = $("<span>");
              root1543.append(nodes1128);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1544 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1544); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1128;
                nodes1128 = node.contents();
                oldNodes.replaceWith(nodes1128);
              }));
              callback(root1543); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1127;
              nodes1127 = node.contents();
              oldNodes.replaceWith(nodes1127);
            }));
            
            var oldNodes = iternode120;
            iternode120 = iternode120.contents();
            oldNodes.replaceWith(iternode120);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list120.addEventListener('change', function() { listSubs__.unsubscribe(); renderList120(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList120(true); }));
      });
    };
    renderList120();
    
    callback(root1542); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1126;
    nodes1126 = node.contents();
    oldNodes.replaceWith(nodes1126);
  }));
  callback(root1541); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1545 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1544) {
    coll1544 = coll1544.reverse();
    function processOne56() {
      var it;
      it = coll1544.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1544.length > 0) processOne56(); else rest56();
      
    }
    function rest56() {
      var nodes1129 = $("<span>");
      root1545.append(nodes1129);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1546 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1019 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1020 = mobl.ref(result__);
        
        var nodes1130 = $("<span>");
        root1546.append(nodes1130);
        subs__.addSub((ui.backButton)(tmp1020, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1019, function(_, callback) {
          var root1547 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1547); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1130;
          nodes1130 = node.contents();
          oldNodes.replaceWith(nodes1130);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1543) {
                           coll1543 = coll1543.reverse();
                           function processOne55() {
                             var checked;var it;
                             var tmp1050 = coll1543.pop();
                             checked = tmp1050._1;it = tmp1050._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1543.length > 0) processOne55(); else rest55();
                               
                             } else {
                               {
                                 
                                 if(coll1543.length > 0) processOne55(); else rest55();
                                 
                               }
                             }
                           }
                           function rest55() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1543.length > 0) processOne55(); else rest55();
                         });
                         
                       };
        var tmp1021 = mobl.ref(result__);
        
        var nodes1131 = $("<span>");
        root1546.append(nodes1131);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1021, function(_, callback) {
          var root1548 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1548); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1131;
          nodes1131 = node.contents();
          oldNodes.replaceWith(nodes1131);
        }));
        callback(root1546); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1129;
        nodes1129 = node.contents();
        oldNodes.replaceWith(nodes1129);
      }));
      var nodes1132 = $("<span>");
      root1545.append(nodes1132);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1549 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1549); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1132;
        nodes1132 = node.contents();
        oldNodes.replaceWith(nodes1132);
      }));
      callback(root1545); return subs__;
      
      
    }
    if(coll1544.length > 0) processOne56(); else rest56();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1550 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1133 = $("<span>");
  root1550.append(nodes1133);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1551 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1551); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1133;
    nodes1133 = node.contents();
    oldNodes.replaceWith(nodes1133);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp1022 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1022.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1022.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1022.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1022.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1022.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1134 = $("<span>");
  root1550.append(nodes1134);
  subs__.addSub((ui.masterDetail)(tmp1022, masterItem, detailItem, function(_, callback) {
    var root1552 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1552); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1134;
    nodes1134 = node.contents();
    oldNodes.replaceWith(nodes1134);
  }));
  callback(root1550); return subs__;
  
  
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
  var root1553 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1135 = $("<span>");
  root1553.append(nodes1135);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1554 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node667 = mobl.loadingSpan();
    root1554.append(node667);
    var list121;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList121 = function() {
      var subs__ = listSubs__;
      list121 = sections.get();
      list121.list(function(results121) {
        node667.empty();
        for(var i253 = 0; i253 < results121.length; i253++) {
          (function() {
            var iternode121 = $("<span>");
            node667.append(iternode121);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results121), i253), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results121), i253), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp1024 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1024.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1024.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1024.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1024.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1023 = mobl.ref(result__);
            
            var nodes1136 = $("<span>");
            iternode121.append(nodes1136);
            subs__.addSub((mobl.span)(tmp1024, mobl.ref(null), tmp1023, mobl.ref(null), function(_, callback) {
              var root1555 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1137 = $("<span>");
              root1555.append(nodes1137);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1556 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1556); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1137;
                nodes1137 = node.contents();
                oldNodes.replaceWith(nodes1137);
              }));
              callback(root1555); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1136;
              nodes1136 = node.contents();
              oldNodes.replaceWith(nodes1136);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp1025 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1025.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1025.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1025.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1025.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1138 = $("<span>");
            iternode121.append(nodes1138);
            subs__.addSub((mobl.block)(tmp1025, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1557 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1139 = $("<span>");
              root1557.append(nodes1139);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl271();
              }));
              
              function renderControl271() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1558 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1558); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1139;
                  nodes1139 = node.contents();
                  oldNodes.replaceWith(nodes1139);
                }));
              }
              renderControl271();
              callback(root1557); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1138;
              nodes1138 = node.contents();
              oldNodes.replaceWith(nodes1138);
            }));
            
            var oldNodes = iternode121;
            iternode121 = iternode121.contents();
            oldNodes.replaceWith(iternode121);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list121.addEventListener('change', function() { listSubs__.unsubscribe(); renderList121(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList121(true); }));
      });
    };
    renderList121();
    
    callback(root1554); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1135;
    nodes1135 = node.contents();
    oldNodes.replaceWith(nodes1135);
  }));
  callback(root1553); return subs__;
  
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
  var root1559 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node668 = $("<table>");
  
  var ref673 = style;
  if(ref673.get() !== null) {
    node668.attr('class', ref673.get());
    subs__.addSub(ref673.addEventListener('change', function(_, ref, val) {
      node668.attr('class', val);
    }));
    
  }
  subs__.addSub(ref673.rebind());
  
  var nodes1140 = $("<span>");
  node668.append(nodes1140);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl272();
  }));
  
  function renderControl272() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1560 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1560); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1140;
      nodes1140 = node.contents();
      oldNodes.replaceWith(nodes1140);
    }));
  }
  renderControl272();
  root1559.append(node668);
  callback(root1559); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1561 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node669 = $("<tr>");
  
  var ref674 = style;
  if(ref674.get() !== null) {
    node669.attr('class', ref674.get());
    subs__.addSub(ref674.addEventListener('change', function(_, ref, val) {
      node669.attr('class', val);
    }));
    
  }
  subs__.addSub(ref674.rebind());
  
  var nodes1141 = $("<span>");
  node669.append(nodes1141);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl273();
  }));
  
  function renderControl273() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1562); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1141;
      nodes1141 = node.contents();
      oldNodes.replaceWith(nodes1141);
    }));
  }
  renderControl273();
  root1561.append(node669);
  callback(root1561); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1563 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node670 = $("<td>");
  
  var ref675 = width;
  if(ref675.get() !== null) {
    node670.attr('width', ref675.get());
    subs__.addSub(ref675.addEventListener('change', function(_, ref, val) {
      node670.attr('width', val);
    }));
    
  }
  subs__.addSub(ref675.rebind());
  
  var ref676 = style;
  if(ref676.get() !== null) {
    node670.attr('class', ref676.get());
    subs__.addSub(ref676.addEventListener('change', function(_, ref, val) {
      node670.attr('class', val);
    }));
    
  }
  subs__.addSub(ref676.rebind());
  
  var nodes1142 = $("<span>");
  node670.append(nodes1142);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl274();
  }));
  
  function renderControl274() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1564 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1564); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1142;
      nodes1142 = node.contents();
      oldNodes.replaceWith(nodes1142);
    }));
  }
  renderControl274();
  root1563.append(node670);
  callback(root1563); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1565 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node671 = $("<td>");
  
  var ref677 = width;
  if(ref677.get() !== null) {
    node671.attr('width', ref677.get());
    subs__.addSub(ref677.addEventListener('change', function(_, ref, val) {
      node671.attr('width', val);
    }));
    
  }
  subs__.addSub(ref677.rebind());
  
  var ref678 = style;
  if(ref678.get() !== null) {
    node671.attr('class', ref678.get());
    subs__.addSub(ref678.addEventListener('change', function(_, ref, val) {
      node671.attr('class', val);
    }));
    
  }
  subs__.addSub(ref678.rebind());
  
  var nodes1143 = $("<span>");
  node671.append(nodes1143);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl275();
  }));
  
  function renderControl275() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1566); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1143;
      nodes1143 = node.contents();
      oldNodes.replaceWith(nodes1143);
    }));
  }
  renderControl275();
  root1565.append(node671);
  callback(root1565); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1567 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node672 = $("<td>");
  
  var ref679 = width;
  if(ref679.get() !== null) {
    node672.attr('width', ref679.get());
    subs__.addSub(ref679.addEventListener('change', function(_, ref, val) {
      node672.attr('width', val);
    }));
    
  }
  subs__.addSub(ref679.rebind());
  
  var ref680 = style;
  if(ref680.get() !== null) {
    node672.attr('class', ref680.get());
    subs__.addSub(ref680.addEventListener('change', function(_, ref, val) {
      node672.attr('class', val);
    }));
    
  }
  subs__.addSub(ref680.rebind());
  
  
  var node673 = $("<strong>");
  
  var nodes1144 = $("<span>");
  node673.append(nodes1144);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl276();
  }));
  
  function renderControl276() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1568 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1568); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1144;
      nodes1144 = node.contents();
      oldNodes.replaceWith(nodes1144);
    }));
  }
  renderControl276();
  node672.append(node673);
  root1567.append(node672);
  callback(root1567); return subs__;
  
  
  
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
  items.list(function(coll1545) {
    coll1545 = coll1545.reverse();
    function processOne57() {
      var item;
      item = coll1545.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1545.length > 0) processOne57(); else rest57();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1545.length > 0) processOne57(); else rest57();
          
        }
      }
    }
    function rest57() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1545.length > 0) processOne57(); else rest57();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root1569 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp1052 = result__;
    var current = mobl.ref(result__);
    
    var node674 = $("<div>");
    node674.attr('width', "100%");
    
    
    var node675 = $("<div>");
    node675.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes1146 = $("<span>");
    node675.append(nodes1146);
    subs__.addSub((ui.group)(function(_, callback) {
      var root1571 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node680 = mobl.loadingSpan();
      root1571.append(node680);
      var list122;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList122 = function() {
        var subs__ = listSubs__;
        list122 = items.get();
        list122.list(function(results122) {
          node680.empty();
          for(var i254 = 0; i254 < results122.length; i254++) {
            (function() {
              var iternode122 = $("<span>");
              node680.append(iternode122);
              var it;
              it = mobl.ref(mobl.ref(results122), i254);
              var result__ = it.get() == current.get();
              var tmp1029 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp1029.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp1029.set(it.get() == current.get());
              }));
              
              
              var node681 = $("<span>");
              iternode122.append(node681);
              var condSubs163 = new mobl.CompSubscription();
              subs__.addSub(condSubs163);
              var oldValue163;
              var renderCond163 = function() {
                var value1155 = tmp1029.get();
                if(oldValue163 === value1155) return;
                oldValue163 = value1155;
                var subs__ = condSubs163;
                subs__.unsubscribe();
                node681.empty();
                if(value1155) {
                  var nodes1147 = $("<span>");
                  node681.append(nodes1147);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root1572 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp1055 = result__;
                      var tmp1026 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1053 = result__;
                          var result__ = tmp1053;
                          tmp1026.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1054 = result__;
                          var result__ = tmp1054;
                          tmp1026.set(result__);
                          
                        });
                      }));
                      
                      var nodes1148 = $("<span>");
                      root1572.append(nodes1148);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl278();
                      }));
                      
                      function renderControl278() {
                        subs__.addSub((masterItem.get())(it, tmp1026, function(elements, callback) {
                          var root1573 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1573); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes1148;
                          nodes1148 = node.contents();
                          oldNodes.replaceWith(nodes1148);
                        }));
                      }
                      renderControl278();
                      callback(root1572); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1147;
                    nodes1147 = node.contents();
                    oldNodes.replaceWith(nodes1147);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp1028 = mobl.ref(result__);
                  
                  var nodes1149 = $("<span>");
                  node681.append(nodes1149);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1028, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root1574 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp1058 = result__;
                      var tmp1027 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1056 = result__;
                          var result__ = tmp1056;
                          tmp1027.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1057 = result__;
                          var result__ = tmp1057;
                          tmp1027.set(result__);
                          
                        });
                      }));
                      
                      var nodes1150 = $("<span>");
                      root1574.append(nodes1150);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl279();
                      }));
                      
                      function renderControl279() {
                        subs__.addSub((masterItem.get())(it, tmp1027, function(elements, callback) {
                          var root1575 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1575); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes1150;
                          nodes1150 = node.contents();
                          oldNodes.replaceWith(nodes1150);
                        }));
                      }
                      renderControl279();
                      callback(root1574); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1149;
                    nodes1149 = node.contents();
                    oldNodes.replaceWith(nodes1149);
                  }));
                  
                  
                }
              };
              renderCond163();
              subs__.addSub(tmp1029.addEventListener('change', function() {
                renderCond163();
              }));
              
              
              var oldNodes = iternode122;
              iternode122 = iternode122.contents();
              oldNodes.replaceWith(iternode122);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list122.addEventListener('change', function() { listSubs__.unsubscribe(); renderList122(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList122(true); }));
        });
      };
      renderList122();
      
      callback(root1571); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1146;
      nodes1146 = node.contents();
      oldNodes.replaceWith(nodes1146);
    }));
    node674.append(node675);
    
    var node676 = $("<div>");
    node676.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    
    var node677 = $("<span>");
    node676.append(node677);
    var condSubs162 = new mobl.CompSubscription();
    subs__.addSub(condSubs162);
    var oldValue162;
    var renderCond162 = function() {
      var value1154 = current.get();
      if(oldValue162 === value1154) return;
      oldValue162 = value1154;
      var subs__ = condSubs162;
      subs__.unsubscribe();
      node677.empty();
      if(value1154) {
        var nodes1145 = $("<span>");
        node677.append(nodes1145);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl277();
        }));
        
        function renderControl277() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root1570 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1570); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1145;
            nodes1145 = node.contents();
            oldNodes.replaceWith(nodes1145);
          }));
        }
        renderControl277();
        
        
      } else {
        
        var node678 = $("<div>");
        node678.attr('style', "padding:20px");
        
        
        var node679 = $("<h2>");
        
        
        node679.append("Add more questions.");
        node678.append(node679);
        node677.append(node678);
        
        
        
      }
    };
    renderCond162();
    subs__.addSub(current.addEventListener('change', function() {
      renderCond162();
    }));
    
    node674.append(node676);
    root1569.append(node674);
    callback(root1569); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
