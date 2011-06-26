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
    var tmp13272 = result__;
    var result__ = tmp13272;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp13273 = result__;
      var result__ = tmp13273;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp13274 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll840) {
    coll840 = coll840.reverse();
    function processOne474() {
      var i;
      i = coll840.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp13275 = result__;
        
        if(coll840.length > 0) processOne474(); else rest474();
        
      });
    }
    function rest474() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll840.length > 0) processOne474(); else rest474();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll841) {
    coll841 = coll841.reverse();
    function processOne475() {
      var i;
      i = coll841.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp13276 = result__;
          
          if(coll841.length > 0) processOne475(); else rest475();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp13276 = result__;
            
            if(coll841.length > 0) processOne475(); else rest475();
            
          });
        }
      }
    }
    function rest475() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll841.length > 0) processOne475(); else rest475();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll842) {
    coll842 = coll842.reverse();
    function processOne476() {
      var i;
      i = coll842.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp13277 = result__;
        
        if(coll842.length > 0) processOne476(); else rest476();
        
      });
    }
    function rest476() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll842.length > 0) processOne476(); else rest476();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root14615 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes13336 = $("<span>");
  root14615.append(nodes13336);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14616 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13285 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13180 = mobl.ref(result__);
    
    var nodes13337 = $("<span>");
    root14616.append(nodes13337);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13180, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14617 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13338 = $("<span>");
      root14617.append(nodes13338);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14618 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14618); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13338;
        nodes13338 = node.contents();
        oldNodes.replaceWith(nodes13338);
      }));
      callback(root14617); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13337;
      nodes13337 = node.contents();
      oldNodes.replaceWith(nodes13337);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13284 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13181 = mobl.ref(result__);
    
    var nodes13339 = $("<span>");
    root14616.append(nodes13339);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13181, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14619 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13340 = $("<span>");
      root14619.append(nodes13340);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14620 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14620); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13340;
        nodes13340 = node.contents();
        oldNodes.replaceWith(nodes13340);
      }));
      callback(root14619); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13339;
      nodes13339 = node.contents();
      oldNodes.replaceWith(nodes13339);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13283 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13182 = mobl.ref(result__);
    
    var nodes13341 = $("<span>");
    root14616.append(nodes13341);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13182, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14621 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13342 = $("<span>");
      root14621.append(nodes13342);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14622 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14622); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13342;
        nodes13342 = node.contents();
        oldNodes.replaceWith(nodes13342);
      }));
      callback(root14621); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13341;
      nodes13341 = node.contents();
      oldNodes.replaceWith(nodes13341);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13282 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13183 = mobl.ref(result__);
    
    var nodes13343 = $("<span>");
    root14616.append(nodes13343);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13183, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14623 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13344 = $("<span>");
      root14623.append(nodes13344);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14624 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14624); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13344;
        nodes13344 = node.contents();
        oldNodes.replaceWith(nodes13344);
      }));
      callback(root14623); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13343;
      nodes13343 = node.contents();
      oldNodes.replaceWith(nodes13343);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13281 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13184 = mobl.ref(result__);
    
    var nodes13345 = $("<span>");
    root14616.append(nodes13345);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13184, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14625 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13346 = $("<span>");
      root14625.append(nodes13346);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14626 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14626); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13346;
        nodes13346 = node.contents();
        oldNodes.replaceWith(nodes13346);
      }));
      callback(root14625); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13345;
      nodes13345 = node.contents();
      oldNodes.replaceWith(nodes13345);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13280 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13185 = mobl.ref(result__);
    
    var nodes13347 = $("<span>");
    root14616.append(nodes13347);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13185, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14627 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13348 = $("<span>");
      root14627.append(nodes13348);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14628 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14628); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13348;
        nodes13348 = node.contents();
        oldNodes.replaceWith(nodes13348);
      }));
      callback(root14627); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13347;
      nodes13347 = node.contents();
      oldNodes.replaceWith(nodes13347);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13279 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13186 = mobl.ref(result__);
    
    var nodes13349 = $("<span>");
    root14616.append(nodes13349);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13186, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14629 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13350 = $("<span>");
      root14629.append(nodes13350);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14630 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14630); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13350;
        nodes13350 = node.contents();
        oldNodes.replaceWith(nodes13350);
      }));
      callback(root14629); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13349;
      nodes13349 = node.contents();
      oldNodes.replaceWith(nodes13349);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13278 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13187 = mobl.ref(result__);
    
    var nodes13351 = $("<span>");
    root14616.append(nodes13351);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13187, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14631 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13352 = $("<span>");
      root14631.append(nodes13352);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14632 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14632); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13352;
        nodes13352 = node.contents();
        oldNodes.replaceWith(nodes13352);
      }));
      callback(root14631); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13351;
      nodes13351 = node.contents();
      oldNodes.replaceWith(nodes13351);
    }));
    callback(root14616); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13336;
    nodes13336 = node.contents();
    oldNodes.replaceWith(nodes13336);
  }));
  callback(root14615); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root14633 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes13353 = $("<span>");
  root14633.append(nodes13353);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14634 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13189 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13188 = mobl.ref(result__);
    
    var nodes13354 = $("<span>");
    root14634.append(nodes13354);
    subs__.addSub((ui.backButton)(tmp13188, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13189, function(_, callback) {
      var root14635 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14635); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13354;
      nodes13354 = node.contents();
      oldNodes.replaceWith(nodes13354);
    }));
    callback(root14634); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13353;
    nodes13353 = node.contents();
    oldNodes.replaceWith(nodes13353);
  }));
  var nodes13355 = $("<span>");
  root14633.append(nodes13355);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14636 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp13293 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13190 = mobl.ref(result__);
    
    var nodes13356 = $("<span>");
    root14636.append(nodes13356);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13190, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14637 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13357 = $("<span>");
      root14637.append(nodes13357);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14638 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14638); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13357;
        nodes13357 = node.contents();
        oldNodes.replaceWith(nodes13357);
      }));
      callback(root14637); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13356;
      nodes13356 = node.contents();
      oldNodes.replaceWith(nodes13356);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp13292 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13191 = mobl.ref(result__);
    
    var nodes13358 = $("<span>");
    root14636.append(nodes13358);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13191, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14639 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13359 = $("<span>");
      root14639.append(nodes13359);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14640 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14640); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13359;
        nodes13359 = node.contents();
        oldNodes.replaceWith(nodes13359);
      }));
      callback(root14639); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13358;
      nodes13358 = node.contents();
      oldNodes.replaceWith(nodes13358);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp13291 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13192 = mobl.ref(result__);
    
    var nodes13360 = $("<span>");
    root14636.append(nodes13360);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13192, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14641 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13361 = $("<span>");
      root14641.append(nodes13361);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14642 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14642); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13361;
        nodes13361 = node.contents();
        oldNodes.replaceWith(nodes13361);
      }));
      callback(root14641); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13360;
      nodes13360 = node.contents();
      oldNodes.replaceWith(nodes13360);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp13290 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13193 = mobl.ref(result__);
    
    var nodes13362 = $("<span>");
    root14636.append(nodes13362);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13193, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13363 = $("<span>");
      root14643.append(nodes13363);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14644 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14644); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13363;
        nodes13363 = node.contents();
        oldNodes.replaceWith(nodes13363);
      }));
      callback(root14643); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13362;
      nodes13362 = node.contents();
      oldNodes.replaceWith(nodes13362);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp13289 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13194 = mobl.ref(result__);
    
    var nodes13364 = $("<span>");
    root14636.append(nodes13364);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13194, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14645 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13365 = $("<span>");
      root14645.append(nodes13365);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14646 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14646); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13365;
        nodes13365 = node.contents();
        oldNodes.replaceWith(nodes13365);
      }));
      callback(root14645); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13364;
      nodes13364 = node.contents();
      oldNodes.replaceWith(nodes13364);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp13288 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13195 = mobl.ref(result__);
    
    var nodes13366 = $("<span>");
    root14636.append(nodes13366);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13195, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14647 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13367 = $("<span>");
      root14647.append(nodes13367);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14648 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14648); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13367;
        nodes13367 = node.contents();
        oldNodes.replaceWith(nodes13367);
      }));
      callback(root14647); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13366;
      nodes13366 = node.contents();
      oldNodes.replaceWith(nodes13366);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp13287 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13196 = mobl.ref(result__);
    
    var nodes13368 = $("<span>");
    root14636.append(nodes13368);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13196, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14649 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13369 = $("<span>");
      root14649.append(nodes13369);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14650 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14650); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13369;
        nodes13369 = node.contents();
        oldNodes.replaceWith(nodes13369);
      }));
      callback(root14649); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13368;
      nodes13368 = node.contents();
      oldNodes.replaceWith(nodes13368);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp13286 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13197 = mobl.ref(result__);
    
    var nodes13370 = $("<span>");
    root14636.append(nodes13370);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13197, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14651 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13371 = $("<span>");
      root14651.append(nodes13371);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14652 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14652); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13371;
        nodes13371 = node.contents();
        oldNodes.replaceWith(nodes13371);
      }));
      callback(root14651); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13370;
      nodes13370 = node.contents();
      oldNodes.replaceWith(nodes13370);
    }));
    callback(root14636); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13355;
    nodes13355 = node.contents();
    oldNodes.replaceWith(nodes13355);
  }));
  callback(root14633); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root14653 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13372 = $("<span>");
  root14653.append(nodes13372);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14654 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13199 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13198 = mobl.ref(result__);
    
    var nodes13373 = $("<span>");
    root14654.append(nodes13373);
    subs__.addSub((ui.backButton)(tmp13198, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13199, function(_, callback) {
      var root14655 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14655); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13373;
      nodes13373 = node.contents();
      oldNodes.replaceWith(nodes13373);
    }));
    callback(root14654); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13372;
    nodes13372 = node.contents();
    oldNodes.replaceWith(nodes13372);
  }));
  var nodes13374 = $("<span>");
  root14653.append(nodes13374);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14656 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp13298 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13200 = mobl.ref(result__);
    
    var nodes13375 = $("<span>");
    root14656.append(nodes13375);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13200, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13376 = $("<span>");
      root14657.append(nodes13376);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14658 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14658); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13376;
        nodes13376 = node.contents();
        oldNodes.replaceWith(nodes13376);
      }));
      callback(root14657); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13375;
      nodes13375 = node.contents();
      oldNodes.replaceWith(nodes13375);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp13297 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13201 = mobl.ref(result__);
    
    var nodes13377 = $("<span>");
    root14656.append(nodes13377);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13201, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14659 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13378 = $("<span>");
      root14659.append(nodes13378);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14660 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14660); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13378;
        nodes13378 = node.contents();
        oldNodes.replaceWith(nodes13378);
      }));
      callback(root14659); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13377;
      nodes13377 = node.contents();
      oldNodes.replaceWith(nodes13377);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp13296 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13202 = mobl.ref(result__);
    
    var nodes13379 = $("<span>");
    root14656.append(nodes13379);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13202, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14661 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13380 = $("<span>");
      root14661.append(nodes13380);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14662 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14662); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13380;
        nodes13380 = node.contents();
        oldNodes.replaceWith(nodes13380);
      }));
      callback(root14661); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13379;
      nodes13379 = node.contents();
      oldNodes.replaceWith(nodes13379);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp13295 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13203 = mobl.ref(result__);
    
    var nodes13381 = $("<span>");
    root14656.append(nodes13381);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13203, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14663 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13382 = $("<span>");
      root14663.append(nodes13382);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14664 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14664); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13382;
        nodes13382 = node.contents();
        oldNodes.replaceWith(nodes13382);
      }));
      callback(root14663); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13381;
      nodes13381 = node.contents();
      oldNodes.replaceWith(nodes13381);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp13294 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13204 = mobl.ref(result__);
    
    var nodes13383 = $("<span>");
    root14656.append(nodes13383);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13204, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14665 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13384 = $("<span>");
      root14665.append(nodes13384);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14666 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14666); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13384;
        nodes13384 = node.contents();
        oldNodes.replaceWith(nodes13384);
      }));
      callback(root14665); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13383;
      nodes13383 = node.contents();
      oldNodes.replaceWith(nodes13383);
    }));
    callback(root14656); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13374;
    nodes13374 = node.contents();
    oldNodes.replaceWith(nodes13374);
  }));
  callback(root14653); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root14667 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13385 = $("<span>");
  root14667.append(nodes13385);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14668 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13206 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13205 = mobl.ref(result__);
    
    var nodes13386 = $("<span>");
    root14668.append(nodes13386);
    subs__.addSub((ui.backButton)(tmp13205, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13206, function(_, callback) {
      var root14669 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14669); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13386;
      nodes13386 = node.contents();
      oldNodes.replaceWith(nodes13386);
    }));
    callback(root14668); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13385;
    nodes13385 = node.contents();
    oldNodes.replaceWith(nodes13385);
  }));
  var nodes13387 = $("<span>");
  root14667.append(nodes13387);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14670 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp13301 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13207 = mobl.ref(result__);
    
    var nodes13388 = $("<span>");
    root14670.append(nodes13388);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13207, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14671 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13389 = $("<span>");
      root14671.append(nodes13389);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14672 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14672); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13389;
        nodes13389 = node.contents();
        oldNodes.replaceWith(nodes13389);
      }));
      callback(root14671); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13388;
      nodes13388 = node.contents();
      oldNodes.replaceWith(nodes13388);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp13300 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13208 = mobl.ref(result__);
    
    var nodes13390 = $("<span>");
    root14670.append(nodes13390);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13208, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14673 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13391 = $("<span>");
      root14673.append(nodes13391);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14674); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13391;
        nodes13391 = node.contents();
        oldNodes.replaceWith(nodes13391);
      }));
      callback(root14673); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13390;
      nodes13390 = node.contents();
      oldNodes.replaceWith(nodes13390);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp13299 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13209 = mobl.ref(result__);
    
    var nodes13392 = $("<span>");
    root14670.append(nodes13392);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13209, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14675 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13393 = $("<span>");
      root14675.append(nodes13393);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14676 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14676); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13393;
        nodes13393 = node.contents();
        oldNodes.replaceWith(nodes13393);
      }));
      callback(root14675); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13392;
      nodes13392 = node.contents();
      oldNodes.replaceWith(nodes13392);
    }));
    callback(root14670); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13387;
    nodes13387 = node.contents();
    oldNodes.replaceWith(nodes13387);
  }));
  callback(root14667); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root14677 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13394 = $("<span>");
  root14677.append(nodes13394);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14678 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13211 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13210 = mobl.ref(result__);
    
    var nodes13395 = $("<span>");
    root14678.append(nodes13395);
    subs__.addSub((ui.backButton)(tmp13210, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13211, function(_, callback) {
      var root14679 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14679); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13395;
      nodes13395 = node.contents();
      oldNodes.replaceWith(nodes13395);
    }));
    callback(root14678); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13394;
    nodes13394 = node.contents();
    oldNodes.replaceWith(nodes13394);
  }));
  var nodes13396 = $("<span>");
  root14677.append(nodes13396);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14680 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp13305 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13212 = mobl.ref(result__);
    
    var nodes13397 = $("<span>");
    root14680.append(nodes13397);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13212, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14681 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13398 = $("<span>");
      root14681.append(nodes13398);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14682 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14682); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13398;
        nodes13398 = node.contents();
        oldNodes.replaceWith(nodes13398);
      }));
      callback(root14681); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13397;
      nodes13397 = node.contents();
      oldNodes.replaceWith(nodes13397);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp13304 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13213 = mobl.ref(result__);
    
    var nodes13399 = $("<span>");
    root14680.append(nodes13399);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13213, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14683 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13400 = $("<span>");
      root14683.append(nodes13400);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14684 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14684); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13400;
        nodes13400 = node.contents();
        oldNodes.replaceWith(nodes13400);
      }));
      callback(root14683); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13399;
      nodes13399 = node.contents();
      oldNodes.replaceWith(nodes13399);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp13303 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13214 = mobl.ref(result__);
    
    var nodes13401 = $("<span>");
    root14680.append(nodes13401);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13214, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14685 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13402 = $("<span>");
      root14685.append(nodes13402);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14686 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14686); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13402;
        nodes13402 = node.contents();
        oldNodes.replaceWith(nodes13402);
      }));
      callback(root14685); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13401;
      nodes13401 = node.contents();
      oldNodes.replaceWith(nodes13401);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp13302 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13215 = mobl.ref(result__);
    
    var nodes13403 = $("<span>");
    root14680.append(nodes13403);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13215, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14687 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13404 = $("<span>");
      root14687.append(nodes13404);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14688 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14688); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13404;
        nodes13404 = node.contents();
        oldNodes.replaceWith(nodes13404);
      }));
      callback(root14687); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13403;
      nodes13403 = node.contents();
      oldNodes.replaceWith(nodes13403);
    }));
    callback(root14680); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13396;
    nodes13396 = node.contents();
    oldNodes.replaceWith(nodes13396);
  }));
  callback(root14677); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root14689 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13405 = $("<span>");
  root14689.append(nodes13405);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14690 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13217 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13216 = mobl.ref(result__);
    
    var nodes13406 = $("<span>");
    root14690.append(nodes13406);
    subs__.addSub((ui.backButton)(tmp13216, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13217, function(_, callback) {
      var root14691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14691); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13406;
      nodes13406 = node.contents();
      oldNodes.replaceWith(nodes13406);
    }));
    callback(root14690); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13405;
    nodes13405 = node.contents();
    oldNodes.replaceWith(nodes13405);
  }));
  var nodes13407 = $("<span>");
  root14689.append(nodes13407);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14692 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp13307 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13218 = mobl.ref(result__);
    
    var nodes13408 = $("<span>");
    root14692.append(nodes13408);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13218, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14693 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13409 = $("<span>");
      root14693.append(nodes13409);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14694 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14694); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13409;
        nodes13409 = node.contents();
        oldNodes.replaceWith(nodes13409);
      }));
      callback(root14693); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13408;
      nodes13408 = node.contents();
      oldNodes.replaceWith(nodes13408);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp13306 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13219 = mobl.ref(result__);
    
    var nodes13410 = $("<span>");
    root14692.append(nodes13410);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13219, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14695 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13411 = $("<span>");
      root14695.append(nodes13411);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14696 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14696); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13411;
        nodes13411 = node.contents();
        oldNodes.replaceWith(nodes13411);
      }));
      callback(root14695); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13410;
      nodes13410 = node.contents();
      oldNodes.replaceWith(nodes13410);
    }));
    callback(root14692); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13407;
    nodes13407 = node.contents();
    oldNodes.replaceWith(nodes13407);
  }));
  callback(root14689); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root14697 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13412 = $("<span>");
  root14697.append(nodes13412);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14698 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13221 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13220 = mobl.ref(result__);
    
    var nodes13413 = $("<span>");
    root14698.append(nodes13413);
    subs__.addSub((ui.backButton)(tmp13220, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13221, function(_, callback) {
      var root14699 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14699); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13413;
      nodes13413 = node.contents();
      oldNodes.replaceWith(nodes13413);
    }));
    callback(root14698); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13412;
    nodes13412 = node.contents();
    oldNodes.replaceWith(nodes13412);
  }));
  var nodes13414 = $("<span>");
  root14697.append(nodes13414);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14700 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp13312 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13222 = mobl.ref(result__);
    
    var nodes13415 = $("<span>");
    root14700.append(nodes13415);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13222, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14701 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13416 = $("<span>");
      root14701.append(nodes13416);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14702 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14702); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13416;
        nodes13416 = node.contents();
        oldNodes.replaceWith(nodes13416);
      }));
      callback(root14701); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13415;
      nodes13415 = node.contents();
      oldNodes.replaceWith(nodes13415);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp13311 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13223 = mobl.ref(result__);
    
    var nodes13417 = $("<span>");
    root14700.append(nodes13417);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13223, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14703 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13418 = $("<span>");
      root14703.append(nodes13418);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14704 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14704); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13418;
        nodes13418 = node.contents();
        oldNodes.replaceWith(nodes13418);
      }));
      callback(root14703); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13417;
      nodes13417 = node.contents();
      oldNodes.replaceWith(nodes13417);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp13310 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13224 = mobl.ref(result__);
    
    var nodes13419 = $("<span>");
    root14700.append(nodes13419);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13224, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14705 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13420 = $("<span>");
      root14705.append(nodes13420);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14706 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14706); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13420;
        nodes13420 = node.contents();
        oldNodes.replaceWith(nodes13420);
      }));
      callback(root14705); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13419;
      nodes13419 = node.contents();
      oldNodes.replaceWith(nodes13419);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp13309 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13225 = mobl.ref(result__);
    
    var nodes13421 = $("<span>");
    root14700.append(nodes13421);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13225, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14707 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13422 = $("<span>");
      root14707.append(nodes13422);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14708 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14708); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13422;
        nodes13422 = node.contents();
        oldNodes.replaceWith(nodes13422);
      }));
      callback(root14707); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13421;
      nodes13421 = node.contents();
      oldNodes.replaceWith(nodes13421);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp13308 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13226 = mobl.ref(result__);
    
    var nodes13423 = $("<span>");
    root14700.append(nodes13423);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13226, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14709 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13424 = $("<span>");
      root14709.append(nodes13424);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14710 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14710); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13424;
        nodes13424 = node.contents();
        oldNodes.replaceWith(nodes13424);
      }));
      callback(root14709); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13423;
      nodes13423 = node.contents();
      oldNodes.replaceWith(nodes13423);
    }));
    callback(root14700); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13414;
    nodes13414 = node.contents();
    oldNodes.replaceWith(nodes13414);
  }));
  callback(root14697); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root14711 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13425 = $("<span>");
  root14711.append(nodes13425);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14712 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13228 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13227 = mobl.ref(result__);
    
    var nodes13426 = $("<span>");
    root14712.append(nodes13426);
    subs__.addSub((ui.backButton)(tmp13227, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13228, function(_, callback) {
      var root14713 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14713); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13426;
      nodes13426 = node.contents();
      oldNodes.replaceWith(nodes13426);
    }));
    callback(root14712); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13425;
    nodes13425 = node.contents();
    oldNodes.replaceWith(nodes13425);
  }));
  var nodes13427 = $("<span>");
  root14711.append(nodes13427);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14714 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp13315 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13229 = mobl.ref(result__);
    
    var nodes13428 = $("<span>");
    root14714.append(nodes13428);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13229, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14715 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13429 = $("<span>");
      root14715.append(nodes13429);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14716 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14716); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13429;
        nodes13429 = node.contents();
        oldNodes.replaceWith(nodes13429);
      }));
      callback(root14715); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13428;
      nodes13428 = node.contents();
      oldNodes.replaceWith(nodes13428);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp13314 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13230 = mobl.ref(result__);
    
    var nodes13430 = $("<span>");
    root14714.append(nodes13430);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13230, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14717 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13431 = $("<span>");
      root14717.append(nodes13431);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14718 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14718); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13431;
        nodes13431 = node.contents();
        oldNodes.replaceWith(nodes13431);
      }));
      callback(root14717); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13430;
      nodes13430 = node.contents();
      oldNodes.replaceWith(nodes13430);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp13313 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13231 = mobl.ref(result__);
    
    var nodes13432 = $("<span>");
    root14714.append(nodes13432);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13231, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14719 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13433 = $("<span>");
      root14719.append(nodes13433);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14720 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14720); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13433;
        nodes13433 = node.contents();
        oldNodes.replaceWith(nodes13433);
      }));
      callback(root14719); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13432;
      nodes13432 = node.contents();
      oldNodes.replaceWith(nodes13432);
    }));
    callback(root14714); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13427;
    nodes13427 = node.contents();
    oldNodes.replaceWith(nodes13427);
  }));
  callback(root14711); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root14721 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13434 = $("<span>");
  root14721.append(nodes13434);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14722 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13233 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13232 = mobl.ref(result__);
    
    var nodes13435 = $("<span>");
    root14722.append(nodes13435);
    subs__.addSub((ui.backButton)(tmp13232, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13233, function(_, callback) {
      var root14723 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14723); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13435;
      nodes13435 = node.contents();
      oldNodes.replaceWith(nodes13435);
    }));
    callback(root14722); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13434;
    nodes13434 = node.contents();
    oldNodes.replaceWith(nodes13434);
  }));
  var nodes13436 = $("<span>");
  root14721.append(nodes13436);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14724 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp13316 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13234 = mobl.ref(result__);
    
    var nodes13437 = $("<span>");
    root14724.append(nodes13437);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13234, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14725 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13438 = $("<span>");
      root14725.append(nodes13438);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14726 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14726); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13438;
        nodes13438 = node.contents();
        oldNodes.replaceWith(nodes13438);
      }));
      callback(root14725); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13437;
      nodes13437 = node.contents();
      oldNodes.replaceWith(nodes13437);
    }));
    callback(root14724); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13436;
    nodes13436 = node.contents();
    oldNodes.replaceWith(nodes13436);
  }));
  callback(root14721); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root14727 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes13439 = $("<span>");
  root14727.append(nodes13439);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14728 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp13329 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13235 = mobl.ref(result__);
    
    var nodes13440 = $("<span>");
    root14728.append(nodes13440);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13235, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13441 = $("<span>");
      root14729.append(nodes13441);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14730 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14730); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13441;
        nodes13441 = node.contents();
        oldNodes.replaceWith(nodes13441);
      }));
      callback(root14729); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13440;
      nodes13440 = node.contents();
      oldNodes.replaceWith(nodes13440);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp13328 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13236 = mobl.ref(result__);
    
    var nodes13442 = $("<span>");
    root14728.append(nodes13442);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13236, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14731 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13443 = $("<span>");
      root14731.append(nodes13443);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14732 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14732); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13443;
        nodes13443 = node.contents();
        oldNodes.replaceWith(nodes13443);
      }));
      callback(root14731); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13442;
      nodes13442 = node.contents();
      oldNodes.replaceWith(nodes13442);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp13327 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13237 = mobl.ref(result__);
    
    var nodes13444 = $("<span>");
    root14728.append(nodes13444);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13237, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14733 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13445 = $("<span>");
      root14733.append(nodes13445);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14734 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14734); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13445;
        nodes13445 = node.contents();
        oldNodes.replaceWith(nodes13445);
      }));
      callback(root14733); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13444;
      nodes13444 = node.contents();
      oldNodes.replaceWith(nodes13444);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp13326 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13238 = mobl.ref(result__);
    
    var nodes13446 = $("<span>");
    root14728.append(nodes13446);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13238, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14735 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13447 = $("<span>");
      root14735.append(nodes13447);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14736 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14736); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13447;
        nodes13447 = node.contents();
        oldNodes.replaceWith(nodes13447);
      }));
      callback(root14735); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13446;
      nodes13446 = node.contents();
      oldNodes.replaceWith(nodes13446);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp13325 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13239 = mobl.ref(result__);
    
    var nodes13448 = $("<span>");
    root14728.append(nodes13448);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13239, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14737 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13449 = $("<span>");
      root14737.append(nodes13449);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14738 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14738); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13449;
        nodes13449 = node.contents();
        oldNodes.replaceWith(nodes13449);
      }));
      callback(root14737); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13448;
      nodes13448 = node.contents();
      oldNodes.replaceWith(nodes13448);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp13324 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13240 = mobl.ref(result__);
    
    var nodes13450 = $("<span>");
    root14728.append(nodes13450);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13240, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14739 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13451 = $("<span>");
      root14739.append(nodes13451);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14740 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14740); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13451;
        nodes13451 = node.contents();
        oldNodes.replaceWith(nodes13451);
      }));
      callback(root14739); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13450;
      nodes13450 = node.contents();
      oldNodes.replaceWith(nodes13450);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp13323 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13241 = mobl.ref(result__);
    
    var nodes13452 = $("<span>");
    root14728.append(nodes13452);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13241, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14741 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13453 = $("<span>");
      root14741.append(nodes13453);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14742 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14742); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13453;
        nodes13453 = node.contents();
        oldNodes.replaceWith(nodes13453);
      }));
      callback(root14741); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13452;
      nodes13452 = node.contents();
      oldNodes.replaceWith(nodes13452);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp13322 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13242 = mobl.ref(result__);
    
    var nodes13454 = $("<span>");
    root14728.append(nodes13454);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13242, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14743 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13455 = $("<span>");
      root14743.append(nodes13455);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14744 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14744); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13455;
        nodes13455 = node.contents();
        oldNodes.replaceWith(nodes13455);
      }));
      callback(root14743); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13454;
      nodes13454 = node.contents();
      oldNodes.replaceWith(nodes13454);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp13321 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13243 = mobl.ref(result__);
    
    var nodes13456 = $("<span>");
    root14728.append(nodes13456);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13243, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14745 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13457 = $("<span>");
      root14745.append(nodes13457);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14746 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14746); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13457;
        nodes13457 = node.contents();
        oldNodes.replaceWith(nodes13457);
      }));
      callback(root14745); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13456;
      nodes13456 = node.contents();
      oldNodes.replaceWith(nodes13456);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp13320 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13244 = mobl.ref(result__);
    
    var nodes13458 = $("<span>");
    root14728.append(nodes13458);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13244, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14747 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13459 = $("<span>");
      root14747.append(nodes13459);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14748 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14748); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13459;
        nodes13459 = node.contents();
        oldNodes.replaceWith(nodes13459);
      }));
      callback(root14747); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13458;
      nodes13458 = node.contents();
      oldNodes.replaceWith(nodes13458);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp13319 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13245 = mobl.ref(result__);
    
    var nodes13460 = $("<span>");
    root14728.append(nodes13460);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13245, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14749 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13461 = $("<span>");
      root14749.append(nodes13461);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14750 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14750); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13461;
        nodes13461 = node.contents();
        oldNodes.replaceWith(nodes13461);
      }));
      callback(root14749); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13460;
      nodes13460 = node.contents();
      oldNodes.replaceWith(nodes13460);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp13318 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13246 = mobl.ref(result__);
    
    var nodes13462 = $("<span>");
    root14728.append(nodes13462);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13246, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14751 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13463 = $("<span>");
      root14751.append(nodes13463);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14752 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14752); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13463;
        nodes13463 = node.contents();
        oldNodes.replaceWith(nodes13463);
      }));
      callback(root14751); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13462;
      nodes13462 = node.contents();
      oldNodes.replaceWith(nodes13462);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp13317 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13247 = mobl.ref(result__);
    
    var nodes13464 = $("<span>");
    root14728.append(nodes13464);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13247, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14753 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13465 = $("<span>");
      root14753.append(nodes13465);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14754 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14754); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13465;
        nodes13465 = node.contents();
        oldNodes.replaceWith(nodes13465);
      }));
      callback(root14753); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13464;
      nodes13464 = node.contents();
      oldNodes.replaceWith(nodes13464);
    }));
    callback(root14728); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13439;
    nodes13439 = node.contents();
    oldNodes.replaceWith(nodes13439);
  }));
  callback(root14727); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root14755 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes13466 = $("<span>");
  root14755.append(nodes13466);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14756 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp13335 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13248 = mobl.ref(result__);
    
    var nodes13467 = $("<span>");
    root14756.append(nodes13467);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13248, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14757 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13468 = $("<span>");
      root14757.append(nodes13468);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14758 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14758); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13468;
        nodes13468 = node.contents();
        oldNodes.replaceWith(nodes13468);
      }));
      callback(root14757); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13467;
      nodes13467 = node.contents();
      oldNodes.replaceWith(nodes13467);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp13334 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13249 = mobl.ref(result__);
    
    var nodes13469 = $("<span>");
    root14756.append(nodes13469);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13249, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14759 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13470 = $("<span>");
      root14759.append(nodes13470);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14760 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14760); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13470;
        nodes13470 = node.contents();
        oldNodes.replaceWith(nodes13470);
      }));
      callback(root14759); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13469;
      nodes13469 = node.contents();
      oldNodes.replaceWith(nodes13469);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp13333 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13250 = mobl.ref(result__);
    
    var nodes13471 = $("<span>");
    root14756.append(nodes13471);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13250, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14761 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13472 = $("<span>");
      root14761.append(nodes13472);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14762 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14762); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13472;
        nodes13472 = node.contents();
        oldNodes.replaceWith(nodes13472);
      }));
      callback(root14761); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13471;
      nodes13471 = node.contents();
      oldNodes.replaceWith(nodes13471);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp13332 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13251 = mobl.ref(result__);
    
    var nodes13473 = $("<span>");
    root14756.append(nodes13473);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13251, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14763 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13474 = $("<span>");
      root14763.append(nodes13474);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14764 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14764); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13474;
        nodes13474 = node.contents();
        oldNodes.replaceWith(nodes13474);
      }));
      callback(root14763); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13473;
      nodes13473 = node.contents();
      oldNodes.replaceWith(nodes13473);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp13331 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13252 = mobl.ref(result__);
    
    var nodes13475 = $("<span>");
    root14756.append(nodes13475);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13252, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14765 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13476 = $("<span>");
      root14765.append(nodes13476);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14766 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14766); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13476;
        nodes13476 = node.contents();
        oldNodes.replaceWith(nodes13476);
      }));
      callback(root14765); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13475;
      nodes13475 = node.contents();
      oldNodes.replaceWith(nodes13475);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp13330 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13253 = mobl.ref(result__);
    
    var nodes13477 = $("<span>");
    root14756.append(nodes13477);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13253, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14767 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13478 = $("<span>");
      root14767.append(nodes13478);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14768 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14768); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13478;
        nodes13478 = node.contents();
        oldNodes.replaceWith(nodes13478);
      }));
      callback(root14767); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13477;
      nodes13477 = node.contents();
      oldNodes.replaceWith(nodes13477);
    }));
    callback(root14756); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13466;
    nodes13466 = node.contents();
    oldNodes.replaceWith(nodes13466);
  }));
  callback(root14755); return subs__;
  
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
  var root14769 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1009 = $("<div>");
  
  var ref725 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref725.get() !== null) {
    node1009.attr('class', ref725.get());
    subs__.addSub(ref725.addEventListener('change', function(_, ref, val) {
      node1009.attr('class', val);
    }));
    
  }
  subs__.addSub(ref725.rebind());
  
  var val270 = onclick.get();
  if(val270 !== null) {
    subs__.addSub(mobl.domBind(node1009, 'tap', val270));
  }
  
  
  var node1010 = $("<div>");
  
  var ref724 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref724.get() !== null) {
    node1010.attr('class', ref724.get());
    subs__.addSub(ref724.addEventListener('change', function(_, ref, val) {
      node1010.attr('class', val);
    }));
    
  }
  subs__.addSub(ref724.rebind());
  
  
  var node1011 = $("<div>");
  
  var ref722 = text;
  node1011.text(""+ref722.get());
  var ignore155 = false;
  subs__.addSub(ref722.addEventListener('change', function(_, ref, val) {
    if(ignore155) return;
    node1011.text(""+val);
  }));
  subs__.addSub(ref722.rebind());
  
  
  var ref723 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref723.get() !== null) {
    node1011.attr('class', ref723.get());
    subs__.addSub(ref723.addEventListener('change', function(_, ref, val) {
      node1011.attr('class', val);
    }));
    
  }
  subs__.addSub(ref723.rebind());
  
  node1010.append(node1011);
  node1009.append(node1010);
  var nodes13479 = $("<span>");
  node1009.append(nodes13479);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl210();
  }));
  
  function renderControl210() {
    subs__.addSub((elements)(function(elements, callback) {
      var root14770 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14770); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13479;
      nodes13479 = node.contents();
      oldNodes.replaceWith(nodes13479);
    }));
  }
  renderControl210();
  root14769.append(node1009);
  callback(root14769); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp13336 = result__;
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
  var root14771 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1012 = $("<span>");
  root14771.append(node1012);
  var condSubs375 = new mobl.CompSubscription();
  subs__.addSub(condSubs375);
  var oldValue375;
  var renderCond375 = function() {
    var value619 = qa.get().correct;
    if(oldValue375 === value619) return;
    oldValue375 = value619;
    var subs__ = condSubs375;
    subs__.unsubscribe();
    node1012.empty();
    if(value619) {
      var nodes13480 = $("<span>");
      node1012.append(nodes13480);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14772 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp13257 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp13257.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1013 = $("<span>");
        root14772.append(node1013);
        var condSubs376 = new mobl.CompSubscription();
        subs__.addSub(condSubs376);
        var oldValue376;
        var renderCond376 = function() {
          var value620 = tmp13257.get();
          if(oldValue376 === value620) return;
          oldValue376 = value620;
          var subs__ = condSubs376;
          subs__.unsubscribe();
          node1013.empty();
          if(value620) {
            var result__ = "A" + number.get() + ". ";
            var tmp13254 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp13254.set("A" + number.get() + ". ");
            }));
            
            var nodes13481 = $("<span>");
            node1013.append(nodes13481);
            subs__.addSub((mobl.label)(tmp13254, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14773 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14773); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13481;
              nodes13481 = node.contents();
              oldNodes.replaceWith(nodes13481);
            }));
            
            var node1014 = $("<span>");
            
            var ref726 = mobl.ref("A" + number.get());
            if(ref726.get() !== null) {
              node1014.attr('id', ref726.get());
              subs__.addSub(ref726.addEventListener('change', function(_, ref, val) {
                node1014.attr('id', val);
              }));
              subs__.addSub(number.addEventListener('change', function() {
                node1014.attr('id', "A" + number.get());
              }));
              
            }
            subs__.addSub(ref726.rebind());
            
            var nodes13482 = $("<span>");
            node1014.append(nodes13482);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root14774 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14774); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13482;
              nodes13482 = node.contents();
              oldNodes.replaceWith(nodes13482);
            }));
            node1013.append(node1014);
            
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp13255 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp13255.set("A" + number.get() + ". ");
            }));
            
            var nodes13483 = $("<span>");
            node1013.append(nodes13483);
            subs__.addSub((mobl.label)(tmp13255, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14775 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14775); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13483;
              nodes13483 = node.contents();
              oldNodes.replaceWith(nodes13483);
            }));
            var nodes13484 = $("<span>");
            node1013.append(nodes13484);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root14776 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14776); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13484;
              nodes13484 = node.contents();
              oldNodes.replaceWith(nodes13484);
            }));
            
            var node1015 = $("<span>");
            node1015.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp13338 = result__;
              var tmp13256 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp13337 = result__;
                  var result__ = tmp13337;
                  tmp13256.set(result__);
                  
                });
              }));
              
              var nodes13485 = $("<span>");
              node1015.append(nodes13485);
              subs__.addSub((mobl.html)(tmp13256, function(_, callback) {
                var root14777 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root14777); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes13485;
                nodes13485 = node.contents();
                oldNodes.replaceWith(nodes13485);
              }));
              node1013.append(node1015);
              
              
            });
            
            
            
          }
        };
        renderCond376();
        subs__.addSub(tmp13257.addEventListener('change', function() {
          renderCond376();
        }));
        
        callback(root14772); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13480;
        nodes13480 = node.contents();
        oldNodes.replaceWith(nodes13480);
      }));
      
      
    } else {
      var nodes13486 = $("<span>");
      node1012.append(nodes13486);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14778 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp13261 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp13261.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1016 = $("<span>");
        root14778.append(node1016);
        var condSubs377 = new mobl.CompSubscription();
        subs__.addSub(condSubs377);
        var oldValue377;
        var renderCond377 = function() {
          var value621 = tmp13261.get();
          if(oldValue377 === value621) return;
          oldValue377 = value621;
          var subs__ = condSubs377;
          subs__.unsubscribe();
          node1016.empty();
          if(value621) {
            var result__ = "A" + number.get() + ". ";
            var tmp13258 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp13258.set("A" + number.get() + ". ");
            }));
            
            var nodes13487 = $("<span>");
            node1016.append(nodes13487);
            subs__.addSub((mobl.label)(tmp13258, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14779 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14779); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13487;
              nodes13487 = node.contents();
              oldNodes.replaceWith(nodes13487);
            }));
            
            var node1017 = $("<span>");
            
            var ref727 = mobl.ref("A" + number.get());
            if(ref727.get() !== null) {
              node1017.attr('id', ref727.get());
              subs__.addSub(ref727.addEventListener('change', function(_, ref, val) {
                node1017.attr('id', val);
              }));
              subs__.addSub(number.addEventListener('change', function() {
                node1017.attr('id', "A" + number.get());
              }));
              
            }
            subs__.addSub(ref727.rebind());
            
            var nodes13488 = $("<span>");
            node1017.append(nodes13488);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root14780 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14780); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13488;
              nodes13488 = node.contents();
              oldNodes.replaceWith(nodes13488);
            }));
            node1016.append(node1017);
            
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp13259 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp13259.set("A" + number.get() + ". ");
            }));
            
            var nodes13489 = $("<span>");
            node1016.append(nodes13489);
            subs__.addSub((mobl.label)(tmp13259, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14781 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14781); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13489;
              nodes13489 = node.contents();
              oldNodes.replaceWith(nodes13489);
            }));
            var nodes13490 = $("<span>");
            node1016.append(nodes13490);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root14782 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14782); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13490;
              nodes13490 = node.contents();
              oldNodes.replaceWith(nodes13490);
            }));
            
            var node1018 = $("<span>");
            node1018.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp13340 = result__;
              var tmp13260 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp13339 = result__;
                  var result__ = tmp13339;
                  tmp13260.set(result__);
                  
                });
              }));
              
              var nodes13491 = $("<span>");
              node1018.append(nodes13491);
              subs__.addSub((mobl.html)(tmp13260, function(_, callback) {
                var root14783 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root14783); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes13491;
                nodes13491 = node.contents();
                oldNodes.replaceWith(nodes13491);
              }));
              node1016.append(node1018);
              
              
            });
            
            
            
          }
        };
        renderCond377();
        subs__.addSub(tmp13261.addEventListener('change', function() {
          renderCond377();
        }));
        
        callback(root14778); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13486;
        nodes13486 = node.contents();
        oldNodes.replaceWith(nodes13486);
      }));
      
      
    }
  };
  renderCond375();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond375();
  }));
  
  var nodes13492 = $("<span>");
  root14771.append(nodes13492);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root14784 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1019 = $("<span>");
    node1019.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp13342 = result__;
      var tmp13262 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp13341 = result__;
          var result__ = tmp13341;
          tmp13262.set(result__);
          
        });
      }));
      
      var nodes13496 = $("<span>");
      node1019.append(nodes13496);
      subs__.addSub((mobl.html)(tmp13262, function(_, callback) {
        var root14788 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14788); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13496;
        nodes13496 = node.contents();
        oldNodes.replaceWith(nodes13496);
      }));
      root14784.append(node1019);
      var nodes13493 = $("<span>");
      root14784.append(nodes13493);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14785 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14785); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13493;
        nodes13493 = node.contents();
        oldNodes.replaceWith(nodes13493);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp13263 = mobl.ref(result__);
      
      var nodes13494 = $("<span>");
      root14784.append(nodes13494);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp13263, function(_, callback) {
        var root14786 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14786); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13494;
        nodes13494 = node.contents();
        oldNodes.replaceWith(nodes13494);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp13264 = mobl.ref(result__);
      
      var nodes13495 = $("<span>");
      root14784.append(nodes13495);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp13264, function(_, callback) {
        var root14787 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14787); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13495;
        nodes13495 = node.contents();
        oldNodes.replaceWith(nodes13495);
      }));
      callback(root14784); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13492;
    nodes13492 = node.contents();
    oldNodes.replaceWith(nodes13492);
  }));
  callback(root14771); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp13343 = result__;
    var result__ = tmp13343;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp13344 = result__;
        var result__ = tmp13344;
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
  var root14789 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp13352 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp13266 = mobl.ref(result__);
  
  var nodes13497 = $("<span>");
  root14789.append(nodes13497);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp13266, function(_, callback) {
    var root14790 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp13345 = result__;
                       var result__ = tmp13345;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp13346 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp13265 = mobl.ref(result__);
    
    var nodes13498 = $("<span>");
    root14790.append(nodes13498);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp13265, function(_, callback) {
      var root14791 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14791); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13498;
      nodes13498 = node.contents();
      oldNodes.replaceWith(nodes13498);
    }));
    callback(root14790); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13497;
    nodes13497 = node.contents();
    oldNodes.replaceWith(nodes13497);
  }));
  var nodes13499 = $("<span>");
  root14789.append(nodes13499);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14792 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp13351 = result__;
                       var result__ = mobl.$("#Q" + number.get()).html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13269 = mobl.ref(result__);
    
    var nodes13500 = $("<span>");
    root14792.append(nodes13500);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp13269, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root14793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp13267 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp13267.set("Q" + number.get() + ". ");
      }));
      
      var nodes13501 = $("<span>");
      root14793.append(nodes13501);
      subs__.addSub((mobl.html)(tmp13267, function(_, callback) {
        var root14794 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14794); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13501;
        nodes13501 = node.contents();
        oldNodes.replaceWith(nodes13501);
      }));
      
      var node1020 = $("<span>");
      
      var ref728 = mobl.ref("Q" + number.get());
      if(ref728.get() !== null) {
        node1020.attr('id', ref728.get());
        subs__.addSub(ref728.addEventListener('change', function(_, ref, val) {
          node1020.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1020.attr('id', "Q" + number.get());
        }));
        
      }
      subs__.addSub(ref728.rebind());
      
      var nodes13503 = $("<span>");
      node1020.append(nodes13503);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root14796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14796); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13503;
        nodes13503 = node.contents();
        oldNodes.replaceWith(nodes13503);
      }));
      root14793.append(node1020);
      
      var node1021 = $("<span>");
      node1021.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp13348 = result__;
        var tmp13268 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp13347 = result__;
            var result__ = tmp13347;
            tmp13268.set(result__);
            
          });
        }));
        
        var nodes13502 = $("<span>");
        node1021.append(nodes13502);
        subs__.addSub((mobl.html)(tmp13268, function(_, callback) {
          var root14795 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14795); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes13502;
          nodes13502 = node.contents();
          oldNodes.replaceWith(nodes13502);
        }));
        root14793.append(node1021);
        callback(root14793); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13500;
      nodes13500 = node.contents();
      oldNodes.replaceWith(nodes13500);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp13350 = result__;
                       var result__ = mobl.$("#A" + number.get()).html();
                       qa.get().answer = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13271 = mobl.ref(result__);
    
    var nodes13504 = $("<span>");
    root14792.append(nodes13504);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13271, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root14797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13505 = $("<span>");
      root14797.append(nodes13505);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp13349 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp13270 = mobl.ref(result__);
        
        var nodes13506 = $("<span>");
        root14798.append(nodes13506);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp13270, function(_, callback) {
          var root14799 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14799); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes13506;
          nodes13506 = node.contents();
          oldNodes.replaceWith(nodes13506);
        }));
        callback(root14798); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13505;
        nodes13505 = node.contents();
        oldNodes.replaceWith(nodes13505);
      }));
      
      var node1022 = $("<span>");
      root14797.append(node1022);
      var condSubs378 = new mobl.CompSubscription();
      subs__.addSub(condSubs378);
      var oldValue378;
      var renderCond378 = function() {
        var value622 = qa.get().done;
        if(oldValue378 === value622) return;
        oldValue378 = value622;
        var subs__ = condSubs378;
        subs__.unsubscribe();
        node1022.empty();
        if(value622) {
          var nodes13507 = $("<span>");
          node1022.append(nodes13507);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root14800 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root14800); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes13507;
            nodes13507 = node.contents();
            oldNodes.replaceWith(nodes13507);
          }));
          
          
        } else {
          
        }
      };
      renderCond378();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond378();
      }));
      
      callback(root14797); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13504;
      nodes13504 = node.contents();
      oldNodes.replaceWith(nodes13504);
    }));
    callback(root14792); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13499;
    nodes13499 = node.contents();
    oldNodes.replaceWith(nodes13499);
  }));
  callback(root14789); return subs__;
  
  
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
  qas.list(function(coll843) {
    coll843 = coll843.reverse();
    function processOne477() {
      var item;
      item = coll843.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll843.length > 0) processOne477(); else rest477();
      
    }
    function rest477() {
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
    if(coll843.length > 0) processOne477(); else rest477();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll844) {
    coll844 = coll844.reverse();
    function processOne478() {
      var item;
      item = coll844.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll844.length > 0) processOne478(); else rest478();
      
    }
    function rest478() {
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
    if(coll844.length > 0) processOne478(); else rest478();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll845) {
    coll845 = coll845.reverse();
    function processOne479() {
      var item;
      item = coll845.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll845.length > 0) processOne479(); else rest479();
      
    }
    function rest479() {
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
    if(coll845.length > 0) processOne479(); else rest479();
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