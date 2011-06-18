mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root4967 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1572 = $("<span>");
  root4967.append(node1572);
  var condSubs388 = new mobl.CompSubscription();
  subs__.addSub(condSubs388);
  var oldValue388;
  var renderCond388 = function() {
    var value1980 = value.get();
    if(oldValue388 === value1980) return;
    oldValue388 = value1980;
    var subs__ = condSubs388;
    subs__.unsubscribe();
    node1572.empty();
    if(value1980) {
      var nodes3912 = $("<span>");
      node1572.append(nodes3912);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl612();
      }));
      
      function renderControl612() {
        subs__.addSub((elements)(function(elements, callback) {
          var root4968 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4968); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3912;
          nodes3912 = node.contents();
          oldNodes.replaceWith(nodes3912);
        }));
      }
      renderControl612();
      
      
    } else {
      var nodes3913 = $("<span>");
      node1572.append(nodes3913);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4969 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes3914 = $("<span>");
        root4969.append(nodes3914);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root4970 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4970); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3914;
          nodes3914 = node.contents();
          oldNodes.replaceWith(nodes3914);
        }));
        var nodes3915 = $("<span>");
        root4969.append(nodes3915);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root4971 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4971); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3915;
          nodes3915 = node.contents();
          oldNodes.replaceWith(nodes3915);
        }));
        callback(root4969); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3913;
        nodes3913 = node.contents();
        oldNodes.replaceWith(nodes3913);
      }));
      
      
    }
  };
  renderCond388();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond388();
  }));
  
  callback(root4967); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root4972 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1573 = $("<div>");
  
  var ref1517 = mobl.ref(ui.headerStyle);
  if(ref1517.get() !== null) {
    node1573.attr('class', ref1517.get());
    subs__.addSub(ref1517.addEventListener('change', function(_, ref, val) {
      node1573.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1517.rebind());
  
  var val766 = onclick.get();
  if(val766 !== null) {
    subs__.addSub(mobl.domBind(node1573, 'tap', val766));
  }
  
  var ref1518 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1518.get() !== null) {
    node1573.attr('style', ref1518.get());
    subs__.addSub(ref1518.addEventListener('change', function(_, ref, val) {
      node1573.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1573.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1518.rebind());
  
  
  var node1576 = $("<div>");
  
  var ref1516 = mobl.ref(ui.headerContainerStyle);
  if(ref1516.get() !== null) {
    node1576.attr('class', ref1516.get());
    subs__.addSub(ref1516.addEventListener('change', function(_, ref, val) {
      node1576.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1516.rebind());
  
  
  var node1577 = $("<div>");
  
  var ref1514 = text;
  node1577.text(""+ref1514.get());
  var ignore298 = false;
  subs__.addSub(ref1514.addEventListener('change', function(_, ref, val) {
    if(ignore298) return;
    node1577.text(""+val);
  }));
  subs__.addSub(ref1514.rebind());
  
  
  var ref1515 = mobl.ref(ui.headerTextStyle);
  if(ref1515.get() !== null) {
    node1577.attr('class', ref1515.get());
    subs__.addSub(ref1515.addEventListener('change', function(_, ref, val) {
      node1577.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1515.rebind());
  
  node1576.append(node1577);
  node1573.append(node1576);
  var nodes3916 = $("<span>");
  node1573.append(nodes3916);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl613();
  }));
  
  function renderControl613() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4973); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3916;
      nodes3916 = node.contents();
      oldNodes.replaceWith(nodes3916);
    }));
  }
  renderControl613();
  root4972.append(node1573);
  
  var node1574 = $("<span>");
  root4972.append(node1574);
  var condSubs389 = new mobl.CompSubscription();
  subs__.addSub(condSubs389);
  var oldValue389;
  var renderCond389 = function() {
    var value1981 = fixedPosition.get();
    if(oldValue389 === value1981) return;
    oldValue389 = value1981;
    var subs__ = condSubs389;
    subs__.unsubscribe();
    node1574.empty();
    if(value1981) {
      
      var node1575 = $("<div>");
      node1575.attr('id', "hello");
      node1575.attr('style', "height: 2.9em;");
      
      node1574.append(node1575);
      
      
    } else {
      
    }
  };
  renderCond389();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond389();
  }));
  
  callback(root4972); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4974 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1519 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1519.get() !== null) {
    sp.attr('class', ref1519.get());
    subs__.addSub(ref1519.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1519.rebind());
  
  var val767 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val767 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val767));
  }
  
  var val768 = function(event, callback) {
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
  if(val768 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val768));
  }
  
  var val769 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after234(result__) {
                    var tmp3679 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after234);if(result__ !== undefined) after234(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val769 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val769));
  }
  
  var val770 = function(event, callback) {
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
  if(val770 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val770));
  }
  
  var ref1520 = text;
  sp.text(""+ref1520.get());
  var ignore299 = false;
  subs__.addSub(ref1520.addEventListener('change', function(_, ref, val) {
    if(ignore299) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1520.rebind());
  
  
  root4974.append(sp);
  callback(root4974); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4975 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3917 = $("<span>");
  root4975.append(nodes3917);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4976 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4976); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3917;
    nodes3917 = node.contents();
    oldNodes.replaceWith(nodes3917);
  }));
  callback(root4975); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4977 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3918 = $("<span>");
  root4977.append(nodes3918);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4978 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4978); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3918;
    nodes3918 = node.contents();
    oldNodes.replaceWith(nodes3918);
  }));
  callback(root4977); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root4979 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1578 = $("<ul>");
  
  var ref1521 = mobl.ref(ui.groupStyle);
  if(ref1521.get() !== null) {
    node1578.attr('class', ref1521.get());
    subs__.addSub(ref1521.addEventListener('change', function(_, ref, val) {
      node1578.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1521.rebind());
  
  var nodes3919 = $("<span>");
  node1578.append(nodes3919);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl614();
  }));
  
  function renderControl614() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4980); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3919;
      nodes3919 = node.contents();
      oldNodes.replaceWith(nodes3919);
    }));
  }
  renderControl614();
  root4979.append(node1578);
  callback(root4979); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root4981 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1579 = $("<img>");
  
  var ref1522 = url;
  if(ref1522.get() !== null) {
    node1579.attr('src', ref1522.get());
    subs__.addSub(ref1522.addEventListener('change', function(_, ref, val) {
      node1579.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1522.rebind());
  
  var ref1523 = width;
  if(ref1523.get() !== null) {
    node1579.attr('width', ref1523.get());
    subs__.addSub(ref1523.addEventListener('change', function(_, ref, val) {
      node1579.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1523.rebind());
  
  var ref1524 = height;
  if(ref1524.get() !== null) {
    node1579.attr('height', ref1524.get());
    subs__.addSub(ref1524.addEventListener('change', function(_, ref, val) {
      node1579.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1524.rebind());
  
  var ref1525 = style;
  if(ref1525.get() !== null) {
    node1579.attr('class', ref1525.get());
    subs__.addSub(ref1525.addEventListener('change', function(_, ref, val) {
      node1579.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1525.rebind());
  
  var val771 = onclick.get();
  if(val771 !== null) {
    subs__.addSub(mobl.domBind(node1579, 'tap', val771));
  }
  
  var ref1526 = valign;
  if(ref1526.get() !== null) {
    node1579.attr('valign', ref1526.get());
    subs__.addSub(ref1526.addEventListener('change', function(_, ref, val) {
      node1579.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1526.rebind());
  
  var ref1527 = align;
  if(ref1527.get() !== null) {
    node1579.attr('align', ref1527.get());
    subs__.addSub(ref1527.addEventListener('change', function(_, ref, val) {
      node1579.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1527.rebind());
  
  root4981.append(node1579);
  callback(root4981); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root4982 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1528 = mobl.ref(ui.itemStyle);
  if(ref1528.get() !== null) {
    el.attr('class', ref1528.get());
    subs__.addSub(ref1528.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1528.rebind());
  
  var ref1529 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1529.get() !== null) {
    el.attr('class', ref1529.get());
    subs__.addSub(ref1529.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1529.rebind());
  
  var val772 = onswipe.get();
  if(val772 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val772));
  }
  
  var val773 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp3680 = result__;
                                           function after235(result__) {
                                             var tmp3681 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after235);if(result__ !== undefined) after235(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp3682 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val773 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val773));
  }
  
  var nodes3920 = $("<span>");
  el.append(nodes3920);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl615();
  }));
  
  function renderControl615() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4983); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3920;
      nodes3920 = node.contents();
      oldNodes.replaceWith(nodes3920);
    }));
  }
  renderControl615();
  root4982.append(el);
  callback(root4982); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root4984 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1580 = $("<input>");
  node1580.attr('type', "checkbox");
  
  var ref1531 = b;
  node1580.attr('checked', !!ref1531.get());
  subs__.addSub(ref1531.addEventListener('change', function(_, ref, val) {
    if(ref === ref1531) node1580.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1580, 'change', function() {
    b.set(!!node1580.attr('checked'));
  }));
  
  var val775 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val775 !== null) {
    subs__.addSub(mobl.domBind(node1580, 'tap', val775));
  }
  
  var val776 = onchange.get();
  if(val776 !== null) {
    subs__.addSub(mobl.domBind(node1580, 'change', val776));
  }
  
  root4984.append(node1580);
  
  root4984.append(" ");
  
  var node1581 = $("<span>");
  
  var ref1530 = label;
  node1581.text(""+ref1530.get());
  var ignore300 = false;
  subs__.addSub(ref1530.addEventListener('change', function(_, ref, val) {
    if(ignore300) return;
    node1581.text(""+val);
  }));
  subs__.addSub(ref1530.rebind());
  
  
  var val774 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after236(result__) {
                    var tmp3683 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after236);if(result__ !== undefined) after236(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val774 !== null) {
    subs__.addSub(mobl.domBind(node1581, 'tap', val774));
  }
  
  root4984.append(node1581);
  callback(root4984); return subs__;
  
  
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
  var root4985 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1582 = $("<span>");
  root4985.append(node1582);
  var condSubs390 = new mobl.CompSubscription();
  subs__.addSub(condSubs390);
  var oldValue390;
  var renderCond390 = function() {
    var value1982 = label.get();
    if(oldValue390 === value1982) return;
    oldValue390 = value1982;
    var subs__ = condSubs390;
    subs__.unsubscribe();
    node1582.empty();
    if(value1982) {
      var nodes3921 = $("<span>");
      node1582.append(nodes3921);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root4986 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4986); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3921;
        nodes3921 = node.contents();
        oldNodes.replaceWith(nodes3921);
      }));
      
      
    } else {
      
    }
  };
  renderCond390();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond390();
  }));
  
  
  var node1583 = $("<span>");
  root4985.append(node1583);
  var condSubs391 = new mobl.CompSubscription();
  subs__.addSub(condSubs391);
  var oldValue391;
  var renderCond391 = function() {
    var value1983 = validator.get();
    if(oldValue391 === value1983) return;
    oldValue391 = value1983;
    var subs__ = condSubs391;
    subs__.unsubscribe();
    node1583.empty();
    if(value1983) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after240(result__) {
        var tmp3684 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp3685 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1584 = $("<input>");
        
        var ref1532 = inputType;
        if(ref1532.get() !== null) {
          node1584.attr('type', ref1532.get());
          subs__.addSub(ref1532.addEventListener('change', function(_, ref, val) {
            node1584.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1532.rebind());
        
        var ref1533 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1533.get() !== null) {
          node1584.attr('class', ref1533.get());
          subs__.addSub(ref1533.addEventListener('change', function(_, ref, val) {
            node1584.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1584.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1584.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1584.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1533.rebind());
        
        var ref1534 = placeholder;
        if(ref1534.get() !== null) {
          node1584.attr('placeholder', ref1534.get());
          subs__.addSub(ref1534.addEventListener('change', function(_, ref, val) {
            node1584.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1534.rebind());
        
        var ref1535 = temp;
        node1584.val(""+ref1535.get());
        var ignore301 = false;
        subs__.addSub(ref1535.addEventListener('change', function(_, ref, val) {
          if(ignore301) return;
          node1584.val(""+val);
        }));
        subs__.addSub(ref1535.rebind());
        
        subs__.addSub(mobl.domBind(node1584, 'keyup change', function() {
          ignore301 = true;
          temp.set(mobl.stringTomobl__String(node1584.val()));
          ignore301 = false;
        }));
        
        
        var val777 = onchange.get();
        if(val777 !== null) {
          subs__.addSub(mobl.domBind(node1584, 'change', val777));
        }
        
        var val778 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after237(result__) {
                          var tmp3686 = result__;
                          function after238(result__) {
                            var tmp3687 = result__;
                            var result__ = tmp3687;
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
                          var result__ = validator.get()(temp.get(), after238);if(result__ !== undefined) after238(result__);
                        }
                        var result__ = onkeyup.get()(event, after237);if(result__ !== undefined) after237(result__);
                      } else {
                        {
                          function after239(result__) {
                            var tmp3687 = result__;
                            var result__ = tmp3687;
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
                          var result__ = validator.get()(temp.get(), after239);if(result__ !== undefined) after239(result__);
                        }
                      }
                    };
        if(val778 !== null) {
          subs__.addSub(mobl.domBind(node1584, 'keyup', val778));
        }
        
        var val779 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val779 !== null) {
          subs__.addSub(mobl.domBind(node1584, 'blur', val779));
        }
        
        node1583.append(node1584);
        var nodes3922 = $("<span>");
        node1583.append(nodes3922);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root4987 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4987); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3922;
          nodes3922 = node.contents();
          oldNodes.replaceWith(nodes3922);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after240);if(result__ !== undefined) after240(result__);
    } else {
      
      var node1585 = $("<input>");
      
      var ref1536 = inputType;
      if(ref1536.get() !== null) {
        node1585.attr('type', ref1536.get());
        subs__.addSub(ref1536.addEventListener('change', function(_, ref, val) {
          node1585.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1536.rebind());
      
      var ref1537 = style;
      if(ref1537.get() !== null) {
        node1585.attr('class', ref1537.get());
        subs__.addSub(ref1537.addEventListener('change', function(_, ref, val) {
          node1585.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1537.rebind());
      
      var ref1538 = placeholder;
      if(ref1538.get() !== null) {
        node1585.attr('placeholder', ref1538.get());
        subs__.addSub(ref1538.addEventListener('change', function(_, ref, val) {
          node1585.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1538.rebind());
      
      var ref1539 = s;
      node1585.val(""+ref1539.get());
      var ignore302 = false;
      subs__.addSub(ref1539.addEventListener('change', function(_, ref, val) {
        if(ignore302) return;
        node1585.val(""+val);
      }));
      subs__.addSub(ref1539.rebind());
      
      subs__.addSub(mobl.domBind(node1585, 'keyup change', function() {
        ignore302 = true;
        s.set(mobl.stringTomobl__String(node1585.val()));
        ignore302 = false;
      }));
      
      
      var val780 = onchange.get();
      if(val780 !== null) {
        subs__.addSub(mobl.domBind(node1585, 'change', val780));
      }
      
      var val781 = onkeyup.get();
      if(val781 !== null) {
        subs__.addSub(mobl.domBind(node1585, 'keyup', val781));
      }
      
      var val782 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val782 !== null) {
        subs__.addSub(mobl.domBind(node1585, 'blur', val782));
      }
      
      node1583.append(node1585);
      
      
    }
  };
  renderCond391();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond391();
  }));
  
  callback(root4985); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4988 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3923 = $("<span>");
  root4988.append(nodes3923);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4989 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4989); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3923;
    nodes3923 = node.contents();
    oldNodes.replaceWith(nodes3923);
  }));
  callback(root4988); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4990 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3924 = $("<span>");
  root4990.append(nodes3924);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4991 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4991); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3924;
    nodes3924 = node.contents();
    oldNodes.replaceWith(nodes3924);
  }));
  callback(root4990); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root4992 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1586 = $("<span>");
  root4992.append(node1586);
  var condSubs392 = new mobl.CompSubscription();
  subs__.addSub(condSubs392);
  var oldValue392;
  var renderCond392 = function() {
    var value1984 = label.get();
    if(oldValue392 === value1984) return;
    oldValue392 = value1984;
    var subs__ = condSubs392;
    subs__.unsubscribe();
    node1586.empty();
    if(value1984) {
      var nodes3925 = $("<span>");
      node1586.append(nodes3925);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root4993 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4993); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3925;
        nodes3925 = node.contents();
        oldNodes.replaceWith(nodes3925);
      }));
      
      
    } else {
      
    }
  };
  renderCond392();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond392();
  }));
  
  
  var node1587 = $("<input>");
  node1587.attr('type', "range");
  
  var ref1540 = n;
  node1587.val(""+ref1540.get());
  var ignore303 = false;
  subs__.addSub(ref1540.addEventListener('change', function(_, ref, val) {
    if(ignore303) return;
    node1587.val(""+val);
  }));
  subs__.addSub(ref1540.rebind());
  
  subs__.addSub(mobl.domBind(node1587, 'keyup change', function() {
    ignore303 = true;
    n.set(mobl.stringTomobl__Num(node1587.val()));
    ignore303 = false;
  }));
  
  
  var ref1541 = min;
  if(ref1541.get() !== null) {
    node1587.attr('min', ref1541.get());
    subs__.addSub(ref1541.addEventListener('change', function(_, ref, val) {
      node1587.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1541.rebind());
  
  var ref1542 = max;
  if(ref1542.get() !== null) {
    node1587.attr('max', ref1542.get());
    subs__.addSub(ref1542.addEventListener('change', function(_, ref, val) {
      node1587.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1542.rebind());
  
  var ref1543 = step;
  if(ref1543.get() !== null) {
    node1587.attr('step', ref1543.get());
    subs__.addSub(ref1543.addEventListener('change', function(_, ref, val) {
      node1587.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1543.rebind());
  node1587.attr('style', "width: 99%;");
  
  var val783 = onchange.get();
  if(val783 !== null) {
    subs__.addSub(mobl.domBind(node1587, 'change', val783));
  }
  
  var val784 = onkeyup.get();
  if(val784 !== null) {
    subs__.addSub(mobl.domBind(node1587, 'keyup', val784));
  }
  
  var ref1544 = placeholder;
  if(ref1544.get() !== null) {
    node1587.attr('placeholder', ref1544.get());
    subs__.addSub(ref1544.addEventListener('change', function(_, ref, val) {
      node1587.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1544.rebind());
  
  root4992.append(node1587);
  callback(root4992); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4994 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after241(result__) {
      var tmp3688 = result__;
      var result__ = tmp3688;
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
    var result__ = validator.get()(n2, after241);if(result__ !== undefined) after241(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes3926 = $("<span>");
  root4994.append(nodes3926);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4995 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4995); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3926;
    nodes3926 = node.contents();
    oldNodes.replaceWith(nodes3926);
  }));
  callback(root4994); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root4996 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1588 = $("<span>");
  root4996.append(node1588);
  var condSubs393 = new mobl.CompSubscription();
  subs__.addSub(condSubs393);
  var oldValue393;
  var renderCond393 = function() {
    var value1985 = label.get();
    if(oldValue393 === value1985) return;
    oldValue393 = value1985;
    var subs__ = condSubs393;
    subs__.unsubscribe();
    node1588.empty();
    if(value1985) {
      
      var node1589 = $("<span>");
      node1589.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1548 = label;
      node1589.text(""+ref1548.get());
      var ignore305 = false;
      subs__.addSub(ref1548.addEventListener('change', function(_, ref, val) {
        if(ignore305) return;
        node1589.text(""+val);
      }));
      subs__.addSub(ref1548.rebind());
      
      
      node1588.append(node1589);
      
      var node1590 = $("<span>");
      node1590.attr('style', "float: left");
      
      
      var node1591 = $("<input>");
      node1591.attr('type', "password");
      
      var ref1545 = style;
      if(ref1545.get() !== null) {
        node1591.attr('class', ref1545.get());
        subs__.addSub(ref1545.addEventListener('change', function(_, ref, val) {
          node1591.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1545.rebind());
      
      var ref1546 = placeholder;
      if(ref1546.get() !== null) {
        node1591.attr('placeholder', ref1546.get());
        subs__.addSub(ref1546.addEventListener('change', function(_, ref, val) {
          node1591.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1546.rebind());
      
      var ref1547 = s;
      node1591.val(""+ref1547.get());
      var ignore304 = false;
      subs__.addSub(ref1547.addEventListener('change', function(_, ref, val) {
        if(ignore304) return;
        node1591.val(""+val);
      }));
      subs__.addSub(ref1547.rebind());
      
      subs__.addSub(mobl.domBind(node1591, 'keyup change', function() {
        ignore304 = true;
        s.set(mobl.stringTomobl__String(node1591.val()));
        ignore304 = false;
      }));
      
      
      var val785 = onchange.get();
      if(val785 !== null) {
        subs__.addSub(mobl.domBind(node1591, 'change', val785));
      }
      
      var val786 = onkeyup.get();
      if(val786 !== null) {
        subs__.addSub(mobl.domBind(node1591, 'keyup', val786));
      }
      
      var val787 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val787 !== null) {
        subs__.addSub(mobl.domBind(node1591, 'blur', val787));
      }
      
      node1590.append(node1591);
      node1588.append(node1590);
      
      
      
      
    } else {
      
      var node1592 = $("<input>");
      node1592.attr('type', "password");
      
      var ref1549 = style;
      if(ref1549.get() !== null) {
        node1592.attr('class', ref1549.get());
        subs__.addSub(ref1549.addEventListener('change', function(_, ref, val) {
          node1592.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1549.rebind());
      
      var ref1550 = placeholder;
      if(ref1550.get() !== null) {
        node1592.attr('placeholder', ref1550.get());
        subs__.addSub(ref1550.addEventListener('change', function(_, ref, val) {
          node1592.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1550.rebind());
      
      var ref1551 = s;
      node1592.val(""+ref1551.get());
      var ignore306 = false;
      subs__.addSub(ref1551.addEventListener('change', function(_, ref, val) {
        if(ignore306) return;
        node1592.val(""+val);
      }));
      subs__.addSub(ref1551.rebind());
      
      subs__.addSub(mobl.domBind(node1592, 'keyup change', function() {
        ignore306 = true;
        s.set(mobl.stringTomobl__String(node1592.val()));
        ignore306 = false;
      }));
      
      
      var val788 = onchange.get();
      if(val788 !== null) {
        subs__.addSub(mobl.domBind(node1592, 'change', val788));
      }
      
      var val789 = onkeyup.get();
      if(val789 !== null) {
        subs__.addSub(mobl.domBind(node1592, 'keyup', val789));
      }
      
      var val790 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val790 !== null) {
        subs__.addSub(mobl.domBind(node1592, 'blur', val790));
      }
      
      node1588.append(node1592);
      
      
    }
  };
  renderCond393();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond393();
  }));
  
  callback(root4996); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root4997 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1556 = style;
  if(ref1556.get() !== null) {
    sel.attr('class', ref1556.get());
    subs__.addSub(ref1556.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1556.rebind());
  
  var val791 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after242(result__) {
                    var tmp3690 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after242);if(result__ !== undefined) after242(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val791 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val791));
  }
  
  
  var node1593 = mobl.loadingSpan();
  sel.append(node1593);
  var list263;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList263 = function() {
    var subs__ = listSubs__;
    list263 = options.get();
    list263.list(function(results263) {
      node1593.empty();
      for(var i1109 = 0; i1109 < results263.length; i1109++) {
        (function() {
          var iternode263 = $("<span>");
          node1593.append(iternode263);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results263), i1109), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results263), i1109), "_2");
          
          var node1594 = $("<option>");
          
          var ref1552 = optionDescription;
          node1594.text(""+ref1552.get());
          var ignore307 = false;
          subs__.addSub(ref1552.addEventListener('change', function(_, ref, val) {
            if(ignore307) return;
            node1594.text(""+val);
          }));
          subs__.addSub(ref1552.rebind());
          
          
          var ref1553 = optionStyle;
          if(ref1553.get() !== null) {
            node1594.attr('class', ref1553.get());
            subs__.addSub(ref1553.addEventListener('change', function(_, ref, val) {
              node1594.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1553.rebind());
          
          var ref1554 = optionValue;
          if(ref1554.get() !== null) {
            node1594.attr('value', ref1554.get());
            subs__.addSub(ref1554.addEventListener('change', function(_, ref, val) {
              node1594.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1554.rebind());
          
          var ref1555 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1555.get() !== null) {
            node1594.attr('selected', ref1555.get());
            subs__.addSub(ref1555.addEventListener('change', function(_, ref, val) {
              node1594.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1594.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1594.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1555.rebind());
          
          iternode263.append(node1594);
          
          var oldNodes = iternode263;
          iternode263 = iternode263.contents();
          oldNodes.replaceWith(iternode263);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list263.addEventListener('change', function() { listSubs__.unsubscribe(); renderList263(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList263(true); }));
    });
  };
  renderList263();
  
  root4997.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root4997); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root4998 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes3927 = $("<span>");
    root4998.append(nodes3927);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4999 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1595 = mobl.loadingSpan();
      root4999.append(node1595);
      var list264;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList264 = function() {
        var subs__ = listSubs__;
        list264 = tabs.get();
        list264.list(function(results264) {
          node1595.empty();
          for(var i1110 = 0; i1110 < results264.length; i1110++) {
            (function() {
              var iternode264 = $("<span>");
              node1595.append(iternode264);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results264), i1110), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results264), i1110), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results264), i1110), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp3653 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp3653.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp3653.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp3653.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp3653.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp3652 = mobl.ref(result__);
              
              var nodes3928 = $("<span>");
              iternode264.append(nodes3928);
              subs__.addSub((mobl.span)(tmp3653, mobl.ref(null), tmp3652, mobl.ref(null), function(_, callback) {
                var root5000 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3929 = $("<span>");
                root5000.append(nodes3929);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root5001 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5001); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3929;
                  nodes3929 = node.contents();
                  oldNodes.replaceWith(nodes3929);
                }));
                callback(root5000); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3928;
                nodes3928 = node.contents();
                oldNodes.replaceWith(nodes3928);
              }));
              
              var oldNodes = iternode264;
              iternode264 = iternode264.contents();
              oldNodes.replaceWith(iternode264);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list264.addEventListener('change', function() { listSubs__.unsubscribe(); renderList264(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList264(true); }));
        });
      };
      renderList264();
      
      callback(root4999); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3927;
      nodes3927 = node.contents();
      oldNodes.replaceWith(nodes3927);
    }));
    
    var node1596 = mobl.loadingSpan();
    root4998.append(node1596);
    var list265;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList265 = function() {
      var subs__ = listSubs__;
      list265 = tabs.get();
      list265.list(function(results265) {
        node1596.empty();
        for(var i1111 = 0; i1111 < results265.length; i1111++) {
          (function() {
            var iternode265 = $("<span>");
            node1596.append(iternode265);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results265), i1111), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results265), i1111), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results265), i1111), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp3654 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp3654.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp3654.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp3654.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp3654.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes3930 = $("<span>");
            iternode265.append(nodes3930);
            subs__.addSub((mobl.block)(tmp3654, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5002 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3931 = $("<span>");
              root5002.append(nodes3931);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root5003 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3932 = $("<span>");
                root5003.append(nodes3932);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl616();
                }));
                
                function renderControl616() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root5004 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5004); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3932;
                    nodes3932 = node.contents();
                    oldNodes.replaceWith(nodes3932);
                  }));
                }
                renderControl616();
                callback(root5003); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3931;
                nodes3931 = node.contents();
                oldNodes.replaceWith(nodes3931);
              }));
              callback(root5002); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3930;
              nodes3930 = node.contents();
              oldNodes.replaceWith(nodes3930);
            }));
            
            var oldNodes = iternode265;
            iternode265 = iternode265.contents();
            oldNodes.replaceWith(iternode265);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list265.addEventListener('change', function() { listSubs__.unsubscribe(); renderList265(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList265(true); }));
      });
    };
    renderList265();
    
    callback(root4998); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes3927 = $("<span>");
      root4998.append(nodes3927);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4999 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1595 = mobl.loadingSpan();
        root4999.append(node1595);
        var list264;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList264 = function() {
          var subs__ = listSubs__;
          list264 = tabs.get();
          list264.list(function(results264) {
            node1595.empty();
            for(var i1110 = 0; i1110 < results264.length; i1110++) {
              (function() {
                var iternode264 = $("<span>");
                node1595.append(iternode264);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results264), i1110), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results264), i1110), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results264), i1110), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp3653 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp3653.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp3653.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp3653.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp3653.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp3652 = mobl.ref(result__);
                
                var nodes3928 = $("<span>");
                iternode264.append(nodes3928);
                subs__.addSub((mobl.span)(tmp3653, mobl.ref(null), tmp3652, mobl.ref(null), function(_, callback) {
                  var root5000 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3929 = $("<span>");
                  root5000.append(nodes3929);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root5001 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5001); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3929;
                    nodes3929 = node.contents();
                    oldNodes.replaceWith(nodes3929);
                  }));
                  callback(root5000); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3928;
                  nodes3928 = node.contents();
                  oldNodes.replaceWith(nodes3928);
                }));
                
                var oldNodes = iternode264;
                iternode264 = iternode264.contents();
                oldNodes.replaceWith(iternode264);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list264.addEventListener('change', function() { listSubs__.unsubscribe(); renderList264(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList264(true); }));
          });
        };
        renderList264();
        
        callback(root4999); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3927;
        nodes3927 = node.contents();
        oldNodes.replaceWith(nodes3927);
      }));
      
      var node1596 = mobl.loadingSpan();
      root4998.append(node1596);
      var list265;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList265 = function() {
        var subs__ = listSubs__;
        list265 = tabs.get();
        list265.list(function(results265) {
          node1596.empty();
          for(var i1111 = 0; i1111 < results265.length; i1111++) {
            (function() {
              var iternode265 = $("<span>");
              node1596.append(iternode265);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results265), i1111), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results265), i1111), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results265), i1111), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp3654 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp3654.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp3654.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp3654.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp3654.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes3930 = $("<span>");
              iternode265.append(nodes3930);
              subs__.addSub((mobl.block)(tmp3654, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root5002 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3931 = $("<span>");
                root5002.append(nodes3931);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root5003 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3932 = $("<span>");
                  root5003.append(nodes3932);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl616();
                  }));
                  
                  function renderControl616() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root5004 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5004); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3932;
                      nodes3932 = node.contents();
                      oldNodes.replaceWith(nodes3932);
                    }));
                  }
                  renderControl616();
                  callback(root5003); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3931;
                  nodes3931 = node.contents();
                  oldNodes.replaceWith(nodes3931);
                }));
                callback(root5002); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3930;
                nodes3930 = node.contents();
                oldNodes.replaceWith(nodes3930);
              }));
              
              var oldNodes = iternode265;
              iternode265 = iternode265.contents();
              oldNodes.replaceWith(iternode265);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list265.addEventListener('change', function() { listSubs__.unsubscribe(); renderList265(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList265(true); }));
        });
      };
      renderList265();
      
      callback(root4998); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root5005 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1597 = $("<div>");
  
  var ref1560 = mobl.ref(ui.searchboxStyle);
  if(ref1560.get() !== null) {
    node1597.attr('class', ref1560.get());
    subs__.addSub(ref1560.addEventListener('change', function(_, ref, val) {
      node1597.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1560.rebind());
  
  
  var node1598 = $("<input>");
  node1598.attr('type', "search");
  
  var ref1557 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1557.get() !== null) {
    node1598.attr('class', ref1557.get());
    subs__.addSub(ref1557.addEventListener('change', function(_, ref, val) {
      node1598.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1557.rebind());
  
  var ref1558 = placeholder;
  if(ref1558.get() !== null) {
    node1598.attr('placeholder', ref1558.get());
    subs__.addSub(ref1558.addEventListener('change', function(_, ref, val) {
      node1598.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1558.rebind());
  
  var ref1559 = s;
  node1598.val(""+ref1559.get());
  var ignore308 = false;
  subs__.addSub(ref1559.addEventListener('change', function(_, ref, val) {
    if(ignore308) return;
    node1598.val(""+val);
  }));
  subs__.addSub(ref1559.rebind());
  
  subs__.addSub(mobl.domBind(node1598, 'keyup change', function() {
    ignore308 = true;
    s.set(mobl.stringTomobl__String(node1598.val()));
    ignore308 = false;
  }));
  
  
  var val792 = onsearch.get();
  if(val792 !== null) {
    subs__.addSub(mobl.domBind(node1598, 'change', val792));
  }
  
  var val793 = onkeyup.get();
  if(val793 !== null) {
    subs__.addSub(mobl.domBind(node1598, 'keyup', val793));
  }
  node1598.attr('autocorrect', false);
  node1598.attr('autocapitalize', false);
  node1598.attr('autocomplete', false);
  
  node1597.append(node1598);
  root5005.append(node1597);
  callback(root5005); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root5006 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1561 = mobl.ref(ui.contextMenuStyle);
  if(ref1561.get() !== null) {
    menu.attr('class', ref1561.get());
    subs__.addSub(ref1561.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1561.rebind());
  
  var nodes3933 = $("<span>");
  menu.append(nodes3933);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl617();
  }));
  
  function renderControl617() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5007 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5007); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3933;
      nodes3933 = node.contents();
      oldNodes.replaceWith(nodes3933);
    }));
  }
  renderControl617();
  root5006.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val794 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp3693 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val794 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val794));
  }
  
  root5006.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root5006); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root5008 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp3678 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp3678.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1599 = $("<span>");
  root5008.append(node1599);
  var condSubs394 = new mobl.CompSubscription();
  subs__.addSub(condSubs394);
  var oldValue394;
  var renderCond394 = function() {
    var value1986 = tmp3678.get();
    if(oldValue394 === value1986) return;
    oldValue394 = value1986;
    var subs__ = condSubs394;
    subs__.unsubscribe();
    node1599.empty();
    if(value1986) {
      items.get().one(function(result__) {
        var tmp3694 = result__;
        var current = mobl.ref(result__);
        
        var node1600 = $("<div>");
        node1600.attr('width', "100%");
        
        
        var node1601 = $("<div>");
        node1601.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes3936 = $("<span>");
        node1601.append(nodes3936);
        subs__.addSub((ui.group)(function(_, callback) {
          var root5011 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1604 = mobl.loadingSpan();
          root5011.append(node1604);
          var list266;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList266 = function() {
            var subs__ = listSubs__;
            list266 = items.get();
            list266.list(function(results266) {
              node1604.empty();
              for(var i1112 = 0; i1112 < results266.length; i1112++) {
                (function() {
                  var iternode266 = $("<span>");
                  node1604.append(iternode266);
                  var it;
                  it = mobl.ref(mobl.ref(results266), i1112);
                  var result__ = it.get() == current.get();
                  var tmp3660 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp3660.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp3660.set(it.get() == current.get());
                  }));
                  
                  
                  var node1605 = $("<span>");
                  iternode266.append(node1605);
                  var condSubs396 = new mobl.CompSubscription();
                  subs__.addSub(condSubs396);
                  var oldValue396;
                  var renderCond396 = function() {
                    var value1988 = tmp3660.get();
                    if(oldValue396 === value1988) return;
                    oldValue396 = value1988;
                    var subs__ = condSubs396;
                    subs__.unsubscribe();
                    node1605.empty();
                    if(value1988) {
                      var nodes3937 = $("<span>");
                      node1605.append(nodes3937);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root5012 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3938 = $("<span>");
                        root5012.append(nodes3938);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl619();
                        }));
                        
                        function renderControl619() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5013 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5013); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3938;
                            nodes3938 = node.contents();
                            oldNodes.replaceWith(nodes3938);
                          }));
                        }
                        renderControl619();
                        callback(root5012); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3937;
                        nodes3937 = node.contents();
                        oldNodes.replaceWith(nodes3937);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp3659 = mobl.ref(result__);
                      
                      var nodes3939 = $("<span>");
                      node1605.append(nodes3939);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3659, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root5014 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3940 = $("<span>");
                        root5014.append(nodes3940);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl620();
                        }));
                        
                        function renderControl620() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5015 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5015); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3940;
                            nodes3940 = node.contents();
                            oldNodes.replaceWith(nodes3940);
                          }));
                        }
                        renderControl620();
                        callback(root5014); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3939;
                        nodes3939 = node.contents();
                        oldNodes.replaceWith(nodes3939);
                      }));
                      
                      
                    }
                  };
                  renderCond396();
                  subs__.addSub(tmp3660.addEventListener('change', function() {
                    renderCond396();
                  }));
                  
                  
                  var oldNodes = iternode266;
                  iternode266 = iternode266.contents();
                  oldNodes.replaceWith(iternode266);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list266.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
            });
          };
          renderList266();
          
          callback(root5011); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3936;
          nodes3936 = node.contents();
          oldNodes.replaceWith(nodes3936);
        }));
        node1600.append(node1601);
        
        var node1602 = $("<div>");
        node1602.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1603 = $("<span>");
        node1602.append(node1603);
        var condSubs395 = new mobl.CompSubscription();
        subs__.addSub(condSubs395);
        var oldValue395;
        var renderCond395 = function() {
          var value1987 = current.get();
          if(oldValue395 === value1987) return;
          oldValue395 = value1987;
          var subs__ = condSubs395;
          subs__.unsubscribe();
          node1603.empty();
          if(value1987) {
            var nodes3934 = $("<span>");
            node1603.append(nodes3934);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl618();
            }));
            
            function renderControl618() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root5009 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5009); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3934;
                nodes3934 = node.contents();
                oldNodes.replaceWith(nodes3934);
              }));
            }
            renderControl618();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp3661 = mobl.ref(result__);
            
            var nodes3935 = $("<span>");
            node1603.append(nodes3935);
            subs__.addSub((mobl.label)(tmp3661, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5010 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5010); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3935;
              nodes3935 = node.contents();
              oldNodes.replaceWith(nodes3935);
            }));
            
            
          }
        };
        renderCond395();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond395();
        }));
        
        node1600.append(node1602);
        node1599.append(node1600);
        
        
        
        
        
        
      });
    } else {
      var nodes3941 = $("<span>");
      node1599.append(nodes3941);
      subs__.addSub((ui.group)(function(_, callback) {
        var root5016 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1606 = mobl.loadingSpan();
        root5016.append(node1606);
        var list267;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList267 = function() {
          var subs__ = listSubs__;
          list267 = items.get();
          list267.list(function(results267) {
            node1606.empty();
            for(var i1113 = 0; i1113 < results267.length; i1113++) {
              (function() {
                var iternode267 = $("<span>");
                node1606.append(iternode267);
                var it;
                it = mobl.ref(mobl.ref(results267), i1113);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp3695 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp3655 = mobl.ref(result__);
                
                var nodes3942 = $("<span>");
                iternode267.append(nodes3942);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3655, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5017 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3943 = $("<span>");
                  root5017.append(nodes3943);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl621();
                  }));
                  
                  function renderControl621() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root5018 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5018); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3943;
                      nodes3943 = node.contents();
                      oldNodes.replaceWith(nodes3943);
                    }));
                  }
                  renderControl621();
                  callback(root5017); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3942;
                  nodes3942 = node.contents();
                  oldNodes.replaceWith(nodes3942);
                }));
                
                var oldNodes = iternode267;
                iternode267 = iternode267.contents();
                oldNodes.replaceWith(iternode267);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list267.addEventListener('change', function() { listSubs__.unsubscribe(); renderList267(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList267(true); }));
          });
        };
        renderList267();
        
        callback(root5016); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3941;
        nodes3941 = node.contents();
        oldNodes.replaceWith(nodes3941);
      }));
      
      
    }
  };
  renderCond394();
  subs__.addSub(tmp3678.addEventListener('change', function() {
    renderCond394();
  }));
  
  callback(root5008); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root5019 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp3658 = mobl.ref(result__);
  
  var nodes3944 = $("<span>");
  root5019.append(nodes3944);
  subs__.addSub((ui.header)(tmp3658, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5020 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3657 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3656 = mobl.ref(result__);
    
    var nodes3945 = $("<span>");
    root5020.append(nodes3945);
    subs__.addSub((ui.backButton)(tmp3656, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3657, function(_, callback) {
      var root5021 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5021); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3945;
      nodes3945 = node.contents();
      oldNodes.replaceWith(nodes3945);
    }));
    callback(root5020); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3944;
    nodes3944 = node.contents();
    oldNodes.replaceWith(nodes3944);
  }));
  var nodes3946 = $("<span>");
  root5019.append(nodes3946);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl622();
  }));
  
  function renderControl622() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5022); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3946;
      nodes3946 = node.contents();
      oldNodes.replaceWith(nodes3946);
    }));
  }
  renderControl622();
  callback(root5019); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root5023 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes3947 = $("<span>");
  root5023.append(nodes3947);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5024 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1607 = mobl.loadingSpan();
    root5024.append(node1607);
    var list268;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList268 = function() {
      var subs__ = listSubs__;
      list268 = coll.get();
      list268.list(function(results268) {
        node1607.empty();
        for(var i1114 = 0; i1114 < results268.length; i1114++) {
          (function() {
            var iternode268 = $("<span>");
            node1607.append(iternode268);
            var it;
            it = mobl.ref(mobl.ref(results268), i1114);
            var result__ = it.get() == selected.get();
            var tmp3663 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp3663.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp3663.set(it.get() == selected.get());
            }));
            
            
            var node1608 = $("<span>");
            iternode268.append(node1608);
            var condSubs397 = new mobl.CompSubscription();
            subs__.addSub(condSubs397);
            var oldValue397;
            var renderCond397 = function() {
              var value1989 = tmp3663.get();
              if(oldValue397 === value1989) return;
              oldValue397 = value1989;
              var subs__ = condSubs397;
              subs__.unsubscribe();
              node1608.empty();
              if(value1989) {
                var nodes3948 = $("<span>");
                node1608.append(nodes3948);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5025 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3949 = $("<span>");
                  root5025.append(nodes3949);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl623();
                  }));
                  
                  function renderControl623() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root5026 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5026); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3949;
                      nodes3949 = node.contents();
                      oldNodes.replaceWith(nodes3949);
                    }));
                  }
                  renderControl623();
                  callback(root5025); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3948;
                  nodes3948 = node.contents();
                  oldNodes.replaceWith(nodes3948);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp3662 = mobl.ref(result__);
                
                var nodes3950 = $("<span>");
                node1608.append(nodes3950);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3662, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root5027 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3951 = $("<span>");
                  root5027.append(nodes3951);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl624();
                  }));
                  
                  function renderControl624() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root5028 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5028); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3951;
                      nodes3951 = node.contents();
                      oldNodes.replaceWith(nodes3951);
                    }));
                  }
                  renderControl624();
                  callback(root5027); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3950;
                  nodes3950 = node.contents();
                  oldNodes.replaceWith(nodes3950);
                }));
                
                
              }
            };
            renderCond397();
            subs__.addSub(tmp3663.addEventListener('change', function() {
              renderCond397();
            }));
            
            
            var oldNodes = iternode268;
            iternode268 = iternode268.contents();
            oldNodes.replaceWith(iternode268);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list268.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
      });
    };
    renderList268();
    
    callback(root5024); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3947;
    nodes3947 = node.contents();
    oldNodes.replaceWith(nodes3947);
  }));
  callback(root5023); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root5029 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp3696 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp3664 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp3664.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp3664.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp3664.set(coll.get().limit(n.get()));
    }));
    
    
    var node1609 = mobl.loadingSpan();
    root5029.append(node1609);
    var list269;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList269 = function() {
      var subs__ = listSubs__;
      list269 = tmp3664.get();
      list269.list(function(results269) {
        node1609.empty();
        for(var i1115 = 0; i1115 < results269.length; i1115++) {
          (function() {
            var iternode269 = $("<span>");
            node1609.append(iternode269);
            var it;
            it = mobl.ref(mobl.ref(results269), i1115);
            var nodes3952 = $("<span>");
            iternode269.append(nodes3952);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl625();
            }));
            
            function renderControl625() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root5030 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5030); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3952;
                nodes3952 = node.contents();
                oldNodes.replaceWith(nodes3952);
              }));
            }
            renderControl625();
            
            var oldNodes = iternode269;
            iternode269 = iternode269.contents();
            oldNodes.replaceWith(iternode269);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list269.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
        subs__.addSub(tmp3664.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
      });
    };
    renderList269();
    
    var result__ = n.get() < total.get();
    var tmp3666 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp3666.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp3666.set(n.get() < total.get());
    }));
    
    
    var node1610 = $("<span>");
    root5029.append(node1610);
    var condSubs398 = new mobl.CompSubscription();
    subs__.addSub(condSubs398);
    var oldValue398;
    var renderCond398 = function() {
      var value1990 = tmp3666.get();
      if(oldValue398 === value1990) return;
      oldValue398 = value1990;
      var subs__ = condSubs398;
      subs__.unsubscribe();
      node1610.empty();
      if(value1990) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3665 = mobl.ref(result__);
        
        var nodes3953 = $("<span>");
        node1610.append(nodes3953);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp3665, mobl.ref(null), function(_, callback) {
          var root5031 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes3954 = $("<span>");
          root5031.append(nodes3954);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root5032 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5032); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3954;
            nodes3954 = node.contents();
            oldNodes.replaceWith(nodes3954);
          }));
          callback(root5031); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3953;
          nodes3953 = node.contents();
          oldNodes.replaceWith(nodes3953);
        }));
        
        
      } else {
        
      }
    };
    renderCond398();
    subs__.addSub(tmp3666.addEventListener('change', function() {
      renderCond398();
    }));
    
    callback(root5029); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root5033 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3955 = $("<span>");
  root5033.append(nodes3955);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5034 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1611 = mobl.loadingSpan();
    root5034.append(node1611);
    var list270;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList270 = function() {
      var subs__ = listSubs__;
      list270 = items.get();
      list270.list(function(results270) {
        node1611.empty();
        for(var i1116 = 0; i1116 < results270.length; i1116++) {
          (function() {
            var iternode270 = $("<span>");
            node1611.append(iternode270);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results270), i1116), "_1");it = mobl.ref(mobl.ref(mobl.ref(results270), i1116), "_2");
            var nodes3956 = $("<span>");
            iternode270.append(nodes3956);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root5035 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3957 = $("<span>");
              root5035.append(nodes3957);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root5036 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5036); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3957;
                nodes3957 = node.contents();
                oldNodes.replaceWith(nodes3957);
              }));
              callback(root5035); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3956;
              nodes3956 = node.contents();
              oldNodes.replaceWith(nodes3956);
            }));
            
            var oldNodes = iternode270;
            iternode270 = iternode270.contents();
            oldNodes.replaceWith(iternode270);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list270.addEventListener('change', function() { listSubs__.unsubscribe(); renderList270(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList270(true); }));
      });
    };
    renderList270();
    
    callback(root5034); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3955;
    nodes3955 = node.contents();
    oldNodes.replaceWith(nodes3955);
  }));
  callback(root5033); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root5037 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll2550) {
    coll2550 = coll2550.reverse();
    function processOne162() {
      var it;
      it = coll2550.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll2550.length > 0) processOne162(); else rest162();
      
    }
    function rest162() {
      var nodes3958 = $("<span>");
      root5037.append(nodes3958);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root5038 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3667 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp3668 = mobl.ref(result__);
        
        var nodes3959 = $("<span>");
        root5038.append(nodes3959);
        subs__.addSub((ui.backButton)(tmp3668, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3667, function(_, callback) {
          var root5039 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5039); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3959;
          nodes3959 = node.contents();
          oldNodes.replaceWith(nodes3959);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll2549) {
                           coll2549 = coll2549.reverse();
                           function processOne161() {
                             var checked;var it;
                             var tmp3698 = coll2549.pop();
                             checked = tmp3698._1;it = tmp3698._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll2549.length > 0) processOne161(); else rest161();
                               
                             } else {
                               {
                                 
                                 if(coll2549.length > 0) processOne161(); else rest161();
                                 
                               }
                             }
                           }
                           function rest161() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll2549.length > 0) processOne161(); else rest161();
                         });
                         
                       };
        var tmp3669 = mobl.ref(result__);
        
        var nodes3960 = $("<span>");
        root5038.append(nodes3960);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3669, function(_, callback) {
          var root5040 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5040); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3960;
          nodes3960 = node.contents();
          oldNodes.replaceWith(nodes3960);
        }));
        callback(root5038); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3958;
        nodes3958 = node.contents();
        oldNodes.replaceWith(nodes3958);
      }));
      var nodes3961 = $("<span>");
      root5037.append(nodes3961);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root5041 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5041); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3961;
        nodes3961 = node.contents();
        oldNodes.replaceWith(nodes3961);
      }));
      callback(root5037); return subs__;
      
      
    }
    if(coll2550.length > 0) processOne162(); else rest162();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root5042 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes3962 = $("<span>");
  root5042.append(nodes3962);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5043 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5043); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3962;
    nodes3962 = node.contents();
    oldNodes.replaceWith(nodes3962);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp3670 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp3670.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp3670.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp3670.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp3670.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp3670.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes3963 = $("<span>");
  root5042.append(nodes3963);
  subs__.addSub((ui.masterDetail)(tmp3670, masterItem, detailItem, function(_, callback) {
    var root5044 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5044); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3963;
    nodes3963 = node.contents();
    oldNodes.replaceWith(nodes3963);
  }));
  callback(root5042); return subs__;
  
  
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
  var root5045 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes3964 = $("<span>");
  root5045.append(nodes3964);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5046 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1612 = mobl.loadingSpan();
    root5046.append(node1612);
    var list271;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList271 = function() {
      var subs__ = listSubs__;
      list271 = sections.get();
      list271.list(function(results271) {
        node1612.empty();
        for(var i1117 = 0; i1117 < results271.length; i1117++) {
          (function() {
            var iternode271 = $("<span>");
            node1612.append(iternode271);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results271), i1117), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results271), i1117), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp3672 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp3672.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp3672.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp3672.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp3672.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp3671 = mobl.ref(result__);
            
            var nodes3965 = $("<span>");
            iternode271.append(nodes3965);
            subs__.addSub((mobl.span)(tmp3672, mobl.ref(null), tmp3671, mobl.ref(null), function(_, callback) {
              var root5047 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3966 = $("<span>");
              root5047.append(nodes3966);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root5048 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5048); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3966;
                nodes3966 = node.contents();
                oldNodes.replaceWith(nodes3966);
              }));
              callback(root5047); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3965;
              nodes3965 = node.contents();
              oldNodes.replaceWith(nodes3965);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp3673 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp3673.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp3673.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp3673.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp3673.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes3967 = $("<span>");
            iternode271.append(nodes3967);
            subs__.addSub((mobl.block)(tmp3673, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5049 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3968 = $("<span>");
              root5049.append(nodes3968);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl626();
              }));
              
              function renderControl626() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root5050 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5050); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3968;
                  nodes3968 = node.contents();
                  oldNodes.replaceWith(nodes3968);
                }));
              }
              renderControl626();
              callback(root5049); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3967;
              nodes3967 = node.contents();
              oldNodes.replaceWith(nodes3967);
            }));
            
            var oldNodes = iternode271;
            iternode271 = iternode271.contents();
            oldNodes.replaceWith(iternode271);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list271.addEventListener('change', function() { listSubs__.unsubscribe(); renderList271(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList271(true); }));
      });
    };
    renderList271();
    
    callback(root5046); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3964;
    nodes3964 = node.contents();
    oldNodes.replaceWith(nodes3964);
  }));
  callback(root5045); return subs__;
  
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
  var root5051 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1613 = $("<table>");
  
  var ref1562 = style;
  if(ref1562.get() !== null) {
    node1613.attr('class', ref1562.get());
    subs__.addSub(ref1562.addEventListener('change', function(_, ref, val) {
      node1613.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1562.rebind());
  
  var nodes3969 = $("<span>");
  node1613.append(nodes3969);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl627();
  }));
  
  function renderControl627() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5052 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5052); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3969;
      nodes3969 = node.contents();
      oldNodes.replaceWith(nodes3969);
    }));
  }
  renderControl627();
  root5051.append(node1613);
  callback(root5051); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root5053 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1614 = $("<tr>");
  
  var ref1563 = style;
  if(ref1563.get() !== null) {
    node1614.attr('class', ref1563.get());
    subs__.addSub(ref1563.addEventListener('change', function(_, ref, val) {
      node1614.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1563.rebind());
  
  var nodes3970 = $("<span>");
  node1614.append(nodes3970);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl628();
  }));
  
  function renderControl628() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5054); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3970;
      nodes3970 = node.contents();
      oldNodes.replaceWith(nodes3970);
    }));
  }
  renderControl628();
  root5053.append(node1614);
  callback(root5053); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root5055 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1615 = $("<td>");
  
  var ref1564 = width;
  if(ref1564.get() !== null) {
    node1615.attr('width', ref1564.get());
    subs__.addSub(ref1564.addEventListener('change', function(_, ref, val) {
      node1615.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1564.rebind());
  
  var ref1565 = style;
  if(ref1565.get() !== null) {
    node1615.attr('class', ref1565.get());
    subs__.addSub(ref1565.addEventListener('change', function(_, ref, val) {
      node1615.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1565.rebind());
  
  var nodes3971 = $("<span>");
  node1615.append(nodes3971);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl629();
  }));
  
  function renderControl629() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5056); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3971;
      nodes3971 = node.contents();
      oldNodes.replaceWith(nodes3971);
    }));
  }
  renderControl629();
  root5055.append(node1615);
  callback(root5055); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root5057 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1616 = $("<td>");
  
  var ref1566 = width;
  if(ref1566.get() !== null) {
    node1616.attr('width', ref1566.get());
    subs__.addSub(ref1566.addEventListener('change', function(_, ref, val) {
      node1616.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1566.rebind());
  
  var ref1567 = style;
  if(ref1567.get() !== null) {
    node1616.attr('class', ref1567.get());
    subs__.addSub(ref1567.addEventListener('change', function(_, ref, val) {
      node1616.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1567.rebind());
  
  var nodes3972 = $("<span>");
  node1616.append(nodes3972);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl630();
  }));
  
  function renderControl630() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5058 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5058); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3972;
      nodes3972 = node.contents();
      oldNodes.replaceWith(nodes3972);
    }));
  }
  renderControl630();
  root5057.append(node1616);
  callback(root5057); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root5059 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1617 = $("<td>");
  
  var ref1568 = width;
  if(ref1568.get() !== null) {
    node1617.attr('width', ref1568.get());
    subs__.addSub(ref1568.addEventListener('change', function(_, ref, val) {
      node1617.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1568.rebind());
  
  var ref1569 = style;
  if(ref1569.get() !== null) {
    node1617.attr('class', ref1569.get());
    subs__.addSub(ref1569.addEventListener('change', function(_, ref, val) {
      node1617.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1569.rebind());
  
  
  var node1618 = $("<strong>");
  
  var nodes3973 = $("<span>");
  node1618.append(nodes3973);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl631();
  }));
  
  function renderControl631() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5060 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5060); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3973;
      nodes3973 = node.contents();
      oldNodes.replaceWith(nodes3973);
    }));
  }
  renderControl631();
  node1617.append(node1618);
  root5059.append(node1617);
  callback(root5059); return subs__;
  
  
  
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
  items.list(function(coll2551) {
    coll2551 = coll2551.reverse();
    function processOne163() {
      var item;
      item = coll2551.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll2551.length > 0) processOne163(); else rest163();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll2551.length > 0) processOne163(); else rest163();
          
        }
      }
    }
    function rest163() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll2551.length > 0) processOne163(); else rest163();
  });
  
};


