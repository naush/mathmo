mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
<<<<<<< HEAD
  var root11 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7 = $("<span>");
  root11.append(node7);
  var condSubs0 = new mobl.CompSubscription();
  subs__.addSub(condSubs0);
  var oldValue0;
  var renderCond0 = function() {
    var value16 = value.get();
    if(oldValue0 === value16) return;
    oldValue0 = value16;
    var subs__ = condSubs0;
    subs__.unsubscribe();
    node7.empty();
    if(value16) {
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
=======
  var root1140 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node192 = $("<span>");
  root1140.append(node192);
  var condSubs52 = new mobl.CompSubscription();
  subs__.addSub(condSubs52);
  var oldValue52;
  var renderCond52 = function() {
    var value100 = value.get();
    if(oldValue52 === value100) return;
    oldValue52 = value100;
    var subs__ = condSubs52;
    subs__.unsubscribe();
    node192.empty();
    if(value100) {
      var nodes951 = $("<span>");
      node192.append(nodes951);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl64();
      }));
      
      function renderControl64() {
        subs__.addSub((elements)(function(elements, callback) {
          var root1141 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1141); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes951;
          nodes951 = node.contents();
          oldNodes.replaceWith(nodes951);
        }));
      }
      renderControl64();
      
      
    } else {
      var nodes952 = $("<span>");
      node192.append(nodes952);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes953 = $("<span>");
        root1142.append(nodes953);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root1143 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1143); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes953;
          nodes953 = node.contents();
          oldNodes.replaceWith(nodes953);
        }));
        var nodes954 = $("<span>");
        root1142.append(nodes954);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root1144 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1144); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes954;
          nodes954 = node.contents();
          oldNodes.replaceWith(nodes954);
        }));
        callback(root1142); return subs__;
>>>>>>> upstream/master
        
        
        return subs__;
      }, function(node) {
<<<<<<< HEAD
        var oldNodes = nodes5;
        nodes5 = node.contents();
        oldNodes.replaceWith(nodes5);
=======
        var oldNodes = nodes952;
        nodes952 = node.contents();
        oldNodes.replaceWith(nodes952);
>>>>>>> upstream/master
      }));
      
      
    }
  };
<<<<<<< HEAD
  renderCond0();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond0();
  }));
  
  callback(root11); return subs__;
=======
  renderCond52();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond52();
  }));
  
  callback(root1140); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
<<<<<<< HEAD
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
    var value17 = fixedPosition.get();
    if(oldValue1 === value17) return;
    oldValue1 = value17;
    var subs__ = condSubs1;
    subs__.unsubscribe();
    node9.empty();
    if(value17) {
      
      var node10 = $("<div>");
      node10.attr('id', "hello");
      node10.attr('style', "height: 2.9em;");
      
      node9.append(node10);
=======
  var root1145 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node193 = $("<div>");
  
  var ref160 = mobl.ref(ui.headerStyle);
  if(ref160.get() !== null) {
    node193.attr('class', ref160.get());
    subs__.addSub(ref160.addEventListener('change', function(_, ref, val) {
      node193.attr('class', val);
    }));
    
  }
  subs__.addSub(ref160.rebind());
  
  var val74 = onclick.get();
  if(val74 !== null) {
    subs__.addSub(mobl.domBind(node193, 'tap', val74));
  }
  
  var ref161 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref161.get() !== null) {
    node193.attr('style', ref161.get());
    subs__.addSub(ref161.addEventListener('change', function(_, ref, val) {
      node193.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node193.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref161.rebind());
  
  
  var node196 = $("<div>");
  
  var ref159 = mobl.ref(ui.headerContainerStyle);
  if(ref159.get() !== null) {
    node196.attr('class', ref159.get());
    subs__.addSub(ref159.addEventListener('change', function(_, ref, val) {
      node196.attr('class', val);
    }));
    
  }
  subs__.addSub(ref159.rebind());
  
  
  var node197 = $("<div>");
  
  var ref157 = text;
  node197.text(""+ref157.get());
  var ignore30 = false;
  subs__.addSub(ref157.addEventListener('change', function(_, ref, val) {
    if(ignore30) return;
    node197.text(""+val);
  }));
  subs__.addSub(ref157.rebind());
  
  
  var ref158 = mobl.ref(ui.headerTextStyle);
  if(ref158.get() !== null) {
    node197.attr('class', ref158.get());
    subs__.addSub(ref158.addEventListener('change', function(_, ref, val) {
      node197.attr('class', val);
    }));
    
  }
  subs__.addSub(ref158.rebind());
  
  node196.append(node197);
  node193.append(node196);
  var nodes955 = $("<span>");
  node193.append(nodes955);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl65();
  }));
  
  function renderControl65() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1146 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1146); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes955;
      nodes955 = node.contents();
      oldNodes.replaceWith(nodes955);
    }));
  }
  renderControl65();
  root1145.append(node193);
  
  var node194 = $("<span>");
  root1145.append(node194);
  var condSubs53 = new mobl.CompSubscription();
  subs__.addSub(condSubs53);
  var oldValue53;
  var renderCond53 = function() {
    var value101 = fixedPosition.get();
    if(oldValue53 === value101) return;
    oldValue53 = value101;
    var subs__ = condSubs53;
    subs__.unsubscribe();
    node194.empty();
    if(value101) {
      
      var node195 = $("<div>");
      node195.attr('id', "hello");
      node195.attr('style', "height: 2.9em;");
      
      node194.append(node195);
>>>>>>> upstream/master
      
      
    } else {
      
    }
  };
<<<<<<< HEAD
  renderCond1();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond1();
  }));
  
  callback(root16); return subs__;
=======
  renderCond53();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond53();
  }));
  
  callback(root1145); return subs__;
>>>>>>> upstream/master
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
<<<<<<< HEAD
  var root18 = $("<span>");
=======
  var root1147 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
<<<<<<< HEAD
  var ref15 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref15.get() !== null) {
    sp.attr('class', ref15.get());
    subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
=======
  var ref162 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref162.get() !== null) {
    sp.attr('class', ref162.get());
    subs__.addSub(ref162.addEventListener('change', function(_, ref, val) {
>>>>>>> upstream/master
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
<<<<<<< HEAD
  subs__.addSub(ref15.rebind());
  
  var val6 = function(event, callback) {
=======
  subs__.addSub(ref162.rebind());
  
  var val75 = function(event, callback) {
>>>>>>> upstream/master
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
<<<<<<< HEAD
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val6));
  }
  
  var val7 = function(event, callback) {
=======
  if(val75 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val75));
  }
  
  var val76 = function(event, callback) {
>>>>>>> upstream/master
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
<<<<<<< HEAD
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val7));
  }
  
  var val8 = function(event, callback) {
=======
  if(val76 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val76));
  }
  
  var val77 = function(event, callback) {
>>>>>>> upstream/master
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
<<<<<<< HEAD
                  function after0(result__) {
                    var tmp41 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
=======
                  function after18(result__) {
                    var tmp704 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after18);if(result__ !== undefined) after18(result__);
>>>>>>> upstream/master
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
<<<<<<< HEAD
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val8));
  }
  
  var val9 = function(event, callback) {
=======
  if(val77 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val77));
  }
  
  var val78 = function(event, callback) {
>>>>>>> upstream/master
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
<<<<<<< HEAD
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
=======
  if(val78 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val78));
  }
  
  var ref163 = text;
  sp.text(""+ref163.get());
  var ignore31 = false;
  subs__.addSub(ref163.addEventListener('change', function(_, ref, val) {
    if(ignore31) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref163.rebind());
  
  
  root1147.append(sp);
  callback(root1147); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes956 = $("<span>");
  root1148.append(nodes956);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1149 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1149); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes956;
    nodes956 = node.contents();
    oldNodes.replaceWith(nodes956);
  }));
  callback(root1148); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1150 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes957 = $("<span>");
  root1150.append(nodes957);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root1151 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1151); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes957;
    nodes957 = node.contents();
    oldNodes.replaceWith(nodes957);
  }));
  callback(root1150); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
