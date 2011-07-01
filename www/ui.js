mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root11201 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1875 = $("<span>");
  root11201.append(node1875);
  var condSubs466 = new mobl.CompSubscription();
  subs__.addSub(condSubs466);
  var oldValue466;
  var renderCond466 = function() {
    var value1118 = value.get();
    if(oldValue466 === value1118) return;
    oldValue466 = value1118;
    var subs__ = condSubs466;
    subs__.unsubscribe();
    node1875.empty();
    if(value1118) {
      var nodes9553 = $("<span>");
      node1875.append(nodes9553);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl743();
      }));
      
      function renderControl743() {
        subs__.addSub((elements)(function(elements, callback) {
          var root11202 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11202); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9553;
          nodes9553 = node.contents();
          oldNodes.replaceWith(nodes9553);
        }));
      }
      renderControl743();
      
      
    } else {
      var nodes9554 = $("<span>");
      node1875.append(nodes9554);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11203 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes9555 = $("<span>");
        root11203.append(nodes9555);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root11204 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11204); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9555;
          nodes9555 = node.contents();
          oldNodes.replaceWith(nodes9555);
        }));
        var nodes9556 = $("<span>");
        root11203.append(nodes9556);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root11205 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11205); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9556;
          nodes9556 = node.contents();
          oldNodes.replaceWith(nodes9556);
        }));
        callback(root11203); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9554;
        nodes9554 = node.contents();
        oldNodes.replaceWith(nodes9554);
      }));
      
      
    }
  };
  renderCond466();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond466();
  }));
  
  callback(root11201); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root11206 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1876 = $("<div>");
  
  var ref1850 = mobl.ref(ui.headerStyle);
  if(ref1850.get() !== null) {
    node1876.attr('class', ref1850.get());
    subs__.addSub(ref1850.addEventListener('change', function(_, ref, val) {
      node1876.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1850.rebind());
  
  var val864 = onclick.get();
  if(val864 !== null) {
    subs__.addSub(mobl.domBind(node1876, 'tap', val864));
  }
  
  var ref1851 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1851.get() !== null) {
    node1876.attr('style', ref1851.get());
    subs__.addSub(ref1851.addEventListener('change', function(_, ref, val) {
      node1876.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1876.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1851.rebind());
  
  
  var node1879 = $("<div>");
  
  var ref1849 = mobl.ref(ui.headerContainerStyle);
  if(ref1849.get() !== null) {
    node1879.attr('class', ref1849.get());
    subs__.addSub(ref1849.addEventListener('change', function(_, ref, val) {
      node1879.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1849.rebind());
  
  
  var node1880 = $("<div>");
  
  var ref1847 = text;
  node1880.text(""+ref1847.get());
  var ignore349 = false;
  subs__.addSub(ref1847.addEventListener('change', function(_, ref, val) {
    if(ignore349) return;
    node1880.text(""+val);
  }));
  subs__.addSub(ref1847.rebind());
  
  
  var ref1848 = mobl.ref(ui.headerTextStyle);
  if(ref1848.get() !== null) {
    node1880.attr('class', ref1848.get());
    subs__.addSub(ref1848.addEventListener('change', function(_, ref, val) {
      node1880.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1848.rebind());
  
  node1879.append(node1880);
  node1876.append(node1879);
  var nodes9557 = $("<span>");
  node1876.append(nodes9557);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl744();
  }));
  
  function renderControl744() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11207); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9557;
      nodes9557 = node.contents();
      oldNodes.replaceWith(nodes9557);
    }));
  }
  renderControl744();
  root11206.append(node1876);
  
  var node1877 = $("<span>");
  root11206.append(node1877);
  var condSubs467 = new mobl.CompSubscription();
  subs__.addSub(condSubs467);
  var oldValue467;
  var renderCond467 = function() {
    var value1119 = fixedPosition.get();
    if(oldValue467 === value1119) return;
    oldValue467 = value1119;
    var subs__ = condSubs467;
    subs__.unsubscribe();
    node1877.empty();
    if(value1119) {
      
      var node1878 = $("<div>");
      node1878.attr('id', "hello");
      node1878.attr('style', "height: 2.9em;");
      
      node1877.append(node1878);
      
      
    } else {
      
    }
  };
  renderCond467();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond467();
  }));
  
  callback(root11206); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11208 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1852 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1852.get() !== null) {
    sp.attr('class', ref1852.get());
    subs__.addSub(ref1852.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1852.rebind());
  
  var val865 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val865 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val865));
  }
  
  var val866 = function(event, callback) {
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
  if(val866 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val866));
  }
  
  var val867 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after243(result__) {
                    var tmp9419 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after243);if(result__ !== undefined) after243(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val867 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val867));
  }
  
  var val868 = function(event, callback) {
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
  if(val868 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val868));
  }
  
  var ref1853 = text;
  sp.text(""+ref1853.get());
  var ignore350 = false;
  subs__.addSub(ref1853.addEventListener('change', function(_, ref, val) {
    if(ignore350) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1853.rebind());
  
  
  root11208.append(sp);
  callback(root11208); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11209 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9558 = $("<span>");
  root11209.append(nodes9558);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root11210 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11210); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9558;
    nodes9558 = node.contents();
    oldNodes.replaceWith(nodes9558);
  }));
  callback(root11209); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11211 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9559 = $("<span>");
  root11211.append(nodes9559);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root11212 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11212); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9559;
    nodes9559 = node.contents();
    oldNodes.replaceWith(nodes9559);
  }));
  callback(root11211); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root11213 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1881 = $("<ul>");
  
  var ref1854 = mobl.ref(ui.groupStyle);
  if(ref1854.get() !== null) {
    node1881.attr('class', ref1854.get());
    subs__.addSub(ref1854.addEventListener('change', function(_, ref, val) {
      node1881.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1854.rebind());
  
  var nodes9560 = $("<span>");
  node1881.append(nodes9560);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl745();
  }));
  
  function renderControl745() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11214 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11214); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9560;
      nodes9560 = node.contents();
      oldNodes.replaceWith(nodes9560);
    }));
  }
  renderControl745();
  root11213.append(node1881);
  callback(root11213); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root11215 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1882 = $("<img>");
  
  var ref1855 = url;
  if(ref1855.get() !== null) {
    node1882.attr('src', ref1855.get());
    subs__.addSub(ref1855.addEventListener('change', function(_, ref, val) {
      node1882.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1855.rebind());
  
  var ref1856 = width;
  if(ref1856.get() !== null) {
    node1882.attr('width', ref1856.get());
    subs__.addSub(ref1856.addEventListener('change', function(_, ref, val) {
      node1882.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1856.rebind());
  
  var ref1857 = height;
  if(ref1857.get() !== null) {
    node1882.attr('height', ref1857.get());
    subs__.addSub(ref1857.addEventListener('change', function(_, ref, val) {
      node1882.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1857.rebind());
  
  var ref1858 = style;
  if(ref1858.get() !== null) {
    node1882.attr('class', ref1858.get());
    subs__.addSub(ref1858.addEventListener('change', function(_, ref, val) {
      node1882.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1858.rebind());
  
  var val869 = onclick.get();
  if(val869 !== null) {
    subs__.addSub(mobl.domBind(node1882, 'tap', val869));
  }
  
  var ref1859 = valign;
  if(ref1859.get() !== null) {
    node1882.attr('valign', ref1859.get());
    subs__.addSub(ref1859.addEventListener('change', function(_, ref, val) {
      node1882.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1859.rebind());
  
  var ref1860 = align;
  if(ref1860.get() !== null) {
    node1882.attr('align', ref1860.get());
    subs__.addSub(ref1860.addEventListener('change', function(_, ref, val) {
      node1882.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1860.rebind());
  
  root11215.append(node1882);
  callback(root11215); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root11216 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1861 = mobl.ref(ui.itemStyle);
  if(ref1861.get() !== null) {
    el.attr('class', ref1861.get());
    subs__.addSub(ref1861.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1861.rebind());
  
  var ref1862 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1862.get() !== null) {
    el.attr('class', ref1862.get());
    subs__.addSub(ref1862.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1862.rebind());
  
  var val870 = onswipe.get();
  if(val870 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val870));
  }
  
  var val871 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp9420 = result__;
                                           function after244(result__) {
                                             var tmp9421 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after244);if(result__ !== undefined) after244(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp9422 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val871 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val871));
  }
  
  var nodes9561 = $("<span>");
  el.append(nodes9561);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl746();
  }));
  
  function renderControl746() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11217); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9561;
      nodes9561 = node.contents();
      oldNodes.replaceWith(nodes9561);
    }));
  }
  renderControl746();
  root11216.append(el);
  callback(root11216); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root11218 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1883 = $("<input>");
  node1883.attr('type', "checkbox");
  
  var ref1864 = b;
  node1883.attr('checked', !!ref1864.get());
  subs__.addSub(ref1864.addEventListener('change', function(_, ref, val) {
    if(ref === ref1864) node1883.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1883, 'change', function() {
    b.set(!!node1883.attr('checked'));
  }));
  
  var val873 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val873 !== null) {
    subs__.addSub(mobl.domBind(node1883, 'tap', val873));
  }
  
  var val874 = onchange.get();
  if(val874 !== null) {
    subs__.addSub(mobl.domBind(node1883, 'change', val874));
  }
  
  root11218.append(node1883);
  
  root11218.append(" ");
  
  var node1884 = $("<span>");
  
  var ref1863 = label;
  node1884.text(""+ref1863.get());
  var ignore351 = false;
  subs__.addSub(ref1863.addEventListener('change', function(_, ref, val) {
    if(ignore351) return;
    node1884.text(""+val);
  }));
  subs__.addSub(ref1863.rebind());
  
  
  var val872 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after245(result__) {
                    var tmp9423 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after245);if(result__ !== undefined) after245(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val872 !== null) {
    subs__.addSub(mobl.domBind(node1884, 'tap', val872));
  }
  
  root11218.append(node1884);
  callback(root11218); return subs__;
  
  
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
  var root11219 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1885 = $("<span>");
  root11219.append(node1885);
  var condSubs468 = new mobl.CompSubscription();
  subs__.addSub(condSubs468);
  var oldValue468;
  var renderCond468 = function() {
    var value1120 = label.get();
    if(oldValue468 === value1120) return;
    oldValue468 = value1120;
    var subs__ = condSubs468;
    subs__.unsubscribe();
    node1885.empty();
    if(value1120) {
      var nodes9562 = $("<span>");
      node1885.append(nodes9562);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root11220 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11220); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9562;
        nodes9562 = node.contents();
        oldNodes.replaceWith(nodes9562);
      }));
      
      
    } else {
      
    }
  };
  renderCond468();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond468();
  }));
  
  
  var node1886 = $("<span>");
  root11219.append(node1886);
  var condSubs469 = new mobl.CompSubscription();
  subs__.addSub(condSubs469);
  var oldValue469;
  var renderCond469 = function() {
    var value1121 = validator.get();
    if(oldValue469 === value1121) return;
    oldValue469 = value1121;
    var subs__ = condSubs469;
    subs__.unsubscribe();
    node1886.empty();
    if(value1121) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after249(result__) {
        var tmp9424 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp9425 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1887 = $("<input>");
        
        var ref1865 = inputType;
        if(ref1865.get() !== null) {
          node1887.attr('type', ref1865.get());
          subs__.addSub(ref1865.addEventListener('change', function(_, ref, val) {
            node1887.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1865.rebind());
        
        var ref1866 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1866.get() !== null) {
          node1887.attr('class', ref1866.get());
          subs__.addSub(ref1866.addEventListener('change', function(_, ref, val) {
            node1887.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1887.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1887.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1887.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1866.rebind());
        
        var ref1867 = placeholder;
        if(ref1867.get() !== null) {
          node1887.attr('placeholder', ref1867.get());
          subs__.addSub(ref1867.addEventListener('change', function(_, ref, val) {
            node1887.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1867.rebind());
        
        var ref1868 = temp;
        node1887.val(""+ref1868.get());
        var ignore352 = false;
        subs__.addSub(ref1868.addEventListener('change', function(_, ref, val) {
          if(ignore352) return;
          node1887.val(""+val);
        }));
        subs__.addSub(ref1868.rebind());
        
        subs__.addSub(mobl.domBind(node1887, 'keyup change', function() {
          ignore352 = true;
          temp.set(mobl.stringTomobl__String(node1887.val()));
          ignore352 = false;
        }));
        
        
        var val875 = onchange.get();
        if(val875 !== null) {
          subs__.addSub(mobl.domBind(node1887, 'change', val875));
        }
        
        var val876 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after246(result__) {
                          var tmp9426 = result__;
                          function after247(result__) {
                            var tmp9427 = result__;
                            var result__ = tmp9427;
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
                          var result__ = validator.get()(temp.get(), after247);if(result__ !== undefined) after247(result__);
                        }
                        var result__ = onkeyup.get()(event, after246);if(result__ !== undefined) after246(result__);
                      } else {
                        {
                          function after248(result__) {
                            var tmp9427 = result__;
                            var result__ = tmp9427;
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
                          var result__ = validator.get()(temp.get(), after248);if(result__ !== undefined) after248(result__);
                        }
                      }
                    };
        if(val876 !== null) {
          subs__.addSub(mobl.domBind(node1887, 'keyup', val876));
        }
        
        var val877 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val877 !== null) {
          subs__.addSub(mobl.domBind(node1887, 'blur', val877));
        }
        
        node1886.append(node1887);
        var nodes9563 = $("<span>");
        node1886.append(nodes9563);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root11221 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11221); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9563;
          nodes9563 = node.contents();
          oldNodes.replaceWith(nodes9563);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after249);if(result__ !== undefined) after249(result__);
    } else {
      
      var node1888 = $("<input>");
      
      var ref1869 = inputType;
      if(ref1869.get() !== null) {
        node1888.attr('type', ref1869.get());
        subs__.addSub(ref1869.addEventListener('change', function(_, ref, val) {
          node1888.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1869.rebind());
      
      var ref1870 = style;
      if(ref1870.get() !== null) {
        node1888.attr('class', ref1870.get());
        subs__.addSub(ref1870.addEventListener('change', function(_, ref, val) {
          node1888.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1870.rebind());
      
      var ref1871 = placeholder;
      if(ref1871.get() !== null) {
        node1888.attr('placeholder', ref1871.get());
        subs__.addSub(ref1871.addEventListener('change', function(_, ref, val) {
          node1888.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1871.rebind());
      
      var ref1872 = s;
      node1888.val(""+ref1872.get());
      var ignore353 = false;
      subs__.addSub(ref1872.addEventListener('change', function(_, ref, val) {
        if(ignore353) return;
        node1888.val(""+val);
      }));
      subs__.addSub(ref1872.rebind());
      
      subs__.addSub(mobl.domBind(node1888, 'keyup change', function() {
        ignore353 = true;
        s.set(mobl.stringTomobl__String(node1888.val()));
        ignore353 = false;
      }));
      
      
      var val878 = onchange.get();
      if(val878 !== null) {
        subs__.addSub(mobl.domBind(node1888, 'change', val878));
      }
      
      var val879 = onkeyup.get();
      if(val879 !== null) {
        subs__.addSub(mobl.domBind(node1888, 'keyup', val879));
      }
      
      var val880 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val880 !== null) {
        subs__.addSub(mobl.domBind(node1888, 'blur', val880));
      }
      
      node1886.append(node1888);
      
      
    }
  };
  renderCond469();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond469();
  }));
  
  callback(root11219); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11222 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9564 = $("<span>");
  root11222.append(nodes9564);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11223 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11223); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9564;
    nodes9564 = node.contents();
    oldNodes.replaceWith(nodes9564);
  }));
  callback(root11222); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11224 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9565 = $("<span>");
  root11224.append(nodes9565);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11225 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11225); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9565;
    nodes9565 = node.contents();
    oldNodes.replaceWith(nodes9565);
  }));
  callback(root11224); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root11226 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1889 = $("<span>");
  root11226.append(node1889);
  var condSubs470 = new mobl.CompSubscription();
  subs__.addSub(condSubs470);
  var oldValue470;
  var renderCond470 = function() {
    var value1122 = label.get();
    if(oldValue470 === value1122) return;
    oldValue470 = value1122;
    var subs__ = condSubs470;
    subs__.unsubscribe();
    node1889.empty();
    if(value1122) {
      var nodes9566 = $("<span>");
      node1889.append(nodes9566);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root11227 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11227); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9566;
        nodes9566 = node.contents();
        oldNodes.replaceWith(nodes9566);
      }));
      
      
    } else {
      
    }
  };
  renderCond470();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond470();
  }));
  
  
  var node1890 = $("<input>");
  node1890.attr('type', "range");
  
  var ref1873 = n;
  node1890.val(""+ref1873.get());
  var ignore354 = false;
  subs__.addSub(ref1873.addEventListener('change', function(_, ref, val) {
    if(ignore354) return;
    node1890.val(""+val);
  }));
  subs__.addSub(ref1873.rebind());
  
  subs__.addSub(mobl.domBind(node1890, 'keyup change', function() {
    ignore354 = true;
    n.set(mobl.stringTomobl__Num(node1890.val()));
    ignore354 = false;
  }));
  
  
  var ref1874 = min;
  if(ref1874.get() !== null) {
    node1890.attr('min', ref1874.get());
    subs__.addSub(ref1874.addEventListener('change', function(_, ref, val) {
      node1890.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1874.rebind());
  
  var ref1875 = max;
  if(ref1875.get() !== null) {
    node1890.attr('max', ref1875.get());
    subs__.addSub(ref1875.addEventListener('change', function(_, ref, val) {
      node1890.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1875.rebind());
  
  var ref1876 = step;
  if(ref1876.get() !== null) {
    node1890.attr('step', ref1876.get());
    subs__.addSub(ref1876.addEventListener('change', function(_, ref, val) {
      node1890.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1876.rebind());
  node1890.attr('style', "width: 99%;");
  
  var val881 = onchange.get();
  if(val881 !== null) {
    subs__.addSub(mobl.domBind(node1890, 'change', val881));
  }
  
  var val882 = onkeyup.get();
  if(val882 !== null) {
    subs__.addSub(mobl.domBind(node1890, 'keyup', val882));
  }
  
  var ref1877 = placeholder;
  if(ref1877.get() !== null) {
    node1890.attr('placeholder', ref1877.get());
    subs__.addSub(ref1877.addEventListener('change', function(_, ref, val) {
      node1890.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1877.rebind());
  
  root11226.append(node1890);
  callback(root11226); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11228 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after250(result__) {
      var tmp9428 = result__;
      var result__ = tmp9428;
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
    var result__ = validator.get()(n2, after250);if(result__ !== undefined) after250(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes9567 = $("<span>");
  root11228.append(nodes9567);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11229 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11229); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9567;
    nodes9567 = node.contents();
    oldNodes.replaceWith(nodes9567);
  }));
  callback(root11228); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root11230 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1891 = $("<span>");
  root11230.append(node1891);
  var condSubs471 = new mobl.CompSubscription();
  subs__.addSub(condSubs471);
  var oldValue471;
  var renderCond471 = function() {
    var value1123 = label.get();
    if(oldValue471 === value1123) return;
    oldValue471 = value1123;
    var subs__ = condSubs471;
    subs__.unsubscribe();
    node1891.empty();
    if(value1123) {
      
      var node1892 = $("<span>");
      node1892.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1881 = label;
      node1892.text(""+ref1881.get());
      var ignore356 = false;
      subs__.addSub(ref1881.addEventListener('change', function(_, ref, val) {
        if(ignore356) return;
        node1892.text(""+val);
      }));
      subs__.addSub(ref1881.rebind());
      
      
      node1891.append(node1892);
      
      var node1893 = $("<span>");
      node1893.attr('style', "float: left");
      
      
      var node1894 = $("<input>");
      node1894.attr('type', "password");
      
      var ref1878 = style;
      if(ref1878.get() !== null) {
        node1894.attr('class', ref1878.get());
        subs__.addSub(ref1878.addEventListener('change', function(_, ref, val) {
          node1894.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1878.rebind());
      
      var ref1879 = placeholder;
      if(ref1879.get() !== null) {
        node1894.attr('placeholder', ref1879.get());
        subs__.addSub(ref1879.addEventListener('change', function(_, ref, val) {
          node1894.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1879.rebind());
      
      var ref1880 = s;
      node1894.val(""+ref1880.get());
      var ignore355 = false;
      subs__.addSub(ref1880.addEventListener('change', function(_, ref, val) {
        if(ignore355) return;
        node1894.val(""+val);
      }));
      subs__.addSub(ref1880.rebind());
      
      subs__.addSub(mobl.domBind(node1894, 'keyup change', function() {
        ignore355 = true;
        s.set(mobl.stringTomobl__String(node1894.val()));
        ignore355 = false;
      }));
      
      
      var val883 = onchange.get();
      if(val883 !== null) {
        subs__.addSub(mobl.domBind(node1894, 'change', val883));
      }
      
      var val884 = onkeyup.get();
      if(val884 !== null) {
        subs__.addSub(mobl.domBind(node1894, 'keyup', val884));
      }
      
      var val885 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val885 !== null) {
        subs__.addSub(mobl.domBind(node1894, 'blur', val885));
      }
      
      node1893.append(node1894);
      node1891.append(node1893);
      
      
      
      
    } else {
      
      var node1895 = $("<input>");
      node1895.attr('type', "password");
      
      var ref1882 = style;
      if(ref1882.get() !== null) {
        node1895.attr('class', ref1882.get());
        subs__.addSub(ref1882.addEventListener('change', function(_, ref, val) {
          node1895.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1882.rebind());
      
      var ref1883 = placeholder;
      if(ref1883.get() !== null) {
        node1895.attr('placeholder', ref1883.get());
        subs__.addSub(ref1883.addEventListener('change', function(_, ref, val) {
          node1895.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1883.rebind());
      
      var ref1884 = s;
      node1895.val(""+ref1884.get());
      var ignore357 = false;
      subs__.addSub(ref1884.addEventListener('change', function(_, ref, val) {
        if(ignore357) return;
        node1895.val(""+val);
      }));
      subs__.addSub(ref1884.rebind());
      
      subs__.addSub(mobl.domBind(node1895, 'keyup change', function() {
        ignore357 = true;
        s.set(mobl.stringTomobl__String(node1895.val()));
        ignore357 = false;
      }));
      
      
      var val886 = onchange.get();
      if(val886 !== null) {
        subs__.addSub(mobl.domBind(node1895, 'change', val886));
      }
      
      var val887 = onkeyup.get();
      if(val887 !== null) {
        subs__.addSub(mobl.domBind(node1895, 'keyup', val887));
      }
      
      var val888 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val888 !== null) {
        subs__.addSub(mobl.domBind(node1895, 'blur', val888));
      }
      
      node1891.append(node1895);
      
      
    }
  };
  renderCond471();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond471();
  }));
  
  callback(root11230); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root11231 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1889 = style;
  if(ref1889.get() !== null) {
    sel.attr('class', ref1889.get());
    subs__.addSub(ref1889.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1889.rebind());
  
  var val889 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after251(result__) {
                    var tmp9430 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after251);if(result__ !== undefined) after251(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val889 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val889));
  }
  
  
  var node1896 = mobl.loadingSpan();
  sel.append(node1896);
  var list295;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList295 = function() {
    var subs__ = listSubs__;
    list295 = options.get();
    list295.list(function(results295) {
      node1896.empty();
      for(var i2320 = 0; i2320 < results295.length; i2320++) {
        (function() {
          var iternode295 = $("<span>");
          node1896.append(iternode295);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results295), i2320), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results295), i2320), "_2");
          
          var node1897 = $("<option>");
          
          var ref1885 = optionDescription;
          node1897.text(""+ref1885.get());
          var ignore358 = false;
          subs__.addSub(ref1885.addEventListener('change', function(_, ref, val) {
            if(ignore358) return;
            node1897.text(""+val);
          }));
          subs__.addSub(ref1885.rebind());
          
          
          var ref1886 = optionStyle;
          if(ref1886.get() !== null) {
            node1897.attr('class', ref1886.get());
            subs__.addSub(ref1886.addEventListener('change', function(_, ref, val) {
              node1897.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1886.rebind());
          
          var ref1887 = optionValue;
          if(ref1887.get() !== null) {
            node1897.attr('value', ref1887.get());
            subs__.addSub(ref1887.addEventListener('change', function(_, ref, val) {
              node1897.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1887.rebind());
          
          var ref1888 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1888.get() !== null) {
            node1897.attr('selected', ref1888.get());
            subs__.addSub(ref1888.addEventListener('change', function(_, ref, val) {
              node1897.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1897.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1897.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1888.rebind());
          
          iternode295.append(node1897);
          
          var oldNodes = iternode295;
          iternode295 = iternode295.contents();
          oldNodes.replaceWith(iternode295);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list295.addEventListener('change', function() { listSubs__.unsubscribe(); renderList295(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList295(true); }));
    });
  };
  renderList295();
  
  root11231.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root11231); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root11232 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes9568 = $("<span>");
    root11232.append(nodes9568);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root11233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1898 = mobl.loadingSpan();
      root11233.append(node1898);
      var list296;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList296 = function() {
        var subs__ = listSubs__;
        list296 = tabs.get();
        list296.list(function(results296) {
          node1898.empty();
          for(var i2321 = 0; i2321 < results296.length; i2321++) {
            (function() {
              var iternode296 = $("<span>");
              node1898.append(iternode296);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results296), i2321), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results296), i2321), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results296), i2321), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp9391 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp9391.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp9391.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp9391.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp9391.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp9390 = mobl.ref(result__);
              
              var nodes9569 = $("<span>");
              iternode296.append(nodes9569);
              subs__.addSub((mobl.span)(tmp9391, mobl.ref(null), tmp9390, mobl.ref(null), function(_, callback) {
                var root11234 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9570 = $("<span>");
                root11234.append(nodes9570);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root11235 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root11235); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9570;
                  nodes9570 = node.contents();
                  oldNodes.replaceWith(nodes9570);
                }));
                callback(root11234); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9569;
                nodes9569 = node.contents();
                oldNodes.replaceWith(nodes9569);
              }));
              
              var oldNodes = iternode296;
              iternode296 = iternode296.contents();
              oldNodes.replaceWith(iternode296);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list296.addEventListener('change', function() { listSubs__.unsubscribe(); renderList296(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList296(true); }));
        });
      };
      renderList296();
      
      callback(root11233); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9568;
      nodes9568 = node.contents();
      oldNodes.replaceWith(nodes9568);
    }));
    
    var node1899 = mobl.loadingSpan();
    root11232.append(node1899);
    var list297;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList297 = function() {
      var subs__ = listSubs__;
      list297 = tabs.get();
      list297.list(function(results297) {
        node1899.empty();
        for(var i2322 = 0; i2322 < results297.length; i2322++) {
          (function() {
            var iternode297 = $("<span>");
            node1899.append(iternode297);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results297), i2322), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results297), i2322), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results297), i2322), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp9392 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp9392.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp9392.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp9392.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp9392.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes9571 = $("<span>");
            iternode297.append(nodes9571);
            subs__.addSub((mobl.block)(tmp9392, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11236 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9572 = $("<span>");
              root11236.append(nodes9572);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root11237 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9573 = $("<span>");
                root11237.append(nodes9573);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl747();
                }));
                
                function renderControl747() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root11238 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root11238); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9573;
                    nodes9573 = node.contents();
                    oldNodes.replaceWith(nodes9573);
                  }));
                }
                renderControl747();
                callback(root11237); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9572;
                nodes9572 = node.contents();
                oldNodes.replaceWith(nodes9572);
              }));
              callback(root11236); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9571;
              nodes9571 = node.contents();
              oldNodes.replaceWith(nodes9571);
            }));
            
            var oldNodes = iternode297;
            iternode297 = iternode297.contents();
            oldNodes.replaceWith(iternode297);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list297.addEventListener('change', function() { listSubs__.unsubscribe(); renderList297(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList297(true); }));
      });
    };
    renderList297();
    
    callback(root11232); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes9568 = $("<span>");
      root11232.append(nodes9568);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11233 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1898 = mobl.loadingSpan();
        root11233.append(node1898);
        var list296;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList296 = function() {
          var subs__ = listSubs__;
          list296 = tabs.get();
          list296.list(function(results296) {
            node1898.empty();
            for(var i2321 = 0; i2321 < results296.length; i2321++) {
              (function() {
                var iternode296 = $("<span>");
                node1898.append(iternode296);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results296), i2321), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results296), i2321), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results296), i2321), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp9391 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp9391.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp9391.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp9391.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp9391.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp9390 = mobl.ref(result__);
                
                var nodes9569 = $("<span>");
                iternode296.append(nodes9569);
                subs__.addSub((mobl.span)(tmp9391, mobl.ref(null), tmp9390, mobl.ref(null), function(_, callback) {
                  var root11234 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9570 = $("<span>");
                  root11234.append(nodes9570);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root11235 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root11235); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9570;
                    nodes9570 = node.contents();
                    oldNodes.replaceWith(nodes9570);
                  }));
                  callback(root11234); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9569;
                  nodes9569 = node.contents();
                  oldNodes.replaceWith(nodes9569);
                }));
                
                var oldNodes = iternode296;
                iternode296 = iternode296.contents();
                oldNodes.replaceWith(iternode296);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list296.addEventListener('change', function() { listSubs__.unsubscribe(); renderList296(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList296(true); }));
          });
        };
        renderList296();
        
        callback(root11233); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9568;
        nodes9568 = node.contents();
        oldNodes.replaceWith(nodes9568);
      }));
      
      var node1899 = mobl.loadingSpan();
      root11232.append(node1899);
      var list297;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList297 = function() {
        var subs__ = listSubs__;
        list297 = tabs.get();
        list297.list(function(results297) {
          node1899.empty();
          for(var i2322 = 0; i2322 < results297.length; i2322++) {
            (function() {
              var iternode297 = $("<span>");
              node1899.append(iternode297);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results297), i2322), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results297), i2322), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results297), i2322), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp9392 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp9392.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp9392.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp9392.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp9392.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes9571 = $("<span>");
              iternode297.append(nodes9571);
              subs__.addSub((mobl.block)(tmp9392, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root11236 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9572 = $("<span>");
                root11236.append(nodes9572);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root11237 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9573 = $("<span>");
                  root11237.append(nodes9573);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl747();
                  }));
                  
                  function renderControl747() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root11238 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11238); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9573;
                      nodes9573 = node.contents();
                      oldNodes.replaceWith(nodes9573);
                    }));
                  }
                  renderControl747();
                  callback(root11237); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9572;
                  nodes9572 = node.contents();
                  oldNodes.replaceWith(nodes9572);
                }));
                callback(root11236); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9571;
                nodes9571 = node.contents();
                oldNodes.replaceWith(nodes9571);
              }));
              
              var oldNodes = iternode297;
              iternode297 = iternode297.contents();
              oldNodes.replaceWith(iternode297);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list297.addEventListener('change', function() { listSubs__.unsubscribe(); renderList297(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList297(true); }));
        });
      };
      renderList297();
      
      callback(root11232); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root11239 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1900 = $("<div>");
  
  var ref1893 = mobl.ref(ui.searchboxStyle);
  if(ref1893.get() !== null) {
    node1900.attr('class', ref1893.get());
    subs__.addSub(ref1893.addEventListener('change', function(_, ref, val) {
      node1900.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1893.rebind());
  
  
  var node1901 = $("<input>");
  node1901.attr('type', "search");
  
  var ref1890 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1890.get() !== null) {
    node1901.attr('class', ref1890.get());
    subs__.addSub(ref1890.addEventListener('change', function(_, ref, val) {
      node1901.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1890.rebind());
  
  var ref1891 = placeholder;
  if(ref1891.get() !== null) {
    node1901.attr('placeholder', ref1891.get());
    subs__.addSub(ref1891.addEventListener('change', function(_, ref, val) {
      node1901.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1891.rebind());
  
  var ref1892 = s;
  node1901.val(""+ref1892.get());
  var ignore359 = false;
  subs__.addSub(ref1892.addEventListener('change', function(_, ref, val) {
    if(ignore359) return;
    node1901.val(""+val);
  }));
  subs__.addSub(ref1892.rebind());
  
  subs__.addSub(mobl.domBind(node1901, 'keyup change', function() {
    ignore359 = true;
    s.set(mobl.stringTomobl__String(node1901.val()));
    ignore359 = false;
  }));
  
  
  var val890 = onsearch.get();
  if(val890 !== null) {
    subs__.addSub(mobl.domBind(node1901, 'change', val890));
  }
  
  var val891 = onkeyup.get();
  if(val891 !== null) {
    subs__.addSub(mobl.domBind(node1901, 'keyup', val891));
  }
  node1901.attr('autocorrect', false);
  node1901.attr('autocapitalize', false);
  node1901.attr('autocomplete', false);
  
  node1900.append(node1901);
  root11239.append(node1900);
  callback(root11239); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root11240 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1894 = mobl.ref(ui.contextMenuStyle);
  if(ref1894.get() !== null) {
    menu.attr('class', ref1894.get());
    subs__.addSub(ref1894.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1894.rebind());
  
  var nodes9574 = $("<span>");
  menu.append(nodes9574);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl748();
  }));
  
  function renderControl748() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11241); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9574;
      nodes9574 = node.contents();
      oldNodes.replaceWith(nodes9574);
    }));
  }
  renderControl748();
  root11240.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val892 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp9433 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val892 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val892));
  }
  
  root11240.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root11240); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root11242 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp9418 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp9418.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1902 = $("<span>");
  root11242.append(node1902);
  var condSubs472 = new mobl.CompSubscription();
  subs__.addSub(condSubs472);
  var oldValue472;
  var renderCond472 = function() {
    var value1124 = tmp9418.get();
    if(oldValue472 === value1124) return;
    oldValue472 = value1124;
    var subs__ = condSubs472;
    subs__.unsubscribe();
    node1902.empty();
    if(value1124) {
      items.get().one(function(result__) {
        var tmp9434 = result__;
        var current = mobl.ref(result__);
        
        var node1903 = $("<div>");
        node1903.attr('width', "100%");
        
        
        var node1904 = $("<div>");
        node1904.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes9577 = $("<span>");
        node1904.append(nodes9577);
        subs__.addSub((ui.group)(function(_, callback) {
          var root11245 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1907 = mobl.loadingSpan();
          root11245.append(node1907);
          var list298;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList298 = function() {
            var subs__ = listSubs__;
            list298 = items.get();
            list298.list(function(results298) {
              node1907.empty();
              for(var i2323 = 0; i2323 < results298.length; i2323++) {
                (function() {
                  var iternode298 = $("<span>");
                  node1907.append(iternode298);
                  var it;
                  it = mobl.ref(mobl.ref(results298), i2323);
                  var result__ = it.get() == current.get();
                  var tmp9398 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp9398.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp9398.set(it.get() == current.get());
                  }));
                  
                  
                  var node1908 = $("<span>");
                  iternode298.append(node1908);
                  var condSubs474 = new mobl.CompSubscription();
                  subs__.addSub(condSubs474);
                  var oldValue474;
                  var renderCond474 = function() {
                    var value1126 = tmp9398.get();
                    if(oldValue474 === value1126) return;
                    oldValue474 = value1126;
                    var subs__ = condSubs474;
                    subs__.unsubscribe();
                    node1908.empty();
                    if(value1126) {
                      var nodes9578 = $("<span>");
                      node1908.append(nodes9578);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root11246 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes9579 = $("<span>");
                        root11246.append(nodes9579);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl750();
                        }));
                        
                        function renderControl750() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root11247 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root11247); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes9579;
                            nodes9579 = node.contents();
                            oldNodes.replaceWith(nodes9579);
                          }));
                        }
                        renderControl750();
                        callback(root11246); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9578;
                        nodes9578 = node.contents();
                        oldNodes.replaceWith(nodes9578);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp9397 = mobl.ref(result__);
                      
                      var nodes9580 = $("<span>");
                      node1908.append(nodes9580);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9397, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root11248 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes9581 = $("<span>");
                        root11248.append(nodes9581);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl751();
                        }));
                        
                        function renderControl751() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root11249 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root11249); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes9581;
                            nodes9581 = node.contents();
                            oldNodes.replaceWith(nodes9581);
                          }));
                        }
                        renderControl751();
                        callback(root11248); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9580;
                        nodes9580 = node.contents();
                        oldNodes.replaceWith(nodes9580);
                      }));
                      
                      
                    }
                  };
                  renderCond474();
                  subs__.addSub(tmp9398.addEventListener('change', function() {
                    renderCond474();
                  }));
                  
                  
                  var oldNodes = iternode298;
                  iternode298 = iternode298.contents();
                  oldNodes.replaceWith(iternode298);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list298.addEventListener('change', function() { listSubs__.unsubscribe(); renderList298(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList298(true); }));
            });
          };
          renderList298();
          
          callback(root11245); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9577;
          nodes9577 = node.contents();
          oldNodes.replaceWith(nodes9577);
        }));
        node1903.append(node1904);
        
        var node1905 = $("<div>");
        node1905.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1906 = $("<span>");
        node1905.append(node1906);
        var condSubs473 = new mobl.CompSubscription();
        subs__.addSub(condSubs473);
        var oldValue473;
        var renderCond473 = function() {
          var value1125 = current.get();
          if(oldValue473 === value1125) return;
          oldValue473 = value1125;
          var subs__ = condSubs473;
          subs__.unsubscribe();
          node1906.empty();
          if(value1125) {
            var nodes9575 = $("<span>");
            node1906.append(nodes9575);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl749();
            }));
            
            function renderControl749() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root11243 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11243); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9575;
                nodes9575 = node.contents();
                oldNodes.replaceWith(nodes9575);
              }));
            }
            renderControl749();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp9399 = mobl.ref(result__);
            
            var nodes9576 = $("<span>");
            node1906.append(nodes9576);
            subs__.addSub((mobl.label)(tmp9399, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11244 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11244); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9576;
              nodes9576 = node.contents();
              oldNodes.replaceWith(nodes9576);
            }));
            
            
          }
        };
        renderCond473();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond473();
        }));
        
        node1903.append(node1905);
        node1902.append(node1903);
        
        
        
        
        
        
      });
    } else {
      var nodes9582 = $("<span>");
      node1902.append(nodes9582);
      subs__.addSub((ui.group)(function(_, callback) {
        var root11250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1909 = mobl.loadingSpan();
        root11250.append(node1909);
        var list299;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList299 = function() {
          var subs__ = listSubs__;
          list299 = items.get();
          list299.list(function(results299) {
            node1909.empty();
            for(var i2324 = 0; i2324 < results299.length; i2324++) {
              (function() {
                var iternode299 = $("<span>");
                node1909.append(iternode299);
                var it;
                it = mobl.ref(mobl.ref(results299), i2324);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp9435 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp9393 = mobl.ref(result__);
                
                var nodes9583 = $("<span>");
                iternode299.append(nodes9583);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9393, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root11251 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9584 = $("<span>");
                  root11251.append(nodes9584);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl752();
                  }));
                  
                  function renderControl752() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root11252 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11252); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9584;
                      nodes9584 = node.contents();
                      oldNodes.replaceWith(nodes9584);
                    }));
                  }
                  renderControl752();
                  callback(root11251); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9583;
                  nodes9583 = node.contents();
                  oldNodes.replaceWith(nodes9583);
                }));
                
                var oldNodes = iternode299;
                iternode299 = iternode299.contents();
                oldNodes.replaceWith(iternode299);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list299.addEventListener('change', function() { listSubs__.unsubscribe(); renderList299(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList299(true); }));
          });
        };
        renderList299();
        
        callback(root11250); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9582;
        nodes9582 = node.contents();
        oldNodes.replaceWith(nodes9582);
      }));
      
      
    }
  };
  renderCond472();
  subs__.addSub(tmp9418.addEventListener('change', function() {
    renderCond472();
  }));
  
  callback(root11242); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root11253 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp9396 = mobl.ref(result__);
  
  var nodes9585 = $("<span>");
  root11253.append(nodes9585);
  subs__.addSub((ui.header)(tmp9396, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11254 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9395 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9394 = mobl.ref(result__);
    
    var nodes9586 = $("<span>");
    root11254.append(nodes9586);
    subs__.addSub((ui.backButton)(tmp9394, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9395, function(_, callback) {
      var root11255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11255); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9586;
      nodes9586 = node.contents();
      oldNodes.replaceWith(nodes9586);
    }));
    callback(root11254); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9585;
    nodes9585 = node.contents();
    oldNodes.replaceWith(nodes9585);
  }));
  var nodes9587 = $("<span>");
  root11253.append(nodes9587);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl753();
  }));
  
  function renderControl753() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root11256 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11256); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9587;
      nodes9587 = node.contents();
      oldNodes.replaceWith(nodes9587);
    }));
  }
  renderControl753();
  callback(root11253); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root11257 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes9588 = $("<span>");
  root11257.append(nodes9588);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11258 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1910 = mobl.loadingSpan();
    root11258.append(node1910);
    var list300;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList300 = function() {
      var subs__ = listSubs__;
      list300 = coll.get();
      list300.list(function(results300) {
        node1910.empty();
        for(var i2325 = 0; i2325 < results300.length; i2325++) {
          (function() {
            var iternode300 = $("<span>");
            node1910.append(iternode300);
            var it;
            it = mobl.ref(mobl.ref(results300), i2325);
            var result__ = it.get() == selected.get();
            var tmp9401 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp9401.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp9401.set(it.get() == selected.get());
            }));
            
            
            var node1911 = $("<span>");
            iternode300.append(node1911);
            var condSubs475 = new mobl.CompSubscription();
            subs__.addSub(condSubs475);
            var oldValue475;
            var renderCond475 = function() {
              var value1127 = tmp9401.get();
              if(oldValue475 === value1127) return;
              oldValue475 = value1127;
              var subs__ = condSubs475;
              subs__.unsubscribe();
              node1911.empty();
              if(value1127) {
                var nodes9589 = $("<span>");
                node1911.append(nodes9589);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root11259 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9590 = $("<span>");
                  root11259.append(nodes9590);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl754();
                  }));
                  
                  function renderControl754() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root11260 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11260); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9590;
                      nodes9590 = node.contents();
                      oldNodes.replaceWith(nodes9590);
                    }));
                  }
                  renderControl754();
                  callback(root11259); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9589;
                  nodes9589 = node.contents();
                  oldNodes.replaceWith(nodes9589);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp9400 = mobl.ref(result__);
                
                var nodes9591 = $("<span>");
                node1911.append(nodes9591);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9400, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root11261 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9592 = $("<span>");
                  root11261.append(nodes9592);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl755();
                  }));
                  
                  function renderControl755() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root11262 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11262); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9592;
                      nodes9592 = node.contents();
                      oldNodes.replaceWith(nodes9592);
                    }));
                  }
                  renderControl755();
                  callback(root11261); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9591;
                  nodes9591 = node.contents();
                  oldNodes.replaceWith(nodes9591);
                }));
                
                
              }
            };
            renderCond475();
            subs__.addSub(tmp9401.addEventListener('change', function() {
              renderCond475();
            }));
            
            
            var oldNodes = iternode300;
            iternode300 = iternode300.contents();
            oldNodes.replaceWith(iternode300);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list300.addEventListener('change', function() { listSubs__.unsubscribe(); renderList300(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList300(true); }));
      });
    };
    renderList300();
    
    callback(root11258); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9588;
    nodes9588 = node.contents();
    oldNodes.replaceWith(nodes9588);
  }));
  callback(root11257); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root11263 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp9436 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp9402 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp9402.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp9402.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp9402.set(coll.get().limit(n.get()));
    }));
    
    
    var node1912 = mobl.loadingSpan();
    root11263.append(node1912);
    var list301;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList301 = function() {
      var subs__ = listSubs__;
      list301 = tmp9402.get();
      list301.list(function(results301) {
        node1912.empty();
        for(var i2326 = 0; i2326 < results301.length; i2326++) {
          (function() {
            var iternode301 = $("<span>");
            node1912.append(iternode301);
            var it;
            it = mobl.ref(mobl.ref(results301), i2326);
            var nodes9593 = $("<span>");
            iternode301.append(nodes9593);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl756();
            }));
            
            function renderControl756() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root11264 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11264); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9593;
                nodes9593 = node.contents();
                oldNodes.replaceWith(nodes9593);
              }));
            }
            renderControl756();
            
            var oldNodes = iternode301;
            iternode301 = iternode301.contents();
            oldNodes.replaceWith(iternode301);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list301.addEventListener('change', function() { listSubs__.unsubscribe(); renderList301(true); }));
        subs__.addSub(tmp9402.addEventListener('change', function() { listSubs__.unsubscribe(); renderList301(true); }));
      });
    };
    renderList301();
    
    var result__ = n.get() < total.get();
    var tmp9404 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp9404.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp9404.set(n.get() < total.get());
    }));
    
    
    var node1913 = $("<span>");
    root11263.append(node1913);
    var condSubs476 = new mobl.CompSubscription();
    subs__.addSub(condSubs476);
    var oldValue476;
    var renderCond476 = function() {
      var value1128 = tmp9404.get();
      if(oldValue476 === value1128) return;
      oldValue476 = value1128;
      var subs__ = condSubs476;
      subs__.unsubscribe();
      node1913.empty();
      if(value1128) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9403 = mobl.ref(result__);
        
        var nodes9594 = $("<span>");
        node1913.append(nodes9594);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp9403, mobl.ref(null), function(_, callback) {
          var root11265 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes9595 = $("<span>");
          root11265.append(nodes9595);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root11266 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root11266); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes9595;
            nodes9595 = node.contents();
            oldNodes.replaceWith(nodes9595);
          }));
          callback(root11265); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9594;
          nodes9594 = node.contents();
          oldNodes.replaceWith(nodes9594);
        }));
        
        
      } else {
        
      }
    };
    renderCond476();
    subs__.addSub(tmp9404.addEventListener('change', function() {
      renderCond476();
    }));
    
    callback(root11263); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root11267 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9596 = $("<span>");
  root11267.append(nodes9596);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11268 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1914 = mobl.loadingSpan();
    root11268.append(node1914);
    var list302;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList302 = function() {
      var subs__ = listSubs__;
      list302 = items.get();
      list302.list(function(results302) {
        node1914.empty();
        for(var i2327 = 0; i2327 < results302.length; i2327++) {
          (function() {
            var iternode302 = $("<span>");
            node1914.append(iternode302);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results302), i2327), "_1");it = mobl.ref(mobl.ref(mobl.ref(results302), i2327), "_2");
            var nodes9597 = $("<span>");
            iternode302.append(nodes9597);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root11269 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9598 = $("<span>");
              root11269.append(nodes9598);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root11270 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11270); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9598;
                nodes9598 = node.contents();
                oldNodes.replaceWith(nodes9598);
              }));
              callback(root11269); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9597;
              nodes9597 = node.contents();
              oldNodes.replaceWith(nodes9597);
            }));
            
            var oldNodes = iternode302;
            iternode302 = iternode302.contents();
            oldNodes.replaceWith(iternode302);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list302.addEventListener('change', function() { listSubs__.unsubscribe(); renderList302(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList302(true); }));
      });
    };
    renderList302();
    
    callback(root11268); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9596;
    nodes9596 = node.contents();
    oldNodes.replaceWith(nodes9596);
  }));
  callback(root11267); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root11271 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1330) {
    coll1330 = coll1330.reverse();
    function processOne352() {
      var it;
      it = coll1330.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1330.length > 0) processOne352(); else rest352();
      
    }
    function rest352() {
      var nodes9599 = $("<span>");
      root11271.append(nodes9599);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root11272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9405 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp9406 = mobl.ref(result__);
        
        var nodes9600 = $("<span>");
        root11272.append(nodes9600);
        subs__.addSub((ui.backButton)(tmp9406, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9405, function(_, callback) {
          var root11273 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11273); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9600;
          nodes9600 = node.contents();
          oldNodes.replaceWith(nodes9600);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1329) {
                           coll1329 = coll1329.reverse();
                           function processOne351() {
                             var checked;var it;
                             var tmp9438 = coll1329.pop();
                             checked = tmp9438._1;it = tmp9438._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1329.length > 0) processOne351(); else rest351();
                               
                             } else {
                               {
                                 
                                 if(coll1329.length > 0) processOne351(); else rest351();
                                 
                               }
                             }
                           }
                           function rest351() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1329.length > 0) processOne351(); else rest351();
                         });
                         
                       };
        var tmp9407 = mobl.ref(result__);
        
        var nodes9601 = $("<span>");
        root11272.append(nodes9601);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp9407, function(_, callback) {
          var root11274 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11274); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9601;
          nodes9601 = node.contents();
          oldNodes.replaceWith(nodes9601);
        }));
        callback(root11272); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9599;
        nodes9599 = node.contents();
        oldNodes.replaceWith(nodes9599);
      }));
      var nodes9602 = $("<span>");
      root11271.append(nodes9602);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root11275 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11275); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9602;
        nodes9602 = node.contents();
        oldNodes.replaceWith(nodes9602);
      }));
      callback(root11271); return subs__;
      
      
    }
    if(coll1330.length > 0) processOne352(); else rest352();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root11276 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes9603 = $("<span>");
  root11276.append(nodes9603);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root11277 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11277); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9603;
    nodes9603 = node.contents();
    oldNodes.replaceWith(nodes9603);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp9408 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp9408.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp9408.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp9408.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp9408.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp9408.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes9604 = $("<span>");
  root11276.append(nodes9604);
  subs__.addSub((ui.masterDetail)(tmp9408, masterItem, detailItem, function(_, callback) {
    var root11278 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11278); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9604;
    nodes9604 = node.contents();
    oldNodes.replaceWith(nodes9604);
  }));
  callback(root11276); return subs__;
  
  
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
  var root11279 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes9605 = $("<span>");
  root11279.append(nodes9605);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root11280 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1915 = mobl.loadingSpan();
    root11280.append(node1915);
    var list303;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList303 = function() {
      var subs__ = listSubs__;
      list303 = sections.get();
      list303.list(function(results303) {
        node1915.empty();
        for(var i2328 = 0; i2328 < results303.length; i2328++) {
          (function() {
            var iternode303 = $("<span>");
            node1915.append(iternode303);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results303), i2328), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results303), i2328), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp9410 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp9410.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp9410.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp9410.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp9410.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp9409 = mobl.ref(result__);
            
            var nodes9606 = $("<span>");
            iternode303.append(nodes9606);
            subs__.addSub((mobl.span)(tmp9410, mobl.ref(null), tmp9409, mobl.ref(null), function(_, callback) {
              var root11281 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9607 = $("<span>");
              root11281.append(nodes9607);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root11282 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11282); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9607;
                nodes9607 = node.contents();
                oldNodes.replaceWith(nodes9607);
              }));
              callback(root11281); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9606;
              nodes9606 = node.contents();
              oldNodes.replaceWith(nodes9606);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp9411 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp9411.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp9411.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp9411.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp9411.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes9608 = $("<span>");
            iternode303.append(nodes9608);
            subs__.addSub((mobl.block)(tmp9411, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11283 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9609 = $("<span>");
              root11283.append(nodes9609);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl757();
              }));
              
              function renderControl757() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root11284 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root11284); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9609;
                  nodes9609 = node.contents();
                  oldNodes.replaceWith(nodes9609);
                }));
              }
              renderControl757();
              callback(root11283); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9608;
              nodes9608 = node.contents();
              oldNodes.replaceWith(nodes9608);
            }));
            
            var oldNodes = iternode303;
            iternode303 = iternode303.contents();
            oldNodes.replaceWith(iternode303);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list303.addEventListener('change', function() { listSubs__.unsubscribe(); renderList303(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList303(true); }));
      });
    };
    renderList303();
    
    callback(root11280); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9605;
    nodes9605 = node.contents();
    oldNodes.replaceWith(nodes9605);
  }));
  callback(root11279); return subs__;
  
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
  var root11285 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1916 = $("<table>");
  
  var ref1895 = style;
  if(ref1895.get() !== null) {
    node1916.attr('class', ref1895.get());
    subs__.addSub(ref1895.addEventListener('change', function(_, ref, val) {
      node1916.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1895.rebind());
  
  var nodes9610 = $("<span>");
  node1916.append(nodes9610);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl758();
  }));
  
  function renderControl758() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11286 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11286); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9610;
      nodes9610 = node.contents();
      oldNodes.replaceWith(nodes9610);
    }));
  }
  renderControl758();
  root11285.append(node1916);
  callback(root11285); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root11287 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1917 = $("<tr>");
  
  var ref1896 = style;
  if(ref1896.get() !== null) {
    node1917.attr('class', ref1896.get());
    subs__.addSub(ref1896.addEventListener('change', function(_, ref, val) {
      node1917.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1896.rebind());
  
  var nodes9611 = $("<span>");
  node1917.append(nodes9611);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl759();
  }));
  
  function renderControl759() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11288 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11288); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9611;
      nodes9611 = node.contents();
      oldNodes.replaceWith(nodes9611);
    }));
  }
  renderControl759();
  root11287.append(node1917);
  callback(root11287); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root11289 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1918 = $("<td>");
  
  var ref1897 = width;
  if(ref1897.get() !== null) {
    node1918.attr('width', ref1897.get());
    subs__.addSub(ref1897.addEventListener('change', function(_, ref, val) {
      node1918.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1897.rebind());
  
  var ref1898 = style;
  if(ref1898.get() !== null) {
    node1918.attr('class', ref1898.get());
    subs__.addSub(ref1898.addEventListener('change', function(_, ref, val) {
      node1918.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1898.rebind());
  
  var nodes9612 = $("<span>");
  node1918.append(nodes9612);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl760();
  }));
  
  function renderControl760() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11290 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11290); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9612;
      nodes9612 = node.contents();
      oldNodes.replaceWith(nodes9612);
    }));
  }
  renderControl760();
  root11289.append(node1918);
  callback(root11289); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root11291 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1919 = $("<td>");
  
  var ref1899 = width;
  if(ref1899.get() !== null) {
    node1919.attr('width', ref1899.get());
    subs__.addSub(ref1899.addEventListener('change', function(_, ref, val) {
      node1919.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1899.rebind());
  
  var ref1900 = style;
  if(ref1900.get() !== null) {
    node1919.attr('class', ref1900.get());
    subs__.addSub(ref1900.addEventListener('change', function(_, ref, val) {
      node1919.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1900.rebind());
  
  var nodes9613 = $("<span>");
  node1919.append(nodes9613);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl761();
  }));
  
  function renderControl761() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11292 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11292); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9613;
      nodes9613 = node.contents();
      oldNodes.replaceWith(nodes9613);
    }));
  }
  renderControl761();
  root11291.append(node1919);
  callback(root11291); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root11293 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1920 = $("<td>");
  
  var ref1901 = width;
  if(ref1901.get() !== null) {
    node1920.attr('width', ref1901.get());
    subs__.addSub(ref1901.addEventListener('change', function(_, ref, val) {
      node1920.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1901.rebind());
  
  var ref1902 = style;
  if(ref1902.get() !== null) {
    node1920.attr('class', ref1902.get());
    subs__.addSub(ref1902.addEventListener('change', function(_, ref, val) {
      node1920.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1902.rebind());
  
  
  var node1921 = $("<strong>");
  
  var nodes9614 = $("<span>");
  node1921.append(nodes9614);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl762();
  }));
  
  function renderControl762() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11294 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11294); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9614;
      nodes9614 = node.contents();
      oldNodes.replaceWith(nodes9614);
    }));
  }
  renderControl762();
  node1920.append(node1921);
  root11293.append(node1920);
  callback(root11293); return subs__;
  
  
  
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
  items.list(function(coll1331) {
    coll1331 = coll1331.reverse();
    function processOne353() {
      var item;
      item = coll1331.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1331.length > 0) processOne353(); else rest353();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1331.length > 0) processOne353(); else rest353();
          
        }
      }
    }
    function rest353() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1331.length > 0) processOne353(); else rest353();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root11295 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9615 = $("<span>");
  root11295.append(nodes9615);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl763();
  }));
  
  function renderControl763() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root11296 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11296); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9615;
      nodes9615 = node.contents();
      oldNodes.replaceWith(nodes9615);
    }));
  }
  renderControl763();
  callback(root11295); return subs__;
  
  return subs__;
};

