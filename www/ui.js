mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root10525 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1700 = $("<span>");
  root10525.append(node1700);
  var condSubs422 = new mobl.CompSubscription();
  subs__.addSub(condSubs422);
  var oldValue422;
  var renderCond422 = function() {
    var value1034 = value.get();
    if(oldValue422 === value1034) return;
    oldValue422 = value1034;
    var subs__ = condSubs422;
    subs__.unsubscribe();
    node1700.empty();
    if(value1034) {
      var nodes9010 = $("<span>");
      node1700.append(nodes9010);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl668();
      }));
      
      function renderControl668() {
        subs__.addSub((elements)(function(elements, callback) {
          var root10526 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10526); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9010;
          nodes9010 = node.contents();
          oldNodes.replaceWith(nodes9010);
        }));
      }
      renderControl668();
      
      
    } else {
      var nodes9011 = $("<span>");
      node1700.append(nodes9011);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10527 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes9012 = $("<span>");
        root10527.append(nodes9012);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root10528 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10528); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9012;
          nodes9012 = node.contents();
          oldNodes.replaceWith(nodes9012);
        }));
        var nodes9013 = $("<span>");
        root10527.append(nodes9013);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root10529 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10529); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9013;
          nodes9013 = node.contents();
          oldNodes.replaceWith(nodes9013);
        }));
        callback(root10527); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9011;
        nodes9011 = node.contents();
        oldNodes.replaceWith(nodes9011);
      }));
      
      
    }
  };
  renderCond422();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond422();
  }));
  
  callback(root10525); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root10530 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1701 = $("<div>");
  
  var ref1670 = mobl.ref(ui.headerStyle);
  if(ref1670.get() !== null) {
    node1701.attr('class', ref1670.get());
    subs__.addSub(ref1670.addEventListener('change', function(_, ref, val) {
      node1701.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1670.rebind());
  
  var val775 = onclick.get();
  if(val775 !== null) {
    subs__.addSub(mobl.domBind(node1701, 'tap', val775));
  }
  
  var ref1671 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1671.get() !== null) {
    node1701.attr('style', ref1671.get());
    subs__.addSub(ref1671.addEventListener('change', function(_, ref, val) {
      node1701.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1701.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1671.rebind());
  
  
  var node1704 = $("<div>");
  
  var ref1669 = mobl.ref(ui.headerContainerStyle);
  if(ref1669.get() !== null) {
    node1704.attr('class', ref1669.get());
    subs__.addSub(ref1669.addEventListener('change', function(_, ref, val) {
      node1704.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1669.rebind());
  
  
  var node1705 = $("<div>");
  
  var ref1667 = text;
  node1705.text(""+ref1667.get());
  var ignore314 = false;
  subs__.addSub(ref1667.addEventListener('change', function(_, ref, val) {
    if(ignore314) return;
    node1705.text(""+val);
  }));
  subs__.addSub(ref1667.rebind());
  
  
  var ref1668 = mobl.ref(ui.headerTextStyle);
  if(ref1668.get() !== null) {
    node1705.attr('class', ref1668.get());
    subs__.addSub(ref1668.addEventListener('change', function(_, ref, val) {
      node1705.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1668.rebind());
  
  node1704.append(node1705);
  node1701.append(node1704);
  var nodes9014 = $("<span>");
  node1701.append(nodes9014);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl669();
  }));
  
  function renderControl669() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10531 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10531); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9014;
      nodes9014 = node.contents();
      oldNodes.replaceWith(nodes9014);
    }));
  }
  renderControl669();
  root10530.append(node1701);
  
  var node1702 = $("<span>");
  root10530.append(node1702);
  var condSubs423 = new mobl.CompSubscription();
  subs__.addSub(condSubs423);
  var oldValue423;
  var renderCond423 = function() {
    var value1035 = fixedPosition.get();
    if(oldValue423 === value1035) return;
    oldValue423 = value1035;
    var subs__ = condSubs423;
    subs__.unsubscribe();
    node1702.empty();
    if(value1035) {
      
      var node1703 = $("<div>");
      node1703.attr('id', "hello");
      node1703.attr('style', "height: 2.9em;");
      
      node1702.append(node1703);
      
      
    } else {
      
    }
  };
  renderCond423();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond423();
  }));
  
  callback(root10530); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10532 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1672 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1672.get() !== null) {
    sp.attr('class', ref1672.get());
    subs__.addSub(ref1672.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1672.rebind());
  
  var val776 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val776 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val776));
  }
  
  var val777 = function(event, callback) {
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
  if(val777 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val777));
  }
  
  var val778 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after216(result__) {
                    var tmp8899 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after216);if(result__ !== undefined) after216(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val778 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val778));
  }
  
  var val779 = function(event, callback) {
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
  if(val779 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val779));
  }
  
  var ref1673 = text;
  sp.text(""+ref1673.get());
  var ignore315 = false;
  subs__.addSub(ref1673.addEventListener('change', function(_, ref, val) {
    if(ignore315) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1673.rebind());
  
  
  root10532.append(sp);
  callback(root10532); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10533 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9015 = $("<span>");
  root10533.append(nodes9015);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root10534 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10534); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9015;
    nodes9015 = node.contents();
    oldNodes.replaceWith(nodes9015);
  }));
  callback(root10533); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10535 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9016 = $("<span>");
  root10535.append(nodes9016);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root10536 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10536); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9016;
    nodes9016 = node.contents();
    oldNodes.replaceWith(nodes9016);
  }));
  callback(root10535); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root10537 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1706 = $("<ul>");
  
  var ref1674 = mobl.ref(ui.groupStyle);
  if(ref1674.get() !== null) {
    node1706.attr('class', ref1674.get());
    subs__.addSub(ref1674.addEventListener('change', function(_, ref, val) {
      node1706.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1674.rebind());
  
  var nodes9017 = $("<span>");
  node1706.append(nodes9017);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl670();
  }));
  
  function renderControl670() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10538 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10538); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9017;
      nodes9017 = node.contents();
      oldNodes.replaceWith(nodes9017);
    }));
  }
  renderControl670();
  root10537.append(node1706);
  callback(root10537); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root10539 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1707 = $("<img>");
  
  var ref1675 = url;
  if(ref1675.get() !== null) {
    node1707.attr('src', ref1675.get());
    subs__.addSub(ref1675.addEventListener('change', function(_, ref, val) {
      node1707.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1675.rebind());
  
  var ref1676 = width;
  if(ref1676.get() !== null) {
    node1707.attr('width', ref1676.get());
    subs__.addSub(ref1676.addEventListener('change', function(_, ref, val) {
      node1707.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1676.rebind());
  
  var ref1677 = height;
  if(ref1677.get() !== null) {
    node1707.attr('height', ref1677.get());
    subs__.addSub(ref1677.addEventListener('change', function(_, ref, val) {
      node1707.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1677.rebind());
  
  var ref1678 = style;
  if(ref1678.get() !== null) {
    node1707.attr('class', ref1678.get());
    subs__.addSub(ref1678.addEventListener('change', function(_, ref, val) {
      node1707.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1678.rebind());
  
  var val780 = onclick.get();
  if(val780 !== null) {
    subs__.addSub(mobl.domBind(node1707, 'tap', val780));
  }
  
  var ref1679 = valign;
  if(ref1679.get() !== null) {
    node1707.attr('valign', ref1679.get());
    subs__.addSub(ref1679.addEventListener('change', function(_, ref, val) {
      node1707.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1679.rebind());
  
  var ref1680 = align;
  if(ref1680.get() !== null) {
    node1707.attr('align', ref1680.get());
    subs__.addSub(ref1680.addEventListener('change', function(_, ref, val) {
      node1707.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1680.rebind());
  
  root10539.append(node1707);
  callback(root10539); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root10540 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1681 = mobl.ref(ui.itemStyle);
  if(ref1681.get() !== null) {
    el.attr('class', ref1681.get());
    subs__.addSub(ref1681.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1681.rebind());
  
  var ref1682 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1682.get() !== null) {
    el.attr('class', ref1682.get());
    subs__.addSub(ref1682.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1682.rebind());
  
  var val781 = onswipe.get();
  if(val781 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val781));
  }
  
  var val782 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp8900 = result__;
                                           function after217(result__) {
                                             var tmp8901 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after217);if(result__ !== undefined) after217(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp8902 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val782 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val782));
  }
  
  var nodes9018 = $("<span>");
  el.append(nodes9018);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl671();
  }));
  
  function renderControl671() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10541 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10541); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9018;
      nodes9018 = node.contents();
      oldNodes.replaceWith(nodes9018);
    }));
  }
  renderControl671();
  root10540.append(el);
  callback(root10540); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root10542 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1708 = $("<input>");
  node1708.attr('type', "checkbox");
  
  var ref1684 = b;
  node1708.attr('checked', !!ref1684.get());
  subs__.addSub(ref1684.addEventListener('change', function(_, ref, val) {
    if(ref === ref1684) node1708.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1708, 'change', function() {
    b.set(!!node1708.attr('checked'));
  }));
  
  var val784 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val784 !== null) {
    subs__.addSub(mobl.domBind(node1708, 'tap', val784));
  }
  
  var val785 = onchange.get();
  if(val785 !== null) {
    subs__.addSub(mobl.domBind(node1708, 'change', val785));
  }
  
  root10542.append(node1708);
  
  root10542.append(" ");
  
  var node1709 = $("<span>");
  
  var ref1683 = label;
  node1709.text(""+ref1683.get());
  var ignore316 = false;
  subs__.addSub(ref1683.addEventListener('change', function(_, ref, val) {
    if(ignore316) return;
    node1709.text(""+val);
  }));
  subs__.addSub(ref1683.rebind());
  
  
  var val783 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after218(result__) {
                    var tmp8903 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after218);if(result__ !== undefined) after218(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val783 !== null) {
    subs__.addSub(mobl.domBind(node1709, 'tap', val783));
  }
  
  root10542.append(node1709);
  callback(root10542); return subs__;
  
  
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
  var root10543 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1710 = $("<span>");
  root10543.append(node1710);
  var condSubs424 = new mobl.CompSubscription();
  subs__.addSub(condSubs424);
  var oldValue424;
  var renderCond424 = function() {
    var value1036 = label.get();
    if(oldValue424 === value1036) return;
    oldValue424 = value1036;
    var subs__ = condSubs424;
    subs__.unsubscribe();
    node1710.empty();
    if(value1036) {
      var nodes9019 = $("<span>");
      node1710.append(nodes9019);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root10544 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10544); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9019;
        nodes9019 = node.contents();
        oldNodes.replaceWith(nodes9019);
      }));
      
      
    } else {
      
    }
  };
  renderCond424();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond424();
  }));
  
  
  var node1711 = $("<span>");
  root10543.append(node1711);
  var condSubs425 = new mobl.CompSubscription();
  subs__.addSub(condSubs425);
  var oldValue425;
  var renderCond425 = function() {
    var value1037 = validator.get();
    if(oldValue425 === value1037) return;
    oldValue425 = value1037;
    var subs__ = condSubs425;
    subs__.unsubscribe();
    node1711.empty();
    if(value1037) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after222(result__) {
        var tmp8904 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp8905 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1712 = $("<input>");
        
        var ref1685 = inputType;
        if(ref1685.get() !== null) {
          node1712.attr('type', ref1685.get());
          subs__.addSub(ref1685.addEventListener('change', function(_, ref, val) {
            node1712.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1685.rebind());
        
        var ref1686 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1686.get() !== null) {
          node1712.attr('class', ref1686.get());
          subs__.addSub(ref1686.addEventListener('change', function(_, ref, val) {
            node1712.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1712.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1712.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1712.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1686.rebind());
        
        var ref1687 = placeholder;
        if(ref1687.get() !== null) {
          node1712.attr('placeholder', ref1687.get());
          subs__.addSub(ref1687.addEventListener('change', function(_, ref, val) {
            node1712.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1687.rebind());
        
        var ref1688 = temp;
        node1712.val(""+ref1688.get());
        var ignore317 = false;
        subs__.addSub(ref1688.addEventListener('change', function(_, ref, val) {
          if(ignore317) return;
          node1712.val(""+val);
        }));
        subs__.addSub(ref1688.rebind());
        
        subs__.addSub(mobl.domBind(node1712, 'keyup change', function() {
          ignore317 = true;
          temp.set(mobl.stringTomobl__String(node1712.val()));
          ignore317 = false;
        }));
        
        
        var val786 = onchange.get();
        if(val786 !== null) {
          subs__.addSub(mobl.domBind(node1712, 'change', val786));
        }
        
        var val787 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after219(result__) {
                          var tmp8906 = result__;
                          function after220(result__) {
                            var tmp8907 = result__;
                            var result__ = tmp8907;
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
                          var result__ = validator.get()(temp.get(), after220);if(result__ !== undefined) after220(result__);
                        }
                        var result__ = onkeyup.get()(event, after219);if(result__ !== undefined) after219(result__);
                      } else {
                        {
                          function after221(result__) {
                            var tmp8907 = result__;
                            var result__ = tmp8907;
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
                          var result__ = validator.get()(temp.get(), after221);if(result__ !== undefined) after221(result__);
                        }
                      }
                    };
        if(val787 !== null) {
          subs__.addSub(mobl.domBind(node1712, 'keyup', val787));
        }
        
        var val788 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val788 !== null) {
          subs__.addSub(mobl.domBind(node1712, 'blur', val788));
        }
        
        node1711.append(node1712);
        var nodes9020 = $("<span>");
        node1711.append(nodes9020);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root10545 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10545); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9020;
          nodes9020 = node.contents();
          oldNodes.replaceWith(nodes9020);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after222);if(result__ !== undefined) after222(result__);
    } else {
      
      var node1713 = $("<input>");
      
      var ref1689 = inputType;
      if(ref1689.get() !== null) {
        node1713.attr('type', ref1689.get());
        subs__.addSub(ref1689.addEventListener('change', function(_, ref, val) {
          node1713.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1689.rebind());
      
      var ref1690 = style;
      if(ref1690.get() !== null) {
        node1713.attr('class', ref1690.get());
        subs__.addSub(ref1690.addEventListener('change', function(_, ref, val) {
          node1713.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1690.rebind());
      
      var ref1691 = placeholder;
      if(ref1691.get() !== null) {
        node1713.attr('placeholder', ref1691.get());
        subs__.addSub(ref1691.addEventListener('change', function(_, ref, val) {
          node1713.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1691.rebind());
      
      var ref1692 = s;
      node1713.val(""+ref1692.get());
      var ignore318 = false;
      subs__.addSub(ref1692.addEventListener('change', function(_, ref, val) {
        if(ignore318) return;
        node1713.val(""+val);
      }));
      subs__.addSub(ref1692.rebind());
      
      subs__.addSub(mobl.domBind(node1713, 'keyup change', function() {
        ignore318 = true;
        s.set(mobl.stringTomobl__String(node1713.val()));
        ignore318 = false;
      }));
      
      
      var val789 = onchange.get();
      if(val789 !== null) {
        subs__.addSub(mobl.domBind(node1713, 'change', val789));
      }
      
      var val790 = onkeyup.get();
      if(val790 !== null) {
        subs__.addSub(mobl.domBind(node1713, 'keyup', val790));
      }
      
      var val791 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val791 !== null) {
        subs__.addSub(mobl.domBind(node1713, 'blur', val791));
      }
      
      node1711.append(node1713);
      
      
    }
  };
  renderCond425();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond425();
  }));
  
  callback(root10543); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10546 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9021 = $("<span>");
  root10546.append(nodes9021);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10547 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10547); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9021;
    nodes9021 = node.contents();
    oldNodes.replaceWith(nodes9021);
  }));
  callback(root10546); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10548 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9022 = $("<span>");
  root10548.append(nodes9022);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10549 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10549); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9022;
    nodes9022 = node.contents();
    oldNodes.replaceWith(nodes9022);
  }));
  callback(root10548); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root10550 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1714 = $("<span>");
  root10550.append(node1714);
  var condSubs426 = new mobl.CompSubscription();
  subs__.addSub(condSubs426);
  var oldValue426;
  var renderCond426 = function() {
    var value1038 = label.get();
    if(oldValue426 === value1038) return;
    oldValue426 = value1038;
    var subs__ = condSubs426;
    subs__.unsubscribe();
    node1714.empty();
    if(value1038) {
      var nodes9023 = $("<span>");
      node1714.append(nodes9023);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root10551 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10551); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9023;
        nodes9023 = node.contents();
        oldNodes.replaceWith(nodes9023);
      }));
      
      
    } else {
      
    }
  };
  renderCond426();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond426();
  }));
  
  
  var node1715 = $("<input>");
  node1715.attr('type', "range");
  
  var ref1693 = n;
  node1715.val(""+ref1693.get());
  var ignore319 = false;
  subs__.addSub(ref1693.addEventListener('change', function(_, ref, val) {
    if(ignore319) return;
    node1715.val(""+val);
  }));
  subs__.addSub(ref1693.rebind());
  
  subs__.addSub(mobl.domBind(node1715, 'keyup change', function() {
    ignore319 = true;
    n.set(mobl.stringTomobl__Num(node1715.val()));
    ignore319 = false;
  }));
  
  
  var ref1694 = min;
  if(ref1694.get() !== null) {
    node1715.attr('min', ref1694.get());
    subs__.addSub(ref1694.addEventListener('change', function(_, ref, val) {
      node1715.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1694.rebind());
  
  var ref1695 = max;
  if(ref1695.get() !== null) {
    node1715.attr('max', ref1695.get());
    subs__.addSub(ref1695.addEventListener('change', function(_, ref, val) {
      node1715.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1695.rebind());
  
  var ref1696 = step;
  if(ref1696.get() !== null) {
    node1715.attr('step', ref1696.get());
    subs__.addSub(ref1696.addEventListener('change', function(_, ref, val) {
      node1715.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1696.rebind());
  node1715.attr('style', "width: 99%;");
  
  var val792 = onchange.get();
  if(val792 !== null) {
    subs__.addSub(mobl.domBind(node1715, 'change', val792));
  }
  
  var val793 = onkeyup.get();
  if(val793 !== null) {
    subs__.addSub(mobl.domBind(node1715, 'keyup', val793));
  }
  
  var ref1697 = placeholder;
  if(ref1697.get() !== null) {
    node1715.attr('placeholder', ref1697.get());
    subs__.addSub(ref1697.addEventListener('change', function(_, ref, val) {
      node1715.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1697.rebind());
  
  root10550.append(node1715);
  callback(root10550); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10552 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after223(result__) {
      var tmp8908 = result__;
      var result__ = tmp8908;
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
    var result__ = validator.get()(n2, after223);if(result__ !== undefined) after223(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes9024 = $("<span>");
  root10552.append(nodes9024);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10553 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10553); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9024;
    nodes9024 = node.contents();
    oldNodes.replaceWith(nodes9024);
  }));
  callback(root10552); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root10554 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1716 = $("<span>");
  root10554.append(node1716);
  var condSubs427 = new mobl.CompSubscription();
  subs__.addSub(condSubs427);
  var oldValue427;
  var renderCond427 = function() {
    var value1039 = label.get();
    if(oldValue427 === value1039) return;
    oldValue427 = value1039;
    var subs__ = condSubs427;
    subs__.unsubscribe();
    node1716.empty();
    if(value1039) {
      
      var node1717 = $("<span>");
      node1717.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1701 = label;
      node1717.text(""+ref1701.get());
      var ignore321 = false;
      subs__.addSub(ref1701.addEventListener('change', function(_, ref, val) {
        if(ignore321) return;
        node1717.text(""+val);
      }));
      subs__.addSub(ref1701.rebind());
      
      
      node1716.append(node1717);
      
      var node1718 = $("<span>");
      node1718.attr('style', "float: left");
      
      
      var node1719 = $("<input>");
      node1719.attr('type', "password");
      
      var ref1698 = style;
      if(ref1698.get() !== null) {
        node1719.attr('class', ref1698.get());
        subs__.addSub(ref1698.addEventListener('change', function(_, ref, val) {
          node1719.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1698.rebind());
      
      var ref1699 = placeholder;
      if(ref1699.get() !== null) {
        node1719.attr('placeholder', ref1699.get());
        subs__.addSub(ref1699.addEventListener('change', function(_, ref, val) {
          node1719.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1699.rebind());
      
      var ref1700 = s;
      node1719.val(""+ref1700.get());
      var ignore320 = false;
      subs__.addSub(ref1700.addEventListener('change', function(_, ref, val) {
        if(ignore320) return;
        node1719.val(""+val);
      }));
      subs__.addSub(ref1700.rebind());
      
      subs__.addSub(mobl.domBind(node1719, 'keyup change', function() {
        ignore320 = true;
        s.set(mobl.stringTomobl__String(node1719.val()));
        ignore320 = false;
      }));
      
      
      var val794 = onchange.get();
      if(val794 !== null) {
        subs__.addSub(mobl.domBind(node1719, 'change', val794));
      }
      
      var val795 = onkeyup.get();
      if(val795 !== null) {
        subs__.addSub(mobl.domBind(node1719, 'keyup', val795));
      }
      
      var val796 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val796 !== null) {
        subs__.addSub(mobl.domBind(node1719, 'blur', val796));
      }
      
      node1718.append(node1719);
      node1716.append(node1718);
      
      
      
      
    } else {
      
      var node1720 = $("<input>");
      node1720.attr('type', "password");
      
      var ref1702 = style;
      if(ref1702.get() !== null) {
        node1720.attr('class', ref1702.get());
        subs__.addSub(ref1702.addEventListener('change', function(_, ref, val) {
          node1720.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1702.rebind());
      
      var ref1703 = placeholder;
      if(ref1703.get() !== null) {
        node1720.attr('placeholder', ref1703.get());
        subs__.addSub(ref1703.addEventListener('change', function(_, ref, val) {
          node1720.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1703.rebind());
      
      var ref1704 = s;
      node1720.val(""+ref1704.get());
      var ignore322 = false;
      subs__.addSub(ref1704.addEventListener('change', function(_, ref, val) {
        if(ignore322) return;
        node1720.val(""+val);
      }));
      subs__.addSub(ref1704.rebind());
      
      subs__.addSub(mobl.domBind(node1720, 'keyup change', function() {
        ignore322 = true;
        s.set(mobl.stringTomobl__String(node1720.val()));
        ignore322 = false;
      }));
      
      
      var val797 = onchange.get();
      if(val797 !== null) {
        subs__.addSub(mobl.domBind(node1720, 'change', val797));
      }
      
      var val798 = onkeyup.get();
      if(val798 !== null) {
        subs__.addSub(mobl.domBind(node1720, 'keyup', val798));
      }
      
      var val799 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val799 !== null) {
        subs__.addSub(mobl.domBind(node1720, 'blur', val799));
      }
      
      node1716.append(node1720);
      
      
    }
  };
  renderCond427();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond427();
  }));
  
  callback(root10554); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root10555 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1709 = style;
  if(ref1709.get() !== null) {
    sel.attr('class', ref1709.get());
    subs__.addSub(ref1709.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1709.rebind());
  
  var val800 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after224(result__) {
                    var tmp8910 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after224);if(result__ !== undefined) after224(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val800 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val800));
  }
  
  
  var node1721 = mobl.loadingSpan();
  sel.append(node1721);
  var list264;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList264 = function() {
    var subs__ = listSubs__;
    list264 = options.get();
    list264.list(function(results264) {
      node1721.empty();
      for(var i2211 = 0; i2211 < results264.length; i2211++) {
        (function() {
          var iternode264 = $("<span>");
          node1721.append(iternode264);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results264), i2211), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results264), i2211), "_2");
          
          var node1722 = $("<option>");
          
          var ref1705 = optionDescription;
          node1722.text(""+ref1705.get());
          var ignore323 = false;
          subs__.addSub(ref1705.addEventListener('change', function(_, ref, val) {
            if(ignore323) return;
            node1722.text(""+val);
          }));
          subs__.addSub(ref1705.rebind());
          
          
          var ref1706 = optionStyle;
          if(ref1706.get() !== null) {
            node1722.attr('class', ref1706.get());
            subs__.addSub(ref1706.addEventListener('change', function(_, ref, val) {
              node1722.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1706.rebind());
          
          var ref1707 = optionValue;
          if(ref1707.get() !== null) {
            node1722.attr('value', ref1707.get());
            subs__.addSub(ref1707.addEventListener('change', function(_, ref, val) {
              node1722.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1707.rebind());
          
          var ref1708 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1708.get() !== null) {
            node1722.attr('selected', ref1708.get());
            subs__.addSub(ref1708.addEventListener('change', function(_, ref, val) {
              node1722.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1722.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1722.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1708.rebind());
          
          iternode264.append(node1722);
          
          var oldNodes = iternode264;
          iternode264 = iternode264.contents();
          oldNodes.replaceWith(iternode264);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list264.addEventListener('change', function() { listSubs__.unsubscribe(); renderList264(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList264(true); }));
    });
  };
  renderList264();
  
  root10555.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root10555); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root10556 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes9025 = $("<span>");
    root10556.append(nodes9025);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10557 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1723 = mobl.loadingSpan();
      root10557.append(node1723);
      var list265;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList265 = function() {
        var subs__ = listSubs__;
        list265 = tabs.get();
        list265.list(function(results265) {
          node1723.empty();
          for(var i2212 = 0; i2212 < results265.length; i2212++) {
            (function() {
              var iternode265 = $("<span>");
              node1723.append(iternode265);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results265), i2212), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results265), i2212), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results265), i2212), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp8868 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp8868.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp8868.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp8868.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp8868.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp8867 = mobl.ref(result__);
              
              var nodes9026 = $("<span>");
              iternode265.append(nodes9026);
              subs__.addSub((mobl.span)(tmp8868, mobl.ref(null), tmp8867, mobl.ref(null), function(_, callback) {
                var root10558 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9027 = $("<span>");
                root10558.append(nodes9027);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root10559 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10559); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9027;
                  nodes9027 = node.contents();
                  oldNodes.replaceWith(nodes9027);
                }));
                callback(root10558); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9026;
                nodes9026 = node.contents();
                oldNodes.replaceWith(nodes9026);
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
      
      callback(root10557); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9025;
      nodes9025 = node.contents();
      oldNodes.replaceWith(nodes9025);
    }));
    
    var node1724 = mobl.loadingSpan();
    root10556.append(node1724);
    var list266;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList266 = function() {
      var subs__ = listSubs__;
      list266 = tabs.get();
      list266.list(function(results266) {
        node1724.empty();
        for(var i2213 = 0; i2213 < results266.length; i2213++) {
          (function() {
            var iternode266 = $("<span>");
            node1724.append(iternode266);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results266), i2213), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results266), i2213), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results266), i2213), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp8869 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp8869.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp8869.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp8869.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp8869.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes9028 = $("<span>");
            iternode266.append(nodes9028);
            subs__.addSub((mobl.block)(tmp8869, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10560 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9029 = $("<span>");
              root10560.append(nodes9029);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root10561 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9030 = $("<span>");
                root10561.append(nodes9030);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl672();
                }));
                
                function renderControl672() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root10562 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root10562); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9030;
                    nodes9030 = node.contents();
                    oldNodes.replaceWith(nodes9030);
                  }));
                }
                renderControl672();
                callback(root10561); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9029;
                nodes9029 = node.contents();
                oldNodes.replaceWith(nodes9029);
              }));
              callback(root10560); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9028;
              nodes9028 = node.contents();
              oldNodes.replaceWith(nodes9028);
            }));
            
            var oldNodes = iternode266;
            iternode266 = iternode266.contents();
            oldNodes.replaceWith(iternode266);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list266.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
      });
    };
    renderList266();
    
    callback(root10556); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes9025 = $("<span>");
      root10556.append(nodes9025);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10557 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1723 = mobl.loadingSpan();
        root10557.append(node1723);
        var list265;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList265 = function() {
          var subs__ = listSubs__;
          list265 = tabs.get();
          list265.list(function(results265) {
            node1723.empty();
            for(var i2212 = 0; i2212 < results265.length; i2212++) {
              (function() {
                var iternode265 = $("<span>");
                node1723.append(iternode265);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results265), i2212), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results265), i2212), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results265), i2212), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp8868 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp8868.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp8868.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp8868.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp8868.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp8867 = mobl.ref(result__);
                
                var nodes9026 = $("<span>");
                iternode265.append(nodes9026);
                subs__.addSub((mobl.span)(tmp8868, mobl.ref(null), tmp8867, mobl.ref(null), function(_, callback) {
                  var root10558 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9027 = $("<span>");
                  root10558.append(nodes9027);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root10559 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root10559); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9027;
                    nodes9027 = node.contents();
                    oldNodes.replaceWith(nodes9027);
                  }));
                  callback(root10558); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9026;
                  nodes9026 = node.contents();
                  oldNodes.replaceWith(nodes9026);
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
        
        callback(root10557); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9025;
        nodes9025 = node.contents();
        oldNodes.replaceWith(nodes9025);
      }));
      
      var node1724 = mobl.loadingSpan();
      root10556.append(node1724);
      var list266;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList266 = function() {
        var subs__ = listSubs__;
        list266 = tabs.get();
        list266.list(function(results266) {
          node1724.empty();
          for(var i2213 = 0; i2213 < results266.length; i2213++) {
            (function() {
              var iternode266 = $("<span>");
              node1724.append(iternode266);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results266), i2213), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results266), i2213), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results266), i2213), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp8869 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp8869.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp8869.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp8869.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp8869.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes9028 = $("<span>");
              iternode266.append(nodes9028);
              subs__.addSub((mobl.block)(tmp8869, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10560 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9029 = $("<span>");
                root10560.append(nodes9029);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root10561 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9030 = $("<span>");
                  root10561.append(nodes9030);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl672();
                  }));
                  
                  function renderControl672() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root10562 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10562); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9030;
                      nodes9030 = node.contents();
                      oldNodes.replaceWith(nodes9030);
                    }));
                  }
                  renderControl672();
                  callback(root10561); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9029;
                  nodes9029 = node.contents();
                  oldNodes.replaceWith(nodes9029);
                }));
                callback(root10560); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9028;
                nodes9028 = node.contents();
                oldNodes.replaceWith(nodes9028);
              }));
              
              var oldNodes = iternode266;
              iternode266 = iternode266.contents();
              oldNodes.replaceWith(iternode266);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list266.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList266(true); }));
        });
      };
      renderList266();
      
      callback(root10556); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root10563 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1725 = $("<div>");
  
  var ref1713 = mobl.ref(ui.searchboxStyle);
  if(ref1713.get() !== null) {
    node1725.attr('class', ref1713.get());
    subs__.addSub(ref1713.addEventListener('change', function(_, ref, val) {
      node1725.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1713.rebind());
  
  
  var node1726 = $("<input>");
  node1726.attr('type', "search");
  
  var ref1710 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1710.get() !== null) {
    node1726.attr('class', ref1710.get());
    subs__.addSub(ref1710.addEventListener('change', function(_, ref, val) {
      node1726.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1710.rebind());
  
  var ref1711 = placeholder;
  if(ref1711.get() !== null) {
    node1726.attr('placeholder', ref1711.get());
    subs__.addSub(ref1711.addEventListener('change', function(_, ref, val) {
      node1726.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1711.rebind());
  
  var ref1712 = s;
  node1726.val(""+ref1712.get());
  var ignore324 = false;
  subs__.addSub(ref1712.addEventListener('change', function(_, ref, val) {
    if(ignore324) return;
    node1726.val(""+val);
  }));
  subs__.addSub(ref1712.rebind());
  
  subs__.addSub(mobl.domBind(node1726, 'keyup change', function() {
    ignore324 = true;
    s.set(mobl.stringTomobl__String(node1726.val()));
    ignore324 = false;
  }));
  
  
  var val801 = onsearch.get();
  if(val801 !== null) {
    subs__.addSub(mobl.domBind(node1726, 'change', val801));
  }
  
  var val802 = onkeyup.get();
  if(val802 !== null) {
    subs__.addSub(mobl.domBind(node1726, 'keyup', val802));
  }
  node1726.attr('autocorrect', false);
  node1726.attr('autocapitalize', false);
  node1726.attr('autocomplete', false);
  
  node1725.append(node1726);
  root10563.append(node1725);
  callback(root10563); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root10564 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1714 = mobl.ref(ui.contextMenuStyle);
  if(ref1714.get() !== null) {
    menu.attr('class', ref1714.get());
    subs__.addSub(ref1714.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1714.rebind());
  
  var nodes9031 = $("<span>");
  menu.append(nodes9031);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl673();
  }));
  
  function renderControl673() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10565 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10565); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9031;
      nodes9031 = node.contents();
      oldNodes.replaceWith(nodes9031);
    }));
  }
  renderControl673();
  root10564.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val803 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp8913 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val803 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val803));
  }
  
  root10564.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root10564); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root10566 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp8897 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp8897.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1727 = $("<span>");
  root10566.append(node1727);
  var condSubs428 = new mobl.CompSubscription();
  subs__.addSub(condSubs428);
  var oldValue428;
  var renderCond428 = function() {
    var value1040 = tmp8897.get();
    if(oldValue428 === value1040) return;
    oldValue428 = value1040;
    var subs__ = condSubs428;
    subs__.unsubscribe();
    node1727.empty();
    if(value1040) {
      items.get().one(function(result__) {
        var tmp8914 = result__;
        var current = mobl.ref(result__);
        
        var node1728 = $("<div>");
        node1728.attr('width', "100%");
        
        
        var node1729 = $("<div>");
        node1729.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes9034 = $("<span>");
        node1729.append(nodes9034);
        subs__.addSub((ui.group)(function(_, callback) {
          var root10569 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1732 = mobl.loadingSpan();
          root10569.append(node1732);
          var list267;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList267 = function() {
            var subs__ = listSubs__;
            list267 = items.get();
            list267.list(function(results267) {
              node1732.empty();
              for(var i2214 = 0; i2214 < results267.length; i2214++) {
                (function() {
                  var iternode267 = $("<span>");
                  node1732.append(iternode267);
                  var it;
                  it = mobl.ref(mobl.ref(results267), i2214);
                  var result__ = it.get() == current.get();
                  var tmp8875 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8875.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8875.set(it.get() == current.get());
                  }));
                  
                  
                  var node1733 = $("<span>");
                  iternode267.append(node1733);
                  var condSubs430 = new mobl.CompSubscription();
                  subs__.addSub(condSubs430);
                  var oldValue430;
                  var renderCond430 = function() {
                    var value1042 = tmp8875.get();
                    if(oldValue430 === value1042) return;
                    oldValue430 = value1042;
                    var subs__ = condSubs430;
                    subs__.unsubscribe();
                    node1733.empty();
                    if(value1042) {
                      var nodes9035 = $("<span>");
                      node1733.append(nodes9035);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root10570 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes9036 = $("<span>");
                        root10570.append(nodes9036);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl675();
                        }));
                        
                        function renderControl675() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root10571 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root10571); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes9036;
                            nodes9036 = node.contents();
                            oldNodes.replaceWith(nodes9036);
                          }));
                        }
                        renderControl675();
                        callback(root10570); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9035;
                        nodes9035 = node.contents();
                        oldNodes.replaceWith(nodes9035);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp8874 = mobl.ref(result__);
                      
                      var nodes9037 = $("<span>");
                      node1733.append(nodes9037);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8874, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root10572 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes9038 = $("<span>");
                        root10572.append(nodes9038);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl676();
                        }));
                        
                        function renderControl676() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root10573 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root10573); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes9038;
                            nodes9038 = node.contents();
                            oldNodes.replaceWith(nodes9038);
                          }));
                        }
                        renderControl676();
                        callback(root10572); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9037;
                        nodes9037 = node.contents();
                        oldNodes.replaceWith(nodes9037);
                      }));
                      
                      
                    }
                  };
                  renderCond430();
                  subs__.addSub(tmp8875.addEventListener('change', function() {
                    renderCond430();
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
          
          callback(root10569); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9034;
          nodes9034 = node.contents();
          oldNodes.replaceWith(nodes9034);
        }));
        node1728.append(node1729);
        
        var node1730 = $("<div>");
        node1730.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1731 = $("<span>");
        node1730.append(node1731);
        var condSubs429 = new mobl.CompSubscription();
        subs__.addSub(condSubs429);
        var oldValue429;
        var renderCond429 = function() {
          var value1041 = current.get();
          if(oldValue429 === value1041) return;
          oldValue429 = value1041;
          var subs__ = condSubs429;
          subs__.unsubscribe();
          node1731.empty();
          if(value1041) {
            var nodes9032 = $("<span>");
            node1731.append(nodes9032);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl674();
            }));
            
            function renderControl674() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root10567 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10567); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9032;
                nodes9032 = node.contents();
                oldNodes.replaceWith(nodes9032);
              }));
            }
            renderControl674();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp8876 = mobl.ref(result__);
            
            var nodes9033 = $("<span>");
            node1731.append(nodes9033);
            subs__.addSub((mobl.label)(tmp8876, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10568 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root10568); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9033;
              nodes9033 = node.contents();
              oldNodes.replaceWith(nodes9033);
            }));
            
            
          }
        };
        renderCond429();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond429();
        }));
        
        node1728.append(node1730);
        node1727.append(node1728);
        
        
        
        
        
        
      });
    } else {
      var nodes9039 = $("<span>");
      node1727.append(nodes9039);
      subs__.addSub((ui.group)(function(_, callback) {
        var root10574 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1734 = mobl.loadingSpan();
        root10574.append(node1734);
        var list268;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList268 = function() {
          var subs__ = listSubs__;
          list268 = items.get();
          list268.list(function(results268) {
            node1734.empty();
            for(var i2215 = 0; i2215 < results268.length; i2215++) {
              (function() {
                var iternode268 = $("<span>");
                node1734.append(iternode268);
                var it;
                it = mobl.ref(mobl.ref(results268), i2215);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp8915 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp8870 = mobl.ref(result__);
                
                var nodes9040 = $("<span>");
                iternode268.append(nodes9040);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8870, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10575 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9041 = $("<span>");
                  root10575.append(nodes9041);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl677();
                  }));
                  
                  function renderControl677() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root10576 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10576); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9041;
                      nodes9041 = node.contents();
                      oldNodes.replaceWith(nodes9041);
                    }));
                  }
                  renderControl677();
                  callback(root10575); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9040;
                  nodes9040 = node.contents();
                  oldNodes.replaceWith(nodes9040);
                }));
                
                var oldNodes = iternode268;
                iternode268 = iternode268.contents();
                oldNodes.replaceWith(iternode268);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list268.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList268(true); }));
          });
        };
        renderList268();
        
        callback(root10574); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9039;
        nodes9039 = node.contents();
        oldNodes.replaceWith(nodes9039);
      }));
      
      
    }
  };
  renderCond428();
  subs__.addSub(tmp8897.addEventListener('change', function() {
    renderCond428();
  }));
  
  callback(root10566); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root10577 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp8873 = mobl.ref(result__);
  
  var nodes9042 = $("<span>");
  root10577.append(nodes9042);
  subs__.addSub((ui.header)(tmp8873, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10578 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8872 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8871 = mobl.ref(result__);
    
    var nodes9043 = $("<span>");
    root10578.append(nodes9043);
    subs__.addSub((ui.backButton)(tmp8871, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8872, function(_, callback) {
      var root10579 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10579); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9043;
      nodes9043 = node.contents();
      oldNodes.replaceWith(nodes9043);
    }));
    callback(root10578); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9042;
    nodes9042 = node.contents();
    oldNodes.replaceWith(nodes9042);
  }));
  var nodes9044 = $("<span>");
  root10577.append(nodes9044);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl678();
  }));
  
  function renderControl678() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root10580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10580); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9044;
      nodes9044 = node.contents();
      oldNodes.replaceWith(nodes9044);
    }));
  }
  renderControl678();
  callback(root10577); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root10581 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes9045 = $("<span>");
  root10581.append(nodes9045);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10582 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1735 = mobl.loadingSpan();
    root10582.append(node1735);
    var list269;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList269 = function() {
      var subs__ = listSubs__;
      list269 = coll.get();
      list269.list(function(results269) {
        node1735.empty();
        for(var i2216 = 0; i2216 < results269.length; i2216++) {
          (function() {
            var iternode269 = $("<span>");
            node1735.append(iternode269);
            var it;
            it = mobl.ref(mobl.ref(results269), i2216);
            var result__ = it.get() == selected.get();
            var tmp8878 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp8878.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp8878.set(it.get() == selected.get());
            }));
            
            
            var node1736 = $("<span>");
            iternode269.append(node1736);
            var condSubs431 = new mobl.CompSubscription();
            subs__.addSub(condSubs431);
            var oldValue431;
            var renderCond431 = function() {
              var value1043 = tmp8878.get();
              if(oldValue431 === value1043) return;
              oldValue431 = value1043;
              var subs__ = condSubs431;
              subs__.unsubscribe();
              node1736.empty();
              if(value1043) {
                var nodes9046 = $("<span>");
                node1736.append(nodes9046);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10583 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9047 = $("<span>");
                  root10583.append(nodes9047);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl679();
                  }));
                  
                  function renderControl679() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root10584 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10584); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9047;
                      nodes9047 = node.contents();
                      oldNodes.replaceWith(nodes9047);
                    }));
                  }
                  renderControl679();
                  callback(root10583); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9046;
                  nodes9046 = node.contents();
                  oldNodes.replaceWith(nodes9046);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp8877 = mobl.ref(result__);
                
                var nodes9048 = $("<span>");
                node1736.append(nodes9048);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8877, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root10585 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9049 = $("<span>");
                  root10585.append(nodes9049);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl680();
                  }));
                  
                  function renderControl680() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root10586 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10586); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9049;
                      nodes9049 = node.contents();
                      oldNodes.replaceWith(nodes9049);
                    }));
                  }
                  renderControl680();
                  callback(root10585); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9048;
                  nodes9048 = node.contents();
                  oldNodes.replaceWith(nodes9048);
                }));
                
                
              }
            };
            renderCond431();
            subs__.addSub(tmp8878.addEventListener('change', function() {
              renderCond431();
            }));
            
            
            var oldNodes = iternode269;
            iternode269 = iternode269.contents();
            oldNodes.replaceWith(iternode269);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list269.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList269(true); }));
      });
    };
    renderList269();
    
    callback(root10582); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9045;
    nodes9045 = node.contents();
    oldNodes.replaceWith(nodes9045);
  }));
  callback(root10581); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root10587 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp8916 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp8879 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp8879.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp8879.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp8879.set(coll.get().limit(n.get()));
    }));
    
    
    var node1737 = mobl.loadingSpan();
    root10587.append(node1737);
    var list270;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList270 = function() {
      var subs__ = listSubs__;
      list270 = tmp8879.get();
      list270.list(function(results270) {
        node1737.empty();
        for(var i2217 = 0; i2217 < results270.length; i2217++) {
          (function() {
            var iternode270 = $("<span>");
            node1737.append(iternode270);
            var it;
            it = mobl.ref(mobl.ref(results270), i2217);
            var nodes9050 = $("<span>");
            iternode270.append(nodes9050);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl681();
            }));
            
            function renderControl681() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root10588 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10588); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9050;
                nodes9050 = node.contents();
                oldNodes.replaceWith(nodes9050);
              }));
            }
            renderControl681();
            
            var oldNodes = iternode270;
            iternode270 = iternode270.contents();
            oldNodes.replaceWith(iternode270);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list270.addEventListener('change', function() { listSubs__.unsubscribe(); renderList270(true); }));
        subs__.addSub(tmp8879.addEventListener('change', function() { listSubs__.unsubscribe(); renderList270(true); }));
      });
    };
    renderList270();
    
    var result__ = n.get() < total.get();
    var tmp8881 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp8881.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp8881.set(n.get() < total.get());
    }));
    
    
    var node1738 = $("<span>");
    root10587.append(node1738);
    var condSubs432 = new mobl.CompSubscription();
    subs__.addSub(condSubs432);
    var oldValue432;
    var renderCond432 = function() {
      var value1044 = tmp8881.get();
      if(oldValue432 === value1044) return;
      oldValue432 = value1044;
      var subs__ = condSubs432;
      subs__.unsubscribe();
      node1738.empty();
      if(value1044) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp8880 = mobl.ref(result__);
        
        var nodes9051 = $("<span>");
        node1738.append(nodes9051);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp8880, mobl.ref(null), function(_, callback) {
          var root10589 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes9052 = $("<span>");
          root10589.append(nodes9052);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root10590 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root10590); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes9052;
            nodes9052 = node.contents();
            oldNodes.replaceWith(nodes9052);
          }));
          callback(root10589); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9051;
          nodes9051 = node.contents();
          oldNodes.replaceWith(nodes9051);
        }));
        
        
      } else {
        
      }
    };
    renderCond432();
    subs__.addSub(tmp8881.addEventListener('change', function() {
      renderCond432();
    }));
    
    callback(root10587); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root10591 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9053 = $("<span>");
  root10591.append(nodes9053);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10592 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1739 = mobl.loadingSpan();
    root10592.append(node1739);
    var list271;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList271 = function() {
      var subs__ = listSubs__;
      list271 = items.get();
      list271.list(function(results271) {
        node1739.empty();
        for(var i2218 = 0; i2218 < results271.length; i2218++) {
          (function() {
            var iternode271 = $("<span>");
            node1739.append(iternode271);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results271), i2218), "_1");it = mobl.ref(mobl.ref(mobl.ref(results271), i2218), "_2");
            var nodes9054 = $("<span>");
            iternode271.append(nodes9054);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root10593 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9055 = $("<span>");
              root10593.append(nodes9055);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root10594 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10594); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9055;
                nodes9055 = node.contents();
                oldNodes.replaceWith(nodes9055);
              }));
              callback(root10593); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9054;
              nodes9054 = node.contents();
              oldNodes.replaceWith(nodes9054);
            }));
            
            var oldNodes = iternode271;
            iternode271 = iternode271.contents();
            oldNodes.replaceWith(iternode271);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list271.addEventListener('change', function() { listSubs__.unsubscribe(); renderList271(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList271(true); }));
      });
    };
    renderList271();
    
    callback(root10592); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9053;
    nodes9053 = node.contents();
    oldNodes.replaceWith(nodes9053);
  }));
  callback(root10591); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root10595 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1249) {
    coll1249 = coll1249.reverse();
    function processOne331() {
      var it;
      it = coll1249.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1249.length > 0) processOne331(); else rest331();
      
    }
    function rest331() {
      var nodes9056 = $("<span>");
      root10595.append(nodes9056);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root10596 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp8882 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp8883 = mobl.ref(result__);
        
        var nodes9057 = $("<span>");
        root10596.append(nodes9057);
        subs__.addSub((ui.backButton)(tmp8883, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8882, function(_, callback) {
          var root10597 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10597); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9057;
          nodes9057 = node.contents();
          oldNodes.replaceWith(nodes9057);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1248) {
                           coll1248 = coll1248.reverse();
                           function processOne330() {
                             var checked;var it;
                             var tmp8918 = coll1248.pop();
                             checked = tmp8918._1;it = tmp8918._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1248.length > 0) processOne330(); else rest330();
                               
                             } else {
                               {
                                 
                                 if(coll1248.length > 0) processOne330(); else rest330();
                                 
                               }
                             }
                           }
                           function rest330() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1248.length > 0) processOne330(); else rest330();
                         });
                         
                       };
        var tmp8884 = mobl.ref(result__);
        
        var nodes9058 = $("<span>");
        root10596.append(nodes9058);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8884, function(_, callback) {
          var root10598 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10598); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9058;
          nodes9058 = node.contents();
          oldNodes.replaceWith(nodes9058);
        }));
        callback(root10596); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9056;
        nodes9056 = node.contents();
        oldNodes.replaceWith(nodes9056);
      }));
      var nodes9059 = $("<span>");
      root10595.append(nodes9059);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root10599 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10599); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9059;
        nodes9059 = node.contents();
        oldNodes.replaceWith(nodes9059);
      }));
      callback(root10595); return subs__;
      
      
    }
    if(coll1249.length > 0) processOne331(); else rest331();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root10600 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes9060 = $("<span>");
  root10600.append(nodes9060);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10601 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10601); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9060;
    nodes9060 = node.contents();
    oldNodes.replaceWith(nodes9060);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp8885 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp8885.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp8885.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp8885.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp8885.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp8885.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes9061 = $("<span>");
  root10600.append(nodes9061);
  subs__.addSub((ui.masterDetail)(tmp8885, masterItem, detailItem, function(_, callback) {
    var root10602 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10602); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9061;
    nodes9061 = node.contents();
    oldNodes.replaceWith(nodes9061);
  }));
  callback(root10600); return subs__;
  
  
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
  var root10603 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes9062 = $("<span>");
  root10603.append(nodes9062);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10604 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1740 = mobl.loadingSpan();
    root10604.append(node1740);
    var list272;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList272 = function() {
      var subs__ = listSubs__;
      list272 = sections.get();
      list272.list(function(results272) {
        node1740.empty();
        for(var i2219 = 0; i2219 < results272.length; i2219++) {
          (function() {
            var iternode272 = $("<span>");
            node1740.append(iternode272);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results272), i2219), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results272), i2219), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp8887 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8887.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8887.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp8887.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp8887.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp8886 = mobl.ref(result__);
            
            var nodes9063 = $("<span>");
            iternode272.append(nodes9063);
            subs__.addSub((mobl.span)(tmp8887, mobl.ref(null), tmp8886, mobl.ref(null), function(_, callback) {
              var root10605 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9064 = $("<span>");
              root10605.append(nodes9064);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10606 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10606); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9064;
                nodes9064 = node.contents();
                oldNodes.replaceWith(nodes9064);
              }));
              callback(root10605); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9063;
              nodes9063 = node.contents();
              oldNodes.replaceWith(nodes9063);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp8888 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8888.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8888.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp8888.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp8888.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes9065 = $("<span>");
            iternode272.append(nodes9065);
            subs__.addSub((mobl.block)(tmp8888, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10607 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9066 = $("<span>");
              root10607.append(nodes9066);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl682();
              }));
              
              function renderControl682() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root10608 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10608); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9066;
                  nodes9066 = node.contents();
                  oldNodes.replaceWith(nodes9066);
                }));
              }
              renderControl682();
              callback(root10607); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9065;
              nodes9065 = node.contents();
              oldNodes.replaceWith(nodes9065);
            }));
            
            var oldNodes = iternode272;
            iternode272 = iternode272.contents();
            oldNodes.replaceWith(iternode272);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list272.addEventListener('change', function() { listSubs__.unsubscribe(); renderList272(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList272(true); }));
      });
    };
    renderList272();
    
    callback(root10604); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9062;
    nodes9062 = node.contents();
    oldNodes.replaceWith(nodes9062);
  }));
  callback(root10603); return subs__;
  
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
  var root10609 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1741 = $("<table>");
  
  var ref1715 = style;
  if(ref1715.get() !== null) {
    node1741.attr('class', ref1715.get());
    subs__.addSub(ref1715.addEventListener('change', function(_, ref, val) {
      node1741.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1715.rebind());
  
  var nodes9067 = $("<span>");
  node1741.append(nodes9067);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl683();
  }));
  
  function renderControl683() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10610); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9067;
      nodes9067 = node.contents();
      oldNodes.replaceWith(nodes9067);
    }));
  }
  renderControl683();
  root10609.append(node1741);
  callback(root10609); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root10611 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1742 = $("<tr>");
  
  var ref1716 = style;
  if(ref1716.get() !== null) {
    node1742.attr('class', ref1716.get());
    subs__.addSub(ref1716.addEventListener('change', function(_, ref, val) {
      node1742.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1716.rebind());
  
  var nodes9068 = $("<span>");
  node1742.append(nodes9068);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl684();
  }));
  
  function renderControl684() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10612 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10612); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9068;
      nodes9068 = node.contents();
      oldNodes.replaceWith(nodes9068);
    }));
  }
  renderControl684();
  root10611.append(node1742);
  callback(root10611); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root10613 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1743 = $("<td>");
  
  var ref1717 = width;
  if(ref1717.get() !== null) {
    node1743.attr('width', ref1717.get());
    subs__.addSub(ref1717.addEventListener('change', function(_, ref, val) {
      node1743.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1717.rebind());
  
  var ref1718 = style;
  if(ref1718.get() !== null) {
    node1743.attr('class', ref1718.get());
    subs__.addSub(ref1718.addEventListener('change', function(_, ref, val) {
      node1743.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1718.rebind());
  
  var nodes9069 = $("<span>");
  node1743.append(nodes9069);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl685();
  }));
  
  function renderControl685() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10614 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10614); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9069;
      nodes9069 = node.contents();
      oldNodes.replaceWith(nodes9069);
    }));
  }
  renderControl685();
  root10613.append(node1743);
  callback(root10613); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root10615 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1744 = $("<td>");
  
  var ref1719 = width;
  if(ref1719.get() !== null) {
    node1744.attr('width', ref1719.get());
    subs__.addSub(ref1719.addEventListener('change', function(_, ref, val) {
      node1744.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1719.rebind());
  
  var ref1720 = style;
  if(ref1720.get() !== null) {
    node1744.attr('class', ref1720.get());
    subs__.addSub(ref1720.addEventListener('change', function(_, ref, val) {
      node1744.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1720.rebind());
  
  var nodes9070 = $("<span>");
  node1744.append(nodes9070);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl686();
  }));
  
  function renderControl686() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10616); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9070;
      nodes9070 = node.contents();
      oldNodes.replaceWith(nodes9070);
    }));
  }
  renderControl686();
  root10615.append(node1744);
  callback(root10615); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root10617 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1745 = $("<td>");
  
  var ref1721 = width;
  if(ref1721.get() !== null) {
    node1745.attr('width', ref1721.get());
    subs__.addSub(ref1721.addEventListener('change', function(_, ref, val) {
      node1745.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1721.rebind());
  
  var ref1722 = style;
  if(ref1722.get() !== null) {
    node1745.attr('class', ref1722.get());
    subs__.addSub(ref1722.addEventListener('change', function(_, ref, val) {
      node1745.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1722.rebind());
  
  
  var node1746 = $("<strong>");
  
  var nodes9071 = $("<span>");
  node1746.append(nodes9071);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl687();
  }));
  
  function renderControl687() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10618 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10618); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9071;
      nodes9071 = node.contents();
      oldNodes.replaceWith(nodes9071);
    }));
  }
  renderControl687();
  node1745.append(node1746);
  root10617.append(node1745);
  callback(root10617); return subs__;
  
  
  
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
  items.list(function(coll1250) {
    coll1250 = coll1250.reverse();
    function processOne332() {
      var item;
      item = coll1250.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1250.length > 0) processOne332(); else rest332();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1250.length > 0) processOne332(); else rest332();
          
        }
      }
    }
    function rest332() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1250.length > 0) processOne332(); else rest332();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root10619 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp8898 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp8898.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1747 = $("<span>");
  root10619.append(node1747);
  var condSubs433 = new mobl.CompSubscription();
  subs__.addSub(condSubs433);
  var oldValue433;
  var renderCond433 = function() {
    var value1045 = tmp8898.get();
    if(oldValue433 === value1045) return;
    oldValue433 = value1045;
    var subs__ = condSubs433;
    subs__.unsubscribe();
    node1747.empty();
    if(value1045) {
      items.get().one(function(result__) {
        var tmp8920 = result__;
        var current = mobl.ref(result__);
        
        var node1748 = $("<div>");
        node1748.attr('width', "100%");
        
        
        var node1749 = $("<div>");
        node1749.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes9073 = $("<span>");
        node1749.append(nodes9073);
        subs__.addSub((ui.group)(function(_, callback) {
          var root10621 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1752 = mobl.loadingSpan();
          root10621.append(node1752);
          var list273;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList273 = function() {
            var subs__ = listSubs__;
            list273 = items.get();
            list273.list(function(results273) {
              node1752.empty();
              for(var i2220 = 0; i2220 < results273.length; i2220++) {
                (function() {
                  var iternode273 = $("<span>");
                  node1752.append(iternode273);
                  var it;
                  it = mobl.ref(mobl.ref(results273), i2220);
                  var result__ = it.get() == current.get();
                  var tmp8894 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8894.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8894.set(it.get() == current.get());
                  }));
                  
                  
                  var node1753 = $("<span>");
                  iternode273.append(node1753);
                  var condSubs435 = new mobl.CompSubscription();
                  subs__.addSub(condSubs435);
                  var oldValue435;
                  var renderCond435 = function() {
                    var value1047 = tmp8894.get();
                    if(oldValue435 === value1047) return;
                    oldValue435 = value1047;
                    var subs__ = condSubs435;
                    subs__.unsubscribe();
                    node1753.empty();
                    if(value1047) {
                      var nodes9074 = $("<span>");
                      node1753.append(nodes9074);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root10622 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp8926 = result__;
                          var tmp8891 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8924 = result__;
                              var result__ = tmp8924;
                              tmp8891.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8925 = result__;
                              var result__ = tmp8925;
                              tmp8891.set(result__);
                              
                            });
                          }));
                          
                          var nodes9075 = $("<span>");
                          root10622.append(nodes9075);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl689();
                          }));
                          
                          function renderControl689() {
                            subs__.addSub((masterItem.get())(it, tmp8891, function(elements, callback) {
                              var root10623 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root10623); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes9075;
                              nodes9075 = node.contents();
                              oldNodes.replaceWith(nodes9075);
                            }));
                          }
                          renderControl689();
                          callback(root10622); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9074;
                        nodes9074 = node.contents();
                        oldNodes.replaceWith(nodes9074);
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
                      var tmp8893 = mobl.ref(result__);
                      
                      var nodes9076 = $("<span>");
                      node1753.append(nodes9076);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8893, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root10624 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp8929 = result__;
                          var tmp8892 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8927 = result__;
                              var result__ = tmp8927;
                              tmp8892.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8928 = result__;
                              var result__ = tmp8928;
                              tmp8892.set(result__);
                              
                            });
                          }));
                          
                          var nodes9077 = $("<span>");
                          root10624.append(nodes9077);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl690();
                          }));
                          
                          function renderControl690() {
                            subs__.addSub((masterItem.get())(it, tmp8892, function(elements, callback) {
                              var root10625 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root10625); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes9077;
                              nodes9077 = node.contents();
                              oldNodes.replaceWith(nodes9077);
                            }));
                          }
                          renderControl690();
                          callback(root10624); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9076;
                        nodes9076 = node.contents();
                        oldNodes.replaceWith(nodes9076);
                      }));
                      
                      
                    }
                  };
                  renderCond435();
                  subs__.addSub(tmp8894.addEventListener('change', function() {
                    renderCond435();
                  }));
                  
                  
                  var oldNodes = iternode273;
                  iternode273 = iternode273.contents();
                  oldNodes.replaceWith(iternode273);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list273.addEventListener('change', function() { listSubs__.unsubscribe(); renderList273(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList273(true); }));
            });
          };
          renderList273();
          
          callback(root10621); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9073;
          nodes9073 = node.contents();
          oldNodes.replaceWith(nodes9073);
        }));
        node1748.append(node1749);
        
        var node1750 = $("<div>");
        node1750.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp8896 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp8896.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp8896.set(current.get() && ui.visible.get());
        }));
        
        
        var node1751 = $("<span>");
        node1750.append(node1751);
        var condSubs434 = new mobl.CompSubscription();
        subs__.addSub(condSubs434);
        var oldValue434;
        var renderCond434 = function() {
          var value1046 = tmp8896.get();
          if(oldValue434 === value1046) return;
          oldValue434 = value1046;
          var subs__ = condSubs434;
          subs__.unsubscribe();
          node1751.empty();
          if(value1046) {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp8923 = result__;
              var tmp8895 = mobl.ref(result__);
              subs__.addSub(current.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp8921 = result__;
                  var result__ = tmp8921;
                  tmp8895.set(result__);
                  
                });
              }));
              subs__.addSub(items.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp8922 = result__;
                  var result__ = tmp8922;
                  tmp8895.set(result__);
                  
                });
              }));
              
              var nodes9072 = $("<span>");
              node1751.append(nodes9072);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl688();
              }));
              
              function renderControl688() {
                subs__.addSub((detail.get())(current, tmp8895, function(elements, callback) {
                  var root10620 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10620); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9072;
                  nodes9072 = node.contents();
                  oldNodes.replaceWith(nodes9072);
                }));
              }
              renderControl688();
              
              
            });
          } else {
            
          }
        };
        renderCond434();
        subs__.addSub(tmp8896.addEventListener('change', function() {
          renderCond434();
        }));
        
        node1748.append(node1750);
        node1747.append(node1748);
        
        
        
        
        
        
      });
    } else {
      var nodes9078 = $("<span>");
      node1747.append(nodes9078);
      subs__.addSub((ui.group)(function(_, callback) {
        var root10626 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1754 = mobl.loadingSpan();
        root10626.append(node1754);
        var list274;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList274 = function() {
          var subs__ = listSubs__;
          list274 = items.get();
          list274.list(function(results274) {
            node1754.empty();
            for(var i2221 = 0; i2221 < results274.length; i2221++) {
              (function() {
                var iternode274 = $("<span>");
                node1754.append(iternode274);
                var it;
                it = mobl.ref(mobl.ref(results274), i2221);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = mobl.alert("Render detailScreen()!");
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp8935 = result__;
                                 var result__ = mobl.alert("Calling renderMaths()!");
                                 mobl.sleep(100, function(result__) {
                                   var tmp8936 = result__;
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp8937 = result__;
                                     var result__ = mobl.alert("Called renderMaths()!");
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 });
                                 });
                               };
                var tmp8890 = mobl.ref(result__);
                
                var nodes9079 = $("<span>");
                iternode274.append(nodes9079);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8890, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10627 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp8932 = result__;
                    var tmp8889 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp8930 = result__;
                        var result__ = tmp8930;
                        tmp8889.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp8931 = result__;
                        var result__ = tmp8931;
                        tmp8889.set(result__);
                        
                      });
                    }));
                    
                    var nodes9080 = $("<span>");
                    root10627.append(nodes9080);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl691();
                    }));
                    
                    function renderControl691() {
                      subs__.addSub((masterItem.get())(it, tmp8889, function(elements, callback) {
                        var root10628 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root10628); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9080;
                        nodes9080 = node.contents();
                        oldNodes.replaceWith(nodes9080);
                      }));
                    }
                    renderControl691();
                    mobl.sleep(100, function(result__) {
                      var tmp8933 = result__;
                      mathJAX.renderMaths(function(result__) {
                        var tmp8934 = result__;
                        callback(root10627); return subs__;
                      });
                    });
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9079;
                  nodes9079 = node.contents();
                  oldNodes.replaceWith(nodes9079);
                }));
                
                var oldNodes = iternode274;
                iternode274 = iternode274.contents();
                oldNodes.replaceWith(iternode274);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list274.addEventListener('change', function() { listSubs__.unsubscribe(); renderList274(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList274(true); }));
          });
        };
        renderList274();
        
        callback(root10626); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9078;
        nodes9078 = node.contents();
        oldNodes.replaceWith(nodes9078);
      }));
      
      
    }
  };
  renderCond433();
  subs__.addSub(tmp8898.addEventListener('change', function() {
    renderCond433();
  }));
  
  callback(root10619); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root10629 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9081 = $("<span>");
  root10629.append(nodes9081);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl692();
  }));
  
  function renderControl692() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root10630 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10630); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9081;
      nodes9081 = node.contents();
      oldNodes.replaceWith(nodes9081);
    }));
  }
  renderControl692();
  callback(root10629); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root10631 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9082 = $("<span>");
  root10631.append(nodes9082);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10632 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes9083 = $("<span>");
    root10632.append(nodes9083);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10633 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10633); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9083;
      nodes9083 = node.contents();
      oldNodes.replaceWith(nodes9083);
    }));
    callback(root10632); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9082;
    nodes9082 = node.contents();
    oldNodes.replaceWith(nodes9082);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes9084 = $("<span>");
  root10631.append(nodes9084);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root10634 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10634); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9084;
    nodes9084 = node.contents();
    oldNodes.replaceWith(nodes9084);
  }));
  callback(root10631); return subs__;
  
  
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
