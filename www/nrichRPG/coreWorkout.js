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
    var tmp4445 = result__;
    var result__ = tmp4445;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp4446 = result__;
      var result__ = tmp4446;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp4447 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll609) {
    coll609 = coll609.reverse();
    function processOne159() {
      var i;
      i = coll609.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp4448 = result__;
        
        if(coll609.length > 0) processOne159(); else rest159();
        
      });
    }
    function rest159() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll609.length > 0) processOne159(); else rest159();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll610) {
    coll610 = coll610.reverse();
    function processOne160() {
      var i;
      i = coll610.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp4449 = result__;
          
          if(coll610.length > 0) processOne160(); else rest160();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp4449 = result__;
            
            if(coll610.length > 0) processOne160(); else rest160();
            
          });
        }
      }
    }
    function rest160() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll610.length > 0) processOne160(); else rest160();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll611) {
    coll611 = coll611.reverse();
    function processOne161() {
      var i;
      i = coll611.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp4450 = result__;
        
        if(coll611.length > 0) processOne161(); else rest161();
        
      });
    }
    function rest161() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll611.length > 0) processOne161(); else rest161();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root5199 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4447 = $("<span>");
  root5199.append(nodes4447);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5200 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp4458 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4359 = mobl.ref(result__);
    
    var nodes4448 = $("<span>");
    root5200.append(nodes4448);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4359, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4449 = $("<span>");
      root5201.append(nodes4449);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5202 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5202); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4449;
        nodes4449 = node.contents();
        oldNodes.replaceWith(nodes4449);
      }));
      callback(root5201); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4448;
      nodes4448 = node.contents();
      oldNodes.replaceWith(nodes4448);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp4457 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4360 = mobl.ref(result__);
    
    var nodes4450 = $("<span>");
    root5200.append(nodes4450);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4360, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4451 = $("<span>");
      root5203.append(nodes4451);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5204 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5204); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4451;
        nodes4451 = node.contents();
        oldNodes.replaceWith(nodes4451);
      }));
      callback(root5203); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4450;
      nodes4450 = node.contents();
      oldNodes.replaceWith(nodes4450);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp4456 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4361 = mobl.ref(result__);
    
    var nodes4452 = $("<span>");
    root5200.append(nodes4452);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4361, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4453 = $("<span>");
      root5205.append(nodes4453);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5206 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5206); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4453;
        nodes4453 = node.contents();
        oldNodes.replaceWith(nodes4453);
      }));
      callback(root5205); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4452;
      nodes4452 = node.contents();
      oldNodes.replaceWith(nodes4452);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp4455 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4362 = mobl.ref(result__);
    
    var nodes4454 = $("<span>");
    root5200.append(nodes4454);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4362, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4455 = $("<span>");
      root5207.append(nodes4455);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5208 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5208); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4455;
        nodes4455 = node.contents();
        oldNodes.replaceWith(nodes4455);
      }));
      callback(root5207); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4454;
      nodes4454 = node.contents();
      oldNodes.replaceWith(nodes4454);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp4454 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4363 = mobl.ref(result__);
    
    var nodes4456 = $("<span>");
    root5200.append(nodes4456);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4363, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4457 = $("<span>");
      root5209.append(nodes4457);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5210 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5210); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4457;
        nodes4457 = node.contents();
        oldNodes.replaceWith(nodes4457);
      }));
      callback(root5209); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4456;
      nodes4456 = node.contents();
      oldNodes.replaceWith(nodes4456);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp4453 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4364 = mobl.ref(result__);
    
    var nodes4458 = $("<span>");
    root5200.append(nodes4458);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4364, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4459 = $("<span>");
      root5211.append(nodes4459);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5212 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5212); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4459;
        nodes4459 = node.contents();
        oldNodes.replaceWith(nodes4459);
      }));
      callback(root5211); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4458;
      nodes4458 = node.contents();
      oldNodes.replaceWith(nodes4458);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp4452 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4365 = mobl.ref(result__);
    
    var nodes4460 = $("<span>");
    root5200.append(nodes4460);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4365, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4461 = $("<span>");
      root5213.append(nodes4461);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5214 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5214); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4461;
        nodes4461 = node.contents();
        oldNodes.replaceWith(nodes4461);
      }));
      callback(root5213); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4460;
      nodes4460 = node.contents();
      oldNodes.replaceWith(nodes4460);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp4451 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4366 = mobl.ref(result__);
    
    var nodes4462 = $("<span>");
    root5200.append(nodes4462);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4366, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4463 = $("<span>");
      root5215.append(nodes4463);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5216); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4463;
        nodes4463 = node.contents();
        oldNodes.replaceWith(nodes4463);
      }));
      callback(root5215); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4462;
      nodes4462 = node.contents();
      oldNodes.replaceWith(nodes4462);
    }));
    callback(root5200); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4447;
    nodes4447 = node.contents();
    oldNodes.replaceWith(nodes4447);
  }));
  callback(root5199); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root5217 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes4464 = $("<span>");
  root5217.append(nodes4464);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5218 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4368 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4367 = mobl.ref(result__);
    
    var nodes4465 = $("<span>");
    root5218.append(nodes4465);
    subs__.addSub((ui.backButton)(tmp4367, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4368, function(_, callback) {
      var root5219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5219); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4465;
      nodes4465 = node.contents();
      oldNodes.replaceWith(nodes4465);
    }));
    callback(root5218); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4464;
    nodes4464 = node.contents();
    oldNodes.replaceWith(nodes4464);
  }));
  var nodes4466 = $("<span>");
  root5217.append(nodes4466);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5220 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp4466 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4369 = mobl.ref(result__);
    
    var nodes4467 = $("<span>");
    root5220.append(nodes4467);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4369, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4468 = $("<span>");
      root5221.append(nodes4468);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5222 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5222); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4468;
        nodes4468 = node.contents();
        oldNodes.replaceWith(nodes4468);
      }));
      callback(root5221); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4467;
      nodes4467 = node.contents();
      oldNodes.replaceWith(nodes4467);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp4465 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4370 = mobl.ref(result__);
    
    var nodes4469 = $("<span>");
    root5220.append(nodes4469);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4370, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4470 = $("<span>");
      root5223.append(nodes4470);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5224 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5224); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4470;
        nodes4470 = node.contents();
        oldNodes.replaceWith(nodes4470);
      }));
      callback(root5223); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4469;
      nodes4469 = node.contents();
      oldNodes.replaceWith(nodes4469);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp4464 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4371 = mobl.ref(result__);
    
    var nodes4471 = $("<span>");
    root5220.append(nodes4471);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4371, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4472 = $("<span>");
      root5225.append(nodes4472);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5226 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5226); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4472;
        nodes4472 = node.contents();
        oldNodes.replaceWith(nodes4472);
      }));
      callback(root5225); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4471;
      nodes4471 = node.contents();
      oldNodes.replaceWith(nodes4471);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp4463 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4372 = mobl.ref(result__);
    
    var nodes4473 = $("<span>");
    root5220.append(nodes4473);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4372, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4474 = $("<span>");
      root5227.append(nodes4474);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5228); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4474;
        nodes4474 = node.contents();
        oldNodes.replaceWith(nodes4474);
      }));
      callback(root5227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4473;
      nodes4473 = node.contents();
      oldNodes.replaceWith(nodes4473);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp4462 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4373 = mobl.ref(result__);
    
    var nodes4475 = $("<span>");
    root5220.append(nodes4475);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4373, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4476 = $("<span>");
      root5229.append(nodes4476);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5230 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5230); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4476;
        nodes4476 = node.contents();
        oldNodes.replaceWith(nodes4476);
      }));
      callback(root5229); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4475;
      nodes4475 = node.contents();
      oldNodes.replaceWith(nodes4475);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp4461 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4374 = mobl.ref(result__);
    
    var nodes4477 = $("<span>");
    root5220.append(nodes4477);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4374, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4478 = $("<span>");
      root5231.append(nodes4478);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5232 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5232); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4478;
        nodes4478 = node.contents();
        oldNodes.replaceWith(nodes4478);
      }));
      callback(root5231); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4477;
      nodes4477 = node.contents();
      oldNodes.replaceWith(nodes4477);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp4460 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4375 = mobl.ref(result__);
    
    var nodes4479 = $("<span>");
    root5220.append(nodes4479);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4375, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4480 = $("<span>");
      root5233.append(nodes4480);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5234); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4480;
        nodes4480 = node.contents();
        oldNodes.replaceWith(nodes4480);
      }));
      callback(root5233); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4479;
      nodes4479 = node.contents();
      oldNodes.replaceWith(nodes4479);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp4459 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4376 = mobl.ref(result__);
    
    var nodes4481 = $("<span>");
    root5220.append(nodes4481);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4376, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4482 = $("<span>");
      root5235.append(nodes4482);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5236 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5236); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4482;
        nodes4482 = node.contents();
        oldNodes.replaceWith(nodes4482);
      }));
      callback(root5235); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4481;
      nodes4481 = node.contents();
      oldNodes.replaceWith(nodes4481);
    }));
    callback(root5220); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4466;
    nodes4466 = node.contents();
    oldNodes.replaceWith(nodes4466);
  }));
  callback(root5217); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root5237 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes4483 = $("<span>");
  root5237.append(nodes4483);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5238 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4378 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4377 = mobl.ref(result__);
    
    var nodes4484 = $("<span>");
    root5238.append(nodes4484);
    subs__.addSub((ui.backButton)(tmp4377, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4378, function(_, callback) {
      var root5239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5239); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4484;
      nodes4484 = node.contents();
      oldNodes.replaceWith(nodes4484);
    }));
    callback(root5238); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4483;
    nodes4483 = node.contents();
    oldNodes.replaceWith(nodes4483);
  }));
  var nodes4485 = $("<span>");
  root5237.append(nodes4485);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5240 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp4471 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4379 = mobl.ref(result__);
    
    var nodes4486 = $("<span>");
    root5240.append(nodes4486);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4379, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4487 = $("<span>");
      root5241.append(nodes4487);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4487;
        nodes4487 = node.contents();
        oldNodes.replaceWith(nodes4487);
      }));
      callback(root5241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4486;
      nodes4486 = node.contents();
      oldNodes.replaceWith(nodes4486);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp4470 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4380 = mobl.ref(result__);
    
    var nodes4488 = $("<span>");
    root5240.append(nodes4488);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4380, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4489 = $("<span>");
      root5243.append(nodes4489);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4489;
        nodes4489 = node.contents();
        oldNodes.replaceWith(nodes4489);
      }));
      callback(root5243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4488;
      nodes4488 = node.contents();
      oldNodes.replaceWith(nodes4488);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp4469 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4381 = mobl.ref(result__);
    
    var nodes4490 = $("<span>");
    root5240.append(nodes4490);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4381, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4491 = $("<span>");
      root5245.append(nodes4491);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4491;
        nodes4491 = node.contents();
        oldNodes.replaceWith(nodes4491);
      }));
      callback(root5245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4490;
      nodes4490 = node.contents();
      oldNodes.replaceWith(nodes4490);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp4468 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4382 = mobl.ref(result__);
    
    var nodes4492 = $("<span>");
    root5240.append(nodes4492);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4382, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4493 = $("<span>");
      root5247.append(nodes4493);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4493;
        nodes4493 = node.contents();
        oldNodes.replaceWith(nodes4493);
      }));
      callback(root5247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4492;
      nodes4492 = node.contents();
      oldNodes.replaceWith(nodes4492);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp4467 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4383 = mobl.ref(result__);
    
    var nodes4494 = $("<span>");
    root5240.append(nodes4494);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4383, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5249 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4495 = $("<span>");
      root5249.append(nodes4495);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5250); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4495;
        nodes4495 = node.contents();
        oldNodes.replaceWith(nodes4495);
      }));
      callback(root5249); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4494;
      nodes4494 = node.contents();
      oldNodes.replaceWith(nodes4494);
    }));
    callback(root5240); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4485;
    nodes4485 = node.contents();
    oldNodes.replaceWith(nodes4485);
  }));
  callback(root5237); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root5251 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes4496 = $("<span>");
  root5251.append(nodes4496);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5252 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4385 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4384 = mobl.ref(result__);
    
    var nodes4497 = $("<span>");
    root5252.append(nodes4497);
    subs__.addSub((ui.backButton)(tmp4384, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4385, function(_, callback) {
      var root5253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5253); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4497;
      nodes4497 = node.contents();
      oldNodes.replaceWith(nodes4497);
    }));
    callback(root5252); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4496;
    nodes4496 = node.contents();
    oldNodes.replaceWith(nodes4496);
  }));
  var nodes4498 = $("<span>");
  root5251.append(nodes4498);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5254 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp4474 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4386 = mobl.ref(result__);
    
    var nodes4499 = $("<span>");
    root5254.append(nodes4499);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4386, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4500 = $("<span>");
      root5255.append(nodes4500);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5256); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4500;
        nodes4500 = node.contents();
        oldNodes.replaceWith(nodes4500);
      }));
      callback(root5255); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4499;
      nodes4499 = node.contents();
      oldNodes.replaceWith(nodes4499);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp4473 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4387 = mobl.ref(result__);
    
    var nodes4501 = $("<span>");
    root5254.append(nodes4501);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4387, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4502 = $("<span>");
      root5257.append(nodes4502);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4502;
        nodes4502 = node.contents();
        oldNodes.replaceWith(nodes4502);
      }));
      callback(root5257); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4501;
      nodes4501 = node.contents();
      oldNodes.replaceWith(nodes4501);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp4472 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4388 = mobl.ref(result__);
    
    var nodes4503 = $("<span>");
    root5254.append(nodes4503);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4388, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4504 = $("<span>");
      root5259.append(nodes4504);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5260 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5260); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4504;
        nodes4504 = node.contents();
        oldNodes.replaceWith(nodes4504);
      }));
      callback(root5259); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4503;
      nodes4503 = node.contents();
      oldNodes.replaceWith(nodes4503);
    }));
    callback(root5254); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4498;
    nodes4498 = node.contents();
    oldNodes.replaceWith(nodes4498);
  }));
  callback(root5251); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root5261 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes4505 = $("<span>");
  root5261.append(nodes4505);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5262 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4390 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4389 = mobl.ref(result__);
    
    var nodes4506 = $("<span>");
    root5262.append(nodes4506);
    subs__.addSub((ui.backButton)(tmp4389, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4390, function(_, callback) {
      var root5263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5263); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4506;
      nodes4506 = node.contents();
      oldNodes.replaceWith(nodes4506);
    }));
    callback(root5262); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4505;
    nodes4505 = node.contents();
    oldNodes.replaceWith(nodes4505);
  }));
  var nodes4507 = $("<span>");
  root5261.append(nodes4507);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5264 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp4478 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4391 = mobl.ref(result__);
    
    var nodes4508 = $("<span>");
    root5264.append(nodes4508);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4391, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4509 = $("<span>");
      root5265.append(nodes4509);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5266 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5266); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4509;
        nodes4509 = node.contents();
        oldNodes.replaceWith(nodes4509);
      }));
      callback(root5265); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4508;
      nodes4508 = node.contents();
      oldNodes.replaceWith(nodes4508);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp4477 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4392 = mobl.ref(result__);
    
    var nodes4510 = $("<span>");
    root5264.append(nodes4510);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4392, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4511 = $("<span>");
      root5267.append(nodes4511);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5268 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5268); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4511;
        nodes4511 = node.contents();
        oldNodes.replaceWith(nodes4511);
      }));
      callback(root5267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4510;
      nodes4510 = node.contents();
      oldNodes.replaceWith(nodes4510);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp4476 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4393 = mobl.ref(result__);
    
    var nodes4512 = $("<span>");
    root5264.append(nodes4512);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4393, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4513 = $("<span>");
      root5269.append(nodes4513);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4513;
        nodes4513 = node.contents();
        oldNodes.replaceWith(nodes4513);
      }));
      callback(root5269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4512;
      nodes4512 = node.contents();
      oldNodes.replaceWith(nodes4512);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp4475 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4394 = mobl.ref(result__);
    
    var nodes4514 = $("<span>");
    root5264.append(nodes4514);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4394, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4515 = $("<span>");
      root5271.append(nodes4515);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4515;
        nodes4515 = node.contents();
        oldNodes.replaceWith(nodes4515);
      }));
      callback(root5271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4514;
      nodes4514 = node.contents();
      oldNodes.replaceWith(nodes4514);
    }));
    callback(root5264); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4507;
    nodes4507 = node.contents();
    oldNodes.replaceWith(nodes4507);
  }));
  callback(root5261); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root5273 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes4516 = $("<span>");
  root5273.append(nodes4516);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5274 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4396 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4395 = mobl.ref(result__);
    
    var nodes4517 = $("<span>");
    root5274.append(nodes4517);
    subs__.addSub((ui.backButton)(tmp4395, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4396, function(_, callback) {
      var root5275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5275); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4517;
      nodes4517 = node.contents();
      oldNodes.replaceWith(nodes4517);
    }));
    callback(root5274); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4516;
    nodes4516 = node.contents();
    oldNodes.replaceWith(nodes4516);
  }));
  var nodes4518 = $("<span>");
  root5273.append(nodes4518);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp4480 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4397 = mobl.ref(result__);
    
    var nodes4519 = $("<span>");
    root5276.append(nodes4519);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4397, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5277 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4520 = $("<span>");
      root5277.append(nodes4520);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5278 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5278); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4520;
        nodes4520 = node.contents();
        oldNodes.replaceWith(nodes4520);
      }));
      callback(root5277); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4519;
      nodes4519 = node.contents();
      oldNodes.replaceWith(nodes4519);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp4479 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4398 = mobl.ref(result__);
    
    var nodes4521 = $("<span>");
    root5276.append(nodes4521);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4398, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4522 = $("<span>");
      root5279.append(nodes4522);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4522;
        nodes4522 = node.contents();
        oldNodes.replaceWith(nodes4522);
      }));
      callback(root5279); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4521;
      nodes4521 = node.contents();
      oldNodes.replaceWith(nodes4521);
    }));
    callback(root5276); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4518;
    nodes4518 = node.contents();
    oldNodes.replaceWith(nodes4518);
  }));
  callback(root5273); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root5281 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes4523 = $("<span>");
  root5281.append(nodes4523);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5282 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4400 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4399 = mobl.ref(result__);
    
    var nodes4524 = $("<span>");
    root5282.append(nodes4524);
    subs__.addSub((ui.backButton)(tmp4399, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4400, function(_, callback) {
      var root5283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5283); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4524;
      nodes4524 = node.contents();
      oldNodes.replaceWith(nodes4524);
    }));
    callback(root5282); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4523;
    nodes4523 = node.contents();
    oldNodes.replaceWith(nodes4523);
  }));
  var nodes4525 = $("<span>");
  root5281.append(nodes4525);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5284 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp4485 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4401 = mobl.ref(result__);
    
    var nodes4526 = $("<span>");
    root5284.append(nodes4526);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4401, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4527 = $("<span>");
      root5285.append(nodes4527);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5286 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5286); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4527;
        nodes4527 = node.contents();
        oldNodes.replaceWith(nodes4527);
      }));
      callback(root5285); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4526;
      nodes4526 = node.contents();
      oldNodes.replaceWith(nodes4526);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp4484 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4402 = mobl.ref(result__);
    
    var nodes4528 = $("<span>");
    root5284.append(nodes4528);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4402, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4529 = $("<span>");
      root5287.append(nodes4529);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5288 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5288); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4529;
        nodes4529 = node.contents();
        oldNodes.replaceWith(nodes4529);
      }));
      callback(root5287); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4528;
      nodes4528 = node.contents();
      oldNodes.replaceWith(nodes4528);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp4483 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4403 = mobl.ref(result__);
    
    var nodes4530 = $("<span>");
    root5284.append(nodes4530);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4403, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4531 = $("<span>");
      root5289.append(nodes4531);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5290 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5290); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4531;
        nodes4531 = node.contents();
        oldNodes.replaceWith(nodes4531);
      }));
      callback(root5289); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4530;
      nodes4530 = node.contents();
      oldNodes.replaceWith(nodes4530);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp4482 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4404 = mobl.ref(result__);
    
    var nodes4532 = $("<span>");
    root5284.append(nodes4532);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4404, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4533 = $("<span>");
      root5291.append(nodes4533);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5292 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5292); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4533;
        nodes4533 = node.contents();
        oldNodes.replaceWith(nodes4533);
      }));
      callback(root5291); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4532;
      nodes4532 = node.contents();
      oldNodes.replaceWith(nodes4532);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp4481 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4405 = mobl.ref(result__);
    
    var nodes4534 = $("<span>");
    root5284.append(nodes4534);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4405, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4535 = $("<span>");
      root5293.append(nodes4535);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5294 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5294); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4535;
        nodes4535 = node.contents();
        oldNodes.replaceWith(nodes4535);
      }));
      callback(root5293); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4534;
      nodes4534 = node.contents();
      oldNodes.replaceWith(nodes4534);
    }));
    callback(root5284); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4525;
    nodes4525 = node.contents();
    oldNodes.replaceWith(nodes4525);
  }));
  callback(root5281); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root5295 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes4536 = $("<span>");
  root5295.append(nodes4536);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4407 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4406 = mobl.ref(result__);
    
    var nodes4537 = $("<span>");
    root5296.append(nodes4537);
    subs__.addSub((ui.backButton)(tmp4406, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4407, function(_, callback) {
      var root5297 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5297); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4537;
      nodes4537 = node.contents();
      oldNodes.replaceWith(nodes4537);
    }));
    callback(root5296); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4536;
    nodes4536 = node.contents();
    oldNodes.replaceWith(nodes4536);
  }));
  var nodes4538 = $("<span>");
  root5295.append(nodes4538);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5298 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp4488 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4408 = mobl.ref(result__);
    
    var nodes4539 = $("<span>");
    root5298.append(nodes4539);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4408, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4540 = $("<span>");
      root5299.append(nodes4540);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5300); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4540;
        nodes4540 = node.contents();
        oldNodes.replaceWith(nodes4540);
      }));
      callback(root5299); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4539;
      nodes4539 = node.contents();
      oldNodes.replaceWith(nodes4539);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp4487 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4409 = mobl.ref(result__);
    
    var nodes4541 = $("<span>");
    root5298.append(nodes4541);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4409, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4542 = $("<span>");
      root5301.append(nodes4542);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5302 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5302); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4542;
        nodes4542 = node.contents();
        oldNodes.replaceWith(nodes4542);
      }));
      callback(root5301); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4541;
      nodes4541 = node.contents();
      oldNodes.replaceWith(nodes4541);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp4486 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4410 = mobl.ref(result__);
    
    var nodes4543 = $("<span>");
    root5298.append(nodes4543);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4410, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4544 = $("<span>");
      root5303.append(nodes4544);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5304 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5304); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4544;
        nodes4544 = node.contents();
        oldNodes.replaceWith(nodes4544);
      }));
      callback(root5303); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4543;
      nodes4543 = node.contents();
      oldNodes.replaceWith(nodes4543);
    }));
    callback(root5298); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4538;
    nodes4538 = node.contents();
    oldNodes.replaceWith(nodes4538);
  }));
  callback(root5295); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root5305 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes4545 = $("<span>");
  root5305.append(nodes4545);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4412 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4411 = mobl.ref(result__);
    
    var nodes4546 = $("<span>");
    root5306.append(nodes4546);
    subs__.addSub((ui.backButton)(tmp4411, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4412, function(_, callback) {
      var root5307 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5307); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4546;
      nodes4546 = node.contents();
      oldNodes.replaceWith(nodes4546);
    }));
    callback(root5306); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4545;
    nodes4545 = node.contents();
    oldNodes.replaceWith(nodes4545);
  }));
  var nodes4547 = $("<span>");
  root5305.append(nodes4547);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5308 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp4489 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4413 = mobl.ref(result__);
    
    var nodes4548 = $("<span>");
    root5308.append(nodes4548);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4413, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5309 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4549 = $("<span>");
      root5309.append(nodes4549);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5310 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5310); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4549;
        nodes4549 = node.contents();
        oldNodes.replaceWith(nodes4549);
      }));
      callback(root5309); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4548;
      nodes4548 = node.contents();
      oldNodes.replaceWith(nodes4548);
    }));
    callback(root5308); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4547;
    nodes4547 = node.contents();
    oldNodes.replaceWith(nodes4547);
  }));
  callback(root5305); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root5311 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4550 = $("<span>");
  root5311.append(nodes4550);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5312 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp4502 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4414 = mobl.ref(result__);
    
    var nodes4551 = $("<span>");
    root5312.append(nodes4551);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4414, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5313 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4552 = $("<span>");
      root5313.append(nodes4552);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5314 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5314); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4552;
        nodes4552 = node.contents();
        oldNodes.replaceWith(nodes4552);
      }));
      callback(root5313); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4551;
      nodes4551 = node.contents();
      oldNodes.replaceWith(nodes4551);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp4501 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4415 = mobl.ref(result__);
    
    var nodes4553 = $("<span>");
    root5312.append(nodes4553);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4415, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4554 = $("<span>");
      root5315.append(nodes4554);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5316 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5316); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4554;
        nodes4554 = node.contents();
        oldNodes.replaceWith(nodes4554);
      }));
      callback(root5315); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4553;
      nodes4553 = node.contents();
      oldNodes.replaceWith(nodes4553);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp4500 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4416 = mobl.ref(result__);
    
    var nodes4555 = $("<span>");
    root5312.append(nodes4555);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4416, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5317 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4556 = $("<span>");
      root5317.append(nodes4556);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5318 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5318); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4556;
        nodes4556 = node.contents();
        oldNodes.replaceWith(nodes4556);
      }));
      callback(root5317); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4555;
      nodes4555 = node.contents();
      oldNodes.replaceWith(nodes4555);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp4499 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4417 = mobl.ref(result__);
    
    var nodes4557 = $("<span>");
    root5312.append(nodes4557);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4417, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5319 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4558 = $("<span>");
      root5319.append(nodes4558);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5320 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5320); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4558;
        nodes4558 = node.contents();
        oldNodes.replaceWith(nodes4558);
      }));
      callback(root5319); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4557;
      nodes4557 = node.contents();
      oldNodes.replaceWith(nodes4557);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp4498 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4418 = mobl.ref(result__);
    
    var nodes4559 = $("<span>");
    root5312.append(nodes4559);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4418, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5321 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4560 = $("<span>");
      root5321.append(nodes4560);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5322 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5322); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4560;
        nodes4560 = node.contents();
        oldNodes.replaceWith(nodes4560);
      }));
      callback(root5321); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4559;
      nodes4559 = node.contents();
      oldNodes.replaceWith(nodes4559);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp4497 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4419 = mobl.ref(result__);
    
    var nodes4561 = $("<span>");
    root5312.append(nodes4561);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4419, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5323 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4562 = $("<span>");
      root5323.append(nodes4562);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5324 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5324); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4562;
        nodes4562 = node.contents();
        oldNodes.replaceWith(nodes4562);
      }));
      callback(root5323); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4561;
      nodes4561 = node.contents();
      oldNodes.replaceWith(nodes4561);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp4496 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4420 = mobl.ref(result__);
    
    var nodes4563 = $("<span>");
    root5312.append(nodes4563);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4420, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5325 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4564 = $("<span>");
      root5325.append(nodes4564);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5326 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5326); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4564;
        nodes4564 = node.contents();
        oldNodes.replaceWith(nodes4564);
      }));
      callback(root5325); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4563;
      nodes4563 = node.contents();
      oldNodes.replaceWith(nodes4563);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp4495 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4421 = mobl.ref(result__);
    
    var nodes4565 = $("<span>");
    root5312.append(nodes4565);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4421, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5327 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4566 = $("<span>");
      root5327.append(nodes4566);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5328 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5328); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4566;
        nodes4566 = node.contents();
        oldNodes.replaceWith(nodes4566);
      }));
      callback(root5327); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4565;
      nodes4565 = node.contents();
      oldNodes.replaceWith(nodes4565);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp4494 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4422 = mobl.ref(result__);
    
    var nodes4567 = $("<span>");
    root5312.append(nodes4567);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4422, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5329 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4568 = $("<span>");
      root5329.append(nodes4568);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5330 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5330); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4568;
        nodes4568 = node.contents();
        oldNodes.replaceWith(nodes4568);
      }));
      callback(root5329); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4567;
      nodes4567 = node.contents();
      oldNodes.replaceWith(nodes4567);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp4493 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4423 = mobl.ref(result__);
    
    var nodes4569 = $("<span>");
    root5312.append(nodes4569);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4423, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5331 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4570 = $("<span>");
      root5331.append(nodes4570);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5332 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5332); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4570;
        nodes4570 = node.contents();
        oldNodes.replaceWith(nodes4570);
      }));
      callback(root5331); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4569;
      nodes4569 = node.contents();
      oldNodes.replaceWith(nodes4569);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp4492 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4424 = mobl.ref(result__);
    
    var nodes4571 = $("<span>");
    root5312.append(nodes4571);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4424, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5333 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4572 = $("<span>");
      root5333.append(nodes4572);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5334 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5334); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4572;
        nodes4572 = node.contents();
        oldNodes.replaceWith(nodes4572);
      }));
      callback(root5333); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4571;
      nodes4571 = node.contents();
      oldNodes.replaceWith(nodes4571);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp4491 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4425 = mobl.ref(result__);
    
    var nodes4573 = $("<span>");
    root5312.append(nodes4573);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4425, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5335 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4574 = $("<span>");
      root5335.append(nodes4574);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5336 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5336); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4574;
        nodes4574 = node.contents();
        oldNodes.replaceWith(nodes4574);
      }));
      callback(root5335); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4573;
      nodes4573 = node.contents();
      oldNodes.replaceWith(nodes4573);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp4490 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4426 = mobl.ref(result__);
    
    var nodes4575 = $("<span>");
    root5312.append(nodes4575);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4426, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5337 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4576 = $("<span>");
      root5337.append(nodes4576);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5338 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5338); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4576;
        nodes4576 = node.contents();
        oldNodes.replaceWith(nodes4576);
      }));
      callback(root5337); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4575;
      nodes4575 = node.contents();
      oldNodes.replaceWith(nodes4575);
    }));
    callback(root5312); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4550;
    nodes4550 = node.contents();
    oldNodes.replaceWith(nodes4550);
  }));
  callback(root5311); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root5339 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4577 = $("<span>");
  root5339.append(nodes4577);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5340 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp4508 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4427 = mobl.ref(result__);
    
    var nodes4578 = $("<span>");
    root5340.append(nodes4578);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4427, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5341 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4579 = $("<span>");
      root5341.append(nodes4579);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5342 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5342); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4579;
        nodes4579 = node.contents();
        oldNodes.replaceWith(nodes4579);
      }));
      callback(root5341); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4578;
      nodes4578 = node.contents();
      oldNodes.replaceWith(nodes4578);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp4507 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4428 = mobl.ref(result__);
    
    var nodes4580 = $("<span>");
    root5340.append(nodes4580);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4428, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5343 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4581 = $("<span>");
      root5343.append(nodes4581);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5344 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5344); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4581;
        nodes4581 = node.contents();
        oldNodes.replaceWith(nodes4581);
      }));
      callback(root5343); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4580;
      nodes4580 = node.contents();
      oldNodes.replaceWith(nodes4580);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp4506 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4429 = mobl.ref(result__);
    
    var nodes4582 = $("<span>");
    root5340.append(nodes4582);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4429, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5345 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4583 = $("<span>");
      root5345.append(nodes4583);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5346 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5346); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4583;
        nodes4583 = node.contents();
        oldNodes.replaceWith(nodes4583);
      }));
      callback(root5345); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4582;
      nodes4582 = node.contents();
      oldNodes.replaceWith(nodes4582);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp4505 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4430 = mobl.ref(result__);
    
    var nodes4584 = $("<span>");
    root5340.append(nodes4584);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4430, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5347 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4585 = $("<span>");
      root5347.append(nodes4585);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5348 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5348); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4585;
        nodes4585 = node.contents();
        oldNodes.replaceWith(nodes4585);
      }));
      callback(root5347); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4584;
      nodes4584 = node.contents();
      oldNodes.replaceWith(nodes4584);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp4504 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4431 = mobl.ref(result__);
    
    var nodes4586 = $("<span>");
    root5340.append(nodes4586);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4431, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5349 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4587 = $("<span>");
      root5349.append(nodes4587);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5350 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5350); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4587;
        nodes4587 = node.contents();
        oldNodes.replaceWith(nodes4587);
      }));
      callback(root5349); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4586;
      nodes4586 = node.contents();
      oldNodes.replaceWith(nodes4586);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp4503 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4432 = mobl.ref(result__);
    
    var nodes4588 = $("<span>");
    root5340.append(nodes4588);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4432, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5351 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4589 = $("<span>");
      root5351.append(nodes4589);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5352 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5352); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4589;
        nodes4589 = node.contents();
        oldNodes.replaceWith(nodes4589);
      }));
      callback(root5351); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4588;
      nodes4588 = node.contents();
      oldNodes.replaceWith(nodes4588);
    }));
    callback(root5340); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4577;
    nodes4577 = node.contents();
    oldNodes.replaceWith(nodes4577);
  }));
  callback(root5339); return subs__;
  
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
  var root5353 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node831 = $("<div>");
  
  var ref810 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref810.get() !== null) {
    node831.attr('class', ref810.get());
    subs__.addSub(ref810.addEventListener('change', function(_, ref, val) {
      node831.attr('class', val);
    }));
    
  }
  subs__.addSub(ref810.rebind());
  
  var val370 = onclick.get();
  if(val370 !== null) {
    subs__.addSub(mobl.domBind(node831, 'tap', val370));
  }
  
  
  var node832 = $("<div>");
  
  var ref809 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref809.get() !== null) {
    node832.attr('class', ref809.get());
    subs__.addSub(ref809.addEventListener('change', function(_, ref, val) {
      node832.attr('class', val);
    }));
    
  }
  subs__.addSub(ref809.rebind());
  
  
  var node833 = $("<div>");
  
  var ref807 = text;
  node833.text(""+ref807.get());
  var ignore149 = false;
  subs__.addSub(ref807.addEventListener('change', function(_, ref, val) {
    if(ignore149) return;
    node833.text(""+val);
  }));
  subs__.addSub(ref807.rebind());
  
  
  var ref808 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref808.get() !== null) {
    node833.attr('class', ref808.get());
    subs__.addSub(ref808.addEventListener('change', function(_, ref, val) {
      node833.attr('class', val);
    }));
    
  }
  subs__.addSub(ref808.rebind());
  
  node832.append(node833);
  node831.append(node832);
  var nodes4590 = $("<span>");
  node831.append(nodes4590);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl321();
  }));
  
  function renderControl321() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5354 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5354); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4590;
      nodes4590 = node.contents();
      oldNodes.replaceWith(nodes4590);
    }));
  }
  renderControl321();
  root5353.append(node831);
  callback(root5353); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp4509 = result__;
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
  var root5355 = $("<span>");
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
  var tmp4436 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp4435 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp4435.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp4435.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp4435.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes4591 = $("<span>");
  root5355.append(nodes4591);
  subs__.addSub((mobl.block)(tmp4435, mobl.ref(null), tmp4436, mobl.ref(null), function(_, callback) {
    var root5356 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp4433 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp4433.set("A" + number.get() + ". ");
    }));
    
    var nodes4592 = $("<span>");
    root5356.append(nodes4592);
    subs__.addSub((mobl.label)(tmp4433, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5357 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5357); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4592;
      nodes4592 = node.contents();
      oldNodes.replaceWith(nodes4592);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp4434 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp4434.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node834 = $("<span>");
    root5356.append(node834);
    var condSubs196 = new mobl.CompSubscription();
    subs__.addSub(condSubs196);
    var oldValue196;
    var renderCond196 = function() {
      var value496 = tmp4434.get();
      if(oldValue196 === value496) return;
      oldValue196 = value496;
      var subs__ = condSubs196;
      subs__.unsubscribe();
      node834.empty();
      if(value496) {
        
        var node835 = $("<span>");
        
        var ref811 = mobl.ref("answer-block-" + number.get());
        if(ref811.get() !== null) {
          node835.attr('id', ref811.get());
          subs__.addSub(ref811.addEventListener('change', function(_, ref, val) {
            node835.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node835.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref811.rebind());
        
        var nodes4593 = $("<span>");
        node835.append(nodes4593);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root5358 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5358); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4593;
          nodes4593 = node.contents();
          oldNodes.replaceWith(nodes4593);
        }));
        node834.append(node835);
        
        
        
      } else {
        var nodes4594 = $("<span>");
        node834.append(nodes4594);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root5359 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5359); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4594;
          nodes4594 = node.contents();
          oldNodes.replaceWith(nodes4594);
        }));
        
        
      }
    };
    renderCond196();
    subs__.addSub(tmp4434.addEventListener('change', function() {
      renderCond196();
    }));
    
    callback(root5356); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4591;
    nodes4591 = node.contents();
    oldNodes.replaceWith(nodes4591);
  }));
  var nodes4595 = $("<span>");
  root5355.append(nodes4595);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5360 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp4510 = result__;
      var nodes4596 = $("<span>");
      root5360.append(nodes4596);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5361 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5361); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4596;
        nodes4596 = node.contents();
        oldNodes.replaceWith(nodes4596);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp4437 = mobl.ref(result__);
      
      var nodes4597 = $("<span>");
      root5360.append(nodes4597);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp4437, function(_, callback) {
        var root5362 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5362); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4597;
        nodes4597 = node.contents();
        oldNodes.replaceWith(nodes4597);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp4438 = mobl.ref(result__);
      
      var nodes4598 = $("<span>");
      root5360.append(nodes4598);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp4438, function(_, callback) {
        var root5363 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5363); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4598;
        nodes4598 = node.contents();
        oldNodes.replaceWith(nodes4598);
      }));
      callback(root5360); return subs__;
      
      
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes4595;
    nodes4595 = node.contents();
    oldNodes.replaceWith(nodes4595);
  }));
  callback(root5355); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp4511 = result__;
    var result__ = tmp4511;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp4512 = result__;
        var result__ = tmp4512;
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
  var root5364 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp4519 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp4440 = mobl.ref(result__);
  
  var nodes4599 = $("<span>");
  root5364.append(nodes4599);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp4440, function(_, callback) {
    var root5365 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp4513 = result__;
                       var result__ = tmp4513;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp4514 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp4439 = mobl.ref(result__);
    
    var nodes4600 = $("<span>");
    root5365.append(nodes4600);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp4439, function(_, callback) {
      var root5366 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5366); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4600;
      nodes4600 = node.contents();
      oldNodes.replaceWith(nodes4600);
    }));
    callback(root5365); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4599;
    nodes4599 = node.contents();
    oldNodes.replaceWith(nodes4599);
  }));
  var nodes4601 = $("<span>");
  root5364.append(nodes4601);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5367 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp4518 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4442 = mobl.ref(result__);
    
    var nodes4602 = $("<span>");
    root5367.append(nodes4602);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp4442, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root5368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp4441 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp4441.set("Q" + number.get() + ". ");
      }));
      
      var nodes4603 = $("<span>");
      root5368.append(nodes4603);
      subs__.addSub((mobl.html)(tmp4441, function(_, callback) {
        var root5369 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5369); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4603;
        nodes4603 = node.contents();
        oldNodes.replaceWith(nodes4603);
      }));
      
      var node836 = $("<span>");
      
      var ref812 = mobl.ref("question-block-" + number.get());
      if(ref812.get() !== null) {
        node836.attr('id', ref812.get());
        subs__.addSub(ref812.addEventListener('change', function(_, ref, val) {
          node836.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node836.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref812.rebind());
      
      var val371 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                      var tmp4515 = result__;
                      if(callback && callback.apply) callback(); return;
                    });
                  };
      if(val371 !== null) {
        subs__.addSub(mobl.domBind(node836, 'load', val371));
      }
      
      var nodes4604 = $("<span>");
      node836.append(nodes4604);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root5370 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5370); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4604;
        nodes4604 = node.contents();
        oldNodes.replaceWith(nodes4604);
      }));
      root5368.append(node836);
      callback(root5368); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4602;
      nodes4602 = node.contents();
      oldNodes.replaceWith(nodes4602);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp4517 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4444 = mobl.ref(result__);
    
    var nodes4605 = $("<span>");
    root5367.append(nodes4605);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4444, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root5371 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4606 = $("<span>");
      root5371.append(nodes4606);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5372 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp4516 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp4443 = mobl.ref(result__);
        
        var nodes4607 = $("<span>");
        root5372.append(nodes4607);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp4443, function(_, callback) {
          var root5373 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5373); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4607;
          nodes4607 = node.contents();
          oldNodes.replaceWith(nodes4607);
        }));
        callback(root5372); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4606;
        nodes4606 = node.contents();
        oldNodes.replaceWith(nodes4606);
      }));
      
      var node837 = $("<span>");
      root5371.append(node837);
      var condSubs197 = new mobl.CompSubscription();
      subs__.addSub(condSubs197);
      var oldValue197;
      var renderCond197 = function() {
        var value497 = qa.get().done;
        if(oldValue197 === value497) return;
        oldValue197 = value497;
        var subs__ = condSubs197;
        subs__.unsubscribe();
        node837.empty();
        if(value497) {
          var nodes4608 = $("<span>");
          node837.append(nodes4608);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root5374 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5374); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4608;
            nodes4608 = node.contents();
            oldNodes.replaceWith(nodes4608);
          }));
          
          
        } else {
          
        }
      };
      renderCond197();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond197();
      }));
      
      callback(root5371); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4605;
      nodes4605 = node.contents();
      oldNodes.replaceWith(nodes4605);
    }));
    callback(root5367); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4601;
    nodes4601 = node.contents();
    oldNodes.replaceWith(nodes4601);
  }));
  callback(root5364); return subs__;
  
  
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
  qas.list(function(coll612) {
    coll612 = coll612.reverse();
    function processOne162() {
      var item;
      item = coll612.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll612.length > 0) processOne162(); else rest162();
      
    }
    function rest162() {
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
    if(coll612.length > 0) processOne162(); else rest162();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll613) {
    coll613 = coll613.reverse();
    function processOne163() {
      var item;
      item = coll613.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll613.length > 0) processOne163(); else rest163();
      
    }
    function rest163() {
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
    if(coll613.length > 0) processOne163(); else rest163();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll614) {
    coll614 = coll614.reverse();
    function processOne164() {
      var item;
      item = coll614.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll614.length > 0) processOne164(); else rest164();
      
    }
    function rest164() {
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
    if(coll614.length > 0) processOne164(); else rest164();
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