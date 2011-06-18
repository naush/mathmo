mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root5603 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1906 = $("<span>");
  root5603.append(node1906);
  var condSubs470 = new mobl.CompSubscription();
  subs__.addSub(condSubs470);
  var oldValue470;
  var renderCond470 = function() {
    var value2302 = value.get();
    if(oldValue470 === value2302) return;
    oldValue470 = value2302;
    var subs__ = condSubs470;
    subs__.unsubscribe();
    node1906.empty();
    if(value2302) {
      var nodes4345 = $("<span>");
      node1906.append(nodes4345);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl750();
      }));
      
      function renderControl750() {
        subs__.addSub((elements)(function(elements, callback) {
          var root5604 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5604); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4345;
          nodes4345 = node.contents();
          oldNodes.replaceWith(nodes4345);
        }));
      }
      renderControl750();
      
      
    } else {
      var nodes4346 = $("<span>");
      node1906.append(nodes4346);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5605 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes4347 = $("<span>");
        root5605.append(nodes4347);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root5606 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5606); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4347;
          nodes4347 = node.contents();
          oldNodes.replaceWith(nodes4347);
        }));
        var nodes4348 = $("<span>");
        root5605.append(nodes4348);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root5607 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5607); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4348;
          nodes4348 = node.contents();
          oldNodes.replaceWith(nodes4348);
        }));
        callback(root5605); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4346;
        nodes4346 = node.contents();
        oldNodes.replaceWith(nodes4346);
      }));
      
      
    }
  };
  renderCond470();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond470();
  }));
  
  callback(root5603); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root5608 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1907 = $("<div>");
  
  var ref1853 = mobl.ref(ui.headerStyle);
  if(ref1853.get() !== null) {
    node1907.attr('class', ref1853.get());
    subs__.addSub(ref1853.addEventListener('change', function(_, ref, val) {
      node1907.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1853.rebind());
  
  var val940 = onclick.get();
  if(val940 !== null) {
    subs__.addSub(mobl.domBind(node1907, 'tap', val940));
  }
  
  var ref1854 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1854.get() !== null) {
    node1907.attr('style', ref1854.get());
    subs__.addSub(ref1854.addEventListener('change', function(_, ref, val) {
      node1907.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1907.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1854.rebind());
  
  
  var node1910 = $("<div>");
  
  var ref1852 = mobl.ref(ui.headerContainerStyle);
  if(ref1852.get() !== null) {
    node1910.attr('class', ref1852.get());
    subs__.addSub(ref1852.addEventListener('change', function(_, ref, val) {
      node1910.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1852.rebind());
  
  
  var node1911 = $("<div>");
  
  var ref1850 = text;
  node1911.text(""+ref1850.get());
  var ignore364 = false;
  subs__.addSub(ref1850.addEventListener('change', function(_, ref, val) {
    if(ignore364) return;
    node1911.text(""+val);
  }));
  subs__.addSub(ref1850.rebind());
  
  
  var ref1851 = mobl.ref(ui.headerTextStyle);
  if(ref1851.get() !== null) {
    node1911.attr('class', ref1851.get());
    subs__.addSub(ref1851.addEventListener('change', function(_, ref, val) {
      node1911.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1851.rebind());
  
  node1910.append(node1911);
  node1907.append(node1910);
  var nodes4349 = $("<span>");
  node1907.append(nodes4349);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl751();
  }));
  
  function renderControl751() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5609 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5609); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4349;
      nodes4349 = node.contents();
      oldNodes.replaceWith(nodes4349);
    }));
  }
  renderControl751();
  root5608.append(node1907);
  
  var node1908 = $("<span>");
  root5608.append(node1908);
  var condSubs471 = new mobl.CompSubscription();
  subs__.addSub(condSubs471);
  var oldValue471;
  var renderCond471 = function() {
    var value2303 = fixedPosition.get();
    if(oldValue471 === value2303) return;
    oldValue471 = value2303;
    var subs__ = condSubs471;
    subs__.unsubscribe();
    node1908.empty();
    if(value2303) {
      
      var node1909 = $("<div>");
      node1909.attr('id', "hello");
      node1909.attr('style', "height: 2.9em;");
      
      node1908.append(node1909);
      
      
    } else {
      
    }
  };
  renderCond471();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond471();
  }));
  
  callback(root5608); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5610 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1855 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1855.get() !== null) {
    sp.attr('class', ref1855.get());
    subs__.addSub(ref1855.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1855.rebind());
  
  var val941 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val941 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val941));
  }
  
  var val942 = function(event, callback) {
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
  if(val942 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val942));
  }
  
  var val943 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after288(result__) {
                    var tmp4038 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after288);if(result__ !== undefined) after288(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val943 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val943));
  }
  
  var val944 = function(event, callback) {
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
  if(val944 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val944));
  }
  
  var ref1856 = text;
  sp.text(""+ref1856.get());
  var ignore365 = false;
  subs__.addSub(ref1856.addEventListener('change', function(_, ref, val) {
    if(ignore365) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1856.rebind());
  
  
  root5610.append(sp);
  callback(root5610); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5611 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4350 = $("<span>");
  root5611.append(nodes4350);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5612 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5612); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4350;
    nodes4350 = node.contents();
    oldNodes.replaceWith(nodes4350);
  }));
  callback(root5611); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5613 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4351 = $("<span>");
  root5613.append(nodes4351);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5614 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5614); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4351;
    nodes4351 = node.contents();
    oldNodes.replaceWith(nodes4351);
  }));
  callback(root5613); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root5615 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1912 = $("<ul>");
  
  var ref1857 = mobl.ref(ui.groupStyle);
  if(ref1857.get() !== null) {
    node1912.attr('class', ref1857.get());
    subs__.addSub(ref1857.addEventListener('change', function(_, ref, val) {
      node1912.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1857.rebind());
  
  var nodes4352 = $("<span>");
  node1912.append(nodes4352);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl752();
  }));
  
  function renderControl752() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5616); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4352;
      nodes4352 = node.contents();
      oldNodes.replaceWith(nodes4352);
    }));
  }
  renderControl752();
  root5615.append(node1912);
  callback(root5615); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root5617 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1913 = $("<img>");
  
  var ref1858 = url;
  if(ref1858.get() !== null) {
    node1913.attr('src', ref1858.get());
    subs__.addSub(ref1858.addEventListener('change', function(_, ref, val) {
      node1913.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1858.rebind());
  
  var ref1859 = width;
  if(ref1859.get() !== null) {
    node1913.attr('width', ref1859.get());
    subs__.addSub(ref1859.addEventListener('change', function(_, ref, val) {
      node1913.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1859.rebind());
  
  var ref1860 = height;
  if(ref1860.get() !== null) {
    node1913.attr('height', ref1860.get());
    subs__.addSub(ref1860.addEventListener('change', function(_, ref, val) {
      node1913.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1860.rebind());
  
  var ref1861 = style;
  if(ref1861.get() !== null) {
    node1913.attr('class', ref1861.get());
    subs__.addSub(ref1861.addEventListener('change', function(_, ref, val) {
      node1913.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1861.rebind());
  
  var val945 = onclick.get();
  if(val945 !== null) {
    subs__.addSub(mobl.domBind(node1913, 'tap', val945));
  }
  
  var ref1862 = valign;
  if(ref1862.get() !== null) {
    node1913.attr('valign', ref1862.get());
    subs__.addSub(ref1862.addEventListener('change', function(_, ref, val) {
      node1913.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1862.rebind());
  
  var ref1863 = align;
  if(ref1863.get() !== null) {
    node1913.attr('align', ref1863.get());
    subs__.addSub(ref1863.addEventListener('change', function(_, ref, val) {
      node1913.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1863.rebind());
  
  root5617.append(node1913);
  callback(root5617); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root5618 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1864 = mobl.ref(ui.itemStyle);
  if(ref1864.get() !== null) {
    el.attr('class', ref1864.get());
    subs__.addSub(ref1864.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1864.rebind());
  
  var ref1865 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1865.get() !== null) {
    el.attr('class', ref1865.get());
    subs__.addSub(ref1865.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1865.rebind());
  
  var val946 = onswipe.get();
  if(val946 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val946));
  }
  
  var val947 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4039 = result__;
                                           function after289(result__) {
                                             var tmp4040 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after289);if(result__ !== undefined) after289(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4041 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val947 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val947));
  }
  
  var nodes4353 = $("<span>");
  el.append(nodes4353);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl753();
  }));
  
  function renderControl753() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5619 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5619); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4353;
      nodes4353 = node.contents();
      oldNodes.replaceWith(nodes4353);
    }));
  }
  renderControl753();
  root5618.append(el);
  callback(root5618); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root5620 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1914 = $("<input>");
  node1914.attr('type', "checkbox");
  
  var ref1867 = b;
  node1914.attr('checked', !!ref1867.get());
  subs__.addSub(ref1867.addEventListener('change', function(_, ref, val) {
    if(ref === ref1867) node1914.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1914, 'change', function() {
    b.set(!!node1914.attr('checked'));
  }));
  
  var val949 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val949 !== null) {
    subs__.addSub(mobl.domBind(node1914, 'tap', val949));
  }
  
  var val950 = onchange.get();
  if(val950 !== null) {
    subs__.addSub(mobl.domBind(node1914, 'change', val950));
  }
  
  root5620.append(node1914);
  
  root5620.append(" ");
  
  var node1915 = $("<span>");
  
  var ref1866 = label;
  node1915.text(""+ref1866.get());
  var ignore366 = false;
  subs__.addSub(ref1866.addEventListener('change', function(_, ref, val) {
    if(ignore366) return;
    node1915.text(""+val);
  }));
  subs__.addSub(ref1866.rebind());
  
  
  var val948 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after290(result__) {
                    var tmp4042 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after290);if(result__ !== undefined) after290(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val948 !== null) {
    subs__.addSub(mobl.domBind(node1915, 'tap', val948));
  }
  
  root5620.append(node1915);
  callback(root5620); return subs__;
  
  
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
  var root5621 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1916 = $("<span>");
  root5621.append(node1916);
  var condSubs472 = new mobl.CompSubscription();
  subs__.addSub(condSubs472);
  var oldValue472;
  var renderCond472 = function() {
    var value2304 = label.get();
    if(oldValue472 === value2304) return;
    oldValue472 = value2304;
    var subs__ = condSubs472;
    subs__.unsubscribe();
    node1916.empty();
    if(value2304) {
      var nodes4354 = $("<span>");
      node1916.append(nodes4354);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root5622 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5622); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4354;
        nodes4354 = node.contents();
        oldNodes.replaceWith(nodes4354);
      }));
      
      
    } else {
      
    }
  };
  renderCond472();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond472();
  }));
  
  
  var node1917 = $("<span>");
  root5621.append(node1917);
  var condSubs473 = new mobl.CompSubscription();
  subs__.addSub(condSubs473);
  var oldValue473;
  var renderCond473 = function() {
    var value2305 = validator.get();
    if(oldValue473 === value2305) return;
    oldValue473 = value2305;
    var subs__ = condSubs473;
    subs__.unsubscribe();
    node1917.empty();
    if(value2305) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after294(result__) {
        var tmp4043 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp4044 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1918 = $("<input>");
        
        var ref1868 = inputType;
        if(ref1868.get() !== null) {
          node1918.attr('type', ref1868.get());
          subs__.addSub(ref1868.addEventListener('change', function(_, ref, val) {
            node1918.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1868.rebind());
        
        var ref1869 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1869.get() !== null) {
          node1918.attr('class', ref1869.get());
          subs__.addSub(ref1869.addEventListener('change', function(_, ref, val) {
            node1918.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1918.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1918.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1918.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1869.rebind());
        
        var ref1870 = placeholder;
        if(ref1870.get() !== null) {
          node1918.attr('placeholder', ref1870.get());
          subs__.addSub(ref1870.addEventListener('change', function(_, ref, val) {
            node1918.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1870.rebind());
        
        var ref1871 = temp;
        node1918.val(""+ref1871.get());
        var ignore367 = false;
        subs__.addSub(ref1871.addEventListener('change', function(_, ref, val) {
          if(ignore367) return;
          node1918.val(""+val);
        }));
        subs__.addSub(ref1871.rebind());
        
        subs__.addSub(mobl.domBind(node1918, 'keyup change', function() {
          ignore367 = true;
          temp.set(mobl.stringTomobl__String(node1918.val()));
          ignore367 = false;
        }));
        
        
        var val951 = onchange.get();
        if(val951 !== null) {
          subs__.addSub(mobl.domBind(node1918, 'change', val951));
        }
        
        var val952 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after291(result__) {
                          var tmp4045 = result__;
                          function after292(result__) {
                            var tmp4046 = result__;
                            var result__ = tmp4046;
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
                          var result__ = validator.get()(temp.get(), after292);if(result__ !== undefined) after292(result__);
                        }
                        var result__ = onkeyup.get()(event, after291);if(result__ !== undefined) after291(result__);
                      } else {
                        {
                          function after293(result__) {
                            var tmp4046 = result__;
                            var result__ = tmp4046;
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
                          var result__ = validator.get()(temp.get(), after293);if(result__ !== undefined) after293(result__);
                        }
                      }
                    };
        if(val952 !== null) {
          subs__.addSub(mobl.domBind(node1918, 'keyup', val952));
        }
        
        var val953 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val953 !== null) {
          subs__.addSub(mobl.domBind(node1918, 'blur', val953));
        }
        
        node1917.append(node1918);
        var nodes4355 = $("<span>");
        node1917.append(nodes4355);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root5623 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5623); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4355;
          nodes4355 = node.contents();
          oldNodes.replaceWith(nodes4355);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after294);if(result__ !== undefined) after294(result__);
    } else {
      
      var node1919 = $("<input>");
      
      var ref1872 = inputType;
      if(ref1872.get() !== null) {
        node1919.attr('type', ref1872.get());
        subs__.addSub(ref1872.addEventListener('change', function(_, ref, val) {
          node1919.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1872.rebind());
      
      var ref1873 = style;
      if(ref1873.get() !== null) {
        node1919.attr('class', ref1873.get());
        subs__.addSub(ref1873.addEventListener('change', function(_, ref, val) {
          node1919.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1873.rebind());
      
      var ref1874 = placeholder;
      if(ref1874.get() !== null) {
        node1919.attr('placeholder', ref1874.get());
        subs__.addSub(ref1874.addEventListener('change', function(_, ref, val) {
          node1919.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1874.rebind());
      
      var ref1875 = s;
      node1919.val(""+ref1875.get());
      var ignore368 = false;
      subs__.addSub(ref1875.addEventListener('change', function(_, ref, val) {
        if(ignore368) return;
        node1919.val(""+val);
      }));
      subs__.addSub(ref1875.rebind());
      
      subs__.addSub(mobl.domBind(node1919, 'keyup change', function() {
        ignore368 = true;
        s.set(mobl.stringTomobl__String(node1919.val()));
        ignore368 = false;
      }));
      
      
      var val954 = onchange.get();
      if(val954 !== null) {
        subs__.addSub(mobl.domBind(node1919, 'change', val954));
      }
      
      var val955 = onkeyup.get();
      if(val955 !== null) {
        subs__.addSub(mobl.domBind(node1919, 'keyup', val955));
      }
      
      var val956 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val956 !== null) {
        subs__.addSub(mobl.domBind(node1919, 'blur', val956));
      }
      
      node1917.append(node1919);
      
      
    }
  };
  renderCond473();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond473();
  }));
  
  callback(root5621); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5624 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4356 = $("<span>");
  root5624.append(nodes4356);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5625 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5625); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4356;
    nodes4356 = node.contents();
    oldNodes.replaceWith(nodes4356);
  }));
  callback(root5624); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5626 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4357 = $("<span>");
  root5626.append(nodes4357);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5627 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5627); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4357;
    nodes4357 = node.contents();
    oldNodes.replaceWith(nodes4357);
  }));
  callback(root5626); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root5628 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1920 = $("<span>");
  root5628.append(node1920);
  var condSubs474 = new mobl.CompSubscription();
  subs__.addSub(condSubs474);
  var oldValue474;
  var renderCond474 = function() {
    var value2306 = label.get();
    if(oldValue474 === value2306) return;
    oldValue474 = value2306;
    var subs__ = condSubs474;
    subs__.unsubscribe();
    node1920.empty();
    if(value2306) {
      var nodes4358 = $("<span>");
      node1920.append(nodes4358);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root5629 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5629); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4358;
        nodes4358 = node.contents();
        oldNodes.replaceWith(nodes4358);
      }));
      
      
    } else {
      
    }
  };
  renderCond474();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond474();
  }));
  
  
  var node1921 = $("<input>");
  node1921.attr('type', "range");
  
  var ref1876 = n;
  node1921.val(""+ref1876.get());
  var ignore369 = false;
  subs__.addSub(ref1876.addEventListener('change', function(_, ref, val) {
    if(ignore369) return;
    node1921.val(""+val);
  }));
  subs__.addSub(ref1876.rebind());
  
  subs__.addSub(mobl.domBind(node1921, 'keyup change', function() {
    ignore369 = true;
    n.set(mobl.stringTomobl__Num(node1921.val()));
    ignore369 = false;
  }));
  
  
  var ref1877 = min;
  if(ref1877.get() !== null) {
    node1921.attr('min', ref1877.get());
    subs__.addSub(ref1877.addEventListener('change', function(_, ref, val) {
      node1921.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1877.rebind());
  
  var ref1878 = max;
  if(ref1878.get() !== null) {
    node1921.attr('max', ref1878.get());
    subs__.addSub(ref1878.addEventListener('change', function(_, ref, val) {
      node1921.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1878.rebind());
  
  var ref1879 = step;
  if(ref1879.get() !== null) {
    node1921.attr('step', ref1879.get());
    subs__.addSub(ref1879.addEventListener('change', function(_, ref, val) {
      node1921.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1879.rebind());
  node1921.attr('style', "width: 99%;");
  
  var val957 = onchange.get();
  if(val957 !== null) {
    subs__.addSub(mobl.domBind(node1921, 'change', val957));
  }
  
  var val958 = onkeyup.get();
  if(val958 !== null) {
    subs__.addSub(mobl.domBind(node1921, 'keyup', val958));
  }
  
  var ref1880 = placeholder;
  if(ref1880.get() !== null) {
    node1921.attr('placeholder', ref1880.get());
    subs__.addSub(ref1880.addEventListener('change', function(_, ref, val) {
      node1921.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1880.rebind());
  
  root5628.append(node1921);
  callback(root5628); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5630 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after295(result__) {
      var tmp4047 = result__;
      var result__ = tmp4047;
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
    var result__ = validator.get()(n2, after295);if(result__ !== undefined) after295(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes4359 = $("<span>");
  root5630.append(nodes4359);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5631 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5631); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4359;
    nodes4359 = node.contents();
    oldNodes.replaceWith(nodes4359);
  }));
  callback(root5630); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root5632 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1922 = $("<span>");
  root5632.append(node1922);
  var condSubs475 = new mobl.CompSubscription();
  subs__.addSub(condSubs475);
  var oldValue475;
  var renderCond475 = function() {
    var value2307 = label.get();
    if(oldValue475 === value2307) return;
    oldValue475 = value2307;
    var subs__ = condSubs475;
    subs__.unsubscribe();
    node1922.empty();
    if(value2307) {
      
      var node1923 = $("<span>");
      node1923.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1884 = label;
      node1923.text(""+ref1884.get());
      var ignore371 = false;
      subs__.addSub(ref1884.addEventListener('change', function(_, ref, val) {
        if(ignore371) return;
        node1923.text(""+val);
      }));
      subs__.addSub(ref1884.rebind());
      
      
      node1922.append(node1923);
      
      var node1924 = $("<span>");
      node1924.attr('style', "float: left");
      
      
      var node1925 = $("<input>");
      node1925.attr('type', "password");
      
      var ref1881 = style;
      if(ref1881.get() !== null) {
        node1925.attr('class', ref1881.get());
        subs__.addSub(ref1881.addEventListener('change', function(_, ref, val) {
          node1925.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1881.rebind());
      
      var ref1882 = placeholder;
      if(ref1882.get() !== null) {
        node1925.attr('placeholder', ref1882.get());
        subs__.addSub(ref1882.addEventListener('change', function(_, ref, val) {
          node1925.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1882.rebind());
      
      var ref1883 = s;
      node1925.val(""+ref1883.get());
      var ignore370 = false;
      subs__.addSub(ref1883.addEventListener('change', function(_, ref, val) {
        if(ignore370) return;
        node1925.val(""+val);
      }));
      subs__.addSub(ref1883.rebind());
      
      subs__.addSub(mobl.domBind(node1925, 'keyup change', function() {
        ignore370 = true;
        s.set(mobl.stringTomobl__String(node1925.val()));
        ignore370 = false;
      }));
      
      
      var val959 = onchange.get();
      if(val959 !== null) {
        subs__.addSub(mobl.domBind(node1925, 'change', val959));
      }
      
      var val960 = onkeyup.get();
      if(val960 !== null) {
        subs__.addSub(mobl.domBind(node1925, 'keyup', val960));
      }
      
      var val961 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val961 !== null) {
        subs__.addSub(mobl.domBind(node1925, 'blur', val961));
      }
      
      node1924.append(node1925);
      node1922.append(node1924);
      
      
      
      
    } else {
      
      var node1926 = $("<input>");
      node1926.attr('type', "password");
      
      var ref1885 = style;
      if(ref1885.get() !== null) {
        node1926.attr('class', ref1885.get());
        subs__.addSub(ref1885.addEventListener('change', function(_, ref, val) {
          node1926.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1885.rebind());
      
      var ref1886 = placeholder;
      if(ref1886.get() !== null) {
        node1926.attr('placeholder', ref1886.get());
        subs__.addSub(ref1886.addEventListener('change', function(_, ref, val) {
          node1926.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1886.rebind());
      
      var ref1887 = s;
      node1926.val(""+ref1887.get());
      var ignore372 = false;
      subs__.addSub(ref1887.addEventListener('change', function(_, ref, val) {
        if(ignore372) return;
        node1926.val(""+val);
      }));
      subs__.addSub(ref1887.rebind());
      
      subs__.addSub(mobl.domBind(node1926, 'keyup change', function() {
        ignore372 = true;
        s.set(mobl.stringTomobl__String(node1926.val()));
        ignore372 = false;
      }));
      
      
      var val962 = onchange.get();
      if(val962 !== null) {
        subs__.addSub(mobl.domBind(node1926, 'change', val962));
      }
      
      var val963 = onkeyup.get();
      if(val963 !== null) {
        subs__.addSub(mobl.domBind(node1926, 'keyup', val963));
      }
      
      var val964 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val964 !== null) {
        subs__.addSub(mobl.domBind(node1926, 'blur', val964));
      }
      
      node1922.append(node1926);
      
      
    }
  };
  renderCond475();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond475();
  }));
  
  callback(root5632); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root5633 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1892 = style;
  if(ref1892.get() !== null) {
    sel.attr('class', ref1892.get());
    subs__.addSub(ref1892.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1892.rebind());
  
  var val965 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after296(result__) {
                    var tmp4049 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after296);if(result__ !== undefined) after296(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val965 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val965));
  }
  
  
  var node1927 = mobl.loadingSpan();
  sel.append(node1927);
  var list323;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList323 = function() {
    var subs__ = listSubs__;
    list323 = options.get();
    list323.list(function(results323) {
      node1927.empty();
      for(var i1169 = 0; i1169 < results323.length; i1169++) {
        (function() {
          var iternode323 = $("<span>");
          node1927.append(iternode323);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results323), i1169), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results323), i1169), "_2");
          
          var node1928 = $("<option>");
          
          var ref1888 = optionDescription;
          node1928.text(""+ref1888.get());
          var ignore373 = false;
          subs__.addSub(ref1888.addEventListener('change', function(_, ref, val) {
            if(ignore373) return;
            node1928.text(""+val);
          }));
          subs__.addSub(ref1888.rebind());
          
          
          var ref1889 = optionStyle;
          if(ref1889.get() !== null) {
            node1928.attr('class', ref1889.get());
            subs__.addSub(ref1889.addEventListener('change', function(_, ref, val) {
              node1928.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1889.rebind());
          
          var ref1890 = optionValue;
          if(ref1890.get() !== null) {
            node1928.attr('value', ref1890.get());
            subs__.addSub(ref1890.addEventListener('change', function(_, ref, val) {
              node1928.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1890.rebind());
          
          var ref1891 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1891.get() !== null) {
            node1928.attr('selected', ref1891.get());
            subs__.addSub(ref1891.addEventListener('change', function(_, ref, val) {
              node1928.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1928.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1928.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1891.rebind());
          
          iternode323.append(node1928);
          
          var oldNodes = iternode323;
          iternode323 = iternode323.contents();
          oldNodes.replaceWith(iternode323);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list323.addEventListener('change', function() { listSubs__.unsubscribe(); renderList323(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList323(true); }));
    });
  };
  renderList323();
  
  root5633.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root5633); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root5634 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes4360 = $("<span>");
    root5634.append(nodes4360);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5635 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1929 = mobl.loadingSpan();
      root5635.append(node1929);
      var list324;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList324 = function() {
        var subs__ = listSubs__;
        list324 = tabs.get();
        list324.list(function(results324) {
          node1929.empty();
          for(var i1170 = 0; i1170 < results324.length; i1170++) {
            (function() {
              var iternode324 = $("<span>");
              node1929.append(iternode324);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results324), i1170), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results324), i1170), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results324), i1170), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp4011 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4011.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4011.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp4011.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp4011.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp4010 = mobl.ref(result__);
              
              var nodes4361 = $("<span>");
              iternode324.append(nodes4361);
              subs__.addSub((mobl.span)(tmp4011, mobl.ref(null), tmp4010, mobl.ref(null), function(_, callback) {
                var root5636 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4362 = $("<span>");
                root5636.append(nodes4362);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root5637 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5637); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4362;
                  nodes4362 = node.contents();
                  oldNodes.replaceWith(nodes4362);
                }));
                callback(root5636); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4361;
                nodes4361 = node.contents();
                oldNodes.replaceWith(nodes4361);
              }));
              
              var oldNodes = iternode324;
              iternode324 = iternode324.contents();
              oldNodes.replaceWith(iternode324);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list324.addEventListener('change', function() { listSubs__.unsubscribe(); renderList324(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList324(true); }));
        });
      };
      renderList324();
      
      callback(root5635); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4360;
      nodes4360 = node.contents();
      oldNodes.replaceWith(nodes4360);
    }));
    
    var node1930 = mobl.loadingSpan();
    root5634.append(node1930);
    var list325;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList325 = function() {
      var subs__ = listSubs__;
      list325 = tabs.get();
      list325.list(function(results325) {
        node1930.empty();
        for(var i1171 = 0; i1171 < results325.length; i1171++) {
          (function() {
            var iternode325 = $("<span>");
            node1930.append(iternode325);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results325), i1171), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results325), i1171), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results325), i1171), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp4012 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp4012.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4012.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp4012.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp4012.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes4363 = $("<span>");
            iternode325.append(nodes4363);
            subs__.addSub((mobl.block)(tmp4012, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5638 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4364 = $("<span>");
              root5638.append(nodes4364);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root5639 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4365 = $("<span>");
                root5639.append(nodes4365);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl754();
                }));
                
                function renderControl754() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root5640 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5640); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4365;
                    nodes4365 = node.contents();
                    oldNodes.replaceWith(nodes4365);
                  }));
                }
                renderControl754();
                callback(root5639); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4364;
                nodes4364 = node.contents();
                oldNodes.replaceWith(nodes4364);
              }));
              callback(root5638); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4363;
              nodes4363 = node.contents();
              oldNodes.replaceWith(nodes4363);
            }));
            
            var oldNodes = iternode325;
            iternode325 = iternode325.contents();
            oldNodes.replaceWith(iternode325);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list325.addEventListener('change', function() { listSubs__.unsubscribe(); renderList325(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList325(true); }));
      });
    };
    renderList325();
    
    callback(root5634); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes4360 = $("<span>");
      root5634.append(nodes4360);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5635 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1929 = mobl.loadingSpan();
        root5635.append(node1929);
        var list324;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList324 = function() {
          var subs__ = listSubs__;
          list324 = tabs.get();
          list324.list(function(results324) {
            node1929.empty();
            for(var i1170 = 0; i1170 < results324.length; i1170++) {
              (function() {
                var iternode324 = $("<span>");
                node1929.append(iternode324);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results324), i1170), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results324), i1170), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results324), i1170), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp4011 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp4011.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp4011.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp4011.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp4011.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4010 = mobl.ref(result__);
                
                var nodes4361 = $("<span>");
                iternode324.append(nodes4361);
                subs__.addSub((mobl.span)(tmp4011, mobl.ref(null), tmp4010, mobl.ref(null), function(_, callback) {
                  var root5636 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4362 = $("<span>");
                  root5636.append(nodes4362);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root5637 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5637); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4362;
                    nodes4362 = node.contents();
                    oldNodes.replaceWith(nodes4362);
                  }));
                  callback(root5636); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4361;
                  nodes4361 = node.contents();
                  oldNodes.replaceWith(nodes4361);
                }));
                
                var oldNodes = iternode324;
                iternode324 = iternode324.contents();
                oldNodes.replaceWith(iternode324);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list324.addEventListener('change', function() { listSubs__.unsubscribe(); renderList324(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList324(true); }));
          });
        };
        renderList324();
        
        callback(root5635); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4360;
        nodes4360 = node.contents();
        oldNodes.replaceWith(nodes4360);
      }));
      
      var node1930 = mobl.loadingSpan();
      root5634.append(node1930);
      var list325;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList325 = function() {
        var subs__ = listSubs__;
        list325 = tabs.get();
        list325.list(function(results325) {
          node1930.empty();
          for(var i1171 = 0; i1171 < results325.length; i1171++) {
            (function() {
              var iternode325 = $("<span>");
              node1930.append(iternode325);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results325), i1171), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results325), i1171), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results325), i1171), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp4012 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4012.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4012.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp4012.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp4012.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes4363 = $("<span>");
              iternode325.append(nodes4363);
              subs__.addSub((mobl.block)(tmp4012, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root5638 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4364 = $("<span>");
                root5638.append(nodes4364);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root5639 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4365 = $("<span>");
                  root5639.append(nodes4365);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl754();
                  }));
                  
                  function renderControl754() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root5640 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5640); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4365;
                      nodes4365 = node.contents();
                      oldNodes.replaceWith(nodes4365);
                    }));
                  }
                  renderControl754();
                  callback(root5639); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4364;
                  nodes4364 = node.contents();
                  oldNodes.replaceWith(nodes4364);
                }));
                callback(root5638); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4363;
                nodes4363 = node.contents();
                oldNodes.replaceWith(nodes4363);
              }));
              
              var oldNodes = iternode325;
              iternode325 = iternode325.contents();
              oldNodes.replaceWith(iternode325);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list325.addEventListener('change', function() { listSubs__.unsubscribe(); renderList325(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList325(true); }));
        });
      };
      renderList325();
      
      callback(root5634); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root5641 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1931 = $("<div>");
  
  var ref1896 = mobl.ref(ui.searchboxStyle);
  if(ref1896.get() !== null) {
    node1931.attr('class', ref1896.get());
    subs__.addSub(ref1896.addEventListener('change', function(_, ref, val) {
      node1931.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1896.rebind());
  
  
  var node1932 = $("<input>");
  node1932.attr('type', "search");
  
  var ref1893 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1893.get() !== null) {
    node1932.attr('class', ref1893.get());
    subs__.addSub(ref1893.addEventListener('change', function(_, ref, val) {
      node1932.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1893.rebind());
  
  var ref1894 = placeholder;
  if(ref1894.get() !== null) {
    node1932.attr('placeholder', ref1894.get());
    subs__.addSub(ref1894.addEventListener('change', function(_, ref, val) {
      node1932.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1894.rebind());
  
  var ref1895 = s;
  node1932.val(""+ref1895.get());
  var ignore374 = false;
  subs__.addSub(ref1895.addEventListener('change', function(_, ref, val) {
    if(ignore374) return;
    node1932.val(""+val);
  }));
  subs__.addSub(ref1895.rebind());
  
  subs__.addSub(mobl.domBind(node1932, 'keyup change', function() {
    ignore374 = true;
    s.set(mobl.stringTomobl__String(node1932.val()));
    ignore374 = false;
  }));
  
  
  var val966 = onsearch.get();
  if(val966 !== null) {
    subs__.addSub(mobl.domBind(node1932, 'change', val966));
  }
  
  var val967 = onkeyup.get();
  if(val967 !== null) {
    subs__.addSub(mobl.domBind(node1932, 'keyup', val967));
  }
  node1932.attr('autocorrect', false);
  node1932.attr('autocapitalize', false);
  node1932.attr('autocomplete', false);
  
  node1931.append(node1932);
  root5641.append(node1931);
  callback(root5641); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root5642 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1897 = mobl.ref(ui.contextMenuStyle);
  if(ref1897.get() !== null) {
    menu.attr('class', ref1897.get());
    subs__.addSub(ref1897.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1897.rebind());
  
  var nodes4366 = $("<span>");
  menu.append(nodes4366);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl755();
  }));
  
  function renderControl755() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5643); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4366;
      nodes4366 = node.contents();
      oldNodes.replaceWith(nodes4366);
    }));
  }
  renderControl755();
  root5642.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val968 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp4052 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val968 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val968));
  }
  
  root5642.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root5642); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root5644 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp4037 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4037.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1933 = $("<span>");
  root5644.append(node1933);
  var condSubs476 = new mobl.CompSubscription();
  subs__.addSub(condSubs476);
  var oldValue476;
  var renderCond476 = function() {
    var value2308 = tmp4037.get();
    if(oldValue476 === value2308) return;
    oldValue476 = value2308;
    var subs__ = condSubs476;
    subs__.unsubscribe();
    node1933.empty();
    if(value2308) {
      items.get().one(function(result__) {
        var tmp4053 = result__;
        var current = mobl.ref(result__);
        
        var node1934 = $("<div>");
        node1934.attr('width', "100%");
        
        
        var node1935 = $("<div>");
        node1935.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes4369 = $("<span>");
        node1935.append(nodes4369);
        subs__.addSub((ui.group)(function(_, callback) {
          var root5647 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1938 = mobl.loadingSpan();
          root5647.append(node1938);
          var list326;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList326 = function() {
            var subs__ = listSubs__;
            list326 = items.get();
            list326.list(function(results326) {
              node1938.empty();
              for(var i1172 = 0; i1172 < results326.length; i1172++) {
                (function() {
                  var iternode326 = $("<span>");
                  node1938.append(iternode326);
                  var it;
                  it = mobl.ref(mobl.ref(results326), i1172);
                  var result__ = it.get() == current.get();
                  var tmp4018 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4018.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4018.set(it.get() == current.get());
                  }));
                  
                  
                  var node1939 = $("<span>");
                  iternode326.append(node1939);
                  var condSubs478 = new mobl.CompSubscription();
                  subs__.addSub(condSubs478);
                  var oldValue478;
                  var renderCond478 = function() {
                    var value2310 = tmp4018.get();
                    if(oldValue478 === value2310) return;
                    oldValue478 = value2310;
                    var subs__ = condSubs478;
                    subs__.unsubscribe();
                    node1939.empty();
                    if(value2310) {
                      var nodes4370 = $("<span>");
                      node1939.append(nodes4370);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root5648 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4371 = $("<span>");
                        root5648.append(nodes4371);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl757();
                        }));
                        
                        function renderControl757() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5649 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5649); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4371;
                            nodes4371 = node.contents();
                            oldNodes.replaceWith(nodes4371);
                          }));
                        }
                        renderControl757();
                        callback(root5648); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4370;
                        nodes4370 = node.contents();
                        oldNodes.replaceWith(nodes4370);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp4017 = mobl.ref(result__);
                      
                      var nodes4372 = $("<span>");
                      node1939.append(nodes4372);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4017, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root5650 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4373 = $("<span>");
                        root5650.append(nodes4373);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl758();
                        }));
                        
                        function renderControl758() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5651 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5651); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4373;
                            nodes4373 = node.contents();
                            oldNodes.replaceWith(nodes4373);
                          }));
                        }
                        renderControl758();
                        callback(root5650); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4372;
                        nodes4372 = node.contents();
                        oldNodes.replaceWith(nodes4372);
                      }));
                      
                      
                    }
                  };
                  renderCond478();
                  subs__.addSub(tmp4018.addEventListener('change', function() {
                    renderCond478();
                  }));
                  
                  
                  var oldNodes = iternode326;
                  iternode326 = iternode326.contents();
                  oldNodes.replaceWith(iternode326);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list326.addEventListener('change', function() { listSubs__.unsubscribe(); renderList326(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList326(true); }));
            });
          };
          renderList326();
          
          callback(root5647); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4369;
          nodes4369 = node.contents();
          oldNodes.replaceWith(nodes4369);
        }));
        node1934.append(node1935);
        
        var node1936 = $("<div>");
        node1936.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1937 = $("<span>");
        node1936.append(node1937);
        var condSubs477 = new mobl.CompSubscription();
        subs__.addSub(condSubs477);
        var oldValue477;
        var renderCond477 = function() {
          var value2309 = current.get();
          if(oldValue477 === value2309) return;
          oldValue477 = value2309;
          var subs__ = condSubs477;
          subs__.unsubscribe();
          node1937.empty();
          if(value2309) {
            var nodes4367 = $("<span>");
            node1937.append(nodes4367);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl756();
            }));
            
            function renderControl756() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root5645 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5645); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4367;
                nodes4367 = node.contents();
                oldNodes.replaceWith(nodes4367);
              }));
            }
            renderControl756();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp4019 = mobl.ref(result__);
            
            var nodes4368 = $("<span>");
            node1937.append(nodes4368);
            subs__.addSub((mobl.label)(tmp4019, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5646 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5646); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4368;
              nodes4368 = node.contents();
              oldNodes.replaceWith(nodes4368);
            }));
            
            
          }
        };
        renderCond477();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond477();
        }));
        
        node1934.append(node1936);
        node1933.append(node1934);
        
        
        
        
        
        
      });
    } else {
      var nodes4374 = $("<span>");
      node1933.append(nodes4374);
      subs__.addSub((ui.group)(function(_, callback) {
        var root5652 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1940 = mobl.loadingSpan();
        root5652.append(node1940);
        var list327;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList327 = function() {
          var subs__ = listSubs__;
          list327 = items.get();
          list327.list(function(results327) {
            node1940.empty();
            for(var i1173 = 0; i1173 < results327.length; i1173++) {
              (function() {
                var iternode327 = $("<span>");
                node1940.append(iternode327);
                var it;
                it = mobl.ref(mobl.ref(results327), i1173);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4054 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp4013 = mobl.ref(result__);
                
                var nodes4375 = $("<span>");
                iternode327.append(nodes4375);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4013, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5653 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4376 = $("<span>");
                  root5653.append(nodes4376);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl759();
                  }));
                  
                  function renderControl759() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root5654 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5654); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4376;
                      nodes4376 = node.contents();
                      oldNodes.replaceWith(nodes4376);
                    }));
                  }
                  renderControl759();
                  callback(root5653); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4375;
                  nodes4375 = node.contents();
                  oldNodes.replaceWith(nodes4375);
                }));
                
                var oldNodes = iternode327;
                iternode327 = iternode327.contents();
                oldNodes.replaceWith(iternode327);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list327.addEventListener('change', function() { listSubs__.unsubscribe(); renderList327(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList327(true); }));
          });
        };
        renderList327();
        
        callback(root5652); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4374;
        nodes4374 = node.contents();
        oldNodes.replaceWith(nodes4374);
      }));
      
      
    }
  };
  renderCond476();
  subs__.addSub(tmp4037.addEventListener('change', function() {
    renderCond476();
  }));
  
  callback(root5644); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root5655 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp4016 = mobl.ref(result__);
  
  var nodes4377 = $("<span>");
  root5655.append(nodes4377);
  subs__.addSub((ui.header)(tmp4016, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5656 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4015 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4014 = mobl.ref(result__);
    
    var nodes4378 = $("<span>");
    root5656.append(nodes4378);
    subs__.addSub((ui.backButton)(tmp4014, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4015, function(_, callback) {
      var root5657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5657); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4378;
      nodes4378 = node.contents();
      oldNodes.replaceWith(nodes4378);
    }));
    callback(root5656); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4377;
    nodes4377 = node.contents();
    oldNodes.replaceWith(nodes4377);
  }));
  var nodes4379 = $("<span>");
  root5655.append(nodes4379);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl760();
  }));
  
  function renderControl760() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5658); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4379;
      nodes4379 = node.contents();
      oldNodes.replaceWith(nodes4379);
    }));
  }
  renderControl760();
  callback(root5655); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root5659 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes4380 = $("<span>");
  root5659.append(nodes4380);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5660 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1941 = mobl.loadingSpan();
    root5660.append(node1941);
    var list328;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList328 = function() {
      var subs__ = listSubs__;
      list328 = coll.get();
      list328.list(function(results328) {
        node1941.empty();
        for(var i1174 = 0; i1174 < results328.length; i1174++) {
          (function() {
            var iternode328 = $("<span>");
            node1941.append(iternode328);
            var it;
            it = mobl.ref(mobl.ref(results328), i1174);
            var result__ = it.get() == selected.get();
            var tmp4021 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp4021.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp4021.set(it.get() == selected.get());
            }));
            
            
            var node1942 = $("<span>");
            iternode328.append(node1942);
            var condSubs479 = new mobl.CompSubscription();
            subs__.addSub(condSubs479);
            var oldValue479;
            var renderCond479 = function() {
              var value2311 = tmp4021.get();
              if(oldValue479 === value2311) return;
              oldValue479 = value2311;
              var subs__ = condSubs479;
              subs__.unsubscribe();
              node1942.empty();
              if(value2311) {
                var nodes4381 = $("<span>");
                node1942.append(nodes4381);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5661 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4382 = $("<span>");
                  root5661.append(nodes4382);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl761();
                  }));
                  
                  function renderControl761() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root5662 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5662); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4382;
                      nodes4382 = node.contents();
                      oldNodes.replaceWith(nodes4382);
                    }));
                  }
                  renderControl761();
                  callback(root5661); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4381;
                  nodes4381 = node.contents();
                  oldNodes.replaceWith(nodes4381);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4020 = mobl.ref(result__);
                
                var nodes4383 = $("<span>");
                node1942.append(nodes4383);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4020, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root5663 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4384 = $("<span>");
                  root5663.append(nodes4384);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl762();
                  }));
                  
                  function renderControl762() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root5664 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5664); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4384;
                      nodes4384 = node.contents();
                      oldNodes.replaceWith(nodes4384);
                    }));
                  }
                  renderControl762();
                  callback(root5663); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4383;
                  nodes4383 = node.contents();
                  oldNodes.replaceWith(nodes4383);
                }));
                
                
              }
            };
            renderCond479();
            subs__.addSub(tmp4021.addEventListener('change', function() {
              renderCond479();
            }));
            
            
            var oldNodes = iternode328;
            iternode328 = iternode328.contents();
            oldNodes.replaceWith(iternode328);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list328.addEventListener('change', function() { listSubs__.unsubscribe(); renderList328(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList328(true); }));
      });
    };
    renderList328();
    
    callback(root5660); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4380;
    nodes4380 = node.contents();
    oldNodes.replaceWith(nodes4380);
  }));
  callback(root5659); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root5665 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp4055 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp4022 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp4022.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp4022.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp4022.set(coll.get().limit(n.get()));
    }));
    
    
    var node1943 = mobl.loadingSpan();
    root5665.append(node1943);
    var list329;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList329 = function() {
      var subs__ = listSubs__;
      list329 = tmp4022.get();
      list329.list(function(results329) {
        node1943.empty();
        for(var i1175 = 0; i1175 < results329.length; i1175++) {
          (function() {
            var iternode329 = $("<span>");
            node1943.append(iternode329);
            var it;
            it = mobl.ref(mobl.ref(results329), i1175);
            var nodes4385 = $("<span>");
            iternode329.append(nodes4385);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl763();
            }));
            
            function renderControl763() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root5666 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5666); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4385;
                nodes4385 = node.contents();
                oldNodes.replaceWith(nodes4385);
              }));
            }
            renderControl763();
            
            var oldNodes = iternode329;
            iternode329 = iternode329.contents();
            oldNodes.replaceWith(iternode329);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list329.addEventListener('change', function() { listSubs__.unsubscribe(); renderList329(true); }));
        subs__.addSub(tmp4022.addEventListener('change', function() { listSubs__.unsubscribe(); renderList329(true); }));
      });
    };
    renderList329();
    
    var result__ = n.get() < total.get();
    var tmp4024 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp4024.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp4024.set(n.get() < total.get());
    }));
    
    
    var node1944 = $("<span>");
    root5665.append(node1944);
    var condSubs480 = new mobl.CompSubscription();
    subs__.addSub(condSubs480);
    var oldValue480;
    var renderCond480 = function() {
      var value2312 = tmp4024.get();
      if(oldValue480 === value2312) return;
      oldValue480 = value2312;
      var subs__ = condSubs480;
      subs__.unsubscribe();
      node1944.empty();
      if(value2312) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4023 = mobl.ref(result__);
        
        var nodes4386 = $("<span>");
        node1944.append(nodes4386);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp4023, mobl.ref(null), function(_, callback) {
          var root5667 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes4387 = $("<span>");
          root5667.append(nodes4387);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root5668 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5668); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4387;
            nodes4387 = node.contents();
            oldNodes.replaceWith(nodes4387);
          }));
          callback(root5667); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4386;
          nodes4386 = node.contents();
          oldNodes.replaceWith(nodes4386);
        }));
        
        
      } else {
        
      }
    };
    renderCond480();
    subs__.addSub(tmp4024.addEventListener('change', function() {
      renderCond480();
    }));
    
    callback(root5665); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root5669 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4388 = $("<span>");
  root5669.append(nodes4388);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5670 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1945 = mobl.loadingSpan();
    root5670.append(node1945);
    var list330;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList330 = function() {
      var subs__ = listSubs__;
      list330 = items.get();
      list330.list(function(results330) {
        node1945.empty();
        for(var i1176 = 0; i1176 < results330.length; i1176++) {
          (function() {
            var iternode330 = $("<span>");
            node1945.append(iternode330);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results330), i1176), "_1");it = mobl.ref(mobl.ref(mobl.ref(results330), i1176), "_2");
            var nodes4389 = $("<span>");
            iternode330.append(nodes4389);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root5671 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4390 = $("<span>");
              root5671.append(nodes4390);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root5672 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5672); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4390;
                nodes4390 = node.contents();
                oldNodes.replaceWith(nodes4390);
              }));
              callback(root5671); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4389;
              nodes4389 = node.contents();
              oldNodes.replaceWith(nodes4389);
            }));
            
            var oldNodes = iternode330;
            iternode330 = iternode330.contents();
            oldNodes.replaceWith(iternode330);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list330.addEventListener('change', function() { listSubs__.unsubscribe(); renderList330(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList330(true); }));
      });
    };
    renderList330();
    
    callback(root5670); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4388;
    nodes4388 = node.contents();
    oldNodes.replaceWith(nodes4388);
  }));
  callback(root5669); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root5673 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll2928) {
    coll2928 = coll2928.reverse();
    function processOne180() {
      var it;
      it = coll2928.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll2928.length > 0) processOne180(); else rest180();
      
    }
    function rest180() {
      var nodes4391 = $("<span>");
      root5673.append(nodes4391);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root5674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4025 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp4026 = mobl.ref(result__);
        
        var nodes4392 = $("<span>");
        root5674.append(nodes4392);
        subs__.addSub((ui.backButton)(tmp4026, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4025, function(_, callback) {
          var root5675 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5675); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4392;
          nodes4392 = node.contents();
          oldNodes.replaceWith(nodes4392);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll2927) {
                           coll2927 = coll2927.reverse();
                           function processOne179() {
                             var checked;var it;
                             var tmp4057 = coll2927.pop();
                             checked = tmp4057._1;it = tmp4057._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll2927.length > 0) processOne179(); else rest179();
                               
                             } else {
                               {
                                 
                                 if(coll2927.length > 0) processOne179(); else rest179();
                                 
                               }
                             }
                           }
                           function rest179() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll2927.length > 0) processOne179(); else rest179();
                         });
                         
                       };
        var tmp4027 = mobl.ref(result__);
        
        var nodes4393 = $("<span>");
        root5674.append(nodes4393);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4027, function(_, callback) {
          var root5676 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5676); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4393;
          nodes4393 = node.contents();
          oldNodes.replaceWith(nodes4393);
        }));
        callback(root5674); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4391;
        nodes4391 = node.contents();
        oldNodes.replaceWith(nodes4391);
      }));
      var nodes4394 = $("<span>");
      root5673.append(nodes4394);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root5677 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5677); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4394;
        nodes4394 = node.contents();
        oldNodes.replaceWith(nodes4394);
      }));
      callback(root5673); return subs__;
      
      
    }
    if(coll2928.length > 0) processOne180(); else rest180();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root5678 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes4395 = $("<span>");
  root5678.append(nodes4395);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5679 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5679); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4395;
    nodes4395 = node.contents();
    oldNodes.replaceWith(nodes4395);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp4028 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp4028.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp4028.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp4028.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp4028.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp4028.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes4396 = $("<span>");
  root5678.append(nodes4396);
  subs__.addSub((ui.masterDetail)(tmp4028, masterItem, detailItem, function(_, callback) {
    var root5680 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5680); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4396;
    nodes4396 = node.contents();
    oldNodes.replaceWith(nodes4396);
  }));
  callback(root5678); return subs__;
  
  
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
  var root5681 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes4397 = $("<span>");
  root5681.append(nodes4397);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5682 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1946 = mobl.loadingSpan();
    root5682.append(node1946);
    var list331;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList331 = function() {
      var subs__ = listSubs__;
      list331 = sections.get();
      list331.list(function(results331) {
        node1946.empty();
        for(var i1177 = 0; i1177 < results331.length; i1177++) {
          (function() {
            var iternode331 = $("<span>");
            node1946.append(iternode331);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results331), i1177), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results331), i1177), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp4030 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4030.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4030.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp4030.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp4030.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp4029 = mobl.ref(result__);
            
            var nodes4398 = $("<span>");
            iternode331.append(nodes4398);
            subs__.addSub((mobl.span)(tmp4030, mobl.ref(null), tmp4029, mobl.ref(null), function(_, callback) {
              var root5683 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4399 = $("<span>");
              root5683.append(nodes4399);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root5684 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5684); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4399;
                nodes4399 = node.contents();
                oldNodes.replaceWith(nodes4399);
              }));
              callback(root5683); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4398;
              nodes4398 = node.contents();
              oldNodes.replaceWith(nodes4398);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp4031 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4031.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4031.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp4031.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp4031.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes4400 = $("<span>");
            iternode331.append(nodes4400);
            subs__.addSub((mobl.block)(tmp4031, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5685 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4401 = $("<span>");
              root5685.append(nodes4401);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl764();
              }));
              
              function renderControl764() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root5686 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5686); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4401;
                  nodes4401 = node.contents();
                  oldNodes.replaceWith(nodes4401);
                }));
              }
              renderControl764();
              callback(root5685); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4400;
              nodes4400 = node.contents();
              oldNodes.replaceWith(nodes4400);
            }));
            
            var oldNodes = iternode331;
            iternode331 = iternode331.contents();
            oldNodes.replaceWith(iternode331);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list331.addEventListener('change', function() { listSubs__.unsubscribe(); renderList331(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList331(true); }));
      });
    };
    renderList331();
    
    callback(root5682); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4397;
    nodes4397 = node.contents();
    oldNodes.replaceWith(nodes4397);
  }));
  callback(root5681); return subs__;
  
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
  var root5687 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1947 = $("<table>");
  
  var ref1898 = style;
  if(ref1898.get() !== null) {
    node1947.attr('class', ref1898.get());
    subs__.addSub(ref1898.addEventListener('change', function(_, ref, val) {
      node1947.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1898.rebind());
  
  var nodes4402 = $("<span>");
  node1947.append(nodes4402);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl765();
  }));
  
  function renderControl765() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5688 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5688); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4402;
      nodes4402 = node.contents();
      oldNodes.replaceWith(nodes4402);
    }));
  }
  renderControl765();
  root5687.append(node1947);
  callback(root5687); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root5689 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1948 = $("<tr>");
  
  var ref1899 = style;
  if(ref1899.get() !== null) {
    node1948.attr('class', ref1899.get());
    subs__.addSub(ref1899.addEventListener('change', function(_, ref, val) {
      node1948.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1899.rebind());
  
  var nodes4403 = $("<span>");
  node1948.append(nodes4403);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl766();
  }));
  
  function renderControl766() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5690 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5690); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4403;
      nodes4403 = node.contents();
      oldNodes.replaceWith(nodes4403);
    }));
  }
  renderControl766();
  root5689.append(node1948);
  callback(root5689); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root5691 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1949 = $("<td>");
  
  var ref1900 = width;
  if(ref1900.get() !== null) {
    node1949.attr('width', ref1900.get());
    subs__.addSub(ref1900.addEventListener('change', function(_, ref, val) {
      node1949.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1900.rebind());
  
  var ref1901 = style;
  if(ref1901.get() !== null) {
    node1949.attr('class', ref1901.get());
    subs__.addSub(ref1901.addEventListener('change', function(_, ref, val) {
      node1949.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1901.rebind());
  
  var nodes4404 = $("<span>");
  node1949.append(nodes4404);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl767();
  }));
  
  function renderControl767() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5692 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5692); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4404;
      nodes4404 = node.contents();
      oldNodes.replaceWith(nodes4404);
    }));
  }
  renderControl767();
  root5691.append(node1949);
  callback(root5691); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root5693 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1950 = $("<td>");
  
  var ref1902 = width;
  if(ref1902.get() !== null) {
    node1950.attr('width', ref1902.get());
    subs__.addSub(ref1902.addEventListener('change', function(_, ref, val) {
      node1950.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1902.rebind());
  
  var ref1903 = style;
  if(ref1903.get() !== null) {
    node1950.attr('class', ref1903.get());
    subs__.addSub(ref1903.addEventListener('change', function(_, ref, val) {
      node1950.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1903.rebind());
  
  var nodes4405 = $("<span>");
  node1950.append(nodes4405);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl768();
  }));
  
  function renderControl768() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5694 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5694); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4405;
      nodes4405 = node.contents();
      oldNodes.replaceWith(nodes4405);
    }));
  }
  renderControl768();
  root5693.append(node1950);
  callback(root5693); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root5695 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1951 = $("<td>");
  
  var ref1904 = width;
  if(ref1904.get() !== null) {
    node1951.attr('width', ref1904.get());
    subs__.addSub(ref1904.addEventListener('change', function(_, ref, val) {
      node1951.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1904.rebind());
  
  var ref1905 = style;
  if(ref1905.get() !== null) {
    node1951.attr('class', ref1905.get());
    subs__.addSub(ref1905.addEventListener('change', function(_, ref, val) {
      node1951.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1905.rebind());
  
  
  var node1952 = $("<strong>");
  
  var nodes4406 = $("<span>");
  node1952.append(nodes4406);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl769();
  }));
  
  function renderControl769() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5696 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5696); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4406;
      nodes4406 = node.contents();
      oldNodes.replaceWith(nodes4406);
    }));
  }
  renderControl769();
  node1951.append(node1952);
  root5695.append(node1951);
  callback(root5695); return subs__;
  
  
  
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
  items.list(function(coll2929) {
    coll2929 = coll2929.reverse();
    function processOne181() {
      var item;
      item = coll2929.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll2929.length > 0) processOne181(); else rest181();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll2929.length > 0) processOne181(); else rest181();
          
        }
      }
    }
    function rest181() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll2929.length > 0) processOne181(); else rest181();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root5697 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp4059 = result__;
    var current = mobl.ref(result__);
    
    var node1953 = $("<div>");
    node1953.attr('width', "100%");
    
    
    var node1954 = $("<div>");
    node1954.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes4408 = $("<span>");
    node1954.append(nodes4408);
    subs__.addSub((ui.group)(function(_, callback) {
      var root5699 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1962 = mobl.loadingSpan();
      root5699.append(node1962);
      var list332;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList332 = function() {
        var subs__ = listSubs__;
        list332 = items.get();
        list332.list(function(results332) {
          node1962.empty();
          for(var i1178 = 0; i1178 < results332.length; i1178++) {
            (function() {
              var iternode332 = $("<span>");
              node1962.append(iternode332);
              var it;
              it = mobl.ref(mobl.ref(results332), i1178);
              var result__ = it.get() == current.get();
              var tmp4035 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp4035.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp4035.set(it.get() == current.get());
              }));
              
              
              var node1963 = $("<span>");
              iternode332.append(node1963);
              var condSubs483 = new mobl.CompSubscription();
              subs__.addSub(condSubs483);
              var oldValue483;
              var renderCond483 = function() {
                var value2315 = tmp4035.get();
                if(oldValue483 === value2315) return;
                oldValue483 = value2315;
                var subs__ = condSubs483;
                subs__.unsubscribe();
                node1963.empty();
                if(value2315) {
                  var nodes4409 = $("<span>");
                  node1963.append(nodes4409);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root5700 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4066 = result__;
                      var tmp4032 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4064 = result__;
                          var result__ = tmp4064;
                          tmp4032.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4065 = result__;
                          var result__ = tmp4065;
                          tmp4032.set(result__);
                          
                        });
                      }));
                      
                      var nodes4410 = $("<span>");
                      root5700.append(nodes4410);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl771();
                      }));
                      
                      function renderControl771() {
                        subs__.addSub((masterItem.get())(it, tmp4032, function(elements, callback) {
                          var root5701 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root5701); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4410;
                          nodes4410 = node.contents();
                          oldNodes.replaceWith(nodes4410);
                        }));
                      }
                      renderControl771();
                      callback(root5700); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4409;
                    nodes4409 = node.contents();
                    oldNodes.replaceWith(nodes4409);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp4034 = mobl.ref(result__);
                  
                  var nodes4411 = $("<span>");
                  node1963.append(nodes4411);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4034, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root5702 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4069 = result__;
                      var tmp4033 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4067 = result__;
                          var result__ = tmp4067;
                          tmp4033.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4068 = result__;
                          var result__ = tmp4068;
                          tmp4033.set(result__);
                          
                        });
                      }));
                      
                      var nodes4412 = $("<span>");
                      root5702.append(nodes4412);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl772();
                      }));
                      
                      function renderControl772() {
                        subs__.addSub((masterItem.get())(it, tmp4033, function(elements, callback) {
                          var root5703 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root5703); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4412;
                          nodes4412 = node.contents();
                          oldNodes.replaceWith(nodes4412);
                        }));
                      }
                      renderControl772();
                      callback(root5702); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4411;
                    nodes4411 = node.contents();
                    oldNodes.replaceWith(nodes4411);
                  }));
                  
                  
                }
              };
              renderCond483();
              subs__.addSub(tmp4035.addEventListener('change', function() {
                renderCond483();
              }));
              
              
              var oldNodes = iternode332;
              iternode332 = iternode332.contents();
              oldNodes.replaceWith(iternode332);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list332.addEventListener('change', function() { listSubs__.unsubscribe(); renderList332(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList332(true); }));
        });
      };
      renderList332();
      
      callback(root5699); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4408;
      nodes4408 = node.contents();
      oldNodes.replaceWith(nodes4408);
    }));
    node1953.append(node1954);
    
    var node1955 = $("<div>");
    node1955.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    items.get().count(function(result__) {
      var tmp4063 = result__;
      var result__ = tmp4063 > 0;
      var tmp4062 = result__;
      var tmp4036 = mobl.ref(result__);
      subs__.addSub(items.addEventListener('change', function() {
        items.get().count(function(result__) {
          var tmp4061 = result__;
          var result__ = tmp4061 > 0;
          var tmp4060 = result__;
          var result__ = tmp4060;
          tmp4036.set(result__);
          
        });
      }));
      
      
      var node1956 = $("<span>");
      node1955.append(node1956);
      var condSubs481 = new mobl.CompSubscription();
      subs__.addSub(condSubs481);
      var oldValue481;
      var renderCond481 = function() {
        var value2313 = tmp4036.get();
        if(oldValue481 === value2313) return;
        oldValue481 = value2313;
        var subs__ = condSubs481;
        subs__.unsubscribe();
        node1956.empty();
        if(value2313) {
          
          var node1957 = $("<span>");
          node1956.append(node1957);
          var condSubs482 = new mobl.CompSubscription();
          subs__.addSub(condSubs482);
          var oldValue482;
          var renderCond482 = function() {
            var value2314 = current.get();
            if(oldValue482 === value2314) return;
            oldValue482 = value2314;
            var subs__ = condSubs482;
            subs__.unsubscribe();
            node1957.empty();
            if(value2314) {
              var nodes4407 = $("<span>");
              node1957.append(nodes4407);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl770();
              }));
              
              function renderControl770() {
                subs__.addSub((detail.get())(current, function(elements, callback) {
                  var root5698 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5698); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4407;
                  nodes4407 = node.contents();
                  oldNodes.replaceWith(nodes4407);
                }));
              }
              renderControl770();
              
              
            } else {
              
              var node1958 = $("<div>");
              node1958.attr('style', "padding:20px");
              
              
              var node1959 = $("<h2>");
              
              
              node1959.append("Add more questions.");
              node1958.append(node1959);
              node1957.append(node1958);
              
              
              
            }
          };
          renderCond482();
          subs__.addSub(current.addEventListener('change', function() {
            renderCond482();
          }));
          
          
          
        } else {
          
          var node1960 = $("<div>");
          node1960.attr('style', "padding:20px");
          
          
          var node1961 = $("<h2>");
          
          
          node1961.append("Add more questions.");
          node1960.append(node1961);
          node1956.append(node1960);
          
          
          
        }
      };
      renderCond481();
      subs__.addSub(tmp4036.addEventListener('change', function() {
        renderCond481();
      }));
      
      node1953.append(node1955);
      root5697.append(node1953);
      callback(root5697); return subs__;
      
    });
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
