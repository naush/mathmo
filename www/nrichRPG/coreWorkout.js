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
    var tmp2381 = result__;
    var result__ = tmp2381;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp2382 = result__;
      var result__ = tmp2382;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp2383 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll267) {
    coll267 = coll267.reverse();
    function processOne81() {
      var i;
      i = coll267.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp2384 = result__;
        
        if(coll267.length > 0) processOne81(); else rest81();
        
      });
    }
    function rest81() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll267.length > 0) processOne81(); else rest81();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll268) {
    coll268 = coll268.reverse();
    function processOne82() {
      var i;
      i = coll268.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp2385 = result__;
          
          if(coll268.length > 0) processOne82(); else rest82();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp2385 = result__;
            
            if(coll268.length > 0) processOne82(); else rest82();
            
          });
        }
      }
    }
    function rest82() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll268.length > 0) processOne82(); else rest82();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll269) {
    coll269 = coll269.reverse();
    function processOne83() {
      var i;
      i = coll269.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp2386 = result__;
        
        if(coll269.length > 0) processOne83(); else rest83();
        
      });
    }
    function rest83() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll269.length > 0) processOne83(); else rest83();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root2755 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2353 = $("<span>");
  root2755.append(nodes2353);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2756 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2394 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2293 = mobl.ref(result__);
    
    var nodes2354 = $("<span>");
    root2756.append(nodes2354);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2293, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2757 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2355 = $("<span>");
      root2757.append(nodes2355);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2758 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2758); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2355;
        nodes2355 = node.contents();
        oldNodes.replaceWith(nodes2355);
      }));
      callback(root2757); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2354;
      nodes2354 = node.contents();
      oldNodes.replaceWith(nodes2354);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2393 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2294 = mobl.ref(result__);
    
    var nodes2356 = $("<span>");
    root2756.append(nodes2356);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2294, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2759 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2357 = $("<span>");
      root2759.append(nodes2357);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2760 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2760); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2357;
        nodes2357 = node.contents();
        oldNodes.replaceWith(nodes2357);
      }));
      callback(root2759); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2356;
      nodes2356 = node.contents();
      oldNodes.replaceWith(nodes2356);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2392 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2295 = mobl.ref(result__);
    
    var nodes2358 = $("<span>");
    root2756.append(nodes2358);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2295, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2761 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2359 = $("<span>");
      root2761.append(nodes2359);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2762 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2762); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2359;
        nodes2359 = node.contents();
        oldNodes.replaceWith(nodes2359);
      }));
      callback(root2761); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2358;
      nodes2358 = node.contents();
      oldNodes.replaceWith(nodes2358);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2391 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2296 = mobl.ref(result__);
    
    var nodes2360 = $("<span>");
    root2756.append(nodes2360);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2296, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2763 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2361 = $("<span>");
      root2763.append(nodes2361);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2764 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2764); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2361;
        nodes2361 = node.contents();
        oldNodes.replaceWith(nodes2361);
      }));
      callback(root2763); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2360;
      nodes2360 = node.contents();
      oldNodes.replaceWith(nodes2360);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2390 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2297 = mobl.ref(result__);
    
    var nodes2362 = $("<span>");
    root2756.append(nodes2362);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2297, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2765 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2363 = $("<span>");
      root2765.append(nodes2363);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2766 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2766); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2363;
        nodes2363 = node.contents();
        oldNodes.replaceWith(nodes2363);
      }));
      callback(root2765); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2362;
      nodes2362 = node.contents();
      oldNodes.replaceWith(nodes2362);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2389 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2298 = mobl.ref(result__);
    
    var nodes2364 = $("<span>");
    root2756.append(nodes2364);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2298, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2767 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2365 = $("<span>");
      root2767.append(nodes2365);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2768 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2768); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2365;
        nodes2365 = node.contents();
        oldNodes.replaceWith(nodes2365);
      }));
      callback(root2767); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2364;
      nodes2364 = node.contents();
      oldNodes.replaceWith(nodes2364);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2388 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2299 = mobl.ref(result__);
    
    var nodes2366 = $("<span>");
    root2756.append(nodes2366);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2299, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2769 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2367 = $("<span>");
      root2769.append(nodes2367);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2770 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2770); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2367;
        nodes2367 = node.contents();
        oldNodes.replaceWith(nodes2367);
      }));
      callback(root2769); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2366;
      nodes2366 = node.contents();
      oldNodes.replaceWith(nodes2366);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2387 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2300 = mobl.ref(result__);
    
    var nodes2368 = $("<span>");
    root2756.append(nodes2368);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2300, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2369 = $("<span>");
      root2771.append(nodes2369);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2772 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2772); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2369;
        nodes2369 = node.contents();
        oldNodes.replaceWith(nodes2369);
      }));
      callback(root2771); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2368;
      nodes2368 = node.contents();
      oldNodes.replaceWith(nodes2368);
    }));
    callback(root2756); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2353;
    nodes2353 = node.contents();
    oldNodes.replaceWith(nodes2353);
  }));
  callback(root2755); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root2773 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes2370 = $("<span>");
  root2773.append(nodes2370);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2774 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2302 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2301 = mobl.ref(result__);
    
    var nodes2371 = $("<span>");
    root2774.append(nodes2371);
    subs__.addSub((ui.backButton)(tmp2301, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2302, function(_, callback) {
      var root2775 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2775); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2371;
      nodes2371 = node.contents();
      oldNodes.replaceWith(nodes2371);
    }));
    callback(root2774); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2370;
    nodes2370 = node.contents();
    oldNodes.replaceWith(nodes2370);
  }));
  var nodes2372 = $("<span>");
  root2773.append(nodes2372);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2776 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp2402 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2303 = mobl.ref(result__);
    
    var nodes2373 = $("<span>");
    root2776.append(nodes2373);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2303, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2777 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2374 = $("<span>");
      root2777.append(nodes2374);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2778 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2778); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2374;
        nodes2374 = node.contents();
        oldNodes.replaceWith(nodes2374);
      }));
      callback(root2777); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2373;
      nodes2373 = node.contents();
      oldNodes.replaceWith(nodes2373);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp2401 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2304 = mobl.ref(result__);
    
    var nodes2375 = $("<span>");
    root2776.append(nodes2375);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2304, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2779 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2376 = $("<span>");
      root2779.append(nodes2376);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2780 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2780); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2376;
        nodes2376 = node.contents();
        oldNodes.replaceWith(nodes2376);
      }));
      callback(root2779); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2375;
      nodes2375 = node.contents();
      oldNodes.replaceWith(nodes2375);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp2400 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2305 = mobl.ref(result__);
    
    var nodes2377 = $("<span>");
    root2776.append(nodes2377);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2305, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2781 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2378 = $("<span>");
      root2781.append(nodes2378);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2782 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2782); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2378;
        nodes2378 = node.contents();
        oldNodes.replaceWith(nodes2378);
      }));
      callback(root2781); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2377;
      nodes2377 = node.contents();
      oldNodes.replaceWith(nodes2377);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp2399 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2306 = mobl.ref(result__);
    
    var nodes2379 = $("<span>");
    root2776.append(nodes2379);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2306, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2783 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2380 = $("<span>");
      root2783.append(nodes2380);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2784 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2784); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2380;
        nodes2380 = node.contents();
        oldNodes.replaceWith(nodes2380);
      }));
      callback(root2783); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2379;
      nodes2379 = node.contents();
      oldNodes.replaceWith(nodes2379);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp2398 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2307 = mobl.ref(result__);
    
    var nodes2381 = $("<span>");
    root2776.append(nodes2381);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2307, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2785 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2382 = $("<span>");
      root2785.append(nodes2382);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2786 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2786); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2382;
        nodes2382 = node.contents();
        oldNodes.replaceWith(nodes2382);
      }));
      callback(root2785); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2381;
      nodes2381 = node.contents();
      oldNodes.replaceWith(nodes2381);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp2397 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2308 = mobl.ref(result__);
    
    var nodes2383 = $("<span>");
    root2776.append(nodes2383);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2308, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2787 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2384 = $("<span>");
      root2787.append(nodes2384);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2788 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2788); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2384;
        nodes2384 = node.contents();
        oldNodes.replaceWith(nodes2384);
      }));
      callback(root2787); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2383;
      nodes2383 = node.contents();
      oldNodes.replaceWith(nodes2383);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp2396 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2309 = mobl.ref(result__);
    
    var nodes2385 = $("<span>");
    root2776.append(nodes2385);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2309, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2789 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2386 = $("<span>");
      root2789.append(nodes2386);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2790 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2790); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2386;
        nodes2386 = node.contents();
        oldNodes.replaceWith(nodes2386);
      }));
      callback(root2789); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2385;
      nodes2385 = node.contents();
      oldNodes.replaceWith(nodes2385);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp2395 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2310 = mobl.ref(result__);
    
    var nodes2387 = $("<span>");
    root2776.append(nodes2387);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2310, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2791 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2388 = $("<span>");
      root2791.append(nodes2388);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2792 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2792); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2388;
        nodes2388 = node.contents();
        oldNodes.replaceWith(nodes2388);
      }));
      callback(root2791); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2387;
      nodes2387 = node.contents();
      oldNodes.replaceWith(nodes2387);
    }));
    callback(root2776); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2372;
    nodes2372 = node.contents();
    oldNodes.replaceWith(nodes2372);
  }));
  callback(root2773); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root2793 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2389 = $("<span>");
  root2793.append(nodes2389);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2794 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2312 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2311 = mobl.ref(result__);
    
    var nodes2390 = $("<span>");
    root2794.append(nodes2390);
    subs__.addSub((ui.backButton)(tmp2311, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2312, function(_, callback) {
      var root2795 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2795); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2390;
      nodes2390 = node.contents();
      oldNodes.replaceWith(nodes2390);
    }));
    callback(root2794); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2389;
    nodes2389 = node.contents();
    oldNodes.replaceWith(nodes2389);
  }));
  var nodes2391 = $("<span>");
  root2793.append(nodes2391);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2796 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp2407 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2313 = mobl.ref(result__);
    
    var nodes2392 = $("<span>");
    root2796.append(nodes2392);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2313, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2393 = $("<span>");
      root2797.append(nodes2393);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2798); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2393;
        nodes2393 = node.contents();
        oldNodes.replaceWith(nodes2393);
      }));
      callback(root2797); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2392;
      nodes2392 = node.contents();
      oldNodes.replaceWith(nodes2392);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp2406 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2314 = mobl.ref(result__);
    
    var nodes2394 = $("<span>");
    root2796.append(nodes2394);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2314, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2799 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2395 = $("<span>");
      root2799.append(nodes2395);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2800 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2800); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2395;
        nodes2395 = node.contents();
        oldNodes.replaceWith(nodes2395);
      }));
      callback(root2799); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2394;
      nodes2394 = node.contents();
      oldNodes.replaceWith(nodes2394);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp2405 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2315 = mobl.ref(result__);
    
    var nodes2396 = $("<span>");
    root2796.append(nodes2396);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2315, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2801 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2397 = $("<span>");
      root2801.append(nodes2397);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2802 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2802); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2397;
        nodes2397 = node.contents();
        oldNodes.replaceWith(nodes2397);
      }));
      callback(root2801); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2396;
      nodes2396 = node.contents();
      oldNodes.replaceWith(nodes2396);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp2404 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2316 = mobl.ref(result__);
    
    var nodes2398 = $("<span>");
    root2796.append(nodes2398);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2316, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2803 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2399 = $("<span>");
      root2803.append(nodes2399);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2804 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2804); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2399;
        nodes2399 = node.contents();
        oldNodes.replaceWith(nodes2399);
      }));
      callback(root2803); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2398;
      nodes2398 = node.contents();
      oldNodes.replaceWith(nodes2398);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp2403 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2317 = mobl.ref(result__);
    
    var nodes2400 = $("<span>");
    root2796.append(nodes2400);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2317, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2805 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2401 = $("<span>");
      root2805.append(nodes2401);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2806 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2806); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2401;
        nodes2401 = node.contents();
        oldNodes.replaceWith(nodes2401);
      }));
      callback(root2805); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2400;
      nodes2400 = node.contents();
      oldNodes.replaceWith(nodes2400);
    }));
    callback(root2796); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2391;
    nodes2391 = node.contents();
    oldNodes.replaceWith(nodes2391);
  }));
  callback(root2793); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root2807 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2402 = $("<span>");
  root2807.append(nodes2402);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2808 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2319 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2318 = mobl.ref(result__);
    
    var nodes2403 = $("<span>");
    root2808.append(nodes2403);
    subs__.addSub((ui.backButton)(tmp2318, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2319, function(_, callback) {
      var root2809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2809); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2403;
      nodes2403 = node.contents();
      oldNodes.replaceWith(nodes2403);
    }));
    callback(root2808); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2402;
    nodes2402 = node.contents();
    oldNodes.replaceWith(nodes2402);
  }));
  var nodes2404 = $("<span>");
  root2807.append(nodes2404);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2810 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp2410 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2320 = mobl.ref(result__);
    
    var nodes2405 = $("<span>");
    root2810.append(nodes2405);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2320, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2811 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2406 = $("<span>");
      root2811.append(nodes2406);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2812 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2812); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2406;
        nodes2406 = node.contents();
        oldNodes.replaceWith(nodes2406);
      }));
      callback(root2811); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2405;
      nodes2405 = node.contents();
      oldNodes.replaceWith(nodes2405);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp2409 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2321 = mobl.ref(result__);
    
    var nodes2407 = $("<span>");
    root2810.append(nodes2407);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2321, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2408 = $("<span>");
      root2813.append(nodes2408);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2814 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2814); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2408;
        nodes2408 = node.contents();
        oldNodes.replaceWith(nodes2408);
      }));
      callback(root2813); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2407;
      nodes2407 = node.contents();
      oldNodes.replaceWith(nodes2407);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp2408 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2322 = mobl.ref(result__);
    
    var nodes2409 = $("<span>");
    root2810.append(nodes2409);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2322, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2815 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2410 = $("<span>");
      root2815.append(nodes2410);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2816 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2816); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2410;
        nodes2410 = node.contents();
        oldNodes.replaceWith(nodes2410);
      }));
      callback(root2815); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2409;
      nodes2409 = node.contents();
      oldNodes.replaceWith(nodes2409);
    }));
    callback(root2810); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2404;
    nodes2404 = node.contents();
    oldNodes.replaceWith(nodes2404);
  }));
  callback(root2807); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root2817 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2411 = $("<span>");
  root2817.append(nodes2411);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2818 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2324 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2323 = mobl.ref(result__);
    
    var nodes2412 = $("<span>");
    root2818.append(nodes2412);
    subs__.addSub((ui.backButton)(tmp2323, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2324, function(_, callback) {
      var root2819 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2819); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2412;
      nodes2412 = node.contents();
      oldNodes.replaceWith(nodes2412);
    }));
    callback(root2818); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2411;
    nodes2411 = node.contents();
    oldNodes.replaceWith(nodes2411);
  }));
  var nodes2413 = $("<span>");
  root2817.append(nodes2413);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2820 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp2414 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2325 = mobl.ref(result__);
    
    var nodes2414 = $("<span>");
    root2820.append(nodes2414);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2325, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2415 = $("<span>");
      root2821.append(nodes2415);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2822 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2822); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2415;
        nodes2415 = node.contents();
        oldNodes.replaceWith(nodes2415);
      }));
      callback(root2821); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2414;
      nodes2414 = node.contents();
      oldNodes.replaceWith(nodes2414);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp2413 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2326 = mobl.ref(result__);
    
    var nodes2416 = $("<span>");
    root2820.append(nodes2416);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2326, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2823 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2417 = $("<span>");
      root2823.append(nodes2417);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2824 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2824); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2417;
        nodes2417 = node.contents();
        oldNodes.replaceWith(nodes2417);
      }));
      callback(root2823); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2416;
      nodes2416 = node.contents();
      oldNodes.replaceWith(nodes2416);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp2412 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2327 = mobl.ref(result__);
    
    var nodes2418 = $("<span>");
    root2820.append(nodes2418);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2327, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2825 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2419 = $("<span>");
      root2825.append(nodes2419);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2826); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2419;
        nodes2419 = node.contents();
        oldNodes.replaceWith(nodes2419);
      }));
      callback(root2825); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2418;
      nodes2418 = node.contents();
      oldNodes.replaceWith(nodes2418);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp2411 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2328 = mobl.ref(result__);
    
    var nodes2420 = $("<span>");
    root2820.append(nodes2420);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2328, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2827 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2421 = $("<span>");
      root2827.append(nodes2421);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2828 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2828); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2421;
        nodes2421 = node.contents();
        oldNodes.replaceWith(nodes2421);
      }));
      callback(root2827); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2420;
      nodes2420 = node.contents();
      oldNodes.replaceWith(nodes2420);
    }));
    callback(root2820); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2413;
    nodes2413 = node.contents();
    oldNodes.replaceWith(nodes2413);
  }));
  callback(root2817); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root2829 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2422 = $("<span>");
  root2829.append(nodes2422);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2830 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2330 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2329 = mobl.ref(result__);
    
    var nodes2423 = $("<span>");
    root2830.append(nodes2423);
    subs__.addSub((ui.backButton)(tmp2329, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2330, function(_, callback) {
      var root2831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2831); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2423;
      nodes2423 = node.contents();
      oldNodes.replaceWith(nodes2423);
    }));
    callback(root2830); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2422;
    nodes2422 = node.contents();
    oldNodes.replaceWith(nodes2422);
  }));
  var nodes2424 = $("<span>");
  root2829.append(nodes2424);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2832 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp2416 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2331 = mobl.ref(result__);
    
    var nodes2425 = $("<span>");
    root2832.append(nodes2425);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2331, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2426 = $("<span>");
      root2833.append(nodes2426);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2834); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2426;
        nodes2426 = node.contents();
        oldNodes.replaceWith(nodes2426);
      }));
      callback(root2833); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2425;
      nodes2425 = node.contents();
      oldNodes.replaceWith(nodes2425);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp2415 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2332 = mobl.ref(result__);
    
    var nodes2427 = $("<span>");
    root2832.append(nodes2427);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2332, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2428 = $("<span>");
      root2835.append(nodes2428);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2836 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2836); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2428;
        nodes2428 = node.contents();
        oldNodes.replaceWith(nodes2428);
      }));
      callback(root2835); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2427;
      nodes2427 = node.contents();
      oldNodes.replaceWith(nodes2427);
    }));
    callback(root2832); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2424;
    nodes2424 = node.contents();
    oldNodes.replaceWith(nodes2424);
  }));
  callback(root2829); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root2837 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2429 = $("<span>");
  root2837.append(nodes2429);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2838 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2334 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2333 = mobl.ref(result__);
    
    var nodes2430 = $("<span>");
    root2838.append(nodes2430);
    subs__.addSub((ui.backButton)(tmp2333, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2334, function(_, callback) {
      var root2839 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2839); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2430;
      nodes2430 = node.contents();
      oldNodes.replaceWith(nodes2430);
    }));
    callback(root2838); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2429;
    nodes2429 = node.contents();
    oldNodes.replaceWith(nodes2429);
  }));
  var nodes2431 = $("<span>");
  root2837.append(nodes2431);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2840 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp2421 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2335 = mobl.ref(result__);
    
    var nodes2432 = $("<span>");
    root2840.append(nodes2432);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2335, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2841 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2433 = $("<span>");
      root2841.append(nodes2433);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2842 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2842); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2433;
        nodes2433 = node.contents();
        oldNodes.replaceWith(nodes2433);
      }));
      callback(root2841); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2432;
      nodes2432 = node.contents();
      oldNodes.replaceWith(nodes2432);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp2420 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2336 = mobl.ref(result__);
    
    var nodes2434 = $("<span>");
    root2840.append(nodes2434);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2336, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2435 = $("<span>");
      root2843.append(nodes2435);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2844 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2844); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2435;
        nodes2435 = node.contents();
        oldNodes.replaceWith(nodes2435);
      }));
      callback(root2843); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2434;
      nodes2434 = node.contents();
      oldNodes.replaceWith(nodes2434);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp2419 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2337 = mobl.ref(result__);
    
    var nodes2436 = $("<span>");
    root2840.append(nodes2436);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2337, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2845 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2437 = $("<span>");
      root2845.append(nodes2437);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2846 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2846); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2437;
        nodes2437 = node.contents();
        oldNodes.replaceWith(nodes2437);
      }));
      callback(root2845); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2436;
      nodes2436 = node.contents();
      oldNodes.replaceWith(nodes2436);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp2418 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2338 = mobl.ref(result__);
    
    var nodes2438 = $("<span>");
    root2840.append(nodes2438);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2338, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2439 = $("<span>");
      root2847.append(nodes2439);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2848 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2848); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2439;
        nodes2439 = node.contents();
        oldNodes.replaceWith(nodes2439);
      }));
      callback(root2847); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2438;
      nodes2438 = node.contents();
      oldNodes.replaceWith(nodes2438);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp2417 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2339 = mobl.ref(result__);
    
    var nodes2440 = $("<span>");
    root2840.append(nodes2440);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2339, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2849 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2441 = $("<span>");
      root2849.append(nodes2441);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2850 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2850); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2441;
        nodes2441 = node.contents();
        oldNodes.replaceWith(nodes2441);
      }));
      callback(root2849); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2440;
      nodes2440 = node.contents();
      oldNodes.replaceWith(nodes2440);
    }));
    callback(root2840); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2431;
    nodes2431 = node.contents();
    oldNodes.replaceWith(nodes2431);
  }));
  callback(root2837); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root2851 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2442 = $("<span>");
  root2851.append(nodes2442);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2852 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2341 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2340 = mobl.ref(result__);
    
    var nodes2443 = $("<span>");
    root2852.append(nodes2443);
    subs__.addSub((ui.backButton)(tmp2340, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2341, function(_, callback) {
      var root2853 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2853); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2443;
      nodes2443 = node.contents();
      oldNodes.replaceWith(nodes2443);
    }));
    callback(root2852); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2442;
    nodes2442 = node.contents();
    oldNodes.replaceWith(nodes2442);
  }));
  var nodes2444 = $("<span>");
  root2851.append(nodes2444);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2854 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp2424 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2342 = mobl.ref(result__);
    
    var nodes2445 = $("<span>");
    root2854.append(nodes2445);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2342, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2446 = $("<span>");
      root2855.append(nodes2446);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2856 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2856); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2446;
        nodes2446 = node.contents();
        oldNodes.replaceWith(nodes2446);
      }));
      callback(root2855); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2445;
      nodes2445 = node.contents();
      oldNodes.replaceWith(nodes2445);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp2423 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2343 = mobl.ref(result__);
    
    var nodes2447 = $("<span>");
    root2854.append(nodes2447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2343, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2857 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2448 = $("<span>");
      root2857.append(nodes2448);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2858 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2858); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2448;
        nodes2448 = node.contents();
        oldNodes.replaceWith(nodes2448);
      }));
      callback(root2857); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2447;
      nodes2447 = node.contents();
      oldNodes.replaceWith(nodes2447);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp2422 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2344 = mobl.ref(result__);
    
    var nodes2449 = $("<span>");
    root2854.append(nodes2449);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2344, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2450 = $("<span>");
      root2859.append(nodes2450);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2860 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2860); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2450;
        nodes2450 = node.contents();
        oldNodes.replaceWith(nodes2450);
      }));
      callback(root2859); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2449;
      nodes2449 = node.contents();
      oldNodes.replaceWith(nodes2449);
    }));
    callback(root2854); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2444;
    nodes2444 = node.contents();
    oldNodes.replaceWith(nodes2444);
  }));
  callback(root2851); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root2861 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2451 = $("<span>");
  root2861.append(nodes2451);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2862 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2346 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2345 = mobl.ref(result__);
    
    var nodes2452 = $("<span>");
    root2862.append(nodes2452);
    subs__.addSub((ui.backButton)(tmp2345, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2346, function(_, callback) {
      var root2863 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2863); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2452;
      nodes2452 = node.contents();
      oldNodes.replaceWith(nodes2452);
    }));
    callback(root2862); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2451;
    nodes2451 = node.contents();
    oldNodes.replaceWith(nodes2451);
  }));
  var nodes2453 = $("<span>");
  root2861.append(nodes2453);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2864 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp2425 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2347 = mobl.ref(result__);
    
    var nodes2454 = $("<span>");
    root2864.append(nodes2454);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2347, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2865 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2455 = $("<span>");
      root2865.append(nodes2455);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2866 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2866); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2455;
        nodes2455 = node.contents();
        oldNodes.replaceWith(nodes2455);
      }));
      callback(root2865); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2454;
      nodes2454 = node.contents();
      oldNodes.replaceWith(nodes2454);
    }));
    callback(root2864); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2453;
    nodes2453 = node.contents();
    oldNodes.replaceWith(nodes2453);
  }));
  callback(root2861); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root2867 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2456 = $("<span>");
  root2867.append(nodes2456);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2868 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp2438 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2348 = mobl.ref(result__);
    
    var nodes2457 = $("<span>");
    root2868.append(nodes2457);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2348, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2458 = $("<span>");
      root2869.append(nodes2458);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2870); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2458;
        nodes2458 = node.contents();
        oldNodes.replaceWith(nodes2458);
      }));
      callback(root2869); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2457;
      nodes2457 = node.contents();
      oldNodes.replaceWith(nodes2457);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp2437 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2349 = mobl.ref(result__);
    
    var nodes2459 = $("<span>");
    root2868.append(nodes2459);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2349, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2460 = $("<span>");
      root2871.append(nodes2460);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2872 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2872); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2460;
        nodes2460 = node.contents();
        oldNodes.replaceWith(nodes2460);
      }));
      callback(root2871); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2459;
      nodes2459 = node.contents();
      oldNodes.replaceWith(nodes2459);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp2436 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2350 = mobl.ref(result__);
    
    var nodes2461 = $("<span>");
    root2868.append(nodes2461);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2350, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2873 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2462 = $("<span>");
      root2873.append(nodes2462);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2874 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2874); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2462;
        nodes2462 = node.contents();
        oldNodes.replaceWith(nodes2462);
      }));
      callback(root2873); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2461;
      nodes2461 = node.contents();
      oldNodes.replaceWith(nodes2461);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp2435 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2351 = mobl.ref(result__);
    
    var nodes2463 = $("<span>");
    root2868.append(nodes2463);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2351, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2875 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2464 = $("<span>");
      root2875.append(nodes2464);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2876 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2876); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2464;
        nodes2464 = node.contents();
        oldNodes.replaceWith(nodes2464);
      }));
      callback(root2875); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2463;
      nodes2463 = node.contents();
      oldNodes.replaceWith(nodes2463);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp2434 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2352 = mobl.ref(result__);
    
    var nodes2465 = $("<span>");
    root2868.append(nodes2465);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2352, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2877 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2466 = $("<span>");
      root2877.append(nodes2466);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2878 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2878); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2466;
        nodes2466 = node.contents();
        oldNodes.replaceWith(nodes2466);
      }));
      callback(root2877); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2465;
      nodes2465 = node.contents();
      oldNodes.replaceWith(nodes2465);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp2433 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2353 = mobl.ref(result__);
    
    var nodes2467 = $("<span>");
    root2868.append(nodes2467);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2353, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2468 = $("<span>");
      root2879.append(nodes2468);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2880 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2880); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2468;
        nodes2468 = node.contents();
        oldNodes.replaceWith(nodes2468);
      }));
      callback(root2879); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2467;
      nodes2467 = node.contents();
      oldNodes.replaceWith(nodes2467);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp2432 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2354 = mobl.ref(result__);
    
    var nodes2469 = $("<span>");
    root2868.append(nodes2469);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2354, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2470 = $("<span>");
      root2881.append(nodes2470);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2470;
        nodes2470 = node.contents();
        oldNodes.replaceWith(nodes2470);
      }));
      callback(root2881); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2469;
      nodes2469 = node.contents();
      oldNodes.replaceWith(nodes2469);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp2431 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2355 = mobl.ref(result__);
    
    var nodes2471 = $("<span>");
    root2868.append(nodes2471);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2355, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2472 = $("<span>");
      root2883.append(nodes2472);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2472;
        nodes2472 = node.contents();
        oldNodes.replaceWith(nodes2472);
      }));
      callback(root2883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2471;
      nodes2471 = node.contents();
      oldNodes.replaceWith(nodes2471);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp2430 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2356 = mobl.ref(result__);
    
    var nodes2473 = $("<span>");
    root2868.append(nodes2473);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2356, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2885 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2474 = $("<span>");
      root2885.append(nodes2474);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2886 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2886); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2474;
        nodes2474 = node.contents();
        oldNodes.replaceWith(nodes2474);
      }));
      callback(root2885); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2473;
      nodes2473 = node.contents();
      oldNodes.replaceWith(nodes2473);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp2429 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2357 = mobl.ref(result__);
    
    var nodes2475 = $("<span>");
    root2868.append(nodes2475);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2357, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2476 = $("<span>");
      root2887.append(nodes2476);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2888 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2888); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2476;
        nodes2476 = node.contents();
        oldNodes.replaceWith(nodes2476);
      }));
      callback(root2887); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2475;
      nodes2475 = node.contents();
      oldNodes.replaceWith(nodes2475);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp2428 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2358 = mobl.ref(result__);
    
    var nodes2477 = $("<span>");
    root2868.append(nodes2477);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2358, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2478 = $("<span>");
      root2889.append(nodes2478);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2890 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2890); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2478;
        nodes2478 = node.contents();
        oldNodes.replaceWith(nodes2478);
      }));
      callback(root2889); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2477;
      nodes2477 = node.contents();
      oldNodes.replaceWith(nodes2477);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp2427 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2359 = mobl.ref(result__);
    
    var nodes2479 = $("<span>");
    root2868.append(nodes2479);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2359, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2891 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2480 = $("<span>");
      root2891.append(nodes2480);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2892 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2892); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2480;
        nodes2480 = node.contents();
        oldNodes.replaceWith(nodes2480);
      }));
      callback(root2891); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2479;
      nodes2479 = node.contents();
      oldNodes.replaceWith(nodes2479);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp2426 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2360 = mobl.ref(result__);
    
    var nodes2481 = $("<span>");
    root2868.append(nodes2481);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2360, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2893 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2482 = $("<span>");
      root2893.append(nodes2482);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2894 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2894); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2482;
        nodes2482 = node.contents();
        oldNodes.replaceWith(nodes2482);
      }));
      callback(root2893); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2481;
      nodes2481 = node.contents();
      oldNodes.replaceWith(nodes2481);
    }));
    callback(root2868); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2456;
    nodes2456 = node.contents();
    oldNodes.replaceWith(nodes2456);
  }));
  callback(root2867); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root2895 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2483 = $("<span>");
  root2895.append(nodes2483);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2896 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp2444 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2361 = mobl.ref(result__);
    
    var nodes2484 = $("<span>");
    root2896.append(nodes2484);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2361, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2897 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2485 = $("<span>");
      root2897.append(nodes2485);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2898 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2898); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2485;
        nodes2485 = node.contents();
        oldNodes.replaceWith(nodes2485);
      }));
      callback(root2897); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2484;
      nodes2484 = node.contents();
      oldNodes.replaceWith(nodes2484);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp2443 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2362 = mobl.ref(result__);
    
    var nodes2486 = $("<span>");
    root2896.append(nodes2486);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2362, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2899 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2487 = $("<span>");
      root2899.append(nodes2487);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2900 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2900); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2487;
        nodes2487 = node.contents();
        oldNodes.replaceWith(nodes2487);
      }));
      callback(root2899); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2486;
      nodes2486 = node.contents();
      oldNodes.replaceWith(nodes2486);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp2442 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2363 = mobl.ref(result__);
    
    var nodes2488 = $("<span>");
    root2896.append(nodes2488);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2363, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2901 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2489 = $("<span>");
      root2901.append(nodes2489);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2902 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2902); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2489;
        nodes2489 = node.contents();
        oldNodes.replaceWith(nodes2489);
      }));
      callback(root2901); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2488;
      nodes2488 = node.contents();
      oldNodes.replaceWith(nodes2488);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp2441 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2364 = mobl.ref(result__);
    
    var nodes2490 = $("<span>");
    root2896.append(nodes2490);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2364, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2903 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2491 = $("<span>");
      root2903.append(nodes2491);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2904 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2904); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2491;
        nodes2491 = node.contents();
        oldNodes.replaceWith(nodes2491);
      }));
      callback(root2903); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2490;
      nodes2490 = node.contents();
      oldNodes.replaceWith(nodes2490);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp2440 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2365 = mobl.ref(result__);
    
    var nodes2492 = $("<span>");
    root2896.append(nodes2492);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2365, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2493 = $("<span>");
      root2905.append(nodes2493);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2906 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2906); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2493;
        nodes2493 = node.contents();
        oldNodes.replaceWith(nodes2493);
      }));
      callback(root2905); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2492;
      nodes2492 = node.contents();
      oldNodes.replaceWith(nodes2492);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp2439 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2366 = mobl.ref(result__);
    
    var nodes2494 = $("<span>");
    root2896.append(nodes2494);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2366, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2907 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2495 = $("<span>");
      root2907.append(nodes2495);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2908 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2908); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2495;
        nodes2495 = node.contents();
        oldNodes.replaceWith(nodes2495);
      }));
      callback(root2907); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2494;
      nodes2494 = node.contents();
      oldNodes.replaceWith(nodes2494);
    }));
    callback(root2896); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2483;
    nodes2483 = node.contents();
    oldNodes.replaceWith(nodes2483);
  }));
  callback(root2895); return subs__;
  
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
  var root2909 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node419 = $("<div>");
  
  var ref414 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref414.get() !== null) {
    node419.attr('class', ref414.get());
    subs__.addSub(ref414.addEventListener('change', function(_, ref, val) {
      node419.attr('class', val);
    }));
    
  }
  subs__.addSub(ref414.rebind());
  
  var val186 = onclick.get();
  if(val186 !== null) {
    subs__.addSub(mobl.domBind(node419, 'tap', val186));
  }
  
  
  var node420 = $("<div>");
  
  var ref413 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref413.get() !== null) {
    node420.attr('class', ref413.get());
    subs__.addSub(ref413.addEventListener('change', function(_, ref, val) {
      node420.attr('class', val);
    }));
    
  }
  subs__.addSub(ref413.rebind());
  
  
  var node421 = $("<div>");
  
  var ref411 = text;
  node421.text(""+ref411.get());
  var ignore73 = false;
  subs__.addSub(ref411.addEventListener('change', function(_, ref, val) {
    if(ignore73) return;
    node421.text(""+val);
  }));
  subs__.addSub(ref411.rebind());
  
  
  var ref412 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref412.get() !== null) {
    node421.attr('class', ref412.get());
    subs__.addSub(ref412.addEventListener('change', function(_, ref, val) {
      node421.attr('class', val);
    }));
    
  }
  subs__.addSub(ref412.rebind());
  
  node420.append(node421);
  node419.append(node420);
  var nodes2496 = $("<span>");
  node419.append(nodes2496);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl161();
  }));
  
  function renderControl161() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2910 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2910); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2496;
      nodes2496 = node.contents();
      oldNodes.replaceWith(nodes2496);
    }));
  }
  renderControl161();
  root2909.append(node419);
  callback(root2909); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp2445 = result__;
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

