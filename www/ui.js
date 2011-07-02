mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root0 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node0 = $("<span>");
  root0.append(node0);
  var condSubs0 = new mobl.CompSubscription();
  subs__.addSub(condSubs0);
  var oldValue0;
  var renderCond0 = function() {
    var value40 = value.get();
    if(oldValue0 === value40) return;
    oldValue0 = value40;
    var subs__ = condSubs0;
    subs__.unsubscribe();
    node0.empty();
    if(value40) {
      var nodes0 = $("<span>");
      node0.append(nodes0);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl0();
      }));
      
      function renderControl0() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes0;
          nodes0 = node.contents();
          oldNodes.replaceWith(nodes0);
        }));
      }
      renderControl0();
      
      
    } else {
      var nodes1 = $("<span>");
      node0.append(nodes1);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes2 = $("<span>");
        root2.append(nodes2);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root3 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2;
          nodes2 = node.contents();
          oldNodes.replaceWith(nodes2);
        }));
        var nodes3 = $("<span>");
        root2.append(nodes3);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root4 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3;
          nodes3 = node.contents();
          oldNodes.replaceWith(nodes3);
        }));
        callback(root2); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1;
        nodes1 = node.contents();
        oldNodes.replaceWith(nodes1);
      }));
      
      
    }
  };
  renderCond0();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond0();
  }));
  
  callback(root0); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root5 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1 = $("<div>");
  
  var ref3 = mobl.ref(ui.headerStyle);
  if(ref3.get() !== null) {
    node1.attr('class', ref3.get());
    subs__.addSub(ref3.addEventListener('change', function(_, ref, val) {
      node1.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3.rebind());
  
  var val0 = onclick.get();
  if(val0 !== null) {
    subs__.addSub(mobl.domBind(node1, 'tap', val0));
  }
  
  var ref4 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref4.get() !== null) {
    node1.attr('style', ref4.get());
    subs__.addSub(ref4.addEventListener('change', function(_, ref, val) {
      node1.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref4.rebind());
  
  
  var node4 = $("<div>");
  
  var ref2 = mobl.ref(ui.headerContainerStyle);
  if(ref2.get() !== null) {
    node4.attr('class', ref2.get());
    subs__.addSub(ref2.addEventListener('change', function(_, ref, val) {
      node4.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2.rebind());
  
  
  var node5 = $("<div>");
  
  var ref0 = text;
  node5.text(""+ref0.get());
  var ignore0 = false;
  subs__.addSub(ref0.addEventListener('change', function(_, ref, val) {
    if(ignore0) return;
    node5.text(""+val);
  }));
  subs__.addSub(ref0.rebind());
  
  
  var ref1 = mobl.ref(ui.headerTextStyle);
  if(ref1.get() !== null) {
    node5.attr('class', ref1.get());
    subs__.addSub(ref1.addEventListener('change', function(_, ref, val) {
      node5.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1.rebind());
  
  node4.append(node5);
  node1.append(node4);
  var nodes4 = $("<span>");
  node1.append(nodes4);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1();
  }));
  
  function renderControl1() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4;
      nodes4 = node.contents();
      oldNodes.replaceWith(nodes4);
    }));
  }
  renderControl1();
  root5.append(node1);
  
  var node2 = $("<span>");
  root5.append(node2);
  var condSubs1 = new mobl.CompSubscription();
  subs__.addSub(condSubs1);
  var oldValue1;
  var renderCond1 = function() {
    var value41 = fixedPosition.get();
    if(oldValue1 === value41) return;
    oldValue1 = value41;
    var subs__ = condSubs1;
    subs__.unsubscribe();
    node2.empty();
    if(value41) {
      
      var node3 = $("<div>");
      node3.attr('id', "hello");
      node3.attr('style', "height: 2.9em;");
      
      node2.append(node3);
      
      
    } else {
      
    }
  };
  renderCond1();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond1();
  }));
  
  callback(root5); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root7 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref5 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref5.get() !== null) {
    sp.attr('class', ref5.get());
    subs__.addSub(ref5.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref5.rebind());
  
  var val1 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1));
  }
  
  var val2 = function(event, callback) {
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
  if(val2 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val2));
  }
  
  var val3 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after0(result__) {
                    var tmp32 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val3 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val3));
  }
  
  var val4 = function(event, callback) {
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
  if(val4 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val4));
  }
  
  var ref6 = text;
  sp.text(""+ref6.get());
  var ignore1 = false;
  subs__.addSub(ref6.addEventListener('change', function(_, ref, val) {
    if(ignore1) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref6.rebind());
  
  
  root7.append(sp);
  callback(root7); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5 = $("<span>");
  root8.append(nodes5);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5;
    nodes5 = node.contents();
    oldNodes.replaceWith(nodes5);
  }));
  callback(root8); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6 = $("<span>");
  root10.append(nodes6);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root11 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6;
    nodes6 = node.contents();
    oldNodes.replaceWith(nodes6);
  }));
  callback(root10); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root12 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6 = $("<ul>");
  
  var ref7 = mobl.ref(ui.groupStyle);
  if(ref7.get() !== null) {
    node6.attr('class', ref7.get());
    subs__.addSub(ref7.addEventListener('change', function(_, ref, val) {
      node6.attr('class', val);
    }));
    
  }
  subs__.addSub(ref7.rebind());
  
  var nodes7 = $("<span>");
  node6.append(nodes7);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl2();
  }));
  
  function renderControl2() {
    subs__.addSub((elements)(function(elements, callback) {
      var root13 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root13); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7;
      nodes7 = node.contents();
      oldNodes.replaceWith(nodes7);
    }));
  }
  renderControl2();
  root12.append(node6);
  callback(root12); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root14 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7 = $("<img>");
  
  var ref8 = url;
  if(ref8.get() !== null) {
    node7.attr('src', ref8.get());
    subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
      node7.attr('src', val);
    }));
    
  }
  subs__.addSub(ref8.rebind());
  
  var ref9 = width;
  if(ref9.get() !== null) {
    node7.attr('width', ref9.get());
    subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
      node7.attr('width', val);
    }));
    
  }
  subs__.addSub(ref9.rebind());
  
  var ref10 = height;
  if(ref10.get() !== null) {
    node7.attr('height', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      node7.attr('height', val);
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  var ref11 = style;
  if(ref11.get() !== null) {
    node7.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node7.attr('class', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  var val5 = onclick.get();
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(node7, 'tap', val5));
  }
  
  var ref12 = valign;
  if(ref12.get() !== null) {
    node7.attr('valign', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node7.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  var ref13 = align;
  if(ref13.get() !== null) {
    node7.attr('align', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
      node7.attr('align', val);
    }));
    
  }
  subs__.addSub(ref13.rebind());
  
  root14.append(node7);
  callback(root14); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root15 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref14 = mobl.ref(ui.itemStyle);
  if(ref14.get() !== null) {
    el.attr('class', ref14.get());
    subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14.rebind());
  
  var ref15 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref15.get() !== null) {
    el.attr('class', ref15.get());
    subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref15.rebind());
  
  var val6 = onswipe.get();
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val6));
  }
  
  var val7 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp33 = result__;
                                           function after1(result__) {
                                             var tmp34 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp35 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val7));
  }
  
  var nodes8 = $("<span>");
  el.append(nodes8);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl3();
  }));
  
  function renderControl3() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8;
      nodes8 = node.contents();
      oldNodes.replaceWith(nodes8);
    }));
  }
  renderControl3();
  root15.append(el);
  callback(root15); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root17 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node8 = $("<input>");
  node8.attr('type', "checkbox");
  
  var ref17 = b;
  node8.attr('checked', !!ref17.get());
  subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
    if(ref === ref17) node8.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node8, 'change', function() {
    b.set(!!node8.attr('checked'));
  }));
  
  var val9 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(node8, 'tap', val9));
  }
  
  var val10 = onchange.get();
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(node8, 'change', val10));
  }
  
  root17.append(node8);
  
  root17.append(" ");
  
  var node9 = $("<span>");
  
  var ref16 = label;
  node9.text(""+ref16.get());
  var ignore2 = false;
  subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    node9.text(""+val);
  }));
  subs__.addSub(ref16.rebind());
  
  
  var val8 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp36 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(node9, 'tap', val8));
  }
  
  root17.append(node9);
  callback(root17); return subs__;
  
  
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
  var root18 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node10 = $("<span>");
  root18.append(node10);
  var condSubs2 = new mobl.CompSubscription();
  subs__.addSub(condSubs2);
  var oldValue2;
  var renderCond2 = function() {
    var value42 = label.get();
    if(oldValue2 === value42) return;
    oldValue2 = value42;
    var subs__ = condSubs2;
    subs__.unsubscribe();
    node10.empty();
    if(value42) {
      var nodes9 = $("<span>");
      node10.append(nodes9);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root19 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9;
        nodes9 = node.contents();
        oldNodes.replaceWith(nodes9);
      }));
      
      
    } else {
      
    }
  };
  renderCond2();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2();
  }));
  
  
  var node11 = $("<span>");
  root18.append(node11);
  var condSubs3 = new mobl.CompSubscription();
  subs__.addSub(condSubs3);
  var oldValue3;
  var renderCond3 = function() {
    var value43 = validator.get();
    if(oldValue3 === value43) return;
    oldValue3 = value43;
    var subs__ = condSubs3;
    subs__.unsubscribe();
    node11.empty();
    if(value43) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after6(result__) {
        var tmp37 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp38 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node12 = $("<input>");
        
        var ref18 = inputType;
        if(ref18.get() !== null) {
          node12.attr('type', ref18.get());
          subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
            node12.attr('type', val);
          }));
          
        }
        subs__.addSub(ref18.rebind());
        
        var ref19 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref19.get() !== null) {
          node12.attr('class', ref19.get());
          subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
            node12.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node12.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node12.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node12.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref19.rebind());
        
        var ref20 = placeholder;
        if(ref20.get() !== null) {
          node12.attr('placeholder', ref20.get());
          subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
            node12.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref20.rebind());
        
        var ref21 = temp;
        node12.val(""+ref21.get());
        var ignore3 = false;
        subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
          if(ignore3) return;
          node12.val(""+val);
        }));
        subs__.addSub(ref21.rebind());
        
        subs__.addSub(mobl.domBind(node12, 'keyup change', function() {
          ignore3 = true;
          temp.set(mobl.stringTomobl__String(node12.val()));
          ignore3 = false;
        }));
        
        
        var val11 = onchange.get();
        if(val11 !== null) {
          subs__.addSub(mobl.domBind(node12, 'change', val11));
        }
        
        var val12 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp39 = result__;
                          function after4(result__) {
                            var tmp41 = result__;
                            var result__ = tmp41;
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
                            var tmp41 = result__;
                            var result__ = tmp41;
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
        if(val12 !== null) {
          subs__.addSub(mobl.domBind(node12, 'keyup', val12));
        }
        
        var val13 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val13 !== null) {
          subs__.addSub(mobl.domBind(node12, 'blur', val13));
        }
        
        node11.append(node12);
        var nodes10 = $("<span>");
        node11.append(nodes10);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root20 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root20); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10;
          nodes10 = node.contents();
          oldNodes.replaceWith(nodes10);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node13 = $("<input>");
      
      var ref22 = inputType;
      if(ref22.get() !== null) {
        node13.attr('type', ref22.get());
        subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
          node13.attr('type', val);
        }));
        
      }
      subs__.addSub(ref22.rebind());
      
      var ref23 = style;
      if(ref23.get() !== null) {
        node13.attr('class', ref23.get());
        subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
          node13.attr('class', val);
        }));
        
      }
      subs__.addSub(ref23.rebind());
      
      var ref24 = placeholder;
      if(ref24.get() !== null) {
        node13.attr('placeholder', ref24.get());
        subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
          node13.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref24.rebind());
      
      var ref25 = s;
      node13.val(""+ref25.get());
      var ignore4 = false;
      subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
        if(ignore4) return;
        node13.val(""+val);
      }));
      subs__.addSub(ref25.rebind());
      
      subs__.addSub(mobl.domBind(node13, 'keyup change', function() {
        ignore4 = true;
        s.set(mobl.stringTomobl__String(node13.val()));
        ignore4 = false;
      }));
      
      
      var val14 = onchange.get();
      if(val14 !== null) {
        subs__.addSub(mobl.domBind(node13, 'change', val14));
      }
      
      var val15 = onkeyup.get();
      if(val15 !== null) {
        subs__.addSub(mobl.domBind(node13, 'keyup', val15));
      }
      
      var val16 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val16 !== null) {
        subs__.addSub(mobl.domBind(node13, 'blur', val16));
      }
      
      node11.append(node13);
      
      
    }
  };
  renderCond3();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond3();
  }));
  
  callback(root18); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root21 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes11 = $("<span>");
  root21.append(nodes11);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root22 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root22); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes11;
    nodes11 = node.contents();
    oldNodes.replaceWith(nodes11);
  }));
  callback(root21); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root23 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes12 = $("<span>");
  root23.append(nodes12);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root24 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root24); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12;
    nodes12 = node.contents();
    oldNodes.replaceWith(nodes12);
  }));
  callback(root23); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root25 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node14 = $("<span>");
  root25.append(node14);
  var condSubs4 = new mobl.CompSubscription();
  subs__.addSub(condSubs4);
  var oldValue4;
  var renderCond4 = function() {
    var value44 = label.get();
    if(oldValue4 === value44) return;
    oldValue4 = value44;
    var subs__ = condSubs4;
    subs__.unsubscribe();
    node14.empty();
    if(value44) {
      var nodes13 = $("<span>");
      node14.append(nodes13);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root26 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root26); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13;
        nodes13 = node.contents();
        oldNodes.replaceWith(nodes13);
      }));
      
      
    } else {
      
    }
  };
  renderCond4();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond4();
  }));
  
  
  var node15 = $("<input>");
  node15.attr('type', "range");
  
  var ref26 = n;
  node15.val(""+ref26.get());
  var ignore5 = false;
  subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
    if(ignore5) return;
    node15.val(""+val);
  }));
  subs__.addSub(ref26.rebind());
  
  subs__.addSub(mobl.domBind(node15, 'keyup change', function() {
    ignore5 = true;
    n.set(mobl.stringTomobl__Num(node15.val()));
    ignore5 = false;
  }));
  
  
  var ref27 = min;
  if(ref27.get() !== null) {
    node15.attr('min', ref27.get());
    subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
      node15.attr('min', val);
    }));
    
  }
  subs__.addSub(ref27.rebind());
  
  var ref28 = max;
  if(ref28.get() !== null) {
    node15.attr('max', ref28.get());
    subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
      node15.attr('max', val);
    }));
    
  }
  subs__.addSub(ref28.rebind());
  
  var ref29 = step;
  if(ref29.get() !== null) {
    node15.attr('step', ref29.get());
    subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
      node15.attr('step', val);
    }));
    
  }
  subs__.addSub(ref29.rebind());
  node15.attr('style', "width: 99%;");
  
  var val17 = onchange.get();
  if(val17 !== null) {
    subs__.addSub(mobl.domBind(node15, 'change', val17));
  }
  
  var val18 = onkeyup.get();
  if(val18 !== null) {
    subs__.addSub(mobl.domBind(node15, 'keyup', val18));
  }
  
  var ref30 = placeholder;
  if(ref30.get() !== null) {
    node15.attr('placeholder', ref30.get());
    subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
      node15.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref30.rebind());
  
  root25.append(node15);
  callback(root25); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root27 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after7(result__) {
      var tmp42 = result__;
      var result__ = tmp42;
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
  var nodes14 = $("<span>");
  root27.append(nodes14);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root28 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14;
    nodes14 = node.contents();
    oldNodes.replaceWith(nodes14);
  }));
  callback(root27); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root29 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16 = $("<span>");
  root29.append(node16);
  var condSubs5 = new mobl.CompSubscription();
  subs__.addSub(condSubs5);
  var oldValue5;
  var renderCond5 = function() {
    var value45 = label.get();
    if(oldValue5 === value45) return;
    oldValue5 = value45;
    var subs__ = condSubs5;
    subs__.unsubscribe();
    node16.empty();
    if(value45) {
      
      var node17 = $("<span>");
      node17.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref34 = label;
      node17.text(""+ref34.get());
      var ignore7 = false;
      subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
        if(ignore7) return;
        node17.text(""+val);
      }));
      subs__.addSub(ref34.rebind());
      
      
      node16.append(node17);
      
      var node18 = $("<span>");
      node18.attr('style', "float: left");
      
      
      var node19 = $("<input>");
      node19.attr('type', "password");
      
      var ref31 = style;
      if(ref31.get() !== null) {
        node19.attr('class', ref31.get());
        subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
          node19.attr('class', val);
        }));
        
      }
      subs__.addSub(ref31.rebind());
      
      var ref32 = placeholder;
      if(ref32.get() !== null) {
        node19.attr('placeholder', ref32.get());
        subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
          node19.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref32.rebind());
      
      var ref33 = s;
      node19.val(""+ref33.get());
      var ignore6 = false;
      subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node19.val(""+val);
      }));
      subs__.addSub(ref33.rebind());
      
      subs__.addSub(mobl.domBind(node19, 'keyup change', function() {
        ignore6 = true;
        s.set(mobl.stringTomobl__String(node19.val()));
        ignore6 = false;
      }));
      
      
      var val19 = onchange.get();
      if(val19 !== null) {
        subs__.addSub(mobl.domBind(node19, 'change', val19));
      }
      
      var val20 = onkeyup.get();
      if(val20 !== null) {
        subs__.addSub(mobl.domBind(node19, 'keyup', val20));
      }
      
      var val21 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node19, 'blur', val21));
      }
      
      node18.append(node19);
      node16.append(node18);
      
      
      
      
    } else {
      
      var node20 = $("<input>");
      node20.attr('type', "password");
      
      var ref35 = style;
      if(ref35.get() !== null) {
        node20.attr('class', ref35.get());
        subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
          node20.attr('class', val);
        }));
        
      }
      subs__.addSub(ref35.rebind());
      
      var ref36 = placeholder;
      if(ref36.get() !== null) {
        node20.attr('placeholder', ref36.get());
        subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
          node20.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref36.rebind());
      
      var ref37 = s;
      node20.val(""+ref37.get());
      var ignore8 = false;
      subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node20.val(""+val);
      }));
      subs__.addSub(ref37.rebind());
      
      subs__.addSub(mobl.domBind(node20, 'keyup change', function() {
        ignore8 = true;
        s.set(mobl.stringTomobl__String(node20.val()));
        ignore8 = false;
      }));
      
      
      var val22 = onchange.get();
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node20, 'change', val22));
      }
      
      var val23 = onkeyup.get();
      if(val23 !== null) {
        subs__.addSub(mobl.domBind(node20, 'keyup', val23));
      }
      
      var val24 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val24 !== null) {
        subs__.addSub(mobl.domBind(node20, 'blur', val24));
      }
      
      node16.append(node20);
      
      
    }
  };
  renderCond5();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond5();
  }));
  
  callback(root29); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root30 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref42 = style;
  if(ref42.get() !== null) {
    sel.attr('class', ref42.get());
    subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref42.rebind());
  
  var val25 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after8(result__) {
                    var tmp44 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after8);if(result__ !== undefined) after8(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val25 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val25));
  }
  
  
  var node21 = mobl.loadingSpan();
  sel.append(node21);
  var list0;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList0 = function() {
    var subs__ = listSubs__;
    list0 = options.get();
    list0.list(function(results0) {
      node21.empty();
      for(var i36 = 0; i36 < results0.length; i36++) {
        (function() {
          var iternode0 = $("<span>");
          node21.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i36), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i36), "_2");
          
          var node22 = $("<option>");
          
          var ref38 = optionDescription;
          node22.text(""+ref38.get());
          var ignore9 = false;
          subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
            if(ignore9) return;
            node22.text(""+val);
          }));
          subs__.addSub(ref38.rebind());
          
          
          var ref39 = optionStyle;
          if(ref39.get() !== null) {
            node22.attr('class', ref39.get());
            subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
              node22.attr('class', val);
            }));
            
          }
          subs__.addSub(ref39.rebind());
          
          var ref40 = optionValue;
          if(ref40.get() !== null) {
            node22.attr('value', ref40.get());
            subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
              node22.attr('value', val);
            }));
            
          }
          subs__.addSub(ref40.rebind());
          
          var ref41 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref41.get() !== null) {
            node22.attr('selected', ref41.get());
            subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
              node22.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node22.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node22.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref41.rebind());
          
          iternode0.append(node22);
          
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
  
  root30.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root30); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root31 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes15 = $("<span>");
    root31.append(nodes15);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root32 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node23 = mobl.loadingSpan();
      root32.append(node23);
      var list1;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1 = function() {
        var subs__ = listSubs__;
        list1 = tabs.get();
        list1.list(function(results1) {
          node23.empty();
          for(var i37 = 0; i37 < results1.length; i37++) {
            (function() {
              var iternode1 = $("<span>");
              node23.append(iternode1);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1), i37), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i37), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i37), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp1 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp1.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp1.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp0 = mobl.ref(result__);
              
              var nodes16 = $("<span>");
              iternode1.append(nodes16);
              subs__.addSub((mobl.span)(tmp1, mobl.ref(null), tmp0, mobl.ref(null), function(_, callback) {
                var root33 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes17 = $("<span>");
                root33.append(nodes17);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root34 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root34); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17;
                  nodes17 = node.contents();
                  oldNodes.replaceWith(nodes17);
                }));
                callback(root33); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes16;
                nodes16 = node.contents();
                oldNodes.replaceWith(nodes16);
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
      
      callback(root32); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15;
      nodes15 = node.contents();
      oldNodes.replaceWith(nodes15);
    }));
    
    var node24 = mobl.loadingSpan();
    root31.append(node24);
    var list2;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2 = function() {
      var subs__ = listSubs__;
      list2 = tabs.get();
      list2.list(function(results2) {
        node24.empty();
        for(var i38 = 0; i38 < results2.length; i38++) {
          (function() {
            var iternode2 = $("<span>");
            node24.append(iternode2);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2), i38), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i38), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i38), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp2 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp2.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp2.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp2.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp2.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes18 = $("<span>");
            iternode2.append(nodes18);
            subs__.addSub((mobl.block)(tmp2, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root35 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes19 = $("<span>");
              root35.append(nodes19);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root36 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes20 = $("<span>");
                root36.append(nodes20);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl4();
                }));
                
                function renderControl4() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root37 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root37); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes20;
                    nodes20 = node.contents();
                    oldNodes.replaceWith(nodes20);
                  }));
                }
                renderControl4();
                callback(root36); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes19;
                nodes19 = node.contents();
                oldNodes.replaceWith(nodes19);
              }));
              callback(root35); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes18;
              nodes18 = node.contents();
              oldNodes.replaceWith(nodes18);
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
    
    callback(root31); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes15 = $("<span>");
      root31.append(nodes15);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root32 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node23 = mobl.loadingSpan();
        root32.append(node23);
        var list1;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList1 = function() {
          var subs__ = listSubs__;
          list1 = tabs.get();
          list1.list(function(results1) {
            node23.empty();
            for(var i37 = 0; i37 < results1.length; i37++) {
              (function() {
                var iternode1 = $("<span>");
                node23.append(iternode1);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results1), i37), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i37), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i37), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp1 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp1.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp1.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp1.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp1.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp0 = mobl.ref(result__);
                
                var nodes16 = $("<span>");
                iternode1.append(nodes16);
                subs__.addSub((mobl.span)(tmp1, mobl.ref(null), tmp0, mobl.ref(null), function(_, callback) {
                  var root33 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes17 = $("<span>");
                  root33.append(nodes17);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root34 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root34); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes17;
                    nodes17 = node.contents();
                    oldNodes.replaceWith(nodes17);
                  }));
                  callback(root33); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes16;
                  nodes16 = node.contents();
                  oldNodes.replaceWith(nodes16);
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
        
        callback(root32); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes15;
        nodes15 = node.contents();
        oldNodes.replaceWith(nodes15);
      }));
      
      var node24 = mobl.loadingSpan();
      root31.append(node24);
      var list2;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2 = function() {
        var subs__ = listSubs__;
        list2 = tabs.get();
        list2.list(function(results2) {
          node24.empty();
          for(var i38 = 0; i38 < results2.length; i38++) {
            (function() {
              var iternode2 = $("<span>");
              node24.append(iternode2);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results2), i38), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i38), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i38), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp2 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp2.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp2.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp2.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp2.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes18 = $("<span>");
              iternode2.append(nodes18);
              subs__.addSub((mobl.block)(tmp2, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root35 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes19 = $("<span>");
                root35.append(nodes19);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root36 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes20 = $("<span>");
                  root36.append(nodes20);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl4();
                  }));
                  
                  function renderControl4() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root37 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root37); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes20;
                      nodes20 = node.contents();
                      oldNodes.replaceWith(nodes20);
                    }));
                  }
                  renderControl4();
                  callback(root36); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes19;
                  nodes19 = node.contents();
                  oldNodes.replaceWith(nodes19);
                }));
                callback(root35); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes18;
                nodes18 = node.contents();
                oldNodes.replaceWith(nodes18);
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
      
      callback(root31); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root38 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node25 = $("<div>");
  
  var ref46 = mobl.ref(ui.searchboxStyle);
  if(ref46.get() !== null) {
    node25.attr('class', ref46.get());
    subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
      node25.attr('class', val);
    }));
    
  }
  subs__.addSub(ref46.rebind());
  
  
  var node26 = $("<input>");
  node26.attr('type', "search");
  
  var ref43 = mobl.ref(ui.searchBoxInputStyle);
  if(ref43.get() !== null) {
    node26.attr('class', ref43.get());
    subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
      node26.attr('class', val);
    }));
    
  }
  subs__.addSub(ref43.rebind());
  
  var ref44 = placeholder;
  if(ref44.get() !== null) {
    node26.attr('placeholder', ref44.get());
    subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
      node26.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref44.rebind());
  
  var ref45 = s;
  node26.val(""+ref45.get());
  var ignore10 = false;
  subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
    if(ignore10) return;
    node26.val(""+val);
  }));
  subs__.addSub(ref45.rebind());
  
  subs__.addSub(mobl.domBind(node26, 'keyup change', function() {
    ignore10 = true;
    s.set(mobl.stringTomobl__String(node26.val()));
    ignore10 = false;
  }));
  
  
  var val26 = onsearch.get();
  if(val26 !== null) {
    subs__.addSub(mobl.domBind(node26, 'change', val26));
  }
  
  var val27 = onkeyup.get();
  if(val27 !== null) {
    subs__.addSub(mobl.domBind(node26, 'keyup', val27));
  }
  node26.attr('autocorrect', false);
  node26.attr('autocapitalize', false);
  node26.attr('autocomplete', false);
  
  node25.append(node26);
  root38.append(node25);
  callback(root38); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root39 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref47 = mobl.ref(ui.contextMenuStyle);
  if(ref47.get() !== null) {
    menu.attr('class', ref47.get());
    subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref47.rebind());
  
  var nodes21 = $("<span>");
  menu.append(nodes21);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root40 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root40); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes21;
      nodes21 = node.contents();
      oldNodes.replaceWith(nodes21);
    }));
  }
  renderControl5();
  root39.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val28 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp47 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val28 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val28));
  }
  
  root39.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root39); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root41 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp31 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp31.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node27 = $("<span>");
  root41.append(node27);
  var condSubs6 = new mobl.CompSubscription();
  subs__.addSub(condSubs6);
  var oldValue6;
  var renderCond6 = function() {
    var value46 = tmp31.get();
    if(oldValue6 === value46) return;
    oldValue6 = value46;
    var subs__ = condSubs6;
    subs__.unsubscribe();
    node27.empty();
    if(value46) {
      items.get().one(function(result__) {
        var tmp48 = result__;
        var current = mobl.ref(result__);
        
        var node28 = $("<div>");
        node28.attr('width', "100%");
        
        
        var node29 = $("<div>");
        node29.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes24 = $("<span>");
        node29.append(nodes24);
        subs__.addSub((ui.group)(function(_, callback) {
          var root44 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node32 = mobl.loadingSpan();
          root44.append(node32);
          var list3;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3 = function() {
            var subs__ = listSubs__;
            list3 = items.get();
            list3.list(function(results3) {
              node32.empty();
              for(var i39 = 0; i39 < results3.length; i39++) {
                (function() {
                  var iternode3 = $("<span>");
                  node32.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i39);
                  var result__ = it.get() == current.get();
                  var tmp8 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8.set(it.get() == current.get());
                  }));
                  
                  
                  var node33 = $("<span>");
                  iternode3.append(node33);
                  var condSubs8 = new mobl.CompSubscription();
                  subs__.addSub(condSubs8);
                  var oldValue8;
                  var renderCond8 = function() {
                    var value48 = tmp8.get();
                    if(oldValue8 === value48) return;
                    oldValue8 = value48;
                    var subs__ = condSubs8;
                    subs__.unsubscribe();
                    node33.empty();
                    if(value48) {
                      var nodes25 = $("<span>");
                      node33.append(nodes25);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root45 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes26 = $("<span>");
                        root45.append(nodes26);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl7();
                        }));
                        
                        function renderControl7() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root46 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root46); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes26;
                            nodes26 = node.contents();
                            oldNodes.replaceWith(nodes26);
                          }));
                        }
                        renderControl7();
                        callback(root45); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes25;
                        nodes25 = node.contents();
                        oldNodes.replaceWith(nodes25);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7 = mobl.ref(result__);
                      
                      var nodes27 = $("<span>");
                      node33.append(nodes27);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root47 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes28 = $("<span>");
                        root47.append(nodes28);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl8();
                        }));
                        
                        function renderControl8() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root48 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root48); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes28;
                            nodes28 = node.contents();
                            oldNodes.replaceWith(nodes28);
                          }));
                        }
                        renderControl8();
                        callback(root47); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes27;
                        nodes27 = node.contents();
                        oldNodes.replaceWith(nodes27);
                      }));
                      
                      
                    }
                  };
                  renderCond8();
                  subs__.addSub(tmp8.addEventListener('change', function() {
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
          
          callback(root44); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes24;
          nodes24 = node.contents();
          oldNodes.replaceWith(nodes24);
        }));
        node28.append(node29);
        
        var node30 = $("<div>");
        node30.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node31 = $("<span>");
        node30.append(node31);
        var condSubs7 = new mobl.CompSubscription();
        subs__.addSub(condSubs7);
        var oldValue7;
        var renderCond7 = function() {
          var value47 = current.get();
          if(oldValue7 === value47) return;
          oldValue7 = value47;
          var subs__ = condSubs7;
          subs__.unsubscribe();
          node31.empty();
          if(value47) {
            var nodes22 = $("<span>");
            node31.append(nodes22);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl6();
            }));
            
            function renderControl6() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root42 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root42); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes22;
                nodes22 = node.contents();
                oldNodes.replaceWith(nodes22);
              }));
            }
            renderControl6();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp9 = mobl.ref(result__);
            
            var nodes23 = $("<span>");
            node31.append(nodes23);
            subs__.addSub((mobl.label)(tmp9, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root43 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root43); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes23;
              nodes23 = node.contents();
              oldNodes.replaceWith(nodes23);
            }));
            
            
          }
        };
        renderCond7();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond7();
        }));
        
        node28.append(node30);
        node27.append(node28);
        
        
        
        
        
        
      });
    } else {
      var nodes29 = $("<span>");
      node27.append(nodes29);
      subs__.addSub((ui.group)(function(_, callback) {
        var root49 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node34 = mobl.loadingSpan();
        root49.append(node34);
        var list4;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList4 = function() {
          var subs__ = listSubs__;
          list4 = items.get();
          list4.list(function(results4) {
            node34.empty();
            for(var i40 = 0; i40 < results4.length; i40++) {
              (function() {
                var iternode4 = $("<span>");
                node34.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i40);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp49 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp3 = mobl.ref(result__);
                
                var nodes30 = $("<span>");
                iternode4.append(nodes30);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root50 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes31 = $("<span>");
                  root50.append(nodes31);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl9();
                  }));
                  
                  function renderControl9() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root51 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root51); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes31;
                      nodes31 = node.contents();
                      oldNodes.replaceWith(nodes31);
                    }));
                  }
                  renderControl9();
                  callback(root50); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes30;
                  nodes30 = node.contents();
                  oldNodes.replaceWith(nodes30);
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
        
        callback(root49); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes29;
        nodes29 = node.contents();
        oldNodes.replaceWith(nodes29);
      }));
      
      
    }
  };
  renderCond6();
  subs__.addSub(tmp31.addEventListener('change', function() {
    renderCond6();
  }));
  
  callback(root41); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root52 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp6 = mobl.ref(result__);
  
  var nodes32 = $("<span>");
  root52.append(nodes32);
  subs__.addSub((ui.header)(tmp6, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root53 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4 = mobl.ref(result__);
    
    var nodes33 = $("<span>");
    root53.append(nodes33);
    subs__.addSub((ui.backButton)(tmp4, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5, function(_, callback) {
      var root54 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root54); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes33;
      nodes33 = node.contents();
      oldNodes.replaceWith(nodes33);
    }));
    callback(root53); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes32;
    nodes32 = node.contents();
    oldNodes.replaceWith(nodes32);
  }));
  var nodes34 = $("<span>");
  root52.append(nodes34);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl10();
  }));
  
  function renderControl10() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root55 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root55); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes34;
      nodes34 = node.contents();
      oldNodes.replaceWith(nodes34);
    }));
  }
  renderControl10();
  callback(root52); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root56 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes35 = $("<span>");
  root56.append(nodes35);
  subs__.addSub((ui.group)(function(_, callback) {
    var root57 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node35 = mobl.loadingSpan();
    root57.append(node35);
    var list5;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList5 = function() {
      var subs__ = listSubs__;
      list5 = coll.get();
      list5.list(function(results5) {
        node35.empty();
        for(var i41 = 0; i41 < results5.length; i41++) {
          (function() {
            var iternode5 = $("<span>");
            node35.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i41);
            var result__ = it.get() == selected.get();
            var tmp12 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp12.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp12.set(it.get() == selected.get());
            }));
            
            
            var node36 = $("<span>");
            iternode5.append(node36);
            var condSubs9 = new mobl.CompSubscription();
            subs__.addSub(condSubs9);
            var oldValue9;
            var renderCond9 = function() {
              var value49 = tmp12.get();
              if(oldValue9 === value49) return;
              oldValue9 = value49;
              var subs__ = condSubs9;
              subs__.unsubscribe();
              node36.empty();
              if(value49) {
                var nodes36 = $("<span>");
                node36.append(nodes36);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root58 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes37 = $("<span>");
                  root58.append(nodes37);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl11();
                  }));
                  
                  function renderControl11() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root59 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root59); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes37;
                      nodes37 = node.contents();
                      oldNodes.replaceWith(nodes37);
                    }));
                  }
                  renderControl11();
                  callback(root58); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes36;
                  nodes36 = node.contents();
                  oldNodes.replaceWith(nodes36);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp11 = mobl.ref(result__);
                
                var nodes38 = $("<span>");
                node36.append(nodes38);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root60 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes39 = $("<span>");
                  root60.append(nodes39);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl12();
                  }));
                  
                  function renderControl12() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root61 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root61); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes39;
                      nodes39 = node.contents();
                      oldNodes.replaceWith(nodes39);
                    }));
                  }
                  renderControl12();
                  callback(root60); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes38;
                  nodes38 = node.contents();
                  oldNodes.replaceWith(nodes38);
                }));
                
                
              }
            };
            renderCond9();
            subs__.addSub(tmp12.addEventListener('change', function() {
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
    
    callback(root57); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes35;
    nodes35 = node.contents();
    oldNodes.replaceWith(nodes35);
  }));
  callback(root56); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root62 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp51 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp13 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp13.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp13.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp13.set(coll.get().limit(n.get()));
    }));
    
    
    var node37 = mobl.loadingSpan();
    root62.append(node37);
    var list6;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList6 = function() {
      var subs__ = listSubs__;
      list6 = tmp13.get();
      list6.list(function(results6) {
        node37.empty();
        for(var i42 = 0; i42 < results6.length; i42++) {
          (function() {
            var iternode6 = $("<span>");
            node37.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i42);
            var nodes40 = $("<span>");
            iternode6.append(nodes40);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl13();
            }));
            
            function renderControl13() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root63 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root63); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes40;
                nodes40 = node.contents();
                oldNodes.replaceWith(nodes40);
              }));
            }
            renderControl13();
            
            var oldNodes = iternode6;
            iternode6 = iternode6.contents();
            oldNodes.replaceWith(iternode6);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list6.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
        subs__.addSub(tmp13.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    var result__ = n.get() < total.get();
    var tmp15 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp15.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp15.set(n.get() < total.get());
    }));
    
    
    var node38 = $("<span>");
    root62.append(node38);
    var condSubs10 = new mobl.CompSubscription();
    subs__.addSub(condSubs10);
    var oldValue10;
    var renderCond10 = function() {
      var value50 = tmp15.get();
      if(oldValue10 === value50) return;
      oldValue10 = value50;
      var subs__ = condSubs10;
      subs__.unsubscribe();
      node38.empty();
      if(value50) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp14 = mobl.ref(result__);
        
        var nodes41 = $("<span>");
        node38.append(nodes41);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp14, mobl.ref(null), function(_, callback) {
          var root64 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes42 = $("<span>");
          root64.append(nodes42);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root65 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root65); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes42;
            nodes42 = node.contents();
            oldNodes.replaceWith(nodes42);
          }));
          callback(root64); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes41;
          nodes41 = node.contents();
          oldNodes.replaceWith(nodes41);
        }));
        
        
      } else {
        
      }
    };
    renderCond10();
    subs__.addSub(tmp15.addEventListener('change', function() {
      renderCond10();
    }));
    
    callback(root62); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root66 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes43 = $("<span>");
  root66.append(nodes43);
  subs__.addSub((ui.group)(function(_, callback) {
    var root67 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node39 = mobl.loadingSpan();
    root67.append(node39);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = items.get();
      list7.list(function(results7) {
        node39.empty();
        for(var i43 = 0; i43 < results7.length; i43++) {
          (function() {
            var iternode7 = $("<span>");
            node39.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i43), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i43), "_2");
            var nodes44 = $("<span>");
            iternode7.append(nodes44);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root68 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes45 = $("<span>");
              root68.append(nodes45);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root69 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root69); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes45;
                nodes45 = node.contents();
                oldNodes.replaceWith(nodes45);
              }));
              callback(root68); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes44;
              nodes44 = node.contents();
              oldNodes.replaceWith(nodes44);
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
    
    callback(root67); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes43;
    nodes43 = node.contents();
    oldNodes.replaceWith(nodes43);
  }));
  callback(root66); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root70 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll61) {
    coll61 = coll61.reverse();
    function processOne1() {
      var it;
      it = coll61.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll61.length > 0) processOne1(); else rest1();
      
    }
    function rest1() {
      var nodes46 = $("<span>");
      root70.append(nodes46);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root71 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp17 = mobl.ref(result__);
        
        var nodes47 = $("<span>");
        root71.append(nodes47);
        subs__.addSub((ui.backButton)(tmp17, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16, function(_, callback) {
          var root72 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root72); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes47;
          nodes47 = node.contents();
          oldNodes.replaceWith(nodes47);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll60) {
                           coll60 = coll60.reverse();
                           function processOne0() {
                             var checked;var it;
                             var tmp53 = coll60.pop();
                             checked = tmp53._1;it = tmp53._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll60.length > 0) processOne0(); else rest0();
                               
                             } else {
                               {
                                 
                                 if(coll60.length > 0) processOne0(); else rest0();
                                 
                               }
                             }
                           }
                           function rest0() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll60.length > 0) processOne0(); else rest0();
                         });
                         
                       };
        var tmp18 = mobl.ref(result__);
        
        var nodes48 = $("<span>");
        root71.append(nodes48);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp18, function(_, callback) {
          var root73 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root73); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes48;
          nodes48 = node.contents();
          oldNodes.replaceWith(nodes48);
        }));
        callback(root71); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes46;
        nodes46 = node.contents();
        oldNodes.replaceWith(nodes46);
      }));
      var nodes49 = $("<span>");
      root70.append(nodes49);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root74 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root74); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes49;
        nodes49 = node.contents();
        oldNodes.replaceWith(nodes49);
      }));
      callback(root70); return subs__;
      
      
    }
    if(coll61.length > 0) processOne1(); else rest1();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root75 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes50 = $("<span>");
  root75.append(nodes50);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root76 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root76); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes50;
    nodes50 = node.contents();
    oldNodes.replaceWith(nodes50);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp19 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes51 = $("<span>");
  root75.append(nodes51);
  subs__.addSub((ui.masterDetail)(tmp19, masterItem, detailItem, function(_, callback) {
    var root77 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root77); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes51;
    nodes51 = node.contents();
    oldNodes.replaceWith(nodes51);
  }));
  callback(root75); return subs__;
  
  
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
  var root78 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes52 = $("<span>");
  root78.append(nodes52);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root79 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node40 = mobl.loadingSpan();
    root79.append(node40);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = sections.get();
      list8.list(function(results8) {
        node40.empty();
        for(var i44 = 0; i44 < results8.length; i44++) {
          (function() {
            var iternode8 = $("<span>");
            node40.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i44), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i44), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp22 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp22.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp22.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp22.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp22.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp21 = mobl.ref(result__);
            
            var nodes53 = $("<span>");
            iternode8.append(nodes53);
            subs__.addSub((mobl.span)(tmp22, mobl.ref(null), tmp21, mobl.ref(null), function(_, callback) {
              var root80 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes54 = $("<span>");
              root80.append(nodes54);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root81 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root81); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes54;
                nodes54 = node.contents();
                oldNodes.replaceWith(nodes54);
              }));
              callback(root80); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes53;
              nodes53 = node.contents();
              oldNodes.replaceWith(nodes53);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp23 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp23.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp23.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp23.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp23.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes55 = $("<span>");
            iternode8.append(nodes55);
            subs__.addSub((mobl.block)(tmp23, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root82 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes56 = $("<span>");
              root82.append(nodes56);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl14();
              }));
              
              function renderControl14() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root83 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root83); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes56;
                  nodes56 = node.contents();
                  oldNodes.replaceWith(nodes56);
                }));
              }
              renderControl14();
              callback(root82); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes55;
              nodes55 = node.contents();
              oldNodes.replaceWith(nodes55);
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
    
    callback(root79); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes52;
    nodes52 = node.contents();
    oldNodes.replaceWith(nodes52);
  }));
  callback(root78); return subs__;
  
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
  var root84 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node41 = $("<table>");
  
  var ref48 = style;
  if(ref48.get() !== null) {
    node41.attr('class', ref48.get());
    subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
      node41.attr('class', val);
    }));
    
  }
  subs__.addSub(ref48.rebind());
  
  var nodes57 = $("<span>");
  node41.append(nodes57);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl15();
  }));
  
  function renderControl15() {
    subs__.addSub((elements)(function(elements, callback) {
      var root85 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root85); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes57;
      nodes57 = node.contents();
      oldNodes.replaceWith(nodes57);
    }));
  }
  renderControl15();
  root84.append(node41);
  callback(root84); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root86 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node42 = $("<tr>");
  
  var ref49 = style;
  if(ref49.get() !== null) {
    node42.attr('class', ref49.get());
    subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
      node42.attr('class', val);
    }));
    
  }
  subs__.addSub(ref49.rebind());
  
  var nodes58 = $("<span>");
  node42.append(nodes58);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl16();
  }));
  
  function renderControl16() {
    subs__.addSub((elements)(function(elements, callback) {
      var root87 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root87); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes58;
      nodes58 = node.contents();
      oldNodes.replaceWith(nodes58);
    }));
  }
  renderControl16();
  root86.append(node42);
  callback(root86); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root88 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node43 = $("<td>");
  
  var ref50 = width;
  if(ref50.get() !== null) {
    node43.attr('width', ref50.get());
    subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
      node43.attr('width', val);
    }));
    
  }
  subs__.addSub(ref50.rebind());
  
  var ref51 = style;
  if(ref51.get() !== null) {
    node43.attr('class', ref51.get());
    subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
      node43.attr('class', val);
    }));
    
  }
  subs__.addSub(ref51.rebind());
  
  var nodes59 = $("<span>");
  node43.append(nodes59);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl17();
  }));
  
  function renderControl17() {
    subs__.addSub((elements)(function(elements, callback) {
      var root89 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root89); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes59;
      nodes59 = node.contents();
      oldNodes.replaceWith(nodes59);
    }));
  }
  renderControl17();
  root88.append(node43);
  callback(root88); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root90 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node44 = $("<td>");
  
  var ref52 = width;
  if(ref52.get() !== null) {
    node44.attr('width', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      node44.attr('width', val);
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var ref53 = style;
  if(ref53.get() !== null) {
    node44.attr('class', ref53.get());
    subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
      node44.attr('class', val);
    }));
    
  }
  subs__.addSub(ref53.rebind());
  
  var nodes60 = $("<span>");
  node44.append(nodes60);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl18();
  }));
  
  function renderControl18() {
    subs__.addSub((elements)(function(elements, callback) {
      var root91 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root91); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes60;
      nodes60 = node.contents();
      oldNodes.replaceWith(nodes60);
    }));
  }
  renderControl18();
  root90.append(node44);
  callback(root90); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root92 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node45 = $("<td>");
  
  var ref54 = width;
  if(ref54.get() !== null) {
    node45.attr('width', ref54.get());
    subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
      node45.attr('width', val);
    }));
    
  }
  subs__.addSub(ref54.rebind());
  
  var ref55 = style;
  if(ref55.get() !== null) {
    node45.attr('class', ref55.get());
    subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
      node45.attr('class', val);
    }));
    
  }
  subs__.addSub(ref55.rebind());
  
  
  var node46 = $("<strong>");
  
  var nodes61 = $("<span>");
  node46.append(nodes61);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root93 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root93); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes61;
      nodes61 = node.contents();
      oldNodes.replaceWith(nodes61);
    }));
  }
  renderControl19();
  node45.append(node46);
  root92.append(node45);
  callback(root92); return subs__;
  
  
  
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
  items.list(function(coll62) {
    coll62 = coll62.reverse();
    function processOne2() {
      var item;
      item = coll62.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll62.length > 0) processOne2(); else rest2();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll62.length > 0) processOne2(); else rest2();
          
        }
      }
    }
    function rest2() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll62.length > 0) processOne2(); else rest2();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root94 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes62 = $("<span>");
  root94.append(nodes62);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root95 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root95); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes62;
      nodes62 = node.contents();
      oldNodes.replaceWith(nodes62);
    }));
  }
  renderControl20();
  callback(root94); return subs__;
  
  return subs__;
};