<<<<<<< HEAD
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
=======
  var root1152 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node198 = $("<ul>");
  
  var ref164 = mobl.ref(ui.groupStyle);
  if(ref164.get() !== null) {
    node198.attr('class', ref164.get());
    subs__.addSub(ref164.addEventListener('change', function(_, ref, val) {
      node198.attr('class', val);
    }));
    
  }
  subs__.addSub(ref164.rebind());
  
  var nodes958 = $("<span>");
  node198.append(nodes958);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl66();
  }));
  
  function renderControl66() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1153 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1153); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes958;
      nodes958 = node.contents();
      oldNodes.replaceWith(nodes958);
    }));
  }
  renderControl66();
  root1152.append(node198);
  callback(root1152); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1154 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node199 = $("<img>");
  
  var ref165 = url;
  if(ref165.get() !== null) {
    node199.attr('src', ref165.get());
    subs__.addSub(ref165.addEventListener('change', function(_, ref, val) {
      node199.attr('src', val);
    }));
    
  }
  subs__.addSub(ref165.rebind());
  
  var ref166 = width;
  if(ref166.get() !== null) {
    node199.attr('width', ref166.get());
    subs__.addSub(ref166.addEventListener('change', function(_, ref, val) {
      node199.attr('width', val);
    }));
    
  }
  subs__.addSub(ref166.rebind());
  
  var ref167 = height;
  if(ref167.get() !== null) {
    node199.attr('height', ref167.get());
    subs__.addSub(ref167.addEventListener('change', function(_, ref, val) {
      node199.attr('height', val);
    }));
    
  }
  subs__.addSub(ref167.rebind());
  
  var ref168 = style;
  if(ref168.get() !== null) {
    node199.attr('class', ref168.get());
    subs__.addSub(ref168.addEventListener('change', function(_, ref, val) {
      node199.attr('class', val);
    }));
    
  }
  subs__.addSub(ref168.rebind());
  
  var val79 = onclick.get();
  if(val79 !== null) {
    subs__.addSub(mobl.domBind(node199, 'tap', val79));
  }
  
  var ref169 = valign;
  if(ref169.get() !== null) {
    node199.attr('valign', ref169.get());
    subs__.addSub(ref169.addEventListener('change', function(_, ref, val) {
      node199.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref169.rebind());
  
  var ref170 = align;
  if(ref170.get() !== null) {
    node199.attr('align', ref170.get());
    subs__.addSub(ref170.addEventListener('change', function(_, ref, val) {
      node199.attr('align', val);
    }));
    
  }
  subs__.addSub(ref170.rebind());
  
  root1154.append(node199);
  callback(root1154); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
<<<<<<< HEAD
  var root26 = $("<span>");
=======
  var root1155 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
<<<<<<< HEAD
  var ref24 = mobl.ref(ui.itemStyle);
  if(ref24.get() !== null) {
    el.attr('class', ref24.get());
    subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
=======
  var ref171 = mobl.ref(ui.itemStyle);
  if(ref171.get() !== null) {
    el.attr('class', ref171.get());
    subs__.addSub(ref171.addEventListener('change', function(_, ref, val) {
>>>>>>> upstream/master
      el.attr('class', val);
    }));
    
  }
<<<<<<< HEAD
  subs__.addSub(ref24.rebind());
  
  var ref25 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref25.get() !== null) {
    el.attr('class', ref25.get());
    subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
=======
  subs__.addSub(ref171.rebind());
  
  var ref172 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref172.get() !== null) {
    el.attr('class', ref172.get());
    subs__.addSub(ref172.addEventListener('change', function(_, ref, val) {
>>>>>>> upstream/master
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
<<<<<<< HEAD
  subs__.addSub(ref25.rebind());
  
  var val11 = onswipe.get();
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val11));
  }
  
  var val12 = onclick.get() ? function(event, callback) {
=======
  subs__.addSub(ref172.rebind());
  
  var val80 = onswipe.get();
  if(val80 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val80));
  }
  
  var val81 = onclick.get() ? function(event, callback) {
>>>>>>> upstream/master
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
<<<<<<< HEAD
                                           var tmp42 = result__;
                                           function after1(result__) {
                                             var tmp43 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp44 = result__;
=======
                                           var tmp705 = result__;
                                           function after19(result__) {
                                             var tmp706 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after19);if(result__ !== undefined) after19(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp707 = result__;
>>>>>>> upstream/master
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
<<<<<<< HEAD
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
=======
  if(val81 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val81));
  }
  
  var nodes959 = $("<span>");
  el.append(nodes959);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl67();
  }));
  
  function renderControl67() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1156); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes959;
      nodes959 = node.contents();
      oldNodes.replaceWith(nodes959);
    }));
  }
  renderControl67();
  root1155.append(el);
  callback(root1155); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1157 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node200 = $("<input>");
  node200.attr('type', "checkbox");
  
  var ref174 = b;
  node200.attr('checked', !!ref174.get());
  subs__.addSub(ref174.addEventListener('change', function(_, ref, val) {
    if(ref === ref174) node200.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node200, 'change', function() {
    b.set(!!node200.attr('checked'));
  }));
  
  var val83 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val83 !== null) {
    subs__.addSub(mobl.domBind(node200, 'tap', val83));
  }
  
  var val84 = onchange.get();
  if(val84 !== null) {
    subs__.addSub(mobl.domBind(node200, 'change', val84));
  }
  
  root1157.append(node200);
  
  root1157.append(" ");
  
  var node201 = $("<span>");
  
  var ref173 = label;
  node201.text(""+ref173.get());
  var ignore32 = false;
  subs__.addSub(ref173.addEventListener('change', function(_, ref, val) {
    if(ignore32) return;
    node201.text(""+val);
  }));
  subs__.addSub(ref173.rebind());
  
  
  var val82 = function(event, callback) {
>>>>>>> upstream/master
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
<<<<<<< HEAD
                  function after2(result__) {
                    var tmp45 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
=======
                  function after20(result__) {
                    var tmp708 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after20);if(result__ !== undefined) after20(result__);
>>>>>>> upstream/master
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
<<<<<<< HEAD
  if(val13 !== null) {
    subs__.addSub(mobl.domBind(node16, 'tap', val13));
  }
  
  root28.append(node16);
  callback(root28); return subs__;
=======
  if(val82 !== null) {
    subs__.addSub(mobl.domBind(node201, 'tap', val82));
  }
  
  root1157.append(node201);
  callback(root1157); return subs__;
>>>>>>> upstream/master
  
  
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
<<<<<<< HEAD
  var root29 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node17 = $("<span>");
  root29.append(node17);
  var condSubs2 = new mobl.CompSubscription();
  subs__.addSub(condSubs2);
  var oldValue2;
  var renderCond2 = function() {
    var value18 = label.get();
    if(oldValue2 === value18) return;
    oldValue2 = value18;
    var subs__ = condSubs2;
    subs__.unsubscribe();
    node17.empty();
    if(value18) {
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
=======
  var root1158 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node202 = $("<span>");
  root1158.append(node202);
  var condSubs54 = new mobl.CompSubscription();
  subs__.addSub(condSubs54);
  var oldValue54;
  var renderCond54 = function() {
    var value102 = label.get();
    if(oldValue54 === value102) return;
    oldValue54 = value102;
    var subs__ = condSubs54;
    subs__.unsubscribe();
    node202.empty();
    if(value102) {
      var nodes960 = $("<span>");
      node202.append(nodes960);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1159 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1159); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes960;
        nodes960 = node.contents();
        oldNodes.replaceWith(nodes960);
>>>>>>> upstream/master
      }));
      
      
    } else {
      
    }
  };
<<<<<<< HEAD
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
    var value19 = validator.get();
    if(oldValue3 === value19) return;
    oldValue3 = value19;
    var subs__ = condSubs3;
    subs__.unsubscribe();
    node18.empty();
    if(value19) {
=======
  renderCond54();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond54();
  }));
  
  
  var node203 = $("<span>");
  root1158.append(node203);
  var condSubs55 = new mobl.CompSubscription();
  subs__.addSub(condSubs55);
  var oldValue55;
  var renderCond55 = function() {
    var value103 = validator.get();
    if(oldValue55 === value103) return;
    oldValue55 = value103;
    var subs__ = condSubs55;
    subs__.unsubscribe();
    node203.empty();
    if(value103) {
>>>>>>> upstream/master
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
<<<<<<< HEAD
      function after6(result__) {
        var tmp46 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp47 = result__;
=======
      function after24(result__) {
        var tmp709 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp710 = result__;
>>>>>>> upstream/master
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
<<<<<<< HEAD
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
=======
        var node204 = $("<input>");
        
        var ref175 = inputType;
        if(ref175.get() !== null) {
          node204.attr('type', ref175.get());
          subs__.addSub(ref175.addEventListener('change', function(_, ref, val) {
            node204.attr('type', val);
          }));
          
        }
        subs__.addSub(ref175.rebind());
        
        var ref176 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref176.get() !== null) {
          node204.attr('class', ref176.get());
          subs__.addSub(ref176.addEventListener('change', function(_, ref, val) {
            node204.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node204.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node204.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node204.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref176.rebind());
        
        var ref177 = placeholder;
        if(ref177.get() !== null) {
          node204.attr('placeholder', ref177.get());
          subs__.addSub(ref177.addEventListener('change', function(_, ref, val) {
            node204.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref177.rebind());
        
        var ref178 = temp;
        node204.val(""+ref178.get());
        var ignore33 = false;
        subs__.addSub(ref178.addEventListener('change', function(_, ref, val) {
          if(ignore33) return;
          node204.val(""+val);
        }));
        subs__.addSub(ref178.rebind());
        
        subs__.addSub(mobl.domBind(node204, 'keyup change', function() {
          ignore33 = true;
          temp.set(mobl.stringTomobl__String(node204.val()));
          ignore33 = false;
        }));
        
        
        var val85 = onchange.get();
        if(val85 !== null) {
          subs__.addSub(mobl.domBind(node204, 'change', val85));
        }
        
        var val86 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after21(result__) {
                          var tmp711 = result__;
                          function after22(result__) {
                            var tmp712 = result__;
                            var result__ = tmp712;
>>>>>>> upstream/master
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
<<<<<<< HEAD
                          var result__ = validator.get()(temp.get(), after4);if(result__ !== undefined) after4(result__);
                        }
                        var result__ = onkeyup.get()(event, after3);if(result__ !== undefined) after3(result__);
                      } else {
                        {
                          function after5(result__) {
                            var tmp49 = result__;
                            var result__ = tmp49;
=======
                          var result__ = validator.get()(temp.get(), after22);if(result__ !== undefined) after22(result__);
                        }
                        var result__ = onkeyup.get()(event, after21);if(result__ !== undefined) after21(result__);
                      } else {
                        {
                          function after23(result__) {
                            var tmp712 = result__;
                            var result__ = tmp712;
>>>>>>> upstream/master
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
<<<<<<< HEAD
                          var result__ = validator.get()(temp.get(), after5);if(result__ !== undefined) after5(result__);
                        }
                      }
                    };
        if(val17 !== null) {
          subs__.addSub(mobl.domBind(node19, 'keyup', val17));
        }
        
        var val18 = function(event, callback) {
=======
                          var result__ = validator.get()(temp.get(), after23);if(result__ !== undefined) after23(result__);
                        }
                      }
                    };
        if(val86 !== null) {
          subs__.addSub(mobl.domBind(node204, 'keyup', val86));
        }
        
        var val87 = function(event, callback) {
>>>>>>> upstream/master
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
<<<<<<< HEAD
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
=======
        if(val87 !== null) {
          subs__.addSub(mobl.domBind(node204, 'blur', val87));
        }
        
        node203.append(node204);
        var nodes961 = $("<span>");
        node203.append(nodes961);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root1160 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1160); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes961;
          nodes961 = node.contents();
          oldNodes.replaceWith(nodes961);
>>>>>>> upstream/master
        }));
        
        
        
        
      }
<<<<<<< HEAD
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
=======
      var result__ = validator.get()(s.get(), after24);if(result__ !== undefined) after24(result__);
    } else {
      
      var node205 = $("<input>");
      
      var ref179 = inputType;
      if(ref179.get() !== null) {
        node205.attr('type', ref179.get());
        subs__.addSub(ref179.addEventListener('change', function(_, ref, val) {
          node205.attr('type', val);
        }));
        
      }
      subs__.addSub(ref179.rebind());
      
      var ref180 = style;
      if(ref180.get() !== null) {
        node205.attr('class', ref180.get());
        subs__.addSub(ref180.addEventListener('change', function(_, ref, val) {
          node205.attr('class', val);
        }));
        
      }
      subs__.addSub(ref180.rebind());
      
      var ref181 = placeholder;
      if(ref181.get() !== null) {
        node205.attr('placeholder', ref181.get());
        subs__.addSub(ref181.addEventListener('change', function(_, ref, val) {
          node205.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref181.rebind());
      
      var ref182 = s;
      node205.val(""+ref182.get());
      var ignore34 = false;
      subs__.addSub(ref182.addEventListener('change', function(_, ref, val) {
        if(ignore34) return;
        node205.val(""+val);
      }));
      subs__.addSub(ref182.rebind());
      
      subs__.addSub(mobl.domBind(node205, 'keyup change', function() {
        ignore34 = true;
        s.set(mobl.stringTomobl__String(node205.val()));
        ignore34 = false;
      }));
      
      
      var val88 = onchange.get();
      if(val88 !== null) {
        subs__.addSub(mobl.domBind(node205, 'change', val88));
      }
      
      var val89 = onkeyup.get();
      if(val89 !== null) {
        subs__.addSub(mobl.domBind(node205, 'keyup', val89));
      }
      
      var val90 = function(event, callback) {
>>>>>>> upstream/master
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
<<<<<<< HEAD
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node20, 'blur', val21));
      }
      
      node18.append(node20);
=======
      if(val90 !== null) {
        subs__.addSub(mobl.domBind(node205, 'blur', val90));
      }
      
      node203.append(node205);
>>>>>>> upstream/master
      
      
    }
  };
<<<<<<< HEAD
  renderCond3();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond3();
  }));
  
  callback(root29); return subs__;
