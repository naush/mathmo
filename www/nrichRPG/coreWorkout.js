mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl.ui');
mobl.provides('plot');
mobl.provides('mathJAX');
mobl.provides('ui');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl');
mobl.provides('nrichRPG');
nrichRPG.coreWorkout.helpStyle = 'nrichRPG__coreWorkout__helpStyle';
nrichRPG.coreWorkout.deleteStyle = 'nrichRPG__coreWorkout__deleteStyle';
nrichRPG.coreWorkout.headerLogo = 'nrichRPG__coreWorkout__headerLogo';
nrichRPG.coreWorkout.qCount = mobl.ref(0);
nrichRPG.coreWorkout.tickCount = mobl.ref(0);
nrichRPG.coreWorkout.updateCounts = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().count(function(result__) {
    var tmp16648 = result__;
    var result__ = tmp16648;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp16649 = result__;
      var result__ = tmp16649;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp16650 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll960) {
    coll960 = coll960.reverse();
    function processOne594() {
      var i;
      i = coll960.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp16651 = result__;
        
        if(coll960.length > 0) processOne594(); else rest594();
        
      });
    }
    function rest594() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll960.length > 0) processOne594(); else rest594();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll961) {
    coll961 = coll961.reverse();
    function processOne595() {
      var i;
      i = coll961.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp16652 = result__;
          
          if(coll961.length > 0) processOne595(); else rest595();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp16652 = result__;
            
            if(coll961.length > 0) processOne595(); else rest595();
            
          });
        }
      }
    }
    function rest595() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll961.length > 0) processOne595(); else rest595();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll962) {
    coll962 = coll962.reverse();
    function processOne596() {
      var i;
      i = coll962.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp16653 = result__;
        
        if(coll962.length > 0) processOne596(); else rest596();
        
      });
    }
    function rest596() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll962.length > 0) processOne596(); else rest596();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root18254 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes16695 = $("<span>");
  root18254.append(nodes16695);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18255 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp16661 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16560 = mobl.ref(result__);
    
    var nodes16696 = $("<span>");
    root18255.append(nodes16696);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16560, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18256 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16697 = $("<span>");
      root18256.append(nodes16697);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18257 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18257); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16697;
        nodes16697 = node.contents();
        oldNodes.replaceWith(nodes16697);
      }));
      callback(root18256); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16696;
      nodes16696 = node.contents();
      oldNodes.replaceWith(nodes16696);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp16660 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16561 = mobl.ref(result__);
    
    var nodes16698 = $("<span>");
    root18255.append(nodes16698);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16561, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18258 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16699 = $("<span>");
      root18258.append(nodes16699);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18259 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18259); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16699;
        nodes16699 = node.contents();
        oldNodes.replaceWith(nodes16699);
      }));
      callback(root18258); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16698;
      nodes16698 = node.contents();
      oldNodes.replaceWith(nodes16698);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp16659 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16562 = mobl.ref(result__);
    
    var nodes16700 = $("<span>");
    root18255.append(nodes16700);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16562, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18260 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16701 = $("<span>");
      root18260.append(nodes16701);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18261 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18261); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16701;
        nodes16701 = node.contents();
        oldNodes.replaceWith(nodes16701);
      }));
      callback(root18260); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16700;
      nodes16700 = node.contents();
      oldNodes.replaceWith(nodes16700);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp16658 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16563 = mobl.ref(result__);
    
    var nodes16702 = $("<span>");
    root18255.append(nodes16702);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16563, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18262 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16703 = $("<span>");
      root18262.append(nodes16703);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18263 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18263); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16703;
        nodes16703 = node.contents();
        oldNodes.replaceWith(nodes16703);
      }));
      callback(root18262); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16702;
      nodes16702 = node.contents();
      oldNodes.replaceWith(nodes16702);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp16657 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16564 = mobl.ref(result__);
    
    var nodes16704 = $("<span>");
    root18255.append(nodes16704);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16564, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18264 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16705 = $("<span>");
      root18264.append(nodes16705);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18265 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18265); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16705;
        nodes16705 = node.contents();
        oldNodes.replaceWith(nodes16705);
      }));
      callback(root18264); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16704;
      nodes16704 = node.contents();
      oldNodes.replaceWith(nodes16704);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp16656 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16565 = mobl.ref(result__);
    
    var nodes16706 = $("<span>");
    root18255.append(nodes16706);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16565, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18266 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16707 = $("<span>");
      root18266.append(nodes16707);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18267 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18267); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16707;
        nodes16707 = node.contents();
        oldNodes.replaceWith(nodes16707);
      }));
      callback(root18266); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16706;
      nodes16706 = node.contents();
      oldNodes.replaceWith(nodes16706);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp16655 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16566 = mobl.ref(result__);
    
    var nodes16708 = $("<span>");
    root18255.append(nodes16708);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16566, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18268 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16709 = $("<span>");
      root18268.append(nodes16709);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18269 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18269); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16709;
        nodes16709 = node.contents();
        oldNodes.replaceWith(nodes16709);
      }));
      callback(root18268); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16708;
      nodes16708 = node.contents();
      oldNodes.replaceWith(nodes16708);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp16654 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16567 = mobl.ref(result__);
    
    var nodes16710 = $("<span>");
    root18255.append(nodes16710);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16567, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18270 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16711 = $("<span>");
      root18270.append(nodes16711);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18271 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18271); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16711;
        nodes16711 = node.contents();
        oldNodes.replaceWith(nodes16711);
      }));
      callback(root18270); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16710;
      nodes16710 = node.contents();
      oldNodes.replaceWith(nodes16710);
    }));
    callback(root18255); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16695;
    nodes16695 = node.contents();
    oldNodes.replaceWith(nodes16695);
  }));
  callback(root18254); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root18272 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes16712 = $("<span>");
  root18272.append(nodes16712);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18273 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp16569 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp16568 = mobl.ref(result__);
    
    var nodes16713 = $("<span>");
    root18273.append(nodes16713);
    subs__.addSub((ui.backButton)(tmp16568, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16569, function(_, callback) {
      var root18274 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18274); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16713;
      nodes16713 = node.contents();
      oldNodes.replaceWith(nodes16713);
    }));
    callback(root18273); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16712;
    nodes16712 = node.contents();
    oldNodes.replaceWith(nodes16712);
  }));
  var nodes16714 = $("<span>");
  root18272.append(nodes16714);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18275 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp16669 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16570 = mobl.ref(result__);
    
    var nodes16715 = $("<span>");
    root18275.append(nodes16715);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16570, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18276 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16716 = $("<span>");
      root18276.append(nodes16716);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18277 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18277); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16716;
        nodes16716 = node.contents();
        oldNodes.replaceWith(nodes16716);
      }));
      callback(root18276); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16715;
      nodes16715 = node.contents();
      oldNodes.replaceWith(nodes16715);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp16668 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16571 = mobl.ref(result__);
    
    var nodes16717 = $("<span>");
    root18275.append(nodes16717);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16571, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18278 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16718 = $("<span>");
      root18278.append(nodes16718);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18279 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18279); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16718;
        nodes16718 = node.contents();
        oldNodes.replaceWith(nodes16718);
      }));
      callback(root18278); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16717;
      nodes16717 = node.contents();
      oldNodes.replaceWith(nodes16717);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp16667 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16572 = mobl.ref(result__);
    
    var nodes16719 = $("<span>");
    root18275.append(nodes16719);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16572, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16720 = $("<span>");
      root18280.append(nodes16720);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18281 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18281); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16720;
        nodes16720 = node.contents();
        oldNodes.replaceWith(nodes16720);
      }));
      callback(root18280); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16719;
      nodes16719 = node.contents();
      oldNodes.replaceWith(nodes16719);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp16666 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16573 = mobl.ref(result__);
    
    var nodes16721 = $("<span>");
    root18275.append(nodes16721);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16573, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18282 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16722 = $("<span>");
      root18282.append(nodes16722);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18283 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18283); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16722;
        nodes16722 = node.contents();
        oldNodes.replaceWith(nodes16722);
      }));
      callback(root18282); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16721;
      nodes16721 = node.contents();
      oldNodes.replaceWith(nodes16721);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp16665 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16574 = mobl.ref(result__);
    
    var nodes16723 = $("<span>");
    root18275.append(nodes16723);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16574, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18284 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16724 = $("<span>");
      root18284.append(nodes16724);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18285 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18285); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16724;
        nodes16724 = node.contents();
        oldNodes.replaceWith(nodes16724);
      }));
      callback(root18284); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16723;
      nodes16723 = node.contents();
      oldNodes.replaceWith(nodes16723);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp16664 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16575 = mobl.ref(result__);
    
    var nodes16725 = $("<span>");
    root18275.append(nodes16725);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16575, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18286 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16726 = $("<span>");
      root18286.append(nodes16726);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18287 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18287); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16726;
        nodes16726 = node.contents();
        oldNodes.replaceWith(nodes16726);
      }));
      callback(root18286); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16725;
      nodes16725 = node.contents();
      oldNodes.replaceWith(nodes16725);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp16663 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16576 = mobl.ref(result__);
    
    var nodes16727 = $("<span>");
    root18275.append(nodes16727);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16576, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18288 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16728 = $("<span>");
      root18288.append(nodes16728);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18289 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18289); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16728;
        nodes16728 = node.contents();
        oldNodes.replaceWith(nodes16728);
      }));
      callback(root18288); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16727;
      nodes16727 = node.contents();
      oldNodes.replaceWith(nodes16727);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp16662 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16577 = mobl.ref(result__);
    
    var nodes16729 = $("<span>");
    root18275.append(nodes16729);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16577, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18290 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16730 = $("<span>");
      root18290.append(nodes16730);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18291 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18291); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16730;
        nodes16730 = node.contents();
        oldNodes.replaceWith(nodes16730);
      }));
      callback(root18290); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16729;
      nodes16729 = node.contents();
      oldNodes.replaceWith(nodes16729);
    }));
    callback(root18275); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16714;
    nodes16714 = node.contents();
    oldNodes.replaceWith(nodes16714);
  }));
  callback(root18272); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root18292 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes16731 = $("<span>");
  root18292.append(nodes16731);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18293 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp16579 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp16578 = mobl.ref(result__);
    
    var nodes16732 = $("<span>");
    root18293.append(nodes16732);
    subs__.addSub((ui.backButton)(tmp16578, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16579, function(_, callback) {
      var root18294 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18294); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16732;
      nodes16732 = node.contents();
      oldNodes.replaceWith(nodes16732);
    }));
    callback(root18293); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16731;
    nodes16731 = node.contents();
    oldNodes.replaceWith(nodes16731);
  }));
  var nodes16733 = $("<span>");
  root18292.append(nodes16733);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18295 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp16674 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16580 = mobl.ref(result__);
    
    var nodes16734 = $("<span>");
    root18295.append(nodes16734);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16580, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18296 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16735 = $("<span>");
      root18296.append(nodes16735);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18297 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18297); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16735;
        nodes16735 = node.contents();
        oldNodes.replaceWith(nodes16735);
      }));
      callback(root18296); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16734;
      nodes16734 = node.contents();
      oldNodes.replaceWith(nodes16734);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp16673 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16581 = mobl.ref(result__);
    
    var nodes16736 = $("<span>");
    root18295.append(nodes16736);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16581, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18298 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16737 = $("<span>");
      root18298.append(nodes16737);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18299 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18299); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16737;
        nodes16737 = node.contents();
        oldNodes.replaceWith(nodes16737);
      }));
      callback(root18298); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16736;
      nodes16736 = node.contents();
      oldNodes.replaceWith(nodes16736);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp16672 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16582 = mobl.ref(result__);
    
    var nodes16738 = $("<span>");
    root18295.append(nodes16738);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16582, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18300 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16739 = $("<span>");
      root18300.append(nodes16739);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18301 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18301); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16739;
        nodes16739 = node.contents();
        oldNodes.replaceWith(nodes16739);
      }));
      callback(root18300); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16738;
      nodes16738 = node.contents();
      oldNodes.replaceWith(nodes16738);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp16671 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16583 = mobl.ref(result__);
    
    var nodes16740 = $("<span>");
    root18295.append(nodes16740);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16583, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18302 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16741 = $("<span>");
      root18302.append(nodes16741);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18303 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18303); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16741;
        nodes16741 = node.contents();
        oldNodes.replaceWith(nodes16741);
      }));
      callback(root18302); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16740;
      nodes16740 = node.contents();
      oldNodes.replaceWith(nodes16740);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp16670 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16584 = mobl.ref(result__);
    
    var nodes16742 = $("<span>");
    root18295.append(nodes16742);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16584, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18304 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16743 = $("<span>");
      root18304.append(nodes16743);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18305 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18305); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16743;
        nodes16743 = node.contents();
        oldNodes.replaceWith(nodes16743);
      }));
      callback(root18304); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16742;
      nodes16742 = node.contents();
      oldNodes.replaceWith(nodes16742);
    }));
    callback(root18295); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16733;
    nodes16733 = node.contents();
    oldNodes.replaceWith(nodes16733);
  }));
  callback(root18292); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root18306 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes16744 = $("<span>");
  root18306.append(nodes16744);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18307 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp16586 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp16585 = mobl.ref(result__);
    
    var nodes16745 = $("<span>");
    root18307.append(nodes16745);
    subs__.addSub((ui.backButton)(tmp16585, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16586, function(_, callback) {
      var root18308 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18308); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16745;
      nodes16745 = node.contents();
      oldNodes.replaceWith(nodes16745);
    }));
    callback(root18307); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16744;
    nodes16744 = node.contents();
    oldNodes.replaceWith(nodes16744);
  }));
  var nodes16746 = $("<span>");
  root18306.append(nodes16746);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18309 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp16677 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16587 = mobl.ref(result__);
    
    var nodes16747 = $("<span>");
    root18309.append(nodes16747);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16587, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18310 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16748 = $("<span>");
      root18310.append(nodes16748);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18311 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18311); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16748;
        nodes16748 = node.contents();
        oldNodes.replaceWith(nodes16748);
      }));
      callback(root18310); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16747;
      nodes16747 = node.contents();
      oldNodes.replaceWith(nodes16747);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp16676 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16588 = mobl.ref(result__);
    
    var nodes16749 = $("<span>");
    root18309.append(nodes16749);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16588, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18312 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16750 = $("<span>");
      root18312.append(nodes16750);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18313 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18313); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16750;
        nodes16750 = node.contents();
        oldNodes.replaceWith(nodes16750);
      }));
      callback(root18312); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16749;
      nodes16749 = node.contents();
      oldNodes.replaceWith(nodes16749);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp16675 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16589 = mobl.ref(result__);
    
    var nodes16751 = $("<span>");
    root18309.append(nodes16751);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16589, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18314 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16752 = $("<span>");
      root18314.append(nodes16752);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18315 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18315); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16752;
        nodes16752 = node.contents();
        oldNodes.replaceWith(nodes16752);
      }));
      callback(root18314); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16751;
      nodes16751 = node.contents();
      oldNodes.replaceWith(nodes16751);
    }));
    callback(root18309); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16746;
    nodes16746 = node.contents();
    oldNodes.replaceWith(nodes16746);
  }));
  callback(root18306); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root18316 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes16753 = $("<span>");
  root18316.append(nodes16753);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18317 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp16591 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp16590 = mobl.ref(result__);
    
    var nodes16754 = $("<span>");
    root18317.append(nodes16754);
    subs__.addSub((ui.backButton)(tmp16590, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16591, function(_, callback) {
      var root18318 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18318); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16754;
      nodes16754 = node.contents();
      oldNodes.replaceWith(nodes16754);
    }));
    callback(root18317); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16753;
    nodes16753 = node.contents();
    oldNodes.replaceWith(nodes16753);
  }));
  var nodes16755 = $("<span>");
  root18316.append(nodes16755);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18319 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp16681 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16592 = mobl.ref(result__);
    
    var nodes16756 = $("<span>");
    root18319.append(nodes16756);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16592, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18320 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16757 = $("<span>");
      root18320.append(nodes16757);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18321 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18321); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16757;
        nodes16757 = node.contents();
        oldNodes.replaceWith(nodes16757);
      }));
      callback(root18320); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16756;
      nodes16756 = node.contents();
      oldNodes.replaceWith(nodes16756);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp16680 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16593 = mobl.ref(result__);
    
    var nodes16758 = $("<span>");
    root18319.append(nodes16758);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16593, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18322 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16759 = $("<span>");
      root18322.append(nodes16759);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18323 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18323); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16759;
        nodes16759 = node.contents();
        oldNodes.replaceWith(nodes16759);
      }));
      callback(root18322); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16758;
      nodes16758 = node.contents();
      oldNodes.replaceWith(nodes16758);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp16679 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16594 = mobl.ref(result__);
    
    var nodes16760 = $("<span>");
    root18319.append(nodes16760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16594, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16761 = $("<span>");
      root18324.append(nodes16761);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18325 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18325); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16761;
        nodes16761 = node.contents();
        oldNodes.replaceWith(nodes16761);
      }));
      callback(root18324); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16760;
      nodes16760 = node.contents();
      oldNodes.replaceWith(nodes16760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp16678 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16595 = mobl.ref(result__);
    
    var nodes16762 = $("<span>");
    root18319.append(nodes16762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16595, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18326 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16763 = $("<span>");
      root18326.append(nodes16763);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18327 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18327); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16763;
        nodes16763 = node.contents();
        oldNodes.replaceWith(nodes16763);
      }));
      callback(root18326); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16762;
      nodes16762 = node.contents();
      oldNodes.replaceWith(nodes16762);
    }));
    callback(root18319); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16755;
    nodes16755 = node.contents();
    oldNodes.replaceWith(nodes16755);
  }));
  callback(root18316); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root18328 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes16764 = $("<span>");
  root18328.append(nodes16764);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18329 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp16597 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp16596 = mobl.ref(result__);
    
    var nodes16765 = $("<span>");
    root18329.append(nodes16765);
    subs__.addSub((ui.backButton)(tmp16596, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16597, function(_, callback) {
      var root18330 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18330); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16765;
      nodes16765 = node.contents();
      oldNodes.replaceWith(nodes16765);
    }));
    callback(root18329); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16764;
    nodes16764 = node.contents();
    oldNodes.replaceWith(nodes16764);
  }));
  var nodes16766 = $("<span>");
  root18328.append(nodes16766);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18331 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp16683 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16598 = mobl.ref(result__);
    
    var nodes16767 = $("<span>");
    root18331.append(nodes16767);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16598, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18332 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16768 = $("<span>");
      root18332.append(nodes16768);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18333 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18333); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16768;
        nodes16768 = node.contents();
        oldNodes.replaceWith(nodes16768);
      }));
      callback(root18332); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16767;
      nodes16767 = node.contents();
      oldNodes.replaceWith(nodes16767);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp16682 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16599 = mobl.ref(result__);
    
    var nodes16769 = $("<span>");
    root18331.append(nodes16769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16599, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18334 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16770 = $("<span>");
      root18334.append(nodes16770);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18335 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18335); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16770;
        nodes16770 = node.contents();
        oldNodes.replaceWith(nodes16770);
      }));
      callback(root18334); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16769;
      nodes16769 = node.contents();
      oldNodes.replaceWith(nodes16769);
    }));
    callback(root18331); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16766;
    nodes16766 = node.contents();
    oldNodes.replaceWith(nodes16766);
  }));
  callback(root18328); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root18336 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes16771 = $("<span>");
  root18336.append(nodes16771);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18337 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp16601 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp16600 = mobl.ref(result__);
    
    var nodes16772 = $("<span>");
    root18337.append(nodes16772);
    subs__.addSub((ui.backButton)(tmp16600, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16601, function(_, callback) {
      var root18338 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18338); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16772;
      nodes16772 = node.contents();
      oldNodes.replaceWith(nodes16772);
    }));
    callback(root18337); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16771;
    nodes16771 = node.contents();
    oldNodes.replaceWith(nodes16771);
  }));
  var nodes16773 = $("<span>");
  root18336.append(nodes16773);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18339 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp16688 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16602 = mobl.ref(result__);
    
    var nodes16774 = $("<span>");
    root18339.append(nodes16774);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16602, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18340 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16775 = $("<span>");
      root18340.append(nodes16775);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18341 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18341); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16775;
        nodes16775 = node.contents();
        oldNodes.replaceWith(nodes16775);
      }));
      callback(root18340); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16774;
      nodes16774 = node.contents();
      oldNodes.replaceWith(nodes16774);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp16687 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16603 = mobl.ref(result__);
    
    var nodes16776 = $("<span>");
    root18339.append(nodes16776);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16603, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18342 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16777 = $("<span>");
      root18342.append(nodes16777);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18343 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18343); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16777;
        nodes16777 = node.contents();
        oldNodes.replaceWith(nodes16777);
      }));
      callback(root18342); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16776;
      nodes16776 = node.contents();
      oldNodes.replaceWith(nodes16776);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp16686 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16604 = mobl.ref(result__);
    
    var nodes16778 = $("<span>");
    root18339.append(nodes16778);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16604, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18344 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16779 = $("<span>");
      root18344.append(nodes16779);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18345 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18345); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16779;
        nodes16779 = node.contents();
        oldNodes.replaceWith(nodes16779);
      }));
      callback(root18344); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16778;
      nodes16778 = node.contents();
      oldNodes.replaceWith(nodes16778);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp16685 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16605 = mobl.ref(result__);
    
    var nodes16780 = $("<span>");
    root18339.append(nodes16780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16605, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18346 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16781 = $("<span>");
      root18346.append(nodes16781);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18347 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18347); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16781;
        nodes16781 = node.contents();
        oldNodes.replaceWith(nodes16781);
      }));
      callback(root18346); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16780;
      nodes16780 = node.contents();
      oldNodes.replaceWith(nodes16780);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp16684 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16606 = mobl.ref(result__);
    
    var nodes16782 = $("<span>");
    root18339.append(nodes16782);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16606, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18348 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16783 = $("<span>");
      root18348.append(nodes16783);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18349 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18349); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16783;
        nodes16783 = node.contents();
        oldNodes.replaceWith(nodes16783);
      }));
      callback(root18348); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16782;
      nodes16782 = node.contents();
      oldNodes.replaceWith(nodes16782);
    }));
    callback(root18339); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16773;
    nodes16773 = node.contents();
    oldNodes.replaceWith(nodes16773);
  }));
  callback(root18336); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root18350 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes16784 = $("<span>");
  root18350.append(nodes16784);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18351 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp16608 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp16607 = mobl.ref(result__);
    
    var nodes16785 = $("<span>");
    root18351.append(nodes16785);
    subs__.addSub((ui.backButton)(tmp16607, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16608, function(_, callback) {
      var root18352 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18352); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16785;
      nodes16785 = node.contents();
      oldNodes.replaceWith(nodes16785);
    }));
    callback(root18351); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16784;
    nodes16784 = node.contents();
    oldNodes.replaceWith(nodes16784);
  }));
  var nodes16786 = $("<span>");
  root18350.append(nodes16786);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18353 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp16691 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16609 = mobl.ref(result__);
    
    var nodes16787 = $("<span>");
    root18353.append(nodes16787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16609, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18354 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16788 = $("<span>");
      root18354.append(nodes16788);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18355 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18355); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16788;
        nodes16788 = node.contents();
        oldNodes.replaceWith(nodes16788);
      }));
      callback(root18354); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16787;
      nodes16787 = node.contents();
      oldNodes.replaceWith(nodes16787);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp16690 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16610 = mobl.ref(result__);
    
    var nodes16789 = $("<span>");
    root18353.append(nodes16789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16610, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18356 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16790 = $("<span>");
      root18356.append(nodes16790);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18357 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18357); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16790;
        nodes16790 = node.contents();
        oldNodes.replaceWith(nodes16790);
      }));
      callback(root18356); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16789;
      nodes16789 = node.contents();
      oldNodes.replaceWith(nodes16789);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp16689 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16611 = mobl.ref(result__);
    
    var nodes16791 = $("<span>");
    root18353.append(nodes16791);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16611, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18358 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16792 = $("<span>");
      root18358.append(nodes16792);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18359 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18359); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16792;
        nodes16792 = node.contents();
        oldNodes.replaceWith(nodes16792);
      }));
      callback(root18358); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16791;
      nodes16791 = node.contents();
      oldNodes.replaceWith(nodes16791);
    }));
    callback(root18353); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16786;
    nodes16786 = node.contents();
    oldNodes.replaceWith(nodes16786);
  }));
  callback(root18350); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root18360 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes16793 = $("<span>");
  root18360.append(nodes16793);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18361 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp16613 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp16612 = mobl.ref(result__);
    
    var nodes16794 = $("<span>");
    root18361.append(nodes16794);
    subs__.addSub((ui.backButton)(tmp16612, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp16613, function(_, callback) {
      var root18362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18362); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16794;
      nodes16794 = node.contents();
      oldNodes.replaceWith(nodes16794);
    }));
    callback(root18361); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16793;
    nodes16793 = node.contents();
    oldNodes.replaceWith(nodes16793);
  }));
  var nodes16795 = $("<span>");
  root18360.append(nodes16795);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18363 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp16692 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16614 = mobl.ref(result__);
    
    var nodes16796 = $("<span>");
    root18363.append(nodes16796);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16614, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18364 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16797 = $("<span>");
      root18364.append(nodes16797);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18365 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18365); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16797;
        nodes16797 = node.contents();
        oldNodes.replaceWith(nodes16797);
      }));
      callback(root18364); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16796;
      nodes16796 = node.contents();
      oldNodes.replaceWith(nodes16796);
    }));
    callback(root18363); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16795;
    nodes16795 = node.contents();
    oldNodes.replaceWith(nodes16795);
  }));
  callback(root18360); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root18366 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes16798 = $("<span>");
  root18366.append(nodes16798);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18367 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp16705 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16615 = mobl.ref(result__);
    
    var nodes16799 = $("<span>");
    root18367.append(nodes16799);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16615, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16800 = $("<span>");
      root18368.append(nodes16800);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18369 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18369); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16800;
        nodes16800 = node.contents();
        oldNodes.replaceWith(nodes16800);
      }));
      callback(root18368); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16799;
      nodes16799 = node.contents();
      oldNodes.replaceWith(nodes16799);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp16704 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16616 = mobl.ref(result__);
    
    var nodes16801 = $("<span>");
    root18367.append(nodes16801);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16616, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16802 = $("<span>");
      root18370.append(nodes16802);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18371 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18371); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16802;
        nodes16802 = node.contents();
        oldNodes.replaceWith(nodes16802);
      }));
      callback(root18370); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16801;
      nodes16801 = node.contents();
      oldNodes.replaceWith(nodes16801);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp16703 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16617 = mobl.ref(result__);
    
    var nodes16803 = $("<span>");
    root18367.append(nodes16803);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16617, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18372 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16804 = $("<span>");
      root18372.append(nodes16804);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18373 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18373); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16804;
        nodes16804 = node.contents();
        oldNodes.replaceWith(nodes16804);
      }));
      callback(root18372); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16803;
      nodes16803 = node.contents();
      oldNodes.replaceWith(nodes16803);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp16702 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16618 = mobl.ref(result__);
    
    var nodes16805 = $("<span>");
    root18367.append(nodes16805);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16618, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18374 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16806 = $("<span>");
      root18374.append(nodes16806);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18375 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18375); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16806;
        nodes16806 = node.contents();
        oldNodes.replaceWith(nodes16806);
      }));
      callback(root18374); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16805;
      nodes16805 = node.contents();
      oldNodes.replaceWith(nodes16805);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp16701 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16619 = mobl.ref(result__);
    
    var nodes16807 = $("<span>");
    root18367.append(nodes16807);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16619, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16808 = $("<span>");
      root18376.append(nodes16808);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18377 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18377); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16808;
        nodes16808 = node.contents();
        oldNodes.replaceWith(nodes16808);
      }));
      callback(root18376); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16807;
      nodes16807 = node.contents();
      oldNodes.replaceWith(nodes16807);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp16700 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16620 = mobl.ref(result__);
    
    var nodes16809 = $("<span>");
    root18367.append(nodes16809);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16620, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18378 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16810 = $("<span>");
      root18378.append(nodes16810);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18379 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18379); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16810;
        nodes16810 = node.contents();
        oldNodes.replaceWith(nodes16810);
      }));
      callback(root18378); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16809;
      nodes16809 = node.contents();
      oldNodes.replaceWith(nodes16809);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp16699 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16621 = mobl.ref(result__);
    
    var nodes16811 = $("<span>");
    root18367.append(nodes16811);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16621, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16812 = $("<span>");
      root18380.append(nodes16812);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18381 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18381); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16812;
        nodes16812 = node.contents();
        oldNodes.replaceWith(nodes16812);
      }));
      callback(root18380); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16811;
      nodes16811 = node.contents();
      oldNodes.replaceWith(nodes16811);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp16698 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16622 = mobl.ref(result__);
    
    var nodes16813 = $("<span>");
    root18367.append(nodes16813);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16622, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18382 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16814 = $("<span>");
      root18382.append(nodes16814);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18383 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18383); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16814;
        nodes16814 = node.contents();
        oldNodes.replaceWith(nodes16814);
      }));
      callback(root18382); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16813;
      nodes16813 = node.contents();
      oldNodes.replaceWith(nodes16813);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp16697 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16623 = mobl.ref(result__);
    
    var nodes16815 = $("<span>");
    root18367.append(nodes16815);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16623, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18384 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16816 = $("<span>");
      root18384.append(nodes16816);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18385 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18385); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16816;
        nodes16816 = node.contents();
        oldNodes.replaceWith(nodes16816);
      }));
      callback(root18384); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16815;
      nodes16815 = node.contents();
      oldNodes.replaceWith(nodes16815);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp16696 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16624 = mobl.ref(result__);
    
    var nodes16817 = $("<span>");
    root18367.append(nodes16817);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16624, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18386 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16818 = $("<span>");
      root18386.append(nodes16818);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18387 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18387); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16818;
        nodes16818 = node.contents();
        oldNodes.replaceWith(nodes16818);
      }));
      callback(root18386); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16817;
      nodes16817 = node.contents();
      oldNodes.replaceWith(nodes16817);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp16695 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16625 = mobl.ref(result__);
    
    var nodes16819 = $("<span>");
    root18367.append(nodes16819);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16625, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18388 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16820 = $("<span>");
      root18388.append(nodes16820);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18389 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18389); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16820;
        nodes16820 = node.contents();
        oldNodes.replaceWith(nodes16820);
      }));
      callback(root18388); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16819;
      nodes16819 = node.contents();
      oldNodes.replaceWith(nodes16819);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp16694 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16626 = mobl.ref(result__);
    
    var nodes16821 = $("<span>");
    root18367.append(nodes16821);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16626, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16822 = $("<span>");
      root18390.append(nodes16822);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18391 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18391); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16822;
        nodes16822 = node.contents();
        oldNodes.replaceWith(nodes16822);
      }));
      callback(root18390); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16821;
      nodes16821 = node.contents();
      oldNodes.replaceWith(nodes16821);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp16693 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16627 = mobl.ref(result__);
    
    var nodes16823 = $("<span>");
    root18367.append(nodes16823);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16627, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18392 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16824 = $("<span>");
      root18392.append(nodes16824);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18393); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16824;
        nodes16824 = node.contents();
        oldNodes.replaceWith(nodes16824);
      }));
      callback(root18392); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16823;
      nodes16823 = node.contents();
      oldNodes.replaceWith(nodes16823);
    }));
    callback(root18367); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16798;
    nodes16798 = node.contents();
    oldNodes.replaceWith(nodes16798);
  }));
  callback(root18366); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root18394 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes16825 = $("<span>");
  root18394.append(nodes16825);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18395 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp16711 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16628 = mobl.ref(result__);
    
    var nodes16826 = $("<span>");
    root18395.append(nodes16826);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16628, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18396 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16827 = $("<span>");
      root18396.append(nodes16827);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18397 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18397); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16827;
        nodes16827 = node.contents();
        oldNodes.replaceWith(nodes16827);
      }));
      callback(root18396); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16826;
      nodes16826 = node.contents();
      oldNodes.replaceWith(nodes16826);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp16710 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16629 = mobl.ref(result__);
    
    var nodes16828 = $("<span>");
    root18395.append(nodes16828);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16629, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18398 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16829 = $("<span>");
      root18398.append(nodes16829);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18399 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18399); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16829;
        nodes16829 = node.contents();
        oldNodes.replaceWith(nodes16829);
      }));
      callback(root18398); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16828;
      nodes16828 = node.contents();
      oldNodes.replaceWith(nodes16828);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp16709 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16630 = mobl.ref(result__);
    
    var nodes16830 = $("<span>");
    root18395.append(nodes16830);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16630, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18400 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16831 = $("<span>");
      root18400.append(nodes16831);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18401 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18401); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16831;
        nodes16831 = node.contents();
        oldNodes.replaceWith(nodes16831);
      }));
      callback(root18400); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16830;
      nodes16830 = node.contents();
      oldNodes.replaceWith(nodes16830);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp16708 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16631 = mobl.ref(result__);
    
    var nodes16832 = $("<span>");
    root18395.append(nodes16832);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16631, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18402 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16833 = $("<span>");
      root18402.append(nodes16833);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18403 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18403); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16833;
        nodes16833 = node.contents();
        oldNodes.replaceWith(nodes16833);
      }));
      callback(root18402); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16832;
      nodes16832 = node.contents();
      oldNodes.replaceWith(nodes16832);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp16707 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16632 = mobl.ref(result__);
    
    var nodes16834 = $("<span>");
    root18395.append(nodes16834);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16632, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18404 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16835 = $("<span>");
      root18404.append(nodes16835);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18405 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18405); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16835;
        nodes16835 = node.contents();
        oldNodes.replaceWith(nodes16835);
      }));
      callback(root18404); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16834;
      nodes16834 = node.contents();
      oldNodes.replaceWith(nodes16834);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp16706 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16633 = mobl.ref(result__);
    
    var nodes16836 = $("<span>");
    root18395.append(nodes16836);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16633, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18406 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16837 = $("<span>");
      root18406.append(nodes16837);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18407 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18407); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16837;
        nodes16837 = node.contents();
        oldNodes.replaceWith(nodes16837);
      }));
      callback(root18406); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16836;
      nodes16836 = node.contents();
      oldNodes.replaceWith(nodes16836);
    }));
    callback(root18395); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16825;
    nodes16825 = node.contents();
    oldNodes.replaceWith(nodes16825);
  }));
  callback(root18394); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.questionStyle = 'nrichRPG__coreWorkout__questionStyle';
