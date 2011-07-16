mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl.ui');
mobl.provides('mathJAX');
mobl.provides('plot');
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
    var tmp1303 = result__;
    var result__ = tmp1303;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1304 = result__;
      var result__ = tmp1304;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1305 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll75) {
    coll75 = coll75.reverse();
    function processOne42() {
      var i;
      i = coll75.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp1306 = result__;
        
        if(coll75.length > 0) processOne42(); else rest42();
        
      });
    }
    function rest42() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll75.length > 0) processOne42(); else rest42();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root2627 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2290 = $("<span>");
  root2627.append(nodes2290);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2628 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1314 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1266 = mobl.ref(result__);
    
    var nodes2291 = $("<span>");
    root2628.append(nodes2291);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1266, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2629 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2292 = $("<span>");
      root2629.append(nodes2292);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2630 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2630); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2292;
        nodes2292 = node.contents();
        oldNodes.replaceWith(nodes2292);
      }));
      callback(root2629); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2291;
      nodes2291 = node.contents();
      oldNodes.replaceWith(nodes2291);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1313 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1267 = mobl.ref(result__);
    
    var nodes2293 = $("<span>");
    root2628.append(nodes2293);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1267, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2631 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2294 = $("<span>");
      root2631.append(nodes2294);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2632 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2632); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2294;
        nodes2294 = node.contents();
        oldNodes.replaceWith(nodes2294);
      }));
      callback(root2631); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2293;
      nodes2293 = node.contents();
      oldNodes.replaceWith(nodes2293);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1312 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1268 = mobl.ref(result__);
    
    var nodes2295 = $("<span>");
    root2628.append(nodes2295);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1268, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2633 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2296 = $("<span>");
      root2633.append(nodes2296);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2634 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2634); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2296;
        nodes2296 = node.contents();
        oldNodes.replaceWith(nodes2296);
      }));
      callback(root2633); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2295;
      nodes2295 = node.contents();
      oldNodes.replaceWith(nodes2295);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1311 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1269 = mobl.ref(result__);
    
    var nodes2297 = $("<span>");
    root2628.append(nodes2297);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1269, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2635 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2298 = $("<span>");
      root2635.append(nodes2298);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2636 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2636); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2298;
        nodes2298 = node.contents();
        oldNodes.replaceWith(nodes2298);
      }));
      callback(root2635); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2297;
      nodes2297 = node.contents();
      oldNodes.replaceWith(nodes2297);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1310 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1270 = mobl.ref(result__);
    
    var nodes2299 = $("<span>");
    root2628.append(nodes2299);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1270, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2637 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2300 = $("<span>");
      root2637.append(nodes2300);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2638 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2638); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2300;
        nodes2300 = node.contents();
        oldNodes.replaceWith(nodes2300);
      }));
      callback(root2637); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2299;
      nodes2299 = node.contents();
      oldNodes.replaceWith(nodes2299);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1309 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1271 = mobl.ref(result__);
    
    var nodes2301 = $("<span>");
    root2628.append(nodes2301);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1271, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2639 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2302 = $("<span>");
      root2639.append(nodes2302);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2640 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2640); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2302;
        nodes2302 = node.contents();
        oldNodes.replaceWith(nodes2302);
      }));
      callback(root2639); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2301;
      nodes2301 = node.contents();
      oldNodes.replaceWith(nodes2301);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1308 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1272 = mobl.ref(result__);
    
    var nodes2303 = $("<span>");
    root2628.append(nodes2303);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1272, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2641 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2304 = $("<span>");
      root2641.append(nodes2304);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2642 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2642); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2304;
        nodes2304 = node.contents();
        oldNodes.replaceWith(nodes2304);
      }));
      callback(root2641); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2303;
      nodes2303 = node.contents();
      oldNodes.replaceWith(nodes2303);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1307 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1273 = mobl.ref(result__);
    
    var nodes2305 = $("<span>");
    root2628.append(nodes2305);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1273, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2306 = $("<span>");
      root2643.append(nodes2306);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2644 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2644); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2306;
        nodes2306 = node.contents();
        oldNodes.replaceWith(nodes2306);
      }));
      callback(root2643); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2305;
      nodes2305 = node.contents();
      oldNodes.replaceWith(nodes2305);
    }));
    callback(root2628); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2290;
    nodes2290 = node.contents();
    oldNodes.replaceWith(nodes2290);
  }));
  callback(root2627); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.topicMapForId = function(tid) {
   var __this = this;
  var map = new mobl.Map();
  
  if(tid.indexOf("C", 0) == 0) {
    nrichRPG.coreWorkout.initCoreTopicMap(map);
  } else if(tid.indexOf("F", 0) == 0) {
    nrichRPG.coreWorkout.initFurtherTopicMap(map);
  } else if(tid.indexOf("S", 0) == 0) {
    nrichRPG.coreWorkout.initStatsTopicMap(map);
  } else {
    mobl.alert("invalid topi id " + tid);
  }
  return map;
};