=======
  renderCond55();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond55();
  }));
  
  callback(root1158); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1161 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes962 = $("<span>");
  root1161.append(nodes962);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1162 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1162); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes962;
    nodes962 = node.contents();
    oldNodes.replaceWith(nodes962);
  }));
  callback(root1161); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1163 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes963 = $("<span>");
  root1163.append(nodes963);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1164 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1164); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes963;
    nodes963 = node.contents();
    oldNodes.replaceWith(nodes963);
  }));
  callback(root1163); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root36 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node21 = $("<span>");
  root36.append(node21);
  var condSubs4 = new mobl.CompSubscription();
  subs__.addSub(condSubs4);
  var oldValue4;
  var renderCond4 = function() {
    var value20 = label.get();
    if(oldValue4 === value20) return;
    oldValue4 = value20;
    var subs__ = condSubs4;
    subs__.unsubscribe();
    node21.empty();
    if(value20) {
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
=======
  var root1165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node206 = $("<span>");
  root1165.append(node206);
  var condSubs56 = new mobl.CompSubscription();
  subs__.addSub(condSubs56);
  var oldValue56;
  var renderCond56 = function() {
    var value104 = label.get();
    if(oldValue56 === value104) return;
    oldValue56 = value104;
    var subs__ = condSubs56;
    subs__.unsubscribe();
    node206.empty();
    if(value104) {
      var nodes964 = $("<span>");
      node206.append(nodes964);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root1166 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1166); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes964;
        nodes964 = node.contents();
        oldNodes.replaceWith(nodes964);
>>>>>>> upstream/master
      }));
      
      
    } else {
      
    }
  };
<<<<<<< HEAD
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
=======
  renderCond56();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond56();
  }));
  
  
  var node207 = $("<input>");
  node207.attr('type', "range");
  
  var ref183 = n;
  node207.val(""+ref183.get());
  var ignore35 = false;
  subs__.addSub(ref183.addEventListener('change', function(_, ref, val) {
    if(ignore35) return;
    node207.val(""+val);
  }));
  subs__.addSub(ref183.rebind());
  
  subs__.addSub(mobl.domBind(node207, 'keyup change', function() {
    ignore35 = true;
    n.set(mobl.stringTomobl__Num(node207.val()));
    ignore35 = false;
  }));
  
  
  var ref184 = min;
  if(ref184.get() !== null) {
    node207.attr('min', ref184.get());
    subs__.addSub(ref184.addEventListener('change', function(_, ref, val) {
      node207.attr('min', val);
    }));
    
  }
  subs__.addSub(ref184.rebind());
  
  var ref185 = max;
  if(ref185.get() !== null) {
    node207.attr('max', ref185.get());
    subs__.addSub(ref185.addEventListener('change', function(_, ref, val) {
      node207.attr('max', val);
    }));
    
  }
  subs__.addSub(ref185.rebind());
  
  var ref186 = step;
  if(ref186.get() !== null) {
    node207.attr('step', ref186.get());
    subs__.addSub(ref186.addEventListener('change', function(_, ref, val) {
      node207.attr('step', val);
    }));
    
  }
  subs__.addSub(ref186.rebind());
  node207.attr('style', "width: 99%;");
  
  var val91 = onchange.get();
  if(val91 !== null) {
    subs__.addSub(mobl.domBind(node207, 'change', val91));
  }
  
  var val92 = onkeyup.get();
  if(val92 !== null) {
    subs__.addSub(mobl.domBind(node207, 'keyup', val92));
  }
  
  var ref187 = placeholder;
  if(ref187.get() !== null) {
    node207.attr('placeholder', ref187.get());
    subs__.addSub(ref187.addEventListener('change', function(_, ref, val) {
      node207.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref187.rebind());
  
  root1165.append(node207);
  callback(root1165); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root38 = $("<span>");
=======
  var root1167 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
<<<<<<< HEAD
    function after7(result__) {
      var tmp51 = result__;
      var result__ = tmp51;
=======
    function after25(result__) {
      var tmp713 = result__;
      var result__ = tmp713;
>>>>>>> upstream/master
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
<<<<<<< HEAD
    var result__ = validator.get()(n2, after7);if(result__ !== undefined) after7(result__);
=======
    var result__ = validator.get()(n2, after25);if(result__ !== undefined) after25(result__);
>>>>>>> upstream/master
  };
  
  
  
  var s = mobl.ref("" + n.get());
<<<<<<< HEAD
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
=======
  var nodes965 = $("<span>");
  root1167.append(nodes965);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root1168 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1168); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes965;
    nodes965 = node.contents();
    oldNodes.replaceWith(nodes965);
  }));
  callback(root1167); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root40 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node23 = $("<span>");
  root40.append(node23);
  var condSubs5 = new mobl.CompSubscription();
  subs__.addSub(condSubs5);
  var oldValue5;
  var renderCond5 = function() {
    var value21 = label.get();
    if(oldValue5 === value21) return;
    oldValue5 = value21;
    var subs__ = condSubs5;
    subs__.unsubscribe();
    node23.empty();
    if(value21) {
      
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
=======
  var root1169 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node208 = $("<span>");
  root1169.append(node208);
  var condSubs57 = new mobl.CompSubscription();
  subs__.addSub(condSubs57);
  var oldValue57;
  var renderCond57 = function() {
    var value105 = label.get();
    if(oldValue57 === value105) return;
    oldValue57 = value105;
    var subs__ = condSubs57;
    subs__.unsubscribe();
    node208.empty();
    if(value105) {
      
      var node209 = $("<span>");
      node209.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref191 = label;
      node209.text(""+ref191.get());
      var ignore37 = false;
      subs__.addSub(ref191.addEventListener('change', function(_, ref, val) {
        if(ignore37) return;
        node209.text(""+val);
      }));
      subs__.addSub(ref191.rebind());
      
      
      node208.append(node209);
      
      var node210 = $("<span>");
      node210.attr('style', "float: left");
      
      
      var node211 = $("<input>");
      node211.attr('type', "password");
      
      var ref188 = style;
      if(ref188.get() !== null) {
        node211.attr('class', ref188.get());
        subs__.addSub(ref188.addEventListener('change', function(_, ref, val) {
          node211.attr('class', val);
        }));
        
      }
      subs__.addSub(ref188.rebind());
      
      var ref189 = placeholder;
      if(ref189.get() !== null) {
        node211.attr('placeholder', ref189.get());
        subs__.addSub(ref189.addEventListener('change', function(_, ref, val) {
          node211.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref189.rebind());
      
      var ref190 = s;
      node211.val(""+ref190.get());
      var ignore36 = false;
      subs__.addSub(ref190.addEventListener('change', function(_, ref, val) {
        if(ignore36) return;
        node211.val(""+val);
      }));
      subs__.addSub(ref190.rebind());
      
      subs__.addSub(mobl.domBind(node211, 'keyup change', function() {
        ignore36 = true;
        s.set(mobl.stringTomobl__String(node211.val()));
        ignore36 = false;
      }));
      
      
      var val93 = onchange.get();
      if(val93 !== null) {
        subs__.addSub(mobl.domBind(node211, 'change', val93));
      }
      
      var val94 = onkeyup.get();
      if(val94 !== null) {
        subs__.addSub(mobl.domBind(node211, 'keyup', val94));
      }
      
      var val95 = function(event, callback) {
>>>>>>> upstream/master
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
<<<<<<< HEAD
      if(val26 !== null) {
        subs__.addSub(mobl.domBind(node26, 'blur', val26));
      }
      
      node25.append(node26);
      node23.append(node25);
=======
      if(val95 !== null) {
        subs__.addSub(mobl.domBind(node211, 'blur', val95));
      }
      
      node210.append(node211);
      node208.append(node210);
>>>>>>> upstream/master
      
      
      
      
    } else {
      
<<<<<<< HEAD
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
=======
      var node212 = $("<input>");
      node212.attr('type', "password");
      
      var ref192 = style;
      if(ref192.get() !== null) {
        node212.attr('class', ref192.get());
        subs__.addSub(ref192.addEventListener('change', function(_, ref, val) {
          node212.attr('class', val);
        }));
        
      }
      subs__.addSub(ref192.rebind());
      
      var ref193 = placeholder;
      if(ref193.get() !== null) {
        node212.attr('placeholder', ref193.get());
        subs__.addSub(ref193.addEventListener('change', function(_, ref, val) {
          node212.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref193.rebind());
      
      var ref194 = s;
      node212.val(""+ref194.get());
      var ignore38 = false;
      subs__.addSub(ref194.addEventListener('change', function(_, ref, val) {
        if(ignore38) return;
        node212.val(""+val);
      }));
      subs__.addSub(ref194.rebind());
      
      subs__.addSub(mobl.domBind(node212, 'keyup change', function() {
        ignore38 = true;
        s.set(mobl.stringTomobl__String(node212.val()));
        ignore38 = false;
      }));
      
      
      var val96 = onchange.get();
      if(val96 !== null) {
        subs__.addSub(mobl.domBind(node212, 'change', val96));
      }
      
      var val97 = onkeyup.get();
      if(val97 !== null) {
        subs__.addSub(mobl.domBind(node212, 'keyup', val97));
      }
      
      var val98 = function(event, callback) {
>>>>>>> upstream/master
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
<<<<<<< HEAD
      if(val29 !== null) {
        subs__.addSub(mobl.domBind(node27, 'blur', val29));
      }
      
      node23.append(node27);
=======
      if(val98 !== null) {
        subs__.addSub(mobl.domBind(node212, 'blur', val98));
      }
      
      node208.append(node212);
>>>>>>> upstream/master
      
      
    }
  };
<<<<<<< HEAD
  renderCond5();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond5();
  }));
  
  callback(root40); return subs__;
=======
  renderCond57();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond57();
  }));
  
  callback(root1169); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
<<<<<<< HEAD
  var root41 = $("<span>");
=======
  var root1170 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
<<<<<<< HEAD
  var ref52 = style;
  if(ref52.get() !== null) {
    sel.attr('class', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
=======
  var ref199 = style;
  if(ref199.get() !== null) {
    sel.attr('class', ref199.get());
    subs__.addSub(ref199.addEventListener('change', function(_, ref, val) {
>>>>>>> upstream/master
      sel.attr('class', val);
    }));
    
  }
<<<<<<< HEAD
  subs__.addSub(ref52.rebind());
  
  var val30 = function(event, callback) {
=======
  subs__.addSub(ref199.rebind());
  
  var val99 = function(event, callback) {
>>>>>>> upstream/master
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
<<<<<<< HEAD
                  function after8(result__) {
                    var tmp53 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after8);if(result__ !== undefined) after8(result__);
=======
                  function after26(result__) {
                    var tmp715 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after26);if(result__ !== undefined) after26(result__);
>>>>>>> upstream/master
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
<<<<<<< HEAD
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
      for(var i2 = 0; i2 < results0.length; i2++) {
        (function() {
          var iternode0 = $("<span>");
          node28.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i2), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i2), "_2");
          
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
=======
  if(val99 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val99));
  }
  
  
  var node213 = mobl.loadingSpan();
  sel.append(node213);
  var list22;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList22 = function() {
    var subs__ = listSubs__;
    list22 = options.get();
    list22.list(function(results22) {
      node213.empty();
      for(var i110 = 0; i110 < results22.length; i110++) {
        (function() {
          var iternode22 = $("<span>");
          node213.append(iternode22);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results22), i110), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results22), i110), "_2");
          
          var node214 = $("<option>");
          
          var ref195 = optionDescription;
          node214.text(""+ref195.get());
          var ignore39 = false;
          subs__.addSub(ref195.addEventListener('change', function(_, ref, val) {
            if(ignore39) return;
            node214.text(""+val);
          }));
          subs__.addSub(ref195.rebind());
          
          
          var ref196 = optionStyle;
          if(ref196.get() !== null) {
            node214.attr('class', ref196.get());
            subs__.addSub(ref196.addEventListener('change', function(_, ref, val) {
              node214.attr('class', val);
            }));
            
          }
          subs__.addSub(ref196.rebind());
          
          var ref197 = optionValue;
          if(ref197.get() !== null) {
            node214.attr('value', ref197.get());
            subs__.addSub(ref197.addEventListener('change', function(_, ref, val) {
              node214.attr('value', val);
            }));
            
          }
          subs__.addSub(ref197.rebind());
          
          var ref198 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref198.get() !== null) {
            node214.attr('selected', ref198.get());
            subs__.addSub(ref198.addEventListener('change', function(_, ref, val) {
              node214.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node214.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node214.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref198.rebind());
          
          iternode22.append(node214);
          
          var oldNodes = iternode22;
          iternode22 = iternode22.contents();
          oldNodes.replaceWith(iternode22);
>>>>>>> upstream/master
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
<<<<<<< HEAD
      subs__.addSub(list0.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
    });
  };
  renderList0();
  
  root41.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root41); return subs__;
=======
      subs__.addSub(list22.addEventListener('change', function() { listSubs__.unsubscribe(); renderList22(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList22(true); }));
    });
  };
  renderList22();
  
  root1170.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root1170); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
<<<<<<< HEAD
  var root42 = $("<span>");
=======
  var root1171 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
<<<<<<< HEAD
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
          for(var i3 = 0; i3 < results1.length; i3++) {
            (function() {
              var iternode1 = $("<span>");
              node30.append(iternode1);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1), i3), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i3), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i3), "_3");
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
=======
    var nodes966 = $("<span>");
    root1171.append(nodes966);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node215 = mobl.loadingSpan();
      root1172.append(node215);
      var list23;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList23 = function() {
        var subs__ = listSubs__;
        list23 = tabs.get();
        list23.list(function(results23) {
          node215.empty();
          for(var i111 = 0; i111 < results23.length; i111++) {
            (function() {
              var iternode23 = $("<span>");
              node215.append(iternode23);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results23), i111), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results23), i111), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results23), i111), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp671 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp671.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp671.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp671.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp671.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
>>>>>>> upstream/master
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
<<<<<<< HEAD
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
=======
              var tmp670 = mobl.ref(result__);
              
              var nodes967 = $("<span>");
              iternode23.append(nodes967);
              subs__.addSub((mobl.span)(tmp671, mobl.ref(null), tmp670, mobl.ref(null), function(_, callback) {
                var root1173 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes968 = $("<span>");
                root1173.append(nodes968);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root1174 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1174); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes968;
                  nodes968 = node.contents();
                  oldNodes.replaceWith(nodes968);
                }));
                callback(root1173); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes967;
                nodes967 = node.contents();
                oldNodes.replaceWith(nodes967);
              }));
              
              var oldNodes = iternode23;
              iternode23 = iternode23.contents();
              oldNodes.replaceWith(iternode23);
