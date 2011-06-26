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
    var tmp15333 = result__;
    var result__ = tmp15333;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp15334 = result__;
      var result__ = tmp15334;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp15335 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll912) {
    coll912 = coll912.reverse();
    function processOne546() {
      var i;
      i = coll912.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp15336 = result__;
        
        if(coll912.length > 0) processOne546(); else rest546();
        
      });
    }
    function rest546() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll912.length > 0) processOne546(); else rest546();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll913) {
    coll913 = coll913.reverse();
    function processOne547() {
      var i;
      i = coll913.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp15337 = result__;
          
          if(coll913.length > 0) processOne547(); else rest547();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp15337 = result__;
            
            if(coll913.length > 0) processOne547(); else rest547();
            
          });
        }
      }
    }
    function rest547() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll913.length > 0) processOne547(); else rest547();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll914) {
    coll914 = coll914.reverse();
    function processOne548() {
      var i;
      i = coll914.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp15338 = result__;
        
        if(coll914.length > 0) processOne548(); else rest548();
        
      });
    }
    function rest548() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll914.length > 0) processOne548(); else rest548();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root16830 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes15383 = $("<span>");
  root16830.append(nodes15383);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16831 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp15346 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15246 = mobl.ref(result__);
    
    var nodes15384 = $("<span>");
    root16831.append(nodes15384);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15246, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16832 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15385 = $("<span>");
      root16832.append(nodes15385);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16833 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16833); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15385;
        nodes15385 = node.contents();
        oldNodes.replaceWith(nodes15385);
      }));
      callback(root16832); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15384;
      nodes15384 = node.contents();
      oldNodes.replaceWith(nodes15384);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp15345 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15247 = mobl.ref(result__);
    
    var nodes15386 = $("<span>");
    root16831.append(nodes15386);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15247, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16834 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15387 = $("<span>");
      root16834.append(nodes15387);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16835 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16835); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15387;
        nodes15387 = node.contents();
        oldNodes.replaceWith(nodes15387);
      }));
      callback(root16834); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15386;
      nodes15386 = node.contents();
      oldNodes.replaceWith(nodes15386);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp15344 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15248 = mobl.ref(result__);
    
    var nodes15388 = $("<span>");
    root16831.append(nodes15388);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15248, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16836 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15389 = $("<span>");
      root16836.append(nodes15389);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16837 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16837); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15389;
        nodes15389 = node.contents();
        oldNodes.replaceWith(nodes15389);
      }));
      callback(root16836); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15388;
      nodes15388 = node.contents();
      oldNodes.replaceWith(nodes15388);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp15343 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15249 = mobl.ref(result__);
    
    var nodes15390 = $("<span>");
    root16831.append(nodes15390);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15249, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16838 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15391 = $("<span>");
      root16838.append(nodes15391);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16839 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16839); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15391;
        nodes15391 = node.contents();
        oldNodes.replaceWith(nodes15391);
      }));
      callback(root16838); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15390;
      nodes15390 = node.contents();
      oldNodes.replaceWith(nodes15390);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp15342 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15250 = mobl.ref(result__);
    
    var nodes15392 = $("<span>");
    root16831.append(nodes15392);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15250, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16840 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15393 = $("<span>");
      root16840.append(nodes15393);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16841 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16841); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15393;
        nodes15393 = node.contents();
        oldNodes.replaceWith(nodes15393);
      }));
      callback(root16840); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15392;
      nodes15392 = node.contents();
      oldNodes.replaceWith(nodes15392);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp15341 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15251 = mobl.ref(result__);
    
    var nodes15394 = $("<span>");
    root16831.append(nodes15394);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15251, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16842 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15395 = $("<span>");
      root16842.append(nodes15395);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16843 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16843); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15395;
        nodes15395 = node.contents();
        oldNodes.replaceWith(nodes15395);
      }));
      callback(root16842); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15394;
      nodes15394 = node.contents();
      oldNodes.replaceWith(nodes15394);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp15340 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15252 = mobl.ref(result__);
    
    var nodes15396 = $("<span>");
    root16831.append(nodes15396);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15252, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16844 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15397 = $("<span>");
      root16844.append(nodes15397);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16845 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16845); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15397;
        nodes15397 = node.contents();
        oldNodes.replaceWith(nodes15397);
      }));
      callback(root16844); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15396;
      nodes15396 = node.contents();
      oldNodes.replaceWith(nodes15396);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp15339 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15253 = mobl.ref(result__);
    
    var nodes15398 = $("<span>");
    root16831.append(nodes15398);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15253, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16846 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15399 = $("<span>");
      root16846.append(nodes15399);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16847 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16847); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15399;
        nodes15399 = node.contents();
        oldNodes.replaceWith(nodes15399);
      }));
      callback(root16846); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15398;
      nodes15398 = node.contents();
      oldNodes.replaceWith(nodes15398);
    }));
    callback(root16831); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15383;
    nodes15383 = node.contents();
    oldNodes.replaceWith(nodes15383);
  }));
  callback(root16830); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root16848 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes15400 = $("<span>");
  root16848.append(nodes15400);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16849 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp15255 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp15254 = mobl.ref(result__);
    
    var nodes15401 = $("<span>");
    root16849.append(nodes15401);
    subs__.addSub((ui.backButton)(tmp15254, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp15255, function(_, callback) {
      var root16850 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16850); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15401;
      nodes15401 = node.contents();
      oldNodes.replaceWith(nodes15401);
    }));
    callback(root16849); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15400;
    nodes15400 = node.contents();
    oldNodes.replaceWith(nodes15400);
  }));
  var nodes15402 = $("<span>");
  root16848.append(nodes15402);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16851 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp15354 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15256 = mobl.ref(result__);
    
    var nodes15403 = $("<span>");
    root16851.append(nodes15403);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15256, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16852 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15404 = $("<span>");
      root16852.append(nodes15404);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16853 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16853); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15404;
        nodes15404 = node.contents();
        oldNodes.replaceWith(nodes15404);
      }));
      callback(root16852); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15403;
      nodes15403 = node.contents();
      oldNodes.replaceWith(nodes15403);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp15353 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15257 = mobl.ref(result__);
    
    var nodes15405 = $("<span>");
    root16851.append(nodes15405);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15257, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16854 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15406 = $("<span>");
      root16854.append(nodes15406);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16855 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16855); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15406;
        nodes15406 = node.contents();
        oldNodes.replaceWith(nodes15406);
      }));
      callback(root16854); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15405;
      nodes15405 = node.contents();
      oldNodes.replaceWith(nodes15405);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp15352 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15258 = mobl.ref(result__);
    
    var nodes15407 = $("<span>");
    root16851.append(nodes15407);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15258, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16856 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15408 = $("<span>");
      root16856.append(nodes15408);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16857 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16857); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15408;
        nodes15408 = node.contents();
        oldNodes.replaceWith(nodes15408);
      }));
      callback(root16856); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15407;
      nodes15407 = node.contents();
      oldNodes.replaceWith(nodes15407);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp15351 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15259 = mobl.ref(result__);
    
    var nodes15409 = $("<span>");
    root16851.append(nodes15409);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15259, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16858 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15410 = $("<span>");
      root16858.append(nodes15410);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16859 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16859); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15410;
        nodes15410 = node.contents();
        oldNodes.replaceWith(nodes15410);
      }));
      callback(root16858); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15409;
      nodes15409 = node.contents();
      oldNodes.replaceWith(nodes15409);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp15350 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15260 = mobl.ref(result__);
    
    var nodes15411 = $("<span>");
    root16851.append(nodes15411);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15260, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16860 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15412 = $("<span>");
      root16860.append(nodes15412);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16861 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16861); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15412;
        nodes15412 = node.contents();
        oldNodes.replaceWith(nodes15412);
      }));
      callback(root16860); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15411;
      nodes15411 = node.contents();
      oldNodes.replaceWith(nodes15411);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp15349 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15261 = mobl.ref(result__);
    
    var nodes15413 = $("<span>");
    root16851.append(nodes15413);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15261, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16862 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15414 = $("<span>");
      root16862.append(nodes15414);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16863 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16863); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15414;
        nodes15414 = node.contents();
        oldNodes.replaceWith(nodes15414);
      }));
      callback(root16862); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15413;
      nodes15413 = node.contents();
      oldNodes.replaceWith(nodes15413);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp15348 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15262 = mobl.ref(result__);
    
    var nodes15415 = $("<span>");
    root16851.append(nodes15415);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15262, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16864 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15416 = $("<span>");
      root16864.append(nodes15416);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16865 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16865); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15416;
        nodes15416 = node.contents();
        oldNodes.replaceWith(nodes15416);
      }));
      callback(root16864); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15415;
      nodes15415 = node.contents();
      oldNodes.replaceWith(nodes15415);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp15347 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15263 = mobl.ref(result__);
    
    var nodes15417 = $("<span>");
    root16851.append(nodes15417);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15263, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16866 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15418 = $("<span>");
      root16866.append(nodes15418);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16867 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16867); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15418;
        nodes15418 = node.contents();
        oldNodes.replaceWith(nodes15418);
      }));
      callback(root16866); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15417;
      nodes15417 = node.contents();
      oldNodes.replaceWith(nodes15417);
    }));
    callback(root16851); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15402;
    nodes15402 = node.contents();
    oldNodes.replaceWith(nodes15402);
  }));
  callback(root16848); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root16868 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes15419 = $("<span>");
  root16868.append(nodes15419);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16869 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp15265 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp15264 = mobl.ref(result__);
    
    var nodes15420 = $("<span>");
    root16869.append(nodes15420);
    subs__.addSub((ui.backButton)(tmp15264, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp15265, function(_, callback) {
      var root16870 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16870); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15420;
      nodes15420 = node.contents();
      oldNodes.replaceWith(nodes15420);
    }));
    callback(root16869); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15419;
    nodes15419 = node.contents();
    oldNodes.replaceWith(nodes15419);
  }));
  var nodes15421 = $("<span>");
  root16868.append(nodes15421);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16871 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp15359 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15266 = mobl.ref(result__);
    
    var nodes15422 = $("<span>");
    root16871.append(nodes15422);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15266, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16872 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15423 = $("<span>");
      root16872.append(nodes15423);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16873 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16873); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15423;
        nodes15423 = node.contents();
        oldNodes.replaceWith(nodes15423);
      }));
      callback(root16872); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15422;
      nodes15422 = node.contents();
      oldNodes.replaceWith(nodes15422);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp15358 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15267 = mobl.ref(result__);
    
    var nodes15424 = $("<span>");
    root16871.append(nodes15424);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15267, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16874 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15425 = $("<span>");
      root16874.append(nodes15425);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16875); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15425;
        nodes15425 = node.contents();
        oldNodes.replaceWith(nodes15425);
      }));
      callback(root16874); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15424;
      nodes15424 = node.contents();
      oldNodes.replaceWith(nodes15424);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp15357 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15268 = mobl.ref(result__);
    
    var nodes15426 = $("<span>");
    root16871.append(nodes15426);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15268, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16876 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15427 = $("<span>");
      root16876.append(nodes15427);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16877); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15427;
        nodes15427 = node.contents();
        oldNodes.replaceWith(nodes15427);
      }));
      callback(root16876); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15426;
      nodes15426 = node.contents();
      oldNodes.replaceWith(nodes15426);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp15356 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15269 = mobl.ref(result__);
    
    var nodes15428 = $("<span>");
    root16871.append(nodes15428);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15269, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16878 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15429 = $("<span>");
      root16878.append(nodes15429);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16879 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16879); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15429;
        nodes15429 = node.contents();
        oldNodes.replaceWith(nodes15429);
      }));
      callback(root16878); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15428;
      nodes15428 = node.contents();
      oldNodes.replaceWith(nodes15428);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp15355 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15270 = mobl.ref(result__);
    
    var nodes15430 = $("<span>");
    root16871.append(nodes15430);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15270, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16880 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15431 = $("<span>");
      root16880.append(nodes15431);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16881 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16881); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15431;
        nodes15431 = node.contents();
        oldNodes.replaceWith(nodes15431);
      }));
      callback(root16880); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15430;
      nodes15430 = node.contents();
      oldNodes.replaceWith(nodes15430);
    }));
    callback(root16871); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15421;
    nodes15421 = node.contents();
    oldNodes.replaceWith(nodes15421);
  }));
  callback(root16868); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root16882 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes15432 = $("<span>");
  root16882.append(nodes15432);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16883 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp15272 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp15271 = mobl.ref(result__);
    
    var nodes15433 = $("<span>");
    root16883.append(nodes15433);
    subs__.addSub((ui.backButton)(tmp15271, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp15272, function(_, callback) {
      var root16884 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16884); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15433;
      nodes15433 = node.contents();
      oldNodes.replaceWith(nodes15433);
    }));
    callback(root16883); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15432;
    nodes15432 = node.contents();
    oldNodes.replaceWith(nodes15432);
  }));
  var nodes15434 = $("<span>");
  root16882.append(nodes15434);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16885 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp15362 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15273 = mobl.ref(result__);
    
    var nodes15435 = $("<span>");
    root16885.append(nodes15435);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15273, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15436 = $("<span>");
      root16886.append(nodes15436);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16887 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16887); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15436;
        nodes15436 = node.contents();
        oldNodes.replaceWith(nodes15436);
      }));
      callback(root16886); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15435;
      nodes15435 = node.contents();
      oldNodes.replaceWith(nodes15435);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp15361 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15274 = mobl.ref(result__);
    
    var nodes15437 = $("<span>");
    root16885.append(nodes15437);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15274, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16888 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15438 = $("<span>");
      root16888.append(nodes15438);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16889 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16889); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15438;
        nodes15438 = node.contents();
        oldNodes.replaceWith(nodes15438);
      }));
      callback(root16888); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15437;
      nodes15437 = node.contents();
      oldNodes.replaceWith(nodes15437);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp15360 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15275 = mobl.ref(result__);
    
    var nodes15439 = $("<span>");
    root16885.append(nodes15439);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15275, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16890 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15440 = $("<span>");
      root16890.append(nodes15440);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16891 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16891); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15440;
        nodes15440 = node.contents();
        oldNodes.replaceWith(nodes15440);
      }));
      callback(root16890); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15439;
      nodes15439 = node.contents();
      oldNodes.replaceWith(nodes15439);
    }));
    callback(root16885); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15434;
    nodes15434 = node.contents();
    oldNodes.replaceWith(nodes15434);
  }));
  callback(root16882); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root16892 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes15441 = $("<span>");
  root16892.append(nodes15441);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16893 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp15277 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp15276 = mobl.ref(result__);
    
    var nodes15442 = $("<span>");
    root16893.append(nodes15442);
    subs__.addSub((ui.backButton)(tmp15276, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp15277, function(_, callback) {
      var root16894 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16894); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15442;
      nodes15442 = node.contents();
      oldNodes.replaceWith(nodes15442);
    }));
    callback(root16893); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15441;
    nodes15441 = node.contents();
    oldNodes.replaceWith(nodes15441);
  }));
  var nodes15443 = $("<span>");
  root16892.append(nodes15443);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16895 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp15366 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15278 = mobl.ref(result__);
    
    var nodes15444 = $("<span>");
    root16895.append(nodes15444);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15278, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16896 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15445 = $("<span>");
      root16896.append(nodes15445);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16897 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16897); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15445;
        nodes15445 = node.contents();
        oldNodes.replaceWith(nodes15445);
      }));
      callback(root16896); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15444;
      nodes15444 = node.contents();
      oldNodes.replaceWith(nodes15444);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp15365 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15279 = mobl.ref(result__);
    
    var nodes15446 = $("<span>");
    root16895.append(nodes15446);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15279, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16898 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15447 = $("<span>");
      root16898.append(nodes15447);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16899 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16899); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15447;
        nodes15447 = node.contents();
        oldNodes.replaceWith(nodes15447);
      }));
      callback(root16898); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15446;
      nodes15446 = node.contents();
      oldNodes.replaceWith(nodes15446);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp15364 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15280 = mobl.ref(result__);
    
    var nodes15448 = $("<span>");
    root16895.append(nodes15448);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15280, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16900 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15449 = $("<span>");
      root16900.append(nodes15449);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16901 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16901); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15449;
        nodes15449 = node.contents();
        oldNodes.replaceWith(nodes15449);
      }));
      callback(root16900); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15448;
      nodes15448 = node.contents();
      oldNodes.replaceWith(nodes15448);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp15363 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15281 = mobl.ref(result__);
    
    var nodes15450 = $("<span>");
    root16895.append(nodes15450);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15281, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16902 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15451 = $("<span>");
      root16902.append(nodes15451);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16903 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16903); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15451;
        nodes15451 = node.contents();
        oldNodes.replaceWith(nodes15451);
      }));
      callback(root16902); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15450;
      nodes15450 = node.contents();
      oldNodes.replaceWith(nodes15450);
    }));
    callback(root16895); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15443;
    nodes15443 = node.contents();
    oldNodes.replaceWith(nodes15443);
  }));
  callback(root16892); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root16904 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes15452 = $("<span>");
  root16904.append(nodes15452);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16905 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp15283 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp15282 = mobl.ref(result__);
    
    var nodes15453 = $("<span>");
    root16905.append(nodes15453);
    subs__.addSub((ui.backButton)(tmp15282, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp15283, function(_, callback) {
      var root16906 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16906); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15453;
      nodes15453 = node.contents();
      oldNodes.replaceWith(nodes15453);
    }));
    callback(root16905); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15452;
    nodes15452 = node.contents();
    oldNodes.replaceWith(nodes15452);
  }));
  var nodes15454 = $("<span>");
  root16904.append(nodes15454);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16907 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp15368 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15284 = mobl.ref(result__);
    
    var nodes15455 = $("<span>");
    root16907.append(nodes15455);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15284, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16908 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15456 = $("<span>");
      root16908.append(nodes15456);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16909 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16909); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15456;
        nodes15456 = node.contents();
        oldNodes.replaceWith(nodes15456);
      }));
      callback(root16908); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15455;
      nodes15455 = node.contents();
      oldNodes.replaceWith(nodes15455);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp15367 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15285 = mobl.ref(result__);
    
    var nodes15457 = $("<span>");
    root16907.append(nodes15457);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15285, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16910 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15458 = $("<span>");
      root16910.append(nodes15458);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16911 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16911); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15458;
        nodes15458 = node.contents();
        oldNodes.replaceWith(nodes15458);
      }));
      callback(root16910); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15457;
      nodes15457 = node.contents();
      oldNodes.replaceWith(nodes15457);
    }));
    callback(root16907); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15454;
    nodes15454 = node.contents();
    oldNodes.replaceWith(nodes15454);
  }));
  callback(root16904); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root16912 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes15459 = $("<span>");
  root16912.append(nodes15459);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16913 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp15287 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp15286 = mobl.ref(result__);
    
    var nodes15460 = $("<span>");
    root16913.append(nodes15460);
    subs__.addSub((ui.backButton)(tmp15286, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp15287, function(_, callback) {
      var root16914 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16914); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15460;
      nodes15460 = node.contents();
      oldNodes.replaceWith(nodes15460);
    }));
    callback(root16913); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15459;
    nodes15459 = node.contents();
    oldNodes.replaceWith(nodes15459);
  }));
  var nodes15461 = $("<span>");
  root16912.append(nodes15461);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16915 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp15373 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15288 = mobl.ref(result__);
    
    var nodes15462 = $("<span>");
    root16915.append(nodes15462);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15288, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16916 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15463 = $("<span>");
      root16916.append(nodes15463);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16917 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16917); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15463;
        nodes15463 = node.contents();
        oldNodes.replaceWith(nodes15463);
      }));
      callback(root16916); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15462;
      nodes15462 = node.contents();
      oldNodes.replaceWith(nodes15462);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp15372 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15289 = mobl.ref(result__);
    
    var nodes15464 = $("<span>");
    root16915.append(nodes15464);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15289, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16918 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15465 = $("<span>");
      root16918.append(nodes15465);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16919 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16919); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15465;
        nodes15465 = node.contents();
        oldNodes.replaceWith(nodes15465);
      }));
      callback(root16918); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15464;
      nodes15464 = node.contents();
      oldNodes.replaceWith(nodes15464);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp15371 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15290 = mobl.ref(result__);
    
    var nodes15466 = $("<span>");
    root16915.append(nodes15466);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15290, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16920 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15467 = $("<span>");
      root16920.append(nodes15467);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16921 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16921); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15467;
        nodes15467 = node.contents();
        oldNodes.replaceWith(nodes15467);
      }));
      callback(root16920); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15466;
      nodes15466 = node.contents();
      oldNodes.replaceWith(nodes15466);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp15370 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15291 = mobl.ref(result__);
    
    var nodes15468 = $("<span>");
    root16915.append(nodes15468);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15291, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16922 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15469 = $("<span>");
      root16922.append(nodes15469);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16923 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16923); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15469;
        nodes15469 = node.contents();
        oldNodes.replaceWith(nodes15469);
      }));
      callback(root16922); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15468;
      nodes15468 = node.contents();
      oldNodes.replaceWith(nodes15468);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp15369 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15292 = mobl.ref(result__);
    
    var nodes15470 = $("<span>");
    root16915.append(nodes15470);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15292, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16924 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15471 = $("<span>");
      root16924.append(nodes15471);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16925 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16925); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15471;
        nodes15471 = node.contents();
        oldNodes.replaceWith(nodes15471);
      }));
      callback(root16924); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15470;
      nodes15470 = node.contents();
      oldNodes.replaceWith(nodes15470);
    }));
    callback(root16915); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15461;
    nodes15461 = node.contents();
    oldNodes.replaceWith(nodes15461);
  }));
  callback(root16912); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root16926 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes15472 = $("<span>");
  root16926.append(nodes15472);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16927 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp15294 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp15293 = mobl.ref(result__);
    
    var nodes15473 = $("<span>");
    root16927.append(nodes15473);
    subs__.addSub((ui.backButton)(tmp15293, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp15294, function(_, callback) {
      var root16928 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16928); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15473;
      nodes15473 = node.contents();
      oldNodes.replaceWith(nodes15473);
    }));
    callback(root16927); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15472;
    nodes15472 = node.contents();
    oldNodes.replaceWith(nodes15472);
  }));
  var nodes15474 = $("<span>");
  root16926.append(nodes15474);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16929 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp15376 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15295 = mobl.ref(result__);
    
    var nodes15475 = $("<span>");
    root16929.append(nodes15475);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15295, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16930 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15476 = $("<span>");
      root16930.append(nodes15476);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16931 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16931); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15476;
        nodes15476 = node.contents();
        oldNodes.replaceWith(nodes15476);
      }));
      callback(root16930); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15475;
      nodes15475 = node.contents();
      oldNodes.replaceWith(nodes15475);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp15375 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15296 = mobl.ref(result__);
    
    var nodes15477 = $("<span>");
    root16929.append(nodes15477);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15296, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16932 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15478 = $("<span>");
      root16932.append(nodes15478);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16933 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16933); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15478;
        nodes15478 = node.contents();
        oldNodes.replaceWith(nodes15478);
      }));
      callback(root16932); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15477;
      nodes15477 = node.contents();
      oldNodes.replaceWith(nodes15477);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp15374 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15297 = mobl.ref(result__);
    
    var nodes15479 = $("<span>");
    root16929.append(nodes15479);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15297, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16934 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15480 = $("<span>");
      root16934.append(nodes15480);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16935 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16935); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15480;
        nodes15480 = node.contents();
        oldNodes.replaceWith(nodes15480);
      }));
      callback(root16934); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15479;
      nodes15479 = node.contents();
      oldNodes.replaceWith(nodes15479);
    }));
    callback(root16929); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15474;
    nodes15474 = node.contents();
    oldNodes.replaceWith(nodes15474);
  }));
  callback(root16926); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root16936 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes15481 = $("<span>");
  root16936.append(nodes15481);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16937 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp15299 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp15298 = mobl.ref(result__);
    
    var nodes15482 = $("<span>");
    root16937.append(nodes15482);
    subs__.addSub((ui.backButton)(tmp15298, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp15299, function(_, callback) {
      var root16938 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16938); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15482;
      nodes15482 = node.contents();
      oldNodes.replaceWith(nodes15482);
    }));
    callback(root16937); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15481;
    nodes15481 = node.contents();
    oldNodes.replaceWith(nodes15481);
  }));
  var nodes15483 = $("<span>");
  root16936.append(nodes15483);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16939 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp15377 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15300 = mobl.ref(result__);
    
    var nodes15484 = $("<span>");
    root16939.append(nodes15484);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15300, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16940 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15485 = $("<span>");
      root16940.append(nodes15485);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16941 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16941); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15485;
        nodes15485 = node.contents();
        oldNodes.replaceWith(nodes15485);
      }));
      callback(root16940); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15484;
      nodes15484 = node.contents();
      oldNodes.replaceWith(nodes15484);
    }));
    callback(root16939); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15483;
    nodes15483 = node.contents();
    oldNodes.replaceWith(nodes15483);
  }));
  callback(root16936); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root16942 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes15486 = $("<span>");
  root16942.append(nodes15486);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16943 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp15390 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15301 = mobl.ref(result__);
    
    var nodes15487 = $("<span>");
    root16943.append(nodes15487);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15301, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16944 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15488 = $("<span>");
      root16944.append(nodes15488);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16945 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16945); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15488;
        nodes15488 = node.contents();
        oldNodes.replaceWith(nodes15488);
      }));
      callback(root16944); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15487;
      nodes15487 = node.contents();
      oldNodes.replaceWith(nodes15487);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp15389 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15302 = mobl.ref(result__);
    
    var nodes15489 = $("<span>");
    root16943.append(nodes15489);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15302, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16946 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15490 = $("<span>");
      root16946.append(nodes15490);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16947 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16947); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15490;
        nodes15490 = node.contents();
        oldNodes.replaceWith(nodes15490);
      }));
      callback(root16946); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15489;
      nodes15489 = node.contents();
      oldNodes.replaceWith(nodes15489);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp15388 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15303 = mobl.ref(result__);
    
    var nodes15491 = $("<span>");
    root16943.append(nodes15491);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15303, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16948 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15492 = $("<span>");
      root16948.append(nodes15492);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16949 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16949); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15492;
        nodes15492 = node.contents();
        oldNodes.replaceWith(nodes15492);
      }));
      callback(root16948); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15491;
      nodes15491 = node.contents();
      oldNodes.replaceWith(nodes15491);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp15387 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15304 = mobl.ref(result__);
    
    var nodes15493 = $("<span>");
    root16943.append(nodes15493);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15304, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16950 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15494 = $("<span>");
      root16950.append(nodes15494);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16951 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16951); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15494;
        nodes15494 = node.contents();
        oldNodes.replaceWith(nodes15494);
      }));
      callback(root16950); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15493;
      nodes15493 = node.contents();
      oldNodes.replaceWith(nodes15493);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp15386 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15305 = mobl.ref(result__);
    
    var nodes15495 = $("<span>");
    root16943.append(nodes15495);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15305, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16952 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15496 = $("<span>");
      root16952.append(nodes15496);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16953 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16953); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15496;
        nodes15496 = node.contents();
        oldNodes.replaceWith(nodes15496);
      }));
      callback(root16952); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15495;
      nodes15495 = node.contents();
      oldNodes.replaceWith(nodes15495);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp15385 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15306 = mobl.ref(result__);
    
    var nodes15497 = $("<span>");
    root16943.append(nodes15497);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15306, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16954 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15498 = $("<span>");
      root16954.append(nodes15498);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16955 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16955); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15498;
        nodes15498 = node.contents();
        oldNodes.replaceWith(nodes15498);
      }));
      callback(root16954); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15497;
      nodes15497 = node.contents();
      oldNodes.replaceWith(nodes15497);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp15384 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15307 = mobl.ref(result__);
    
    var nodes15499 = $("<span>");
    root16943.append(nodes15499);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15307, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16956 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15500 = $("<span>");
      root16956.append(nodes15500);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16957 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16957); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15500;
        nodes15500 = node.contents();
        oldNodes.replaceWith(nodes15500);
      }));
      callback(root16956); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15499;
      nodes15499 = node.contents();
      oldNodes.replaceWith(nodes15499);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp15383 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15308 = mobl.ref(result__);
    
    var nodes15501 = $("<span>");
    root16943.append(nodes15501);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15308, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16958 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15502 = $("<span>");
      root16958.append(nodes15502);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16959 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16959); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15502;
        nodes15502 = node.contents();
        oldNodes.replaceWith(nodes15502);
      }));
      callback(root16958); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15501;
      nodes15501 = node.contents();
      oldNodes.replaceWith(nodes15501);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp15382 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15309 = mobl.ref(result__);
    
    var nodes15503 = $("<span>");
    root16943.append(nodes15503);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15309, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16960 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15504 = $("<span>");
      root16960.append(nodes15504);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16961 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16961); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15504;
        nodes15504 = node.contents();
        oldNodes.replaceWith(nodes15504);
      }));
      callback(root16960); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15503;
      nodes15503 = node.contents();
      oldNodes.replaceWith(nodes15503);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp15381 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15310 = mobl.ref(result__);
    
    var nodes15505 = $("<span>");
    root16943.append(nodes15505);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15310, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16962 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15506 = $("<span>");
      root16962.append(nodes15506);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16963 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16963); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15506;
        nodes15506 = node.contents();
        oldNodes.replaceWith(nodes15506);
      }));
      callback(root16962); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15505;
      nodes15505 = node.contents();
      oldNodes.replaceWith(nodes15505);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp15380 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15311 = mobl.ref(result__);
    
    var nodes15507 = $("<span>");
    root16943.append(nodes15507);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15311, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16964 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15508 = $("<span>");
      root16964.append(nodes15508);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16965 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16965); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15508;
        nodes15508 = node.contents();
        oldNodes.replaceWith(nodes15508);
      }));
      callback(root16964); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15507;
      nodes15507 = node.contents();
      oldNodes.replaceWith(nodes15507);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp15379 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15312 = mobl.ref(result__);
    
    var nodes15509 = $("<span>");
    root16943.append(nodes15509);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15312, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16966 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15510 = $("<span>");
      root16966.append(nodes15510);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16967 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16967); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15510;
        nodes15510 = node.contents();
        oldNodes.replaceWith(nodes15510);
      }));
      callback(root16966); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15509;
      nodes15509 = node.contents();
      oldNodes.replaceWith(nodes15509);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp15378 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15313 = mobl.ref(result__);
    
    var nodes15511 = $("<span>");
    root16943.append(nodes15511);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15313, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16968 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15512 = $("<span>");
      root16968.append(nodes15512);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16969 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16969); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15512;
        nodes15512 = node.contents();
        oldNodes.replaceWith(nodes15512);
      }));
      callback(root16968); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15511;
      nodes15511 = node.contents();
      oldNodes.replaceWith(nodes15511);
    }));
    callback(root16943); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15486;
    nodes15486 = node.contents();
    oldNodes.replaceWith(nodes15486);
  }));
  callback(root16942); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root16970 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes15513 = $("<span>");
  root16970.append(nodes15513);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16971 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp15396 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15314 = mobl.ref(result__);
    
    var nodes15514 = $("<span>");
    root16971.append(nodes15514);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15314, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16972 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15515 = $("<span>");
      root16972.append(nodes15515);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16973 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16973); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15515;
        nodes15515 = node.contents();
        oldNodes.replaceWith(nodes15515);
      }));
      callback(root16972); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15514;
      nodes15514 = node.contents();
      oldNodes.replaceWith(nodes15514);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp15395 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15315 = mobl.ref(result__);
    
    var nodes15516 = $("<span>");
    root16971.append(nodes15516);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15315, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16974 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15517 = $("<span>");
      root16974.append(nodes15517);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16975 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16975); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15517;
        nodes15517 = node.contents();
        oldNodes.replaceWith(nodes15517);
      }));
      callback(root16974); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15516;
      nodes15516 = node.contents();
      oldNodes.replaceWith(nodes15516);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp15394 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15316 = mobl.ref(result__);
    
    var nodes15518 = $("<span>");
    root16971.append(nodes15518);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15316, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16976 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15519 = $("<span>");
      root16976.append(nodes15519);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16977 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16977); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15519;
        nodes15519 = node.contents();
        oldNodes.replaceWith(nodes15519);
      }));
      callback(root16976); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15518;
      nodes15518 = node.contents();
      oldNodes.replaceWith(nodes15518);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp15393 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15317 = mobl.ref(result__);
    
    var nodes15520 = $("<span>");
    root16971.append(nodes15520);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15317, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15521 = $("<span>");
      root16978.append(nodes15521);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16979 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16979); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15521;
        nodes15521 = node.contents();
        oldNodes.replaceWith(nodes15521);
      }));
      callback(root16978); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15520;
      nodes15520 = node.contents();
      oldNodes.replaceWith(nodes15520);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp15392 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15318 = mobl.ref(result__);
    
    var nodes15522 = $("<span>");
    root16971.append(nodes15522);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15318, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15523 = $("<span>");
      root16980.append(nodes15523);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16981 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16981); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15523;
        nodes15523 = node.contents();
        oldNodes.replaceWith(nodes15523);
      }));
      callback(root16980); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15522;
      nodes15522 = node.contents();
      oldNodes.replaceWith(nodes15522);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp15391 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15319 = mobl.ref(result__);
    
    var nodes15524 = $("<span>");
    root16971.append(nodes15524);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15319, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16982 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15525 = $("<span>");
      root16982.append(nodes15525);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16983 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16983); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15525;
        nodes15525 = node.contents();
        oldNodes.replaceWith(nodes15525);
      }));
      callback(root16982); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15524;
      nodes15524 = node.contents();
      oldNodes.replaceWith(nodes15524);
    }));
    callback(root16971); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15513;
    nodes15513 = node.contents();
    oldNodes.replaceWith(nodes15513);
  }));
  callback(root16970); return subs__;
  
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
  var root16984 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1169 = $("<div>");
  
  var ref811 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref811.get() !== null) {
    node1169.attr('class', ref811.get());
    subs__.addSub(ref811.addEventListener('change', function(_, ref, val) {
      node1169.attr('class', val);
    }));
    
  }
  subs__.addSub(ref811.rebind());
  
  var val282 = onclick.get();
  if(val282 !== null) {
    subs__.addSub(mobl.domBind(node1169, 'tap', val282));
  }
  
  
  var node1170 = $("<div>");
  
  var ref810 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref810.get() !== null) {
    node1170.attr('class', ref810.get());
    subs__.addSub(ref810.addEventListener('change', function(_, ref, val) {
      node1170.attr('class', val);
    }));
    
  }
  subs__.addSub(ref810.rebind());
  
  
  var node1171 = $("<div>");
  
  var ref808 = text;
  node1171.text(""+ref808.get());
  var ignore171 = false;
  subs__.addSub(ref808.addEventListener('change', function(_, ref, val) {
    if(ignore171) return;
    node1171.text(""+val);
  }));
  subs__.addSub(ref808.rebind());
  
  
  var ref809 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref809.get() !== null) {
    node1171.attr('class', ref809.get());
    subs__.addSub(ref809.addEventListener('change', function(_, ref, val) {
      node1171.attr('class', val);
    }));
    
  }
  subs__.addSub(ref809.rebind());
  
  node1170.append(node1171);
  node1169.append(node1170);
  var nodes15526 = $("<span>");
  node1169.append(nodes15526);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl222();
  }));
  
  function renderControl222() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16985 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16985); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15526;
      nodes15526 = node.contents();
      oldNodes.replaceWith(nodes15526);
    }));
  }
  renderControl222();
  root16984.append(node1169);
  callback(root16984); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp15397 = result__;
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
  var root16986 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp15322 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp15322.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp15322.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp15322.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes15527 = $("<span>");
  root16986.append(nodes15527);
  subs__.addSub((mobl.block)(tmp15322, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root16987 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp15320 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp15320.set("A" + number.get() + ". ");
    }));
    
    var nodes15528 = $("<span>");
    root16987.append(nodes15528);
    subs__.addSub((mobl.label)(tmp15320, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root16988 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16988); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15528;
      nodes15528 = node.contents();
      oldNodes.replaceWith(nodes15528);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp15321 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp15321.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1172 = $("<span>");
    root16987.append(node1172);
    var condSubs419 = new mobl.CompSubscription();
    subs__.addSub(condSubs419);
    var oldValue419;
    var renderCond419 = function() {
      var value663 = tmp15321.get();
      if(oldValue419 === value663) return;
      oldValue419 = value663;
      var subs__ = condSubs419;
      subs__.unsubscribe();
      node1172.empty();
      if(value663) {
        
        var node1173 = $("<span>");
        
        var ref812 = mobl.ref("A" + number.get());
        if(ref812.get() !== null) {
          node1173.attr('id', ref812.get());
          subs__.addSub(ref812.addEventListener('change', function(_, ref, val) {
            node1173.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1173.attr('id', "A" + number.get());
          }));
          
        }
        subs__.addSub(ref812.rebind());
        
        var nodes15529 = $("<span>");
        node1173.append(nodes15529);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root16989 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16989); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes15529;
          nodes15529 = node.contents();
          oldNodes.replaceWith(nodes15529);
        }));
        node1172.append(node1173);
        
        
        
      } else {
        var nodes15530 = $("<span>");
        node1172.append(nodes15530);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root16990 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16990); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes15530;
          nodes15530 = node.contents();
          oldNodes.replaceWith(nodes15530);
        }));
        
        
      }
    };
    renderCond419();
    subs__.addSub(tmp15321.addEventListener('change', function() {
      renderCond419();
    }));
    
    callback(root16987); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15527;
    nodes15527 = node.contents();
    oldNodes.replaceWith(nodes15527);
  }));
  var nodes15531 = $("<span>");
  root16986.append(nodes15531);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root16991 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1174 = $("<span>");
    node1174.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp15399 = result__;
      var tmp15323 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp15398 = result__;
          var result__ = tmp15398;
          tmp15323.set(result__);
          
        });
      }));
      
      var nodes15535 = $("<span>");
      node1174.append(nodes15535);
      subs__.addSub((mobl.html)(tmp15323, function(_, callback) {
        var root16995 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16995); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15535;
        nodes15535 = node.contents();
        oldNodes.replaceWith(nodes15535);
      }));
      root16991.append(node1174);
      var nodes15532 = $("<span>");
      root16991.append(nodes15532);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16992 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16992); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15532;
        nodes15532 = node.contents();
        oldNodes.replaceWith(nodes15532);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp15324 = mobl.ref(result__);
      
      var nodes15533 = $("<span>");
      root16991.append(nodes15533);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp15324, function(_, callback) {
        var root16993 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16993); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15533;
        nodes15533 = node.contents();
        oldNodes.replaceWith(nodes15533);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp15325 = mobl.ref(result__);
      
      var nodes15534 = $("<span>");
      root16991.append(nodes15534);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp15325, function(_, callback) {
        var root16994 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16994); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15534;
        nodes15534 = node.contents();
        oldNodes.replaceWith(nodes15534);
      }));
      callback(root16991); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15531;
    nodes15531 = node.contents();
    oldNodes.replaceWith(nodes15531);
  }));
  callback(root16986); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp15400 = result__;
    var result__ = tmp15400;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp15401 = result__;
        var result__ = tmp15401;
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
  var root16996 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp15409 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp15327 = mobl.ref(result__);
  
  var nodes15536 = $("<span>");
  root16996.append(nodes15536);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp15327, function(_, callback) {
    var root16997 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp15402 = result__;
                       var result__ = tmp15402;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp15403 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp15326 = mobl.ref(result__);
    
    var nodes15537 = $("<span>");
    root16997.append(nodes15537);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp15326, function(_, callback) {
      var root16998 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16998); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15537;
      nodes15537 = node.contents();
      oldNodes.replaceWith(nodes15537);
    }));
    callback(root16997); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15536;
    nodes15536 = node.contents();
    oldNodes.replaceWith(nodes15536);
  }));
  var nodes15538 = $("<span>");
  root16996.append(nodes15538);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16999 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp15408 = result__;
                       var result__ = mobl.$("#Q" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15330 = mobl.ref(result__);
    
    var nodes15539 = $("<span>");
    root16999.append(nodes15539);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp15330, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root17000 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp15328 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp15328.set("Q" + number.get() + ". ");
      }));
      
      var nodes15540 = $("<span>");
      root17000.append(nodes15540);
      subs__.addSub((mobl.html)(tmp15328, function(_, callback) {
        var root17001 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17001); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15540;
        nodes15540 = node.contents();
        oldNodes.replaceWith(nodes15540);
      }));
      
      var node1175 = $("<span>");
      
      var ref813 = mobl.ref("Q" + number.get());
      if(ref813.get() !== null) {
        node1175.attr('id', ref813.get());
        subs__.addSub(ref813.addEventListener('change', function(_, ref, val) {
          node1175.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1175.attr('id', "Q" + number.get());
        }));
        
      }
      subs__.addSub(ref813.rebind());
      
      var nodes15542 = $("<span>");
      node1175.append(nodes15542);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root17003 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17003); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15542;
        nodes15542 = node.contents();
        oldNodes.replaceWith(nodes15542);
      }));
      root17000.append(node1175);
      
      var node1176 = $("<span>");
      node1176.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp15405 = result__;
        var tmp15329 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp15404 = result__;
            var result__ = tmp15404;
            tmp15329.set(result__);
            
          });
        }));
        
        var nodes15541 = $("<span>");
        node1176.append(nodes15541);
        subs__.addSub((mobl.html)(tmp15329, function(_, callback) {
          var root17002 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root17002); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes15541;
          nodes15541 = node.contents();
          oldNodes.replaceWith(nodes15541);
        }));
        root17000.append(node1176);
        callback(root17000); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15539;
      nodes15539 = node.contents();
      oldNodes.replaceWith(nodes15539);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp15407 = result__;
                       var result__ = mobl.$("#A" + number.get()).children("span:first").html();
                       qa.get().answer = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15332 = mobl.ref(result__);
    
    var nodes15543 = $("<span>");
    root16999.append(nodes15543);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15332, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root17004 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15544 = $("<span>");
      root17004.append(nodes15544);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17005 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp15406 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp15331 = mobl.ref(result__);
        
        var nodes15545 = $("<span>");
        root17005.append(nodes15545);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp15331, function(_, callback) {
          var root17006 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root17006); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes15545;
          nodes15545 = node.contents();
          oldNodes.replaceWith(nodes15545);
        }));
        callback(root17005); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes15544;
        nodes15544 = node.contents();
        oldNodes.replaceWith(nodes15544);
      }));
      
      var node1177 = $("<span>");
      root17004.append(node1177);
      var condSubs420 = new mobl.CompSubscription();
      subs__.addSub(condSubs420);
      var oldValue420;
      var renderCond420 = function() {
        var value664 = qa.get().done;
        if(oldValue420 === value664) return;
        oldValue420 = value664;
        var subs__ = condSubs420;
        subs__.unsubscribe();
        node1177.empty();
        if(value664) {
          var nodes15546 = $("<span>");
          node1177.append(nodes15546);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root17007 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root17007); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes15546;
            nodes15546 = node.contents();
            oldNodes.replaceWith(nodes15546);
          }));
          
          
        } else {
          
        }
      };
      renderCond420();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond420();
      }));
      
      callback(root17004); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15543;
      nodes15543 = node.contents();
      oldNodes.replaceWith(nodes15543);
    }));
    callback(root16999); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15538;
    nodes15538 = node.contents();
    oldNodes.replaceWith(nodes15538);
  }));
  callback(root16996); return subs__;
  
  
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
  qas.list(function(coll915) {
    coll915 = coll915.reverse();
    function processOne549() {
      var item;
      item = coll915.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll915.length > 0) processOne549(); else rest549();
      
    }
    function rest549() {
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
    if(coll915.length > 0) processOne549(); else rest549();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll916) {
    coll916 = coll916.reverse();
    function processOne550() {
      var item;
      item = coll916.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll916.length > 0) processOne550(); else rest550();
      
    }
    function rest550() {
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
    if(coll916.length > 0) processOne550(); else rest550();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll917) {
    coll917 = coll917.reverse();
    function processOne551() {
      var item;
      item = coll917.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll917.length > 0) processOne551(); else rest551();
      
    }
    function rest551() {
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
    if(coll917.length > 0) processOne551(); else rest551();
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