mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root11308 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1928 = $("<span>");
  root11308.append(node1928);
  var condSubs479 = new mobl.CompSubscription();
  subs__.addSub(condSubs479);
  var oldValue479;
  var renderCond479 = function() {
    var value1139 = value.get();
    if(oldValue479 === value1139) return;
    oldValue479 = value1139;
    var subs__ = condSubs479;
    subs__.unsubscribe();
    node1928.empty();
    if(value1139) {
      var nodes9625 = $("<span>");
      node1928.append(nodes9625);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl767();
      }));
      
      function renderControl767() {
        subs__.addSub((elements)(function(elements, callback) {
          var root11309 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11309); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9625;
          nodes9625 = node.contents();
          oldNodes.replaceWith(nodes9625);
        }));
      }
      renderControl767();
      
      
    } else {
      var nodes9626 = $("<span>");
      node1928.append(nodes9626);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11310 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes9627 = $("<span>");
        root11310.append(nodes9627);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root11311 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11311); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9627;
          nodes9627 = node.contents();
          oldNodes.replaceWith(nodes9627);
        }));
        var nodes9628 = $("<span>");
        root11310.append(nodes9628);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root11312 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11312); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9628;
          nodes9628 = node.contents();
          oldNodes.replaceWith(nodes9628);
        }));
        callback(root11310); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9626;
        nodes9626 = node.contents();
        oldNodes.replaceWith(nodes9626);
      }));
      
      
    }
  };
  renderCond479();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond479();
  }));
  
  callback(root11308); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root11313 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1929 = $("<div>");
  
  var ref1906 = mobl.ref(ui.headerStyle);
  if(ref1906.get() !== null) {
    node1929.attr('class', ref1906.get());
    subs__.addSub(ref1906.addEventListener('change', function(_, ref, val) {
      node1929.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1906.rebind());
  
  var val893 = onclick.get();
  if(val893 !== null) {
    subs__.addSub(mobl.domBind(node1929, 'tap', val893));
  }
  
  var ref1907 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1907.get() !== null) {
    node1929.attr('style', ref1907.get());
    subs__.addSub(ref1907.addEventListener('change', function(_, ref, val) {
      node1929.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1929.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1907.rebind());
  
  
  var node1932 = $("<div>");
  
  var ref1905 = mobl.ref(ui.headerContainerStyle);
  if(ref1905.get() !== null) {
    node1932.attr('class', ref1905.get());
    subs__.addSub(ref1905.addEventListener('change', function(_, ref, val) {
      node1932.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1905.rebind());
  
  
  var node1933 = $("<div>");
  
  var ref1903 = text;
  node1933.text(""+ref1903.get());
  var ignore360 = false;
  subs__.addSub(ref1903.addEventListener('change', function(_, ref, val) {
    if(ignore360) return;
    node1933.text(""+val);
  }));
  subs__.addSub(ref1903.rebind());
  
  
  var ref1904 = mobl.ref(ui.headerTextStyle);
  if(ref1904.get() !== null) {
    node1933.attr('class', ref1904.get());
    subs__.addSub(ref1904.addEventListener('change', function(_, ref, val) {
      node1933.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1904.rebind());
  
  node1932.append(node1933);
  node1929.append(node1932);
  var nodes9629 = $("<span>");
  node1929.append(nodes9629);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl768();
  }));
  
  function renderControl768() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11314 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11314); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9629;
      nodes9629 = node.contents();
      oldNodes.replaceWith(nodes9629);
    }));
  }
  renderControl768();
  root11313.append(node1929);
  
  var node1930 = $("<span>");
  root11313.append(node1930);
  var condSubs480 = new mobl.CompSubscription();
  subs__.addSub(condSubs480);
  var oldValue480;
  var renderCond480 = function() {
    var value1140 = fixedPosition.get();
    if(oldValue480 === value1140) return;
    oldValue480 = value1140;
    var subs__ = condSubs480;
    subs__.unsubscribe();
    node1930.empty();
    if(value1140) {
      
      var node1931 = $("<div>");
      node1931.attr('id', "hello");
      node1931.attr('style', "height: 2.9em;");
      
      node1930.append(node1931);
      
      
    } else {
      
    }
  };
  renderCond480();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond480();
  }));
  
  callback(root11313); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11315 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1908 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1908.get() !== null) {
    sp.attr('class', ref1908.get());
    subs__.addSub(ref1908.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1908.rebind());
  
  var val894 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val894 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val894));
  }
  
  var val895 = function(event, callback) {
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
  if(val895 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val895));
  }
  
  var val896 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after252(result__) {
                    var tmp9480 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after252);if(result__ !== undefined) after252(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val896 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val896));
  }
  
  var val897 = function(event, callback) {
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
  if(val897 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val897));
  }
  
  var ref1909 = text;
  sp.text(""+ref1909.get());
  var ignore361 = false;
  subs__.addSub(ref1909.addEventListener('change', function(_, ref, val) {
    if(ignore361) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1909.rebind());
  
  
  root11315.append(sp);
  callback(root11315); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11316 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9630 = $("<span>");
  root11316.append(nodes9630);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root11317 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11317); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9630;
    nodes9630 = node.contents();
    oldNodes.replaceWith(nodes9630);
  }));
  callback(root11316); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11318 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9631 = $("<span>");
  root11318.append(nodes9631);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root11319 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11319); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9631;
    nodes9631 = node.contents();
    oldNodes.replaceWith(nodes9631);
  }));
  callback(root11318); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root11320 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1934 = $("<ul>");
  
  var ref1910 = mobl.ref(ui.groupStyle);
  if(ref1910.get() !== null) {
    node1934.attr('class', ref1910.get());
    subs__.addSub(ref1910.addEventListener('change', function(_, ref, val) {
      node1934.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1910.rebind());
  
  var nodes9632 = $("<span>");
  node1934.append(nodes9632);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl769();
  }));
  
  function renderControl769() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11321 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11321); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9632;
      nodes9632 = node.contents();
      oldNodes.replaceWith(nodes9632);
    }));
  }
  renderControl769();
  root11320.append(node1934);
  callback(root11320); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root11322 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1935 = $("<img>");
  
  var ref1911 = url;
  if(ref1911.get() !== null) {
    node1935.attr('src', ref1911.get());
    subs__.addSub(ref1911.addEventListener('change', function(_, ref, val) {
      node1935.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1911.rebind());
  
  var ref1912 = width;
  if(ref1912.get() !== null) {
    node1935.attr('width', ref1912.get());
    subs__.addSub(ref1912.addEventListener('change', function(_, ref, val) {
      node1935.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1912.rebind());
  
  var ref1913 = height;
  if(ref1913.get() !== null) {
    node1935.attr('height', ref1913.get());
    subs__.addSub(ref1913.addEventListener('change', function(_, ref, val) {
      node1935.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1913.rebind());
  
  var ref1914 = style;
  if(ref1914.get() !== null) {
    node1935.attr('class', ref1914.get());
    subs__.addSub(ref1914.addEventListener('change', function(_, ref, val) {
      node1935.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1914.rebind());
  
  var val898 = onclick.get();
  if(val898 !== null) {
    subs__.addSub(mobl.domBind(node1935, 'tap', val898));
  }
  
  var ref1915 = valign;
  if(ref1915.get() !== null) {
    node1935.attr('valign', ref1915.get());
    subs__.addSub(ref1915.addEventListener('change', function(_, ref, val) {
      node1935.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1915.rebind());
  
  var ref1916 = align;
  if(ref1916.get() !== null) {
    node1935.attr('align', ref1916.get());
    subs__.addSub(ref1916.addEventListener('change', function(_, ref, val) {
      node1935.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1916.rebind());
  
  root11322.append(node1935);
  callback(root11322); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root11323 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1917 = mobl.ref(ui.itemStyle);
  if(ref1917.get() !== null) {
    el.attr('class', ref1917.get());
    subs__.addSub(ref1917.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1917.rebind());
  
  var ref1918 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1918.get() !== null) {
    el.attr('class', ref1918.get());
    subs__.addSub(ref1918.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1918.rebind());
  
  var val899 = onswipe.get();
  if(val899 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val899));
  }
  
  var val900 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp9481 = result__;
                                           function after253(result__) {
                                             var tmp9482 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after253);if(result__ !== undefined) after253(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp9483 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val900 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val900));
  }
  
  var nodes9633 = $("<span>");
  el.append(nodes9633);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl770();
  }));
  
  function renderControl770() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11324); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9633;
      nodes9633 = node.contents();
      oldNodes.replaceWith(nodes9633);
    }));
  }
  renderControl770();
  root11323.append(el);
  callback(root11323); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root11325 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1936 = $("<input>");
  node1936.attr('type', "checkbox");
  
  var ref1920 = b;
  node1936.attr('checked', !!ref1920.get());
  subs__.addSub(ref1920.addEventListener('change', function(_, ref, val) {
    if(ref === ref1920) node1936.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1936, 'change', function() {
    b.set(!!node1936.attr('checked'));
  }));
  
  var val902 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val902 !== null) {
    subs__.addSub(mobl.domBind(node1936, 'tap', val902));
  }
  
  var val903 = onchange.get();
  if(val903 !== null) {
    subs__.addSub(mobl.domBind(node1936, 'change', val903));
  }
  
  root11325.append(node1936);
  
  root11325.append(" ");
  
  var node1937 = $("<span>");
  
  var ref1919 = label;
  node1937.text(""+ref1919.get());
  var ignore362 = false;
  subs__.addSub(ref1919.addEventListener('change', function(_, ref, val) {
    if(ignore362) return;
    node1937.text(""+val);
  }));
  subs__.addSub(ref1919.rebind());
  
  
  var val901 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after254(result__) {
                    var tmp9484 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after254);if(result__ !== undefined) after254(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val901 !== null) {
    subs__.addSub(mobl.domBind(node1937, 'tap', val901));
  }
  
  root11325.append(node1937);
  callback(root11325); return subs__;
  
  
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
  var root11326 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1938 = $("<span>");
  root11326.append(node1938);
  var condSubs481 = new mobl.CompSubscription();
  subs__.addSub(condSubs481);
  var oldValue481;
  var renderCond481 = function() {
    var value1141 = label.get();
    if(oldValue481 === value1141) return;
    oldValue481 = value1141;
    var subs__ = condSubs481;
    subs__.unsubscribe();
    node1938.empty();
    if(value1141) {
      var nodes9634 = $("<span>");
      node1938.append(nodes9634);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root11327 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11327); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9634;
        nodes9634 = node.contents();
        oldNodes.replaceWith(nodes9634);
      }));
      
      
    } else {
      
    }
  };
  renderCond481();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond481();
  }));
  
  
  var node1939 = $("<span>");
  root11326.append(node1939);
  var condSubs482 = new mobl.CompSubscription();
  subs__.addSub(condSubs482);
  var oldValue482;
  var renderCond482 = function() {
    var value1142 = validator.get();
    if(oldValue482 === value1142) return;
    oldValue482 = value1142;
    var subs__ = condSubs482;
    subs__.unsubscribe();
    node1939.empty();
    if(value1142) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after258(result__) {
        var tmp9485 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp9486 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1940 = $("<input>");
        
        var ref1921 = inputType;
        if(ref1921.get() !== null) {
          node1940.attr('type', ref1921.get());
          subs__.addSub(ref1921.addEventListener('change', function(_, ref, val) {
            node1940.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1921.rebind());
        
        var ref1922 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1922.get() !== null) {
          node1940.attr('class', ref1922.get());
          subs__.addSub(ref1922.addEventListener('change', function(_, ref, val) {
            node1940.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1940.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1940.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1940.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1922.rebind());
        
        var ref1923 = placeholder;
        if(ref1923.get() !== null) {
          node1940.attr('placeholder', ref1923.get());
          subs__.addSub(ref1923.addEventListener('change', function(_, ref, val) {
            node1940.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1923.rebind());
        
        var ref1924 = temp;
        node1940.val(""+ref1924.get());
        var ignore363 = false;
        subs__.addSub(ref1924.addEventListener('change', function(_, ref, val) {
          if(ignore363) return;
          node1940.val(""+val);
        }));
        subs__.addSub(ref1924.rebind());
        
        subs__.addSub(mobl.domBind(node1940, 'keyup change', function() {
          ignore363 = true;
          temp.set(mobl.stringTomobl__String(node1940.val()));
          ignore363 = false;
        }));
        
        
        var val904 = onchange.get();
        if(val904 !== null) {
          subs__.addSub(mobl.domBind(node1940, 'change', val904));
        }
        
        var val905 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after255(result__) {
                          var tmp9487 = result__;
                          function after256(result__) {
                            var tmp9488 = result__;
                            var result__ = tmp9488;
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
                          var result__ = validator.get()(temp.get(), after256);if(result__ !== undefined) after256(result__);
                        }
                        var result__ = onkeyup.get()(event, after255);if(result__ !== undefined) after255(result__);
                      } else {
                        {
                          function after257(result__) {
                            var tmp9488 = result__;
                            var result__ = tmp9488;
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
                          var result__ = validator.get()(temp.get(), after257);if(result__ !== undefined) after257(result__);
                        }
                      }
                    };
        if(val905 !== null) {
          subs__.addSub(mobl.domBind(node1940, 'keyup', val905));
        }
        
        var val906 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val906 !== null) {
          subs__.addSub(mobl.domBind(node1940, 'blur', val906));
        }
        
        node1939.append(node1940);
        var nodes9635 = $("<span>");
        node1939.append(nodes9635);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root11328 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11328); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9635;
          nodes9635 = node.contents();
          oldNodes.replaceWith(nodes9635);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after258);if(result__ !== undefined) after258(result__);
    } else {
      
      var node1941 = $("<input>");
      
      var ref1925 = inputType;
      if(ref1925.get() !== null) {
        node1941.attr('type', ref1925.get());
        subs__.addSub(ref1925.addEventListener('change', function(_, ref, val) {
          node1941.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1925.rebind());
      
      var ref1926 = style;
      if(ref1926.get() !== null) {
        node1941.attr('class', ref1926.get());
        subs__.addSub(ref1926.addEventListener('change', function(_, ref, val) {
          node1941.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1926.rebind());
      
      var ref1927 = placeholder;
      if(ref1927.get() !== null) {
        node1941.attr('placeholder', ref1927.get());
        subs__.addSub(ref1927.addEventListener('change', function(_, ref, val) {
          node1941.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1927.rebind());
      
      var ref1928 = s;
      node1941.val(""+ref1928.get());
      var ignore364 = false;
      subs__.addSub(ref1928.addEventListener('change', function(_, ref, val) {
        if(ignore364) return;
        node1941.val(""+val);
      }));
      subs__.addSub(ref1928.rebind());
      
      subs__.addSub(mobl.domBind(node1941, 'keyup change', function() {
        ignore364 = true;
        s.set(mobl.stringTomobl__String(node1941.val()));
        ignore364 = false;
      }));
      
      
      var val907 = onchange.get();
      if(val907 !== null) {
        subs__.addSub(mobl.domBind(node1941, 'change', val907));
      }
      
      var val908 = onkeyup.get();
      if(val908 !== null) {
        subs__.addSub(mobl.domBind(node1941, 'keyup', val908));
      }
      
      var val909 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val909 !== null) {
        subs__.addSub(mobl.domBind(node1941, 'blur', val909));
      }
      
      node1939.append(node1941);
      
      
    }
  };
  renderCond482();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond482();
  }));
  
  callback(root11326); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11329 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9636 = $("<span>");
  root11329.append(nodes9636);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11330 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11330); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9636;
    nodes9636 = node.contents();
    oldNodes.replaceWith(nodes9636);
  }));
  callback(root11329); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11331 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9637 = $("<span>");
  root11331.append(nodes9637);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11332 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11332); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9637;
    nodes9637 = node.contents();
    oldNodes.replaceWith(nodes9637);
  }));
  callback(root11331); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root11333 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1942 = $("<span>");
  root11333.append(node1942);
  var condSubs483 = new mobl.CompSubscription();
  subs__.addSub(condSubs483);
  var oldValue483;
  var renderCond483 = function() {
    var value1143 = label.get();
    if(oldValue483 === value1143) return;
    oldValue483 = value1143;
    var subs__ = condSubs483;
    subs__.unsubscribe();
    node1942.empty();
    if(value1143) {
      var nodes9638 = $("<span>");
      node1942.append(nodes9638);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root11334 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11334); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9638;
        nodes9638 = node.contents();
        oldNodes.replaceWith(nodes9638);
      }));
      
      
    } else {
      
    }
  };
  renderCond483();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond483();
  }));
  
  
  var node1943 = $("<input>");
  node1943.attr('type', "range");
  
  var ref1929 = n;
  node1943.val(""+ref1929.get());
  var ignore365 = false;
  subs__.addSub(ref1929.addEventListener('change', function(_, ref, val) {
    if(ignore365) return;
    node1943.val(""+val);
  }));
  subs__.addSub(ref1929.rebind());
  
  subs__.addSub(mobl.domBind(node1943, 'keyup change', function() {
    ignore365 = true;
    n.set(mobl.stringTomobl__Num(node1943.val()));
    ignore365 = false;
  }));
  
  
  var ref1930 = min;
  if(ref1930.get() !== null) {
    node1943.attr('min', ref1930.get());
    subs__.addSub(ref1930.addEventListener('change', function(_, ref, val) {
      node1943.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1930.rebind());
  
  var ref1931 = max;
  if(ref1931.get() !== null) {
    node1943.attr('max', ref1931.get());
    subs__.addSub(ref1931.addEventListener('change', function(_, ref, val) {
      node1943.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1931.rebind());
  
  var ref1932 = step;
  if(ref1932.get() !== null) {
    node1943.attr('step', ref1932.get());
    subs__.addSub(ref1932.addEventListener('change', function(_, ref, val) {
      node1943.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1932.rebind());
  node1943.attr('style', "width: 99%;");
  
  var val910 = onchange.get();
  if(val910 !== null) {
    subs__.addSub(mobl.domBind(node1943, 'change', val910));
  }
  
  var val911 = onkeyup.get();
  if(val911 !== null) {
    subs__.addSub(mobl.domBind(node1943, 'keyup', val911));
  }
  
  var ref1933 = placeholder;
  if(ref1933.get() !== null) {
    node1943.attr('placeholder', ref1933.get());
    subs__.addSub(ref1933.addEventListener('change', function(_, ref, val) {
      node1943.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1933.rebind());
  
  root11333.append(node1943);
  callback(root11333); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11335 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after259(result__) {
      var tmp9489 = result__;
      var result__ = tmp9489;
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
    var result__ = validator.get()(n2, after259);if(result__ !== undefined) after259(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes9639 = $("<span>");
  root11335.append(nodes9639);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11336 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11336); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9639;
    nodes9639 = node.contents();
    oldNodes.replaceWith(nodes9639);
  }));
  callback(root11335); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root11337 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1944 = $("<span>");
  root11337.append(node1944);
  var condSubs484 = new mobl.CompSubscription();
  subs__.addSub(condSubs484);
  var oldValue484;
  var renderCond484 = function() {
    var value1144 = label.get();
    if(oldValue484 === value1144) return;
    oldValue484 = value1144;
    var subs__ = condSubs484;
    subs__.unsubscribe();
    node1944.empty();
    if(value1144) {
      
      var node1945 = $("<span>");
      node1945.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1937 = label;
      node1945.text(""+ref1937.get());
      var ignore367 = false;
      subs__.addSub(ref1937.addEventListener('change', function(_, ref, val) {
        if(ignore367) return;
        node1945.text(""+val);
      }));
      subs__.addSub(ref1937.rebind());
      
      
      node1944.append(node1945);
      
      var node1946 = $("<span>");
      node1946.attr('style', "float: left");
      
      
      var node1947 = $("<input>");
      node1947.attr('type', "password");
      
      var ref1934 = style;
      if(ref1934.get() !== null) {
        node1947.attr('class', ref1934.get());
        subs__.addSub(ref1934.addEventListener('change', function(_, ref, val) {
          node1947.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1934.rebind());
      
      var ref1935 = placeholder;
      if(ref1935.get() !== null) {
        node1947.attr('placeholder', ref1935.get());
        subs__.addSub(ref1935.addEventListener('change', function(_, ref, val) {
          node1947.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1935.rebind());
      
      var ref1936 = s;
      node1947.val(""+ref1936.get());
      var ignore366 = false;
      subs__.addSub(ref1936.addEventListener('change', function(_, ref, val) {
        if(ignore366) return;
        node1947.val(""+val);
      }));
      subs__.addSub(ref1936.rebind());
      
      subs__.addSub(mobl.domBind(node1947, 'keyup change', function() {
        ignore366 = true;
        s.set(mobl.stringTomobl__String(node1947.val()));
        ignore366 = false;
      }));
      
      
      var val912 = onchange.get();
      if(val912 !== null) {
        subs__.addSub(mobl.domBind(node1947, 'change', val912));
      }
      
      var val913 = onkeyup.get();
      if(val913 !== null) {
        subs__.addSub(mobl.domBind(node1947, 'keyup', val913));
      }
      
      var val914 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val914 !== null) {
        subs__.addSub(mobl.domBind(node1947, 'blur', val914));
      }
      
      node1946.append(node1947);
      node1944.append(node1946);
      
      
      
      
    } else {
      
      var node1948 = $("<input>");
      node1948.attr('type', "password");
      
      var ref1938 = style;
      if(ref1938.get() !== null) {
        node1948.attr('class', ref1938.get());
        subs__.addSub(ref1938.addEventListener('change', function(_, ref, val) {
          node1948.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1938.rebind());
      
      var ref1939 = placeholder;
      if(ref1939.get() !== null) {
        node1948.attr('placeholder', ref1939.get());
        subs__.addSub(ref1939.addEventListener('change', function(_, ref, val) {
          node1948.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1939.rebind());
      
      var ref1940 = s;
      node1948.val(""+ref1940.get());
      var ignore368 = false;
      subs__.addSub(ref1940.addEventListener('change', function(_, ref, val) {
        if(ignore368) return;
        node1948.val(""+val);
      }));
      subs__.addSub(ref1940.rebind());
      
      subs__.addSub(mobl.domBind(node1948, 'keyup change', function() {
        ignore368 = true;
        s.set(mobl.stringTomobl__String(node1948.val()));
        ignore368 = false;
      }));
      
      
      var val915 = onchange.get();
      if(val915 !== null) {
        subs__.addSub(mobl.domBind(node1948, 'change', val915));
      }
      
      var val916 = onkeyup.get();
      if(val916 !== null) {
        subs__.addSub(mobl.domBind(node1948, 'keyup', val916));
      }
      
      var val917 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val917 !== null) {
        subs__.addSub(mobl.domBind(node1948, 'blur', val917));
      }
      
      node1944.append(node1948);
      
      
    }
  };
  renderCond484();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond484();
  }));
  
  callback(root11337); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root11338 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1945 = style;
  if(ref1945.get() !== null) {
    sel.attr('class', ref1945.get());
    subs__.addSub(ref1945.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1945.rebind());
  
  var val918 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after260(result__) {
                    var tmp9491 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after260);if(result__ !== undefined) after260(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val918 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val918));
  }
  
  
  var node1949 = mobl.loadingSpan();
  sel.append(node1949);
  var list305;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList305 = function() {
    var subs__ = listSubs__;
    list305 = options.get();
    list305.list(function(results305) {
      node1949.empty();
      for(var i2330 = 0; i2330 < results305.length; i2330++) {
        (function() {
          var iternode305 = $("<span>");
          node1949.append(iternode305);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results305), i2330), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results305), i2330), "_2");
          
          var node1950 = $("<option>");
          
          var ref1941 = optionDescription;
          node1950.text(""+ref1941.get());
          var ignore369 = false;
          subs__.addSub(ref1941.addEventListener('change', function(_, ref, val) {
            if(ignore369) return;
            node1950.text(""+val);
          }));
          subs__.addSub(ref1941.rebind());
          
          
          var ref1942 = optionStyle;
          if(ref1942.get() !== null) {
            node1950.attr('class', ref1942.get());
            subs__.addSub(ref1942.addEventListener('change', function(_, ref, val) {
              node1950.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1942.rebind());
          
          var ref1943 = optionValue;
          if(ref1943.get() !== null) {
            node1950.attr('value', ref1943.get());
            subs__.addSub(ref1943.addEventListener('change', function(_, ref, val) {
              node1950.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1943.rebind());
          
          var ref1944 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1944.get() !== null) {
            node1950.attr('selected', ref1944.get());
            subs__.addSub(ref1944.addEventListener('change', function(_, ref, val) {
              node1950.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1950.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1950.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1944.rebind());
          
          iternode305.append(node1950);
          
          var oldNodes = iternode305;
          iternode305 = iternode305.contents();
          oldNodes.replaceWith(iternode305);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list305.addEventListener('change', function() { listSubs__.unsubscribe(); renderList305(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList305(true); }));
    });
  };
  renderList305();
  
  root11338.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root11338); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root11339 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes9640 = $("<span>");
    root11339.append(nodes9640);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root11340 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1951 = mobl.loadingSpan();
      root11340.append(node1951);
      var list306;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList306 = function() {
        var subs__ = listSubs__;
        list306 = tabs.get();
        list306.list(function(results306) {
          node1951.empty();
          for(var i2331 = 0; i2331 < results306.length; i2331++) {
            (function() {
              var iternode306 = $("<span>");
              node1951.append(iternode306);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results306), i2331), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results306), i2331), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results306), i2331), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp9452 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp9452.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp9452.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp9452.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp9452.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp9451 = mobl.ref(result__);
              
              var nodes9641 = $("<span>");
              iternode306.append(nodes9641);
              subs__.addSub((mobl.span)(tmp9452, mobl.ref(null), tmp9451, mobl.ref(null), function(_, callback) {
                var root11341 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9642 = $("<span>");
                root11341.append(nodes9642);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root11342 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root11342); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9642;
                  nodes9642 = node.contents();
                  oldNodes.replaceWith(nodes9642);
                }));
                callback(root11341); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9641;
                nodes9641 = node.contents();
                oldNodes.replaceWith(nodes9641);
              }));
              
              var oldNodes = iternode306;
              iternode306 = iternode306.contents();
              oldNodes.replaceWith(iternode306);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list306.addEventListener('change', function() { listSubs__.unsubscribe(); renderList306(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList306(true); }));
        });
      };
      renderList306();
      
      callback(root11340); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9640;
      nodes9640 = node.contents();
      oldNodes.replaceWith(nodes9640);
    }));
    
    var node1952 = mobl.loadingSpan();
    root11339.append(node1952);
    var list307;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList307 = function() {
      var subs__ = listSubs__;
      list307 = tabs.get();
      list307.list(function(results307) {
        node1952.empty();
        for(var i2332 = 0; i2332 < results307.length; i2332++) {
          (function() {
            var iternode307 = $("<span>");
            node1952.append(iternode307);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results307), i2332), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results307), i2332), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results307), i2332), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp9453 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp9453.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp9453.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp9453.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp9453.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes9643 = $("<span>");
            iternode307.append(nodes9643);
            subs__.addSub((mobl.block)(tmp9453, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11343 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9644 = $("<span>");
              root11343.append(nodes9644);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root11344 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9645 = $("<span>");
                root11344.append(nodes9645);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl771();
                }));
                
                function renderControl771() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root11345 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root11345); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9645;
                    nodes9645 = node.contents();
                    oldNodes.replaceWith(nodes9645);
                  }));
                }
                renderControl771();
                callback(root11344); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9644;
                nodes9644 = node.contents();
                oldNodes.replaceWith(nodes9644);
              }));
              callback(root11343); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9643;
              nodes9643 = node.contents();
              oldNodes.replaceWith(nodes9643);
            }));
            
            var oldNodes = iternode307;
            iternode307 = iternode307.contents();
            oldNodes.replaceWith(iternode307);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list307.addEventListener('change', function() { listSubs__.unsubscribe(); renderList307(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList307(true); }));
      });
    };
    renderList307();
    
    callback(root11339); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes9640 = $("<span>");
      root11339.append(nodes9640);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11340 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1951 = mobl.loadingSpan();
        root11340.append(node1951);
        var list306;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList306 = function() {
          var subs__ = listSubs__;
          list306 = tabs.get();
          list306.list(function(results306) {
            node1951.empty();
            for(var i2331 = 0; i2331 < results306.length; i2331++) {
              (function() {
                var iternode306 = $("<span>");
                node1951.append(iternode306);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results306), i2331), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results306), i2331), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results306), i2331), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp9452 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp9452.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp9452.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp9452.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp9452.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp9451 = mobl.ref(result__);
                
                var nodes9641 = $("<span>");
                iternode306.append(nodes9641);
                subs__.addSub((mobl.span)(tmp9452, mobl.ref(null), tmp9451, mobl.ref(null), function(_, callback) {
                  var root11341 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9642 = $("<span>");
                  root11341.append(nodes9642);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root11342 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root11342); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9642;
                    nodes9642 = node.contents();
                    oldNodes.replaceWith(nodes9642);
                  }));
                  callback(root11341); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9641;
                  nodes9641 = node.contents();
                  oldNodes.replaceWith(nodes9641);
                }));
                
                var oldNodes = iternode306;
                iternode306 = iternode306.contents();
                oldNodes.replaceWith(iternode306);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list306.addEventListener('change', function() { listSubs__.unsubscribe(); renderList306(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList306(true); }));
          });
        };
        renderList306();
        
        callback(root11340); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9640;
        nodes9640 = node.contents();
        oldNodes.replaceWith(nodes9640);
      }));
      
      var node1952 = mobl.loadingSpan();
      root11339.append(node1952);
      var list307;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList307 = function() {
        var subs__ = listSubs__;
        list307 = tabs.get();
        list307.list(function(results307) {
          node1952.empty();
          for(var i2332 = 0; i2332 < results307.length; i2332++) {
            (function() {
              var iternode307 = $("<span>");
              node1952.append(iternode307);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results307), i2332), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results307), i2332), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results307), i2332), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp9453 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp9453.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp9453.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp9453.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp9453.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes9643 = $("<span>");
              iternode307.append(nodes9643);
              subs__.addSub((mobl.block)(tmp9453, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root11343 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes9644 = $("<span>");
                root11343.append(nodes9644);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root11344 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9645 = $("<span>");
                  root11344.append(nodes9645);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl771();
                  }));
                  
                  function renderControl771() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root11345 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11345); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9645;
                      nodes9645 = node.contents();
                      oldNodes.replaceWith(nodes9645);
                    }));
                  }
                  renderControl771();
                  callback(root11344); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9644;
                  nodes9644 = node.contents();
                  oldNodes.replaceWith(nodes9644);
                }));
                callback(root11343); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes9643;
                nodes9643 = node.contents();
                oldNodes.replaceWith(nodes9643);
              }));
              
              var oldNodes = iternode307;
              iternode307 = iternode307.contents();
              oldNodes.replaceWith(iternode307);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list307.addEventListener('change', function() { listSubs__.unsubscribe(); renderList307(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList307(true); }));
        });
      };
      renderList307();
      
      callback(root11339); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root11346 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1953 = $("<div>");
  
  var ref1949 = mobl.ref(ui.searchboxStyle);
  if(ref1949.get() !== null) {
    node1953.attr('class', ref1949.get());
    subs__.addSub(ref1949.addEventListener('change', function(_, ref, val) {
      node1953.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1949.rebind());
  
  
  var node1954 = $("<input>");
  node1954.attr('type', "search");
  
  var ref1946 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1946.get() !== null) {
    node1954.attr('class', ref1946.get());
    subs__.addSub(ref1946.addEventListener('change', function(_, ref, val) {
      node1954.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1946.rebind());
  
  var ref1947 = placeholder;
  if(ref1947.get() !== null) {
    node1954.attr('placeholder', ref1947.get());
    subs__.addSub(ref1947.addEventListener('change', function(_, ref, val) {
      node1954.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1947.rebind());
  
  var ref1948 = s;
  node1954.val(""+ref1948.get());
  var ignore370 = false;
  subs__.addSub(ref1948.addEventListener('change', function(_, ref, val) {
    if(ignore370) return;
    node1954.val(""+val);
  }));
  subs__.addSub(ref1948.rebind());
  
  subs__.addSub(mobl.domBind(node1954, 'keyup change', function() {
    ignore370 = true;
    s.set(mobl.stringTomobl__String(node1954.val()));
    ignore370 = false;
  }));
  
  
  var val919 = onsearch.get();
  if(val919 !== null) {
    subs__.addSub(mobl.domBind(node1954, 'change', val919));
  }
  
  var val920 = onkeyup.get();
  if(val920 !== null) {
    subs__.addSub(mobl.domBind(node1954, 'keyup', val920));
  }
  node1954.attr('autocorrect', false);
  node1954.attr('autocapitalize', false);
  node1954.attr('autocomplete', false);
  
  node1953.append(node1954);
  root11346.append(node1953);
  callback(root11346); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root11347 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1950 = mobl.ref(ui.contextMenuStyle);
  if(ref1950.get() !== null) {
    menu.attr('class', ref1950.get());
    subs__.addSub(ref1950.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1950.rebind());
  
  var nodes9646 = $("<span>");
  menu.append(nodes9646);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl772();
  }));
  
  function renderControl772() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11348 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11348); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9646;
      nodes9646 = node.contents();
      oldNodes.replaceWith(nodes9646);
    }));
  }
  renderControl772();
  root11347.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val921 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp9494 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val921 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val921));
  }
  
  root11347.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root11347); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root11349 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp9479 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp9479.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1955 = $("<span>");
  root11349.append(node1955);
  var condSubs485 = new mobl.CompSubscription();
  subs__.addSub(condSubs485);
  var oldValue485;
  var renderCond485 = function() {
    var value1145 = tmp9479.get();
    if(oldValue485 === value1145) return;
    oldValue485 = value1145;
    var subs__ = condSubs485;
    subs__.unsubscribe();
    node1955.empty();
    if(value1145) {
      items.get().one(function(result__) {
        var tmp9495 = result__;
        var current = mobl.ref(result__);
        
        var node1956 = $("<div>");
        node1956.attr('width', "100%");
        
        
        var node1957 = $("<div>");
        node1957.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes9649 = $("<span>");
        node1957.append(nodes9649);
        subs__.addSub((ui.group)(function(_, callback) {
          var root11352 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1960 = mobl.loadingSpan();
          root11352.append(node1960);
          var list308;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList308 = function() {
            var subs__ = listSubs__;
            list308 = items.get();
            list308.list(function(results308) {
              node1960.empty();
              for(var i2333 = 0; i2333 < results308.length; i2333++) {
                (function() {
                  var iternode308 = $("<span>");
                  node1960.append(iternode308);
                  var it;
                  it = mobl.ref(mobl.ref(results308), i2333);
                  var result__ = it.get() == current.get();
                  var tmp9459 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp9459.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp9459.set(it.get() == current.get());
                  }));
                  
                  
                  var node1961 = $("<span>");
                  iternode308.append(node1961);
                  var condSubs487 = new mobl.CompSubscription();
                  subs__.addSub(condSubs487);
                  var oldValue487;
                  var renderCond487 = function() {
                    var value1147 = tmp9459.get();
                    if(oldValue487 === value1147) return;
                    oldValue487 = value1147;
                    var subs__ = condSubs487;
                    subs__.unsubscribe();
                    node1961.empty();
                    if(value1147) {
                      var nodes9650 = $("<span>");
                      node1961.append(nodes9650);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root11353 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes9651 = $("<span>");
                        root11353.append(nodes9651);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl774();
                        }));
                        
                        function renderControl774() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root11354 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root11354); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes9651;
                            nodes9651 = node.contents();
                            oldNodes.replaceWith(nodes9651);
                          }));
                        }
                        renderControl774();
                        callback(root11353); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9650;
                        nodes9650 = node.contents();
                        oldNodes.replaceWith(nodes9650);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp9458 = mobl.ref(result__);
                      
                      var nodes9652 = $("<span>");
                      node1961.append(nodes9652);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9458, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root11355 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes9653 = $("<span>");
                        root11355.append(nodes9653);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl775();
                        }));
                        
                        function renderControl775() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root11356 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root11356); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes9653;
                            nodes9653 = node.contents();
                            oldNodes.replaceWith(nodes9653);
                          }));
                        }
                        renderControl775();
                        callback(root11355); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes9652;
                        nodes9652 = node.contents();
                        oldNodes.replaceWith(nodes9652);
                      }));
                      
                      
                    }
                  };
                  renderCond487();
                  subs__.addSub(tmp9459.addEventListener('change', function() {
                    renderCond487();
                  }));
                  
                  
                  var oldNodes = iternode308;
                  iternode308 = iternode308.contents();
                  oldNodes.replaceWith(iternode308);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list308.addEventListener('change', function() { listSubs__.unsubscribe(); renderList308(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList308(true); }));
            });
          };
          renderList308();
          
          callback(root11352); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9649;
          nodes9649 = node.contents();
          oldNodes.replaceWith(nodes9649);
        }));
        node1956.append(node1957);
        
        var node1958 = $("<div>");
        node1958.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1959 = $("<span>");
        node1958.append(node1959);
        var condSubs486 = new mobl.CompSubscription();
        subs__.addSub(condSubs486);
        var oldValue486;
        var renderCond486 = function() {
          var value1146 = current.get();
          if(oldValue486 === value1146) return;
          oldValue486 = value1146;
          var subs__ = condSubs486;
          subs__.unsubscribe();
          node1959.empty();
          if(value1146) {
            var nodes9647 = $("<span>");
            node1959.append(nodes9647);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl773();
            }));
            
            function renderControl773() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root11350 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11350); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9647;
                nodes9647 = node.contents();
                oldNodes.replaceWith(nodes9647);
              }));
            }
            renderControl773();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp9460 = mobl.ref(result__);
            
            var nodes9648 = $("<span>");
            node1959.append(nodes9648);
            subs__.addSub((mobl.label)(tmp9460, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11351 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11351); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9648;
              nodes9648 = node.contents();
              oldNodes.replaceWith(nodes9648);
            }));
            
            
          }
        };
        renderCond486();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond486();
        }));
        
        node1956.append(node1958);
        node1955.append(node1956);
        
        
        
        
        
        
      });
    } else {
      var nodes9654 = $("<span>");
      node1955.append(nodes9654);
      subs__.addSub((ui.group)(function(_, callback) {
        var root11357 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1962 = mobl.loadingSpan();
        root11357.append(node1962);
        var list309;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList309 = function() {
          var subs__ = listSubs__;
          list309 = items.get();
          list309.list(function(results309) {
            node1962.empty();
            for(var i2334 = 0; i2334 < results309.length; i2334++) {
              (function() {
                var iternode309 = $("<span>");
                node1962.append(iternode309);
                var it;
                it = mobl.ref(mobl.ref(results309), i2334);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp9496 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp9454 = mobl.ref(result__);
                
                var nodes9655 = $("<span>");
                iternode309.append(nodes9655);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9454, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root11358 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9656 = $("<span>");
                  root11358.append(nodes9656);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl776();
                  }));
                  
                  function renderControl776() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root11359 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11359); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9656;
                      nodes9656 = node.contents();
                      oldNodes.replaceWith(nodes9656);
                    }));
                  }
                  renderControl776();
                  callback(root11358); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9655;
                  nodes9655 = node.contents();
                  oldNodes.replaceWith(nodes9655);
                }));
                
                var oldNodes = iternode309;
                iternode309 = iternode309.contents();
                oldNodes.replaceWith(iternode309);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list309.addEventListener('change', function() { listSubs__.unsubscribe(); renderList309(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList309(true); }));
          });
        };
        renderList309();
        
        callback(root11357); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9654;
        nodes9654 = node.contents();
        oldNodes.replaceWith(nodes9654);
      }));
      
      
    }
  };
  renderCond485();
  subs__.addSub(tmp9479.addEventListener('change', function() {
    renderCond485();
  }));
  
  callback(root11349); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root11360 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp9457 = mobl.ref(result__);
  
  var nodes9657 = $("<span>");
  root11360.append(nodes9657);
  subs__.addSub((ui.header)(tmp9457, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11361 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9456 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9455 = mobl.ref(result__);
    
    var nodes9658 = $("<span>");
    root11361.append(nodes9658);
    subs__.addSub((ui.backButton)(tmp9455, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9456, function(_, callback) {
      var root11362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11362); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9658;
      nodes9658 = node.contents();
      oldNodes.replaceWith(nodes9658);
    }));
    callback(root11361); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9657;
    nodes9657 = node.contents();
    oldNodes.replaceWith(nodes9657);
  }));
  var nodes9659 = $("<span>");
  root11360.append(nodes9659);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl777();
  }));
  
  function renderControl777() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root11363 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11363); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9659;
      nodes9659 = node.contents();
      oldNodes.replaceWith(nodes9659);
    }));
  }
  renderControl777();
  callback(root11360); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root11364 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes9660 = $("<span>");
  root11364.append(nodes9660);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11365 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1963 = mobl.loadingSpan();
    root11365.append(node1963);
    var list310;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList310 = function() {
      var subs__ = listSubs__;
      list310 = coll.get();
      list310.list(function(results310) {
        node1963.empty();
        for(var i2335 = 0; i2335 < results310.length; i2335++) {
          (function() {
            var iternode310 = $("<span>");
            node1963.append(iternode310);
            var it;
            it = mobl.ref(mobl.ref(results310), i2335);
            var result__ = it.get() == selected.get();
            var tmp9462 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp9462.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp9462.set(it.get() == selected.get());
            }));
            
            
            var node1964 = $("<span>");
            iternode310.append(node1964);
            var condSubs488 = new mobl.CompSubscription();
            subs__.addSub(condSubs488);
            var oldValue488;
            var renderCond488 = function() {
              var value1148 = tmp9462.get();
              if(oldValue488 === value1148) return;
              oldValue488 = value1148;
              var subs__ = condSubs488;
              subs__.unsubscribe();
              node1964.empty();
              if(value1148) {
                var nodes9661 = $("<span>");
                node1964.append(nodes9661);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root11366 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9662 = $("<span>");
                  root11366.append(nodes9662);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl778();
                  }));
                  
                  function renderControl778() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root11367 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11367); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9662;
                      nodes9662 = node.contents();
                      oldNodes.replaceWith(nodes9662);
                    }));
                  }
                  renderControl778();
                  callback(root11366); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9661;
                  nodes9661 = node.contents();
                  oldNodes.replaceWith(nodes9661);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp9461 = mobl.ref(result__);
                
                var nodes9663 = $("<span>");
                node1964.append(nodes9663);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9461, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root11368 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes9664 = $("<span>");
                  root11368.append(nodes9664);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl779();
                  }));
                  
                  function renderControl779() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root11369 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11369); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes9664;
                      nodes9664 = node.contents();
                      oldNodes.replaceWith(nodes9664);
                    }));
                  }
                  renderControl779();
                  callback(root11368); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9663;
                  nodes9663 = node.contents();
                  oldNodes.replaceWith(nodes9663);
                }));
                
                
              }
            };
            renderCond488();
            subs__.addSub(tmp9462.addEventListener('change', function() {
              renderCond488();
            }));
            
            
            var oldNodes = iternode310;
            iternode310 = iternode310.contents();
            oldNodes.replaceWith(iternode310);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list310.addEventListener('change', function() { listSubs__.unsubscribe(); renderList310(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList310(true); }));
      });
    };
    renderList310();
    
    callback(root11365); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9660;
    nodes9660 = node.contents();
    oldNodes.replaceWith(nodes9660);
  }));
  callback(root11364); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root11370 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp9497 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp9463 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp9463.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp9463.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp9463.set(coll.get().limit(n.get()));
    }));
    
    
    var node1965 = mobl.loadingSpan();
    root11370.append(node1965);
    var list311;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList311 = function() {
      var subs__ = listSubs__;
      list311 = tmp9463.get();
      list311.list(function(results311) {
        node1965.empty();
        for(var i2336 = 0; i2336 < results311.length; i2336++) {
          (function() {
            var iternode311 = $("<span>");
            node1965.append(iternode311);
            var it;
            it = mobl.ref(mobl.ref(results311), i2336);
            var nodes9665 = $("<span>");
            iternode311.append(nodes9665);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl780();
            }));
            
            function renderControl780() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root11371 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11371); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9665;
                nodes9665 = node.contents();
                oldNodes.replaceWith(nodes9665);
              }));
            }
            renderControl780();
            
            var oldNodes = iternode311;
            iternode311 = iternode311.contents();
            oldNodes.replaceWith(iternode311);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list311.addEventListener('change', function() { listSubs__.unsubscribe(); renderList311(true); }));
        subs__.addSub(tmp9463.addEventListener('change', function() { listSubs__.unsubscribe(); renderList311(true); }));
      });
    };
    renderList311();
    
    var result__ = n.get() < total.get();
    var tmp9465 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp9465.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp9465.set(n.get() < total.get());
    }));
    
    
    var node1966 = $("<span>");
    root11370.append(node1966);
    var condSubs489 = new mobl.CompSubscription();
    subs__.addSub(condSubs489);
    var oldValue489;
    var renderCond489 = function() {
      var value1149 = tmp9465.get();
      if(oldValue489 === value1149) return;
      oldValue489 = value1149;
      var subs__ = condSubs489;
      subs__.unsubscribe();
      node1966.empty();
      if(value1149) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9464 = mobl.ref(result__);
        
        var nodes9666 = $("<span>");
        node1966.append(nodes9666);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp9464, mobl.ref(null), function(_, callback) {
          var root11372 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes9667 = $("<span>");
          root11372.append(nodes9667);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root11373 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root11373); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes9667;
            nodes9667 = node.contents();
            oldNodes.replaceWith(nodes9667);
          }));
          callback(root11372); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes9666;
          nodes9666 = node.contents();
          oldNodes.replaceWith(nodes9666);
        }));
        
        
      } else {
        
      }
    };
    renderCond489();
    subs__.addSub(tmp9465.addEventListener('change', function() {
      renderCond489();
    }));
    
    callback(root11370); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root11374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9668 = $("<span>");
  root11374.append(nodes9668);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11375 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1967 = mobl.loadingSpan();
    root11375.append(node1967);
    var list312;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList312 = function() {
      var subs__ = listSubs__;
      list312 = items.get();
      list312.list(function(results312) {
        node1967.empty();
        for(var i2337 = 0; i2337 < results312.length; i2337++) {
          (function() {
            var iternode312 = $("<span>");
            node1967.append(iternode312);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results312), i2337), "_1");it = mobl.ref(mobl.ref(mobl.ref(results312), i2337), "_2");
            var nodes9669 = $("<span>");
            iternode312.append(nodes9669);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root11376 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9670 = $("<span>");
              root11376.append(nodes9670);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root11377 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11377); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9670;
                nodes9670 = node.contents();
                oldNodes.replaceWith(nodes9670);
              }));
              callback(root11376); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9669;
              nodes9669 = node.contents();
              oldNodes.replaceWith(nodes9669);
            }));
            
            var oldNodes = iternode312;
            iternode312 = iternode312.contents();
            oldNodes.replaceWith(iternode312);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list312.addEventListener('change', function() { listSubs__.unsubscribe(); renderList312(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList312(true); }));
      });
    };
    renderList312();
    
    callback(root11375); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9668;
    nodes9668 = node.contents();
    oldNodes.replaceWith(nodes9668);
  }));
  callback(root11374); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root11378 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1345) {
    coll1345 = coll1345.reverse();
    function processOne355() {
      var it;
      it = coll1345.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1345.length > 0) processOne355(); else rest355();
      
    }
    function rest355() {
      var nodes9671 = $("<span>");
      root11378.append(nodes9671);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root11379 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp9466 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp9467 = mobl.ref(result__);
        
        var nodes9672 = $("<span>");
        root11379.append(nodes9672);
        subs__.addSub((ui.backButton)(tmp9467, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9466, function(_, callback) {
          var root11380 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11380); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9672;
          nodes9672 = node.contents();
          oldNodes.replaceWith(nodes9672);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1344) {
                           coll1344 = coll1344.reverse();
                           function processOne354() {
                             var checked;var it;
                             var tmp9499 = coll1344.pop();
                             checked = tmp9499._1;it = tmp9499._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1344.length > 0) processOne354(); else rest354();
                               
                             } else {
                               {
                                 
                                 if(coll1344.length > 0) processOne354(); else rest354();
                                 
                               }
                             }
                           }
                           function rest354() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1344.length > 0) processOne354(); else rest354();
                         });
                         
                       };
        var tmp9468 = mobl.ref(result__);
        
        var nodes9673 = $("<span>");
        root11379.append(nodes9673);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp9468, function(_, callback) {
          var root11381 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11381); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9673;
          nodes9673 = node.contents();
          oldNodes.replaceWith(nodes9673);
        }));
        callback(root11379); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9671;
        nodes9671 = node.contents();
        oldNodes.replaceWith(nodes9671);
      }));
      var nodes9674 = $("<span>");
      root11378.append(nodes9674);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root11382 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11382); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9674;
        nodes9674 = node.contents();
        oldNodes.replaceWith(nodes9674);
      }));
      callback(root11378); return subs__;
      
      
    }
    if(coll1345.length > 0) processOne355(); else rest355();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root11383 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes9675 = $("<span>");
  root11383.append(nodes9675);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root11384 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11384); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9675;
    nodes9675 = node.contents();
    oldNodes.replaceWith(nodes9675);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp9469 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp9469.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp9469.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp9469.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp9469.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp9469.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes9676 = $("<span>");
  root11383.append(nodes9676);
  subs__.addSub((ui.masterDetail)(tmp9469, masterItem, detailItem, function(_, callback) {
    var root11385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11385); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9676;
    nodes9676 = node.contents();
    oldNodes.replaceWith(nodes9676);
  }));
  callback(root11383); return subs__;
  
  
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
  var root11386 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes9677 = $("<span>");
  root11386.append(nodes9677);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root11387 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1968 = mobl.loadingSpan();
    root11387.append(node1968);
    var list313;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList313 = function() {
      var subs__ = listSubs__;
      list313 = sections.get();
      list313.list(function(results313) {
        node1968.empty();
        for(var i2338 = 0; i2338 < results313.length; i2338++) {
          (function() {
            var iternode313 = $("<span>");
            node1968.append(iternode313);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results313), i2338), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results313), i2338), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp9471 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp9471.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp9471.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp9471.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp9471.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp9470 = mobl.ref(result__);
            
            var nodes9678 = $("<span>");
            iternode313.append(nodes9678);
            subs__.addSub((mobl.span)(tmp9471, mobl.ref(null), tmp9470, mobl.ref(null), function(_, callback) {
              var root11388 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9679 = $("<span>");
              root11388.append(nodes9679);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root11389 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11389); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes9679;
                nodes9679 = node.contents();
                oldNodes.replaceWith(nodes9679);
              }));
              callback(root11388); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9678;
              nodes9678 = node.contents();
              oldNodes.replaceWith(nodes9678);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp9472 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp9472.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp9472.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp9472.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp9472.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes9680 = $("<span>");
            iternode313.append(nodes9680);
            subs__.addSub((mobl.block)(tmp9472, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11390 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes9681 = $("<span>");
              root11390.append(nodes9681);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl781();
              }));
              
              function renderControl781() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root11391 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root11391); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes9681;
                  nodes9681 = node.contents();
                  oldNodes.replaceWith(nodes9681);
                }));
              }
              renderControl781();
              callback(root11390); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes9680;
              nodes9680 = node.contents();
              oldNodes.replaceWith(nodes9680);
            }));
            
            var oldNodes = iternode313;
            iternode313 = iternode313.contents();
            oldNodes.replaceWith(iternode313);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list313.addEventListener('change', function() { listSubs__.unsubscribe(); renderList313(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList313(true); }));
      });
    };
    renderList313();
    
    callback(root11387); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9677;
    nodes9677 = node.contents();
    oldNodes.replaceWith(nodes9677);
  }));
  callback(root11386); return subs__;
  
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
  var root11392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1969 = $("<table>");
  
  var ref1951 = style;
  if(ref1951.get() !== null) {
    node1969.attr('class', ref1951.get());
    subs__.addSub(ref1951.addEventListener('change', function(_, ref, val) {
      node1969.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1951.rebind());
  
  var nodes9682 = $("<span>");
  node1969.append(nodes9682);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl782();
  }));
  
  function renderControl782() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11393 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11393); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9682;
      nodes9682 = node.contents();
      oldNodes.replaceWith(nodes9682);
    }));
  }
  renderControl782();
  root11392.append(node1969);
  callback(root11392); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root11394 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1970 = $("<tr>");
  
  var ref1952 = style;
  if(ref1952.get() !== null) {
    node1970.attr('class', ref1952.get());
    subs__.addSub(ref1952.addEventListener('change', function(_, ref, val) {
      node1970.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1952.rebind());
  
  var nodes9683 = $("<span>");
  node1970.append(nodes9683);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl783();
  }));
  
  function renderControl783() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11395 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11395); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9683;
      nodes9683 = node.contents();
      oldNodes.replaceWith(nodes9683);
    }));
  }
  renderControl783();
  root11394.append(node1970);
  callback(root11394); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root11396 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1971 = $("<td>");
  
  var ref1953 = width;
  if(ref1953.get() !== null) {
    node1971.attr('width', ref1953.get());
    subs__.addSub(ref1953.addEventListener('change', function(_, ref, val) {
      node1971.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1953.rebind());
  
  var ref1954 = style;
  if(ref1954.get() !== null) {
    node1971.attr('class', ref1954.get());
    subs__.addSub(ref1954.addEventListener('change', function(_, ref, val) {
      node1971.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1954.rebind());
  
  var nodes9684 = $("<span>");
  node1971.append(nodes9684);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl784();
  }));
  
  function renderControl784() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11397 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11397); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9684;
      nodes9684 = node.contents();
      oldNodes.replaceWith(nodes9684);
    }));
  }
  renderControl784();
  root11396.append(node1971);
  callback(root11396); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root11398 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1972 = $("<td>");
  
  var ref1955 = width;
  if(ref1955.get() !== null) {
    node1972.attr('width', ref1955.get());
    subs__.addSub(ref1955.addEventListener('change', function(_, ref, val) {
      node1972.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1955.rebind());
  
  var ref1956 = style;
  if(ref1956.get() !== null) {
    node1972.attr('class', ref1956.get());
    subs__.addSub(ref1956.addEventListener('change', function(_, ref, val) {
      node1972.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1956.rebind());
  
  var nodes9685 = $("<span>");
  node1972.append(nodes9685);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl785();
  }));
  
  function renderControl785() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11399 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11399); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9685;
      nodes9685 = node.contents();
      oldNodes.replaceWith(nodes9685);
    }));
  }
  renderControl785();
  root11398.append(node1972);
  callback(root11398); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root11400 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1973 = $("<td>");
  
  var ref1957 = width;
  if(ref1957.get() !== null) {
    node1973.attr('width', ref1957.get());
    subs__.addSub(ref1957.addEventListener('change', function(_, ref, val) {
      node1973.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1957.rebind());
  
  var ref1958 = style;
  if(ref1958.get() !== null) {
    node1973.attr('class', ref1958.get());
    subs__.addSub(ref1958.addEventListener('change', function(_, ref, val) {
      node1973.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1958.rebind());
  
  
  var node1974 = $("<strong>");
  
  var nodes9686 = $("<span>");
  node1974.append(nodes9686);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl786();
  }));
  
  function renderControl786() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11401 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11401); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9686;
      nodes9686 = node.contents();
      oldNodes.replaceWith(nodes9686);
    }));
  }
  renderControl786();
  node1973.append(node1974);
  root11400.append(node1973);
  callback(root11400); return subs__;
  
  
  
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
  items.list(function(coll1346) {
    coll1346 = coll1346.reverse();
    function processOne356() {
      var item;
      item = coll1346.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1346.length > 0) processOne356(); else rest356();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1346.length > 0) processOne356(); else rest356();
          
        }
      }
    }
    function rest356() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1346.length > 0) processOne356(); else rest356();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root11402 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9687 = $("<span>");
  root11402.append(nodes9687);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl787();
  }));
  
  function renderControl787() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root11403 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11403); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9687;
      nodes9687 = node.contents();
      oldNodes.replaceWith(nodes9687);
    }));
  }
  renderControl787();
  callback(root11402); return subs__;
  
  return subs__;
};

