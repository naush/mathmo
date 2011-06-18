mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root8747 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3410 = $("<span>");
  root8747.append(node3410);
  var condSubs830 = new mobl.CompSubscription();
  subs__.addSub(condSubs830);
  var oldValue830;
  var renderCond830 = function() {
    var value3526 = value.get();
    if(oldValue830 === value3526) return;
    oldValue830 = value3526;
    var subs__ = condSubs830;
    subs__.unsubscribe();
    node3410.empty();
    if(value3526) {
      var nodes6563 = $("<span>");
      node3410.append(nodes6563);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1375();
      }));
      
      function renderControl1375() {
        subs__.addSub((elements)(function(elements, callback) {
          var root8748 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8748); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6563;
          nodes6563 = node.contents();
          oldNodes.replaceWith(nodes6563);
        }));
      }
      renderControl1375();
      
      
    } else {
      var nodes6564 = $("<span>");
      node3410.append(nodes6564);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8749 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes6565 = $("<span>");
        root8749.append(nodes6565);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root8750 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8750); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6565;
          nodes6565 = node.contents();
          oldNodes.replaceWith(nodes6565);
        }));
        var nodes6566 = $("<span>");
        root8749.append(nodes6566);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root8751 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8751); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6566;
          nodes6566 = node.contents();
          oldNodes.replaceWith(nodes6566);
        }));
        callback(root8749); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6564;
        nodes6564 = node.contents();
        oldNodes.replaceWith(nodes6564);
      }));
      
      
    }
  };
  renderCond830();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond830();
  }));
  
  callback(root8747); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root8752 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3411 = $("<div>");
  
  var ref3375 = mobl.ref(ui.headerStyle);
  if(ref3375.get() !== null) {
    node3411.attr('class', ref3375.get());
    subs__.addSub(ref3375.addEventListener('change', function(_, ref, val) {
      node3411.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3375.rebind());
  
  var val1725 = onclick.get();
  if(val1725 !== null) {
    subs__.addSub(mobl.domBind(node3411, 'tap', val1725));
  }
  
  var ref3376 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref3376.get() !== null) {
    node3411.attr('style', ref3376.get());
    subs__.addSub(ref3376.addEventListener('change', function(_, ref, val) {
      node3411.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node3411.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref3376.rebind());
  
  
  var node3414 = $("<div>");
  
  var ref3374 = mobl.ref(ui.headerContainerStyle);
  if(ref3374.get() !== null) {
    node3414.attr('class', ref3374.get());
    subs__.addSub(ref3374.addEventListener('change', function(_, ref, val) {
      node3414.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3374.rebind());
  
  
  var node3415 = $("<div>");
  
  var ref3372 = text;
  node3415.text(""+ref3372.get());
  var ignore663 = false;
  subs__.addSub(ref3372.addEventListener('change', function(_, ref, val) {
    if(ignore663) return;
    node3415.text(""+val);
  }));
  subs__.addSub(ref3372.rebind());
  
  
  var ref3373 = mobl.ref(ui.headerTextStyle);
  if(ref3373.get() !== null) {
    node3415.attr('class', ref3373.get());
    subs__.addSub(ref3373.addEventListener('change', function(_, ref, val) {
      node3415.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3373.rebind());
  
  node3414.append(node3415);
  node3411.append(node3414);
  var nodes6567 = $("<span>");
  node3411.append(nodes6567);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1376();
  }));
  
  function renderControl1376() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8753 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8753); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6567;
      nodes6567 = node.contents();
      oldNodes.replaceWith(nodes6567);
    }));
  }
  renderControl1376();
  root8752.append(node3411);
  
  var node3412 = $("<span>");
  root8752.append(node3412);
  var condSubs831 = new mobl.CompSubscription();
  subs__.addSub(condSubs831);
  var oldValue831;
  var renderCond831 = function() {
    var value3527 = fixedPosition.get();
    if(oldValue831 === value3527) return;
    oldValue831 = value3527;
    var subs__ = condSubs831;
    subs__.unsubscribe();
    node3412.empty();
    if(value3527) {
      
      var node3413 = $("<div>");
      node3413.attr('id', "hello");
      node3413.attr('style', "height: 2.9em;");
      
      node3412.append(node3413);
      
      
    } else {
      
    }
  };
  renderCond831();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond831();
  }));
  
  callback(root8752); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8754 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref3377 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref3377.get() !== null) {
    sp.attr('class', ref3377.get());
    subs__.addSub(ref3377.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref3377.rebind());
  
  var val1726 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1726 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1726));
  }
  
  var val1727 = function(event, callback) {
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
  if(val1727 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1727));
  }
  
  var val1728 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after531(result__) {
                    var tmp6012 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after531);if(result__ !== undefined) after531(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1728 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1728));
  }
  
  var val1729 = function(event, callback) {
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
  if(val1729 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1729));
  }
  
  var ref3378 = text;
  sp.text(""+ref3378.get());
  var ignore664 = false;
  subs__.addSub(ref3378.addEventListener('change', function(_, ref, val) {
    if(ignore664) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref3378.rebind());
  
  
  root8754.append(sp);
  callback(root8754); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8755 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6568 = $("<span>");
  root8755.append(nodes6568);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8756 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8756); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6568;
    nodes6568 = node.contents();
    oldNodes.replaceWith(nodes6568);
  }));
  callback(root8755); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8757 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6569 = $("<span>");
  root8757.append(nodes6569);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8758 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8758); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6569;
    nodes6569 = node.contents();
    oldNodes.replaceWith(nodes6569);
  }));
  callback(root8757); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root8759 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3416 = $("<ul>");
  
  var ref3379 = mobl.ref(ui.groupStyle);
  if(ref3379.get() !== null) {
    node3416.attr('class', ref3379.get());
    subs__.addSub(ref3379.addEventListener('change', function(_, ref, val) {
      node3416.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3379.rebind());
  
  var nodes6570 = $("<span>");
  node3416.append(nodes6570);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1377();
  }));
  
  function renderControl1377() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8760 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8760); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6570;
      nodes6570 = node.contents();
      oldNodes.replaceWith(nodes6570);
    }));
  }
  renderControl1377();
  root8759.append(node3416);
  callback(root8759); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root8761 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3417 = $("<img>");
  
  var ref3380 = url;
  if(ref3380.get() !== null) {
    node3417.attr('src', ref3380.get());
    subs__.addSub(ref3380.addEventListener('change', function(_, ref, val) {
      node3417.attr('src', val);
    }));
    
  }
  subs__.addSub(ref3380.rebind());
  
  var ref3381 = width;
  if(ref3381.get() !== null) {
    node3417.attr('width', ref3381.get());
    subs__.addSub(ref3381.addEventListener('change', function(_, ref, val) {
      node3417.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3381.rebind());
  
  var ref3382 = height;
  if(ref3382.get() !== null) {
    node3417.attr('height', ref3382.get());
    subs__.addSub(ref3382.addEventListener('change', function(_, ref, val) {
      node3417.attr('height', val);
    }));
    
  }
  subs__.addSub(ref3382.rebind());
  
  var ref3383 = style;
  if(ref3383.get() !== null) {
    node3417.attr('class', ref3383.get());
    subs__.addSub(ref3383.addEventListener('change', function(_, ref, val) {
      node3417.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3383.rebind());
  
  var val1730 = onclick.get();
  if(val1730 !== null) {
    subs__.addSub(mobl.domBind(node3417, 'tap', val1730));
  }
  
  var ref3384 = valign;
  if(ref3384.get() !== null) {
    node3417.attr('valign', ref3384.get());
    subs__.addSub(ref3384.addEventListener('change', function(_, ref, val) {
      node3417.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref3384.rebind());
  
  var ref3385 = align;
  if(ref3385.get() !== null) {
    node3417.attr('align', ref3385.get());
    subs__.addSub(ref3385.addEventListener('change', function(_, ref, val) {
      node3417.attr('align', val);
    }));
    
  }
  subs__.addSub(ref3385.rebind());
  
  root8761.append(node3417);
  callback(root8761); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root8762 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref3386 = mobl.ref(ui.itemStyle);
  if(ref3386.get() !== null) {
    el.attr('class', ref3386.get());
    subs__.addSub(ref3386.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3386.rebind());
  
  var ref3387 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref3387.get() !== null) {
    el.attr('class', ref3387.get());
    subs__.addSub(ref3387.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref3387.rebind());
  
  var val1731 = onswipe.get();
  if(val1731 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1731));
  }
  
  var val1732 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp6013 = result__;
                                           function after532(result__) {
                                             var tmp6014 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after532);if(result__ !== undefined) after532(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp6015 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1732 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1732));
  }
  
  var nodes6571 = $("<span>");
  el.append(nodes6571);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1378();
  }));
  
  function renderControl1378() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8763 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8763); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6571;
      nodes6571 = node.contents();
      oldNodes.replaceWith(nodes6571);
    }));
  }
  renderControl1378();
  root8762.append(el);
  callback(root8762); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root8764 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3418 = $("<input>");
  node3418.attr('type', "checkbox");
  
  var ref3389 = b;
  node3418.attr('checked', !!ref3389.get());
  subs__.addSub(ref3389.addEventListener('change', function(_, ref, val) {
    if(ref === ref3389) node3418.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node3418, 'change', function() {
    b.set(!!node3418.attr('checked'));
  }));
  
  var val1734 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1734 !== null) {
    subs__.addSub(mobl.domBind(node3418, 'tap', val1734));
  }
  
  var val1735 = onchange.get();
  if(val1735 !== null) {
    subs__.addSub(mobl.domBind(node3418, 'change', val1735));
  }
  
  root8764.append(node3418);
  
  root8764.append(" ");
  
  var node3419 = $("<span>");
  
  var ref3388 = label;
  node3419.text(""+ref3388.get());
  var ignore665 = false;
  subs__.addSub(ref3388.addEventListener('change', function(_, ref, val) {
    if(ignore665) return;
    node3419.text(""+val);
  }));
  subs__.addSub(ref3388.rebind());
  
  
  var val1733 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after533(result__) {
                    var tmp6016 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after533);if(result__ !== undefined) after533(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1733 !== null) {
    subs__.addSub(mobl.domBind(node3419, 'tap', val1733));
  }
  
  root8764.append(node3419);
  callback(root8764); return subs__;
  
  
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
  var root8765 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3420 = $("<span>");
  root8765.append(node3420);
  var condSubs832 = new mobl.CompSubscription();
  subs__.addSub(condSubs832);
  var oldValue832;
  var renderCond832 = function() {
    var value3528 = label.get();
    if(oldValue832 === value3528) return;
    oldValue832 = value3528;
    var subs__ = condSubs832;
    subs__.unsubscribe();
    node3420.empty();
    if(value3528) {
      var nodes6572 = $("<span>");
      node3420.append(nodes6572);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8766 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8766); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6572;
        nodes6572 = node.contents();
        oldNodes.replaceWith(nodes6572);
      }));
      
      
    } else {
      
    }
  };
  renderCond832();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond832();
  }));
  
  
  var node3421 = $("<span>");
  root8765.append(node3421);
  var condSubs833 = new mobl.CompSubscription();
  subs__.addSub(condSubs833);
  var oldValue833;
  var renderCond833 = function() {
    var value3529 = validator.get();
    if(oldValue833 === value3529) return;
    oldValue833 = value3529;
    var subs__ = condSubs833;
    subs__.unsubscribe();
    node3421.empty();
    if(value3529) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after537(result__) {
        var tmp6017 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp6018 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node3422 = $("<input>");
        
        var ref3390 = inputType;
        if(ref3390.get() !== null) {
          node3422.attr('type', ref3390.get());
          subs__.addSub(ref3390.addEventListener('change', function(_, ref, val) {
            node3422.attr('type', val);
          }));
          
        }
        subs__.addSub(ref3390.rebind());
        
        var ref3391 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref3391.get() !== null) {
          node3422.attr('class', ref3391.get());
          subs__.addSub(ref3391.addEventListener('change', function(_, ref, val) {
            node3422.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node3422.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node3422.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node3422.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref3391.rebind());
        
        var ref3392 = placeholder;
        if(ref3392.get() !== null) {
          node3422.attr('placeholder', ref3392.get());
          subs__.addSub(ref3392.addEventListener('change', function(_, ref, val) {
            node3422.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref3392.rebind());
        
        var ref3393 = temp;
        node3422.val(""+ref3393.get());
        var ignore666 = false;
        subs__.addSub(ref3393.addEventListener('change', function(_, ref, val) {
          if(ignore666) return;
          node3422.val(""+val);
        }));
        subs__.addSub(ref3393.rebind());
        
        subs__.addSub(mobl.domBind(node3422, 'keyup change', function() {
          ignore666 = true;
          temp.set(mobl.stringTomobl__String(node3422.val()));
          ignore666 = false;
        }));
        
        
        var val1736 = onchange.get();
        if(val1736 !== null) {
          subs__.addSub(mobl.domBind(node3422, 'change', val1736));
        }
        
        var val1737 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after534(result__) {
                          var tmp6019 = result__;
                          function after535(result__) {
                            var tmp6020 = result__;
                            var result__ = tmp6020;
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
                          var result__ = validator.get()(temp.get(), after535);if(result__ !== undefined) after535(result__);
                        }
                        var result__ = onkeyup.get()(event, after534);if(result__ !== undefined) after534(result__);
                      } else {
                        {
                          function after536(result__) {
                            var tmp6020 = result__;
                            var result__ = tmp6020;
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
                          var result__ = validator.get()(temp.get(), after536);if(result__ !== undefined) after536(result__);
                        }
                      }
                    };
        if(val1737 !== null) {
          subs__.addSub(mobl.domBind(node3422, 'keyup', val1737));
        }
        
        var val1738 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1738 !== null) {
          subs__.addSub(mobl.domBind(node3422, 'blur', val1738));
        }
        
        node3421.append(node3422);
        var nodes6573 = $("<span>");
        node3421.append(nodes6573);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root8767 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8767); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6573;
          nodes6573 = node.contents();
          oldNodes.replaceWith(nodes6573);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after537);if(result__ !== undefined) after537(result__);
    } else {
      
      var node3423 = $("<input>");
      
      var ref3394 = inputType;
      if(ref3394.get() !== null) {
        node3423.attr('type', ref3394.get());
        subs__.addSub(ref3394.addEventListener('change', function(_, ref, val) {
          node3423.attr('type', val);
        }));
        
      }
      subs__.addSub(ref3394.rebind());
      
      var ref3395 = style;
      if(ref3395.get() !== null) {
        node3423.attr('class', ref3395.get());
        subs__.addSub(ref3395.addEventListener('change', function(_, ref, val) {
          node3423.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3395.rebind());
      
      var ref3396 = placeholder;
      if(ref3396.get() !== null) {
        node3423.attr('placeholder', ref3396.get());
        subs__.addSub(ref3396.addEventListener('change', function(_, ref, val) {
          node3423.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3396.rebind());
      
      var ref3397 = s;
      node3423.val(""+ref3397.get());
      var ignore667 = false;
      subs__.addSub(ref3397.addEventListener('change', function(_, ref, val) {
        if(ignore667) return;
        node3423.val(""+val);
      }));
      subs__.addSub(ref3397.rebind());
      
      subs__.addSub(mobl.domBind(node3423, 'keyup change', function() {
        ignore667 = true;
        s.set(mobl.stringTomobl__String(node3423.val()));
        ignore667 = false;
      }));
      
      
      var val1739 = onchange.get();
      if(val1739 !== null) {
        subs__.addSub(mobl.domBind(node3423, 'change', val1739));
      }
      
      var val1740 = onkeyup.get();
      if(val1740 !== null) {
        subs__.addSub(mobl.domBind(node3423, 'keyup', val1740));
      }
      
      var val1741 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1741 !== null) {
        subs__.addSub(mobl.domBind(node3423, 'blur', val1741));
      }
      
      node3421.append(node3423);
      
      
    }
  };
  renderCond833();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond833();
  }));
  
  callback(root8765); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8768 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6574 = $("<span>");
  root8768.append(nodes6574);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8769 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8769); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6574;
    nodes6574 = node.contents();
    oldNodes.replaceWith(nodes6574);
  }));
  callback(root8768); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8770 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6575 = $("<span>");
  root8770.append(nodes6575);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8771 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8771); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6575;
    nodes6575 = node.contents();
    oldNodes.replaceWith(nodes6575);
  }));
  callback(root8770); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root8772 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3424 = $("<span>");
  root8772.append(node3424);
  var condSubs834 = new mobl.CompSubscription();
  subs__.addSub(condSubs834);
  var oldValue834;
  var renderCond834 = function() {
    var value3530 = label.get();
    if(oldValue834 === value3530) return;
    oldValue834 = value3530;
    var subs__ = condSubs834;
    subs__.unsubscribe();
    node3424.empty();
    if(value3530) {
      var nodes6576 = $("<span>");
      node3424.append(nodes6576);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8773 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8773); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6576;
        nodes6576 = node.contents();
        oldNodes.replaceWith(nodes6576);
      }));
      
      
    } else {
      
    }
  };
  renderCond834();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond834();
  }));
  
  
  var node3425 = $("<input>");
  node3425.attr('type', "range");
  
  var ref3398 = n;
  node3425.val(""+ref3398.get());
  var ignore668 = false;
  subs__.addSub(ref3398.addEventListener('change', function(_, ref, val) {
    if(ignore668) return;
    node3425.val(""+val);
  }));
  subs__.addSub(ref3398.rebind());
  
  subs__.addSub(mobl.domBind(node3425, 'keyup change', function() {
    ignore668 = true;
    n.set(mobl.stringTomobl__Num(node3425.val()));
    ignore668 = false;
  }));
  
  
  var ref3399 = min;
  if(ref3399.get() !== null) {
    node3425.attr('min', ref3399.get());
    subs__.addSub(ref3399.addEventListener('change', function(_, ref, val) {
      node3425.attr('min', val);
    }));
    
  }
  subs__.addSub(ref3399.rebind());
  
  var ref3400 = max;
  if(ref3400.get() !== null) {
    node3425.attr('max', ref3400.get());
    subs__.addSub(ref3400.addEventListener('change', function(_, ref, val) {
      node3425.attr('max', val);
    }));
    
  }
  subs__.addSub(ref3400.rebind());
  
  var ref3401 = step;
  if(ref3401.get() !== null) {
    node3425.attr('step', ref3401.get());
    subs__.addSub(ref3401.addEventListener('change', function(_, ref, val) {
      node3425.attr('step', val);
    }));
    
  }
  subs__.addSub(ref3401.rebind());
  node3425.attr('style', "width: 99%;");
  
  var val1742 = onchange.get();
  if(val1742 !== null) {
    subs__.addSub(mobl.domBind(node3425, 'change', val1742));
  }
  
  var val1743 = onkeyup.get();
  if(val1743 !== null) {
    subs__.addSub(mobl.domBind(node3425, 'keyup', val1743));
  }
  
  var ref3402 = placeholder;
  if(ref3402.get() !== null) {
    node3425.attr('placeholder', ref3402.get());
    subs__.addSub(ref3402.addEventListener('change', function(_, ref, val) {
      node3425.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3402.rebind());
  
  root8772.append(node3425);
  callback(root8772); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8774 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after538(result__) {
      var tmp6021 = result__;
      var result__ = tmp6021;
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
    var result__ = validator.get()(n2, after538);if(result__ !== undefined) after538(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes6577 = $("<span>");
  root8774.append(nodes6577);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8775 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8775); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6577;
    nodes6577 = node.contents();
    oldNodes.replaceWith(nodes6577);
  }));
  callback(root8774); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root8776 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3426 = $("<span>");
  root8776.append(node3426);
  var condSubs835 = new mobl.CompSubscription();
  subs__.addSub(condSubs835);
  var oldValue835;
  var renderCond835 = function() {
    var value3531 = label.get();
    if(oldValue835 === value3531) return;
    oldValue835 = value3531;
    var subs__ = condSubs835;
    subs__.unsubscribe();
    node3426.empty();
    if(value3531) {
      
      var node3427 = $("<span>");
      node3427.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref3406 = label;
      node3427.text(""+ref3406.get());
      var ignore670 = false;
      subs__.addSub(ref3406.addEventListener('change', function(_, ref, val) {
        if(ignore670) return;
        node3427.text(""+val);
      }));
      subs__.addSub(ref3406.rebind());
      
      
      node3426.append(node3427);
      
      var node3428 = $("<span>");
      node3428.attr('style', "float: left");
      
      
      var node3429 = $("<input>");
      node3429.attr('type', "password");
      
      var ref3403 = style;
      if(ref3403.get() !== null) {
        node3429.attr('class', ref3403.get());
        subs__.addSub(ref3403.addEventListener('change', function(_, ref, val) {
          node3429.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3403.rebind());
      
      var ref3404 = placeholder;
      if(ref3404.get() !== null) {
        node3429.attr('placeholder', ref3404.get());
        subs__.addSub(ref3404.addEventListener('change', function(_, ref, val) {
          node3429.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3404.rebind());
      
      var ref3405 = s;
      node3429.val(""+ref3405.get());
      var ignore669 = false;
      subs__.addSub(ref3405.addEventListener('change', function(_, ref, val) {
        if(ignore669) return;
        node3429.val(""+val);
      }));
      subs__.addSub(ref3405.rebind());
      
      subs__.addSub(mobl.domBind(node3429, 'keyup change', function() {
        ignore669 = true;
        s.set(mobl.stringTomobl__String(node3429.val()));
        ignore669 = false;
      }));
      
      
      var val1744 = onchange.get();
      if(val1744 !== null) {
        subs__.addSub(mobl.domBind(node3429, 'change', val1744));
      }
      
      var val1745 = onkeyup.get();
      if(val1745 !== null) {
        subs__.addSub(mobl.domBind(node3429, 'keyup', val1745));
      }
      
      var val1746 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1746 !== null) {
        subs__.addSub(mobl.domBind(node3429, 'blur', val1746));
      }
      
      node3428.append(node3429);
      node3426.append(node3428);
      
      
      
      
    } else {
      
      var node3430 = $("<input>");
      node3430.attr('type', "password");
      
      var ref3407 = style;
      if(ref3407.get() !== null) {
        node3430.attr('class', ref3407.get());
        subs__.addSub(ref3407.addEventListener('change', function(_, ref, val) {
          node3430.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3407.rebind());
      
      var ref3408 = placeholder;
      if(ref3408.get() !== null) {
        node3430.attr('placeholder', ref3408.get());
        subs__.addSub(ref3408.addEventListener('change', function(_, ref, val) {
          node3430.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3408.rebind());
      
      var ref3409 = s;
      node3430.val(""+ref3409.get());
      var ignore671 = false;
      subs__.addSub(ref3409.addEventListener('change', function(_, ref, val) {
        if(ignore671) return;
        node3430.val(""+val);
      }));
      subs__.addSub(ref3409.rebind());
      
      subs__.addSub(mobl.domBind(node3430, 'keyup change', function() {
        ignore671 = true;
        s.set(mobl.stringTomobl__String(node3430.val()));
        ignore671 = false;
      }));
      
      
      var val1747 = onchange.get();
      if(val1747 !== null) {
        subs__.addSub(mobl.domBind(node3430, 'change', val1747));
      }
      
      var val1748 = onkeyup.get();
      if(val1748 !== null) {
        subs__.addSub(mobl.domBind(node3430, 'keyup', val1748));
      }
      
      var val1749 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1749 !== null) {
        subs__.addSub(mobl.domBind(node3430, 'blur', val1749));
      }
      
      node3426.append(node3430);
      
      
    }
  };
  renderCond835();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond835();
  }));
  
  callback(root8776); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root8777 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref3414 = style;
  if(ref3414.get() !== null) {
    sel.attr('class', ref3414.get());
    subs__.addSub(ref3414.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3414.rebind());
  
  var val1750 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after539(result__) {
                    var tmp6023 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after539);if(result__ !== undefined) after539(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1750 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1750));
  }
  
  
  var node3431 = mobl.loadingSpan();
  sel.append(node3431);
  var list601;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList601 = function() {
    var subs__ = listSubs__;
    list601 = options.get();
    list601.list(function(results601) {
      node3431.empty();
      for(var i1507 = 0; i1507 < results601.length; i1507++) {
        (function() {
          var iternode601 = $("<span>");
          node3431.append(iternode601);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results601), i1507), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results601), i1507), "_2");
          
          var node3432 = $("<option>");
          
          var ref3410 = optionDescription;
          node3432.text(""+ref3410.get());
          var ignore672 = false;
          subs__.addSub(ref3410.addEventListener('change', function(_, ref, val) {
            if(ignore672) return;
            node3432.text(""+val);
          }));
          subs__.addSub(ref3410.rebind());
          
          
          var ref3411 = optionStyle;
          if(ref3411.get() !== null) {
            node3432.attr('class', ref3411.get());
            subs__.addSub(ref3411.addEventListener('change', function(_, ref, val) {
              node3432.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3411.rebind());
          
          var ref3412 = optionValue;
          if(ref3412.get() !== null) {
            node3432.attr('value', ref3412.get());
            subs__.addSub(ref3412.addEventListener('change', function(_, ref, val) {
              node3432.attr('value', val);
            }));
            
          }
          subs__.addSub(ref3412.rebind());
          
          var ref3413 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref3413.get() !== null) {
            node3432.attr('selected', ref3413.get());
            subs__.addSub(ref3413.addEventListener('change', function(_, ref, val) {
              node3432.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node3432.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node3432.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref3413.rebind());
          
          iternode601.append(node3432);
          
          var oldNodes = iternode601;
          iternode601 = iternode601.contents();
          oldNodes.replaceWith(iternode601);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list601.addEventListener('change', function() { listSubs__.unsubscribe(); renderList601(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList601(true); }));
    });
  };
  renderList601();
  
  root8777.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root8777); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root8778 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes6578 = $("<span>");
    root8778.append(nodes6578);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8779 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3433 = mobl.loadingSpan();
      root8779.append(node3433);
      var list602;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList602 = function() {
        var subs__ = listSubs__;
        list602 = tabs.get();
        list602.list(function(results602) {
          node3433.empty();
          for(var i1508 = 0; i1508 < results602.length; i1508++) {
            (function() {
              var iternode602 = $("<span>");
              node3433.append(iternode602);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results602), i1508), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results602), i1508), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results602), i1508), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp5986 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp5986.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp5986.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp5986.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp5986.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp5985 = mobl.ref(result__);
              
              var nodes6579 = $("<span>");
              iternode602.append(nodes6579);
              subs__.addSub((mobl.span)(tmp5986, mobl.ref(null), tmp5985, mobl.ref(null), function(_, callback) {
                var root8780 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6580 = $("<span>");
                root8780.append(nodes6580);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root8781 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8781); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6580;
                  nodes6580 = node.contents();
                  oldNodes.replaceWith(nodes6580);
                }));
                callback(root8780); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6579;
                nodes6579 = node.contents();
                oldNodes.replaceWith(nodes6579);
              }));
              
              var oldNodes = iternode602;
              iternode602 = iternode602.contents();
              oldNodes.replaceWith(iternode602);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list602.addEventListener('change', function() { listSubs__.unsubscribe(); renderList602(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList602(true); }));
        });
      };
      renderList602();
      
      callback(root8779); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6578;
      nodes6578 = node.contents();
      oldNodes.replaceWith(nodes6578);
    }));
    
    var node3434 = mobl.loadingSpan();
    root8778.append(node3434);
    var list603;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList603 = function() {
      var subs__ = listSubs__;
      list603 = tabs.get();
      list603.list(function(results603) {
        node3434.empty();
        for(var i1509 = 0; i1509 < results603.length; i1509++) {
          (function() {
            var iternode603 = $("<span>");
            node3434.append(iternode603);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results603), i1509), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results603), i1509), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results603), i1509), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp5987 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp5987.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp5987.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp5987.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp5987.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes6581 = $("<span>");
            iternode603.append(nodes6581);
            subs__.addSub((mobl.block)(tmp5987, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8782 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6582 = $("<span>");
              root8782.append(nodes6582);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root8783 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6583 = $("<span>");
                root8783.append(nodes6583);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1379();
                }));
                
                function renderControl1379() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root8784 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8784); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6583;
                    nodes6583 = node.contents();
                    oldNodes.replaceWith(nodes6583);
                  }));
                }
                renderControl1379();
                callback(root8783); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6582;
                nodes6582 = node.contents();
                oldNodes.replaceWith(nodes6582);
              }));
              callback(root8782); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6581;
              nodes6581 = node.contents();
              oldNodes.replaceWith(nodes6581);
            }));
            
            var oldNodes = iternode603;
            iternode603 = iternode603.contents();
            oldNodes.replaceWith(iternode603);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list603.addEventListener('change', function() { listSubs__.unsubscribe(); renderList603(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList603(true); }));
      });
    };
    renderList603();
    
    callback(root8778); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes6578 = $("<span>");
      root8778.append(nodes6578);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8779 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3433 = mobl.loadingSpan();
        root8779.append(node3433);
        var list602;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList602 = function() {
          var subs__ = listSubs__;
          list602 = tabs.get();
          list602.list(function(results602) {
            node3433.empty();
            for(var i1508 = 0; i1508 < results602.length; i1508++) {
              (function() {
                var iternode602 = $("<span>");
                node3433.append(iternode602);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results602), i1508), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results602), i1508), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results602), i1508), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp5986 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp5986.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp5986.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp5986.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp5986.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5985 = mobl.ref(result__);
                
                var nodes6579 = $("<span>");
                iternode602.append(nodes6579);
                subs__.addSub((mobl.span)(tmp5986, mobl.ref(null), tmp5985, mobl.ref(null), function(_, callback) {
                  var root8780 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6580 = $("<span>");
                  root8780.append(nodes6580);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root8781 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8781); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes6580;
                    nodes6580 = node.contents();
                    oldNodes.replaceWith(nodes6580);
                  }));
                  callback(root8780); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6579;
                  nodes6579 = node.contents();
                  oldNodes.replaceWith(nodes6579);
                }));
                
                var oldNodes = iternode602;
                iternode602 = iternode602.contents();
                oldNodes.replaceWith(iternode602);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list602.addEventListener('change', function() { listSubs__.unsubscribe(); renderList602(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList602(true); }));
          });
        };
        renderList602();
        
        callback(root8779); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6578;
        nodes6578 = node.contents();
        oldNodes.replaceWith(nodes6578);
      }));
      
      var node3434 = mobl.loadingSpan();
      root8778.append(node3434);
      var list603;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList603 = function() {
        var subs__ = listSubs__;
        list603 = tabs.get();
        list603.list(function(results603) {
          node3434.empty();
          for(var i1509 = 0; i1509 < results603.length; i1509++) {
            (function() {
              var iternode603 = $("<span>");
              node3434.append(iternode603);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results603), i1509), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results603), i1509), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results603), i1509), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp5987 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp5987.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp5987.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp5987.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp5987.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes6581 = $("<span>");
              iternode603.append(nodes6581);
              subs__.addSub((mobl.block)(tmp5987, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8782 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes6582 = $("<span>");
                root8782.append(nodes6582);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root8783 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6583 = $("<span>");
                  root8783.append(nodes6583);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1379();
                  }));
                  
                  function renderControl1379() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root8784 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8784); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6583;
                      nodes6583 = node.contents();
                      oldNodes.replaceWith(nodes6583);
                    }));
                  }
                  renderControl1379();
                  callback(root8783); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6582;
                  nodes6582 = node.contents();
                  oldNodes.replaceWith(nodes6582);
                }));
                callback(root8782); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes6581;
                nodes6581 = node.contents();
                oldNodes.replaceWith(nodes6581);
              }));
              
              var oldNodes = iternode603;
              iternode603 = iternode603.contents();
              oldNodes.replaceWith(iternode603);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list603.addEventListener('change', function() { listSubs__.unsubscribe(); renderList603(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList603(true); }));
        });
      };
      renderList603();
      
      callback(root8778); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root8785 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3435 = $("<div>");
  
  var ref3418 = mobl.ref(ui.searchboxStyle);
  if(ref3418.get() !== null) {
    node3435.attr('class', ref3418.get());
    subs__.addSub(ref3418.addEventListener('change', function(_, ref, val) {
      node3435.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3418.rebind());
  
  
  var node3436 = $("<input>");
  node3436.attr('type', "search");
  
  var ref3415 = mobl.ref(ui.searchBoxInputStyle);
  if(ref3415.get() !== null) {
    node3436.attr('class', ref3415.get());
    subs__.addSub(ref3415.addEventListener('change', function(_, ref, val) {
      node3436.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3415.rebind());
  
  var ref3416 = placeholder;
  if(ref3416.get() !== null) {
    node3436.attr('placeholder', ref3416.get());
    subs__.addSub(ref3416.addEventListener('change', function(_, ref, val) {
      node3436.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3416.rebind());
  
  var ref3417 = s;
  node3436.val(""+ref3417.get());
  var ignore673 = false;
  subs__.addSub(ref3417.addEventListener('change', function(_, ref, val) {
    if(ignore673) return;
    node3436.val(""+val);
  }));
  subs__.addSub(ref3417.rebind());
  
  subs__.addSub(mobl.domBind(node3436, 'keyup change', function() {
    ignore673 = true;
    s.set(mobl.stringTomobl__String(node3436.val()));
    ignore673 = false;
  }));
  
  
  var val1751 = onsearch.get();
  if(val1751 !== null) {
    subs__.addSub(mobl.domBind(node3436, 'change', val1751));
  }
  
  var val1752 = onkeyup.get();
  if(val1752 !== null) {
    subs__.addSub(mobl.domBind(node3436, 'keyup', val1752));
  }
  node3436.attr('autocorrect', false);
  node3436.attr('autocapitalize', false);
  node3436.attr('autocomplete', false);
  
  node3435.append(node3436);
  root8785.append(node3435);
  callback(root8785); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root8786 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref3419 = mobl.ref(ui.contextMenuStyle);
  if(ref3419.get() !== null) {
    menu.attr('class', ref3419.get());
    subs__.addSub(ref3419.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3419.rebind());
  
  var nodes6584 = $("<span>");
  menu.append(nodes6584);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1380();
  }));
  
  function renderControl1380() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8787 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8787); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6584;
      nodes6584 = node.contents();
      oldNodes.replaceWith(nodes6584);
    }));
  }
  renderControl1380();
  root8786.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1753 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp6026 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1753 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1753));
  }
  
  root8786.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root8786); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root8788 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp6011 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp6011.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3437 = $("<span>");
  root8788.append(node3437);
  var condSubs836 = new mobl.CompSubscription();
  subs__.addSub(condSubs836);
  var oldValue836;
  var renderCond836 = function() {
    var value3532 = tmp6011.get();
    if(oldValue836 === value3532) return;
    oldValue836 = value3532;
    var subs__ = condSubs836;
    subs__.unsubscribe();
    node3437.empty();
    if(value3532) {
      items.get().one(function(result__) {
        var tmp6027 = result__;
        var current = mobl.ref(result__);
        
        var node3438 = $("<div>");
        node3438.attr('width', "100%");
        
        
        var node3439 = $("<div>");
        node3439.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes6587 = $("<span>");
        node3439.append(nodes6587);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8791 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3442 = mobl.loadingSpan();
          root8791.append(node3442);
          var list604;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList604 = function() {
            var subs__ = listSubs__;
            list604 = items.get();
            list604.list(function(results604) {
              node3442.empty();
              for(var i1510 = 0; i1510 < results604.length; i1510++) {
                (function() {
                  var iternode604 = $("<span>");
                  node3442.append(iternode604);
                  var it;
                  it = mobl.ref(mobl.ref(results604), i1510);
                  var result__ = it.get() == current.get();
                  var tmp5993 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp5993.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp5993.set(it.get() == current.get());
                  }));
                  
                  
                  var node3443 = $("<span>");
                  iternode604.append(node3443);
                  var condSubs838 = new mobl.CompSubscription();
                  subs__.addSub(condSubs838);
                  var oldValue838;
                  var renderCond838 = function() {
                    var value3534 = tmp5993.get();
                    if(oldValue838 === value3534) return;
                    oldValue838 = value3534;
                    var subs__ = condSubs838;
                    subs__.unsubscribe();
                    node3443.empty();
                    if(value3534) {
                      var nodes6588 = $("<span>");
                      node3443.append(nodes6588);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root8792 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6589 = $("<span>");
                        root8792.append(nodes6589);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1382();
                        }));
                        
                        function renderControl1382() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8793 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8793); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6589;
                            nodes6589 = node.contents();
                            oldNodes.replaceWith(nodes6589);
                          }));
                        }
                        renderControl1382();
                        callback(root8792); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6588;
                        nodes6588 = node.contents();
                        oldNodes.replaceWith(nodes6588);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp5992 = mobl.ref(result__);
                      
                      var nodes6590 = $("<span>");
                      node3443.append(nodes6590);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5992, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root8794 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes6591 = $("<span>");
                        root8794.append(nodes6591);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1383();
                        }));
                        
                        function renderControl1383() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8795 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8795); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes6591;
                            nodes6591 = node.contents();
                            oldNodes.replaceWith(nodes6591);
                          }));
                        }
                        renderControl1383();
                        callback(root8794); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6590;
                        nodes6590 = node.contents();
                        oldNodes.replaceWith(nodes6590);
                      }));
                      
                      
                    }
                  };
                  renderCond838();
                  subs__.addSub(tmp5993.addEventListener('change', function() {
                    renderCond838();
                  }));
                  
                  
                  var oldNodes = iternode604;
                  iternode604 = iternode604.contents();
                  oldNodes.replaceWith(iternode604);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list604.addEventListener('change', function() { listSubs__.unsubscribe(); renderList604(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList604(true); }));
            });
          };
          renderList604();
          
          callback(root8791); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6587;
          nodes6587 = node.contents();
          oldNodes.replaceWith(nodes6587);
        }));
        node3438.append(node3439);
        
        var node3440 = $("<div>");
        node3440.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node3441 = $("<span>");
        node3440.append(node3441);
        var condSubs837 = new mobl.CompSubscription();
        subs__.addSub(condSubs837);
        var oldValue837;
        var renderCond837 = function() {
          var value3533 = current.get();
          if(oldValue837 === value3533) return;
          oldValue837 = value3533;
          var subs__ = condSubs837;
          subs__.unsubscribe();
          node3441.empty();
          if(value3533) {
            var nodes6585 = $("<span>");
            node3441.append(nodes6585);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1381();
            }));
            
            function renderControl1381() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root8789 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8789); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6585;
                nodes6585 = node.contents();
                oldNodes.replaceWith(nodes6585);
              }));
            }
            renderControl1381();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp5994 = mobl.ref(result__);
            
            var nodes6586 = $("<span>");
            node3441.append(nodes6586);
            subs__.addSub((mobl.label)(tmp5994, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8790 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8790); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6586;
              nodes6586 = node.contents();
              oldNodes.replaceWith(nodes6586);
            }));
            
            
          }
        };
        renderCond837();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond837();
        }));
        
        node3438.append(node3440);
        node3437.append(node3438);
        
        
        
        
        
        
      });
    } else {
      var nodes6592 = $("<span>");
      node3437.append(nodes6592);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3444 = mobl.loadingSpan();
        root8796.append(node3444);
        var list605;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList605 = function() {
          var subs__ = listSubs__;
          list605 = items.get();
          list605.list(function(results605) {
            node3444.empty();
            for(var i1511 = 0; i1511 < results605.length; i1511++) {
              (function() {
                var iternode605 = $("<span>");
                node3444.append(iternode605);
                var it;
                it = mobl.ref(mobl.ref(results605), i1511);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp6028 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp5988 = mobl.ref(result__);
                
                var nodes6593 = $("<span>");
                iternode605.append(nodes6593);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5988, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8797 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6594 = $("<span>");
                  root8797.append(nodes6594);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1384();
                  }));
                  
                  function renderControl1384() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root8798 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8798); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6594;
                      nodes6594 = node.contents();
                      oldNodes.replaceWith(nodes6594);
                    }));
                  }
                  renderControl1384();
                  callback(root8797); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6593;
                  nodes6593 = node.contents();
                  oldNodes.replaceWith(nodes6593);
                }));
                
                var oldNodes = iternode605;
                iternode605 = iternode605.contents();
                oldNodes.replaceWith(iternode605);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list605.addEventListener('change', function() { listSubs__.unsubscribe(); renderList605(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList605(true); }));
          });
        };
        renderList605();
        
        callback(root8796); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6592;
        nodes6592 = node.contents();
        oldNodes.replaceWith(nodes6592);
      }));
      
      
    }
  };
  renderCond836();
  subs__.addSub(tmp6011.addEventListener('change', function() {
    renderCond836();
  }));
  
  callback(root8788); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8799 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp5991 = mobl.ref(result__);
  
  var nodes6595 = $("<span>");
  root8799.append(nodes6595);
  subs__.addSub((ui.header)(tmp5991, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8800 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5990 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5989 = mobl.ref(result__);
    
    var nodes6596 = $("<span>");
    root8800.append(nodes6596);
    subs__.addSub((ui.backButton)(tmp5989, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5990, function(_, callback) {
      var root8801 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8801); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6596;
      nodes6596 = node.contents();
      oldNodes.replaceWith(nodes6596);
    }));
    callback(root8800); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6595;
    nodes6595 = node.contents();
    oldNodes.replaceWith(nodes6595);
  }));
  var nodes6597 = $("<span>");
  root8799.append(nodes6597);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1385();
  }));
  
  function renderControl1385() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8802 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8802); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6597;
      nodes6597 = node.contents();
      oldNodes.replaceWith(nodes6597);
    }));
  }
  renderControl1385();
  callback(root8799); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root8803 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes6598 = $("<span>");
  root8803.append(nodes6598);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8804 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3445 = mobl.loadingSpan();
    root8804.append(node3445);
    var list606;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList606 = function() {
      var subs__ = listSubs__;
      list606 = coll.get();
      list606.list(function(results606) {
        node3445.empty();
        for(var i1512 = 0; i1512 < results606.length; i1512++) {
          (function() {
            var iternode606 = $("<span>");
            node3445.append(iternode606);
            var it;
            it = mobl.ref(mobl.ref(results606), i1512);
            var result__ = it.get() == selected.get();
            var tmp5996 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp5996.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp5996.set(it.get() == selected.get());
            }));
            
            
            var node3446 = $("<span>");
            iternode606.append(node3446);
            var condSubs839 = new mobl.CompSubscription();
            subs__.addSub(condSubs839);
            var oldValue839;
            var renderCond839 = function() {
              var value3535 = tmp5996.get();
              if(oldValue839 === value3535) return;
              oldValue839 = value3535;
              var subs__ = condSubs839;
              subs__.unsubscribe();
              node3446.empty();
              if(value3535) {
                var nodes6599 = $("<span>");
                node3446.append(nodes6599);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8805 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6600 = $("<span>");
                  root8805.append(nodes6600);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1386();
                  }));
                  
                  function renderControl1386() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root8806 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8806); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6600;
                      nodes6600 = node.contents();
                      oldNodes.replaceWith(nodes6600);
                    }));
                  }
                  renderControl1386();
                  callback(root8805); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6599;
                  nodes6599 = node.contents();
                  oldNodes.replaceWith(nodes6599);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp5995 = mobl.ref(result__);
                
                var nodes6601 = $("<span>");
                node3446.append(nodes6601);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5995, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root8807 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes6602 = $("<span>");
                  root8807.append(nodes6602);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1387();
                  }));
                  
                  function renderControl1387() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root8808 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8808); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes6602;
                      nodes6602 = node.contents();
                      oldNodes.replaceWith(nodes6602);
                    }));
                  }
                  renderControl1387();
                  callback(root8807); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6601;
                  nodes6601 = node.contents();
                  oldNodes.replaceWith(nodes6601);
                }));
                
                
              }
            };
            renderCond839();
            subs__.addSub(tmp5996.addEventListener('change', function() {
              renderCond839();
            }));
            
            
            var oldNodes = iternode606;
            iternode606 = iternode606.contents();
            oldNodes.replaceWith(iternode606);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list606.addEventListener('change', function() { listSubs__.unsubscribe(); renderList606(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList606(true); }));
      });
    };
    renderList606();
    
    callback(root8804); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6598;
    nodes6598 = node.contents();
    oldNodes.replaceWith(nodes6598);
  }));
  callback(root8803); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root8809 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp6029 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp5997 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp5997.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp5997.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp5997.set(coll.get().limit(n.get()));
    }));
    
    
    var node3447 = mobl.loadingSpan();
    root8809.append(node3447);
    var list607;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList607 = function() {
      var subs__ = listSubs__;
      list607 = tmp5997.get();
      list607.list(function(results607) {
        node3447.empty();
        for(var i1513 = 0; i1513 < results607.length; i1513++) {
          (function() {
            var iternode607 = $("<span>");
            node3447.append(iternode607);
            var it;
            it = mobl.ref(mobl.ref(results607), i1513);
            var nodes6603 = $("<span>");
            iternode607.append(nodes6603);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1388();
            }));
            
            function renderControl1388() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root8810 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8810); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6603;
                nodes6603 = node.contents();
                oldNodes.replaceWith(nodes6603);
              }));
            }
            renderControl1388();
            
            var oldNodes = iternode607;
            iternode607 = iternode607.contents();
            oldNodes.replaceWith(iternode607);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list607.addEventListener('change', function() { listSubs__.unsubscribe(); renderList607(true); }));
        subs__.addSub(tmp5997.addEventListener('change', function() { listSubs__.unsubscribe(); renderList607(true); }));
      });
    };
    renderList607();
    
    var result__ = n.get() < total.get();
    var tmp5999 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp5999.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp5999.set(n.get() < total.get());
    }));
    
    
    var node3448 = $("<span>");
    root8809.append(node3448);
    var condSubs840 = new mobl.CompSubscription();
    subs__.addSub(condSubs840);
    var oldValue840;
    var renderCond840 = function() {
      var value3536 = tmp5999.get();
      if(oldValue840 === value3536) return;
      oldValue840 = value3536;
      var subs__ = condSubs840;
      subs__.unsubscribe();
      node3448.empty();
      if(value3536) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp5998 = mobl.ref(result__);
        
        var nodes6604 = $("<span>");
        node3448.append(nodes6604);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp5998, mobl.ref(null), function(_, callback) {
          var root8811 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes6605 = $("<span>");
          root8811.append(nodes6605);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root8812 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8812); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6605;
            nodes6605 = node.contents();
            oldNodes.replaceWith(nodes6605);
          }));
          callback(root8811); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes6604;
          nodes6604 = node.contents();
          oldNodes.replaceWith(nodes6604);
        }));
        
        
      } else {
        
      }
    };
    renderCond840();
    subs__.addSub(tmp5999.addEventListener('change', function() {
      renderCond840();
    }));
    
    callback(root8809); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root8813 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6606 = $("<span>");
  root8813.append(nodes6606);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8814 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3449 = mobl.loadingSpan();
    root8814.append(node3449);
    var list608;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList608 = function() {
      var subs__ = listSubs__;
      list608 = items.get();
      list608.list(function(results608) {
        node3449.empty();
        for(var i1514 = 0; i1514 < results608.length; i1514++) {
          (function() {
            var iternode608 = $("<span>");
            node3449.append(iternode608);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results608), i1514), "_1");it = mobl.ref(mobl.ref(mobl.ref(results608), i1514), "_2");
            var nodes6607 = $("<span>");
            iternode608.append(nodes6607);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root8815 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6608 = $("<span>");
              root8815.append(nodes6608);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root8816 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8816); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6608;
                nodes6608 = node.contents();
                oldNodes.replaceWith(nodes6608);
              }));
              callback(root8815); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6607;
              nodes6607 = node.contents();
              oldNodes.replaceWith(nodes6607);
            }));
            
            var oldNodes = iternode608;
            iternode608 = iternode608.contents();
            oldNodes.replaceWith(iternode608);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list608.addEventListener('change', function() { listSubs__.unsubscribe(); renderList608(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList608(true); }));
      });
    };
    renderList608();
    
    callback(root8814); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6606;
    nodes6606 = node.contents();
    oldNodes.replaceWith(nodes6606);
  }));
  callback(root8813); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root8817 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll4317) {
    coll4317 = coll4317.reverse();
    function processOne273() {
      var it;
      it = coll4317.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll4317.length > 0) processOne273(); else rest273();
      
    }
    function rest273() {
      var nodes6609 = $("<span>");
      root8817.append(nodes6609);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root8818 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp6000 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp6001 = mobl.ref(result__);
        
        var nodes6610 = $("<span>");
        root8818.append(nodes6610);
        subs__.addSub((ui.backButton)(tmp6001, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6000, function(_, callback) {
          var root8819 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8819); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6610;
          nodes6610 = node.contents();
          oldNodes.replaceWith(nodes6610);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll4316) {
                           coll4316 = coll4316.reverse();
                           function processOne272() {
                             var checked;var it;
                             var tmp6031 = coll4316.pop();
                             checked = tmp6031._1;it = tmp6031._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll4316.length > 0) processOne272(); else rest272();
                               
                             } else {
                               {
                                 
                                 if(coll4316.length > 0) processOne272(); else rest272();
                                 
                               }
                             }
                           }
                           function rest272() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll4316.length > 0) processOne272(); else rest272();
                         });
                         
                       };
        var tmp6002 = mobl.ref(result__);
        
        var nodes6611 = $("<span>");
        root8818.append(nodes6611);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6002, function(_, callback) {
          var root8820 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8820); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6611;
          nodes6611 = node.contents();
          oldNodes.replaceWith(nodes6611);
        }));
        callback(root8818); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6609;
        nodes6609 = node.contents();
        oldNodes.replaceWith(nodes6609);
      }));
      var nodes6612 = $("<span>");
      root8817.append(nodes6612);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root8821 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8821); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6612;
        nodes6612 = node.contents();
        oldNodes.replaceWith(nodes6612);
      }));
      callback(root8817); return subs__;
      
      
    }
    if(coll4317.length > 0) processOne273(); else rest273();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root8822 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes6613 = $("<span>");
  root8822.append(nodes6613);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8823 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8823); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6613;
    nodes6613 = node.contents();
    oldNodes.replaceWith(nodes6613);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp6003 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp6003.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp6003.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp6003.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp6003.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp6003.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes6614 = $("<span>");
  root8822.append(nodes6614);
  subs__.addSub((ui.masterDetail)(tmp6003, masterItem, detailItem, function(_, callback) {
    var root8824 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8824); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6614;
    nodes6614 = node.contents();
    oldNodes.replaceWith(nodes6614);
  }));
  callback(root8822); return subs__;
  
  
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
  var root8825 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes6615 = $("<span>");
  root8825.append(nodes6615);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8826 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3450 = mobl.loadingSpan();
    root8826.append(node3450);
    var list609;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList609 = function() {
      var subs__ = listSubs__;
      list609 = sections.get();
      list609.list(function(results609) {
        node3450.empty();
        for(var i1515 = 0; i1515 < results609.length; i1515++) {
          (function() {
            var iternode609 = $("<span>");
            node3450.append(iternode609);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results609), i1515), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results609), i1515), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp6005 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6005.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6005.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp6005.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp6005.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp6004 = mobl.ref(result__);
            
            var nodes6616 = $("<span>");
            iternode609.append(nodes6616);
            subs__.addSub((mobl.span)(tmp6005, mobl.ref(null), tmp6004, mobl.ref(null), function(_, callback) {
              var root8827 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6617 = $("<span>");
              root8827.append(nodes6617);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8828 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8828); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6617;
                nodes6617 = node.contents();
                oldNodes.replaceWith(nodes6617);
              }));
              callback(root8827); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6616;
              nodes6616 = node.contents();
              oldNodes.replaceWith(nodes6616);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp6006 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6006.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6006.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp6006.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp6006.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes6618 = $("<span>");
            iternode609.append(nodes6618);
            subs__.addSub((mobl.block)(tmp6006, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8829 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes6619 = $("<span>");
              root8829.append(nodes6619);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1389();
              }));
              
              function renderControl1389() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root8830 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8830); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6619;
                  nodes6619 = node.contents();
                  oldNodes.replaceWith(nodes6619);
                }));
              }
              renderControl1389();
              callback(root8829); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes6618;
              nodes6618 = node.contents();
              oldNodes.replaceWith(nodes6618);
            }));
            
            var oldNodes = iternode609;
            iternode609 = iternode609.contents();
            oldNodes.replaceWith(iternode609);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list609.addEventListener('change', function() { listSubs__.unsubscribe(); renderList609(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList609(true); }));
      });
    };
    renderList609();
    
    callback(root8826); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6615;
    nodes6615 = node.contents();
    oldNodes.replaceWith(nodes6615);
  }));
  callback(root8825); return subs__;
  
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
  var root8831 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3451 = $("<table>");
  
  var ref3420 = style;
  if(ref3420.get() !== null) {
    node3451.attr('class', ref3420.get());
    subs__.addSub(ref3420.addEventListener('change', function(_, ref, val) {
      node3451.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3420.rebind());
  
  var nodes6620 = $("<span>");
  node3451.append(nodes6620);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1390();
  }));
  
  function renderControl1390() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8832 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8832); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6620;
      nodes6620 = node.contents();
      oldNodes.replaceWith(nodes6620);
    }));
  }
  renderControl1390();
  root8831.append(node3451);
  callback(root8831); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root8833 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3452 = $("<tr>");
  
  var ref3421 = style;
  if(ref3421.get() !== null) {
    node3452.attr('class', ref3421.get());
    subs__.addSub(ref3421.addEventListener('change', function(_, ref, val) {
      node3452.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3421.rebind());
  
  var nodes6621 = $("<span>");
  node3452.append(nodes6621);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1391();
  }));
  
  function renderControl1391() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8834 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8834); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6621;
      nodes6621 = node.contents();
      oldNodes.replaceWith(nodes6621);
    }));
  }
  renderControl1391();
  root8833.append(node3452);
  callback(root8833); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root8835 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3453 = $("<td>");
  
  var ref3422 = width;
  if(ref3422.get() !== null) {
    node3453.attr('width', ref3422.get());
    subs__.addSub(ref3422.addEventListener('change', function(_, ref, val) {
      node3453.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3422.rebind());
  
  var ref3423 = style;
  if(ref3423.get() !== null) {
    node3453.attr('class', ref3423.get());
    subs__.addSub(ref3423.addEventListener('change', function(_, ref, val) {
      node3453.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3423.rebind());
  
  var nodes6622 = $("<span>");
  node3453.append(nodes6622);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1392();
  }));
  
  function renderControl1392() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8836 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8836); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6622;
      nodes6622 = node.contents();
      oldNodes.replaceWith(nodes6622);
    }));
  }
  renderControl1392();
  root8835.append(node3453);
  callback(root8835); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root8837 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3454 = $("<td>");
  
  var ref3424 = width;
  if(ref3424.get() !== null) {
    node3454.attr('width', ref3424.get());
    subs__.addSub(ref3424.addEventListener('change', function(_, ref, val) {
      node3454.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3424.rebind());
  
  var ref3425 = style;
  if(ref3425.get() !== null) {
    node3454.attr('class', ref3425.get());
    subs__.addSub(ref3425.addEventListener('change', function(_, ref, val) {
      node3454.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3425.rebind());
  
  var nodes6623 = $("<span>");
  node3454.append(nodes6623);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1393();
  }));
  
  function renderControl1393() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8838 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8838); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6623;
      nodes6623 = node.contents();
      oldNodes.replaceWith(nodes6623);
    }));
  }
  renderControl1393();
  root8837.append(node3454);
  callback(root8837); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root8839 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3455 = $("<td>");
  
  var ref3426 = width;
  if(ref3426.get() !== null) {
    node3455.attr('width', ref3426.get());
    subs__.addSub(ref3426.addEventListener('change', function(_, ref, val) {
      node3455.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3426.rebind());
  
  var ref3427 = style;
  if(ref3427.get() !== null) {
    node3455.attr('class', ref3427.get());
    subs__.addSub(ref3427.addEventListener('change', function(_, ref, val) {
      node3455.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3427.rebind());
  
  
  var node3456 = $("<strong>");
  
  var nodes6624 = $("<span>");
  node3456.append(nodes6624);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1394();
  }));
  
  function renderControl1394() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8840 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8840); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6624;
      nodes6624 = node.contents();
      oldNodes.replaceWith(nodes6624);
    }));
  }
  renderControl1394();
  node3455.append(node3456);
  root8839.append(node3455);
  callback(root8839); return subs__;
  
  
  
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
  items.list(function(coll4318) {
    coll4318 = coll4318.reverse();
    function processOne274() {
      var item;
      item = coll4318.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll4318.length > 0) processOne274(); else rest274();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll4318.length > 0) processOne274(); else rest274();
          
        }
      }
    }
    function rest274() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll4318.length > 0) processOne274(); else rest274();
  });
  
};