ui.mMasterDetail = mobl.conditionalDef(ui.mMasterDetail, function() { return mobl.window.get().innerWidth > 500; }, function(items, masterItem, detail, elements, callback) {
  var root96 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var current = mobl.ref(null);
  
  var node47 = $("<div>");
  node47.attr('width', "100%");
  
  
  var node48 = $("<div>");
  node48.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
  
  var nodes64 = $("<span>");
  node48.append(nodes64);
  subs__.addSub((ui.group)(function(_, callback) {
    var root98 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node51 = mobl.loadingSpan();
    root98.append(node51);
    var list9;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList9 = function() {
      var subs__ = listSubs__;
      list9 = items.get();
      list9.list(function(results9) {
        node51.empty();
        for(var i45 = 0; i45 < results9.length; i45++) {
          (function() {
            var iternode9 = $("<span>");
            node51.append(iternode9);
            var it;
            it = mobl.ref(mobl.ref(results9), i45);
            var result__ = it.get() == current.get();
            var tmp27 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp27.set(it.get() == current.get());
            }));
            subs__.addSub(current.addEventListener('change', function() {
              tmp27.set(it.get() == current.get());
            }));
            
            
            var node52 = $("<span>");
            iternode9.append(node52);
            var condSubs12 = new mobl.CompSubscription();
            subs__.addSub(condSubs12);
            var oldValue12;
            var renderCond12 = function() {
              var value52 = tmp27.get();
              if(oldValue12 === value52) return;
              oldValue12 = value52;
              var subs__ = condSubs12;
              subs__.unsubscribe();
              node52.empty();
              if(value52) {
                var nodes65 = $("<span>");
                node52.append(nodes65);
                subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root99 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp61 = result__;
                    var tmp24 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp58 = result__;
                        var result__ = tmp58;
                        tmp24.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp59 = result__;
                        var result__ = tmp59;
                        tmp24.set(result__);
                        
                      });
                    }));
                    
                    var nodes66 = $("<span>");
                    root99.append(nodes66);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl22();
                    }));
                    
                    function renderControl22() {
                      subs__.addSub((masterItem.get())(it, tmp24, function(elements, callback) {
                        var root100 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root100); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes66;
                        nodes66 = node.contents();
                        oldNodes.replaceWith(nodes66);
                      }));
                    }
                    renderControl22();
                    callback(root99); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes65;
                  nodes65 = node.contents();
                  oldNodes.replaceWith(nodes65);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 current.set(result__);
                                 var result__ = true;
                                 ui.visible.set(result__);
                                 mathJAX.renderMaths(function(result__) {
                                   var tmp65 = result__;
                                   var result__ = plot.renderPlot("corePlotArea", current.get());
                                   if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp26 = mobl.ref(result__);
                
                var nodes67 = $("<span>");
                node52.append(nodes67);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp26, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root101 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp64 = result__;
                    var tmp25 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp62 = result__;
                        var result__ = tmp62;
                        tmp25.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp63 = result__;
                        var result__ = tmp63;
                        tmp25.set(result__);
                        
                      });
                    }));
                    
                    var nodes68 = $("<span>");
                    root101.append(nodes68);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl23();
                    }));
                    
                    function renderControl23() {
                      subs__.addSub((masterItem.get())(it, tmp25, function(elements, callback) {
                        var root102 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root102); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes68;
                        nodes68 = node.contents();
                        oldNodes.replaceWith(nodes68);
                      }));
                    }
                    renderControl23();
                    callback(root101); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes67;
                  nodes67 = node.contents();
                  oldNodes.replaceWith(nodes67);
                }));
                
                
              }
            };
            renderCond12();
            subs__.addSub(tmp27.addEventListener('change', function() {
              renderCond12();
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
    
    callback(root98); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes64;
    nodes64 = node.contents();
    oldNodes.replaceWith(nodes64);
  }));
  node47.append(node48);
  
  var node49 = $("<div>");
  node49.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
  
  var result__ = current.get() && ui.visible.get();
  var tmp29 = mobl.ref(result__);
  subs__.addSub(current.addEventListener('change', function() {
    tmp29.set(current.get() && ui.visible.get());
  }));
  subs__.addSub(ui.visible.addEventListener('change', function() {
    tmp29.set(current.get() && ui.visible.get());
  }));
  
  
  var node50 = $("<span>");
  node49.append(node50);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value51 = tmp29.get();
    if(oldValue11 === value51) return;
    oldValue11 = value51;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node50.empty();
    if(value51) {
      ui.indexOf(current.get(), items.get(), function(result__) {
        var tmp57 = result__;
        var tmp28 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp55 = result__;
            var result__ = tmp55;
            tmp28.set(result__);
            
          });
        }));
        subs__.addSub(items.addEventListener('change', function() {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp56 = result__;
            var result__ = tmp56;
            tmp28.set(result__);
            
          });
        }));
        
        var nodes63 = $("<span>");
        node50.append(nodes63);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl21();
        }));
        
        function renderControl21() {
          subs__.addSub((detail.get())(current, tmp28, function(elements, callback) {
            var root97 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root97); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes63;
            nodes63 = node.contents();
            oldNodes.replaceWith(nodes63);
          }));
        }
        renderControl21();
        
        
      });
    } else {
      
    }
  };
  renderCond11();
  subs__.addSub(tmp29.addEventListener('change', function() {
    renderCond11();
  }));
  
  node47.append(node49);
  root96.append(node47);
  callback(root96); return subs__;
  
  
  
  
  
  return subs__;
});

ui.introduction = function(elements, callback) {
  var root103 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes69 = $("<span>");
  root103.append(nodes69);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root104 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes70 = $("<span>");
    root104.append(nodes70);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root105 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root105); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes70;
      nodes70 = node.contents();
      oldNodes.replaceWith(nodes70);
    }));
    callback(root104); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes69;
    nodes69 = node.contents();
    oldNodes.replaceWith(nodes69);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes71 = $("<span>");
  root103.append(nodes71);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root106 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root106); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes71;
    nodes71 = node.contents();
    oldNodes.replaceWith(nodes71);
  }));
  callback(root103); return subs__;
  
  
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
