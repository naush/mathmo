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
    var tmp17307 = result__;
    var result__ = tmp17307;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp17308 = result__;
      var result__ = tmp17308;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp17309 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll984) {
    coll984 = coll984.reverse();
    function processOne618() {
      var i;
      i = coll984.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp17310 = result__;
        
        if(coll984.length > 0) processOne618(); else rest618();
        
      });
    }
    function rest618() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll984.length > 0) processOne618(); else rest618();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll985) {
    coll985 = coll985.reverse();
    function processOne619() {
      var i;
      i = coll985.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp17311 = result__;
          
          if(coll985.length > 0) processOne619(); else rest619();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp17311 = result__;
            
            if(coll985.length > 0) processOne619(); else rest619();
            
          });
        }
      }
    }
    function rest619() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll985.length > 0) processOne619(); else rest619();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll986) {
    coll986 = coll986.reverse();
    function processOne620() {
      var i;
      i = coll986.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp17312 = result__;
        
        if(coll986.length > 0) processOne620(); else rest620();
        
      });
    }
    function rest620() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll986.length > 0) processOne620(); else rest620();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root18966 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17351 = $("<span>");
  root18966.append(nodes17351);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18967 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17320 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17220 = mobl.ref(result__);
    
    var nodes17352 = $("<span>");
    root18967.append(nodes17352);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17220, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18968 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17353 = $("<span>");
      root18968.append(nodes17353);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18969 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18969); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17353;
        nodes17353 = node.contents();
        oldNodes.replaceWith(nodes17353);
      }));
      callback(root18968); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17352;
      nodes17352 = node.contents();
      oldNodes.replaceWith(nodes17352);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17319 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17221 = mobl.ref(result__);
    
    var nodes17354 = $("<span>");
    root18967.append(nodes17354);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17221, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18970 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17355 = $("<span>");
      root18970.append(nodes17355);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18971 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18971); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17355;
        nodes17355 = node.contents();
        oldNodes.replaceWith(nodes17355);
      }));
      callback(root18970); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17354;
      nodes17354 = node.contents();
      oldNodes.replaceWith(nodes17354);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17318 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17222 = mobl.ref(result__);
    
    var nodes17356 = $("<span>");
    root18967.append(nodes17356);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17222, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18972 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17357 = $("<span>");
      root18972.append(nodes17357);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18973 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18973); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17357;
        nodes17357 = node.contents();
        oldNodes.replaceWith(nodes17357);
      }));
      callback(root18972); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17356;
      nodes17356 = node.contents();
      oldNodes.replaceWith(nodes17356);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17317 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17223 = mobl.ref(result__);
    
    var nodes17358 = $("<span>");
    root18967.append(nodes17358);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17223, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18974 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17359 = $("<span>");
      root18974.append(nodes17359);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18975 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18975); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17359;
        nodes17359 = node.contents();
        oldNodes.replaceWith(nodes17359);
      }));
      callback(root18974); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17358;
      nodes17358 = node.contents();
      oldNodes.replaceWith(nodes17358);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17316 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17224 = mobl.ref(result__);
    
    var nodes17360 = $("<span>");
    root18967.append(nodes17360);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17224, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18976 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17361 = $("<span>");
      root18976.append(nodes17361);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18977 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18977); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17361;
        nodes17361 = node.contents();
        oldNodes.replaceWith(nodes17361);
      }));
      callback(root18976); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17360;
      nodes17360 = node.contents();
      oldNodes.replaceWith(nodes17360);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17315 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17225 = mobl.ref(result__);
    
    var nodes17362 = $("<span>");
    root18967.append(nodes17362);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17225, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17363 = $("<span>");
      root18978.append(nodes17363);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18979 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18979); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17363;
        nodes17363 = node.contents();
        oldNodes.replaceWith(nodes17363);
      }));
      callback(root18978); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17362;
      nodes17362 = node.contents();
      oldNodes.replaceWith(nodes17362);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17314 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17226 = mobl.ref(result__);
    
    var nodes17364 = $("<span>");
    root18967.append(nodes17364);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17226, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17365 = $("<span>");
      root18980.append(nodes17365);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18981 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18981); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17365;
        nodes17365 = node.contents();
        oldNodes.replaceWith(nodes17365);
      }));
      callback(root18980); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17364;
      nodes17364 = node.contents();
      oldNodes.replaceWith(nodes17364);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17313 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17227 = mobl.ref(result__);
    
    var nodes17366 = $("<span>");
    root18967.append(nodes17366);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17227, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18982 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17367 = $("<span>");
      root18982.append(nodes17367);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18983 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18983); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17367;
        nodes17367 = node.contents();
        oldNodes.replaceWith(nodes17367);
      }));
      callback(root18982); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17366;
      nodes17366 = node.contents();
      oldNodes.replaceWith(nodes17366);
    }));
    callback(root18967); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17351;
    nodes17351 = node.contents();
    oldNodes.replaceWith(nodes17351);
  }));
  callback(root18966); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root18984 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes17368 = $("<span>");
  root18984.append(nodes17368);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18985 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17229 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17228 = mobl.ref(result__);
    
    var nodes17369 = $("<span>");
    root18985.append(nodes17369);
    subs__.addSub((ui.backButton)(tmp17228, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17229, function(_, callback) {
      var root18986 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18986); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17369;
      nodes17369 = node.contents();
      oldNodes.replaceWith(nodes17369);
    }));
    callback(root18985); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17368;
    nodes17368 = node.contents();
    oldNodes.replaceWith(nodes17368);
  }));
  var nodes17370 = $("<span>");
  root18984.append(nodes17370);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18987 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp17328 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17230 = mobl.ref(result__);
    
    var nodes17371 = $("<span>");
    root18987.append(nodes17371);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17230, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18988 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17372 = $("<span>");
      root18988.append(nodes17372);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18989 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18989); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17372;
        nodes17372 = node.contents();
        oldNodes.replaceWith(nodes17372);
      }));
      callback(root18988); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17371;
      nodes17371 = node.contents();
      oldNodes.replaceWith(nodes17371);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp17327 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17231 = mobl.ref(result__);
    
    var nodes17373 = $("<span>");
    root18987.append(nodes17373);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17231, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18990 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17374 = $("<span>");
      root18990.append(nodes17374);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18991 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18991); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17374;
        nodes17374 = node.contents();
        oldNodes.replaceWith(nodes17374);
      }));
      callback(root18990); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17373;
      nodes17373 = node.contents();
      oldNodes.replaceWith(nodes17373);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp17326 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17232 = mobl.ref(result__);
    
    var nodes17375 = $("<span>");
    root18987.append(nodes17375);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17232, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18992 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17376 = $("<span>");
      root18992.append(nodes17376);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18993 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18993); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17376;
        nodes17376 = node.contents();
        oldNodes.replaceWith(nodes17376);
      }));
      callback(root18992); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17375;
      nodes17375 = node.contents();
      oldNodes.replaceWith(nodes17375);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp17325 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17233 = mobl.ref(result__);
    
    var nodes17377 = $("<span>");
    root18987.append(nodes17377);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17233, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18994 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17378 = $("<span>");
      root18994.append(nodes17378);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18995 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18995); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17378;
        nodes17378 = node.contents();
        oldNodes.replaceWith(nodes17378);
      }));
      callback(root18994); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17377;
      nodes17377 = node.contents();
      oldNodes.replaceWith(nodes17377);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp17324 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17234 = mobl.ref(result__);
    
    var nodes17379 = $("<span>");
    root18987.append(nodes17379);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17234, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18996 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17380 = $("<span>");
      root18996.append(nodes17380);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18997 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18997); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17380;
        nodes17380 = node.contents();
        oldNodes.replaceWith(nodes17380);
      }));
      callback(root18996); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17379;
      nodes17379 = node.contents();
      oldNodes.replaceWith(nodes17379);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp17323 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17235 = mobl.ref(result__);
    
    var nodes17381 = $("<span>");
    root18987.append(nodes17381);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17235, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18998 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17382 = $("<span>");
      root18998.append(nodes17382);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18999 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18999); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17382;
        nodes17382 = node.contents();
        oldNodes.replaceWith(nodes17382);
      }));
      callback(root18998); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17381;
      nodes17381 = node.contents();
      oldNodes.replaceWith(nodes17381);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp17322 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17236 = mobl.ref(result__);
    
    var nodes17383 = $("<span>");
    root18987.append(nodes17383);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17236, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19000 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17384 = $("<span>");
      root19000.append(nodes17384);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19001 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19001); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17384;
        nodes17384 = node.contents();
        oldNodes.replaceWith(nodes17384);
      }));
      callback(root19000); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17383;
      nodes17383 = node.contents();
      oldNodes.replaceWith(nodes17383);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp17321 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17237 = mobl.ref(result__);
    
    var nodes17385 = $("<span>");
    root18987.append(nodes17385);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17237, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19002 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17386 = $("<span>");
      root19002.append(nodes17386);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19003 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19003); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17386;
        nodes17386 = node.contents();
        oldNodes.replaceWith(nodes17386);
      }));
      callback(root19002); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17385;
      nodes17385 = node.contents();
      oldNodes.replaceWith(nodes17385);
    }));
    callback(root18987); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17370;
    nodes17370 = node.contents();
    oldNodes.replaceWith(nodes17370);
  }));
  callback(root18984); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root19004 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17387 = $("<span>");
  root19004.append(nodes17387);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root19005 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17239 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17238 = mobl.ref(result__);
    
    var nodes17388 = $("<span>");
    root19005.append(nodes17388);
    subs__.addSub((ui.backButton)(tmp17238, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17239, function(_, callback) {
      var root19006 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19006); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17388;
      nodes17388 = node.contents();
      oldNodes.replaceWith(nodes17388);
    }));
    callback(root19005); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17387;
    nodes17387 = node.contents();
    oldNodes.replaceWith(nodes17387);
  }));
  var nodes17389 = $("<span>");
  root19004.append(nodes17389);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19007 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp17333 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17240 = mobl.ref(result__);
    
    var nodes17390 = $("<span>");
    root19007.append(nodes17390);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17240, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17391 = $("<span>");
      root19008.append(nodes17391);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19009 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19009); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17391;
        nodes17391 = node.contents();
        oldNodes.replaceWith(nodes17391);
      }));
      callback(root19008); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17390;
      nodes17390 = node.contents();
      oldNodes.replaceWith(nodes17390);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp17332 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17241 = mobl.ref(result__);
    
    var nodes17392 = $("<span>");
    root19007.append(nodes17392);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17241, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19010 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17393 = $("<span>");
      root19010.append(nodes17393);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19011 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19011); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17393;
        nodes17393 = node.contents();
        oldNodes.replaceWith(nodes17393);
      }));
      callback(root19010); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17392;
      nodes17392 = node.contents();
      oldNodes.replaceWith(nodes17392);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp17331 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17242 = mobl.ref(result__);
    
    var nodes17394 = $("<span>");
    root19007.append(nodes17394);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17242, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19012 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17395 = $("<span>");
      root19012.append(nodes17395);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19013 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19013); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17395;
        nodes17395 = node.contents();
        oldNodes.replaceWith(nodes17395);
      }));
      callback(root19012); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17394;
      nodes17394 = node.contents();
      oldNodes.replaceWith(nodes17394);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp17330 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17243 = mobl.ref(result__);
    
    var nodes17396 = $("<span>");
    root19007.append(nodes17396);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17243, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19014 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17397 = $("<span>");
      root19014.append(nodes17397);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19015 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19015); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17397;
        nodes17397 = node.contents();
        oldNodes.replaceWith(nodes17397);
      }));
      callback(root19014); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17396;
      nodes17396 = node.contents();
      oldNodes.replaceWith(nodes17396);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp17329 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17244 = mobl.ref(result__);
    
    var nodes17398 = $("<span>");
    root19007.append(nodes17398);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17244, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19016 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17399 = $("<span>");
      root19016.append(nodes17399);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19017 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19017); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17399;
        nodes17399 = node.contents();
        oldNodes.replaceWith(nodes17399);
      }));
      callback(root19016); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17398;
      nodes17398 = node.contents();
      oldNodes.replaceWith(nodes17398);
    }));
    callback(root19007); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17389;
    nodes17389 = node.contents();
    oldNodes.replaceWith(nodes17389);
  }));
  callback(root19004); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root19018 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17400 = $("<span>");
  root19018.append(nodes17400);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root19019 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17246 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17245 = mobl.ref(result__);
    
    var nodes17401 = $("<span>");
    root19019.append(nodes17401);
    subs__.addSub((ui.backButton)(tmp17245, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17246, function(_, callback) {
      var root19020 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19020); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17401;
      nodes17401 = node.contents();
      oldNodes.replaceWith(nodes17401);
    }));
    callback(root19019); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17400;
    nodes17400 = node.contents();
    oldNodes.replaceWith(nodes17400);
  }));
  var nodes17402 = $("<span>");
  root19018.append(nodes17402);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19021 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp17336 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17247 = mobl.ref(result__);
    
    var nodes17403 = $("<span>");
    root19021.append(nodes17403);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17247, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17404 = $("<span>");
      root19022.append(nodes17404);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19023 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19023); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17404;
        nodes17404 = node.contents();
        oldNodes.replaceWith(nodes17404);
      }));
      callback(root19022); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17403;
      nodes17403 = node.contents();
      oldNodes.replaceWith(nodes17403);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp17335 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17248 = mobl.ref(result__);
    
    var nodes17405 = $("<span>");
    root19021.append(nodes17405);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17248, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19024 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17406 = $("<span>");
      root19024.append(nodes17406);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19025 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19025); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17406;
        nodes17406 = node.contents();
        oldNodes.replaceWith(nodes17406);
      }));
      callback(root19024); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17405;
      nodes17405 = node.contents();
      oldNodes.replaceWith(nodes17405);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp17334 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17249 = mobl.ref(result__);
    
    var nodes17407 = $("<span>");
    root19021.append(nodes17407);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17249, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19026 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17408 = $("<span>");
      root19026.append(nodes17408);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19027 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19027); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17408;
        nodes17408 = node.contents();
        oldNodes.replaceWith(nodes17408);
      }));
      callback(root19026); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17407;
      nodes17407 = node.contents();
      oldNodes.replaceWith(nodes17407);
    }));
    callback(root19021); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17402;
    nodes17402 = node.contents();
    oldNodes.replaceWith(nodes17402);
  }));
  callback(root19018); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root19028 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17409 = $("<span>");
  root19028.append(nodes17409);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root19029 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17251 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17250 = mobl.ref(result__);
    
    var nodes17410 = $("<span>");
    root19029.append(nodes17410);
    subs__.addSub((ui.backButton)(tmp17250, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17251, function(_, callback) {
      var root19030 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19030); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17410;
      nodes17410 = node.contents();
      oldNodes.replaceWith(nodes17410);
    }));
    callback(root19029); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17409;
    nodes17409 = node.contents();
    oldNodes.replaceWith(nodes17409);
  }));
  var nodes17411 = $("<span>");
  root19028.append(nodes17411);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19031 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp17340 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17252 = mobl.ref(result__);
    
    var nodes17412 = $("<span>");
    root19031.append(nodes17412);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17252, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19032 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17413 = $("<span>");
      root19032.append(nodes17413);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19033 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19033); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17413;
        nodes17413 = node.contents();
        oldNodes.replaceWith(nodes17413);
      }));
      callback(root19032); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17412;
      nodes17412 = node.contents();
      oldNodes.replaceWith(nodes17412);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp17339 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17253 = mobl.ref(result__);
    
    var nodes17414 = $("<span>");
    root19031.append(nodes17414);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17253, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19034 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17415 = $("<span>");
      root19034.append(nodes17415);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19035 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19035); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17415;
        nodes17415 = node.contents();
        oldNodes.replaceWith(nodes17415);
      }));
      callback(root19034); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17414;
      nodes17414 = node.contents();
      oldNodes.replaceWith(nodes17414);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp17338 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17254 = mobl.ref(result__);
    
    var nodes17416 = $("<span>");
    root19031.append(nodes17416);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17254, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19036 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17417 = $("<span>");
      root19036.append(nodes17417);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19037 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19037); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17417;
        nodes17417 = node.contents();
        oldNodes.replaceWith(nodes17417);
      }));
      callback(root19036); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17416;
      nodes17416 = node.contents();
      oldNodes.replaceWith(nodes17416);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp17337 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17255 = mobl.ref(result__);
    
    var nodes17418 = $("<span>");
    root19031.append(nodes17418);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17255, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19038 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17419 = $("<span>");
      root19038.append(nodes17419);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19039 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19039); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17419;
        nodes17419 = node.contents();
        oldNodes.replaceWith(nodes17419);
      }));
      callback(root19038); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17418;
      nodes17418 = node.contents();
      oldNodes.replaceWith(nodes17418);
    }));
    callback(root19031); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17411;
    nodes17411 = node.contents();
    oldNodes.replaceWith(nodes17411);
  }));
  callback(root19028); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root19040 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17420 = $("<span>");
  root19040.append(nodes17420);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root19041 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17257 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17256 = mobl.ref(result__);
    
    var nodes17421 = $("<span>");
    root19041.append(nodes17421);
    subs__.addSub((ui.backButton)(tmp17256, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17257, function(_, callback) {
      var root19042 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19042); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17421;
      nodes17421 = node.contents();
      oldNodes.replaceWith(nodes17421);
    }));
    callback(root19041); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17420;
    nodes17420 = node.contents();
    oldNodes.replaceWith(nodes17420);
  }));
  var nodes17422 = $("<span>");
  root19040.append(nodes17422);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19043 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp17342 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17258 = mobl.ref(result__);
    
    var nodes17423 = $("<span>");
    root19043.append(nodes17423);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17258, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19044 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17424 = $("<span>");
      root19044.append(nodes17424);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19045 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19045); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17424;
        nodes17424 = node.contents();
        oldNodes.replaceWith(nodes17424);
      }));
      callback(root19044); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17423;
      nodes17423 = node.contents();
      oldNodes.replaceWith(nodes17423);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp17341 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17259 = mobl.ref(result__);
    
    var nodes17425 = $("<span>");
    root19043.append(nodes17425);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17259, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19046 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17426 = $("<span>");
      root19046.append(nodes17426);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19047 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19047); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17426;
        nodes17426 = node.contents();
        oldNodes.replaceWith(nodes17426);
      }));
      callback(root19046); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17425;
      nodes17425 = node.contents();
      oldNodes.replaceWith(nodes17425);
    }));
    callback(root19043); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17422;
    nodes17422 = node.contents();
    oldNodes.replaceWith(nodes17422);
  }));
  callback(root19040); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root19048 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17427 = $("<span>");
  root19048.append(nodes17427);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root19049 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17261 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17260 = mobl.ref(result__);
    
    var nodes17428 = $("<span>");
    root19049.append(nodes17428);
    subs__.addSub((ui.backButton)(tmp17260, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17261, function(_, callback) {
      var root19050 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19050); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17428;
      nodes17428 = node.contents();
      oldNodes.replaceWith(nodes17428);
    }));
    callback(root19049); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17427;
    nodes17427 = node.contents();
    oldNodes.replaceWith(nodes17427);
  }));
  var nodes17429 = $("<span>");
  root19048.append(nodes17429);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19051 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp17347 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17262 = mobl.ref(result__);
    
    var nodes17430 = $("<span>");
    root19051.append(nodes17430);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17262, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19052 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17431 = $("<span>");
      root19052.append(nodes17431);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19053 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19053); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17431;
        nodes17431 = node.contents();
        oldNodes.replaceWith(nodes17431);
      }));
      callback(root19052); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17430;
      nodes17430 = node.contents();
      oldNodes.replaceWith(nodes17430);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp17346 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17263 = mobl.ref(result__);
    
    var nodes17432 = $("<span>");
    root19051.append(nodes17432);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17263, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17433 = $("<span>");
      root19054.append(nodes17433);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19055 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19055); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17433;
        nodes17433 = node.contents();
        oldNodes.replaceWith(nodes17433);
      }));
      callback(root19054); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17432;
      nodes17432 = node.contents();
      oldNodes.replaceWith(nodes17432);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp17345 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17264 = mobl.ref(result__);
    
    var nodes17434 = $("<span>");
    root19051.append(nodes17434);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17264, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17435 = $("<span>");
      root19056.append(nodes17435);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19057 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19057); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17435;
        nodes17435 = node.contents();
        oldNodes.replaceWith(nodes17435);
      }));
      callback(root19056); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17434;
      nodes17434 = node.contents();
      oldNodes.replaceWith(nodes17434);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp17344 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17265 = mobl.ref(result__);
    
    var nodes17436 = $("<span>");
    root19051.append(nodes17436);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17265, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19058 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17437 = $("<span>");
      root19058.append(nodes17437);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19059 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19059); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17437;
        nodes17437 = node.contents();
        oldNodes.replaceWith(nodes17437);
      }));
      callback(root19058); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17436;
      nodes17436 = node.contents();
      oldNodes.replaceWith(nodes17436);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp17343 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17266 = mobl.ref(result__);
    
    var nodes17438 = $("<span>");
    root19051.append(nodes17438);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17266, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19060 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17439 = $("<span>");
      root19060.append(nodes17439);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19061 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19061); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17439;
        nodes17439 = node.contents();
        oldNodes.replaceWith(nodes17439);
      }));
      callback(root19060); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17438;
      nodes17438 = node.contents();
      oldNodes.replaceWith(nodes17438);
    }));
    callback(root19051); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17429;
    nodes17429 = node.contents();
    oldNodes.replaceWith(nodes17429);
  }));
  callback(root19048); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root19062 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17440 = $("<span>");
  root19062.append(nodes17440);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root19063 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17268 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17267 = mobl.ref(result__);
    
    var nodes17441 = $("<span>");
    root19063.append(nodes17441);
    subs__.addSub((ui.backButton)(tmp17267, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17268, function(_, callback) {
      var root19064 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19064); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17441;
      nodes17441 = node.contents();
      oldNodes.replaceWith(nodes17441);
    }));
    callback(root19063); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17440;
    nodes17440 = node.contents();
    oldNodes.replaceWith(nodes17440);
  }));
  var nodes17442 = $("<span>");
  root19062.append(nodes17442);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19065 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp17350 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17269 = mobl.ref(result__);
    
    var nodes17443 = $("<span>");
    root19065.append(nodes17443);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17269, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19066 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17444 = $("<span>");
      root19066.append(nodes17444);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19067 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19067); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17444;
        nodes17444 = node.contents();
        oldNodes.replaceWith(nodes17444);
      }));
      callback(root19066); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17443;
      nodes17443 = node.contents();
      oldNodes.replaceWith(nodes17443);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp17349 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17270 = mobl.ref(result__);
    
    var nodes17445 = $("<span>");
    root19065.append(nodes17445);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17270, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19068 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17446 = $("<span>");
      root19068.append(nodes17446);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19069 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19069); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17446;
        nodes17446 = node.contents();
        oldNodes.replaceWith(nodes17446);
      }));
      callback(root19068); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17445;
      nodes17445 = node.contents();
      oldNodes.replaceWith(nodes17445);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp17348 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17271 = mobl.ref(result__);
    
    var nodes17447 = $("<span>");
    root19065.append(nodes17447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17271, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19070 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17448 = $("<span>");
      root19070.append(nodes17448);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19071 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19071); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17448;
        nodes17448 = node.contents();
        oldNodes.replaceWith(nodes17448);
      }));
      callback(root19070); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17447;
      nodes17447 = node.contents();
      oldNodes.replaceWith(nodes17447);
    }));
    callback(root19065); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17442;
    nodes17442 = node.contents();
    oldNodes.replaceWith(nodes17442);
  }));
  callback(root19062); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root19072 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17449 = $("<span>");
  root19072.append(nodes17449);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root19073 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17273 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17272 = mobl.ref(result__);
    
    var nodes17450 = $("<span>");
    root19073.append(nodes17450);
    subs__.addSub((ui.backButton)(tmp17272, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17273, function(_, callback) {
      var root19074 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19074); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17450;
      nodes17450 = node.contents();
      oldNodes.replaceWith(nodes17450);
    }));
    callback(root19073); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17449;
    nodes17449 = node.contents();
    oldNodes.replaceWith(nodes17449);
  }));
  var nodes17451 = $("<span>");
  root19072.append(nodes17451);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19075 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp17351 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17274 = mobl.ref(result__);
    
    var nodes17452 = $("<span>");
    root19075.append(nodes17452);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17274, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19076 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17453 = $("<span>");
      root19076.append(nodes17453);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19077 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19077); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17453;
        nodes17453 = node.contents();
        oldNodes.replaceWith(nodes17453);
      }));
      callback(root19076); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17452;
      nodes17452 = node.contents();
      oldNodes.replaceWith(nodes17452);
    }));
    callback(root19075); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17451;
    nodes17451 = node.contents();
    oldNodes.replaceWith(nodes17451);
  }));
  callback(root19072); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root19078 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17454 = $("<span>");
  root19078.append(nodes17454);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19079 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp17364 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17275 = mobl.ref(result__);
    
    var nodes17455 = $("<span>");
    root19079.append(nodes17455);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17275, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19080 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17456 = $("<span>");
      root19080.append(nodes17456);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19081 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19081); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17456;
        nodes17456 = node.contents();
        oldNodes.replaceWith(nodes17456);
      }));
      callback(root19080); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17455;
      nodes17455 = node.contents();
      oldNodes.replaceWith(nodes17455);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp17363 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17276 = mobl.ref(result__);
    
    var nodes17457 = $("<span>");
    root19079.append(nodes17457);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17276, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19082 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17458 = $("<span>");
      root19082.append(nodes17458);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19083 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19083); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17458;
        nodes17458 = node.contents();
        oldNodes.replaceWith(nodes17458);
      }));
      callback(root19082); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17457;
      nodes17457 = node.contents();
      oldNodes.replaceWith(nodes17457);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp17362 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17277 = mobl.ref(result__);
    
    var nodes17459 = $("<span>");
    root19079.append(nodes17459);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17277, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17460 = $("<span>");
      root19084.append(nodes17460);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19085 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19085); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17460;
        nodes17460 = node.contents();
        oldNodes.replaceWith(nodes17460);
      }));
      callback(root19084); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17459;
      nodes17459 = node.contents();
      oldNodes.replaceWith(nodes17459);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp17361 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17278 = mobl.ref(result__);
    
    var nodes17461 = $("<span>");
    root19079.append(nodes17461);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17278, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19086 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17462 = $("<span>");
      root19086.append(nodes17462);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19087 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19087); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17462;
        nodes17462 = node.contents();
        oldNodes.replaceWith(nodes17462);
      }));
      callback(root19086); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17461;
      nodes17461 = node.contents();
      oldNodes.replaceWith(nodes17461);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp17360 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17279 = mobl.ref(result__);
    
    var nodes17463 = $("<span>");
    root19079.append(nodes17463);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17279, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19088 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17464 = $("<span>");
      root19088.append(nodes17464);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19089 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19089); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17464;
        nodes17464 = node.contents();
        oldNodes.replaceWith(nodes17464);
      }));
      callback(root19088); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17463;
      nodes17463 = node.contents();
      oldNodes.replaceWith(nodes17463);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp17359 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17280 = mobl.ref(result__);
    
    var nodes17465 = $("<span>");
    root19079.append(nodes17465);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17280, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19090 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17466 = $("<span>");
      root19090.append(nodes17466);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19091 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19091); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17466;
        nodes17466 = node.contents();
        oldNodes.replaceWith(nodes17466);
      }));
      callback(root19090); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17465;
      nodes17465 = node.contents();
      oldNodes.replaceWith(nodes17465);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp17358 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17281 = mobl.ref(result__);
    
    var nodes17467 = $("<span>");
    root19079.append(nodes17467);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17281, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19092 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17468 = $("<span>");
      root19092.append(nodes17468);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19093 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19093); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17468;
        nodes17468 = node.contents();
        oldNodes.replaceWith(nodes17468);
      }));
      callback(root19092); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17467;
      nodes17467 = node.contents();
      oldNodes.replaceWith(nodes17467);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp17357 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17282 = mobl.ref(result__);
    
    var nodes17469 = $("<span>");
    root19079.append(nodes17469);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17282, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19094 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17470 = $("<span>");
      root19094.append(nodes17470);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19095 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19095); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17470;
        nodes17470 = node.contents();
        oldNodes.replaceWith(nodes17470);
      }));
      callback(root19094); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17469;
      nodes17469 = node.contents();
      oldNodes.replaceWith(nodes17469);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp17356 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17283 = mobl.ref(result__);
    
    var nodes17471 = $("<span>");
    root19079.append(nodes17471);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17283, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19096 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17472 = $("<span>");
      root19096.append(nodes17472);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19097 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19097); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17472;
        nodes17472 = node.contents();
        oldNodes.replaceWith(nodes17472);
      }));
      callback(root19096); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17471;
      nodes17471 = node.contents();
      oldNodes.replaceWith(nodes17471);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp17355 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17284 = mobl.ref(result__);
    
    var nodes17473 = $("<span>");
    root19079.append(nodes17473);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17284, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19098 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17474 = $("<span>");
      root19098.append(nodes17474);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19099 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19099); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17474;
        nodes17474 = node.contents();
        oldNodes.replaceWith(nodes17474);
      }));
      callback(root19098); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17473;
      nodes17473 = node.contents();
      oldNodes.replaceWith(nodes17473);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp17354 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17285 = mobl.ref(result__);
    
    var nodes17475 = $("<span>");
    root19079.append(nodes17475);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17285, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17476 = $("<span>");
      root19100.append(nodes17476);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19101 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19101); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17476;
        nodes17476 = node.contents();
        oldNodes.replaceWith(nodes17476);
      }));
      callback(root19100); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17475;
      nodes17475 = node.contents();
      oldNodes.replaceWith(nodes17475);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp17353 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17286 = mobl.ref(result__);
    
    var nodes17477 = $("<span>");
    root19079.append(nodes17477);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17286, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17478 = $("<span>");
      root19102.append(nodes17478);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19103 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19103); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17478;
        nodes17478 = node.contents();
        oldNodes.replaceWith(nodes17478);
      }));
      callback(root19102); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17477;
      nodes17477 = node.contents();
      oldNodes.replaceWith(nodes17477);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp17352 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17287 = mobl.ref(result__);
    
    var nodes17479 = $("<span>");
    root19079.append(nodes17479);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17287, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17480 = $("<span>");
      root19104.append(nodes17480);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19105 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19105); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17480;
        nodes17480 = node.contents();
        oldNodes.replaceWith(nodes17480);
      }));
      callback(root19104); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17479;
      nodes17479 = node.contents();
      oldNodes.replaceWith(nodes17479);
    }));
    callback(root19079); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17454;
    nodes17454 = node.contents();
    oldNodes.replaceWith(nodes17454);
  }));
  callback(root19078); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root19106 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17481 = $("<span>");
  root19106.append(nodes17481);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19107 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp17370 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17288 = mobl.ref(result__);
    
    var nodes17482 = $("<span>");
    root19107.append(nodes17482);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17288, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17483 = $("<span>");
      root19108.append(nodes17483);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19109 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19109); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17483;
        nodes17483 = node.contents();
        oldNodes.replaceWith(nodes17483);
      }));
      callback(root19108); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17482;
      nodes17482 = node.contents();
      oldNodes.replaceWith(nodes17482);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp17369 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17289 = mobl.ref(result__);
    
    var nodes17484 = $("<span>");
    root19107.append(nodes17484);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17289, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19110 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17485 = $("<span>");
      root19110.append(nodes17485);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19111 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19111); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17485;
        nodes17485 = node.contents();
        oldNodes.replaceWith(nodes17485);
      }));
      callback(root19110); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17484;
      nodes17484 = node.contents();
      oldNodes.replaceWith(nodes17484);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp17368 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17290 = mobl.ref(result__);
    
    var nodes17486 = $("<span>");
    root19107.append(nodes17486);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17290, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19112 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17487 = $("<span>");
      root19112.append(nodes17487);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19113 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19113); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17487;
        nodes17487 = node.contents();
        oldNodes.replaceWith(nodes17487);
      }));
      callback(root19112); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17486;
      nodes17486 = node.contents();
      oldNodes.replaceWith(nodes17486);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp17367 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17291 = mobl.ref(result__);
    
    var nodes17488 = $("<span>");
    root19107.append(nodes17488);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17291, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17489 = $("<span>");
      root19114.append(nodes17489);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19115 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19115); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17489;
        nodes17489 = node.contents();
        oldNodes.replaceWith(nodes17489);
      }));
      callback(root19114); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17488;
      nodes17488 = node.contents();
      oldNodes.replaceWith(nodes17488);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp17366 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17292 = mobl.ref(result__);
    
    var nodes17490 = $("<span>");
    root19107.append(nodes17490);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17292, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19116 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17491 = $("<span>");
      root19116.append(nodes17491);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19117); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17491;
        nodes17491 = node.contents();
        oldNodes.replaceWith(nodes17491);
      }));
      callback(root19116); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17490;
      nodes17490 = node.contents();
      oldNodes.replaceWith(nodes17490);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp17365 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17293 = mobl.ref(result__);
    
    var nodes17492 = $("<span>");
    root19107.append(nodes17492);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17293, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root19118 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17493 = $("<span>");
      root19118.append(nodes17493);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19119 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19119); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17493;
        nodes17493 = node.contents();
        oldNodes.replaceWith(nodes17493);
      }));
      callback(root19118); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17492;
      nodes17492 = node.contents();
      oldNodes.replaceWith(nodes17492);
    }));
    callback(root19107); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17481;
    nodes17481 = node.contents();
    oldNodes.replaceWith(nodes17481);
  }));
  callback(root19106); return subs__;
  
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
  var root19120 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1278 = $("<div>");
  
  var ref884 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref884.get() !== null) {
    node1278.attr('class', ref884.get());
    subs__.addSub(ref884.addEventListener('change', function(_, ref, val) {
      node1278.attr('class', val);
    }));
    
  }
  subs__.addSub(ref884.rebind());
  
  var val294 = onclick.get();
  if(val294 !== null) {
    subs__.addSub(mobl.domBind(node1278, 'tap', val294));
  }
  
  
  var node1279 = $("<div>");
  
  var ref883 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref883.get() !== null) {
    node1279.attr('class', ref883.get());
    subs__.addSub(ref883.addEventListener('change', function(_, ref, val) {
      node1279.attr('class', val);
    }));
    
  }
  subs__.addSub(ref883.rebind());
  
  
  var node1280 = $("<div>");
  
  var ref881 = text;
  node1280.text(""+ref881.get());
  var ignore183 = false;
  subs__.addSub(ref881.addEventListener('change', function(_, ref, val) {
    if(ignore183) return;
    node1280.text(""+val);
  }));
  subs__.addSub(ref881.rebind());
  
  
  var ref882 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref882.get() !== null) {
    node1280.attr('class', ref882.get());
    subs__.addSub(ref882.addEventListener('change', function(_, ref, val) {
      node1280.attr('class', val);
    }));
    
  }
  subs__.addSub(ref882.rebind());
  
  node1279.append(node1280);
  node1278.append(node1279);
  var nodes17494 = $("<span>");
  node1278.append(nodes17494);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl234();
  }));
  
  function renderControl234() {
    subs__.addSub((elements)(function(elements, callback) {
      var root19121 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19121); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17494;
      nodes17494 = node.contents();
      oldNodes.replaceWith(nodes17494);
    }));
  }
  renderControl234();
  root19120.append(node1278);
  callback(root19120); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp17371 = result__;
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
  var root19122 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp17296 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp17296.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp17296.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp17296.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes17495 = $("<span>");
  root19122.append(nodes17495);
  subs__.addSub((mobl.block)(tmp17296, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root19123 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp17294 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp17294.set("A" + number.get() + ". ");
    }));
    
    var nodes17496 = $("<span>");
    root19123.append(nodes17496);
    subs__.addSub((mobl.label)(tmp17294, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root19124 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19124); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17496;
      nodes17496 = node.contents();
      oldNodes.replaceWith(nodes17496);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp17295 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp17295.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1281 = $("<span>");
    root19123.append(node1281);
    var condSubs443 = new mobl.CompSubscription();
    subs__.addSub(condSubs443);
    var oldValue443;
    var renderCond443 = function() {
      var value687 = tmp17295.get();
      if(oldValue443 === value687) return;
      oldValue443 = value687;
      var subs__ = condSubs443;
      subs__.unsubscribe();
      node1281.empty();
      if(value687) {
        
        var node1282 = $("<span>");
        
        var ref885 = mobl.ref("A" + number.get());
        if(ref885.get() !== null) {
          node1282.attr('id', ref885.get());
          subs__.addSub(ref885.addEventListener('change', function(_, ref, val) {
            node1282.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1282.attr('id', "A" + number.get());
          }));
          
        }
        subs__.addSub(ref885.rebind());
        
        var nodes17497 = $("<span>");
        node1282.append(nodes17497);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root19125 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root19125); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17497;
          nodes17497 = node.contents();
          oldNodes.replaceWith(nodes17497);
        }));
        node1281.append(node1282);
        
        
        
      } else {
        
        var node1283 = $("<span>");
        
        var ref886 = mobl.ref("A" + number.get());
        if(ref886.get() !== null) {
          node1283.attr('id', ref886.get());
          subs__.addSub(ref886.addEventListener('change', function(_, ref, val) {
            node1283.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1283.attr('id', "A" + number.get());
          }));
          
        }
        subs__.addSub(ref886.rebind());
        
        var nodes17498 = $("<span>");
        node1283.append(nodes17498);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root19126 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root19126); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17498;
          nodes17498 = node.contents();
          oldNodes.replaceWith(nodes17498);
        }));
        node1281.append(node1283);
        
        
        
      }
    };
    renderCond443();
    subs__.addSub(tmp17295.addEventListener('change', function() {
      renderCond443();
    }));
    
    callback(root19123); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17495;
    nodes17495 = node.contents();
    oldNodes.replaceWith(nodes17495);
  }));
  var nodes17499 = $("<span>");
  root19122.append(nodes17499);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root19127 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1284 = $("<span>");
    node1284.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp17373 = result__;
      var tmp17297 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp17372 = result__;
          var result__ = tmp17372;
          tmp17297.set(result__);
          
        });
      }));
      
      var nodes17503 = $("<span>");
      node1284.append(nodes17503);
      subs__.addSub((mobl.html)(tmp17297, function(_, callback) {
        var root19131 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19131); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17503;
        nodes17503 = node.contents();
        oldNodes.replaceWith(nodes17503);
      }));
      root19127.append(node1284);
      var nodes17500 = $("<span>");
      root19127.append(nodes17500);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19128 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19128); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17500;
        nodes17500 = node.contents();
        oldNodes.replaceWith(nodes17500);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp17298 = mobl.ref(result__);
      
      var nodes17501 = $("<span>");
      root19127.append(nodes17501);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp17298, function(_, callback) {
        var root19129 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19129); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17501;
        nodes17501 = node.contents();
        oldNodes.replaceWith(nodes17501);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp17299 = mobl.ref(result__);
      
      var nodes17502 = $("<span>");
      root19127.append(nodes17502);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp17299, function(_, callback) {
        var root19130 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19130); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17502;
        nodes17502 = node.contents();
        oldNodes.replaceWith(nodes17502);
      }));
      callback(root19127); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17499;
    nodes17499 = node.contents();
    oldNodes.replaceWith(nodes17499);
  }));
  callback(root19122); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp17374 = result__;
    var result__ = tmp17374;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp17375 = result__;
        var result__ = tmp17375;
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
  var root19132 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp17383 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp17301 = mobl.ref(result__);
  
  var nodes17504 = $("<span>");
  root19132.append(nodes17504);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp17301, function(_, callback) {
    var root19133 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp17376 = result__;
                       var result__ = tmp17376;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp17377 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp17300 = mobl.ref(result__);
    
    var nodes17505 = $("<span>");
    root19133.append(nodes17505);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp17300, function(_, callback) {
      var root19134 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19134); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17505;
      nodes17505 = node.contents();
      oldNodes.replaceWith(nodes17505);
    }));
    callback(root19133); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17504;
    nodes17504 = node.contents();
    oldNodes.replaceWith(nodes17504);
  }));
  var nodes17506 = $("<span>");
  root19132.append(nodes17506);
  subs__.addSub((ui.group)(function(_, callback) {
    var root19135 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp17382 = result__;
                       var result__ = mobl.$("#Q" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17304 = mobl.ref(result__);
    
    var nodes17507 = $("<span>");
    root19135.append(nodes17507);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp17304, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root19136 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp17302 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp17302.set("Q" + number.get() + ". ");
      }));
      
      var nodes17508 = $("<span>");
      root19136.append(nodes17508);
      subs__.addSub((mobl.html)(tmp17302, function(_, callback) {
        var root19137 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19137); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17508;
        nodes17508 = node.contents();
        oldNodes.replaceWith(nodes17508);
      }));
      
      var node1285 = $("<span>");
      
      var ref887 = mobl.ref("Q" + number.get());
      if(ref887.get() !== null) {
        node1285.attr('id', ref887.get());
        subs__.addSub(ref887.addEventListener('change', function(_, ref, val) {
          node1285.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1285.attr('id', "Q" + number.get());
        }));
        
      }
      subs__.addSub(ref887.rebind());
      
      var nodes17510 = $("<span>");
      node1285.append(nodes17510);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root19139 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root19139); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17510;
        nodes17510 = node.contents();
        oldNodes.replaceWith(nodes17510);
      }));
      root19136.append(node1285);
      
      var node1286 = $("<span>");
      node1286.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp17379 = result__;
        var tmp17303 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp17378 = result__;
            var result__ = tmp17378;
            tmp17303.set(result__);
            
          });
        }));
        
        var nodes17509 = $("<span>");
        node1286.append(nodes17509);
        subs__.addSub((mobl.html)(tmp17303, function(_, callback) {
          var root19138 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root19138); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17509;
          nodes17509 = node.contents();
          oldNodes.replaceWith(nodes17509);
        }));
        root19136.append(node1286);
        callback(root19136); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17507;
      nodes17507 = node.contents();
      oldNodes.replaceWith(nodes17507);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp17381 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17306 = mobl.ref(result__);
    
    var nodes17511 = $("<span>");
    root19135.append(nodes17511);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17306, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root19140 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17512 = $("<span>");
      root19140.append(nodes17512);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root19141 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp17380 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp17305 = mobl.ref(result__);
        
        var nodes17513 = $("<span>");
        root19141.append(nodes17513);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp17305, function(_, callback) {
          var root19142 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root19142); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17513;
          nodes17513 = node.contents();
          oldNodes.replaceWith(nodes17513);
        }));
        callback(root19141); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes17512;
        nodes17512 = node.contents();
        oldNodes.replaceWith(nodes17512);
      }));
      
      var node1287 = $("<span>");
      root19140.append(node1287);
      var condSubs444 = new mobl.CompSubscription();
      subs__.addSub(condSubs444);
      var oldValue444;
      var renderCond444 = function() {
        var value688 = qa.get().done;
        if(oldValue444 === value688) return;
        oldValue444 = value688;
        var subs__ = condSubs444;
        subs__.unsubscribe();
        node1287.empty();
        if(value688) {
          var nodes17514 = $("<span>");
          node1287.append(nodes17514);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root19143 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root19143); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes17514;
            nodes17514 = node.contents();
            oldNodes.replaceWith(nodes17514);
          }));
          
          
        } else {
          
        }
      };
      renderCond444();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond444();
      }));
      
      callback(root19140); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17511;
      nodes17511 = node.contents();
      oldNodes.replaceWith(nodes17511);
    }));
    callback(root19135); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17506;
    nodes17506 = node.contents();
    oldNodes.replaceWith(nodes17506);
  }));
  callback(root19132); return subs__;
  
  
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
  qas.list(function(coll987) {
    coll987 = coll987.reverse();
    function processOne621() {
      var item;
      item = coll987.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll987.length > 0) processOne621(); else rest621();
      
    }
    function rest621() {
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
    if(coll987.length > 0) processOne621(); else rest621();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll988) {
    coll988 = coll988.reverse();
    function processOne622() {
      var item;
      item = coll988.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll988.length > 0) processOne622(); else rest622();
      
    }
    function rest622() {
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
    if(coll988.length > 0) processOne622(); else rest622();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll989) {
    coll989 = coll989.reverse();
    function processOne623() {
      var item;
      item = coll989.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll989.length > 0) processOne623(); else rest623();
      
    }
    function rest623() {
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
    if(coll989.length > 0) processOne623(); else rest623();
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