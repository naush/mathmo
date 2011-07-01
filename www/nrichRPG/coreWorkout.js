mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl.ui');
mobl.provides('plot');
mobl.provides('ui');
mobl.provides('mathJAX');
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
    var tmp8423 = result__;
    var result__ = tmp8423;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp8424 = result__;
      var result__ = tmp8424;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp8425 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1017) {
    coll1017 = coll1017.reverse();
    function processOne309() {
      var i;
      i = coll1017.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp8426 = result__;
        
        if(coll1017.length > 0) processOne309(); else rest309();
        
      });
    }
    function rest309() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1017.length > 0) processOne309(); else rest309();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1018) {
    coll1018 = coll1018.reverse();
    function processOne310() {
      var i;
      i = coll1018.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp8427 = result__;
          
          if(coll1018.length > 0) processOne310(); else rest310();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp8427 = result__;
            
            if(coll1018.length > 0) processOne310(); else rest310();
            
          });
        }
      }
    }
    function rest310() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1018.length > 0) processOne310(); else rest310();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1019) {
    coll1019 = coll1019.reverse();
    function processOne311() {
      var i;
      i = coll1019.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp8428 = result__;
        
        if(coll1019.length > 0) processOne311(); else rest311();
        
      });
    }
    function rest311() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1019.length > 0) processOne311(); else rest311();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root9791 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8465 = $("<span>");
  root9791.append(nodes8465);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9792 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8436 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8335 = mobl.ref(result__);
    
    var nodes8466 = $("<span>");
    root9792.append(nodes8466);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8335, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8467 = $("<span>");
      root9793.append(nodes8467);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9794 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9794); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8467;
        nodes8467 = node.contents();
        oldNodes.replaceWith(nodes8467);
      }));
      callback(root9793); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8466;
      nodes8466 = node.contents();
      oldNodes.replaceWith(nodes8466);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8435 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8336 = mobl.ref(result__);
    
    var nodes8468 = $("<span>");
    root9792.append(nodes8468);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8336, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9795 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8469 = $("<span>");
      root9795.append(nodes8469);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9796); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8469;
        nodes8469 = node.contents();
        oldNodes.replaceWith(nodes8469);
      }));
      callback(root9795); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8468;
      nodes8468 = node.contents();
      oldNodes.replaceWith(nodes8468);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8434 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8337 = mobl.ref(result__);
    
    var nodes8470 = $("<span>");
    root9792.append(nodes8470);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8337, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8471 = $("<span>");
      root9797.append(nodes8471);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9798); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8471;
        nodes8471 = node.contents();
        oldNodes.replaceWith(nodes8471);
      }));
      callback(root9797); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8470;
      nodes8470 = node.contents();
      oldNodes.replaceWith(nodes8470);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8433 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8338 = mobl.ref(result__);
    
    var nodes8472 = $("<span>");
    root9792.append(nodes8472);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8338, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9799 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8473 = $("<span>");
      root9799.append(nodes8473);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9800 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9800); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8473;
        nodes8473 = node.contents();
        oldNodes.replaceWith(nodes8473);
      }));
      callback(root9799); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8472;
      nodes8472 = node.contents();
      oldNodes.replaceWith(nodes8472);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8432 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8339 = mobl.ref(result__);
    
    var nodes8474 = $("<span>");
    root9792.append(nodes8474);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8339, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9801 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8475 = $("<span>");
      root9801.append(nodes8475);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9802 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9802); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8475;
        nodes8475 = node.contents();
        oldNodes.replaceWith(nodes8475);
      }));
      callback(root9801); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8474;
      nodes8474 = node.contents();
      oldNodes.replaceWith(nodes8474);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8431 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8340 = mobl.ref(result__);
    
    var nodes8476 = $("<span>");
    root9792.append(nodes8476);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8340, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9803 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8477 = $("<span>");
      root9803.append(nodes8477);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9804 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9804); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8477;
        nodes8477 = node.contents();
        oldNodes.replaceWith(nodes8477);
      }));
      callback(root9803); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8476;
      nodes8476 = node.contents();
      oldNodes.replaceWith(nodes8476);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8430 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8341 = mobl.ref(result__);
    
    var nodes8478 = $("<span>");
    root9792.append(nodes8478);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8341, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9805 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8479 = $("<span>");
      root9805.append(nodes8479);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9806 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9806); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8479;
        nodes8479 = node.contents();
        oldNodes.replaceWith(nodes8479);
      }));
      callback(root9805); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8478;
      nodes8478 = node.contents();
      oldNodes.replaceWith(nodes8478);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8429 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8342 = mobl.ref(result__);
    
    var nodes8480 = $("<span>");
    root9792.append(nodes8480);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8342, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9807 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8481 = $("<span>");
      root9807.append(nodes8481);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9808 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9808); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8481;
        nodes8481 = node.contents();
        oldNodes.replaceWith(nodes8481);
      }));
      callback(root9807); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8480;
      nodes8480 = node.contents();
      oldNodes.replaceWith(nodes8480);
    }));
    callback(root9792); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8465;
    nodes8465 = node.contents();
    oldNodes.replaceWith(nodes8465);
  }));
  callback(root9791); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root9809 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes8482 = $("<span>");
  root9809.append(nodes8482);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9810 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8344 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8343 = mobl.ref(result__);
    
    var nodes8483 = $("<span>");
    root9810.append(nodes8483);
    subs__.addSub((ui.backButton)(tmp8343, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8344, function(_, callback) {
      var root9811 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9811); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8483;
      nodes8483 = node.contents();
      oldNodes.replaceWith(nodes8483);
    }));
    callback(root9810); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8482;
    nodes8482 = node.contents();
    oldNodes.replaceWith(nodes8482);
  }));
  var nodes8484 = $("<span>");
  root9809.append(nodes8484);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9812 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp8444 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8345 = mobl.ref(result__);
    
    var nodes8485 = $("<span>");
    root9812.append(nodes8485);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8345, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8486 = $("<span>");
      root9813.append(nodes8486);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9814 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9814); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8486;
        nodes8486 = node.contents();
        oldNodes.replaceWith(nodes8486);
      }));
      callback(root9813); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8485;
      nodes8485 = node.contents();
      oldNodes.replaceWith(nodes8485);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp8443 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8346 = mobl.ref(result__);
    
    var nodes8487 = $("<span>");
    root9812.append(nodes8487);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8346, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9815 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8488 = $("<span>");
      root9815.append(nodes8488);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9816 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9816); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8488;
        nodes8488 = node.contents();
        oldNodes.replaceWith(nodes8488);
      }));
      callback(root9815); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8487;
      nodes8487 = node.contents();
      oldNodes.replaceWith(nodes8487);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp8442 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8347 = mobl.ref(result__);
    
    var nodes8489 = $("<span>");
    root9812.append(nodes8489);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8347, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9817 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8490 = $("<span>");
      root9817.append(nodes8490);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9818 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9818); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8490;
        nodes8490 = node.contents();
        oldNodes.replaceWith(nodes8490);
      }));
      callback(root9817); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8489;
      nodes8489 = node.contents();
      oldNodes.replaceWith(nodes8489);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp8441 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8348 = mobl.ref(result__);
    
    var nodes8491 = $("<span>");
    root9812.append(nodes8491);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8348, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9819 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8492 = $("<span>");
      root9819.append(nodes8492);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9820 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9820); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8492;
        nodes8492 = node.contents();
        oldNodes.replaceWith(nodes8492);
      }));
      callback(root9819); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8491;
      nodes8491 = node.contents();
      oldNodes.replaceWith(nodes8491);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp8440 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8349 = mobl.ref(result__);
    
    var nodes8493 = $("<span>");
    root9812.append(nodes8493);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8349, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8494 = $("<span>");
      root9821.append(nodes8494);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9822 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9822); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8494;
        nodes8494 = node.contents();
        oldNodes.replaceWith(nodes8494);
      }));
      callback(root9821); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8493;
      nodes8493 = node.contents();
      oldNodes.replaceWith(nodes8493);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp8439 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8350 = mobl.ref(result__);
    
    var nodes8495 = $("<span>");
    root9812.append(nodes8495);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8350, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9823 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8496 = $("<span>");
      root9823.append(nodes8496);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9824 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9824); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8496;
        nodes8496 = node.contents();
        oldNodes.replaceWith(nodes8496);
      }));
      callback(root9823); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8495;
      nodes8495 = node.contents();
      oldNodes.replaceWith(nodes8495);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp8438 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8351 = mobl.ref(result__);
    
    var nodes8497 = $("<span>");
    root9812.append(nodes8497);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8351, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9825 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8498 = $("<span>");
      root9825.append(nodes8498);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9826); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8498;
        nodes8498 = node.contents();
        oldNodes.replaceWith(nodes8498);
      }));
      callback(root9825); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8497;
      nodes8497 = node.contents();
      oldNodes.replaceWith(nodes8497);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp8437 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8352 = mobl.ref(result__);
    
    var nodes8499 = $("<span>");
    root9812.append(nodes8499);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8352, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9827 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8500 = $("<span>");
      root9827.append(nodes8500);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9828 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9828); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8500;
        nodes8500 = node.contents();
        oldNodes.replaceWith(nodes8500);
      }));
      callback(root9827); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8499;
      nodes8499 = node.contents();
      oldNodes.replaceWith(nodes8499);
    }));
    callback(root9812); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8484;
    nodes8484 = node.contents();
    oldNodes.replaceWith(nodes8484);
  }));
  callback(root9809); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root9829 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8501 = $("<span>");
  root9829.append(nodes8501);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9830 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8354 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8353 = mobl.ref(result__);
    
    var nodes8502 = $("<span>");
    root9830.append(nodes8502);
    subs__.addSub((ui.backButton)(tmp8353, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8354, function(_, callback) {
      var root9831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9831); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8502;
      nodes8502 = node.contents();
      oldNodes.replaceWith(nodes8502);
    }));
    callback(root9830); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8501;
    nodes8501 = node.contents();
    oldNodes.replaceWith(nodes8501);
  }));
  var nodes8503 = $("<span>");
  root9829.append(nodes8503);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9832 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp8449 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8355 = mobl.ref(result__);
    
    var nodes8504 = $("<span>");
    root9832.append(nodes8504);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8355, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8505 = $("<span>");
      root9833.append(nodes8505);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9834); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8505;
        nodes8505 = node.contents();
        oldNodes.replaceWith(nodes8505);
      }));
      callback(root9833); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8504;
      nodes8504 = node.contents();
      oldNodes.replaceWith(nodes8504);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp8448 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8356 = mobl.ref(result__);
    
    var nodes8506 = $("<span>");
    root9832.append(nodes8506);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8356, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8507 = $("<span>");
      root9835.append(nodes8507);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9836 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9836); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8507;
        nodes8507 = node.contents();
        oldNodes.replaceWith(nodes8507);
      }));
      callback(root9835); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8506;
      nodes8506 = node.contents();
      oldNodes.replaceWith(nodes8506);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp8447 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8357 = mobl.ref(result__);
    
    var nodes8508 = $("<span>");
    root9832.append(nodes8508);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8357, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9837 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8509 = $("<span>");
      root9837.append(nodes8509);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9838 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9838); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8509;
        nodes8509 = node.contents();
        oldNodes.replaceWith(nodes8509);
      }));
      callback(root9837); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8508;
      nodes8508 = node.contents();
      oldNodes.replaceWith(nodes8508);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp8446 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8358 = mobl.ref(result__);
    
    var nodes8510 = $("<span>");
    root9832.append(nodes8510);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8358, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9839 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8511 = $("<span>");
      root9839.append(nodes8511);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9840 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9840); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8511;
        nodes8511 = node.contents();
        oldNodes.replaceWith(nodes8511);
      }));
      callback(root9839); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8510;
      nodes8510 = node.contents();
      oldNodes.replaceWith(nodes8510);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp8445 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8359 = mobl.ref(result__);
    
    var nodes8512 = $("<span>");
    root9832.append(nodes8512);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8359, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9841 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8513 = $("<span>");
      root9841.append(nodes8513);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9842 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9842); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8513;
        nodes8513 = node.contents();
        oldNodes.replaceWith(nodes8513);
      }));
      callback(root9841); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8512;
      nodes8512 = node.contents();
      oldNodes.replaceWith(nodes8512);
    }));
    callback(root9832); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8503;
    nodes8503 = node.contents();
    oldNodes.replaceWith(nodes8503);
  }));
  callback(root9829); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root9843 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8514 = $("<span>");
  root9843.append(nodes8514);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9844 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8361 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8360 = mobl.ref(result__);
    
    var nodes8515 = $("<span>");
    root9844.append(nodes8515);
    subs__.addSub((ui.backButton)(tmp8360, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8361, function(_, callback) {
      var root9845 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9845); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8515;
      nodes8515 = node.contents();
      oldNodes.replaceWith(nodes8515);
    }));
    callback(root9844); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8514;
    nodes8514 = node.contents();
    oldNodes.replaceWith(nodes8514);
  }));
  var nodes8516 = $("<span>");
  root9843.append(nodes8516);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9846 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp8452 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8362 = mobl.ref(result__);
    
    var nodes8517 = $("<span>");
    root9846.append(nodes8517);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8362, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8518 = $("<span>");
      root9847.append(nodes8518);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9848 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9848); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8518;
        nodes8518 = node.contents();
        oldNodes.replaceWith(nodes8518);
      }));
      callback(root9847); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8517;
      nodes8517 = node.contents();
      oldNodes.replaceWith(nodes8517);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp8451 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8363 = mobl.ref(result__);
    
    var nodes8519 = $("<span>");
    root9846.append(nodes8519);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8363, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9849 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8520 = $("<span>");
      root9849.append(nodes8520);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9850 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9850); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8520;
        nodes8520 = node.contents();
        oldNodes.replaceWith(nodes8520);
      }));
      callback(root9849); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8519;
      nodes8519 = node.contents();
      oldNodes.replaceWith(nodes8519);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp8450 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8364 = mobl.ref(result__);
    
    var nodes8521 = $("<span>");
    root9846.append(nodes8521);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8364, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9851 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8522 = $("<span>");
      root9851.append(nodes8522);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9852 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9852); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8522;
        nodes8522 = node.contents();
        oldNodes.replaceWith(nodes8522);
      }));
      callback(root9851); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8521;
      nodes8521 = node.contents();
      oldNodes.replaceWith(nodes8521);
    }));
    callback(root9846); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8516;
    nodes8516 = node.contents();
    oldNodes.replaceWith(nodes8516);
  }));
  callback(root9843); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root9853 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8523 = $("<span>");
  root9853.append(nodes8523);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9854 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8366 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8365 = mobl.ref(result__);
    
    var nodes8524 = $("<span>");
    root9854.append(nodes8524);
    subs__.addSub((ui.backButton)(tmp8365, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8366, function(_, callback) {
      var root9855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9855); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8524;
      nodes8524 = node.contents();
      oldNodes.replaceWith(nodes8524);
    }));
    callback(root9854); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8523;
    nodes8523 = node.contents();
    oldNodes.replaceWith(nodes8523);
  }));
  var nodes8525 = $("<span>");
  root9853.append(nodes8525);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9856 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp8456 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8367 = mobl.ref(result__);
    
    var nodes8526 = $("<span>");
    root9856.append(nodes8526);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8367, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9857 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8527 = $("<span>");
      root9857.append(nodes8527);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9858 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9858); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8527;
        nodes8527 = node.contents();
        oldNodes.replaceWith(nodes8527);
      }));
      callback(root9857); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8526;
      nodes8526 = node.contents();
      oldNodes.replaceWith(nodes8526);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp8455 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8368 = mobl.ref(result__);
    
    var nodes8528 = $("<span>");
    root9856.append(nodes8528);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8368, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8529 = $("<span>");
      root9859.append(nodes8529);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9860 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9860); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8529;
        nodes8529 = node.contents();
        oldNodes.replaceWith(nodes8529);
      }));
      callback(root9859); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8528;
      nodes8528 = node.contents();
      oldNodes.replaceWith(nodes8528);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp8454 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8369 = mobl.ref(result__);
    
    var nodes8530 = $("<span>");
    root9856.append(nodes8530);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8369, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9861 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8531 = $("<span>");
      root9861.append(nodes8531);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9862 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9862); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8531;
        nodes8531 = node.contents();
        oldNodes.replaceWith(nodes8531);
      }));
      callback(root9861); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8530;
      nodes8530 = node.contents();
      oldNodes.replaceWith(nodes8530);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp8453 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8370 = mobl.ref(result__);
    
    var nodes8532 = $("<span>");
    root9856.append(nodes8532);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8370, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9863 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8533 = $("<span>");
      root9863.append(nodes8533);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9864 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9864); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8533;
        nodes8533 = node.contents();
        oldNodes.replaceWith(nodes8533);
      }));
      callback(root9863); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8532;
      nodes8532 = node.contents();
      oldNodes.replaceWith(nodes8532);
    }));
    callback(root9856); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8525;
    nodes8525 = node.contents();
    oldNodes.replaceWith(nodes8525);
  }));
  callback(root9853); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root9865 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8534 = $("<span>");
  root9865.append(nodes8534);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9866 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8372 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8371 = mobl.ref(result__);
    
    var nodes8535 = $("<span>");
    root9866.append(nodes8535);
    subs__.addSub((ui.backButton)(tmp8371, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8372, function(_, callback) {
      var root9867 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9867); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8535;
      nodes8535 = node.contents();
      oldNodes.replaceWith(nodes8535);
    }));
    callback(root9866); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8534;
    nodes8534 = node.contents();
    oldNodes.replaceWith(nodes8534);
  }));
  var nodes8536 = $("<span>");
  root9865.append(nodes8536);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9868 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp8458 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8373 = mobl.ref(result__);
    
    var nodes8537 = $("<span>");
    root9868.append(nodes8537);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8373, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8538 = $("<span>");
      root9869.append(nodes8538);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9870); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8538;
        nodes8538 = node.contents();
        oldNodes.replaceWith(nodes8538);
      }));
      callback(root9869); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8537;
      nodes8537 = node.contents();
      oldNodes.replaceWith(nodes8537);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp8457 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8374 = mobl.ref(result__);
    
    var nodes8539 = $("<span>");
    root9868.append(nodes8539);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8374, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8540 = $("<span>");
      root9871.append(nodes8540);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9872 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9872); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8540;
        nodes8540 = node.contents();
        oldNodes.replaceWith(nodes8540);
      }));
      callback(root9871); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8539;
      nodes8539 = node.contents();
      oldNodes.replaceWith(nodes8539);
    }));
    callback(root9868); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8536;
    nodes8536 = node.contents();
    oldNodes.replaceWith(nodes8536);
  }));
  callback(root9865); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root9873 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8541 = $("<span>");
  root9873.append(nodes8541);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9874 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8376 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8375 = mobl.ref(result__);
    
    var nodes8542 = $("<span>");
    root9874.append(nodes8542);
    subs__.addSub((ui.backButton)(tmp8375, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8376, function(_, callback) {
      var root9875 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9875); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8542;
      nodes8542 = node.contents();
      oldNodes.replaceWith(nodes8542);
    }));
    callback(root9874); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8541;
    nodes8541 = node.contents();
    oldNodes.replaceWith(nodes8541);
  }));
  var nodes8543 = $("<span>");
  root9873.append(nodes8543);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9876 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp8463 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8377 = mobl.ref(result__);
    
    var nodes8544 = $("<span>");
    root9876.append(nodes8544);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8377, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9877 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8545 = $("<span>");
      root9877.append(nodes8545);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9878 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9878); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8545;
        nodes8545 = node.contents();
        oldNodes.replaceWith(nodes8545);
      }));
      callback(root9877); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8544;
      nodes8544 = node.contents();
      oldNodes.replaceWith(nodes8544);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp8462 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8378 = mobl.ref(result__);
    
    var nodes8546 = $("<span>");
    root9876.append(nodes8546);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8378, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8547 = $("<span>");
      root9879.append(nodes8547);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9880 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9880); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8547;
        nodes8547 = node.contents();
        oldNodes.replaceWith(nodes8547);
      }));
      callback(root9879); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8546;
      nodes8546 = node.contents();
      oldNodes.replaceWith(nodes8546);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp8461 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8379 = mobl.ref(result__);
    
    var nodes8548 = $("<span>");
    root9876.append(nodes8548);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8379, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8549 = $("<span>");
      root9881.append(nodes8549);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8549;
        nodes8549 = node.contents();
        oldNodes.replaceWith(nodes8549);
      }));
      callback(root9881); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8548;
      nodes8548 = node.contents();
      oldNodes.replaceWith(nodes8548);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp8460 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8380 = mobl.ref(result__);
    
    var nodes8550 = $("<span>");
    root9876.append(nodes8550);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8380, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8551 = $("<span>");
      root9883.append(nodes8551);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8551;
        nodes8551 = node.contents();
        oldNodes.replaceWith(nodes8551);
      }));
      callback(root9883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8550;
      nodes8550 = node.contents();
      oldNodes.replaceWith(nodes8550);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp8459 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8381 = mobl.ref(result__);
    
    var nodes8552 = $("<span>");
    root9876.append(nodes8552);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8381, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9885 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8553 = $("<span>");
      root9885.append(nodes8553);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9886 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9886); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8553;
        nodes8553 = node.contents();
        oldNodes.replaceWith(nodes8553);
      }));
      callback(root9885); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8552;
      nodes8552 = node.contents();
      oldNodes.replaceWith(nodes8552);
    }));
    callback(root9876); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8543;
    nodes8543 = node.contents();
    oldNodes.replaceWith(nodes8543);
  }));
  callback(root9873); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root9887 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8554 = $("<span>");
  root9887.append(nodes8554);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9888 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8383 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8382 = mobl.ref(result__);
    
    var nodes8555 = $("<span>");
    root9888.append(nodes8555);
    subs__.addSub((ui.backButton)(tmp8382, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8383, function(_, callback) {
      var root9889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9889); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8555;
      nodes8555 = node.contents();
      oldNodes.replaceWith(nodes8555);
    }));
    callback(root9888); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8554;
    nodes8554 = node.contents();
    oldNodes.replaceWith(nodes8554);
  }));
  var nodes8556 = $("<span>");
  root9887.append(nodes8556);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9890 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp8466 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8384 = mobl.ref(result__);
    
    var nodes8557 = $("<span>");
    root9890.append(nodes8557);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8384, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9891 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8558 = $("<span>");
      root9891.append(nodes8558);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9892 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9892); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8558;
        nodes8558 = node.contents();
        oldNodes.replaceWith(nodes8558);
      }));
      callback(root9891); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8557;
      nodes8557 = node.contents();
      oldNodes.replaceWith(nodes8557);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp8465 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8385 = mobl.ref(result__);
    
    var nodes8559 = $("<span>");
    root9890.append(nodes8559);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8385, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9893 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8560 = $("<span>");
      root9893.append(nodes8560);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9894 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9894); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8560;
        nodes8560 = node.contents();
        oldNodes.replaceWith(nodes8560);
      }));
      callback(root9893); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8559;
      nodes8559 = node.contents();
      oldNodes.replaceWith(nodes8559);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp8464 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8386 = mobl.ref(result__);
    
    var nodes8561 = $("<span>");
    root9890.append(nodes8561);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8386, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9895 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8562 = $("<span>");
      root9895.append(nodes8562);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9896 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9896); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8562;
        nodes8562 = node.contents();
        oldNodes.replaceWith(nodes8562);
      }));
      callback(root9895); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8561;
      nodes8561 = node.contents();
      oldNodes.replaceWith(nodes8561);
    }));
    callback(root9890); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8556;
    nodes8556 = node.contents();
    oldNodes.replaceWith(nodes8556);
  }));
  callback(root9887); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root9897 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8563 = $("<span>");
  root9897.append(nodes8563);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9898 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8388 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8387 = mobl.ref(result__);
    
    var nodes8564 = $("<span>");
    root9898.append(nodes8564);
    subs__.addSub((ui.backButton)(tmp8387, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8388, function(_, callback) {
      var root9899 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9899); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8564;
      nodes8564 = node.contents();
      oldNodes.replaceWith(nodes8564);
    }));
    callback(root9898); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8563;
    nodes8563 = node.contents();
    oldNodes.replaceWith(nodes8563);
  }));
  var nodes8565 = $("<span>");
  root9897.append(nodes8565);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9900 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp8467 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8389 = mobl.ref(result__);
    
    var nodes8566 = $("<span>");
    root9900.append(nodes8566);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8389, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9901 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8567 = $("<span>");
      root9901.append(nodes8567);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9902 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9902); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8567;
        nodes8567 = node.contents();
        oldNodes.replaceWith(nodes8567);
      }));
      callback(root9901); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8566;
      nodes8566 = node.contents();
      oldNodes.replaceWith(nodes8566);
    }));
    callback(root9900); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8565;
    nodes8565 = node.contents();
    oldNodes.replaceWith(nodes8565);
  }));
  callback(root9897); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root9903 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8568 = $("<span>");
  root9903.append(nodes8568);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9904 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp8480 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8390 = mobl.ref(result__);
    
    var nodes8569 = $("<span>");
    root9904.append(nodes8569);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8390, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8570 = $("<span>");
      root9905.append(nodes8570);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9906 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9906); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8570;
        nodes8570 = node.contents();
        oldNodes.replaceWith(nodes8570);
      }));
      callback(root9905); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8569;
      nodes8569 = node.contents();
      oldNodes.replaceWith(nodes8569);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp8479 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8391 = mobl.ref(result__);
    
    var nodes8571 = $("<span>");
    root9904.append(nodes8571);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8391, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9907 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8572 = $("<span>");
      root9907.append(nodes8572);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9908 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9908); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8572;
        nodes8572 = node.contents();
        oldNodes.replaceWith(nodes8572);
      }));
      callback(root9907); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8571;
      nodes8571 = node.contents();
      oldNodes.replaceWith(nodes8571);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp8478 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8392 = mobl.ref(result__);
    
    var nodes8573 = $("<span>");
    root9904.append(nodes8573);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8392, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9909 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8574 = $("<span>");
      root9909.append(nodes8574);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9910 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9910); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8574;
        nodes8574 = node.contents();
        oldNodes.replaceWith(nodes8574);
      }));
      callback(root9909); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8573;
      nodes8573 = node.contents();
      oldNodes.replaceWith(nodes8573);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp8477 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8393 = mobl.ref(result__);
    
    var nodes8575 = $("<span>");
    root9904.append(nodes8575);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8393, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9911 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8576 = $("<span>");
      root9911.append(nodes8576);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9912 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9912); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8576;
        nodes8576 = node.contents();
        oldNodes.replaceWith(nodes8576);
      }));
      callback(root9911); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8575;
      nodes8575 = node.contents();
      oldNodes.replaceWith(nodes8575);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp8476 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8394 = mobl.ref(result__);
    
    var nodes8577 = $("<span>");
    root9904.append(nodes8577);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8394, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9913 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8578 = $("<span>");
      root9913.append(nodes8578);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9914 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9914); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8578;
        nodes8578 = node.contents();
        oldNodes.replaceWith(nodes8578);
      }));
      callback(root9913); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8577;
      nodes8577 = node.contents();
      oldNodes.replaceWith(nodes8577);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp8475 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8395 = mobl.ref(result__);
    
    var nodes8579 = $("<span>");
    root9904.append(nodes8579);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8395, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9915 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8580 = $("<span>");
      root9915.append(nodes8580);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9916 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9916); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8580;
        nodes8580 = node.contents();
        oldNodes.replaceWith(nodes8580);
      }));
      callback(root9915); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8579;
      nodes8579 = node.contents();
      oldNodes.replaceWith(nodes8579);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp8474 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8396 = mobl.ref(result__);
    
    var nodes8581 = $("<span>");
    root9904.append(nodes8581);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8396, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9917 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8582 = $("<span>");
      root9917.append(nodes8582);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9918 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9918); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8582;
        nodes8582 = node.contents();
        oldNodes.replaceWith(nodes8582);
      }));
      callback(root9917); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8581;
      nodes8581 = node.contents();
      oldNodes.replaceWith(nodes8581);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp8473 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8397 = mobl.ref(result__);
    
    var nodes8583 = $("<span>");
    root9904.append(nodes8583);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8397, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9919 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8584 = $("<span>");
      root9919.append(nodes8584);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9920 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9920); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8584;
        nodes8584 = node.contents();
        oldNodes.replaceWith(nodes8584);
      }));
      callback(root9919); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8583;
      nodes8583 = node.contents();
      oldNodes.replaceWith(nodes8583);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp8472 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8398 = mobl.ref(result__);
    
    var nodes8585 = $("<span>");
    root9904.append(nodes8585);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8398, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9921 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8586 = $("<span>");
      root9921.append(nodes8586);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9922 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9922); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8586;
        nodes8586 = node.contents();
        oldNodes.replaceWith(nodes8586);
      }));
      callback(root9921); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8585;
      nodes8585 = node.contents();
      oldNodes.replaceWith(nodes8585);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp8471 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8399 = mobl.ref(result__);
    
    var nodes8587 = $("<span>");
    root9904.append(nodes8587);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8399, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9923 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8588 = $("<span>");
      root9923.append(nodes8588);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9924 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9924); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8588;
        nodes8588 = node.contents();
        oldNodes.replaceWith(nodes8588);
      }));
      callback(root9923); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8587;
      nodes8587 = node.contents();
      oldNodes.replaceWith(nodes8587);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp8470 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8400 = mobl.ref(result__);
    
    var nodes8589 = $("<span>");
    root9904.append(nodes8589);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8400, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9925 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8590 = $("<span>");
      root9925.append(nodes8590);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9926 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9926); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8590;
        nodes8590 = node.contents();
        oldNodes.replaceWith(nodes8590);
      }));
      callback(root9925); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8589;
      nodes8589 = node.contents();
      oldNodes.replaceWith(nodes8589);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp8469 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8401 = mobl.ref(result__);
    
    var nodes8591 = $("<span>");
    root9904.append(nodes8591);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8401, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9927 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8592 = $("<span>");
      root9927.append(nodes8592);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9928 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9928); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8592;
        nodes8592 = node.contents();
        oldNodes.replaceWith(nodes8592);
      }));
      callback(root9927); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8591;
      nodes8591 = node.contents();
      oldNodes.replaceWith(nodes8591);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp8468 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8402 = mobl.ref(result__);
    
    var nodes8593 = $("<span>");
    root9904.append(nodes8593);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8402, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9929 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8594 = $("<span>");
      root9929.append(nodes8594);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9930 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9930); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8594;
        nodes8594 = node.contents();
        oldNodes.replaceWith(nodes8594);
      }));
      callback(root9929); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8593;
      nodes8593 = node.contents();
      oldNodes.replaceWith(nodes8593);
    }));
    callback(root9904); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8568;
    nodes8568 = node.contents();
    oldNodes.replaceWith(nodes8568);
  }));
  callback(root9903); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root9931 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8595 = $("<span>");
  root9931.append(nodes8595);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9932 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp8486 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8403 = mobl.ref(result__);
    
    var nodes8596 = $("<span>");
    root9932.append(nodes8596);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8403, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9933 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8597 = $("<span>");
      root9933.append(nodes8597);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9934 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9934); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8597;
        nodes8597 = node.contents();
        oldNodes.replaceWith(nodes8597);
      }));
      callback(root9933); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8596;
      nodes8596 = node.contents();
      oldNodes.replaceWith(nodes8596);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp8485 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8404 = mobl.ref(result__);
    
    var nodes8598 = $("<span>");
    root9932.append(nodes8598);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8404, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9935 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8599 = $("<span>");
      root9935.append(nodes8599);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9936 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9936); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8599;
        nodes8599 = node.contents();
        oldNodes.replaceWith(nodes8599);
      }));
      callback(root9935); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8598;
      nodes8598 = node.contents();
      oldNodes.replaceWith(nodes8598);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp8484 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8405 = mobl.ref(result__);
    
    var nodes8600 = $("<span>");
    root9932.append(nodes8600);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8405, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9937 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8601 = $("<span>");
      root9937.append(nodes8601);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9938 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9938); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8601;
        nodes8601 = node.contents();
        oldNodes.replaceWith(nodes8601);
      }));
      callback(root9937); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8600;
      nodes8600 = node.contents();
      oldNodes.replaceWith(nodes8600);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp8483 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8406 = mobl.ref(result__);
    
    var nodes8602 = $("<span>");
    root9932.append(nodes8602);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8406, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9939 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8603 = $("<span>");
      root9939.append(nodes8603);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9940 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9940); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8603;
        nodes8603 = node.contents();
        oldNodes.replaceWith(nodes8603);
      }));
      callback(root9939); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8602;
      nodes8602 = node.contents();
      oldNodes.replaceWith(nodes8602);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp8482 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8407 = mobl.ref(result__);
    
    var nodes8604 = $("<span>");
    root9932.append(nodes8604);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8407, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9941 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8605 = $("<span>");
      root9941.append(nodes8605);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9942 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9942); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8605;
        nodes8605 = node.contents();
        oldNodes.replaceWith(nodes8605);
      }));
      callback(root9941); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8604;
      nodes8604 = node.contents();
      oldNodes.replaceWith(nodes8604);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp8481 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8408 = mobl.ref(result__);
    
    var nodes8606 = $("<span>");
    root9932.append(nodes8606);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8408, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8607 = $("<span>");
      root9943.append(nodes8607);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9944 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9944); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8607;
        nodes8607 = node.contents();
        oldNodes.replaceWith(nodes8607);
      }));
      callback(root9943); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8606;
      nodes8606 = node.contents();
      oldNodes.replaceWith(nodes8606);
    }));
    callback(root9932); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8595;
    nodes8595 = node.contents();
    oldNodes.replaceWith(nodes8595);
  }));
  callback(root9931); return subs__;
  
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
  var root9945 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1418 = $("<div>");
  
  var ref1384 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref1384.get() !== null) {
    node1418.attr('class', ref1384.get());
    subs__.addSub(ref1384.addEventListener('change', function(_, ref, val) {
      node1418.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1384.rebind());
  
  var val629 = onclick.get();
  if(val629 !== null) {
    subs__.addSub(mobl.domBind(node1418, 'tap', val629));
  }
  
  
  var node1419 = $("<div>");
  
  var ref1383 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref1383.get() !== null) {
    node1419.attr('class', ref1383.get());
    subs__.addSub(ref1383.addEventListener('change', function(_, ref, val) {
      node1419.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1383.rebind());
  
  
  var node1420 = $("<div>");
  
  var ref1381 = text;
  node1420.text(""+ref1381.get());
  var ignore258 = false;
  subs__.addSub(ref1381.addEventListener('change', function(_, ref, val) {
    if(ignore258) return;
    node1420.text(""+val);
  }));
  subs__.addSub(ref1381.rebind());
  
  
  var ref1382 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1382.get() !== null) {
    node1420.attr('class', ref1382.get());
    subs__.addSub(ref1382.addEventListener('change', function(_, ref, val) {
      node1420.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1382.rebind());
  
  node1419.append(node1420);
  node1418.append(node1419);
  var nodes8608 = $("<span>");
  node1418.append(nodes8608);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl542();
  }));
  
  function renderControl542() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9946 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9946); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8608;
      nodes8608 = node.contents();
      oldNodes.replaceWith(nodes8608);
    }));
  }
  renderControl542();
  root9945.append(node1418);
  callback(root9945); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp8487 = result__;
    var result__ = qa.done && qa.answer == "%GRAPH%";
    if(result__) {
      var result__ = mobl.JSON.parse(qa.plotData);
      var jsonData = result__;
      var result__ = plot.lineChart("corePlotArea", jsonData);
      if(callback && callback.apply) callback(); return;
    } else {
      {
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};

nrichRPG.coreWorkout.removeMathJaxIncidentElements = function() {
   var __this = this;
  mobl.$("span").remove(".MathJax_Preview");
  mobl.$("[id^='MathJax-Element-']").each(function(callback) {
             var __this = this;
             var result__ = mobl.$(__this).remove();
             if(callback && callback.apply) callback(); return;
           });
};


nrichRPG.coreWorkout.answerBlock = function(qa, number, elements, callback) {
  var root9947 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                   var result__ = qa.get().answer != "%GRAPH%";
                   if(result__) {
                     var result__ = mobl.$("#answer-block-" + number.get()).children("span:first").html();
                     qa.get().answerHtml = result__;
                     if(callback && callback.apply) callback(); return;
                   } else {
                     {
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp8413 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp8412 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp8412.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp8412.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp8412.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes8609 = $("<span>");
  root9947.append(nodes8609);
  subs__.addSub((mobl.block)(tmp8412, mobl.ref(null), tmp8413, mobl.ref(null), function(_, callback) {
    var root9948 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp8409 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp8409.set("A" + number.get() + ". ");
    }));
    
    var nodes8610 = $("<span>");
    root9948.append(nodes8610);
    subs__.addSub((mobl.label)(tmp8409, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9949); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8610;
      nodes8610 = node.contents();
      oldNodes.replaceWith(nodes8610);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp8411 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp8411.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1421 = $("<span>");
    root9948.append(node1421);
    var condSubs350 = new mobl.CompSubscription();
    subs__.addSub(condSubs350);
    var oldValue350;
    var renderCond350 = function() {
      var value822 = tmp8411.get();
      if(oldValue350 === value822) return;
      oldValue350 = value822;
      var subs__ = condSubs350;
      subs__.unsubscribe();
      node1421.empty();
      if(value822) {
        
        var node1422 = $("<span>");
        
        var ref1385 = mobl.ref("answer-block-" + number.get());
        if(ref1385.get() !== null) {
          node1422.attr('id', ref1385.get());
          subs__.addSub(ref1385.addEventListener('change', function(_, ref, val) {
            node1422.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1422.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref1385.rebind());
        
        var result__ = nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp8410 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp8410.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp8410.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes8611 = $("<span>");
        node1422.append(nodes8611);
        subs__.addSub((mobl.html)(tmp8410, function(_, callback) {
          var root9950 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9950); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8611;
          nodes8611 = node.contents();
          oldNodes.replaceWith(nodes8611);
        }));
        node1421.append(node1422);
        
        
        
      } else {
        var nodes8612 = $("<span>");
        node1421.append(nodes8612);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root9951 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9951); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8612;
          nodes8612 = node.contents();
          oldNodes.replaceWith(nodes8612);
        }));
        
        
      }
    };
    renderCond350();
    subs__.addSub(tmp8411.addEventListener('change', function() {
      renderCond350();
    }));
    
    callback(root9948); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8609;
    nodes8609 = node.contents();
    oldNodes.replaceWith(nodes8609);
  }));
  var nodes8613 = $("<span>");
  root9947.append(nodes8613);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9952 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes8614 = $("<span>");
    root9952.append(nodes8614);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9953); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8614;
      nodes8614 = node.contents();
      oldNodes.replaceWith(nodes8614);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8414 = mobl.ref(result__);
    
    var nodes8615 = $("<span>");
    root9952.append(nodes8615);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp8414, function(_, callback) {
      var root9954 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9954); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8615;
      nodes8615 = node.contents();
      oldNodes.replaceWith(nodes8615);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8415 = mobl.ref(result__);
    
    var nodes8616 = $("<span>");
    root9952.append(nodes8616);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp8415, function(_, callback) {
      var root9955 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9955); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8616;
      nodes8616 = node.contents();
      oldNodes.replaceWith(nodes8616);
    }));
    callback(root9952); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8613;
    nodes8613 = node.contents();
    oldNodes.replaceWith(nodes8613);
  }));
  callback(root9947); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp8488 = result__;
    var result__ = tmp8488;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp8489 = result__;
        var result__ = tmp8489;
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

