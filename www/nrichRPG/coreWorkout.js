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
    var tmp3369 = result__;
    var result__ = tmp3369;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp3370 = result__;
      var result__ = tmp3370;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp3371 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll303) {
    coll303 = coll303.reverse();
    function processOne117() {
      var i;
      i = coll303.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp3372 = result__;
        
        if(coll303.length > 0) processOne117(); else rest117();
        
      });
    }
    function rest117() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll303.length > 0) processOne117(); else rest117();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll304) {
    coll304 = coll304.reverse();
    function processOne118() {
      var i;
      i = coll304.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp3373 = result__;
          
          if(coll304.length > 0) processOne118(); else rest118();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp3373 = result__;
            
            if(coll304.length > 0) processOne118(); else rest118();
            
          });
        }
      }
    }
    function rest118() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll304.length > 0) processOne118(); else rest118();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll305) {
    coll305 = coll305.reverse();
    function processOne119() {
      var i;
      i = coll305.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp3374 = result__;
        
        if(coll305.length > 0) processOne119(); else rest119();
        
      });
    }
    function rest119() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll305.length > 0) processOne119(); else rest119();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root3823 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3337 = $("<span>");
  root3823.append(nodes3337);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3824 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3382 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3283 = mobl.ref(result__);
    
    var nodes3338 = $("<span>");
    root3824.append(nodes3338);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3283, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3825 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3339 = $("<span>");
      root3825.append(nodes3339);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3826); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3339;
        nodes3339 = node.contents();
        oldNodes.replaceWith(nodes3339);
      }));
      callback(root3825); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3338;
      nodes3338 = node.contents();
      oldNodes.replaceWith(nodes3338);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3381 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3284 = mobl.ref(result__);
    
    var nodes3340 = $("<span>");
    root3824.append(nodes3340);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3284, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3827 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3341 = $("<span>");
      root3827.append(nodes3341);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3828 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3828); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3341;
        nodes3341 = node.contents();
        oldNodes.replaceWith(nodes3341);
      }));
      callback(root3827); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3340;
      nodes3340 = node.contents();
      oldNodes.replaceWith(nodes3340);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3380 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3285 = mobl.ref(result__);
    
    var nodes3342 = $("<span>");
    root3824.append(nodes3342);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3285, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3829 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3343 = $("<span>");
      root3829.append(nodes3343);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3830 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3830); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3343;
        nodes3343 = node.contents();
        oldNodes.replaceWith(nodes3343);
      }));
      callback(root3829); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3342;
      nodes3342 = node.contents();
      oldNodes.replaceWith(nodes3342);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3379 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3286 = mobl.ref(result__);
    
    var nodes3344 = $("<span>");
    root3824.append(nodes3344);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3286, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3345 = $("<span>");
      root3831.append(nodes3345);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3832 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3832); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3345;
        nodes3345 = node.contents();
        oldNodes.replaceWith(nodes3345);
      }));
      callback(root3831); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3344;
      nodes3344 = node.contents();
      oldNodes.replaceWith(nodes3344);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3378 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3287 = mobl.ref(result__);
    
    var nodes3346 = $("<span>");
    root3824.append(nodes3346);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3287, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3347 = $("<span>");
      root3833.append(nodes3347);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3834); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3347;
        nodes3347 = node.contents();
        oldNodes.replaceWith(nodes3347);
      }));
      callback(root3833); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3346;
      nodes3346 = node.contents();
      oldNodes.replaceWith(nodes3346);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3377 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3288 = mobl.ref(result__);
    
    var nodes3348 = $("<span>");
    root3824.append(nodes3348);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3288, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3349 = $("<span>");
      root3835.append(nodes3349);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3836 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3836); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3349;
        nodes3349 = node.contents();
        oldNodes.replaceWith(nodes3349);
      }));
      callback(root3835); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3348;
      nodes3348 = node.contents();
      oldNodes.replaceWith(nodes3348);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3376 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3289 = mobl.ref(result__);
    
    var nodes3350 = $("<span>");
    root3824.append(nodes3350);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3289, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3837 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3351 = $("<span>");
      root3837.append(nodes3351);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3838 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3838); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3351;
        nodes3351 = node.contents();
        oldNodes.replaceWith(nodes3351);
      }));
      callback(root3837); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3350;
      nodes3350 = node.contents();
      oldNodes.replaceWith(nodes3350);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3375 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3290 = mobl.ref(result__);
    
    var nodes3352 = $("<span>");
    root3824.append(nodes3352);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3290, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3839 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3353 = $("<span>");
      root3839.append(nodes3353);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3840 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3840); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3353;
        nodes3353 = node.contents();
        oldNodes.replaceWith(nodes3353);
      }));
      callback(root3839); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3352;
      nodes3352 = node.contents();
      oldNodes.replaceWith(nodes3352);
    }));
    callback(root3824); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3337;
    nodes3337 = node.contents();
    oldNodes.replaceWith(nodes3337);
  }));
  callback(root3823); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root3841 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes3354 = $("<span>");
  root3841.append(nodes3354);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3842 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3292 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3291 = mobl.ref(result__);
    
    var nodes3355 = $("<span>");
    root3842.append(nodes3355);
    subs__.addSub((ui.backButton)(tmp3291, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3292, function(_, callback) {
      var root3843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3843); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3355;
      nodes3355 = node.contents();
      oldNodes.replaceWith(nodes3355);
    }));
    callback(root3842); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3354;
    nodes3354 = node.contents();
    oldNodes.replaceWith(nodes3354);
  }));
  var nodes3356 = $("<span>");
  root3841.append(nodes3356);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3844 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp3390 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3293 = mobl.ref(result__);
    
    var nodes3357 = $("<span>");
    root3844.append(nodes3357);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3293, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3845 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3358 = $("<span>");
      root3845.append(nodes3358);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3846 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3846); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3358;
        nodes3358 = node.contents();
        oldNodes.replaceWith(nodes3358);
      }));
      callback(root3845); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3357;
      nodes3357 = node.contents();
      oldNodes.replaceWith(nodes3357);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp3389 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3294 = mobl.ref(result__);
    
    var nodes3359 = $("<span>");
    root3844.append(nodes3359);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3294, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3360 = $("<span>");
      root3847.append(nodes3360);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3848 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3848); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3360;
        nodes3360 = node.contents();
        oldNodes.replaceWith(nodes3360);
      }));
      callback(root3847); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3359;
      nodes3359 = node.contents();
      oldNodes.replaceWith(nodes3359);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp3388 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3295 = mobl.ref(result__);
    
    var nodes3361 = $("<span>");
    root3844.append(nodes3361);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3295, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3849 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3362 = $("<span>");
      root3849.append(nodes3362);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3850 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3850); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3362;
        nodes3362 = node.contents();
        oldNodes.replaceWith(nodes3362);
      }));
      callback(root3849); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3361;
      nodes3361 = node.contents();
      oldNodes.replaceWith(nodes3361);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp3387 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3296 = mobl.ref(result__);
    
    var nodes3363 = $("<span>");
    root3844.append(nodes3363);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3296, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3851 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3364 = $("<span>");
      root3851.append(nodes3364);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3852 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3852); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3364;
        nodes3364 = node.contents();
        oldNodes.replaceWith(nodes3364);
      }));
      callback(root3851); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3363;
      nodes3363 = node.contents();
      oldNodes.replaceWith(nodes3363);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp3386 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3297 = mobl.ref(result__);
    
    var nodes3365 = $("<span>");
    root3844.append(nodes3365);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3297, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3853 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3366 = $("<span>");
      root3853.append(nodes3366);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3854 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3854); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3366;
        nodes3366 = node.contents();
        oldNodes.replaceWith(nodes3366);
      }));
      callback(root3853); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3365;
      nodes3365 = node.contents();
      oldNodes.replaceWith(nodes3365);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp3385 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3298 = mobl.ref(result__);
    
    var nodes3367 = $("<span>");
    root3844.append(nodes3367);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3298, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3368 = $("<span>");
      root3855.append(nodes3368);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3856 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3856); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3368;
        nodes3368 = node.contents();
        oldNodes.replaceWith(nodes3368);
      }));
      callback(root3855); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3367;
      nodes3367 = node.contents();
      oldNodes.replaceWith(nodes3367);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp3384 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3299 = mobl.ref(result__);
    
    var nodes3369 = $("<span>");
    root3844.append(nodes3369);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3299, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3857 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3370 = $("<span>");
      root3857.append(nodes3370);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3858 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3858); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3370;
        nodes3370 = node.contents();
        oldNodes.replaceWith(nodes3370);
      }));
      callback(root3857); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3369;
      nodes3369 = node.contents();
      oldNodes.replaceWith(nodes3369);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp3383 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3300 = mobl.ref(result__);
    
    var nodes3371 = $("<span>");
    root3844.append(nodes3371);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3300, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3372 = $("<span>");
      root3859.append(nodes3372);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3860 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3860); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3372;
        nodes3372 = node.contents();
        oldNodes.replaceWith(nodes3372);
      }));
      callback(root3859); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3371;
      nodes3371 = node.contents();
      oldNodes.replaceWith(nodes3371);
    }));
    callback(root3844); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3356;
    nodes3356 = node.contents();
    oldNodes.replaceWith(nodes3356);
  }));
  callback(root3841); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root3861 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3373 = $("<span>");
  root3861.append(nodes3373);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3862 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3302 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3301 = mobl.ref(result__);
    
    var nodes3374 = $("<span>");
    root3862.append(nodes3374);
    subs__.addSub((ui.backButton)(tmp3301, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3302, function(_, callback) {
      var root3863 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3863); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3374;
      nodes3374 = node.contents();
      oldNodes.replaceWith(nodes3374);
    }));
    callback(root3862); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3373;
    nodes3373 = node.contents();
    oldNodes.replaceWith(nodes3373);
  }));
  var nodes3375 = $("<span>");
  root3861.append(nodes3375);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3864 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp3395 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3303 = mobl.ref(result__);
    
    var nodes3376 = $("<span>");
    root3864.append(nodes3376);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3303, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3865 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3377 = $("<span>");
      root3865.append(nodes3377);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3866 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3866); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3377;
        nodes3377 = node.contents();
        oldNodes.replaceWith(nodes3377);
      }));
      callback(root3865); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3376;
      nodes3376 = node.contents();
      oldNodes.replaceWith(nodes3376);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp3394 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3304 = mobl.ref(result__);
    
    var nodes3378 = $("<span>");
    root3864.append(nodes3378);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3304, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3867 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3379 = $("<span>");
      root3867.append(nodes3379);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3868 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3868); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3379;
        nodes3379 = node.contents();
        oldNodes.replaceWith(nodes3379);
      }));
      callback(root3867); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3378;
      nodes3378 = node.contents();
      oldNodes.replaceWith(nodes3378);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp3393 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3305 = mobl.ref(result__);
    
    var nodes3380 = $("<span>");
    root3864.append(nodes3380);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3305, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3381 = $("<span>");
      root3869.append(nodes3381);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3870); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3381;
        nodes3381 = node.contents();
        oldNodes.replaceWith(nodes3381);
      }));
      callback(root3869); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3380;
      nodes3380 = node.contents();
      oldNodes.replaceWith(nodes3380);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp3392 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3306 = mobl.ref(result__);
    
    var nodes3382 = $("<span>");
    root3864.append(nodes3382);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3306, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3383 = $("<span>");
      root3871.append(nodes3383);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3872 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3872); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3383;
        nodes3383 = node.contents();
        oldNodes.replaceWith(nodes3383);
      }));
      callback(root3871); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3382;
      nodes3382 = node.contents();
      oldNodes.replaceWith(nodes3382);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp3391 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3307 = mobl.ref(result__);
    
    var nodes3384 = $("<span>");
    root3864.append(nodes3384);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3307, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3873 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3385 = $("<span>");
      root3873.append(nodes3385);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3874 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3874); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3385;
        nodes3385 = node.contents();
        oldNodes.replaceWith(nodes3385);
      }));
      callback(root3873); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3384;
      nodes3384 = node.contents();
      oldNodes.replaceWith(nodes3384);
    }));
    callback(root3864); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3375;
    nodes3375 = node.contents();
    oldNodes.replaceWith(nodes3375);
  }));
  callback(root3861); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root3875 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3386 = $("<span>");
  root3875.append(nodes3386);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3876 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3309 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3308 = mobl.ref(result__);
    
    var nodes3387 = $("<span>");
    root3876.append(nodes3387);
    subs__.addSub((ui.backButton)(tmp3308, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3309, function(_, callback) {
      var root3877 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3877); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3387;
      nodes3387 = node.contents();
      oldNodes.replaceWith(nodes3387);
    }));
    callback(root3876); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3386;
    nodes3386 = node.contents();
    oldNodes.replaceWith(nodes3386);
  }));
  var nodes3388 = $("<span>");
  root3875.append(nodes3388);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3878 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp3398 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3310 = mobl.ref(result__);
    
    var nodes3389 = $("<span>");
    root3878.append(nodes3389);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3310, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3390 = $("<span>");
      root3879.append(nodes3390);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3880 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3880); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3390;
        nodes3390 = node.contents();
        oldNodes.replaceWith(nodes3390);
      }));
      callback(root3879); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3389;
      nodes3389 = node.contents();
      oldNodes.replaceWith(nodes3389);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp3397 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3311 = mobl.ref(result__);
    
    var nodes3391 = $("<span>");
    root3878.append(nodes3391);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3311, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3392 = $("<span>");
      root3881.append(nodes3392);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3392;
        nodes3392 = node.contents();
        oldNodes.replaceWith(nodes3392);
      }));
      callback(root3881); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3391;
      nodes3391 = node.contents();
      oldNodes.replaceWith(nodes3391);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp3396 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3312 = mobl.ref(result__);
    
    var nodes3393 = $("<span>");
    root3878.append(nodes3393);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3312, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3394 = $("<span>");
      root3883.append(nodes3394);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3394;
        nodes3394 = node.contents();
        oldNodes.replaceWith(nodes3394);
      }));
      callback(root3883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3393;
      nodes3393 = node.contents();
      oldNodes.replaceWith(nodes3393);
    }));
    callback(root3878); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3388;
    nodes3388 = node.contents();
    oldNodes.replaceWith(nodes3388);
  }));
  callback(root3875); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root3885 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3395 = $("<span>");
  root3885.append(nodes3395);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3886 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3314 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3313 = mobl.ref(result__);
    
    var nodes3396 = $("<span>");
    root3886.append(nodes3396);
    subs__.addSub((ui.backButton)(tmp3313, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3314, function(_, callback) {
      var root3887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3887); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3396;
      nodes3396 = node.contents();
      oldNodes.replaceWith(nodes3396);
    }));
    callback(root3886); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3395;
    nodes3395 = node.contents();
    oldNodes.replaceWith(nodes3395);
  }));
  var nodes3397 = $("<span>");
  root3885.append(nodes3397);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3888 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp3402 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3315 = mobl.ref(result__);
    
    var nodes3398 = $("<span>");
    root3888.append(nodes3398);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3315, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3399 = $("<span>");
      root3889.append(nodes3399);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3890 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3890); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3399;
        nodes3399 = node.contents();
        oldNodes.replaceWith(nodes3399);
      }));
      callback(root3889); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3398;
      nodes3398 = node.contents();
      oldNodes.replaceWith(nodes3398);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp3401 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3316 = mobl.ref(result__);
    
    var nodes3400 = $("<span>");
    root3888.append(nodes3400);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3316, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3891 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3401 = $("<span>");
      root3891.append(nodes3401);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3892 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3892); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3401;
        nodes3401 = node.contents();
        oldNodes.replaceWith(nodes3401);
      }));
      callback(root3891); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3400;
      nodes3400 = node.contents();
      oldNodes.replaceWith(nodes3400);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp3400 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3317 = mobl.ref(result__);
    
    var nodes3402 = $("<span>");
    root3888.append(nodes3402);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3317, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3893 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3403 = $("<span>");
      root3893.append(nodes3403);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3894 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3894); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3403;
        nodes3403 = node.contents();
        oldNodes.replaceWith(nodes3403);
      }));
      callback(root3893); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3402;
      nodes3402 = node.contents();
      oldNodes.replaceWith(nodes3402);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp3399 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3318 = mobl.ref(result__);
    
    var nodes3404 = $("<span>");
    root3888.append(nodes3404);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3318, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3895 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3405 = $("<span>");
      root3895.append(nodes3405);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3896 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3896); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3405;
        nodes3405 = node.contents();
        oldNodes.replaceWith(nodes3405);
      }));
      callback(root3895); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3404;
      nodes3404 = node.contents();
      oldNodes.replaceWith(nodes3404);
    }));
    callback(root3888); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3397;
    nodes3397 = node.contents();
    oldNodes.replaceWith(nodes3397);
  }));
  callback(root3885); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root3897 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3406 = $("<span>");
  root3897.append(nodes3406);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3898 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3320 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3319 = mobl.ref(result__);
    
    var nodes3407 = $("<span>");
    root3898.append(nodes3407);
    subs__.addSub((ui.backButton)(tmp3319, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3320, function(_, callback) {
      var root3899 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3899); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3407;
      nodes3407 = node.contents();
      oldNodes.replaceWith(nodes3407);
    }));
    callback(root3898); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3406;
    nodes3406 = node.contents();
    oldNodes.replaceWith(nodes3406);
  }));
  var nodes3408 = $("<span>");
  root3897.append(nodes3408);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3900 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp3404 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3321 = mobl.ref(result__);
    
    var nodes3409 = $("<span>");
    root3900.append(nodes3409);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3321, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3901 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3410 = $("<span>");
      root3901.append(nodes3410);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3902 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3902); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3410;
        nodes3410 = node.contents();
        oldNodes.replaceWith(nodes3410);
      }));
      callback(root3901); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3409;
      nodes3409 = node.contents();
      oldNodes.replaceWith(nodes3409);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp3403 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3322 = mobl.ref(result__);
    
    var nodes3411 = $("<span>");
    root3900.append(nodes3411);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3322, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3903 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3412 = $("<span>");
      root3903.append(nodes3412);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3904 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3904); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3412;
        nodes3412 = node.contents();
        oldNodes.replaceWith(nodes3412);
      }));
      callback(root3903); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3411;
      nodes3411 = node.contents();
      oldNodes.replaceWith(nodes3411);
    }));
    callback(root3900); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3408;
    nodes3408 = node.contents();
    oldNodes.replaceWith(nodes3408);
  }));
  callback(root3897); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root3905 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3413 = $("<span>");
  root3905.append(nodes3413);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3906 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3324 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3323 = mobl.ref(result__);
    
    var nodes3414 = $("<span>");
    root3906.append(nodes3414);
    subs__.addSub((ui.backButton)(tmp3323, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3324, function(_, callback) {
      var root3907 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3907); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3414;
      nodes3414 = node.contents();
      oldNodes.replaceWith(nodes3414);
    }));
    callback(root3906); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3413;
    nodes3413 = node.contents();
    oldNodes.replaceWith(nodes3413);
  }));
  var nodes3415 = $("<span>");
  root3905.append(nodes3415);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3908 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp3409 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3325 = mobl.ref(result__);
    
    var nodes3416 = $("<span>");
    root3908.append(nodes3416);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3325, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3909 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3417 = $("<span>");
      root3909.append(nodes3417);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3910 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3910); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3417;
        nodes3417 = node.contents();
        oldNodes.replaceWith(nodes3417);
      }));
      callback(root3909); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3416;
      nodes3416 = node.contents();
      oldNodes.replaceWith(nodes3416);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp3408 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3326 = mobl.ref(result__);
    
    var nodes3418 = $("<span>");
    root3908.append(nodes3418);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3326, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3911 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3419 = $("<span>");
      root3911.append(nodes3419);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3912 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3912); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3419;
        nodes3419 = node.contents();
        oldNodes.replaceWith(nodes3419);
      }));
      callback(root3911); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3418;
      nodes3418 = node.contents();
      oldNodes.replaceWith(nodes3418);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp3407 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3327 = mobl.ref(result__);
    
    var nodes3420 = $("<span>");
    root3908.append(nodes3420);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3327, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3913 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3421 = $("<span>");
      root3913.append(nodes3421);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3914 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3914); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3421;
        nodes3421 = node.contents();
        oldNodes.replaceWith(nodes3421);
      }));
      callback(root3913); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3420;
      nodes3420 = node.contents();
      oldNodes.replaceWith(nodes3420);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp3406 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3328 = mobl.ref(result__);
    
    var nodes3422 = $("<span>");
    root3908.append(nodes3422);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3328, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3915 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3423 = $("<span>");
      root3915.append(nodes3423);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3916 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3916); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3423;
        nodes3423 = node.contents();
        oldNodes.replaceWith(nodes3423);
      }));
      callback(root3915); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3422;
      nodes3422 = node.contents();
      oldNodes.replaceWith(nodes3422);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp3405 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3329 = mobl.ref(result__);
    
    var nodes3424 = $("<span>");
    root3908.append(nodes3424);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3329, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3917 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3425 = $("<span>");
      root3917.append(nodes3425);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3918 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3918); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3425;
        nodes3425 = node.contents();
        oldNodes.replaceWith(nodes3425);
      }));
      callback(root3917); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3424;
      nodes3424 = node.contents();
      oldNodes.replaceWith(nodes3424);
    }));
    callback(root3908); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3415;
    nodes3415 = node.contents();
    oldNodes.replaceWith(nodes3415);
  }));
  callback(root3905); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root3919 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3426 = $("<span>");
  root3919.append(nodes3426);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3920 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3331 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3330 = mobl.ref(result__);
    
    var nodes3427 = $("<span>");
    root3920.append(nodes3427);
    subs__.addSub((ui.backButton)(tmp3330, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3331, function(_, callback) {
      var root3921 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3921); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3427;
      nodes3427 = node.contents();
      oldNodes.replaceWith(nodes3427);
    }));
    callback(root3920); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3426;
    nodes3426 = node.contents();
    oldNodes.replaceWith(nodes3426);
  }));
  var nodes3428 = $("<span>");
  root3919.append(nodes3428);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3922 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp3412 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3332 = mobl.ref(result__);
    
    var nodes3429 = $("<span>");
    root3922.append(nodes3429);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3332, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3923 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3430 = $("<span>");
      root3923.append(nodes3430);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3924 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3924); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3430;
        nodes3430 = node.contents();
        oldNodes.replaceWith(nodes3430);
      }));
      callback(root3923); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3429;
      nodes3429 = node.contents();
      oldNodes.replaceWith(nodes3429);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp3411 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3333 = mobl.ref(result__);
    
    var nodes3431 = $("<span>");
    root3922.append(nodes3431);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3333, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3925 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3432 = $("<span>");
      root3925.append(nodes3432);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3926 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3926); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3432;
        nodes3432 = node.contents();
        oldNodes.replaceWith(nodes3432);
      }));
      callback(root3925); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3431;
      nodes3431 = node.contents();
      oldNodes.replaceWith(nodes3431);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp3410 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3334 = mobl.ref(result__);
    
    var nodes3433 = $("<span>");
    root3922.append(nodes3433);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3334, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3927 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3434 = $("<span>");
      root3927.append(nodes3434);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3928 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3928); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3434;
        nodes3434 = node.contents();
        oldNodes.replaceWith(nodes3434);
      }));
      callback(root3927); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3433;
      nodes3433 = node.contents();
      oldNodes.replaceWith(nodes3433);
    }));
    callback(root3922); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3428;
    nodes3428 = node.contents();
    oldNodes.replaceWith(nodes3428);
  }));
  callback(root3919); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root3929 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3435 = $("<span>");
  root3929.append(nodes3435);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3930 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3336 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3335 = mobl.ref(result__);
    
    var nodes3436 = $("<span>");
    root3930.append(nodes3436);
    subs__.addSub((ui.backButton)(tmp3335, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3336, function(_, callback) {
      var root3931 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3931); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3436;
      nodes3436 = node.contents();
      oldNodes.replaceWith(nodes3436);
    }));
    callback(root3930); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3435;
    nodes3435 = node.contents();
    oldNodes.replaceWith(nodes3435);
  }));
  var nodes3437 = $("<span>");
  root3929.append(nodes3437);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3932 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp3413 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3337 = mobl.ref(result__);
    
    var nodes3438 = $("<span>");
    root3932.append(nodes3438);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3337, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3933 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3439 = $("<span>");
      root3933.append(nodes3439);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3934 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3934); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3439;
        nodes3439 = node.contents();
        oldNodes.replaceWith(nodes3439);
      }));
      callback(root3933); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3438;
      nodes3438 = node.contents();
      oldNodes.replaceWith(nodes3438);
    }));
    callback(root3932); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3437;
    nodes3437 = node.contents();
    oldNodes.replaceWith(nodes3437);
  }));
  callback(root3929); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root3935 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3440 = $("<span>");
  root3935.append(nodes3440);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3936 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp3426 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3338 = mobl.ref(result__);
    
    var nodes3441 = $("<span>");
    root3936.append(nodes3441);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3338, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3937 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3442 = $("<span>");
      root3937.append(nodes3442);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3938 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3938); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3442;
        nodes3442 = node.contents();
        oldNodes.replaceWith(nodes3442);
      }));
      callback(root3937); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3441;
      nodes3441 = node.contents();
      oldNodes.replaceWith(nodes3441);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp3425 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3339 = mobl.ref(result__);
    
    var nodes3443 = $("<span>");
    root3936.append(nodes3443);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3339, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3939 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3444 = $("<span>");
      root3939.append(nodes3444);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3940 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3940); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3444;
        nodes3444 = node.contents();
        oldNodes.replaceWith(nodes3444);
      }));
      callback(root3939); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3443;
      nodes3443 = node.contents();
      oldNodes.replaceWith(nodes3443);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp3424 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3340 = mobl.ref(result__);
    
    var nodes3445 = $("<span>");
    root3936.append(nodes3445);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3340, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3941 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3446 = $("<span>");
      root3941.append(nodes3446);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3942 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3942); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3446;
        nodes3446 = node.contents();
        oldNodes.replaceWith(nodes3446);
      }));
      callback(root3941); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3445;
      nodes3445 = node.contents();
      oldNodes.replaceWith(nodes3445);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp3423 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3341 = mobl.ref(result__);
    
    var nodes3447 = $("<span>");
    root3936.append(nodes3447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3341, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3448 = $("<span>");
      root3943.append(nodes3448);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3944 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3944); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3448;
        nodes3448 = node.contents();
        oldNodes.replaceWith(nodes3448);
      }));
      callback(root3943); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3447;
      nodes3447 = node.contents();
      oldNodes.replaceWith(nodes3447);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp3422 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3342 = mobl.ref(result__);
    
    var nodes3449 = $("<span>");
    root3936.append(nodes3449);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3342, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3945 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3450 = $("<span>");
      root3945.append(nodes3450);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3946 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3946); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3450;
        nodes3450 = node.contents();
        oldNodes.replaceWith(nodes3450);
      }));
      callback(root3945); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3449;
      nodes3449 = node.contents();
      oldNodes.replaceWith(nodes3449);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp3421 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3343 = mobl.ref(result__);
    
    var nodes3451 = $("<span>");
    root3936.append(nodes3451);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3343, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3947 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3452 = $("<span>");
      root3947.append(nodes3452);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3948 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3948); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3452;
        nodes3452 = node.contents();
        oldNodes.replaceWith(nodes3452);
      }));
      callback(root3947); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3451;
      nodes3451 = node.contents();
      oldNodes.replaceWith(nodes3451);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp3420 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3344 = mobl.ref(result__);
    
    var nodes3453 = $("<span>");
    root3936.append(nodes3453);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3344, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3454 = $("<span>");
      root3949.append(nodes3454);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3950 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3950); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3454;
        nodes3454 = node.contents();
        oldNodes.replaceWith(nodes3454);
      }));
      callback(root3949); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3453;
      nodes3453 = node.contents();
      oldNodes.replaceWith(nodes3453);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp3419 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3345 = mobl.ref(result__);
    
    var nodes3455 = $("<span>");
    root3936.append(nodes3455);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3345, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3951 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3456 = $("<span>");
      root3951.append(nodes3456);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3952 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3952); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3456;
        nodes3456 = node.contents();
        oldNodes.replaceWith(nodes3456);
      }));
      callback(root3951); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3455;
      nodes3455 = node.contents();
      oldNodes.replaceWith(nodes3455);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp3418 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3346 = mobl.ref(result__);
    
    var nodes3457 = $("<span>");
    root3936.append(nodes3457);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3346, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3458 = $("<span>");
      root3953.append(nodes3458);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3954 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3954); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3458;
        nodes3458 = node.contents();
        oldNodes.replaceWith(nodes3458);
      }));
      callback(root3953); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3457;
      nodes3457 = node.contents();
      oldNodes.replaceWith(nodes3457);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp3417 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3347 = mobl.ref(result__);
    
    var nodes3459 = $("<span>");
    root3936.append(nodes3459);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3347, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3955 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3460 = $("<span>");
      root3955.append(nodes3460);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3956 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3956); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3460;
        nodes3460 = node.contents();
        oldNodes.replaceWith(nodes3460);
      }));
      callback(root3955); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3459;
      nodes3459 = node.contents();
      oldNodes.replaceWith(nodes3459);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp3416 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3348 = mobl.ref(result__);
    
    var nodes3461 = $("<span>");
    root3936.append(nodes3461);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3348, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3957 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3462 = $("<span>");
      root3957.append(nodes3462);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3958 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3958); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3462;
        nodes3462 = node.contents();
        oldNodes.replaceWith(nodes3462);
      }));
      callback(root3957); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3461;
      nodes3461 = node.contents();
      oldNodes.replaceWith(nodes3461);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp3415 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3349 = mobl.ref(result__);
    
    var nodes3463 = $("<span>");
    root3936.append(nodes3463);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3349, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3959 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3464 = $("<span>");
      root3959.append(nodes3464);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3960 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3960); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3464;
        nodes3464 = node.contents();
        oldNodes.replaceWith(nodes3464);
      }));
      callback(root3959); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3463;
      nodes3463 = node.contents();
      oldNodes.replaceWith(nodes3463);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp3414 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3350 = mobl.ref(result__);
    
    var nodes3465 = $("<span>");
    root3936.append(nodes3465);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3350, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3961 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3466 = $("<span>");
      root3961.append(nodes3466);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3962 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3962); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3466;
        nodes3466 = node.contents();
        oldNodes.replaceWith(nodes3466);
      }));
      callback(root3961); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3465;
      nodes3465 = node.contents();
      oldNodes.replaceWith(nodes3465);
    }));
    callback(root3936); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3440;
    nodes3440 = node.contents();
    oldNodes.replaceWith(nodes3440);
  }));
  callback(root3935); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root3963 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3467 = $("<span>");
  root3963.append(nodes3467);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3964 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp3432 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3351 = mobl.ref(result__);
    
    var nodes3468 = $("<span>");
    root3964.append(nodes3468);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3351, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3965 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3469 = $("<span>");
      root3965.append(nodes3469);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3966 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3966); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3469;
        nodes3469 = node.contents();
        oldNodes.replaceWith(nodes3469);
      }));
      callback(root3965); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3468;
      nodes3468 = node.contents();
      oldNodes.replaceWith(nodes3468);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp3431 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3352 = mobl.ref(result__);
    
    var nodes3470 = $("<span>");
    root3964.append(nodes3470);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3352, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3967 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3471 = $("<span>");
      root3967.append(nodes3471);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3968 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3968); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3471;
        nodes3471 = node.contents();
        oldNodes.replaceWith(nodes3471);
      }));
      callback(root3967); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3470;
      nodes3470 = node.contents();
      oldNodes.replaceWith(nodes3470);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp3430 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3353 = mobl.ref(result__);
    
    var nodes3472 = $("<span>");
    root3964.append(nodes3472);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3353, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3473 = $("<span>");
      root3969.append(nodes3473);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3970 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3970); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3473;
        nodes3473 = node.contents();
        oldNodes.replaceWith(nodes3473);
      }));
      callback(root3969); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3472;
      nodes3472 = node.contents();
      oldNodes.replaceWith(nodes3472);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp3429 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3354 = mobl.ref(result__);
    
    var nodes3474 = $("<span>");
    root3964.append(nodes3474);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3354, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3971 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3475 = $("<span>");
      root3971.append(nodes3475);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3972 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3972); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3475;
        nodes3475 = node.contents();
        oldNodes.replaceWith(nodes3475);
      }));
      callback(root3971); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3474;
      nodes3474 = node.contents();
      oldNodes.replaceWith(nodes3474);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp3428 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3355 = mobl.ref(result__);
    
    var nodes3476 = $("<span>");
    root3964.append(nodes3476);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3355, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3477 = $("<span>");
      root3973.append(nodes3477);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3974 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3974); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3477;
        nodes3477 = node.contents();
        oldNodes.replaceWith(nodes3477);
      }));
      callback(root3973); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3476;
      nodes3476 = node.contents();
      oldNodes.replaceWith(nodes3476);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp3427 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3356 = mobl.ref(result__);
    
    var nodes3478 = $("<span>");
    root3964.append(nodes3478);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3356, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3975 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3479 = $("<span>");
      root3975.append(nodes3479);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3976 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3976); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3479;
        nodes3479 = node.contents();
        oldNodes.replaceWith(nodes3479);
      }));
      callback(root3975); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3478;
      nodes3478 = node.contents();
      oldNodes.replaceWith(nodes3478);
    }));
    callback(root3964); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3467;
    nodes3467 = node.contents();
    oldNodes.replaceWith(nodes3467);
  }));
  callback(root3963); return subs__;
  
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
  var root3977 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node473 = $("<div>");
  
  var ref450 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref450.get() !== null) {
    node473.attr('class', ref450.get());
    subs__.addSub(ref450.addEventListener('change', function(_, ref, val) {
      node473.attr('class', val);
    }));
    
  }
  subs__.addSub(ref450.rebind());
  
  var val192 = onclick.get();
  if(val192 !== null) {
    subs__.addSub(mobl.domBind(node473, 'tap', val192));
  }
  
  
  var node474 = $("<div>");
  
  var ref449 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref449.get() !== null) {
    node474.attr('class', ref449.get());
    subs__.addSub(ref449.addEventListener('change', function(_, ref, val) {
      node474.attr('class', val);
    }));
    
  }
  subs__.addSub(ref449.rebind());
  
  
  var node475 = $("<div>");
  
  var ref447 = text;
  node475.text(""+ref447.get());
  var ignore79 = false;
  subs__.addSub(ref447.addEventListener('change', function(_, ref, val) {
    if(ignore79) return;
    node475.text(""+val);
  }));
  subs__.addSub(ref447.rebind());
  
  
  var ref448 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref448.get() !== null) {
    node475.attr('class', ref448.get());
    subs__.addSub(ref448.addEventListener('change', function(_, ref, val) {
      node475.attr('class', val);
    }));
    
  }
  subs__.addSub(ref448.rebind());
  
  node474.append(node475);
  node473.append(node474);
  var nodes3480 = $("<span>");
  node473.append(nodes3480);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl167();
  }));
  
  function renderControl167() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3978); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3480;
      nodes3480 = node.contents();
      oldNodes.replaceWith(nodes3480);
    }));
  }
  renderControl167();
  root3977.append(node473);
  callback(root3977); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp3433 = result__;
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
  var root3979 = $("<span>");
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
  var tmp3360 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp3359 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp3359.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp3359.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp3359.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes3481 = $("<span>");
  root3979.append(nodes3481);
  subs__.addSub((mobl.block)(tmp3359, mobl.ref(null), tmp3360, mobl.ref(null), function(_, callback) {
    var root3980 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp3357 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp3357.set("A" + number.get() + ". ");
    }));
    
    var nodes3482 = $("<span>");
    root3980.append(nodes3482);
    subs__.addSub((mobl.label)(tmp3357, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3981 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3981); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3482;
      nodes3482 = node.contents();
      oldNodes.replaceWith(nodes3482);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp3358 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp3358.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node476 = $("<span>");
    root3980.append(node476);
    var condSubs104 = new mobl.CompSubscription();
    subs__.addSub(condSubs104);
    var oldValue104;
    var renderCond104 = function() {
      var value228 = tmp3358.get();
      if(oldValue104 === value228) return;
      oldValue104 = value228;
      var subs__ = condSubs104;
      subs__.unsubscribe();
      node476.empty();
      if(value228) {
        
        var node477 = $("<span>");
        
        var ref451 = mobl.ref("answer-block-" + number.get());
        if(ref451.get() !== null) {
          node477.attr('id', ref451.get());
          subs__.addSub(ref451.addEventListener('change', function(_, ref, val) {
            node477.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node477.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref451.rebind());
        
        var nodes3483 = $("<span>");
        node477.append(nodes3483);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root3982 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3982); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3483;
          nodes3483 = node.contents();
          oldNodes.replaceWith(nodes3483);
        }));
        node476.append(node477);
        
        
        
      } else {
        var nodes3484 = $("<span>");
        node476.append(nodes3484);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root3983 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3983); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3484;
          nodes3484 = node.contents();
          oldNodes.replaceWith(nodes3484);
        }));
        
        
      }
    };
    renderCond104();
    subs__.addSub(tmp3358.addEventListener('change', function() {
      renderCond104();
    }));
    
    callback(root3980); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3481;
    nodes3481 = node.contents();
    oldNodes.replaceWith(nodes3481);
  }));
  var nodes3485 = $("<span>");
  root3979.append(nodes3485);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root3984 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp3434 = result__;
      var nodes3486 = $("<span>");
      root3984.append(nodes3486);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3985 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3985); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3486;
        nodes3486 = node.contents();
        oldNodes.replaceWith(nodes3486);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3361 = mobl.ref(result__);
      
      var nodes3487 = $("<span>");
      root3984.append(nodes3487);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3361, function(_, callback) {
        var root3986 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3986); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3487;
        nodes3487 = node.contents();
        oldNodes.replaceWith(nodes3487);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3362 = mobl.ref(result__);
      
      var nodes3488 = $("<span>");
      root3984.append(nodes3488);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3362, function(_, callback) {
        var root3987 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3987); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3488;
        nodes3488 = node.contents();
        oldNodes.replaceWith(nodes3488);
      }));
      callback(root3984); return subs__;
      
      
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes3485;
    nodes3485 = node.contents();
    oldNodes.replaceWith(nodes3485);
  }));
  callback(root3979); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp3435 = result__;
    var result__ = tmp3435;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp3436 = result__;
        var result__ = tmp3436;
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
  var root3988 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp3443 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp3364 = mobl.ref(result__);
  
  var nodes3489 = $("<span>");
  root3988.append(nodes3489);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp3364, function(_, callback) {
    var root3989 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp3437 = result__;
                       var result__ = tmp3437;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp3438 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp3363 = mobl.ref(result__);
    
    var nodes3490 = $("<span>");
    root3989.append(nodes3490);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp3363, function(_, callback) {
      var root3990 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3990); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3490;
      nodes3490 = node.contents();
      oldNodes.replaceWith(nodes3490);
    }));
    callback(root3989); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3489;
    nodes3489 = node.contents();
    oldNodes.replaceWith(nodes3489);
  }));
  var nodes3491 = $("<span>");
  root3988.append(nodes3491);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3991 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp3442 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3366 = mobl.ref(result__);
    
    var nodes3492 = $("<span>");
    root3991.append(nodes3492);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp3366, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root3992 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp3365 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp3365.set("Q" + number.get() + ". ");
      }));
      
      var nodes3493 = $("<span>");
      root3992.append(nodes3493);
      subs__.addSub((mobl.html)(tmp3365, function(_, callback) {
        var root3993 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3993); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3493;
        nodes3493 = node.contents();
        oldNodes.replaceWith(nodes3493);
      }));
      
      var node478 = $("<span>");
      
      var ref452 = mobl.ref("question-block-" + number.get());
      if(ref452.get() !== null) {
        node478.attr('id', ref452.get());
        subs__.addSub(ref452.addEventListener('change', function(_, ref, val) {
          node478.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node478.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref452.rebind());
      
      var nodes3494 = $("<span>");
      node478.append(nodes3494);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root3994 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3994); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3494;
        nodes3494 = node.contents();
        oldNodes.replaceWith(nodes3494);
      }));
      root3992.append(node478);
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp3439 = result__;
        callback(root3992); return subs__;
      });
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3492;
      nodes3492 = node.contents();
      oldNodes.replaceWith(nodes3492);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp3441 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3368 = mobl.ref(result__);
    
    var nodes3495 = $("<span>");
    root3991.append(nodes3495);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3368, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root3995 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3496 = $("<span>");
      root3995.append(nodes3496);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3996 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp3440 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp3367 = mobl.ref(result__);
        
        var nodes3497 = $("<span>");
        root3996.append(nodes3497);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp3367, function(_, callback) {
          var root3997 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3997); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3497;
          nodes3497 = node.contents();
          oldNodes.replaceWith(nodes3497);
        }));
        callback(root3996); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3496;
        nodes3496 = node.contents();
        oldNodes.replaceWith(nodes3496);
      }));
      
      var node479 = $("<span>");
      root3995.append(node479);
      var condSubs105 = new mobl.CompSubscription();
      subs__.addSub(condSubs105);
      var oldValue105;
      var renderCond105 = function() {
        var value229 = qa.get().done;
        if(oldValue105 === value229) return;
        oldValue105 = value229;
        var subs__ = condSubs105;
        subs__.unsubscribe();
        node479.empty();
        if(value229) {
          var nodes3498 = $("<span>");
          node479.append(nodes3498);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root3998 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root3998); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3498;
            nodes3498 = node.contents();
            oldNodes.replaceWith(nodes3498);
          }));
          
          
        } else {
          
        }
      };
      renderCond105();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond105();
      }));
      
      callback(root3995); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3495;
      nodes3495 = node.contents();
      oldNodes.replaceWith(nodes3495);
    }));
    callback(root3991); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3491;
    nodes3491 = node.contents();
    oldNodes.replaceWith(nodes3491);
  }));
  callback(root3988); return subs__;
  
  
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
  qas.list(function(coll306) {
    coll306 = coll306.reverse();
    function processOne120() {
      var item;
      item = coll306.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll306.length > 0) processOne120(); else rest120();
      
    }
    function rest120() {
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
    if(coll306.length > 0) processOne120(); else rest120();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll307) {
    coll307 = coll307.reverse();
    function processOne121() {
      var item;
      item = coll307.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll307.length > 0) processOne121(); else rest121();
      
    }
    function rest121() {
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
    if(coll307.length > 0) processOne121(); else rest121();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll308) {
    coll308 = coll308.reverse();
    function processOne122() {
      var item;
      item = coll308.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll308.length > 0) processOne122(); else rest122();
      
    }
    function rest122() {
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
    if(coll308.length > 0) processOne122(); else rest122();
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