>>>>>>> upstream/master
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
        for(var i4 = 0; i4 < results2.length; i4++) {
          (function() {
            var iternode2 = $("<span>");
            node31.append(iternode2);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2), i4), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i4), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i4), "_3");
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
=======
          subs__.addSub(list23.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
        });
      };
      renderList23();
      
      callback(root1172); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes966;
      nodes966 = node.contents();
      oldNodes.replaceWith(nodes966);
    }));
    
    var node216 = mobl.loadingSpan();
    root1171.append(node216);
    var list24;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList24 = function() {
      var subs__ = listSubs__;
      list24 = tabs.get();
      list24.list(function(results24) {
        node216.empty();
        for(var i112 = 0; i112 < results24.length; i112++) {
          (function() {
            var iternode24 = $("<span>");
            node216.append(iternode24);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results24), i112), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results24), i112), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results24), i112), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp672 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp672.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp672.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp672.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp672.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes969 = $("<span>");
            iternode24.append(nodes969);
            subs__.addSub((mobl.block)(tmp672, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1175 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes970 = $("<span>");
              root1175.append(nodes970);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root1176 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes971 = $("<span>");
                root1176.append(nodes971);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl68();
                }));
                
                function renderControl68() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root1177 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1177); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes971;
                    nodes971 = node.contents();
                    oldNodes.replaceWith(nodes971);
                  }));
                }
                renderControl68();
                callback(root1176); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes970;
                nodes970 = node.contents();
                oldNodes.replaceWith(nodes970);
              }));
              callback(root1175); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes969;
              nodes969 = node.contents();
              oldNodes.replaceWith(nodes969);
            }));
            
            var oldNodes = iternode24;
            iternode24 = iternode24.contents();
            oldNodes.replaceWith(iternode24);
>>>>>>> upstream/master
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
        subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
      });
    };
    renderList2();
    
    callback(root42); return subs__;
=======
        subs__.addSub(list24.addEventListener('change', function() { listSubs__.unsubscribe(); renderList24(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList24(true); }));
      });
    };
    renderList24();
    
    callback(root1171); return subs__;
>>>>>>> upstream/master
    
    
  } else {
    {
      
      var s = mobl.ref("");
<<<<<<< HEAD
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
            for(var i3 = 0; i3 < results1.length; i3++) {
              (function() {
                var iternode1 = $("<span>");
                node30.append(iternode1);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results1), i3), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i3), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i3), "_3");
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
=======
      var nodes966 = $("<span>");
      root1171.append(nodes966);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1172 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node215 = mobl.loadingSpan();
        root1172.append(node215);
        var list23;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList23 = function() {
          var subs__ = listSubs__;
          list23 = tabs.get();
          list23.list(function(results23) {
            node215.empty();
            for(var i111 = 0; i111 < results23.length; i111++) {
              (function() {
                var iternode23 = $("<span>");
                node215.append(iternode23);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results23), i111), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results23), i111), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results23), i111), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp671 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp671.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp671.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp671.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp671.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
>>>>>>> upstream/master
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
<<<<<<< HEAD
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
=======
                var tmp670 = mobl.ref(result__);
                
                var nodes967 = $("<span>");
                iternode23.append(nodes967);
                subs__.addSub((mobl.span)(tmp671, mobl.ref(null), tmp670, mobl.ref(null), function(_, callback) {
                  var root1173 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes968 = $("<span>");
                  root1173.append(nodes968);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root1174 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root1174); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes968;
                    nodes968 = node.contents();
                    oldNodes.replaceWith(nodes968);
                  }));
                  callback(root1173); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes967;
                  nodes967 = node.contents();
                  oldNodes.replaceWith(nodes967);
                }));
                
                var oldNodes = iternode23;
                iternode23 = iternode23.contents();
                oldNodes.replaceWith(iternode23);
>>>>>>> upstream/master
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
          for(var i4 = 0; i4 < results2.length; i4++) {
            (function() {
              var iternode2 = $("<span>");
              node31.append(iternode2);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results2), i4), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i4), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i4), "_3");
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
=======
            subs__.addSub(list23.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
          });
        };
        renderList23();
        
        callback(root1172); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes966;
        nodes966 = node.contents();
        oldNodes.replaceWith(nodes966);
      }));
      
      var node216 = mobl.loadingSpan();
      root1171.append(node216);
      var list24;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList24 = function() {
        var subs__ = listSubs__;
        list24 = tabs.get();
        list24.list(function(results24) {
          node216.empty();
          for(var i112 = 0; i112 < results24.length; i112++) {
            (function() {
              var iternode24 = $("<span>");
              node216.append(iternode24);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results24), i112), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results24), i112), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results24), i112), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp672 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp672.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp672.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp672.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp672.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes969 = $("<span>");
              iternode24.append(nodes969);
              subs__.addSub((mobl.block)(tmp672, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1175 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes970 = $("<span>");
                root1175.append(nodes970);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root1176 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes971 = $("<span>");
                  root1176.append(nodes971);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl68();
                  }));
                  
                  function renderControl68() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root1177 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1177); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes971;
                      nodes971 = node.contents();
                      oldNodes.replaceWith(nodes971);
                    }));
                  }
                  renderControl68();
                  callback(root1176); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes970;
                  nodes970 = node.contents();
                  oldNodes.replaceWith(nodes970);
                }));
                callback(root1175); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes969;
                nodes969 = node.contents();
                oldNodes.replaceWith(nodes969);
              }));
              
              var oldNodes = iternode24;
              iternode24 = iternode24.contents();
              oldNodes.replaceWith(iternode24);
>>>>>>> upstream/master
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
<<<<<<< HEAD
          subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
        });
      };
      renderList2();
      
      callback(root42); return subs__;
=======
          subs__.addSub(list24.addEventListener('change', function() { listSubs__.unsubscribe(); renderList24(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList24(true); }));
        });
      };
      renderList24();
      
      callback(root1171); return subs__;