ui.mMasterDetail = function(current, items, masterItem, detail, elements, callback) {
  var root5061 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1619 = $("<div>");
  node1619.attr('width', "100%");
  
  
  var node1620 = $("<div>");
  node1620.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
  
  var nodes3975 = $("<span>");
  node1620.append(nodes3975);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5063 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1625 = mobl.loadingSpan();
    root5063.append(node1625);
    var list272;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList272 = function() {
      var subs__ = listSubs__;
      list272 = items.get();
      list272.list(function(results272) {
        node1625.empty();
        for(var i1118 = 0; i1118 < results272.length; i1118++) {
          (function() {
            var iternode272 = $("<span>");
            node1625.append(iternode272);
            var it;
            it = mobl.ref(mobl.ref(results272), i1118);
            var result__ = it.get() == current.get();
            var tmp3677 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp3677.set(it.get() == current.get());
            }));
            subs__.addSub(current.addEventListener('change', function() {
              tmp3677.set(it.get() == current.get());
            }));
            
            
            var node1626 = $("<span>");
            iternode272.append(node1626);
            var condSubs400 = new mobl.CompSubscription();
            subs__.addSub(condSubs400);
            var oldValue400;
            var renderCond400 = function() {
              var value1992 = tmp3677.get();
              if(oldValue400 === value1992) return;
              oldValue400 = value1992;
              var subs__ = condSubs400;
              subs__.unsubscribe();
              node1626.empty();
              if(value1992) {
                var nodes3976 = $("<span>");
                node1626.append(nodes3976);
                subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5064 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp3702 = result__;
                    var tmp3674 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp3700 = result__;
                        var result__ = tmp3700;
                        tmp3674.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp3701 = result__;
                        var result__ = tmp3701;
                        tmp3674.set(result__);
                        
                      });
                    }));
                    
                    var nodes3977 = $("<span>");
                    root5064.append(nodes3977);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl633();
                    }));
                    
                    function renderControl633() {
                      subs__.addSub((masterItem.get())(it, tmp3674, function(elements, callback) {
                        var root5065 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root5065); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3977;
                        nodes3977 = node.contents();
                        oldNodes.replaceWith(nodes3977);
                      }));
                    }
                    renderControl633();
                    callback(root5064); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3976;
                  nodes3976 = node.contents();
                  oldNodes.replaceWith(nodes3976);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 current.set(result__);
                                 var result__ = ui.scrollUp();
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp3676 = mobl.ref(result__);
                
                var nodes3978 = $("<span>");
                node1626.append(nodes3978);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3676, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root5066 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp3705 = result__;
                    var tmp3675 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp3703 = result__;
                        var result__ = tmp3703;
                        tmp3675.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp3704 = result__;
                        var result__ = tmp3704;
                        tmp3675.set(result__);
                        
                      });
                    }));
                    
                    var nodes3979 = $("<span>");
                    root5066.append(nodes3979);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl634();
                    }));
                    
                    function renderControl634() {
                      subs__.addSub((masterItem.get())(it, tmp3675, function(elements, callback) {
                        var root5067 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root5067); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3979;
                        nodes3979 = node.contents();
                        oldNodes.replaceWith(nodes3979);
                      }));
                    }
                    renderControl634();
                    callback(root5066); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3978;
                  nodes3978 = node.contents();
                  oldNodes.replaceWith(nodes3978);
                }));
                
                
              }
            };
            renderCond400();
            subs__.addSub(tmp3677.addEventListener('change', function() {
              renderCond400();
            }));
            
            
            var oldNodes = iternode272;
            iternode272 = iternode272.contents();
            oldNodes.replaceWith(iternode272);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list272.addEventListener('change', function() { listSubs__.unsubscribe(); renderList272(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList272(true); }));
      });
    };
    renderList272();
    
    callback(root5063); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3975;
    nodes3975 = node.contents();
    oldNodes.replaceWith(nodes3975);
  }));
  node1619.append(node1620);
  
  var node1621 = $("<div>");
  node1621.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
  
  
  var node1622 = $("<span>");
  node1621.append(node1622);
  var condSubs399 = new mobl.CompSubscription();
  subs__.addSub(condSubs399);
  var oldValue399;
  var renderCond399 = function() {
    var value1991 = current.get();
    if(oldValue399 === value1991) return;
    oldValue399 = value1991;
    var subs__ = condSubs399;
    subs__.unsubscribe();
    node1622.empty();
    if(value1991) {
      var nodes3974 = $("<span>");
      node1622.append(nodes3974);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl632();
      }));
      
      function renderControl632() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root5062 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5062); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3974;
          nodes3974 = node.contents();
          oldNodes.replaceWith(nodes3974);
        }));
      }
      renderControl632();
      
      
    } else {
      
      var node1623 = $("<div>");
      node1623.attr('style', "padding:20px");
      
      
      var node1624 = $("<h2>");
      
      
      node1624.append("Add more questions.");
      node1623.append(node1624);
      node1622.append(node1623);
      
      
      
    }
  };
  renderCond399();
  subs__.addSub(current.addEventListener('change', function() {
    renderCond399();
  }));
  
  node1619.append(node1621);
  root5061.append(node1619);
  callback(root5061); return subs__;
  
  
  
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
