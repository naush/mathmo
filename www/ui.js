mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node572 = $("<span>");
  root1374.append(node572);
  var condSubs138 = new mobl.CompSubscription();
  subs__.addSub(condSubs138);
  var oldValue138;
  var renderCond138 = function() {
    var value1086 = value.get();
    if(oldValue138 === value1086) return;
    oldValue138 = value1086;
    var subs__ = condSubs138;
    subs__.unsubscribe();
    node572.empty();
    if(value1086) {
      var nodes1015 = $("<span>");
      node572.append(nodes1015);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl234();
      }));
      
      function renderControl234() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1375 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1375); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1015;
          nodes1015 = node.contents();
          oldNodes.replaceWith(nodes1015);
        }));
      }
      renderControl234();
      
      
    } else {
      var nodes1016 = $("<span>");
      node572.append(nodes1016);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1376 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1017 = $("<span>");
        root1376.append(nodes1017);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1377 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1377); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1017;
          nodes1017 = node.contents();
          oldNodes.replaceWith(nodes1017);
        }));
        var nodes1018 = $("<span>");
        root1376.append(nodes1018);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1378 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1378); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1018;
          nodes1018 = node.contents();
          oldNodes.replaceWith(nodes1018);
        }));
        callback(root1376); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1016;
        nodes1016 = node.contents();
        oldNodes.replaceWith(nodes1016);
      }));
      
      
    }
  };
  renderCond138();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond138();
  }));
  
  callback(root1374); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node573 = $("<div>");
  
  var ref572 = mobl.ref(ui.headerStyle);
  if(ref572.get() !== null) {
    node573.attr('class', ref572.get());
    subs__.addSub(ref572.addEventListener('change', function(_, ref, val) {
      node573.attr('class', val);
    }));
    
  }
  subs__.addSub(ref572.rebind());
  
  var val292 = onclick.get();
  if(val292 !== null) {
    subs__.addSub(mobl.domBind(node573, 'tap', val292));
  }
  
  var ref573 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref573.get() !== null) {
    node573.attr('style', ref573.get());
    subs__.addSub(ref573.addEventListener('change', function(_, ref, val) {
      node573.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node573.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref573.rebind());
  
  
  var node576 = $("<div>");
  
  var ref571 = mobl.ref(ui.headerContainerStyle);
  if(ref571.get() !== null) {
    node576.attr('class', ref571.get());
    subs__.addSub(ref571.addEventListener('change', function(_, ref, val) {
      node576.attr('class', val);
    }));
    
  }
  subs__.addSub(ref571.rebind());
  
  
  var node577 = $("<div>");
  
  var ref569 = text;
  node577.text(""+ref569.get());
  var ignore112 = false;
  subs__.addSub(ref569.addEventListener('change', function(_, ref, val) {
    if(ignore112) return;
    node577.text(""+val);
  }));
  subs__.addSub(ref569.rebind());
  
  
  var ref570 = mobl.ref(ui.headerTextStyle);
  if(ref570.get() !== null) {
    node577.attr('class', ref570.get());
    subs__.addSub(ref570.addEventListener('change', function(_, ref, val) {
      node577.attr('class', val);
    }));
    
  }
  subs__.addSub(ref570.rebind());
  
  node576.append(node577);
  node573.append(node576);
  var nodes1019 = $("<span>");
  node573.append(nodes1019);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl235();
  }));
  
  function renderControl235() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1380); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1019;
      nodes1019 = node.contents();
      oldNodes.replaceWith(nodes1019);
    }));
  }
  renderControl235();
  root1379.append(node573);
  
  var node574 = $("<span>");
  root1379.append(node574);
  var condSubs139 = new mobl.CompSubscription();
  subs__.addSub(condSubs139);
  var oldValue139;
  var renderCond139 = function() {
    var value1087 = fixedPosition.get();
    if(oldValue139 === value1087) return;
    oldValue139 = value1087;
    var subs__ = condSubs139;
    subs__.unsubscribe();
    node574.empty();
    if(value1087) {
      
      var node575 = $("<div>");
      node575.attr('id', "hello");
      node575.attr('style', "height: 2.9em;");
      
      node574.append(node575);
      
      
    } else {
      
    }
  };
  renderCond139();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond139();
  }));
  
  callback(root1379); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1381 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref574 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref574.get() !== null) {
    sp.attr('class', ref574.get());
    subs__.addSub(ref574.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref574.rebind());
  
  var val293 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val293 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val293));
  }
  
  var val294 = function(event, callback) {
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
  if(val294 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val294));
  }
  
  var val295 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after90(result__) {
                    var tmp973 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after90);if(result__ !== undefined) after90(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val295 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val295));
  }
  
  var val296 = function(event, callback) {
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
  if(val296 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val296));
  }
  
  var ref575 = text;
  sp.text(""+ref575.get());
  var ignore113 = false;
  subs__.addSub(ref575.addEventListener('change', function(_, ref, val) {
    if(ignore113) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref575.rebind());
  
  
  root1381.append(sp);
  callback(root1381); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1382 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1020 = $("<span>");
  root1382.append(nodes1020);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1383 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1383); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1020;
    nodes1020 = node.contents();
    oldNodes.replaceWith(nodes1020);
  }));
  callback(root1382); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1021 = $("<span>");
  root1384.append(nodes1021);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1385); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1021;
    nodes1021 = node.contents();
    oldNodes.replaceWith(nodes1021);
  }));
  callback(root1384); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1386 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node578 = $("<ul>");
  
  var ref576 = mobl.ref(ui.groupStyle);
  if(ref576.get() !== null) {
    node578.attr('class', ref576.get());
    subs__.addSub(ref576.addEventListener('change', function(_, ref, val) {
      node578.attr('class', val);
    }));
    
  }
  subs__.addSub(ref576.rebind());
  
  var nodes1022 = $("<span>");
  node578.append(nodes1022);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl236();
  }));
  
  function renderControl236() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1387 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1387); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1022;
      nodes1022 = node.contents();
      oldNodes.replaceWith(nodes1022);
    }));
  }
  renderControl236();
  root1386.append(node578);
  callback(root1386); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1388 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node579 = $("<img>");
  
  var ref577 = url;
  if(ref577.get() !== null) {
    node579.attr('src', ref577.get());
    subs__.addSub(ref577.addEventListener('change', function(_, ref, val) {
      node579.attr('src', val);
    }));
    
  }
  subs__.addSub(ref577.rebind());
  
  var ref578 = width;
  if(ref578.get() !== null) {
    node579.attr('width', ref578.get());
    subs__.addSub(ref578.addEventListener('change', function(_, ref, val) {
      node579.attr('width', val);
    }));
    
  }
  subs__.addSub(ref578.rebind());
  
  var ref579 = height;
  if(ref579.get() !== null) {
    node579.attr('height', ref579.get());
    subs__.addSub(ref579.addEventListener('change', function(_, ref, val) {
      node579.attr('height', val);
    }));
    
  }
  subs__.addSub(ref579.rebind());
  
  var ref580 = style;
  if(ref580.get() !== null) {
    node579.attr('class', ref580.get());
    subs__.addSub(ref580.addEventListener('change', function(_, ref, val) {
      node579.attr('class', val);
    }));
    
  }
  subs__.addSub(ref580.rebind());
  
  var val297 = onclick.get();
  if(val297 !== null) {
    subs__.addSub(mobl.domBind(node579, 'tap', val297));
  }
  
  var ref581 = valign;
  if(ref581.get() !== null) {
    node579.attr('valign', ref581.get());
    subs__.addSub(ref581.addEventListener('change', function(_, ref, val) {
      node579.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref581.rebind());
  
  var ref582 = align;
  if(ref582.get() !== null) {
    node579.attr('align', ref582.get());
    subs__.addSub(ref582.addEventListener('change', function(_, ref, val) {
      node579.attr('align', val);
    }));
    
  }
  subs__.addSub(ref582.rebind());
  
  root1388.append(node579);
  callback(root1388); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1389 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref583 = mobl.ref(ui.itemStyle);
  if(ref583.get() !== null) {
    el.attr('class', ref583.get());
    subs__.addSub(ref583.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref583.rebind());
  
  var ref584 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref584.get() !== null) {
    el.attr('class', ref584.get());
    subs__.addSub(ref584.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref584.rebind());
  
  var val298 = onswipe.get();
  if(val298 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val298));
  }
  
  var val299 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp974 = result__;
                                           function after91(result__) {
                                             var tmp975 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after91);if(result__ !== undefined) after91(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp976 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val299 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val299));
  }
  
  var nodes1023 = $("<span>");
  el.append(nodes1023);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl237();
  }));
  
  function renderControl237() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1390); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1023;
      nodes1023 = node.contents();
      oldNodes.replaceWith(nodes1023);
    }));
  }
  renderControl237();
  root1389.append(el);
  callback(root1389); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1391 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node580 = $("<input>");
  node580.attr('type', "checkbox");
  
  var ref586 = b;
  node580.attr('checked', !!ref586.get());
  subs__.addSub(ref586.addEventListener('change', function(_, ref, val) {
    if(ref === ref586) node580.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node580, 'change', function() {
    b.set(!!node580.attr('checked'));
  }));
  
  var val301 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val301 !== null) {
    subs__.addSub(mobl.domBind(node580, 'tap', val301));
  }
  
  var val302 = onchange.get();
  if(val302 !== null) {
    subs__.addSub(mobl.domBind(node580, 'change', val302));
  }
  
  root1391.append(node580);
  
  root1391.append(" ");
  
  var node581 = $("<span>");
  
  var ref585 = label;
  node581.text(""+ref585.get());
  var ignore114 = false;
  subs__.addSub(ref585.addEventListener('change', function(_, ref, val) {
    if(ignore114) return;
    node581.text(""+val);
  }));
  subs__.addSub(ref585.rebind());
  
  
  var val300 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after92(result__) {
                    var tmp977 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after92);if(result__ !== undefined) after92(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val300 !== null) {
    subs__.addSub(mobl.domBind(node581, 'tap', val300));
  }
  
  root1391.append(node581);
  callback(root1391); return subs__;
  
  
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
  var root1392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node582 = $("<span>");
  root1392.append(node582);
  var condSubs140 = new mobl.CompSubscription();
  subs__.addSub(condSubs140);
  var oldValue140;
  var renderCond140 = function() {
    var value1088 = label.get();
    if(oldValue140 === value1088) return;
    oldValue140 = value1088;
    var subs__ = condSubs140;
    subs__.unsubscribe();
    node582.empty();
    if(value1088) {
      var nodes1024 = $("<span>");
      node582.append(nodes1024);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1393); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1024;
        nodes1024 = node.contents();
        oldNodes.replaceWith(nodes1024);
      }));
      
      
    } else {
      
    }
  };
  renderCond140();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond140();
  }));
  
  
  var node583 = $("<span>");
  root1392.append(node583);
  var condSubs141 = new mobl.CompSubscription();
  subs__.addSub(condSubs141);
  var oldValue141;
  var renderCond141 = function() {
    var value1089 = validator.get();
    if(oldValue141 === value1089) return;
    oldValue141 = value1089;
    var subs__ = condSubs141;
    subs__.unsubscribe();
    node583.empty();
    if(value1089) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after96(result__) {
        var tmp978 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp979 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node584 = $("<input>");
        
        var ref587 = inputType;
        if(ref587.get() !== null) {
          node584.attr('type', ref587.get());
          subs__.addSub(ref587.addEventListener('change', function(_, ref, val) {
            node584.attr('type', val);
          }));
          
        }
        subs__.addSub(ref587.rebind());
        
        var ref588 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref588.get() !== null) {
          node584.attr('class', ref588.get());
          subs__.addSub(ref588.addEventListener('change', function(_, ref, val) {
            node584.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node584.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node584.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node584.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref588.rebind());
        
        var ref589 = placeholder;
        if(ref589.get() !== null) {
          node584.attr('placeholder', ref589.get());
          subs__.addSub(ref589.addEventListener('change', function(_, ref, val) {
            node584.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref589.rebind());
        
        var ref590 = temp;
        node584.val(""+ref590.get());
        var ignore115 = false;
        subs__.addSub(ref590.addEventListener('change', function(_, ref, val) {
          if(ignore115) return;
          node584.val(""+val);
        }));
        subs__.addSub(ref590.rebind());
        
        subs__.addSub(mobl.domBind(node584, 'keyup change', function() {
          ignore115 = true;
          temp.set(mobl.stringTomobl__String(node584.val()));
          ignore115 = false;
        }));
        
        
        var val303 = onchange.get();
        if(val303 !== null) {
          subs__.addSub(mobl.domBind(node584, 'change', val303));
        }
        
        var val304 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after93(result__) {
                          var tmp980 = result__;
                          function after94(result__) {
                            var tmp981 = result__;
                            var result__ = tmp981;
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
                            var tmp981 = result__;
                            var result__ = tmp981;
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
        if(val304 !== null) {
          subs__.addSub(mobl.domBind(node584, 'keyup', val304));
        }
        
        var val305 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val305 !== null) {
          subs__.addSub(mobl.domBind(node584, 'blur', val305));
        }
        
        node583.append(node584);
        var nodes1025 = $("<span>");
        node583.append(nodes1025);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1394 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1394); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1025;
          nodes1025 = node.contents();
          oldNodes.replaceWith(nodes1025);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after96);if(result__ !== undefined) after96(result__);
    } else {
      
      var node585 = $("<input>");
      
      var ref591 = inputType;
      if(ref591.get() !== null) {
        node585.attr('type', ref591.get());
        subs__.addSub(ref591.addEventListener('change', function(_, ref, val) {
          node585.attr('type', val);
        }));
        
      }
      subs__.addSub(ref591.rebind());
      
      var ref592 = style;
      if(ref592.get() !== null) {
        node585.attr('class', ref592.get());
        subs__.addSub(ref592.addEventListener('change', function(_, ref, val) {
          node585.attr('class', val);
        }));
        
      }
      subs__.addSub(ref592.rebind());
      
      var ref593 = placeholder;
      if(ref593.get() !== null) {
        node585.attr('placeholder', ref593.get());
        subs__.addSub(ref593.addEventListener('change', function(_, ref, val) {
          node585.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref593.rebind());
      
      var ref594 = s;
      node585.val(""+ref594.get());
      var ignore116 = false;
      subs__.addSub(ref594.addEventListener('change', function(_, ref, val) {
        if(ignore116) return;
        node585.val(""+val);
      }));
      subs__.addSub(ref594.rebind());
      
      subs__.addSub(mobl.domBind(node585, 'keyup change', function() {
        ignore116 = true;
        s.set(mobl.stringTomobl__String(node585.val()));
        ignore116 = false;
      }));
      
      
      var val306 = onchange.get();
      if(val306 !== null) {
        subs__.addSub(mobl.domBind(node585, 'change', val306));
      }
      
      var val307 = onkeyup.get();
      if(val307 !== null) {
        subs__.addSub(mobl.domBind(node585, 'keyup', val307));
      }
      
      var val308 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val308 !== null) {
        subs__.addSub(mobl.domBind(node585, 'blur', val308));
      }
      
      node583.append(node585);
      
      
    }
  };
  renderCond141();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond141();
  }));
  
  callback(root1392); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1395 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1026 = $("<span>");
  root1395.append(nodes1026);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1396 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1396); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1026;
    nodes1026 = node.contents();
    oldNodes.replaceWith(nodes1026);
  }));
  callback(root1395); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1397 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1027 = $("<span>");
  root1397.append(nodes1027);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1398 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1398); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1027;
    nodes1027 = node.contents();
    oldNodes.replaceWith(nodes1027);
  }));
  callback(root1397); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node586 = $("<span>");
  root1399.append(node586);
  var condSubs142 = new mobl.CompSubscription();
  subs__.addSub(condSubs142);
  var oldValue142;
  var renderCond142 = function() {
    var value1090 = label.get();
    if(oldValue142 === value1090) return;
    oldValue142 = value1090;
    var subs__ = condSubs142;
    subs__.unsubscribe();
    node586.empty();
    if(value1090) {
      var nodes1028 = $("<span>");
      node586.append(nodes1028);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1400 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1400); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1028;
        nodes1028 = node.contents();
        oldNodes.replaceWith(nodes1028);
      }));
      
      
    } else {
      
    }
  };
  renderCond142();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond142();
  }));
  
  
  var node587 = $("<input>");
  node587.attr('type', "range");
  
  var ref595 = n;
  node587.val(""+ref595.get());
  var ignore117 = false;
  subs__.addSub(ref595.addEventListener('change', function(_, ref, val) {
    if(ignore117) return;
    node587.val(""+val);
  }));
  subs__.addSub(ref595.rebind());
  
  subs__.addSub(mobl.domBind(node587, 'keyup change', function() {
    ignore117 = true;
    n.set(mobl.stringTomobl__Num(node587.val()));
    ignore117 = false;
  }));
  
  
  var ref596 = min;
  if(ref596.get() !== null) {
    node587.attr('min', ref596.get());
    subs__.addSub(ref596.addEventListener('change', function(_, ref, val) {
      node587.attr('min', val);
    }));
    
  }
  subs__.addSub(ref596.rebind());
  
  var ref597 = max;
  if(ref597.get() !== null) {
    node587.attr('max', ref597.get());
    subs__.addSub(ref597.addEventListener('change', function(_, ref, val) {
      node587.attr('max', val);
    }));
    
  }
  subs__.addSub(ref597.rebind());
  
  var ref598 = step;
  if(ref598.get() !== null) {
    node587.attr('step', ref598.get());
    subs__.addSub(ref598.addEventListener('change', function(_, ref, val) {
      node587.attr('step', val);
    }));
    
  }
  subs__.addSub(ref598.rebind());
  node587.attr('style', "width: 99%;");
  
  var val309 = onchange.get();
  if(val309 !== null) {
    subs__.addSub(mobl.domBind(node587, 'change', val309));
  }
  
  var val310 = onkeyup.get();
  if(val310 !== null) {
    subs__.addSub(mobl.domBind(node587, 'keyup', val310));
  }
  
  var ref599 = placeholder;
  if(ref599.get() !== null) {
    node587.attr('placeholder', ref599.get());
    subs__.addSub(ref599.addEventListener('change', function(_, ref, val) {
      node587.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref599.rebind());
  
  root1399.append(node587);
  callback(root1399); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1401 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after97(result__) {
      var tmp982 = result__;
      var result__ = tmp982;
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
  var nodes1029 = $("<span>");
  root1401.append(nodes1029);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1402 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1402); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1029;
    nodes1029 = node.contents();
    oldNodes.replaceWith(nodes1029);
  }));
  callback(root1401); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1403 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node588 = $("<span>");
  root1403.append(node588);
  var condSubs143 = new mobl.CompSubscription();
  subs__.addSub(condSubs143);
  var oldValue143;
  var renderCond143 = function() {
    var value1091 = label.get();
    if(oldValue143 === value1091) return;
    oldValue143 = value1091;
    var subs__ = condSubs143;
    subs__.unsubscribe();
    node588.empty();
    if(value1091) {
      
      var node589 = $("<span>");
      node589.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref603 = label;
      node589.text(""+ref603.get());
      var ignore119 = false;
      subs__.addSub(ref603.addEventListener('change', function(_, ref, val) {
        if(ignore119) return;
        node589.text(""+val);
      }));
      subs__.addSub(ref603.rebind());
      
      
      node588.append(node589);
      
      var node590 = $("<span>");
      node590.attr('style', "float: left");
      
      
      var node591 = $("<input>");
      node591.attr('type', "password");
      
      var ref600 = style;
      if(ref600.get() !== null) {
        node591.attr('class', ref600.get());
        subs__.addSub(ref600.addEventListener('change', function(_, ref, val) {
          node591.attr('class', val);
        }));
        
      }
      subs__.addSub(ref600.rebind());
      
      var ref601 = placeholder;
      if(ref601.get() !== null) {
        node591.attr('placeholder', ref601.get());
        subs__.addSub(ref601.addEventListener('change', function(_, ref, val) {
          node591.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref601.rebind());
      
      var ref602 = s;
      node591.val(""+ref602.get());
      var ignore118 = false;
      subs__.addSub(ref602.addEventListener('change', function(_, ref, val) {
        if(ignore118) return;
        node591.val(""+val);
      }));
      subs__.addSub(ref602.rebind());
      
      subs__.addSub(mobl.domBind(node591, 'keyup change', function() {
        ignore118 = true;
        s.set(mobl.stringTomobl__String(node591.val()));
        ignore118 = false;
      }));
      
      
      var val311 = onchange.get();
      if(val311 !== null) {
        subs__.addSub(mobl.domBind(node591, 'change', val311));
      }
      
      var val312 = onkeyup.get();
      if(val312 !== null) {
        subs__.addSub(mobl.domBind(node591, 'keyup', val312));
      }
      
      var val313 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val313 !== null) {
        subs__.addSub(mobl.domBind(node591, 'blur', val313));
      }
      
      node590.append(node591);
      node588.append(node590);
      
      
      
      
    } else {
      
      var node592 = $("<input>");
      node592.attr('type', "password");
      
      var ref604 = style;
      if(ref604.get() !== null) {
        node592.attr('class', ref604.get());
        subs__.addSub(ref604.addEventListener('change', function(_, ref, val) {
          node592.attr('class', val);
        }));
        
      }
      subs__.addSub(ref604.rebind());
      
      var ref605 = placeholder;
      if(ref605.get() !== null) {
        node592.attr('placeholder', ref605.get());
        subs__.addSub(ref605.addEventListener('change', function(_, ref, val) {
          node592.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref605.rebind());
      
      var ref606 = s;
      node592.val(""+ref606.get());
      var ignore120 = false;
      subs__.addSub(ref606.addEventListener('change', function(_, ref, val) {
        if(ignore120) return;
        node592.val(""+val);
      }));
      subs__.addSub(ref606.rebind());
      
      subs__.addSub(mobl.domBind(node592, 'keyup change', function() {
        ignore120 = true;
        s.set(mobl.stringTomobl__String(node592.val()));
        ignore120 = false;
      }));
      
      
      var val314 = onchange.get();
      if(val314 !== null) {
        subs__.addSub(mobl.domBind(node592, 'change', val314));
      }
      
      var val315 = onkeyup.get();
      if(val315 !== null) {
        subs__.addSub(mobl.domBind(node592, 'keyup', val315));
      }
      
      var val316 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val316 !== null) {
        subs__.addSub(mobl.domBind(node592, 'blur', val316));
      }
      
      node588.append(node592);
      
      
    }
  };
  renderCond143();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond143();
  }));
  
  callback(root1403); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1404 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref611 = style;
  if(ref611.get() !== null) {
    sel.attr('class', ref611.get());
    subs__.addSub(ref611.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref611.rebind());
  
  var val317 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after98(result__) {
                    var tmp984 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after98);if(result__ !== undefined) after98(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val317 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val317));
  }
  
  
  var node593 = mobl.loadingSpan();
  sel.append(node593);
  var list103;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList103 = function() {
    var subs__ = listSubs__;
    list103 = options.get();
    list103.list(function(results103) {
      node593.empty();
      for(var i235 = 0; i235 < results103.length; i235++) {
        (function() {
          var iternode103 = $("<span>");
          node593.append(iternode103);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results103), i235), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results103), i235), "_2");
          
          var node594 = $("<option>");
          
          var ref607 = optionDescription;
          node594.text(""+ref607.get());
          var ignore121 = false;
          subs__.addSub(ref607.addEventListener('change', function(_, ref, val) {
            if(ignore121) return;
            node594.text(""+val);
          }));
          subs__.addSub(ref607.rebind());
          
          
          var ref608 = optionStyle;
          if(ref608.get() !== null) {
            node594.attr('class', ref608.get());
            subs__.addSub(ref608.addEventListener('change', function(_, ref, val) {
              node594.attr('class', val);
            }));
            
          }
          subs__.addSub(ref608.rebind());
          
          var ref609 = optionValue;
          if(ref609.get() !== null) {
            node594.attr('value', ref609.get());
            subs__.addSub(ref609.addEventListener('change', function(_, ref, val) {
              node594.attr('value', val);
            }));
            
          }
          subs__.addSub(ref609.rebind());
          
          var ref610 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref610.get() !== null) {
            node594.attr('selected', ref610.get());
            subs__.addSub(ref610.addEventListener('change', function(_, ref, val) {
              node594.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node594.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node594.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref610.rebind());
          
          iternode103.append(node594);
          
          var oldNodes = iternode103;
          iternode103 = iternode103.contents();
          oldNodes.replaceWith(iternode103);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list103.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
    });
  };
  renderList103();
  
  root1404.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1404); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1405 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1030 = $("<span>");
    root1405.append(nodes1030);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1406 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node595 = mobl.loadingSpan();
      root1406.append(node595);
      var list104;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList104 = function() {
        var subs__ = listSubs__;
        list104 = tabs.get();
        list104.list(function(results104) {
          node595.empty();
          for(var i236 = 0; i236 < results104.length; i236++) {
            (function() {
              var iternode104 = $("<span>");
              node595.append(iternode104);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results104), i236), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results104), i236), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results104), i236), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp946 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp946.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp946.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp946.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp946.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp945 = mobl.ref(result__);
              
              var nodes1031 = $("<span>");
              iternode104.append(nodes1031);
              subs__.addSub((mobl.span)(tmp946, mobl.ref(null), tmp945, mobl.ref(null), function(_, callback) {
                var root1407 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1032 = $("<span>");
                root1407.append(nodes1032);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1408 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1408); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1032;
                  nodes1032 = node.contents();
                  oldNodes.replaceWith(nodes1032);
                }));
                callback(root1407); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1031;
                nodes1031 = node.contents();
                oldNodes.replaceWith(nodes1031);
              }));
              
              var oldNodes = iternode104;
              iternode104 = iternode104.contents();
              oldNodes.replaceWith(iternode104);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list104.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
        });
      };
      renderList104();
      
      callback(root1406); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1030;
      nodes1030 = node.contents();
      oldNodes.replaceWith(nodes1030);
    }));
    
    var node596 = mobl.loadingSpan();
    root1405.append(node596);
    var list105;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList105 = function() {
      var subs__ = listSubs__;
      list105 = tabs.get();
      list105.list(function(results105) {
        node596.empty();
        for(var i237 = 0; i237 < results105.length; i237++) {
          (function() {
            var iternode105 = $("<span>");
            node596.append(iternode105);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results105), i237), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results105), i237), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results105), i237), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp947 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp947.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp947.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp947.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp947.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1033 = $("<span>");
            iternode105.append(nodes1033);
            subs__.addSub((mobl.block)(tmp947, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1409 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1034 = $("<span>");
              root1409.append(nodes1034);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1410 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1035 = $("<span>");
                root1410.append(nodes1035);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl238();
                }));
                
                function renderControl238() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1411 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1411); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1035;
                    nodes1035 = node.contents();
                    oldNodes.replaceWith(nodes1035);
                  }));
                }
                renderControl238();
                callback(root1410); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1034;
                nodes1034 = node.contents();
                oldNodes.replaceWith(nodes1034);
              }));
              callback(root1409); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1033;
              nodes1033 = node.contents();
              oldNodes.replaceWith(nodes1033);
            }));
            
            var oldNodes = iternode105;
            iternode105 = iternode105.contents();
            oldNodes.replaceWith(iternode105);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list105.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
      });
    };
    renderList105();
    
    callback(root1405); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1030 = $("<span>");
      root1405.append(nodes1030);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1406 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node595 = mobl.loadingSpan();
        root1406.append(node595);
        var list104;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList104 = function() {
          var subs__ = listSubs__;
          list104 = tabs.get();
          list104.list(function(results104) {
            node595.empty();
            for(var i236 = 0; i236 < results104.length; i236++) {
              (function() {
                var iternode104 = $("<span>");
                node595.append(iternode104);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results104), i236), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results104), i236), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results104), i236), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp946 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp946.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp946.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp946.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp946.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp945 = mobl.ref(result__);
                
                var nodes1031 = $("<span>");
                iternode104.append(nodes1031);
                subs__.addSub((mobl.span)(tmp946, mobl.ref(null), tmp945, mobl.ref(null), function(_, callback) {
                  var root1407 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1032 = $("<span>");
                  root1407.append(nodes1032);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1408 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1408); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1032;
                    nodes1032 = node.contents();
                    oldNodes.replaceWith(nodes1032);
                  }));
                  callback(root1407); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1031;
                  nodes1031 = node.contents();
                  oldNodes.replaceWith(nodes1031);
                }));
                
                var oldNodes = iternode104;
                iternode104 = iternode104.contents();
                oldNodes.replaceWith(iternode104);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list104.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
          });
        };
        renderList104();
        
        callback(root1406); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1030;
        nodes1030 = node.contents();
        oldNodes.replaceWith(nodes1030);
      }));
      
      var node596 = mobl.loadingSpan();
      root1405.append(node596);
      var list105;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList105 = function() {
        var subs__ = listSubs__;
        list105 = tabs.get();
        list105.list(function(results105) {
          node596.empty();
          for(var i237 = 0; i237 < results105.length; i237++) {
            (function() {
              var iternode105 = $("<span>");
              node596.append(iternode105);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results105), i237), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results105), i237), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results105), i237), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp947 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp947.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp947.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp947.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp947.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1033 = $("<span>");
              iternode105.append(nodes1033);
              subs__.addSub((mobl.block)(tmp947, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1409 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1034 = $("<span>");
                root1409.append(nodes1034);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1410 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1035 = $("<span>");
                  root1410.append(nodes1035);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl238();
                  }));
                  
                  function renderControl238() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1411 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1411); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1035;
                      nodes1035 = node.contents();
                      oldNodes.replaceWith(nodes1035);
                    }));
                  }
                  renderControl238();
                  callback(root1410); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1034;
                  nodes1034 = node.contents();
                  oldNodes.replaceWith(nodes1034);
                }));
                callback(root1409); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1033;
                nodes1033 = node.contents();
                oldNodes.replaceWith(nodes1033);
              }));
              
              var oldNodes = iternode105;
              iternode105 = iternode105.contents();
              oldNodes.replaceWith(iternode105);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list105.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
        });
      };
      renderList105();
      
      callback(root1405); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1412 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node597 = $("<div>");
  
  var ref615 = mobl.ref(ui.searchboxStyle);
  if(ref615.get() !== null) {
    node597.attr('class', ref615.get());
    subs__.addSub(ref615.addEventListener('change', function(_, ref, val) {
      node597.attr('class', val);
    }));
    
  }
  subs__.addSub(ref615.rebind());
  
  
  var node598 = $("<input>");
  node598.attr('type', "search");
  
  var ref612 = mobl.ref(ui.searchBoxInputStyle);
  if(ref612.get() !== null) {
    node598.attr('class', ref612.get());
    subs__.addSub(ref612.addEventListener('change', function(_, ref, val) {
      node598.attr('class', val);
    }));
    
  }
  subs__.addSub(ref612.rebind());
  
  var ref613 = placeholder;
  if(ref613.get() !== null) {
    node598.attr('placeholder', ref613.get());
    subs__.addSub(ref613.addEventListener('change', function(_, ref, val) {
      node598.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref613.rebind());
  
  var ref614 = s;
  node598.val(""+ref614.get());
  var ignore122 = false;
  subs__.addSub(ref614.addEventListener('change', function(_, ref, val) {
    if(ignore122) return;
    node598.val(""+val);
  }));
  subs__.addSub(ref614.rebind());
  
  subs__.addSub(mobl.domBind(node598, 'keyup change', function() {
    ignore122 = true;
    s.set(mobl.stringTomobl__String(node598.val()));
    ignore122 = false;
  }));
  
  
  var val318 = onsearch.get();
  if(val318 !== null) {
    subs__.addSub(mobl.domBind(node598, 'change', val318));
  }
  
  var val319 = onkeyup.get();
  if(val319 !== null) {
    subs__.addSub(mobl.domBind(node598, 'keyup', val319));
  }
  node598.attr('autocorrect', false);
  node598.attr('autocapitalize', false);
  node598.attr('autocomplete', false);
  
  node597.append(node598);
  root1412.append(node597);
  callback(root1412); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1413 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref616 = mobl.ref(ui.contextMenuStyle);
  if(ref616.get() !== null) {
    menu.attr('class', ref616.get());
    subs__.addSub(ref616.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref616.rebind());
  
  var nodes1036 = $("<span>");
  menu.append(nodes1036);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl239();
  }));
  
  function renderControl239() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1414 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1414); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1036;
      nodes1036 = node.contents();
      oldNodes.replaceWith(nodes1036);
    }));
  }
  renderControl239();
  root1413.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val320 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp987 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val320 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val320));
  }
  
  root1413.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1413); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1415 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp972 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp972.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node599 = $("<span>");
  root1415.append(node599);
  var condSubs144 = new mobl.CompSubscription();
  subs__.addSub(condSubs144);
  var oldValue144;
  var renderCond144 = function() {
    var value1092 = tmp972.get();
    if(oldValue144 === value1092) return;
    oldValue144 = value1092;
    var subs__ = condSubs144;
    subs__.unsubscribe();
    node599.empty();
    if(value1092) {
      items.get().one(function(result__) {
        var tmp988 = result__;
        var current = mobl.ref(result__);
        
        var node600 = $("<div>");
        node600.attr('width', "100%");
        
        
        var node601 = $("<div>");
        node601.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1039 = $("<span>");
        node601.append(nodes1039);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1418 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node604 = mobl.loadingSpan();
          root1418.append(node604);
          var list106;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList106 = function() {
            var subs__ = listSubs__;
            list106 = items.get();
            list106.list(function(results106) {
              node604.empty();
              for(var i238 = 0; i238 < results106.length; i238++) {
                (function() {
                  var iternode106 = $("<span>");
                  node604.append(iternode106);
                  var it;
                  it = mobl.ref(mobl.ref(results106), i238);
                  var result__ = it.get() == current.get();
                  var tmp953 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp953.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp953.set(it.get() == current.get());
                  }));
                  
                  
                  var node605 = $("<span>");
                  iternode106.append(node605);
                  var condSubs146 = new mobl.CompSubscription();
                  subs__.addSub(condSubs146);
                  var oldValue146;
                  var renderCond146 = function() {
                    var value1094 = tmp953.get();
                    if(oldValue146 === value1094) return;
                    oldValue146 = value1094;
                    var subs__ = condSubs146;
                    subs__.unsubscribe();
                    node605.empty();
                    if(value1094) {
                      var nodes1040 = $("<span>");
                      node605.append(nodes1040);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1419 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1041 = $("<span>");
                        root1419.append(nodes1041);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl241();
                        }));
                        
                        function renderControl241() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1420 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1420); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1041;
                            nodes1041 = node.contents();
                            oldNodes.replaceWith(nodes1041);
                          }));
                        }
                        renderControl241();
                        callback(root1419); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1040;
                        nodes1040 = node.contents();
                        oldNodes.replaceWith(nodes1040);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp952 = mobl.ref(result__);
                      
                      var nodes1042 = $("<span>");
                      node605.append(nodes1042);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp952, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1421 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1043 = $("<span>");
                        root1421.append(nodes1043);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl242();
                        }));
                        
                        function renderControl242() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1422 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1422); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1043;
                            nodes1043 = node.contents();
                            oldNodes.replaceWith(nodes1043);
                          }));
                        }
                        renderControl242();
                        callback(root1421); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1042;
                        nodes1042 = node.contents();
                        oldNodes.replaceWith(nodes1042);
                      }));
                      
                      
                    }
                  };
                  renderCond146();
                  subs__.addSub(tmp953.addEventListener('change', function() {
                    renderCond146();
                  }));
                  
                  
                  var oldNodes = iternode106;
                  iternode106 = iternode106.contents();
                  oldNodes.replaceWith(iternode106);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list106.addEventListener('change', function() { listSubs__.unsubscribe(); renderList106(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList106(true); }));
            });
          };
          renderList106();
          
          callback(root1418); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1039;
          nodes1039 = node.contents();
          oldNodes.replaceWith(nodes1039);
        }));
        node600.append(node601);
        
        var node602 = $("<div>");
        node602.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node603 = $("<span>");
        node602.append(node603);
        var condSubs145 = new mobl.CompSubscription();
        subs__.addSub(condSubs145);
        var oldValue145;
        var renderCond145 = function() {
          var value1093 = current.get();
          if(oldValue145 === value1093) return;
          oldValue145 = value1093;
          var subs__ = condSubs145;
          subs__.unsubscribe();
          node603.empty();
          if(value1093) {
            var nodes1037 = $("<span>");
            node603.append(nodes1037);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl240();
            }));
            
            function renderControl240() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1416 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1416); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1037;
                nodes1037 = node.contents();
                oldNodes.replaceWith(nodes1037);
              }));
            }
            renderControl240();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp954 = mobl.ref(result__);
            
            var nodes1038 = $("<span>");
            node603.append(nodes1038);
            subs__.addSub((mobl.label)(tmp954, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1417 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1417); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1038;
              nodes1038 = node.contents();
              oldNodes.replaceWith(nodes1038);
            }));
            
            
          }
        };
        renderCond145();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond145();
        }));
        
        node600.append(node602);
        node599.append(node600);
        
        
        
        
        
        
      });
    } else {
      var nodes1044 = $("<span>");
      node599.append(nodes1044);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1423 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node606 = mobl.loadingSpan();
        root1423.append(node606);
        var list107;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList107 = function() {
          var subs__ = listSubs__;
          list107 = items.get();
          list107.list(function(results107) {
            node606.empty();
            for(var i239 = 0; i239 < results107.length; i239++) {
              (function() {
                var iternode107 = $("<span>");
                node606.append(iternode107);
                var it;
                it = mobl.ref(mobl.ref(results107), i239);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp989 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp948 = mobl.ref(result__);
                
                var nodes1045 = $("<span>");
                iternode107.append(nodes1045);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp948, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1424 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1046 = $("<span>");
                  root1424.append(nodes1046);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl243();
                  }));
                  
                  function renderControl243() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1425 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1425); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1046;
                      nodes1046 = node.contents();
                      oldNodes.replaceWith(nodes1046);
                    }));
                  }
                  renderControl243();
                  callback(root1424); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1045;
                  nodes1045 = node.contents();
                  oldNodes.replaceWith(nodes1045);
                }));
                
                var oldNodes = iternode107;
                iternode107 = iternode107.contents();
                oldNodes.replaceWith(iternode107);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list107.addEventListener('change', function() { listSubs__.unsubscribe(); renderList107(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList107(true); }));
          });
        };
        renderList107();
        
        callback(root1423); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1044;
        nodes1044 = node.contents();
        oldNodes.replaceWith(nodes1044);
      }));
      
      
    }
  };
  renderCond144();
  subs__.addSub(tmp972.addEventListener('change', function() {
    renderCond144();
  }));
  
  callback(root1415); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1426 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp951 = mobl.ref(result__);
  
  var nodes1047 = $("<span>");
  root1426.append(nodes1047);
  subs__.addSub((ui.header)(tmp951, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1427 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp950 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp949 = mobl.ref(result__);
    
    var nodes1048 = $("<span>");
    root1427.append(nodes1048);
    subs__.addSub((ui.backButton)(tmp949, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp950, function(_, callback) {
      var root1428 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1428); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1048;
      nodes1048 = node.contents();
      oldNodes.replaceWith(nodes1048);
    }));
    callback(root1427); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1047;
    nodes1047 = node.contents();
    oldNodes.replaceWith(nodes1047);
  }));
  var nodes1049 = $("<span>");
  root1426.append(nodes1049);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl244();
  }));
  
  function renderControl244() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1429 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1429); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1049;
      nodes1049 = node.contents();
      oldNodes.replaceWith(nodes1049);
    }));
  }
  renderControl244();
  callback(root1426); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1430 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1050 = $("<span>");
  root1430.append(nodes1050);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1431 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node607 = mobl.loadingSpan();
    root1431.append(node607);
    var list108;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList108 = function() {
      var subs__ = listSubs__;
      list108 = coll.get();
      list108.list(function(results108) {
        node607.empty();
        for(var i240 = 0; i240 < results108.length; i240++) {
          (function() {
            var iternode108 = $("<span>");
            node607.append(iternode108);
            var it;
            it = mobl.ref(mobl.ref(results108), i240);
            var result__ = it.get() == selected.get();
            var tmp956 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp956.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp956.set(it.get() == selected.get());
            }));
            
            
            var node608 = $("<span>");
            iternode108.append(node608);
            var condSubs147 = new mobl.CompSubscription();
            subs__.addSub(condSubs147);
            var oldValue147;
            var renderCond147 = function() {
              var value1095 = tmp956.get();
              if(oldValue147 === value1095) return;
              oldValue147 = value1095;
              var subs__ = condSubs147;
              subs__.unsubscribe();
              node608.empty();
              if(value1095) {
                var nodes1051 = $("<span>");
                node608.append(nodes1051);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1432 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1052 = $("<span>");
                  root1432.append(nodes1052);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl245();
                  }));
                  
                  function renderControl245() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1433 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1433); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1052;
                      nodes1052 = node.contents();
                      oldNodes.replaceWith(nodes1052);
                    }));
                  }
                  renderControl245();
                  callback(root1432); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1051;
                  nodes1051 = node.contents();
                  oldNodes.replaceWith(nodes1051);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp955 = mobl.ref(result__);
                
                var nodes1053 = $("<span>");
                node608.append(nodes1053);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp955, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1434 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1054 = $("<span>");
                  root1434.append(nodes1054);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl246();
                  }));
                  
                  function renderControl246() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1435 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1435); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1054;
                      nodes1054 = node.contents();
                      oldNodes.replaceWith(nodes1054);
                    }));
                  }
                  renderControl246();
                  callback(root1434); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1053;
                  nodes1053 = node.contents();
                  oldNodes.replaceWith(nodes1053);
                }));
                
                
              }
            };
            renderCond147();
            subs__.addSub(tmp956.addEventListener('change', function() {
              renderCond147();
            }));
            
            
            var oldNodes = iternode108;
            iternode108 = iternode108.contents();
            oldNodes.replaceWith(iternode108);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list108.addEventListener('change', function() { listSubs__.unsubscribe(); renderList108(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList108(true); }));
      });
    };
    renderList108();
    
    callback(root1431); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1050;
    nodes1050 = node.contents();
    oldNodes.replaceWith(nodes1050);
  }));
  callback(root1430); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp990 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp957 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp957.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp957.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp957.set(coll.get().limit(n.get()));
    }));
    
    
    var node609 = mobl.loadingSpan();
    root1436.append(node609);
    var list109;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList109 = function() {
      var subs__ = listSubs__;
      list109 = tmp957.get();
      list109.list(function(results109) {
        node609.empty();
        for(var i241 = 0; i241 < results109.length; i241++) {
          (function() {
            var iternode109 = $("<span>");
            node609.append(iternode109);
            var it;
            it = mobl.ref(mobl.ref(results109), i241);
            var nodes1055 = $("<span>");
            iternode109.append(nodes1055);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl247();
            }));
            
            function renderControl247() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1437 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1437); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1055;
                nodes1055 = node.contents();
                oldNodes.replaceWith(nodes1055);
              }));
            }
            renderControl247();
            
            var oldNodes = iternode109;
            iternode109 = iternode109.contents();
            oldNodes.replaceWith(iternode109);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list109.addEventListener('change', function() { listSubs__.unsubscribe(); renderList109(true); }));
        subs__.addSub(tmp957.addEventListener('change', function() { listSubs__.unsubscribe(); renderList109(true); }));
      });
    };
    renderList109();
    
    var result__ = n.get() < total.get();
    var tmp959 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp959.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp959.set(n.get() < total.get());
    }));
    
    
    var node610 = $("<span>");
    root1436.append(node610);
    var condSubs148 = new mobl.CompSubscription();
    subs__.addSub(condSubs148);
    var oldValue148;
    var renderCond148 = function() {
      var value1096 = tmp959.get();
      if(oldValue148 === value1096) return;
      oldValue148 = value1096;
      var subs__ = condSubs148;
      subs__.unsubscribe();
      node610.empty();
      if(value1096) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp958 = mobl.ref(result__);
        
        var nodes1056 = $("<span>");
        node610.append(nodes1056);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp958, mobl.ref(null), function(_, callback) {
          var root1438 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1057 = $("<span>");
          root1438.append(nodes1057);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1439 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1439); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1057;
            nodes1057 = node.contents();
            oldNodes.replaceWith(nodes1057);
          }));
          callback(root1438); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1056;
          nodes1056 = node.contents();
          oldNodes.replaceWith(nodes1056);
        }));
        
        
      } else {
        
      }
    };
    renderCond148();
    subs__.addSub(tmp959.addEventListener('change', function() {
      renderCond148();
    }));
    
    callback(root1436); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1440 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1058 = $("<span>");
  root1440.append(nodes1058);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1441 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node611 = mobl.loadingSpan();
    root1441.append(node611);
    var list110;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList110 = function() {
      var subs__ = listSubs__;
      list110 = items.get();
      list110.list(function(results110) {
        node611.empty();
        for(var i242 = 0; i242 < results110.length; i242++) {
          (function() {
            var iternode110 = $("<span>");
            node611.append(iternode110);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results110), i242), "_1");it = mobl.ref(mobl.ref(mobl.ref(results110), i242), "_2");
            var nodes1059 = $("<span>");
            iternode110.append(nodes1059);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1442 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1060 = $("<span>");
              root1442.append(nodes1060);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1443 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1443); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1060;
                nodes1060 = node.contents();
                oldNodes.replaceWith(nodes1060);
              }));
              callback(root1442); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1059;
              nodes1059 = node.contents();
              oldNodes.replaceWith(nodes1059);
            }));
            
            var oldNodes = iternode110;
            iternode110 = iternode110.contents();
            oldNodes.replaceWith(iternode110);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list110.addEventListener('change', function() { listSubs__.unsubscribe(); renderList110(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList110(true); }));
      });
    };
    renderList110();
    
    callback(root1441); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1058;
    nodes1058 = node.contents();
    oldNodes.replaceWith(nodes1058);
  }));
  callback(root1440); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1444 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1473) {
    coll1473 = coll1473.reverse();
    function processOne51() {
      var it;
      it = coll1473.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1473.length > 0) processOne51(); else rest51();
      
    }
    function rest51() {
      var nodes1061 = $("<span>");
      root1444.append(nodes1061);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1445 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp960 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp961 = mobl.ref(result__);
        
        var nodes1062 = $("<span>");
        root1445.append(nodes1062);
        subs__.addSub((ui.backButton)(tmp961, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp960, function(_, callback) {
          var root1446 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1446); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1062;
          nodes1062 = node.contents();
          oldNodes.replaceWith(nodes1062);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1472) {
                           coll1472 = coll1472.reverse();
                           function processOne50() {
                             var checked;var it;
                             var tmp992 = coll1472.pop();
                             checked = tmp992._1;it = tmp992._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1472.length > 0) processOne50(); else rest50();
                               
                             } else {
                               {
                                 
                                 if(coll1472.length > 0) processOne50(); else rest50();
                                 
                               }
                             }
                           }
                           function rest50() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1472.length > 0) processOne50(); else rest50();
                         });
                         
                       };
        var tmp962 = mobl.ref(result__);
        
        var nodes1063 = $("<span>");
        root1445.append(nodes1063);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp962, function(_, callback) {
          var root1447 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1447); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1063;
          nodes1063 = node.contents();
          oldNodes.replaceWith(nodes1063);
        }));
        callback(root1445); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1061;
        nodes1061 = node.contents();
        oldNodes.replaceWith(nodes1061);
      }));
      var nodes1064 = $("<span>");
      root1444.append(nodes1064);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1448 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1448); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1064;
        nodes1064 = node.contents();
        oldNodes.replaceWith(nodes1064);
      }));
      callback(root1444); return subs__;
      
      
    }
    if(coll1473.length > 0) processOne51(); else rest51();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1449 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1065 = $("<span>");
  root1449.append(nodes1065);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1450 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1450); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1065;
    nodes1065 = node.contents();
    oldNodes.replaceWith(nodes1065);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp963 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp963.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp963.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp963.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp963.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp963.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1066 = $("<span>");
  root1449.append(nodes1066);
  subs__.addSub((ui.masterDetail)(tmp963, masterItem, detailItem, function(_, callback) {
    var root1451 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1451); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1066;
    nodes1066 = node.contents();
    oldNodes.replaceWith(nodes1066);
  }));
  callback(root1449); return subs__;
  
  
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
  var root1452 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1067 = $("<span>");
  root1452.append(nodes1067);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1453 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node612 = mobl.loadingSpan();
    root1453.append(node612);
    var list111;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList111 = function() {
      var subs__ = listSubs__;
      list111 = sections.get();
      list111.list(function(results111) {
        node612.empty();
        for(var i243 = 0; i243 < results111.length; i243++) {
          (function() {
            var iternode111 = $("<span>");
            node612.append(iternode111);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results111), i243), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results111), i243), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp965 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp965.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp965.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp965.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp965.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp964 = mobl.ref(result__);
            
            var nodes1068 = $("<span>");
            iternode111.append(nodes1068);
            subs__.addSub((mobl.span)(tmp965, mobl.ref(null), tmp964, mobl.ref(null), function(_, callback) {
              var root1454 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1069 = $("<span>");
              root1454.append(nodes1069);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1455 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1455); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1069;
                nodes1069 = node.contents();
                oldNodes.replaceWith(nodes1069);
              }));
              callback(root1454); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1068;
              nodes1068 = node.contents();
              oldNodes.replaceWith(nodes1068);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp966 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp966.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp966.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp966.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp966.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1070 = $("<span>");
            iternode111.append(nodes1070);
            subs__.addSub((mobl.block)(tmp966, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1456 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1071 = $("<span>");
              root1456.append(nodes1071);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl248();
              }));
              
              function renderControl248() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1457 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1457); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1071;
                  nodes1071 = node.contents();
                  oldNodes.replaceWith(nodes1071);
                }));
              }
              renderControl248();
              callback(root1456); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1070;
              nodes1070 = node.contents();
              oldNodes.replaceWith(nodes1070);
            }));
            
            var oldNodes = iternode111;
            iternode111 = iternode111.contents();
            oldNodes.replaceWith(iternode111);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list111.addEventListener('change', function() { listSubs__.unsubscribe(); renderList111(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList111(true); }));
      });
    };
    renderList111();
    
    callback(root1453); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1067;
    nodes1067 = node.contents();
    oldNodes.replaceWith(nodes1067);
  }));
  callback(root1452); return subs__;
  
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
  var root1458 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node613 = $("<table>");
  
  var ref617 = style;
  if(ref617.get() !== null) {
    node613.attr('class', ref617.get());
    subs__.addSub(ref617.addEventListener('change', function(_, ref, val) {
      node613.attr('class', val);
    }));
    
  }
  subs__.addSub(ref617.rebind());
  
  var nodes1072 = $("<span>");
  node613.append(nodes1072);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl249();
  }));
  
  function renderControl249() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1072;
      nodes1072 = node.contents();
      oldNodes.replaceWith(nodes1072);
    }));
  }
  renderControl249();
  root1458.append(node613);
  callback(root1458); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1460 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node614 = $("<tr>");
  
  var ref618 = style;
  if(ref618.get() !== null) {
    node614.attr('class', ref618.get());
    subs__.addSub(ref618.addEventListener('change', function(_, ref, val) {
      node614.attr('class', val);
    }));
    
  }
  subs__.addSub(ref618.rebind());
  
  var nodes1073 = $("<span>");
  node614.append(nodes1073);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl250();
  }));
  
  function renderControl250() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1461 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1461); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1073;
      nodes1073 = node.contents();
      oldNodes.replaceWith(nodes1073);
    }));
  }
  renderControl250();
  root1460.append(node614);
  callback(root1460); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1462 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node615 = $("<td>");
  
  var ref619 = width;
  if(ref619.get() !== null) {
    node615.attr('width', ref619.get());
    subs__.addSub(ref619.addEventListener('change', function(_, ref, val) {
      node615.attr('width', val);
    }));
    
  }
  subs__.addSub(ref619.rebind());
  
  var ref620 = style;
  if(ref620.get() !== null) {
    node615.attr('class', ref620.get());
    subs__.addSub(ref620.addEventListener('change', function(_, ref, val) {
      node615.attr('class', val);
    }));
    
  }
  subs__.addSub(ref620.rebind());
  
  var nodes1074 = $("<span>");
  node615.append(nodes1074);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl251();
  }));
  
  function renderControl251() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1463 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1463); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1074;
      nodes1074 = node.contents();
      oldNodes.replaceWith(nodes1074);
    }));
  }
  renderControl251();
  root1462.append(node615);
  callback(root1462); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1464 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node616 = $("<td>");
  
  var ref621 = width;
  if(ref621.get() !== null) {
    node616.attr('width', ref621.get());
    subs__.addSub(ref621.addEventListener('change', function(_, ref, val) {
      node616.attr('width', val);
    }));
    
  }
  subs__.addSub(ref621.rebind());
  
  var ref622 = style;
  if(ref622.get() !== null) {
    node616.attr('class', ref622.get());
    subs__.addSub(ref622.addEventListener('change', function(_, ref, val) {
      node616.attr('class', val);
    }));
    
  }
  subs__.addSub(ref622.rebind());
  
  var nodes1075 = $("<span>");
  node616.append(nodes1075);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl252();
  }));
  
  function renderControl252() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1465 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1465); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1075;
      nodes1075 = node.contents();
      oldNodes.replaceWith(nodes1075);
    }));
  }
  renderControl252();
  root1464.append(node616);
  callback(root1464); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1466 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node617 = $("<td>");
  
  var ref623 = width;
  if(ref623.get() !== null) {
    node617.attr('width', ref623.get());
    subs__.addSub(ref623.addEventListener('change', function(_, ref, val) {
      node617.attr('width', val);
    }));
    
  }
  subs__.addSub(ref623.rebind());
  
  var ref624 = style;
  if(ref624.get() !== null) {
    node617.attr('class', ref624.get());
    subs__.addSub(ref624.addEventListener('change', function(_, ref, val) {
      node617.attr('class', val);
    }));
    
  }
  subs__.addSub(ref624.rebind());
  
  
  var node618 = $("<strong>");
  
  var nodes1076 = $("<span>");
  node618.append(nodes1076);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl253();
  }));
  
  function renderControl253() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1467 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1467); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1076;
      nodes1076 = node.contents();
      oldNodes.replaceWith(nodes1076);
    }));
  }
  renderControl253();
  node617.append(node618);
  root1466.append(node617);
  callback(root1466); return subs__;
  
  
  
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
  items.list(function(coll1474) {
    coll1474 = coll1474.reverse();
    function processOne52() {
      var item;
      item = coll1474.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1474.length > 0) processOne52(); else rest52();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1474.length > 0) processOne52(); else rest52();
          
        }
      }
    }
    function rest52() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1474.length > 0) processOne52(); else rest52();
  });
  
};

