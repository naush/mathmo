mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root370 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node22 = $("<span>");
  root370.append(node22);
  var condSubs8 = new mobl.CompSubscription();
  subs__.addSub(condSubs8);
  var oldValue8;
  var renderCond8 = function() {
    var value20 = value.get();
    if(oldValue8 === value20) return;
    oldValue8 = value20;
    var subs__ = condSubs8;
    subs__.unsubscribe();
    node22.empty();
    if(value20) {
      var nodes342 = $("<span>");
      node22.append(nodes342);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl2();
      }));
      
      function renderControl2() {
        subs__.addSub((elements)(function(elements, callback) {
          var root371 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root371); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes342;
          nodes342 = node.contents();
          oldNodes.replaceWith(nodes342);
        }));
      }
      renderControl2();
      
      
    } else {
      var nodes343 = $("<span>");
      node22.append(nodes343);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root372 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes344 = $("<span>");
        root372.append(nodes344);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root373 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root373); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes344;
          nodes344 = node.contents();
          oldNodes.replaceWith(nodes344);
        }));
        var nodes345 = $("<span>");
        root372.append(nodes345);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root374 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root374); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes345;
          nodes345 = node.contents();
          oldNodes.replaceWith(nodes345);
        }));
        callback(root372); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes343;
        nodes343 = node.contents();
        oldNodes.replaceWith(nodes343);
      }));
      
      
    }
  };
  renderCond8();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond8();
  }));
  
  callback(root370); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node23 = $("<div>");
  
  var ref11 = mobl.ref(ui.headerStyle);
  if(ref11.get() !== null) {
    node23.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node23.attr('class', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  var val2 = onclick.get();
  if(val2 !== null) {
    subs__.addSub(mobl.domBind(node23, 'tap', val2));
  }
  
  var ref12 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref12.get() !== null) {
    node23.attr('style', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node23.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node23.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  
  var node26 = $("<div>");
  
  var ref10 = mobl.ref(ui.headerContainerStyle);
  if(ref10.get() !== null) {
    node26.attr('class', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      node26.attr('class', val);
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  
  var node27 = $("<div>");
  
  var ref8 = text;
  node27.text(""+ref8.get());
  var ignore2 = false;
  subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    node27.text(""+val);
  }));
  subs__.addSub(ref8.rebind());
  
  
  var ref9 = mobl.ref(ui.headerTextStyle);
  if(ref9.get() !== null) {
    node27.attr('class', ref9.get());
    subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
      node27.attr('class', val);
    }));
    
  }
  subs__.addSub(ref9.rebind());
  
  node26.append(node27);
  node23.append(node26);
  var nodes346 = $("<span>");
  node23.append(nodes346);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl3();
  }));
  
  function renderControl3() {
    subs__.addSub((elements)(function(elements, callback) {
      var root376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root376); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes346;
      nodes346 = node.contents();
      oldNodes.replaceWith(nodes346);
    }));
  }
  renderControl3();
  root375.append(node23);
  
  var node24 = $("<span>");
  root375.append(node24);
  var condSubs9 = new mobl.CompSubscription();
  subs__.addSub(condSubs9);
  var oldValue9;
  var renderCond9 = function() {
    var value21 = fixedPosition.get();
    if(oldValue9 === value21) return;
    oldValue9 = value21;
    var subs__ = condSubs9;
    subs__.unsubscribe();
    node24.empty();
    if(value21) {
      
      var node25 = $("<div>");
      node25.attr('id', "hello");
      node25.attr('style', "height: 2.9em;");
      
      node24.append(node25);
      
      
    } else {
      
    }
  };
  renderCond9();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond9();
  }));
  
  callback(root375); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root377 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref13 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref13.get() !== null) {
    sp.attr('class', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref13.rebind());
  
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
                    var tmp411 = result__;
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
  
  var ref14 = text;
  sp.text(""+ref14.get());
  var ignore3 = false;
  subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref14.rebind());
  
  
  root377.append(sp);
  callback(root377); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes347 = $("<span>");
  root378.append(nodes347);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root379 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root379); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes347;
    nodes347 = node.contents();
    oldNodes.replaceWith(nodes347);
  }));
  callback(root378); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root380 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes348 = $("<span>");
  root380.append(nodes348);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root381 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root381); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes348;
    nodes348 = node.contents();
    oldNodes.replaceWith(nodes348);
  }));
  callback(root380); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root382 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node28 = $("<ul>");
  
  var ref15 = mobl.ref(ui.groupStyle);
  if(ref15.get() !== null) {
    node28.attr('class', ref15.get());
    subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
      node28.attr('class', val);
    }));
    
  }
  subs__.addSub(ref15.rebind());
  
  var nodes349 = $("<span>");
  node28.append(nodes349);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl4();
  }));
  
  function renderControl4() {
    subs__.addSub((elements)(function(elements, callback) {
      var root383 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root383); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes349;
      nodes349 = node.contents();
      oldNodes.replaceWith(nodes349);
    }));
  }
  renderControl4();
  root382.append(node28);
  callback(root382); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node29 = $("<img>");
  
  var ref16 = url;
  if(ref16.get() !== null) {
    node29.attr('src', ref16.get());
    subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
      node29.attr('src', val);
    }));
    
  }
  subs__.addSub(ref16.rebind());
  
  var ref17 = width;
  if(ref17.get() !== null) {
    node29.attr('width', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      node29.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var ref18 = height;
  if(ref18.get() !== null) {
    node29.attr('height', ref18.get());
    subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
      node29.attr('height', val);
    }));
    
  }
  subs__.addSub(ref18.rebind());
  
  var ref19 = style;
  if(ref19.get() !== null) {
    node29.attr('class', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      node29.attr('class', val);
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  var val7 = onclick.get();
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(node29, 'tap', val7));
  }
  
  var ref20 = valign;
  if(ref20.get() !== null) {
    node29.attr('valign', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node29.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  var ref21 = align;
  if(ref21.get() !== null) {
    node29.attr('align', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      node29.attr('align', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  root384.append(node29);
  callback(root384); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root385 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref22 = mobl.ref(ui.itemStyle);
  if(ref22.get() !== null) {
    el.attr('class', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref22.rebind());
  
  var ref23 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref23.get() !== null) {
    el.attr('class', ref23.get());
    subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref23.rebind());
  
  var val8 = onswipe.get();
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val8));
  }
  
  var val9 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp412 = result__;
                                           function after1(result__) {
                                             var tmp413 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp414 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val9));
  }
  
  var nodes350 = $("<span>");
  el.append(nodes350);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root386 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root386); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes350;
      nodes350 = node.contents();
      oldNodes.replaceWith(nodes350);
    }));
  }
  renderControl5();
  root385.append(el);
  callback(root385); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root387 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node30 = $("<input>");
  node30.attr('type', "checkbox");
  
  var ref25 = b;
  node30.attr('checked', !!ref25.get());
  subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
    if(ref === ref25) node30.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node30, 'change', function() {
    b.set(!!node30.attr('checked'));
  }));
  
  var val11 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(node30, 'tap', val11));
  }
  
  var val12 = onchange.get();
  if(val12 !== null) {
    subs__.addSub(mobl.domBind(node30, 'change', val12));
  }
  
  root387.append(node30);
  
  root387.append(" ");
  
  var node31 = $("<span>");
  
  var ref24 = label;
  node31.text(""+ref24.get());
  var ignore4 = false;
  subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
    if(ignore4) return;
    node31.text(""+val);
  }));
  subs__.addSub(ref24.rebind());
  
  
  var val10 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp415 = result__;
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
    subs__.addSub(mobl.domBind(node31, 'tap', val10));
  }
  
  root387.append(node31);
  callback(root387); return subs__;
  
  
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
  var root388 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node32 = $("<span>");
  root388.append(node32);
  var condSubs10 = new mobl.CompSubscription();
  subs__.addSub(condSubs10);
  var oldValue10;
  var renderCond10 = function() {
    var value22 = label.get();
    if(oldValue10 === value22) return;
    oldValue10 = value22;
    var subs__ = condSubs10;
    subs__.unsubscribe();
    node32.empty();
    if(value22) {
      var nodes351 = $("<span>");
      node32.append(nodes351);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root389 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root389); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes351;
        nodes351 = node.contents();
        oldNodes.replaceWith(nodes351);
      }));
      
      
    } else {
      
    }
  };
  renderCond10();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond10();
  }));
  
  
  var node33 = $("<span>");
  root388.append(node33);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value23 = validator.get();
    if(oldValue11 === value23) return;
    oldValue11 = value23;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node33.empty();
    if(value23) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after6(result__) {
        var tmp416 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp417 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node34 = $("<input>");
        
        var ref26 = inputType;
        if(ref26.get() !== null) {
          node34.attr('type', ref26.get());
          subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
            node34.attr('type', val);
          }));
          
        }
        subs__.addSub(ref26.rebind());
        
        var ref27 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref27.get() !== null) {
          node34.attr('class', ref27.get());
          subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
            node34.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node34.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node34.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node34.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref27.rebind());
        
        var ref28 = placeholder;
        if(ref28.get() !== null) {
          node34.attr('placeholder', ref28.get());
          subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
            node34.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref28.rebind());
        
        var ref29 = temp;
        node34.val(""+ref29.get());
        var ignore5 = false;
        subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
          if(ignore5) return;
          node34.val(""+val);
        }));
        subs__.addSub(ref29.rebind());
        
        subs__.addSub(mobl.domBind(node34, 'keyup change', function() {
          ignore5 = true;
          temp.set(mobl.stringTomobl__String(node34.val()));
          ignore5 = false;
        }));
        
        
        var val13 = onchange.get();
        if(val13 !== null) {
          subs__.addSub(mobl.domBind(node34, 'change', val13));
        }
        
        var val14 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp418 = result__;
                          function after4(result__) {
                            var tmp419 = result__;
                            var result__ = tmp419;
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
                            var tmp419 = result__;
                            var result__ = tmp419;
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
          subs__.addSub(mobl.domBind(node34, 'keyup', val14));
        }
        
        var val15 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val15 !== null) {
          subs__.addSub(mobl.domBind(node34, 'blur', val15));
        }
        
        node33.append(node34);
        var nodes352 = $("<span>");
        node33.append(nodes352);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root390 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root390); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes352;
          nodes352 = node.contents();
          oldNodes.replaceWith(nodes352);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node35 = $("<input>");
      
      var ref30 = inputType;
      if(ref30.get() !== null) {
        node35.attr('type', ref30.get());
        subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
          node35.attr('type', val);
        }));
        
      }
      subs__.addSub(ref30.rebind());
      
      var ref31 = style;
      if(ref31.get() !== null) {
        node35.attr('class', ref31.get());
        subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
          node35.attr('class', val);
        }));
        
      }
      subs__.addSub(ref31.rebind());
      
      var ref32 = placeholder;
      if(ref32.get() !== null) {
        node35.attr('placeholder', ref32.get());
        subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
          node35.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref32.rebind());
      
      var ref33 = s;
      node35.val(""+ref33.get());
      var ignore6 = false;
      subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node35.val(""+val);
      }));
      subs__.addSub(ref33.rebind());
      
      subs__.addSub(mobl.domBind(node35, 'keyup change', function() {
        ignore6 = true;
        s.set(mobl.stringTomobl__String(node35.val()));
        ignore6 = false;
      }));
      
      
      var val16 = onchange.get();
      if(val16 !== null) {
        subs__.addSub(mobl.domBind(node35, 'change', val16));
      }
      
      var val17 = onkeyup.get();
      if(val17 !== null) {
        subs__.addSub(mobl.domBind(node35, 'keyup', val17));
      }
      
      var val18 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val18 !== null) {
        subs__.addSub(mobl.domBind(node35, 'blur', val18));
      }
      
      node33.append(node35);
      
      
    }
  };
  renderCond11();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond11();
  }));
  
  callback(root388); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root391 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes353 = $("<span>");
  root391.append(nodes353);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root392 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root392); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes353;
    nodes353 = node.contents();
    oldNodes.replaceWith(nodes353);
  }));
  callback(root391); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root393 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes354 = $("<span>");
  root393.append(nodes354);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root394 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root394); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes354;
    nodes354 = node.contents();
    oldNodes.replaceWith(nodes354);
  }));
  callback(root393); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root395 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node36 = $("<span>");
  root395.append(node36);
  var condSubs12 = new mobl.CompSubscription();
  subs__.addSub(condSubs12);
  var oldValue12;
  var renderCond12 = function() {
    var value24 = label.get();
    if(oldValue12 === value24) return;
    oldValue12 = value24;
    var subs__ = condSubs12;
    subs__.unsubscribe();
    node36.empty();
    if(value24) {
      var nodes355 = $("<span>");
      node36.append(nodes355);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root396 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root396); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes355;
        nodes355 = node.contents();
        oldNodes.replaceWith(nodes355);
      }));
      
      
    } else {
      
    }
  };
  renderCond12();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond12();
  }));
  
  
  var node37 = $("<input>");
  node37.attr('type', "range");
  
  var ref34 = n;
  node37.val(""+ref34.get());
  var ignore7 = false;
  subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
    if(ignore7) return;
    node37.val(""+val);
  }));
  subs__.addSub(ref34.rebind());
  
  subs__.addSub(mobl.domBind(node37, 'keyup change', function() {
    ignore7 = true;
    n.set(mobl.stringTomobl__Num(node37.val()));
    ignore7 = false;
  }));
  
  
  var ref35 = min;
  if(ref35.get() !== null) {
    node37.attr('min', ref35.get());
    subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
      node37.attr('min', val);
    }));
    
  }
  subs__.addSub(ref35.rebind());
  
  var ref36 = max;
  if(ref36.get() !== null) {
    node37.attr('max', ref36.get());
    subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
      node37.attr('max', val);
    }));
    
  }
  subs__.addSub(ref36.rebind());
  
  var ref37 = step;
  if(ref37.get() !== null) {
    node37.attr('step', ref37.get());
    subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
      node37.attr('step', val);
    }));
    
  }
  subs__.addSub(ref37.rebind());
  node37.attr('style', "width: 99%;");
  
  var val19 = onchange.get();
  if(val19 !== null) {
    subs__.addSub(mobl.domBind(node37, 'change', val19));
  }
  
  var val20 = onkeyup.get();
  if(val20 !== null) {
    subs__.addSub(mobl.domBind(node37, 'keyup', val20));
  }
  
  var ref38 = placeholder;
  if(ref38.get() !== null) {
    node37.attr('placeholder', ref38.get());
    subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
      node37.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref38.rebind());
  
  root395.append(node37);
  callback(root395); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root397 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after7(result__) {
      var tmp420 = result__;
      var result__ = tmp420;
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
  var nodes356 = $("<span>");
  root397.append(nodes356);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root398 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root398); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes356;
    nodes356 = node.contents();
    oldNodes.replaceWith(nodes356);
  }));
  callback(root397); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node38 = $("<span>");
  root399.append(node38);
  var condSubs13 = new mobl.CompSubscription();
  subs__.addSub(condSubs13);
  var oldValue13;
  var renderCond13 = function() {
    var value25 = label.get();
    if(oldValue13 === value25) return;
    oldValue13 = value25;
    var subs__ = condSubs13;
    subs__.unsubscribe();
    node38.empty();
    if(value25) {
      
      var node39 = $("<span>");
      node39.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref42 = label;
      node39.text(""+ref42.get());
      var ignore9 = false;
      subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
        if(ignore9) return;
        node39.text(""+val);
      }));
      subs__.addSub(ref42.rebind());
      
      
      node38.append(node39);
      
      var node40 = $("<span>");
      node40.attr('style', "float: left");
      
      
      var node41 = $("<input>");
      node41.attr('type', "password");
      
      var ref39 = style;
      if(ref39.get() !== null) {
        node41.attr('class', ref39.get());
        subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
          node41.attr('class', val);
        }));
        
      }
      subs__.addSub(ref39.rebind());
      
      var ref40 = placeholder;
      if(ref40.get() !== null) {
        node41.attr('placeholder', ref40.get());
        subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
          node41.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref40.rebind());
      
      var ref41 = s;
      node41.val(""+ref41.get());
      var ignore8 = false;
      subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node41.val(""+val);
      }));
      subs__.addSub(ref41.rebind());
      
      subs__.addSub(mobl.domBind(node41, 'keyup change', function() {
        ignore8 = true;
        s.set(mobl.stringTomobl__String(node41.val()));
        ignore8 = false;
      }));
      
      
      var val21 = onchange.get();
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node41, 'change', val21));
      }
      
      var val22 = onkeyup.get();
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node41, 'keyup', val22));
      }
      
      var val23 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val23 !== null) {
        subs__.addSub(mobl.domBind(node41, 'blur', val23));
      }
      
      node40.append(node41);
      node38.append(node40);
      
      
      
      
    } else {
      
      var node42 = $("<input>");
      node42.attr('type', "password");
      
      var ref43 = style;
      if(ref43.get() !== null) {
        node42.attr('class', ref43.get());
        subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
          node42.attr('class', val);
        }));
        
      }
      subs__.addSub(ref43.rebind());
      
      var ref44 = placeholder;
      if(ref44.get() !== null) {
        node42.attr('placeholder', ref44.get());
        subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
          node42.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref44.rebind());
      
      var ref45 = s;
      node42.val(""+ref45.get());
      var ignore10 = false;
      subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
        if(ignore10) return;
        node42.val(""+val);
      }));
      subs__.addSub(ref45.rebind());
      
      subs__.addSub(mobl.domBind(node42, 'keyup change', function() {
        ignore10 = true;
        s.set(mobl.stringTomobl__String(node42.val()));
        ignore10 = false;
      }));
      
      
      var val24 = onchange.get();
      if(val24 !== null) {
        subs__.addSub(mobl.domBind(node42, 'change', val24));
      }
      
      var val25 = onkeyup.get();
      if(val25 !== null) {
        subs__.addSub(mobl.domBind(node42, 'keyup', val25));
      }
      
      var val26 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val26 !== null) {
        subs__.addSub(mobl.domBind(node42, 'blur', val26));
      }
      
      node38.append(node42);
      
      
    }
  };
  renderCond13();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond13();
  }));
  
  callback(root399); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root400 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref50 = style;
  if(ref50.get() !== null) {
    sel.attr('class', ref50.get());
    subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref50.rebind());
  
  var val27 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after8(result__) {
                    var tmp422 = result__;
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
  
  
  var node43 = mobl.loadingSpan();
  sel.append(node43);
  var list0;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList0 = function() {
    var subs__ = listSubs__;
    list0 = options.get();
    list0.list(function(results0) {
      node43.empty();
      for(var i108 = 0; i108 < results0.length; i108++) {
        (function() {
          var iternode0 = $("<span>");
          node43.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i108), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i108), "_2");
          
          var node44 = $("<option>");
          
          var ref46 = optionDescription;
          node44.text(""+ref46.get());
          var ignore11 = false;
          subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
            if(ignore11) return;
            node44.text(""+val);
          }));
          subs__.addSub(ref46.rebind());
          
          
          var ref47 = optionStyle;
          if(ref47.get() !== null) {
            node44.attr('class', ref47.get());
            subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
              node44.attr('class', val);
            }));
            
          }
          subs__.addSub(ref47.rebind());
          
          var ref48 = optionValue;
          if(ref48.get() !== null) {
            node44.attr('value', ref48.get());
            subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
              node44.attr('value', val);
            }));
            
          }
          subs__.addSub(ref48.rebind());
          
          var ref49 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref49.get() !== null) {
            node44.attr('selected', ref49.get());
            subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
              node44.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node44.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node44.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref49.rebind());
          
          iternode0.append(node44);
          
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
  
  root400.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root400); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root401 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes357 = $("<span>");
    root401.append(nodes357);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root402 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node45 = mobl.loadingSpan();
      root402.append(node45);
      var list1;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1 = function() {
        var subs__ = listSubs__;
        list1 = tabs.get();
        list1.list(function(results1) {
          node45.empty();
          for(var i109 = 0; i109 < results1.length; i109++) {
            (function() {
              var iternode1 = $("<span>");
              node45.append(iternode1);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1), i109), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i109), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i109), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp384 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp384.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp384.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp384.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp384.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp383 = mobl.ref(result__);
              
              var nodes358 = $("<span>");
              iternode1.append(nodes358);
              subs__.addSub((mobl.span)(tmp384, mobl.ref(null), tmp383, mobl.ref(null), function(_, callback) {
                var root403 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes359 = $("<span>");
                root403.append(nodes359);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root404 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root404); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes359;
                  nodes359 = node.contents();
                  oldNodes.replaceWith(nodes359);
                }));
                callback(root403); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes358;
                nodes358 = node.contents();
                oldNodes.replaceWith(nodes358);
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
      
      callback(root402); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes357;
      nodes357 = node.contents();
      oldNodes.replaceWith(nodes357);
    }));
    
    var node46 = mobl.loadingSpan();
    root401.append(node46);
    var list2;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2 = function() {
      var subs__ = listSubs__;
      list2 = tabs.get();
      list2.list(function(results2) {
        node46.empty();
        for(var i110 = 0; i110 < results2.length; i110++) {
          (function() {
            var iternode2 = $("<span>");
            node46.append(iternode2);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2), i110), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i110), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i110), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp385 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp385.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp385.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp385.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp385.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes360 = $("<span>");
            iternode2.append(nodes360);
            subs__.addSub((mobl.block)(tmp385, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root405 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes361 = $("<span>");
              root405.append(nodes361);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root406 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes362 = $("<span>");
                root406.append(nodes362);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl6();
                }));
                
                function renderControl6() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root407 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root407); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes362;
                    nodes362 = node.contents();
                    oldNodes.replaceWith(nodes362);
                  }));
                }
                renderControl6();
                callback(root406); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes361;
                nodes361 = node.contents();
                oldNodes.replaceWith(nodes361);
              }));
              callback(root405); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes360;
              nodes360 = node.contents();
              oldNodes.replaceWith(nodes360);
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
    
    callback(root401); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes357 = $("<span>");
      root401.append(nodes357);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root402 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node45 = mobl.loadingSpan();
        root402.append(node45);
        var list1;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList1 = function() {
          var subs__ = listSubs__;
          list1 = tabs.get();
          list1.list(function(results1) {
            node45.empty();
            for(var i109 = 0; i109 < results1.length; i109++) {
              (function() {
                var iternode1 = $("<span>");
                node45.append(iternode1);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results1), i109), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i109), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i109), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp384 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp384.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp384.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp384.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp384.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp383 = mobl.ref(result__);
                
                var nodes358 = $("<span>");
                iternode1.append(nodes358);
                subs__.addSub((mobl.span)(tmp384, mobl.ref(null), tmp383, mobl.ref(null), function(_, callback) {
                  var root403 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes359 = $("<span>");
                  root403.append(nodes359);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root404 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root404); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes359;
                    nodes359 = node.contents();
                    oldNodes.replaceWith(nodes359);
                  }));
                  callback(root403); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes358;
                  nodes358 = node.contents();
                  oldNodes.replaceWith(nodes358);
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
        
        callback(root402); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes357;
        nodes357 = node.contents();
        oldNodes.replaceWith(nodes357);
      }));
      
      var node46 = mobl.loadingSpan();
      root401.append(node46);
      var list2;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2 = function() {
        var subs__ = listSubs__;
        list2 = tabs.get();
        list2.list(function(results2) {
          node46.empty();
          for(var i110 = 0; i110 < results2.length; i110++) {
            (function() {
              var iternode2 = $("<span>");
              node46.append(iternode2);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results2), i110), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i110), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i110), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp385 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp385.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp385.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp385.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp385.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes360 = $("<span>");
              iternode2.append(nodes360);
              subs__.addSub((mobl.block)(tmp385, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root405 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes361 = $("<span>");
                root405.append(nodes361);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root406 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes362 = $("<span>");
                  root406.append(nodes362);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl6();
                  }));
                  
                  function renderControl6() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root407 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root407); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes362;
                      nodes362 = node.contents();
                      oldNodes.replaceWith(nodes362);
                    }));
                  }
                  renderControl6();
                  callback(root406); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes361;
                  nodes361 = node.contents();
                  oldNodes.replaceWith(nodes361);
                }));
                callback(root405); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes360;
                nodes360 = node.contents();
                oldNodes.replaceWith(nodes360);
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
      
      callback(root401); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node47 = $("<div>");
  
  var ref54 = mobl.ref(ui.searchboxStyle);
  if(ref54.get() !== null) {
    node47.attr('class', ref54.get());
    subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
      node47.attr('class', val);
    }));
    
  }
  subs__.addSub(ref54.rebind());
  
  
  var node48 = $("<input>");
  node48.attr('type', "search");
  
  var ref51 = mobl.ref(ui.searchBoxInputStyle);
  if(ref51.get() !== null) {
    node48.attr('class', ref51.get());
    subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
      node48.attr('class', val);
    }));
    
  }
  subs__.addSub(ref51.rebind());
  
  var ref52 = placeholder;
  if(ref52.get() !== null) {
    node48.attr('placeholder', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      node48.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var ref53 = s;
  node48.val(""+ref53.get());
  var ignore12 = false;
  subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    node48.val(""+val);
  }));
  subs__.addSub(ref53.rebind());
  
  subs__.addSub(mobl.domBind(node48, 'keyup change', function() {
    ignore12 = true;
    s.set(mobl.stringTomobl__String(node48.val()));
    ignore12 = false;
  }));
  
  
  var val28 = onsearch.get();
  if(val28 !== null) {
    subs__.addSub(mobl.domBind(node48, 'change', val28));
  }
  
  var val29 = onkeyup.get();
  if(val29 !== null) {
    subs__.addSub(mobl.domBind(node48, 'keyup', val29));
  }
  node48.attr('autocorrect', false);
  node48.attr('autocapitalize', false);
  node48.attr('autocomplete', false);
  
  node47.append(node48);
  root408.append(node47);
  callback(root408); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root409 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref55 = mobl.ref(ui.contextMenuStyle);
  if(ref55.get() !== null) {
    menu.attr('class', ref55.get());
    subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref55.rebind());
  
  var nodes363 = $("<span>");
  menu.append(nodes363);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root410 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root410); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes363;
      nodes363 = node.contents();
      oldNodes.replaceWith(nodes363);
    }));
  }
  renderControl7();
  root409.append(menu);
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
                  var tmp425 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val30));
  }
  
  root409.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root409); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root411 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp410 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp410.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node49 = $("<span>");
  root411.append(node49);
  var condSubs14 = new mobl.CompSubscription();
  subs__.addSub(condSubs14);
  var oldValue14;
  var renderCond14 = function() {
    var value26 = tmp410.get();
    if(oldValue14 === value26) return;
    oldValue14 = value26;
    var subs__ = condSubs14;
    subs__.unsubscribe();
    node49.empty();
    if(value26) {
      items.get().one(function(result__) {
        var tmp426 = result__;
        var current = mobl.ref(result__);
        
        var node50 = $("<div>");
        node50.attr('width', "100%");
        
        
        var node51 = $("<div>");
        node51.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes366 = $("<span>");
        node51.append(nodes366);
        subs__.addSub((ui.group)(function(_, callback) {
          var root414 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node54 = mobl.loadingSpan();
          root414.append(node54);
          var list3;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3 = function() {
            var subs__ = listSubs__;
            list3 = items.get();
            list3.list(function(results3) {
              node54.empty();
              for(var i111 = 0; i111 < results3.length; i111++) {
                (function() {
                  var iternode3 = $("<span>");
                  node54.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i111);
                  var result__ = it.get() == current.get();
                  var tmp391 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp391.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp391.set(it.get() == current.get());
                  }));
                  
                  
                  var node55 = $("<span>");
                  iternode3.append(node55);
                  var condSubs16 = new mobl.CompSubscription();
                  subs__.addSub(condSubs16);
                  var oldValue16;
                  var renderCond16 = function() {
                    var value28 = tmp391.get();
                    if(oldValue16 === value28) return;
                    oldValue16 = value28;
                    var subs__ = condSubs16;
                    subs__.unsubscribe();
                    node55.empty();
                    if(value28) {
                      var nodes367 = $("<span>");
                      node55.append(nodes367);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root415 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes368 = $("<span>");
                        root415.append(nodes368);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl9();
                        }));
                        
                        function renderControl9() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root416 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root416); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes368;
                            nodes368 = node.contents();
                            oldNodes.replaceWith(nodes368);
                          }));
                        }
                        renderControl9();
                        callback(root415); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes367;
                        nodes367 = node.contents();
                        oldNodes.replaceWith(nodes367);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp390 = mobl.ref(result__);
                      
                      var nodes369 = $("<span>");
                      node55.append(nodes369);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp390, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root417 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes370 = $("<span>");
                        root417.append(nodes370);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl10();
                        }));
                        
                        function renderControl10() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root418 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root418); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes370;
                            nodes370 = node.contents();
                            oldNodes.replaceWith(nodes370);
                          }));
                        }
                        renderControl10();
                        callback(root417); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes369;
                        nodes369 = node.contents();
                        oldNodes.replaceWith(nodes369);
                      }));
                      
                      
                    }
                  };
                  renderCond16();
                  subs__.addSub(tmp391.addEventListener('change', function() {
                    renderCond16();
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
          
          callback(root414); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes366;
          nodes366 = node.contents();
          oldNodes.replaceWith(nodes366);
        }));
        node50.append(node51);
        
        var node52 = $("<div>");
        node52.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node53 = $("<span>");
        node52.append(node53);
        var condSubs15 = new mobl.CompSubscription();
        subs__.addSub(condSubs15);
        var oldValue15;
        var renderCond15 = function() {
          var value27 = current.get();
          if(oldValue15 === value27) return;
          oldValue15 = value27;
          var subs__ = condSubs15;
          subs__.unsubscribe();
          node53.empty();
          if(value27) {
            var nodes364 = $("<span>");
            node53.append(nodes364);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl8();
            }));
            
            function renderControl8() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
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
            renderControl8();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp392 = mobl.ref(result__);
            
            var nodes365 = $("<span>");
            node53.append(nodes365);
            subs__.addSub((mobl.label)(tmp392, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root413 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root413); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes365;
              nodes365 = node.contents();
              oldNodes.replaceWith(nodes365);
            }));
            
            
          }
        };
        renderCond15();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond15();
        }));
        
        node50.append(node52);
        node49.append(node50);
        
        
        
        
        
        
      });
    } else {
      var nodes371 = $("<span>");
      node49.append(nodes371);
      subs__.addSub((ui.group)(function(_, callback) {
        var root419 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node56 = mobl.loadingSpan();
        root419.append(node56);
        var list4;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList4 = function() {
          var subs__ = listSubs__;
          list4 = items.get();
          list4.list(function(results4) {
            node56.empty();
            for(var i112 = 0; i112 < results4.length; i112++) {
              (function() {
                var iternode4 = $("<span>");
                node56.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i112);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp427 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp386 = mobl.ref(result__);
                
                var nodes372 = $("<span>");
                iternode4.append(nodes372);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp386, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root420 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes373 = $("<span>");
                  root420.append(nodes373);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl11();
                  }));
                  
                  function renderControl11() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root421 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root421); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes373;
                      nodes373 = node.contents();
                      oldNodes.replaceWith(nodes373);
                    }));
                  }
                  renderControl11();
                  callback(root420); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes372;
                  nodes372 = node.contents();
                  oldNodes.replaceWith(nodes372);
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
        
        callback(root419); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes371;
        nodes371 = node.contents();
        oldNodes.replaceWith(nodes371);
      }));
      
      
    }
  };
  renderCond14();
  subs__.addSub(tmp410.addEventListener('change', function() {
    renderCond14();
  }));
  
  callback(root411); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root422 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp389 = mobl.ref(result__);
  
  var nodes374 = $("<span>");
  root422.append(nodes374);
  subs__.addSub((ui.header)(tmp389, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root423 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp388 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp387 = mobl.ref(result__);
    
    var nodes375 = $("<span>");
    root423.append(nodes375);
    subs__.addSub((ui.backButton)(tmp387, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp388, function(_, callback) {
      var root424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root424); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes375;
      nodes375 = node.contents();
      oldNodes.replaceWith(nodes375);
    }));
    callback(root423); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes374;
    nodes374 = node.contents();
    oldNodes.replaceWith(nodes374);
  }));
  var nodes376 = $("<span>");
  root422.append(nodes376);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl12();
  }));
  
  function renderControl12() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root425 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root425); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes376;
      nodes376 = node.contents();
      oldNodes.replaceWith(nodes376);
    }));
  }
  renderControl12();
  callback(root422); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root426 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes377 = $("<span>");
  root426.append(nodes377);
  subs__.addSub((ui.group)(function(_, callback) {
    var root427 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node57 = mobl.loadingSpan();
    root427.append(node57);
    var list5;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList5 = function() {
      var subs__ = listSubs__;
      list5 = coll.get();
      list5.list(function(results5) {
        node57.empty();
        for(var i113 = 0; i113 < results5.length; i113++) {
          (function() {
            var iternode5 = $("<span>");
            node57.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i113);
            var result__ = it.get() == selected.get();
            var tmp394 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp394.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp394.set(it.get() == selected.get());
            }));
            
            
            var node58 = $("<span>");
            iternode5.append(node58);
            var condSubs17 = new mobl.CompSubscription();
            subs__.addSub(condSubs17);
            var oldValue17;
            var renderCond17 = function() {
              var value29 = tmp394.get();
              if(oldValue17 === value29) return;
              oldValue17 = value29;
              var subs__ = condSubs17;
              subs__.unsubscribe();
              node58.empty();
              if(value29) {
                var nodes378 = $("<span>");
                node58.append(nodes378);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root428 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes379 = $("<span>");
                  root428.append(nodes379);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl13();
                  }));
                  
                  function renderControl13() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root429 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root429); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes379;
                      nodes379 = node.contents();
                      oldNodes.replaceWith(nodes379);
                    }));
                  }
                  renderControl13();
                  callback(root428); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes378;
                  nodes378 = node.contents();
                  oldNodes.replaceWith(nodes378);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp393 = mobl.ref(result__);
                
                var nodes380 = $("<span>");
                node58.append(nodes380);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp393, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root430 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes381 = $("<span>");
                  root430.append(nodes381);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl14();
                  }));
                  
                  function renderControl14() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root431 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root431); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes381;
                      nodes381 = node.contents();
                      oldNodes.replaceWith(nodes381);
                    }));
                  }
                  renderControl14();
                  callback(root430); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes380;
                  nodes380 = node.contents();
                  oldNodes.replaceWith(nodes380);
                }));
                
                
              }
            };
            renderCond17();
            subs__.addSub(tmp394.addEventListener('change', function() {
              renderCond17();
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
    
    callback(root427); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes377;
    nodes377 = node.contents();
    oldNodes.replaceWith(nodes377);
  }));
  callback(root426); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root432 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp428 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp395 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp395.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp395.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp395.set(coll.get().limit(n.get()));
    }));
    
    
    var node59 = mobl.loadingSpan();
    root432.append(node59);
    var list6;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList6 = function() {
      var subs__ = listSubs__;
      list6 = tmp395.get();
      list6.list(function(results6) {
        node59.empty();
        for(var i114 = 0; i114 < results6.length; i114++) {
          (function() {
            var iternode6 = $("<span>");
            node59.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i114);
            var nodes382 = $("<span>");
            iternode6.append(nodes382);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl15();
            }));
            
            function renderControl15() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root433 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root433); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes382;
                nodes382 = node.contents();
                oldNodes.replaceWith(nodes382);
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
        subs__.addSub(tmp395.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    var result__ = n.get() < total.get();
    var tmp397 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp397.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp397.set(n.get() < total.get());
    }));
    
    
    var node60 = $("<span>");
    root432.append(node60);
    var condSubs18 = new mobl.CompSubscription();
    subs__.addSub(condSubs18);
    var oldValue18;
    var renderCond18 = function() {
      var value30 = tmp397.get();
      if(oldValue18 === value30) return;
      oldValue18 = value30;
      var subs__ = condSubs18;
      subs__.unsubscribe();
      node60.empty();
      if(value30) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp396 = mobl.ref(result__);
        
        var nodes383 = $("<span>");
        node60.append(nodes383);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp396, mobl.ref(null), function(_, callback) {
          var root434 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes384 = $("<span>");
          root434.append(nodes384);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root435 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root435); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes384;
            nodes384 = node.contents();
            oldNodes.replaceWith(nodes384);
          }));
          callback(root434); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes383;
          nodes383 = node.contents();
          oldNodes.replaceWith(nodes383);
        }));
        
        
      } else {
        
      }
    };
    renderCond18();
    subs__.addSub(tmp397.addEventListener('change', function() {
      renderCond18();
    }));
    
    callback(root432); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes385 = $("<span>");
  root436.append(nodes385);
  subs__.addSub((ui.group)(function(_, callback) {
    var root437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node61 = mobl.loadingSpan();
    root437.append(node61);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = items.get();
      list7.list(function(results7) {
        node61.empty();
        for(var i115 = 0; i115 < results7.length; i115++) {
          (function() {
            var iternode7 = $("<span>");
            node61.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i115), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i115), "_2");
            var nodes386 = $("<span>");
            iternode7.append(nodes386);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root438 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes387 = $("<span>");
              root438.append(nodes387);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root439 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root439); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes387;
                nodes387 = node.contents();
                oldNodes.replaceWith(nodes387);
              }));
              callback(root438); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes386;
              nodes386 = node.contents();
              oldNodes.replaceWith(nodes386);
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
    
    callback(root437); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes385;
    nodes385 = node.contents();
    oldNodes.replaceWith(nodes385);
  }));
  callback(root436); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root440 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll31) {
    coll31 = coll31.reverse();
    function processOne13() {
      var it;
      it = coll31.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll31.length > 0) processOne13(); else rest13();
      
    }
    function rest13() {
      var nodes388 = $("<span>");
      root440.append(nodes388);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root441 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp398 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp399 = mobl.ref(result__);
        
        var nodes389 = $("<span>");
        root441.append(nodes389);
        subs__.addSub((ui.backButton)(tmp399, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp398, function(_, callback) {
          var root442 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root442); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes389;
          nodes389 = node.contents();
          oldNodes.replaceWith(nodes389);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll30) {
                           coll30 = coll30.reverse();
                           function processOne12() {
                             var checked;var it;
                             var tmp430 = coll30.pop();
                             checked = tmp430._1;it = tmp430._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll30.length > 0) processOne12(); else rest12();
                               
                             } else {
                               {
                                 
                                 if(coll30.length > 0) processOne12(); else rest12();
                                 
                               }
                             }
                           }
                           function rest12() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll30.length > 0) processOne12(); else rest12();
                         });
                         
                       };
        var tmp400 = mobl.ref(result__);
        
        var nodes390 = $("<span>");
        root441.append(nodes390);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp400, function(_, callback) {
          var root443 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root443); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes390;
          nodes390 = node.contents();
          oldNodes.replaceWith(nodes390);
        }));
        callback(root441); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes388;
        nodes388 = node.contents();
        oldNodes.replaceWith(nodes388);
      }));
      var nodes391 = $("<span>");
      root440.append(nodes391);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root444 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root444); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes391;
        nodes391 = node.contents();
        oldNodes.replaceWith(nodes391);
      }));
      callback(root440); return subs__;
      
      
    }
    if(coll31.length > 0) processOne13(); else rest13();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root445 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes392 = $("<span>");
  root445.append(nodes392);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root446 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root446); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes392;
    nodes392 = node.contents();
    oldNodes.replaceWith(nodes392);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp401 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp401.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp401.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp401.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp401.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp401.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes393 = $("<span>");
  root445.append(nodes393);
  subs__.addSub((ui.masterDetail)(tmp401, masterItem, detailItem, function(_, callback) {
    var root447 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root447); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes393;
    nodes393 = node.contents();
    oldNodes.replaceWith(nodes393);
  }));
  callback(root445); return subs__;
  
  
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
  var root448 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes394 = $("<span>");
  root448.append(nodes394);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root449 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node62 = mobl.loadingSpan();
    root449.append(node62);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = sections.get();
      list8.list(function(results8) {
        node62.empty();
        for(var i116 = 0; i116 < results8.length; i116++) {
          (function() {
            var iternode8 = $("<span>");
            node62.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i116), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i116), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp403 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp403.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp403.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp403.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp403.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp402 = mobl.ref(result__);
            
            var nodes395 = $("<span>");
            iternode8.append(nodes395);
            subs__.addSub((mobl.span)(tmp403, mobl.ref(null), tmp402, mobl.ref(null), function(_, callback) {
              var root450 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes396 = $("<span>");
              root450.append(nodes396);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root451 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root451); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes396;
                nodes396 = node.contents();
                oldNodes.replaceWith(nodes396);
              }));
              callback(root450); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes395;
              nodes395 = node.contents();
              oldNodes.replaceWith(nodes395);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp404 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp404.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp404.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp404.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp404.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes397 = $("<span>");
            iternode8.append(nodes397);
            subs__.addSub((mobl.block)(tmp404, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root452 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes398 = $("<span>");
              root452.append(nodes398);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl16();
              }));
              
              function renderControl16() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root453 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root453); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes398;
                  nodes398 = node.contents();
                  oldNodes.replaceWith(nodes398);
                }));
              }
              renderControl16();
              callback(root452); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes397;
              nodes397 = node.contents();
              oldNodes.replaceWith(nodes397);
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
    
    callback(root449); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes394;
    nodes394 = node.contents();
    oldNodes.replaceWith(nodes394);
  }));
  callback(root448); return subs__;
  
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
  var root454 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node63 = $("<table>");
  
  var ref56 = style;
  if(ref56.get() !== null) {
    node63.attr('class', ref56.get());
    subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
      node63.attr('class', val);
    }));
    
  }
  subs__.addSub(ref56.rebind());
  
  var nodes399 = $("<span>");
  node63.append(nodes399);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl17();
  }));
  
  function renderControl17() {
    subs__.addSub((elements)(function(elements, callback) {
      var root455 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root455); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes399;
      nodes399 = node.contents();
      oldNodes.replaceWith(nodes399);
    }));
  }
  renderControl17();
  root454.append(node63);
  callback(root454); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root456 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node64 = $("<tr>");
  
  var ref57 = style;
  if(ref57.get() !== null) {
    node64.attr('class', ref57.get());
    subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
      node64.attr('class', val);
    }));
    
  }
  subs__.addSub(ref57.rebind());
  
  var nodes400 = $("<span>");
  node64.append(nodes400);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl18();
  }));
  
  function renderControl18() {
    subs__.addSub((elements)(function(elements, callback) {
      var root457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root457); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes400;
      nodes400 = node.contents();
      oldNodes.replaceWith(nodes400);
    }));
  }
  renderControl18();
  root456.append(node64);
  callback(root456); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root458 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node65 = $("<td>");
  
  var ref58 = width;
  if(ref58.get() !== null) {
    node65.attr('width', ref58.get());
    subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
      node65.attr('width', val);
    }));
    
  }
  subs__.addSub(ref58.rebind());
  
  var ref59 = style;
  if(ref59.get() !== null) {
    node65.attr('class', ref59.get());
    subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
      node65.attr('class', val);
    }));
    
  }
  subs__.addSub(ref59.rebind());
  
  var nodes401 = $("<span>");
  node65.append(nodes401);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes401;
      nodes401 = node.contents();
      oldNodes.replaceWith(nodes401);
    }));
  }
  renderControl19();
  root458.append(node65);
  callback(root458); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root460 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node66 = $("<td>");
  
  var ref60 = width;
  if(ref60.get() !== null) {
    node66.attr('width', ref60.get());
    subs__.addSub(ref60.addEventListener('change', function(_, ref, val) {
      node66.attr('width', val);
    }));
    
  }
  subs__.addSub(ref60.rebind());
  
  var ref61 = style;
  if(ref61.get() !== null) {
    node66.attr('class', ref61.get());
    subs__.addSub(ref61.addEventListener('change', function(_, ref, val) {
      node66.attr('class', val);
    }));
    
  }
  subs__.addSub(ref61.rebind());
  
  var nodes402 = $("<span>");
  node66.append(nodes402);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((elements)(function(elements, callback) {
      var root461 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root461); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes402;
      nodes402 = node.contents();
      oldNodes.replaceWith(nodes402);
    }));
  }
  renderControl20();
  root460.append(node66);
  callback(root460); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root462 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node67 = $("<td>");
  
  var ref62 = width;
  if(ref62.get() !== null) {
    node67.attr('width', ref62.get());
    subs__.addSub(ref62.addEventListener('change', function(_, ref, val) {
      node67.attr('width', val);
    }));
    
  }
  subs__.addSub(ref62.rebind());
  
  var ref63 = style;
  if(ref63.get() !== null) {
    node67.attr('class', ref63.get());
    subs__.addSub(ref63.addEventListener('change', function(_, ref, val) {
      node67.attr('class', val);
    }));
    
  }
  subs__.addSub(ref63.rebind());
  
  
  var node68 = $("<strong>");
  
  var nodes403 = $("<span>");
  node68.append(nodes403);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root463 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root463); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes403;
      nodes403 = node.contents();
      oldNodes.replaceWith(nodes403);
    }));
  }
  renderControl21();
  node67.append(node68);
  root462.append(node67);
  callback(root462); return subs__;
  
  
  
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
  items.list(function(coll32) {
    coll32 = coll32.reverse();
    function processOne14() {
      var item;
      item = coll32.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll32.length > 0) processOne14(); else rest14();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll32.length > 0) processOne14(); else rest14();
          
        }
      }
    }
    function rest14() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll32.length > 0) processOne14(); else rest14();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrentQ = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root464 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp432 = result__;
    var current = mobl.ref(result__);
    
    var node69 = $("<div>");
    node69.attr('width', "100%");
    
    
    var node70 = $("<div>");
    node70.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes405 = $("<span>");
    node70.append(nodes405);
    subs__.addSub((ui.group)(function(_, callback) {
      var root466 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node75 = mobl.loadingSpan();
      root466.append(node75);
      var list9;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList9 = function() {
        var subs__ = listSubs__;
        list9 = items.get();
        list9.list(function(results9) {
          node75.empty();
          for(var i117 = 0; i117 < results9.length; i117++) {
            (function() {
              var iternode9 = $("<span>");
              node75.append(iternode9);
              var it;
              it = mobl.ref(mobl.ref(results9), i117);
              var result__ = it.get() == current.get();
              var tmp408 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp408.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp408.set(it.get() == current.get());
              }));
              
              
              var node76 = $("<span>");
              iternode9.append(node76);
              var condSubs20 = new mobl.CompSubscription();
              subs__.addSub(condSubs20);
              var oldValue20;
              var renderCond20 = function() {
                var value32 = tmp408.get();
                if(oldValue20 === value32) return;
                oldValue20 = value32;
                var subs__ = condSubs20;
                subs__.unsubscribe();
                node76.empty();
                if(value32) {
                  var nodes406 = $("<span>");
                  node76.append(nodes406);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root467 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp435 = result__;
                      var tmp405 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp433 = result__;
                          var result__ = tmp433;
                          tmp405.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp434 = result__;
                          var result__ = tmp434;
                          tmp405.set(result__);
                          
                        });
                      }));
                      
                      var nodes407 = $("<span>");
                      root467.append(nodes407);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl23();
                      }));
                      
                      function renderControl23() {
                        subs__.addSub((masterItem.get())(it, tmp405, function(elements, callback) {
                          var root468 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root468); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes407;
                          nodes407 = node.contents();
                          oldNodes.replaceWith(nodes407);
                        }));
                      }
                      renderControl23();
                      callback(root467); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes406;
                    nodes406 = node.contents();
                    oldNodes.replaceWith(nodes406);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = true;
                                   ui.visible.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp407 = mobl.ref(result__);
                  
                  var nodes408 = $("<span>");
                  node76.append(nodes408);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp407, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root469 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp438 = result__;
                      var tmp406 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp436 = result__;
                          var result__ = tmp436;
                          tmp406.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp437 = result__;
                          var result__ = tmp437;
                          tmp406.set(result__);
                          
                        });
                      }));
                      
                      var nodes409 = $("<span>");
                      root469.append(nodes409);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl24();
                      }));
                      
                      function renderControl24() {
                        subs__.addSub((masterItem.get())(it, tmp406, function(elements, callback) {
                          var root470 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root470); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes409;
                          nodes409 = node.contents();
                          oldNodes.replaceWith(nodes409);
                        }));
                      }
                      renderControl24();
                      callback(root469); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes408;
                    nodes408 = node.contents();
                    oldNodes.replaceWith(nodes408);
                  }));
                  
                  
                }
              };
              renderCond20();
              subs__.addSub(tmp408.addEventListener('change', function() {
                renderCond20();
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
      
      callback(root466); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes405;
      nodes405 = node.contents();
      oldNodes.replaceWith(nodes405);
    }));
    node69.append(node70);
    
    var node71 = $("<div>");
    node71.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    var result__ = current.get() && ui.visible.get();
    var tmp409 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp409.set(current.get() && ui.visible.get());
    }));
    subs__.addSub(ui.visible.addEventListener('change', function() {
      tmp409.set(current.get() && ui.visible.get());
    }));
    
    
    var node72 = $("<span>");
    node71.append(node72);
    var condSubs19 = new mobl.CompSubscription();
    subs__.addSub(condSubs19);
    var oldValue19;
    var renderCond19 = function() {
      var value31 = tmp409.get();
      if(oldValue19 === value31) return;
      oldValue19 = value31;
      var subs__ = condSubs19;
      subs__.unsubscribe();
      node72.empty();
      if(value31) {
        var nodes404 = $("<span>");
        node72.append(nodes404);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl22();
        }));
        
        function renderControl22() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root465 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root465); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes404;
            nodes404 = node.contents();
            oldNodes.replaceWith(nodes404);
          }));
        }
        renderControl22();
        
        
      } else {
        
        var node73 = $("<div>");
        node73.attr('style', "padding:20px");
        
        
        var node74 = $("<h2>");
        
        
        node74.append("Add more questions.");
        node73.append(node74);
        node72.append(node73);
        
        
        
      }
    };
    renderCond19();
    subs__.addSub(tmp409.addEventListener('change', function() {
      renderCond19();
    }));
    
    node69.append(node71);
    root464.append(node69);
    callback(root464); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