nrichRPG.coreWorkout.answerStyle = 'nrichRPG__coreWorkout__answerStyle';
nrichRPG.coreWorkout.agreeStyle = 'nrichRPG__coreWorkout__agreeStyle';
nrichRPG.coreWorkout.disagreeStyle = 'nrichRPG__coreWorkout__disagreeStyle';
nrichRPG.coreWorkout.plotStyle = 'nrichRPG__coreWorkout__plotStyle';
nrichRPG.coreWorkout.topicLabelStyle = 'nrichRPG__coreWorkout__topicLabelStyle';
nrichRPG.coreWorkout.panelHeaderStyle = 'nrichRPG__coreWorkout__panelHeaderStyle';
nrichRPG.coreWorkout.panelHeaderContainerStyle = 'nrichRPG__coreWorkout__panelHeaderContainerStyle';
nrichRPG.coreWorkout.panelHeaderTextStyle = 'nrichRPG__coreWorkout__panelHeaderTextStyle';
nrichRPG.coreWorkout.sideButtonStyle = 'nrichRPG__coreWorkout__sideButtonStyle';

nrichRPG.coreWorkout.panelHeader = function(text, onclick, elements, callback) {
  var root18408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1241 = $("<div>");
  
  var ref859 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref859.get() !== null) {
    node1241.attr('class', ref859.get());
    subs__.addSub(ref859.addEventListener('change', function(_, ref, val) {
      node1241.attr('class', val);
    }));
    
  }
  subs__.addSub(ref859.rebind());
  
  var val290 = onclick.get();
  if(val290 !== null) {
    subs__.addSub(mobl.domBind(node1241, 'tap', val290));
  }
  
  
  var node1242 = $("<div>");
  
  var ref858 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref858.get() !== null) {
    node1242.attr('class', ref858.get());
    subs__.addSub(ref858.addEventListener('change', function(_, ref, val) {
      node1242.attr('class', val);
    }));
    
  }
  subs__.addSub(ref858.rebind());
  
  
  var node1243 = $("<div>");
  
  var ref856 = text;
  node1243.text(""+ref856.get());
  var ignore179 = false;
  subs__.addSub(ref856.addEventListener('change', function(_, ref, val) {
    if(ignore179) return;
    node1243.text(""+val);
  }));
  subs__.addSub(ref856.rebind());
  
  
  var ref857 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref857.get() !== null) {
    node1243.attr('class', ref857.get());
    subs__.addSub(ref857.addEventListener('change', function(_, ref, val) {
      node1243.attr('class', val);
    }));
    
  }
  subs__.addSub(ref857.rebind());
  
  node1242.append(node1243);
  node1241.append(node1242);
  var nodes16838 = $("<span>");
  node1241.append(nodes16838);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl230();
  }));
  
  function renderControl230() {
    subs__.addSub((elements)(function(elements, callback) {
      var root18409 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18409); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16838;
      nodes16838 = node.contents();
      oldNodes.replaceWith(nodes16838);
    }));
  }
  renderControl230();
  root18408.append(node1241);
  callback(root18408); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp16712 = result__;
    var result__ = qa.done && qa.answer == "%GRAPH%";
    if(result__) {
      var result__ = mobl.JSON.parse(qa.plotData);
      var jsonData = result__;
      var result__ = plot.lineChart("corePlotArea", jsonData);
      var result__ = "";
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    } else {
      {
        var result__ = "";
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};


nrichRPG.coreWorkout.answerBlock = function(qa, number, elements, callback) {
  var root18410 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp16636 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp16636.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp16636.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp16636.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes16839 = $("<span>");
  root18410.append(nodes16839);
  subs__.addSub((mobl.block)(tmp16636, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root18411 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp16634 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp16634.set("A" + number.get() + ". ");
    }));
    
    var nodes16840 = $("<span>");
    root18411.append(nodes16840);
    subs__.addSub((mobl.label)(tmp16634, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root18412 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18412); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16840;
      nodes16840 = node.contents();
      oldNodes.replaceWith(nodes16840);
    }));
    
    var node1244 = $("<span>");
    
    var ref860 = mobl.ref("A" + number.get());
    if(ref860.get() !== null) {
      node1244.attr('id', ref860.get());
      subs__.addSub(ref860.addEventListener('change', function(_, ref, val) {
        node1244.attr('id', val);
      }));
      subs__.addSub(number.addEventListener('change', function() {
        node1244.attr('id', "A" + number.get());
      }));
      
    }
    subs__.addSub(ref860.rebind());
    
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp16635 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp16635.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1245 = $("<span>");
    node1244.append(node1245);
    var condSubs435 = new mobl.CompSubscription();
    subs__.addSub(condSubs435);
    var oldValue435;
    var renderCond435 = function() {
      var value679 = tmp16635.get();
      if(oldValue435 === value679) return;
      oldValue435 = value679;
      var subs__ = condSubs435;
      subs__.unsubscribe();
      node1245.empty();
      if(value679) {
        var nodes16841 = $("<span>");
        node1245.append(nodes16841);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root18413 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root18413); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes16841;
          nodes16841 = node.contents();
          oldNodes.replaceWith(nodes16841);
        }));
        
        
      } else {
        var nodes16842 = $("<span>");
        node1245.append(nodes16842);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root18414 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root18414); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes16842;
          nodes16842 = node.contents();
          oldNodes.replaceWith(nodes16842);
        }));
        
        
      }
    };
    renderCond435();
    subs__.addSub(tmp16635.addEventListener('change', function() {
      renderCond435();
    }));
    
    root18411.append(node1244);
    callback(root18411); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16839;
    nodes16839 = node.contents();
    oldNodes.replaceWith(nodes16839);
  }));
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   var result__ = mobl.$("#A" + number.get()).children("span:first").html();
                   qa.get().answer = result__;
                   if(callback && callback.apply) callback(); return;
                 };
  var tmp16640 = mobl.ref(result__);
  
  var nodes16843 = $("<span>");
  root18410.append(nodes16843);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), tmp16640, mobl.ref(null), function(_, callback) {
    var root18415 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1246 = $("<span>");
    node1246.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp16714 = result__;
      var tmp16637 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp16713 = result__;
          var result__ = tmp16713;
          tmp16637.set(result__);
          
        });
      }));
      
      var nodes16847 = $("<span>");
      node1246.append(nodes16847);
      subs__.addSub((mobl.html)(tmp16637, function(_, callback) {
        var root18419 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18419); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16847;
        nodes16847 = node.contents();
        oldNodes.replaceWith(nodes16847);
      }));
      root18415.append(node1246);
      var nodes16844 = $("<span>");
      root18415.append(nodes16844);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18416 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18416); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16844;
        nodes16844 = node.contents();
        oldNodes.replaceWith(nodes16844);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp16638 = mobl.ref(result__);
      
      var nodes16845 = $("<span>");
      root18415.append(nodes16845);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp16638, function(_, callback) {
        var root18417 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18417); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16845;
        nodes16845 = node.contents();
        oldNodes.replaceWith(nodes16845);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp16639 = mobl.ref(result__);
      
      var nodes16846 = $("<span>");
      root18415.append(nodes16846);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp16639, function(_, callback) {
        var root18418 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18418); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16846;
        nodes16846 = node.contents();
        oldNodes.replaceWith(nodes16846);
      }));
      callback(root18415); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16843;
    nodes16843 = node.contents();
    oldNodes.replaceWith(nodes16843);
  }));
  callback(root18410); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp16715 = result__;
    var result__ = tmp16715;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp16716 = result__;
        var result__ = tmp16716;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = qa2;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      });
    } else {
      {
        var result__ = qa2;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root18420 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp16724 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp16642 = mobl.ref(result__);
  
  var nodes16848 = $("<span>");
  root18420.append(nodes16848);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp16642, function(_, callback) {
    var root18421 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp16717 = result__;
                       var result__ = tmp16717;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp16718 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp16641 = mobl.ref(result__);
    
    var nodes16849 = $("<span>");
    root18421.append(nodes16849);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp16641, function(_, callback) {
      var root18422 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18422); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes16849;
      nodes16849 = node.contents();
      oldNodes.replaceWith(nodes16849);
    }));
    callback(root18421); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16848;
    nodes16848 = node.contents();
    oldNodes.replaceWith(nodes16848);
  }));
  var nodes16850 = $("<span>");
  root18420.append(nodes16850);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18423 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp16723 = result__;
                       var result__ = mobl.$("#Q" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16645 = mobl.ref(result__);
    
    var nodes16851 = $("<span>");
    root18423.append(nodes16851);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp16645, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root18424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp16643 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp16643.set("Q" + number.get() + ". ");
      }));
      
      var nodes16852 = $("<span>");
      root18424.append(nodes16852);
      subs__.addSub((mobl.html)(tmp16643, function(_, callback) {
        var root18425 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18425); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16852;
        nodes16852 = node.contents();
        oldNodes.replaceWith(nodes16852);
      }));
      
      var node1247 = $("<span>");
      
      var ref861 = mobl.ref("Q" + number.get());
      if(ref861.get() !== null) {
        node1247.attr('id', ref861.get());
        subs__.addSub(ref861.addEventListener('change', function(_, ref, val) {
          node1247.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1247.attr('id', "Q" + number.get());
        }));
        
      }
      subs__.addSub(ref861.rebind());
      
      var nodes16854 = $("<span>");
      node1247.append(nodes16854);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root18427 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18427); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16854;
        nodes16854 = node.contents();
        oldNodes.replaceWith(nodes16854);
      }));
      root18424.append(node1247);
      
      var node1248 = $("<span>");
      node1248.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp16720 = result__;
        var tmp16644 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp16719 = result__;
            var result__ = tmp16719;
            tmp16644.set(result__);
            
          });
        }));
        
        var nodes16853 = $("<span>");
        node1248.append(nodes16853);
        subs__.addSub((mobl.html)(tmp16644, function(_, callback) {
          var root18426 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root18426); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes16853;
          nodes16853 = node.contents();
          oldNodes.replaceWith(nodes16853);
        }));
        root18424.append(node1248);
        callback(root18424); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16851;
      nodes16851 = node.contents();
      oldNodes.replaceWith(nodes16851);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp16722 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16647 = mobl.ref(result__);
    
    var nodes16855 = $("<span>");
    root18423.append(nodes16855);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16647, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root18428 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16856 = $("<span>");
      root18428.append(nodes16856);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18429 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp16721 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp16646 = mobl.ref(result__);
        
        var nodes16857 = $("<span>");
        root18429.append(nodes16857);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp16646, function(_, callback) {
          var root18430 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root18430); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes16857;
          nodes16857 = node.contents();
          oldNodes.replaceWith(nodes16857);
        }));
        callback(root18429); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes16856;
        nodes16856 = node.contents();
        oldNodes.replaceWith(nodes16856);
      }));
      
      var node1249 = $("<span>");
      root18428.append(node1249);
      var condSubs436 = new mobl.CompSubscription();
      subs__.addSub(condSubs436);
      var oldValue436;
      var renderCond436 = function() {
        var value680 = qa.get().done;
        if(oldValue436 === value680) return;
        oldValue436 = value680;
        var subs__ = condSubs436;
        subs__.unsubscribe();
        node1249.empty();
        if(value680) {
          var nodes16858 = $("<span>");
          node1249.append(nodes16858);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root18431 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root18431); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes16858;
            nodes16858 = node.contents();
            oldNodes.replaceWith(nodes16858);
          }));
          
          
        } else {
          
        }
      };
      renderCond436();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond436();
      }));
      
      callback(root18428); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes16855;
      nodes16855 = node.contents();
      oldNodes.replaceWith(nodes16855);
    }));
    callback(root18423); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes16850;
    nodes16850 = node.contents();
    oldNodes.replaceWith(nodes16850);
  }));
  callback(root18420); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.max = mobl.ref(0);