ui.current = mobl.ref(null);
ui.copyItems = mobl.ref(null);
ui.deleteCurrentQ = function() {
   var __this = this;
  ui.current.set(null);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root8841 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3457 = $("<div>");
  node3457.attr('width', "100%");
  
  
  var node3458 = $("<div>");
  node3458.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
  
  var nodes6626 = $("<span>");
  node3458.append(nodes6626);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8843 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3463 = mobl.loadingSpan();
    root8843.append(node3463);
    var list610;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList610 = function() {
      var subs__ = listSubs__;
      list610 = items.get();
      list610.list(function(results610) {
        node3463.empty();
        for(var i1516 = 0; i1516 < results610.length; i1516++) {
          (function() {
            var iternode610 = $("<span>");
            node3463.append(iternode610);
            var it;
            it = mobl.ref(mobl.ref(results610), i1516);
            var result__ = it.get() == ui.current.get();
            var tmp6010 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp6010.set(it.get() == ui.current.get());
            }));
            subs__.addSub(ui.current.addEventListener('change', function() {
              tmp6010.set(it.get() == ui.current.get());
            }));
            
            
            var node3464 = $("<span>");
            iternode610.append(node3464);
            var condSubs842 = new mobl.CompSubscription();
            subs__.addSub(condSubs842);
            var oldValue842;
            var renderCond842 = function() {
              var value3538 = tmp6010.get();
              if(oldValue842 === value3538) return;
              oldValue842 = value3538;
              var subs__ = condSubs842;
              subs__.unsubscribe();
              node3464.empty();
              if(value3538) {
                var nodes6627 = $("<span>");
                node3464.append(nodes6627);
                subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8844 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp6035 = result__;
                    var tmp6007 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp6033 = result__;
                        var result__ = tmp6033;
                        tmp6007.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp6034 = result__;
                        var result__ = tmp6034;
                        tmp6007.set(result__);
                        
                      });
                    }));
                    
                    var nodes6628 = $("<span>");
                    root8844.append(nodes6628);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1396();
                    }));
                    
                    function renderControl1396() {
                      subs__.addSub((masterItem.get())(it, tmp6007, function(elements, callback) {
                        var root8845 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root8845); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6628;
                        nodes6628 = node.contents();
                        oldNodes.replaceWith(nodes6628);
                      }));
                    }
                    renderControl1396();
                    callback(root8844); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6627;
                  nodes6627 = node.contents();
                  oldNodes.replaceWith(nodes6627);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 ui.current.set(result__);
                                 var result__ = ui.scrollUp();
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp6009 = mobl.ref(result__);
                
                var nodes6629 = $("<span>");
                node3464.append(nodes6629);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6009, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root8846 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp6038 = result__;
                    var tmp6008 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp6036 = result__;
                        var result__ = tmp6036;
                        tmp6008.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp6037 = result__;
                        var result__ = tmp6037;
                        tmp6008.set(result__);
                        
                      });
                    }));
                    
                    var nodes6630 = $("<span>");
                    root8846.append(nodes6630);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1397();
                    }));
                    
                    function renderControl1397() {
                      subs__.addSub((masterItem.get())(it, tmp6008, function(elements, callback) {
                        var root8847 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root8847); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes6630;
                        nodes6630 = node.contents();
                        oldNodes.replaceWith(nodes6630);
                      }));
                    }
                    renderControl1397();
                    callback(root8846); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes6629;
                  nodes6629 = node.contents();
                  oldNodes.replaceWith(nodes6629);
                }));
                
                
              }
            };
            renderCond842();
            subs__.addSub(tmp6010.addEventListener('change', function() {
              renderCond842();
            }));
            
            
            var oldNodes = iternode610;
            iternode610 = iternode610.contents();
            oldNodes.replaceWith(iternode610);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list610.addEventListener('change', function() { listSubs__.unsubscribe(); renderList610(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList610(true); }));
      });
    };
    renderList610();
    
    callback(root8843); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6626;
    nodes6626 = node.contents();
    oldNodes.replaceWith(nodes6626);
  }));
  node3457.append(node3458);
  
  var node3459 = $("<div>");
  node3459.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
  
  
  var node3460 = $("<span>");
  node3459.append(node3460);
  var condSubs841 = new mobl.CompSubscription();
  subs__.addSub(condSubs841);
  var oldValue841;
  var renderCond841 = function() {
    var value3537 = ui.current.get();
    if(oldValue841 === value3537) return;
    oldValue841 = value3537;
    var subs__ = condSubs841;
    subs__.unsubscribe();
    node3460.empty();
    if(value3537) {
      var nodes6625 = $("<span>");
      node3460.append(nodes6625);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl1395();
      }));
      
      function renderControl1395() {
        subs__.addSub((detail.get())(ui.current, function(elements, callback) {
          var root8842 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8842); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6625;
          nodes6625 = node.contents();
          oldNodes.replaceWith(nodes6625);
        }));
      }
      renderControl1395();
      
      
    } else {
      
      var node3461 = $("<div>");
      node3461.attr('style', "padding:20px");
      
      
      var node3462 = $("<h2>");
      
      
      node3462.append("Add more questions.");
      node3461.append(node3462);
      node3460.append(node3461);
      
      
      
    }
  };
  renderCond841();
  subs__.addSub(ui.current.addEventListener('change', function() {
    renderCond841();
  }));
  
  node3457.append(node3459);
  root8841.append(node3457);
  callback(root8841); return subs__;
  
  
  
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
