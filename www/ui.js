mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root361 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node21 = $("<span>");
  root361.append(node21);
  var condSubs7 = new mobl.CompSubscription();
  subs__.addSub(condSubs7);
  var oldValue7;
  var renderCond7 = function() {
    var value103 = value.get();
    if(oldValue7 === value103) return;
    oldValue7 = value103;
    var subs__ = condSubs7;
    subs__.unsubscribe();
    node21.empty();
    if(value103) {
      var nodes333 = $("<span>");
      node21.append(nodes333);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl2();
      }));
      
      function renderControl2() {
        subs__.addSub((elements)(function(elements, callback) {
          var root362 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root362); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes333;
          nodes333 = node.contents();
          oldNodes.replaceWith(nodes333);
        }));
      }
      renderControl2();
      
      
    } else {
      var nodes334 = $("<span>");
      node21.append(nodes334);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root363 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes335 = $("<span>");
        root363.append(nodes335);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root364 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root364); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes335;
          nodes335 = node.contents();
          oldNodes.replaceWith(nodes335);
        }));
        var nodes336 = $("<span>");
        root363.append(nodes336);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root365 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root365); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes336;
          nodes336 = node.contents();
          oldNodes.replaceWith(nodes336);
        }));
        callback(root363); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes334;
        nodes334 = node.contents();
        oldNodes.replaceWith(nodes334);
      }));
      
      
    }
  };
  renderCond7();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond7();
  }));
  
  callback(root361); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root366 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node22 = $("<div>");
  
  var ref12 = mobl.ref(ui.headerStyle);
  if(ref12.get() !== null) {
    node22.attr('class', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node22.attr('class', val);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  var val2 = onclick.get();
  if(val2 !== null) {
    subs__.addSub(mobl.domBind(node22, 'tap', val2));
  }
  
  var ref13 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref13.get() !== null) {
    node22.attr('style', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
      node22.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node22.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref13.rebind());
  
  
  var node25 = $("<div>");
  
  var ref11 = mobl.ref(ui.headerContainerStyle);
  if(ref11.get() !== null) {
    node25.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node25.attr('class', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  
  var node26 = $("<div>");
  
  var ref9 = text;
  node26.text(""+ref9.get());
  var ignore2 = false;
  subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    node26.text(""+val);
  }));
  subs__.addSub(ref9.rebind());
  
  
  var ref10 = mobl.ref(ui.headerTextStyle);
  if(ref10.get() !== null) {
    node26.attr('class', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      node26.attr('class', val);
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  node25.append(node26);
  node22.append(node25);
  var nodes337 = $("<span>");
  node22.append(nodes337);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl3();
  }));
  
  function renderControl3() {
    subs__.addSub((elements)(function(elements, callback) {
      var root367 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root367); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes337;
      nodes337 = node.contents();
      oldNodes.replaceWith(nodes337);
    }));
  }
  renderControl3();
  root366.append(node22);
  
  var node23 = $("<span>");
  root366.append(node23);
  var condSubs8 = new mobl.CompSubscription();
  subs__.addSub(condSubs8);
  var oldValue8;
  var renderCond8 = function() {
    var value104 = fixedPosition.get();
    if(oldValue8 === value104) return;
    oldValue8 = value104;
    var subs__ = condSubs8;
    subs__.unsubscribe();
    node23.empty();
    if(value104) {
      
      var node24 = $("<div>");
      node24.attr('id', "hello");
      node24.attr('style', "height: 2.9em;");
      
      node23.append(node24);
      
      
    } else {
      
    }
  };
  renderCond8();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond8();
  }));
  
  callback(root366); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root368 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref14 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref14.get() !== null) {
    sp.attr('class', ref14.get());
    subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref14.rebind());
  
  var val3 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val3 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val3));
  }
  
  var val4 = function(event, callback) {
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
  if(val4 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val4));
  }
  
  var val5 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after0(result__) {
                    var tmp396 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val5));
  }
  
  var val6 = function(event, callback) {
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
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val6));
  }
  
  var ref15 = text;
  sp.text(""+ref15.get());
  var ignore3 = false;
  subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref15.rebind());
  
  
  root368.append(sp);
  callback(root368); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes338 = $("<span>");
  root369.append(nodes338);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root370 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root370); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes338;
    nodes338 = node.contents();
    oldNodes.replaceWith(nodes338);
  }));
  callback(root369); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root371 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes339 = $("<span>");
  root371.append(nodes339);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root372 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root372); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes339;
    nodes339 = node.contents();
    oldNodes.replaceWith(nodes339);
  }));
  callback(root371); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root373 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node27 = $("<ul>");
  
  var ref16 = mobl.ref(ui.groupStyle);
  if(ref16.get() !== null) {
    node27.attr('class', ref16.get());
    subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
      node27.attr('class', val);
    }));
    
  }
  subs__.addSub(ref16.rebind());
  
  var nodes340 = $("<span>");
  node27.append(nodes340);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl4();
  }));
  
  function renderControl4() {
    subs__.addSub((elements)(function(elements, callback) {
      var root374 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root374); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes340;
      nodes340 = node.contents();
      oldNodes.replaceWith(nodes340);
    }));
  }
  renderControl4();
  root373.append(node27);
  callback(root373); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node28 = $("<img>");
  
  var ref17 = url;
  if(ref17.get() !== null) {
    node28.attr('src', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      node28.attr('src', val);
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var ref18 = width;
  if(ref18.get() !== null) {
    node28.attr('width', ref18.get());
    subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
      node28.attr('width', val);
    }));
    
  }
  subs__.addSub(ref18.rebind());
  
  var ref19 = height;
  if(ref19.get() !== null) {
    node28.attr('height', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      node28.attr('height', val);
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  var ref20 = style;
  if(ref20.get() !== null) {
    node28.attr('class', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node28.attr('class', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  var val7 = onclick.get();
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(node28, 'tap', val7));
  }
  
  var ref21 = valign;
  if(ref21.get() !== null) {
    node28.attr('valign', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      node28.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  var ref22 = align;
  if(ref22.get() !== null) {
    node28.attr('align', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
      node28.attr('align', val);
    }));
    
  }
  subs__.addSub(ref22.rebind());
  
  root375.append(node28);
  callback(root375); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root376 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref23 = mobl.ref(ui.itemStyle);
  if(ref23.get() !== null) {
    el.attr('class', ref23.get());
    subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref23.rebind());
  
  var ref24 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref24.get() !== null) {
    el.attr('class', ref24.get());
    subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref24.rebind());
  
  var val8 = onswipe.get();
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val8));
  }
  
  var val9 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp397 = result__;
                                           function after1(result__) {
                                             var tmp398 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp399 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val9));
  }
  
  var nodes341 = $("<span>");
  el.append(nodes341);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root377 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root377); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes341;
      nodes341 = node.contents();
      oldNodes.replaceWith(nodes341);
    }));
  }
  renderControl5();
  root376.append(el);
  callback(root376); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node29 = $("<input>");
  node29.attr('type', "checkbox");
  
  var ref26 = b;
  node29.attr('checked', !!ref26.get());
  subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
    if(ref === ref26) node29.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node29, 'change', function() {
    b.set(!!node29.attr('checked'));
  }));
  
  var val11 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(node29, 'tap', val11));
  }
  
  var val12 = onchange.get();
  if(val12 !== null) {
    subs__.addSub(mobl.domBind(node29, 'change', val12));
  }
  
  root378.append(node29);
  
  root378.append(" ");
  
  var node30 = $("<span>");
  
  var ref25 = label;
  node30.text(""+ref25.get());
  var ignore4 = false;
  subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
    if(ignore4) return;
    node30.text(""+val);
  }));
  subs__.addSub(ref25.rebind());
  
  
  var val10 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp400 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(node30, 'tap', val10));
  }
  
  root378.append(node30);
  callback(root378); return subs__;
  
  
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
  var root379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node31 = $("<span>");
  root379.append(node31);
  var condSubs9 = new mobl.CompSubscription();
  subs__.addSub(condSubs9);
  var oldValue9;
  var renderCond9 = function() {
    var value105 = label.get();
    if(oldValue9 === value105) return;
    oldValue9 = value105;
    var subs__ = condSubs9;
    subs__.unsubscribe();
    node31.empty();
    if(value105) {
      var nodes342 = $("<span>");
      node31.append(nodes342);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root380 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root380); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes342;
        nodes342 = node.contents();
        oldNodes.replaceWith(nodes342);
      }));
      
      
    } else {
      
    }
  };
  renderCond9();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond9();
  }));
  
  
  var node32 = $("<span>");
  root379.append(node32);
  var condSubs10 = new mobl.CompSubscription();
  subs__.addSub(condSubs10);
  var oldValue10;
  var renderCond10 = function() {
    var value106 = validator.get();
    if(oldValue10 === value106) return;
    oldValue10 = value106;
    var subs__ = condSubs10;
    subs__.unsubscribe();
    node32.empty();
    if(value106) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after6(result__) {
        var tmp401 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp402 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node33 = $("<input>");
        
        var ref27 = inputType;
        if(ref27.get() !== null) {
          node33.attr('type', ref27.get());
          subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
            node33.attr('type', val);
          }));
          
        }
        subs__.addSub(ref27.rebind());
        
        var ref28 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref28.get() !== null) {
          node33.attr('class', ref28.get());
          subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
            node33.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node33.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node33.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node33.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref28.rebind());
        
        var ref29 = placeholder;
        if(ref29.get() !== null) {
          node33.attr('placeholder', ref29.get());
          subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
            node33.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref29.rebind());
        
        var ref30 = temp;
        node33.val(""+ref30.get());
        var ignore5 = false;
        subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
          if(ignore5) return;
          node33.val(""+val);
        }));
        subs__.addSub(ref30.rebind());
        
        subs__.addSub(mobl.domBind(node33, 'keyup change', function() {
          ignore5 = true;
          temp.set(mobl.stringTomobl__String(node33.val()));
          ignore5 = false;
        }));
        
        
        var val13 = onchange.get();
        if(val13 !== null) {
          subs__.addSub(mobl.domBind(node33, 'change', val13));
        }
        
        var val14 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp403 = result__;
                          function after4(result__) {
                            var tmp404 = result__;
                            var result__ = tmp404;
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
                          var result__ = validator.get()(temp.get(), after4);if(result__ !== undefined) after4(result__);
                        }
                        var result__ = onkeyup.get()(event, after3);if(result__ !== undefined) after3(result__);
                      } else {
                        {
                          function after5(result__) {
                            var tmp404 = result__;
                            var result__ = tmp404;
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
                          var result__ = validator.get()(temp.get(), after5);if(result__ !== undefined) after5(result__);
                        }
                      }
                    };
        if(val14 !== null) {
          subs__.addSub(mobl.domBind(node33, 'keyup', val14));
        }
        
        var val15 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val15 !== null) {
          subs__.addSub(mobl.domBind(node33, 'blur', val15));
        }
        
        node32.append(node33);
        var nodes343 = $("<span>");
        node32.append(nodes343);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root381 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root381); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes343;
          nodes343 = node.contents();
          oldNodes.replaceWith(nodes343);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node34 = $("<input>");
      
      var ref31 = inputType;
      if(ref31.get() !== null) {
        node34.attr('type', ref31.get());
        subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
          node34.attr('type', val);
        }));
        
      }
      subs__.addSub(ref31.rebind());
      
      var ref32 = style;
      if(ref32.get() !== null) {
        node34.attr('class', ref32.get());
        subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
          node34.attr('class', val);
        }));
        
      }
      subs__.addSub(ref32.rebind());
      
      var ref33 = placeholder;
      if(ref33.get() !== null) {
        node34.attr('placeholder', ref33.get());
        subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
          node34.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref33.rebind());
      
      var ref34 = s;
      node34.val(""+ref34.get());
      var ignore6 = false;
      subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node34.val(""+val);
      }));
      subs__.addSub(ref34.rebind());
      
      subs__.addSub(mobl.domBind(node34, 'keyup change', function() {
        ignore6 = true;
        s.set(mobl.stringTomobl__String(node34.val()));
        ignore6 = false;
      }));
      
      
      var val16 = onchange.get();
      if(val16 !== null) {
        subs__.addSub(mobl.domBind(node34, 'change', val16));
      }
      
      var val17 = onkeyup.get();
      if(val17 !== null) {
        subs__.addSub(mobl.domBind(node34, 'keyup', val17));
      }
      
      var val18 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val18 !== null) {
        subs__.addSub(mobl.domBind(node34, 'blur', val18));
      }
      
      node32.append(node34);
      
      
    }
  };
  renderCond10();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond10();
  }));
  
  callback(root379); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root382 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes344 = $("<span>");
  root382.append(nodes344);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root383 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root383); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes344;
    nodes344 = node.contents();
    oldNodes.replaceWith(nodes344);
  }));
  callback(root382); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes345 = $("<span>");
  root384.append(nodes345);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root385); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes345;
    nodes345 = node.contents();
    oldNodes.replaceWith(nodes345);
  }));
  callback(root384); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root386 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node35 = $("<span>");
  root386.append(node35);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value107 = label.get();
    if(oldValue11 === value107) return;
    oldValue11 = value107;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node35.empty();
    if(value107) {
      var nodes346 = $("<span>");
      node35.append(nodes346);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root387 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root387); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes346;
        nodes346 = node.contents();
        oldNodes.replaceWith(nodes346);
      }));
      
      
    } else {
      
    }
  };
  renderCond11();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond11();
  }));
  
  
  var node36 = $("<input>");
  node36.attr('type', "range");
  
  var ref35 = n;
  node36.val(""+ref35.get());
  var ignore7 = false;
  subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
    if(ignore7) return;
    node36.val(""+val);
  }));
  subs__.addSub(ref35.rebind());
  
  subs__.addSub(mobl.domBind(node36, 'keyup change', function() {
    ignore7 = true;
    n.set(mobl.stringTomobl__Num(node36.val()));
    ignore7 = false;
  }));
  
  
  var ref36 = min;
  if(ref36.get() !== null) {
    node36.attr('min', ref36.get());
    subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
      node36.attr('min', val);
    }));
    
  }
  subs__.addSub(ref36.rebind());
  
  var ref37 = max;
  if(ref37.get() !== null) {
    node36.attr('max', ref37.get());
    subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
      node36.attr('max', val);
    }));
    
  }
  subs__.addSub(ref37.rebind());
  
  var ref38 = step;
  if(ref38.get() !== null) {
    node36.attr('step', ref38.get());
    subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
      node36.attr('step', val);
    }));
    
  }
  subs__.addSub(ref38.rebind());
  node36.attr('style', "width: 99%;");
  
  var val19 = onchange.get();
  if(val19 !== null) {
    subs__.addSub(mobl.domBind(node36, 'change', val19));
  }
  
  var val20 = onkeyup.get();
  if(val20 !== null) {
    subs__.addSub(mobl.domBind(node36, 'keyup', val20));
  }
  
  var ref39 = placeholder;
  if(ref39.get() !== null) {
    node36.attr('placeholder', ref39.get());
    subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
      node36.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref39.rebind());
  
  root386.append(node36);
  callback(root386); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root388 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after7(result__) {
      var tmp405 = result__;
      var result__ = tmp405;
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
    var result__ = validator.get()(n2, after7);if(result__ !== undefined) after7(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes347 = $("<span>");
  root388.append(nodes347);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root389 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root389); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes347;
    nodes347 = node.contents();
    oldNodes.replaceWith(nodes347);
  }));
  callback(root388); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node37 = $("<span>");
  root390.append(node37);
  var condSubs12 = new mobl.CompSubscription();
  subs__.addSub(condSubs12);
  var oldValue12;
  var renderCond12 = function() {
    var value108 = label.get();
    if(oldValue12 === value108) return;
    oldValue12 = value108;
    var subs__ = condSubs12;
    subs__.unsubscribe();
    node37.empty();
    if(value108) {
      
      var node38 = $("<span>");
      node38.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref43 = label;
      node38.text(""+ref43.get());
      var ignore9 = false;
      subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
        if(ignore9) return;
        node38.text(""+val);
      }));
      subs__.addSub(ref43.rebind());
      
      
      node37.append(node38);
      
      var node39 = $("<span>");
      node39.attr('style', "float: left");
      
      
      var node40 = $("<input>");
      node40.attr('type', "password");
      
      var ref40 = style;
      if(ref40.get() !== null) {
        node40.attr('class', ref40.get());
        subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
          node40.attr('class', val);
        }));
        
      }
      subs__.addSub(ref40.rebind());
      
      var ref41 = placeholder;
      if(ref41.get() !== null) {
        node40.attr('placeholder', ref41.get());
        subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
          node40.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref41.rebind());
      
      var ref42 = s;
      node40.val(""+ref42.get());
      var ignore8 = false;
      subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node40.val(""+val);
      }));
      subs__.addSub(ref42.rebind());
      
      subs__.addSub(mobl.domBind(node40, 'keyup change', function() {
        ignore8 = true;
        s.set(mobl.stringTomobl__String(node40.val()));
        ignore8 = false;
      }));
      
      
      var val21 = onchange.get();
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node40, 'change', val21));
      }
      
      var val22 = onkeyup.get();
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node40, 'keyup', val22));
      }
      
      var val23 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val23 !== null) {
        subs__.addSub(mobl.domBind(node40, 'blur', val23));
      }
      
      node39.append(node40);
      node37.append(node39);
      
      
      
      
    } else {
      
      var node41 = $("<input>");
      node41.attr('type', "password");
      
      var ref44 = style;
      if(ref44.get() !== null) {
        node41.attr('class', ref44.get());
        subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
          node41.attr('class', val);
        }));
        
      }
      subs__.addSub(ref44.rebind());
      
      var ref45 = placeholder;
      if(ref45.get() !== null) {
        node41.attr('placeholder', ref45.get());
        subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
          node41.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref45.rebind());
      
      var ref46 = s;
      node41.val(""+ref46.get());
      var ignore10 = false;
      subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
        if(ignore10) return;
        node41.val(""+val);
      }));
      subs__.addSub(ref46.rebind());
      
      subs__.addSub(mobl.domBind(node41, 'keyup change', function() {
        ignore10 = true;
        s.set(mobl.stringTomobl__String(node41.val()));
        ignore10 = false;
      }));
      
      
      var val24 = onchange.get();
      if(val24 !== null) {
        subs__.addSub(mobl.domBind(node41, 'change', val24));
      }
      
      var val25 = onkeyup.get();
      if(val25 !== null) {
        subs__.addSub(mobl.domBind(node41, 'keyup', val25));
      }
      
      var val26 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val26 !== null) {
        subs__.addSub(mobl.domBind(node41, 'blur', val26));
      }
      
      node37.append(node41);
      
      
    }
  };
  renderCond12();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond12();
  }));
  
  callback(root390); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root391 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref51 = style;
  if(ref51.get() !== null) {
    sel.attr('class', ref51.get());
    subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref51.rebind());
  
  var val27 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after8(result__) {
                    var tmp407 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after8);if(result__ !== undefined) after8(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val27 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val27));
  }
  
  
  var node42 = mobl.loadingSpan();
  sel.append(node42);
  var list0;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList0 = function() {
    var subs__ = listSubs__;
    list0 = options.get();
    list0.list(function(results0) {
      node42.empty();
      for(var i126 = 0; i126 < results0.length; i126++) {
        (function() {
          var iternode0 = $("<span>");
          node42.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i126), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i126), "_2");
          
          var node43 = $("<option>");
          
          var ref47 = optionDescription;
          node43.text(""+ref47.get());
          var ignore11 = false;
          subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
            if(ignore11) return;
            node43.text(""+val);
          }));
          subs__.addSub(ref47.rebind());
          
          
          var ref48 = optionStyle;
          if(ref48.get() !== null) {
            node43.attr('class', ref48.get());
            subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
              node43.attr('class', val);
            }));
            
          }
          subs__.addSub(ref48.rebind());
          
          var ref49 = optionValue;
          if(ref49.get() !== null) {
            node43.attr('value', ref49.get());
            subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
              node43.attr('value', val);
            }));
            
          }
          subs__.addSub(ref49.rebind());
          
          var ref50 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref50.get() !== null) {
            node43.attr('selected', ref50.get());
            subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
              node43.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node43.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node43.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref50.rebind());
          
          iternode0.append(node43);
          
          var oldNodes = iternode0;
          iternode0 = iternode0.contents();
          oldNodes.replaceWith(iternode0);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list0.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
    });
  };
  renderList0();
  
  root391.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root391); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes348 = $("<span>");
    root392.append(nodes348);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root393 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node44 = mobl.loadingSpan();
      root393.append(node44);
      var list1;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1 = function() {
        var subs__ = listSubs__;
        list1 = tabs.get();
        list1.list(function(results1) {
          node44.empty();
          for(var i127 = 0; i127 < results1.length; i127++) {
            (function() {
              var iternode1 = $("<span>");
              node44.append(iternode1);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp369 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp368 = mobl.ref(result__);
              
              var nodes349 = $("<span>");
              iternode1.append(nodes349);
              subs__.addSub((mobl.span)(tmp369, mobl.ref(null), tmp368, mobl.ref(null), function(_, callback) {
                var root394 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes350 = $("<span>");
                root394.append(nodes350);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root395 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root395); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes350;
                  nodes350 = node.contents();
                  oldNodes.replaceWith(nodes350);
                }));
                callback(root394); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes349;
                nodes349 = node.contents();
                oldNodes.replaceWith(nodes349);
              }));
              
              var oldNodes = iternode1;
              iternode1 = iternode1.contents();
              oldNodes.replaceWith(iternode1);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list1.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
        });
      };
      renderList1();
      
      callback(root393); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes348;
      nodes348 = node.contents();
      oldNodes.replaceWith(nodes348);
    }));
    
    var node45 = mobl.loadingSpan();
    root392.append(node45);
    var list2;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2 = function() {
      var subs__ = listSubs__;
      list2 = tabs.get();
      list2.list(function(results2) {
        node45.empty();
        for(var i128 = 0; i128 < results2.length; i128++) {
          (function() {
            var iternode2 = $("<span>");
            node45.append(iternode2);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp370 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes351 = $("<span>");
            iternode2.append(nodes351);
            subs__.addSub((mobl.block)(tmp370, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root396 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes352 = $("<span>");
              root396.append(nodes352);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root397 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes353 = $("<span>");
                root397.append(nodes353);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl6();
                }));
                
                function renderControl6() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root398 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root398); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes353;
                    nodes353 = node.contents();
                    oldNodes.replaceWith(nodes353);
                  }));
                }
                renderControl6();
                callback(root397); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes352;
                nodes352 = node.contents();
                oldNodes.replaceWith(nodes352);
              }));
              callback(root396); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes351;
              nodes351 = node.contents();
              oldNodes.replaceWith(nodes351);
            }));
            
            var oldNodes = iternode2;
            iternode2 = iternode2.contents();
            oldNodes.replaceWith(iternode2);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
      });
    };
    renderList2();
    
    callback(root392); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes348 = $("<span>");
      root392.append(nodes348);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node44 = mobl.loadingSpan();
        root393.append(node44);
        var list1;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList1 = function() {
          var subs__ = listSubs__;
          list1 = tabs.get();
          list1.list(function(results1) {
            node44.empty();
            for(var i127 = 0; i127 < results1.length; i127++) {
              (function() {
                var iternode1 = $("<span>");
                node44.append(iternode1);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp369 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp368 = mobl.ref(result__);
                
                var nodes349 = $("<span>");
                iternode1.append(nodes349);
                subs__.addSub((mobl.span)(tmp369, mobl.ref(null), tmp368, mobl.ref(null), function(_, callback) {
                  var root394 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes350 = $("<span>");
                  root394.append(nodes350);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root395 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root395); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes350;
                    nodes350 = node.contents();
                    oldNodes.replaceWith(nodes350);
                  }));
                  callback(root394); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes349;
                  nodes349 = node.contents();
                  oldNodes.replaceWith(nodes349);
                }));
                
                var oldNodes = iternode1;
                iternode1 = iternode1.contents();
                oldNodes.replaceWith(iternode1);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list1.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
          });
        };
        renderList1();
        
        callback(root393); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes348;
        nodes348 = node.contents();
        oldNodes.replaceWith(nodes348);
      }));
      
      var node45 = mobl.loadingSpan();
      root392.append(node45);
      var list2;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2 = function() {
        var subs__ = listSubs__;
        list2 = tabs.get();
        list2.list(function(results2) {
          node45.empty();
          for(var i128 = 0; i128 < results2.length; i128++) {
            (function() {
              var iternode2 = $("<span>");
              node45.append(iternode2);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp370 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes351 = $("<span>");
              iternode2.append(nodes351);
              subs__.addSub((mobl.block)(tmp370, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root396 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes352 = $("<span>");
                root396.append(nodes352);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root397 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes353 = $("<span>");
                  root397.append(nodes353);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl6();
                  }));
                  
                  function renderControl6() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root398 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root398); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes353;
                      nodes353 = node.contents();
                      oldNodes.replaceWith(nodes353);
                    }));
                  }
                  renderControl6();
                  callback(root397); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes352;
                  nodes352 = node.contents();
                  oldNodes.replaceWith(nodes352);
                }));
                callback(root396); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes351;
                nodes351 = node.contents();
                oldNodes.replaceWith(nodes351);
              }));
              
              var oldNodes = iternode2;
              iternode2 = iternode2.contents();
              oldNodes.replaceWith(iternode2);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
        });
      };
      renderList2();
      
      callback(root392); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node46 = $("<div>");
  
  var ref55 = mobl.ref(ui.searchboxStyle);
  if(ref55.get() !== null) {
    node46.attr('class', ref55.get());
    subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
      node46.attr('class', val);
    }));
    
  }
  subs__.addSub(ref55.rebind());
  
  
  var node47 = $("<input>");
  node47.attr('type', "search");
  
  var ref52 = mobl.ref(ui.searchBoxInputStyle);
  if(ref52.get() !== null) {
    node47.attr('class', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      node47.attr('class', val);
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var ref53 = placeholder;
  if(ref53.get() !== null) {
    node47.attr('placeholder', ref53.get());
    subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
      node47.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref53.rebind());
  
  var ref54 = s;
  node47.val(""+ref54.get());
  var ignore12 = false;
  subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    node47.val(""+val);
  }));
  subs__.addSub(ref54.rebind());
  
  subs__.addSub(mobl.domBind(node47, 'keyup change', function() {
    ignore12 = true;
    s.set(mobl.stringTomobl__String(node47.val()));
    ignore12 = false;
  }));
  
  
  var val28 = onsearch.get();
  if(val28 !== null) {
    subs__.addSub(mobl.domBind(node47, 'change', val28));
  }
  
  var val29 = onkeyup.get();
  if(val29 !== null) {
    subs__.addSub(mobl.domBind(node47, 'keyup', val29));
  }
  node47.attr('autocorrect', false);
  node47.attr('autocapitalize', false);
  node47.attr('autocomplete', false);
  
  node46.append(node47);
  root399.append(node46);
  callback(root399); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root400 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref56 = mobl.ref(ui.contextMenuStyle);
  if(ref56.get() !== null) {
    menu.attr('class', ref56.get());
    subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref56.rebind());
  
  var nodes354 = $("<span>");
  menu.append(nodes354);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root401 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root401); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes354;
      nodes354 = node.contents();
      oldNodes.replaceWith(nodes354);
    }));
  }
  renderControl7();
  root400.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val30 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp410 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val30));
  }
  
  root400.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root400); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root402 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp395 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp395.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node48 = $("<span>");
  root402.append(node48);
  var condSubs13 = new mobl.CompSubscription();
  subs__.addSub(condSubs13);
  var oldValue13;
  var renderCond13 = function() {
    var value109 = tmp395.get();
    if(oldValue13 === value109) return;
    oldValue13 = value109;
    var subs__ = condSubs13;
    subs__.unsubscribe();
    node48.empty();
    if(value109) {
      items.get().one(function(result__) {
        var tmp411 = result__;
        var current = mobl.ref(result__);
        
        var node49 = $("<div>");
        node49.attr('width', "100%");
        
        
        var node50 = $("<div>");
        node50.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes357 = $("<span>");
        node50.append(nodes357);
        subs__.addSub((ui.group)(function(_, callback) {
          var root405 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node53 = mobl.loadingSpan();
          root405.append(node53);
          var list3;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3 = function() {
            var subs__ = listSubs__;
            list3 = items.get();
            list3.list(function(results3) {
              node53.empty();
              for(var i129 = 0; i129 < results3.length; i129++) {
                (function() {
                  var iternode3 = $("<span>");
                  node53.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i129);
                  var result__ = it.get() == current.get();
                  var tmp376 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp376.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp376.set(it.get() == current.get());
                  }));
                  
                  
                  var node54 = $("<span>");
                  iternode3.append(node54);
                  var condSubs15 = new mobl.CompSubscription();
                  subs__.addSub(condSubs15);
                  var oldValue15;
                  var renderCond15 = function() {
                    var value111 = tmp376.get();
                    if(oldValue15 === value111) return;
                    oldValue15 = value111;
                    var subs__ = condSubs15;
                    subs__.unsubscribe();
                    node54.empty();
                    if(value111) {
                      var nodes358 = $("<span>");
                      node54.append(nodes358);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root406 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes359 = $("<span>");
                        root406.append(nodes359);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl9();
                        }));
                        
                        function renderControl9() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root407 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root407); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes359;
                            nodes359 = node.contents();
                            oldNodes.replaceWith(nodes359);
                          }));
                        }
                        renderControl9();
                        callback(root406); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes358;
                        nodes358 = node.contents();
                        oldNodes.replaceWith(nodes358);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp375 = mobl.ref(result__);
                      
                      var nodes360 = $("<span>");
                      node54.append(nodes360);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp375, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root408 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes361 = $("<span>");
                        root408.append(nodes361);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl10();
                        }));
                        
                        function renderControl10() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root409 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root409); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes361;
                            nodes361 = node.contents();
                            oldNodes.replaceWith(nodes361);
                          }));
                        }
                        renderControl10();
                        callback(root408); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes360;
                        nodes360 = node.contents();
                        oldNodes.replaceWith(nodes360);
                      }));
                      
                      
                    }
                  };
                  renderCond15();
                  subs__.addSub(tmp376.addEventListener('change', function() {
                    renderCond15();
                  }));
                  
                  
                  var oldNodes = iternode3;
                  iternode3 = iternode3.contents();
                  oldNodes.replaceWith(iternode3);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list3.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
            });
          };
          renderList3();
          
          callback(root405); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes357;
          nodes357 = node.contents();
          oldNodes.replaceWith(nodes357);
        }));
        node49.append(node50);
        
        var node51 = $("<div>");
        node51.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node52 = $("<span>");
        node51.append(node52);
        var condSubs14 = new mobl.CompSubscription();
        subs__.addSub(condSubs14);
        var oldValue14;
        var renderCond14 = function() {
          var value110 = current.get();
          if(oldValue14 === value110) return;
          oldValue14 = value110;
          var subs__ = condSubs14;
          subs__.unsubscribe();
          node52.empty();
          if(value110) {
            var nodes355 = $("<span>");
            node52.append(nodes355);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl8();
            }));
            
            function renderControl8() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root403 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root403); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes355;
                nodes355 = node.contents();
                oldNodes.replaceWith(nodes355);
              }));
            }
            renderControl8();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp377 = mobl.ref(result__);
            
            var nodes356 = $("<span>");
            node52.append(nodes356);
            subs__.addSub((mobl.label)(tmp377, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root404 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root404); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes356;
              nodes356 = node.contents();
              oldNodes.replaceWith(nodes356);
            }));
            
            
          }
        };
        renderCond14();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond14();
        }));
        
        node49.append(node51);
        node48.append(node49);
        
        
        
        
        
        
      });
    } else {
      var nodes362 = $("<span>");
      node48.append(nodes362);
      subs__.addSub((ui.group)(function(_, callback) {
        var root410 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node55 = mobl.loadingSpan();
        root410.append(node55);
        var list4;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList4 = function() {
          var subs__ = listSubs__;
          list4 = items.get();
          list4.list(function(results4) {
            node55.empty();
            for(var i130 = 0; i130 < results4.length; i130++) {
              (function() {
                var iternode4 = $("<span>");
                node55.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i130);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp412 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp371 = mobl.ref(result__);
                
                var nodes363 = $("<span>");
                iternode4.append(nodes363);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp371, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root411 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes364 = $("<span>");
                  root411.append(nodes364);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl11();
                  }));
                  
                  function renderControl11() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root412 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root412); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes364;
                      nodes364 = node.contents();
                      oldNodes.replaceWith(nodes364);
                    }));
                  }
                  renderControl11();
                  callback(root411); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes363;
                  nodes363 = node.contents();
                  oldNodes.replaceWith(nodes363);
                }));
                
                var oldNodes = iternode4;
                iternode4 = iternode4.contents();
                oldNodes.replaceWith(iternode4);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list4.addEventListener('change', function() { listSubs__.unsubscribe(); renderList4(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList4(true); }));
          });
        };
        renderList4();
        
        callback(root410); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes362;
        nodes362 = node.contents();
        oldNodes.replaceWith(nodes362);
      }));
      
      
    }
  };
  renderCond13();
  subs__.addSub(tmp395.addEventListener('change', function() {
    renderCond13();
  }));
  
  callback(root402); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root413 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp374 = mobl.ref(result__);
  
  var nodes365 = $("<span>");
  root413.append(nodes365);
  subs__.addSub((ui.header)(tmp374, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root414 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp373 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp372 = mobl.ref(result__);
    
    var nodes366 = $("<span>");
    root414.append(nodes366);
    subs__.addSub((ui.backButton)(tmp372, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp373, function(_, callback) {
      var root415 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root415); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes366;
      nodes366 = node.contents();
      oldNodes.replaceWith(nodes366);
    }));
    callback(root414); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes365;
    nodes365 = node.contents();
    oldNodes.replaceWith(nodes365);
  }));
  var nodes367 = $("<span>");
  root413.append(nodes367);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl12();
  }));
  
  function renderControl12() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root416 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root416); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes367;
      nodes367 = node.contents();
      oldNodes.replaceWith(nodes367);
    }));
  }
  renderControl12();
  callback(root413); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root417 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes368 = $("<span>");
  root417.append(nodes368);
  subs__.addSub((ui.group)(function(_, callback) {
    var root418 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node56 = mobl.loadingSpan();
    root418.append(node56);
    var list5;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList5 = function() {
      var subs__ = listSubs__;
      list5 = coll.get();
      list5.list(function(results5) {
        node56.empty();
        for(var i131 = 0; i131 < results5.length; i131++) {
          (function() {
            var iternode5 = $("<span>");
            node56.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i131);
            var result__ = it.get() == selected.get();
            var tmp379 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp379.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp379.set(it.get() == selected.get());
            }));
            
            
            var node57 = $("<span>");
            iternode5.append(node57);
            var condSubs16 = new mobl.CompSubscription();
            subs__.addSub(condSubs16);
            var oldValue16;
            var renderCond16 = function() {
              var value112 = tmp379.get();
              if(oldValue16 === value112) return;
              oldValue16 = value112;
              var subs__ = condSubs16;
              subs__.unsubscribe();
              node57.empty();
              if(value112) {
                var nodes369 = $("<span>");
                node57.append(nodes369);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root419 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes370 = $("<span>");
                  root419.append(nodes370);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl13();
                  }));
                  
                  function renderControl13() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root420 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root420); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes370;
                      nodes370 = node.contents();
                      oldNodes.replaceWith(nodes370);
                    }));
                  }
                  renderControl13();
                  callback(root419); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes369;
                  nodes369 = node.contents();
                  oldNodes.replaceWith(nodes369);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp378 = mobl.ref(result__);
                
                var nodes371 = $("<span>");
                node57.append(nodes371);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp378, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root421 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes372 = $("<span>");
                  root421.append(nodes372);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl14();
                  }));
                  
                  function renderControl14() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root422 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root422); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes372;
                      nodes372 = node.contents();
                      oldNodes.replaceWith(nodes372);
                    }));
                  }
                  renderControl14();
                  callback(root421); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes371;
                  nodes371 = node.contents();
                  oldNodes.replaceWith(nodes371);
                }));
                
                
              }
            };
            renderCond16();
            subs__.addSub(tmp379.addEventListener('change', function() {
              renderCond16();
            }));
            
            
            var oldNodes = iternode5;
            iternode5 = iternode5.contents();
            oldNodes.replaceWith(iternode5);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list5.addEventListener('change', function() { listSubs__.unsubscribe(); renderList5(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList5(true); }));
      });
    };
    renderList5();
    
    callback(root418); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes368;
    nodes368 = node.contents();
    oldNodes.replaceWith(nodes368);
  }));
  callback(root417); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root423 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp413 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp380 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp380.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp380.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp380.set(coll.get().limit(n.get()));
    }));
    
    
    var node58 = mobl.loadingSpan();
    root423.append(node58);
    var list6;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList6 = function() {
      var subs__ = listSubs__;
      list6 = tmp380.get();
      list6.list(function(results6) {
        node58.empty();
        for(var i132 = 0; i132 < results6.length; i132++) {
          (function() {
            var iternode6 = $("<span>");
            node58.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i132);
            var nodes373 = $("<span>");
            iternode6.append(nodes373);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl15();
            }));
            
            function renderControl15() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root424 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root424); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes373;
                nodes373 = node.contents();
                oldNodes.replaceWith(nodes373);
              }));
            }
            renderControl15();
            
            var oldNodes = iternode6;
            iternode6 = iternode6.contents();
            oldNodes.replaceWith(iternode6);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list6.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
        subs__.addSub(tmp380.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    var result__ = n.get() < total.get();
    var tmp382 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp382.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp382.set(n.get() < total.get());
    }));
    
    
    var node59 = $("<span>");
    root423.append(node59);
    var condSubs17 = new mobl.CompSubscription();
    subs__.addSub(condSubs17);
    var oldValue17;
    var renderCond17 = function() {
      var value113 = tmp382.get();
      if(oldValue17 === value113) return;
      oldValue17 = value113;
      var subs__ = condSubs17;
      subs__.unsubscribe();
      node59.empty();
      if(value113) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp381 = mobl.ref(result__);
        
        var nodes374 = $("<span>");
        node59.append(nodes374);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp381, mobl.ref(null), function(_, callback) {
          var root425 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes375 = $("<span>");
          root425.append(nodes375);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root426 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root426); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes375;
            nodes375 = node.contents();
            oldNodes.replaceWith(nodes375);
          }));
          callback(root425); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes374;
          nodes374 = node.contents();
          oldNodes.replaceWith(nodes374);
        }));
        
        
      } else {
        
      }
    };
    renderCond17();
    subs__.addSub(tmp382.addEventListener('change', function() {
      renderCond17();
    }));
    
    callback(root423); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root427 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes376 = $("<span>");
  root427.append(nodes376);
  subs__.addSub((ui.group)(function(_, callback) {
    var root428 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node60 = mobl.loadingSpan();
    root428.append(node60);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = items.get();
      list7.list(function(results7) {
        node60.empty();
        for(var i133 = 0; i133 < results7.length; i133++) {
          (function() {
            var iternode7 = $("<span>");
            node60.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i133), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i133), "_2");
            var nodes377 = $("<span>");
            iternode7.append(nodes377);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root429 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes378 = $("<span>");
              root429.append(nodes378);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root430 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root430); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes378;
                nodes378 = node.contents();
                oldNodes.replaceWith(nodes378);
              }));
              callback(root429); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes377;
              nodes377 = node.contents();
              oldNodes.replaceWith(nodes377);
            }));
            
            var oldNodes = iternode7;
            iternode7 = iternode7.contents();
            oldNodes.replaceWith(iternode7);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list7.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
      });
    };
    renderList7();
    
    callback(root428); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes376;
    nodes376 = node.contents();
    oldNodes.replaceWith(nodes376);
  }));
  callback(root427); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root431 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll157) {
    coll157 = coll157.reverse();
    function processOne13() {
      var it;
      it = coll157.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll157.length > 0) processOne13(); else rest13();
      
    }
    function rest13() {
      var nodes379 = $("<span>");
      root431.append(nodes379);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root432 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp383 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp384 = mobl.ref(result__);
        
        var nodes380 = $("<span>");
        root432.append(nodes380);
        subs__.addSub((ui.backButton)(tmp384, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp383, function(_, callback) {
          var root433 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root433); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes380;
          nodes380 = node.contents();
          oldNodes.replaceWith(nodes380);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll156) {
                           coll156 = coll156.reverse();
                           function processOne12() {
                             var checked;var it;
                             var tmp415 = coll156.pop();
                             checked = tmp415._1;it = tmp415._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll156.length > 0) processOne12(); else rest12();
                               
                             } else {
                               {
                                 
                                 if(coll156.length > 0) processOne12(); else rest12();
                                 
                               }
                             }
                           }
                           function rest12() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll156.length > 0) processOne12(); else rest12();
                         });
                         
                       };
        var tmp385 = mobl.ref(result__);
        
        var nodes381 = $("<span>");
        root432.append(nodes381);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp385, function(_, callback) {
          var root434 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root434); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes381;
          nodes381 = node.contents();
          oldNodes.replaceWith(nodes381);
        }));
        callback(root432); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes379;
        nodes379 = node.contents();
        oldNodes.replaceWith(nodes379);
      }));
      var nodes382 = $("<span>");
      root431.append(nodes382);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root435 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root435); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes382;
        nodes382 = node.contents();
        oldNodes.replaceWith(nodes382);
      }));
      callback(root431); return subs__;
      
      
    }
    if(coll157.length > 0) processOne13(); else rest13();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes383 = $("<span>");
  root436.append(nodes383);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root437); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes383;
    nodes383 = node.contents();
    oldNodes.replaceWith(nodes383);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp386 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes384 = $("<span>");
  root436.append(nodes384);
  subs__.addSub((ui.masterDetail)(tmp386, masterItem, detailItem, function(_, callback) {
    var root438 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root438); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes384;
    nodes384 = node.contents();
    oldNodes.replaceWith(nodes384);
  }));
  callback(root436); return subs__;
  
  
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
  var root439 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes385 = $("<span>");
  root439.append(nodes385);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root440 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node61 = mobl.loadingSpan();
    root440.append(node61);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = sections.get();
      list8.list(function(results8) {
        node61.empty();
        for(var i134 = 0; i134 < results8.length; i134++) {
          (function() {
            var iternode8 = $("<span>");
            node61.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i134), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i134), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp388 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp388.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp388.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp388.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp388.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp387 = mobl.ref(result__);
            
            var nodes386 = $("<span>");
            iternode8.append(nodes386);
            subs__.addSub((mobl.span)(tmp388, mobl.ref(null), tmp387, mobl.ref(null), function(_, callback) {
              var root441 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes387 = $("<span>");
              root441.append(nodes387);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root442 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root442); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes387;
                nodes387 = node.contents();
                oldNodes.replaceWith(nodes387);
              }));
              callback(root441); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes386;
              nodes386 = node.contents();
              oldNodes.replaceWith(nodes386);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp389 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp389.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp389.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp389.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp389.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes388 = $("<span>");
            iternode8.append(nodes388);
            subs__.addSub((mobl.block)(tmp389, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root443 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes389 = $("<span>");
              root443.append(nodes389);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl16();
              }));
              
              function renderControl16() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root444 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root444); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes389;
                  nodes389 = node.contents();
                  oldNodes.replaceWith(nodes389);
                }));
              }
              renderControl16();
              callback(root443); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes388;
              nodes388 = node.contents();
              oldNodes.replaceWith(nodes388);
            }));
            
            var oldNodes = iternode8;
            iternode8 = iternode8.contents();
            oldNodes.replaceWith(iternode8);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list8.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
      });
    };
    renderList8();
    
    callback(root440); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes385;
    nodes385 = node.contents();
    oldNodes.replaceWith(nodes385);
  }));
  callback(root439); return subs__;
  
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
  var root445 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<table>");
  
  var ref57 = style;
  if(ref57.get() !== null) {
    node62.attr('class', ref57.get());
    subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
      node62.attr('class', val);
    }));
    
  }
  subs__.addSub(ref57.rebind());
  
  var nodes390 = $("<span>");
  node62.append(nodes390);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl17();
  }));
  
  function renderControl17() {
    subs__.addSub((elements)(function(elements, callback) {
      var root446 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root446); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes390;
      nodes390 = node.contents();
      oldNodes.replaceWith(nodes390);
    }));
  }
  renderControl17();
  root445.append(node62);
  callback(root445); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root447 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node63 = $("<tr>");
  
  var ref58 = style;
  if(ref58.get() !== null) {
    node63.attr('class', ref58.get());
    subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
      node63.attr('class', val);
    }));
    
  }
  subs__.addSub(ref58.rebind());
  
  var nodes391 = $("<span>");
  node63.append(nodes391);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl18();
  }));
  
  function renderControl18() {
    subs__.addSub((elements)(function(elements, callback) {
      var root448 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root448); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes391;
      nodes391 = node.contents();
      oldNodes.replaceWith(nodes391);
    }));
  }
  renderControl18();
  root447.append(node63);
  callback(root447); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root449 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node64 = $("<td>");
  
  var ref59 = width;
  if(ref59.get() !== null) {
    node64.attr('width', ref59.get());
    subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
      node64.attr('width', val);
    }));
    
  }
  subs__.addSub(ref59.rebind());
  
  var ref60 = style;
  if(ref60.get() !== null) {
    node64.attr('class', ref60.get());
    subs__.addSub(ref60.addEventListener('change', function(_, ref, val) {
      node64.attr('class', val);
    }));
    
  }
  subs__.addSub(ref60.rebind());
  
  var nodes392 = $("<span>");
  node64.append(nodes392);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root450 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root450); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes392;
      nodes392 = node.contents();
      oldNodes.replaceWith(nodes392);
    }));
  }
  renderControl19();
  root449.append(node64);
  callback(root449); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root451 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node65 = $("<td>");
  
  var ref61 = width;
  if(ref61.get() !== null) {
    node65.attr('width', ref61.get());
    subs__.addSub(ref61.addEventListener('change', function(_, ref, val) {
      node65.attr('width', val);
    }));
    
  }
  subs__.addSub(ref61.rebind());
  
  var ref62 = style;
  if(ref62.get() !== null) {
    node65.attr('class', ref62.get());
    subs__.addSub(ref62.addEventListener('change', function(_, ref, val) {
      node65.attr('class', val);
    }));
    
  }
  subs__.addSub(ref62.rebind());
  
  var nodes393 = $("<span>");
  node65.append(nodes393);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((elements)(function(elements, callback) {
      var root452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root452); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes393;
      nodes393 = node.contents();
      oldNodes.replaceWith(nodes393);
    }));
  }
  renderControl20();
  root451.append(node65);
  callback(root451); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root453 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node66 = $("<td>");
  
  var ref63 = width;
  if(ref63.get() !== null) {
    node66.attr('width', ref63.get());
    subs__.addSub(ref63.addEventListener('change', function(_, ref, val) {
      node66.attr('width', val);
    }));
    
  }
  subs__.addSub(ref63.rebind());
  
  var ref64 = style;
  if(ref64.get() !== null) {
    node66.attr('class', ref64.get());
    subs__.addSub(ref64.addEventListener('change', function(_, ref, val) {
      node66.attr('class', val);
    }));
    
  }
  subs__.addSub(ref64.rebind());
  
  
  var node67 = $("<strong>");
  
  var nodes394 = $("<span>");
  node67.append(nodes394);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root454 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root454); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes394;
      nodes394 = node.contents();
      oldNodes.replaceWith(nodes394);
    }));
  }
  renderControl21();
  node66.append(node67);
  root453.append(node66);
  callback(root453); return subs__;
  
  
  
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
  items.list(function(coll158) {
    coll158 = coll158.reverse();
    function processOne14() {
      var item;
      item = coll158.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll158.length > 0) processOne14(); else rest14();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll158.length > 0) processOne14(); else rest14();
          
        }
      }
    }
    function rest14() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll158.length > 0) processOne14(); else rest14();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root455 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp417 = result__;
    var current = mobl.ref(result__);
    
    var node68 = $("<div>");
    node68.attr('width', "100%");
    
    
    var node69 = $("<div>");
    node69.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes396 = $("<span>");
    node69.append(nodes396);
    subs__.addSub((ui.group)(function(_, callback) {
      var root457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node74 = mobl.loadingSpan();
      root457.append(node74);
      var list9;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList9 = function() {
        var subs__ = listSubs__;
        list9 = items.get();
        list9.list(function(results9) {
          node74.empty();
          for(var i135 = 0; i135 < results9.length; i135++) {
            (function() {
              var iternode9 = $("<span>");
              node74.append(iternode9);
              var it;
              it = mobl.ref(mobl.ref(results9), i135);
              var result__ = it.get() == current.get();
              var tmp393 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp393.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp393.set(it.get() == current.get());
              }));
              
              
              var node75 = $("<span>");
              iternode9.append(node75);
              var condSubs19 = new mobl.CompSubscription();
              subs__.addSub(condSubs19);
              var oldValue19;
              var renderCond19 = function() {
                var value115 = tmp393.get();
                if(oldValue19 === value115) return;
                oldValue19 = value115;
                var subs__ = condSubs19;
                subs__.unsubscribe();
                node75.empty();
                if(value115) {
                  var nodes397 = $("<span>");
                  node75.append(nodes397);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root458 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp429 = result__;
                      var tmp390 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp427 = result__;
                          var result__ = tmp427;
                          tmp390.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp428 = result__;
                          var result__ = tmp428;
                          tmp390.set(result__);
                          
                        });
                      }));
                      
                      var nodes398 = $("<span>");
                      root458.append(nodes398);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl23();
                      }));
                      
                      function renderControl23() {
                        subs__.addSub((masterItem.get())(it, tmp390, function(elements, callback) {
                          var root459 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root459); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes398;
                          nodes398 = node.contents();
                          oldNodes.replaceWith(nodes398);
                        }));
                      }
                      renderControl23();
                      callback(root458); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes397;
                    nodes397 = node.contents();
                    oldNodes.replaceWith(nodes397);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp392 = mobl.ref(result__);
                  
                  var nodes399 = $("<span>");
                  node75.append(nodes399);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp392, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root460 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp432 = result__;
                      var tmp391 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp430 = result__;
                          var result__ = tmp430;
                          tmp391.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp431 = result__;
                          var result__ = tmp431;
                          tmp391.set(result__);
                          
                        });
                      }));
                      
                      var nodes400 = $("<span>");
                      root460.append(nodes400);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl24();
                      }));
                      
                      function renderControl24() {
                        subs__.addSub((masterItem.get())(it, tmp391, function(elements, callback) {
                          var root461 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root461); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes400;
                          nodes400 = node.contents();
                          oldNodes.replaceWith(nodes400);
                        }));
                      }
                      renderControl24();
                      callback(root460); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes399;
                    nodes399 = node.contents();
                    oldNodes.replaceWith(nodes399);
                  }));
                  
                  
                }
              };
              renderCond19();
              subs__.addSub(tmp393.addEventListener('change', function() {
                renderCond19();
              }));
              
              
              var oldNodes = iternode9;
              iternode9 = iternode9.contents();
              oldNodes.replaceWith(iternode9);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list9.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
        });
      };
      renderList9();
      
      callback(root457); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes396;
      nodes396 = node.contents();
      oldNodes.replaceWith(nodes396);
    }));
    node68.append(node69);
    
    var node70 = $("<div>");
    node70.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    items.get().count(function(result__) {
      var tmp426 = result__;
      var result__ = tmp426 > 0;
      var tmp425 = result__;
      var result__ = current.get() && tmp425;
      var tmp424 = result__;
      var tmp394 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        items.get().count(function(result__) {
          var tmp420 = result__;
          var result__ = tmp420 > 0;
          var tmp419 = result__;
          var result__ = current.get() && tmp419;
          var tmp418 = result__;
          var result__ = tmp418;
          tmp394.set(result__);
          
        });
      }));
      subs__.addSub(items.addEventListener('change', function() {
        items.get().count(function(result__) {
          var tmp423 = result__;
          var result__ = tmp423 > 0;
          var tmp422 = result__;
          var result__ = current.get() && tmp422;
          var tmp421 = result__;
          var result__ = tmp421;
          tmp394.set(result__);
          
        });
      }));
      
      
      var node71 = $("<span>");
      node70.append(node71);
      var condSubs18 = new mobl.CompSubscription();
      subs__.addSub(condSubs18);
      var oldValue18;
      var renderCond18 = function() {
        var value114 = tmp394.get();
        if(oldValue18 === value114) return;
        oldValue18 = value114;
        var subs__ = condSubs18;
        subs__.unsubscribe();
        node71.empty();
        if(value114) {
          var nodes395 = $("<span>");
          node71.append(nodes395);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl22();
          }));
          
          function renderControl22() {
            subs__.addSub((detail.get())(current, function(elements, callback) {
              var root456 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root456); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes395;
              nodes395 = node.contents();
              oldNodes.replaceWith(nodes395);
            }));
          }
          renderControl22();
          
          
        } else {
          
          var node72 = $("<div>");
          node72.attr('style', "padding:20px");
          
          
          var node73 = $("<h2>");
          
          
          node73.append("Add more questions.");
          node72.append(node73);
          node71.append(node72);
          
          
          
        }
      };
      renderCond18();
      subs__.addSub(tmp394.addEventListener('change', function() {
        renderCond18();
      }));
      
      node68.append(node70);
      root455.append(node68);
      callback(root455); return subs__;
      
    });
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
