mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1553 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node576 = $("<span>");
  root1553.append(node576);
  var condSubs139 = new mobl.CompSubscription();
  subs__.addSub(condSubs139);
  var oldValue139;
  var renderCond139 = function() {
    var value571 = value.get();
    if(oldValue139 === value571) return;
    oldValue139 = value571;
    var subs__ = condSubs139;
    subs__.unsubscribe();
    node576.empty();
    if(value571) {
      var nodes1144 = $("<span>");
      node576.append(nodes1144);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl260();
      }));
      
      function renderControl260() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1554 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1554); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1144;
          nodes1144 = node.contents();
          oldNodes.replaceWith(nodes1144);
        }));
      }
      renderControl260();
      
      
    } else {
      var nodes1145 = $("<span>");
      node576.append(nodes1145);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1555 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1146 = $("<span>");
        root1555.append(nodes1146);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1556 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1556); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1146;
          nodes1146 = node.contents();
          oldNodes.replaceWith(nodes1146);
        }));
        var nodes1147 = $("<span>");
        root1555.append(nodes1147);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1557 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1557); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1147;
          nodes1147 = node.contents();
          oldNodes.replaceWith(nodes1147);
        }));
        callback(root1555); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1145;
        nodes1145 = node.contents();
        oldNodes.replaceWith(nodes1145);
      }));
      
      
    }
  };
  renderCond139();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond139();
  }));
  
  callback(root1553); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1558 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node577 = $("<div>");
  
  var ref598 = mobl.ref(ui.headerStyle);
  if(ref598.get() !== null) {
    node577.attr('class', ref598.get());
    subs__.addSub(ref598.addEventListener('change', function(_, ref, val) {
      node577.attr('class', val);
    }));
    
  }
  subs__.addSub(ref598.rebind());
  
  var val305 = onclick.get();
  if(val305 !== null) {
    subs__.addSub(mobl.domBind(node577, 'tap', val305));
  }
  
  var ref599 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref599.get() !== null) {
    node577.attr('style', ref599.get());
    subs__.addSub(ref599.addEventListener('change', function(_, ref, val) {
      node577.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node577.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref599.rebind());
  
  
  var node580 = $("<div>");
  
  var ref597 = mobl.ref(ui.headerContainerStyle);
  if(ref597.get() !== null) {
    node580.attr('class', ref597.get());
    subs__.addSub(ref597.addEventListener('change', function(_, ref, val) {
      node580.attr('class', val);
    }));
    
  }
  subs__.addSub(ref597.rebind());
  
  
  var node581 = $("<div>");
  
  var ref595 = text;
  node581.text(""+ref595.get());
  var ignore114 = false;
  subs__.addSub(ref595.addEventListener('change', function(_, ref, val) {
    if(ignore114) return;
    node581.text(""+val);
  }));
  subs__.addSub(ref595.rebind());
  
  
  var ref596 = mobl.ref(ui.headerTextStyle);
  if(ref596.get() !== null) {
    node581.attr('class', ref596.get());
    subs__.addSub(ref596.addEventListener('change', function(_, ref, val) {
      node581.attr('class', val);
    }));
    
  }
  subs__.addSub(ref596.rebind());
  
  node580.append(node581);
  node577.append(node580);
  var nodes1148 = $("<span>");
  node577.append(nodes1148);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl261();
  }));
  
  function renderControl261() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1559 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1559); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1148;
      nodes1148 = node.contents();
      oldNodes.replaceWith(nodes1148);
    }));
  }
  renderControl261();
  root1558.append(node577);
  
  var node578 = $("<span>");
  root1558.append(node578);
  var condSubs140 = new mobl.CompSubscription();
  subs__.addSub(condSubs140);
  var oldValue140;
  var renderCond140 = function() {
    var value572 = fixedPosition.get();
    if(oldValue140 === value572) return;
    oldValue140 = value572;
    var subs__ = condSubs140;
    subs__.unsubscribe();
    node578.empty();
    if(value572) {
      
      var node579 = $("<div>");
      node579.attr('id', "hello");
      node579.attr('style', "height: 2.9em;");
      
      node578.append(node579);
      
      
    } else {
      
    }
  };
  renderCond140();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond140();
  }));
  
  callback(root1558); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1560 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref600 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref600.get() !== null) {
    sp.attr('class', ref600.get());
    subs__.addSub(ref600.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref600.rebind());
  
  var val306 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val306 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val306));
  }
  
  var val307 = function(event, callback) {
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
  if(val307 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val307));
  }
  
  var val308 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after90(result__) {
                    var tmp1073 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after90);if(result__ !== undefined) after90(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val308 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val308));
  }
  
  var val309 = function(event, callback) {
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
  if(val309 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val309));
  }
  
  var ref601 = text;
  sp.text(""+ref601.get());
  var ignore115 = false;
  subs__.addSub(ref601.addEventListener('change', function(_, ref, val) {
    if(ignore115) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref601.rebind());
  
  
  root1560.append(sp);
  callback(root1560); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1561 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1149 = $("<span>");
  root1561.append(nodes1149);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1562 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1562); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1149;
    nodes1149 = node.contents();
    oldNodes.replaceWith(nodes1149);
  }));
  callback(root1561); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1563 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1150 = $("<span>");
  root1563.append(nodes1150);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1564 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1564); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1150;
    nodes1150 = node.contents();
    oldNodes.replaceWith(nodes1150);
  }));
  callback(root1563); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1565 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node582 = $("<ul>");
  
  var ref602 = mobl.ref(ui.groupStyle);
  if(ref602.get() !== null) {
    node582.attr('class', ref602.get());
    subs__.addSub(ref602.addEventListener('change', function(_, ref, val) {
      node582.attr('class', val);
    }));
    
  }
  subs__.addSub(ref602.rebind());
  
  var nodes1151 = $("<span>");
  node582.append(nodes1151);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl262();
  }));
  
  function renderControl262() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1566); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1151;
      nodes1151 = node.contents();
      oldNodes.replaceWith(nodes1151);
    }));
  }
  renderControl262();
  root1565.append(node582);
  callback(root1565); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1567 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node583 = $("<img>");
  
  var ref603 = url;
  if(ref603.get() !== null) {
    node583.attr('src', ref603.get());
    subs__.addSub(ref603.addEventListener('change', function(_, ref, val) {
      node583.attr('src', val);
    }));
    
  }
  subs__.addSub(ref603.rebind());
  
  var ref604 = width;
  if(ref604.get() !== null) {
    node583.attr('width', ref604.get());
    subs__.addSub(ref604.addEventListener('change', function(_, ref, val) {
      node583.attr('width', val);
    }));
    
  }
  subs__.addSub(ref604.rebind());
  
  var ref605 = height;
  if(ref605.get() !== null) {
    node583.attr('height', ref605.get());
    subs__.addSub(ref605.addEventListener('change', function(_, ref, val) {
      node583.attr('height', val);
    }));
    
  }
  subs__.addSub(ref605.rebind());
  
  var ref606 = style;
  if(ref606.get() !== null) {
    node583.attr('class', ref606.get());
    subs__.addSub(ref606.addEventListener('change', function(_, ref, val) {
      node583.attr('class', val);
    }));
    
  }
  subs__.addSub(ref606.rebind());
  
  var val310 = onclick.get();
  if(val310 !== null) {
    subs__.addSub(mobl.domBind(node583, 'tap', val310));
  }
  
  var ref607 = valign;
  if(ref607.get() !== null) {
    node583.attr('valign', ref607.get());
    subs__.addSub(ref607.addEventListener('change', function(_, ref, val) {
      node583.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref607.rebind());
  
  var ref608 = align;
  if(ref608.get() !== null) {
    node583.attr('align', ref608.get());
    subs__.addSub(ref608.addEventListener('change', function(_, ref, val) {
      node583.attr('align', val);
    }));
    
  }
  subs__.addSub(ref608.rebind());
  
  root1567.append(node583);
  callback(root1567); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1568 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref609 = mobl.ref(ui.itemStyle);
  if(ref609.get() !== null) {
    el.attr('class', ref609.get());
    subs__.addSub(ref609.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref609.rebind());
  
  var ref610 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref610.get() !== null) {
    el.attr('class', ref610.get());
    subs__.addSub(ref610.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref610.rebind());
  
  var val311 = onswipe.get();
  if(val311 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val311));
  }
  
  var val312 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1074 = result__;
                                           function after91(result__) {
                                             var tmp1075 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after91);if(result__ !== undefined) after91(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1076 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val312 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val312));
  }
  
  var nodes1152 = $("<span>");
  el.append(nodes1152);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl263();
  }));
  
  function renderControl263() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1569 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1569); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1152;
      nodes1152 = node.contents();
      oldNodes.replaceWith(nodes1152);
    }));
  }
  renderControl263();
  root1568.append(el);
  callback(root1568); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1570 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node584 = $("<input>");
  node584.attr('type', "checkbox");
  
  var ref612 = b;
  node584.attr('checked', !!ref612.get());
  subs__.addSub(ref612.addEventListener('change', function(_, ref, val) {
    if(ref === ref612) node584.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node584, 'change', function() {
    b.set(!!node584.attr('checked'));
  }));
  
  var val314 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val314 !== null) {
    subs__.addSub(mobl.domBind(node584, 'tap', val314));
  }
  
  var val315 = onchange.get();
  if(val315 !== null) {
    subs__.addSub(mobl.domBind(node584, 'change', val315));
  }
  
  root1570.append(node584);
  
  root1570.append(" ");
  
  var node585 = $("<span>");
  
  var ref611 = label;
  node585.text(""+ref611.get());
  var ignore116 = false;
  subs__.addSub(ref611.addEventListener('change', function(_, ref, val) {
    if(ignore116) return;
    node585.text(""+val);
  }));
  subs__.addSub(ref611.rebind());
  
  
  var val313 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after92(result__) {
                    var tmp1077 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after92);if(result__ !== undefined) after92(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val313 !== null) {
    subs__.addSub(mobl.domBind(node585, 'tap', val313));
  }
  
  root1570.append(node585);
  callback(root1570); return subs__;
  
  
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
  var root1571 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node586 = $("<span>");
  root1571.append(node586);
  var condSubs141 = new mobl.CompSubscription();
  subs__.addSub(condSubs141);
  var oldValue141;
  var renderCond141 = function() {
    var value573 = label.get();
    if(oldValue141 === value573) return;
    oldValue141 = value573;
    var subs__ = condSubs141;
    subs__.unsubscribe();
    node586.empty();
    if(value573) {
      var nodes1153 = $("<span>");
      node586.append(nodes1153);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1572 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1572); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1153;
        nodes1153 = node.contents();
        oldNodes.replaceWith(nodes1153);
      }));
      
      
    } else {
      
    }
  };
  renderCond141();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond141();
  }));
  
  
  var node587 = $("<span>");
  root1571.append(node587);
  var condSubs142 = new mobl.CompSubscription();
  subs__.addSub(condSubs142);
  var oldValue142;
  var renderCond142 = function() {
    var value574 = validator.get();
    if(oldValue142 === value574) return;
    oldValue142 = value574;
    var subs__ = condSubs142;
    subs__.unsubscribe();
    node587.empty();
    if(value574) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after96(result__) {
        var tmp1078 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1079 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node588 = $("<input>");
        
        var ref613 = inputType;
        if(ref613.get() !== null) {
          node588.attr('type', ref613.get());
          subs__.addSub(ref613.addEventListener('change', function(_, ref, val) {
            node588.attr('type', val);
          }));
          
        }
        subs__.addSub(ref613.rebind());
        
        var ref614 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref614.get() !== null) {
          node588.attr('class', ref614.get());
          subs__.addSub(ref614.addEventListener('change', function(_, ref, val) {
            node588.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node588.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node588.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node588.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref614.rebind());
        
        var ref615 = placeholder;
        if(ref615.get() !== null) {
          node588.attr('placeholder', ref615.get());
          subs__.addSub(ref615.addEventListener('change', function(_, ref, val) {
            node588.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref615.rebind());
        
        var ref616 = temp;
        node588.val(""+ref616.get());
        var ignore117 = false;
        subs__.addSub(ref616.addEventListener('change', function(_, ref, val) {
          if(ignore117) return;
          node588.val(""+val);
        }));
        subs__.addSub(ref616.rebind());
        
        subs__.addSub(mobl.domBind(node588, 'keyup change', function() {
          ignore117 = true;
          temp.set(mobl.stringTomobl__String(node588.val()));
          ignore117 = false;
        }));
        
        
        var val316 = onchange.get();
        if(val316 !== null) {
          subs__.addSub(mobl.domBind(node588, 'change', val316));
        }
        
        var val317 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after93(result__) {
                          var tmp1080 = result__;
                          function after94(result__) {
                            var tmp1081 = result__;
                            var result__ = tmp1081;
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
                          var result__ = validator.get()(temp.get(), after94);if(result__ !== undefined) after94(result__);
                        }
                        var result__ = onkeyup.get()(event, after93);if(result__ !== undefined) after93(result__);
                      } else {
                        {
                          function after95(result__) {
                            var tmp1081 = result__;
                            var result__ = tmp1081;
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
                          var result__ = validator.get()(temp.get(), after95);if(result__ !== undefined) after95(result__);
                        }
                      }
                    };
        if(val317 !== null) {
          subs__.addSub(mobl.domBind(node588, 'keyup', val317));
        }
        
        var val318 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val318 !== null) {
          subs__.addSub(mobl.domBind(node588, 'blur', val318));
        }
        
        node587.append(node588);
        var nodes1154 = $("<span>");
        node587.append(nodes1154);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1573 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1573); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1154;
          nodes1154 = node.contents();
          oldNodes.replaceWith(nodes1154);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after96);if(result__ !== undefined) after96(result__);
    } else {
      
      var node589 = $("<input>");
      
      var ref617 = inputType;
      if(ref617.get() !== null) {
        node589.attr('type', ref617.get());
        subs__.addSub(ref617.addEventListener('change', function(_, ref, val) {
          node589.attr('type', val);
        }));
        
      }
      subs__.addSub(ref617.rebind());
      
      var ref618 = style;
      if(ref618.get() !== null) {
        node589.attr('class', ref618.get());
        subs__.addSub(ref618.addEventListener('change', function(_, ref, val) {
          node589.attr('class', val);
        }));
        
      }
      subs__.addSub(ref618.rebind());
      
      var ref619 = placeholder;
      if(ref619.get() !== null) {
        node589.attr('placeholder', ref619.get());
        subs__.addSub(ref619.addEventListener('change', function(_, ref, val) {
          node589.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref619.rebind());
      
      var ref620 = s;
      node589.val(""+ref620.get());
      var ignore118 = false;
      subs__.addSub(ref620.addEventListener('change', function(_, ref, val) {
        if(ignore118) return;
        node589.val(""+val);
      }));
      subs__.addSub(ref620.rebind());
      
      subs__.addSub(mobl.domBind(node589, 'keyup change', function() {
        ignore118 = true;
        s.set(mobl.stringTomobl__String(node589.val()));
        ignore118 = false;
      }));
      
      
      var val319 = onchange.get();
      if(val319 !== null) {
        subs__.addSub(mobl.domBind(node589, 'change', val319));
      }
      
      var val320 = onkeyup.get();
      if(val320 !== null) {
        subs__.addSub(mobl.domBind(node589, 'keyup', val320));
      }
      
      var val321 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val321 !== null) {
        subs__.addSub(mobl.domBind(node589, 'blur', val321));
      }
      
      node587.append(node589);
      
      
    }
  };
  renderCond142();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond142();
  }));
  
  callback(root1571); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1574 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1155 = $("<span>");
  root1574.append(nodes1155);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1575 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1575); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1155;
    nodes1155 = node.contents();
    oldNodes.replaceWith(nodes1155);
  }));
  callback(root1574); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1576 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1156 = $("<span>");
  root1576.append(nodes1156);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1577 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1577); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1156;
    nodes1156 = node.contents();
    oldNodes.replaceWith(nodes1156);
  }));
  callback(root1576); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1578 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node590 = $("<span>");
  root1578.append(node590);
  var condSubs143 = new mobl.CompSubscription();
  subs__.addSub(condSubs143);
  var oldValue143;
  var renderCond143 = function() {
    var value575 = label.get();
    if(oldValue143 === value575) return;
    oldValue143 = value575;
    var subs__ = condSubs143;
    subs__.unsubscribe();
    node590.empty();
    if(value575) {
      var nodes1157 = $("<span>");
      node590.append(nodes1157);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1579 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1579); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1157;
        nodes1157 = node.contents();
        oldNodes.replaceWith(nodes1157);
      }));
      
      
    } else {
      
    }
  };
  renderCond143();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond143();
  }));
  
  
  var node591 = $("<input>");
  node591.attr('type', "range");
  
  var ref621 = n;
  node591.val(""+ref621.get());
  var ignore119 = false;
  subs__.addSub(ref621.addEventListener('change', function(_, ref, val) {
    if(ignore119) return;
    node591.val(""+val);
  }));
  subs__.addSub(ref621.rebind());
  
  subs__.addSub(mobl.domBind(node591, 'keyup change', function() {
    ignore119 = true;
    n.set(mobl.stringTomobl__Num(node591.val()));
    ignore119 = false;
  }));
  
  
  var ref622 = min;
  if(ref622.get() !== null) {
    node591.attr('min', ref622.get());
    subs__.addSub(ref622.addEventListener('change', function(_, ref, val) {
      node591.attr('min', val);
    }));
    
  }
  subs__.addSub(ref622.rebind());
  
  var ref623 = max;
  if(ref623.get() !== null) {
    node591.attr('max', ref623.get());
    subs__.addSub(ref623.addEventListener('change', function(_, ref, val) {
      node591.attr('max', val);
    }));
    
  }
  subs__.addSub(ref623.rebind());
  
  var ref624 = step;
  if(ref624.get() !== null) {
    node591.attr('step', ref624.get());
    subs__.addSub(ref624.addEventListener('change', function(_, ref, val) {
      node591.attr('step', val);
    }));
    
  }
  subs__.addSub(ref624.rebind());
  node591.attr('style', "width: 99%;");
  
  var val322 = onchange.get();
  if(val322 !== null) {
    subs__.addSub(mobl.domBind(node591, 'change', val322));
  }
  
  var val323 = onkeyup.get();
  if(val323 !== null) {
    subs__.addSub(mobl.domBind(node591, 'keyup', val323));
  }
  
  var ref625 = placeholder;
  if(ref625.get() !== null) {
    node591.attr('placeholder', ref625.get());
    subs__.addSub(ref625.addEventListener('change', function(_, ref, val) {
      node591.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref625.rebind());
  
  root1578.append(node591);
  callback(root1578); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1580 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after97(result__) {
      var tmp1082 = result__;
      var result__ = tmp1082;
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
    var result__ = validator.get()(n2, after97);if(result__ !== undefined) after97(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1158 = $("<span>");
  root1580.append(nodes1158);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1581 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1581); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1158;
    nodes1158 = node.contents();
    oldNodes.replaceWith(nodes1158);
  }));
  callback(root1580); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1582 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node592 = $("<span>");
  root1582.append(node592);
  var condSubs144 = new mobl.CompSubscription();
  subs__.addSub(condSubs144);
  var oldValue144;
  var renderCond144 = function() {
    var value576 = label.get();
    if(oldValue144 === value576) return;
    oldValue144 = value576;
    var subs__ = condSubs144;
    subs__.unsubscribe();
    node592.empty();
    if(value576) {
      
      var node593 = $("<span>");
      node593.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref629 = label;
      node593.text(""+ref629.get());
      var ignore121 = false;
      subs__.addSub(ref629.addEventListener('change', function(_, ref, val) {
        if(ignore121) return;
        node593.text(""+val);
      }));
      subs__.addSub(ref629.rebind());
      
      
      node592.append(node593);
      
      var node594 = $("<span>");
      node594.attr('style', "float: left");
      
      
      var node595 = $("<input>");
      node595.attr('type', "password");
      
      var ref626 = style;
      if(ref626.get() !== null) {
        node595.attr('class', ref626.get());
        subs__.addSub(ref626.addEventListener('change', function(_, ref, val) {
          node595.attr('class', val);
        }));
        
      }
      subs__.addSub(ref626.rebind());
      
      var ref627 = placeholder;
      if(ref627.get() !== null) {
        node595.attr('placeholder', ref627.get());
        subs__.addSub(ref627.addEventListener('change', function(_, ref, val) {
          node595.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref627.rebind());
      
      var ref628 = s;
      node595.val(""+ref628.get());
      var ignore120 = false;
      subs__.addSub(ref628.addEventListener('change', function(_, ref, val) {
        if(ignore120) return;
        node595.val(""+val);
      }));
      subs__.addSub(ref628.rebind());
      
      subs__.addSub(mobl.domBind(node595, 'keyup change', function() {
        ignore120 = true;
        s.set(mobl.stringTomobl__String(node595.val()));
        ignore120 = false;
      }));
      
      
      var val324 = onchange.get();
      if(val324 !== null) {
        subs__.addSub(mobl.domBind(node595, 'change', val324));
      }
      
      var val325 = onkeyup.get();
      if(val325 !== null) {
        subs__.addSub(mobl.domBind(node595, 'keyup', val325));
      }
      
      var val326 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val326 !== null) {
        subs__.addSub(mobl.domBind(node595, 'blur', val326));
      }
      
      node594.append(node595);
      node592.append(node594);
      
      
      
      
    } else {
      
      var node596 = $("<input>");
      node596.attr('type', "password");
      
      var ref630 = style;
      if(ref630.get() !== null) {
        node596.attr('class', ref630.get());
        subs__.addSub(ref630.addEventListener('change', function(_, ref, val) {
          node596.attr('class', val);
        }));
        
      }
      subs__.addSub(ref630.rebind());
      
      var ref631 = placeholder;
      if(ref631.get() !== null) {
        node596.attr('placeholder', ref631.get());
        subs__.addSub(ref631.addEventListener('change', function(_, ref, val) {
          node596.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref631.rebind());
      
      var ref632 = s;
      node596.val(""+ref632.get());
      var ignore122 = false;
      subs__.addSub(ref632.addEventListener('change', function(_, ref, val) {
        if(ignore122) return;
        node596.val(""+val);
      }));
      subs__.addSub(ref632.rebind());
      
      subs__.addSub(mobl.domBind(node596, 'keyup change', function() {
        ignore122 = true;
        s.set(mobl.stringTomobl__String(node596.val()));
        ignore122 = false;
      }));
      
      
      var val327 = onchange.get();
      if(val327 !== null) {
        subs__.addSub(mobl.domBind(node596, 'change', val327));
      }
      
      var val328 = onkeyup.get();
      if(val328 !== null) {
        subs__.addSub(mobl.domBind(node596, 'keyup', val328));
      }
      
      var val329 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val329 !== null) {
        subs__.addSub(mobl.domBind(node596, 'blur', val329));
      }
      
      node592.append(node596);
      
      
    }
  };
  renderCond144();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond144();
  }));
  
  callback(root1582); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1583 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref637 = style;
  if(ref637.get() !== null) {
    sel.attr('class', ref637.get());
    subs__.addSub(ref637.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref637.rebind());
  
  var val330 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after98(result__) {
                    var tmp1084 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after98);if(result__ !== undefined) after98(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val330 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val330));
  }
  
  
  var node597 = mobl.loadingSpan();
  sel.append(node597);
  var list108;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList108 = function() {
    var subs__ = listSubs__;
    list108 = options.get();
    list108.list(function(results108) {
      node597.empty();
      for(var i150 = 0; i150 < results108.length; i150++) {
        (function() {
          var iternode108 = $("<span>");
          node597.append(iternode108);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results108), i150), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results108), i150), "_2");
          
          var node598 = $("<option>");
          
          var ref633 = optionDescription;
          node598.text(""+ref633.get());
          var ignore123 = false;
          subs__.addSub(ref633.addEventListener('change', function(_, ref, val) {
            if(ignore123) return;
            node598.text(""+val);
          }));
          subs__.addSub(ref633.rebind());
          
          
          var ref634 = optionStyle;
          if(ref634.get() !== null) {
            node598.attr('class', ref634.get());
            subs__.addSub(ref634.addEventListener('change', function(_, ref, val) {
              node598.attr('class', val);
            }));
            
          }
          subs__.addSub(ref634.rebind());
          
          var ref635 = optionValue;
          if(ref635.get() !== null) {
            node598.attr('value', ref635.get());
            subs__.addSub(ref635.addEventListener('change', function(_, ref, val) {
              node598.attr('value', val);
            }));
            
          }
          subs__.addSub(ref635.rebind());
          
          var ref636 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref636.get() !== null) {
            node598.attr('selected', ref636.get());
            subs__.addSub(ref636.addEventListener('change', function(_, ref, val) {
              node598.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node598.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node598.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref636.rebind());
          
          iternode108.append(node598);
          
          var oldNodes = iternode108;
          iternode108 = iternode108.contents();
          oldNodes.replaceWith(iternode108);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list108.addEventListener('change', function() { listSubs__.unsubscribe(); renderList108(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList108(true); }));
    });
  };
  renderList108();
  
  root1583.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1583); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1584 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1159 = $("<span>");
    root1584.append(nodes1159);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1585 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node599 = mobl.loadingSpan();
      root1585.append(node599);
      var list109;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList109 = function() {
        var subs__ = listSubs__;
        list109 = tabs.get();
        list109.list(function(results109) {
          node599.empty();
          for(var i151 = 0; i151 < results109.length; i151++) {
            (function() {
              var iternode109 = $("<span>");
              node599.append(iternode109);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results109), i151), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results109), i151), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results109), i151), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp1039 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1039.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1039.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp1039.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp1039.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp1038 = mobl.ref(result__);
              
              var nodes1160 = $("<span>");
              iternode109.append(nodes1160);
              subs__.addSub((mobl.span)(tmp1039, mobl.ref(null), tmp1038, mobl.ref(null), function(_, callback) {
                var root1586 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1161 = $("<span>");
                root1586.append(nodes1161);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1587 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1587); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1161;
                  nodes1161 = node.contents();
                  oldNodes.replaceWith(nodes1161);
                }));
                callback(root1586); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1160;
                nodes1160 = node.contents();
                oldNodes.replaceWith(nodes1160);
              }));
              
              var oldNodes = iternode109;
              iternode109 = iternode109.contents();
              oldNodes.replaceWith(iternode109);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list109.addEventListener('change', function() { listSubs__.unsubscribe(); renderList109(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList109(true); }));
        });
      };
      renderList109();
      
      callback(root1585); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1159;
      nodes1159 = node.contents();
      oldNodes.replaceWith(nodes1159);
    }));
    
    var node600 = mobl.loadingSpan();
    root1584.append(node600);
    var list110;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList110 = function() {
      var subs__ = listSubs__;
      list110 = tabs.get();
      list110.list(function(results110) {
        node600.empty();
        for(var i152 = 0; i152 < results110.length; i152++) {
          (function() {
            var iternode110 = $("<span>");
            node600.append(iternode110);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results110), i152), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results110), i152), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results110), i152), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp1040 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp1040.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1040.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp1040.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp1040.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1162 = $("<span>");
            iternode110.append(nodes1162);
            subs__.addSub((mobl.block)(tmp1040, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1588 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1163 = $("<span>");
              root1588.append(nodes1163);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1589 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1164 = $("<span>");
                root1589.append(nodes1164);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl264();
                }));
                
                function renderControl264() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1590 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1590); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1164;
                    nodes1164 = node.contents();
                    oldNodes.replaceWith(nodes1164);
                  }));
                }
                renderControl264();
                callback(root1589); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1163;
                nodes1163 = node.contents();
                oldNodes.replaceWith(nodes1163);
              }));
              callback(root1588); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1162;
              nodes1162 = node.contents();
              oldNodes.replaceWith(nodes1162);
            }));
            
            var oldNodes = iternode110;
            iternode110 = iternode110.contents();
            oldNodes.replaceWith(iternode110);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list110.addEventListener('change', function() { listSubs__.unsubscribe(); renderList110(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList110(true); }));
      });
    };
    renderList110();
    
    callback(root1584); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1159 = $("<span>");
      root1584.append(nodes1159);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node599 = mobl.loadingSpan();
        root1585.append(node599);
        var list109;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList109 = function() {
          var subs__ = listSubs__;
          list109 = tabs.get();
          list109.list(function(results109) {
            node599.empty();
            for(var i151 = 0; i151 < results109.length; i151++) {
              (function() {
                var iternode109 = $("<span>");
                node599.append(iternode109);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results109), i151), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results109), i151), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results109), i151), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp1039 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp1039.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp1039.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp1039.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp1039.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1038 = mobl.ref(result__);
                
                var nodes1160 = $("<span>");
                iternode109.append(nodes1160);
                subs__.addSub((mobl.span)(tmp1039, mobl.ref(null), tmp1038, mobl.ref(null), function(_, callback) {
                  var root1586 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1161 = $("<span>");
                  root1586.append(nodes1161);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1587 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1587); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1161;
                    nodes1161 = node.contents();
                    oldNodes.replaceWith(nodes1161);
                  }));
                  callback(root1586); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1160;
                  nodes1160 = node.contents();
                  oldNodes.replaceWith(nodes1160);
                }));
                
                var oldNodes = iternode109;
                iternode109 = iternode109.contents();
                oldNodes.replaceWith(iternode109);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list109.addEventListener('change', function() { listSubs__.unsubscribe(); renderList109(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList109(true); }));
          });
        };
        renderList109();
        
        callback(root1585); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1159;
        nodes1159 = node.contents();
        oldNodes.replaceWith(nodes1159);
      }));
      
      var node600 = mobl.loadingSpan();
      root1584.append(node600);
      var list110;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList110 = function() {
        var subs__ = listSubs__;
        list110 = tabs.get();
        list110.list(function(results110) {
          node600.empty();
          for(var i152 = 0; i152 < results110.length; i152++) {
            (function() {
              var iternode110 = $("<span>");
              node600.append(iternode110);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results110), i152), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results110), i152), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results110), i152), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp1040 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1040.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1040.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp1040.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp1040.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1162 = $("<span>");
              iternode110.append(nodes1162);
              subs__.addSub((mobl.block)(tmp1040, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1588 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1163 = $("<span>");
                root1588.append(nodes1163);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1589 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1164 = $("<span>");
                  root1589.append(nodes1164);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl264();
                  }));
                  
                  function renderControl264() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1590 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1590); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1164;
                      nodes1164 = node.contents();
                      oldNodes.replaceWith(nodes1164);
                    }));
                  }
                  renderControl264();
                  callback(root1589); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1163;
                  nodes1163 = node.contents();
                  oldNodes.replaceWith(nodes1163);
                }));
                callback(root1588); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1162;
                nodes1162 = node.contents();
                oldNodes.replaceWith(nodes1162);
              }));
              
              var oldNodes = iternode110;
              iternode110 = iternode110.contents();
              oldNodes.replaceWith(iternode110);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list110.addEventListener('change', function() { listSubs__.unsubscribe(); renderList110(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList110(true); }));
        });
      };
      renderList110();
      
      callback(root1584); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1591 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node601 = $("<div>");
  
  var ref641 = mobl.ref(ui.searchboxStyle);
  if(ref641.get() !== null) {
    node601.attr('class', ref641.get());
    subs__.addSub(ref641.addEventListener('change', function(_, ref, val) {
      node601.attr('class', val);
    }));
    
  }
  subs__.addSub(ref641.rebind());
  
  
  var node602 = $("<input>");
  node602.attr('type', "search");
  
  var ref638 = mobl.ref(ui.searchBoxInputStyle);
  if(ref638.get() !== null) {
    node602.attr('class', ref638.get());
    subs__.addSub(ref638.addEventListener('change', function(_, ref, val) {
      node602.attr('class', val);
    }));
    
  }
  subs__.addSub(ref638.rebind());
  
  var ref639 = placeholder;
  if(ref639.get() !== null) {
    node602.attr('placeholder', ref639.get());
    subs__.addSub(ref639.addEventListener('change', function(_, ref, val) {
      node602.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref639.rebind());
  
  var ref640 = s;
  node602.val(""+ref640.get());
  var ignore124 = false;
  subs__.addSub(ref640.addEventListener('change', function(_, ref, val) {
    if(ignore124) return;
    node602.val(""+val);
  }));
  subs__.addSub(ref640.rebind());
  
  subs__.addSub(mobl.domBind(node602, 'keyup change', function() {
    ignore124 = true;
    s.set(mobl.stringTomobl__String(node602.val()));
    ignore124 = false;
  }));
  
  
  var val331 = onsearch.get();
  if(val331 !== null) {
    subs__.addSub(mobl.domBind(node602, 'change', val331));
  }
  
  var val332 = onkeyup.get();
  if(val332 !== null) {
    subs__.addSub(mobl.domBind(node602, 'keyup', val332));
  }
  node602.attr('autocorrect', false);
  node602.attr('autocapitalize', false);
  node602.attr('autocomplete', false);
  
  node601.append(node602);
  root1591.append(node601);
  callback(root1591); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1592 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref642 = mobl.ref(ui.contextMenuStyle);
  if(ref642.get() !== null) {
    menu.attr('class', ref642.get());
    subs__.addSub(ref642.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref642.rebind());
  
  var nodes1165 = $("<span>");
  menu.append(nodes1165);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl265();
  }));
  
  function renderControl265() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1593 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1593); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1165;
      nodes1165 = node.contents();
      oldNodes.replaceWith(nodes1165);
    }));
  }
  renderControl265();
  root1592.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val333 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1087 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val333 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val333));
  }
  
  root1592.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1592); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1594 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1071 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1071.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node603 = $("<span>");
  root1594.append(node603);
  var condSubs145 = new mobl.CompSubscription();
  subs__.addSub(condSubs145);
  var oldValue145;
  var renderCond145 = function() {
    var value577 = tmp1071.get();
    if(oldValue145 === value577) return;
    oldValue145 = value577;
    var subs__ = condSubs145;
    subs__.unsubscribe();
    node603.empty();
    if(value577) {
      items.get().one(function(result__) {
        var tmp1088 = result__;
        var current = mobl.ref(result__);
        
        var node604 = $("<div>");
        node604.attr('width', "100%");
        
        
        var node605 = $("<div>");
        node605.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1168 = $("<span>");
        node605.append(nodes1168);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1597 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node608 = mobl.loadingSpan();
          root1597.append(node608);
          var list111;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList111 = function() {
            var subs__ = listSubs__;
            list111 = items.get();
            list111.list(function(results111) {
              node608.empty();
              for(var i153 = 0; i153 < results111.length; i153++) {
                (function() {
                  var iternode111 = $("<span>");
                  node608.append(iternode111);
                  var it;
                  it = mobl.ref(mobl.ref(results111), i153);
                  var result__ = it.get() == current.get();
                  var tmp1046 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1046.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1046.set(it.get() == current.get());
                  }));
                  
                  
                  var node609 = $("<span>");
                  iternode111.append(node609);
                  var condSubs147 = new mobl.CompSubscription();
                  subs__.addSub(condSubs147);
                  var oldValue147;
                  var renderCond147 = function() {
                    var value579 = tmp1046.get();
                    if(oldValue147 === value579) return;
                    oldValue147 = value579;
                    var subs__ = condSubs147;
                    subs__.unsubscribe();
                    node609.empty();
                    if(value579) {
                      var nodes1169 = $("<span>");
                      node609.append(nodes1169);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1598 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1170 = $("<span>");
                        root1598.append(nodes1170);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl267();
                        }));
                        
                        function renderControl267() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1599 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1599); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1170;
                            nodes1170 = node.contents();
                            oldNodes.replaceWith(nodes1170);
                          }));
                        }
                        renderControl267();
                        callback(root1598); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1169;
                        nodes1169 = node.contents();
                        oldNodes.replaceWith(nodes1169);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp1045 = mobl.ref(result__);
                      
                      var nodes1171 = $("<span>");
                      node609.append(nodes1171);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1045, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1600 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1172 = $("<span>");
                        root1600.append(nodes1172);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl268();
                        }));
                        
                        function renderControl268() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1601 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1601); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1172;
                            nodes1172 = node.contents();
                            oldNodes.replaceWith(nodes1172);
                          }));
                        }
                        renderControl268();
                        callback(root1600); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1171;
                        nodes1171 = node.contents();
                        oldNodes.replaceWith(nodes1171);
                      }));
                      
                      
                    }
                  };
                  renderCond147();
                  subs__.addSub(tmp1046.addEventListener('change', function() {
                    renderCond147();
                  }));
                  
                  
                  var oldNodes = iternode111;
                  iternode111 = iternode111.contents();
                  oldNodes.replaceWith(iternode111);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list111.addEventListener('change', function() { listSubs__.unsubscribe(); renderList111(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList111(true); }));
            });
          };
          renderList111();
          
          callback(root1597); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1168;
          nodes1168 = node.contents();
          oldNodes.replaceWith(nodes1168);
        }));
        node604.append(node605);
        
        var node606 = $("<div>");
        node606.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node607 = $("<span>");
        node606.append(node607);
        var condSubs146 = new mobl.CompSubscription();
        subs__.addSub(condSubs146);
        var oldValue146;
        var renderCond146 = function() {
          var value578 = current.get();
          if(oldValue146 === value578) return;
          oldValue146 = value578;
          var subs__ = condSubs146;
          subs__.unsubscribe();
          node607.empty();
          if(value578) {
            var nodes1166 = $("<span>");
            node607.append(nodes1166);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl266();
            }));
            
            function renderControl266() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1595 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1595); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1166;
                nodes1166 = node.contents();
                oldNodes.replaceWith(nodes1166);
              }));
            }
            renderControl266();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp1047 = mobl.ref(result__);
            
            var nodes1167 = $("<span>");
            node607.append(nodes1167);
            subs__.addSub((mobl.label)(tmp1047, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1596 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1596); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1167;
              nodes1167 = node.contents();
              oldNodes.replaceWith(nodes1167);
            }));
            
            
          }
        };
        renderCond146();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond146();
        }));
        
        node604.append(node606);
        node603.append(node604);
        
        
        
        
        
        
      });
    } else {
      var nodes1173 = $("<span>");
      node603.append(nodes1173);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1602 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node610 = mobl.loadingSpan();
        root1602.append(node610);
        var list112;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList112 = function() {
          var subs__ = listSubs__;
          list112 = items.get();
          list112.list(function(results112) {
            node610.empty();
            for(var i154 = 0; i154 < results112.length; i154++) {
              (function() {
                var iternode112 = $("<span>");
                node610.append(iternode112);
                var it;
                it = mobl.ref(mobl.ref(results112), i154);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1089 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp1041 = mobl.ref(result__);
                
                var nodes1174 = $("<span>");
                iternode112.append(nodes1174);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1041, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1603 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1175 = $("<span>");
                  root1603.append(nodes1175);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl269();
                  }));
                  
                  function renderControl269() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1604 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1604); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1175;
                      nodes1175 = node.contents();
                      oldNodes.replaceWith(nodes1175);
                    }));
                  }
                  renderControl269();
                  callback(root1603); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1174;
                  nodes1174 = node.contents();
                  oldNodes.replaceWith(nodes1174);
                }));
                
                var oldNodes = iternode112;
                iternode112 = iternode112.contents();
                oldNodes.replaceWith(iternode112);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list112.addEventListener('change', function() { listSubs__.unsubscribe(); renderList112(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList112(true); }));
          });
        };
        renderList112();
        
        callback(root1602); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1173;
        nodes1173 = node.contents();
        oldNodes.replaceWith(nodes1173);
      }));
      
      
    }
  };
  renderCond145();
  subs__.addSub(tmp1071.addEventListener('change', function() {
    renderCond145();
  }));
  
  callback(root1594); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1605 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1044 = mobl.ref(result__);
  
  var nodes1176 = $("<span>");
  root1605.append(nodes1176);
  subs__.addSub((ui.header)(tmp1044, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1606 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1043 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1042 = mobl.ref(result__);
    
    var nodes1177 = $("<span>");
    root1606.append(nodes1177);
    subs__.addSub((ui.backButton)(tmp1042, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1043, function(_, callback) {
      var root1607 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1607); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1177;
      nodes1177 = node.contents();
      oldNodes.replaceWith(nodes1177);
    }));
    callback(root1606); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1176;
    nodes1176 = node.contents();
    oldNodes.replaceWith(nodes1176);
  }));
  var nodes1178 = $("<span>");
  root1605.append(nodes1178);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl270();
  }));
  
  function renderControl270() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1608); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1178;
      nodes1178 = node.contents();
      oldNodes.replaceWith(nodes1178);
    }));
  }
  renderControl270();
  callback(root1605); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1609 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1179 = $("<span>");
  root1609.append(nodes1179);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1610 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node611 = mobl.loadingSpan();
    root1610.append(node611);
    var list113;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList113 = function() {
      var subs__ = listSubs__;
      list113 = coll.get();
      list113.list(function(results113) {
        node611.empty();
        for(var i155 = 0; i155 < results113.length; i155++) {
          (function() {
            var iternode113 = $("<span>");
            node611.append(iternode113);
            var it;
            it = mobl.ref(mobl.ref(results113), i155);
            var result__ = it.get() == selected.get();
            var tmp1049 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp1049.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1049.set(it.get() == selected.get());
            }));
            
            
            var node612 = $("<span>");
            iternode113.append(node612);
            var condSubs148 = new mobl.CompSubscription();
            subs__.addSub(condSubs148);
            var oldValue148;
            var renderCond148 = function() {
              var value580 = tmp1049.get();
              if(oldValue148 === value580) return;
              oldValue148 = value580;
              var subs__ = condSubs148;
              subs__.unsubscribe();
              node612.empty();
              if(value580) {
                var nodes1180 = $("<span>");
                node612.append(nodes1180);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1611 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1181 = $("<span>");
                  root1611.append(nodes1181);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl271();
                  }));
                  
                  function renderControl271() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1612 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1612); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1181;
                      nodes1181 = node.contents();
                      oldNodes.replaceWith(nodes1181);
                    }));
                  }
                  renderControl271();
                  callback(root1611); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1180;
                  nodes1180 = node.contents();
                  oldNodes.replaceWith(nodes1180);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1048 = mobl.ref(result__);
                
                var nodes1182 = $("<span>");
                node612.append(nodes1182);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1048, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1613 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1183 = $("<span>");
                  root1613.append(nodes1183);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl272();
                  }));
                  
                  function renderControl272() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1614 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1614); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1183;
                      nodes1183 = node.contents();
                      oldNodes.replaceWith(nodes1183);
                    }));
                  }
                  renderControl272();
                  callback(root1613); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1182;
                  nodes1182 = node.contents();
                  oldNodes.replaceWith(nodes1182);
                }));
                
                
              }
            };
            renderCond148();
            subs__.addSub(tmp1049.addEventListener('change', function() {
              renderCond148();
            }));
            
            
            var oldNodes = iternode113;
            iternode113 = iternode113.contents();
            oldNodes.replaceWith(iternode113);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list113.addEventListener('change', function() { listSubs__.unsubscribe(); renderList113(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList113(true); }));
      });
    };
    renderList113();
    
    callback(root1610); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1179;
    nodes1179 = node.contents();
    oldNodes.replaceWith(nodes1179);
  }));
  callback(root1609); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1615 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp1090 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp1050 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp1050.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp1050.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp1050.set(coll.get().limit(n.get()));
    }));
    
    
    var node613 = mobl.loadingSpan();
    root1615.append(node613);
    var list114;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList114 = function() {
      var subs__ = listSubs__;
      list114 = tmp1050.get();
      list114.list(function(results114) {
        node613.empty();
        for(var i156 = 0; i156 < results114.length; i156++) {
          (function() {
            var iternode114 = $("<span>");
            node613.append(iternode114);
            var it;
            it = mobl.ref(mobl.ref(results114), i156);
            var nodes1184 = $("<span>");
            iternode114.append(nodes1184);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl273();
            }));
            
            function renderControl273() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1616 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1616); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1184;
                nodes1184 = node.contents();
                oldNodes.replaceWith(nodes1184);
              }));
            }
            renderControl273();
            
            var oldNodes = iternode114;
            iternode114 = iternode114.contents();
            oldNodes.replaceWith(iternode114);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list114.addEventListener('change', function() { listSubs__.unsubscribe(); renderList114(true); }));
        subs__.addSub(tmp1050.addEventListener('change', function() { listSubs__.unsubscribe(); renderList114(true); }));
      });
    };
    renderList114();
    
    var result__ = n.get() < total.get();
    var tmp1052 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp1052.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp1052.set(n.get() < total.get());
    }));
    
    
    var node614 = $("<span>");
    root1615.append(node614);
    var condSubs149 = new mobl.CompSubscription();
    subs__.addSub(condSubs149);
    var oldValue149;
    var renderCond149 = function() {
      var value581 = tmp1052.get();
      if(oldValue149 === value581) return;
      oldValue149 = value581;
      var subs__ = condSubs149;
      subs__.unsubscribe();
      node614.empty();
      if(value581) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1051 = mobl.ref(result__);
        
        var nodes1185 = $("<span>");
        node614.append(nodes1185);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp1051, mobl.ref(null), function(_, callback) {
          var root1617 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1186 = $("<span>");
          root1617.append(nodes1186);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1618 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1618); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1186;
            nodes1186 = node.contents();
            oldNodes.replaceWith(nodes1186);
          }));
          callback(root1617); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1185;
          nodes1185 = node.contents();
          oldNodes.replaceWith(nodes1185);
        }));
        
        
      } else {
        
      }
    };
    renderCond149();
    subs__.addSub(tmp1052.addEventListener('change', function() {
      renderCond149();
    }));
    
    callback(root1615); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1619 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1187 = $("<span>");
  root1619.append(nodes1187);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1620 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node615 = mobl.loadingSpan();
    root1620.append(node615);
    var list115;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList115 = function() {
      var subs__ = listSubs__;
      list115 = items.get();
      list115.list(function(results115) {
        node615.empty();
        for(var i157 = 0; i157 < results115.length; i157++) {
          (function() {
            var iternode115 = $("<span>");
            node615.append(iternode115);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results115), i157), "_1");it = mobl.ref(mobl.ref(mobl.ref(results115), i157), "_2");
            var nodes1188 = $("<span>");
            iternode115.append(nodes1188);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1621 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1189 = $("<span>");
              root1621.append(nodes1189);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1622 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1622); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1189;
                nodes1189 = node.contents();
                oldNodes.replaceWith(nodes1189);
              }));
              callback(root1621); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1188;
              nodes1188 = node.contents();
              oldNodes.replaceWith(nodes1188);
            }));
            
            var oldNodes = iternode115;
            iternode115 = iternode115.contents();
            oldNodes.replaceWith(iternode115);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list115.addEventListener('change', function() { listSubs__.unsubscribe(); renderList115(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList115(true); }));
      });
    };
    renderList115();
    
    callback(root1620); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1187;
    nodes1187 = node.contents();
    oldNodes.replaceWith(nodes1187);
  }));
  callback(root1619); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1623 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll690) {
    coll690 = coll690.reverse();
    function processOne42() {
      var it;
      it = coll690.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll690.length > 0) processOne42(); else rest42();
      
    }
    function rest42() {
      var nodes1190 = $("<span>");
      root1623.append(nodes1190);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1624 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1053 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1054 = mobl.ref(result__);
        
        var nodes1191 = $("<span>");
        root1624.append(nodes1191);
        subs__.addSub((ui.backButton)(tmp1054, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1053, function(_, callback) {
          var root1625 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1625); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1191;
          nodes1191 = node.contents();
          oldNodes.replaceWith(nodes1191);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll689) {
                           coll689 = coll689.reverse();
                           function processOne41() {
                             var checked;var it;
                             var tmp1092 = coll689.pop();
                             checked = tmp1092._1;it = tmp1092._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll689.length > 0) processOne41(); else rest41();
                               
                             } else {
                               {
                                 
                                 if(coll689.length > 0) processOne41(); else rest41();
                                 
                               }
                             }
                           }
                           function rest41() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll689.length > 0) processOne41(); else rest41();
                         });
                         
                       };
        var tmp1055 = mobl.ref(result__);
        
        var nodes1192 = $("<span>");
        root1624.append(nodes1192);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1055, function(_, callback) {
          var root1626 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1626); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1192;
          nodes1192 = node.contents();
          oldNodes.replaceWith(nodes1192);
        }));
        callback(root1624); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1190;
        nodes1190 = node.contents();
        oldNodes.replaceWith(nodes1190);
      }));
      var nodes1193 = $("<span>");
      root1623.append(nodes1193);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1627 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1627); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1193;
        nodes1193 = node.contents();
        oldNodes.replaceWith(nodes1193);
      }));
      callback(root1623); return subs__;
      
      
    }
    if(coll690.length > 0) processOne42(); else rest42();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1628 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1194 = $("<span>");
  root1628.append(nodes1194);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1629 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1629); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1194;
    nodes1194 = node.contents();
    oldNodes.replaceWith(nodes1194);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp1056 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1056.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1056.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1056.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1056.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1056.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1195 = $("<span>");
  root1628.append(nodes1195);
  subs__.addSub((ui.masterDetail)(tmp1056, masterItem, detailItem, function(_, callback) {
    var root1630 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1630); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1195;
    nodes1195 = node.contents();
    oldNodes.replaceWith(nodes1195);
  }));
  callback(root1628); return subs__;
  
  
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
  var root1631 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1196 = $("<span>");
  root1631.append(nodes1196);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1632 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node616 = mobl.loadingSpan();
    root1632.append(node616);
    var list116;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList116 = function() {
      var subs__ = listSubs__;
      list116 = sections.get();
      list116.list(function(results116) {
        node616.empty();
        for(var i158 = 0; i158 < results116.length; i158++) {
          (function() {
            var iternode116 = $("<span>");
            node616.append(iternode116);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results116), i158), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results116), i158), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp1058 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1058.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1058.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1058.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1058.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1057 = mobl.ref(result__);
            
            var nodes1197 = $("<span>");
            iternode116.append(nodes1197);
            subs__.addSub((mobl.span)(tmp1058, mobl.ref(null), tmp1057, mobl.ref(null), function(_, callback) {
              var root1633 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1198 = $("<span>");
              root1633.append(nodes1198);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1634 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1634); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1198;
                nodes1198 = node.contents();
                oldNodes.replaceWith(nodes1198);
              }));
              callback(root1633); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1197;
              nodes1197 = node.contents();
              oldNodes.replaceWith(nodes1197);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp1059 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1059.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1059.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1059.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1059.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1199 = $("<span>");
            iternode116.append(nodes1199);
            subs__.addSub((mobl.block)(tmp1059, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1635 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1200 = $("<span>");
              root1635.append(nodes1200);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl274();
              }));
              
              function renderControl274() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1636 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1636); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1200;
                  nodes1200 = node.contents();
                  oldNodes.replaceWith(nodes1200);
                }));
              }
              renderControl274();
              callback(root1635); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1199;
              nodes1199 = node.contents();
              oldNodes.replaceWith(nodes1199);
            }));
            
            var oldNodes = iternode116;
            iternode116 = iternode116.contents();
            oldNodes.replaceWith(iternode116);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list116.addEventListener('change', function() { listSubs__.unsubscribe(); renderList116(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList116(true); }));
      });
    };
    renderList116();
    
    callback(root1632); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1196;
    nodes1196 = node.contents();
    oldNodes.replaceWith(nodes1196);
  }));
  callback(root1631); return subs__;
  
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
  var root1637 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node617 = $("<table>");
  
  var ref643 = style;
  if(ref643.get() !== null) {
    node617.attr('class', ref643.get());
    subs__.addSub(ref643.addEventListener('change', function(_, ref, val) {
      node617.attr('class', val);
    }));
    
  }
  subs__.addSub(ref643.rebind());
  
  var nodes1201 = $("<span>");
  node617.append(nodes1201);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl275();
  }));
  
  function renderControl275() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1638 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1638); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1201;
      nodes1201 = node.contents();
      oldNodes.replaceWith(nodes1201);
    }));
  }
  renderControl275();
  root1637.append(node617);
  callback(root1637); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1639 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node618 = $("<tr>");
  
  var ref644 = style;
  if(ref644.get() !== null) {
    node618.attr('class', ref644.get());
    subs__.addSub(ref644.addEventListener('change', function(_, ref, val) {
      node618.attr('class', val);
    }));
    
  }
  subs__.addSub(ref644.rebind());
  
  var nodes1202 = $("<span>");
  node618.append(nodes1202);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl276();
  }));
  
  function renderControl276() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1640 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1640); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1202;
      nodes1202 = node.contents();
      oldNodes.replaceWith(nodes1202);
    }));
  }
  renderControl276();
  root1639.append(node618);
  callback(root1639); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1641 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node619 = $("<td>");
  
  var ref645 = width;
  if(ref645.get() !== null) {
    node619.attr('width', ref645.get());
    subs__.addSub(ref645.addEventListener('change', function(_, ref, val) {
      node619.attr('width', val);
    }));
    
  }
  subs__.addSub(ref645.rebind());
  
  var ref646 = style;
  if(ref646.get() !== null) {
    node619.attr('class', ref646.get());
    subs__.addSub(ref646.addEventListener('change', function(_, ref, val) {
      node619.attr('class', val);
    }));
    
  }
  subs__.addSub(ref646.rebind());
  
  var nodes1203 = $("<span>");
  node619.append(nodes1203);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl277();
  }));
  
  function renderControl277() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1642 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1642); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1203;
      nodes1203 = node.contents();
      oldNodes.replaceWith(nodes1203);
    }));
  }
  renderControl277();
  root1641.append(node619);
  callback(root1641); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1643 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node620 = $("<td>");
  
  var ref647 = width;
  if(ref647.get() !== null) {
    node620.attr('width', ref647.get());
    subs__.addSub(ref647.addEventListener('change', function(_, ref, val) {
      node620.attr('width', val);
    }));
    
  }
  subs__.addSub(ref647.rebind());
  
  var ref648 = style;
  if(ref648.get() !== null) {
    node620.attr('class', ref648.get());
    subs__.addSub(ref648.addEventListener('change', function(_, ref, val) {
      node620.attr('class', val);
    }));
    
  }
  subs__.addSub(ref648.rebind());
  
  var nodes1204 = $("<span>");
  node620.append(nodes1204);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl278();
  }));
  
  function renderControl278() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1644 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1644); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1204;
      nodes1204 = node.contents();
      oldNodes.replaceWith(nodes1204);
    }));
  }
  renderControl278();
  root1643.append(node620);
  callback(root1643); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1645 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node621 = $("<td>");
  
  var ref649 = width;
  if(ref649.get() !== null) {
    node621.attr('width', ref649.get());
    subs__.addSub(ref649.addEventListener('change', function(_, ref, val) {
      node621.attr('width', val);
    }));
    
  }
  subs__.addSub(ref649.rebind());
  
  var ref650 = style;
  if(ref650.get() !== null) {
    node621.attr('class', ref650.get());
    subs__.addSub(ref650.addEventListener('change', function(_, ref, val) {
      node621.attr('class', val);
    }));
    
  }
  subs__.addSub(ref650.rebind());
  
  
  var node622 = $("<strong>");
  
  var nodes1205 = $("<span>");
  node622.append(nodes1205);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl279();
  }));
  
  function renderControl279() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1646 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1646); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1205;
      nodes1205 = node.contents();
      oldNodes.replaceWith(nodes1205);
    }));
  }
  renderControl279();
  node621.append(node622);
  root1645.append(node621);
  callback(root1645); return subs__;
  
  
  
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
  items.list(function(coll691) {
    coll691 = coll691.reverse();
    function processOne43() {
      var item;
      item = coll691.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll691.length > 0) processOne43(); else rest43();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll691.length > 0) processOne43(); else rest43();
          
        }
      }
    }
    function rest43() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll691.length > 0) processOne43(); else rest43();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mDetailScreen = function(it, detail, number, callback, screenCallback) {
  var root1647 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1062 = mobl.ref(result__);
  
  var nodes1206 = $("<span>");
  root1647.append(nodes1206);
  subs__.addSub((ui.header)(tmp1062, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1648 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1061 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1060 = mobl.ref(result__);
    
    var nodes1207 = $("<span>");
    root1648.append(nodes1207);
    subs__.addSub((ui.backButton)(tmp1060, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1061, function(_, callback) {
      var root1649 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1649); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1207;
      nodes1207 = node.contents();
      oldNodes.replaceWith(nodes1207);
    }));
    callback(root1648); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1206;
    nodes1206 = node.contents();
    oldNodes.replaceWith(nodes1206);
  }));
  var nodes1208 = $("<span>");
  root1647.append(nodes1208);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl280();
  }));
  
  function renderControl280() {
    subs__.addSub((detail.get())(it, number, function(elements, callback) {
      var root1650 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1650); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1208;
      nodes1208 = node.contents();
      oldNodes.replaceWith(nodes1208);
    }));
  }
  renderControl280();
  callback(root1647); return subs__;
  
  
  return subs__;
};

ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root1651 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1072 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1072.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node623 = $("<span>");
  root1651.append(node623);
  var condSubs150 = new mobl.CompSubscription();
  subs__.addSub(condSubs150);
  var oldValue150;
  var renderCond150 = function() {
    var value582 = tmp1072.get();
    if(oldValue150 === value582) return;
    oldValue150 = value582;
    var subs__ = condSubs150;
    subs__.unsubscribe();
    node623.empty();
    if(value582) {
      
      var current = mobl.ref(null);
      
      var node624 = $("<div>");
      node624.attr('width', "100%");
      
      
      var node625 = $("<div>");
      node625.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes1210 = $("<span>");
      node625.append(nodes1210);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1653 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node628 = mobl.loadingSpan();
        root1653.append(node628);
        var list117;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList117 = function() {
          var subs__ = listSubs__;
          list117 = items.get();
          list117.list(function(results117) {
            node628.empty();
            for(var i159 = 0; i159 < results117.length; i159++) {
              (function() {
                var iternode117 = $("<span>");
                node628.append(iternode117);
                var it;
                it = mobl.ref(mobl.ref(results117), i159);
                var result__ = it.get() == current.get();
                var tmp1068 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp1068.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp1068.set(it.get() == current.get());
                }));
                
                
                var node629 = $("<span>");
                iternode117.append(node629);
                var condSubs152 = new mobl.CompSubscription();
                subs__.addSub(condSubs152);
                var oldValue152;
                var renderCond152 = function() {
                  var value584 = tmp1068.get();
                  if(oldValue152 === value584) return;
                  oldValue152 = value584;
                  var subs__ = condSubs152;
                  subs__.unsubscribe();
                  node629.empty();
                  if(value584) {
                    var nodes1211 = $("<span>");
                    node629.append(nodes1211);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root1654 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1099 = result__;
                        var tmp1065 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1097 = result__;
                            var result__ = tmp1097;
                            tmp1065.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1098 = result__;
                            var result__ = tmp1098;
                            tmp1065.set(result__);
                            
                          });
                        }));
                        
                        var nodes1212 = $("<span>");
                        root1654.append(nodes1212);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl282();
                        }));
                        
                        function renderControl282() {
                          subs__.addSub((masterItem.get())(it, tmp1065, function(elements, callback) {
                            var root1655 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1655); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1212;
                            nodes1212 = node.contents();
                            oldNodes.replaceWith(nodes1212);
                          }));
                        }
                        renderControl282();
                        callback(root1654); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1211;
                      nodes1211 = node.contents();
                      oldNodes.replaceWith(nodes1211);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = true;
                                     ui.visible.set(result__);
                                     mathJAX.renderMaths(function(result__) {
                                       var tmp1103 = result__;
                                       var result__ = plot.renderPlot("corePlotArea", current.get());
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   };
                    var tmp1067 = mobl.ref(result__);
                    
                    var nodes1213 = $("<span>");
                    node629.append(nodes1213);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1067, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root1656 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1102 = result__;
                        var tmp1066 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1100 = result__;
                            var result__ = tmp1100;
                            tmp1066.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1101 = result__;
                            var result__ = tmp1101;
                            tmp1066.set(result__);
                            
                          });
                        }));
                        
                        var nodes1214 = $("<span>");
                        root1656.append(nodes1214);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl283();
                        }));
                        
                        function renderControl283() {
                          subs__.addSub((masterItem.get())(it, tmp1066, function(elements, callback) {
                            var root1657 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1657); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1214;
                            nodes1214 = node.contents();
                            oldNodes.replaceWith(nodes1214);
                          }));
                        }
                        renderControl283();
                        callback(root1656); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1213;
                      nodes1213 = node.contents();
                      oldNodes.replaceWith(nodes1213);
                    }));
                    
                    
                  }
                };
                renderCond152();
                subs__.addSub(tmp1068.addEventListener('change', function() {
                  renderCond152();
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
        
        callback(root1653); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1210;
        nodes1210 = node.contents();
        oldNodes.replaceWith(nodes1210);
      }));
      node624.append(node625);
      
      var node626 = $("<div>");
      node626.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
      
      var result__ = current.get() && ui.visible.get();
      var tmp1070 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        tmp1070.set(current.get() && ui.visible.get());
      }));
      subs__.addSub(ui.visible.addEventListener('change', function() {
        tmp1070.set(current.get() && ui.visible.get());
      }));
      
      
      var node627 = $("<span>");
      node626.append(node627);
      var condSubs151 = new mobl.CompSubscription();
      subs__.addSub(condSubs151);
      var oldValue151;
      var renderCond151 = function() {
        var value583 = tmp1070.get();
        if(oldValue151 === value583) return;
        oldValue151 = value583;
        var subs__ = condSubs151;
        subs__.unsubscribe();
        node627.empty();
        if(value583) {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp1096 = result__;
            var tmp1069 = mobl.ref(result__);
            subs__.addSub(current.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp1094 = result__;
                var result__ = tmp1094;
                tmp1069.set(result__);
                
              });
            }));
            subs__.addSub(items.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp1095 = result__;
                var result__ = tmp1095;
                tmp1069.set(result__);
                
              });
            }));
            
            var nodes1209 = $("<span>");
            node627.append(nodes1209);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl281();
            }));
            
            function renderControl281() {
              subs__.addSub((detail.get())(current, tmp1069, function(elements, callback) {
                var root1652 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1652); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1209;
                nodes1209 = node.contents();
                oldNodes.replaceWith(nodes1209);
              }));
            }
            renderControl281();
            
            
          });
        } else {
          
        }
      };
      renderCond151();
      subs__.addSub(tmp1070.addEventListener('change', function() {
        renderCond151();
      }));
      
      node624.append(node626);
      node623.append(node624);
      
      
      
      
      
      
    } else {
      var nodes1215 = $("<span>");
      node623.append(nodes1215);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1658 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node630 = mobl.loadingSpan();
        root1658.append(node630);
        var list118;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList118 = function() {
          var subs__ = listSubs__;
          list118 = items.get();
          list118.list(function(results118) {
            node630.empty();
            for(var i160 = 0; i160 < results118.length; i160++) {
              (function() {
                var iternode118 = $("<span>");
                node630.append(iternode118);
                var it;
                it = mobl.ref(mobl.ref(results118), i160);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 ui.indexOf(it.get(), items.get(), function(result__) {
                                   var tmp1108 = result__;
                                   mobl.call('ui.mDetailScreen', [it, detail, mobl.ref(tmp1108), mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp1107 = result__;
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp1109 = result__;
                                     var result__ = plot.renderPlot("corePlotArea", it.get());
                                     if(callback && callback.apply) callback(); return;
                                   });
                                   });
                                 });
                               };
                var tmp1064 = mobl.ref(result__);
                
                var nodes1216 = $("<span>");
                iternode118.append(nodes1216);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1064, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1659 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp1106 = result__;
                    var tmp1063 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1104 = result__;
                        var result__ = tmp1104;
                        tmp1063.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1105 = result__;
                        var result__ = tmp1105;
                        tmp1063.set(result__);
                        
                      });
                    }));
                    
                    var nodes1217 = $("<span>");
                    root1659.append(nodes1217);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl284();
                    }));
                    
                    function renderControl284() {
                      subs__.addSub((masterItem.get())(it, tmp1063, function(elements, callback) {
                        var root1660 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root1660); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1217;
                        nodes1217 = node.contents();
                        oldNodes.replaceWith(nodes1217);
                      }));
                    }
                    renderControl284();
                    callback(root1659); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1216;
                  nodes1216 = node.contents();
                  oldNodes.replaceWith(nodes1216);
                }));
                
                var oldNodes = iternode118;
                iternode118 = iternode118.contents();
                oldNodes.replaceWith(iternode118);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list118.addEventListener('change', function() { listSubs__.unsubscribe(); renderList118(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList118(true); }));
          });
        };
        renderList118();
        
        callback(root1658); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1215;
        nodes1215 = node.contents();
        oldNodes.replaceWith(nodes1215);
      }));
      
      
    }
  };
  renderCond150();
  subs__.addSub(tmp1072.addEventListener('change', function() {
    renderCond150();
  }));
  
  callback(root1651); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root1661 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1218 = $("<span>");
  root1661.append(nodes1218);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1662 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1219 = $("<span>");
    root1662.append(nodes1219);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1663 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1663); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1219;
      nodes1219 = node.contents();
      oldNodes.replaceWith(nodes1219);
    }));
    callback(root1662); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1218;
    nodes1218 = node.contents();
    oldNodes.replaceWith(nodes1218);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes1220 = $("<span>");
  root1661.append(nodes1220);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root1664 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1664); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1220;
    nodes1220 = node.contents();
    oldNodes.replaceWith(nodes1220);
  }));
  callback(root1661); return subs__;
  
  
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