>>>>>>> upstream/master
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1178 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node217 = $("<div>");
  
  var ref203 = mobl.ref(ui.searchboxStyle);
  if(ref203.get() !== null) {
    node217.attr('class', ref203.get());
    subs__.addSub(ref203.addEventListener('change', function(_, ref, val) {
      node217.attr('class', val);
    }));
    
  }
  subs__.addSub(ref203.rebind());
  
  
  var node218 = $("<input>");
  node218.attr('type', "search");
  
  var ref200 = mobl.ref(ui.searchBoxInputStyle);
  if(ref200.get() !== null) {
    node218.attr('class', ref200.get());
    subs__.addSub(ref200.addEventListener('change', function(_, ref, val) {
      node218.attr('class', val);
    }));
    
  }
  subs__.addSub(ref200.rebind());
  
  var ref201 = placeholder;
  if(ref201.get() !== null) {
    node218.attr('placeholder', ref201.get());
    subs__.addSub(ref201.addEventListener('change', function(_, ref, val) {
      node218.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref201.rebind());
  
  var ref202 = s;
  node218.val(""+ref202.get());
  var ignore40 = false;
  subs__.addSub(ref202.addEventListener('change', function(_, ref, val) {
    if(ignore40) return;
    node218.val(""+val);
  }));
  subs__.addSub(ref202.rebind());
  
  subs__.addSub(mobl.domBind(node218, 'keyup change', function() {
    ignore40 = true;
    s.set(mobl.stringTomobl__String(node218.val()));
    ignore40 = false;
  }));
  
  
  var val100 = onsearch.get();
  if(val100 !== null) {
    subs__.addSub(mobl.domBind(node218, 'change', val100));
  }
  
  var val101 = onkeyup.get();
  if(val101 !== null) {
    subs__.addSub(mobl.domBind(node218, 'keyup', val101));
  }
  node218.attr('autocorrect', false);
  node218.attr('autocapitalize', false);
  node218.attr('autocomplete', false);
  
  node217.append(node218);
  root1178.append(node217);
  callback(root1178); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
<<<<<<< HEAD
  var root50 = $("<span>");
=======
  var root1179 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
<<<<<<< HEAD
  var ref57 = mobl.ref(ui.contextMenuStyle);
  if(ref57.get() !== null) {
    menu.attr('class', ref57.get());
    subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
=======
  var ref204 = mobl.ref(ui.contextMenuStyle);
  if(ref204.get() !== null) {
    menu.attr('class', ref204.get());
    subs__.addSub(ref204.addEventListener('change', function(_, ref, val) {
>>>>>>> upstream/master
      menu.attr('class', val);
    }));
    
  }
<<<<<<< HEAD
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
=======
  subs__.addSub(ref204.rebind());
  
  var nodes972 = $("<span>");
  menu.append(nodes972);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl69();
  }));
  
  function renderControl69() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1180 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1180); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes972;
      nodes972 = node.contents();
      oldNodes.replaceWith(nodes972);
    }));
  }
  renderControl69();
  root1179.append(menu);
>>>>>>> upstream/master
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
<<<<<<< HEAD
  var val33 = function(event, callback) {
=======
  var val102 = function(event, callback) {
>>>>>>> upstream/master
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
<<<<<<< HEAD
                  var tmp56 = result__;
=======
                  var tmp718 = result__;
>>>>>>> upstream/master
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
<<<<<<< HEAD
  if(val33 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val33));
  }
  
  root50.append(img);
=======
  if(val102 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val102));
  }
  
  root1179.append(img);
>>>>>>> upstream/master
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
<<<<<<< HEAD
  callback(root50); return subs__;
=======
  callback(root1179); return subs__;
>>>>>>> upstream/master
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
<<<<<<< HEAD
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
    var value22 = tmp38.get();
    if(oldValue6 === value22) return;
    oldValue6 = value22;
    var subs__ = condSubs6;
    subs__.unsubscribe();
    node34.empty();
    if(value22) {
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
              for(var i5 = 0; i5 < results3.length; i5++) {
                (function() {
                  var iternode3 = $("<span>");
                  node39.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i5);
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
                    var value24 = tmp11.get();
                    if(oldValue8 === value24) return;
                    oldValue8 = value24;
                    var subs__ = condSubs8;
                    subs__.unsubscribe();
                    node40.empty();
                    if(value24) {
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
=======
  var root1181 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp702 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp702.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node219 = $("<span>");
  root1181.append(node219);
  var condSubs58 = new mobl.CompSubscription();
  subs__.addSub(condSubs58);
  var oldValue58;
  var renderCond58 = function() {
    var value106 = tmp702.get();
    if(oldValue58 === value106) return;
    oldValue58 = value106;
    var subs__ = condSubs58;
    subs__.unsubscribe();
    node219.empty();
    if(value106) {
      items.get().one(function(result__) {
        var tmp719 = result__;
        var current = mobl.ref(result__);
        
        var node220 = $("<div>");
        node220.attr('width', "100%");
        
        
        var node221 = $("<div>");
        node221.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes975 = $("<span>");
        node221.append(nodes975);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1184 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node224 = mobl.loadingSpan();
          root1184.append(node224);
          var list25;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList25 = function() {
            var subs__ = listSubs__;
            list25 = items.get();
            list25.list(function(results25) {
              node224.empty();
              for(var i113 = 0; i113 < results25.length; i113++) {
                (function() {
                  var iternode25 = $("<span>");
                  node224.append(iternode25);
                  var it;
                  it = mobl.ref(mobl.ref(results25), i113);
                  var result__ = it.get() == current.get();
                  var tmp678 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp678.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp678.set(it.get() == current.get());
                  }));
                  
                  
                  var node225 = $("<span>");
                  iternode25.append(node225);
                  var condSubs60 = new mobl.CompSubscription();
                  subs__.addSub(condSubs60);
                  var oldValue60;
                  var renderCond60 = function() {
                    var value108 = tmp678.get();
                    if(oldValue60 === value108) return;
                    oldValue60 = value108;
                    var subs__ = condSubs60;
                    subs__.unsubscribe();
                    node225.empty();
                    if(value108) {
                      var nodes976 = $("<span>");
                      node225.append(nodes976);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1185 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes977 = $("<span>");
                        root1185.append(nodes977);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl71();
                        }));
                        
                        function renderControl71() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1186 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1186); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes977;
                            nodes977 = node.contents();
                            oldNodes.replaceWith(nodes977);
                          }));
                        }
                        renderControl71();
                        callback(root1185); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes976;
                        nodes976 = node.contents();
                        oldNodes.replaceWith(nodes976);
>>>>>>> upstream/master
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
<<<<<<< HEAD
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
=======
                      var tmp677 = mobl.ref(result__);
                      
                      var nodes978 = $("<span>");
                      node225.append(nodes978);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp677, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1187 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes979 = $("<span>");
                        root1187.append(nodes979);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl72();
                        }));
                        
                        function renderControl72() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root1188 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root1188); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes979;
                            nodes979 = node.contents();
                            oldNodes.replaceWith(nodes979);
                          }));
                        }
                        renderControl72();
                        callback(root1187); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes978;
                        nodes978 = node.contents();
                        oldNodes.replaceWith(nodes978);
>>>>>>> upstream/master
                      }));
                      
                      
                    }
                  };
<<<<<<< HEAD
                  renderCond8();
                  subs__.addSub(tmp11.addEventListener('change', function() {
                    renderCond8();
                  }));
                  
                  
                  var oldNodes = iternode3;
                  iternode3 = iternode3.contents();
                  oldNodes.replaceWith(iternode3);
=======
                  renderCond60();
                  subs__.addSub(tmp678.addEventListener('change', function() {
                    renderCond60();
                  }));
                  
                  
                  var oldNodes = iternode25;
                  iternode25 = iternode25.contents();
                  oldNodes.replaceWith(iternode25);
>>>>>>> upstream/master
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
          var value23 = current.get();
          if(oldValue7 === value23) return;
          oldValue7 = value23;
          var subs__ = condSubs7;
          subs__.unsubscribe();
          node38.empty();
          if(value23) {
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
=======
              subs__.addSub(list25.addEventListener('change', function() { listSubs__.unsubscribe(); renderList25(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList25(true); }));
            });
          };
          renderList25();
          
          callback(root1184); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes975;
          nodes975 = node.contents();
          oldNodes.replaceWith(nodes975);
        }));
        node220.append(node221);
        
        var node222 = $("<div>");
        node222.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node223 = $("<span>");
        node222.append(node223);
        var condSubs59 = new mobl.CompSubscription();
        subs__.addSub(condSubs59);
        var oldValue59;
        var renderCond59 = function() {
          var value107 = current.get();
          if(oldValue59 === value107) return;
          oldValue59 = value107;
          var subs__ = condSubs59;
          subs__.unsubscribe();
          node223.empty();
          if(value107) {
            var nodes973 = $("<span>");
            node223.append(nodes973);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl70();
            }));
            
            function renderControl70() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1182 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1182); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes973;
                nodes973 = node.contents();
                oldNodes.replaceWith(nodes973);
              }));
            }
            renderControl70();
>>>>>>> upstream/master
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
<<<<<<< HEAD
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
=======
            var tmp679 = mobl.ref(result__);
            
            var nodes974 = $("<span>");
            node223.append(nodes974);
            subs__.addSub((mobl.label)(tmp679, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1183 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1183); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes974;
              nodes974 = node.contents();
              oldNodes.replaceWith(nodes974);
>>>>>>> upstream/master
            }));
            
            
          }
        };
<<<<<<< HEAD
        renderCond7();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond7();
        }));
        
        node35.append(node37);
        node34.append(node35);
=======
        renderCond59();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond59();
        }));
        
        node220.append(node222);
        node219.append(node220);
>>>>>>> upstream/master
        
        
        
        
        
        
      });
    } else {
<<<<<<< HEAD
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
            for(var i6 = 0; i6 < results4.length; i6++) {
              (function() {
                var iternode4 = $("<span>");
                node41.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i6);
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
=======
      var nodes980 = $("<span>");
      node219.append(nodes980);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1189 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node226 = mobl.loadingSpan();
        root1189.append(node226);
        var list26;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList26 = function() {
          var subs__ = listSubs__;
          list26 = items.get();
          list26.list(function(results26) {
            node226.empty();
            for(var i114 = 0; i114 < results26.length; i114++) {
              (function() {
                var iternode26 = $("<span>");
                node226.append(iternode26);
                var it;
                it = mobl.ref(mobl.ref(results26), i114);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp720 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp673 = mobl.ref(result__);
                
                var nodes981 = $("<span>");
                iternode26.append(nodes981);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp673, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1190 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes982 = $("<span>");
                  root1190.append(nodes982);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl73();
                  }));
                  
                  function renderControl73() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root1191 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1191); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes982;
                      nodes982 = node.contents();
                      oldNodes.replaceWith(nodes982);
                    }));
                  }
                  renderControl73();
                  callback(root1190); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes981;
                  nodes981 = node.contents();
                  oldNodes.replaceWith(nodes981);
                }));
                
                var oldNodes = iternode26;
                iternode26 = iternode26.contents();
                oldNodes.replaceWith(iternode26);
>>>>>>> upstream/master
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
=======
            subs__.addSub(list26.addEventListener('change', function() { listSubs__.unsubscribe(); renderList26(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList26(true); }));
          });
        };
        renderList26();
        
        callback(root1189); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes980;
        nodes980 = node.contents();
        oldNodes.replaceWith(nodes980);
>>>>>>> upstream/master
      }));
      
      
    }
  };
<<<<<<< HEAD
  renderCond6();
  subs__.addSub(tmp38.addEventListener('change', function() {
    renderCond6();
  }));
  
  callback(root52); return subs__;
