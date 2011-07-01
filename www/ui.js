mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root9967 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1425 = $("<span>");
  root9967.append(node1425);
  var condSubs352 = new mobl.CompSubscription();
  subs__.addSub(condSubs352);
  var oldValue352;
  var renderCond352 = function() {
    var value856 = value.get();
    if(oldValue352 === value856) return;
    oldValue352 = value856;
    var subs__ = condSubs352;
    subs__.unsubscribe();
    node1425.empty();
    if(value856) {
      var nodes8627 = $("<span>");
      node1425.append(nodes8627);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl543();
      }));
      
      function renderControl543() {
        subs__.addSub((elements)(function(elements, callback) {
          var root9968 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9968); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8627;
          nodes8627 = node.contents();
          oldNodes.replaceWith(nodes8627);
        }));
      }
      renderControl543();
      
      
    } else {
      var nodes8628 = $("<span>");
      node1425.append(nodes8628);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9969 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes8629 = $("<span>");
        root9969.append(nodes8629);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root9970 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9970); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8629;
          nodes8629 = node.contents();
          oldNodes.replaceWith(nodes8629);
        }));
        var nodes8630 = $("<span>");
        root9969.append(nodes8630);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root9971 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9971); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8630;
          nodes8630 = node.contents();
          oldNodes.replaceWith(nodes8630);
        }));
        callback(root9969); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8628;
        nodes8628 = node.contents();
        oldNodes.replaceWith(nodes8628);
      }));
      
      
    }
  };
  renderCond352();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond352();
  }));
  
  callback(root9967); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root9972 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1426 = $("<div>");
  
  var ref1390 = mobl.ref(ui.headerStyle);
  if(ref1390.get() !== null) {
    node1426.attr('class', ref1390.get());
    subs__.addSub(ref1390.addEventListener('change', function(_, ref, val) {
      node1426.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1390.rebind());
  
  var val630 = onclick.get();
  if(val630 !== null) {
    subs__.addSub(mobl.domBind(node1426, 'tap', val630));
  }
  
  var ref1391 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1391.get() !== null) {
    node1426.attr('style', ref1391.get());
    subs__.addSub(ref1391.addEventListener('change', function(_, ref, val) {
      node1426.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1426.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1391.rebind());
  
  
  var node1429 = $("<div>");
  
  var ref1389 = mobl.ref(ui.headerContainerStyle);
  if(ref1389.get() !== null) {
    node1429.attr('class', ref1389.get());
    subs__.addSub(ref1389.addEventListener('change', function(_, ref, val) {
      node1429.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1389.rebind());
  
  
  var node1430 = $("<div>");
  
  var ref1387 = text;
  node1430.text(""+ref1387.get());
  var ignore259 = false;
  subs__.addSub(ref1387.addEventListener('change', function(_, ref, val) {
    if(ignore259) return;
    node1430.text(""+val);
  }));
  subs__.addSub(ref1387.rebind());
  
  
  var ref1388 = mobl.ref(ui.headerTextStyle);
  if(ref1388.get() !== null) {
    node1430.attr('class', ref1388.get());
    subs__.addSub(ref1388.addEventListener('change', function(_, ref, val) {
      node1430.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1388.rebind());
  
  node1429.append(node1430);
  node1426.append(node1429);
  var nodes8631 = $("<span>");
  node1426.append(nodes8631);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl544();
  }));
  
  function renderControl544() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9973); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8631;
      nodes8631 = node.contents();
      oldNodes.replaceWith(nodes8631);
    }));
  }
  renderControl544();
  root9972.append(node1426);
  
  var node1427 = $("<span>");
  root9972.append(node1427);
  var condSubs353 = new mobl.CompSubscription();
  subs__.addSub(condSubs353);
  var oldValue353;
  var renderCond353 = function() {
    var value857 = fixedPosition.get();
    if(oldValue353 === value857) return;
    oldValue353 = value857;
    var subs__ = condSubs353;
    subs__.unsubscribe();
    node1427.empty();
    if(value857) {
      
      var node1428 = $("<div>");
      node1428.attr('id', "hello");
      node1428.attr('style', "height: 2.9em;");
      
      node1427.append(node1428);
      
      
    } else {
      
    }
  };
  renderCond353();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond353();
  }));
  
  callback(root9972); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9974 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1392 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1392.get() !== null) {
    sp.attr('class', ref1392.get());
    subs__.addSub(ref1392.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1392.rebind());
  
  var val631 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val631 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val631));
  }
  
  var val632 = function(event, callback) {
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
  if(val632 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val632));
  }
  
  var val633 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after171(result__) {
                    var tmp8535 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after171);if(result__ !== undefined) after171(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val633 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val633));
  }
  
  var val634 = function(event, callback) {
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
  if(val634 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val634));
  }
  
  var ref1393 = text;
  sp.text(""+ref1393.get());
  var ignore260 = false;
  subs__.addSub(ref1393.addEventListener('change', function(_, ref, val) {
    if(ignore260) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1393.rebind());
  
  
  root9974.append(sp);
  callback(root9974); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9975 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8632 = $("<span>");
  root9975.append(nodes8632);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9976 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9976); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8632;
    nodes8632 = node.contents();
    oldNodes.replaceWith(nodes8632);
  }));
  callback(root9975); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9977 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8633 = $("<span>");
  root9977.append(nodes8633);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9978 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9978); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8633;
    nodes8633 = node.contents();
    oldNodes.replaceWith(nodes8633);
  }));
  callback(root9977); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root9979 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1431 = $("<ul>");
  
  var ref1394 = mobl.ref(ui.groupStyle);
  if(ref1394.get() !== null) {
    node1431.attr('class', ref1394.get());
    subs__.addSub(ref1394.addEventListener('change', function(_, ref, val) {
      node1431.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1394.rebind());
  
  var nodes8634 = $("<span>");
  node1431.append(nodes8634);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl545();
  }));
  
  function renderControl545() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9980); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8634;
      nodes8634 = node.contents();
      oldNodes.replaceWith(nodes8634);
    }));
  }
  renderControl545();
  root9979.append(node1431);
  callback(root9979); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root9981 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1432 = $("<img>");
  
  var ref1395 = url;
  if(ref1395.get() !== null) {
    node1432.attr('src', ref1395.get());
    subs__.addSub(ref1395.addEventListener('change', function(_, ref, val) {
      node1432.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1395.rebind());
  
  var ref1396 = width;
  if(ref1396.get() !== null) {
    node1432.attr('width', ref1396.get());
    subs__.addSub(ref1396.addEventListener('change', function(_, ref, val) {
      node1432.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1396.rebind());
  
  var ref1397 = height;
  if(ref1397.get() !== null) {
    node1432.attr('height', ref1397.get());
    subs__.addSub(ref1397.addEventListener('change', function(_, ref, val) {
      node1432.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1397.rebind());
  
  var ref1398 = style;
  if(ref1398.get() !== null) {
    node1432.attr('class', ref1398.get());
    subs__.addSub(ref1398.addEventListener('change', function(_, ref, val) {
      node1432.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1398.rebind());
  
  var val635 = onclick.get();
  if(val635 !== null) {
    subs__.addSub(mobl.domBind(node1432, 'tap', val635));
  }
  
  var ref1399 = valign;
  if(ref1399.get() !== null) {
    node1432.attr('valign', ref1399.get());
    subs__.addSub(ref1399.addEventListener('change', function(_, ref, val) {
      node1432.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1399.rebind());
  
  var ref1400 = align;
  if(ref1400.get() !== null) {
    node1432.attr('align', ref1400.get());
    subs__.addSub(ref1400.addEventListener('change', function(_, ref, val) {
      node1432.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1400.rebind());
  
  root9981.append(node1432);
  callback(root9981); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root9982 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1401 = mobl.ref(ui.itemStyle);
  if(ref1401.get() !== null) {
    el.attr('class', ref1401.get());
    subs__.addSub(ref1401.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1401.rebind());
  
  var ref1402 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1402.get() !== null) {
    el.attr('class', ref1402.get());
    subs__.addSub(ref1402.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1402.rebind());
  
  var val636 = onswipe.get();
  if(val636 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val636));
  }
  
  var val637 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp8536 = result__;
                                           function after172(result__) {
                                             var tmp8537 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after172);if(result__ !== undefined) after172(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp8538 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val637 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val637));
  }
  
  var nodes8635 = $("<span>");
  el.append(nodes8635);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl546();
  }));
  
  function renderControl546() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9983); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8635;
      nodes8635 = node.contents();
      oldNodes.replaceWith(nodes8635);
    }));
  }
  renderControl546();
  root9982.append(el);
  callback(root9982); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root9984 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1433 = $("<input>");
  node1433.attr('type', "checkbox");
  
  var ref1404 = b;
  node1433.attr('checked', !!ref1404.get());
  subs__.addSub(ref1404.addEventListener('change', function(_, ref, val) {
    if(ref === ref1404) node1433.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1433, 'change', function() {
    b.set(!!node1433.attr('checked'));
  }));
  
  var val639 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val639 !== null) {
    subs__.addSub(mobl.domBind(node1433, 'tap', val639));
  }
  
  var val640 = onchange.get();
  if(val640 !== null) {
    subs__.addSub(mobl.domBind(node1433, 'change', val640));
  }
  
  root9984.append(node1433);
  
  root9984.append(" ");
  
  var node1434 = $("<span>");
  
  var ref1403 = label;
  node1434.text(""+ref1403.get());
  var ignore261 = false;
  subs__.addSub(ref1403.addEventListener('change', function(_, ref, val) {
    if(ignore261) return;
    node1434.text(""+val);
  }));
  subs__.addSub(ref1403.rebind());
  
  
  var val638 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after173(result__) {
                    var tmp8539 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after173);if(result__ !== undefined) after173(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val638 !== null) {
    subs__.addSub(mobl.domBind(node1434, 'tap', val638));
  }
  
  root9984.append(node1434);
  callback(root9984); return subs__;
  
  
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
  var root9985 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1435 = $("<span>");
  root9985.append(node1435);
  var condSubs354 = new mobl.CompSubscription();
  subs__.addSub(condSubs354);
  var oldValue354;
  var renderCond354 = function() {
    var value858 = label.get();
    if(oldValue354 === value858) return;
    oldValue354 = value858;
    var subs__ = condSubs354;
    subs__.unsubscribe();
    node1435.empty();
    if(value858) {
      var nodes8636 = $("<span>");
      node1435.append(nodes8636);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9986 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9986); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8636;
        nodes8636 = node.contents();
        oldNodes.replaceWith(nodes8636);
      }));
      
      
    } else {
      
    }
  };
  renderCond354();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond354();
  }));
  
  
  var node1436 = $("<span>");
  root9985.append(node1436);
  var condSubs355 = new mobl.CompSubscription();
  subs__.addSub(condSubs355);
  var oldValue355;
  var renderCond355 = function() {
    var value859 = validator.get();
    if(oldValue355 === value859) return;
    oldValue355 = value859;
    var subs__ = condSubs355;
    subs__.unsubscribe();
    node1436.empty();
    if(value859) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after177(result__) {
        var tmp8540 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp8541 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1437 = $("<input>");
        
        var ref1405 = inputType;
        if(ref1405.get() !== null) {
          node1437.attr('type', ref1405.get());
          subs__.addSub(ref1405.addEventListener('change', function(_, ref, val) {
            node1437.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1405.rebind());
        
        var ref1406 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1406.get() !== null) {
          node1437.attr('class', ref1406.get());
          subs__.addSub(ref1406.addEventListener('change', function(_, ref, val) {
            node1437.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1437.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1437.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1437.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1406.rebind());
        
        var ref1407 = placeholder;
        if(ref1407.get() !== null) {
          node1437.attr('placeholder', ref1407.get());
          subs__.addSub(ref1407.addEventListener('change', function(_, ref, val) {
            node1437.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1407.rebind());
        
        var ref1408 = temp;
        node1437.val(""+ref1408.get());
        var ignore262 = false;
        subs__.addSub(ref1408.addEventListener('change', function(_, ref, val) {
          if(ignore262) return;
          node1437.val(""+val);
        }));
        subs__.addSub(ref1408.rebind());
        
        subs__.addSub(mobl.domBind(node1437, 'keyup change', function() {
          ignore262 = true;
          temp.set(mobl.stringTomobl__String(node1437.val()));
          ignore262 = false;
        }));
        
        
        var val641 = onchange.get();
        if(val641 !== null) {
          subs__.addSub(mobl.domBind(node1437, 'change', val641));
        }
        
        var val642 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after174(result__) {
                          var tmp8542 = result__;
                          function after175(result__) {
                            var tmp8543 = result__;
                            var result__ = tmp8543;
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
                          var result__ = validator.get()(temp.get(), after175);if(result__ !== undefined) after175(result__);
                        }
                        var result__ = onkeyup.get()(event, after174);if(result__ !== undefined) after174(result__);
                      } else {
                        {
                          function after176(result__) {
                            var tmp8543 = result__;
                            var result__ = tmp8543;
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
                          var result__ = validator.get()(temp.get(), after176);if(result__ !== undefined) after176(result__);
                        }
                      }
                    };
        if(val642 !== null) {
          subs__.addSub(mobl.domBind(node1437, 'keyup', val642));
        }
        
        var val643 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val643 !== null) {
          subs__.addSub(mobl.domBind(node1437, 'blur', val643));
        }
        
        node1436.append(node1437);
        var nodes8637 = $("<span>");
        node1436.append(nodes8637);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root9987 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9987); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8637;
          nodes8637 = node.contents();
          oldNodes.replaceWith(nodes8637);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after177);if(result__ !== undefined) after177(result__);
    } else {
      
      var node1438 = $("<input>");
      
      var ref1409 = inputType;
      if(ref1409.get() !== null) {
        node1438.attr('type', ref1409.get());
        subs__.addSub(ref1409.addEventListener('change', function(_, ref, val) {
          node1438.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1409.rebind());
      
      var ref1410 = style;
      if(ref1410.get() !== null) {
        node1438.attr('class', ref1410.get());
        subs__.addSub(ref1410.addEventListener('change', function(_, ref, val) {
          node1438.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1410.rebind());
      
      var ref1411 = placeholder;
      if(ref1411.get() !== null) {
        node1438.attr('placeholder', ref1411.get());
        subs__.addSub(ref1411.addEventListener('change', function(_, ref, val) {
          node1438.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1411.rebind());
      
      var ref1412 = s;
      node1438.val(""+ref1412.get());
      var ignore263 = false;
      subs__.addSub(ref1412.addEventListener('change', function(_, ref, val) {
        if(ignore263) return;
        node1438.val(""+val);
      }));
      subs__.addSub(ref1412.rebind());
      
      subs__.addSub(mobl.domBind(node1438, 'keyup change', function() {
        ignore263 = true;
        s.set(mobl.stringTomobl__String(node1438.val()));
        ignore263 = false;
      }));
      
      
      var val644 = onchange.get();
      if(val644 !== null) {
        subs__.addSub(mobl.domBind(node1438, 'change', val644));
      }
      
      var val645 = onkeyup.get();
      if(val645 !== null) {
        subs__.addSub(mobl.domBind(node1438, 'keyup', val645));
      }
      
      var val646 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val646 !== null) {
        subs__.addSub(mobl.domBind(node1438, 'blur', val646));
      }
      
      node1436.append(node1438);
      
      
    }
  };
  renderCond355();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond355();
  }));
  
  callback(root9985); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9988 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8638 = $("<span>");
  root9988.append(nodes8638);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9989 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9989); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8638;
    nodes8638 = node.contents();
    oldNodes.replaceWith(nodes8638);
  }));
  callback(root9988); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9990 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8639 = $("<span>");
  root9990.append(nodes8639);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9991 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9991); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8639;
    nodes8639 = node.contents();
    oldNodes.replaceWith(nodes8639);
  }));
  callback(root9990); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root9992 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1439 = $("<span>");
  root9992.append(node1439);
  var condSubs356 = new mobl.CompSubscription();
  subs__.addSub(condSubs356);
  var oldValue356;
  var renderCond356 = function() {
    var value860 = label.get();
    if(oldValue356 === value860) return;
    oldValue356 = value860;
    var subs__ = condSubs356;
    subs__.unsubscribe();
    node1439.empty();
    if(value860) {
      var nodes8640 = $("<span>");
      node1439.append(nodes8640);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9993 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9993); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8640;
        nodes8640 = node.contents();
        oldNodes.replaceWith(nodes8640);
      }));
      
      
    } else {
      
    }
  };
  renderCond356();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond356();
  }));
  
  
  var node1440 = $("<input>");
  node1440.attr('type', "range");
  
  var ref1413 = n;
  node1440.val(""+ref1413.get());
  var ignore264 = false;
  subs__.addSub(ref1413.addEventListener('change', function(_, ref, val) {
    if(ignore264) return;
    node1440.val(""+val);
  }));
  subs__.addSub(ref1413.rebind());
  
  subs__.addSub(mobl.domBind(node1440, 'keyup change', function() {
    ignore264 = true;
    n.set(mobl.stringTomobl__Num(node1440.val()));
    ignore264 = false;
  }));
  
  
  var ref1414 = min;
  if(ref1414.get() !== null) {
    node1440.attr('min', ref1414.get());
    subs__.addSub(ref1414.addEventListener('change', function(_, ref, val) {
      node1440.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1414.rebind());
  
  var ref1415 = max;
  if(ref1415.get() !== null) {
    node1440.attr('max', ref1415.get());
    subs__.addSub(ref1415.addEventListener('change', function(_, ref, val) {
      node1440.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1415.rebind());
  
  var ref1416 = step;
  if(ref1416.get() !== null) {
    node1440.attr('step', ref1416.get());
    subs__.addSub(ref1416.addEventListener('change', function(_, ref, val) {
      node1440.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1416.rebind());
  node1440.attr('style', "width: 99%;");
  
  var val647 = onchange.get();
  if(val647 !== null) {
    subs__.addSub(mobl.domBind(node1440, 'change', val647));
  }
  
  var val648 = onkeyup.get();
  if(val648 !== null) {
    subs__.addSub(mobl.domBind(node1440, 'keyup', val648));
  }
  
  var ref1417 = placeholder;
  if(ref1417.get() !== null) {
    node1440.attr('placeholder', ref1417.get());
    subs__.addSub(ref1417.addEventListener('change', function(_, ref, val) {
      node1440.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1417.rebind());
  
  root9992.append(node1440);
  callback(root9992); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9994 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after178(result__) {
      var tmp8544 = result__;
      var result__ = tmp8544;
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
    var result__ = validator.get()(n2, after178);if(result__ !== undefined) after178(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes8641 = $("<span>");
  root9994.append(nodes8641);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9995 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9995); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8641;
    nodes8641 = node.contents();
    oldNodes.replaceWith(nodes8641);
  }));
  callback(root9994); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root9996 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1441 = $("<span>");
  root9996.append(node1441);
  var condSubs357 = new mobl.CompSubscription();
  subs__.addSub(condSubs357);
  var oldValue357;
  var renderCond357 = function() {
    var value861 = label.get();
    if(oldValue357 === value861) return;
    oldValue357 = value861;
    var subs__ = condSubs357;
    subs__.unsubscribe();
    node1441.empty();
    if(value861) {
      
      var node1442 = $("<span>");
      node1442.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1421 = label;
      node1442.text(""+ref1421.get());
      var ignore266 = false;
      subs__.addSub(ref1421.addEventListener('change', function(_, ref, val) {
        if(ignore266) return;
        node1442.text(""+val);
      }));
      subs__.addSub(ref1421.rebind());
      
      
      node1441.append(node1442);
      
      var node1443 = $("<span>");
      node1443.attr('style', "float: left");
      
      
      var node1444 = $("<input>");
      node1444.attr('type', "password");
      
      var ref1418 = style;
      if(ref1418.get() !== null) {
        node1444.attr('class', ref1418.get());
        subs__.addSub(ref1418.addEventListener('change', function(_, ref, val) {
          node1444.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1418.rebind());
      
      var ref1419 = placeholder;
      if(ref1419.get() !== null) {
        node1444.attr('placeholder', ref1419.get());
        subs__.addSub(ref1419.addEventListener('change', function(_, ref, val) {
          node1444.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1419.rebind());
      
      var ref1420 = s;
      node1444.val(""+ref1420.get());
      var ignore265 = false;
      subs__.addSub(ref1420.addEventListener('change', function(_, ref, val) {
        if(ignore265) return;
        node1444.val(""+val);
      }));
      subs__.addSub(ref1420.rebind());
      
      subs__.addSub(mobl.domBind(node1444, 'keyup change', function() {
        ignore265 = true;
        s.set(mobl.stringTomobl__String(node1444.val()));
        ignore265 = false;
      }));
      
      
      var val649 = onchange.get();
      if(val649 !== null) {
        subs__.addSub(mobl.domBind(node1444, 'change', val649));
      }
      
      var val650 = onkeyup.get();
      if(val650 !== null) {
        subs__.addSub(mobl.domBind(node1444, 'keyup', val650));
      }
      
      var val651 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val651 !== null) {
        subs__.addSub(mobl.domBind(node1444, 'blur', val651));
      }
      
      node1443.append(node1444);
      node1441.append(node1443);
      
      
      
      
    } else {
      
      var node1445 = $("<input>");
      node1445.attr('type', "password");
      
      var ref1422 = style;
      if(ref1422.get() !== null) {
        node1445.attr('class', ref1422.get());
        subs__.addSub(ref1422.addEventListener('change', function(_, ref, val) {
          node1445.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1422.rebind());
      
      var ref1423 = placeholder;
      if(ref1423.get() !== null) {
        node1445.attr('placeholder', ref1423.get());
        subs__.addSub(ref1423.addEventListener('change', function(_, ref, val) {
          node1445.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1423.rebind());
      
      var ref1424 = s;
      node1445.val(""+ref1424.get());
      var ignore267 = false;
      subs__.addSub(ref1424.addEventListener('change', function(_, ref, val) {
        if(ignore267) return;
        node1445.val(""+val);
      }));
      subs__.addSub(ref1424.rebind());
      
      subs__.addSub(mobl.domBind(node1445, 'keyup change', function() {
        ignore267 = true;
        s.set(mobl.stringTomobl__String(node1445.val()));
        ignore267 = false;
      }));
      
      
      var val652 = onchange.get();
      if(val652 !== null) {
        subs__.addSub(mobl.domBind(node1445, 'change', val652));
      }
      
      var val653 = onkeyup.get();
      if(val653 !== null) {
        subs__.addSub(mobl.domBind(node1445, 'keyup', val653));
      }
      
      var val654 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val654 !== null) {
        subs__.addSub(mobl.domBind(node1445, 'blur', val654));
      }
      
      node1441.append(node1445);
      
      
    }
  };
  renderCond357();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond357();
  }));
  
  callback(root9996); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root9997 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1429 = style;
  if(ref1429.get() !== null) {
    sel.attr('class', ref1429.get());
    subs__.addSub(ref1429.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1429.rebind());
  
  var val655 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after179(result__) {
                    var tmp8546 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after179);if(result__ !== undefined) after179(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val655 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val655));
  }
  
  
  var node1446 = mobl.loadingSpan();
  sel.append(node1446);
  var list209;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList209 = function() {
    var subs__ = listSubs__;
    list209 = options.get();
    list209.list(function(results209) {
      node1446.empty();
      for(var i2150 = 0; i2150 < results209.length; i2150++) {
        (function() {
          var iternode209 = $("<span>");
          node1446.append(iternode209);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results209), i2150), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results209), i2150), "_2");
          
          var node1447 = $("<option>");
          
          var ref1425 = optionDescription;
          node1447.text(""+ref1425.get());
          var ignore268 = false;
          subs__.addSub(ref1425.addEventListener('change', function(_, ref, val) {
            if(ignore268) return;
            node1447.text(""+val);
          }));
          subs__.addSub(ref1425.rebind());
          
          
          var ref1426 = optionStyle;
          if(ref1426.get() !== null) {
            node1447.attr('class', ref1426.get());
            subs__.addSub(ref1426.addEventListener('change', function(_, ref, val) {
              node1447.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1426.rebind());
          
          var ref1427 = optionValue;
          if(ref1427.get() !== null) {
            node1447.attr('value', ref1427.get());
            subs__.addSub(ref1427.addEventListener('change', function(_, ref, val) {
              node1447.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1427.rebind());
          
          var ref1428 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1428.get() !== null) {
            node1447.attr('selected', ref1428.get());
            subs__.addSub(ref1428.addEventListener('change', function(_, ref, val) {
              node1447.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1447.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1447.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1428.rebind());
          
          iternode209.append(node1447);
          
          var oldNodes = iternode209;
          iternode209 = iternode209.contents();
          oldNodes.replaceWith(iternode209);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list209.addEventListener('change', function() { listSubs__.unsubscribe(); renderList209(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList209(true); }));
    });
  };
  renderList209();
  
  root9997.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root9997); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root9998 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes8642 = $("<span>");
    root9998.append(nodes8642);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9999 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1448 = mobl.loadingSpan();
      root9999.append(node1448);
      var list210;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList210 = function() {
        var subs__ = listSubs__;
        list210 = tabs.get();
        list210.list(function(results210) {
          node1448.empty();
          for(var i2151 = 0; i2151 < results210.length; i2151++) {
            (function() {
              var iternode210 = $("<span>");
              node1448.append(iternode210);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results210), i2151), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results210), i2151), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results210), i2151), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp8501 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp8501.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp8501.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp8501.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp8501.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp8500 = mobl.ref(result__);
              
              var nodes8643 = $("<span>");
              iternode210.append(nodes8643);
              subs__.addSub((mobl.span)(tmp8501, mobl.ref(null), tmp8500, mobl.ref(null), function(_, callback) {
                var root10000 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8644 = $("<span>");
                root10000.append(nodes8644);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root10001 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10001); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8644;
                  nodes8644 = node.contents();
                  oldNodes.replaceWith(nodes8644);
                }));
                callback(root10000); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8643;
                nodes8643 = node.contents();
                oldNodes.replaceWith(nodes8643);
              }));
              
              var oldNodes = iternode210;
              iternode210 = iternode210.contents();
              oldNodes.replaceWith(iternode210);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list210.addEventListener('change', function() { listSubs__.unsubscribe(); renderList210(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList210(true); }));
        });
      };
      renderList210();
      
      callback(root9999); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8642;
      nodes8642 = node.contents();
      oldNodes.replaceWith(nodes8642);
    }));
    
    var node1449 = mobl.loadingSpan();
    root9998.append(node1449);
    var list211;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList211 = function() {
      var subs__ = listSubs__;
      list211 = tabs.get();
      list211.list(function(results211) {
        node1449.empty();
        for(var i2152 = 0; i2152 < results211.length; i2152++) {
          (function() {
            var iternode211 = $("<span>");
            node1449.append(iternode211);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results211), i2152), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results211), i2152), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results211), i2152), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp8502 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp8502.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp8502.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp8502.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp8502.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes8645 = $("<span>");
            iternode211.append(nodes8645);
            subs__.addSub((mobl.block)(tmp8502, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10002 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8646 = $("<span>");
              root10002.append(nodes8646);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root10003 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8647 = $("<span>");
                root10003.append(nodes8647);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl547();
                }));
                
                function renderControl547() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root10004 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root10004); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes8647;
                    nodes8647 = node.contents();
                    oldNodes.replaceWith(nodes8647);
                  }));
                }
                renderControl547();
                callback(root10003); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8646;
                nodes8646 = node.contents();
                oldNodes.replaceWith(nodes8646);
              }));
              callback(root10002); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8645;
              nodes8645 = node.contents();
              oldNodes.replaceWith(nodes8645);
            }));
            
            var oldNodes = iternode211;
            iternode211 = iternode211.contents();
            oldNodes.replaceWith(iternode211);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list211.addEventListener('change', function() { listSubs__.unsubscribe(); renderList211(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList211(true); }));
      });
    };
    renderList211();
    
    callback(root9998); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes8642 = $("<span>");
      root9998.append(nodes8642);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9999 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1448 = mobl.loadingSpan();
        root9999.append(node1448);
        var list210;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList210 = function() {
          var subs__ = listSubs__;
          list210 = tabs.get();
          list210.list(function(results210) {
            node1448.empty();
            for(var i2151 = 0; i2151 < results210.length; i2151++) {
              (function() {
                var iternode210 = $("<span>");
                node1448.append(iternode210);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results210), i2151), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results210), i2151), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results210), i2151), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp8501 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp8501.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp8501.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp8501.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp8501.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp8500 = mobl.ref(result__);
                
                var nodes8643 = $("<span>");
                iternode210.append(nodes8643);
                subs__.addSub((mobl.span)(tmp8501, mobl.ref(null), tmp8500, mobl.ref(null), function(_, callback) {
                  var root10000 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8644 = $("<span>");
                  root10000.append(nodes8644);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root10001 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root10001); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes8644;
                    nodes8644 = node.contents();
                    oldNodes.replaceWith(nodes8644);
                  }));
                  callback(root10000); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8643;
                  nodes8643 = node.contents();
                  oldNodes.replaceWith(nodes8643);
                }));
                
                var oldNodes = iternode210;
                iternode210 = iternode210.contents();
                oldNodes.replaceWith(iternode210);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list210.addEventListener('change', function() { listSubs__.unsubscribe(); renderList210(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList210(true); }));
          });
        };
        renderList210();
        
        callback(root9999); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8642;
        nodes8642 = node.contents();
        oldNodes.replaceWith(nodes8642);
      }));
      
      var node1449 = mobl.loadingSpan();
      root9998.append(node1449);
      var list211;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList211 = function() {
        var subs__ = listSubs__;
        list211 = tabs.get();
        list211.list(function(results211) {
          node1449.empty();
          for(var i2152 = 0; i2152 < results211.length; i2152++) {
            (function() {
              var iternode211 = $("<span>");
              node1449.append(iternode211);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results211), i2152), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results211), i2152), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results211), i2152), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp8502 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp8502.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp8502.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp8502.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp8502.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes8645 = $("<span>");
              iternode211.append(nodes8645);
              subs__.addSub((mobl.block)(tmp8502, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10002 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8646 = $("<span>");
                root10002.append(nodes8646);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root10003 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8647 = $("<span>");
                  root10003.append(nodes8647);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl547();
                  }));
                  
                  function renderControl547() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root10004 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10004); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8647;
                      nodes8647 = node.contents();
                      oldNodes.replaceWith(nodes8647);
                    }));
                  }
                  renderControl547();
                  callback(root10003); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8646;
                  nodes8646 = node.contents();
                  oldNodes.replaceWith(nodes8646);
                }));
                callback(root10002); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8645;
                nodes8645 = node.contents();
                oldNodes.replaceWith(nodes8645);
              }));
              
              var oldNodes = iternode211;
              iternode211 = iternode211.contents();
              oldNodes.replaceWith(iternode211);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list211.addEventListener('change', function() { listSubs__.unsubscribe(); renderList211(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList211(true); }));
        });
      };
      renderList211();
      
      callback(root9998); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root10005 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1450 = $("<div>");
  
  var ref1433 = mobl.ref(ui.searchboxStyle);
  if(ref1433.get() !== null) {
    node1450.attr('class', ref1433.get());
    subs__.addSub(ref1433.addEventListener('change', function(_, ref, val) {
      node1450.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1433.rebind());
  
  
  var node1451 = $("<input>");
  node1451.attr('type', "search");
  
  var ref1430 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1430.get() !== null) {
    node1451.attr('class', ref1430.get());
    subs__.addSub(ref1430.addEventListener('change', function(_, ref, val) {
      node1451.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1430.rebind());
  
  var ref1431 = placeholder;
  if(ref1431.get() !== null) {
    node1451.attr('placeholder', ref1431.get());
    subs__.addSub(ref1431.addEventListener('change', function(_, ref, val) {
      node1451.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1431.rebind());
  
  var ref1432 = s;
  node1451.val(""+ref1432.get());
  var ignore269 = false;
  subs__.addSub(ref1432.addEventListener('change', function(_, ref, val) {
    if(ignore269) return;
    node1451.val(""+val);
  }));
  subs__.addSub(ref1432.rebind());
  
  subs__.addSub(mobl.domBind(node1451, 'keyup change', function() {
    ignore269 = true;
    s.set(mobl.stringTomobl__String(node1451.val()));
    ignore269 = false;
  }));
  
  
  var val656 = onsearch.get();
  if(val656 !== null) {
    subs__.addSub(mobl.domBind(node1451, 'change', val656));
  }
  
  var val657 = onkeyup.get();
  if(val657 !== null) {
    subs__.addSub(mobl.domBind(node1451, 'keyup', val657));
  }
  node1451.attr('autocorrect', false);
  node1451.attr('autocapitalize', false);
  node1451.attr('autocomplete', false);
  
  node1450.append(node1451);
  root10005.append(node1450);
  callback(root10005); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root10006 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1434 = mobl.ref(ui.contextMenuStyle);
  if(ref1434.get() !== null) {
    menu.attr('class', ref1434.get());
    subs__.addSub(ref1434.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1434.rebind());
  
  var nodes8648 = $("<span>");
  menu.append(nodes8648);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl548();
  }));
  
  function renderControl548() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10007 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10007); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8648;
      nodes8648 = node.contents();
      oldNodes.replaceWith(nodes8648);
    }));
  }
  renderControl548();
  root10006.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val658 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp8549 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val658 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val658));
  }
  
  root10006.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root10006); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root10008 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp8533 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp8533.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1452 = $("<span>");
  root10008.append(node1452);
  var condSubs358 = new mobl.CompSubscription();
  subs__.addSub(condSubs358);
  var oldValue358;
  var renderCond358 = function() {
    var value862 = tmp8533.get();
    if(oldValue358 === value862) return;
    oldValue358 = value862;
    var subs__ = condSubs358;
    subs__.unsubscribe();
    node1452.empty();
    if(value862) {
      items.get().one(function(result__) {
        var tmp8550 = result__;
        var current = mobl.ref(result__);
        
        var node1453 = $("<div>");
        node1453.attr('width', "100%");
        
        
        var node1454 = $("<div>");
        node1454.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes8651 = $("<span>");
        node1454.append(nodes8651);
        subs__.addSub((ui.group)(function(_, callback) {
          var root10011 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1457 = mobl.loadingSpan();
          root10011.append(node1457);
          var list212;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList212 = function() {
            var subs__ = listSubs__;
            list212 = items.get();
            list212.list(function(results212) {
              node1457.empty();
              for(var i2153 = 0; i2153 < results212.length; i2153++) {
                (function() {
                  var iternode212 = $("<span>");
                  node1457.append(iternode212);
                  var it;
                  it = mobl.ref(mobl.ref(results212), i2153);
                  var result__ = it.get() == current.get();
                  var tmp8508 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8508.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8508.set(it.get() == current.get());
                  }));
                  
                  
                  var node1458 = $("<span>");
                  iternode212.append(node1458);
                  var condSubs360 = new mobl.CompSubscription();
                  subs__.addSub(condSubs360);
                  var oldValue360;
                  var renderCond360 = function() {
                    var value864 = tmp8508.get();
                    if(oldValue360 === value864) return;
                    oldValue360 = value864;
                    var subs__ = condSubs360;
                    subs__.unsubscribe();
                    node1458.empty();
                    if(value864) {
                      var nodes8652 = $("<span>");
                      node1458.append(nodes8652);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root10012 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes8653 = $("<span>");
                        root10012.append(nodes8653);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl550();
                        }));
                        
                        function renderControl550() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root10013 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root10013); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes8653;
                            nodes8653 = node.contents();
                            oldNodes.replaceWith(nodes8653);
                          }));
                        }
                        renderControl550();
                        callback(root10012); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8652;
                        nodes8652 = node.contents();
                        oldNodes.replaceWith(nodes8652);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp8507 = mobl.ref(result__);
                      
                      var nodes8654 = $("<span>");
                      node1458.append(nodes8654);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8507, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root10014 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes8655 = $("<span>");
                        root10014.append(nodes8655);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl551();
                        }));
                        
                        function renderControl551() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root10015 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root10015); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes8655;
                            nodes8655 = node.contents();
                            oldNodes.replaceWith(nodes8655);
                          }));
                        }
                        renderControl551();
                        callback(root10014); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8654;
                        nodes8654 = node.contents();
                        oldNodes.replaceWith(nodes8654);
                      }));
                      
                      
                    }
                  };
                  renderCond360();
                  subs__.addSub(tmp8508.addEventListener('change', function() {
                    renderCond360();
                  }));
                  
                  
                  var oldNodes = iternode212;
                  iternode212 = iternode212.contents();
                  oldNodes.replaceWith(iternode212);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list212.addEventListener('change', function() { listSubs__.unsubscribe(); renderList212(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList212(true); }));
            });
          };
          renderList212();
          
          callback(root10011); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8651;
          nodes8651 = node.contents();
          oldNodes.replaceWith(nodes8651);
        }));
        node1453.append(node1454);
        
        var node1455 = $("<div>");
        node1455.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1456 = $("<span>");
        node1455.append(node1456);
        var condSubs359 = new mobl.CompSubscription();
        subs__.addSub(condSubs359);
        var oldValue359;
        var renderCond359 = function() {
          var value863 = current.get();
          if(oldValue359 === value863) return;
          oldValue359 = value863;
          var subs__ = condSubs359;
          subs__.unsubscribe();
          node1456.empty();
          if(value863) {
            var nodes8649 = $("<span>");
            node1456.append(nodes8649);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl549();
            }));
            
            function renderControl549() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root10009 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10009); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8649;
                nodes8649 = node.contents();
                oldNodes.replaceWith(nodes8649);
              }));
            }
            renderControl549();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp8509 = mobl.ref(result__);
            
            var nodes8650 = $("<span>");
            node1456.append(nodes8650);
            subs__.addSub((mobl.label)(tmp8509, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10010 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root10010); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes8650;
              nodes8650 = node.contents();
              oldNodes.replaceWith(nodes8650);
            }));
            
            
          }
        };
        renderCond359();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond359();
        }));
        
        node1453.append(node1455);
        node1452.append(node1453);
        
        
        
        
        
        
      });
    } else {
      var nodes8656 = $("<span>");
      node1452.append(nodes8656);
      subs__.addSub((ui.group)(function(_, callback) {
        var root10016 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1459 = mobl.loadingSpan();
        root10016.append(node1459);
        var list213;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList213 = function() {
          var subs__ = listSubs__;
          list213 = items.get();
          list213.list(function(results213) {
            node1459.empty();
            for(var i2154 = 0; i2154 < results213.length; i2154++) {
              (function() {
                var iternode213 = $("<span>");
                node1459.append(iternode213);
                var it;
                it = mobl.ref(mobl.ref(results213), i2154);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp8551 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp8503 = mobl.ref(result__);
                
                var nodes8657 = $("<span>");
                iternode213.append(nodes8657);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8503, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10017 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8658 = $("<span>");
                  root10017.append(nodes8658);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl552();
                  }));
                  
                  function renderControl552() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root10018 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10018); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8658;
                      nodes8658 = node.contents();
                      oldNodes.replaceWith(nodes8658);
                    }));
                  }
                  renderControl552();
                  callback(root10017); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8657;
                  nodes8657 = node.contents();
                  oldNodes.replaceWith(nodes8657);
                }));
                
                var oldNodes = iternode213;
                iternode213 = iternode213.contents();
                oldNodes.replaceWith(iternode213);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list213.addEventListener('change', function() { listSubs__.unsubscribe(); renderList213(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList213(true); }));
          });
        };
        renderList213();
        
        callback(root10016); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8656;
        nodes8656 = node.contents();
        oldNodes.replaceWith(nodes8656);
      }));
      
      
    }
  };
  renderCond358();
  subs__.addSub(tmp8533.addEventListener('change', function() {
    renderCond358();
  }));
  
  callback(root10008); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root10019 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp8506 = mobl.ref(result__);
  
  var nodes8659 = $("<span>");
  root10019.append(nodes8659);
  subs__.addSub((ui.header)(tmp8506, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10020 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8505 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8504 = mobl.ref(result__);
    
    var nodes8660 = $("<span>");
    root10020.append(nodes8660);
    subs__.addSub((ui.backButton)(tmp8504, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8505, function(_, callback) {
      var root10021 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10021); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8660;
      nodes8660 = node.contents();
      oldNodes.replaceWith(nodes8660);
    }));
    callback(root10020); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8659;
    nodes8659 = node.contents();
    oldNodes.replaceWith(nodes8659);
  }));
  var nodes8661 = $("<span>");
  root10019.append(nodes8661);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl553();
  }));
  
  function renderControl553() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root10022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10022); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8661;
      nodes8661 = node.contents();
      oldNodes.replaceWith(nodes8661);
    }));
  }
  renderControl553();
  callback(root10019); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root10023 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes8662 = $("<span>");
  root10023.append(nodes8662);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10024 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1460 = mobl.loadingSpan();
    root10024.append(node1460);
    var list214;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList214 = function() {
      var subs__ = listSubs__;
      list214 = coll.get();
      list214.list(function(results214) {
        node1460.empty();
        for(var i2155 = 0; i2155 < results214.length; i2155++) {
          (function() {
            var iternode214 = $("<span>");
            node1460.append(iternode214);
            var it;
            it = mobl.ref(mobl.ref(results214), i2155);
            var result__ = it.get() == selected.get();
            var tmp8511 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp8511.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp8511.set(it.get() == selected.get());
            }));
            
            
            var node1461 = $("<span>");
            iternode214.append(node1461);
            var condSubs361 = new mobl.CompSubscription();
            subs__.addSub(condSubs361);
            var oldValue361;
            var renderCond361 = function() {
              var value865 = tmp8511.get();
              if(oldValue361 === value865) return;
              oldValue361 = value865;
              var subs__ = condSubs361;
              subs__.unsubscribe();
              node1461.empty();
              if(value865) {
                var nodes8663 = $("<span>");
                node1461.append(nodes8663);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10025 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8664 = $("<span>");
                  root10025.append(nodes8664);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl554();
                  }));
                  
                  function renderControl554() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root10026 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10026); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8664;
                      nodes8664 = node.contents();
                      oldNodes.replaceWith(nodes8664);
                    }));
                  }
                  renderControl554();
                  callback(root10025); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8663;
                  nodes8663 = node.contents();
                  oldNodes.replaceWith(nodes8663);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp8510 = mobl.ref(result__);
                
                var nodes8665 = $("<span>");
                node1461.append(nodes8665);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8510, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root10027 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8666 = $("<span>");
                  root10027.append(nodes8666);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl555();
                  }));
                  
                  function renderControl555() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root10028 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10028); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8666;
                      nodes8666 = node.contents();
                      oldNodes.replaceWith(nodes8666);
                    }));
                  }
                  renderControl555();
                  callback(root10027); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8665;
                  nodes8665 = node.contents();
                  oldNodes.replaceWith(nodes8665);
                }));
                
                
              }
            };
            renderCond361();
            subs__.addSub(tmp8511.addEventListener('change', function() {
              renderCond361();
            }));
            
            
            var oldNodes = iternode214;
            iternode214 = iternode214.contents();
            oldNodes.replaceWith(iternode214);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list214.addEventListener('change', function() { listSubs__.unsubscribe(); renderList214(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList214(true); }));
      });
    };
    renderList214();
    
    callback(root10024); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8662;
    nodes8662 = node.contents();
    oldNodes.replaceWith(nodes8662);
  }));
  callback(root10023); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root10029 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp8552 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp8512 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp8512.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp8512.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp8512.set(coll.get().limit(n.get()));
    }));
    
    
    var node1462 = mobl.loadingSpan();
    root10029.append(node1462);
    var list215;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList215 = function() {
      var subs__ = listSubs__;
      list215 = tmp8512.get();
      list215.list(function(results215) {
        node1462.empty();
        for(var i2156 = 0; i2156 < results215.length; i2156++) {
          (function() {
            var iternode215 = $("<span>");
            node1462.append(iternode215);
            var it;
            it = mobl.ref(mobl.ref(results215), i2156);
            var nodes8667 = $("<span>");
            iternode215.append(nodes8667);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl556();
            }));
            
            function renderControl556() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root10030 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10030); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8667;
                nodes8667 = node.contents();
                oldNodes.replaceWith(nodes8667);
              }));
            }
            renderControl556();
            
            var oldNodes = iternode215;
            iternode215 = iternode215.contents();
            oldNodes.replaceWith(iternode215);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list215.addEventListener('change', function() { listSubs__.unsubscribe(); renderList215(true); }));
        subs__.addSub(tmp8512.addEventListener('change', function() { listSubs__.unsubscribe(); renderList215(true); }));
      });
    };
    renderList215();
    
    var result__ = n.get() < total.get();
    var tmp8514 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp8514.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp8514.set(n.get() < total.get());
    }));
    
    
    var node1463 = $("<span>");
    root10029.append(node1463);
    var condSubs362 = new mobl.CompSubscription();
    subs__.addSub(condSubs362);
    var oldValue362;
    var renderCond362 = function() {
      var value866 = tmp8514.get();
      if(oldValue362 === value866) return;
      oldValue362 = value866;
      var subs__ = condSubs362;
      subs__.unsubscribe();
      node1463.empty();
      if(value866) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp8513 = mobl.ref(result__);
        
        var nodes8668 = $("<span>");
        node1463.append(nodes8668);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp8513, mobl.ref(null), function(_, callback) {
          var root10031 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes8669 = $("<span>");
          root10031.append(nodes8669);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root10032 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root10032); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes8669;
            nodes8669 = node.contents();
            oldNodes.replaceWith(nodes8669);
          }));
          callback(root10031); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8668;
          nodes8668 = node.contents();
          oldNodes.replaceWith(nodes8668);
        }));
        
        
      } else {
        
      }
    };
    renderCond362();
    subs__.addSub(tmp8514.addEventListener('change', function() {
      renderCond362();
    }));
    
    callback(root10029); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root10033 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8670 = $("<span>");
  root10033.append(nodes8670);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10034 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1464 = mobl.loadingSpan();
    root10034.append(node1464);
    var list216;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList216 = function() {
      var subs__ = listSubs__;
      list216 = items.get();
      list216.list(function(results216) {
        node1464.empty();
        for(var i2157 = 0; i2157 < results216.length; i2157++) {
          (function() {
            var iternode216 = $("<span>");
            node1464.append(iternode216);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results216), i2157), "_1");it = mobl.ref(mobl.ref(mobl.ref(results216), i2157), "_2");
            var nodes8671 = $("<span>");
            iternode216.append(nodes8671);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root10035 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8672 = $("<span>");
              root10035.append(nodes8672);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root10036 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10036); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8672;
                nodes8672 = node.contents();
                oldNodes.replaceWith(nodes8672);
              }));
              callback(root10035); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8671;
              nodes8671 = node.contents();
              oldNodes.replaceWith(nodes8671);
            }));
            
            var oldNodes = iternode216;
            iternode216 = iternode216.contents();
            oldNodes.replaceWith(iternode216);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list216.addEventListener('change', function() { listSubs__.unsubscribe(); renderList216(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList216(true); }));
      });
    };
    renderList216();
    
    callback(root10034); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8670;
    nodes8670 = node.contents();
    oldNodes.replaceWith(nodes8670);
  }));
  callback(root10033); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root10037 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1072) {
    coll1072 = coll1072.reverse();
    function processOne316() {
      var it;
      it = coll1072.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1072.length > 0) processOne316(); else rest316();
      
    }
    function rest316() {
      var nodes8673 = $("<span>");
      root10037.append(nodes8673);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root10038 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp8515 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp8516 = mobl.ref(result__);
        
        var nodes8674 = $("<span>");
        root10038.append(nodes8674);
        subs__.addSub((ui.backButton)(tmp8516, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8515, function(_, callback) {
          var root10039 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10039); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8674;
          nodes8674 = node.contents();
          oldNodes.replaceWith(nodes8674);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1071) {
                           coll1071 = coll1071.reverse();
                           function processOne315() {
                             var checked;var it;
                             var tmp8554 = coll1071.pop();
                             checked = tmp8554._1;it = tmp8554._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1071.length > 0) processOne315(); else rest315();
                               
                             } else {
                               {
                                 
                                 if(coll1071.length > 0) processOne315(); else rest315();
                                 
                               }
                             }
                           }
                           function rest315() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1071.length > 0) processOne315(); else rest315();
                         });
                         
                       };
        var tmp8517 = mobl.ref(result__);
        
        var nodes8675 = $("<span>");
        root10038.append(nodes8675);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8517, function(_, callback) {
          var root10040 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10040); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8675;
          nodes8675 = node.contents();
          oldNodes.replaceWith(nodes8675);
        }));
        callback(root10038); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8673;
        nodes8673 = node.contents();
        oldNodes.replaceWith(nodes8673);
      }));
      var nodes8676 = $("<span>");
      root10037.append(nodes8676);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root10041 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10041); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8676;
        nodes8676 = node.contents();
        oldNodes.replaceWith(nodes8676);
      }));
      callback(root10037); return subs__;
      
      
    }
    if(coll1072.length > 0) processOne316(); else rest316();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root10042 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes8677 = $("<span>");
  root10042.append(nodes8677);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10043 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10043); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8677;
    nodes8677 = node.contents();
    oldNodes.replaceWith(nodes8677);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp8518 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp8518.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp8518.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp8518.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp8518.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp8518.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes8678 = $("<span>");
  root10042.append(nodes8678);
  subs__.addSub((ui.masterDetail)(tmp8518, masterItem, detailItem, function(_, callback) {
    var root10044 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10044); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8678;
    nodes8678 = node.contents();
    oldNodes.replaceWith(nodes8678);
  }));
  callback(root10042); return subs__;
  
  
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
  var root10045 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes8679 = $("<span>");
  root10045.append(nodes8679);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10046 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1465 = mobl.loadingSpan();
    root10046.append(node1465);
    var list217;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList217 = function() {
      var subs__ = listSubs__;
      list217 = sections.get();
      list217.list(function(results217) {
        node1465.empty();
        for(var i2158 = 0; i2158 < results217.length; i2158++) {
          (function() {
            var iternode217 = $("<span>");
            node1465.append(iternode217);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results217), i2158), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results217), i2158), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp8520 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8520.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8520.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp8520.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp8520.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp8519 = mobl.ref(result__);
            
            var nodes8680 = $("<span>");
            iternode217.append(nodes8680);
            subs__.addSub((mobl.span)(tmp8520, mobl.ref(null), tmp8519, mobl.ref(null), function(_, callback) {
              var root10047 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8681 = $("<span>");
              root10047.append(nodes8681);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10048 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10048); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8681;
                nodes8681 = node.contents();
                oldNodes.replaceWith(nodes8681);
              }));
              callback(root10047); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8680;
              nodes8680 = node.contents();
              oldNodes.replaceWith(nodes8680);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp8521 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8521.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8521.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp8521.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp8521.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes8682 = $("<span>");
            iternode217.append(nodes8682);
            subs__.addSub((mobl.block)(tmp8521, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10049 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8683 = $("<span>");
              root10049.append(nodes8683);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl557();
              }));
              
              function renderControl557() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root10050 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10050); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8683;
                  nodes8683 = node.contents();
                  oldNodes.replaceWith(nodes8683);
                }));
              }
              renderControl557();
              callback(root10049); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8682;
              nodes8682 = node.contents();
              oldNodes.replaceWith(nodes8682);
            }));
            
            var oldNodes = iternode217;
            iternode217 = iternode217.contents();
            oldNodes.replaceWith(iternode217);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list217.addEventListener('change', function() { listSubs__.unsubscribe(); renderList217(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList217(true); }));
      });
    };
    renderList217();
    
    callback(root10046); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8679;
    nodes8679 = node.contents();
    oldNodes.replaceWith(nodes8679);
  }));
  callback(root10045); return subs__;
  
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
  var root10051 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1466 = $("<table>");
  
  var ref1435 = style;
  if(ref1435.get() !== null) {
    node1466.attr('class', ref1435.get());
    subs__.addSub(ref1435.addEventListener('change', function(_, ref, val) {
      node1466.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1435.rebind());
  
  var nodes8684 = $("<span>");
  node1466.append(nodes8684);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl558();
  }));
  
  function renderControl558() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10052 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10052); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8684;
      nodes8684 = node.contents();
      oldNodes.replaceWith(nodes8684);
    }));
  }
  renderControl558();
  root10051.append(node1466);
  callback(root10051); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root10053 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1467 = $("<tr>");
  
  var ref1436 = style;
  if(ref1436.get() !== null) {
    node1467.attr('class', ref1436.get());
    subs__.addSub(ref1436.addEventListener('change', function(_, ref, val) {
      node1467.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1436.rebind());
  
  var nodes8685 = $("<span>");
  node1467.append(nodes8685);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl559();
  }));
  
  function renderControl559() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10054); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8685;
      nodes8685 = node.contents();
      oldNodes.replaceWith(nodes8685);
    }));
  }
  renderControl559();
  root10053.append(node1467);
  callback(root10053); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root10055 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1468 = $("<td>");
  
  var ref1437 = width;
  if(ref1437.get() !== null) {
    node1468.attr('width', ref1437.get());
    subs__.addSub(ref1437.addEventListener('change', function(_, ref, val) {
      node1468.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1437.rebind());
  
  var ref1438 = style;
  if(ref1438.get() !== null) {
    node1468.attr('class', ref1438.get());
    subs__.addSub(ref1438.addEventListener('change', function(_, ref, val) {
      node1468.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1438.rebind());
  
  var nodes8686 = $("<span>");
  node1468.append(nodes8686);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl560();
  }));
  
  function renderControl560() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10056); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8686;
      nodes8686 = node.contents();
      oldNodes.replaceWith(nodes8686);
    }));
  }
  renderControl560();
  root10055.append(node1468);
  callback(root10055); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root10057 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1469 = $("<td>");
  
  var ref1439 = width;
  if(ref1439.get() !== null) {
    node1469.attr('width', ref1439.get());
    subs__.addSub(ref1439.addEventListener('change', function(_, ref, val) {
      node1469.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1439.rebind());
  
  var ref1440 = style;
  if(ref1440.get() !== null) {
    node1469.attr('class', ref1440.get());
    subs__.addSub(ref1440.addEventListener('change', function(_, ref, val) {
      node1469.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1440.rebind());
  
  var nodes8687 = $("<span>");
  node1469.append(nodes8687);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl561();
  }));
  
  function renderControl561() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10058 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10058); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8687;
      nodes8687 = node.contents();
      oldNodes.replaceWith(nodes8687);
    }));
  }
  renderControl561();
  root10057.append(node1469);
  callback(root10057); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root10059 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1470 = $("<td>");
  
  var ref1441 = width;
  if(ref1441.get() !== null) {
    node1470.attr('width', ref1441.get());
    subs__.addSub(ref1441.addEventListener('change', function(_, ref, val) {
      node1470.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1441.rebind());
  
  var ref1442 = style;
  if(ref1442.get() !== null) {
    node1470.attr('class', ref1442.get());
    subs__.addSub(ref1442.addEventListener('change', function(_, ref, val) {
      node1470.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1442.rebind());
  
  
  var node1471 = $("<strong>");
  
  var nodes8688 = $("<span>");
  node1471.append(nodes8688);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl562();
  }));
  
  function renderControl562() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10060 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10060); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8688;
      nodes8688 = node.contents();
      oldNodes.replaceWith(nodes8688);
    }));
  }
  renderControl562();
  node1470.append(node1471);
  root10059.append(node1470);
  callback(root10059); return subs__;
  
  
  
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
  items.list(function(coll1073) {
    coll1073 = coll1073.reverse();
    function processOne317() {
      var item;
      item = coll1073.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1073.length > 0) processOne317(); else rest317();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1073.length > 0) processOne317(); else rest317();
          
        }
      }
    }
    function rest317() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1073.length > 0) processOne317(); else rest317();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root10061 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp8534 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp8534.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1472 = $("<span>");
  root10061.append(node1472);
  var condSubs363 = new mobl.CompSubscription();
  subs__.addSub(condSubs363);
  var oldValue363;
  var renderCond363 = function() {
    var value867 = tmp8534.get();
    if(oldValue363 === value867) return;
    oldValue363 = value867;
    var subs__ = condSubs363;
    subs__.unsubscribe();
    node1472.empty();
    if(value867) {
      items.get().one(function(result__) {
        var tmp8556 = result__;
        var current = mobl.ref(result__);
        
        var node1473 = $("<div>");
        node1473.attr('width', "100%");
        
        
        var node1474 = $("<div>");
        node1474.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes8690 = $("<span>");
        node1474.append(nodes8690);
        subs__.addSub((ui.group)(function(_, callback) {
          var root10063 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1477 = mobl.loadingSpan();
          root10063.append(node1477);
          var list218;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList218 = function() {
            var subs__ = listSubs__;
            list218 = items.get();
            list218.list(function(results218) {
              node1477.empty();
              for(var i2159 = 0; i2159 < results218.length; i2159++) {
                (function() {
                  var iternode218 = $("<span>");
                  node1477.append(iternode218);
                  var it;
                  it = mobl.ref(mobl.ref(results218), i2159);
                  var result__ = it.get() == current.get();
                  var tmp8530 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8530.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8530.set(it.get() == current.get());
                  }));
                  
                  
                  var node1478 = $("<span>");
                  iternode218.append(node1478);
                  var condSubs365 = new mobl.CompSubscription();
                  subs__.addSub(condSubs365);
                  var oldValue365;
                  var renderCond365 = function() {
                    var value869 = tmp8530.get();
                    if(oldValue365 === value869) return;
                    oldValue365 = value869;
                    var subs__ = condSubs365;
                    subs__.unsubscribe();
                    node1478.empty();
                    if(value869) {
                      var nodes8691 = $("<span>");
                      node1478.append(nodes8691);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root10064 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp8562 = result__;
                          var tmp8527 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8560 = result__;
                              var result__ = tmp8560;
                              tmp8527.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8561 = result__;
                              var result__ = tmp8561;
                              tmp8527.set(result__);
                              
                            });
                          }));
                          
                          var nodes8692 = $("<span>");
                          root10064.append(nodes8692);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl564();
                          }));
                          
                          function renderControl564() {
                            subs__.addSub((masterItem.get())(it, tmp8527, function(elements, callback) {
                              var root10065 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root10065); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes8692;
                              nodes8692 = node.contents();
                              oldNodes.replaceWith(nodes8692);
                            }));
                          }
                          renderControl564();
                          callback(root10064); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8691;
                        nodes8691 = node.contents();
                        oldNodes.replaceWith(nodes8691);
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
                      var tmp8529 = mobl.ref(result__);
                      
                      var nodes8693 = $("<span>");
                      node1478.append(nodes8693);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8529, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root10066 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp8565 = result__;
                          var tmp8528 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8563 = result__;
                              var result__ = tmp8563;
                              tmp8528.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8564 = result__;
                              var result__ = tmp8564;
                              tmp8528.set(result__);
                              
                            });
                          }));
                          
                          var nodes8694 = $("<span>");
                          root10066.append(nodes8694);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl565();
                          }));
                          
                          function renderControl565() {
                            subs__.addSub((masterItem.get())(it, tmp8528, function(elements, callback) {
                              var root10067 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root10067); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes8694;
                              nodes8694 = node.contents();
                              oldNodes.replaceWith(nodes8694);
                            }));
                          }
                          renderControl565();
                          callback(root10066); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8693;
                        nodes8693 = node.contents();
                        oldNodes.replaceWith(nodes8693);
                      }));
                      
                      
                    }
                  };
                  renderCond365();
                  subs__.addSub(tmp8530.addEventListener('change', function() {
                    renderCond365();
                  }));
                  
                  
                  var oldNodes = iternode218;
                  iternode218 = iternode218.contents();
                  oldNodes.replaceWith(iternode218);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list218.addEventListener('change', function() { listSubs__.unsubscribe(); renderList218(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList218(true); }));
            });
          };
          renderList218();
          
          callback(root10063); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8690;
          nodes8690 = node.contents();
          oldNodes.replaceWith(nodes8690);
        }));
        node1473.append(node1474);
        
        var node1475 = $("<div>");
        node1475.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp8532 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp8532.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp8532.set(current.get() && ui.visible.get());
        }));
        
        
        var node1476 = $("<span>");
        node1475.append(node1476);
        var condSubs364 = new mobl.CompSubscription();
        subs__.addSub(condSubs364);
        var oldValue364;
        var renderCond364 = function() {
          var value868 = tmp8532.get();
          if(oldValue364 === value868) return;
          oldValue364 = value868;
          var subs__ = condSubs364;
          subs__.unsubscribe();
          node1476.empty();
          if(value868) {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp8559 = result__;
              var tmp8531 = mobl.ref(result__);
              subs__.addSub(current.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp8557 = result__;
                  var result__ = tmp8557;
                  tmp8531.set(result__);
                  
                });
              }));
              subs__.addSub(items.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp8558 = result__;
                  var result__ = tmp8558;
                  tmp8531.set(result__);
                  
                });
              }));
              
              var nodes8689 = $("<span>");
              node1476.append(nodes8689);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl563();
              }));
              
              function renderControl563() {
                subs__.addSub((detail.get())(current, tmp8531, function(elements, callback) {
                  var root10062 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10062); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8689;
                  nodes8689 = node.contents();
                  oldNodes.replaceWith(nodes8689);
                }));
              }
              renderControl563();
              
              
            });
          } else {
            
          }
        };
        renderCond364();
        subs__.addSub(tmp8532.addEventListener('change', function() {
          renderCond364();
        }));
        
        node1473.append(node1475);
        node1472.append(node1473);
        
        
        
        
        
        
      });
    } else {
      var nodes8695 = $("<span>");
      node1472.append(nodes8695);
      subs__.addSub((ui.group)(function(_, callback) {
        var root10068 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1479 = mobl.loadingSpan();
        root10068.append(node1479);
        var list219;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList219 = function() {
          var subs__ = listSubs__;
          list219 = items.get();
          list219.list(function(results219) {
            node1479.empty();
            for(var i2160 = 0; i2160 < results219.length; i2160++) {
              (function() {
                var iternode219 = $("<span>");
                node1479.append(iternode219);
                var it;
                it = mobl.ref(mobl.ref(results219), i2160);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp8571 = result__;
                                 mobl.sleep(100, function(result__) {
                                   var tmp8572 = result__;
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp8573 = result__;
                                     var result__ = mobl.alert("Call renderMaths()!");
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 });
                                 });
                               };
                var tmp8523 = mobl.ref(result__);
                
                var nodes8696 = $("<span>");
                iternode219.append(nodes8696);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8523, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10069 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp8568 = result__;
                    var tmp8522 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp8566 = result__;
                        var result__ = tmp8566;
                        tmp8522.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp8567 = result__;
                        var result__ = tmp8567;
                        tmp8522.set(result__);
                        
                      });
                    }));
                    
                    var nodes8697 = $("<span>");
                    root10069.append(nodes8697);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl566();
                    }));
                    
                    function renderControl566() {
                      subs__.addSub((masterItem.get())(it, tmp8522, function(elements, callback) {
                        var root10070 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root10070); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8697;
                        nodes8697 = node.contents();
                        oldNodes.replaceWith(nodes8697);
                      }));
                    }
                    renderControl566();
                    mobl.sleep(100, function(result__) {
                      var tmp8569 = result__;
                      mathJAX.renderMaths(function(result__) {
                        var tmp8570 = result__;
                        callback(root10069); return subs__;
                      });
                    });
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8696;
                  nodes8696 = node.contents();
                  oldNodes.replaceWith(nodes8696);
                }));
                
                var oldNodes = iternode219;
                iternode219 = iternode219.contents();
                oldNodes.replaceWith(iternode219);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list219.addEventListener('change', function() { listSubs__.unsubscribe(); renderList219(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList219(true); }));
          });
        };
        renderList219();
        
        callback(root10068); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8695;
        nodes8695 = node.contents();
        oldNodes.replaceWith(nodes8695);
      }));
      
      
    }
  };
  renderCond363();
  subs__.addSub(tmp8534.addEventListener('change', function() {
    renderCond363();
  }));
  
  callback(root10061); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root10071 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp8526 = mobl.ref(result__);
  
  var nodes8698 = $("<span>");
  root10071.append(nodes8698);
  subs__.addSub((ui.header)(tmp8526, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10072 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8525 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8524 = mobl.ref(result__);
    
    var nodes8699 = $("<span>");
    root10072.append(nodes8699);
    subs__.addSub((ui.backButton)(tmp8524, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8525, function(_, callback) {
      var root10073 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10073); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8699;
      nodes8699 = node.contents();
      oldNodes.replaceWith(nodes8699);
    }));
    callback(root10072); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8698;
    nodes8698 = node.contents();
    oldNodes.replaceWith(nodes8698);
  }));
  var nodes8700 = $("<span>");
  root10071.append(nodes8700);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl567();
  }));
  
  function renderControl567() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root10074 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10074); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8700;
      nodes8700 = node.contents();
      oldNodes.replaceWith(nodes8700);
    }));
  }
  renderControl567();
  callback(root10071); return subs__;
  
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root10075 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8701 = $("<span>");
  root10075.append(nodes8701);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10076 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes8702 = $("<span>");
    root10076.append(nodes8702);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10077 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10077); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8702;
      nodes8702 = node.contents();
      oldNodes.replaceWith(nodes8702);
    }));
    callback(root10076); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8701;
    nodes8701 = node.contents();
    oldNodes.replaceWith(nodes8701);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes8703 = $("<span>");
  root10075.append(nodes8703);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root10078 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10078); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8703;
    nodes8703 = node.contents();
    oldNodes.replaceWith(nodes8703);
  }));
  callback(root10075); return subs__;
  
  
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
