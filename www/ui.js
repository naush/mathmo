mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root11 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7 = $("<span>");
  root11.append(node7);
  var condSubs0 = new mobl.CompSubscription();
  subs__.addSub(condSubs0);
  var oldValue0;
  var renderCond0 = function() {
    var value20 = value.get();
    if(oldValue0 === value20) return;
    oldValue0 = value20;
    var subs__ = condSubs0;
    subs__.unsubscribe();
    node7.empty();
    if(value20) {
      var nodes4 = $("<span>");
      node7.append(nodes4);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl4();
      }));
      
      function renderControl4() {
        subs__.addSub((elements)(function(elements, callback) {
          var root12 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root12); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4;
          nodes4 = node.contents();
          oldNodes.replaceWith(nodes4);
        }));
      }
      renderControl4();
      
      
    } else {
      var nodes5 = $("<span>");
      node7.append(nodes5);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root13 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes6 = $("<span>");
        root13.append(nodes6);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root14 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6;
          nodes6 = node.contents();
          oldNodes.replaceWith(nodes6);
        }));
        var nodes7 = $("<span>");
        root13.append(nodes7);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root15 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root15); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7;
          nodes7 = node.contents();
          oldNodes.replaceWith(nodes7);
        }));
        callback(root13); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5;
        nodes5 = node.contents();
        oldNodes.replaceWith(nodes5);
      }));
      
      
    }
  };
  renderCond0();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond0();
  }));
  
  callback(root11); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root16 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node8 = $("<div>");
  
  var ref13 = mobl.ref(ui.headerStyle);
  if(ref13.get() !== null) {
    node8.attr('class', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
      node8.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13.rebind());
  
  var val5 = onclick.get();
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(node8, 'tap', val5));
  }
  
  var ref14 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref14.get() !== null) {
    node8.attr('style', ref14.get());
    subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
      node8.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node8.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref14.rebind());
  
  
  var node11 = $("<div>");
  
  var ref12 = mobl.ref(ui.headerContainerStyle);
  if(ref12.get() !== null) {
    node11.attr('class', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node11.attr('class', val);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  
  var node12 = $("<div>");
  
  var ref10 = text;
  node12.text(""+ref10.get());
  var ignore1 = false;
  subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
    if(ignore1) return;
    node12.text(""+val);
  }));
  subs__.addSub(ref10.rebind());
  
  
  var ref11 = mobl.ref(ui.headerTextStyle);
  if(ref11.get() !== null) {
    node12.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node12.attr('class', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  node11.append(node12);
  node8.append(node11);
  var nodes8 = $("<span>");
  node8.append(nodes8);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root17 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8;
      nodes8 = node.contents();
      oldNodes.replaceWith(nodes8);
    }));
  }
  renderControl5();
  root16.append(node8);
  
  var node9 = $("<span>");
  root16.append(node9);
  var condSubs1 = new mobl.CompSubscription();
  subs__.addSub(condSubs1);
  var oldValue1;
  var renderCond1 = function() {
    var value21 = fixedPosition.get();
    if(oldValue1 === value21) return;
    oldValue1 = value21;
    var subs__ = condSubs1;
    subs__.unsubscribe();
    node9.empty();
    if(value21) {
      
      var node10 = $("<div>");
      node10.attr('id', "hello");
      node10.attr('style', "height: 2.9em;");
      
      node9.append(node10);
      
      
    } else {
      
    }
  };
  renderCond1();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond1();
  }));
  
  callback(root16); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root18 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref15 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref15.get() !== null) {
    sp.attr('class', ref15.get());
    subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref15.rebind());
  
  var val6 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val6));
  }
  
  var val7 = function(event, callback) {
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
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val7));
  }
  
  var val8 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after0(result__) {
                    var tmp41 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val8));
  }
  
  var val9 = function(event, callback) {
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
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val9));
  }
  
  var ref16 = text;
  sp.text(""+ref16.get());
  var ignore2 = false;
  subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref16.rebind());
  
  
  root18.append(sp);
  callback(root18); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root19 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9 = $("<span>");
  root19.append(nodes9);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root20 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root20); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9;
    nodes9 = node.contents();
    oldNodes.replaceWith(nodes9);
  }));
  callback(root19); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root21 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10 = $("<span>");
  root21.append(nodes10);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root22 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root22); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10;
    nodes10 = node.contents();
    oldNodes.replaceWith(nodes10);
  }));
  callback(root21); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root23 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13 = $("<ul>");
  
  var ref17 = mobl.ref(ui.groupStyle);
  if(ref17.get() !== null) {
    node13.attr('class', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      node13.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var nodes11 = $("<span>");
  node13.append(nodes11);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl6();
  }));
  
  function renderControl6() {
    subs__.addSub((elements)(function(elements, callback) {
      var root24 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root24); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11;
      nodes11 = node.contents();
      oldNodes.replaceWith(nodes11);
    }));
  }
  renderControl6();
  root23.append(node13);
  callback(root23); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root25 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node14 = $("<img>");
  
  var ref18 = url;
  if(ref18.get() !== null) {
    node14.attr('src', ref18.get());
    subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
      node14.attr('src', val);
    }));
    
  }
  subs__.addSub(ref18.rebind());
  
  var ref19 = width;
  if(ref19.get() !== null) {
    node14.attr('width', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      node14.attr('width', val);
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  var ref20 = height;
  if(ref20.get() !== null) {
    node14.attr('height', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node14.attr('height', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  var ref21 = style;
  if(ref21.get() !== null) {
    node14.attr('class', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      node14.attr('class', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  var val10 = onclick.get();
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(node14, 'tap', val10));
  }
  
  var ref22 = valign;
  if(ref22.get() !== null) {
    node14.attr('valign', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
      node14.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref22.rebind());
  
  var ref23 = align;
  if(ref23.get() !== null) {
    node14.attr('align', ref23.get());
    subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
      node14.attr('align', val);
    }));
    
  }
  subs__.addSub(ref23.rebind());
  
  root25.append(node14);
  callback(root25); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root26 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref24 = mobl.ref(ui.itemStyle);
  if(ref24.get() !== null) {
    el.attr('class', ref24.get());
    subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref24.rebind());
  
  var ref25 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref25.get() !== null) {
    el.attr('class', ref25.get());
    subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref25.rebind());
  
  var val11 = onswipe.get();
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val11));
  }
  
  var val12 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp42 = result__;
                                           function after1(result__) {
                                             var tmp43 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp44 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val12 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val12));
  }
  
  var nodes12 = $("<span>");
  el.append(nodes12);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root27 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root27); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes12;
      nodes12 = node.contents();
      oldNodes.replaceWith(nodes12);
    }));
  }
  renderControl7();
  root26.append(el);
  callback(root26); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root28 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node15 = $("<input>");
  node15.attr('type', "checkbox");
  
  var ref27 = b;
  node15.attr('checked', !!ref27.get());
  subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
    if(ref === ref27) node15.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node15, 'change', function() {
    b.set(!!node15.attr('checked'));
  }));
  
  var val14 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val14 !== null) {
    subs__.addSub(mobl.domBind(node15, 'tap', val14));
  }
  
  var val15 = onchange.get();
  if(val15 !== null) {
    subs__.addSub(mobl.domBind(node15, 'change', val15));
  }
  
  root28.append(node15);
  
  root28.append(" ");
  
  var node16 = $("<span>");
  
  var ref26 = label;
  node16.text(""+ref26.get());
  var ignore3 = false;
  subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    node16.text(""+val);
  }));
  subs__.addSub(ref26.rebind());
  
  
  var val13 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp45 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val13 !== null) {
    subs__.addSub(mobl.domBind(node16, 'tap', val13));
  }
  
  root28.append(node16);
  callback(root28); return subs__;
  
  
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
  var root29 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node17 = $("<span>");
  root29.append(node17);
  var condSubs2 = new mobl.CompSubscription();
  subs__.addSub(condSubs2);
  var oldValue2;
  var renderCond2 = function() {
    var value22 = label.get();
    if(oldValue2 === value22) return;
    oldValue2 = value22;
    var subs__ = condSubs2;
    subs__.unsubscribe();
    node17.empty();
    if(value22) {
      var nodes13 = $("<span>");
      node17.append(nodes13);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root30 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root30); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13;
        nodes13 = node.contents();
        oldNodes.replaceWith(nodes13);
      }));
      
      
    } else {
      
    }
  };
  renderCond2();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2();
  }));
  
  
  var node18 = $("<span>");
  root29.append(node18);
  var condSubs3 = new mobl.CompSubscription();
  subs__.addSub(condSubs3);
  var oldValue3;
  var renderCond3 = function() {
    var value23 = validator.get();
    if(oldValue3 === value23) return;
    oldValue3 = value23;
    var subs__ = condSubs3;
    subs__.unsubscribe();
    node18.empty();
    if(value23) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after6(result__) {
        var tmp46 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp47 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node19 = $("<input>");
        
        var ref28 = inputType;
        if(ref28.get() !== null) {
          node19.attr('type', ref28.get());
          subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
            node19.attr('type', val);
          }));
          
        }
        subs__.addSub(ref28.rebind());
        
        var ref29 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref29.get() !== null) {
          node19.attr('class', ref29.get());
          subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
            node19.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node19.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node19.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node19.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref29.rebind());
        
        var ref30 = placeholder;
        if(ref30.get() !== null) {
          node19.attr('placeholder', ref30.get());
          subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
            node19.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref30.rebind());
        
        var ref31 = temp;
        node19.val(""+ref31.get());
        var ignore4 = false;
        subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
          if(ignore4) return;
          node19.val(""+val);
        }));
        subs__.addSub(ref31.rebind());
        
        subs__.addSub(mobl.domBind(node19, 'keyup change', function() {
          ignore4 = true;
          temp.set(mobl.stringTomobl__String(node19.val()));
          ignore4 = false;
        }));
        
        
        var val16 = onchange.get();
        if(val16 !== null) {
          subs__.addSub(mobl.domBind(node19, 'change', val16));
        }
        
        var val17 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp48 = result__;
                          function after4(result__) {
                            var tmp49 = result__;
                            var result__ = tmp49;
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
                            var tmp49 = result__;
                            var result__ = tmp49;
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
        if(val17 !== null) {
          subs__.addSub(mobl.domBind(node19, 'keyup', val17));
        }
        
        var val18 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val18 !== null) {
          subs__.addSub(mobl.domBind(node19, 'blur', val18));
        }
        
        node18.append(node19);
        var nodes14 = $("<span>");
        node18.append(nodes14);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root31 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root31); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14;
          nodes14 = node.contents();
          oldNodes.replaceWith(nodes14);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node20 = $("<input>");
      
      var ref32 = inputType;
      if(ref32.get() !== null) {
        node20.attr('type', ref32.get());
        subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
          node20.attr('type', val);
        }));
        
      }
      subs__.addSub(ref32.rebind());
      
      var ref33 = style;
      if(ref33.get() !== null) {
        node20.attr('class', ref33.get());
        subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
          node20.attr('class', val);
        }));
        
      }
      subs__.addSub(ref33.rebind());
      
      var ref34 = placeholder;
      if(ref34.get() !== null) {
        node20.attr('placeholder', ref34.get());
        subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
          node20.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref34.rebind());
      
      var ref35 = s;
      node20.val(""+ref35.get());
      var ignore5 = false;
      subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
        if(ignore5) return;
        node20.val(""+val);
      }));
      subs__.addSub(ref35.rebind());
      
      subs__.addSub(mobl.domBind(node20, 'keyup change', function() {
        ignore5 = true;
        s.set(mobl.stringTomobl__String(node20.val()));
        ignore5 = false;
      }));
      
      
      var val19 = onchange.get();
      if(val19 !== null) {
        subs__.addSub(mobl.domBind(node20, 'change', val19));
      }
      
      var val20 = onkeyup.get();
      if(val20 !== null) {
        subs__.addSub(mobl.domBind(node20, 'keyup', val20));
      }
      
      var val21 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node20, 'blur', val21));
      }
      
      node18.append(node20);
      
      
    }
  };
  renderCond3();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond3();
  }));
  
  callback(root29); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root32 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes15 = $("<span>");
  root32.append(nodes15);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root33 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root33); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes15;
    nodes15 = node.contents();
    oldNodes.replaceWith(nodes15);
  }));
  callback(root32); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root34 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes16 = $("<span>");
  root34.append(nodes16);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root35 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root35); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes16;
    nodes16 = node.contents();
    oldNodes.replaceWith(nodes16);
  }));
  callback(root34); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root36 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node21 = $("<span>");
  root36.append(node21);
  var condSubs4 = new mobl.CompSubscription();
  subs__.addSub(condSubs4);
  var oldValue4;
  var renderCond4 = function() {
    var value24 = label.get();
    if(oldValue4 === value24) return;
    oldValue4 = value24;
    var subs__ = condSubs4;
    subs__.unsubscribe();
    node21.empty();
    if(value24) {
      var nodes17 = $("<span>");
      node21.append(nodes17);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root37 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root37); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17;
        nodes17 = node.contents();
        oldNodes.replaceWith(nodes17);
      }));
      
      
    } else {
      
    }
  };
  renderCond4();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond4();
  }));
  
  
  var node22 = $("<input>");
  node22.attr('type', "range");
  
  var ref36 = n;
  node22.val(""+ref36.get());
  var ignore6 = false;
  subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
    if(ignore6) return;
    node22.val(""+val);
  }));
  subs__.addSub(ref36.rebind());
  
  subs__.addSub(mobl.domBind(node22, 'keyup change', function() {
    ignore6 = true;
    n.set(mobl.stringTomobl__Num(node22.val()));
    ignore6 = false;
  }));
  
  
  var ref37 = min;
  if(ref37.get() !== null) {
    node22.attr('min', ref37.get());
    subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
      node22.attr('min', val);
    }));
    
  }
  subs__.addSub(ref37.rebind());
  
  var ref38 = max;
  if(ref38.get() !== null) {
    node22.attr('max', ref38.get());
    subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
      node22.attr('max', val);
    }));
    
  }
  subs__.addSub(ref38.rebind());
  
  var ref39 = step;
  if(ref39.get() !== null) {
    node22.attr('step', ref39.get());
    subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
      node22.attr('step', val);
    }));
    
  }
  subs__.addSub(ref39.rebind());
  node22.attr('style', "width: 99%;");
  
  var val22 = onchange.get();
  if(val22 !== null) {
    subs__.addSub(mobl.domBind(node22, 'change', val22));
  }
  
  var val23 = onkeyup.get();
  if(val23 !== null) {
    subs__.addSub(mobl.domBind(node22, 'keyup', val23));
  }
  
  var ref40 = placeholder;
  if(ref40.get() !== null) {
    node22.attr('placeholder', ref40.get());
    subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
      node22.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref40.rebind());
  
  root36.append(node22);
  callback(root36); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root38 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after7(result__) {
      var tmp51 = result__;
      var result__ = tmp51;
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
  var nodes18 = $("<span>");
  root38.append(nodes18);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root39 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root39); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18;
    nodes18 = node.contents();
    oldNodes.replaceWith(nodes18);
  }));
  callback(root38); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root40 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node23 = $("<span>");
  root40.append(node23);
  var condSubs5 = new mobl.CompSubscription();
  subs__.addSub(condSubs5);
  var oldValue5;
  var renderCond5 = function() {
    var value25 = label.get();
    if(oldValue5 === value25) return;
    oldValue5 = value25;
    var subs__ = condSubs5;
    subs__.unsubscribe();
    node23.empty();
    if(value25) {
      
      var node24 = $("<span>");
      node24.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref44 = label;
      node24.text(""+ref44.get());
      var ignore8 = false;
      subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node24.text(""+val);
      }));
      subs__.addSub(ref44.rebind());
      
      
      node23.append(node24);
      
      var node25 = $("<span>");
      node25.attr('style', "float: left");
      
      
      var node26 = $("<input>");
      node26.attr('type', "password");
      
      var ref41 = style;
      if(ref41.get() !== null) {
        node26.attr('class', ref41.get());
        subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
          node26.attr('class', val);
        }));
        
      }
      subs__.addSub(ref41.rebind());
      
      var ref42 = placeholder;
      if(ref42.get() !== null) {
        node26.attr('placeholder', ref42.get());
        subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
          node26.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref42.rebind());
      
      var ref43 = s;
      node26.val(""+ref43.get());
      var ignore7 = false;
      subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
        if(ignore7) return;
        node26.val(""+val);
      }));
      subs__.addSub(ref43.rebind());
      
      subs__.addSub(mobl.domBind(node26, 'keyup change', function() {
        ignore7 = true;
        s.set(mobl.stringTomobl__String(node26.val()));
        ignore7 = false;
      }));
      
      
      var val24 = onchange.get();
      if(val24 !== null) {
        subs__.addSub(mobl.domBind(node26, 'change', val24));
      }
      
      var val25 = onkeyup.get();
      if(val25 !== null) {
        subs__.addSub(mobl.domBind(node26, 'keyup', val25));
      }
      
      var val26 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val26 !== null) {
        subs__.addSub(mobl.domBind(node26, 'blur', val26));
      }
      
      node25.append(node26);
      node23.append(node25);
      
      
      
      
    } else {
      
      var node27 = $("<input>");
      node27.attr('type', "password");
      
      var ref45 = style;
      if(ref45.get() !== null) {
        node27.attr('class', ref45.get());
        subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
          node27.attr('class', val);
        }));
        
      }
      subs__.addSub(ref45.rebind());
      
      var ref46 = placeholder;
      if(ref46.get() !== null) {
        node27.attr('placeholder', ref46.get());
        subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
          node27.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref46.rebind());
      
      var ref47 = s;
      node27.val(""+ref47.get());
      var ignore9 = false;
      subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
        if(ignore9) return;
        node27.val(""+val);
      }));
      subs__.addSub(ref47.rebind());
      
      subs__.addSub(mobl.domBind(node27, 'keyup change', function() {
        ignore9 = true;
        s.set(mobl.stringTomobl__String(node27.val()));
        ignore9 = false;
      }));
      
      
      var val27 = onchange.get();
      if(val27 !== null) {
        subs__.addSub(mobl.domBind(node27, 'change', val27));
      }
      
      var val28 = onkeyup.get();
      if(val28 !== null) {
        subs__.addSub(mobl.domBind(node27, 'keyup', val28));
      }
      
      var val29 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val29 !== null) {
        subs__.addSub(mobl.domBind(node27, 'blur', val29));
      }
      
      node23.append(node27);
      
      
    }
  };
  renderCond5();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond5();
  }));
  
  callback(root40); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root41 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref52 = style;
  if(ref52.get() !== null) {
    sel.attr('class', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var val30 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after8(result__) {
                    var tmp53 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after8);if(result__ !== undefined) after8(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val30));
  }
  
  
  var node28 = mobl.loadingSpan();
  sel.append(node28);
  var list0;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList0 = function() {
    var subs__ = listSubs__;
    list0 = options.get();
    list0.list(function(results0) {
      node28.empty();
      for(var i4 = 0; i4 < results0.length; i4++) {
        (function() {
          var iternode0 = $("<span>");
          node28.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i4), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i4), "_2");
          
          var node29 = $("<option>");
          
          var ref48 = optionDescription;
          node29.text(""+ref48.get());
          var ignore10 = false;
          subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
            if(ignore10) return;
            node29.text(""+val);
          }));
          subs__.addSub(ref48.rebind());
          
          
          var ref49 = optionStyle;
          if(ref49.get() !== null) {
            node29.attr('class', ref49.get());
            subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
              node29.attr('class', val);
            }));
            
          }
          subs__.addSub(ref49.rebind());
          
          var ref50 = optionValue;
          if(ref50.get() !== null) {
            node29.attr('value', ref50.get());
            subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
              node29.attr('value', val);
            }));
            
          }
          subs__.addSub(ref50.rebind());
          
          var ref51 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref51.get() !== null) {
            node29.attr('selected', ref51.get());
            subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
              node29.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node29.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node29.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref51.rebind());
          
          iternode0.append(node29);
          
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
  
  root41.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root41); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root42 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes19 = $("<span>");
    root42.append(nodes19);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root43 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node30 = mobl.loadingSpan();
      root43.append(node30);
      var list1;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1 = function() {
        var subs__ = listSubs__;
        list1 = tabs.get();
        list1.list(function(results1) {
          node30.empty();
          for(var i5 = 0; i5 < results1.length; i5++) {
            (function() {
              var iternode1 = $("<span>");
              node30.append(iternode1);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1), i5), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i5), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i5), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp3 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp3.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp3.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp3.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp3.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp2 = mobl.ref(result__);
              
              var nodes20 = $("<span>");
              iternode1.append(nodes20);
              subs__.addSub((mobl.span)(tmp3, mobl.ref(null), tmp2, mobl.ref(null), function(_, callback) {
                var root44 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes21 = $("<span>");
                root44.append(nodes21);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root45 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root45); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes21;
                  nodes21 = node.contents();
                  oldNodes.replaceWith(nodes21);
                }));
                callback(root44); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes20;
                nodes20 = node.contents();
                oldNodes.replaceWith(nodes20);
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
      
      callback(root43); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19;
      nodes19 = node.contents();
      oldNodes.replaceWith(nodes19);
    }));
    
    var node31 = mobl.loadingSpan();
    root42.append(node31);
    var list2;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2 = function() {
      var subs__ = listSubs__;
      list2 = tabs.get();
      list2.list(function(results2) {
        node31.empty();
        for(var i6 = 0; i6 < results2.length; i6++) {
          (function() {
            var iternode2 = $("<span>");
            node31.append(iternode2);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2), i6), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i6), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i6), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp4 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp4.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp4.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp4.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes22 = $("<span>");
            iternode2.append(nodes22);
            subs__.addSub((mobl.block)(tmp4, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root46 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes23 = $("<span>");
              root46.append(nodes23);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root47 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes24 = $("<span>");
                root47.append(nodes24);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl8();
                }));
                
                function renderControl8() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root48 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root48); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes24;
                    nodes24 = node.contents();
                    oldNodes.replaceWith(nodes24);
                  }));
                }
                renderControl8();
                callback(root47); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes23;
                nodes23 = node.contents();
                oldNodes.replaceWith(nodes23);
              }));
              callback(root46); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes22;
              nodes22 = node.contents();
              oldNodes.replaceWith(nodes22);
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
    
    callback(root42); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes19 = $("<span>");
      root42.append(nodes19);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root43 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node30 = mobl.loadingSpan();
        root43.append(node30);
        var list1;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList1 = function() {
          var subs__ = listSubs__;
          list1 = tabs.get();
          list1.list(function(results1) {
            node30.empty();
            for(var i5 = 0; i5 < results1.length; i5++) {
              (function() {
                var iternode1 = $("<span>");
                node30.append(iternode1);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results1), i5), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i5), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i5), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp3 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp3.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp3.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp3.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp3.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp2 = mobl.ref(result__);
                
                var nodes20 = $("<span>");
                iternode1.append(nodes20);
                subs__.addSub((mobl.span)(tmp3, mobl.ref(null), tmp2, mobl.ref(null), function(_, callback) {
                  var root44 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes21 = $("<span>");
                  root44.append(nodes21);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root45 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root45); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes21;
                    nodes21 = node.contents();
                    oldNodes.replaceWith(nodes21);
                  }));
                  callback(root44); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes20;
                  nodes20 = node.contents();
                  oldNodes.replaceWith(nodes20);
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
        
        callback(root43); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes19;
        nodes19 = node.contents();
        oldNodes.replaceWith(nodes19);
      }));
      
      var node31 = mobl.loadingSpan();
      root42.append(node31);
      var list2;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2 = function() {
        var subs__ = listSubs__;
        list2 = tabs.get();
        list2.list(function(results2) {
          node31.empty();
          for(var i6 = 0; i6 < results2.length; i6++) {
            (function() {
              var iternode2 = $("<span>");
              node31.append(iternode2);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results2), i6), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i6), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i6), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp4 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp4.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp4.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes22 = $("<span>");
              iternode2.append(nodes22);
              subs__.addSub((mobl.block)(tmp4, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root46 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes23 = $("<span>");
                root46.append(nodes23);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root47 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes24 = $("<span>");
                  root47.append(nodes24);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl8();
                  }));
                  
                  function renderControl8() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root48 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root48); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes24;
                      nodes24 = node.contents();
                      oldNodes.replaceWith(nodes24);
                    }));
                  }
                  renderControl8();
                  callback(root47); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes23;
                  nodes23 = node.contents();
                  oldNodes.replaceWith(nodes23);
                }));
                callback(root46); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes22;
                nodes22 = node.contents();
                oldNodes.replaceWith(nodes22);
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
      
      callback(root42); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root49 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node32 = $("<div>");
  
  var ref56 = mobl.ref(ui.searchboxStyle);
  if(ref56.get() !== null) {
    node32.attr('class', ref56.get());
    subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
      node32.attr('class', val);
    }));
    
  }
  subs__.addSub(ref56.rebind());
  
  
  var node33 = $("<input>");
  node33.attr('type', "search");
  
  var ref53 = mobl.ref(ui.searchBoxInputStyle);
  if(ref53.get() !== null) {
    node33.attr('class', ref53.get());
    subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
      node33.attr('class', val);
    }));
    
  }
  subs__.addSub(ref53.rebind());
  
  var ref54 = placeholder;
  if(ref54.get() !== null) {
    node33.attr('placeholder', ref54.get());
    subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
      node33.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref54.rebind());
  
  var ref55 = s;
  node33.val(""+ref55.get());
  var ignore11 = false;
  subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
    if(ignore11) return;
    node33.val(""+val);
  }));
  subs__.addSub(ref55.rebind());
  
  subs__.addSub(mobl.domBind(node33, 'keyup change', function() {
    ignore11 = true;
    s.set(mobl.stringTomobl__String(node33.val()));
    ignore11 = false;
  }));
  
  
  var val31 = onsearch.get();
  if(val31 !== null) {
    subs__.addSub(mobl.domBind(node33, 'change', val31));
  }
  
  var val32 = onkeyup.get();
  if(val32 !== null) {
    subs__.addSub(mobl.domBind(node33, 'keyup', val32));
  }
  node33.attr('autocorrect', false);
  node33.attr('autocapitalize', false);
  node33.attr('autocomplete', false);
  
  node32.append(node33);
  root49.append(node32);
  callback(root49); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root50 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref57 = mobl.ref(ui.contextMenuStyle);
  if(ref57.get() !== null) {
    menu.attr('class', ref57.get());
    subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref57.rebind());
  
  var nodes25 = $("<span>");
  menu.append(nodes25);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl9();
  }));
  
  function renderControl9() {
    subs__.addSub((elements)(function(elements, callback) {
      var root51 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root51); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes25;
      nodes25 = node.contents();
      oldNodes.replaceWith(nodes25);
    }));
  }
  renderControl9();
  root50.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val33 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp56 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val33 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val33));
  }
  
  root50.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root50); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root52 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp38 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp38.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node34 = $("<span>");
  root52.append(node34);
  var condSubs6 = new mobl.CompSubscription();
  subs__.addSub(condSubs6);
  var oldValue6;
  var renderCond6 = function() {
    var value26 = tmp38.get();
    if(oldValue6 === value26) return;
    oldValue6 = value26;
    var subs__ = condSubs6;
    subs__.unsubscribe();
    node34.empty();
    if(value26) {
      items.get().one(function(result__) {
        var tmp57 = result__;
        var current = mobl.ref(result__);
        
        var node35 = $("<div>");
        node35.attr('width', "100%");
        
        
        var node36 = $("<div>");
        node36.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes28 = $("<span>");
        node36.append(nodes28);
        subs__.addSub((ui.group)(function(_, callback) {
          var root55 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node39 = mobl.loadingSpan();
          root55.append(node39);
          var list3;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3 = function() {
            var subs__ = listSubs__;
            list3 = items.get();
            list3.list(function(results3) {
              node39.empty();
              for(var i7 = 0; i7 < results3.length; i7++) {
                (function() {
                  var iternode3 = $("<span>");
                  node39.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i7);
                  var result__ = it.get() == current.get();
                  var tmp11 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp11.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp11.set(it.get() == current.get());
                  }));
                  
                  
                  var node40 = $("<span>");
                  iternode3.append(node40);
                  var condSubs8 = new mobl.CompSubscription();
                  subs__.addSub(condSubs8);
                  var oldValue8;
                  var renderCond8 = function() {
                    var value28 = tmp11.get();
                    if(oldValue8 === value28) return;
                    oldValue8 = value28;
                    var subs__ = condSubs8;
                    subs__.unsubscribe();
                    node40.empty();
                    if(value28) {
                      var nodes29 = $("<span>");
                      node40.append(nodes29);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root56 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes30 = $("<span>");
                        root56.append(nodes30);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl11();
                        }));
                        
                        function renderControl11() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root57 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root57); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes30;
                            nodes30 = node.contents();
                            oldNodes.replaceWith(nodes30);
                          }));
                        }
                        renderControl11();
                        callback(root56); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes29;
                        nodes29 = node.contents();
                        oldNodes.replaceWith(nodes29);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp9 = mobl.ref(result__);
                      
                      var nodes31 = $("<span>");
                      node40.append(nodes31);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root58 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes32 = $("<span>");
                        root58.append(nodes32);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl12();
                        }));
                        
                        function renderControl12() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root59 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root59); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes32;
                            nodes32 = node.contents();
                            oldNodes.replaceWith(nodes32);
                          }));
                        }
                        renderControl12();
                        callback(root58); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes31;
                        nodes31 = node.contents();
                        oldNodes.replaceWith(nodes31);
                      }));
                      
                      
                    }
                  };
                  renderCond8();
                  subs__.addSub(tmp11.addEventListener('change', function() {
                    renderCond8();
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
          
          callback(root55); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes28;
          nodes28 = node.contents();
          oldNodes.replaceWith(nodes28);
        }));
        node35.append(node36);
        
        var node37 = $("<div>");
        node37.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node38 = $("<span>");
        node37.append(node38);
        var condSubs7 = new mobl.CompSubscription();
        subs__.addSub(condSubs7);
        var oldValue7;
        var renderCond7 = function() {
          var value27 = current.get();
          if(oldValue7 === value27) return;
          oldValue7 = value27;
          var subs__ = condSubs7;
          subs__.unsubscribe();
          node38.empty();
          if(value27) {
            var nodes26 = $("<span>");
            node38.append(nodes26);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl10();
            }));
            
            function renderControl10() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root53 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root53); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes26;
                nodes26 = node.contents();
                oldNodes.replaceWith(nodes26);
              }));
            }
            renderControl10();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp12 = mobl.ref(result__);
            
            var nodes27 = $("<span>");
            node38.append(nodes27);
            subs__.addSub((mobl.label)(tmp12, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root54 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root54); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes27;
              nodes27 = node.contents();
              oldNodes.replaceWith(nodes27);
            }));
            
            
          }
        };
        renderCond7();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond7();
        }));
        
        node35.append(node37);
        node34.append(node35);
        
        
        
        
        
        
      });
    } else {
      var nodes33 = $("<span>");
      node34.append(nodes33);
      subs__.addSub((ui.group)(function(_, callback) {
        var root60 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node41 = mobl.loadingSpan();
        root60.append(node41);
        var list4;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList4 = function() {
          var subs__ = listSubs__;
          list4 = items.get();
          list4.list(function(results4) {
            node41.empty();
            for(var i8 = 0; i8 < results4.length; i8++) {
              (function() {
                var iternode4 = $("<span>");
                node41.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i8);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp58 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp5 = mobl.ref(result__);
                
                var nodes34 = $("<span>");
                iternode4.append(nodes34);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root61 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes35 = $("<span>");
                  root61.append(nodes35);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl13();
                  }));
                  
                  function renderControl13() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root62 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root62); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes35;
                      nodes35 = node.contents();
                      oldNodes.replaceWith(nodes35);
                    }));
                  }
                  renderControl13();
                  callback(root61); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes34;
                  nodes34 = node.contents();
                  oldNodes.replaceWith(nodes34);
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
        
        callback(root60); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes33;
        nodes33 = node.contents();
        oldNodes.replaceWith(nodes33);
      }));
      
      
    }
  };
  renderCond6();
  subs__.addSub(tmp38.addEventListener('change', function() {
    renderCond6();
  }));
  
  callback(root52); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root63 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp8 = mobl.ref(result__);
  
  var nodes36 = $("<span>");
  root63.append(nodes36);
  subs__.addSub((ui.header)(tmp8, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root64 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6 = mobl.ref(result__);
    
    var nodes37 = $("<span>");
    root64.append(nodes37);
    subs__.addSub((ui.backButton)(tmp6, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7, function(_, callback) {
      var root65 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root65); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes37;
      nodes37 = node.contents();
      oldNodes.replaceWith(nodes37);
    }));
    callback(root64); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes36;
    nodes36 = node.contents();
    oldNodes.replaceWith(nodes36);
  }));
  var nodes38 = $("<span>");
  root63.append(nodes38);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl14();
  }));
  
  function renderControl14() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root66 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root66); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes38;
      nodes38 = node.contents();
      oldNodes.replaceWith(nodes38);
    }));
  }
  renderControl14();
  callback(root63); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root67 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes39 = $("<span>");
  root67.append(nodes39);
  subs__.addSub((ui.group)(function(_, callback) {
    var root68 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node42 = mobl.loadingSpan();
    root68.append(node42);
    var list5;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList5 = function() {
      var subs__ = listSubs__;
      list5 = coll.get();
      list5.list(function(results5) {
        node42.empty();
        for(var i9 = 0; i9 < results5.length; i9++) {
          (function() {
            var iternode5 = $("<span>");
            node42.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i9);
            var result__ = it.get() == selected.get();
            var tmp14 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp14.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp14.set(it.get() == selected.get());
            }));
            
            
            var node43 = $("<span>");
            iternode5.append(node43);
            var condSubs9 = new mobl.CompSubscription();
            subs__.addSub(condSubs9);
            var oldValue9;
            var renderCond9 = function() {
              var value29 = tmp14.get();
              if(oldValue9 === value29) return;
              oldValue9 = value29;
              var subs__ = condSubs9;
              subs__.unsubscribe();
              node43.empty();
              if(value29) {
                var nodes40 = $("<span>");
                node43.append(nodes40);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root69 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes41 = $("<span>");
                  root69.append(nodes41);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl15();
                  }));
                  
                  function renderControl15() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root70 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root70); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes41;
                      nodes41 = node.contents();
                      oldNodes.replaceWith(nodes41);
                    }));
                  }
                  renderControl15();
                  callback(root69); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes40;
                  nodes40 = node.contents();
                  oldNodes.replaceWith(nodes40);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp13 = mobl.ref(result__);
                
                var nodes42 = $("<span>");
                node43.append(nodes42);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root71 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes43 = $("<span>");
                  root71.append(nodes43);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl16();
                  }));
                  
                  function renderControl16() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root72 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root72); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes43;
                      nodes43 = node.contents();
                      oldNodes.replaceWith(nodes43);
                    }));
                  }
                  renderControl16();
                  callback(root71); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes42;
                  nodes42 = node.contents();
                  oldNodes.replaceWith(nodes42);
                }));
                
                
              }
            };
            renderCond9();
            subs__.addSub(tmp14.addEventListener('change', function() {
              renderCond9();
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
    
    callback(root68); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes39;
    nodes39 = node.contents();
    oldNodes.replaceWith(nodes39);
  }));
  callback(root67); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root73 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp59 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp15 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp15.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp15.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp15.set(coll.get().limit(n.get()));
    }));
    
    
    var node44 = mobl.loadingSpan();
    root73.append(node44);
    var list6;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList6 = function() {
      var subs__ = listSubs__;
      list6 = tmp15.get();
      list6.list(function(results6) {
        node44.empty();
        for(var i10 = 0; i10 < results6.length; i10++) {
          (function() {
            var iternode6 = $("<span>");
            node44.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i10);
            var nodes44 = $("<span>");
            iternode6.append(nodes44);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl17();
            }));
            
            function renderControl17() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root74 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root74); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes44;
                nodes44 = node.contents();
                oldNodes.replaceWith(nodes44);
              }));
            }
            renderControl17();
            
            var oldNodes = iternode6;
            iternode6 = iternode6.contents();
            oldNodes.replaceWith(iternode6);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list6.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
        subs__.addSub(tmp15.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    var result__ = n.get() < total.get();
    var tmp17 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp17.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp17.set(n.get() < total.get());
    }));
    
    
    var node45 = $("<span>");
    root73.append(node45);
    var condSubs10 = new mobl.CompSubscription();
    subs__.addSub(condSubs10);
    var oldValue10;
    var renderCond10 = function() {
      var value30 = tmp17.get();
      if(oldValue10 === value30) return;
      oldValue10 = value30;
      var subs__ = condSubs10;
      subs__.unsubscribe();
      node45.empty();
      if(value30) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16 = mobl.ref(result__);
        
        var nodes45 = $("<span>");
        node45.append(nodes45);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp16, mobl.ref(null), function(_, callback) {
          var root75 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes46 = $("<span>");
          root75.append(nodes46);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root76 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root76); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes46;
            nodes46 = node.contents();
            oldNodes.replaceWith(nodes46);
          }));
          callback(root75); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes45;
          nodes45 = node.contents();
          oldNodes.replaceWith(nodes45);
        }));
        
        
      } else {
        
      }
    };
    renderCond10();
    subs__.addSub(tmp17.addEventListener('change', function() {
      renderCond10();
    }));
    
    callback(root73); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root77 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes47 = $("<span>");
  root77.append(nodes47);
  subs__.addSub((ui.group)(function(_, callback) {
    var root78 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node46 = mobl.loadingSpan();
    root78.append(node46);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = items.get();
      list7.list(function(results7) {
        node46.empty();
        for(var i11 = 0; i11 < results7.length; i11++) {
          (function() {
            var iternode7 = $("<span>");
            node46.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i11), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i11), "_2");
            var nodes48 = $("<span>");
            iternode7.append(nodes48);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root79 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes49 = $("<span>");
              root79.append(nodes49);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root80 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root80); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes49;
                nodes49 = node.contents();
                oldNodes.replaceWith(nodes49);
              }));
              callback(root79); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes48;
              nodes48 = node.contents();
              oldNodes.replaceWith(nodes48);
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
    
    callback(root78); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes47;
    nodes47 = node.contents();
    oldNodes.replaceWith(nodes47);
  }));
  callback(root77); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root81 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll31) {
    coll31 = coll31.reverse();
    function processOne1() {
      var it;
      it = coll31.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll31.length > 0) processOne1(); else rest1();
      
    }
    function rest1() {
      var nodes50 = $("<span>");
      root81.append(nodes50);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root82 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp18 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp19 = mobl.ref(result__);
        
        var nodes51 = $("<span>");
        root82.append(nodes51);
        subs__.addSub((ui.backButton)(tmp19, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp18, function(_, callback) {
          var root83 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root83); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes51;
          nodes51 = node.contents();
          oldNodes.replaceWith(nodes51);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll30) {
                           coll30 = coll30.reverse();
                           function processOne0() {
                             var checked;var it;
                             var tmp62 = coll30.pop();
                             checked = tmp62._1;it = tmp62._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll30.length > 0) processOne0(); else rest0();
                               
                             } else {
                               {
                                 
                                 if(coll30.length > 0) processOne0(); else rest0();
                                 
                               }
                             }
                           }
                           function rest0() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll30.length > 0) processOne0(); else rest0();
                         });
                         
                       };
        var tmp21 = mobl.ref(result__);
        
        var nodes52 = $("<span>");
        root82.append(nodes52);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp21, function(_, callback) {
          var root84 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root84); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes52;
          nodes52 = node.contents();
          oldNodes.replaceWith(nodes52);
        }));
        callback(root82); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes50;
        nodes50 = node.contents();
        oldNodes.replaceWith(nodes50);
      }));
      var nodes53 = $("<span>");
      root81.append(nodes53);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root85 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root85); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes53;
        nodes53 = node.contents();
        oldNodes.replaceWith(nodes53);
      }));
      callback(root81); return subs__;
      
      
    }
    if(coll31.length > 0) processOne1(); else rest1();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root86 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes54 = $("<span>");
  root86.append(nodes54);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root87 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root87); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes54;
    nodes54 = node.contents();
    oldNodes.replaceWith(nodes54);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp22 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp22.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp22.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp22.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp22.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp22.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes55 = $("<span>");
  root86.append(nodes55);
  subs__.addSub((ui.masterDetail)(tmp22, masterItem, detailItem, function(_, callback) {
    var root88 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root88); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes55;
    nodes55 = node.contents();
    oldNodes.replaceWith(nodes55);
  }));
  callback(root86); return subs__;
  
  
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
  var root89 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes56 = $("<span>");
  root89.append(nodes56);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root90 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node47 = mobl.loadingSpan();
    root90.append(node47);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = sections.get();
      list8.list(function(results8) {
        node47.empty();
        for(var i12 = 0; i12 < results8.length; i12++) {
          (function() {
            var iternode8 = $("<span>");
            node47.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i12), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i12), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp24 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp24.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp24.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp24.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp24.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp23 = mobl.ref(result__);
            
            var nodes57 = $("<span>");
            iternode8.append(nodes57);
            subs__.addSub((mobl.span)(tmp24, mobl.ref(null), tmp23, mobl.ref(null), function(_, callback) {
              var root91 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes58 = $("<span>");
              root91.append(nodes58);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root92 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root92); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes58;
                nodes58 = node.contents();
                oldNodes.replaceWith(nodes58);
              }));
              callback(root91); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes57;
              nodes57 = node.contents();
              oldNodes.replaceWith(nodes57);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp25 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp25.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp25.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp25.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp25.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes59 = $("<span>");
            iternode8.append(nodes59);
            subs__.addSub((mobl.block)(tmp25, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root93 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes60 = $("<span>");
              root93.append(nodes60);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl18();
              }));
              
              function renderControl18() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root94 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root94); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes60;
                  nodes60 = node.contents();
                  oldNodes.replaceWith(nodes60);
                }));
              }
              renderControl18();
              callback(root93); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes59;
              nodes59 = node.contents();
              oldNodes.replaceWith(nodes59);
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
    
    callback(root90); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes56;
    nodes56 = node.contents();
    oldNodes.replaceWith(nodes56);
  }));
  callback(root89); return subs__;
  
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
  var root95 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node48 = $("<table>");
  
  var ref58 = style;
  if(ref58.get() !== null) {
    node48.attr('class', ref58.get());
    subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
      node48.attr('class', val);
    }));
    
  }
  subs__.addSub(ref58.rebind());
  
  var nodes61 = $("<span>");
  node48.append(nodes61);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root96 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root96); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes61;
      nodes61 = node.contents();
      oldNodes.replaceWith(nodes61);
    }));
  }
  renderControl19();
  root95.append(node48);
  callback(root95); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root97 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node49 = $("<tr>");
  
  var ref59 = style;
  if(ref59.get() !== null) {
    node49.attr('class', ref59.get());
    subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
      node49.attr('class', val);
    }));
    
  }
  subs__.addSub(ref59.rebind());
  
  var nodes62 = $("<span>");
  node49.append(nodes62);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((elements)(function(elements, callback) {
      var root98 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root98); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes62;
      nodes62 = node.contents();
      oldNodes.replaceWith(nodes62);
    }));
  }
  renderControl20();
  root97.append(node49);
  callback(root97); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root99 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node50 = $("<td>");
  
  var ref60 = width;
  if(ref60.get() !== null) {
    node50.attr('width', ref60.get());
    subs__.addSub(ref60.addEventListener('change', function(_, ref, val) {
      node50.attr('width', val);
    }));
    
  }
  subs__.addSub(ref60.rebind());
  
  var ref61 = style;
  if(ref61.get() !== null) {
    node50.attr('class', ref61.get());
    subs__.addSub(ref61.addEventListener('change', function(_, ref, val) {
      node50.attr('class', val);
    }));
    
  }
  subs__.addSub(ref61.rebind());
  
  var nodes63 = $("<span>");
  node50.append(nodes63);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root100); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes63;
      nodes63 = node.contents();
      oldNodes.replaceWith(nodes63);
    }));
  }
  renderControl21();
  root99.append(node50);
  callback(root99); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root101 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node51 = $("<td>");
  
  var ref62 = width;
  if(ref62.get() !== null) {
    node51.attr('width', ref62.get());
    subs__.addSub(ref62.addEventListener('change', function(_, ref, val) {
      node51.attr('width', val);
    }));
    
  }
  subs__.addSub(ref62.rebind());
  
  var ref63 = style;
  if(ref63.get() !== null) {
    node51.attr('class', ref63.get());
    subs__.addSub(ref63.addEventListener('change', function(_, ref, val) {
      node51.attr('class', val);
    }));
    
  }
  subs__.addSub(ref63.rebind());
  
  var nodes64 = $("<span>");
  node51.append(nodes64);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl22();
  }));
  
  function renderControl22() {
    subs__.addSub((elements)(function(elements, callback) {
      var root102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root102); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes64;
      nodes64 = node.contents();
      oldNodes.replaceWith(nodes64);
    }));
  }
  renderControl22();
  root101.append(node51);
  callback(root101); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root103 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node52 = $("<td>");
  
  var ref64 = width;
  if(ref64.get() !== null) {
    node52.attr('width', ref64.get());
    subs__.addSub(ref64.addEventListener('change', function(_, ref, val) {
      node52.attr('width', val);
    }));
    
  }
  subs__.addSub(ref64.rebind());
  
  var ref65 = style;
  if(ref65.get() !== null) {
    node52.attr('class', ref65.get());
    subs__.addSub(ref65.addEventListener('change', function(_, ref, val) {
      node52.attr('class', val);
    }));
    
  }
  subs__.addSub(ref65.rebind());
  
  
  var node53 = $("<strong>");
  
  var nodes65 = $("<span>");
  node53.append(nodes65);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl23();
  }));
  
  function renderControl23() {
    subs__.addSub((elements)(function(elements, callback) {
      var root104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root104); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes65;
      nodes65 = node.contents();
      oldNodes.replaceWith(nodes65);
    }));
  }
  renderControl23();
  node52.append(node53);
  root103.append(node52);
  callback(root103); return subs__;
  
  
  
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
    function processOne2() {
      var item;
      item = coll32.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll32.length > 0) processOne2(); else rest2();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll32.length > 0) processOne2(); else rest2();
          
        }
      }
    }
    function rest2() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll32.length > 0) processOne2(); else rest2();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mDetailScreen = function(it, detail, number, callback, screenCallback) {
  var root105 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp28 = mobl.ref(result__);
  
  var nodes66 = $("<span>");
  root105.append(nodes66);
  subs__.addSub((ui.header)(tmp28, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root106 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp64 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp65 = result__;
        var result__ = plot.renderPlot("corePlotArea", it.get());
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp27 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp26 = mobl.ref(result__);
        
        var nodes67 = $("<span>");
        root106.append(nodes67);
        subs__.addSub((ui.backButton)(tmp26, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp27, function(_, callback) {
          var root107 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root107); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes67;
          nodes67 = node.contents();
          oldNodes.replaceWith(nodes67);
        }));
        callback(root106); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes66;
    nodes66 = node.contents();
    oldNodes.replaceWith(nodes66);
  }));
  var nodes68 = $("<span>");
  root105.append(nodes68);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl24();
  }));
  
  function renderControl24() {
    subs__.addSub((detail.get())(it, number, function(elements, callback) {
      var root108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root108); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes68;
      nodes68 = node.contents();
      oldNodes.replaceWith(nodes68);
    }));
  }
  renderControl24();
  callback(root105); return subs__;
  
  
  return subs__;
};

ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root109 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 600;
  var tmp39 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp39.set(mobl.window.get().innerWidth > 600);
  }));
  
  
  var node54 = $("<span>");
  root109.append(node54);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value31 = tmp39.get();
    if(oldValue11 === value31) return;
    oldValue11 = value31;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node54.empty();
    if(value31) {
      
      var current = mobl.ref(null);
      
      var node55 = $("<div>");
      node55.attr('width', "100%");
      
      
      var node56 = $("<div>");
      node56.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes70 = $("<span>");
      node56.append(nodes70);
      subs__.addSub((ui.group)(function(_, callback) {
        var root111 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node59 = mobl.loadingSpan();
        root111.append(node59);
        var list9;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList9 = function() {
          var subs__ = listSubs__;
          list9 = items.get();
          list9.list(function(results9) {
            node59.empty();
            for(var i13 = 0; i13 < results9.length; i13++) {
              (function() {
                var iternode9 = $("<span>");
                node59.append(iternode9);
                var it;
                it = mobl.ref(mobl.ref(results9), i13);
                var result__ = it.get() == current.get();
                var tmp35 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp35.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp35.set(it.get() == current.get());
                }));
                
                
                var node60 = $("<span>");
                iternode9.append(node60);
                var condSubs13 = new mobl.CompSubscription();
                subs__.addSub(condSubs13);
                var oldValue13;
                var renderCond13 = function() {
                  var value33 = tmp35.get();
                  if(oldValue13 === value33) return;
                  oldValue13 = value33;
                  var subs__ = condSubs13;
                  subs__.unsubscribe();
                  node60.empty();
                  if(value33) {
                    var nodes71 = $("<span>");
                    node60.append(nodes71);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root112 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp72 = result__;
                        var tmp32 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp69 = result__;
                            var result__ = tmp69;
                            tmp32.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp71 = result__;
                            var result__ = tmp71;
                            tmp32.set(result__);
                            
                          });
                        }));
                        
                        var nodes72 = $("<span>");
                        root112.append(nodes72);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl26();
                        }));
                        
                        function renderControl26() {
                          subs__.addSub((masterItem.get())(it, tmp32, function(elements, callback) {
                            var root113 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root113); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes72;
                            nodes72 = node.contents();
                            oldNodes.replaceWith(nodes72);
                          }));
                        }
                        renderControl26();
                        callback(root112); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes71;
                      nodes71 = node.contents();
                      oldNodes.replaceWith(nodes71);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = true;
                                     ui.visible.set(result__);
                                     mathJAX.renderMaths(function(result__) {
                                       var tmp76 = result__;
                                       var result__ = plot.renderPlot("corePlotArea", current.get());
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   };
                    var tmp34 = mobl.ref(result__);
                    
                    var nodes73 = $("<span>");
                    node60.append(nodes73);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp34, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root114 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp75 = result__;
                        var tmp33 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp73 = result__;
                            var result__ = tmp73;
                            tmp33.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp74 = result__;
                            var result__ = tmp74;
                            tmp33.set(result__);
                            
                          });
                        }));
                        
                        var nodes74 = $("<span>");
                        root114.append(nodes74);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl27();
                        }));
                        
                        function renderControl27() {
                          subs__.addSub((masterItem.get())(it, tmp33, function(elements, callback) {
                            var root115 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root115); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes74;
                            nodes74 = node.contents();
                            oldNodes.replaceWith(nodes74);
                          }));
                        }
                        renderControl27();
                        callback(root114); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes73;
                      nodes73 = node.contents();
                      oldNodes.replaceWith(nodes73);
                    }));
                    
                    
                  }
                };
                renderCond13();
                subs__.addSub(tmp35.addEventListener('change', function() {
                  renderCond13();
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
        
        callback(root111); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes70;
        nodes70 = node.contents();
        oldNodes.replaceWith(nodes70);
      }));
      node55.append(node56);
      
      var node57 = $("<div>");
      node57.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
      
      var result__ = current.get() && ui.visible.get();
      var tmp37 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        tmp37.set(current.get() && ui.visible.get());
      }));
      subs__.addSub(ui.visible.addEventListener('change', function() {
        tmp37.set(current.get() && ui.visible.get());
      }));
      
      
      var node58 = $("<span>");
      node57.append(node58);
      var condSubs12 = new mobl.CompSubscription();
      subs__.addSub(condSubs12);
      var oldValue12;
      var renderCond12 = function() {
        var value32 = tmp37.get();
        if(oldValue12 === value32) return;
        oldValue12 = value32;
        var subs__ = condSubs12;
        subs__.unsubscribe();
        node58.empty();
        if(value32) {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp68 = result__;
            var tmp36 = mobl.ref(result__);
            subs__.addSub(current.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp66 = result__;
                var result__ = tmp66;
                tmp36.set(result__);
                
              });
            }));
            subs__.addSub(items.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp67 = result__;
                var result__ = tmp67;
                tmp36.set(result__);
                
              });
            }));
            
            var nodes69 = $("<span>");
            node58.append(nodes69);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl25();
            }));
            
            function renderControl25() {
              subs__.addSub((detail.get())(current, tmp36, function(elements, callback) {
                var root110 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root110); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes69;
                nodes69 = node.contents();
                oldNodes.replaceWith(nodes69);
              }));
            }
            renderControl25();
            
            
          });
        } else {
          
        }
      };
      renderCond12();
      subs__.addSub(tmp37.addEventListener('change', function() {
        renderCond12();
      }));
      
      node55.append(node57);
      node54.append(node55);
      
      
      
      
      
      
    } else {
      var nodes75 = $("<span>");
      node54.append(nodes75);
      subs__.addSub((ui.group)(function(_, callback) {
        var root116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node61 = mobl.loadingSpan();
        root116.append(node61);
        var list10;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList10 = function() {
          var subs__ = listSubs__;
          list10 = items.get();
          list10.list(function(results10) {
            node61.empty();
            for(var i14 = 0; i14 < results10.length; i14++) {
              (function() {
                var iternode10 = $("<span>");
                node61.append(iternode10);
                var it;
                it = mobl.ref(mobl.ref(results10), i14);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 ui.indexOf(it.get(), items.get(), function(result__) {
                                   var tmp82 = result__;
                                   mobl.call('ui.mDetailScreen', [it, detail, mobl.ref(tmp82), mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp81 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
                               };
                var tmp31 = mobl.ref(result__);
                
                var nodes76 = $("<span>");
                iternode10.append(nodes76);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp31, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root117 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp79 = result__;
                    var tmp29 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp77 = result__;
                        var result__ = tmp77;
                        tmp29.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp78 = result__;
                        var result__ = tmp78;
                        tmp29.set(result__);
                        
                      });
                    }));
                    
                    var nodes77 = $("<span>");
                    root117.append(nodes77);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl28();
                    }));
                    
                    function renderControl28() {
                      subs__.addSub((masterItem.get())(it, tmp29, function(elements, callback) {
                        var root118 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root118); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes77;
                        nodes77 = node.contents();
                        oldNodes.replaceWith(nodes77);
                      }));
                    }
                    renderControl28();
                    callback(root117); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes76;
                  nodes76 = node.contents();
                  oldNodes.replaceWith(nodes76);
                }));
                
                var oldNodes = iternode10;
                iternode10 = iternode10.contents();
                oldNodes.replaceWith(iternode10);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list10.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList10(true); }));
          });
        };
        renderList10();
        
        callback(root116); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes75;
        nodes75 = node.contents();
        oldNodes.replaceWith(nodes75);
      }));
      
      
    }
  };
  renderCond11();
  subs__.addSub(tmp39.addEventListener('change', function() {
    renderCond11();
  }));
  
  callback(root109); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root119 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes78 = $("<span>");
  root119.append(nodes78);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root120 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes79 = $("<span>");
    root120.append(nodes79);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root121 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root121); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes79;
      nodes79 = node.contents();
      oldNodes.replaceWith(nodes79);
    }));
    callback(root120); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes78;
    nodes78 = node.contents();
    oldNodes.replaceWith(nodes78);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes80 = $("<span>");
  root119.append(nodes80);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root122 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root122); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes80;
    nodes80 = node.contents();
    oldNodes.replaceWith(nodes80);
  }));
  callback(root119); return subs__;
  
  
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