nrichRPG.coreWorkout.makeQA = function(n, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll963) {
    coll963 = coll963.reverse();
    function processOne597() {
      var item;
      item = coll963.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll963.length > 0) processOne597(); else rest597();
      
    }
    function rest597() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeProblem(n);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll963.length > 0) processOne597(); else rest597();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll964) {
    coll964 = coll964.reverse();
    function processOne598() {
      var item;
      item = coll964.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll964.length > 0) processOne598(); else rest598();
      
    }
    function rest598() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeFurther(s);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll964.length > 0) processOne598(); else rest598();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll965) {
    coll965 = coll965.reverse();
    function processOne599() {
      var item;
      item = coll965.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll965.length > 0) processOne599(); else rest599();
      
    }
    function rest599() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeFurther(s);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll965.length > 0) processOne599(); else rest599();
  });
  
};

(function(__ns) {
__ns.makeProblem = function(n) {
                     if(n === 1000)
                     {
                       n = 1 + Math.floor(Math.random() * 29);
                       n = n;
                     }
                     if(n === 100)
                     {
                       n = pickrand(10, 11, 7, 9, 1, 30, 13, 17);
                     }
                     if(n === 200)
                     {
                       n = pickrand(24, 25, 26, 27, 270);
                     }
                     if(n === 300)
                     {
                       n = pickrand(15, 16, 6);
                     }
                     if(n === 400)
                     {
                       n = pickrand(8, 12, 23, 2);
                     }
                     if(n === 500)
                     {
                       n = pickrand(5, 18);
                     }
                     if(n === 600)
                     {
                       n = pickrand(14, 20, 21, 22, 19);
                     }
                     if(n === 700)
                     {
                       n = pickrand(28, 3, 4);
                     }
                     switch(n) {
                       case 1:
                         var qa = makePartial();
                         qa.push("Partial fractions");
                         break;
                       case 2:
                         var qa = makeBinomial2();
                         qa.push("Binomial theorem");
                         break;
                       case 3:
                         var qa = makePolyInt();
                         qa.push("Polynomial integration");
                         break;
                       case 4:
                         var qa = makeTrigInt();
                         qa.push("Trig integration");
                         break;
                       case 5:
                         var qa = makeVector();
                         qa.push("Scalar products");
                         break;
                       case 6:
                         var qa = makeLines();
                         qa.push("3D Lines");
                         break;
                       case 7:
                         var qa = makeIneq();
                         qa.push("Inequalities");
                         break;
                       case 8:
                         var qa = makeAP();
                         qa.push("Arithmetic progressions");
                         break;
                       case 9:
                         var qa = makeFactor();
                         qa.push("Factor theorem");
                         break;
                       case 10:
                         var qa = makeQuadratic();
                         qa.push("Quadratics");
                         break;
                       case 11:
                         var qa = makeComplete();
                         qa.push("Completing the square");
                         break;
                       case 12:
                         var qa = makeBinExp();
                         qa.push("Binomial expansion");
                         break;
                       case 13:
                         var qa = makeLog();
                         qa.push("Logarithms");
                         break;
                       case 14:
                         var qa = makeStationary();
                         qa.push("Stationary points");
                         break;
                       case 15:
                         var qa = makeTriangle();
                         qa.push("Triangles");
                         break;
                       case 16:
                         var qa = makeCircle();
                         qa.push("Circles");
                         break;
                       case 17:
                         var qa = makeSolvingTrig();
                         qa.push("Trig equations");
                         break;
                       case 18:
                         var qa = makeVectorEq();
                         qa.push("Vector equations");
                         break;
                       case 19:
                         var qa = makeImplicit();
                         qa.push("Implicit differentiation");
                         break;
                       case 20:
                         var qa = makeChainRule();
                         qa.push("The chain rule");
                         break;
                       case 21:
                         var qa = makeProductRule();
                         qa.push("The product rule");
                         break;
                       case 22:
                         var qa = makeQuotientRule();
                         qa.push("The quotient rule");
                         break;
                       case 23:
                         var qa = makeGP();
                         qa.push("Geometric progressions");
                         break;
                       case 24:
                         var qa = makeModulus();
                         qa.push("Modulus function");
                         break;
                       case 25:
                         var qa = makeTransformation();
                         qa.push("Transformations of functions");
                         break;
                       case 26:
                         var qa = makeComposition();
                         qa.push("Composition of functions");
                         break;
                       case 27:
                         var qa = makeParametric();
                         qa.push("Parametric functions");
                         break;
                       case 270:
                         var qa = makeImplicitFunction();
                         qa.push("Implicit functions");
                         break;
                       case 28:
                         var qa = makeIntegration();
                         qa.push("Integration");
                         break;
                       case 29:
                         var qa = makeDE();
                         qa.push("Differential equations");
                         break;
                       case 30:
                         var qa = makePowers();
                         qa.push("Powers");
                         break;
                       default :
                       alert("invalid qid" + n);
                       break;
                       }
                     return qa;
                   };
__ns.makeFurther = function(n) {
                     switch(n) {
                       case 'F1':
                         var qa = makeCArithmetic();
                         qa.push("Complex Arithmetic");
                         break;
                       case 'F2':
                         var qa = makeCPolar();
                         qa.push("Modulus Argument");
                         break;
                       case 'F3a':
                         var qa = makeDETwoHard();
                         qa.push("2nd order DEs");
                         break;
                       case 'F4':
                         var qa = makeMatrix2();
                         qa.push("Rank 2 matrices");
                         break;
                       case 'F5':
                         var qa = makeTaylor();
                         qa.push("Taylor Series");
                         break;
                       case 'F6':
                         var qa = makePolarSketch();
                         qa.push("Polar Coordinates");
                         break;
                       case 'F7':
                         var qa = makeMatrix3();
                         qa.push("Rank 3 matrices");
                         break;
                       case 'F8':
                         var qa = makeFurtherVector();
                         qa.push("Further vectors");
                         break;
                       case 'F9':
                         var qa = makeNewtonRaphson();
                         qa.push("Newton-Raphson");
                         break;
                       case 'F10':
                         var qa = makeFurtherIneq();
                         qa.push("Further inequalities");
                         break;
                       case 'F11':
                         var qa = makeSubstInt();
                         qa.push("Integration by substitution");
                         break;
                       case 'F12':
                         var qa = makeRevolution();
                         qa.push("Figures of revolution");
                         break;
                       case 'F13':
                         var qa = makeMatXforms();
                         qa.push("Matrix transformations");
                         break;
                       case 'S1':
                         var qa = makeDiscreteDistn();
                         qa.push("Discrete Distributions");
                         break;
                       case 'S2':
                         var qa = makeContinDistn();
                         qa.push("Continuous Distributions");
                         break;
                       case 'S3':
                         var qa = makeHypTest();
                         qa.push("Hypothesis Testing");
                         break;
                       case 'S4':
                         var qa = makeConfidInt();
                         qa.push("Confidence Intervals");
                         break;
                       case 'S5':
                         var qa = makeChiSquare();
                         qa.push("Chi Squared");
                         break;
                       case 'S6':
                         var qa = makeProductMoment();
                         qa.push("Product Moments");
                         break;
                       default :
                       alert("invalid qid" + n);
                       break;
                       }
                     return qa;
                   };
}(nrichRPG.coreWorkout));