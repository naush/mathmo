mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root1777 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node686 = $("<span>");
  root1777.append(node686);
  var condSubs167 = new mobl.CompSubscription();
  subs__.addSub(condSubs167);
  var oldValue167;
  var renderCond167 = function() {
    var value635 = value.get();
    if(oldValue167 === value635) return;
    oldValue167 = value635;
    var subs__ = condSubs167;
    subs__.unsubscribe();
    node686.empty();
    if(value635) {
      var nodes1298 = $("<span>");
      node686.append(nodes1298);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl310();
      }));
      
      function renderControl310() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1778 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1778); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1298;
          nodes1298 = node.contents();
          oldNodes.replaceWith(nodes1298);
        }));
      }
      renderControl310();
      
      
    } else {
      var nodes1299 = $("<span>");
      node686.append(nodes1299);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1779 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1300 = $("<span>");
        root1779.append(nodes1300);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1780 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1780); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1300;
          nodes1300 = node.contents();
          oldNodes.replaceWith(nodes1300);
        }));
        var nodes1301 = $("<span>");
        root1779.append(nodes1301);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1781 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1781); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1301;
          nodes1301 = node.contents();
          oldNodes.replaceWith(nodes1301);
        }));
        callback(root1779); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1299;
        nodes1299 = node.contents();
        oldNodes.replaceWith(nodes1299);
      }));
      
      
    }
  };
  renderCond167();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond167();
  }));
  
  callback(root1777); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root1782 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node687 = $("<div>");
  
  var ref710 = mobl.ref(ui.headerStyle);
  if(ref710.get() !== null) {
    node687.attr('class', ref710.get());
    subs__.addSub(ref710.addEventListener('change', function(_, ref, val) {
      node687.attr('class', val);
    }));
    
  }
  subs__.addSub(ref710.rebind());
  
  var val363 = onclick.get();
  if(val363 !== null) {
    subs__.addSub(mobl.domBind(node687, 'tap', val363));
  }
  
  var ref711 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref711.get() !== null) {
    node687.attr('style', ref711.get());
    subs__.addSub(ref711.addEventListener('change', function(_, ref, val) {
      node687.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node687.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref711.rebind());
  
  
  var node690 = $("<div>");
  
  var ref709 = mobl.ref(ui.headerContainerStyle);
  if(ref709.get() !== null) {
    node690.attr('class', ref709.get());
    subs__.addSub(ref709.addEventListener('change', function(_, ref, val) {
      node690.attr('class', val);
    }));
    
  }
  subs__.addSub(ref709.rebind());
  
  
  var node691 = $("<div>");
  
  var ref707 = text;
  node691.text(""+ref707.get());
  var ignore136 = false;
  subs__.addSub(ref707.addEventListener('change', function(_, ref, val) {
    if(ignore136) return;
    node691.text(""+val);
  }));
  subs__.addSub(ref707.rebind());
  
  
  var ref708 = mobl.ref(ui.headerTextStyle);
  if(ref708.get() !== null) {
    node691.attr('class', ref708.get());
    subs__.addSub(ref708.addEventListener('change', function(_, ref, val) {
      node691.attr('class', val);
    }));
    
  }
  subs__.addSub(ref708.rebind());
  
  node690.append(node691);
  node687.append(node690);
  var nodes1302 = $("<span>");
  node687.append(nodes1302);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl311();
  }));
  
  function renderControl311() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1783 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1783); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1302;
      nodes1302 = node.contents();
      oldNodes.replaceWith(nodes1302);
    }));
  }
  renderControl311();
  root1782.append(node687);
  
  var node688 = $("<span>");
  root1782.append(node688);
  var condSubs168 = new mobl.CompSubscription();
  subs__.addSub(condSubs168);
  var oldValue168;
  var renderCond168 = function() {
    var value636 = fixedPosition.get();
    if(oldValue168 === value636) return;
    oldValue168 = value636;
    var subs__ = condSubs168;
    subs__.unsubscribe();
    node688.empty();
    if(value636) {
      
      var node689 = $("<div>");
      node689.attr('id', "hello");
      node689.attr('style', "height: 2.9em;");
      
      node688.append(node689);
      
      
    } else {
      
    }
  };
  renderCond168();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond168();
  }));
  
  callback(root1782); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1784 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref712 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref712.get() !== null) {
    sp.attr('class', ref712.get());
    subs__.addSub(ref712.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref712.rebind());
  
  var val364 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val364 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val364));
  }
  
  var val365 = function(event, callback) {
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
  if(val365 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val365));
  }
  
  var val366 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after108(result__) {
                    var tmp1216 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after108);if(result__ !== undefined) after108(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val366 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val366));
  }
  
  var val367 = function(event, callback) {
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
  if(val367 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val367));
  }
  
  var ref713 = text;
  sp.text(""+ref713.get());
  var ignore137 = false;
  subs__.addSub(ref713.addEventListener('change', function(_, ref, val) {
    if(ignore137) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref713.rebind());
  
  
  root1784.append(sp);
  callback(root1784); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1785 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1303 = $("<span>");
  root1785.append(nodes1303);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1786 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1786); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1303;
    nodes1303 = node.contents();
    oldNodes.replaceWith(nodes1303);
  }));
  callback(root1785); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root1787 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1304 = $("<span>");
  root1787.append(nodes1304);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1788 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1788); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1304;
    nodes1304 = node.contents();
    oldNodes.replaceWith(nodes1304);
  }));
  callback(root1787); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root1789 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node692 = $("<ul>");
  
  var ref714 = mobl.ref(ui.groupStyle);
  if(ref714.get() !== null) {
    node692.attr('class', ref714.get());
    subs__.addSub(ref714.addEventListener('change', function(_, ref, val) {
      node692.attr('class', val);
    }));
    
  }
  subs__.addSub(ref714.rebind());
  
  var nodes1305 = $("<span>");
  node692.append(nodes1305);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl312();
  }));
  
  function renderControl312() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1790 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1790); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1305;
      nodes1305 = node.contents();
      oldNodes.replaceWith(nodes1305);
    }));
  }
  renderControl312();
  root1789.append(node692);
  callback(root1789); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root1791 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node693 = $("<img>");
  
  var ref715 = url;
  if(ref715.get() !== null) {
    node693.attr('src', ref715.get());
    subs__.addSub(ref715.addEventListener('change', function(_, ref, val) {
      node693.attr('src', val);
    }));
    
  }
  subs__.addSub(ref715.rebind());
  
  var ref716 = width;
  if(ref716.get() !== null) {
    node693.attr('width', ref716.get());
    subs__.addSub(ref716.addEventListener('change', function(_, ref, val) {
      node693.attr('width', val);
    }));
    
  }
  subs__.addSub(ref716.rebind());
  
  var ref717 = height;
  if(ref717.get() !== null) {
    node693.attr('height', ref717.get());
    subs__.addSub(ref717.addEventListener('change', function(_, ref, val) {
      node693.attr('height', val);
    }));
    
  }
  subs__.addSub(ref717.rebind());
  
  var ref718 = style;
  if(ref718.get() !== null) {
    node693.attr('class', ref718.get());
    subs__.addSub(ref718.addEventListener('change', function(_, ref, val) {
      node693.attr('class', val);
    }));
    
  }
  subs__.addSub(ref718.rebind());
  
  var val368 = onclick.get();
  if(val368 !== null) {
    subs__.addSub(mobl.domBind(node693, 'tap', val368));
  }
  
  var ref719 = valign;
  if(ref719.get() !== null) {
    node693.attr('valign', ref719.get());
    subs__.addSub(ref719.addEventListener('change', function(_, ref, val) {
      node693.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref719.rebind());
  
  var ref720 = align;
  if(ref720.get() !== null) {
    node693.attr('align', ref720.get());
    subs__.addSub(ref720.addEventListener('change', function(_, ref, val) {
      node693.attr('align', val);
    }));
    
  }
  subs__.addSub(ref720.rebind());
  
  root1791.append(node693);
  callback(root1791); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root1792 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref721 = mobl.ref(ui.itemStyle);
  if(ref721.get() !== null) {
    el.attr('class', ref721.get());
    subs__.addSub(ref721.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref721.rebind());
  
  var ref722 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref722.get() !== null) {
    el.attr('class', ref722.get());
    subs__.addSub(ref722.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref722.rebind());
  
  var val369 = onswipe.get();
  if(val369 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val369));
  }
  
  var val370 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1217 = result__;
                                           function after109(result__) {
                                             var tmp1218 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after109);if(result__ !== undefined) after109(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1219 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val370 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val370));
  }
  
  var nodes1306 = $("<span>");
  el.append(nodes1306);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl313();
  }));
  
  function renderControl313() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1793); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1306;
      nodes1306 = node.contents();
      oldNodes.replaceWith(nodes1306);
    }));
  }
  renderControl313();
  root1792.append(el);
  callback(root1792); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root1794 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node694 = $("<input>");
  node694.attr('type', "checkbox");
  
  var ref724 = b;
  node694.attr('checked', !!ref724.get());
  subs__.addSub(ref724.addEventListener('change', function(_, ref, val) {
    if(ref === ref724) node694.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node694, 'change', function() {
    b.set(!!node694.attr('checked'));
  }));
  
  var val372 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val372 !== null) {
    subs__.addSub(mobl.domBind(node694, 'tap', val372));
  }
  
  var val373 = onchange.get();
  if(val373 !== null) {
    subs__.addSub(mobl.domBind(node694, 'change', val373));
  }
  
  root1794.append(node694);
  
  root1794.append(" ");
  
  var node695 = $("<span>");
  
  var ref723 = label;
  node695.text(""+ref723.get());
  var ignore138 = false;
  subs__.addSub(ref723.addEventListener('change', function(_, ref, val) {
    if(ignore138) return;
    node695.text(""+val);
  }));
  subs__.addSub(ref723.rebind());
  
  
  var val371 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after110(result__) {
                    var tmp1220 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after110);if(result__ !== undefined) after110(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val371 !== null) {
    subs__.addSub(mobl.domBind(node695, 'tap', val371));
  }
  
  root1794.append(node695);
  callback(root1794); return subs__;
  
  
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
  var root1795 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node696 = $("<span>");
  root1795.append(node696);
  var condSubs169 = new mobl.CompSubscription();
  subs__.addSub(condSubs169);
  var oldValue169;
  var renderCond169 = function() {
    var value637 = label.get();
    if(oldValue169 === value637) return;
    oldValue169 = value637;
    var subs__ = condSubs169;
    subs__.unsubscribe();
    node696.empty();
    if(value637) {
      var nodes1307 = $("<span>");
      node696.append(nodes1307);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1796); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1307;
        nodes1307 = node.contents();
        oldNodes.replaceWith(nodes1307);
      }));
      
      
    } else {
      
    }
  };
  renderCond169();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond169();
  }));
  
  
  var node697 = $("<span>");
  root1795.append(node697);
  var condSubs170 = new mobl.CompSubscription();
  subs__.addSub(condSubs170);
  var oldValue170;
  var renderCond170 = function() {
    var value638 = validator.get();
    if(oldValue170 === value638) return;
    oldValue170 = value638;
    var subs__ = condSubs170;
    subs__.unsubscribe();
    node697.empty();
    if(value638) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after114(result__) {
        var tmp1221 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1222 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node698 = $("<input>");
        
        var ref725 = inputType;
        if(ref725.get() !== null) {
          node698.attr('type', ref725.get());
          subs__.addSub(ref725.addEventListener('change', function(_, ref, val) {
            node698.attr('type', val);
          }));
          
        }
        subs__.addSub(ref725.rebind());
        
        var ref726 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref726.get() !== null) {
          node698.attr('class', ref726.get());
          subs__.addSub(ref726.addEventListener('change', function(_, ref, val) {
            node698.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node698.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node698.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node698.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref726.rebind());
        
        var ref727 = placeholder;
        if(ref727.get() !== null) {
          node698.attr('placeholder', ref727.get());
          subs__.addSub(ref727.addEventListener('change', function(_, ref, val) {
            node698.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref727.rebind());
        
        var ref728 = temp;
        node698.val(""+ref728.get());
        var ignore139 = false;
        subs__.addSub(ref728.addEventListener('change', function(_, ref, val) {
          if(ignore139) return;
          node698.val(""+val);
        }));
        subs__.addSub(ref728.rebind());
        
        subs__.addSub(mobl.domBind(node698, 'keyup change', function() {
          ignore139 = true;
          temp.set(mobl.stringTomobl__String(node698.val()));
          ignore139 = false;
        }));
        
        
        var val374 = onchange.get();
        if(val374 !== null) {
          subs__.addSub(mobl.domBind(node698, 'change', val374));
        }
        
        var val375 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after111(result__) {
                          var tmp1223 = result__;
                          function after112(result__) {
                            var tmp1224 = result__;
                            var result__ = tmp1224;
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
                          var result__ = validator.get()(temp.get(), after112);if(result__ !== undefined) after112(result__);
                        }
                        var result__ = onkeyup.get()(event, after111);if(result__ !== undefined) after111(result__);
                      } else {
                        {
                          function after113(result__) {
                            var tmp1224 = result__;
                            var result__ = tmp1224;
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
                          var result__ = validator.get()(temp.get(), after113);if(result__ !== undefined) after113(result__);
                        }
                      }
                    };
        if(val375 !== null) {
          subs__.addSub(mobl.domBind(node698, 'keyup', val375));
        }
        
        var val376 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val376 !== null) {
          subs__.addSub(mobl.domBind(node698, 'blur', val376));
        }
        
        node697.append(node698);
        var nodes1308 = $("<span>");
        node697.append(nodes1308);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1797 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1797); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1308;
          nodes1308 = node.contents();
          oldNodes.replaceWith(nodes1308);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after114);if(result__ !== undefined) after114(result__);
    } else {
      
      var node699 = $("<input>");
      
      var ref729 = inputType;
      if(ref729.get() !== null) {
        node699.attr('type', ref729.get());
        subs__.addSub(ref729.addEventListener('change', function(_, ref, val) {
          node699.attr('type', val);
        }));
        
      }
      subs__.addSub(ref729.rebind());
      
      var ref730 = style;
      if(ref730.get() !== null) {
        node699.attr('class', ref730.get());
        subs__.addSub(ref730.addEventListener('change', function(_, ref, val) {
          node699.attr('class', val);
        }));
        
      }
      subs__.addSub(ref730.rebind());
      
      var ref731 = placeholder;
      if(ref731.get() !== null) {
        node699.attr('placeholder', ref731.get());
        subs__.addSub(ref731.addEventListener('change', function(_, ref, val) {
          node699.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref731.rebind());
      
      var ref732 = s;
      node699.val(""+ref732.get());
      var ignore140 = false;
      subs__.addSub(ref732.addEventListener('change', function(_, ref, val) {
        if(ignore140) return;
        node699.val(""+val);
      }));
      subs__.addSub(ref732.rebind());
      
      subs__.addSub(mobl.domBind(node699, 'keyup change', function() {
        ignore140 = true;
        s.set(mobl.stringTomobl__String(node699.val()));
        ignore140 = false;
      }));
      
      
      var val377 = onchange.get();
      if(val377 !== null) {
        subs__.addSub(mobl.domBind(node699, 'change', val377));
      }
      
      var val378 = onkeyup.get();
      if(val378 !== null) {
        subs__.addSub(mobl.domBind(node699, 'keyup', val378));
      }
      
      var val379 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val379 !== null) {
        subs__.addSub(mobl.domBind(node699, 'blur', val379));
      }
      
      node697.append(node699);
      
      
    }
  };
  renderCond170();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond170();
  }));
  
  callback(root1795); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1798 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1309 = $("<span>");
  root1798.append(nodes1309);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1799 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1799); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1309;
    nodes1309 = node.contents();
    oldNodes.replaceWith(nodes1309);
  }));
  callback(root1798); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1800 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1310 = $("<span>");
  root1800.append(nodes1310);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1801 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1801); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1310;
    nodes1310 = node.contents();
    oldNodes.replaceWith(nodes1310);
  }));
  callback(root1800); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root1802 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node700 = $("<span>");
  root1802.append(node700);
  var condSubs171 = new mobl.CompSubscription();
  subs__.addSub(condSubs171);
  var oldValue171;
  var renderCond171 = function() {
    var value639 = label.get();
    if(oldValue171 === value639) return;
    oldValue171 = value639;
    var subs__ = condSubs171;
    subs__.unsubscribe();
    node700.empty();
    if(value639) {
      var nodes1311 = $("<span>");
      node700.append(nodes1311);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1803 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1803); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1311;
        nodes1311 = node.contents();
        oldNodes.replaceWith(nodes1311);
      }));
      
      
    } else {
      
    }
  };
  renderCond171();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond171();
  }));
  
  
  var node701 = $("<input>");
  node701.attr('type', "range");
  
  var ref733 = n;
  node701.val(""+ref733.get());
  var ignore141 = false;
  subs__.addSub(ref733.addEventListener('change', function(_, ref, val) {
    if(ignore141) return;
    node701.val(""+val);
  }));
  subs__.addSub(ref733.rebind());
  
  subs__.addSub(mobl.domBind(node701, 'keyup change', function() {
    ignore141 = true;
    n.set(mobl.stringTomobl__Num(node701.val()));
    ignore141 = false;
  }));
  
  
  var ref734 = min;
  if(ref734.get() !== null) {
    node701.attr('min', ref734.get());
    subs__.addSub(ref734.addEventListener('change', function(_, ref, val) {
      node701.attr('min', val);
    }));
    
  }
  subs__.addSub(ref734.rebind());
  
  var ref735 = max;
  if(ref735.get() !== null) {
    node701.attr('max', ref735.get());
    subs__.addSub(ref735.addEventListener('change', function(_, ref, val) {
      node701.attr('max', val);
    }));
    
  }
  subs__.addSub(ref735.rebind());
  
  var ref736 = step;
  if(ref736.get() !== null) {
    node701.attr('step', ref736.get());
    subs__.addSub(ref736.addEventListener('change', function(_, ref, val) {
      node701.attr('step', val);
    }));
    
  }
  subs__.addSub(ref736.rebind());
  node701.attr('style', "width: 99%;");
  
  var val380 = onchange.get();
  if(val380 !== null) {
    subs__.addSub(mobl.domBind(node701, 'change', val380));
  }
  
  var val381 = onkeyup.get();
  if(val381 !== null) {
    subs__.addSub(mobl.domBind(node701, 'keyup', val381));
  }
  
  var ref737 = placeholder;
  if(ref737.get() !== null) {
    node701.attr('placeholder', ref737.get());
    subs__.addSub(ref737.addEventListener('change', function(_, ref, val) {
      node701.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref737.rebind());
  
  root1802.append(node701);
  callback(root1802); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root1804 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after115(result__) {
      var tmp1225 = result__;
      var result__ = tmp1225;
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
    var result__ = validator.get()(n2, after115);if(result__ !== undefined) after115(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1312 = $("<span>");
  root1804.append(nodes1312);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1805 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1805); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1312;
    nodes1312 = node.contents();
    oldNodes.replaceWith(nodes1312);
  }));
  callback(root1804); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root1806 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node702 = $("<span>");
  root1806.append(node702);
  var condSubs172 = new mobl.CompSubscription();
  subs__.addSub(condSubs172);
  var oldValue172;
  var renderCond172 = function() {
    var value640 = label.get();
    if(oldValue172 === value640) return;
    oldValue172 = value640;
    var subs__ = condSubs172;
    subs__.unsubscribe();
    node702.empty();
    if(value640) {
      
      var node703 = $("<span>");
      node703.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref741 = label;
      node703.text(""+ref741.get());
      var ignore143 = false;
      subs__.addSub(ref741.addEventListener('change', function(_, ref, val) {
        if(ignore143) return;
        node703.text(""+val);
      }));
      subs__.addSub(ref741.rebind());
      
      
      node702.append(node703);
      
      var node704 = $("<span>");
      node704.attr('style', "float: left");
      
      
      var node705 = $("<input>");
      node705.attr('type', "password");
      
      var ref738 = style;
      if(ref738.get() !== null) {
        node705.attr('class', ref738.get());
        subs__.addSub(ref738.addEventListener('change', function(_, ref, val) {
          node705.attr('class', val);
        }));
        
      }
      subs__.addSub(ref738.rebind());
      
      var ref739 = placeholder;
      if(ref739.get() !== null) {
        node705.attr('placeholder', ref739.get());
        subs__.addSub(ref739.addEventListener('change', function(_, ref, val) {
          node705.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref739.rebind());
      
      var ref740 = s;
      node705.val(""+ref740.get());
      var ignore142 = false;
      subs__.addSub(ref740.addEventListener('change', function(_, ref, val) {
        if(ignore142) return;
        node705.val(""+val);
      }));
      subs__.addSub(ref740.rebind());
      
      subs__.addSub(mobl.domBind(node705, 'keyup change', function() {
        ignore142 = true;
        s.set(mobl.stringTomobl__String(node705.val()));
        ignore142 = false;
      }));
      
      
      var val382 = onchange.get();
      if(val382 !== null) {
        subs__.addSub(mobl.domBind(node705, 'change', val382));
      }
      
      var val383 = onkeyup.get();
      if(val383 !== null) {
        subs__.addSub(mobl.domBind(node705, 'keyup', val383));
      }
      
      var val384 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val384 !== null) {
        subs__.addSub(mobl.domBind(node705, 'blur', val384));
      }
      
      node704.append(node705);
      node702.append(node704);
      
      
      
      
    } else {
      
      var node706 = $("<input>");
      node706.attr('type', "password");
      
      var ref742 = style;
      if(ref742.get() !== null) {
        node706.attr('class', ref742.get());
        subs__.addSub(ref742.addEventListener('change', function(_, ref, val) {
          node706.attr('class', val);
        }));
        
      }
      subs__.addSub(ref742.rebind());
      
      var ref743 = placeholder;
      if(ref743.get() !== null) {
        node706.attr('placeholder', ref743.get());
        subs__.addSub(ref743.addEventListener('change', function(_, ref, val) {
          node706.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref743.rebind());
      
      var ref744 = s;
      node706.val(""+ref744.get());
      var ignore144 = false;
      subs__.addSub(ref744.addEventListener('change', function(_, ref, val) {
        if(ignore144) return;
        node706.val(""+val);
      }));
      subs__.addSub(ref744.rebind());
      
      subs__.addSub(mobl.domBind(node706, 'keyup change', function() {
        ignore144 = true;
        s.set(mobl.stringTomobl__String(node706.val()));
        ignore144 = false;
      }));
      
      
      var val385 = onchange.get();
      if(val385 !== null) {
        subs__.addSub(mobl.domBind(node706, 'change', val385));
      }
      
      var val386 = onkeyup.get();
      if(val386 !== null) {
        subs__.addSub(mobl.domBind(node706, 'keyup', val386));
      }
      
      var val387 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val387 !== null) {
        subs__.addSub(mobl.domBind(node706, 'blur', val387));
      }
      
      node702.append(node706);
      
      
    }
  };
  renderCond172();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond172();
  }));
  
  callback(root1806); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root1807 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref749 = style;
  if(ref749.get() !== null) {
    sel.attr('class', ref749.get());
    subs__.addSub(ref749.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref749.rebind());
  
  var val388 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after116(result__) {
                    var tmp1227 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after116);if(result__ !== undefined) after116(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val388 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val388));
  }
  
  
  var node707 = mobl.loadingSpan();
  sel.append(node707);
  var list130;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList130 = function() {
    var subs__ = listSubs__;
    list130 = options.get();
    list130.list(function(results130) {
      node707.empty();
      for(var i172 = 0; i172 < results130.length; i172++) {
        (function() {
          var iternode130 = $("<span>");
          node707.append(iternode130);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results130), i172), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results130), i172), "_2");
          
          var node708 = $("<option>");
          
          var ref745 = optionDescription;
          node708.text(""+ref745.get());
          var ignore145 = false;
          subs__.addSub(ref745.addEventListener('change', function(_, ref, val) {
            if(ignore145) return;
            node708.text(""+val);
          }));
          subs__.addSub(ref745.rebind());
          
          
          var ref746 = optionStyle;
          if(ref746.get() !== null) {
            node708.attr('class', ref746.get());
            subs__.addSub(ref746.addEventListener('change', function(_, ref, val) {
              node708.attr('class', val);
            }));
            
          }
          subs__.addSub(ref746.rebind());
          
          var ref747 = optionValue;
          if(ref747.get() !== null) {
            node708.attr('value', ref747.get());
            subs__.addSub(ref747.addEventListener('change', function(_, ref, val) {
              node708.attr('value', val);
            }));
            
          }
          subs__.addSub(ref747.rebind());
          
          var ref748 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref748.get() !== null) {
            node708.attr('selected', ref748.get());
            subs__.addSub(ref748.addEventListener('change', function(_, ref, val) {
              node708.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node708.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node708.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref748.rebind());
          
          iternode130.append(node708);
          
          var oldNodes = iternode130;
          iternode130 = iternode130.contents();
          oldNodes.replaceWith(iternode130);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list130.addEventListener('change', function() { listSubs__.unsubscribe(); renderList130(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList130(true); }));
    });
  };
  renderList130();
  
  root1807.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1807); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root1808 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1313 = $("<span>");
    root1808.append(nodes1313);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node709 = mobl.loadingSpan();
      root1809.append(node709);
      var list131;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList131 = function() {
        var subs__ = listSubs__;
        list131 = tabs.get();
        list131.list(function(results131) {
          node709.empty();
          for(var i173 = 0; i173 < results131.length; i173++) {
            (function() {
              var iternode131 = $("<span>");
              node709.append(iternode131);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results131), i173), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results131), i173), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results131), i173), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp1182 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1182.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1182.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp1182.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp1182.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp1181 = mobl.ref(result__);
              
              var nodes1314 = $("<span>");
              iternode131.append(nodes1314);
              subs__.addSub((mobl.span)(tmp1182, mobl.ref(null), tmp1181, mobl.ref(null), function(_, callback) {
                var root1810 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1315 = $("<span>");
                root1810.append(nodes1315);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1811 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1811); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1315;
                  nodes1315 = node.contents();
                  oldNodes.replaceWith(nodes1315);
                }));
                callback(root1810); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1314;
                nodes1314 = node.contents();
                oldNodes.replaceWith(nodes1314);
              }));
              
              var oldNodes = iternode131;
              iternode131 = iternode131.contents();
              oldNodes.replaceWith(iternode131);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list131.addEventListener('change', function() { listSubs__.unsubscribe(); renderList131(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList131(true); }));
        });
      };
      renderList131();
      
      callback(root1809); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1313;
      nodes1313 = node.contents();
      oldNodes.replaceWith(nodes1313);
    }));
    
    var node710 = mobl.loadingSpan();
    root1808.append(node710);
    var list132;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList132 = function() {
      var subs__ = listSubs__;
      list132 = tabs.get();
      list132.list(function(results132) {
        node710.empty();
        for(var i174 = 0; i174 < results132.length; i174++) {
          (function() {
            var iternode132 = $("<span>");
            node710.append(iternode132);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results132), i174), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results132), i174), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results132), i174), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp1183 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp1183.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1183.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp1183.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp1183.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1316 = $("<span>");
            iternode132.append(nodes1316);
            subs__.addSub((mobl.block)(tmp1183, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1812 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1317 = $("<span>");
              root1812.append(nodes1317);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1813 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1318 = $("<span>");
                root1813.append(nodes1318);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl314();
                }));
                
                function renderControl314() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1814 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1814); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1318;
                    nodes1318 = node.contents();
                    oldNodes.replaceWith(nodes1318);
                  }));
                }
                renderControl314();
                callback(root1813); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1317;
                nodes1317 = node.contents();
                oldNodes.replaceWith(nodes1317);
              }));
              callback(root1812); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1316;
              nodes1316 = node.contents();
              oldNodes.replaceWith(nodes1316);
            }));
            
            var oldNodes = iternode132;
            iternode132 = iternode132.contents();
            oldNodes.replaceWith(iternode132);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list132.addEventListener('change', function() { listSubs__.unsubscribe(); renderList132(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList132(true); }));
      });
    };
    renderList132();
    
    callback(root1808); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1313 = $("<span>");
      root1808.append(nodes1313);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1809 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node709 = mobl.loadingSpan();
        root1809.append(node709);
        var list131;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList131 = function() {
          var subs__ = listSubs__;
          list131 = tabs.get();
          list131.list(function(results131) {
            node709.empty();
            for(var i173 = 0; i173 < results131.length; i173++) {
              (function() {
                var iternode131 = $("<span>");
                node709.append(iternode131);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results131), i173), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results131), i173), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results131), i173), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp1182 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp1182.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp1182.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp1182.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp1182.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1181 = mobl.ref(result__);
                
                var nodes1314 = $("<span>");
                iternode131.append(nodes1314);
                subs__.addSub((mobl.span)(tmp1182, mobl.ref(null), tmp1181, mobl.ref(null), function(_, callback) {
                  var root1810 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1315 = $("<span>");
                  root1810.append(nodes1315);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1811 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1811); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1315;
                    nodes1315 = node.contents();
                    oldNodes.replaceWith(nodes1315);
                  }));
                  callback(root1810); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1314;
                  nodes1314 = node.contents();
                  oldNodes.replaceWith(nodes1314);
                }));
                
                var oldNodes = iternode131;
                iternode131 = iternode131.contents();
                oldNodes.replaceWith(iternode131);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list131.addEventListener('change', function() { listSubs__.unsubscribe(); renderList131(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList131(true); }));
          });
        };
        renderList131();
        
        callback(root1809); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1313;
        nodes1313 = node.contents();
        oldNodes.replaceWith(nodes1313);
      }));
      
      var node710 = mobl.loadingSpan();
      root1808.append(node710);
      var list132;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList132 = function() {
        var subs__ = listSubs__;
        list132 = tabs.get();
        list132.list(function(results132) {
          node710.empty();
          for(var i174 = 0; i174 < results132.length; i174++) {
            (function() {
              var iternode132 = $("<span>");
              node710.append(iternode132);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results132), i174), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results132), i174), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results132), i174), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp1183 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1183.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1183.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp1183.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp1183.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1316 = $("<span>");
              iternode132.append(nodes1316);
              subs__.addSub((mobl.block)(tmp1183, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1812 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1317 = $("<span>");
                root1812.append(nodes1317);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1813 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1318 = $("<span>");
                  root1813.append(nodes1318);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl314();
                  }));
                  
                  function renderControl314() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1814 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1814); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1318;
                      nodes1318 = node.contents();
                      oldNodes.replaceWith(nodes1318);
                    }));
                  }
                  renderControl314();
                  callback(root1813); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1317;
                  nodes1317 = node.contents();
                  oldNodes.replaceWith(nodes1317);
                }));
                callback(root1812); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1316;
                nodes1316 = node.contents();
                oldNodes.replaceWith(nodes1316);
              }));
              
              var oldNodes = iternode132;
              iternode132 = iternode132.contents();
              oldNodes.replaceWith(iternode132);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list132.addEventListener('change', function() { listSubs__.unsubscribe(); renderList132(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList132(true); }));
        });
      };
      renderList132();
      
      callback(root1808); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root1815 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node711 = $("<div>");
  
  var ref753 = mobl.ref(ui.searchboxStyle);
  if(ref753.get() !== null) {
    node711.attr('class', ref753.get());
    subs__.addSub(ref753.addEventListener('change', function(_, ref, val) {
      node711.attr('class', val);
    }));
    
  }
  subs__.addSub(ref753.rebind());
  
  
  var node712 = $("<input>");
  node712.attr('type', "search");
  
  var ref750 = mobl.ref(ui.searchBoxInputStyle);
  if(ref750.get() !== null) {
    node712.attr('class', ref750.get());
    subs__.addSub(ref750.addEventListener('change', function(_, ref, val) {
      node712.attr('class', val);
    }));
    
  }
  subs__.addSub(ref750.rebind());
  
  var ref751 = placeholder;
  if(ref751.get() !== null) {
    node712.attr('placeholder', ref751.get());
    subs__.addSub(ref751.addEventListener('change', function(_, ref, val) {
      node712.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref751.rebind());
  
  var ref752 = s;
  node712.val(""+ref752.get());
  var ignore146 = false;
  subs__.addSub(ref752.addEventListener('change', function(_, ref, val) {
    if(ignore146) return;
    node712.val(""+val);
  }));
  subs__.addSub(ref752.rebind());
  
  subs__.addSub(mobl.domBind(node712, 'keyup change', function() {
    ignore146 = true;
    s.set(mobl.stringTomobl__String(node712.val()));
    ignore146 = false;
  }));
  
  
  var val389 = onsearch.get();
  if(val389 !== null) {
    subs__.addSub(mobl.domBind(node712, 'change', val389));
  }
  
  var val390 = onkeyup.get();
  if(val390 !== null) {
    subs__.addSub(mobl.domBind(node712, 'keyup', val390));
  }
  node712.attr('autocorrect', false);
  node712.attr('autocapitalize', false);
  node712.attr('autocomplete', false);
  
  node711.append(node712);
  root1815.append(node711);
  callback(root1815); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root1816 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref754 = mobl.ref(ui.contextMenuStyle);
  if(ref754.get() !== null) {
    menu.attr('class', ref754.get());
    subs__.addSub(ref754.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref754.rebind());
  
  var nodes1319 = $("<span>");
  menu.append(nodes1319);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl315();
  }));
  
  function renderControl315() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1817 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1817); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1319;
      nodes1319 = node.contents();
      oldNodes.replaceWith(nodes1319);
    }));
  }
  renderControl315();
  root1816.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val391 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1230 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val391 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val391));
  }
  
  root1816.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root1816); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root1818 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1214 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1214.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node713 = $("<span>");
  root1818.append(node713);
  var condSubs173 = new mobl.CompSubscription();
  subs__.addSub(condSubs173);
  var oldValue173;
  var renderCond173 = function() {
    var value641 = tmp1214.get();
    if(oldValue173 === value641) return;
    oldValue173 = value641;
    var subs__ = condSubs173;
    subs__.unsubscribe();
    node713.empty();
    if(value641) {
      items.get().one(function(result__) {
        var tmp1231 = result__;
        var current = mobl.ref(result__);
        
        var node714 = $("<div>");
        node714.attr('width', "100%");
        
        
        var node715 = $("<div>");
        node715.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1322 = $("<span>");
        node715.append(nodes1322);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1821 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node718 = mobl.loadingSpan();
          root1821.append(node718);
          var list133;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList133 = function() {
            var subs__ = listSubs__;
            list133 = items.get();
            list133.list(function(results133) {
              node718.empty();
              for(var i175 = 0; i175 < results133.length; i175++) {
                (function() {
                  var iternode133 = $("<span>");
                  node718.append(iternode133);
                  var it;
                  it = mobl.ref(mobl.ref(results133), i175);
                  var result__ = it.get() == current.get();
                  var tmp1189 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1189.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1189.set(it.get() == current.get());
                  }));
                  
                  
                  var node719 = $("<span>");
                  iternode133.append(node719);
                  var condSubs175 = new mobl.CompSubscription();
                  subs__.addSub(condSubs175);
                  var oldValue175;
                  var renderCond175 = function() {
                    var value643 = tmp1189.get();
                    if(oldValue175 === value643) return;
                    oldValue175 = value643;
                    var subs__ = condSubs175;
                    subs__.unsubscribe();
                    node719.empty();
                    if(value643) {
                      var nodes1323 = $("<span>");
                      node719.append(nodes1323);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1822 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1324 = $("<span>");
                        root1822.append(nodes1324);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl317();
                        }));
                        
                        function renderControl317() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1823 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1823); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1324;
                            nodes1324 = node.contents();
                            oldNodes.replaceWith(nodes1324);
                          }));
                        }
                        renderControl317();
                        callback(root1822); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1323;
                        nodes1323 = node.contents();
                        oldNodes.replaceWith(nodes1323);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp1188 = mobl.ref(result__);
                      
                      var nodes1325 = $("<span>");
                      node719.append(nodes1325);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1188, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1824 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1326 = $("<span>");
                        root1824.append(nodes1326);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl318();
                        }));
                        
                        function renderControl318() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1825 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1825); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1326;
                            nodes1326 = node.contents();
                            oldNodes.replaceWith(nodes1326);
                          }));
                        }
                        renderControl318();
                        callback(root1824); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1325;
                        nodes1325 = node.contents();
                        oldNodes.replaceWith(nodes1325);
                      }));
                      
                      
                    }
                  };
                  renderCond175();
                  subs__.addSub(tmp1189.addEventListener('change', function() {
                    renderCond175();
                  }));
                  
                  
                  var oldNodes = iternode133;
                  iternode133 = iternode133.contents();
                  oldNodes.replaceWith(iternode133);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list133.addEventListener('change', function() { listSubs__.unsubscribe(); renderList133(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList133(true); }));
            });
          };
          renderList133();
          
          callback(root1821); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1322;
          nodes1322 = node.contents();
          oldNodes.replaceWith(nodes1322);
        }));
        node714.append(node715);
        
        var node716 = $("<div>");
        node716.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node717 = $("<span>");
        node716.append(node717);
        var condSubs174 = new mobl.CompSubscription();
        subs__.addSub(condSubs174);
        var oldValue174;
        var renderCond174 = function() {
          var value642 = current.get();
          if(oldValue174 === value642) return;
          oldValue174 = value642;
          var subs__ = condSubs174;
          subs__.unsubscribe();
          node717.empty();
          if(value642) {
            var nodes1320 = $("<span>");
            node717.append(nodes1320);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl316();
            }));
            
            function renderControl316() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1819 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1819); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1320;
                nodes1320 = node.contents();
                oldNodes.replaceWith(nodes1320);
              }));
            }
            renderControl316();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp1190 = mobl.ref(result__);
            
            var nodes1321 = $("<span>");
            node717.append(nodes1321);
            subs__.addSub((mobl.label)(tmp1190, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1820 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1820); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1321;
              nodes1321 = node.contents();
              oldNodes.replaceWith(nodes1321);
            }));
            
            
          }
        };
        renderCond174();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond174();
        }));
        
        node714.append(node716);
        node713.append(node714);
        
        
        
        
        
        
      });
    } else {
      var nodes1327 = $("<span>");
      node713.append(nodes1327);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node720 = mobl.loadingSpan();
        root1826.append(node720);
        var list134;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList134 = function() {
          var subs__ = listSubs__;
          list134 = items.get();
          list134.list(function(results134) {
            node720.empty();
            for(var i176 = 0; i176 < results134.length; i176++) {
              (function() {
                var iternode134 = $("<span>");
                node720.append(iternode134);
                var it;
                it = mobl.ref(mobl.ref(results134), i176);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1232 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp1184 = mobl.ref(result__);
                
                var nodes1328 = $("<span>");
                iternode134.append(nodes1328);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1184, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1827 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1329 = $("<span>");
                  root1827.append(nodes1329);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl319();
                  }));
                  
                  function renderControl319() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1828 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1828); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1329;
                      nodes1329 = node.contents();
                      oldNodes.replaceWith(nodes1329);
                    }));
                  }
                  renderControl319();
                  callback(root1827); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1328;
                  nodes1328 = node.contents();
                  oldNodes.replaceWith(nodes1328);
                }));
                
                var oldNodes = iternode134;
                iternode134 = iternode134.contents();
                oldNodes.replaceWith(iternode134);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list134.addEventListener('change', function() { listSubs__.unsubscribe(); renderList134(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList134(true); }));
          });
        };
        renderList134();
        
        callback(root1826); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1327;
        nodes1327 = node.contents();
        oldNodes.replaceWith(nodes1327);
      }));
      
      
    }
  };
  renderCond173();
  subs__.addSub(tmp1214.addEventListener('change', function() {
    renderCond173();
  }));
  
  callback(root1818); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1829 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1187 = mobl.ref(result__);
  
  var nodes1330 = $("<span>");
  root1829.append(nodes1330);
  subs__.addSub((ui.header)(tmp1187, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1830 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1186 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1185 = mobl.ref(result__);
    
    var nodes1331 = $("<span>");
    root1830.append(nodes1331);
    subs__.addSub((ui.backButton)(tmp1185, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1186, function(_, callback) {
      var root1831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1831); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1331;
      nodes1331 = node.contents();
      oldNodes.replaceWith(nodes1331);
    }));
    callback(root1830); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1330;
    nodes1330 = node.contents();
    oldNodes.replaceWith(nodes1330);
  }));
  var nodes1332 = $("<span>");
  root1829.append(nodes1332);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl320();
  }));
  
  function renderControl320() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1832 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1832); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1332;
      nodes1332 = node.contents();
      oldNodes.replaceWith(nodes1332);
    }));
  }
  renderControl320();
  callback(root1829); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root1833 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1333 = $("<span>");
  root1833.append(nodes1333);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1834 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node721 = mobl.loadingSpan();
    root1834.append(node721);
    var list135;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList135 = function() {
      var subs__ = listSubs__;
      list135 = coll.get();
      list135.list(function(results135) {
        node721.empty();
        for(var i177 = 0; i177 < results135.length; i177++) {
          (function() {
            var iternode135 = $("<span>");
            node721.append(iternode135);
            var it;
            it = mobl.ref(mobl.ref(results135), i177);
            var result__ = it.get() == selected.get();
            var tmp1192 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp1192.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1192.set(it.get() == selected.get());
            }));
            
            
            var node722 = $("<span>");
            iternode135.append(node722);
            var condSubs176 = new mobl.CompSubscription();
            subs__.addSub(condSubs176);
            var oldValue176;
            var renderCond176 = function() {
              var value644 = tmp1192.get();
              if(oldValue176 === value644) return;
              oldValue176 = value644;
              var subs__ = condSubs176;
              subs__.unsubscribe();
              node722.empty();
              if(value644) {
                var nodes1334 = $("<span>");
                node722.append(nodes1334);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1835 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1335 = $("<span>");
                  root1835.append(nodes1335);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl321();
                  }));
                  
                  function renderControl321() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1836 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1836); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1335;
                      nodes1335 = node.contents();
                      oldNodes.replaceWith(nodes1335);
                    }));
                  }
                  renderControl321();
                  callback(root1835); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1334;
                  nodes1334 = node.contents();
                  oldNodes.replaceWith(nodes1334);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1191 = mobl.ref(result__);
                
                var nodes1336 = $("<span>");
                node722.append(nodes1336);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1191, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1837 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1337 = $("<span>");
                  root1837.append(nodes1337);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl322();
                  }));
                  
                  function renderControl322() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1838 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1838); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1337;
                      nodes1337 = node.contents();
                      oldNodes.replaceWith(nodes1337);
                    }));
                  }
                  renderControl322();
                  callback(root1837); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1336;
                  nodes1336 = node.contents();
                  oldNodes.replaceWith(nodes1336);
                }));
                
                
              }
            };
            renderCond176();
            subs__.addSub(tmp1192.addEventListener('change', function() {
              renderCond176();
            }));
            
            
            var oldNodes = iternode135;
            iternode135 = iternode135.contents();
            oldNodes.replaceWith(iternode135);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list135.addEventListener('change', function() { listSubs__.unsubscribe(); renderList135(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList135(true); }));
      });
    };
    renderList135();
    
    callback(root1834); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1333;
    nodes1333 = node.contents();
    oldNodes.replaceWith(nodes1333);
  }));
  callback(root1833); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root1839 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp1233 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp1193 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp1193.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp1193.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp1193.set(coll.get().limit(n.get()));
    }));
    
    
    var node723 = mobl.loadingSpan();
    root1839.append(node723);
    var list136;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList136 = function() {
      var subs__ = listSubs__;
      list136 = tmp1193.get();
      list136.list(function(results136) {
        node723.empty();
        for(var i178 = 0; i178 < results136.length; i178++) {
          (function() {
            var iternode136 = $("<span>");
            node723.append(iternode136);
            var it;
            it = mobl.ref(mobl.ref(results136), i178);
            var nodes1338 = $("<span>");
            iternode136.append(nodes1338);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl323();
            }));
            
            function renderControl323() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1840 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1840); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1338;
                nodes1338 = node.contents();
                oldNodes.replaceWith(nodes1338);
              }));
            }
            renderControl323();
            
            var oldNodes = iternode136;
            iternode136 = iternode136.contents();
            oldNodes.replaceWith(iternode136);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list136.addEventListener('change', function() { listSubs__.unsubscribe(); renderList136(true); }));
        subs__.addSub(tmp1193.addEventListener('change', function() { listSubs__.unsubscribe(); renderList136(true); }));
      });
    };
    renderList136();
    
    var result__ = n.get() < total.get();
    var tmp1195 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp1195.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp1195.set(n.get() < total.get());
    }));
    
    
    var node724 = $("<span>");
    root1839.append(node724);
    var condSubs177 = new mobl.CompSubscription();
    subs__.addSub(condSubs177);
    var oldValue177;
    var renderCond177 = function() {
      var value645 = tmp1195.get();
      if(oldValue177 === value645) return;
      oldValue177 = value645;
      var subs__ = condSubs177;
      subs__.unsubscribe();
      node724.empty();
      if(value645) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1194 = mobl.ref(result__);
        
        var nodes1339 = $("<span>");
        node724.append(nodes1339);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp1194, mobl.ref(null), function(_, callback) {
          var root1841 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1340 = $("<span>");
          root1841.append(nodes1340);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1842 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1842); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1340;
            nodes1340 = node.contents();
            oldNodes.replaceWith(nodes1340);
          }));
          callback(root1841); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1339;
          nodes1339 = node.contents();
          oldNodes.replaceWith(nodes1339);
        }));
        
        
      } else {
        
      }
    };
    renderCond177();
    subs__.addSub(tmp1195.addEventListener('change', function() {
      renderCond177();
    }));
    
    callback(root1839); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root1843 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1341 = $("<span>");
  root1843.append(nodes1341);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1844 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node725 = mobl.loadingSpan();
    root1844.append(node725);
    var list137;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList137 = function() {
      var subs__ = listSubs__;
      list137 = items.get();
      list137.list(function(results137) {
        node725.empty();
        for(var i179 = 0; i179 < results137.length; i179++) {
          (function() {
            var iternode137 = $("<span>");
            node725.append(iternode137);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results137), i179), "_1");it = mobl.ref(mobl.ref(mobl.ref(results137), i179), "_2");
            var nodes1342 = $("<span>");
            iternode137.append(nodes1342);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1845 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1343 = $("<span>");
              root1845.append(nodes1343);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1846 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1846); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1343;
                nodes1343 = node.contents();
                oldNodes.replaceWith(nodes1343);
              }));
              callback(root1845); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1342;
              nodes1342 = node.contents();
              oldNodes.replaceWith(nodes1342);
            }));
            
            var oldNodes = iternode137;
            iternode137 = iternode137.contents();
            oldNodes.replaceWith(iternode137);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list137.addEventListener('change', function() { listSubs__.unsubscribe(); renderList137(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList137(true); }));
      });
    };
    renderList137();
    
    callback(root1844); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1341;
    nodes1341 = node.contents();
    oldNodes.replaceWith(nodes1341);
  }));
  callback(root1843); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root1847 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll750) {
    coll750 = coll750.reverse();
    function processOne48() {
      var it;
      it = coll750.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll750.length > 0) processOne48(); else rest48();
      
    }
    function rest48() {
      var nodes1344 = $("<span>");
      root1847.append(nodes1344);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1848 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1196 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1197 = mobl.ref(result__);
        
        var nodes1345 = $("<span>");
        root1848.append(nodes1345);
        subs__.addSub((ui.backButton)(tmp1197, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1196, function(_, callback) {
          var root1849 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1849); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1345;
          nodes1345 = node.contents();
          oldNodes.replaceWith(nodes1345);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll749) {
                           coll749 = coll749.reverse();
                           function processOne47() {
                             var checked;var it;
                             var tmp1235 = coll749.pop();
                             checked = tmp1235._1;it = tmp1235._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll749.length > 0) processOne47(); else rest47();
                               
                             } else {
                               {
                                 
                                 if(coll749.length > 0) processOne47(); else rest47();
                                 
                               }
                             }
                           }
                           function rest47() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll749.length > 0) processOne47(); else rest47();
                         });
                         
                       };
        var tmp1198 = mobl.ref(result__);
        
        var nodes1346 = $("<span>");
        root1848.append(nodes1346);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1198, function(_, callback) {
          var root1850 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1850); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1346;
          nodes1346 = node.contents();
          oldNodes.replaceWith(nodes1346);
        }));
        callback(root1848); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1344;
        nodes1344 = node.contents();
        oldNodes.replaceWith(nodes1344);
      }));
      var nodes1347 = $("<span>");
      root1847.append(nodes1347);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1851 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1851); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1347;
        nodes1347 = node.contents();
        oldNodes.replaceWith(nodes1347);
      }));
      callback(root1847); return subs__;
      
      
    }
    if(coll750.length > 0) processOne48(); else rest48();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root1852 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1348 = $("<span>");
  root1852.append(nodes1348);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1853 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1853); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1348;
    nodes1348 = node.contents();
    oldNodes.replaceWith(nodes1348);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp1199 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1199.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1199.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1199.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1199.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1199.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1349 = $("<span>");
  root1852.append(nodes1349);
  subs__.addSub((ui.masterDetail)(tmp1199, masterItem, detailItem, function(_, callback) {
    var root1854 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1854); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1349;
    nodes1349 = node.contents();
    oldNodes.replaceWith(nodes1349);
  }));
  callback(root1852); return subs__;
  
  
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
  var root1855 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1350 = $("<span>");
  root1855.append(nodes1350);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1856 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node726 = mobl.loadingSpan();
    root1856.append(node726);
    var list138;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList138 = function() {
      var subs__ = listSubs__;
      list138 = sections.get();
      list138.list(function(results138) {
        node726.empty();
        for(var i180 = 0; i180 < results138.length; i180++) {
          (function() {
            var iternode138 = $("<span>");
            node726.append(iternode138);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results138), i180), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results138), i180), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp1201 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1201.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1201.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1201.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1201.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1200 = mobl.ref(result__);
            
            var nodes1351 = $("<span>");
            iternode138.append(nodes1351);
            subs__.addSub((mobl.span)(tmp1201, mobl.ref(null), tmp1200, mobl.ref(null), function(_, callback) {
              var root1857 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1352 = $("<span>");
              root1857.append(nodes1352);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1858 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1858); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1352;
                nodes1352 = node.contents();
                oldNodes.replaceWith(nodes1352);
              }));
              callback(root1857); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1351;
              nodes1351 = node.contents();
              oldNodes.replaceWith(nodes1351);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp1202 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1202.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1202.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1202.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1202.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1353 = $("<span>");
            iternode138.append(nodes1353);
            subs__.addSub((mobl.block)(tmp1202, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1859 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1354 = $("<span>");
              root1859.append(nodes1354);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl324();
              }));
              
              function renderControl324() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1860 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1860); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1354;
                  nodes1354 = node.contents();
                  oldNodes.replaceWith(nodes1354);
                }));
              }
              renderControl324();
              callback(root1859); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1353;
              nodes1353 = node.contents();
              oldNodes.replaceWith(nodes1353);
            }));
            
            var oldNodes = iternode138;
            iternode138 = iternode138.contents();
            oldNodes.replaceWith(iternode138);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list138.addEventListener('change', function() { listSubs__.unsubscribe(); renderList138(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList138(true); }));
      });
    };
    renderList138();
    
    callback(root1856); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1350;
    nodes1350 = node.contents();
    oldNodes.replaceWith(nodes1350);
  }));
  callback(root1855); return subs__;
  
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
  var root1861 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node727 = $("<table>");
  
  var ref755 = style;
  if(ref755.get() !== null) {
    node727.attr('class', ref755.get());
    subs__.addSub(ref755.addEventListener('change', function(_, ref, val) {
      node727.attr('class', val);
    }));
    
  }
  subs__.addSub(ref755.rebind());
  
  var nodes1355 = $("<span>");
  node727.append(nodes1355);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl325();
  }));
  
  function renderControl325() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1862 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1862); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1355;
      nodes1355 = node.contents();
      oldNodes.replaceWith(nodes1355);
    }));
  }
  renderControl325();
  root1861.append(node727);
  callback(root1861); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root1863 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node728 = $("<tr>");
  
  var ref756 = style;
  if(ref756.get() !== null) {
    node728.attr('class', ref756.get());
    subs__.addSub(ref756.addEventListener('change', function(_, ref, val) {
      node728.attr('class', val);
    }));
    
  }
  subs__.addSub(ref756.rebind());
  
  var nodes1356 = $("<span>");
  node728.append(nodes1356);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl326();
  }));
  
  function renderControl326() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1864 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1864); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1356;
      nodes1356 = node.contents();
      oldNodes.replaceWith(nodes1356);
    }));
  }
  renderControl326();
  root1863.append(node728);
  callback(root1863); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root1865 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node729 = $("<td>");
  
  var ref757 = width;
  if(ref757.get() !== null) {
    node729.attr('width', ref757.get());
    subs__.addSub(ref757.addEventListener('change', function(_, ref, val) {
      node729.attr('width', val);
    }));
    
  }
  subs__.addSub(ref757.rebind());
  
  var ref758 = style;
  if(ref758.get() !== null) {
    node729.attr('class', ref758.get());
    subs__.addSub(ref758.addEventListener('change', function(_, ref, val) {
      node729.attr('class', val);
    }));
    
  }
  subs__.addSub(ref758.rebind());
  
  var nodes1357 = $("<span>");
  node729.append(nodes1357);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl327();
  }));
  
  function renderControl327() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1866 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1866); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1357;
      nodes1357 = node.contents();
      oldNodes.replaceWith(nodes1357);
    }));
  }
  renderControl327();
  root1865.append(node729);
  callback(root1865); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root1867 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node730 = $("<td>");
  
  var ref759 = width;
  if(ref759.get() !== null) {
    node730.attr('width', ref759.get());
    subs__.addSub(ref759.addEventListener('change', function(_, ref, val) {
      node730.attr('width', val);
    }));
    
  }
  subs__.addSub(ref759.rebind());
  
  var ref760 = style;
  if(ref760.get() !== null) {
    node730.attr('class', ref760.get());
    subs__.addSub(ref760.addEventListener('change', function(_, ref, val) {
      node730.attr('class', val);
    }));
    
  }
  subs__.addSub(ref760.rebind());
  
  var nodes1358 = $("<span>");
  node730.append(nodes1358);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl328();
  }));
  
  function renderControl328() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1868 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1868); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1358;
      nodes1358 = node.contents();
      oldNodes.replaceWith(nodes1358);
    }));
  }
  renderControl328();
  root1867.append(node730);
  callback(root1867); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root1869 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node731 = $("<td>");
  
  var ref761 = width;
  if(ref761.get() !== null) {
    node731.attr('width', ref761.get());
    subs__.addSub(ref761.addEventListener('change', function(_, ref, val) {
      node731.attr('width', val);
    }));
    
  }
  subs__.addSub(ref761.rebind());
  
  var ref762 = style;
  if(ref762.get() !== null) {
    node731.attr('class', ref762.get());
    subs__.addSub(ref762.addEventListener('change', function(_, ref, val) {
      node731.attr('class', val);
    }));
    
  }
  subs__.addSub(ref762.rebind());
  
  
  var node732 = $("<strong>");
  
  var nodes1359 = $("<span>");
  node732.append(nodes1359);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl329();
  }));
  
  function renderControl329() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1870 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1870); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1359;
      nodes1359 = node.contents();
      oldNodes.replaceWith(nodes1359);
    }));
  }
  renderControl329();
  node731.append(node732);
  root1869.append(node731);
  callback(root1869); return subs__;
  
  
  
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
  items.list(function(coll751) {
    coll751 = coll751.reverse();
    function processOne49() {
      var item;
      item = coll751.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll751.length > 0) processOne49(); else rest49();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll751.length > 0) processOne49(); else rest49();
          
        }
      }
    }
    function rest49() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll751.length > 0) processOne49(); else rest49();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mDetailScreen = function(it, detail, number, callback, screenCallback) {
  var root1871 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1205 = mobl.ref(result__);
  
  var nodes1360 = $("<span>");
  root1871.append(nodes1360);
  subs__.addSub((ui.header)(tmp1205, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1872 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp1237 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp1238 = result__;
        var result__ = plot.renderPlot("corePlotArea", it.get());
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1204 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1203 = mobl.ref(result__);
        
        var nodes1361 = $("<span>");
        root1872.append(nodes1361);
        subs__.addSub((ui.backButton)(tmp1203, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1204, function(_, callback) {
          var root1873 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1873); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1361;
          nodes1361 = node.contents();
          oldNodes.replaceWith(nodes1361);
        }));
        callback(root1872); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes1360;
    nodes1360 = node.contents();
    oldNodes.replaceWith(nodes1360);
  }));
  var nodes1362 = $("<span>");
  root1871.append(nodes1362);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl330();
  }));
  
  function renderControl330() {
    subs__.addSub((detail.get())(it, number, function(elements, callback) {
      var root1874 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1874); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1362;
      nodes1362 = node.contents();
      oldNodes.replaceWith(nodes1362);
    }));
  }
  renderControl330();
  callback(root1871); return subs__;
  
  
  return subs__;
};

ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root1875 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1215 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1215.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node733 = $("<span>");
  root1875.append(node733);
  var condSubs178 = new mobl.CompSubscription();
  subs__.addSub(condSubs178);
  var oldValue178;
  var renderCond178 = function() {
    var value646 = tmp1215.get();
    if(oldValue178 === value646) return;
    oldValue178 = value646;
    var subs__ = condSubs178;
    subs__.unsubscribe();
    node733.empty();
    if(value646) {
      
      var current = mobl.ref(null);
      
      var node734 = $("<div>");
      node734.attr('width', "100%");
      
      
      var node735 = $("<div>");
      node735.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes1364 = $("<span>");
      node735.append(nodes1364);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node738 = mobl.loadingSpan();
        root1877.append(node738);
        var list139;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList139 = function() {
          var subs__ = listSubs__;
          list139 = items.get();
          list139.list(function(results139) {
            node738.empty();
            for(var i181 = 0; i181 < results139.length; i181++) {
              (function() {
                var iternode139 = $("<span>");
                node738.append(iternode139);
                var it;
                it = mobl.ref(mobl.ref(results139), i181);
                var result__ = it.get() == current.get();
                var tmp1211 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp1211.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp1211.set(it.get() == current.get());
                }));
                
                
                var node739 = $("<span>");
                iternode139.append(node739);
                var condSubs180 = new mobl.CompSubscription();
                subs__.addSub(condSubs180);
                var oldValue180;
                var renderCond180 = function() {
                  var value648 = tmp1211.get();
                  if(oldValue180 === value648) return;
                  oldValue180 = value648;
                  var subs__ = condSubs180;
                  subs__.unsubscribe();
                  node739.empty();
                  if(value648) {
                    var nodes1365 = $("<span>");
                    node739.append(nodes1365);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root1878 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1244 = result__;
                        var tmp1208 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1242 = result__;
                            var result__ = tmp1242;
                            tmp1208.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1243 = result__;
                            var result__ = tmp1243;
                            tmp1208.set(result__);
                            
                          });
                        }));
                        
                        var nodes1366 = $("<span>");
                        root1878.append(nodes1366);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl332();
                        }));
                        
                        function renderControl332() {
                          subs__.addSub((masterItem.get())(it, tmp1208, function(elements, callback) {
                            var root1879 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1879); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1366;
                            nodes1366 = node.contents();
                            oldNodes.replaceWith(nodes1366);
                          }));
                        }
                        renderControl332();
                        callback(root1878); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1365;
                      nodes1365 = node.contents();
                      oldNodes.replaceWith(nodes1365);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = true;
                                     ui.visible.set(result__);
                                     mathJAX.renderMaths(function(result__) {
                                       var tmp1248 = result__;
                                       var result__ = plot.renderPlot("corePlotArea", current.get());
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   };
                    var tmp1210 = mobl.ref(result__);
                    
                    var nodes1367 = $("<span>");
                    node739.append(nodes1367);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1210, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root1880 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1247 = result__;
                        var tmp1209 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1245 = result__;
                            var result__ = tmp1245;
                            tmp1209.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp1246 = result__;
                            var result__ = tmp1246;
                            tmp1209.set(result__);
                            
                          });
                        }));
                        
                        var nodes1368 = $("<span>");
                        root1880.append(nodes1368);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl333();
                        }));
                        
                        function renderControl333() {
                          subs__.addSub((masterItem.get())(it, tmp1209, function(elements, callback) {
                            var root1881 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1881); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1368;
                            nodes1368 = node.contents();
                            oldNodes.replaceWith(nodes1368);
                          }));
                        }
                        renderControl333();
                        callback(root1880); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1367;
                      nodes1367 = node.contents();
                      oldNodes.replaceWith(nodes1367);
                    }));
                    
                    
                  }
                };
                renderCond180();
                subs__.addSub(tmp1211.addEventListener('change', function() {
                  renderCond180();
                }));
                
                
                var oldNodes = iternode139;
                iternode139 = iternode139.contents();
                oldNodes.replaceWith(iternode139);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list139.addEventListener('change', function() { listSubs__.unsubscribe(); renderList139(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList139(true); }));
          });
        };
        renderList139();
        
        callback(root1877); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1364;
        nodes1364 = node.contents();
        oldNodes.replaceWith(nodes1364);
      }));
      node734.append(node735);
      
      var node736 = $("<div>");
      node736.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
      
      var result__ = current.get() && ui.visible.get();
      var tmp1213 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        tmp1213.set(current.get() && ui.visible.get());
      }));
      subs__.addSub(ui.visible.addEventListener('change', function() {
        tmp1213.set(current.get() && ui.visible.get());
      }));
      
      
      var node737 = $("<span>");
      node736.append(node737);
      var condSubs179 = new mobl.CompSubscription();
      subs__.addSub(condSubs179);
      var oldValue179;
      var renderCond179 = function() {
        var value647 = tmp1213.get();
        if(oldValue179 === value647) return;
        oldValue179 = value647;
        var subs__ = condSubs179;
        subs__.unsubscribe();
        node737.empty();
        if(value647) {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp1241 = result__;
            var tmp1212 = mobl.ref(result__);
            subs__.addSub(current.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp1239 = result__;
                var result__ = tmp1239;
                tmp1212.set(result__);
                
              });
            }));
            subs__.addSub(items.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp1240 = result__;
                var result__ = tmp1240;
                tmp1212.set(result__);
                
              });
            }));
            
            var nodes1363 = $("<span>");
            node737.append(nodes1363);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl331();
            }));
            
            function renderControl331() {
              subs__.addSub((detail.get())(current, tmp1212, function(elements, callback) {
                var root1876 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1876); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1363;
                nodes1363 = node.contents();
                oldNodes.replaceWith(nodes1363);
              }));
            }
            renderControl331();
            
            
          });
        } else {
          
        }
      };
      renderCond179();
      subs__.addSub(tmp1213.addEventListener('change', function() {
        renderCond179();
      }));
      
      node734.append(node736);
      node733.append(node734);
      
      
      
      
      
      
    } else {
      var nodes1369 = $("<span>");
      node733.append(nodes1369);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node740 = mobl.loadingSpan();
        root1882.append(node740);
        var list140;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList140 = function() {
          var subs__ = listSubs__;
          list140 = items.get();
          list140.list(function(results140) {
            node740.empty();
            for(var i182 = 0; i182 < results140.length; i182++) {
              (function() {
                var iternode140 = $("<span>");
                node740.append(iternode140);
                var it;
                it = mobl.ref(mobl.ref(results140), i182);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 ui.indexOf(it.get(), items.get(), function(result__) {
                                   var tmp1253 = result__;
                                   mobl.call('ui.mDetailScreen', [it, detail, mobl.ref(tmp1253), mobl.ref(false), mobl.ref("slide")], function(result__) {
                                   var tmp1252 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
                               };
                var tmp1207 = mobl.ref(result__);
                
                var nodes1370 = $("<span>");
                iternode140.append(nodes1370);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1207, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1883 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp1251 = result__;
                    var tmp1206 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1249 = result__;
                        var result__ = tmp1249;
                        tmp1206.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp1250 = result__;
                        var result__ = tmp1250;
                        tmp1206.set(result__);
                        
                      });
                    }));
                    
                    var nodes1371 = $("<span>");
                    root1883.append(nodes1371);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl334();
                    }));
                    
                    function renderControl334() {
                      subs__.addSub((masterItem.get())(it, tmp1206, function(elements, callback) {
                        var root1884 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root1884); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1371;
                        nodes1371 = node.contents();
                        oldNodes.replaceWith(nodes1371);
                      }));
                    }
                    renderControl334();
                    callback(root1883); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1370;
                  nodes1370 = node.contents();
                  oldNodes.replaceWith(nodes1370);
                }));
                
                var oldNodes = iternode140;
                iternode140 = iternode140.contents();
                oldNodes.replaceWith(iternode140);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list140.addEventListener('change', function() { listSubs__.unsubscribe(); renderList140(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList140(true); }));
          });
        };
        renderList140();
        
        callback(root1882); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1369;
        nodes1369 = node.contents();
        oldNodes.replaceWith(nodes1369);
      }));
      
      
    }
  };
  renderCond178();
  subs__.addSub(tmp1215.addEventListener('change', function() {
    renderCond178();
  }));
  
  callback(root1875); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root1885 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1372 = $("<span>");
  root1885.append(nodes1372);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1886 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1373 = $("<span>");
    root1886.append(nodes1373);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1887); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1373;
      nodes1373 = node.contents();
      oldNodes.replaceWith(nodes1373);
    }));
    callback(root1886); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1372;
    nodes1372 = node.contents();
    oldNodes.replaceWith(nodes1372);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes1374 = $("<span>");
  root1885.append(nodes1374);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root1888 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1888); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1374;
    nodes1374 = node.contents();
    oldNodes.replaceWith(nodes1374);
  }));
  callback(root1885); return subs__;
  
  
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
