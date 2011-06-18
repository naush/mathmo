mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root9402 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3685 = $("<span>");
  root9402.append(node3685);
  var condSubs895 = new mobl.CompSubscription();
  subs__.addSub(condSubs895);
  var oldValue895;
  var renderCond895 = function() {
    var value4015 = value.get();
    if(oldValue895 === value4015) return;
    oldValue895 = value4015;
    var subs__ = condSubs895;
    subs__.unsubscribe();
    node3685.empty();
    if(value4015) {
      var nodes7028 = $("<span>");
      node3685.append(nodes7028);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1490();
      }));
      
      function renderControl1490() {
        subs__.addSub((elements)(function(elements, callback) {
          var root9403 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9403); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7028;
          nodes7028 = node.contents();
          oldNodes.replaceWith(nodes7028);
        }));
      }
      renderControl1490();
      
      
    } else {
      var nodes7029 = $("<span>");
      node3685.append(nodes7029);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9404 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7030 = $("<span>");
        root9404.append(nodes7030);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root9405 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9405); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7030;
          nodes7030 = node.contents();
          oldNodes.replaceWith(nodes7030);
        }));
        var nodes7031 = $("<span>");
        root9404.append(nodes7031);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root9406 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9406); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7031;
          nodes7031 = node.contents();
          oldNodes.replaceWith(nodes7031);
        }));
        callback(root9404); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7029;
        nodes7029 = node.contents();
        oldNodes.replaceWith(nodes7029);
      }));
      
      
    }
  };
  renderCond895();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond895();
  }));
  
  callback(root9402); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root9407 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3686 = $("<div>");
  
  var ref3655 = mobl.ref(ui.headerStyle);
  if(ref3655.get() !== null) {
    node3686.attr('class', ref3655.get());
    subs__.addSub(ref3655.addEventListener('change', function(_, ref, val) {
      node3686.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3655.rebind());
  
  var val1870 = onclick.get();
  if(val1870 !== null) {
    subs__.addSub(mobl.domBind(node3686, 'tap', val1870));
  }
  
  var ref3656 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref3656.get() !== null) {
    node3686.attr('style', ref3656.get());
    subs__.addSub(ref3656.addEventListener('change', function(_, ref, val) {
      node3686.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node3686.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref3656.rebind());
  
  
  var node3689 = $("<div>");
  
  var ref3654 = mobl.ref(ui.headerContainerStyle);
  if(ref3654.get() !== null) {
    node3689.attr('class', ref3654.get());
    subs__.addSub(ref3654.addEventListener('change', function(_, ref, val) {
      node3689.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3654.rebind());
  
  
  var node3690 = $("<div>");
  
  var ref3652 = text;
  node3690.text(""+ref3652.get());
  var ignore718 = false;
  subs__.addSub(ref3652.addEventListener('change', function(_, ref, val) {
    if(ignore718) return;
    node3690.text(""+val);
  }));
  subs__.addSub(ref3652.rebind());
  
  
  var ref3653 = mobl.ref(ui.headerTextStyle);
  if(ref3653.get() !== null) {
    node3690.attr('class', ref3653.get());
    subs__.addSub(ref3653.addEventListener('change', function(_, ref, val) {
      node3690.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3653.rebind());
  
  node3689.append(node3690);
  node3686.append(node3689);
  var nodes7032 = $("<span>");
  node3686.append(nodes7032);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1491();
  }));
  
  function renderControl1491() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9408 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9408); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7032;
      nodes7032 = node.contents();
      oldNodes.replaceWith(nodes7032);
    }));
  }
  renderControl1491();
  root9407.append(node3686);
  
  var node3687 = $("<span>");
  root9407.append(node3687);
  var condSubs896 = new mobl.CompSubscription();
  subs__.addSub(condSubs896);
  var oldValue896;
  var renderCond896 = function() {
    var value4016 = fixedPosition.get();
    if(oldValue896 === value4016) return;
    oldValue896 = value4016;
    var subs__ = condSubs896;
    subs__.unsubscribe();
    node3687.empty();
    if(value4016) {
      
      var node3688 = $("<div>");
      node3688.attr('id', "hello");
      node3688.attr('style', "height: 2.9em;");
      
      node3687.append(node3688);
      
      
    } else {
      
    }
  };
  renderCond896();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond896();
  }));
  
  callback(root9407); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9409 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref3657 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref3657.get() !== null) {
    sp.attr('class', ref3657.get());
    subs__.addSub(ref3657.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref3657.rebind());
  
  var val1871 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1871 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1871));
  }
  
  var val1872 = function(event, callback) {
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
  if(val1872 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1872));
  }
  
  var val1873 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after576(result__) {
                    var tmp6362 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after576);if(result__ !== undefined) after576(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1873 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1873));
  }
  
  var val1874 = function(event, callback) {
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
  if(val1874 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1874));
  }
  
  var ref3658 = text;
  sp.text(""+ref3658.get());
  var ignore719 = false;
  subs__.addSub(ref3658.addEventListener('change', function(_, ref, val) {
    if(ignore719) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref3658.rebind());
  
  
  root9409.append(sp);
  callback(root9409); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9410 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7033 = $("<span>");
  root9410.append(nodes7033);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9411 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9411); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7033;
    nodes7033 = node.contents();
    oldNodes.replaceWith(nodes7033);
  }));
  callback(root9410); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9412 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7034 = $("<span>");
  root9412.append(nodes7034);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9413 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9413); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7034;
    nodes7034 = node.contents();
    oldNodes.replaceWith(nodes7034);
  }));
  callback(root9412); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root9414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3691 = $("<ul>");
  
  var ref3659 = mobl.ref(ui.groupStyle);
  if(ref3659.get() !== null) {
    node3691.attr('class', ref3659.get());
    subs__.addSub(ref3659.addEventListener('change', function(_, ref, val) {
      node3691.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3659.rebind());
  
  var nodes7035 = $("<span>");
  node3691.append(nodes7035);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1492();
  }));
  
  function renderControl1492() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9415 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9415); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7035;
      nodes7035 = node.contents();
      oldNodes.replaceWith(nodes7035);
    }));
  }
  renderControl1492();
  root9414.append(node3691);
  callback(root9414); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root9416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3692 = $("<img>");
  
  var ref3660 = url;
  if(ref3660.get() !== null) {
    node3692.attr('src', ref3660.get());
    subs__.addSub(ref3660.addEventListener('change', function(_, ref, val) {
      node3692.attr('src', val);
    }));
    
  }
  subs__.addSub(ref3660.rebind());
  
  var ref3661 = width;
  if(ref3661.get() !== null) {
    node3692.attr('width', ref3661.get());
    subs__.addSub(ref3661.addEventListener('change', function(_, ref, val) {
      node3692.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3661.rebind());
  
  var ref3662 = height;
  if(ref3662.get() !== null) {
    node3692.attr('height', ref3662.get());
    subs__.addSub(ref3662.addEventListener('change', function(_, ref, val) {
      node3692.attr('height', val);
    }));
    
  }
  subs__.addSub(ref3662.rebind());
  
  var ref3663 = style;
  if(ref3663.get() !== null) {
    node3692.attr('class', ref3663.get());
    subs__.addSub(ref3663.addEventListener('change', function(_, ref, val) {
      node3692.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3663.rebind());
  
  var val1875 = onclick.get();
  if(val1875 !== null) {
    subs__.addSub(mobl.domBind(node3692, 'tap', val1875));
  }
  
  var ref3664 = valign;
  if(ref3664.get() !== null) {
    node3692.attr('valign', ref3664.get());
    subs__.addSub(ref3664.addEventListener('change', function(_, ref, val) {
      node3692.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref3664.rebind());
  
  var ref3665 = align;
  if(ref3665.get() !== null) {
    node3692.attr('align', ref3665.get());
    subs__.addSub(ref3665.addEventListener('change', function(_, ref, val) {
      node3692.attr('align', val);
    }));
    
  }
  subs__.addSub(ref3665.rebind());
  
  root9416.append(node3692);
  callback(root9416); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root9417 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref3666 = mobl.ref(ui.itemStyle);
  if(ref3666.get() !== null) {
    el.attr('class', ref3666.get());
    subs__.addSub(ref3666.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3666.rebind());
  
  var ref3667 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref3667.get() !== null) {
    el.attr('class', ref3667.get());
    subs__.addSub(ref3667.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref3667.rebind());
  
  var val1876 = onswipe.get();
  if(val1876 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1876));
  }
  
  var val1877 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp6363 = result__;
                                           function after577(result__) {
                                             var tmp6364 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after577);if(result__ !== undefined) after577(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp6365 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1877 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1877));
  }
  
  var nodes7036 = $("<span>");
  el.append(nodes7036);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1493();
  }));
  
  function renderControl1493() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9418 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9418); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7036;
      nodes7036 = node.contents();
      oldNodes.replaceWith(nodes7036);
    }));
  }
  renderControl1493();
  root9417.append(el);
  callback(root9417); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root9419 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3693 = $("<input>");
  node3693.attr('type', "checkbox");
  
  var ref3669 = b;
  node3693.attr('checked', !!ref3669.get());
  subs__.addSub(ref3669.addEventListener('change', function(_, ref, val) {
    if(ref === ref3669) node3693.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node3693, 'change', function() {
    b.set(!!node3693.attr('checked'));
  }));
  
  var val1879 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1879 !== null) {
    subs__.addSub(mobl.domBind(node3693, 'tap', val1879));
  }
  
  var val1880 = onchange.get();
  if(val1880 !== null) {
    subs__.addSub(mobl.domBind(node3693, 'change', val1880));
  }
  
  root9419.append(node3693);
  
  root9419.append(" ");
  
  var node3694 = $("<span>");
  
  var ref3668 = label;
  node3694.text(""+ref3668.get());
  var ignore720 = false;
  subs__.addSub(ref3668.addEventListener('change', function(_, ref, val) {
    if(ignore720) return;
    node3694.text(""+val);
  }));
  subs__.addSub(ref3668.rebind());
  
  
  var val1878 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after578(result__) {
                    var tmp6366 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after578);if(result__ !== undefined) after578(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1878 !== null) {
    subs__.addSub(mobl.domBind(node3694, 'tap', val1878));
  }
  
  root9419.append(node3694);
  callback(root9419); return subs__;
  
  
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
  var root9420 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3695 = $("<span>");
  root9420.append(node3695);
  var condSubs897 = new mobl.CompSubscription();
  subs__.addSub(condSubs897);
  var oldValue897;
  var renderCond897 = function() {
    var value4017 = label.get();
    if(oldValue897 === value4017) return;
    oldValue897 = value4017;
    var subs__ = condSubs897;
    subs__.unsubscribe();
    node3695.empty();
    if(value4017) {
      var nodes7037 = $("<span>");
      node3695.append(nodes7037);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9421 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9421); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7037;
        nodes7037 = node.contents();
        oldNodes.replaceWith(nodes7037);
      }));
      
      
    } else {
      
    }
  };
  renderCond897();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond897();
  }));
  
  
  var node3696 = $("<span>");
  root9420.append(node3696);
  var condSubs898 = new mobl.CompSubscription();
  subs__.addSub(condSubs898);
  var oldValue898;
  var renderCond898 = function() {
    var value4018 = validator.get();
    if(oldValue898 === value4018) return;
    oldValue898 = value4018;
    var subs__ = condSubs898;
    subs__.unsubscribe();
    node3696.empty();
    if(value4018) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after582(result__) {
        var tmp6367 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp6368 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node3697 = $("<input>");
        
        var ref3670 = inputType;
        if(ref3670.get() !== null) {
          node3697.attr('type', ref3670.get());
          subs__.addSub(ref3670.addEventListener('change', function(_, ref, val) {
            node3697.attr('type', val);
          }));
          
        }
        subs__.addSub(ref3670.rebind());
        
        var ref3671 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref3671.get() !== null) {
          node3697.attr('class', ref3671.get());
          subs__.addSub(ref3671.addEventListener('change', function(_, ref, val) {
            node3697.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node3697.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node3697.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node3697.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref3671.rebind());
        
        var ref3672 = placeholder;
        if(ref3672.get() !== null) {
          node3697.attr('placeholder', ref3672.get());
          subs__.addSub(ref3672.addEventListener('change', function(_, ref, val) {
            node3697.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref3672.rebind());
        
        var ref3673 = temp;
        node3697.val(""+ref3673.get());
        var ignore721 = false;
        subs__.addSub(ref3673.addEventListener('change', function(_, ref, val) {
          if(ignore721) return;
          node3697.val(""+val);
        }));
        subs__.addSub(ref3673.rebind());
        
        subs__.addSub(mobl.domBind(node3697, 'keyup change', function() {
          ignore721 = true;
          temp.set(mobl.stringTomobl__String(node3697.val()));
          ignore721 = false;
        }));
        
        
        var val1881 = onchange.get();
        if(val1881 !== null) {
          subs__.addSub(mobl.domBind(node3697, 'change', val1881));
        }
        
        var val1882 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after579(result__) {
                          var tmp6369 = result__;
                          function after580(result__) {
                            var tmp6370 = result__;
                            var result__ = tmp6370;
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
                          var result__ = validator.get()(temp.get(), after580);if(result__ !== undefined) after580(result__);
                        }
                        var result__ = onkeyup.get()(event, after579);if(result__ !== undefined) after579(result__);
                      } else {
                        {
                          function after581(result__) {
                            var tmp6370 = result__;
                            var result__ = tmp6370;
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
                          var result__ = validator.get()(temp.get(), after581);if(result__ !== undefined) after581(result__);
                        }
                      }
                    };
        if(val1882 !== null) {
          subs__.addSub(mobl.domBind(node3697, 'keyup', val1882));
        }
        
        var val1883 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1883 !== null) {
          subs__.addSub(mobl.domBind(node3697, 'blur', val1883));
        }
        
        node3696.append(node3697);
        var nodes7038 = $("<span>");
        node3696.append(nodes7038);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root9422 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9422); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7038;
          nodes7038 = node.contents();
          oldNodes.replaceWith(nodes7038);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after582);if(result__ !== undefined) after582(result__);
    } else {
      
      var node3698 = $("<input>");
      
      var ref3674 = inputType;
      if(ref3674.get() !== null) {
        node3698.attr('type', ref3674.get());
        subs__.addSub(ref3674.addEventListener('change', function(_, ref, val) {
          node3698.attr('type', val);
        }));
        
      }
      subs__.addSub(ref3674.rebind());
      
      var ref3675 = style;
      if(ref3675.get() !== null) {
        node3698.attr('class', ref3675.get());
        subs__.addSub(ref3675.addEventListener('change', function(_, ref, val) {
          node3698.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3675.rebind());
      
      var ref3676 = placeholder;
      if(ref3676.get() !== null) {
        node3698.attr('placeholder', ref3676.get());
        subs__.addSub(ref3676.addEventListener('change', function(_, ref, val) {
          node3698.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3676.rebind());
      
      var ref3677 = s;
      node3698.val(""+ref3677.get());
      var ignore722 = false;
      subs__.addSub(ref3677.addEventListener('change', function(_, ref, val) {
        if(ignore722) return;
        node3698.val(""+val);
      }));
      subs__.addSub(ref3677.rebind());
      
      subs__.addSub(mobl.domBind(node3698, 'keyup change', function() {
        ignore722 = true;
        s.set(mobl.stringTomobl__String(node3698.val()));
        ignore722 = false;
      }));
      
      
      var val1884 = onchange.get();
      if(val1884 !== null) {
        subs__.addSub(mobl.domBind(node3698, 'change', val1884));
      }
      
      var val1885 = onkeyup.get();
      if(val1885 !== null) {
        subs__.addSub(mobl.domBind(node3698, 'keyup', val1885));
      }
      
      var val1886 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1886 !== null) {
        subs__.addSub(mobl.domBind(node3698, 'blur', val1886));
      }
      
      node3696.append(node3698);
      
      
    }
  };
  renderCond898();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond898();
  }));
  
  callback(root9420); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9423 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7039 = $("<span>");
  root9423.append(nodes7039);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9424 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9424); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7039;
    nodes7039 = node.contents();
    oldNodes.replaceWith(nodes7039);
  }));
  callback(root9423); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9425 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7040 = $("<span>");
  root9425.append(nodes7040);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9426 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9426); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7040;
    nodes7040 = node.contents();
    oldNodes.replaceWith(nodes7040);
  }));
  callback(root9425); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root9427 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3699 = $("<span>");
  root9427.append(node3699);
  var condSubs899 = new mobl.CompSubscription();
  subs__.addSub(condSubs899);
  var oldValue899;
  var renderCond899 = function() {
    var value4019 = label.get();
    if(oldValue899 === value4019) return;
    oldValue899 = value4019;
    var subs__ = condSubs899;
    subs__.unsubscribe();
    node3699.empty();
    if(value4019) {
      var nodes7041 = $("<span>");
      node3699.append(nodes7041);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9428 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9428); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7041;
        nodes7041 = node.contents();
        oldNodes.replaceWith(nodes7041);
      }));
      
      
    } else {
      
    }
  };
  renderCond899();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond899();
  }));
  
  
  var node3700 = $("<input>");
  node3700.attr('type', "range");
  
  var ref3678 = n;
  node3700.val(""+ref3678.get());
  var ignore723 = false;
  subs__.addSub(ref3678.addEventListener('change', function(_, ref, val) {
    if(ignore723) return;
    node3700.val(""+val);
  }));
  subs__.addSub(ref3678.rebind());
  
  subs__.addSub(mobl.domBind(node3700, 'keyup change', function() {
    ignore723 = true;
    n.set(mobl.stringTomobl__Num(node3700.val()));
    ignore723 = false;
  }));
  
  
  var ref3679 = min;
  if(ref3679.get() !== null) {
    node3700.attr('min', ref3679.get());
    subs__.addSub(ref3679.addEventListener('change', function(_, ref, val) {
      node3700.attr('min', val);
    }));
    
  }
  subs__.addSub(ref3679.rebind());
  
  var ref3680 = max;
  if(ref3680.get() !== null) {
    node3700.attr('max', ref3680.get());
    subs__.addSub(ref3680.addEventListener('change', function(_, ref, val) {
      node3700.attr('max', val);
    }));
    
  }
  subs__.addSub(ref3680.rebind());
  
  var ref3681 = step;
  if(ref3681.get() !== null) {
    node3700.attr('step', ref3681.get());
    subs__.addSub(ref3681.addEventListener('change', function(_, ref, val) {
      node3700.attr('step', val);
    }));
    
  }
  subs__.addSub(ref3681.rebind());
  node3700.attr('style', "width: 99%;");
  
  var val1887 = onchange.get();
  if(val1887 !== null) {
    subs__.addSub(mobl.domBind(node3700, 'change', val1887));
  }
  
  var val1888 = onkeyup.get();
  if(val1888 !== null) {
    subs__.addSub(mobl.domBind(node3700, 'keyup', val1888));
  }
  
  var ref3682 = placeholder;
  if(ref3682.get() !== null) {
    node3700.attr('placeholder', ref3682.get());
    subs__.addSub(ref3682.addEventListener('change', function(_, ref, val) {
      node3700.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3682.rebind());
  
  root9427.append(node3700);
  callback(root9427); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9429 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after583(result__) {
      var tmp6371 = result__;
      var result__ = tmp6371;
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
    var result__ = validator.get()(n2, after583);if(result__ !== undefined) after583(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7042 = $("<span>");
  root9429.append(nodes7042);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9430 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9430); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7042;
    nodes7042 = node.contents();
    oldNodes.replaceWith(nodes7042);
  }));
  callback(root9429); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root9431 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3701 = $("<span>");
  root9431.append(node3701);
  var condSubs900 = new mobl.CompSubscription();
  subs__.addSub(condSubs900);
  var oldValue900;
  var renderCond900 = function() {
    var value4020 = label.get();
    if(oldValue900 === value4020) return;
    oldValue900 = value4020;
    var subs__ = condSubs900;
    subs__.unsubscribe();
    node3701.empty();
    if(value4020) {
      
      var node3702 = $("<span>");
      node3702.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref3686 = label;
      node3702.text(""+ref3686.get());
      var ignore725 = false;
      subs__.addSub(ref3686.addEventListener('change', function(_, ref, val) {
        if(ignore725) return;
        node3702.text(""+val);
      }));
      subs__.addSub(ref3686.rebind());
      
      
      node3701.append(node3702);
      
      var node3703 = $("<span>");
      node3703.attr('style', "float: left");
      
      
      var node3704 = $("<input>");
      node3704.attr('type', "password");
      
      var ref3683 = style;
      if(ref3683.get() !== null) {
        node3704.attr('class', ref3683.get());
        subs__.addSub(ref3683.addEventListener('change', function(_, ref, val) {
          node3704.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3683.rebind());
      
      var ref3684 = placeholder;
      if(ref3684.get() !== null) {
        node3704.attr('placeholder', ref3684.get());
        subs__.addSub(ref3684.addEventListener('change', function(_, ref, val) {
          node3704.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3684.rebind());
      
      var ref3685 = s;
      node3704.val(""+ref3685.get());
      var ignore724 = false;
      subs__.addSub(ref3685.addEventListener('change', function(_, ref, val) {
        if(ignore724) return;
        node3704.val(""+val);
      }));
      subs__.addSub(ref3685.rebind());
      
      subs__.addSub(mobl.domBind(node3704, 'keyup change', function() {
        ignore724 = true;
        s.set(mobl.stringTomobl__String(node3704.val()));
        ignore724 = false;
      }));
      
      
      var val1889 = onchange.get();
      if(val1889 !== null) {
        subs__.addSub(mobl.domBind(node3704, 'change', val1889));
      }
      
      var val1890 = onkeyup.get();
      if(val1890 !== null) {
        subs__.addSub(mobl.domBind(node3704, 'keyup', val1890));
      }
      
      var val1891 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1891 !== null) {
        subs__.addSub(mobl.domBind(node3704, 'blur', val1891));
      }
      
      node3703.append(node3704);
      node3701.append(node3703);
      
      
      
      
    } else {
      
      var node3705 = $("<input>");
      node3705.attr('type', "password");
      
      var ref3687 = style;
      if(ref3687.get() !== null) {
        node3705.attr('class', ref3687.get());
        subs__.addSub(ref3687.addEventListener('change', function(_, ref, val) {
          node3705.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3687.rebind());
      
      var ref3688 = placeholder;
      if(ref3688.get() !== null) {
        node3705.attr('placeholder', ref3688.get());
        subs__.addSub(ref3688.addEventListener('change', function(_, ref, val) {
          node3705.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3688.rebind());
      
      var ref3689 = s;
      node3705.val(""+ref3689.get());
      var ignore726 = false;
      subs__.addSub(ref3689.addEventListener('change', function(_, ref, val) {
        if(ignore726) return;
        node3705.val(""+val);
      }));
      subs__.addSub(ref3689.rebind());
      
      subs__.addSub(mobl.domBind(node3705, 'keyup change', function() {
        ignore726 = true;
        s.set(mobl.stringTomobl__String(node3705.val()));
        ignore726 = false;
      }));
      
      
      var val1892 = onchange.get();
      if(val1892 !== null) {
        subs__.addSub(mobl.domBind(node3705, 'change', val1892));
      }
      
      var val1893 = onkeyup.get();
      if(val1893 !== null) {
        subs__.addSub(mobl.domBind(node3705, 'keyup', val1893));
      }
      
      var val1894 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1894 !== null) {
        subs__.addSub(mobl.domBind(node3705, 'blur', val1894));
      }
      
      node3701.append(node3705);
      
      
    }
  };
  renderCond900();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond900();
  }));
  
  callback(root9431); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root9432 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref3694 = style;
  if(ref3694.get() !== null) {
    sel.attr('class', ref3694.get());
    subs__.addSub(ref3694.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3694.rebind());
  
  var val1895 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after584(result__) {
                    var tmp6373 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after584);if(result__ !== undefined) after584(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1895 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1895));
  }
  
  
  var node3706 = mobl.loadingSpan();
  sel.append(node3706);
  var list651;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList651 = function() {
    var subs__ = listSubs__;
    list651 = options.get();
    list651.list(function(results651) {
      node3706.empty();
      for(var i1575 = 0; i1575 < results651.length; i1575++) {
        (function() {
          var iternode651 = $("<span>");
          node3706.append(iternode651);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results651), i1575), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results651), i1575), "_2");
          
          var node3707 = $("<option>");
          
          var ref3690 = optionDescription;
          node3707.text(""+ref3690.get());
          var ignore727 = false;
          subs__.addSub(ref3690.addEventListener('change', function(_, ref, val) {
            if(ignore727) return;
            node3707.text(""+val);
          }));
          subs__.addSub(ref3690.rebind());
          
          
          var ref3691 = optionStyle;
          if(ref3691.get() !== null) {
            node3707.attr('class', ref3691.get());
            subs__.addSub(ref3691.addEventListener('change', function(_, ref, val) {
              node3707.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3691.rebind());
          
          var ref3692 = optionValue;
          if(ref3692.get() !== null) {
            node3707.attr('value', ref3692.get());
            subs__.addSub(ref3692.addEventListener('change', function(_, ref, val) {
              node3707.attr('value', val);
            }));
            
          }
          subs__.addSub(ref3692.rebind());
          
          var ref3693 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref3693.get() !== null) {
            node3707.attr('selected', ref3693.get());
            subs__.addSub(ref3693.addEventListener('change', function(_, ref, val) {
              node3707.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node3707.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node3707.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref3693.rebind());
          
          iternode651.append(node3707);
          
          var oldNodes = iternode651;
          iternode651 = iternode651.contents();
          oldNodes.replaceWith(iternode651);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list651.addEventListener('change', function() { listSubs__.unsubscribe(); renderList651(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList651(true); }));
    });
  };
  renderList651();
  
  root9432.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root9432); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root9433 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7043 = $("<span>");
    root9433.append(nodes7043);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9434 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3708 = mobl.loadingSpan();
      root9434.append(node3708);
      var list652;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList652 = function() {
        var subs__ = listSubs__;
        list652 = tabs.get();
        list652.list(function(results652) {
          node3708.empty();
          for(var i1576 = 0; i1576 < results652.length; i1576++) {
            (function() {
              var iternode652 = $("<span>");
              node3708.append(iternode652);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results652), i1576), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results652), i1576), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results652), i1576), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp6335 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp6335.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp6335.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp6335.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp6335.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp6334 = mobl.ref(result__);
              
              var nodes7044 = $("<span>");
              iternode652.append(nodes7044);
              subs__.addSub((mobl.span)(tmp6335, mobl.ref(null), tmp6334, mobl.ref(null), function(_, callback) {
                var root9435 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7045 = $("<span>");
                root9435.append(nodes7045);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root9436 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9436); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7045;
                  nodes7045 = node.contents();
                  oldNodes.replaceWith(nodes7045);
                }));
                callback(root9435); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7044;
                nodes7044 = node.contents();
                oldNodes.replaceWith(nodes7044);
              }));
              
              var oldNodes = iternode652;
              iternode652 = iternode652.contents();
              oldNodes.replaceWith(iternode652);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list652.addEventListener('change', function() { listSubs__.unsubscribe(); renderList652(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList652(true); }));
        });
      };
      renderList652();
      
      callback(root9434); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7043;
      nodes7043 = node.contents();
      oldNodes.replaceWith(nodes7043);
    }));
    
    var node3709 = mobl.loadingSpan();
    root9433.append(node3709);
    var list653;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList653 = function() {
      var subs__ = listSubs__;
      list653 = tabs.get();
      list653.list(function(results653) {
        node3709.empty();
        for(var i1577 = 0; i1577 < results653.length; i1577++) {
          (function() {
            var iternode653 = $("<span>");
            node3709.append(iternode653);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results653), i1577), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results653), i1577), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results653), i1577), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp6336 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp6336.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp6336.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp6336.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp6336.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7046 = $("<span>");
            iternode653.append(nodes7046);
            subs__.addSub((mobl.block)(tmp6336, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9437 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7047 = $("<span>");
              root9437.append(nodes7047);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root9438 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7048 = $("<span>");
                root9438.append(nodes7048);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1494();
                }));
                
                function renderControl1494() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root9439 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9439); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7048;
                    nodes7048 = node.contents();
                    oldNodes.replaceWith(nodes7048);
                  }));
                }
                renderControl1494();
                callback(root9438); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7047;
                nodes7047 = node.contents();
                oldNodes.replaceWith(nodes7047);
              }));
              callback(root9437); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7046;
              nodes7046 = node.contents();
              oldNodes.replaceWith(nodes7046);
            }));
            
            var oldNodes = iternode653;
            iternode653 = iternode653.contents();
            oldNodes.replaceWith(iternode653);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list653.addEventListener('change', function() { listSubs__.unsubscribe(); renderList653(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList653(true); }));
      });
    };
    renderList653();
    
    callback(root9433); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7043 = $("<span>");
      root9433.append(nodes7043);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9434 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3708 = mobl.loadingSpan();
        root9434.append(node3708);
        var list652;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList652 = function() {
          var subs__ = listSubs__;
          list652 = tabs.get();
          list652.list(function(results652) {
            node3708.empty();
            for(var i1576 = 0; i1576 < results652.length; i1576++) {
              (function() {
                var iternode652 = $("<span>");
                node3708.append(iternode652);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results652), i1576), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results652), i1576), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results652), i1576), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp6335 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp6335.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp6335.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp6335.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp6335.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp6334 = mobl.ref(result__);
                
                var nodes7044 = $("<span>");
                iternode652.append(nodes7044);
                subs__.addSub((mobl.span)(tmp6335, mobl.ref(null), tmp6334, mobl.ref(null), function(_, callback) {
                  var root9435 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7045 = $("<span>");
                  root9435.append(nodes7045);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root9436 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9436); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7045;
                    nodes7045 = node.contents();
                    oldNodes.replaceWith(nodes7045);
                  }));
                  callback(root9435); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7044;
                  nodes7044 = node.contents();
                  oldNodes.replaceWith(nodes7044);
                }));
                
                var oldNodes = iternode652;
                iternode652 = iternode652.contents();
                oldNodes.replaceWith(iternode652);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list652.addEventListener('change', function() { listSubs__.unsubscribe(); renderList652(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList652(true); }));
          });
        };
        renderList652();
        
        callback(root9434); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7043;
        nodes7043 = node.contents();
        oldNodes.replaceWith(nodes7043);
      }));
      
      var node3709 = mobl.loadingSpan();
      root9433.append(node3709);
      var list653;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList653 = function() {
        var subs__ = listSubs__;
        list653 = tabs.get();
        list653.list(function(results653) {
          node3709.empty();
          for(var i1577 = 0; i1577 < results653.length; i1577++) {
            (function() {
              var iternode653 = $("<span>");
              node3709.append(iternode653);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results653), i1577), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results653), i1577), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results653), i1577), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp6336 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp6336.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp6336.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp6336.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp6336.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7046 = $("<span>");
              iternode653.append(nodes7046);
              subs__.addSub((mobl.block)(tmp6336, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9437 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7047 = $("<span>");
                root9437.append(nodes7047);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root9438 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7048 = $("<span>");
                  root9438.append(nodes7048);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1494();
                  }));
                  
                  function renderControl1494() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root9439 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9439); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7048;
                      nodes7048 = node.contents();
                      oldNodes.replaceWith(nodes7048);
                    }));
                  }
                  renderControl1494();
                  callback(root9438); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7047;
                  nodes7047 = node.contents();
                  oldNodes.replaceWith(nodes7047);
                }));
                callback(root9437); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7046;
                nodes7046 = node.contents();
                oldNodes.replaceWith(nodes7046);
              }));
              
              var oldNodes = iternode653;
              iternode653 = iternode653.contents();
              oldNodes.replaceWith(iternode653);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list653.addEventListener('change', function() { listSubs__.unsubscribe(); renderList653(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList653(true); }));
        });
      };
      renderList653();
      
      callback(root9433); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root9440 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3710 = $("<div>");
  
  var ref3698 = mobl.ref(ui.searchboxStyle);
  if(ref3698.get() !== null) {
    node3710.attr('class', ref3698.get());
    subs__.addSub(ref3698.addEventListener('change', function(_, ref, val) {
      node3710.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3698.rebind());
  
  
  var node3711 = $("<input>");
  node3711.attr('type', "search");
  
  var ref3695 = mobl.ref(ui.searchBoxInputStyle);
  if(ref3695.get() !== null) {
    node3711.attr('class', ref3695.get());
    subs__.addSub(ref3695.addEventListener('change', function(_, ref, val) {
      node3711.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3695.rebind());
  
  var ref3696 = placeholder;
  if(ref3696.get() !== null) {
    node3711.attr('placeholder', ref3696.get());
    subs__.addSub(ref3696.addEventListener('change', function(_, ref, val) {
      node3711.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3696.rebind());
  
  var ref3697 = s;
  node3711.val(""+ref3697.get());
  var ignore728 = false;
  subs__.addSub(ref3697.addEventListener('change', function(_, ref, val) {
    if(ignore728) return;
    node3711.val(""+val);
  }));
  subs__.addSub(ref3697.rebind());
  
  subs__.addSub(mobl.domBind(node3711, 'keyup change', function() {
    ignore728 = true;
    s.set(mobl.stringTomobl__String(node3711.val()));
    ignore728 = false;
  }));
  
  
  var val1896 = onsearch.get();
  if(val1896 !== null) {
    subs__.addSub(mobl.domBind(node3711, 'change', val1896));
  }
  
  var val1897 = onkeyup.get();
  if(val1897 !== null) {
    subs__.addSub(mobl.domBind(node3711, 'keyup', val1897));
  }
  node3711.attr('autocorrect', false);
  node3711.attr('autocapitalize', false);
  node3711.attr('autocomplete', false);
  
  node3710.append(node3711);
  root9440.append(node3710);
  callback(root9440); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root9441 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref3699 = mobl.ref(ui.contextMenuStyle);
  if(ref3699.get() !== null) {
    menu.attr('class', ref3699.get());
    subs__.addSub(ref3699.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3699.rebind());
  
  var nodes7049 = $("<span>");
  menu.append(nodes7049);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1495();
  }));
  
  function renderControl1495() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9442 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9442); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7049;
      nodes7049 = node.contents();
      oldNodes.replaceWith(nodes7049);
    }));
  }
  renderControl1495();
  root9441.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1898 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp6376 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1898 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1898));
  }
  
  root9441.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root9441); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root9443 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp6361 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp6361.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3712 = $("<span>");
  root9443.append(node3712);
  var condSubs901 = new mobl.CompSubscription();
  subs__.addSub(condSubs901);
  var oldValue901;
  var renderCond901 = function() {
    var value4021 = tmp6361.get();
    if(oldValue901 === value4021) return;
    oldValue901 = value4021;
    var subs__ = condSubs901;
    subs__.unsubscribe();
    node3712.empty();
    if(value4021) {
      items.get().one(function(result__) {
        var tmp6377 = result__;
        var current = mobl.ref(result__);
        
        var node3713 = $("<div>");
        node3713.attr('width', "100%");
        
        
        var node3714 = $("<div>");
        node3714.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7052 = $("<span>");
        node3714.append(nodes7052);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9446 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3717 = mobl.loadingSpan();
          root9446.append(node3717);
          var list654;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList654 = function() {
            var subs__ = listSubs__;
            list654 = items.get();
            list654.list(function(results654) {
              node3717.empty();
              for(var i1578 = 0; i1578 < results654.length; i1578++) {
                (function() {
                  var iternode654 = $("<span>");
                  node3717.append(iternode654);
                  var it;
                  it = mobl.ref(mobl.ref(results654), i1578);
                  var result__ = it.get() == current.get();
                  var tmp6342 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp6342.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp6342.set(it.get() == current.get());
                  }));
                  
                  
                  var node3718 = $("<span>");
                  iternode654.append(node3718);
                  var condSubs903 = new mobl.CompSubscription();
                  subs__.addSub(condSubs903);
                  var oldValue903;
                  var renderCond903 = function() {
                    var value4023 = tmp6342.get();
                    if(oldValue903 === value4023) return;
                    oldValue903 = value4023;
                    var subs__ = condSubs903;
                    subs__.unsubscribe();
                    node3718.empty();
                    if(value4023) {
                      var nodes7053 = $("<span>");
                      node3718.append(nodes7053);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9447 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7054 = $("<span>");
                        root9447.append(nodes7054);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1497();
                        }));
                        
                        function renderControl1497() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9448 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9448); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7054;
                            nodes7054 = node.contents();
                            oldNodes.replaceWith(nodes7054);
                          }));
                        }
                        renderControl1497();
                        callback(root9447); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7053;
                        nodes7053 = node.contents();
                        oldNodes.replaceWith(nodes7053);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp6341 = mobl.ref(result__);
                      
                      var nodes7055 = $("<span>");
                      node3718.append(nodes7055);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6341, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9449 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7056 = $("<span>");
                        root9449.append(nodes7056);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1498();
                        }));
                        
                        function renderControl1498() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9450 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9450); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7056;
                            nodes7056 = node.contents();
                            oldNodes.replaceWith(nodes7056);
                          }));
                        }
                        renderControl1498();
                        callback(root9449); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7055;
                        nodes7055 = node.contents();
                        oldNodes.replaceWith(nodes7055);
                      }));
                      
                      
                    }
                  };
                  renderCond903();
                  subs__.addSub(tmp6342.addEventListener('change', function() {
                    renderCond903();
                  }));
                  
                  
                  var oldNodes = iternode654;
                  iternode654 = iternode654.contents();
                  oldNodes.replaceWith(iternode654);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list654.addEventListener('change', function() { listSubs__.unsubscribe(); renderList654(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList654(true); }));
            });
          };
          renderList654();
          
          callback(root9446); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7052;
          nodes7052 = node.contents();
          oldNodes.replaceWith(nodes7052);
        }));
        node3713.append(node3714);
        
        var node3715 = $("<div>");
        node3715.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node3716 = $("<span>");
        node3715.append(node3716);
        var condSubs902 = new mobl.CompSubscription();
        subs__.addSub(condSubs902);
        var oldValue902;
        var renderCond902 = function() {
          var value4022 = current.get();
          if(oldValue902 === value4022) return;
          oldValue902 = value4022;
          var subs__ = condSubs902;
          subs__.unsubscribe();
          node3716.empty();
          if(value4022) {
            var nodes7050 = $("<span>");
            node3716.append(nodes7050);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1496();
            }));
            
            function renderControl1496() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9444 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9444); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7050;
                nodes7050 = node.contents();
                oldNodes.replaceWith(nodes7050);
              }));
            }
            renderControl1496();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp6343 = mobl.ref(result__);
            
            var nodes7051 = $("<span>");
            node3716.append(nodes7051);
            subs__.addSub((mobl.label)(tmp6343, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9445 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9445); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7051;
              nodes7051 = node.contents();
              oldNodes.replaceWith(nodes7051);
            }));
            
            
          }
        };
        renderCond902();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond902();
        }));
        
        node3713.append(node3715);
        node3712.append(node3713);
        
        
        
        
        
        
      });
    } else {
      var nodes7057 = $("<span>");
      node3712.append(nodes7057);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9451 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3719 = mobl.loadingSpan();
        root9451.append(node3719);
        var list655;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList655 = function() {
          var subs__ = listSubs__;
          list655 = items.get();
          list655.list(function(results655) {
            node3719.empty();
            for(var i1579 = 0; i1579 < results655.length; i1579++) {
              (function() {
                var iternode655 = $("<span>");
                node3719.append(iternode655);
                var it;
                it = mobl.ref(mobl.ref(results655), i1579);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp6378 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp6337 = mobl.ref(result__);
                
                var nodes7058 = $("<span>");
                iternode655.append(nodes7058);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6337, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9452 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7059 = $("<span>");
                  root9452.append(nodes7059);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1499();
                  }));
                  
                  function renderControl1499() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root9453 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9453); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7059;
                      nodes7059 = node.contents();
                      oldNodes.replaceWith(nodes7059);
                    }));
                  }
                  renderControl1499();
                  callback(root9452); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7058;
                  nodes7058 = node.contents();
                  oldNodes.replaceWith(nodes7058);
                }));
                
                var oldNodes = iternode655;
                iternode655 = iternode655.contents();
                oldNodes.replaceWith(iternode655);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list655.addEventListener('change', function() { listSubs__.unsubscribe(); renderList655(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList655(true); }));
          });
        };
        renderList655();
        
        callback(root9451); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7057;
        nodes7057 = node.contents();
        oldNodes.replaceWith(nodes7057);
      }));
      
      
    }
  };
  renderCond901();
  subs__.addSub(tmp6361.addEventListener('change', function() {
    renderCond901();
  }));
  
  callback(root9443); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9454 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp6340 = mobl.ref(result__);
  
  var nodes7060 = $("<span>");
  root9454.append(nodes7060);
  subs__.addSub((ui.header)(tmp6340, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9455 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6339 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6338 = mobl.ref(result__);
    
    var nodes7061 = $("<span>");
    root9455.append(nodes7061);
    subs__.addSub((ui.backButton)(tmp6338, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6339, function(_, callback) {
      var root9456 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9456); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7061;
      nodes7061 = node.contents();
      oldNodes.replaceWith(nodes7061);
    }));
    callback(root9455); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7060;
    nodes7060 = node.contents();
    oldNodes.replaceWith(nodes7060);
  }));
  var nodes7062 = $("<span>");
  root9454.append(nodes7062);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1500();
  }));
  
  function renderControl1500() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9457); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7062;
      nodes7062 = node.contents();
      oldNodes.replaceWith(nodes7062);
    }));
  }
  renderControl1500();
  callback(root9454); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root9458 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7063 = $("<span>");
  root9458.append(nodes7063);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9459 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3720 = mobl.loadingSpan();
    root9459.append(node3720);
    var list656;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList656 = function() {
      var subs__ = listSubs__;
      list656 = coll.get();
      list656.list(function(results656) {
        node3720.empty();
        for(var i1580 = 0; i1580 < results656.length; i1580++) {
          (function() {
            var iternode656 = $("<span>");
            node3720.append(iternode656);
            var it;
            it = mobl.ref(mobl.ref(results656), i1580);
            var result__ = it.get() == selected.get();
            var tmp6345 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp6345.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp6345.set(it.get() == selected.get());
            }));
            
            
            var node3721 = $("<span>");
            iternode656.append(node3721);
            var condSubs904 = new mobl.CompSubscription();
            subs__.addSub(condSubs904);
            var oldValue904;
            var renderCond904 = function() {
              var value4024 = tmp6345.get();
              if(oldValue904 === value4024) return;
              oldValue904 = value4024;
              var subs__ = condSubs904;
              subs__.unsubscribe();
              node3721.empty();
              if(value4024) {
                var nodes7064 = $("<span>");
                node3721.append(nodes7064);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9460 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7065 = $("<span>");
                  root9460.append(nodes7065);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1501();
                  }));
                  
                  function renderControl1501() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root9461 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9461); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7065;
                      nodes7065 = node.contents();
                      oldNodes.replaceWith(nodes7065);
                    }));
                  }
                  renderControl1501();
                  callback(root9460); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7064;
                  nodes7064 = node.contents();
                  oldNodes.replaceWith(nodes7064);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp6344 = mobl.ref(result__);
                
                var nodes7066 = $("<span>");
                node3721.append(nodes7066);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6344, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root9462 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7067 = $("<span>");
                  root9462.append(nodes7067);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1502();
                  }));
                  
                  function renderControl1502() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root9463 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9463); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7067;
                      nodes7067 = node.contents();
                      oldNodes.replaceWith(nodes7067);
                    }));
                  }
                  renderControl1502();
                  callback(root9462); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7066;
                  nodes7066 = node.contents();
                  oldNodes.replaceWith(nodes7066);
                }));
                
                
              }
            };
            renderCond904();
            subs__.addSub(tmp6345.addEventListener('change', function() {
              renderCond904();
            }));
            
            
            var oldNodes = iternode656;
            iternode656 = iternode656.contents();
            oldNodes.replaceWith(iternode656);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list656.addEventListener('change', function() { listSubs__.unsubscribe(); renderList656(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList656(true); }));
      });
    };
    renderList656();
    
    callback(root9459); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7063;
    nodes7063 = node.contents();
    oldNodes.replaceWith(nodes7063);
  }));
  callback(root9458); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root9464 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp6379 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp6346 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp6346.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp6346.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp6346.set(coll.get().limit(n.get()));
    }));
    
    
    var node3722 = mobl.loadingSpan();
    root9464.append(node3722);
    var list657;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList657 = function() {
      var subs__ = listSubs__;
      list657 = tmp6346.get();
      list657.list(function(results657) {
        node3722.empty();
        for(var i1581 = 0; i1581 < results657.length; i1581++) {
          (function() {
            var iternode657 = $("<span>");
            node3722.append(iternode657);
            var it;
            it = mobl.ref(mobl.ref(results657), i1581);
            var nodes7068 = $("<span>");
            iternode657.append(nodes7068);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1503();
            }));
            
            function renderControl1503() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root9465 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9465); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7068;
                nodes7068 = node.contents();
                oldNodes.replaceWith(nodes7068);
              }));
            }
            renderControl1503();
            
            var oldNodes = iternode657;
            iternode657 = iternode657.contents();
            oldNodes.replaceWith(iternode657);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list657.addEventListener('change', function() { listSubs__.unsubscribe(); renderList657(true); }));
        subs__.addSub(tmp6346.addEventListener('change', function() { listSubs__.unsubscribe(); renderList657(true); }));
      });
    };
    renderList657();
    
    var result__ = n.get() < total.get();
    var tmp6348 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp6348.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp6348.set(n.get() < total.get());
    }));
    
    
    var node3723 = $("<span>");
    root9464.append(node3723);
    var condSubs905 = new mobl.CompSubscription();
    subs__.addSub(condSubs905);
    var oldValue905;
    var renderCond905 = function() {
      var value4025 = tmp6348.get();
      if(oldValue905 === value4025) return;
      oldValue905 = value4025;
      var subs__ = condSubs905;
      subs__.unsubscribe();
      node3723.empty();
      if(value4025) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp6347 = mobl.ref(result__);
        
        var nodes7069 = $("<span>");
        node3723.append(nodes7069);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp6347, mobl.ref(null), function(_, callback) {
          var root9466 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7070 = $("<span>");
          root9466.append(nodes7070);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root9467 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9467); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7070;
            nodes7070 = node.contents();
            oldNodes.replaceWith(nodes7070);
          }));
          callback(root9466); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7069;
          nodes7069 = node.contents();
          oldNodes.replaceWith(nodes7069);
        }));
        
        
      } else {
        
      }
    };
    renderCond905();
    subs__.addSub(tmp6348.addEventListener('change', function() {
      renderCond905();
    }));
    
    callback(root9464); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root9468 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7071 = $("<span>");
  root9468.append(nodes7071);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9469 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3724 = mobl.loadingSpan();
    root9469.append(node3724);
    var list658;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList658 = function() {
      var subs__ = listSubs__;
      list658 = items.get();
      list658.list(function(results658) {
        node3724.empty();
        for(var i1582 = 0; i1582 < results658.length; i1582++) {
          (function() {
            var iternode658 = $("<span>");
            node3724.append(iternode658);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results658), i1582), "_1");it = mobl.ref(mobl.ref(mobl.ref(results658), i1582), "_2");
            var nodes7072 = $("<span>");
            iternode658.append(nodes7072);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root9470 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7073 = $("<span>");
              root9470.append(nodes7073);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root9471 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9471); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7073;
                nodes7073 = node.contents();
                oldNodes.replaceWith(nodes7073);
              }));
              callback(root9470); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7072;
              nodes7072 = node.contents();
              oldNodes.replaceWith(nodes7072);
            }));
            
            var oldNodes = iternode658;
            iternode658 = iternode658.contents();
            oldNodes.replaceWith(iternode658);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list658.addEventListener('change', function() { listSubs__.unsubscribe(); renderList658(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList658(true); }));
      });
    };
    renderList658();
    
    callback(root9469); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7071;
    nodes7071 = node.contents();
    oldNodes.replaceWith(nodes7071);
  }));
  callback(root9468); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root9472 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll4968) {
    coll4968 = coll4968.reverse();
    function processOne288() {
      var it;
      it = coll4968.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll4968.length > 0) processOne288(); else rest288();
      
    }
    function rest288() {
      var nodes7074 = $("<span>");
      root9472.append(nodes7074);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root9473 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp6349 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp6350 = mobl.ref(result__);
        
        var nodes7075 = $("<span>");
        root9473.append(nodes7075);
        subs__.addSub((ui.backButton)(tmp6350, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6349, function(_, callback) {
          var root9474 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9474); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7075;
          nodes7075 = node.contents();
          oldNodes.replaceWith(nodes7075);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll4967) {
                           coll4967 = coll4967.reverse();
                           function processOne287() {
                             var checked;var it;
                             var tmp6381 = coll4967.pop();
                             checked = tmp6381._1;it = tmp6381._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll4967.length > 0) processOne287(); else rest287();
                               
                             } else {
                               {
                                 
                                 if(coll4967.length > 0) processOne287(); else rest287();
                                 
                               }
                             }
                           }
                           function rest287() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll4967.length > 0) processOne287(); else rest287();
                         });
                         
                       };
        var tmp6351 = mobl.ref(result__);
        
        var nodes7076 = $("<span>");
        root9473.append(nodes7076);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6351, function(_, callback) {
          var root9475 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9475); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7076;
          nodes7076 = node.contents();
          oldNodes.replaceWith(nodes7076);
        }));
        callback(root9473); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7074;
        nodes7074 = node.contents();
        oldNodes.replaceWith(nodes7074);
      }));
      var nodes7077 = $("<span>");
      root9472.append(nodes7077);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root9476 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9476); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7077;
        nodes7077 = node.contents();
        oldNodes.replaceWith(nodes7077);
      }));
      callback(root9472); return subs__;
      
      
    }
    if(coll4968.length > 0) processOne288(); else rest288();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root9477 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7078 = $("<span>");
  root9477.append(nodes7078);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9478 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9478); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7078;
    nodes7078 = node.contents();
    oldNodes.replaceWith(nodes7078);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp6352 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp6352.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp6352.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp6352.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp6352.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp6352.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7079 = $("<span>");
  root9477.append(nodes7079);
  subs__.addSub((ui.masterDetail)(tmp6352, masterItem, detailItem, function(_, callback) {
    var root9479 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9479); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7079;
    nodes7079 = node.contents();
    oldNodes.replaceWith(nodes7079);
  }));
  callback(root9477); return subs__;
  
  
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
  var root9480 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7080 = $("<span>");
  root9480.append(nodes7080);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9481 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3725 = mobl.loadingSpan();
    root9481.append(node3725);
    var list659;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList659 = function() {
      var subs__ = listSubs__;
      list659 = sections.get();
      list659.list(function(results659) {
        node3725.empty();
        for(var i1583 = 0; i1583 < results659.length; i1583++) {
          (function() {
            var iternode659 = $("<span>");
            node3725.append(iternode659);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results659), i1583), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results659), i1583), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp6354 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6354.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6354.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp6354.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp6354.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp6353 = mobl.ref(result__);
            
            var nodes7081 = $("<span>");
            iternode659.append(nodes7081);
            subs__.addSub((mobl.span)(tmp6354, mobl.ref(null), tmp6353, mobl.ref(null), function(_, callback) {
              var root9482 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7082 = $("<span>");
              root9482.append(nodes7082);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9483 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9483); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7082;
                nodes7082 = node.contents();
                oldNodes.replaceWith(nodes7082);
              }));
              callback(root9482); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7081;
              nodes7081 = node.contents();
              oldNodes.replaceWith(nodes7081);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp6355 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6355.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6355.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp6355.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp6355.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7083 = $("<span>");
            iternode659.append(nodes7083);
            subs__.addSub((mobl.block)(tmp6355, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9484 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7084 = $("<span>");
              root9484.append(nodes7084);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1504();
              }));
              
              function renderControl1504() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root9485 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9485); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7084;
                  nodes7084 = node.contents();
                  oldNodes.replaceWith(nodes7084);
                }));
              }
              renderControl1504();
              callback(root9484); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7083;
              nodes7083 = node.contents();
              oldNodes.replaceWith(nodes7083);
            }));
            
            var oldNodes = iternode659;
            iternode659 = iternode659.contents();
            oldNodes.replaceWith(iternode659);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list659.addEventListener('change', function() { listSubs__.unsubscribe(); renderList659(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList659(true); }));
      });
    };
    renderList659();
    
    callback(root9481); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7080;
    nodes7080 = node.contents();
    oldNodes.replaceWith(nodes7080);
  }));
  callback(root9480); return subs__;
  
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
  var root9486 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3726 = $("<table>");
  
  var ref3700 = style;
  if(ref3700.get() !== null) {
    node3726.attr('class', ref3700.get());
    subs__.addSub(ref3700.addEventListener('change', function(_, ref, val) {
      node3726.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3700.rebind());
  
  var nodes7085 = $("<span>");
  node3726.append(nodes7085);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1505();
  }));
  
  function renderControl1505() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9487 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9487); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7085;
      nodes7085 = node.contents();
      oldNodes.replaceWith(nodes7085);
    }));
  }
  renderControl1505();
  root9486.append(node3726);
  callback(root9486); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root9488 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3727 = $("<tr>");
  
  var ref3701 = style;
  if(ref3701.get() !== null) {
    node3727.attr('class', ref3701.get());
    subs__.addSub(ref3701.addEventListener('change', function(_, ref, val) {
      node3727.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3701.rebind());
  
  var nodes7086 = $("<span>");
  node3727.append(nodes7086);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1506();
  }));
  
  function renderControl1506() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9489 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9489); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7086;
      nodes7086 = node.contents();
      oldNodes.replaceWith(nodes7086);
    }));
  }
  renderControl1506();
  root9488.append(node3727);
  callback(root9488); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root9490 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3728 = $("<td>");
  
  var ref3702 = width;
  if(ref3702.get() !== null) {
    node3728.attr('width', ref3702.get());
    subs__.addSub(ref3702.addEventListener('change', function(_, ref, val) {
      node3728.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3702.rebind());
  
  var ref3703 = style;
  if(ref3703.get() !== null) {
    node3728.attr('class', ref3703.get());
    subs__.addSub(ref3703.addEventListener('change', function(_, ref, val) {
      node3728.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3703.rebind());
  
  var nodes7087 = $("<span>");
  node3728.append(nodes7087);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1507();
  }));
  
  function renderControl1507() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9491 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9491); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7087;
      nodes7087 = node.contents();
      oldNodes.replaceWith(nodes7087);
    }));
  }
  renderControl1507();
  root9490.append(node3728);
  callback(root9490); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root9492 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3729 = $("<td>");
  
  var ref3704 = width;
  if(ref3704.get() !== null) {
    node3729.attr('width', ref3704.get());
    subs__.addSub(ref3704.addEventListener('change', function(_, ref, val) {
      node3729.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3704.rebind());
  
  var ref3705 = style;
  if(ref3705.get() !== null) {
    node3729.attr('class', ref3705.get());
    subs__.addSub(ref3705.addEventListener('change', function(_, ref, val) {
      node3729.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3705.rebind());
  
  var nodes7088 = $("<span>");
  node3729.append(nodes7088);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1508();
  }));
  
  function renderControl1508() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9493 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9493); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7088;
      nodes7088 = node.contents();
      oldNodes.replaceWith(nodes7088);
    }));
  }
  renderControl1508();
  root9492.append(node3729);
  callback(root9492); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root9494 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3730 = $("<td>");
  
  var ref3706 = width;
  if(ref3706.get() !== null) {
    node3730.attr('width', ref3706.get());
    subs__.addSub(ref3706.addEventListener('change', function(_, ref, val) {
      node3730.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3706.rebind());
  
  var ref3707 = style;
  if(ref3707.get() !== null) {
    node3730.attr('class', ref3707.get());
    subs__.addSub(ref3707.addEventListener('change', function(_, ref, val) {
      node3730.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3707.rebind());
  
  
  var node3731 = $("<strong>");
  
  var nodes7089 = $("<span>");
  node3731.append(nodes7089);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1509();
  }));
  
  function renderControl1509() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9495 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9495); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7089;
      nodes7089 = node.contents();
      oldNodes.replaceWith(nodes7089);
    }));
  }
  renderControl1509();
  node3730.append(node3731);
  root9494.append(node3730);
  callback(root9494); return subs__;
  
  
  
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
  items.list(function(coll4969) {
    coll4969 = coll4969.reverse();
    function processOne289() {
      var item;
      item = coll4969.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll4969.length > 0) processOne289(); else rest289();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll4969.length > 0) processOne289(); else rest289();
          
        }
      }
    }
    function rest289() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll4969.length > 0) processOne289(); else rest289();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrentQ = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root9496 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp6383 = result__;
    var current = mobl.ref(result__);
    
    var node3732 = $("<div>");
    node3732.attr('width', "100%");
    
    
    var node3733 = $("<div>");
    node3733.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes7091 = $("<span>");
    node3733.append(nodes7091);
    subs__.addSub((ui.group)(function(_, callback) {
      var root9498 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3738 = mobl.loadingSpan();
      root9498.append(node3738);
      var list660;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList660 = function() {
        var subs__ = listSubs__;
        list660 = items.get();
        list660.list(function(results660) {
          node3738.empty();
          for(var i1584 = 0; i1584 < results660.length; i1584++) {
            (function() {
              var iternode660 = $("<span>");
              node3738.append(iternode660);
              var it;
              it = mobl.ref(mobl.ref(results660), i1584);
              var result__ = it.get() == current.get();
              var tmp6359 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp6359.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp6359.set(it.get() == current.get());
              }));
              
              
              var node3739 = $("<span>");
              iternode660.append(node3739);
              var condSubs907 = new mobl.CompSubscription();
              subs__.addSub(condSubs907);
              var oldValue907;
              var renderCond907 = function() {
                var value4027 = tmp6359.get();
                if(oldValue907 === value4027) return;
                oldValue907 = value4027;
                var subs__ = condSubs907;
                subs__.unsubscribe();
                node3739.empty();
                if(value4027) {
                  var nodes7092 = $("<span>");
                  node3739.append(nodes7092);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root9499 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp6386 = result__;
                      var tmp6356 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6384 = result__;
                          var result__ = tmp6384;
                          tmp6356.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6385 = result__;
                          var result__ = tmp6385;
                          tmp6356.set(result__);
                          
                        });
                      }));
                      
                      var nodes7093 = $("<span>");
                      root9499.append(nodes7093);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1511();
                      }));
                      
                      function renderControl1511() {
                        subs__.addSub((masterItem.get())(it, tmp6356, function(elements, callback) {
                          var root9500 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root9500); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes7093;
                          nodes7093 = node.contents();
                          oldNodes.replaceWith(nodes7093);
                        }));
                      }
                      renderControl1511();
                      callback(root9499); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7092;
                    nodes7092 = node.contents();
                    oldNodes.replaceWith(nodes7092);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp6358 = mobl.ref(result__);
                  
                  var nodes7094 = $("<span>");
                  node3739.append(nodes7094);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6358, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root9501 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp6389 = result__;
                      var tmp6357 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6387 = result__;
                          var result__ = tmp6387;
                          tmp6357.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6388 = result__;
                          var result__ = tmp6388;
                          tmp6357.set(result__);
                          
                        });
                      }));
                      
                      var nodes7095 = $("<span>");
                      root9501.append(nodes7095);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1512();
                      }));
                      
                      function renderControl1512() {
                        subs__.addSub((masterItem.get())(it, tmp6357, function(elements, callback) {
                          var root9502 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root9502); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes7095;
                          nodes7095 = node.contents();
                          oldNodes.replaceWith(nodes7095);
                        }));
                      }
                      renderControl1512();
                      callback(root9501); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7094;
                    nodes7094 = node.contents();
                    oldNodes.replaceWith(nodes7094);
                  }));
                  
                  
                }
              };
              renderCond907();
              subs__.addSub(tmp6359.addEventListener('change', function() {
                renderCond907();
              }));
              
              
              var oldNodes = iternode660;
              iternode660 = iternode660.contents();
              oldNodes.replaceWith(iternode660);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list660.addEventListener('change', function() { listSubs__.unsubscribe(); renderList660(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList660(true); }));
        });
      };
      renderList660();
      
      callback(root9498); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7091;
      nodes7091 = node.contents();
      oldNodes.replaceWith(nodes7091);
    }));
    node3732.append(node3733);
    
    var node3734 = $("<div>");
    node3734.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    var result__ = current.get() && ui.visible.get();
    var tmp6360 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp6360.set(current.get() && ui.visible.get());
    }));
    subs__.addSub(ui.visible.addEventListener('change', function() {
      tmp6360.set(current.get() && ui.visible.get());
    }));
    
    
    var node3735 = $("<span>");
    node3734.append(node3735);
    var condSubs906 = new mobl.CompSubscription();
    subs__.addSub(condSubs906);
    var oldValue906;
    var renderCond906 = function() {
      var value4026 = tmp6360.get();
      if(oldValue906 === value4026) return;
      oldValue906 = value4026;
      var subs__ = condSubs906;
      subs__.unsubscribe();
      node3735.empty();
      if(value4026) {
        var nodes7090 = $("<span>");
        node3735.append(nodes7090);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl1510();
        }));
        
        function renderControl1510() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root9497 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9497); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7090;
            nodes7090 = node.contents();
            oldNodes.replaceWith(nodes7090);
          }));
        }
        renderControl1510();
        
        
      } else {
        
        var node3736 = $("<div>");
        node3736.attr('style', "padding:20px");
        
        
        var node3737 = $("<h2>");
        
        
        node3737.append("Add more questions.");
        node3736.append(node3737);
        node3735.append(node3736);
        
        
        
      }
    };
    renderCond906();
    subs__.addSub(tmp6360.addEventListener('change', function() {
      renderCond906();
    }));
    
    node3732.append(node3734);
    root9496.append(node3732);
    callback(root9496); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