nrichRPG.coreWorkout.blank = function(text) {
   var __this = this;
  return (text == null || text.toString() == "");
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root9956 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp8499 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp8417 = mobl.ref(result__);
  
  var nodes8617 = $("<span>");
  root9956.append(nodes8617);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp8417, function(_, callback) {
    var root9957 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp8492 = result__;
                       var result__ = tmp8492;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp8493 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp8416 = mobl.ref(result__);
    
    var nodes8618 = $("<span>");
    root9957.append(nodes8618);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp8416, function(_, callback) {
      var root9958 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9958); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8618;
      nodes8618 = node.contents();
      oldNodes.replaceWith(nodes8618);
    }));
    mobl.sleep(100, function(result__) {
      var tmp8490 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp8491 = result__;
        callback(root9957); return subs__;
      });
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8617;
    nodes8617 = node.contents();
    oldNodes.replaceWith(nodes8617);
  }));
  var nodes8619 = $("<span>");
  root9956.append(nodes8619);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9959 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp8496 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8420 = mobl.ref(result__);
    
    var nodes8620 = $("<span>");
    root9959.append(nodes8620);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp8420, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root9960 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp8418 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp8418.set("Q" + number.get() + ". ");
      }));
      
      var nodes8621 = $("<span>");
      root9960.append(nodes8621);
      subs__.addSub((mobl.html)(tmp8418, function(_, callback) {
        var root9961 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9961); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8621;
        nodes8621 = node.contents();
        oldNodes.replaceWith(nodes8621);
      }));
      
      var node1423 = $("<span>");
      
      var ref1386 = mobl.ref("question-block-" + number.get());
      if(ref1386.get() !== null) {
        node1423.attr('id', ref1386.get());
        subs__.addSub(ref1386.addEventListener('change', function(_, ref, val) {
          node1423.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1423.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref1386.rebind());
      
      var result__ = nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp8419 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp8419.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp8419.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes8622 = $("<span>");
      node1423.append(nodes8622);
      subs__.addSub((mobl.html)(tmp8419, function(_, callback) {
        var root9962 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9962); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8622;
        nodes8622 = node.contents();
        oldNodes.replaceWith(nodes8622);
      }));
      root9960.append(node1423);
      callback(root9960); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8620;
      nodes8620 = node.contents();
      oldNodes.replaceWith(nodes8620);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp8495 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8422 = mobl.ref(result__);
    
    var nodes8623 = $("<span>");
    root9959.append(nodes8623);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8422, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root9963 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8624 = $("<span>");
      root9963.append(nodes8624);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9964 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp8494 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp8421 = mobl.ref(result__);
        
        var nodes8625 = $("<span>");
        root9964.append(nodes8625);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp8421, function(_, callback) {
          var root9965 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9965); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8625;
          nodes8625 = node.contents();
          oldNodes.replaceWith(nodes8625);
        }));
        callback(root9964); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8624;
        nodes8624 = node.contents();
        oldNodes.replaceWith(nodes8624);
      }));
      
      var node1424 = $("<span>");
      root9963.append(node1424);
      var condSubs351 = new mobl.CompSubscription();
      subs__.addSub(condSubs351);
      var oldValue351;
      var renderCond351 = function() {
        var value823 = qa.get().done;
        if(oldValue351 === value823) return;
        oldValue351 = value823;
        var subs__ = condSubs351;
        subs__.unsubscribe();
        node1424.empty();
        if(value823) {
          var nodes8626 = $("<span>");
          node1424.append(nodes8626);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root9966 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9966); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes8626;
            nodes8626 = node.contents();
            oldNodes.replaceWith(nodes8626);
          }));
          
          
        } else {
          
        }
      };
      renderCond351();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond351();
      }));
      
      callback(root9963); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8623;
      nodes8623 = node.contents();
      oldNodes.replaceWith(nodes8623);
    }));
    callback(root9959); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8619;
    nodes8619 = node.contents();
    oldNodes.replaceWith(nodes8619);
  }));
  mobl.sleep(100, function(result__) {
    var tmp8497 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp8498 = result__;
      callback(root9956); return subs__;
    });
  });
  
  
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
  qas.list(function(coll1020) {
    coll1020 = coll1020.reverse();
    function processOne312() {
      var item;
      item = coll1020.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1020.length > 0) processOne312(); else rest312();
      
    }
    function rest312() {
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
    if(coll1020.length > 0) processOne312(); else rest312();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1021) {
    coll1021 = coll1021.reverse();
    function processOne313() {
      var item;
      item = coll1021.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1021.length > 0) processOne313(); else rest313();
      
    }
    function rest313() {
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
    if(coll1021.length > 0) processOne313(); else rest313();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1022) {
    coll1022 = coll1022.reverse();
    function processOne314() {
      var item;
      item = coll1022.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1022.length > 0) processOne314(); else rest314();
      
    }
    function rest314() {
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
    if(coll1022.length > 0) processOne314(); else rest314();
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