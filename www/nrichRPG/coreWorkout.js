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
    var tmp436 = result__;
    var result__ = tmp436;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp437 = result__;
      var result__ = tmp437;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp438 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll12) {
    coll12 = coll12.reverse();
    function processOne12() {
      var i;
      i = coll12.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp439 = result__;
        
        if(coll12.length > 0) processOne12(); else rest12();
        
      });
    }
    function rest12() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll12.length > 0) processOne12(); else rest12();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll13) {
    coll13 = coll13.reverse();
    function processOne13() {
      var i;
      i = coll13.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp440 = result__;
          
          if(coll13.length > 0) processOne13(); else rest13();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp440 = result__;
            
            if(coll13.length > 0) processOne13(); else rest13();
            
          });
        }
      }
    }
    function rest13() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll13.length > 0) processOne13(); else rest13();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll14) {
    coll14 = coll14.reverse();
    function processOne14() {
      var i;
      i = coll14.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp441 = result__;
        
        if(coll14.length > 0) processOne14(); else rest14();
        
      });
    }
    function rest14() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll14.length > 0) processOne14(); else rest14();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root358 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes327 = $("<span>");
  root358.append(nodes327);
  subs__.addSub((ui.group)(function(_, callback) {
    var root359 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp449 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp348 = mobl.ref(result__);
    
    var nodes328 = $("<span>");
    root359.append(nodes328);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp348, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root360 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes329 = $("<span>");
      root360.append(nodes329);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root361 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root361); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes329;
        nodes329 = node.contents();
        oldNodes.replaceWith(nodes329);
      }));
      callback(root360); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes328;
      nodes328 = node.contents();
      oldNodes.replaceWith(nodes328);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp448 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp349 = mobl.ref(result__);
    
    var nodes330 = $("<span>");
    root359.append(nodes330);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp349, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes331 = $("<span>");
      root362.append(nodes331);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root363 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root363); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes331;
        nodes331 = node.contents();
        oldNodes.replaceWith(nodes331);
      }));
      callback(root362); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes330;
      nodes330 = node.contents();
      oldNodes.replaceWith(nodes330);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp447 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp350 = mobl.ref(result__);
    
    var nodes332 = $("<span>");
    root359.append(nodes332);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp350, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root364 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes333 = $("<span>");
      root364.append(nodes333);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root365 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root365); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes333;
        nodes333 = node.contents();
        oldNodes.replaceWith(nodes333);
      }));
      callback(root364); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes332;
      nodes332 = node.contents();
      oldNodes.replaceWith(nodes332);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp446 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp351 = mobl.ref(result__);
    
    var nodes334 = $("<span>");
    root359.append(nodes334);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp351, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root366 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes335 = $("<span>");
      root366.append(nodes335);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root367 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root367); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes335;
        nodes335 = node.contents();
        oldNodes.replaceWith(nodes335);
      }));
      callback(root366); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes334;
      nodes334 = node.contents();
      oldNodes.replaceWith(nodes334);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp445 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp352 = mobl.ref(result__);
    
    var nodes336 = $("<span>");
    root359.append(nodes336);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp352, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes337 = $("<span>");
      root368.append(nodes337);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root369 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root369); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes337;
        nodes337 = node.contents();
        oldNodes.replaceWith(nodes337);
      }));
      callback(root368); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes336;
      nodes336 = node.contents();
      oldNodes.replaceWith(nodes336);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp444 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp353 = mobl.ref(result__);
    
    var nodes338 = $("<span>");
    root359.append(nodes338);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp353, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes339 = $("<span>");
      root370.append(nodes339);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root371 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root371); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes339;
        nodes339 = node.contents();
        oldNodes.replaceWith(nodes339);
      }));
      callback(root370); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes338;
      nodes338 = node.contents();
      oldNodes.replaceWith(nodes338);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp443 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp354 = mobl.ref(result__);
    
    var nodes340 = $("<span>");
    root359.append(nodes340);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp354, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root372 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes341 = $("<span>");
      root372.append(nodes341);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root373 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root373); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes341;
        nodes341 = node.contents();
        oldNodes.replaceWith(nodes341);
      }));
      callback(root372); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes340;
      nodes340 = node.contents();
      oldNodes.replaceWith(nodes340);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp442 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp355 = mobl.ref(result__);
    
    var nodes342 = $("<span>");
    root359.append(nodes342);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp355, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root374 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes343 = $("<span>");
      root374.append(nodes343);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root375 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root375); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes343;
        nodes343 = node.contents();
        oldNodes.replaceWith(nodes343);
      }));
      callback(root374); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes342;
      nodes342 = node.contents();
      oldNodes.replaceWith(nodes342);
    }));
    callback(root359); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes327;
    nodes327 = node.contents();
    oldNodes.replaceWith(nodes327);
  }));
  callback(root358); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root376 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes344 = $("<span>");
  root376.append(nodes344);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root377 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp357 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp356 = mobl.ref(result__);
    
    var nodes345 = $("<span>");
    root377.append(nodes345);
    subs__.addSub((ui.backButton)(tmp356, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp357, function(_, callback) {
      var root378 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root378); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes345;
      nodes345 = node.contents();
      oldNodes.replaceWith(nodes345);
    }));
    callback(root377); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes344;
    nodes344 = node.contents();
    oldNodes.replaceWith(nodes344);
  }));
  var nodes346 = $("<span>");
  root376.append(nodes346);
  subs__.addSub((ui.group)(function(_, callback) {
    var root379 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp457 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp358 = mobl.ref(result__);
    
    var nodes347 = $("<span>");
    root379.append(nodes347);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp358, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes348 = $("<span>");
      root380.append(nodes348);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root381 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root381); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes348;
        nodes348 = node.contents();
        oldNodes.replaceWith(nodes348);
      }));
      callback(root380); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes347;
      nodes347 = node.contents();
      oldNodes.replaceWith(nodes347);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp456 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp359 = mobl.ref(result__);
    
    var nodes349 = $("<span>");
    root379.append(nodes349);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp359, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root382 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes350 = $("<span>");
      root382.append(nodes350);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root383 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root383); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes350;
        nodes350 = node.contents();
        oldNodes.replaceWith(nodes350);
      }));
      callback(root382); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes349;
      nodes349 = node.contents();
      oldNodes.replaceWith(nodes349);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp455 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp360 = mobl.ref(result__);
    
    var nodes351 = $("<span>");
    root379.append(nodes351);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp360, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root384 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes352 = $("<span>");
      root384.append(nodes352);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root385 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root385); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes352;
        nodes352 = node.contents();
        oldNodes.replaceWith(nodes352);
      }));
      callback(root384); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes351;
      nodes351 = node.contents();
      oldNodes.replaceWith(nodes351);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp454 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp361 = mobl.ref(result__);
    
    var nodes353 = $("<span>");
    root379.append(nodes353);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp361, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root386 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes354 = $("<span>");
      root386.append(nodes354);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root387 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root387); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes354;
        nodes354 = node.contents();
        oldNodes.replaceWith(nodes354);
      }));
      callback(root386); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes353;
      nodes353 = node.contents();
      oldNodes.replaceWith(nodes353);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp453 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp362 = mobl.ref(result__);
    
    var nodes355 = $("<span>");
    root379.append(nodes355);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp362, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root388 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes356 = $("<span>");
      root388.append(nodes356);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root389 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root389); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes356;
        nodes356 = node.contents();
        oldNodes.replaceWith(nodes356);
      }));
      callback(root388); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes355;
      nodes355 = node.contents();
      oldNodes.replaceWith(nodes355);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp452 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp363 = mobl.ref(result__);
    
    var nodes357 = $("<span>");
    root379.append(nodes357);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp363, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes358 = $("<span>");
      root390.append(nodes358);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root391 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root391); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes358;
        nodes358 = node.contents();
        oldNodes.replaceWith(nodes358);
      }));
      callback(root390); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes357;
      nodes357 = node.contents();
      oldNodes.replaceWith(nodes357);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp451 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp364 = mobl.ref(result__);
    
    var nodes359 = $("<span>");
    root379.append(nodes359);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp364, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root392 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes360 = $("<span>");
      root392.append(nodes360);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root393); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes360;
        nodes360 = node.contents();
        oldNodes.replaceWith(nodes360);
      }));
      callback(root392); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes359;
      nodes359 = node.contents();
      oldNodes.replaceWith(nodes359);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp450 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp365 = mobl.ref(result__);
    
    var nodes361 = $("<span>");
    root379.append(nodes361);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp365, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root394 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes362 = $("<span>");
      root394.append(nodes362);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root395 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root395); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes362;
        nodes362 = node.contents();
        oldNodes.replaceWith(nodes362);
      }));
      callback(root394); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes361;
      nodes361 = node.contents();
      oldNodes.replaceWith(nodes361);
    }));
    callback(root379); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes346;
    nodes346 = node.contents();
    oldNodes.replaceWith(nodes346);
  }));
  callback(root376); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root396 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes363 = $("<span>");
  root396.append(nodes363);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root397 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp367 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp366 = mobl.ref(result__);
    
    var nodes364 = $("<span>");
    root397.append(nodes364);
    subs__.addSub((ui.backButton)(tmp366, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp367, function(_, callback) {
      var root398 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root398); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes364;
      nodes364 = node.contents();
      oldNodes.replaceWith(nodes364);
    }));
    callback(root397); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes363;
    nodes363 = node.contents();
    oldNodes.replaceWith(nodes363);
  }));
  var nodes365 = $("<span>");
  root396.append(nodes365);
  subs__.addSub((ui.group)(function(_, callback) {
    var root399 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp462 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp368 = mobl.ref(result__);
    
    var nodes366 = $("<span>");
    root399.append(nodes366);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp368, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root400 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes367 = $("<span>");
      root400.append(nodes367);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root401 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root401); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes367;
        nodes367 = node.contents();
        oldNodes.replaceWith(nodes367);
      }));
      callback(root400); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes366;
      nodes366 = node.contents();
      oldNodes.replaceWith(nodes366);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp461 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp369 = mobl.ref(result__);
    
    var nodes368 = $("<span>");
    root399.append(nodes368);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp369, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root402 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes369 = $("<span>");
      root402.append(nodes369);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root403 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root403); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes369;
        nodes369 = node.contents();
        oldNodes.replaceWith(nodes369);
      }));
      callback(root402); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes368;
      nodes368 = node.contents();
      oldNodes.replaceWith(nodes368);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp460 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp370 = mobl.ref(result__);
    
    var nodes370 = $("<span>");
    root399.append(nodes370);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp370, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root404 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes371 = $("<span>");
      root404.append(nodes371);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root405 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root405); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes371;
        nodes371 = node.contents();
        oldNodes.replaceWith(nodes371);
      }));
      callback(root404); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes370;
      nodes370 = node.contents();
      oldNodes.replaceWith(nodes370);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp459 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp371 = mobl.ref(result__);
    
    var nodes372 = $("<span>");
    root399.append(nodes372);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp371, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root406 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes373 = $("<span>");
      root406.append(nodes373);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root407 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root407); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes373;
        nodes373 = node.contents();
        oldNodes.replaceWith(nodes373);
      }));
      callback(root406); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes372;
      nodes372 = node.contents();
      oldNodes.replaceWith(nodes372);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp458 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp372 = mobl.ref(result__);
    
    var nodes374 = $("<span>");
    root399.append(nodes374);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp372, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root408 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes375 = $("<span>");
      root408.append(nodes375);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root409 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root409); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes375;
        nodes375 = node.contents();
        oldNodes.replaceWith(nodes375);
      }));
      callback(root408); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes374;
      nodes374 = node.contents();
      oldNodes.replaceWith(nodes374);
    }));
    callback(root399); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes365;
    nodes365 = node.contents();
    oldNodes.replaceWith(nodes365);
  }));
  callback(root396); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root410 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes376 = $("<span>");
  root410.append(nodes376);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root411 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp374 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp373 = mobl.ref(result__);
    
    var nodes377 = $("<span>");
    root411.append(nodes377);
    subs__.addSub((ui.backButton)(tmp373, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp374, function(_, callback) {
      var root412 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root412); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes377;
      nodes377 = node.contents();
      oldNodes.replaceWith(nodes377);
    }));
    callback(root411); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes376;
    nodes376 = node.contents();
    oldNodes.replaceWith(nodes376);
  }));
  var nodes378 = $("<span>");
  root410.append(nodes378);
  subs__.addSub((ui.group)(function(_, callback) {
    var root413 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp465 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp375 = mobl.ref(result__);
    
    var nodes379 = $("<span>");
    root413.append(nodes379);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp375, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root414 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes380 = $("<span>");
      root414.append(nodes380);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root415 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root415); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes380;
        nodes380 = node.contents();
        oldNodes.replaceWith(nodes380);
      }));
      callback(root414); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes379;
      nodes379 = node.contents();
      oldNodes.replaceWith(nodes379);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp464 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp376 = mobl.ref(result__);
    
    var nodes381 = $("<span>");
    root413.append(nodes381);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp376, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root416 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes382 = $("<span>");
      root416.append(nodes382);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root417 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root417); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes382;
        nodes382 = node.contents();
        oldNodes.replaceWith(nodes382);
      }));
      callback(root416); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes381;
      nodes381 = node.contents();
      oldNodes.replaceWith(nodes381);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp463 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp377 = mobl.ref(result__);
    
    var nodes383 = $("<span>");
    root413.append(nodes383);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp377, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root418 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes384 = $("<span>");
      root418.append(nodes384);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root419 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root419); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes384;
        nodes384 = node.contents();
        oldNodes.replaceWith(nodes384);
      }));
      callback(root418); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes383;
      nodes383 = node.contents();
      oldNodes.replaceWith(nodes383);
    }));
    callback(root413); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes378;
    nodes378 = node.contents();
    oldNodes.replaceWith(nodes378);
  }));
  callback(root410); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root420 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes385 = $("<span>");
  root420.append(nodes385);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root421 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp379 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp378 = mobl.ref(result__);
    
    var nodes386 = $("<span>");
    root421.append(nodes386);
    subs__.addSub((ui.backButton)(tmp378, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp379, function(_, callback) {
      var root422 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root422); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes386;
      nodes386 = node.contents();
      oldNodes.replaceWith(nodes386);
    }));
    callback(root421); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes385;
    nodes385 = node.contents();
    oldNodes.replaceWith(nodes385);
  }));
  var nodes387 = $("<span>");
  root420.append(nodes387);
  subs__.addSub((ui.group)(function(_, callback) {
    var root423 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp469 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp380 = mobl.ref(result__);
    
    var nodes388 = $("<span>");
    root423.append(nodes388);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp380, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes389 = $("<span>");
      root424.append(nodes389);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root425 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root425); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes389;
        nodes389 = node.contents();
        oldNodes.replaceWith(nodes389);
      }));
      callback(root424); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes388;
      nodes388 = node.contents();
      oldNodes.replaceWith(nodes388);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp468 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp381 = mobl.ref(result__);
    
    var nodes390 = $("<span>");
    root423.append(nodes390);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp381, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root426 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes391 = $("<span>");
      root426.append(nodes391);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root427 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root427); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes391;
        nodes391 = node.contents();
        oldNodes.replaceWith(nodes391);
      }));
      callback(root426); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes390;
      nodes390 = node.contents();
      oldNodes.replaceWith(nodes390);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp467 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp382 = mobl.ref(result__);
    
    var nodes392 = $("<span>");
    root423.append(nodes392);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp382, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root428 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes393 = $("<span>");
      root428.append(nodes393);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root429 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root429); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes393;
        nodes393 = node.contents();
        oldNodes.replaceWith(nodes393);
      }));
      callback(root428); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes392;
      nodes392 = node.contents();
      oldNodes.replaceWith(nodes392);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp466 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp383 = mobl.ref(result__);
    
    var nodes394 = $("<span>");
    root423.append(nodes394);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp383, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root430 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes395 = $("<span>");
      root430.append(nodes395);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root431 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root431); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes395;
        nodes395 = node.contents();
        oldNodes.replaceWith(nodes395);
      }));
      callback(root430); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes394;
      nodes394 = node.contents();
      oldNodes.replaceWith(nodes394);
    }));
    callback(root423); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes387;
    nodes387 = node.contents();
    oldNodes.replaceWith(nodes387);
  }));
  callback(root420); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root432 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes396 = $("<span>");
  root432.append(nodes396);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root433 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp385 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp384 = mobl.ref(result__);
    
    var nodes397 = $("<span>");
    root433.append(nodes397);
    subs__.addSub((ui.backButton)(tmp384, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp385, function(_, callback) {
      var root434 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root434); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes397;
      nodes397 = node.contents();
      oldNodes.replaceWith(nodes397);
    }));
    callback(root433); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes396;
    nodes396 = node.contents();
    oldNodes.replaceWith(nodes396);
  }));
  var nodes398 = $("<span>");
  root432.append(nodes398);
  subs__.addSub((ui.group)(function(_, callback) {
    var root435 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp471 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp386 = mobl.ref(result__);
    
    var nodes399 = $("<span>");
    root435.append(nodes399);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp386, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root436 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes400 = $("<span>");
      root436.append(nodes400);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root437 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root437); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes400;
        nodes400 = node.contents();
        oldNodes.replaceWith(nodes400);
      }));
      callback(root436); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes399;
      nodes399 = node.contents();
      oldNodes.replaceWith(nodes399);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp470 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp387 = mobl.ref(result__);
    
    var nodes401 = $("<span>");
    root435.append(nodes401);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp387, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root438 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes402 = $("<span>");
      root438.append(nodes402);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root439 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root439); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes402;
        nodes402 = node.contents();
        oldNodes.replaceWith(nodes402);
      }));
      callback(root438); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes401;
      nodes401 = node.contents();
      oldNodes.replaceWith(nodes401);
    }));
    callback(root435); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes398;
    nodes398 = node.contents();
    oldNodes.replaceWith(nodes398);
  }));
  callback(root432); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root440 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes403 = $("<span>");
  root440.append(nodes403);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root441 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp389 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp388 = mobl.ref(result__);
    
    var nodes404 = $("<span>");
    root441.append(nodes404);
    subs__.addSub((ui.backButton)(tmp388, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp389, function(_, callback) {
      var root442 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root442); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes404;
      nodes404 = node.contents();
      oldNodes.replaceWith(nodes404);
    }));
    callback(root441); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes403;
    nodes403 = node.contents();
    oldNodes.replaceWith(nodes403);
  }));
  var nodes405 = $("<span>");
  root440.append(nodes405);
  subs__.addSub((ui.group)(function(_, callback) {
    var root443 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp476 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp390 = mobl.ref(result__);
    
    var nodes406 = $("<span>");
    root443.append(nodes406);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp390, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root444 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes407 = $("<span>");
      root444.append(nodes407);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root445 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root445); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes407;
        nodes407 = node.contents();
        oldNodes.replaceWith(nodes407);
      }));
      callback(root444); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes406;
      nodes406 = node.contents();
      oldNodes.replaceWith(nodes406);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp475 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp391 = mobl.ref(result__);
    
    var nodes408 = $("<span>");
    root443.append(nodes408);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp391, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root446 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes409 = $("<span>");
      root446.append(nodes409);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root447 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root447); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes409;
        nodes409 = node.contents();
        oldNodes.replaceWith(nodes409);
      }));
      callback(root446); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes408;
      nodes408 = node.contents();
      oldNodes.replaceWith(nodes408);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp474 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp392 = mobl.ref(result__);
    
    var nodes410 = $("<span>");
    root443.append(nodes410);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp392, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root448 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes411 = $("<span>");
      root448.append(nodes411);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root449 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root449); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes411;
        nodes411 = node.contents();
        oldNodes.replaceWith(nodes411);
      }));
      callback(root448); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes410;
      nodes410 = node.contents();
      oldNodes.replaceWith(nodes410);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp473 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp393 = mobl.ref(result__);
    
    var nodes412 = $("<span>");
    root443.append(nodes412);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp393, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root450 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes413 = $("<span>");
      root450.append(nodes413);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root451 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root451); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes413;
        nodes413 = node.contents();
        oldNodes.replaceWith(nodes413);
      }));
      callback(root450); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes412;
      nodes412 = node.contents();
      oldNodes.replaceWith(nodes412);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp472 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp394 = mobl.ref(result__);
    
    var nodes414 = $("<span>");
    root443.append(nodes414);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp394, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes415 = $("<span>");
      root452.append(nodes415);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root453 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root453); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes415;
        nodes415 = node.contents();
        oldNodes.replaceWith(nodes415);
      }));
      callback(root452); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes414;
      nodes414 = node.contents();
      oldNodes.replaceWith(nodes414);
    }));
    callback(root443); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes405;
    nodes405 = node.contents();
    oldNodes.replaceWith(nodes405);
  }));
  callback(root440); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root454 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes416 = $("<span>");
  root454.append(nodes416);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root455 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp396 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp395 = mobl.ref(result__);
    
    var nodes417 = $("<span>");
    root455.append(nodes417);
    subs__.addSub((ui.backButton)(tmp395, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp396, function(_, callback) {
      var root456 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root456); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes417;
      nodes417 = node.contents();
      oldNodes.replaceWith(nodes417);
    }));
    callback(root455); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes416;
    nodes416 = node.contents();
    oldNodes.replaceWith(nodes416);
  }));
  var nodes418 = $("<span>");
  root454.append(nodes418);
  subs__.addSub((ui.group)(function(_, callback) {
    var root457 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp479 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp397 = mobl.ref(result__);
    
    var nodes419 = $("<span>");
    root457.append(nodes419);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp397, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root458 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes420 = $("<span>");
      root458.append(nodes420);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root459 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root459); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes420;
        nodes420 = node.contents();
        oldNodes.replaceWith(nodes420);
      }));
      callback(root458); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes419;
      nodes419 = node.contents();
      oldNodes.replaceWith(nodes419);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp478 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp398 = mobl.ref(result__);
    
    var nodes421 = $("<span>");
    root457.append(nodes421);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp398, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes422 = $("<span>");
      root460.append(nodes422);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root461 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root461); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes422;
        nodes422 = node.contents();
        oldNodes.replaceWith(nodes422);
      }));
      callback(root460); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes421;
      nodes421 = node.contents();
      oldNodes.replaceWith(nodes421);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp477 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp399 = mobl.ref(result__);
    
    var nodes423 = $("<span>");
    root457.append(nodes423);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp399, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root462 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes424 = $("<span>");
      root462.append(nodes424);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root463 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root463); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes424;
        nodes424 = node.contents();
        oldNodes.replaceWith(nodes424);
      }));
      callback(root462); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes423;
      nodes423 = node.contents();
      oldNodes.replaceWith(nodes423);
    }));
    callback(root457); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes418;
    nodes418 = node.contents();
    oldNodes.replaceWith(nodes418);
  }));
  callback(root454); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root464 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes425 = $("<span>");
  root464.append(nodes425);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root465 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp401 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp400 = mobl.ref(result__);
    
    var nodes426 = $("<span>");
    root465.append(nodes426);
    subs__.addSub((ui.backButton)(tmp400, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp401, function(_, callback) {
      var root466 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root466); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes426;
      nodes426 = node.contents();
      oldNodes.replaceWith(nodes426);
    }));
    callback(root465); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes425;
    nodes425 = node.contents();
    oldNodes.replaceWith(nodes425);
  }));
  var nodes427 = $("<span>");
  root464.append(nodes427);
  subs__.addSub((ui.group)(function(_, callback) {
    var root467 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp480 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp402 = mobl.ref(result__);
    
    var nodes428 = $("<span>");
    root467.append(nodes428);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp402, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root468 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes429 = $("<span>");
      root468.append(nodes429);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root469 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root469); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes429;
        nodes429 = node.contents();
        oldNodes.replaceWith(nodes429);
      }));
      callback(root468); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes428;
      nodes428 = node.contents();
      oldNodes.replaceWith(nodes428);
    }));
    callback(root467); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes427;
    nodes427 = node.contents();
    oldNodes.replaceWith(nodes427);
  }));
  callback(root464); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root470 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes430 = $("<span>");
  root470.append(nodes430);
  subs__.addSub((ui.group)(function(_, callback) {
    var root471 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp493 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp403 = mobl.ref(result__);
    
    var nodes431 = $("<span>");
    root471.append(nodes431);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp403, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root472 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes432 = $("<span>");
      root472.append(nodes432);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root473 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root473); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes432;
        nodes432 = node.contents();
        oldNodes.replaceWith(nodes432);
      }));
      callback(root472); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes431;
      nodes431 = node.contents();
      oldNodes.replaceWith(nodes431);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp492 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp404 = mobl.ref(result__);
    
    var nodes433 = $("<span>");
    root471.append(nodes433);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp404, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root474 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes434 = $("<span>");
      root474.append(nodes434);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root475 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root475); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes434;
        nodes434 = node.contents();
        oldNodes.replaceWith(nodes434);
      }));
      callback(root474); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes433;
      nodes433 = node.contents();
      oldNodes.replaceWith(nodes433);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp491 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp405 = mobl.ref(result__);
    
    var nodes435 = $("<span>");
    root471.append(nodes435);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp405, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root476 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes436 = $("<span>");
      root476.append(nodes436);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root477 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root477); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes436;
        nodes436 = node.contents();
        oldNodes.replaceWith(nodes436);
      }));
      callback(root476); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes435;
      nodes435 = node.contents();
      oldNodes.replaceWith(nodes435);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp490 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp406 = mobl.ref(result__);
    
    var nodes437 = $("<span>");
    root471.append(nodes437);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp406, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root478 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes438 = $("<span>");
      root478.append(nodes438);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root479 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root479); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes438;
        nodes438 = node.contents();
        oldNodes.replaceWith(nodes438);
      }));
      callback(root478); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes437;
      nodes437 = node.contents();
      oldNodes.replaceWith(nodes437);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp489 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp407 = mobl.ref(result__);
    
    var nodes439 = $("<span>");
    root471.append(nodes439);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp407, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root480 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes440 = $("<span>");
      root480.append(nodes440);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root481 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root481); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes440;
        nodes440 = node.contents();
        oldNodes.replaceWith(nodes440);
      }));
      callback(root480); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes439;
      nodes439 = node.contents();
      oldNodes.replaceWith(nodes439);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp488 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp408 = mobl.ref(result__);
    
    var nodes441 = $("<span>");
    root471.append(nodes441);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp408, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root482 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes442 = $("<span>");
      root482.append(nodes442);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root483 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root483); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes442;
        nodes442 = node.contents();
        oldNodes.replaceWith(nodes442);
      }));
      callback(root482); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes441;
      nodes441 = node.contents();
      oldNodes.replaceWith(nodes441);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp487 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp409 = mobl.ref(result__);
    
    var nodes443 = $("<span>");
    root471.append(nodes443);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp409, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root484 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes444 = $("<span>");
      root484.append(nodes444);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root485 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root485); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes444;
        nodes444 = node.contents();
        oldNodes.replaceWith(nodes444);
      }));
      callback(root484); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes443;
      nodes443 = node.contents();
      oldNodes.replaceWith(nodes443);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp486 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp410 = mobl.ref(result__);
    
    var nodes445 = $("<span>");
    root471.append(nodes445);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp410, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root486 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes446 = $("<span>");
      root486.append(nodes446);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root487 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root487); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes446;
        nodes446 = node.contents();
        oldNodes.replaceWith(nodes446);
      }));
      callback(root486); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes445;
      nodes445 = node.contents();
      oldNodes.replaceWith(nodes445);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp485 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp411 = mobl.ref(result__);
    
    var nodes447 = $("<span>");
    root471.append(nodes447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp411, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes448 = $("<span>");
      root488.append(nodes448);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root489 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root489); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes448;
        nodes448 = node.contents();
        oldNodes.replaceWith(nodes448);
      }));
      callback(root488); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes447;
      nodes447 = node.contents();
      oldNodes.replaceWith(nodes447);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp484 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp412 = mobl.ref(result__);
    
    var nodes449 = $("<span>");
    root471.append(nodes449);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp412, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root490 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes450 = $("<span>");
      root490.append(nodes450);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root491 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root491); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes450;
        nodes450 = node.contents();
        oldNodes.replaceWith(nodes450);
      }));
      callback(root490); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes449;
      nodes449 = node.contents();
      oldNodes.replaceWith(nodes449);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp483 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp413 = mobl.ref(result__);
    
    var nodes451 = $("<span>");
    root471.append(nodes451);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp413, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root492 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes452 = $("<span>");
      root492.append(nodes452);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root493 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root493); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes452;
        nodes452 = node.contents();
        oldNodes.replaceWith(nodes452);
      }));
      callback(root492); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes451;
      nodes451 = node.contents();
      oldNodes.replaceWith(nodes451);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp482 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp414 = mobl.ref(result__);
    
    var nodes453 = $("<span>");
    root471.append(nodes453);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp414, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root494 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes454 = $("<span>");
      root494.append(nodes454);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root495 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root495); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes454;
        nodes454 = node.contents();
        oldNodes.replaceWith(nodes454);
      }));
      callback(root494); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes453;
      nodes453 = node.contents();
      oldNodes.replaceWith(nodes453);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp481 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp415 = mobl.ref(result__);
    
    var nodes455 = $("<span>");
    root471.append(nodes455);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp415, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root496 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes456 = $("<span>");
      root496.append(nodes456);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root497 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root497); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes456;
        nodes456 = node.contents();
        oldNodes.replaceWith(nodes456);
      }));
      callback(root496); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes455;
      nodes455 = node.contents();
      oldNodes.replaceWith(nodes455);
    }));
    callback(root471); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes430;
    nodes430 = node.contents();
    oldNodes.replaceWith(nodes430);
  }));
  callback(root470); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root498 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes457 = $("<span>");
  root498.append(nodes457);
  subs__.addSub((ui.group)(function(_, callback) {
    var root499 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp499 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp416 = mobl.ref(result__);
    
    var nodes458 = $("<span>");
    root499.append(nodes458);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp416, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root500 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes459 = $("<span>");
      root500.append(nodes459);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root501 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root501); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes459;
        nodes459 = node.contents();
        oldNodes.replaceWith(nodes459);
      }));
      callback(root500); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes458;
      nodes458 = node.contents();
      oldNodes.replaceWith(nodes458);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp498 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp417 = mobl.ref(result__);
    
    var nodes460 = $("<span>");
    root499.append(nodes460);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp417, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root502 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes461 = $("<span>");
      root502.append(nodes461);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root503 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root503); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes461;
        nodes461 = node.contents();
        oldNodes.replaceWith(nodes461);
      }));
      callback(root502); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes460;
      nodes460 = node.contents();
      oldNodes.replaceWith(nodes460);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp497 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp418 = mobl.ref(result__);
    
    var nodes462 = $("<span>");
    root499.append(nodes462);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp418, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root504 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes463 = $("<span>");
      root504.append(nodes463);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root505 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root505); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes463;
        nodes463 = node.contents();
        oldNodes.replaceWith(nodes463);
      }));
      callback(root504); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes462;
      nodes462 = node.contents();
      oldNodes.replaceWith(nodes462);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp496 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp419 = mobl.ref(result__);
    
    var nodes464 = $("<span>");
    root499.append(nodes464);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp419, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes465 = $("<span>");
      root506.append(nodes465);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root507 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root507); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes465;
        nodes465 = node.contents();
        oldNodes.replaceWith(nodes465);
      }));
      callback(root506); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes464;
      nodes464 = node.contents();
      oldNodes.replaceWith(nodes464);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp495 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp420 = mobl.ref(result__);
    
    var nodes466 = $("<span>");
    root499.append(nodes466);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp420, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes467 = $("<span>");
      root508.append(nodes467);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root509 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root509); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes467;
        nodes467 = node.contents();
        oldNodes.replaceWith(nodes467);
      }));
      callback(root508); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes466;
      nodes466 = node.contents();
      oldNodes.replaceWith(nodes466);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp494 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp421 = mobl.ref(result__);
    
    var nodes468 = $("<span>");
    root499.append(nodes468);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp421, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root510 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes469 = $("<span>");
      root510.append(nodes469);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root511 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root511); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes469;
        nodes469 = node.contents();
        oldNodes.replaceWith(nodes469);
      }));
      callback(root510); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes468;
      nodes468 = node.contents();
      oldNodes.replaceWith(nodes468);
    }));
    callback(root499); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes457;
    nodes457 = node.contents();
    oldNodes.replaceWith(nodes457);
  }));
  callback(root498); return subs__;
  
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
  var root512 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node17 = $("<div>");
  
  var ref21 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref21.get() !== null) {
    node17.attr('class', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      node17.attr('class', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  var val2 = onclick.get();
  if(val2 !== null) {
    subs__.addSub(mobl.domBind(node17, 'tap', val2));
  }
  
  
  var node18 = $("<div>");
  
  var ref20 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref20.get() !== null) {
    node18.attr('class', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node18.attr('class', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  
  var node19 = $("<div>");
  
  var ref18 = text;
  node19.text(""+ref18.get());
  var ignore2 = false;
  subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    node19.text(""+val);
  }));
  subs__.addSub(ref18.rebind());
  
  
  var ref19 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref19.get() !== null) {
    node19.attr('class', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      node19.attr('class', val);
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  node18.append(node19);
  node17.append(node18);
  var nodes470 = $("<span>");
  node17.append(nodes470);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl2();
  }));
  
  function renderControl2() {
    subs__.addSub((elements)(function(elements, callback) {
      var root513 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root513); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes470;
      nodes470 = node.contents();
      oldNodes.replaceWith(nodes470);
    }));
  }
  renderControl2();
  root512.append(node17);
  callback(root512); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp500 = result__;
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
  var root514 = $("<span>");
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
                       var result__ = mobl.$("#corePlotArea").html();
                       qa.get().plotHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp426 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp425 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp425.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp425.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp425.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes471 = $("<span>");
  root514.append(nodes471);
  subs__.addSub((mobl.block)(tmp425, mobl.ref(null), tmp426, mobl.ref(null), function(_, callback) {
    var root515 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp422 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp422.set("A" + number.get() + ". ");
    }));
    
    var nodes472 = $("<span>");
    root515.append(nodes472);
    subs__.addSub((mobl.label)(tmp422, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root516); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes472;
      nodes472 = node.contents();
      oldNodes.replaceWith(nodes472);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp424 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp424.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node20 = $("<span>");
    root515.append(node20);
    var condSubs4 = new mobl.CompSubscription();
    subs__.addSub(condSubs4);
    var oldValue4;
    var renderCond4 = function() {
      var value4 = tmp424.get();
      if(oldValue4 === value4) return;
      oldValue4 = value4;
      var subs__ = condSubs4;
      subs__.unsubscribe();
      node20.empty();
      if(value4) {
        
        var node21 = $("<span>");
        
        var ref22 = mobl.ref("answer-block-" + number.get());
        if(ref22.get() !== null) {
          node21.attr('id', ref22.get());
          subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
            node21.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node21.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref22.rebind());
        
        var result__ = plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp423 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp423.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp423.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes473 = $("<span>");
        node21.append(nodes473);
        subs__.addSub((mobl.html)(tmp423, function(_, callback) {
          var root517 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root517); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes473;
          nodes473 = node.contents();
          oldNodes.replaceWith(nodes473);
        }));
        node20.append(node21);
        
        
        
      } else {
        var nodes474 = $("<span>");
        node20.append(nodes474);
        subs__.addSub((plot.plot)(qa, mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root518 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root518); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes474;
          nodes474 = node.contents();
          oldNodes.replaceWith(nodes474);
        }));
        
        
      }
    };
    renderCond4();
    subs__.addSub(tmp424.addEventListener('change', function() {
      renderCond4();
    }));
    
    callback(root515); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes471;
    nodes471 = node.contents();
    oldNodes.replaceWith(nodes471);
  }));
  var nodes475 = $("<span>");
  root514.append(nodes475);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root519 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes476 = $("<span>");
    root519.append(nodes476);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root520 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root520); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes476;
      nodes476 = node.contents();
      oldNodes.replaceWith(nodes476);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp427 = mobl.ref(result__);
    
    var nodes477 = $("<span>");
    root519.append(nodes477);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp427, function(_, callback) {
      var root521 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root521); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes477;
      nodes477 = node.contents();
      oldNodes.replaceWith(nodes477);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp428 = mobl.ref(result__);
    
    var nodes478 = $("<span>");
    root519.append(nodes478);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp428, function(_, callback) {
      var root522 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root522); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes478;
      nodes478 = node.contents();
      oldNodes.replaceWith(nodes478);
    }));
    callback(root519); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes475;
    nodes475 = node.contents();
    oldNodes.replaceWith(nodes475);
  }));
  callback(root514); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp501 = result__;
    var result__ = tmp501;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp502 = result__;
        var result__ = tmp502;
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
  var root523 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp512 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp430 = mobl.ref(result__);
  
  var nodes479 = $("<span>");
  root523.append(nodes479);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp430, function(_, callback) {
    var root524 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp505 = result__;
                       var result__ = tmp505;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp506 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp429 = mobl.ref(result__);
    
    var nodes480 = $("<span>");
    root524.append(nodes480);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp429, function(_, callback) {
      var root525 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root525); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes480;
      nodes480 = node.contents();
      oldNodes.replaceWith(nodes480);
    }));
    mobl.sleep(100, function(result__) {
      var tmp503 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp504 = result__;
        callback(root524); return subs__;
      });
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes479;
    nodes479 = node.contents();
    oldNodes.replaceWith(nodes479);
  }));
  var nodes481 = $("<span>");
  root523.append(nodes481);
  subs__.addSub((ui.group)(function(_, callback) {
    var root526 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp509 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp433 = mobl.ref(result__);
    
    var nodes482 = $("<span>");
    root526.append(nodes482);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp433, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root527 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp431 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp431.set("Q" + number.get() + ". ");
      }));
      
      var nodes483 = $("<span>");
      root527.append(nodes483);
      subs__.addSub((mobl.html)(tmp431, function(_, callback) {
        var root528 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root528); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes483;
        nodes483 = node.contents();
        oldNodes.replaceWith(nodes483);
      }));
      
      var node22 = $("<span>");
      
      var ref23 = mobl.ref("question-block-" + number.get());
      if(ref23.get() !== null) {
        node22.attr('id', ref23.get());
        subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
          node22.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node22.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref23.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp432 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp432.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp432.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes484 = $("<span>");
      node22.append(nodes484);
      subs__.addSub((mobl.html)(tmp432, function(_, callback) {
        var root529 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root529); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes484;
        nodes484 = node.contents();
        oldNodes.replaceWith(nodes484);
      }));
      root527.append(node22);
      callback(root527); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes482;
      nodes482 = node.contents();
      oldNodes.replaceWith(nodes482);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp508 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp435 = mobl.ref(result__);
    
    var nodes485 = $("<span>");
    root526.append(nodes485);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp435, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes486 = $("<span>");
      root530.append(nodes486);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root531 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp507 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp434 = mobl.ref(result__);
        
        var nodes487 = $("<span>");
        root531.append(nodes487);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp434, function(_, callback) {
          var root532 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root532); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes487;
          nodes487 = node.contents();
          oldNodes.replaceWith(nodes487);
        }));
        callback(root531); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes486;
        nodes486 = node.contents();
        oldNodes.replaceWith(nodes486);
      }));
      
      var node23 = $("<span>");
      root530.append(node23);
      var condSubs5 = new mobl.CompSubscription();
      subs__.addSub(condSubs5);
      var oldValue5;
      var renderCond5 = function() {
        var value5 = qa.get().done;
        if(oldValue5 === value5) return;
        oldValue5 = value5;
        var subs__ = condSubs5;
        subs__.unsubscribe();
        node23.empty();
        if(value5) {
          var nodes488 = $("<span>");
          node23.append(nodes488);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root533 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root533); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes488;
            nodes488 = node.contents();
            oldNodes.replaceWith(nodes488);
          }));
          
          
        } else {
          
        }
      };
      renderCond5();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond5();
      }));
      
      callback(root530); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes485;
      nodes485 = node.contents();
      oldNodes.replaceWith(nodes485);
    }));
    callback(root526); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes481;
    nodes481 = node.contents();
    oldNodes.replaceWith(nodes481);
  }));
  mobl.sleep(100, function(result__) {
    var tmp510 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp511 = result__;
      callback(root523); return subs__;
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
  qas.list(function(coll15) {
    coll15 = coll15.reverse();
    function processOne15() {
      var item;
      item = coll15.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll15.length > 0) processOne15(); else rest15();
      
    }
    function rest15() {
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
    if(coll15.length > 0) processOne15(); else rest15();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll16) {
    coll16 = coll16.reverse();
    function processOne16() {
      var item;
      item = coll16.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll16.length > 0) processOne16(); else rest16();
      
    }
    function rest16() {
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
    if(coll16.length > 0) processOne16(); else rest16();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll17) {
    coll17 = coll17.reverse();
    function processOne17() {
      var item;
      item = coll17.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll17.length > 0) processOne17(); else rest17();
      
    }
    function rest17() {
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
    if(coll17.length > 0) processOne17(); else rest17();
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