ui.mMasterDetail = mobl.conditionalDef(ui.mMasterDetail, function() { return mobl.window.get().innerWidth > 500; }, function(items, masterItem, detail, elements, callback) {
  var root11297 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp9440 = result__;
    var current = mobl.ref(result__);
    
    var node1922 = $("<div>");
    node1922.attr('width', "100%");
    
    
    var node1923 = $("<div>");
    node1923.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes9617 = $("<span>");
    node1923.append(nodes9617);
    subs__.addSub((ui.group)(function(_, callback) {
      var root11299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1926 = mobl.loadingSpan();
      root11299.append(node1926);
      var list304;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList304 = function() {
        var subs__ = listSubs__;
        list304 = items.get();
        list304.list(function(results304) {
          node1926.empty();
          for(var i2329 = 0; i2329 < results304.length; i2329++) {
            (function() {
              var iternode304 = $("<span>");
              node1926.append(iternode304);
              var it;
              it = mobl.ref(mobl.ref(results304), i2329);
              var result__ = it.get() == current.get();
              var tmp9415 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp9415.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp9415.set(it.get() == current.get());
              }));
              
              
              var node1927 = $("<span>");
              iternode304.append(node1927);
              var condSubs478 = new mobl.CompSubscription();
              subs__.addSub(condSubs478);
              var oldValue478;
              var renderCond478 = function() {
                var value1130 = tmp9415.get();
                if(oldValue478 === value1130) return;
                oldValue478 = value1130;
                var subs__ = condSubs478;
                subs__.unsubscribe();
                node1927.empty();
                if(value1130) {
                  var nodes9618 = $("<span>");
                  node1927.append(nodes9618);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root11300 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp9446 = result__;
                      var tmp9412 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp9444 = result__;
                          var result__ = tmp9444;
                          tmp9412.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp9445 = result__;
                          var result__ = tmp9445;
                          tmp9412.set(result__);
                          
                        });
                      }));
                      
                      var nodes9619 = $("<span>");
                      root11300.append(nodes9619);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl765();
                      }));
                      
                      function renderControl765() {
                        subs__.addSub((masterItem.get())(it, tmp9412, function(elements, callback) {
                          var root11301 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root11301); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes9619;
                          nodes9619 = node.contents();
                          oldNodes.replaceWith(nodes9619);
                        }));
                      }
                      renderControl765();
                      callback(root11300); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9618;
                    nodes9618 = node.contents();
                    oldNodes.replaceWith(nodes9618);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = true;
                                   ui.visible.set(result__);
                                   var result__ = mobl.alert("Calling renderMaths()!");
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp9450 = result__;
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 };
                  var tmp9414 = mobl.ref(result__);
                  
                  var nodes9620 = $("<span>");
                  node1927.append(nodes9620);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9414, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root11302 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp9449 = result__;
                      var tmp9413 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp9447 = result__;
                          var result__ = tmp9447;
                          tmp9413.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp9448 = result__;
                          var result__ = tmp9448;
                          tmp9413.set(result__);
                          
                        });
                      }));
                      
                      var nodes9621 = $("<span>");
                      root11302.append(nodes9621);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl766();
                      }));
                      
                      function renderControl766() {
                        subs__.addSub((masterItem.get())(it, tmp9413, function(elements, callback) {
                          var root11303 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root11303); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes9621;
                          nodes9621 = node.contents();
                          oldNodes.replaceWith(nodes9621);
                        }));
                      }
                      renderControl766();
                      callback(root11302); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9620;
                    nodes9620 = node.contents();
                    oldNodes.replaceWith(nodes9620);
                  }));
                  
                  
                }
              };
              renderCond478();
              subs__.addSub(tmp9415.addEventListener('change', function() {
                renderCond478();
              }));
              
              
              var oldNodes = iternode304;
              iternode304 = iternode304.contents();
              oldNodes.replaceWith(iternode304);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list304.addEventListener('change', function() { listSubs__.unsubscribe(); renderList304(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList304(true); }));
        });
      };
      renderList304();
      
      callback(root11299); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9617;
      nodes9617 = node.contents();
      oldNodes.replaceWith(nodes9617);
    }));
    node1922.append(node1923);
    
    var node1924 = $("<div>");
    node1924.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
    
    var result__ = current.get() && ui.visible.get();
    var tmp9417 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp9417.set(current.get() && ui.visible.get());
    }));
    subs__.addSub(ui.visible.addEventListener('change', function() {
      tmp9417.set(current.get() && ui.visible.get());
    }));
    
    
    var node1925 = $("<span>");
    node1924.append(node1925);
    var condSubs477 = new mobl.CompSubscription();
    subs__.addSub(condSubs477);
    var oldValue477;
    var renderCond477 = function() {
      var value1129 = tmp9417.get();
      if(oldValue477 === value1129) return;
      oldValue477 = value1129;
      var subs__ = condSubs477;
      subs__.unsubscribe();
      node1925.empty();
      if(value1129) {
        ui.indexOf(current.get(), items.get(), function(result__) {
          var tmp9443 = result__;
          var tmp9416 = mobl.ref(result__);
          subs__.addSub(current.addEventListener('change', function() {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp9441 = result__;
              var result__ = tmp9441;
              tmp9416.set(result__);
              
            });
          }));
          subs__.addSub(items.addEventListener('change', function() {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp9442 = result__;
              var result__ = tmp9442;
              tmp9416.set(result__);
              
            });
          }));
          
          var nodes9616 = $("<span>");
          node1925.append(nodes9616);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl764();
          }));
          
          function renderControl764() {
            subs__.addSub((detail.get())(current, tmp9416, function(elements, callback) {
              var root11298 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11298); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9616;
              nodes9616 = node.contents();
              oldNodes.replaceWith(nodes9616);
            }));
          }
          renderControl764();
          
          
        });
      } else {
        
      }
    };
    renderCond477();
    subs__.addSub(tmp9417.addEventListener('change', function() {
      renderCond477();
    }));
    
    node1922.append(node1924);
    root11297.append(node1922);
    callback(root11297); return subs__;
    
    
    
    
    
  });
  return subs__;
});

ui.introduction = function(elements, callback) {
  var root11304 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9622 = $("<span>");
  root11304.append(nodes9622);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11305 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes9623 = $("<span>");
    root11305.append(nodes9623);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root11306 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11306); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9623;
      nodes9623 = node.contents();
      oldNodes.replaceWith(nodes9623);
    }));
    callback(root11305); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9622;
    nodes9622 = node.contents();
    oldNodes.replaceWith(nodes9622);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes9624 = $("<span>");
  root11304.append(nodes9624);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root11307 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11307); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9624;
    nodes9624 = node.contents();
    oldNodes.replaceWith(nodes9624);
  }));
  callback(root11304); return subs__;
  
  
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