nrichRPG.coreWorkout.topicName = function(tid) {
   var __this = this;
  return nrichRPG.coreWorkout.topicMapForId(tid).get(tid);
};

nrichRPG.coreWorkout.topicAdded = function(tid, callback) {
  var __this = this;
  nrichRPG.coreWorkout.makeQA(tid, function(result__) {
    var tmp1315 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root2645 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp1274 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp1274.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp1274.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes2307 = $("<span>");
  root2645.append(nodes2307);
  subs__.addSub((mobl.label)(tmp1274, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2646 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2646); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2307;
    nodes2307 = node.contents();
    oldNodes.replaceWith(nodes2307);
  }));
  callback(root2645); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root2647 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp1316 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1275 = mobl.ref(result__);
  
  var nodes2308 = $("<span>");
  root2647.append(nodes2308);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1275, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root2648 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2309 = $("<span>");
    root2648.append(nodes2309);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root2649 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2649); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2309;
      nodes2309 = node.contents();
      oldNodes.replaceWith(nodes2309);
    }));
    callback(root2648); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2308;
    nodes2308 = node.contents();
    oldNodes.replaceWith(nodes2308);
  }));
  callback(root2647); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root2650 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes2310 = $("<span>");
  root2650.append(nodes2310);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2651 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1277 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1276 = mobl.ref(result__);
    
    var nodes2311 = $("<span>");
    root2651.append(nodes2311);
    subs__.addSub((ui.backButton)(tmp1276, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1277, function(_, callback) {
      var root2652 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2652); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2311;
      nodes2311 = node.contents();
      oldNodes.replaceWith(nodes2311);
    }));
    callback(root2651); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2310;
    nodes2310 = node.contents();
    oldNodes.replaceWith(nodes2310);
  }));
  var nodes2312 = $("<span>");
  root2650.append(nodes2312);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2653 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2313 = $("<span>");
    root2653.append(nodes2313);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root2654 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2654); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2313;
      nodes2313 = node.contents();
      oldNodes.replaceWith(nodes2313);
    }));
    var nodes2314 = $("<span>");
    root2653.append(nodes2314);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root2655 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2655); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2314;
      nodes2314 = node.contents();
      oldNodes.replaceWith(nodes2314);
    }));
    var nodes2315 = $("<span>");
    root2653.append(nodes2315);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root2656 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2656); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2315;
      nodes2315 = node.contents();
      oldNodes.replaceWith(nodes2315);
    }));
    var nodes2316 = $("<span>");
    root2653.append(nodes2316);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root2657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2657); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2316;
      nodes2316 = node.contents();
      oldNodes.replaceWith(nodes2316);
    }));
    var nodes2317 = $("<span>");
    root2653.append(nodes2317);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root2658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2658); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2317;
      nodes2317 = node.contents();
      oldNodes.replaceWith(nodes2317);
    }));
    var nodes2318 = $("<span>");
    root2653.append(nodes2318);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root2659 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2659); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2318;
      nodes2318 = node.contents();
      oldNodes.replaceWith(nodes2318);
    }));
    var nodes2319 = $("<span>");
    root2653.append(nodes2319);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root2660 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2660); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2319;
      nodes2319 = node.contents();
      oldNodes.replaceWith(nodes2319);
    }));
    callback(root2653); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2312;
    nodes2312 = node.contents();
    oldNodes.replaceWith(nodes2312);
  }));
  callback(root2650); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root2661 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2320 = $("<span>");
  root2661.append(nodes2320);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2662 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1279 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1278 = mobl.ref(result__);
    
    var nodes2321 = $("<span>");
    root2662.append(nodes2321);
    subs__.addSub((ui.backButton)(tmp1278, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1279, function(_, callback) {
      var root2663 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2663); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2321;
      nodes2321 = node.contents();
      oldNodes.replaceWith(nodes2321);
    }));
    callback(root2662); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2320;
    nodes2320 = node.contents();
    oldNodes.replaceWith(nodes2320);
  }));
  var nodes2322 = $("<span>");
  root2661.append(nodes2322);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2664 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2323 = $("<span>");
    root2664.append(nodes2323);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root2665 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2665); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2323;
      nodes2323 = node.contents();
      oldNodes.replaceWith(nodes2323);
    }));
    var nodes2324 = $("<span>");
    root2664.append(nodes2324);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root2666 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2666); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2324;
      nodes2324 = node.contents();
      oldNodes.replaceWith(nodes2324);
    }));
    var nodes2325 = $("<span>");
    root2664.append(nodes2325);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root2667 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2667); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2325;
      nodes2325 = node.contents();
      oldNodes.replaceWith(nodes2325);
    }));
    var nodes2326 = $("<span>");
    root2664.append(nodes2326);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root2668 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2668); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2326;
      nodes2326 = node.contents();
      oldNodes.replaceWith(nodes2326);
    }));
    var nodes2327 = $("<span>");
    root2664.append(nodes2327);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root2669 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2669); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2327;
      nodes2327 = node.contents();
      oldNodes.replaceWith(nodes2327);
    }));
    callback(root2664); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2322;
    nodes2322 = node.contents();
    oldNodes.replaceWith(nodes2322);
  }));
  callback(root2661); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root2670 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2328 = $("<span>");
  root2670.append(nodes2328);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2671 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1281 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1280 = mobl.ref(result__);
    
    var nodes2329 = $("<span>");
    root2671.append(nodes2329);
    subs__.addSub((ui.backButton)(tmp1280, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1281, function(_, callback) {
      var root2672 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2672); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2329;
      nodes2329 = node.contents();
      oldNodes.replaceWith(nodes2329);
    }));
    callback(root2671); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2328;
    nodes2328 = node.contents();
    oldNodes.replaceWith(nodes2328);
  }));
  var nodes2330 = $("<span>");
  root2670.append(nodes2330);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2673 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2331 = $("<span>");
    root2673.append(nodes2331);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root2674 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2674); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2331;
      nodes2331 = node.contents();
      oldNodes.replaceWith(nodes2331);
    }));
    var nodes2332 = $("<span>");
    root2673.append(nodes2332);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root2675 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2675); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2332;
      nodes2332 = node.contents();
      oldNodes.replaceWith(nodes2332);
    }));
    var nodes2333 = $("<span>");
    root2673.append(nodes2333);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root2676 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2676); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2333;
      nodes2333 = node.contents();
      oldNodes.replaceWith(nodes2333);
    }));
    callback(root2673); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2330;
    nodes2330 = node.contents();
    oldNodes.replaceWith(nodes2330);
  }));
  callback(root2670); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root2677 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2334 = $("<span>");
  root2677.append(nodes2334);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2678 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1283 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1282 = mobl.ref(result__);
    
    var nodes2335 = $("<span>");
    root2678.append(nodes2335);
    subs__.addSub((ui.backButton)(tmp1282, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1283, function(_, callback) {
      var root2679 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2679); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2335;
      nodes2335 = node.contents();
      oldNodes.replaceWith(nodes2335);
    }));
    callback(root2678); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2334;
    nodes2334 = node.contents();
    oldNodes.replaceWith(nodes2334);
  }));
  var nodes2336 = $("<span>");
  root2677.append(nodes2336);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2680 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2337 = $("<span>");
    root2680.append(nodes2337);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root2681 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2681); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2337;
      nodes2337 = node.contents();
      oldNodes.replaceWith(nodes2337);
    }));
    var nodes2338 = $("<span>");
    root2680.append(nodes2338);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root2682 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2682); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2338;
      nodes2338 = node.contents();
      oldNodes.replaceWith(nodes2338);
    }));
    var nodes2339 = $("<span>");
    root2680.append(nodes2339);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root2683 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2683); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2339;
      nodes2339 = node.contents();
      oldNodes.replaceWith(nodes2339);
    }));
    var nodes2340 = $("<span>");
    root2680.append(nodes2340);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root2684 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2684); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2340;
      nodes2340 = node.contents();
      oldNodes.replaceWith(nodes2340);
    }));
    callback(root2680); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2336;
    nodes2336 = node.contents();
    oldNodes.replaceWith(nodes2336);
  }));
  callback(root2677); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root2685 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2341 = $("<span>");
  root2685.append(nodes2341);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2686 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1285 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1284 = mobl.ref(result__);
    
    var nodes2342 = $("<span>");
    root2686.append(nodes2342);
    subs__.addSub((ui.backButton)(tmp1284, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1285, function(_, callback) {
      var root2687 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2687); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2342;
      nodes2342 = node.contents();
      oldNodes.replaceWith(nodes2342);
    }));
    callback(root2686); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2341;
    nodes2341 = node.contents();
    oldNodes.replaceWith(nodes2341);
  }));
  var nodes2343 = $("<span>");
  root2685.append(nodes2343);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2688 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2344 = $("<span>");
    root2688.append(nodes2344);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root2689 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2689); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2344;
      nodes2344 = node.contents();
      oldNodes.replaceWith(nodes2344);
    }));
    var nodes2345 = $("<span>");
    root2688.append(nodes2345);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root2690 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2690); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2345;
      nodes2345 = node.contents();
      oldNodes.replaceWith(nodes2345);
    }));
    callback(root2688); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2343;
    nodes2343 = node.contents();
    oldNodes.replaceWith(nodes2343);
  }));
  callback(root2685); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root2691 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2346 = $("<span>");
  root2691.append(nodes2346);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2692 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1287 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1286 = mobl.ref(result__);
    
    var nodes2347 = $("<span>");
    root2692.append(nodes2347);
    subs__.addSub((ui.backButton)(tmp1286, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1287, function(_, callback) {
      var root2693 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2693); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2347;
      nodes2347 = node.contents();
      oldNodes.replaceWith(nodes2347);
    }));
    callback(root2692); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2346;
    nodes2346 = node.contents();
    oldNodes.replaceWith(nodes2346);
  }));
  var nodes2348 = $("<span>");
  root2691.append(nodes2348);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2694 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2349 = $("<span>");
    root2694.append(nodes2349);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root2695 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2695); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2349;
      nodes2349 = node.contents();
      oldNodes.replaceWith(nodes2349);
    }));
    var nodes2350 = $("<span>");
    root2694.append(nodes2350);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root2696 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2696); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2350;
      nodes2350 = node.contents();
      oldNodes.replaceWith(nodes2350);
    }));
    var nodes2351 = $("<span>");
    root2694.append(nodes2351);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root2697 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2697); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2351;
      nodes2351 = node.contents();
      oldNodes.replaceWith(nodes2351);
    }));
    var nodes2352 = $("<span>");
    root2694.append(nodes2352);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root2698 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2698); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2352;
      nodes2352 = node.contents();
      oldNodes.replaceWith(nodes2352);
    }));
    var nodes2353 = $("<span>");
    root2694.append(nodes2353);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root2699 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2699); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2353;
      nodes2353 = node.contents();
      oldNodes.replaceWith(nodes2353);
    }));
    callback(root2694); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2348;
    nodes2348 = node.contents();
    oldNodes.replaceWith(nodes2348);
  }));
  callback(root2691); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root2700 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2354 = $("<span>");
  root2700.append(nodes2354);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2701 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1289 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1288 = mobl.ref(result__);
    
    var nodes2355 = $("<span>");
    root2701.append(nodes2355);
    subs__.addSub((ui.backButton)(tmp1288, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1289, function(_, callback) {
      var root2702 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2702); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2355;
      nodes2355 = node.contents();
      oldNodes.replaceWith(nodes2355);
    }));
    callback(root2701); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2354;
    nodes2354 = node.contents();
    oldNodes.replaceWith(nodes2354);
  }));
  var nodes2356 = $("<span>");
  root2700.append(nodes2356);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2703 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2357 = $("<span>");
    root2703.append(nodes2357);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root2704 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2704); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2357;
      nodes2357 = node.contents();
      oldNodes.replaceWith(nodes2357);
    }));
    var nodes2358 = $("<span>");
    root2703.append(nodes2358);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root2705 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2705); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2358;
      nodes2358 = node.contents();
      oldNodes.replaceWith(nodes2358);
    }));
    var nodes2359 = $("<span>");
    root2703.append(nodes2359);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root2706 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2706); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2359;
      nodes2359 = node.contents();
      oldNodes.replaceWith(nodes2359);
    }));
    callback(root2703); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2356;
    nodes2356 = node.contents();
    oldNodes.replaceWith(nodes2356);
  }));
  callback(root2700); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root2707 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2360 = $("<span>");
  root2707.append(nodes2360);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2708 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1291 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1290 = mobl.ref(result__);
    
    var nodes2361 = $("<span>");
    root2708.append(nodes2361);
    subs__.addSub((ui.backButton)(tmp1290, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1291, function(_, callback) {
      var root2709 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2709); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2361;
      nodes2361 = node.contents();
      oldNodes.replaceWith(nodes2361);
    }));
    callback(root2708); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2360;
    nodes2360 = node.contents();
    oldNodes.replaceWith(nodes2360);
  }));
  var nodes2362 = $("<span>");
  root2707.append(nodes2362);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2710 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2363 = $("<span>");
    root2710.append(nodes2363);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root2711 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2711); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2363;
      nodes2363 = node.contents();
      oldNodes.replaceWith(nodes2363);
    }));
    callback(root2710); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2362;
    nodes2362 = node.contents();
    oldNodes.replaceWith(nodes2362);
  }));
  callback(root2707); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root2712 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2364 = $("<span>");
  root2712.append(nodes2364);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2713 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2365 = $("<span>");
    root2713.append(nodes2365);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root2714 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2714); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2365;
      nodes2365 = node.contents();
      oldNodes.replaceWith(nodes2365);
    }));
    var nodes2366 = $("<span>");
    root2713.append(nodes2366);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root2715 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2715); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2366;
      nodes2366 = node.contents();
      oldNodes.replaceWith(nodes2366);
    }));
    var nodes2367 = $("<span>");
    root2713.append(nodes2367);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root2716 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2716); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2367;
      nodes2367 = node.contents();
      oldNodes.replaceWith(nodes2367);
    }));
    var nodes2368 = $("<span>");
    root2713.append(nodes2368);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root2717 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2717); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2368;
      nodes2368 = node.contents();
      oldNodes.replaceWith(nodes2368);
    }));
    var nodes2369 = $("<span>");
    root2713.append(nodes2369);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root2718 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2718); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2369;
      nodes2369 = node.contents();
      oldNodes.replaceWith(nodes2369);
    }));
    var nodes2370 = $("<span>");
    root2713.append(nodes2370);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root2719 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2719); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2370;
      nodes2370 = node.contents();
      oldNodes.replaceWith(nodes2370);
    }));
    var nodes2371 = $("<span>");
    root2713.append(nodes2371);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root2720 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2720); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2371;
      nodes2371 = node.contents();
      oldNodes.replaceWith(nodes2371);
    }));
    var nodes2372 = $("<span>");
    root2713.append(nodes2372);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root2721 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2721); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2372;
      nodes2372 = node.contents();
      oldNodes.replaceWith(nodes2372);
    }));
    var nodes2373 = $("<span>");
    root2713.append(nodes2373);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root2722 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2722); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2373;
      nodes2373 = node.contents();
      oldNodes.replaceWith(nodes2373);
    }));
    var nodes2374 = $("<span>");
    root2713.append(nodes2374);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root2723 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2723); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2374;
      nodes2374 = node.contents();
      oldNodes.replaceWith(nodes2374);
    }));
    var nodes2375 = $("<span>");
    root2713.append(nodes2375);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root2724 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2724); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2375;
      nodes2375 = node.contents();
      oldNodes.replaceWith(nodes2375);
    }));
    var nodes2376 = $("<span>");
    root2713.append(nodes2376);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root2725 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2725); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2376;
      nodes2376 = node.contents();
      oldNodes.replaceWith(nodes2376);
    }));
    var nodes2377 = $("<span>");
    root2713.append(nodes2377);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root2726 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2726); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2377;
      nodes2377 = node.contents();
      oldNodes.replaceWith(nodes2377);
    }));
    callback(root2713); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2364;
    nodes2364 = node.contents();
    oldNodes.replaceWith(nodes2364);
  }));
  callback(root2712); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root2727 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2378 = $("<span>");
  root2727.append(nodes2378);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2728 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2379 = $("<span>");
    root2728.append(nodes2379);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root2729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2729); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2379;
      nodes2379 = node.contents();
      oldNodes.replaceWith(nodes2379);
    }));
    var nodes2380 = $("<span>");
    root2728.append(nodes2380);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root2730 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2730); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2380;
      nodes2380 = node.contents();
      oldNodes.replaceWith(nodes2380);
    }));
    var nodes2381 = $("<span>");
    root2728.append(nodes2381);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root2731 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2731); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2381;
      nodes2381 = node.contents();
      oldNodes.replaceWith(nodes2381);
    }));
    var nodes2382 = $("<span>");
    root2728.append(nodes2382);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root2732 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2732); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2382;
      nodes2382 = node.contents();
      oldNodes.replaceWith(nodes2382);
    }));
    var nodes2383 = $("<span>");
    root2728.append(nodes2383);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root2733 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2733); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2383;
      nodes2383 = node.contents();
      oldNodes.replaceWith(nodes2383);
    }));
    var nodes2384 = $("<span>");
    root2728.append(nodes2384);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root2734 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2734); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2384;
      nodes2384 = node.contents();
      oldNodes.replaceWith(nodes2384);
    }));
    callback(root2728); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2378;
    nodes2378 = node.contents();
    oldNodes.replaceWith(nodes2378);
  }));
  callback(root2727); return subs__;
  
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
  var root2735 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node105 = $("<div>");
  
  var ref108 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref108.get() !== null) {
    node105.attr('class', ref108.get());
    subs__.addSub(ref108.addEventListener('change', function(_, ref, val) {
      node105.attr('class', val);
    }));
    
  }
  subs__.addSub(ref108.rebind());
  
  var val21 = onclick.get();
  if(val21 !== null) {
    subs__.addSub(mobl.domBind(node105, 'tap', val21));
  }
  
  
  var node106 = $("<div>");
  
  var ref107 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref107.get() !== null) {
    node106.attr('class', ref107.get());
    subs__.addSub(ref107.addEventListener('change', function(_, ref, val) {
      node106.attr('class', val);
    }));
    
  }
  subs__.addSub(ref107.rebind());
  
  
  var node107 = $("<div>");
  
  var ref105 = text;
  node107.text(""+ref105.get());
  var ignore21 = false;
  subs__.addSub(ref105.addEventListener('change', function(_, ref, val) {
    if(ignore21) return;
    node107.text(""+val);
  }));
  subs__.addSub(ref105.rebind());
  
  
  var ref106 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref106.get() !== null) {
    node107.attr('class', ref106.get());
    subs__.addSub(ref106.addEventListener('change', function(_, ref, val) {
      node107.attr('class', val);
    }));
    
  }
  subs__.addSub(ref106.rebind());
  
  node106.append(node107);
  node105.append(node106);
  var nodes2385 = $("<span>");
  node105.append(nodes2385);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2736 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2736); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2385;
      nodes2385 = node.contents();
      oldNodes.replaceWith(nodes2385);
    }));
  }
  renderControl21();
  root2735.append(node105);
  callback(root2735); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp1317 = result__;
    var result__ = plot.renderPlot("corePlotArea", qa);
    if(callback && callback.apply) callback(); return;
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

nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1318 = result__;
    var result__ = tmp1318;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root2737 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1324 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1295 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp1294 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1294.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes2386 = $("<span>");
  root2737.append(nodes2386);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp1294, tmp1295, function(_, callback) {
    var root2738 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1321 = result__;
                       var result__ = tmp1321;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2 == null;
                       if(result__) {
                         var result__ = ui.hideCurrent();
                         if(callback && callback.apply) callback(); return;
                       } else {
                         {
                           var result__ = qa2;
                           qa.set(result__);
                           nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                             var tmp1322 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp1292 = mobl.ref(result__);
    
    var nodes2387 = $("<span>");
    root2738.append(nodes2387);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp1292, function(_, callback) {
      var root2739 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2739); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2387;
      nodes2387 = node.contents();
      oldNodes.replaceWith(nodes2387);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp1319 = result__;
                       var result__ = tmp1319;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp1320 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp1293 = mobl.ref(result__);
    
    var nodes2388 = $("<span>");
    root2738.append(nodes2388);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp1293, function(_, callback) {
      var root2740 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2740); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2388;
      nodes2388 = node.contents();
      oldNodes.replaceWith(nodes2388);
    }));
    callback(root2738); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2386;
    nodes2386 = node.contents();
    oldNodes.replaceWith(nodes2386);
  }));
  var nodes2389 = $("<span>");
  root2737.append(nodes2389);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2741 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1323 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1298 = mobl.ref(result__);
    
    var nodes2390 = $("<span>");
    root2741.append(nodes2390);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1298, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2742 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp1296 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp1296.set("Q" + number.get() + ". ");
      }));
      
      var nodes2391 = $("<span>");
      root2742.append(nodes2391);
      subs__.addSub((mobl.html)(tmp1296, function(_, callback) {
        var root2743 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2743); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2391;
        nodes2391 = node.contents();
        oldNodes.replaceWith(nodes2391);
      }));
      
      var node108 = $("<span>");
      
      var ref109 = mobl.ref("question-block-" + number.get());
      if(ref109.get() !== null) {
        node108.attr('id', ref109.get());
        subs__.addSub(ref109.addEventListener('change', function(_, ref, val) {
          node108.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node108.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref109.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp1297 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp1297.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp1297.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes2392 = $("<span>");
      node108.append(nodes2392);
      subs__.addSub((mobl.html)(tmp1297, function(_, callback) {
        var root2744 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2744); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2392;
        nodes2392 = node.contents();
        oldNodes.replaceWith(nodes2392);
      }));
      root2742.append(node108);
      callback(root2742); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2390;
      nodes2390 = node.contents();
      oldNodes.replaceWith(nodes2390);
    }));
    var nodes2393 = $("<span>");
    root2741.append(nodes2393);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2745 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2394 = $("<span>");
      root2745.append(nodes2394);
      subs__.addSub((nrichRPG.coreWorkout.makeChoices)(qa, number, function(_, callback) {
        var root2746 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2746); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2394;
        nodes2394 = node.contents();
        oldNodes.replaceWith(nodes2394);
      }));
      callback(root2745); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2393;
      nodes2393 = node.contents();
      oldNodes.replaceWith(nodes2393);
    }));
    callback(root2741); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2389;
    nodes2389 = node.contents();
    oldNodes.replaceWith(nodes2389);
  }));
  callback(root2737); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.choiceItemStyle = function(choiceNumber, questionNumber, currentChoice, correctChoice) {
   var __this = this;
  var encodedChoiceNumber = choiceNumber + questionNumber * 4;
  
  var encodedCorrectChoice = correctChoice + questionNumber * 4;
  
  return encodedChoiceNumber == currentChoice ? (currentChoice == encodedCorrectChoice ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle;
};


nrichRPG.coreWorkout.makeChoices = function(qa, number, elements, callback) {
  var root2747 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var currentChoice = mobl.ref(-1);
  var nodes2395 = $("<span>");
  root2747.append(nodes2395);
  subs__.addSub((mobl.block)(mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2748 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = nrichRPG.coreWorkout.generateChoices(qa.get());
    var tmp1302 = mobl.ref(result__);
    subs__.addSub(qa.addEventListener('change', function() {
      tmp1302.set(nrichRPG.coreWorkout.generateChoices(qa.get()));
    }));
    
    
    var node109 = mobl.loadingSpan();
    root2748.append(node109);
    var list21;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList21 = function() {
      var subs__ = listSubs__;
      list21 = tmp1302.get();
      list21.list(function(results21) {
        node109.empty();
        for(var i464 = 0; i464 < results21.length; i464++) {
          (function() {
            var iternode21 = $("<span>");
            node109.append(iternode21);
            var order;var correctChoice;var answer;
            order = mobl.ref(mobl.ref(mobl.ref(results21), i464), "_1");correctChoice = mobl.ref(mobl.ref(mobl.ref(results21), i464), "_2");answer = mobl.ref(mobl.ref(mobl.ref(results21), i464), "_3");
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = order.get() + number.get() * 4;
                             currentChoice.set(result__);
                             var result__ = currentChoice.get() == correctChoice.get() + number.get() * 4;
                             if(result__) {
                               var result__ = true;
                               qa.get().done = result__;
                               var result__ = true;
                               qa.get().correct = result__;
                               if(callback && callback.apply) callback(); return;
                             } else {
                               {
                                 var result__ = false;
                                 qa.get().correct = result__;
                                 if(callback && callback.apply) callback(); return;
                               }
                             }
                           };
            var tmp1301 = mobl.ref(result__);
            
            var result__ = nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get());
            var tmp1300 = mobl.ref(result__);
            subs__.addSub(order.addEventListener('change', function() {
              tmp1300.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(number.addEventListener('change', function() {
              tmp1300.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(currentChoice.addEventListener('change', function() {
              tmp1300.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(correctChoice.addEventListener('change', function() {
              tmp1300.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            
            var nodes2396 = $("<span>");
            iternode21.append(nodes2396);
            subs__.addSub((ui.item)(tmp1300, mobl.ref(ui.itemPushedStyle), tmp1301, mobl.ref(null), mobl.ref(true), function(_, callback) {
              var root2749 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = "Choice " + order.get() + ".";
              var tmp1299 = mobl.ref(result__);
              subs__.addSub(order.addEventListener('change', function() {
                tmp1299.set("Choice " + order.get() + ".");
              }));
              
              var nodes2397 = $("<span>");
              root2749.append(nodes2397);
              subs__.addSub((mobl.html)(tmp1299, function(_, callback) {
                var root2750 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2750); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2397;
                nodes2397 = node.contents();
                oldNodes.replaceWith(nodes2397);
              }));
              var nodes2398 = $("<span>");
              root2749.append(nodes2398);
              subs__.addSub((mobl.html)(answer, function(_, callback) {
                var root2751 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2751); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2398;
                nodes2398 = node.contents();
                oldNodes.replaceWith(nodes2398);
              }));
              callback(root2749); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2396;
              nodes2396 = node.contents();
              oldNodes.replaceWith(nodes2396);
            }));
            
            var oldNodes = iternode21;
            iternode21 = iternode21.contents();
            oldNodes.replaceWith(iternode21);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list21.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
        subs__.addSub(tmp1302.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
      });
    };
    renderList21();
    
    callback(root2748); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2395;
    nodes2395 = node.contents();
    oldNodes.replaceWith(nodes2395);
  }));
  callback(root2747); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.generateChoices = function(qa) {
   var __this = this;
  var correctChoice = mobl.random(3) + 1;
  
  var choices = [];
  
  var coll76 = mobl.range(1, 5);
  var length21 = coll76.length;
  for(var i465 = 0; i465 < length21; i465++) {
    var index;
    index = coll76.get(i465);
    if(index == correctChoice) {
      choices.push(new mobl.Tuple(index, correctChoice, qa.answer));
    } else {
      var problem = nrichRPG.coreWorkout.makeProblem(qa.topic);
      
      var answer = problem.get(1);
      
      if(problem.length > 2) {
        answer = problem.get(2);
      } else {
        
      }
      choices.push(new mobl.Tuple(index, correctChoice, answer));
    }
  }
  return choices;
};

nrichRPG.coreWorkout.max = mobl.ref(0);
nrichRPG.coreWorkout.makeQA = function(tid, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  nrichRPG.questionAnswer.QA.all().list(function(coll77) {
    coll77 = coll77.reverse();
    function processOne43() {
      var item;
      item = coll77.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll77.length > 0) processOne43(); else rest43();
      
    }
    function rest43() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeProblem(tid);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = tid;
      qa.topic = result__;
      var result__ = q_and_A.length > 2;
      if(result__) {
        var result__ = q_and_A.get(2);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        var result__ = qa;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          var result__ = qa;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll77.length > 0) processOne43(); else rest43();
  });
  
};

(function(__ns) {
__ns.coreTopicNames = {
                        "C1": "Partial fractions",
                        "C2": "Binomial theorem",
                        "C3": "Polynomial integration",
                        "C4": "Trig integration",
                        "C5": "Scalar products",
                        "C6": "3D Lines",
                        "C7": "Inequalities",
                        "C8": "Arithmetic progressions",
                        "C9": "Factor theorem",
                        "C10": "Quadratics",
                        "C11": "Completing the square",
                        "C12": "Binomial expansion",
                        "C13": "Logarithms",
                        "C14": "Stationary points",
                        "C15": "Triangles",
                        "C16": "Circles",
                        "C17": "Trig equations",
                        "C18": "Vector equations",
                        "C19": "Implicit differentiation",
                        "C20": "The chain rule",
                        "C21": "The product rule",
                        "C22": "The quotient rule",
                        "C23": "Geometric progressions",
                        "C24": "Modulus function",
                        "C25": "Transforms of functions",
                        "C26": "Composition of functions",
                        "C27": "Parametric functions",
                        "C270": "Implicit functions",
                        "C28": "Integration",
                        "C29": "Differential equations",
                        "C30": "Powers"
                      };
__ns.furtherTopicNames = {
                           "F1": "Complex Arithmetic",
                           "F2": "Modulus Argument",
                           "F3a": "2nd order DEs",
                           "F4": "Rank 2 matrices",
                           "F5": "Taylor Series",
                           "F6": "Polar Coordinates",
                           "F7": "Rank 3 matrices",
                           "F8": "Further vectors",
                           "F9": "Newton-Raphson",
                           "F10": "Further inequalities",
                           "F11": "Integration by substitution",
                           "F12": "Figures of revolution",
                           "F13": "Matrix transformations"
                         };
__ns.statsTopicNames = {
                         'S1': "Discrete Distributions",
                         'S2': "Continuous Distributions",
                         'S3': "Hypothesis Testing",
                         'S4': "Confidence Intervals",
                         'S5': "Chi Squared",
                         'S6': "Product Moments"
                       };
__ns.initCoreTopicMap = function(map) {
                          map.data = __ns.coreTopicNames;
                        };
__ns.initFurtherTopicMap = function(map) {
                             map.data = __ns.furtherTopicNames;
                           };
__ns.initStatsTopicMap = function(map) {
                           map.data = __ns.statsTopicNames;
                         };
__ns.makers = {
                "C1": makePartial,
                "C2": makeBinomial2,
                "C3": makePolyInt,
                "C4": makeTrigInt,
                "C5": makeVector,
                "C6": makeLines,
                "C7": makeIneq,
                "C8": makeAP,
                "C9": makeFactor,
                "C10": makeQuadratic,
                "C11": makeComplete,
                "C12": makeBinExp,
                "C13": makeLog,
                "C14": makeStationary,
                "C15": makeTriangle,
                "C16": makeCircle,
                "C17": makeSolvingTrig,
                "C18": makeVectorEq,
                "C19": makeImplicit,
                "C20": makeChainRule,
                "C21": makeProductRule,
                "C22": makeQuotientRule,
                "C23": makeGP,
                "C24": makeModulus,
                "C25": makeTransformation,
                "C26": makeComposition,
                "C27": makeParametric,
                "C270": makeImplicitFunction,
                "C28": makeIntegration,
                "C29": makeDE,
                "C30": makePowers,
                "F1": makeCArithmetic,
                "F2": makeCPolar,
                "F3a": makeDETwoHard,
                "F4": makeMatrix2,
                "F5": makeTaylor,
                "F6": makePolarSketch,
                "F7": makeMatrix3,
                "F8": makeFurtherVector,
                "F9": makeNewtonRaphson,
                "F10": makeFurtherIneq,
                "F11": makeSubstInt,
                "F12": makeRevolution,
                "F13": makeMatXforms,
                'S1': makeDiscreteDistn,
                'S2': makeContinDistn,
                'S3': makeHypTest,
                'S4': makeConfidInt,
                'S5': makeChiSquare,
                'S6': makeProductMoment
              };
__ns.makeProblem = function(tid) {
                     return __ns.makers[tid]();
                   };
}(nrichRPG.coreWorkout));