=======
  renderCond58();
  subs__.addSub(tmp702.addEventListener('change', function() {
    renderCond58();
  }));
  
  callback(root1181); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
<<<<<<< HEAD
  var root63 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp8 = mobl.ref(result__);
  
  var nodes36 = $("<span>");
  root63.append(nodes36);
  subs__.addSub((ui.header)(tmp8, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root64 = $("<span>");
=======
  var root1192 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp676 = mobl.ref(result__);
  
  var nodes983 = $("<span>");
  root1192.append(nodes983);
  subs__.addSub((ui.header)(tmp676, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1193 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp675 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp674 = mobl.ref(result__);
    
    var nodes984 = $("<span>");
    root1193.append(nodes984);
    subs__.addSub((ui.backButton)(tmp674, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp675, function(_, callback) {
      var root1194 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1194); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes984;
      nodes984 = node.contents();
      oldNodes.replaceWith(nodes984);
    }));
    callback(root1193); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes983;
    nodes983 = node.contents();
    oldNodes.replaceWith(nodes983);
  }));
  var nodes985 = $("<span>");
  root1192.append(nodes985);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl74();
  }));
  
  function renderControl74() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1195); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes985;
      nodes985 = node.contents();
      oldNodes.replaceWith(nodes985);
    }));
  }
  renderControl74();
  callback(root1192); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
<<<<<<< HEAD
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
        for(var i7 = 0; i7 < results5.length; i7++) {
          (function() {
            var iternode5 = $("<span>");
            node42.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i7);
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
              var value25 = tmp14.get();
              if(oldValue9 === value25) return;
              oldValue9 = value25;
              var subs__ = condSubs9;
              subs__.unsubscribe();
              node43.empty();
              if(value25) {
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
=======
  var root1196 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes986 = $("<span>");
  root1196.append(nodes986);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1197 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node227 = mobl.loadingSpan();
    root1197.append(node227);
    var list27;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList27 = function() {
      var subs__ = listSubs__;
      list27 = coll.get();
      list27.list(function(results27) {
        node227.empty();
        for(var i115 = 0; i115 < results27.length; i115++) {
          (function() {
            var iternode27 = $("<span>");
            node227.append(iternode27);
            var it;
            it = mobl.ref(mobl.ref(results27), i115);
            var result__ = it.get() == selected.get();
            var tmp681 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp681.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp681.set(it.get() == selected.get());
            }));
            
            
            var node228 = $("<span>");
            iternode27.append(node228);
            var condSubs61 = new mobl.CompSubscription();
            subs__.addSub(condSubs61);
            var oldValue61;
            var renderCond61 = function() {
              var value109 = tmp681.get();
              if(oldValue61 === value109) return;
              oldValue61 = value109;
              var subs__ = condSubs61;
              subs__.unsubscribe();
              node228.empty();
              if(value109) {
                var nodes987 = $("<span>");
                node228.append(nodes987);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1198 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes988 = $("<span>");
                  root1198.append(nodes988);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl75();
                  }));
                  
                  function renderControl75() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root1199 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1199); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes988;
                      nodes988 = node.contents();
                      oldNodes.replaceWith(nodes988);
                    }));
                  }
                  renderControl75();
                  callback(root1198); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes987;
                  nodes987 = node.contents();
                  oldNodes.replaceWith(nodes987);
>>>>>>> upstream/master
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
<<<<<<< HEAD
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
=======
                var tmp680 = mobl.ref(result__);
                
                var nodes989 = $("<span>");
                node228.append(nodes989);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp680, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root1200 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes990 = $("<span>");
                  root1200.append(nodes990);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl76();
                  }));
                  
                  function renderControl76() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root1201 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root1201); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes990;
                      nodes990 = node.contents();
                      oldNodes.replaceWith(nodes990);
                    }));
                  }
                  renderControl76();
                  callback(root1200); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes989;
                  nodes989 = node.contents();
                  oldNodes.replaceWith(nodes989);
>>>>>>> upstream/master
                }));
                
                
              }
            };
<<<<<<< HEAD
            renderCond9();
            subs__.addSub(tmp14.addEventListener('change', function() {
              renderCond9();
            }));
            
            
            var oldNodes = iternode5;
            iternode5 = iternode5.contents();
            oldNodes.replaceWith(iternode5);
=======
            renderCond61();
            subs__.addSub(tmp681.addEventListener('change', function() {
              renderCond61();
            }));
            
            
            var oldNodes = iternode27;
            iternode27 = iternode27.contents();
            oldNodes.replaceWith(iternode27);
>>>>>>> upstream/master
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
=======
        subs__.addSub(list27.addEventListener('change', function() { listSubs__.unsubscribe(); renderList27(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList27(true); }));
      });
    };
    renderList27();
    
    callback(root1197); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes986;
    nodes986 = node.contents();
    oldNodes.replaceWith(nodes986);
  }));
  callback(root1196); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
<<<<<<< HEAD
  var root73 = $("<span>");
=======
  var root1202 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
<<<<<<< HEAD
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
        for(var i8 = 0; i8 < results6.length; i8++) {
          (function() {
            var iternode6 = $("<span>");
            node44.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i8);
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
=======
    var tmp721 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp682 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp682.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp682.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp682.set(coll.get().limit(n.get()));
    }));
    
    
    var node229 = mobl.loadingSpan();
    root1202.append(node229);
    var list28;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList28 = function() {
      var subs__ = listSubs__;
      list28 = tmp682.get();
      list28.list(function(results28) {
        node229.empty();
        for(var i116 = 0; i116 < results28.length; i116++) {
          (function() {
            var iternode28 = $("<span>");
            node229.append(iternode28);
            var it;
            it = mobl.ref(mobl.ref(results28), i116);
            var nodes991 = $("<span>");
            iternode28.append(nodes991);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl77();
            }));
            
            function renderControl77() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root1203 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1203); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes991;
                nodes991 = node.contents();
                oldNodes.replaceWith(nodes991);
              }));
            }
            renderControl77();
            
            var oldNodes = iternode28;
            iternode28 = iternode28.contents();
            oldNodes.replaceWith(iternode28);
>>>>>>> upstream/master
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
      var value26 = tmp17.get();
      if(oldValue10 === value26) return;
      oldValue10 = value26;
      var subs__ = condSubs10;
      subs__.unsubscribe();
      node45.empty();
      if(value26) {
=======
        subs__.addSub(list28.addEventListener('change', function() { listSubs__.unsubscribe(); renderList28(true); }));
        subs__.addSub(tmp682.addEventListener('change', function() { listSubs__.unsubscribe(); renderList28(true); }));
      });
    };
    renderList28();
    
    var result__ = n.get() < total.get();
    var tmp684 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp684.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp684.set(n.get() < total.get());
    }));
    
    
    var node230 = $("<span>");
    root1202.append(node230);
    var condSubs62 = new mobl.CompSubscription();
    subs__.addSub(condSubs62);
    var oldValue62;
    var renderCond62 = function() {
      var value110 = tmp684.get();
      if(oldValue62 === value110) return;
      oldValue62 = value110;
      var subs__ = condSubs62;
      subs__.unsubscribe();
      node230.empty();
      if(value110) {
>>>>>>> upstream/master
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
<<<<<<< HEAD
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
=======
        var tmp683 = mobl.ref(result__);
        
        var nodes992 = $("<span>");
        node230.append(nodes992);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp683, mobl.ref(null), function(_, callback) {
          var root1204 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes993 = $("<span>");
          root1204.append(nodes993);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1205 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1205); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes993;
            nodes993 = node.contents();
            oldNodes.replaceWith(nodes993);
          }));
          callback(root1204); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes992;
          nodes992 = node.contents();
          oldNodes.replaceWith(nodes992);
>>>>>>> upstream/master
        }));
        
        
      } else {
        
      }
    };
<<<<<<< HEAD
    renderCond10();
    subs__.addSub(tmp17.addEventListener('change', function() {
      renderCond10();
    }));
    
    callback(root73); return subs__;
=======
    renderCond62();
    subs__.addSub(tmp684.addEventListener('change', function() {
      renderCond62();
    }));
    
    callback(root1202); return subs__;
>>>>>>> upstream/master
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
<<<<<<< HEAD
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
        for(var i9 = 0; i9 < results7.length; i9++) {
          (function() {
            var iternode7 = $("<span>");
            node46.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i9), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i9), "_2");
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
=======
  var root1206 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes994 = $("<span>");
  root1206.append(nodes994);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1207 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node231 = mobl.loadingSpan();
    root1207.append(node231);
    var list29;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList29 = function() {
      var subs__ = listSubs__;
      list29 = items.get();
      list29.list(function(results29) {
        node231.empty();
        for(var i117 = 0; i117 < results29.length; i117++) {
          (function() {
            var iternode29 = $("<span>");
            node231.append(iternode29);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results29), i117), "_1");it = mobl.ref(mobl.ref(mobl.ref(results29), i117), "_2");
            var nodes995 = $("<span>");
            iternode29.append(nodes995);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root1208 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes996 = $("<span>");
              root1208.append(nodes996);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root1209 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1209); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes996;
                nodes996 = node.contents();
                oldNodes.replaceWith(nodes996);
              }));
              callback(root1208); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes995;
              nodes995 = node.contents();
              oldNodes.replaceWith(nodes995);
            }));
            
            var oldNodes = iternode29;
            iternode29 = iternode29.contents();
            oldNodes.replaceWith(iternode29);
>>>>>>> upstream/master
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
=======
        subs__.addSub(list29.addEventListener('change', function() { listSubs__.unsubscribe(); renderList29(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList29(true); }));
      });
    };
    renderList29();
    
    callback(root1207); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes994;
    nodes994 = node.contents();
    oldNodes.replaceWith(nodes994);
  }));
  callback(root1206); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
<<<<<<< HEAD
  var root81 = $("<div>");