ui.hasItem = function(it, items, callback) {
  var __this = this;
  var result__ = items;
  items.list(function(coll1475) {
    coll1475 = coll1475.reverse();
    function processOne53() {
      var item;
      item = coll1475.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = true;
        if(callback && callback.apply) callback(result__);
        return;
        
        if(coll1475.length > 0) processOne53(); else rest53();
        
      } else {
        {
          
          if(coll1475.length > 0) processOne53(); else rest53();
          
        }
      }
    }
    function rest53() {
      var result__ = false;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1475.length > 0) processOne53(); else rest53();
  });
  
};

ui.referenceItem = function(it, items, callback) {
  var __this = this;
  var result__ = items;
  items.list(function(coll1476) {
    coll1476 = coll1476.reverse();
    function processOne54() {
      var item;
      item = coll1476.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = item;
        if(callback && callback.apply) callback(result__);
        return;
        
        if(coll1476.length > 0) processOne54(); else rest54();
        
      } else {
        {
          
          if(coll1476.length > 0) processOne54(); else rest54();
          
        }
      }
    }
    function rest54() {
      var result__ = null;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1476.length > 0) processOne54(); else rest54();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root1468 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp994 = result__;
    var current = mobl.ref(result__);
    
    var node619 = $("<div>");
    node619.attr('width', "100%");
    
    
    var node620 = $("<div>");
    node620.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes1078 = $("<span>");
    node620.append(nodes1078);
    subs__.addSub((ui.group)(function(_, callback) {
      var root1470 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node625 = mobl.loadingSpan();
      root1470.append(node625);
      var list112;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList112 = function() {
        var subs__ = listSubs__;
        list112 = items.get();
        list112.list(function(results112) {
          node625.empty();
          for(var i244 = 0; i244 < results112.length; i244++) {
            (function() {
              var iternode112 = $("<span>");
              node625.append(iternode112);
              var it;
              it = mobl.ref(mobl.ref(results112), i244);
              var result__ = it.get() == current.get();
              var tmp970 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp970.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp970.set(it.get() == current.get());
              }));
              
              
              var node626 = $("<span>");
              iternode112.append(node626);
              var condSubs150 = new mobl.CompSubscription();
              subs__.addSub(condSubs150);
              var oldValue150;
              var renderCond150 = function() {
                var value1098 = tmp970.get();
                if(oldValue150 === value1098) return;
                oldValue150 = value1098;
                var subs__ = condSubs150;
                subs__.unsubscribe();
                node626.empty();
                if(value1098) {
                  var nodes1079 = $("<span>");
                  node626.append(nodes1079);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root1471 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp1000 = result__;
                      var tmp967 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp998 = result__;
                          var result__ = tmp998;
                          tmp967.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp999 = result__;
                          var result__ = tmp999;
                          tmp967.set(result__);
                          
                        });
                      }));
                      
                      var nodes1080 = $("<span>");
                      root1471.append(nodes1080);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl255();
                      }));
                      
                      function renderControl255() {
                        subs__.addSub((masterItem.get())(it, tmp967, function(elements, callback) {
                          var root1472 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1472); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes1080;
                          nodes1080 = node.contents();
                          oldNodes.replaceWith(nodes1080);
                        }));
                      }
                      renderControl255();
                      callback(root1471); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1079;
                    nodes1079 = node.contents();
                    oldNodes.replaceWith(nodes1079);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp969 = mobl.ref(result__);
                  
                  var nodes1081 = $("<span>");
                  node626.append(nodes1081);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp969, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root1473 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp1003 = result__;
                      var tmp968 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1001 = result__;
                          var result__ = tmp1001;
                          tmp968.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp1002 = result__;
                          var result__ = tmp1002;
                          tmp968.set(result__);
                          
                        });
                      }));
                      
                      var nodes1082 = $("<span>");
                      root1473.append(nodes1082);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl256();
                      }));
                      
                      function renderControl256() {
                        subs__.addSub((masterItem.get())(it, tmp968, function(elements, callback) {
                          var root1474 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1474); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes1082;
                          nodes1082 = node.contents();
                          oldNodes.replaceWith(nodes1082);
                        }));
                      }
                      renderControl256();
                      callback(root1473); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1081;
                    nodes1081 = node.contents();
                    oldNodes.replaceWith(nodes1081);
                  }));
                  
                  
                }
              };
              renderCond150();
              subs__.addSub(tmp970.addEventListener('change', function() {
                renderCond150();
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
      
      callback(root1470); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1078;
      nodes1078 = node.contents();
      oldNodes.replaceWith(nodes1078);
    }));
    node619.append(node620);
    
    var node621 = $("<div>");
    node621.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    
    var node622 = $("<span>");
    node621.append(node622);
    var condSubs149 = new mobl.CompSubscription();
    subs__.addSub(condSubs149);
    var oldValue149;
    var renderCond149 = function() {
      var value1097 = current.get();
      if(oldValue149 === value1097) return;
      oldValue149 = value1097;
      var subs__ = condSubs149;
      subs__.unsubscribe();
      node622.empty();
      if(value1097) {
        ui.referenceItem(current.get(), items.get(), function(result__) {
          var tmp997 = result__;
          var tmp971 = mobl.ref(result__);
          subs__.addSub(current.addEventListener('change', function() {
            ui.referenceItem(current.get(), items.get(), function(result__) {
              var tmp995 = result__;
              var result__ = tmp995;
              tmp971.set(result__);
              
            });
          }));
          subs__.addSub(items.addEventListener('change', function() {
            ui.referenceItem(current.get(), items.get(), function(result__) {
              var tmp996 = result__;
              var result__ = tmp996;
              tmp971.set(result__);
              
            });
          }));
          
          var nodes1077 = $("<span>");
          node622.append(nodes1077);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl254();
          }));
          
          function renderControl254() {
            subs__.addSub((detail.get())(tmp971, function(elements, callback) {
              var root1469 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1469); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1077;
              nodes1077 = node.contents();
              oldNodes.replaceWith(nodes1077);
            }));
          }
          renderControl254();
          
          
        });
      } else {
        
        var node623 = $("<div>");
        node623.attr('style', "padding:20px");
        
        
        var node624 = $("<h2>");
        
        
        node624.append("Add more questions.");
        node623.append(node624);
        node622.append(node623);
        
        
        
      }
    };
    renderCond149();
    subs__.addSub(current.addEventListener('change', function() {
      renderCond149();
    }));
    
    node619.append(node621);
    root1468.append(node619);
    callback(root1468); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
