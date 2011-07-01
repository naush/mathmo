mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root8815 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1177 = $("<span>");
  root8815.append(node1177);
  var condSubs288 = new mobl.CompSubscription();
  subs__.addSub(condSubs288);
  var oldValue288;
  var renderCond288 = function() {
    var value688 = value.get();
    if(oldValue288 === value688) return;
    oldValue288 = value688;
    var subs__ = condSubs288;
    subs__.unsubscribe();
    node1177.empty();
    if(value688) {
      var nodes7671 = $("<span>");
      node1177.append(nodes7671);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl439();
      }));
      
      function renderControl439() {
        subs__.addSub((elements)(function(elements, callback) {
          var root8816 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8816); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7671;
          nodes7671 = node.contents();
          oldNodes.replaceWith(nodes7671);
        }));
      }
      renderControl439();
      
      
    } else {
      var nodes7672 = $("<span>");
      node1177.append(nodes7672);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8817 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7673 = $("<span>");
        root8817.append(nodes7673);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root8818 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8818); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7673;
          nodes7673 = node.contents();
          oldNodes.replaceWith(nodes7673);
        }));
        var nodes7674 = $("<span>");
        root8817.append(nodes7674);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root8819 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8819); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7674;
          nodes7674 = node.contents();
          oldNodes.replaceWith(nodes7674);
        }));
        callback(root8817); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7672;
        nodes7672 = node.contents();
        oldNodes.replaceWith(nodes7672);
      }));
      
      
    }
  };
  renderCond288();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond288();
  }));
  
  callback(root8815); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root8820 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1178 = $("<div>");
  
  var ref1142 = mobl.ref(ui.headerStyle);
  if(ref1142.get() !== null) {
    node1178.attr('class', ref1142.get());
    subs__.addSub(ref1142.addEventListener('change', function(_, ref, val) {
      node1178.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1142.rebind());
  
  var val510 = onclick.get();
  if(val510 !== null) {
    subs__.addSub(mobl.domBind(node1178, 'tap', val510));
  }
  
  var ref1143 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1143.get() !== null) {
    node1178.attr('style', ref1143.get());
    subs__.addSub(ref1143.addEventListener('change', function(_, ref, val) {
      node1178.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1178.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1143.rebind());
  
  
  var node1181 = $("<div>");
  
  var ref1141 = mobl.ref(ui.headerContainerStyle);
  if(ref1141.get() !== null) {
    node1181.attr('class', ref1141.get());
    subs__.addSub(ref1141.addEventListener('change', function(_, ref, val) {
      node1181.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1141.rebind());
  
  
  var node1182 = $("<div>");
  
  var ref1139 = text;
  node1182.text(""+ref1139.get());
  var ignore211 = false;
  subs__.addSub(ref1139.addEventListener('change', function(_, ref, val) {
    if(ignore211) return;
    node1182.text(""+val);
  }));
  subs__.addSub(ref1139.rebind());
  
  
  var ref1140 = mobl.ref(ui.headerTextStyle);
  if(ref1140.get() !== null) {
    node1182.attr('class', ref1140.get());
    subs__.addSub(ref1140.addEventListener('change', function(_, ref, val) {
      node1182.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1140.rebind());
  
  node1181.append(node1182);
  node1178.append(node1181);
  var nodes7675 = $("<span>");
  node1178.append(nodes7675);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl440();
  }));
  
  function renderControl440() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8821); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7675;
      nodes7675 = node.contents();
      oldNodes.replaceWith(nodes7675);
    }));
  }
  renderControl440();
  root8820.append(node1178);
  
  var node1179 = $("<span>");
  root8820.append(node1179);
  var condSubs289 = new mobl.CompSubscription();
  subs__.addSub(condSubs289);
  var oldValue289;
  var renderCond289 = function() {
    var value689 = fixedPosition.get();
    if(oldValue289 === value689) return;
    oldValue289 = value689;
    var subs__ = condSubs289;
    subs__.unsubscribe();
    node1179.empty();
    if(value689) {
      
      var node1180 = $("<div>");
      node1180.attr('id', "hello");
      node1180.attr('style', "height: 2.9em;");
      
      node1179.append(node1180);
      
      
    } else {
      
    }
  };
  renderCond289();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond289();
  }));
  
  callback(root8820); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8822 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1144 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1144.get() !== null) {
    sp.attr('class', ref1144.get());
    subs__.addSub(ref1144.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1144.rebind());
  
  var val511 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val511 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val511));
  }
  
  var val512 = function(event, callback) {
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
  if(val512 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val512));
  }
  
  var val513 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after135(result__) {
                    var tmp7587 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after135);if(result__ !== undefined) after135(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val513 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val513));
  }
  
  var val514 = function(event, callback) {
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
  if(val514 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val514));
  }
  
  var ref1145 = text;
  sp.text(""+ref1145.get());
  var ignore212 = false;
  subs__.addSub(ref1145.addEventListener('change', function(_, ref, val) {
    if(ignore212) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1145.rebind());
  
  
  root8822.append(sp);
  callback(root8822); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8823 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7676 = $("<span>");
  root8823.append(nodes7676);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8824 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8824); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7676;
    nodes7676 = node.contents();
    oldNodes.replaceWith(nodes7676);
  }));
  callback(root8823); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8825 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7677 = $("<span>");
  root8825.append(nodes7677);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8826 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8826); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7677;
    nodes7677 = node.contents();
    oldNodes.replaceWith(nodes7677);
  }));
  callback(root8825); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root8827 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1183 = $("<ul>");
  
  var ref1146 = mobl.ref(ui.groupStyle);
  if(ref1146.get() !== null) {
    node1183.attr('class', ref1146.get());
    subs__.addSub(ref1146.addEventListener('change', function(_, ref, val) {
      node1183.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1146.rebind());
  
  var nodes7678 = $("<span>");
  node1183.append(nodes7678);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl441();
  }));
  
  function renderControl441() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8828 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8828); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7678;
      nodes7678 = node.contents();
      oldNodes.replaceWith(nodes7678);
    }));
  }
  renderControl441();
  root8827.append(node1183);
  callback(root8827); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root8829 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1184 = $("<img>");
  
  var ref1147 = url;
  if(ref1147.get() !== null) {
    node1184.attr('src', ref1147.get());
    subs__.addSub(ref1147.addEventListener('change', function(_, ref, val) {
      node1184.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1147.rebind());
  
  var ref1148 = width;
  if(ref1148.get() !== null) {
    node1184.attr('width', ref1148.get());
    subs__.addSub(ref1148.addEventListener('change', function(_, ref, val) {
      node1184.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1148.rebind());
  
  var ref1149 = height;
  if(ref1149.get() !== null) {
    node1184.attr('height', ref1149.get());
    subs__.addSub(ref1149.addEventListener('change', function(_, ref, val) {
      node1184.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1149.rebind());
  
  var ref1150 = style;
  if(ref1150.get() !== null) {
    node1184.attr('class', ref1150.get());
    subs__.addSub(ref1150.addEventListener('change', function(_, ref, val) {
      node1184.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1150.rebind());
  
  var val515 = onclick.get();
  if(val515 !== null) {
    subs__.addSub(mobl.domBind(node1184, 'tap', val515));
  }
  
  var ref1151 = valign;
  if(ref1151.get() !== null) {
    node1184.attr('valign', ref1151.get());
    subs__.addSub(ref1151.addEventListener('change', function(_, ref, val) {
      node1184.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1151.rebind());
  
  var ref1152 = align;
  if(ref1152.get() !== null) {
    node1184.attr('align', ref1152.get());
    subs__.addSub(ref1152.addEventListener('change', function(_, ref, val) {
      node1184.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1152.rebind());
  
  root8829.append(node1184);
  callback(root8829); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root8830 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1153 = mobl.ref(ui.itemStyle);
  if(ref1153.get() !== null) {
    el.attr('class', ref1153.get());
    subs__.addSub(ref1153.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1153.rebind());
  
  var ref1154 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1154.get() !== null) {
    el.attr('class', ref1154.get());
    subs__.addSub(ref1154.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1154.rebind());
  
  var val516 = onswipe.get();
  if(val516 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val516));
  }
  
  var val517 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp7588 = result__;
                                           function after136(result__) {
                                             var tmp7589 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after136);if(result__ !== undefined) after136(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp7590 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val517 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val517));
  }
  
  var nodes7679 = $("<span>");
  el.append(nodes7679);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl442();
  }));
  
  function renderControl442() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8831); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7679;
      nodes7679 = node.contents();
      oldNodes.replaceWith(nodes7679);
    }));
  }
  renderControl442();
  root8830.append(el);
  callback(root8830); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root8832 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1185 = $("<input>");
  node1185.attr('type', "checkbox");
  
  var ref1156 = b;
  node1185.attr('checked', !!ref1156.get());
  subs__.addSub(ref1156.addEventListener('change', function(_, ref, val) {
    if(ref === ref1156) node1185.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1185, 'change', function() {
    b.set(!!node1185.attr('checked'));
  }));
  
  var val519 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val519 !== null) {
    subs__.addSub(mobl.domBind(node1185, 'tap', val519));
  }
  
  var val520 = onchange.get();
  if(val520 !== null) {
    subs__.addSub(mobl.domBind(node1185, 'change', val520));
  }
  
  root8832.append(node1185);
  
  root8832.append(" ");
  
  var node1186 = $("<span>");
  
  var ref1155 = label;
  node1186.text(""+ref1155.get());
  var ignore213 = false;
  subs__.addSub(ref1155.addEventListener('change', function(_, ref, val) {
    if(ignore213) return;
    node1186.text(""+val);
  }));
  subs__.addSub(ref1155.rebind());
  
  
  var val518 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after137(result__) {
                    var tmp7591 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after137);if(result__ !== undefined) after137(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val518 !== null) {
    subs__.addSub(mobl.domBind(node1186, 'tap', val518));
  }
  
  root8832.append(node1186);
  callback(root8832); return subs__;
  
  
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
  var root8833 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1187 = $("<span>");
  root8833.append(node1187);
  var condSubs290 = new mobl.CompSubscription();
  subs__.addSub(condSubs290);
  var oldValue290;
  var renderCond290 = function() {
    var value690 = label.get();
    if(oldValue290 === value690) return;
    oldValue290 = value690;
    var subs__ = condSubs290;
    subs__.unsubscribe();
    node1187.empty();
    if(value690) {
      var nodes7680 = $("<span>");
      node1187.append(nodes7680);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8834); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7680;
        nodes7680 = node.contents();
        oldNodes.replaceWith(nodes7680);
      }));
      
      
    } else {
      
    }
  };
  renderCond290();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond290();
  }));
  
  
  var node1188 = $("<span>");
  root8833.append(node1188);
  var condSubs291 = new mobl.CompSubscription();
  subs__.addSub(condSubs291);
  var oldValue291;
  var renderCond291 = function() {
    var value691 = validator.get();
    if(oldValue291 === value691) return;
    oldValue291 = value691;
    var subs__ = condSubs291;
    subs__.unsubscribe();
    node1188.empty();
    if(value691) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after141(result__) {
        var tmp7592 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp7593 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1189 = $("<input>");
        
        var ref1157 = inputType;
        if(ref1157.get() !== null) {
          node1189.attr('type', ref1157.get());
          subs__.addSub(ref1157.addEventListener('change', function(_, ref, val) {
            node1189.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1157.rebind());
        
        var ref1158 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1158.get() !== null) {
          node1189.attr('class', ref1158.get());
          subs__.addSub(ref1158.addEventListener('change', function(_, ref, val) {
            node1189.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1189.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1189.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1189.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1158.rebind());
        
        var ref1159 = placeholder;
        if(ref1159.get() !== null) {
          node1189.attr('placeholder', ref1159.get());
          subs__.addSub(ref1159.addEventListener('change', function(_, ref, val) {
            node1189.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1159.rebind());
        
        var ref1160 = temp;
        node1189.val(""+ref1160.get());
        var ignore214 = false;
        subs__.addSub(ref1160.addEventListener('change', function(_, ref, val) {
          if(ignore214) return;
          node1189.val(""+val);
        }));
        subs__.addSub(ref1160.rebind());
        
        subs__.addSub(mobl.domBind(node1189, 'keyup change', function() {
          ignore214 = true;
          temp.set(mobl.stringTomobl__String(node1189.val()));
          ignore214 = false;
        }));
        
        
        var val521 = onchange.get();
        if(val521 !== null) {
          subs__.addSub(mobl.domBind(node1189, 'change', val521));
        }
        
        var val522 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after138(result__) {
                          var tmp7594 = result__;
                          function after139(result__) {
                            var tmp7595 = result__;
                            var result__ = tmp7595;
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
                          var result__ = validator.get()(temp.get(), after139);if(result__ !== undefined) after139(result__);
                        }
                        var result__ = onkeyup.get()(event, after138);if(result__ !== undefined) after138(result__);
                      } else {
                        {
                          function after140(result__) {
                            var tmp7595 = result__;
                            var result__ = tmp7595;
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
                          var result__ = validator.get()(temp.get(), after140);if(result__ !== undefined) after140(result__);
                        }
                      }
                    };
        if(val522 !== null) {
          subs__.addSub(mobl.domBind(node1189, 'keyup', val522));
        }
        
        var val523 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val523 !== null) {
          subs__.addSub(mobl.domBind(node1189, 'blur', val523));
        }
        
        node1188.append(node1189);
        var nodes7681 = $("<span>");
        node1188.append(nodes7681);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root8835 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8835); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7681;
          nodes7681 = node.contents();
          oldNodes.replaceWith(nodes7681);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after141);if(result__ !== undefined) after141(result__);
    } else {
      
      var node1190 = $("<input>");
      
      var ref1161 = inputType;
      if(ref1161.get() !== null) {
        node1190.attr('type', ref1161.get());
        subs__.addSub(ref1161.addEventListener('change', function(_, ref, val) {
          node1190.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1161.rebind());
      
      var ref1162 = style;
      if(ref1162.get() !== null) {
        node1190.attr('class', ref1162.get());
        subs__.addSub(ref1162.addEventListener('change', function(_, ref, val) {
          node1190.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1162.rebind());
      
      var ref1163 = placeholder;
      if(ref1163.get() !== null) {
        node1190.attr('placeholder', ref1163.get());
        subs__.addSub(ref1163.addEventListener('change', function(_, ref, val) {
          node1190.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1163.rebind());
      
      var ref1164 = s;
      node1190.val(""+ref1164.get());
      var ignore215 = false;
      subs__.addSub(ref1164.addEventListener('change', function(_, ref, val) {
        if(ignore215) return;
        node1190.val(""+val);
      }));
      subs__.addSub(ref1164.rebind());
      
      subs__.addSub(mobl.domBind(node1190, 'keyup change', function() {
        ignore215 = true;
        s.set(mobl.stringTomobl__String(node1190.val()));
        ignore215 = false;
      }));
      
      
      var val524 = onchange.get();
      if(val524 !== null) {
        subs__.addSub(mobl.domBind(node1190, 'change', val524));
      }
      
      var val525 = onkeyup.get();
      if(val525 !== null) {
        subs__.addSub(mobl.domBind(node1190, 'keyup', val525));
      }
      
      var val526 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val526 !== null) {
        subs__.addSub(mobl.domBind(node1190, 'blur', val526));
      }
      
      node1188.append(node1190);
      
      
    }
  };
  renderCond291();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond291();
  }));
  
  callback(root8833); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8836 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7682 = $("<span>");
  root8836.append(nodes7682);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8837 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8837); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7682;
    nodes7682 = node.contents();
    oldNodes.replaceWith(nodes7682);
  }));
  callback(root8836); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8838 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7683 = $("<span>");
  root8838.append(nodes7683);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8839 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8839); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7683;
    nodes7683 = node.contents();
    oldNodes.replaceWith(nodes7683);
  }));
  callback(root8838); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root8840 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1191 = $("<span>");
  root8840.append(node1191);
  var condSubs292 = new mobl.CompSubscription();
  subs__.addSub(condSubs292);
  var oldValue292;
  var renderCond292 = function() {
    var value692 = label.get();
    if(oldValue292 === value692) return;
    oldValue292 = value692;
    var subs__ = condSubs292;
    subs__.unsubscribe();
    node1191.empty();
    if(value692) {
      var nodes7684 = $("<span>");
      node1191.append(nodes7684);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8841 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8841); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7684;
        nodes7684 = node.contents();
        oldNodes.replaceWith(nodes7684);
      }));
      
      
    } else {
      
    }
  };
  renderCond292();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond292();
  }));
  
  
  var node1192 = $("<input>");
  node1192.attr('type', "range");
  
  var ref1165 = n;
  node1192.val(""+ref1165.get());
  var ignore216 = false;
  subs__.addSub(ref1165.addEventListener('change', function(_, ref, val) {
    if(ignore216) return;
    node1192.val(""+val);
  }));
  subs__.addSub(ref1165.rebind());
  
  subs__.addSub(mobl.domBind(node1192, 'keyup change', function() {
    ignore216 = true;
    n.set(mobl.stringTomobl__Num(node1192.val()));
    ignore216 = false;
  }));
  
  
  var ref1166 = min;
  if(ref1166.get() !== null) {
    node1192.attr('min', ref1166.get());
    subs__.addSub(ref1166.addEventListener('change', function(_, ref, val) {
      node1192.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1166.rebind());
  
  var ref1167 = max;
  if(ref1167.get() !== null) {
    node1192.attr('max', ref1167.get());
    subs__.addSub(ref1167.addEventListener('change', function(_, ref, val) {
      node1192.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1167.rebind());
  
  var ref1168 = step;
  if(ref1168.get() !== null) {
    node1192.attr('step', ref1168.get());
    subs__.addSub(ref1168.addEventListener('change', function(_, ref, val) {
      node1192.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1168.rebind());
  node1192.attr('style', "width: 99%;");
  
  var val527 = onchange.get();
  if(val527 !== null) {
    subs__.addSub(mobl.domBind(node1192, 'change', val527));
  }
  
  var val528 = onkeyup.get();
  if(val528 !== null) {
    subs__.addSub(mobl.domBind(node1192, 'keyup', val528));
  }
  
  var ref1169 = placeholder;
  if(ref1169.get() !== null) {
    node1192.attr('placeholder', ref1169.get());
    subs__.addSub(ref1169.addEventListener('change', function(_, ref, val) {
      node1192.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1169.rebind());
  
  root8840.append(node1192);
  callback(root8840); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8842 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after142(result__) {
      var tmp7596 = result__;
      var result__ = tmp7596;
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
    var result__ = validator.get()(n2, after142);if(result__ !== undefined) after142(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7685 = $("<span>");
  root8842.append(nodes7685);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8843 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8843); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7685;
    nodes7685 = node.contents();
    oldNodes.replaceWith(nodes7685);
  }));
  callback(root8842); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root8844 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1193 = $("<span>");
  root8844.append(node1193);
  var condSubs293 = new mobl.CompSubscription();
  subs__.addSub(condSubs293);
  var oldValue293;
  var renderCond293 = function() {
    var value693 = label.get();
    if(oldValue293 === value693) return;
    oldValue293 = value693;
    var subs__ = condSubs293;
    subs__.unsubscribe();
    node1193.empty();
    if(value693) {
      
      var node1194 = $("<span>");
      node1194.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1173 = label;
      node1194.text(""+ref1173.get());
      var ignore218 = false;
      subs__.addSub(ref1173.addEventListener('change', function(_, ref, val) {
        if(ignore218) return;
        node1194.text(""+val);
      }));
      subs__.addSub(ref1173.rebind());
      
      
      node1193.append(node1194);
      
      var node1195 = $("<span>");
      node1195.attr('style', "float: left");
      
      
      var node1196 = $("<input>");
      node1196.attr('type', "password");
      
      var ref1170 = style;
      if(ref1170.get() !== null) {
        node1196.attr('class', ref1170.get());
        subs__.addSub(ref1170.addEventListener('change', function(_, ref, val) {
          node1196.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1170.rebind());
      
      var ref1171 = placeholder;
      if(ref1171.get() !== null) {
        node1196.attr('placeholder', ref1171.get());
        subs__.addSub(ref1171.addEventListener('change', function(_, ref, val) {
          node1196.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1171.rebind());
      
      var ref1172 = s;
      node1196.val(""+ref1172.get());
      var ignore217 = false;
      subs__.addSub(ref1172.addEventListener('change', function(_, ref, val) {
        if(ignore217) return;
        node1196.val(""+val);
      }));
      subs__.addSub(ref1172.rebind());
      
      subs__.addSub(mobl.domBind(node1196, 'keyup change', function() {
        ignore217 = true;
        s.set(mobl.stringTomobl__String(node1196.val()));
        ignore217 = false;
      }));
      
      
      var val529 = onchange.get();
      if(val529 !== null) {
        subs__.addSub(mobl.domBind(node1196, 'change', val529));
      }
      
      var val530 = onkeyup.get();
      if(val530 !== null) {
        subs__.addSub(mobl.domBind(node1196, 'keyup', val530));
      }
      
      var val531 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val531 !== null) {
        subs__.addSub(mobl.domBind(node1196, 'blur', val531));
      }
      
      node1195.append(node1196);
      node1193.append(node1195);
      
      
      
      
    } else {
      
      var node1197 = $("<input>");
      node1197.attr('type', "password");
      
      var ref1174 = style;
      if(ref1174.get() !== null) {
        node1197.attr('class', ref1174.get());
        subs__.addSub(ref1174.addEventListener('change', function(_, ref, val) {
          node1197.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1174.rebind());
      
      var ref1175 = placeholder;
      if(ref1175.get() !== null) {
        node1197.attr('placeholder', ref1175.get());
        subs__.addSub(ref1175.addEventListener('change', function(_, ref, val) {
          node1197.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1175.rebind());
      
      var ref1176 = s;
      node1197.val(""+ref1176.get());
      var ignore219 = false;
      subs__.addSub(ref1176.addEventListener('change', function(_, ref, val) {
        if(ignore219) return;
        node1197.val(""+val);
      }));
      subs__.addSub(ref1176.rebind());
      
      subs__.addSub(mobl.domBind(node1197, 'keyup change', function() {
        ignore219 = true;
        s.set(mobl.stringTomobl__String(node1197.val()));
        ignore219 = false;
      }));
      
      
      var val532 = onchange.get();
      if(val532 !== null) {
        subs__.addSub(mobl.domBind(node1197, 'change', val532));
      }
      
      var val533 = onkeyup.get();
      if(val533 !== null) {
        subs__.addSub(mobl.domBind(node1197, 'keyup', val533));
      }
      
      var val534 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val534 !== null) {
        subs__.addSub(mobl.domBind(node1197, 'blur', val534));
      }
      
      node1193.append(node1197);
      
      
    }
  };
  renderCond293();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond293();
  }));
  
  callback(root8844); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root8845 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1181 = style;
  if(ref1181.get() !== null) {
    sel.attr('class', ref1181.get());
    subs__.addSub(ref1181.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1181.rebind());
  
  var val535 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after143(result__) {
                    var tmp7598 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after143);if(result__ !== undefined) after143(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val535 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val535));
  }
  
  
  var node1198 = mobl.loadingSpan();
  sel.append(node1198);
  var list165;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList165 = function() {
    var subs__ = listSubs__;
    list165 = options.get();
    list165.list(function(results165) {
      node1198.empty();
      for(var i1950 = 0; i1950 < results165.length; i1950++) {
        (function() {
          var iternode165 = $("<span>");
          node1198.append(iternode165);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results165), i1950), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results165), i1950), "_2");
          
          var node1199 = $("<option>");
          
          var ref1177 = optionDescription;
          node1199.text(""+ref1177.get());
          var ignore220 = false;
          subs__.addSub(ref1177.addEventListener('change', function(_, ref, val) {
            if(ignore220) return;
            node1199.text(""+val);
          }));
          subs__.addSub(ref1177.rebind());
          
          
          var ref1178 = optionStyle;
          if(ref1178.get() !== null) {
            node1199.attr('class', ref1178.get());
            subs__.addSub(ref1178.addEventListener('change', function(_, ref, val) {
              node1199.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1178.rebind());
          
          var ref1179 = optionValue;
          if(ref1179.get() !== null) {
            node1199.attr('value', ref1179.get());
            subs__.addSub(ref1179.addEventListener('change', function(_, ref, val) {
              node1199.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1179.rebind());
          
          var ref1180 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1180.get() !== null) {
            node1199.attr('selected', ref1180.get());
            subs__.addSub(ref1180.addEventListener('change', function(_, ref, val) {
              node1199.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1199.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1199.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1180.rebind());
          
          iternode165.append(node1199);
          
          var oldNodes = iternode165;
          iternode165 = iternode165.contents();
          oldNodes.replaceWith(iternode165);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list165.addEventListener('change', function() { listSubs__.unsubscribe(); renderList165(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList165(true); }));
    });
  };
  renderList165();
  
  root8845.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root8845); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root8846 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7686 = $("<span>");
    root8846.append(nodes7686);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1200 = mobl.loadingSpan();
      root8847.append(node1200);
      var list166;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList166 = function() {
        var subs__ = listSubs__;
        list166 = tabs.get();
        list166.list(function(results166) {
          node1200.empty();
          for(var i1951 = 0; i1951 < results166.length; i1951++) {
            (function() {
              var iternode166 = $("<span>");
              node1200.append(iternode166);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results166), i1951), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results166), i1951), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results166), i1951), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp7553 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7553.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7553.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp7553.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp7553.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp7552 = mobl.ref(result__);
              
              var nodes7687 = $("<span>");
              iternode166.append(nodes7687);
              subs__.addSub((mobl.span)(tmp7553, mobl.ref(null), tmp7552, mobl.ref(null), function(_, callback) {
                var root8848 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7688 = $("<span>");
                root8848.append(nodes7688);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root8849 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8849); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7688;
                  nodes7688 = node.contents();
                  oldNodes.replaceWith(nodes7688);
                }));
                callback(root8848); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7687;
                nodes7687 = node.contents();
                oldNodes.replaceWith(nodes7687);
              }));
              
              var oldNodes = iternode166;
              iternode166 = iternode166.contents();
              oldNodes.replaceWith(iternode166);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list166.addEventListener('change', function() { listSubs__.unsubscribe(); renderList166(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList166(true); }));
        });
      };
      renderList166();
      
      callback(root8847); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7686;
      nodes7686 = node.contents();
      oldNodes.replaceWith(nodes7686);
    }));
    
    var node1201 = mobl.loadingSpan();
    root8846.append(node1201);
    var list167;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList167 = function() {
      var subs__ = listSubs__;
      list167 = tabs.get();
      list167.list(function(results167) {
        node1201.empty();
        for(var i1952 = 0; i1952 < results167.length; i1952++) {
          (function() {
            var iternode167 = $("<span>");
            node1201.append(iternode167);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results167), i1952), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results167), i1952), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results167), i1952), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp7554 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp7554.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp7554.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp7554.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp7554.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7689 = $("<span>");
            iternode167.append(nodes7689);
            subs__.addSub((mobl.block)(tmp7554, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8850 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7690 = $("<span>");
              root8850.append(nodes7690);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root8851 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7691 = $("<span>");
                root8851.append(nodes7691);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl443();
                }));
                
                function renderControl443() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root8852 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8852); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7691;
                    nodes7691 = node.contents();
                    oldNodes.replaceWith(nodes7691);
                  }));
                }
                renderControl443();
                callback(root8851); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7690;
                nodes7690 = node.contents();
                oldNodes.replaceWith(nodes7690);
              }));
              callback(root8850); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7689;
              nodes7689 = node.contents();
              oldNodes.replaceWith(nodes7689);
            }));
            
            var oldNodes = iternode167;
            iternode167 = iternode167.contents();
            oldNodes.replaceWith(iternode167);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list167.addEventListener('change', function() { listSubs__.unsubscribe(); renderList167(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList167(true); }));
      });
    };
    renderList167();
    
    callback(root8846); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7686 = $("<span>");
      root8846.append(nodes7686);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8847 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1200 = mobl.loadingSpan();
        root8847.append(node1200);
        var list166;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList166 = function() {
          var subs__ = listSubs__;
          list166 = tabs.get();
          list166.list(function(results166) {
            node1200.empty();
            for(var i1951 = 0; i1951 < results166.length; i1951++) {
              (function() {
                var iternode166 = $("<span>");
                node1200.append(iternode166);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results166), i1951), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results166), i1951), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results166), i1951), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp7553 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp7553.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp7553.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp7553.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp7553.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7552 = mobl.ref(result__);
                
                var nodes7687 = $("<span>");
                iternode166.append(nodes7687);
                subs__.addSub((mobl.span)(tmp7553, mobl.ref(null), tmp7552, mobl.ref(null), function(_, callback) {
                  var root8848 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7688 = $("<span>");
                  root8848.append(nodes7688);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root8849 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8849); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7688;
                    nodes7688 = node.contents();
                    oldNodes.replaceWith(nodes7688);
                  }));
                  callback(root8848); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7687;
                  nodes7687 = node.contents();
                  oldNodes.replaceWith(nodes7687);
                }));
                
                var oldNodes = iternode166;
                iternode166 = iternode166.contents();
                oldNodes.replaceWith(iternode166);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list166.addEventListener('change', function() { listSubs__.unsubscribe(); renderList166(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList166(true); }));
          });
        };
        renderList166();
        
        callback(root8847); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7686;
        nodes7686 = node.contents();
        oldNodes.replaceWith(nodes7686);
      }));
      
      var node1201 = mobl.loadingSpan();
      root8846.append(node1201);
      var list167;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList167 = function() {
        var subs__ = listSubs__;
        list167 = tabs.get();
        list167.list(function(results167) {
          node1201.empty();
          for(var i1952 = 0; i1952 < results167.length; i1952++) {
            (function() {
              var iternode167 = $("<span>");
              node1201.append(iternode167);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results167), i1952), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results167), i1952), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results167), i1952), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp7554 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7554.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7554.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp7554.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp7554.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7689 = $("<span>");
              iternode167.append(nodes7689);
              subs__.addSub((mobl.block)(tmp7554, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8850 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7690 = $("<span>");
                root8850.append(nodes7690);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root8851 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7691 = $("<span>");
                  root8851.append(nodes7691);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl443();
                  }));
                  
                  function renderControl443() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root8852 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8852); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7691;
                      nodes7691 = node.contents();
                      oldNodes.replaceWith(nodes7691);
                    }));
                  }
                  renderControl443();
                  callback(root8851); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7690;
                  nodes7690 = node.contents();
                  oldNodes.replaceWith(nodes7690);
                }));
                callback(root8850); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7689;
                nodes7689 = node.contents();
                oldNodes.replaceWith(nodes7689);
              }));
              
              var oldNodes = iternode167;
              iternode167 = iternode167.contents();
              oldNodes.replaceWith(iternode167);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list167.addEventListener('change', function() { listSubs__.unsubscribe(); renderList167(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList167(true); }));
        });
      };
      renderList167();
      
      callback(root8846); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root8853 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1202 = $("<div>");
  
  var ref1185 = mobl.ref(ui.searchboxStyle);
  if(ref1185.get() !== null) {
    node1202.attr('class', ref1185.get());
    subs__.addSub(ref1185.addEventListener('change', function(_, ref, val) {
      node1202.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1185.rebind());
  
  
  var node1203 = $("<input>");
  node1203.attr('type', "search");
  
  var ref1182 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1182.get() !== null) {
    node1203.attr('class', ref1182.get());
    subs__.addSub(ref1182.addEventListener('change', function(_, ref, val) {
      node1203.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1182.rebind());
  
  var ref1183 = placeholder;
  if(ref1183.get() !== null) {
    node1203.attr('placeholder', ref1183.get());
    subs__.addSub(ref1183.addEventListener('change', function(_, ref, val) {
      node1203.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1183.rebind());
  
  var ref1184 = s;
  node1203.val(""+ref1184.get());
  var ignore221 = false;
  subs__.addSub(ref1184.addEventListener('change', function(_, ref, val) {
    if(ignore221) return;
    node1203.val(""+val);
  }));
  subs__.addSub(ref1184.rebind());
  
  subs__.addSub(mobl.domBind(node1203, 'keyup change', function() {
    ignore221 = true;
    s.set(mobl.stringTomobl__String(node1203.val()));
    ignore221 = false;
  }));
  
  
  var val536 = onsearch.get();
  if(val536 !== null) {
    subs__.addSub(mobl.domBind(node1203, 'change', val536));
  }
  
  var val537 = onkeyup.get();
  if(val537 !== null) {
    subs__.addSub(mobl.domBind(node1203, 'keyup', val537));
  }
  node1203.attr('autocorrect', false);
  node1203.attr('autocapitalize', false);
  node1203.attr('autocomplete', false);
  
  node1202.append(node1203);
  root8853.append(node1202);
  callback(root8853); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root8854 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1186 = mobl.ref(ui.contextMenuStyle);
  if(ref1186.get() !== null) {
    menu.attr('class', ref1186.get());
    subs__.addSub(ref1186.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1186.rebind());
  
  var nodes7692 = $("<span>");
  menu.append(nodes7692);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl444();
  }));
  
  function renderControl444() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8855); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7692;
      nodes7692 = node.contents();
      oldNodes.replaceWith(nodes7692);
    }));
  }
  renderControl444();
  root8854.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val538 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp7601 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val538 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val538));
  }
  
  root8854.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root8854); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root8856 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7585 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7585.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1204 = $("<span>");
  root8856.append(node1204);
  var condSubs294 = new mobl.CompSubscription();
  subs__.addSub(condSubs294);
  var oldValue294;
  var renderCond294 = function() {
    var value694 = tmp7585.get();
    if(oldValue294 === value694) return;
    oldValue294 = value694;
    var subs__ = condSubs294;
    subs__.unsubscribe();
    node1204.empty();
    if(value694) {
      items.get().one(function(result__) {
        var tmp7602 = result__;
        var current = mobl.ref(result__);
        
        var node1205 = $("<div>");
        node1205.attr('width', "100%");
        
        
        var node1206 = $("<div>");
        node1206.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7695 = $("<span>");
        node1206.append(nodes7695);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8859 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1209 = mobl.loadingSpan();
          root8859.append(node1209);
          var list168;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList168 = function() {
            var subs__ = listSubs__;
            list168 = items.get();
            list168.list(function(results168) {
              node1209.empty();
              for(var i1953 = 0; i1953 < results168.length; i1953++) {
                (function() {
                  var iternode168 = $("<span>");
                  node1209.append(iternode168);
                  var it;
                  it = mobl.ref(mobl.ref(results168), i1953);
                  var result__ = it.get() == current.get();
                  var tmp7560 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7560.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7560.set(it.get() == current.get());
                  }));
                  
                  
                  var node1210 = $("<span>");
                  iternode168.append(node1210);
                  var condSubs296 = new mobl.CompSubscription();
                  subs__.addSub(condSubs296);
                  var oldValue296;
                  var renderCond296 = function() {
                    var value696 = tmp7560.get();
                    if(oldValue296 === value696) return;
                    oldValue296 = value696;
                    var subs__ = condSubs296;
                    subs__.unsubscribe();
                    node1210.empty();
                    if(value696) {
                      var nodes7696 = $("<span>");
                      node1210.append(nodes7696);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root8860 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7697 = $("<span>");
                        root8860.append(nodes7697);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl446();
                        }));
                        
                        function renderControl446() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8861 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8861); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7697;
                            nodes7697 = node.contents();
                            oldNodes.replaceWith(nodes7697);
                          }));
                        }
                        renderControl446();
                        callback(root8860); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7696;
                        nodes7696 = node.contents();
                        oldNodes.replaceWith(nodes7696);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7559 = mobl.ref(result__);
                      
                      var nodes7698 = $("<span>");
                      node1210.append(nodes7698);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7559, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root8862 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7699 = $("<span>");
                        root8862.append(nodes7699);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl447();
                        }));
                        
                        function renderControl447() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8863 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8863); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7699;
                            nodes7699 = node.contents();
                            oldNodes.replaceWith(nodes7699);
                          }));
                        }
                        renderControl447();
                        callback(root8862); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7698;
                        nodes7698 = node.contents();
                        oldNodes.replaceWith(nodes7698);
                      }));
                      
                      
                    }
                  };
                  renderCond296();
                  subs__.addSub(tmp7560.addEventListener('change', function() {
                    renderCond296();
                  }));
                  
                  
                  var oldNodes = iternode168;
                  iternode168 = iternode168.contents();
                  oldNodes.replaceWith(iternode168);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list168.addEventListener('change', function() { listSubs__.unsubscribe(); renderList168(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList168(true); }));
            });
          };
          renderList168();
          
          callback(root8859); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7695;
          nodes7695 = node.contents();
          oldNodes.replaceWith(nodes7695);
        }));
        node1205.append(node1206);
        
        var node1207 = $("<div>");
        node1207.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1208 = $("<span>");
        node1207.append(node1208);
        var condSubs295 = new mobl.CompSubscription();
        subs__.addSub(condSubs295);
        var oldValue295;
        var renderCond295 = function() {
          var value695 = current.get();
          if(oldValue295 === value695) return;
          oldValue295 = value695;
          var subs__ = condSubs295;
          subs__.unsubscribe();
          node1208.empty();
          if(value695) {
            var nodes7693 = $("<span>");
            node1208.append(nodes7693);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl445();
            }));
            
            function renderControl445() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root8857 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8857); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7693;
                nodes7693 = node.contents();
                oldNodes.replaceWith(nodes7693);
              }));
            }
            renderControl445();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp7561 = mobl.ref(result__);
            
            var nodes7694 = $("<span>");
            node1208.append(nodes7694);
            subs__.addSub((mobl.label)(tmp7561, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8858 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8858); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7694;
              nodes7694 = node.contents();
              oldNodes.replaceWith(nodes7694);
            }));
            
            
          }
        };
        renderCond295();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond295();
        }));
        
        node1205.append(node1207);
        node1204.append(node1205);
        
        
        
        
        
        
      });
    } else {
      var nodes7700 = $("<span>");
      node1204.append(nodes7700);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8864 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1211 = mobl.loadingSpan();
        root8864.append(node1211);
        var list169;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList169 = function() {
          var subs__ = listSubs__;
          list169 = items.get();
          list169.list(function(results169) {
            node1211.empty();
            for(var i1954 = 0; i1954 < results169.length; i1954++) {
              (function() {
                var iternode169 = $("<span>");
                node1211.append(iternode169);
                var it;
                it = mobl.ref(mobl.ref(results169), i1954);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7603 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7555 = mobl.ref(result__);
                
                var nodes7701 = $("<span>");
                iternode169.append(nodes7701);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7555, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8865 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7702 = $("<span>");
                  root8865.append(nodes7702);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl448();
                  }));
                  
                  function renderControl448() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root8866 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8866); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7702;
                      nodes7702 = node.contents();
                      oldNodes.replaceWith(nodes7702);
                    }));
                  }
                  renderControl448();
                  callback(root8865); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7701;
                  nodes7701 = node.contents();
                  oldNodes.replaceWith(nodes7701);
                }));
                
                var oldNodes = iternode169;
                iternode169 = iternode169.contents();
                oldNodes.replaceWith(iternode169);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list169.addEventListener('change', function() { listSubs__.unsubscribe(); renderList169(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList169(true); }));
          });
        };
        renderList169();
        
        callback(root8864); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7700;
        nodes7700 = node.contents();
        oldNodes.replaceWith(nodes7700);
      }));
      
      
    }
  };
  renderCond294();
  subs__.addSub(tmp7585.addEventListener('change', function() {
    renderCond294();
  }));
  
  callback(root8856); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8867 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7558 = mobl.ref(result__);
  
  var nodes7703 = $("<span>");
  root8867.append(nodes7703);
  subs__.addSub((ui.header)(tmp7558, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8868 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7557 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7556 = mobl.ref(result__);
    
    var nodes7704 = $("<span>");
    root8868.append(nodes7704);
    subs__.addSub((ui.backButton)(tmp7556, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7557, function(_, callback) {
      var root8869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8869); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7704;
      nodes7704 = node.contents();
      oldNodes.replaceWith(nodes7704);
    }));
    callback(root8868); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7703;
    nodes7703 = node.contents();
    oldNodes.replaceWith(nodes7703);
  }));
  var nodes7705 = $("<span>");
  root8867.append(nodes7705);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl449();
  }));
  
  function renderControl449() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8870 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8870); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7705;
      nodes7705 = node.contents();
      oldNodes.replaceWith(nodes7705);
    }));
  }
  renderControl449();
  callback(root8867); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root8871 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7706 = $("<span>");
  root8871.append(nodes7706);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8872 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1212 = mobl.loadingSpan();
    root8872.append(node1212);
    var list170;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList170 = function() {
      var subs__ = listSubs__;
      list170 = coll.get();
      list170.list(function(results170) {
        node1212.empty();
        for(var i1955 = 0; i1955 < results170.length; i1955++) {
          (function() {
            var iternode170 = $("<span>");
            node1212.append(iternode170);
            var it;
            it = mobl.ref(mobl.ref(results170), i1955);
            var result__ = it.get() == selected.get();
            var tmp7563 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp7563.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp7563.set(it.get() == selected.get());
            }));
            
            
            var node1213 = $("<span>");
            iternode170.append(node1213);
            var condSubs297 = new mobl.CompSubscription();
            subs__.addSub(condSubs297);
            var oldValue297;
            var renderCond297 = function() {
              var value697 = tmp7563.get();
              if(oldValue297 === value697) return;
              oldValue297 = value697;
              var subs__ = condSubs297;
              subs__.unsubscribe();
              node1213.empty();
              if(value697) {
                var nodes7707 = $("<span>");
                node1213.append(nodes7707);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8873 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7708 = $("<span>");
                  root8873.append(nodes7708);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl450();
                  }));
                  
                  function renderControl450() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root8874 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8874); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7708;
                      nodes7708 = node.contents();
                      oldNodes.replaceWith(nodes7708);
                    }));
                  }
                  renderControl450();
                  callback(root8873); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7707;
                  nodes7707 = node.contents();
                  oldNodes.replaceWith(nodes7707);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7562 = mobl.ref(result__);
                
                var nodes7709 = $("<span>");
                node1213.append(nodes7709);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7562, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root8875 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7710 = $("<span>");
                  root8875.append(nodes7710);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl451();
                  }));
                  
                  function renderControl451() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root8876 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8876); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7710;
                      nodes7710 = node.contents();
                      oldNodes.replaceWith(nodes7710);
                    }));
                  }
                  renderControl451();
                  callback(root8875); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7709;
                  nodes7709 = node.contents();
                  oldNodes.replaceWith(nodes7709);
                }));
                
                
              }
            };
            renderCond297();
            subs__.addSub(tmp7563.addEventListener('change', function() {
              renderCond297();
            }));
            
            
            var oldNodes = iternode170;
            iternode170 = iternode170.contents();
            oldNodes.replaceWith(iternode170);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list170.addEventListener('change', function() { listSubs__.unsubscribe(); renderList170(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList170(true); }));
      });
    };
    renderList170();
    
    callback(root8872); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7706;
    nodes7706 = node.contents();
    oldNodes.replaceWith(nodes7706);
  }));
  callback(root8871); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root8877 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp7604 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp7564 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp7564.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp7564.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp7564.set(coll.get().limit(n.get()));
    }));
    
    
    var node1214 = mobl.loadingSpan();
    root8877.append(node1214);
    var list171;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList171 = function() {
      var subs__ = listSubs__;
      list171 = tmp7564.get();
      list171.list(function(results171) {
        node1214.empty();
        for(var i1956 = 0; i1956 < results171.length; i1956++) {
          (function() {
            var iternode171 = $("<span>");
            node1214.append(iternode171);
            var it;
            it = mobl.ref(mobl.ref(results171), i1956);
            var nodes7711 = $("<span>");
            iternode171.append(nodes7711);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl452();
            }));
            
            function renderControl452() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root8878 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8878); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7711;
                nodes7711 = node.contents();
                oldNodes.replaceWith(nodes7711);
              }));
            }
            renderControl452();
            
            var oldNodes = iternode171;
            iternode171 = iternode171.contents();
            oldNodes.replaceWith(iternode171);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list171.addEventListener('change', function() { listSubs__.unsubscribe(); renderList171(true); }));
        subs__.addSub(tmp7564.addEventListener('change', function() { listSubs__.unsubscribe(); renderList171(true); }));
      });
    };
    renderList171();
    
    var result__ = n.get() < total.get();
    var tmp7566 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp7566.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp7566.set(n.get() < total.get());
    }));
    
    
    var node1215 = $("<span>");
    root8877.append(node1215);
    var condSubs298 = new mobl.CompSubscription();
    subs__.addSub(condSubs298);
    var oldValue298;
    var renderCond298 = function() {
      var value698 = tmp7566.get();
      if(oldValue298 === value698) return;
      oldValue298 = value698;
      var subs__ = condSubs298;
      subs__.unsubscribe();
      node1215.empty();
      if(value698) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7565 = mobl.ref(result__);
        
        var nodes7712 = $("<span>");
        node1215.append(nodes7712);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp7565, mobl.ref(null), function(_, callback) {
          var root8879 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7713 = $("<span>");
          root8879.append(nodes7713);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root8880 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8880); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7713;
            nodes7713 = node.contents();
            oldNodes.replaceWith(nodes7713);
          }));
          callback(root8879); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7712;
          nodes7712 = node.contents();
          oldNodes.replaceWith(nodes7712);
        }));
        
        
      } else {
        
      }
    };
    renderCond298();
    subs__.addSub(tmp7566.addEventListener('change', function() {
      renderCond298();
    }));
    
    callback(root8877); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root8881 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7714 = $("<span>");
  root8881.append(nodes7714);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8882 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1216 = mobl.loadingSpan();
    root8882.append(node1216);
    var list172;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList172 = function() {
      var subs__ = listSubs__;
      list172 = items.get();
      list172.list(function(results172) {
        node1216.empty();
        for(var i1957 = 0; i1957 < results172.length; i1957++) {
          (function() {
            var iternode172 = $("<span>");
            node1216.append(iternode172);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results172), i1957), "_1");it = mobl.ref(mobl.ref(mobl.ref(results172), i1957), "_2");
            var nodes7715 = $("<span>");
            iternode172.append(nodes7715);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root8883 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7716 = $("<span>");
              root8883.append(nodes7716);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root8884 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8884); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7716;
                nodes7716 = node.contents();
                oldNodes.replaceWith(nodes7716);
              }));
              callback(root8883); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7715;
              nodes7715 = node.contents();
              oldNodes.replaceWith(nodes7715);
            }));
            
            var oldNodes = iternode172;
            iternode172 = iternode172.contents();
            oldNodes.replaceWith(iternode172);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list172.addEventListener('change', function() { listSubs__.unsubscribe(); renderList172(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList172(true); }));
      });
    };
    renderList172();
    
    callback(root8882); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7714;
    nodes7714 = node.contents();
    oldNodes.replaceWith(nodes7714);
  }));
  callback(root8881); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root8885 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll880) {
    coll880 = coll880.reverse();
    function processOne280() {
      var it;
      it = coll880.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll880.length > 0) processOne280(); else rest280();
      
    }
    function rest280() {
      var nodes7717 = $("<span>");
      root8885.append(nodes7717);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root8886 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7567 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7568 = mobl.ref(result__);
        
        var nodes7718 = $("<span>");
        root8886.append(nodes7718);
        subs__.addSub((ui.backButton)(tmp7568, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7567, function(_, callback) {
          var root8887 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8887); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7718;
          nodes7718 = node.contents();
          oldNodes.replaceWith(nodes7718);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll879) {
                           coll879 = coll879.reverse();
                           function processOne279() {
                             var checked;var it;
                             var tmp7606 = coll879.pop();
                             checked = tmp7606._1;it = tmp7606._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll879.length > 0) processOne279(); else rest279();
                               
                             } else {
                               {
                                 
                                 if(coll879.length > 0) processOne279(); else rest279();
                                 
                               }
                             }
                           }
                           function rest279() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll879.length > 0) processOne279(); else rest279();
                         });
                         
                       };
        var tmp7569 = mobl.ref(result__);
        
        var nodes7719 = $("<span>");
        root8886.append(nodes7719);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7569, function(_, callback) {
          var root8888 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8888); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7719;
          nodes7719 = node.contents();
          oldNodes.replaceWith(nodes7719);
        }));
        callback(root8886); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7717;
        nodes7717 = node.contents();
        oldNodes.replaceWith(nodes7717);
      }));
      var nodes7720 = $("<span>");
      root8885.append(nodes7720);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root8889 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8889); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7720;
        nodes7720 = node.contents();
        oldNodes.replaceWith(nodes7720);
      }));
      callback(root8885); return subs__;
      
      
    }
    if(coll880.length > 0) processOne280(); else rest280();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root8890 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7721 = $("<span>");
  root8890.append(nodes7721);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8891 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8891); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7721;
    nodes7721 = node.contents();
    oldNodes.replaceWith(nodes7721);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp7570 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp7570.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp7570.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp7570.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp7570.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp7570.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7722 = $("<span>");
  root8890.append(nodes7722);
  subs__.addSub((ui.masterDetail)(tmp7570, masterItem, detailItem, function(_, callback) {
    var root8892 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8892); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7722;
    nodes7722 = node.contents();
    oldNodes.replaceWith(nodes7722);
  }));
  callback(root8890); return subs__;
  
  
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
  var root8893 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7723 = $("<span>");
  root8893.append(nodes7723);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8894 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1217 = mobl.loadingSpan();
    root8894.append(node1217);
    var list173;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList173 = function() {
      var subs__ = listSubs__;
      list173 = sections.get();
      list173.list(function(results173) {
        node1217.empty();
        for(var i1958 = 0; i1958 < results173.length; i1958++) {
          (function() {
            var iternode173 = $("<span>");
            node1217.append(iternode173);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results173), i1958), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results173), i1958), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp7572 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7572.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7572.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp7572.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp7572.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp7571 = mobl.ref(result__);
            
            var nodes7724 = $("<span>");
            iternode173.append(nodes7724);
            subs__.addSub((mobl.span)(tmp7572, mobl.ref(null), tmp7571, mobl.ref(null), function(_, callback) {
              var root8895 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7725 = $("<span>");
              root8895.append(nodes7725);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8896 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8896); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7725;
                nodes7725 = node.contents();
                oldNodes.replaceWith(nodes7725);
              }));
              callback(root8895); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7724;
              nodes7724 = node.contents();
              oldNodes.replaceWith(nodes7724);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp7573 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7573.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7573.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp7573.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp7573.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7726 = $("<span>");
            iternode173.append(nodes7726);
            subs__.addSub((mobl.block)(tmp7573, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8897 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7727 = $("<span>");
              root8897.append(nodes7727);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl453();
              }));
              
              function renderControl453() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root8898 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8898); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7727;
                  nodes7727 = node.contents();
                  oldNodes.replaceWith(nodes7727);
                }));
              }
              renderControl453();
              callback(root8897); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7726;
              nodes7726 = node.contents();
              oldNodes.replaceWith(nodes7726);
            }));
            
            var oldNodes = iternode173;
            iternode173 = iternode173.contents();
            oldNodes.replaceWith(iternode173);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list173.addEventListener('change', function() { listSubs__.unsubscribe(); renderList173(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList173(true); }));
      });
    };
    renderList173();
    
    callback(root8894); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7723;
    nodes7723 = node.contents();
    oldNodes.replaceWith(nodes7723);
  }));
  callback(root8893); return subs__;
  
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
  var root8899 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1218 = $("<table>");
  
  var ref1187 = style;
  if(ref1187.get() !== null) {
    node1218.attr('class', ref1187.get());
    subs__.addSub(ref1187.addEventListener('change', function(_, ref, val) {
      node1218.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1187.rebind());
  
  var nodes7728 = $("<span>");
  node1218.append(nodes7728);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl454();
  }));
  
  function renderControl454() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8900 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8900); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7728;
      nodes7728 = node.contents();
      oldNodes.replaceWith(nodes7728);
    }));
  }
  renderControl454();
  root8899.append(node1218);
  callback(root8899); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root8901 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1219 = $("<tr>");
  
  var ref1188 = style;
  if(ref1188.get() !== null) {
    node1219.attr('class', ref1188.get());
    subs__.addSub(ref1188.addEventListener('change', function(_, ref, val) {
      node1219.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1188.rebind());
  
  var nodes7729 = $("<span>");
  node1219.append(nodes7729);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl455();
  }));
  
  function renderControl455() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8902 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8902); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7729;
      nodes7729 = node.contents();
      oldNodes.replaceWith(nodes7729);
    }));
  }
  renderControl455();
  root8901.append(node1219);
  callback(root8901); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root8903 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1220 = $("<td>");
  
  var ref1189 = width;
  if(ref1189.get() !== null) {
    node1220.attr('width', ref1189.get());
    subs__.addSub(ref1189.addEventListener('change', function(_, ref, val) {
      node1220.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1189.rebind());
  
  var ref1190 = style;
  if(ref1190.get() !== null) {
    node1220.attr('class', ref1190.get());
    subs__.addSub(ref1190.addEventListener('change', function(_, ref, val) {
      node1220.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1190.rebind());
  
  var nodes7730 = $("<span>");
  node1220.append(nodes7730);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl456();
  }));
  
  function renderControl456() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8904 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8904); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7730;
      nodes7730 = node.contents();
      oldNodes.replaceWith(nodes7730);
    }));
  }
  renderControl456();
  root8903.append(node1220);
  callback(root8903); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root8905 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1221 = $("<td>");
  
  var ref1191 = width;
  if(ref1191.get() !== null) {
    node1221.attr('width', ref1191.get());
    subs__.addSub(ref1191.addEventListener('change', function(_, ref, val) {
      node1221.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1191.rebind());
  
  var ref1192 = style;
  if(ref1192.get() !== null) {
    node1221.attr('class', ref1192.get());
    subs__.addSub(ref1192.addEventListener('change', function(_, ref, val) {
      node1221.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1192.rebind());
  
  var nodes7731 = $("<span>");
  node1221.append(nodes7731);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl457();
  }));
  
  function renderControl457() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8906 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8906); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7731;
      nodes7731 = node.contents();
      oldNodes.replaceWith(nodes7731);
    }));
  }
  renderControl457();
  root8905.append(node1221);
  callback(root8905); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root8907 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1222 = $("<td>");
  
  var ref1193 = width;
  if(ref1193.get() !== null) {
    node1222.attr('width', ref1193.get());
    subs__.addSub(ref1193.addEventListener('change', function(_, ref, val) {
      node1222.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1193.rebind());
  
  var ref1194 = style;
  if(ref1194.get() !== null) {
    node1222.attr('class', ref1194.get());
    subs__.addSub(ref1194.addEventListener('change', function(_, ref, val) {
      node1222.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1194.rebind());
  
  
  var node1223 = $("<strong>");
  
  var nodes7732 = $("<span>");
  node1223.append(nodes7732);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl458();
  }));
  
  function renderControl458() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8908 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8908); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7732;
      nodes7732 = node.contents();
      oldNodes.replaceWith(nodes7732);
    }));
  }
  renderControl458();
  node1222.append(node1223);
  root8907.append(node1222);
  callback(root8907); return subs__;
  
  
  
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
  items.list(function(coll881) {
    coll881 = coll881.reverse();
    function processOne281() {
      var item;
      item = coll881.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll881.length > 0) processOne281(); else rest281();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll881.length > 0) processOne281(); else rest281();
          
        }
      }
    }
    function rest281() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll881.length > 0) processOne281(); else rest281();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root8909 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7586 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7586.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1224 = $("<span>");
  root8909.append(node1224);
  var condSubs299 = new mobl.CompSubscription();
  subs__.addSub(condSubs299);
  var oldValue299;
  var renderCond299 = function() {
    var value699 = tmp7586.get();
    if(oldValue299 === value699) return;
    oldValue299 = value699;
    var subs__ = condSubs299;
    subs__.unsubscribe();
    node1224.empty();
    if(value699) {
      items.get().one(function(result__) {
        var tmp7608 = result__;
        var current = mobl.ref(result__);
        
        var node1225 = $("<div>");
        node1225.attr('width', "100%");
        
        
        var node1226 = $("<div>");
        node1226.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7734 = $("<span>");
        node1226.append(nodes7734);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8911 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1229 = mobl.loadingSpan();
          root8911.append(node1229);
          var list174;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList174 = function() {
            var subs__ = listSubs__;
            list174 = items.get();
            list174.list(function(results174) {
              node1229.empty();
              for(var i1959 = 0; i1959 < results174.length; i1959++) {
                (function() {
                  var iternode174 = $("<span>");
                  node1229.append(iternode174);
                  var it;
                  it = mobl.ref(mobl.ref(results174), i1959);
                  var result__ = it.get() == current.get();
                  var tmp7582 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7582.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7582.set(it.get() == current.get());
                  }));
                  
                  
                  var node1230 = $("<span>");
                  iternode174.append(node1230);
                  var condSubs301 = new mobl.CompSubscription();
                  subs__.addSub(condSubs301);
                  var oldValue301;
                  var renderCond301 = function() {
                    var value701 = tmp7582.get();
                    if(oldValue301 === value701) return;
                    oldValue301 = value701;
                    var subs__ = condSubs301;
                    subs__.unsubscribe();
                    node1230.empty();
                    if(value701) {
                      var nodes7735 = $("<span>");
                      node1230.append(nodes7735);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root8912 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7614 = result__;
                          var tmp7579 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7612 = result__;
                              var result__ = tmp7612;
                              tmp7579.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7613 = result__;
                              var result__ = tmp7613;
                              tmp7579.set(result__);
                              
                            });
                          }));
                          
                          var nodes7736 = $("<span>");
                          root8912.append(nodes7736);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl460();
                          }));
                          
                          function renderControl460() {
                            subs__.addSub((masterItem.get())(it, tmp7579, function(elements, callback) {
                              var root8913 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root8913); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7736;
                              nodes7736 = node.contents();
                              oldNodes.replaceWith(nodes7736);
                            }));
                          }
                          renderControl460();
                          callback(root8912); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7735;
                        nodes7735 = node.contents();
                        oldNodes.replaceWith(nodes7735);
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
                      var tmp7581 = mobl.ref(result__);
                      
                      var nodes7737 = $("<span>");
                      node1230.append(nodes7737);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7581, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root8914 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7617 = result__;
                          var tmp7580 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7615 = result__;
                              var result__ = tmp7615;
                              tmp7580.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7616 = result__;
                              var result__ = tmp7616;
                              tmp7580.set(result__);
                              
                            });
                          }));
                          
                          var nodes7738 = $("<span>");
                          root8914.append(nodes7738);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl461();
                          }));
                          
                          function renderControl461() {
                            subs__.addSub((masterItem.get())(it, tmp7580, function(elements, callback) {
                              var root8915 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root8915); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7738;
                              nodes7738 = node.contents();
                              oldNodes.replaceWith(nodes7738);
                            }));
                          }
                          renderControl461();
                          callback(root8914); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7737;
                        nodes7737 = node.contents();
                        oldNodes.replaceWith(nodes7737);
                      }));
                      
                      
                    }
                  };
                  renderCond301();
                  subs__.addSub(tmp7582.addEventListener('change', function() {
                    renderCond301();
                  }));
                  
                  
                  var oldNodes = iternode174;
                  iternode174 = iternode174.contents();
                  oldNodes.replaceWith(iternode174);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list174.addEventListener('change', function() { listSubs__.unsubscribe(); renderList174(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList174(true); }));
            });
          };
          renderList174();
          
          callback(root8911); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7734;
          nodes7734 = node.contents();
          oldNodes.replaceWith(nodes7734);
        }));
        node1225.append(node1226);
        
        var node1227 = $("<div>");
        node1227.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp7584 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp7584.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp7584.set(current.get() && ui.visible.get());
        }));
        
        
        var node1228 = $("<span>");
        node1227.append(node1228);
        var condSubs300 = new mobl.CompSubscription();
        subs__.addSub(condSubs300);
        var oldValue300;
        var renderCond300 = function() {
          var value700 = tmp7584.get();
          if(oldValue300 === value700) return;
          oldValue300 = value700;
          var subs__ = condSubs300;
          subs__.unsubscribe();
          node1228.empty();
          if(value700) {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp7611 = result__;
              var tmp7583 = mobl.ref(result__);
              subs__.addSub(current.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp7609 = result__;
                  var result__ = tmp7609;
                  tmp7583.set(result__);
                  
                });
              }));
              subs__.addSub(items.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp7610 = result__;
                  var result__ = tmp7610;
                  tmp7583.set(result__);
                  
                });
              }));
              
              var nodes7733 = $("<span>");
              node1228.append(nodes7733);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl459();
              }));
              
              function renderControl459() {
                subs__.addSub((detail.get())(current, tmp7583, function(elements, callback) {
                  var root8910 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8910); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7733;
                  nodes7733 = node.contents();
                  oldNodes.replaceWith(nodes7733);
                }));
              }
              renderControl459();
              
              
            });
          } else {
            
          }
        };
        renderCond300();
        subs__.addSub(tmp7584.addEventListener('change', function() {
          renderCond300();
        }));
        
        node1225.append(node1227);
        node1224.append(node1225);
        
        
        
        
        
        
      });
    } else {
      var nodes7739 = $("<span>");
      node1224.append(nodes7739);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8916 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1231 = mobl.loadingSpan();
        root8916.append(node1231);
        var list175;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList175 = function() {
          var subs__ = listSubs__;
          list175 = items.get();
          list175.list(function(results175) {
            node1231.empty();
            for(var i1960 = 0; i1960 < results175.length; i1960++) {
              (function() {
                var iternode175 = $("<span>");
                node1231.append(iternode175);
                var it;
                it = mobl.ref(mobl.ref(results175), i1960);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7623 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7575 = mobl.ref(result__);
                
                var nodes7740 = $("<span>");
                iternode175.append(nodes7740);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7575, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8917 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp7620 = result__;
                    var tmp7574 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7618 = result__;
                        var result__ = tmp7618;
                        tmp7574.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7619 = result__;
                        var result__ = tmp7619;
                        tmp7574.set(result__);
                        
                      });
                    }));
                    
                    var nodes7741 = $("<span>");
                    root8917.append(nodes7741);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl462();
                    }));
                    
                    function renderControl462() {
                      subs__.addSub((masterItem.get())(it, tmp7574, function(elements, callback) {
                        var root8918 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root8918); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7741;
                        nodes7741 = node.contents();
                        oldNodes.replaceWith(nodes7741);
                      }));
                    }
                    renderControl462();
                    mobl.sleep(200, function(result__) {
                      var tmp7621 = result__;
                      mathJAX.renderMaths(function(result__) {
                        var tmp7622 = result__;
                        callback(root8917); return subs__;
                      });
                    });
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7740;
                  nodes7740 = node.contents();
                  oldNodes.replaceWith(nodes7740);
                }));
                
                var oldNodes = iternode175;
                iternode175 = iternode175.contents();
                oldNodes.replaceWith(iternode175);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list175.addEventListener('change', function() { listSubs__.unsubscribe(); renderList175(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList175(true); }));
          });
        };
        renderList175();
        
        callback(root8916); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7739;
        nodes7739 = node.contents();
        oldNodes.replaceWith(nodes7739);
      }));
      
      
    }
  };
  renderCond299();
  subs__.addSub(tmp7586.addEventListener('change', function() {
    renderCond299();
  }));
  
  callback(root8909); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8919 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7578 = mobl.ref(result__);
  
  var nodes7742 = $("<span>");
  root8919.append(nodes7742);
  subs__.addSub((ui.header)(tmp7578, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8920 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7577 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7576 = mobl.ref(result__);
    
    var nodes7743 = $("<span>");
    root8920.append(nodes7743);
    subs__.addSub((ui.backButton)(tmp7576, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7577, function(_, callback) {
      var root8921 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8921); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7743;
      nodes7743 = node.contents();
      oldNodes.replaceWith(nodes7743);
    }));
    callback(root8920); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7742;
    nodes7742 = node.contents();
    oldNodes.replaceWith(nodes7742);
  }));
  var nodes7744 = $("<span>");
  root8919.append(nodes7744);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl463();
  }));
  
  function renderControl463() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8922 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8922); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7744;
      nodes7744 = node.contents();
      oldNodes.replaceWith(nodes7744);
    }));
  }
  renderControl463();
  callback(root8919); return subs__;
  
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root8923 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7745 = $("<span>");
  root8923.append(nodes7745);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8924 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes7746 = $("<span>");
    root8924.append(nodes7746);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8925 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8925); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7746;
      nodes7746 = node.contents();
      oldNodes.replaceWith(nodes7746);
    }));
    callback(root8924); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7745;
    nodes7745 = node.contents();
    oldNodes.replaceWith(nodes7745);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes7747 = $("<span>");
  root8923.append(nodes7747);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root8926 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8926); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7747;
    nodes7747 = node.contents();
    oldNodes.replaceWith(nodes7747);
  }));
  callback(root8923); return subs__;
  
  
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