ui.mMasterDetail = mobl.conditionalDef(ui.mMasterDetail, function() { return mobl.window.get().innerWidth > 500; }, function(items, masterItem, detail, elements, callback) {
  var root11404 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp9501 = result__;
    var current = mobl.ref(result__);
    
    var node1975 = $("<div>");
    node1975.attr('width', "100%");
    
    
    var node1976 = $("<div>");
    node1976.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes9689 = $("<span>");
    node1976.append(nodes9689);
    subs__.addSub((ui.group)(function(_, callback) {
      var root11406 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1979 = mobl.loadingSpan();
      root11406.append(node1979);
      var list314;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList314 = function() {
        var subs__ = listSubs__;
        list314 = items.get();
        list314.list(function(results314) {
          node1979.empty();
          for(var i2339 = 0; i2339 < results314.length; i2339++) {
            (function() {
              var iternode314 = $("<span>");
              node1979.append(iternode314);
              var it;
              it = mobl.ref(mobl.ref(results314), i2339);
              var result__ = it.get() == current.get();
              var tmp9476 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp9476.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp9476.set(it.get() == current.get());
              }));
              
              
              var node1980 = $("<span>");
              iternode314.append(node1980);
              var condSubs491 = new mobl.CompSubscription();
              subs__.addSub(condSubs491);
              var oldValue491;
              var renderCond491 = function() {
                var value1151 = tmp9476.get();
                if(oldValue491 === value1151) return;
                oldValue491 = value1151;
                var subs__ = condSubs491;
                subs__.unsubscribe();
                node1980.empty();
                if(value1151) {
                  var nodes9690 = $("<span>");
                  node1980.append(nodes9690);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root11407 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp9507 = result__;
                      var tmp9473 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp9505 = result__;
                          var result__ = tmp9505;
                          tmp9473.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp9506 = result__;
                          var result__ = tmp9506;
                          tmp9473.set(result__);
                          
                        });
                      }));
                      
                      var nodes9691 = $("<span>");
                      root11407.append(nodes9691);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl789();
                      }));
                      
                      function renderControl789() {
                        subs__.addSub((masterItem.get())(it, tmp9473, function(elements, callback) {
                          var root11408 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root11408); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes9691;
                          nodes9691 = node.contents();
                          oldNodes.replaceWith(nodes9691);
                        }));
                      }
                      renderControl789();
                      callback(root11407); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9690;
                    nodes9690 = node.contents();
                    oldNodes.replaceWith(nodes9690);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = true;
                                   ui.visible.set(result__);
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp9511 = result__;
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 };
                  var tmp9475 = mobl.ref(result__);
                  
                  var nodes9692 = $("<span>");
                  node1980.append(nodes9692);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9475, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root11409 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp9510 = result__;
                      var tmp9474 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp9508 = result__;
                          var result__ = tmp9508;
                          tmp9474.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp9509 = result__;
                          var result__ = tmp9509;
                          tmp9474.set(result__);
                          
                        });
                      }));
                      
                      var nodes9693 = $("<span>");
                      root11409.append(nodes9693);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl790();
                      }));
                      
                      function renderControl790() {
                        subs__.addSub((masterItem.get())(it, tmp9474, function(elements, callback) {
                          var root11410 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root11410); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes9693;
                          nodes9693 = node.contents();
                          oldNodes.replaceWith(nodes9693);
                        }));
                      }
                      renderControl790();
                      callback(root11409); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes9692;
                    nodes9692 = node.contents();
                    oldNodes.replaceWith(nodes9692);
                  }));
                  
                  
                }
              };
              renderCond491();
              subs__.addSub(tmp9476.addEventListener('change', function() {
                renderCond491();
              }));
              
              
              var oldNodes = iternode314;
              iternode314 = iternode314.contents();
              oldNodes.replaceWith(iternode314);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list314.addEventListener('change', function() { listSubs__.unsubscribe(); renderList314(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList314(true); }));
        });
      };
      renderList314();
      
      callback(root11406); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9689;
      nodes9689 = node.contents();
      oldNodes.replaceWith(nodes9689);
    }));
    node1975.append(node1976);
    
    var node1977 = $("<div>");
    node1977.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
    
    var result__ = current.get() && ui.visible.get();
    var tmp9478 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp9478.set(current.get() && ui.visible.get());
    }));
    subs__.addSub(ui.visible.addEventListener('change', function() {
      tmp9478.set(current.get() && ui.visible.get());
    }));
    
    
    var node1978 = $("<span>");
    node1977.append(node1978);
    var condSubs490 = new mobl.CompSubscription();
    subs__.addSub(condSubs490);
    var oldValue490;
    var renderCond490 = function() {
      var value1150 = tmp9478.get();
      if(oldValue490 === value1150) return;
      oldValue490 = value1150;
      var subs__ = condSubs490;
      subs__.unsubscribe();
      node1978.empty();
      if(value1150) {
        ui.indexOf(current.get(), items.get(), function(result__) {
          var tmp9504 = result__;
          var tmp9477 = mobl.ref(result__);
          subs__.addSub(current.addEventListener('change', function() {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp9502 = result__;
              var result__ = tmp9502;
              tmp9477.set(result__);
              
            });
          }));
          subs__.addSub(items.addEventListener('change', function() {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp9503 = result__;
              var result__ = tmp9503;
              tmp9477.set(result__);
              
            });
          }));
          
          var nodes9688 = $("<span>");
          node1978.append(nodes9688);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl788();
          }));
          
          function renderControl788() {
            subs__.addSub((detail.get())(current, tmp9477, function(elements, callback) {
              var root11405 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11405); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes9688;
              nodes9688 = node.contents();
              oldNodes.replaceWith(nodes9688);
            }));
          }
          renderControl788();
          
          
        });
      } else {
        
      }
    };
    renderCond490();
    subs__.addSub(tmp9478.addEventListener('change', function() {
      renderCond490();
    }));
    
    node1975.append(node1977);
    root11404.append(node1975);
    callback(root11404); return subs__;
    
    
    
    
    
  });
  return subs__;
});

ui.introduction = function(elements, callback) {
  var root11411 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9694 = $("<span>");
  root11411.append(nodes9694);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11412 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes9695 = $("<span>");
    root11412.append(nodes9695);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root11413 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11413); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9695;
      nodes9695 = node.contents();
      oldNodes.replaceWith(nodes9695);
    }));
    callback(root11412); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9694;
    nodes9694 = node.contents();
    oldNodes.replaceWith(nodes9694);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes9696 = $("<span>");
  root11411.append(nodes9696);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root11414 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11414); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9696;
    nodes9696 = node.contents();
    oldNodes.replaceWith(nodes9696);
  }));
  callback(root11411); return subs__;
  
  
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