=======
  var root1210 = $("<div>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
<<<<<<< HEAD
  coll.get().list(function(coll25) {
    coll25 = coll25.reverse();
    function processOne1() {
      var it;
      it = coll25.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll25.length > 0) processOne1(); else rest1();
      
    }
    function rest1() {
      var nodes50 = $("<span>");
      root81.append(nodes50);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root82 = $("<span>");
=======
  coll.get().list(function(coll91) {
    coll91 = coll91.reverse();
    function processOne19() {
      var it;
      it = coll91.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll91.length > 0) processOne19(); else rest19();
      
    }
    function rest19() {
      var nodes997 = $("<span>");
      root1210.append(nodes997);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root1211 = $("<span>");
>>>>>>> upstream/master
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
<<<<<<< HEAD
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
=======
        var tmp685 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp686 = mobl.ref(result__);
        
        var nodes998 = $("<span>");
        root1211.append(nodes998);
        subs__.addSub((ui.backButton)(tmp686, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp685, function(_, callback) {
          var root1212 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1212); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes998;
          nodes998 = node.contents();
          oldNodes.replaceWith(nodes998);
>>>>>>> upstream/master
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
<<<<<<< HEAD
                         items.get().list(function(coll24) {
                           coll24 = coll24.reverse();
                           function processOne0() {
                             var checked;var it;
                             var tmp62 = coll24.pop();
                             checked = tmp62._1;it = tmp62._2;
=======
                         items.get().list(function(coll90) {
                           coll90 = coll90.reverse();
                           function processOne18() {
                             var checked;var it;
                             var tmp723 = coll90.pop();
                             checked = tmp723._1;it = tmp723._2;
>>>>>>> upstream/master
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
<<<<<<< HEAD
                               if(coll24.length > 0) processOne0(); else rest0();
=======
                               if(coll90.length > 0) processOne18(); else rest18();
>>>>>>> upstream/master
                               
                             } else {
                               {
                                 
<<<<<<< HEAD
                                 if(coll24.length > 0) processOne0(); else rest0();
=======
                                 if(coll90.length > 0) processOne18(); else rest18();
>>>>>>> upstream/master
                                 
                               }
                             }
                           }
<<<<<<< HEAD
                           function rest0() {
=======
                           function rest18() {
>>>>>>> upstream/master
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
<<<<<<< HEAD
                           if(coll24.length > 0) processOne0(); else rest0();
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
=======
                           if(coll90.length > 0) processOne18(); else rest18();
                         });
                         
                       };
        var tmp687 = mobl.ref(result__);
        
        var nodes999 = $("<span>");
        root1211.append(nodes999);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp687, function(_, callback) {
          var root1213 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1213); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes999;
          nodes999 = node.contents();
          oldNodes.replaceWith(nodes999);
        }));
        callback(root1211); return subs__;
>>>>>>> upstream/master
        
        
        return subs__;
      }, function(node) {
<<<<<<< HEAD
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
    if(coll25.length > 0) processOne1(); else rest1();
=======
        var oldNodes = nodes997;
        nodes997 = node.contents();
        oldNodes.replaceWith(nodes997);
      }));
      var nodes1000 = $("<span>");
      root1210.append(nodes1000);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root1214 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1214); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1000;
        nodes1000 = node.contents();
        oldNodes.replaceWith(nodes1000);
      }));
      callback(root1210); return subs__;
      
      
    }
    if(coll91.length > 0) processOne19(); else rest19();
>>>>>>> upstream/master
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1215 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1001 = $("<span>");
  root1215.append(nodes1001);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1216 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1216); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1001;
    nodes1001 = node.contents();
    oldNodes.replaceWith(nodes1001);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp688 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp688.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp688.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp688.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp688.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp688.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1002 = $("<span>");
  root1215.append(nodes1002);
  subs__.addSub((ui.masterDetail)(tmp688, masterItem, detailItem, function(_, callback) {
    var root1217 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1217); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1002;
    nodes1002 = node.contents();
    oldNodes.replaceWith(nodes1002);
  }));
  callback(root1215); return subs__;
>>>>>>> upstream/master
  
  
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
<<<<<<< HEAD
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
        for(var i10 = 0; i10 < results8.length; i10++) {
          (function() {
            var iternode8 = $("<span>");
            node47.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i10), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i10), "_2");
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
=======
  var root1218 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1003 = $("<span>");
  root1218.append(nodes1003);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1219 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node232 = mobl.loadingSpan();
    root1219.append(node232);
    var list30;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList30 = function() {
      var subs__ = listSubs__;
      list30 = sections.get();
      list30.list(function(results30) {
        node232.empty();
        for(var i118 = 0; i118 < results30.length; i118++) {
          (function() {
            var iternode30 = $("<span>");
            node232.append(iternode30);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results30), i118), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results30), i118), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp690 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp690.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp690.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp690.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp690.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
>>>>>>> upstream/master
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
<<<<<<< HEAD
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
=======
            var tmp689 = mobl.ref(result__);
            
            var nodes1004 = $("<span>");
            iternode30.append(nodes1004);
            subs__.addSub((mobl.span)(tmp690, mobl.ref(null), tmp689, mobl.ref(null), function(_, callback) {
              var root1220 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1005 = $("<span>");
              root1220.append(nodes1005);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root1221 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1221); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1005;
                nodes1005 = node.contents();
                oldNodes.replaceWith(nodes1005);
              }));
              callback(root1220); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1004;
              nodes1004 = node.contents();
              oldNodes.replaceWith(nodes1004);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp691 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp691.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp691.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp691.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp691.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1006 = $("<span>");
            iternode30.append(nodes1006);
            subs__.addSub((mobl.block)(tmp691, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1222 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1007 = $("<span>");
              root1222.append(nodes1007);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl78();
              }));
              
              function renderControl78() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root1223 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1223); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1007;
                  nodes1007 = node.contents();
                  oldNodes.replaceWith(nodes1007);
                }));
              }
              renderControl78();
              callback(root1222); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1006;
              nodes1006 = node.contents();
              oldNodes.replaceWith(nodes1006);
            }));
            
            var oldNodes = iternode30;
            iternode30 = iternode30.contents();
            oldNodes.replaceWith(iternode30);
>>>>>>> upstream/master
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
=======
        subs__.addSub(list30.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
      });
    };
    renderList30();
    
    callback(root1219); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1003;
    nodes1003 = node.contents();
    oldNodes.replaceWith(nodes1003);
  }));
  callback(root1218); return subs__;
>>>>>>> upstream/master
  
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
<<<<<<< HEAD
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
=======
  var root1224 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node233 = $("<table>");
  
  var ref205 = style;
  if(ref205.get() !== null) {
    node233.attr('class', ref205.get());
    subs__.addSub(ref205.addEventListener('change', function(_, ref, val) {
      node233.attr('class', val);
    }));
    
  }
  subs__.addSub(ref205.rebind());
  
  var nodes1008 = $("<span>");
  node233.append(nodes1008);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl79();
  }));
  
  function renderControl79() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1225); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1008;
      nodes1008 = node.contents();
      oldNodes.replaceWith(nodes1008);
    }));
  }
  renderControl79();
  root1224.append(node233);
  callback(root1224); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1226 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node234 = $("<tr>");
  
  var ref206 = style;
  if(ref206.get() !== null) {
    node234.attr('class', ref206.get());
    subs__.addSub(ref206.addEventListener('change', function(_, ref, val) {
      node234.attr('class', val);
    }));
    
  }
  subs__.addSub(ref206.rebind());
  
  var nodes1009 = $("<span>");
  node234.append(nodes1009);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl80();
  }));
  
  function renderControl80() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1227); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1009;
      nodes1009 = node.contents();
      oldNodes.replaceWith(nodes1009);
    }));
  }
  renderControl80();
  root1226.append(node234);
  callback(root1226); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1228 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node235 = $("<td>");
  
  var ref207 = width;
  if(ref207.get() !== null) {
    node235.attr('width', ref207.get());
    subs__.addSub(ref207.addEventListener('change', function(_, ref, val) {
      node235.attr('width', val);
    }));
    
  }
  subs__.addSub(ref207.rebind());
  
  var ref208 = style;
  if(ref208.get() !== null) {
    node235.attr('class', ref208.get());
    subs__.addSub(ref208.addEventListener('change', function(_, ref, val) {
      node235.attr('class', val);
    }));
    
  }
  subs__.addSub(ref208.rebind());
  
  var nodes1010 = $("<span>");
  node235.append(nodes1010);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl81();
  }));
  
  function renderControl81() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1229); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1010;
      nodes1010 = node.contents();
      oldNodes.replaceWith(nodes1010);
    }));
  }
  renderControl81();
  root1228.append(node235);
  callback(root1228); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1230 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node236 = $("<td>");
  
  var ref209 = width;
  if(ref209.get() !== null) {
    node236.attr('width', ref209.get());
    subs__.addSub(ref209.addEventListener('change', function(_, ref, val) {
      node236.attr('width', val);
    }));
    
  }
  subs__.addSub(ref209.rebind());
  
  var ref210 = style;
  if(ref210.get() !== null) {
    node236.attr('class', ref210.get());
    subs__.addSub(ref210.addEventListener('change', function(_, ref, val) {
      node236.attr('class', val);
    }));
    
  }
  subs__.addSub(ref210.rebind());
  
  var nodes1011 = $("<span>");
  node236.append(nodes1011);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl82();
  }));
  
  function renderControl82() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1231); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1011;
      nodes1011 = node.contents();
      oldNodes.replaceWith(nodes1011);
    }));
  }
  renderControl82();
  root1230.append(node236);
  callback(root1230); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
<<<<<<< HEAD
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
=======
  var root1232 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node237 = $("<td>");
  
  var ref211 = width;
  if(ref211.get() !== null) {
    node237.attr('width', ref211.get());
    subs__.addSub(ref211.addEventListener('change', function(_, ref, val) {
      node237.attr('width', val);
    }));
    
  }
  subs__.addSub(ref211.rebind());
  
  var ref212 = style;
  if(ref212.get() !== null) {
    node237.attr('class', ref212.get());
    subs__.addSub(ref212.addEventListener('change', function(_, ref, val) {
      node237.attr('class', val);
    }));
    
  }
  subs__.addSub(ref212.rebind());
  
  
  var node238 = $("<strong>");
  
  var nodes1012 = $("<span>");
  node238.append(nodes1012);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl83();
  }));
  
  function renderControl83() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1233); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1012;
      nodes1012 = node.contents();
      oldNodes.replaceWith(nodes1012);
    }));
  }
  renderControl83();
  node237.append(node238);
  root1232.append(node237);
  callback(root1232); return subs__;
