mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root9151 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1342 = $("<span>");
  root9151.append(node1342);
  var condSubs330 = new mobl.CompSubscription();
  subs__.addSub(condSubs330);
  var oldValue330;
  var renderCond330 = function() {
    var value782 = value.get();
    if(oldValue330 === value782) return;
    oldValue330 = value782;
    var subs__ = condSubs330;
    subs__.unsubscribe();
    node1342.empty();
    if(value782) {
      var nodes7902 = $("<span>");
      node1342.append(nodes7902);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl514();
      }));
      
      function renderControl514() {
        subs__.addSub((elements)(function(elements, callback) {
          var root9152 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9152); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7902;
          nodes7902 = node.contents();
          oldNodes.replaceWith(nodes7902);
        }));
      }
      renderControl514();
      
      
    } else {
      var nodes7903 = $("<span>");
      node1342.append(nodes7903);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9153 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7904 = $("<span>");
        root9153.append(nodes7904);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root9154 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9154); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7904;
          nodes7904 = node.contents();
          oldNodes.replaceWith(nodes7904);
        }));
        var nodes7905 = $("<span>");
        root9153.append(nodes7905);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root9155 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9155); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7905;
          nodes7905 = node.contents();
          oldNodes.replaceWith(nodes7905);
        }));
        callback(root9153); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7903;
        nodes7903 = node.contents();
        oldNodes.replaceWith(nodes7903);
      }));
      
      
    }
  };
  renderCond330();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond330();
  }));
  
  callback(root9151); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root9156 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1343 = $("<div>");
  
  var ref1310 = mobl.ref(ui.headerStyle);
  if(ref1310.get() !== null) {
    node1343.attr('class', ref1310.get());
    subs__.addSub(ref1310.addEventListener('change', function(_, ref, val) {
      node1343.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1310.rebind());
  
  var val597 = onclick.get();
  if(val597 !== null) {
    subs__.addSub(mobl.domBind(node1343, 'tap', val597));
  }
  
  var ref1311 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1311.get() !== null) {
    node1343.attr('style', ref1311.get());
    subs__.addSub(ref1311.addEventListener('change', function(_, ref, val) {
      node1343.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1343.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1311.rebind());
  
  
  var node1346 = $("<div>");
  
  var ref1309 = mobl.ref(ui.headerContainerStyle);
  if(ref1309.get() !== null) {
    node1346.attr('class', ref1309.get());
    subs__.addSub(ref1309.addEventListener('change', function(_, ref, val) {
      node1346.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1309.rebind());
  
  
  var node1347 = $("<div>");
  
  var ref1307 = text;
  node1347.text(""+ref1307.get());
  var ignore244 = false;
  subs__.addSub(ref1307.addEventListener('change', function(_, ref, val) {
    if(ignore244) return;
    node1347.text(""+val);
  }));
  subs__.addSub(ref1307.rebind());
  
  
  var ref1308 = mobl.ref(ui.headerTextStyle);
  if(ref1308.get() !== null) {
    node1347.attr('class', ref1308.get());
    subs__.addSub(ref1308.addEventListener('change', function(_, ref, val) {
      node1347.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1308.rebind());
  
  node1346.append(node1347);
  node1343.append(node1346);
  var nodes7906 = $("<span>");
  node1343.append(nodes7906);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl515();
  }));
  
  function renderControl515() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9157 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9157); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7906;
      nodes7906 = node.contents();
      oldNodes.replaceWith(nodes7906);
    }));
  }
  renderControl515();
  root9156.append(node1343);
  
  var node1344 = $("<span>");
  root9156.append(node1344);
  var condSubs331 = new mobl.CompSubscription();
  subs__.addSub(condSubs331);
  var oldValue331;
  var renderCond331 = function() {
    var value783 = fixedPosition.get();
    if(oldValue331 === value783) return;
    oldValue331 = value783;
    var subs__ = condSubs331;
    subs__.unsubscribe();
    node1344.empty();
    if(value783) {
      
      var node1345 = $("<div>");
      node1345.attr('id', "hello");
      node1345.attr('style', "height: 2.9em;");
      
      node1344.append(node1345);
      
      
    } else {
      
    }
  };
  renderCond331();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond331();
  }));
  
  callback(root9156); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9158 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1312 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1312.get() !== null) {
    sp.attr('class', ref1312.get());
    subs__.addSub(ref1312.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1312.rebind());
  
  var val598 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val598 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val598));
  }
  
  var val599 = function(event, callback) {
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
  if(val599 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val599));
  }
  
  var val600 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after162(result__) {
                    var tmp7803 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after162);if(result__ !== undefined) after162(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val600 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val600));
  }
  
  var val601 = function(event, callback) {
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
  if(val601 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val601));
  }
  
  var ref1313 = text;
  sp.text(""+ref1313.get());
  var ignore245 = false;
  subs__.addSub(ref1313.addEventListener('change', function(_, ref, val) {
    if(ignore245) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1313.rebind());
  
  
  root9158.append(sp);
  callback(root9158); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9159 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7907 = $("<span>");
  root9159.append(nodes7907);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9160 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9160); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7907;
    nodes7907 = node.contents();
    oldNodes.replaceWith(nodes7907);
  }));
  callback(root9159); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9161 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7908 = $("<span>");
  root9161.append(nodes7908);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9162 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9162); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7908;
    nodes7908 = node.contents();
    oldNodes.replaceWith(nodes7908);
  }));
  callback(root9161); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root9163 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1348 = $("<ul>");
  
  var ref1314 = mobl.ref(ui.groupStyle);
  if(ref1314.get() !== null) {
    node1348.attr('class', ref1314.get());
    subs__.addSub(ref1314.addEventListener('change', function(_, ref, val) {
      node1348.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1314.rebind());
  
  var nodes7909 = $("<span>");
  node1348.append(nodes7909);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl516();
  }));
  
  function renderControl516() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7909;
      nodes7909 = node.contents();
      oldNodes.replaceWith(nodes7909);
    }));
  }
  renderControl516();
  root9163.append(node1348);
  callback(root9163); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root9165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1349 = $("<img>");
  
  var ref1315 = url;
  if(ref1315.get() !== null) {
    node1349.attr('src', ref1315.get());
    subs__.addSub(ref1315.addEventListener('change', function(_, ref, val) {
      node1349.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1315.rebind());
  
  var ref1316 = width;
  if(ref1316.get() !== null) {
    node1349.attr('width', ref1316.get());
    subs__.addSub(ref1316.addEventListener('change', function(_, ref, val) {
      node1349.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1316.rebind());
  
  var ref1317 = height;
  if(ref1317.get() !== null) {
    node1349.attr('height', ref1317.get());
    subs__.addSub(ref1317.addEventListener('change', function(_, ref, val) {
      node1349.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1317.rebind());
  
  var ref1318 = style;
  if(ref1318.get() !== null) {
    node1349.attr('class', ref1318.get());
    subs__.addSub(ref1318.addEventListener('change', function(_, ref, val) {
      node1349.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1318.rebind());
  
  var val602 = onclick.get();
  if(val602 !== null) {
    subs__.addSub(mobl.domBind(node1349, 'tap', val602));
  }
  
  var ref1319 = valign;
  if(ref1319.get() !== null) {
    node1349.attr('valign', ref1319.get());
    subs__.addSub(ref1319.addEventListener('change', function(_, ref, val) {
      node1349.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1319.rebind());
  
  var ref1320 = align;
  if(ref1320.get() !== null) {
    node1349.attr('align', ref1320.get());
    subs__.addSub(ref1320.addEventListener('change', function(_, ref, val) {
      node1349.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1320.rebind());
  
  root9165.append(node1349);
  callback(root9165); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root9166 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1321 = mobl.ref(ui.itemStyle);
  if(ref1321.get() !== null) {
    el.attr('class', ref1321.get());
    subs__.addSub(ref1321.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1321.rebind());
  
  var ref1322 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1322.get() !== null) {
    el.attr('class', ref1322.get());
    subs__.addSub(ref1322.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1322.rebind());
  
  var val603 = onswipe.get();
  if(val603 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val603));
  }
  
  var val604 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp7804 = result__;
                                           function after163(result__) {
                                             var tmp7805 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after163);if(result__ !== undefined) after163(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp7806 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val604 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val604));
  }
  
  var nodes7910 = $("<span>");
  el.append(nodes7910);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl517();
  }));
  
  function renderControl517() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9167); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7910;
      nodes7910 = node.contents();
      oldNodes.replaceWith(nodes7910);
    }));
  }
  renderControl517();
  root9166.append(el);
  callback(root9166); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root9168 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1350 = $("<input>");
  node1350.attr('type', "checkbox");
  
  var ref1324 = b;
  node1350.attr('checked', !!ref1324.get());
  subs__.addSub(ref1324.addEventListener('change', function(_, ref, val) {
    if(ref === ref1324) node1350.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1350, 'change', function() {
    b.set(!!node1350.attr('checked'));
  }));
  
  var val606 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val606 !== null) {
    subs__.addSub(mobl.domBind(node1350, 'tap', val606));
  }
  
  var val607 = onchange.get();
  if(val607 !== null) {
    subs__.addSub(mobl.domBind(node1350, 'change', val607));
  }
  
  root9168.append(node1350);
  
  root9168.append(" ");
  
  var node1351 = $("<span>");
  
  var ref1323 = label;
  node1351.text(""+ref1323.get());
  var ignore246 = false;
  subs__.addSub(ref1323.addEventListener('change', function(_, ref, val) {
    if(ignore246) return;
    node1351.text(""+val);
  }));
  subs__.addSub(ref1323.rebind());
  
  
  var val605 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after164(result__) {
                    var tmp7807 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after164);if(result__ !== undefined) after164(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val605 !== null) {
    subs__.addSub(mobl.domBind(node1351, 'tap', val605));
  }
  
  root9168.append(node1351);
  callback(root9168); return subs__;
  
  
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
  var root9169 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1352 = $("<span>");
  root9169.append(node1352);
  var condSubs332 = new mobl.CompSubscription();
  subs__.addSub(condSubs332);
  var oldValue332;
  var renderCond332 = function() {
    var value784 = label.get();
    if(oldValue332 === value784) return;
    oldValue332 = value784;
    var subs__ = condSubs332;
    subs__.unsubscribe();
    node1352.empty();
    if(value784) {
      var nodes7911 = $("<span>");
      node1352.append(nodes7911);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9170 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9170); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7911;
        nodes7911 = node.contents();
        oldNodes.replaceWith(nodes7911);
      }));
      
      
    } else {
      
    }
  };
  renderCond332();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond332();
  }));
  
  
  var node1353 = $("<span>");
  root9169.append(node1353);
  var condSubs333 = new mobl.CompSubscription();
  subs__.addSub(condSubs333);
  var oldValue333;
  var renderCond333 = function() {
    var value785 = validator.get();
    if(oldValue333 === value785) return;
    oldValue333 = value785;
    var subs__ = condSubs333;
    subs__.unsubscribe();
    node1353.empty();
    if(value785) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after168(result__) {
        var tmp7808 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp7809 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1354 = $("<input>");
        
        var ref1325 = inputType;
        if(ref1325.get() !== null) {
          node1354.attr('type', ref1325.get());
          subs__.addSub(ref1325.addEventListener('change', function(_, ref, val) {
            node1354.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1325.rebind());
        
        var ref1326 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1326.get() !== null) {
          node1354.attr('class', ref1326.get());
          subs__.addSub(ref1326.addEventListener('change', function(_, ref, val) {
            node1354.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1354.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1354.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1354.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1326.rebind());
        
        var ref1327 = placeholder;
        if(ref1327.get() !== null) {
          node1354.attr('placeholder', ref1327.get());
          subs__.addSub(ref1327.addEventListener('change', function(_, ref, val) {
            node1354.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1327.rebind());
        
        var ref1328 = temp;
        node1354.val(""+ref1328.get());
        var ignore247 = false;
        subs__.addSub(ref1328.addEventListener('change', function(_, ref, val) {
          if(ignore247) return;
          node1354.val(""+val);
        }));
        subs__.addSub(ref1328.rebind());
        
        subs__.addSub(mobl.domBind(node1354, 'keyup change', function() {
          ignore247 = true;
          temp.set(mobl.stringTomobl__String(node1354.val()));
          ignore247 = false;
        }));
        
        
        var val608 = onchange.get();
        if(val608 !== null) {
          subs__.addSub(mobl.domBind(node1354, 'change', val608));
        }
        
        var val609 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after165(result__) {
                          var tmp7810 = result__;
                          function after166(result__) {
                            var tmp7811 = result__;
                            var result__ = tmp7811;
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
                          var result__ = validator.get()(temp.get(), after166);if(result__ !== undefined) after166(result__);
                        }
                        var result__ = onkeyup.get()(event, after165);if(result__ !== undefined) after165(result__);
                      } else {
                        {
                          function after167(result__) {
                            var tmp7811 = result__;
                            var result__ = tmp7811;
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
                          var result__ = validator.get()(temp.get(), after167);if(result__ !== undefined) after167(result__);
                        }
                      }
                    };
        if(val609 !== null) {
          subs__.addSub(mobl.domBind(node1354, 'keyup', val609));
        }
        
        var val610 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val610 !== null) {
          subs__.addSub(mobl.domBind(node1354, 'blur', val610));
        }
        
        node1353.append(node1354);
        var nodes7912 = $("<span>");
        node1353.append(nodes7912);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root9171 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9171); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7912;
          nodes7912 = node.contents();
          oldNodes.replaceWith(nodes7912);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after168);if(result__ !== undefined) after168(result__);
    } else {
      
      var node1355 = $("<input>");
      
      var ref1329 = inputType;
      if(ref1329.get() !== null) {
        node1355.attr('type', ref1329.get());
        subs__.addSub(ref1329.addEventListener('change', function(_, ref, val) {
          node1355.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1329.rebind());
      
      var ref1330 = style;
      if(ref1330.get() !== null) {
        node1355.attr('class', ref1330.get());
        subs__.addSub(ref1330.addEventListener('change', function(_, ref, val) {
          node1355.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1330.rebind());
      
      var ref1331 = placeholder;
      if(ref1331.get() !== null) {
        node1355.attr('placeholder', ref1331.get());
        subs__.addSub(ref1331.addEventListener('change', function(_, ref, val) {
          node1355.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1331.rebind());
      
      var ref1332 = s;
      node1355.val(""+ref1332.get());
      var ignore248 = false;
      subs__.addSub(ref1332.addEventListener('change', function(_, ref, val) {
        if(ignore248) return;
        node1355.val(""+val);
      }));
      subs__.addSub(ref1332.rebind());
      
      subs__.addSub(mobl.domBind(node1355, 'keyup change', function() {
        ignore248 = true;
        s.set(mobl.stringTomobl__String(node1355.val()));
        ignore248 = false;
      }));
      
      
      var val611 = onchange.get();
      if(val611 !== null) {
        subs__.addSub(mobl.domBind(node1355, 'change', val611));
      }
      
      var val612 = onkeyup.get();
      if(val612 !== null) {
        subs__.addSub(mobl.domBind(node1355, 'keyup', val612));
      }
      
      var val613 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val613 !== null) {
        subs__.addSub(mobl.domBind(node1355, 'blur', val613));
      }
      
      node1353.append(node1355);
      
      
    }
  };
  renderCond333();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond333();
  }));
  
  callback(root9169); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9172 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7913 = $("<span>");
  root9172.append(nodes7913);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9173 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9173); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7913;
    nodes7913 = node.contents();
    oldNodes.replaceWith(nodes7913);
  }));
  callback(root9172); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9174 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7914 = $("<span>");
  root9174.append(nodes7914);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9175 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9175); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7914;
    nodes7914 = node.contents();
    oldNodes.replaceWith(nodes7914);
  }));
  callback(root9174); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root9176 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1356 = $("<span>");
  root9176.append(node1356);
  var condSubs334 = new mobl.CompSubscription();
  subs__.addSub(condSubs334);
  var oldValue334;
  var renderCond334 = function() {
    var value786 = label.get();
    if(oldValue334 === value786) return;
    oldValue334 = value786;
    var subs__ = condSubs334;
    subs__.unsubscribe();
    node1356.empty();
    if(value786) {
      var nodes7915 = $("<span>");
      node1356.append(nodes7915);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9177 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9177); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7915;
        nodes7915 = node.contents();
        oldNodes.replaceWith(nodes7915);
      }));
      
      
    } else {
      
    }
  };
  renderCond334();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond334();
  }));
  
  
  var node1357 = $("<input>");
  node1357.attr('type', "range");
  
  var ref1333 = n;
  node1357.val(""+ref1333.get());
  var ignore249 = false;
  subs__.addSub(ref1333.addEventListener('change', function(_, ref, val) {
    if(ignore249) return;
    node1357.val(""+val);
  }));
  subs__.addSub(ref1333.rebind());
  
  subs__.addSub(mobl.domBind(node1357, 'keyup change', function() {
    ignore249 = true;
    n.set(mobl.stringTomobl__Num(node1357.val()));
    ignore249 = false;
  }));
  
  
  var ref1334 = min;
  if(ref1334.get() !== null) {
    node1357.attr('min', ref1334.get());
    subs__.addSub(ref1334.addEventListener('change', function(_, ref, val) {
      node1357.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1334.rebind());
  
  var ref1335 = max;
  if(ref1335.get() !== null) {
    node1357.attr('max', ref1335.get());
    subs__.addSub(ref1335.addEventListener('change', function(_, ref, val) {
      node1357.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1335.rebind());
  
  var ref1336 = step;
  if(ref1336.get() !== null) {
    node1357.attr('step', ref1336.get());
    subs__.addSub(ref1336.addEventListener('change', function(_, ref, val) {
      node1357.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1336.rebind());
  node1357.attr('style', "width: 99%;");
  
  var val614 = onchange.get();
  if(val614 !== null) {
    subs__.addSub(mobl.domBind(node1357, 'change', val614));
  }
  
  var val615 = onkeyup.get();
  if(val615 !== null) {
    subs__.addSub(mobl.domBind(node1357, 'keyup', val615));
  }
  
  var ref1337 = placeholder;
  if(ref1337.get() !== null) {
    node1357.attr('placeholder', ref1337.get());
    subs__.addSub(ref1337.addEventListener('change', function(_, ref, val) {
      node1357.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1337.rebind());
  
  root9176.append(node1357);
  callback(root9176); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9178 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after169(result__) {
      var tmp7812 = result__;
      var result__ = tmp7812;
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
    var result__ = validator.get()(n2, after169);if(result__ !== undefined) after169(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7916 = $("<span>");
  root9178.append(nodes7916);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9179 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9179); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7916;
    nodes7916 = node.contents();
    oldNodes.replaceWith(nodes7916);
  }));
  callback(root9178); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root9180 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1358 = $("<span>");
  root9180.append(node1358);
  var condSubs335 = new mobl.CompSubscription();
  subs__.addSub(condSubs335);
  var oldValue335;
  var renderCond335 = function() {
    var value787 = label.get();
    if(oldValue335 === value787) return;
    oldValue335 = value787;
    var subs__ = condSubs335;
    subs__.unsubscribe();
    node1358.empty();
    if(value787) {
      
      var node1359 = $("<span>");
      node1359.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1341 = label;
      node1359.text(""+ref1341.get());
      var ignore251 = false;
      subs__.addSub(ref1341.addEventListener('change', function(_, ref, val) {
        if(ignore251) return;
        node1359.text(""+val);
      }));
      subs__.addSub(ref1341.rebind());
      
      
      node1358.append(node1359);
      
      var node1360 = $("<span>");
      node1360.attr('style', "float: left");
      
      
      var node1361 = $("<input>");
      node1361.attr('type', "password");
      
      var ref1338 = style;
      if(ref1338.get() !== null) {
        node1361.attr('class', ref1338.get());
        subs__.addSub(ref1338.addEventListener('change', function(_, ref, val) {
          node1361.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1338.rebind());
      
      var ref1339 = placeholder;
      if(ref1339.get() !== null) {
        node1361.attr('placeholder', ref1339.get());
        subs__.addSub(ref1339.addEventListener('change', function(_, ref, val) {
          node1361.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1339.rebind());
      
      var ref1340 = s;
      node1361.val(""+ref1340.get());
      var ignore250 = false;
      subs__.addSub(ref1340.addEventListener('change', function(_, ref, val) {
        if(ignore250) return;
        node1361.val(""+val);
      }));
      subs__.addSub(ref1340.rebind());
      
      subs__.addSub(mobl.domBind(node1361, 'keyup change', function() {
        ignore250 = true;
        s.set(mobl.stringTomobl__String(node1361.val()));
        ignore250 = false;
      }));
      
      
      var val616 = onchange.get();
      if(val616 !== null) {
        subs__.addSub(mobl.domBind(node1361, 'change', val616));
      }
      
      var val617 = onkeyup.get();
      if(val617 !== null) {
        subs__.addSub(mobl.domBind(node1361, 'keyup', val617));
      }
      
      var val618 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val618 !== null) {
        subs__.addSub(mobl.domBind(node1361, 'blur', val618));
      }
      
      node1360.append(node1361);
      node1358.append(node1360);
      
      
      
      
    } else {
      
      var node1362 = $("<input>");
      node1362.attr('type', "password");
      
      var ref1342 = style;
      if(ref1342.get() !== null) {
        node1362.attr('class', ref1342.get());
        subs__.addSub(ref1342.addEventListener('change', function(_, ref, val) {
          node1362.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1342.rebind());
      
      var ref1343 = placeholder;
      if(ref1343.get() !== null) {
        node1362.attr('placeholder', ref1343.get());
        subs__.addSub(ref1343.addEventListener('change', function(_, ref, val) {
          node1362.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1343.rebind());
      
      var ref1344 = s;
      node1362.val(""+ref1344.get());
      var ignore252 = false;
      subs__.addSub(ref1344.addEventListener('change', function(_, ref, val) {
        if(ignore252) return;
        node1362.val(""+val);
      }));
      subs__.addSub(ref1344.rebind());
      
      subs__.addSub(mobl.domBind(node1362, 'keyup change', function() {
        ignore252 = true;
        s.set(mobl.stringTomobl__String(node1362.val()));
        ignore252 = false;
      }));
      
      
      var val619 = onchange.get();
      if(val619 !== null) {
        subs__.addSub(mobl.domBind(node1362, 'change', val619));
      }
      
      var val620 = onkeyup.get();
      if(val620 !== null) {
        subs__.addSub(mobl.domBind(node1362, 'keyup', val620));
      }
      
      var val621 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val621 !== null) {
        subs__.addSub(mobl.domBind(node1362, 'blur', val621));
      }
      
      node1358.append(node1362);
      
      
    }
  };
  renderCond335();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond335();
  }));
  
  callback(root9180); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root9181 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1349 = style;
  if(ref1349.get() !== null) {
    sel.attr('class', ref1349.get());
    subs__.addSub(ref1349.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1349.rebind());
  
  var val622 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after170(result__) {
                    var tmp7814 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after170);if(result__ !== undefined) after170(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val622 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val622));
  }
  
  
  var node1363 = mobl.loadingSpan();
  sel.append(node1363);
  var list198;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList198 = function() {
    var subs__ = listSubs__;
    list198 = options.get();
    list198.list(function(results198) {
      node1363.empty();
      for(var i2007 = 0; i2007 < results198.length; i2007++) {
        (function() {
          var iternode198 = $("<span>");
          node1363.append(iternode198);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results198), i2007), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results198), i2007), "_2");
          
          var node1364 = $("<option>");
          
          var ref1345 = optionDescription;
          node1364.text(""+ref1345.get());
          var ignore253 = false;
          subs__.addSub(ref1345.addEventListener('change', function(_, ref, val) {
            if(ignore253) return;
            node1364.text(""+val);
          }));
          subs__.addSub(ref1345.rebind());
          
          
          var ref1346 = optionStyle;
          if(ref1346.get() !== null) {
            node1364.attr('class', ref1346.get());
            subs__.addSub(ref1346.addEventListener('change', function(_, ref, val) {
              node1364.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1346.rebind());
          
          var ref1347 = optionValue;
          if(ref1347.get() !== null) {
            node1364.attr('value', ref1347.get());
            subs__.addSub(ref1347.addEventListener('change', function(_, ref, val) {
              node1364.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1347.rebind());
          
          var ref1348 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1348.get() !== null) {
            node1364.attr('selected', ref1348.get());
            subs__.addSub(ref1348.addEventListener('change', function(_, ref, val) {
              node1364.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1364.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1364.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1348.rebind());
          
          iternode198.append(node1364);
          
          var oldNodes = iternode198;
          iternode198 = iternode198.contents();
          oldNodes.replaceWith(iternode198);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list198.addEventListener('change', function() { listSubs__.unsubscribe(); renderList198(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList198(true); }));
    });
  };
  renderList198();
  
  root9181.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root9181); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root9182 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7917 = $("<span>");
    root9182.append(nodes7917);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1365 = mobl.loadingSpan();
      root9183.append(node1365);
      var list199;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList199 = function() {
        var subs__ = listSubs__;
        list199 = tabs.get();
        list199.list(function(results199) {
          node1365.empty();
          for(var i2008 = 0; i2008 < results199.length; i2008++) {
            (function() {
              var iternode199 = $("<span>");
              node1365.append(iternode199);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results199), i2008), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results199), i2008), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results199), i2008), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp7769 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp7769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp7769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp7768 = mobl.ref(result__);
              
              var nodes7918 = $("<span>");
              iternode199.append(nodes7918);
              subs__.addSub((mobl.span)(tmp7769, mobl.ref(null), tmp7768, mobl.ref(null), function(_, callback) {
                var root9184 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7919 = $("<span>");
                root9184.append(nodes7919);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root9185 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9185); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7919;
                  nodes7919 = node.contents();
                  oldNodes.replaceWith(nodes7919);
                }));
                callback(root9184); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7918;
                nodes7918 = node.contents();
                oldNodes.replaceWith(nodes7918);
              }));
              
              var oldNodes = iternode199;
              iternode199 = iternode199.contents();
              oldNodes.replaceWith(iternode199);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list199.addEventListener('change', function() { listSubs__.unsubscribe(); renderList199(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList199(true); }));
        });
      };
      renderList199();
      
      callback(root9183); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7917;
      nodes7917 = node.contents();
      oldNodes.replaceWith(nodes7917);
    }));
    
    var node1366 = mobl.loadingSpan();
    root9182.append(node1366);
    var list200;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList200 = function() {
      var subs__ = listSubs__;
      list200 = tabs.get();
      list200.list(function(results200) {
        node1366.empty();
        for(var i2009 = 0; i2009 < results200.length; i2009++) {
          (function() {
            var iternode200 = $("<span>");
            node1366.append(iternode200);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results200), i2009), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results200), i2009), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results200), i2009), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp7770 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp7770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp7770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp7770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp7770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7920 = $("<span>");
            iternode200.append(nodes7920);
            subs__.addSub((mobl.block)(tmp7770, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9186 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7921 = $("<span>");
              root9186.append(nodes7921);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root9187 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7922 = $("<span>");
                root9187.append(nodes7922);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl518();
                }));
                
                function renderControl518() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root9188 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9188); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7922;
                    nodes7922 = node.contents();
                    oldNodes.replaceWith(nodes7922);
                  }));
                }
                renderControl518();
                callback(root9187); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7921;
                nodes7921 = node.contents();
                oldNodes.replaceWith(nodes7921);
              }));
              callback(root9186); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7920;
              nodes7920 = node.contents();
              oldNodes.replaceWith(nodes7920);
            }));
            
            var oldNodes = iternode200;
            iternode200 = iternode200.contents();
            oldNodes.replaceWith(iternode200);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list200.addEventListener('change', function() { listSubs__.unsubscribe(); renderList200(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList200(true); }));
      });
    };
    renderList200();
    
    callback(root9182); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7917 = $("<span>");
      root9182.append(nodes7917);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9183 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1365 = mobl.loadingSpan();
        root9183.append(node1365);
        var list199;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList199 = function() {
          var subs__ = listSubs__;
          list199 = tabs.get();
          list199.list(function(results199) {
            node1365.empty();
            for(var i2008 = 0; i2008 < results199.length; i2008++) {
              (function() {
                var iternode199 = $("<span>");
                node1365.append(iternode199);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results199), i2008), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results199), i2008), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results199), i2008), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp7769 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp7769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp7769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp7769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp7769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7768 = mobl.ref(result__);
                
                var nodes7918 = $("<span>");
                iternode199.append(nodes7918);
                subs__.addSub((mobl.span)(tmp7769, mobl.ref(null), tmp7768, mobl.ref(null), function(_, callback) {
                  var root9184 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7919 = $("<span>");
                  root9184.append(nodes7919);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root9185 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9185); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7919;
                    nodes7919 = node.contents();
                    oldNodes.replaceWith(nodes7919);
                  }));
                  callback(root9184); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7918;
                  nodes7918 = node.contents();
                  oldNodes.replaceWith(nodes7918);
                }));
                
                var oldNodes = iternode199;
                iternode199 = iternode199.contents();
                oldNodes.replaceWith(iternode199);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list199.addEventListener('change', function() { listSubs__.unsubscribe(); renderList199(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList199(true); }));
          });
        };
        renderList199();
        
        callback(root9183); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7917;
        nodes7917 = node.contents();
        oldNodes.replaceWith(nodes7917);
      }));
      
      var node1366 = mobl.loadingSpan();
      root9182.append(node1366);
      var list200;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList200 = function() {
        var subs__ = listSubs__;
        list200 = tabs.get();
        list200.list(function(results200) {
          node1366.empty();
          for(var i2009 = 0; i2009 < results200.length; i2009++) {
            (function() {
              var iternode200 = $("<span>");
              node1366.append(iternode200);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results200), i2009), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results200), i2009), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results200), i2009), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp7770 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp7770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp7770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7920 = $("<span>");
              iternode200.append(nodes7920);
              subs__.addSub((mobl.block)(tmp7770, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9186 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7921 = $("<span>");
                root9186.append(nodes7921);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root9187 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7922 = $("<span>");
                  root9187.append(nodes7922);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl518();
                  }));
                  
                  function renderControl518() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root9188 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9188); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7922;
                      nodes7922 = node.contents();
                      oldNodes.replaceWith(nodes7922);
                    }));
                  }
                  renderControl518();
                  callback(root9187); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7921;
                  nodes7921 = node.contents();
                  oldNodes.replaceWith(nodes7921);
                }));
                callback(root9186); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7920;
                nodes7920 = node.contents();
                oldNodes.replaceWith(nodes7920);
              }));
              
              var oldNodes = iternode200;
              iternode200 = iternode200.contents();
              oldNodes.replaceWith(iternode200);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list200.addEventListener('change', function() { listSubs__.unsubscribe(); renderList200(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList200(true); }));
        });
      };
      renderList200();
      
      callback(root9182); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root9189 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1367 = $("<div>");
  
  var ref1353 = mobl.ref(ui.searchboxStyle);
  if(ref1353.get() !== null) {
    node1367.attr('class', ref1353.get());
    subs__.addSub(ref1353.addEventListener('change', function(_, ref, val) {
      node1367.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1353.rebind());
  
  
  var node1368 = $("<input>");
  node1368.attr('type', "search");
  
  var ref1350 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1350.get() !== null) {
    node1368.attr('class', ref1350.get());
    subs__.addSub(ref1350.addEventListener('change', function(_, ref, val) {
      node1368.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1350.rebind());
  
  var ref1351 = placeholder;
  if(ref1351.get() !== null) {
    node1368.attr('placeholder', ref1351.get());
    subs__.addSub(ref1351.addEventListener('change', function(_, ref, val) {
      node1368.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1351.rebind());
  
  var ref1352 = s;
  node1368.val(""+ref1352.get());
  var ignore254 = false;
  subs__.addSub(ref1352.addEventListener('change', function(_, ref, val) {
    if(ignore254) return;
    node1368.val(""+val);
  }));
  subs__.addSub(ref1352.rebind());
  
  subs__.addSub(mobl.domBind(node1368, 'keyup change', function() {
    ignore254 = true;
    s.set(mobl.stringTomobl__String(node1368.val()));
    ignore254 = false;
  }));
  
  
  var val623 = onsearch.get();
  if(val623 !== null) {
    subs__.addSub(mobl.domBind(node1368, 'change', val623));
  }
  
  var val624 = onkeyup.get();
  if(val624 !== null) {
    subs__.addSub(mobl.domBind(node1368, 'keyup', val624));
  }
  node1368.attr('autocorrect', false);
  node1368.attr('autocapitalize', false);
  node1368.attr('autocomplete', false);
  
  node1367.append(node1368);
  root9189.append(node1367);
  callback(root9189); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root9190 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1354 = mobl.ref(ui.contextMenuStyle);
  if(ref1354.get() !== null) {
    menu.attr('class', ref1354.get());
    subs__.addSub(ref1354.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1354.rebind());
  
  var nodes7923 = $("<span>");
  menu.append(nodes7923);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl519();
  }));
  
  function renderControl519() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9191 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9191); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7923;
      nodes7923 = node.contents();
      oldNodes.replaceWith(nodes7923);
    }));
  }
  renderControl519();
  root9190.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val625 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp7817 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val625 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val625));
  }
  
  root9190.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root9190); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root9192 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7801 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7801.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1369 = $("<span>");
  root9192.append(node1369);
  var condSubs336 = new mobl.CompSubscription();
  subs__.addSub(condSubs336);
  var oldValue336;
  var renderCond336 = function() {
    var value788 = tmp7801.get();
    if(oldValue336 === value788) return;
    oldValue336 = value788;
    var subs__ = condSubs336;
    subs__.unsubscribe();
    node1369.empty();
    if(value788) {
      items.get().one(function(result__) {
        var tmp7818 = result__;
        var current = mobl.ref(result__);
        
        var node1370 = $("<div>");
        node1370.attr('width', "100%");
        
        
        var node1371 = $("<div>");
        node1371.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7926 = $("<span>");
        node1371.append(nodes7926);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9195 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1374 = mobl.loadingSpan();
          root9195.append(node1374);
          var list201;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList201 = function() {
            var subs__ = listSubs__;
            list201 = items.get();
            list201.list(function(results201) {
              node1374.empty();
              for(var i2010 = 0; i2010 < results201.length; i2010++) {
                (function() {
                  var iternode201 = $("<span>");
                  node1374.append(iternode201);
                  var it;
                  it = mobl.ref(mobl.ref(results201), i2010);
                  var result__ = it.get() == current.get();
                  var tmp7776 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7776.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7776.set(it.get() == current.get());
                  }));
                  
                  
                  var node1375 = $("<span>");
                  iternode201.append(node1375);
                  var condSubs338 = new mobl.CompSubscription();
                  subs__.addSub(condSubs338);
                  var oldValue338;
                  var renderCond338 = function() {
                    var value790 = tmp7776.get();
                    if(oldValue338 === value790) return;
                    oldValue338 = value790;
                    var subs__ = condSubs338;
                    subs__.unsubscribe();
                    node1375.empty();
                    if(value790) {
                      var nodes7927 = $("<span>");
                      node1375.append(nodes7927);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9196 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7928 = $("<span>");
                        root9196.append(nodes7928);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl521();
                        }));
                        
                        function renderControl521() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9197 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9197); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7928;
                            nodes7928 = node.contents();
                            oldNodes.replaceWith(nodes7928);
                          }));
                        }
                        renderControl521();
                        callback(root9196); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7927;
                        nodes7927 = node.contents();
                        oldNodes.replaceWith(nodes7927);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7775 = mobl.ref(result__);
                      
                      var nodes7929 = $("<span>");
                      node1375.append(nodes7929);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7775, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9198 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7930 = $("<span>");
                        root9198.append(nodes7930);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl522();
                        }));
                        
                        function renderControl522() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9199 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9199); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7930;
                            nodes7930 = node.contents();
                            oldNodes.replaceWith(nodes7930);
                          }));
                        }
                        renderControl522();
                        callback(root9198); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7929;
                        nodes7929 = node.contents();
                        oldNodes.replaceWith(nodes7929);
                      }));
                      
                      
                    }
                  };
                  renderCond338();
                  subs__.addSub(tmp7776.addEventListener('change', function() {
                    renderCond338();
                  }));
                  
                  
                  var oldNodes = iternode201;
                  iternode201 = iternode201.contents();
                  oldNodes.replaceWith(iternode201);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list201.addEventListener('change', function() { listSubs__.unsubscribe(); renderList201(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList201(true); }));
            });
          };
          renderList201();
          
          callback(root9195); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7926;
          nodes7926 = node.contents();
          oldNodes.replaceWith(nodes7926);
        }));
        node1370.append(node1371);
        
        var node1372 = $("<div>");
        node1372.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1373 = $("<span>");
        node1372.append(node1373);
        var condSubs337 = new mobl.CompSubscription();
        subs__.addSub(condSubs337);
        var oldValue337;
        var renderCond337 = function() {
          var value789 = current.get();
          if(oldValue337 === value789) return;
          oldValue337 = value789;
          var subs__ = condSubs337;
          subs__.unsubscribe();
          node1373.empty();
          if(value789) {
            var nodes7924 = $("<span>");
            node1373.append(nodes7924);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl520();
            }));
            
            function renderControl520() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9193 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9193); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7924;
                nodes7924 = node.contents();
                oldNodes.replaceWith(nodes7924);
              }));
            }
            renderControl520();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp7777 = mobl.ref(result__);
            
            var nodes7925 = $("<span>");
            node1373.append(nodes7925);
            subs__.addSub((mobl.label)(tmp7777, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9194 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9194); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7925;
              nodes7925 = node.contents();
              oldNodes.replaceWith(nodes7925);
            }));
            
            
          }
        };
        renderCond337();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond337();
        }));
        
        node1370.append(node1372);
        node1369.append(node1370);
        
        
        
        
        
        
      });
    } else {
      var nodes7931 = $("<span>");
      node1369.append(nodes7931);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9200 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1376 = mobl.loadingSpan();
        root9200.append(node1376);
        var list202;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList202 = function() {
          var subs__ = listSubs__;
          list202 = items.get();
          list202.list(function(results202) {
            node1376.empty();
            for(var i2011 = 0; i2011 < results202.length; i2011++) {
              (function() {
                var iternode202 = $("<span>");
                node1376.append(iternode202);
                var it;
                it = mobl.ref(mobl.ref(results202), i2011);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7819 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7771 = mobl.ref(result__);
                
                var nodes7932 = $("<span>");
                iternode202.append(nodes7932);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7771, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9201 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7933 = $("<span>");
                  root9201.append(nodes7933);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl523();
                  }));
                  
                  function renderControl523() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root9202 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9202); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7933;
                      nodes7933 = node.contents();
                      oldNodes.replaceWith(nodes7933);
                    }));
                  }
                  renderControl523();
                  callback(root9201); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7932;
                  nodes7932 = node.contents();
                  oldNodes.replaceWith(nodes7932);
                }));
                
                var oldNodes = iternode202;
                iternode202 = iternode202.contents();
                oldNodes.replaceWith(iternode202);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list202.addEventListener('change', function() { listSubs__.unsubscribe(); renderList202(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList202(true); }));
          });
        };
        renderList202();
        
        callback(root9200); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7931;
        nodes7931 = node.contents();
        oldNodes.replaceWith(nodes7931);
      }));
      
      
    }
  };
  renderCond336();
  subs__.addSub(tmp7801.addEventListener('change', function() {
    renderCond336();
  }));
  
  callback(root9192); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9203 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7774 = mobl.ref(result__);
  
  var nodes7934 = $("<span>");
  root9203.append(nodes7934);
  subs__.addSub((ui.header)(tmp7774, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9204 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7773 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7772 = mobl.ref(result__);
    
    var nodes7935 = $("<span>");
    root9204.append(nodes7935);
    subs__.addSub((ui.backButton)(tmp7772, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7773, function(_, callback) {
      var root9205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9205); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7935;
      nodes7935 = node.contents();
      oldNodes.replaceWith(nodes7935);
    }));
    callback(root9204); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7934;
    nodes7934 = node.contents();
    oldNodes.replaceWith(nodes7934);
  }));
  var nodes7936 = $("<span>");
  root9203.append(nodes7936);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl524();
  }));
  
  function renderControl524() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9206 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9206); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7936;
      nodes7936 = node.contents();
      oldNodes.replaceWith(nodes7936);
    }));
  }
  renderControl524();
  callback(root9203); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root9207 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7937 = $("<span>");
  root9207.append(nodes7937);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9208 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1377 = mobl.loadingSpan();
    root9208.append(node1377);
    var list203;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList203 = function() {
      var subs__ = listSubs__;
      list203 = coll.get();
      list203.list(function(results203) {
        node1377.empty();
        for(var i2012 = 0; i2012 < results203.length; i2012++) {
          (function() {
            var iternode203 = $("<span>");
            node1377.append(iternode203);
            var it;
            it = mobl.ref(mobl.ref(results203), i2012);
            var result__ = it.get() == selected.get();
            var tmp7779 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp7779.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp7779.set(it.get() == selected.get());
            }));
            
            
            var node1378 = $("<span>");
            iternode203.append(node1378);
            var condSubs339 = new mobl.CompSubscription();
            subs__.addSub(condSubs339);
            var oldValue339;
            var renderCond339 = function() {
              var value791 = tmp7779.get();
              if(oldValue339 === value791) return;
              oldValue339 = value791;
              var subs__ = condSubs339;
              subs__.unsubscribe();
              node1378.empty();
              if(value791) {
                var nodes7938 = $("<span>");
                node1378.append(nodes7938);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9209 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7939 = $("<span>");
                  root9209.append(nodes7939);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl525();
                  }));
                  
                  function renderControl525() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root9210 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9210); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7939;
                      nodes7939 = node.contents();
                      oldNodes.replaceWith(nodes7939);
                    }));
                  }
                  renderControl525();
                  callback(root9209); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7938;
                  nodes7938 = node.contents();
                  oldNodes.replaceWith(nodes7938);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7778 = mobl.ref(result__);
                
                var nodes7940 = $("<span>");
                node1378.append(nodes7940);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7778, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root9211 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7941 = $("<span>");
                  root9211.append(nodes7941);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl526();
                  }));
                  
                  function renderControl526() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root9212 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9212); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7941;
                      nodes7941 = node.contents();
                      oldNodes.replaceWith(nodes7941);
                    }));
                  }
                  renderControl526();
                  callback(root9211); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7940;
                  nodes7940 = node.contents();
                  oldNodes.replaceWith(nodes7940);
                }));
                
                
              }
            };
            renderCond339();
            subs__.addSub(tmp7779.addEventListener('change', function() {
              renderCond339();
            }));
            
            
            var oldNodes = iternode203;
            iternode203 = iternode203.contents();
            oldNodes.replaceWith(iternode203);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list203.addEventListener('change', function() { listSubs__.unsubscribe(); renderList203(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList203(true); }));
      });
    };
    renderList203();
    
    callback(root9208); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7937;
    nodes7937 = node.contents();
    oldNodes.replaceWith(nodes7937);
  }));
  callback(root9207); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root9213 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp7820 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp7780 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp7780.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp7780.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp7780.set(coll.get().limit(n.get()));
    }));
    
    
    var node1379 = mobl.loadingSpan();
    root9213.append(node1379);
    var list204;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList204 = function() {
      var subs__ = listSubs__;
      list204 = tmp7780.get();
      list204.list(function(results204) {
        node1379.empty();
        for(var i2013 = 0; i2013 < results204.length; i2013++) {
          (function() {
            var iternode204 = $("<span>");
            node1379.append(iternode204);
            var it;
            it = mobl.ref(mobl.ref(results204), i2013);
            var nodes7942 = $("<span>");
            iternode204.append(nodes7942);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl527();
            }));
            
            function renderControl527() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root9214 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9214); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7942;
                nodes7942 = node.contents();
                oldNodes.replaceWith(nodes7942);
              }));
            }
            renderControl527();
            
            var oldNodes = iternode204;
            iternode204 = iternode204.contents();
            oldNodes.replaceWith(iternode204);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list204.addEventListener('change', function() { listSubs__.unsubscribe(); renderList204(true); }));
        subs__.addSub(tmp7780.addEventListener('change', function() { listSubs__.unsubscribe(); renderList204(true); }));
      });
    };
    renderList204();
    
    var result__ = n.get() < total.get();
    var tmp7782 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp7782.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp7782.set(n.get() < total.get());
    }));
    
    
    var node1380 = $("<span>");
    root9213.append(node1380);
    var condSubs340 = new mobl.CompSubscription();
    subs__.addSub(condSubs340);
    var oldValue340;
    var renderCond340 = function() {
      var value792 = tmp7782.get();
      if(oldValue340 === value792) return;
      oldValue340 = value792;
      var subs__ = condSubs340;
      subs__.unsubscribe();
      node1380.empty();
      if(value792) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7781 = mobl.ref(result__);
        
        var nodes7943 = $("<span>");
        node1380.append(nodes7943);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp7781, mobl.ref(null), function(_, callback) {
          var root9215 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7944 = $("<span>");
          root9215.append(nodes7944);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root9216 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9216); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7944;
            nodes7944 = node.contents();
            oldNodes.replaceWith(nodes7944);
          }));
          callback(root9215); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7943;
          nodes7943 = node.contents();
          oldNodes.replaceWith(nodes7943);
        }));
        
        
      } else {
        
      }
    };
    renderCond340();
    subs__.addSub(tmp7782.addEventListener('change', function() {
      renderCond340();
    }));
    
    callback(root9213); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root9217 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7945 = $("<span>");
  root9217.append(nodes7945);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9218 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1381 = mobl.loadingSpan();
    root9218.append(node1381);
    var list205;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList205 = function() {
      var subs__ = listSubs__;
      list205 = items.get();
      list205.list(function(results205) {
        node1381.empty();
        for(var i2014 = 0; i2014 < results205.length; i2014++) {
          (function() {
            var iternode205 = $("<span>");
            node1381.append(iternode205);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results205), i2014), "_1");it = mobl.ref(mobl.ref(mobl.ref(results205), i2014), "_2");
            var nodes7946 = $("<span>");
            iternode205.append(nodes7946);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root9219 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7947 = $("<span>");
              root9219.append(nodes7947);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root9220 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9220); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7947;
                nodes7947 = node.contents();
                oldNodes.replaceWith(nodes7947);
              }));
              callback(root9219); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7946;
              nodes7946 = node.contents();
              oldNodes.replaceWith(nodes7946);
            }));
            
            var oldNodes = iternode205;
            iternode205 = iternode205.contents();
            oldNodes.replaceWith(iternode205);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list205.addEventListener('change', function() { listSubs__.unsubscribe(); renderList205(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList205(true); }));
      });
    };
    renderList205();
    
    callback(root9218); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7945;
    nodes7945 = node.contents();
    oldNodes.replaceWith(nodes7945);
  }));
  callback(root9217); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root9221 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll967) {
    coll967 = coll967.reverse();
    function processOne289() {
      var it;
      it = coll967.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll967.length > 0) processOne289(); else rest289();
      
    }
    function rest289() {
      var nodes7948 = $("<span>");
      root9221.append(nodes7948);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root9222 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7783 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7784 = mobl.ref(result__);
        
        var nodes7949 = $("<span>");
        root9222.append(nodes7949);
        subs__.addSub((ui.backButton)(tmp7784, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7783, function(_, callback) {
          var root9223 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9223); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7949;
          nodes7949 = node.contents();
          oldNodes.replaceWith(nodes7949);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll966) {
                           coll966 = coll966.reverse();
                           function processOne288() {
                             var checked;var it;
                             var tmp7822 = coll966.pop();
                             checked = tmp7822._1;it = tmp7822._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll966.length > 0) processOne288(); else rest288();
                               
                             } else {
                               {
                                 
                                 if(coll966.length > 0) processOne288(); else rest288();
                                 
                               }
                             }
                           }
                           function rest288() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll966.length > 0) processOne288(); else rest288();
                         });
                         
                       };
        var tmp7785 = mobl.ref(result__);
        
        var nodes7950 = $("<span>");
        root9222.append(nodes7950);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7785, function(_, callback) {
          var root9224 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9224); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7950;
          nodes7950 = node.contents();
          oldNodes.replaceWith(nodes7950);
        }));
        callback(root9222); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7948;
        nodes7948 = node.contents();
        oldNodes.replaceWith(nodes7948);
      }));
      var nodes7951 = $("<span>");
      root9221.append(nodes7951);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root9225 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9225); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7951;
        nodes7951 = node.contents();
        oldNodes.replaceWith(nodes7951);
      }));
      callback(root9221); return subs__;
      
      
    }
    if(coll967.length > 0) processOne289(); else rest289();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root9226 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7952 = $("<span>");
  root9226.append(nodes7952);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9227 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9227); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7952;
    nodes7952 = node.contents();
    oldNodes.replaceWith(nodes7952);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp7786 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp7786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp7786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp7786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp7786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp7786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7953 = $("<span>");
  root9226.append(nodes7953);
  subs__.addSub((ui.masterDetail)(tmp7786, masterItem, detailItem, function(_, callback) {
    var root9228 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9228); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7953;
    nodes7953 = node.contents();
    oldNodes.replaceWith(nodes7953);
  }));
  callback(root9226); return subs__;
  
  
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
  var root9229 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7954 = $("<span>");
  root9229.append(nodes7954);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9230 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1382 = mobl.loadingSpan();
    root9230.append(node1382);
    var list206;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList206 = function() {
      var subs__ = listSubs__;
      list206 = sections.get();
      list206.list(function(results206) {
        node1382.empty();
        for(var i2015 = 0; i2015 < results206.length; i2015++) {
          (function() {
            var iternode206 = $("<span>");
            node1382.append(iternode206);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results206), i2015), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results206), i2015), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp7788 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7788.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7788.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp7788.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp7788.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp7787 = mobl.ref(result__);
            
            var nodes7955 = $("<span>");
            iternode206.append(nodes7955);
            subs__.addSub((mobl.span)(tmp7788, mobl.ref(null), tmp7787, mobl.ref(null), function(_, callback) {
              var root9231 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7956 = $("<span>");
              root9231.append(nodes7956);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9232 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9232); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7956;
                nodes7956 = node.contents();
                oldNodes.replaceWith(nodes7956);
              }));
              callback(root9231); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7955;
              nodes7955 = node.contents();
              oldNodes.replaceWith(nodes7955);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp7789 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7789.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7789.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp7789.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp7789.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7957 = $("<span>");
            iternode206.append(nodes7957);
            subs__.addSub((mobl.block)(tmp7789, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9233 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7958 = $("<span>");
              root9233.append(nodes7958);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl528();
              }));
              
              function renderControl528() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root9234 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9234); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7958;
                  nodes7958 = node.contents();
                  oldNodes.replaceWith(nodes7958);
                }));
              }
              renderControl528();
              callback(root9233); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7957;
              nodes7957 = node.contents();
              oldNodes.replaceWith(nodes7957);
            }));
            
            var oldNodes = iternode206;
            iternode206 = iternode206.contents();
            oldNodes.replaceWith(iternode206);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list206.addEventListener('change', function() { listSubs__.unsubscribe(); renderList206(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList206(true); }));
      });
    };
    renderList206();
    
    callback(root9230); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7954;
    nodes7954 = node.contents();
    oldNodes.replaceWith(nodes7954);
  }));
  callback(root9229); return subs__;
  
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
  var root9235 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1383 = $("<table>");
  
  var ref1355 = style;
  if(ref1355.get() !== null) {
    node1383.attr('class', ref1355.get());
    subs__.addSub(ref1355.addEventListener('change', function(_, ref, val) {
      node1383.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1355.rebind());
  
  var nodes7959 = $("<span>");
  node1383.append(nodes7959);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl529();
  }));
  
  function renderControl529() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9236 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9236); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7959;
      nodes7959 = node.contents();
      oldNodes.replaceWith(nodes7959);
    }));
  }
  renderControl529();
  root9235.append(node1383);
  callback(root9235); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root9237 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1384 = $("<tr>");
  
  var ref1356 = style;
  if(ref1356.get() !== null) {
    node1384.attr('class', ref1356.get());
    subs__.addSub(ref1356.addEventListener('change', function(_, ref, val) {
      node1384.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1356.rebind());
  
  var nodes7960 = $("<span>");
  node1384.append(nodes7960);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl530();
  }));
  
  function renderControl530() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9238 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9238); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7960;
      nodes7960 = node.contents();
      oldNodes.replaceWith(nodes7960);
    }));
  }
  renderControl530();
  root9237.append(node1384);
  callback(root9237); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root9239 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1385 = $("<td>");
  
  var ref1357 = width;
  if(ref1357.get() !== null) {
    node1385.attr('width', ref1357.get());
    subs__.addSub(ref1357.addEventListener('change', function(_, ref, val) {
      node1385.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1357.rebind());
  
  var ref1358 = style;
  if(ref1358.get() !== null) {
    node1385.attr('class', ref1358.get());
    subs__.addSub(ref1358.addEventListener('change', function(_, ref, val) {
      node1385.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1358.rebind());
  
  var nodes7961 = $("<span>");
  node1385.append(nodes7961);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl531();
  }));
  
  function renderControl531() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9240 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9240); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7961;
      nodes7961 = node.contents();
      oldNodes.replaceWith(nodes7961);
    }));
  }
  renderControl531();
  root9239.append(node1385);
  callback(root9239); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root9241 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1386 = $("<td>");
  
  var ref1359 = width;
  if(ref1359.get() !== null) {
    node1386.attr('width', ref1359.get());
    subs__.addSub(ref1359.addEventListener('change', function(_, ref, val) {
      node1386.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1359.rebind());
  
  var ref1360 = style;
  if(ref1360.get() !== null) {
    node1386.attr('class', ref1360.get());
    subs__.addSub(ref1360.addEventListener('change', function(_, ref, val) {
      node1386.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1360.rebind());
  
  var nodes7962 = $("<span>");
  node1386.append(nodes7962);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl532();
  }));
  
  function renderControl532() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9242 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9242); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7962;
      nodes7962 = node.contents();
      oldNodes.replaceWith(nodes7962);
    }));
  }
  renderControl532();
  root9241.append(node1386);
  callback(root9241); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root9243 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1387 = $("<td>");
  
  var ref1361 = width;
  if(ref1361.get() !== null) {
    node1387.attr('width', ref1361.get());
    subs__.addSub(ref1361.addEventListener('change', function(_, ref, val) {
      node1387.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1361.rebind());
  
  var ref1362 = style;
  if(ref1362.get() !== null) {
    node1387.attr('class', ref1362.get());
    subs__.addSub(ref1362.addEventListener('change', function(_, ref, val) {
      node1387.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1362.rebind());
  
  
  var node1388 = $("<strong>");
  
  var nodes7963 = $("<span>");
  node1388.append(nodes7963);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl533();
  }));
  
  function renderControl533() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9244 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9244); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7963;
      nodes7963 = node.contents();
      oldNodes.replaceWith(nodes7963);
    }));
  }
  renderControl533();
  node1387.append(node1388);
  root9243.append(node1387);
  callback(root9243); return subs__;
  
  
  
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
  items.list(function(coll968) {
    coll968 = coll968.reverse();
    function processOne290() {
      var item;
      item = coll968.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll968.length > 0) processOne290(); else rest290();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll968.length > 0) processOne290(); else rest290();
          
        }
      }
    }
    function rest290() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll968.length > 0) processOne290(); else rest290();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root9245 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7802 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7802.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1389 = $("<span>");
  root9245.append(node1389);
  var condSubs341 = new mobl.CompSubscription();
  subs__.addSub(condSubs341);
  var oldValue341;
  var renderCond341 = function() {
    var value793 = tmp7802.get();
    if(oldValue341 === value793) return;
    oldValue341 = value793;
    var subs__ = condSubs341;
    subs__.unsubscribe();
    node1389.empty();
    if(value793) {
      items.get().one(function(result__) {
        var tmp7824 = result__;
        var current = mobl.ref(result__);
        
        var node1390 = $("<div>");
        node1390.attr('width', "100%");
        
        
        var node1391 = $("<div>");
        node1391.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7965 = $("<span>");
        node1391.append(nodes7965);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9247 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1394 = mobl.loadingSpan();
          root9247.append(node1394);
          var list207;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList207 = function() {
            var subs__ = listSubs__;
            list207 = items.get();
            list207.list(function(results207) {
              node1394.empty();
              for(var i2016 = 0; i2016 < results207.length; i2016++) {
                (function() {
                  var iternode207 = $("<span>");
                  node1394.append(iternode207);
                  var it;
                  it = mobl.ref(mobl.ref(results207), i2016);
                  var result__ = it.get() == current.get();
                  var tmp7798 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7798.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7798.set(it.get() == current.get());
                  }));
                  
                  
                  var node1395 = $("<span>");
                  iternode207.append(node1395);
                  var condSubs343 = new mobl.CompSubscription();
                  subs__.addSub(condSubs343);
                  var oldValue343;
                  var renderCond343 = function() {
                    var value795 = tmp7798.get();
                    if(oldValue343 === value795) return;
                    oldValue343 = value795;
                    var subs__ = condSubs343;
                    subs__.unsubscribe();
                    node1395.empty();
                    if(value795) {
                      var nodes7966 = $("<span>");
                      node1395.append(nodes7966);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9248 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7830 = result__;
                          var tmp7795 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7828 = result__;
                              var result__ = tmp7828;
                              tmp7795.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7829 = result__;
                              var result__ = tmp7829;
                              tmp7795.set(result__);
                              
                            });
                          }));
                          
                          var nodes7967 = $("<span>");
                          root9248.append(nodes7967);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl535();
                          }));
                          
                          function renderControl535() {
                            subs__.addSub((masterItem.get())(it, tmp7795, function(elements, callback) {
                              var root9249 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root9249); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7967;
                              nodes7967 = node.contents();
                              oldNodes.replaceWith(nodes7967);
                            }));
                          }
                          renderControl535();
                          callback(root9248); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7966;
                        nodes7966 = node.contents();
                        oldNodes.replaceWith(nodes7966);
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
                      var tmp7797 = mobl.ref(result__);
                      
                      var nodes7968 = $("<span>");
                      node1395.append(nodes7968);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7797, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9250 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7833 = result__;
                          var tmp7796 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7831 = result__;
                              var result__ = tmp7831;
                              tmp7796.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7832 = result__;
                              var result__ = tmp7832;
                              tmp7796.set(result__);
                              
                            });
                          }));
                          
                          var nodes7969 = $("<span>");
                          root9250.append(nodes7969);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl536();
                          }));
                          
                          function renderControl536() {
                            subs__.addSub((masterItem.get())(it, tmp7796, function(elements, callback) {
                              var root9251 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root9251); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7969;
                              nodes7969 = node.contents();
                              oldNodes.replaceWith(nodes7969);
                            }));
                          }
                          renderControl536();
                          callback(root9250); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7968;
                        nodes7968 = node.contents();
                        oldNodes.replaceWith(nodes7968);
                      }));
                      
                      
                    }
                  };
                  renderCond343();
                  subs__.addSub(tmp7798.addEventListener('change', function() {
                    renderCond343();
                  }));
                  
                  
                  var oldNodes = iternode207;
                  iternode207 = iternode207.contents();
                  oldNodes.replaceWith(iternode207);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list207.addEventListener('change', function() { listSubs__.unsubscribe(); renderList207(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList207(true); }));
            });
          };
          renderList207();
          
          callback(root9247); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7965;
          nodes7965 = node.contents();
          oldNodes.replaceWith(nodes7965);
        }));
        node1390.append(node1391);
        
        var node1392 = $("<div>");
        node1392.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp7800 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp7800.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp7800.set(current.get() && ui.visible.get());
        }));
        
        
        var node1393 = $("<span>");
        node1392.append(node1393);
        var condSubs342 = new mobl.CompSubscription();
        subs__.addSub(condSubs342);
        var oldValue342;
        var renderCond342 = function() {
          var value794 = tmp7800.get();
          if(oldValue342 === value794) return;
          oldValue342 = value794;
          var subs__ = condSubs342;
          subs__.unsubscribe();
          node1393.empty();
          if(value794) {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp7827 = result__;
              var tmp7799 = mobl.ref(result__);
              subs__.addSub(current.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp7825 = result__;
                  var result__ = tmp7825;
                  tmp7799.set(result__);
                  
                });
              }));
              subs__.addSub(items.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp7826 = result__;
                  var result__ = tmp7826;
                  tmp7799.set(result__);
                  
                });
              }));
              
              var nodes7964 = $("<span>");
              node1393.append(nodes7964);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl534();
              }));
              
              function renderControl534() {
                subs__.addSub((detail.get())(current, tmp7799, function(elements, callback) {
                  var root9246 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9246); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7964;
                  nodes7964 = node.contents();
                  oldNodes.replaceWith(nodes7964);
                }));
              }
              renderControl534();
              
              
            });
          } else {
            
          }
        };
        renderCond342();
        subs__.addSub(tmp7800.addEventListener('change', function() {
          renderCond342();
        }));
        
        node1390.append(node1392);
        node1389.append(node1390);
        
        
        
        
        
        
      });
    } else {
      var nodes7970 = $("<span>");
      node1389.append(nodes7970);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1396 = mobl.loadingSpan();
        root9252.append(node1396);
        var list208;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList208 = function() {
          var subs__ = listSubs__;
          list208 = items.get();
          list208.list(function(results208) {
            node1396.empty();
            for(var i2017 = 0; i2017 < results208.length; i2017++) {
              (function() {
                var iternode208 = $("<span>");
                node1396.append(iternode208);
                var it;
                it = mobl.ref(mobl.ref(results208), i2017);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7839 = result__;
                                 mobl.sleep(100, function(result__) {
                                   var tmp7840 = result__;
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp7841 = result__;
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 });
                                 });
                               };
                var tmp7791 = mobl.ref(result__);
                
                var nodes7971 = $("<span>");
                iternode208.append(nodes7971);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7791, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9253 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp7836 = result__;
                    var tmp7790 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7834 = result__;
                        var result__ = tmp7834;
                        tmp7790.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7835 = result__;
                        var result__ = tmp7835;
                        tmp7790.set(result__);
                        
                      });
                    }));
                    
                    var nodes7972 = $("<span>");
                    root9253.append(nodes7972);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl537();
                    }));
                    
                    function renderControl537() {
                      subs__.addSub((masterItem.get())(it, tmp7790, function(elements, callback) {
                        var root9254 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root9254); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7972;
                        nodes7972 = node.contents();
                        oldNodes.replaceWith(nodes7972);
                      }));
                    }
                    renderControl537();
                    mobl.sleep(100, function(result__) {
                      var tmp7837 = result__;
                      mathJAX.renderMaths(function(result__) {
                        var tmp7838 = result__;
                        callback(root9253); return subs__;
                      });
                    });
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7971;
                  nodes7971 = node.contents();
                  oldNodes.replaceWith(nodes7971);
                }));
                
                var oldNodes = iternode208;
                iternode208 = iternode208.contents();
                oldNodes.replaceWith(iternode208);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list208.addEventListener('change', function() { listSubs__.unsubscribe(); renderList208(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList208(true); }));
          });
        };
        renderList208();
        
        callback(root9252); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7970;
        nodes7970 = node.contents();
        oldNodes.replaceWith(nodes7970);
      }));
      
      
    }
  };
  renderCond341();
  subs__.addSub(tmp7802.addEventListener('change', function() {
    renderCond341();
  }));
  
  callback(root9245); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9255 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7794 = mobl.ref(result__);
  
  var nodes7973 = $("<span>");
  root9255.append(nodes7973);
  subs__.addSub((ui.header)(tmp7794, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9256 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7793 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7792 = mobl.ref(result__);
    
    var nodes7974 = $("<span>");
    root9256.append(nodes7974);
    subs__.addSub((ui.backButton)(tmp7792, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7793, function(_, callback) {
      var root9257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9257); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7974;
      nodes7974 = node.contents();
      oldNodes.replaceWith(nodes7974);
    }));
    callback(root9256); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7973;
    nodes7973 = node.contents();
    oldNodes.replaceWith(nodes7973);
  }));
  var nodes7975 = $("<span>");
  root9255.append(nodes7975);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl538();
  }));
  
  function renderControl538() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9258 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9258); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7975;
      nodes7975 = node.contents();
      oldNodes.replaceWith(nodes7975);
    }));
  }
  renderControl538();
  callback(root9255); return subs__;
  
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root9259 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7976 = $("<span>");
  root9259.append(nodes7976);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9260 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes7977 = $("<span>");
    root9260.append(nodes7977);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9261); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7977;
      nodes7977 = node.contents();
      oldNodes.replaceWith(nodes7977);
    }));
    callback(root9260); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7976;
    nodes7976 = node.contents();
    oldNodes.replaceWith(nodes7976);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes7978 = $("<span>");
  root9259.append(nodes7978);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root9262 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9262); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7978;
    nodes7978 = node.contents();
    oldNodes.replaceWith(nodes7978);
  }));
  callback(root9259); return subs__;
  
  
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