nrichRPG.coreWorkout.removeMathJaxIncidentElements = function() {
   var __this = this;
  mobl.$("span").remove(".MathJax_Preview");
  mobl.$("script").remove("#MathJax-Element-*");
};


nrichRPG.coreWorkout.answerBlock = function(qa, number, elements, callback) {
  var root2911 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                   var result__ = qa.get().answer != "%GRAPH%";
                   if(result__) {
                     var result__ = mobl.$("#answer-block-" + number.get()).children("span:first").html();
                     qa.get().answer = result__;
                     if(callback && callback.apply) callback(); return;
                   } else {
                     {
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp2370 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp2369 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp2369.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp2369.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp2369.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes2497 = $("<span>");
  root2911.append(nodes2497);
  subs__.addSub((mobl.block)(tmp2369, mobl.ref(null), tmp2370, mobl.ref(null), function(_, callback) {
    var root2912 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp2367 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp2367.set("A" + number.get() + ". ");
    }));
    
    var nodes2498 = $("<span>");
    root2912.append(nodes2498);
    subs__.addSub((mobl.label)(tmp2367, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2913 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2913); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2498;
      nodes2498 = node.contents();
      oldNodes.replaceWith(nodes2498);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp2368 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp2368.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node422 = $("<span>");
    root2912.append(node422);
    var condSubs92 = new mobl.CompSubscription();
    subs__.addSub(condSubs92);
    var oldValue92;
    var renderCond92 = function() {
      var value216 = tmp2368.get();
      if(oldValue92 === value216) return;
      oldValue92 = value216;
      var subs__ = condSubs92;
      subs__.unsubscribe();
      node422.empty();
      if(value216) {
        
        var node423 = $("<span>");
        
        var ref415 = mobl.ref("answer-block-" + number.get());
        if(ref415.get() !== null) {
          node423.attr('id', ref415.get());
          subs__.addSub(ref415.addEventListener('change', function(_, ref, val) {
            node423.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node423.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref415.rebind());
        
        var nodes2499 = $("<span>");
        node423.append(nodes2499);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root2914 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2914); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2499;
          nodes2499 = node.contents();
          oldNodes.replaceWith(nodes2499);
        }));
        node422.append(node423);
        
        
        
      } else {
        var nodes2500 = $("<span>");
        node422.append(nodes2500);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root2915 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2915); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2500;
          nodes2500 = node.contents();
          oldNodes.replaceWith(nodes2500);
        }));
        
        
      }
    };
    renderCond92();
    subs__.addSub(tmp2368.addEventListener('change', function() {
      renderCond92();
    }));
    
    callback(root2912); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2497;
    nodes2497 = node.contents();
    oldNodes.replaceWith(nodes2497);
  }));
  var nodes2501 = $("<span>");
  root2911.append(nodes2501);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2916 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node424 = $("<span>");
    node424.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp2447 = result__;
      var tmp2371 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp2446 = result__;
          var result__ = tmp2446;
          tmp2371.set(result__);
          
        });
      }));
      
      var nodes2505 = $("<span>");
      node424.append(nodes2505);
      subs__.addSub((mobl.html)(tmp2371, function(_, callback) {
        var root2920 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2920); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2505;
        nodes2505 = node.contents();
        oldNodes.replaceWith(nodes2505);
      }));
      root2916.append(node424);
      var nodes2502 = $("<span>");
      root2916.append(nodes2502);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2917 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2917); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2502;
        nodes2502 = node.contents();
        oldNodes.replaceWith(nodes2502);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2372 = mobl.ref(result__);
      
      var nodes2503 = $("<span>");
      root2916.append(nodes2503);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2372, function(_, callback) {
        var root2918 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2918); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2503;
        nodes2503 = node.contents();
        oldNodes.replaceWith(nodes2503);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2373 = mobl.ref(result__);
      
      var nodes2504 = $("<span>");
      root2916.append(nodes2504);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2373, function(_, callback) {
        var root2919 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2919); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2504;
        nodes2504 = node.contents();
        oldNodes.replaceWith(nodes2504);
      }));
      callback(root2916); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2501;
    nodes2501 = node.contents();
    oldNodes.replaceWith(nodes2501);
  }));
  callback(root2911); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp2448 = result__;
    var result__ = tmp2448;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp2449 = result__;
        var result__ = tmp2449;
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
  var root2921 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp2457 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp2375 = mobl.ref(result__);
  
  var nodes2506 = $("<span>");
  root2921.append(nodes2506);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp2375, function(_, callback) {
    var root2922 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp2450 = result__;
                       var result__ = tmp2450;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp2451 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp2374 = mobl.ref(result__);
    
    var nodes2507 = $("<span>");
    root2922.append(nodes2507);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp2374, function(_, callback) {
      var root2923 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2923); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2507;
      nodes2507 = node.contents();
      oldNodes.replaceWith(nodes2507);
    }));
    callback(root2922); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2506;
    nodes2506 = node.contents();
    oldNodes.replaceWith(nodes2506);
  }));
  var nodes2508 = $("<span>");
  root2921.append(nodes2508);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2924 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp2456 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2378 = mobl.ref(result__);
    
    var nodes2509 = $("<span>");
    root2924.append(nodes2509);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp2378, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2925 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp2376 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp2376.set("Q" + number.get() + ". ");
      }));
      
      var nodes2510 = $("<span>");
      root2925.append(nodes2510);
      subs__.addSub((mobl.html)(tmp2376, function(_, callback) {
        var root2926 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2926); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2510;
        nodes2510 = node.contents();
        oldNodes.replaceWith(nodes2510);
      }));
      
      var node425 = $("<span>");
      
      var ref416 = mobl.ref("question-block-" + number.get());
      if(ref416.get() !== null) {
        node425.attr('id', ref416.get());
        subs__.addSub(ref416.addEventListener('change', function(_, ref, val) {
          node425.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node425.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref416.rebind());
      
      var nodes2512 = $("<span>");
      node425.append(nodes2512);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root2928 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2928); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2512;
        nodes2512 = node.contents();
        oldNodes.replaceWith(nodes2512);
      }));
      root2925.append(node425);
      
      var node426 = $("<span>");
      node426.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp2453 = result__;
        var tmp2377 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp2452 = result__;
            var result__ = tmp2452;
            tmp2377.set(result__);
            
          });
        }));
        
        var nodes2511 = $("<span>");
        node426.append(nodes2511);
        subs__.addSub((mobl.html)(tmp2377, function(_, callback) {
          var root2927 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2927); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2511;
          nodes2511 = node.contents();
          oldNodes.replaceWith(nodes2511);
        }));
        root2925.append(node426);
        callback(root2925); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2509;
      nodes2509 = node.contents();
      oldNodes.replaceWith(nodes2509);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp2455 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2380 = mobl.ref(result__);
    
    var nodes2513 = $("<span>");
    root2924.append(nodes2513);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2380, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2929 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2514 = $("<span>");
      root2929.append(nodes2514);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2930 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp2454 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp2379 = mobl.ref(result__);
        
        var nodes2515 = $("<span>");
        root2930.append(nodes2515);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp2379, function(_, callback) {
          var root2931 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2931); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2515;
          nodes2515 = node.contents();
          oldNodes.replaceWith(nodes2515);
        }));
        callback(root2930); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2514;
        nodes2514 = node.contents();
        oldNodes.replaceWith(nodes2514);
      }));
      
      var node427 = $("<span>");
      root2929.append(node427);
      var condSubs93 = new mobl.CompSubscription();
      subs__.addSub(condSubs93);
      var oldValue93;
      var renderCond93 = function() {
        var value217 = qa.get().done;
        if(oldValue93 === value217) return;
        oldValue93 = value217;
        var subs__ = condSubs93;
        subs__.unsubscribe();
        node427.empty();
        if(value217) {
          var nodes2516 = $("<span>");
          node427.append(nodes2516);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root2932 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2932); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2516;
            nodes2516 = node.contents();
            oldNodes.replaceWith(nodes2516);
          }));
          
          
        } else {
          
        }
      };
      renderCond93();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond93();
      }));
      
      callback(root2929); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2513;
      nodes2513 = node.contents();
      oldNodes.replaceWith(nodes2513);
    }));
    callback(root2924); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2508;
    nodes2508 = node.contents();
    oldNodes.replaceWith(nodes2508);
  }));
  callback(root2921); return subs__;
  
  
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
  qas.list(function(coll270) {
    coll270 = coll270.reverse();
    function processOne84() {
      var item;
      item = coll270.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll270.length > 0) processOne84(); else rest84();
      
    }
    function rest84() {
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
    if(coll270.length > 0) processOne84(); else rest84();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll271) {
    coll271 = coll271.reverse();
    function processOne85() {
      var item;
      item = coll271.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll271.length > 0) processOne85(); else rest85();
      
    }
    function rest85() {
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
    if(coll271.length > 0) processOne85(); else rest85();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll272) {
    coll272 = coll272.reverse();
    function processOne86() {
      var item;
      item = coll272.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll272.length > 0) processOne86(); else rest86();
      
    }
    function rest86() {
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
    if(coll272.length > 0) processOne86(); else rest86();
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