>>>>>>> upstream/master
  
  
  
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
<<<<<<< HEAD
  items.list(function(coll26) {
    coll26 = coll26.reverse();
    function processOne2() {
      var item;
      item = coll26.pop();
=======
  items.list(function(coll92) {
    coll92 = coll92.reverse();
    function processOne20() {
      var item;
      item = coll92.pop();
>>>>>>> upstream/master
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
<<<<<<< HEAD
        if(coll26.length > 0) processOne2(); else rest2();
=======
        if(coll92.length > 0) processOne20(); else rest20();
>>>>>>> upstream/master
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
<<<<<<< HEAD
          if(coll26.length > 0) processOne2(); else rest2();
=======
          if(coll92.length > 0) processOne20(); else rest20();
>>>>>>> upstream/master
          
        }
      }
    }
<<<<<<< HEAD
    function rest2() {
=======
    function rest20() {
>>>>>>> upstream/master
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
<<<<<<< HEAD
    if(coll26.length > 0) processOne2(); else rest2();
=======
    if(coll92.length > 0) processOne20(); else rest20();
>>>>>>> upstream/master
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
<<<<<<< HEAD
  var root109 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp39 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp39.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node54 = $("<span>");
  root109.append(node54);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value27 = tmp39.get();
    if(oldValue11 === value27) return;
    oldValue11 = value27;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node54.empty();
    if(value27) {
      
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
            for(var i11 = 0; i11 < results9.length; i11++) {
              (function() {
                var iternode9 = $("<span>");
                node59.append(iternode9);
                var it;
                it = mobl.ref(mobl.ref(results9), i11);
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
                  var value29 = tmp35.get();
                  if(oldValue13 === value29) return;
                  oldValue13 = value29;
                  var subs__ = condSubs13;
                  subs__.unsubscribe();
                  node60.empty();
                  if(value29) {
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
=======
  var root1234 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 600;
  var tmp703 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp703.set(mobl.window.get().innerWidth > 600);
  }));
  
  
  var node239 = $("<span>");
  root1234.append(node239);
  var condSubs63 = new mobl.CompSubscription();
  subs__.addSub(condSubs63);
  var oldValue63;
  var renderCond63 = function() {
    var value111 = tmp703.get();
    if(oldValue63 === value111) return;
    oldValue63 = value111;
    var subs__ = condSubs63;
    subs__.unsubscribe();
    node239.empty();
    if(value111) {
      items.get().one(function(result__) {
        var tmp725 = result__;
        var current = mobl.ref(result__);
        
        var node240 = $("<div>");
        node240.attr('width', "100%");
        
        
        var node241 = $("<div>");
        node241.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1014 = $("<span>");
        node241.append(nodes1014);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1236 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node244 = mobl.loadingSpan();
          root1236.append(node244);
          var list31;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList31 = function() {
            var subs__ = listSubs__;
            list31 = items.get();
            list31.list(function(results31) {
              node244.empty();
              for(var i119 = 0; i119 < results31.length; i119++) {
                (function() {
                  var iternode31 = $("<span>");
                  node244.append(iternode31);
                  var it;
                  it = mobl.ref(mobl.ref(results31), i119);
                  var result__ = it.get() == current.get();
                  var tmp700 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp700.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp700.set(it.get() == current.get());
                  }));
                  
                  
                  var node245 = $("<span>");
                  iternode31.append(node245);
                  var condSubs65 = new mobl.CompSubscription();
                  subs__.addSub(condSubs65);
                  var oldValue65;
                  var renderCond65 = function() {
                    var value113 = tmp700.get();
                    if(oldValue65 === value113) return;
                    oldValue65 = value113;
                    var subs__ = condSubs65;
                    subs__.unsubscribe();
                    node245.empty();
                    if(value113) {
                      var nodes1015 = $("<span>");
                      node245.append(nodes1015);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root1237 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp728 = result__;
                          var tmp697 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp726 = result__;
                              var result__ = tmp726;
                              tmp697.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp727 = result__;
                              var result__ = tmp727;
                              tmp697.set(result__);
                              
                            });
                          }));
                          
                          var nodes1016 = $("<span>");
                          root1237.append(nodes1016);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl85();
                          }));
                          
                          function renderControl85() {
                            subs__.addSub((masterItem.get())(it, tmp697, function(elements, callback) {
                              var root1238 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root1238); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes1016;
                              nodes1016 = node.contents();
                              oldNodes.replaceWith(nodes1016);
                            }));
                          }
                          renderControl85();
                          callback(root1237); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1015;
                        nodes1015 = node.contents();
                        oldNodes.replaceWith(nodes1015);
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
                      var tmp699 = mobl.ref(result__);
                      
                      var nodes1017 = $("<span>");
                      node245.append(nodes1017);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp699, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root1239 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp731 = result__;
                          var tmp698 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp729 = result__;
                              var result__ = tmp729;
                              tmp698.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp730 = result__;
                              var result__ = tmp730;
                              tmp698.set(result__);
                              
                            });
                          }));
                          
                          var nodes1018 = $("<span>");
                          root1239.append(nodes1018);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl86();
                          }));
                          
                          function renderControl86() {
                            subs__.addSub((masterItem.get())(it, tmp698, function(elements, callback) {
                              var root1240 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root1240); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes1018;
                              nodes1018 = node.contents();
                              oldNodes.replaceWith(nodes1018);
                            }));
                          }
                          renderControl86();
                          callback(root1239); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1017;
                        nodes1017 = node.contents();
                        oldNodes.replaceWith(nodes1017);
                      }));
                      
                      
                    }
                  };
                  renderCond65();
                  subs__.addSub(tmp700.addEventListener('change', function() {
                    renderCond65();
                  }));
                  
                  
                  var oldNodes = iternode31;
                  iternode31 = iternode31.contents();
                  oldNodes.replaceWith(iternode31);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list31.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
            });
          };
          renderList31();
          
          callback(root1236); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1014;
          nodes1014 = node.contents();
          oldNodes.replaceWith(nodes1014);
        }));
        node240.append(node241);
        
        var node242 = $("<div>");
        node242.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp701 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp701.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp701.set(current.get() && ui.visible.get());
        }));
>>>>>>> upstream/master
        
        callback(root111); return subs__;
        
<<<<<<< HEAD
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
        var value28 = tmp37.get();
        if(oldValue12 === value28) return;
        oldValue12 = value28;
        var subs__ = condSubs12;
        subs__.unsubscribe();
        node58.empty();
        if(value28) {
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
=======
        var node243 = $("<span>");
        node242.append(node243);
        var condSubs64 = new mobl.CompSubscription();
        subs__.addSub(condSubs64);
        var oldValue64;
        var renderCond64 = function() {
          var value112 = tmp701.get();
          if(oldValue64 === value112) return;
          oldValue64 = value112;
          var subs__ = condSubs64;
          subs__.unsubscribe();
          node243.empty();
          if(value112) {
            var nodes1013 = $("<span>");
            node243.append(nodes1013);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl84();
            }));
            
            function renderControl84() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root1235 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1235); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1013;
                nodes1013 = node.contents();
                oldNodes.replaceWith(nodes1013);
              }));
            }
            renderControl84();
            
>>>>>>> upstream/master
            
            
<<<<<<< HEAD
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
            for(var i12 = 0; i12 < results10.length; i12++) {
              (function() {
                var iternode10 = $("<span>");
                node61.append(iternode10);
                var it;
                it = mobl.ref(mobl.ref(results10), i12);
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
=======
          }
        };
        renderCond64();
        subs__.addSub(tmp701.addEventListener('change', function() {
          renderCond64();
        }));
        
        node240.append(node242);
        node239.append(node240);
        
        
        
        
        
        
      });
    } else {
      var nodes1019 = $("<span>");
      node239.append(nodes1019);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1241 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node246 = mobl.loadingSpan();
        root1241.append(node246);
        var list32;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList32 = function() {
          var subs__ = listSubs__;
          list32 = items.get();
          list32.list(function(results32) {
            node246.empty();
            for(var i120 = 0; i120 < results32.length; i120++) {
              (function() {
                var iternode32 = $("<span>");
                node246.append(iternode32);
                var it;
                it = mobl.ref(mobl.ref(results32), i120);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp735 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp693 = mobl.ref(result__);
                
                var nodes1020 = $("<span>");
                iternode32.append(nodes1020);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp693, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root1242 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp734 = result__;
                    var tmp692 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp732 = result__;
                        var result__ = tmp732;
                        tmp692.set(result__);
>>>>>>> upstream/master
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
<<<<<<< HEAD
                        var tmp78 = result__;
                        var result__ = tmp78;
                        tmp29.set(result__);
=======
                        var tmp733 = result__;
                        var result__ = tmp733;
                        tmp692.set(result__);
>>>>>>> upstream/master
                        
                      });
                    }));
                    
<<<<<<< HEAD
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
=======
                    var nodes1021 = $("<span>");
                    root1242.append(nodes1021);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl87();
                    }));
                    
                    function renderControl87() {
                      subs__.addSub((masterItem.get())(it, tmp692, function(elements, callback) {
                        var root1243 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root1243); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1021;
                        nodes1021 = node.contents();
                        oldNodes.replaceWith(nodes1021);
                      }));
                    }
                    renderControl87();
                    callback(root1242); return subs__;
>>>>>>> upstream/master
                    
                  });
                  return subs__;
                }, function(node) {
<<<<<<< HEAD
                  var oldNodes = nodes76;
                  nodes76 = node.contents();
                  oldNodes.replaceWith(nodes76);
                }));
                
                var oldNodes = iternode10;
                iternode10 = iternode10.contents();
                oldNodes.replaceWith(iternode10);
=======
                  var oldNodes = nodes1020;
                  nodes1020 = node.contents();
                  oldNodes.replaceWith(nodes1020);
                }));
                
                var oldNodes = iternode32;
                iternode32 = iternode32.contents();
                oldNodes.replaceWith(iternode32);
>>>>>>> upstream/master
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
<<<<<<< HEAD
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
=======
            subs__.addSub(list32.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
          });
        };
        renderList32();
        
        callback(root1241); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1019;
        nodes1019 = node.contents();
        oldNodes.replaceWith(nodes1019);
>>>>>>> upstream/master
      }));
      
      
    }
  };
<<<<<<< HEAD
  renderCond11();
  subs__.addSub(tmp39.addEventListener('change', function() {
    renderCond11();
  }));
  
  callback(root109); return subs__;
=======
  renderCond63();
  subs__.addSub(tmp703.addEventListener('change', function() {
    renderCond63();
  }));
  
  callback(root1234); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root1244 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp696 = mobl.ref(result__);
  
  var nodes1022 = $("<span>");
  root1244.append(nodes1022);
  subs__.addSub((ui.header)(tmp696, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1245 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp736 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp737 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp695 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp694 = mobl.ref(result__);
        
        var nodes1023 = $("<span>");
        root1245.append(nodes1023);
        subs__.addSub((ui.backButton)(tmp694, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp695, function(_, callback) {
          var root1246 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1246); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1023;
          nodes1023 = node.contents();
          oldNodes.replaceWith(nodes1023);
        }));
        callback(root1245); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes1022;
    nodes1022 = node.contents();
    oldNodes.replaceWith(nodes1022);
  }));
  var nodes1024 = $("<span>");
  root1244.append(nodes1024);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl88();
  }));
  
  function renderControl88() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root1247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1247); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1024;
      nodes1024 = node.contents();
      oldNodes.replaceWith(nodes1024);
    }));
  }
  renderControl88();
  callback(root1244); return subs__;
  
>>>>>>> upstream/master
  
  return subs__;
};

ui.introduction = function(elements, callback) {
<<<<<<< HEAD
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
=======
  var root1248 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1025 = $("<span>");
  root1248.append(nodes1025);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1249 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1026 = $("<span>");
    root1249.append(nodes1026);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1250 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1250); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1026;
      nodes1026 = node.contents();
      oldNodes.replaceWith(nodes1026);
    }));
    callback(root1249); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1025;
    nodes1025 = node.contents();
    oldNodes.replaceWith(nodes1025);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes1027 = $("<span>");
  root1248.append(nodes1027);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root1251 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1251); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1027;
    nodes1027 = node.contents();
    oldNodes.replaceWith(nodes1027);
  }));
  callback(root1248); return subs__;
>>>>>>> upstream/master
  
  
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
