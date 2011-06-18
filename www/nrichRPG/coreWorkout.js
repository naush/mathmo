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
    var tmp5903 = result__;
    var result__ = tmp5903;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp5904 = result__;
      var result__ = tmp5904;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp5905 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll4250) {
    coll4250 = coll4250.reverse();
    function processOne266() {
      var i;
      i = coll4250.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp5906 = result__;
        
        if(coll4250.length > 0) processOne266(); else rest266();
        
      });
    }
    function rest266() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll4250.length > 0) processOne266(); else rest266();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll4251) {
    coll4251 = coll4251.reverse();
    function processOne267() {
      var i;
      i = coll4251.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp5907 = result__;
          
          if(coll4251.length > 0) processOne267(); else rest267();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp5907 = result__;
            
            if(coll4251.length > 0) processOne267(); else rest267();
            
          });
        }
      }
    }
    function rest267() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll4251.length > 0) processOne267(); else rest267();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll4252) {
    coll4252 = coll4252.reverse();
    function processOne268() {
      var i;
      i = coll4252.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp5908 = result__;
        
        if(coll4252.length > 0) processOne268(); else rest268();
        
      });
    }
    function rest268() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll4252.length > 0) processOne268(); else rest268();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root8560 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6391 = $("<span>");
  root8560.append(nodes6391);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8561 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5916 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5809 = mobl.ref(result__);
    
    var nodes6392 = $("<span>");
    root8561.append(nodes6392);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5809, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6393 = $("<span>");
      root8562.append(nodes6393);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8563 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8563); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6393;
        nodes6393 = node.contents();
        oldNodes.replaceWith(nodes6393);
      }));
      callback(root8562); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6392;
      nodes6392 = node.contents();
      oldNodes.replaceWith(nodes6392);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5915 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5810 = mobl.ref(result__);
    
    var nodes6394 = $("<span>");
    root8561.append(nodes6394);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5810, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8564 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6395 = $("<span>");
      root8564.append(nodes6395);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8565 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8565); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6395;
        nodes6395 = node.contents();
        oldNodes.replaceWith(nodes6395);
      }));
      callback(root8564); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6394;
      nodes6394 = node.contents();
      oldNodes.replaceWith(nodes6394);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5914 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5811 = mobl.ref(result__);
    
    var nodes6396 = $("<span>");
    root8561.append(nodes6396);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5811, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6397 = $("<span>");
      root8566.append(nodes6397);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8567 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8567); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6397;
        nodes6397 = node.contents();
        oldNodes.replaceWith(nodes6397);
      }));
      callback(root8566); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6396;
      nodes6396 = node.contents();
      oldNodes.replaceWith(nodes6396);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5913 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5812 = mobl.ref(result__);
    
    var nodes6398 = $("<span>");
    root8561.append(nodes6398);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5812, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8568 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6399 = $("<span>");
      root8568.append(nodes6399);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8569 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8569); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6399;
        nodes6399 = node.contents();
        oldNodes.replaceWith(nodes6399);
      }));
      callback(root8568); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6398;
      nodes6398 = node.contents();
      oldNodes.replaceWith(nodes6398);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5912 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5813 = mobl.ref(result__);
    
    var nodes6400 = $("<span>");
    root8561.append(nodes6400);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5813, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8570 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6401 = $("<span>");
      root8570.append(nodes6401);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8571 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8571); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6401;
        nodes6401 = node.contents();
        oldNodes.replaceWith(nodes6401);
      }));
      callback(root8570); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6400;
      nodes6400 = node.contents();
      oldNodes.replaceWith(nodes6400);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5911 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5814 = mobl.ref(result__);
    
    var nodes6402 = $("<span>");
    root8561.append(nodes6402);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5814, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6403 = $("<span>");
      root8572.append(nodes6403);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8573 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8573); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6403;
        nodes6403 = node.contents();
        oldNodes.replaceWith(nodes6403);
      }));
      callback(root8572); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6402;
      nodes6402 = node.contents();
      oldNodes.replaceWith(nodes6402);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5910 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5815 = mobl.ref(result__);
    
    var nodes6404 = $("<span>");
    root8561.append(nodes6404);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5815, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6405 = $("<span>");
      root8574.append(nodes6405);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8575 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8575); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6405;
        nodes6405 = node.contents();
        oldNodes.replaceWith(nodes6405);
      }));
      callback(root8574); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6404;
      nodes6404 = node.contents();
      oldNodes.replaceWith(nodes6404);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5909 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5816 = mobl.ref(result__);
    
    var nodes6406 = $("<span>");
    root8561.append(nodes6406);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5816, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8576 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6407 = $("<span>");
      root8576.append(nodes6407);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8577 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8577); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6407;
        nodes6407 = node.contents();
        oldNodes.replaceWith(nodes6407);
      }));
      callback(root8576); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6406;
      nodes6406 = node.contents();
      oldNodes.replaceWith(nodes6406);
    }));
    callback(root8561); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6391;
    nodes6391 = node.contents();
    oldNodes.replaceWith(nodes6391);
  }));
  callback(root8560); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root8578 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes6408 = $("<span>");
  root8578.append(nodes6408);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8579 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5818 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5817 = mobl.ref(result__);
    
    var nodes6409 = $("<span>");
    root8579.append(nodes6409);
    subs__.addSub((ui.backButton)(tmp5817, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5818, function(_, callback) {
      var root8580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8580); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6409;
      nodes6409 = node.contents();
      oldNodes.replaceWith(nodes6409);
    }));
    callback(root8579); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6408;
    nodes6408 = node.contents();
    oldNodes.replaceWith(nodes6408);
  }));
  var nodes6410 = $("<span>");
  root8578.append(nodes6410);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8581 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp5924 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5819 = mobl.ref(result__);
    
    var nodes6411 = $("<span>");
    root8581.append(nodes6411);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5819, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6412 = $("<span>");
      root8582.append(nodes6412);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8583 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8583); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6412;
        nodes6412 = node.contents();
        oldNodes.replaceWith(nodes6412);
      }));
      callback(root8582); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6411;
      nodes6411 = node.contents();
      oldNodes.replaceWith(nodes6411);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp5923 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5820 = mobl.ref(result__);
    
    var nodes6413 = $("<span>");
    root8581.append(nodes6413);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5820, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6414 = $("<span>");
      root8584.append(nodes6414);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6414;
        nodes6414 = node.contents();
        oldNodes.replaceWith(nodes6414);
      }));
      callback(root8584); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6413;
      nodes6413 = node.contents();
      oldNodes.replaceWith(nodes6413);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp5922 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5821 = mobl.ref(result__);
    
    var nodes6415 = $("<span>");
    root8581.append(nodes6415);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5821, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6416 = $("<span>");
      root8586.append(nodes6416);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8587 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8587); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6416;
        nodes6416 = node.contents();
        oldNodes.replaceWith(nodes6416);
      }));
      callback(root8586); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6415;
      nodes6415 = node.contents();
      oldNodes.replaceWith(nodes6415);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp5921 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5822 = mobl.ref(result__);
    
    var nodes6417 = $("<span>");
    root8581.append(nodes6417);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5822, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8588 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6418 = $("<span>");
      root8588.append(nodes6418);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8589 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8589); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6418;
        nodes6418 = node.contents();
        oldNodes.replaceWith(nodes6418);
      }));
      callback(root8588); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6417;
      nodes6417 = node.contents();
      oldNodes.replaceWith(nodes6417);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp5920 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5823 = mobl.ref(result__);
    
    var nodes6419 = $("<span>");
    root8581.append(nodes6419);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5823, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6420 = $("<span>");
      root8590.append(nodes6420);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8591 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8591); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6420;
        nodes6420 = node.contents();
        oldNodes.replaceWith(nodes6420);
      }));
      callback(root8590); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6419;
      nodes6419 = node.contents();
      oldNodes.replaceWith(nodes6419);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp5919 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5824 = mobl.ref(result__);
    
    var nodes6421 = $("<span>");
    root8581.append(nodes6421);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5824, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8592 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6422 = $("<span>");
      root8592.append(nodes6422);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8593 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8593); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6422;
        nodes6422 = node.contents();
        oldNodes.replaceWith(nodes6422);
      }));
      callback(root8592); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6421;
      nodes6421 = node.contents();
      oldNodes.replaceWith(nodes6421);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp5918 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5825 = mobl.ref(result__);
    
    var nodes6423 = $("<span>");
    root8581.append(nodes6423);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5825, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8594 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6424 = $("<span>");
      root8594.append(nodes6424);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8595 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8595); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6424;
        nodes6424 = node.contents();
        oldNodes.replaceWith(nodes6424);
      }));
      callback(root8594); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6423;
      nodes6423 = node.contents();
      oldNodes.replaceWith(nodes6423);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp5917 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5826 = mobl.ref(result__);
    
    var nodes6425 = $("<span>");
    root8581.append(nodes6425);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5826, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8596 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6426 = $("<span>");
      root8596.append(nodes6426);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8597 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8597); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6426;
        nodes6426 = node.contents();
        oldNodes.replaceWith(nodes6426);
      }));
      callback(root8596); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6425;
      nodes6425 = node.contents();
      oldNodes.replaceWith(nodes6425);
    }));
    callback(root8581); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6410;
    nodes6410 = node.contents();
    oldNodes.replaceWith(nodes6410);
  }));
  callback(root8578); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root8598 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6427 = $("<span>");
  root8598.append(nodes6427);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8599 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5828 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5827 = mobl.ref(result__);
    
    var nodes6428 = $("<span>");
    root8599.append(nodes6428);
    subs__.addSub((ui.backButton)(tmp5827, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5828, function(_, callback) {
      var root8600 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8600); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6428;
      nodes6428 = node.contents();
      oldNodes.replaceWith(nodes6428);
    }));
    callback(root8599); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6427;
    nodes6427 = node.contents();
    oldNodes.replaceWith(nodes6427);
  }));
  var nodes6429 = $("<span>");
  root8598.append(nodes6429);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8601 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp5929 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5829 = mobl.ref(result__);
    
    var nodes6430 = $("<span>");
    root8601.append(nodes6430);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5829, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8602 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6431 = $("<span>");
      root8602.append(nodes6431);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8603 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8603); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6431;
        nodes6431 = node.contents();
        oldNodes.replaceWith(nodes6431);
      }));
      callback(root8602); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6430;
      nodes6430 = node.contents();
      oldNodes.replaceWith(nodes6430);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp5928 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5830 = mobl.ref(result__);
    
    var nodes6432 = $("<span>");
    root8601.append(nodes6432);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5830, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6433 = $("<span>");
      root8604.append(nodes6433);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8605 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8605); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6433;
        nodes6433 = node.contents();
        oldNodes.replaceWith(nodes6433);
      }));
      callback(root8604); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6432;
      nodes6432 = node.contents();
      oldNodes.replaceWith(nodes6432);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp5927 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5831 = mobl.ref(result__);
    
    var nodes6434 = $("<span>");
    root8601.append(nodes6434);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5831, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6435 = $("<span>");
      root8606.append(nodes6435);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8607 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8607); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6435;
        nodes6435 = node.contents();
        oldNodes.replaceWith(nodes6435);
      }));
      callback(root8606); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6434;
      nodes6434 = node.contents();
      oldNodes.replaceWith(nodes6434);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp5926 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5832 = mobl.ref(result__);
    
    var nodes6436 = $("<span>");
    root8601.append(nodes6436);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5832, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6437 = $("<span>");
      root8608.append(nodes6437);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6437;
        nodes6437 = node.contents();
        oldNodes.replaceWith(nodes6437);
      }));
      callback(root8608); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6436;
      nodes6436 = node.contents();
      oldNodes.replaceWith(nodes6436);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp5925 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5833 = mobl.ref(result__);
    
    var nodes6438 = $("<span>");
    root8601.append(nodes6438);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5833, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6439 = $("<span>");
      root8610.append(nodes6439);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8611 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8611); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6439;
        nodes6439 = node.contents();
        oldNodes.replaceWith(nodes6439);
      }));
      callback(root8610); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6438;
      nodes6438 = node.contents();
      oldNodes.replaceWith(nodes6438);
    }));
    callback(root8601); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6429;
    nodes6429 = node.contents();
    oldNodes.replaceWith(nodes6429);
  }));
  callback(root8598); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root8612 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6440 = $("<span>");
  root8612.append(nodes6440);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8613 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5835 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5834 = mobl.ref(result__);
    
    var nodes6441 = $("<span>");
    root8613.append(nodes6441);
    subs__.addSub((ui.backButton)(tmp5834, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5835, function(_, callback) {
      var root8614 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8614); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6441;
      nodes6441 = node.contents();
      oldNodes.replaceWith(nodes6441);
    }));
    callback(root8613); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6440;
    nodes6440 = node.contents();
    oldNodes.replaceWith(nodes6440);
  }));
  var nodes6442 = $("<span>");
  root8612.append(nodes6442);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8615 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp5932 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5836 = mobl.ref(result__);
    
    var nodes6443 = $("<span>");
    root8615.append(nodes6443);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5836, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6444 = $("<span>");
      root8616.append(nodes6444);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8617 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8617); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6444;
        nodes6444 = node.contents();
        oldNodes.replaceWith(nodes6444);
      }));
      callback(root8616); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6443;
      nodes6443 = node.contents();
      oldNodes.replaceWith(nodes6443);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp5931 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5837 = mobl.ref(result__);
    
    var nodes6445 = $("<span>");
    root8615.append(nodes6445);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5837, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8618 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6446 = $("<span>");
      root8618.append(nodes6446);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8619 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8619); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6446;
        nodes6446 = node.contents();
        oldNodes.replaceWith(nodes6446);
      }));
      callback(root8618); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6445;
      nodes6445 = node.contents();
      oldNodes.replaceWith(nodes6445);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp5930 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5838 = mobl.ref(result__);
    
    var nodes6447 = $("<span>");
    root8615.append(nodes6447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5838, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8620 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6448 = $("<span>");
      root8620.append(nodes6448);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8621 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8621); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6448;
        nodes6448 = node.contents();
        oldNodes.replaceWith(nodes6448);
      }));
      callback(root8620); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6447;
      nodes6447 = node.contents();
      oldNodes.replaceWith(nodes6447);
    }));
    callback(root8615); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6442;
    nodes6442 = node.contents();
    oldNodes.replaceWith(nodes6442);
  }));
  callback(root8612); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root8622 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6449 = $("<span>");
  root8622.append(nodes6449);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8623 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5840 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5839 = mobl.ref(result__);
    
    var nodes6450 = $("<span>");
    root8623.append(nodes6450);
    subs__.addSub((ui.backButton)(tmp5839, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5840, function(_, callback) {
      var root8624 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8624); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6450;
      nodes6450 = node.contents();
      oldNodes.replaceWith(nodes6450);
    }));
    callback(root8623); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6449;
    nodes6449 = node.contents();
    oldNodes.replaceWith(nodes6449);
  }));
  var nodes6451 = $("<span>");
  root8622.append(nodes6451);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8625 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp5936 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5841 = mobl.ref(result__);
    
    var nodes6452 = $("<span>");
    root8625.append(nodes6452);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5841, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8626 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6453 = $("<span>");
      root8626.append(nodes6453);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8627 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8627); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6453;
        nodes6453 = node.contents();
        oldNodes.replaceWith(nodes6453);
      }));
      callback(root8626); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6452;
      nodes6452 = node.contents();
      oldNodes.replaceWith(nodes6452);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp5935 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5842 = mobl.ref(result__);
    
    var nodes6454 = $("<span>");
    root8625.append(nodes6454);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5842, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8628 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6455 = $("<span>");
      root8628.append(nodes6455);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8629 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8629); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6455;
        nodes6455 = node.contents();
        oldNodes.replaceWith(nodes6455);
      }));
      callback(root8628); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6454;
      nodes6454 = node.contents();
      oldNodes.replaceWith(nodes6454);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp5934 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5843 = mobl.ref(result__);
    
    var nodes6456 = $("<span>");
    root8625.append(nodes6456);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5843, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8630 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6457 = $("<span>");
      root8630.append(nodes6457);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8631 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8631); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6457;
        nodes6457 = node.contents();
        oldNodes.replaceWith(nodes6457);
      }));
      callback(root8630); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6456;
      nodes6456 = node.contents();
      oldNodes.replaceWith(nodes6456);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp5933 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5844 = mobl.ref(result__);
    
    var nodes6458 = $("<span>");
    root8625.append(nodes6458);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5844, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8632 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6459 = $("<span>");
      root8632.append(nodes6459);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8633 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8633); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6459;
        nodes6459 = node.contents();
        oldNodes.replaceWith(nodes6459);
      }));
      callback(root8632); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6458;
      nodes6458 = node.contents();
      oldNodes.replaceWith(nodes6458);
    }));
    callback(root8625); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6451;
    nodes6451 = node.contents();
    oldNodes.replaceWith(nodes6451);
  }));
  callback(root8622); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root8634 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6460 = $("<span>");
  root8634.append(nodes6460);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8635 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5846 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5845 = mobl.ref(result__);
    
    var nodes6461 = $("<span>");
    root8635.append(nodes6461);
    subs__.addSub((ui.backButton)(tmp5845, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5846, function(_, callback) {
      var root8636 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8636); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6461;
      nodes6461 = node.contents();
      oldNodes.replaceWith(nodes6461);
    }));
    callback(root8635); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6460;
    nodes6460 = node.contents();
    oldNodes.replaceWith(nodes6460);
  }));
  var nodes6462 = $("<span>");
  root8634.append(nodes6462);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8637 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp5938 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5847 = mobl.ref(result__);
    
    var nodes6463 = $("<span>");
    root8637.append(nodes6463);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5847, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8638 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6464 = $("<span>");
      root8638.append(nodes6464);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8639 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8639); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6464;
        nodes6464 = node.contents();
        oldNodes.replaceWith(nodes6464);
      }));
      callback(root8638); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6463;
      nodes6463 = node.contents();
      oldNodes.replaceWith(nodes6463);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp5937 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5848 = mobl.ref(result__);
    
    var nodes6465 = $("<span>");
    root8637.append(nodes6465);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5848, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8640 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6466 = $("<span>");
      root8640.append(nodes6466);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8641 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8641); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6466;
        nodes6466 = node.contents();
        oldNodes.replaceWith(nodes6466);
      }));
      callback(root8640); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6465;
      nodes6465 = node.contents();
      oldNodes.replaceWith(nodes6465);
    }));
    callback(root8637); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6462;
    nodes6462 = node.contents();
    oldNodes.replaceWith(nodes6462);
  }));
  callback(root8634); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root8642 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6467 = $("<span>");
  root8642.append(nodes6467);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8643 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5850 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5849 = mobl.ref(result__);
    
    var nodes6468 = $("<span>");
    root8643.append(nodes6468);
    subs__.addSub((ui.backButton)(tmp5849, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5850, function(_, callback) {
      var root8644 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8644); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6468;
      nodes6468 = node.contents();
      oldNodes.replaceWith(nodes6468);
    }));
    callback(root8643); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6467;
    nodes6467 = node.contents();
    oldNodes.replaceWith(nodes6467);
  }));
  var nodes6469 = $("<span>");
  root8642.append(nodes6469);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8645 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp5943 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5851 = mobl.ref(result__);
    
    var nodes6470 = $("<span>");
    root8645.append(nodes6470);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5851, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8646 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6471 = $("<span>");
      root8646.append(nodes6471);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8647 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8647); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6471;
        nodes6471 = node.contents();
        oldNodes.replaceWith(nodes6471);
      }));
      callback(root8646); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6470;
      nodes6470 = node.contents();
      oldNodes.replaceWith(nodes6470);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp5942 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5852 = mobl.ref(result__);
    
    var nodes6472 = $("<span>");
    root8645.append(nodes6472);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5852, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8648 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6473 = $("<span>");
      root8648.append(nodes6473);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8649 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8649); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6473;
        nodes6473 = node.contents();
        oldNodes.replaceWith(nodes6473);
      }));
      callback(root8648); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6472;
      nodes6472 = node.contents();
      oldNodes.replaceWith(nodes6472);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp5941 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5853 = mobl.ref(result__);
    
    var nodes6474 = $("<span>");
    root8645.append(nodes6474);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5853, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8650 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6475 = $("<span>");
      root8650.append(nodes6475);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8651 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8651); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6475;
        nodes6475 = node.contents();
        oldNodes.replaceWith(nodes6475);
      }));
      callback(root8650); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6474;
      nodes6474 = node.contents();
      oldNodes.replaceWith(nodes6474);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp5940 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5854 = mobl.ref(result__);
    
    var nodes6476 = $("<span>");
    root8645.append(nodes6476);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5854, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8652 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6477 = $("<span>");
      root8652.append(nodes6477);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8653 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8653); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6477;
        nodes6477 = node.contents();
        oldNodes.replaceWith(nodes6477);
      }));
      callback(root8652); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6476;
      nodes6476 = node.contents();
      oldNodes.replaceWith(nodes6476);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp5939 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5855 = mobl.ref(result__);
    
    var nodes6478 = $("<span>");
    root8645.append(nodes6478);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5855, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8654 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6479 = $("<span>");
      root8654.append(nodes6479);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8655 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8655); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6479;
        nodes6479 = node.contents();
        oldNodes.replaceWith(nodes6479);
      }));
      callback(root8654); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6478;
      nodes6478 = node.contents();
      oldNodes.replaceWith(nodes6478);
    }));
    callback(root8645); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6469;
    nodes6469 = node.contents();
    oldNodes.replaceWith(nodes6469);
  }));
  callback(root8642); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root8656 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6480 = $("<span>");
  root8656.append(nodes6480);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8657 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5857 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5856 = mobl.ref(result__);
    
    var nodes6481 = $("<span>");
    root8657.append(nodes6481);
    subs__.addSub((ui.backButton)(tmp5856, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5857, function(_, callback) {
      var root8658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8658); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6481;
      nodes6481 = node.contents();
      oldNodes.replaceWith(nodes6481);
    }));
    callback(root8657); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6480;
    nodes6480 = node.contents();
    oldNodes.replaceWith(nodes6480);
  }));
  var nodes6482 = $("<span>");
  root8656.append(nodes6482);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8659 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp5946 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5858 = mobl.ref(result__);
    
    var nodes6483 = $("<span>");
    root8659.append(nodes6483);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5858, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8660 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6484 = $("<span>");
      root8660.append(nodes6484);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8661 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8661); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6484;
        nodes6484 = node.contents();
        oldNodes.replaceWith(nodes6484);
      }));
      callback(root8660); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6483;
      nodes6483 = node.contents();
      oldNodes.replaceWith(nodes6483);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp5945 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5859 = mobl.ref(result__);
    
    var nodes6485 = $("<span>");
    root8659.append(nodes6485);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5859, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8662 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6486 = $("<span>");
      root8662.append(nodes6486);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8663 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8663); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6486;
        nodes6486 = node.contents();
        oldNodes.replaceWith(nodes6486);
      }));
      callback(root8662); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6485;
      nodes6485 = node.contents();
      oldNodes.replaceWith(nodes6485);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp5944 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5860 = mobl.ref(result__);
    
    var nodes6487 = $("<span>");
    root8659.append(nodes6487);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5860, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8664 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6488 = $("<span>");
      root8664.append(nodes6488);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8665 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8665); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6488;
        nodes6488 = node.contents();
        oldNodes.replaceWith(nodes6488);
      }));
      callback(root8664); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6487;
      nodes6487 = node.contents();
      oldNodes.replaceWith(nodes6487);
    }));
    callback(root8659); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6482;
    nodes6482 = node.contents();
    oldNodes.replaceWith(nodes6482);
  }));
  callback(root8656); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root8666 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6489 = $("<span>");
  root8666.append(nodes6489);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8667 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5862 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5861 = mobl.ref(result__);
    
    var nodes6490 = $("<span>");
    root8667.append(nodes6490);
    subs__.addSub((ui.backButton)(tmp5861, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5862, function(_, callback) {
      var root8668 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8668); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6490;
      nodes6490 = node.contents();
      oldNodes.replaceWith(nodes6490);
    }));
    callback(root8667); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6489;
    nodes6489 = node.contents();
    oldNodes.replaceWith(nodes6489);
  }));
  var nodes6491 = $("<span>");
  root8666.append(nodes6491);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8669 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp5947 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5863 = mobl.ref(result__);
    
    var nodes6492 = $("<span>");
    root8669.append(nodes6492);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5863, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8670 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6493 = $("<span>");
      root8670.append(nodes6493);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8671 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8671); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6493;
        nodes6493 = node.contents();
        oldNodes.replaceWith(nodes6493);
      }));
      callback(root8670); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6492;
      nodes6492 = node.contents();
      oldNodes.replaceWith(nodes6492);
    }));
    callback(root8669); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6491;
    nodes6491 = node.contents();
    oldNodes.replaceWith(nodes6491);
  }));
  callback(root8666); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root8672 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6494 = $("<span>");
  root8672.append(nodes6494);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8673 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp5960 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5864 = mobl.ref(result__);
    
    var nodes6495 = $("<span>");
    root8673.append(nodes6495);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5864, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8674 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6496 = $("<span>");
      root8674.append(nodes6496);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8675 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8675); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6496;
        nodes6496 = node.contents();
        oldNodes.replaceWith(nodes6496);
      }));
      callback(root8674); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6495;
      nodes6495 = node.contents();
      oldNodes.replaceWith(nodes6495);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp5959 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5865 = mobl.ref(result__);
    
    var nodes6497 = $("<span>");
    root8673.append(nodes6497);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5865, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8676 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6498 = $("<span>");
      root8676.append(nodes6498);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8677 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8677); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6498;
        nodes6498 = node.contents();
        oldNodes.replaceWith(nodes6498);
      }));
      callback(root8676); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6497;
      nodes6497 = node.contents();
      oldNodes.replaceWith(nodes6497);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp5958 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5866 = mobl.ref(result__);
    
    var nodes6499 = $("<span>");
    root8673.append(nodes6499);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5866, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8678 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6500 = $("<span>");
      root8678.append(nodes6500);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8679 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8679); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6500;
        nodes6500 = node.contents();
        oldNodes.replaceWith(nodes6500);
      }));
      callback(root8678); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6499;
      nodes6499 = node.contents();
      oldNodes.replaceWith(nodes6499);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp5957 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5867 = mobl.ref(result__);
    
    var nodes6501 = $("<span>");
    root8673.append(nodes6501);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5867, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8680 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6502 = $("<span>");
      root8680.append(nodes6502);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8681 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8681); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6502;
        nodes6502 = node.contents();
        oldNodes.replaceWith(nodes6502);
      }));
      callback(root8680); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6501;
      nodes6501 = node.contents();
      oldNodes.replaceWith(nodes6501);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp5956 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5868 = mobl.ref(result__);
    
    var nodes6503 = $("<span>");
    root8673.append(nodes6503);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5868, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8682 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6504 = $("<span>");
      root8682.append(nodes6504);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8683 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8683); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6504;
        nodes6504 = node.contents();
        oldNodes.replaceWith(nodes6504);
      }));
      callback(root8682); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6503;
      nodes6503 = node.contents();
      oldNodes.replaceWith(nodes6503);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp5955 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5869 = mobl.ref(result__);
    
    var nodes6505 = $("<span>");
    root8673.append(nodes6505);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5869, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8684 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6506 = $("<span>");
      root8684.append(nodes6506);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8685 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8685); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6506;
        nodes6506 = node.contents();
        oldNodes.replaceWith(nodes6506);
      }));
      callback(root8684); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6505;
      nodes6505 = node.contents();
      oldNodes.replaceWith(nodes6505);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp5954 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5870 = mobl.ref(result__);
    
    var nodes6507 = $("<span>");
    root8673.append(nodes6507);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5870, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8686 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6508 = $("<span>");
      root8686.append(nodes6508);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8687 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8687); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6508;
        nodes6508 = node.contents();
        oldNodes.replaceWith(nodes6508);
      }));
      callback(root8686); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6507;
      nodes6507 = node.contents();
      oldNodes.replaceWith(nodes6507);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp5953 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5871 = mobl.ref(result__);
    
    var nodes6509 = $("<span>");
    root8673.append(nodes6509);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5871, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8688 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6510 = $("<span>");
      root8688.append(nodes6510);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8689 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8689); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6510;
        nodes6510 = node.contents();
        oldNodes.replaceWith(nodes6510);
      }));
      callback(root8688); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6509;
      nodes6509 = node.contents();
      oldNodes.replaceWith(nodes6509);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp5952 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5872 = mobl.ref(result__);
    
    var nodes6511 = $("<span>");
    root8673.append(nodes6511);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5872, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8690 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6512 = $("<span>");
      root8690.append(nodes6512);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8691 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8691); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6512;
        nodes6512 = node.contents();
        oldNodes.replaceWith(nodes6512);
      }));
      callback(root8690); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6511;
      nodes6511 = node.contents();
      oldNodes.replaceWith(nodes6511);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp5951 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5873 = mobl.ref(result__);
    
    var nodes6513 = $("<span>");
    root8673.append(nodes6513);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5873, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8692 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6514 = $("<span>");
      root8692.append(nodes6514);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8693 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8693); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6514;
        nodes6514 = node.contents();
        oldNodes.replaceWith(nodes6514);
      }));
      callback(root8692); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6513;
      nodes6513 = node.contents();
      oldNodes.replaceWith(nodes6513);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp5950 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5874 = mobl.ref(result__);
    
    var nodes6515 = $("<span>");
    root8673.append(nodes6515);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5874, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8694 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6516 = $("<span>");
      root8694.append(nodes6516);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8695 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8695); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6516;
        nodes6516 = node.contents();
        oldNodes.replaceWith(nodes6516);
      }));
      callback(root8694); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6515;
      nodes6515 = node.contents();
      oldNodes.replaceWith(nodes6515);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp5949 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5875 = mobl.ref(result__);
    
    var nodes6517 = $("<span>");
    root8673.append(nodes6517);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5875, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8696 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6518 = $("<span>");
      root8696.append(nodes6518);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8697 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8697); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6518;
        nodes6518 = node.contents();
        oldNodes.replaceWith(nodes6518);
      }));
      callback(root8696); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6517;
      nodes6517 = node.contents();
      oldNodes.replaceWith(nodes6517);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp5948 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5876 = mobl.ref(result__);
    
    var nodes6519 = $("<span>");
    root8673.append(nodes6519);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5876, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8698 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6520 = $("<span>");
      root8698.append(nodes6520);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8699 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8699); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6520;
        nodes6520 = node.contents();
        oldNodes.replaceWith(nodes6520);
      }));
      callback(root8698); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6519;
      nodes6519 = node.contents();
      oldNodes.replaceWith(nodes6519);
    }));
    callback(root8673); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6494;
    nodes6494 = node.contents();
    oldNodes.replaceWith(nodes6494);
  }));
  callback(root8672); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root8700 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6521 = $("<span>");
  root8700.append(nodes6521);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8701 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp5966 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5877 = mobl.ref(result__);
    
    var nodes6522 = $("<span>");
    root8701.append(nodes6522);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5877, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8702 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6523 = $("<span>");
      root8702.append(nodes6523);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8703 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8703); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6523;
        nodes6523 = node.contents();
        oldNodes.replaceWith(nodes6523);
      }));
      callback(root8702); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6522;
      nodes6522 = node.contents();
      oldNodes.replaceWith(nodes6522);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp5965 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5878 = mobl.ref(result__);
    
    var nodes6524 = $("<span>");
    root8701.append(nodes6524);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5878, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8704 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6525 = $("<span>");
      root8704.append(nodes6525);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8705 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8705); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6525;
        nodes6525 = node.contents();
        oldNodes.replaceWith(nodes6525);
      }));
      callback(root8704); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6524;
      nodes6524 = node.contents();
      oldNodes.replaceWith(nodes6524);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp5964 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5879 = mobl.ref(result__);
    
    var nodes6526 = $("<span>");
    root8701.append(nodes6526);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5879, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8706 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6527 = $("<span>");
      root8706.append(nodes6527);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8707 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8707); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6527;
        nodes6527 = node.contents();
        oldNodes.replaceWith(nodes6527);
      }));
      callback(root8706); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6526;
      nodes6526 = node.contents();
      oldNodes.replaceWith(nodes6526);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp5963 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5880 = mobl.ref(result__);
    
    var nodes6528 = $("<span>");
    root8701.append(nodes6528);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5880, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8708 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6529 = $("<span>");
      root8708.append(nodes6529);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8709 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8709); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6529;
        nodes6529 = node.contents();
        oldNodes.replaceWith(nodes6529);
      }));
      callback(root8708); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6528;
      nodes6528 = node.contents();
      oldNodes.replaceWith(nodes6528);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp5962 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5881 = mobl.ref(result__);
    
    var nodes6530 = $("<span>");
    root8701.append(nodes6530);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5881, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8710 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6531 = $("<span>");
      root8710.append(nodes6531);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8711 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8711); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6531;
        nodes6531 = node.contents();
        oldNodes.replaceWith(nodes6531);
      }));
      callback(root8710); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6530;
      nodes6530 = node.contents();
      oldNodes.replaceWith(nodes6530);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp5961 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5882 = mobl.ref(result__);
    
    var nodes6532 = $("<span>");
    root8701.append(nodes6532);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5882, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8712 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6533 = $("<span>");
      root8712.append(nodes6533);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8713 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8713); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6533;
        nodes6533 = node.contents();
        oldNodes.replaceWith(nodes6533);
      }));
      callback(root8712); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6532;
      nodes6532 = node.contents();
      oldNodes.replaceWith(nodes6532);
    }));
    callback(root8701); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6521;
    nodes6521 = node.contents();
    oldNodes.replaceWith(nodes6521);
  }));
  callback(root8700); return subs__;
  
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

nrichRPG.coreWorkout.panelHeader = function(text, onclick, elements, callback) {
  var root8714 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3398 = $("<div>");
  
  var ref3370 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref3370.get() !== null) {
    node3398.attr('class', ref3370.get());
    subs__.addSub(ref3370.addEventListener('change', function(_, ref, val) {
      node3398.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3370.rebind());
  
  var val1724 = onclick.get();
  if(val1724 !== null) {
    subs__.addSub(mobl.domBind(node3398, 'tap', val1724));
  }
  
  
  var node3399 = $("<div>");
  
  var ref3369 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref3369.get() !== null) {
    node3399.attr('class', ref3369.get());
    subs__.addSub(ref3369.addEventListener('change', function(_, ref, val) {
      node3399.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3369.rebind());
  
  
  var node3400 = $("<div>");
  
  var ref3367 = text;
  node3400.text(""+ref3367.get());
  var ignore662 = false;
  subs__.addSub(ref3367.addEventListener('change', function(_, ref, val) {
    if(ignore662) return;
    node3400.text(""+val);
  }));
  subs__.addSub(ref3367.rebind());
  
  
  var ref3368 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref3368.get() !== null) {
    node3400.attr('class', ref3368.get());
    subs__.addSub(ref3368.addEventListener('change', function(_, ref, val) {
      node3400.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3368.rebind());
  
  node3399.append(node3400);
  node3398.append(node3399);
  var nodes6534 = $("<span>");
  node3398.append(nodes6534);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1374();
  }));
  
  function renderControl1374() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8715 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8715); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6534;
      nodes6534 = node.contents();
      oldNodes.replaceWith(nodes6534);
    }));
  }
  renderControl1374();
  root8714.append(node3398);
  callback(root8714); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp5967 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp5968 = result__;
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
  });
};


nrichRPG.coreWorkout.answerBlock = function(qa, elements, callback) {
  var root8716 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3401 = $("<span>");
  root8716.append(node3401);
  var condSubs826 = new mobl.CompSubscription();
  subs__.addSub(condSubs826);
  var oldValue826;
  var renderCond826 = function() {
    var value3482 = qa.get().correct;
    if(oldValue826 === value3482) return;
    oldValue826 = value3482;
    var subs__ = condSubs826;
    subs__.unsubscribe();
    node3401.empty();
    if(value3482) {
      var nodes6535 = $("<span>");
      node3401.append(nodes6535);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8717 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp5886 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp5886.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node3402 = $("<span>");
        root8717.append(node3402);
        var condSubs827 = new mobl.CompSubscription();
        subs__.addSub(condSubs827);
        var oldValue827;
        var renderCond827 = function() {
          var value3483 = tmp5886.get();
          if(oldValue827 === value3483) return;
          oldValue827 = value3483;
          var subs__ = condSubs827;
          subs__.unsubscribe();
          node3402.empty();
          if(value3483) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp5883 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp5883.set("A" + qa.get().number + ". ");
            }));
            
            var nodes6536 = $("<span>");
            node3402.append(nodes6536);
            subs__.addSub((mobl.label)(tmp5883, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8718 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8718); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6536;
              nodes6536 = node.contents();
              oldNodes.replaceWith(nodes6536);
            }));
            var nodes6537 = $("<span>");
            node3402.append(nodes6537);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root8719 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8719); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6537;
              nodes6537 = node.contents();
              oldNodes.replaceWith(nodes6537);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp5884 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp5884.set("A" + qa.get().number + ". ");
            }));
            
            var nodes6538 = $("<span>");
            node3402.append(nodes6538);
            subs__.addSub((mobl.label)(tmp5884, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8720 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8720); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6538;
              nodes6538 = node.contents();
              oldNodes.replaceWith(nodes6538);
            }));
            var nodes6539 = $("<span>");
            node3402.append(nodes6539);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root8721 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8721); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6539;
              nodes6539 = node.contents();
              oldNodes.replaceWith(nodes6539);
            }));
            
            var node3403 = $("<span>");
            node3403.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp5970 = result__;
              var tmp5885 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp5969 = result__;
                  var result__ = tmp5969;
                  tmp5885.set(result__);
                  
                });
              }));
              
              var nodes6540 = $("<span>");
              node3403.append(nodes6540);
              subs__.addSub((mobl.html)(tmp5885, function(_, callback) {
                var root8722 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8722); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6540;
                nodes6540 = node.contents();
                oldNodes.replaceWith(nodes6540);
              }));
              node3402.append(node3403);
              
              
            });
            
            
            
          }
        };
        renderCond827();
        subs__.addSub(tmp5886.addEventListener('change', function() {
          renderCond827();
        }));
        
        callback(root8717); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6535;
        nodes6535 = node.contents();
        oldNodes.replaceWith(nodes6535);
      }));
      
      
    } else {
      var nodes6541 = $("<span>");
      node3401.append(nodes6541);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8723 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp5890 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp5890.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node3404 = $("<span>");
        root8723.append(node3404);
        var condSubs828 = new mobl.CompSubscription();
        subs__.addSub(condSubs828);
        var oldValue828;
        var renderCond828 = function() {
          var value3484 = tmp5890.get();
          if(oldValue828 === value3484) return;
          oldValue828 = value3484;
          var subs__ = condSubs828;
          subs__.unsubscribe();
          node3404.empty();
          if(value3484) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp5887 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp5887.set("A" + qa.get().number + ". ");
            }));
            
            var nodes6542 = $("<span>");
            node3404.append(nodes6542);
            subs__.addSub((mobl.label)(tmp5887, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8724 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8724); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6542;
              nodes6542 = node.contents();
              oldNodes.replaceWith(nodes6542);
            }));
            var nodes6543 = $("<span>");
            node3404.append(nodes6543);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root8725 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8725); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6543;
              nodes6543 = node.contents();
              oldNodes.replaceWith(nodes6543);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp5888 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp5888.set("A" + qa.get().number + ". ");
            }));
            
            var nodes6544 = $("<span>");
            node3404.append(nodes6544);
            subs__.addSub((mobl.label)(tmp5888, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8726 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8726); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6544;
              nodes6544 = node.contents();
              oldNodes.replaceWith(nodes6544);
            }));
            var nodes6545 = $("<span>");
            node3404.append(nodes6545);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root8727 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8727); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6545;
              nodes6545 = node.contents();
              oldNodes.replaceWith(nodes6545);
            }));
            
            var node3405 = $("<span>");
            node3405.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp5972 = result__;
              var tmp5889 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp5971 = result__;
                  var result__ = tmp5971;
                  tmp5889.set(result__);
                  
                });
              }));
              
              var nodes6546 = $("<span>");
              node3405.append(nodes6546);
              subs__.addSub((mobl.html)(tmp5889, function(_, callback) {
                var root8728 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8728); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6546;
                nodes6546 = node.contents();
                oldNodes.replaceWith(nodes6546);
              }));
              node3404.append(node3405);
              
              
            });
            
            
            
          }
        };
        renderCond828();
        subs__.addSub(tmp5890.addEventListener('change', function() {
          renderCond828();
        }));
        
        callback(root8723); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6541;
        nodes6541 = node.contents();
        oldNodes.replaceWith(nodes6541);
      }));
      
      
    }
  };
  renderCond826();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond826();
  }));
  
  var nodes6547 = $("<span>");
  root8716.append(nodes6547);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8729 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3406 = $("<span>");
    node3406.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp5974 = result__;
      var tmp5891 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp5973 = result__;
          var result__ = tmp5973;
          tmp5891.set(result__);
          
        });
      }));
      
      var nodes6551 = $("<span>");
      node3406.append(nodes6551);
      subs__.addSub((mobl.html)(tmp5891, function(_, callback) {
        var root8733 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8733); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6551;
        nodes6551 = node.contents();
        oldNodes.replaceWith(nodes6551);
      }));
      root8729.append(node3406);
      var nodes6548 = $("<span>");
      root8729.append(nodes6548);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8730 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8730); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6548;
        nodes6548 = node.contents();
        oldNodes.replaceWith(nodes6548);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp5892 = mobl.ref(result__);
      
      var nodes6549 = $("<span>");
      root8729.append(nodes6549);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp5892, function(_, callback) {
        var root8731 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8731); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6549;
        nodes6549 = node.contents();
        oldNodes.replaceWith(nodes6549);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp5893 = mobl.ref(result__);
      
      var nodes6550 = $("<span>");
      root8729.append(nodes6550);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp5893, function(_, callback) {
        var root8732 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8732); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6550;
        nodes6550 = node.contents();
        oldNodes.replaceWith(nodes6550);
      }));
      callback(root8729); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6547;
    nodes6547 = node.contents();
    oldNodes.replaceWith(nodes6547);
  }));
  callback(root8716); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp5975 = result__;
    var result__ = tmp5975;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp5976 = result__;
        var result__ = tmp5976;
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


nrichRPG.coreWorkout.qaItem = function(qa, number, elements, callback) {
  var root8734 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3407 = $("<span>");
  
  var ref3371 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref3371.get() !== null) {
    node3407.attr('style', ref3371.get());
    subs__.addSub(ref3371.addEventListener('change', function(_, ref, val) {
      node3407.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node3407.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node3407.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref3371.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp5894 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp5894.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp5894.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes6552 = $("<span>");
  node3407.append(nodes6552);
  subs__.addSub((mobl.html)(tmp5894, function(_, callback) {
    var root8735 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8735); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6552;
    nodes6552 = node.contents();
    oldNodes.replaceWith(nodes6552);
  }));
  root8734.append(node3407);
  callback(root8734); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root8736 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp5984 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp5897 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp5896 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp5896.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes6553 = $("<span>");
  root8736.append(nodes6553);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp5896, tmp5897, function(_, callback) {
    var root8737 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp5977 = result__;
                       var result__ = tmp5977;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp5978 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp5895 = mobl.ref(result__);
    
    var nodes6554 = $("<span>");
    root8737.append(nodes6554);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp5895, function(_, callback) {
      var root8738 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8738); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6554;
      nodes6554 = node.contents();
      oldNodes.replaceWith(nodes6554);
    }));
    callback(root8737); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6553;
    nodes6553 = node.contents();
    oldNodes.replaceWith(nodes6553);
  }));
  var nodes6555 = $("<span>");
  root8736.append(nodes6555);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8739 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp5983 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5900 = mobl.ref(result__);
    
    var nodes6556 = $("<span>");
    root8739.append(nodes6556);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp5900, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root8740 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp5898 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp5898.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp5898.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes6557 = $("<span>");
      root8740.append(nodes6557);
      subs__.addSub((mobl.html)(tmp5898, function(_, callback) {
        var root8741 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8741); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6557;
        nodes6557 = node.contents();
        oldNodes.replaceWith(nodes6557);
      }));
      
      var node3408 = $("<span>");
      node3408.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp5980 = result__;
        var tmp5899 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp5979 = result__;
            var result__ = tmp5979;
            tmp5899.set(result__);
            
          });
        }));
        
        var nodes6558 = $("<span>");
        node3408.append(nodes6558);
        subs__.addSub((mobl.html)(tmp5899, function(_, callback) {
          var root8742 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8742); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6558;
          nodes6558 = node.contents();
          oldNodes.replaceWith(nodes6558);
        }));
        root8740.append(node3408);
        callback(root8740); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6556;
      nodes6556 = node.contents();
      oldNodes.replaceWith(nodes6556);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp5982 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5902 = mobl.ref(result__);
    
    var nodes6559 = $("<span>");
    root8739.append(nodes6559);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5902, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root8743 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6560 = $("<span>");
      root8743.append(nodes6560);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8744 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp5981 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp5901 = mobl.ref(result__);
        
        var nodes6561 = $("<span>");
        root8744.append(nodes6561);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp5901, function(_, callback) {
          var root8745 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8745); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6561;
          nodes6561 = node.contents();
          oldNodes.replaceWith(nodes6561);
        }));
        callback(root8744); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6560;
        nodes6560 = node.contents();
        oldNodes.replaceWith(nodes6560);
      }));
      
      var node3409 = $("<span>");
      root8743.append(node3409);
      var condSubs829 = new mobl.CompSubscription();
      subs__.addSub(condSubs829);
      var oldValue829;
      var renderCond829 = function() {
        var value3485 = qa.get().done;
        if(oldValue829 === value3485) return;
        oldValue829 = value3485;
        var subs__ = condSubs829;
        subs__.unsubscribe();
        node3409.empty();
        if(value3485) {
          var nodes6562 = $("<span>");
          node3409.append(nodes6562);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root8746 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8746); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6562;
            nodes6562 = node.contents();
            oldNodes.replaceWith(nodes6562);
          }));
          
          
        } else {
          
        }
      };
      renderCond829();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond829();
      }));
      
      callback(root8743); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6559;
      nodes6559 = node.contents();
      oldNodes.replaceWith(nodes6559);
    }));
    callback(root8739); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6555;
    nodes6555 = node.contents();
    oldNodes.replaceWith(nodes6555);
  }));
  callback(root8736); return subs__;
  
  
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
  qas.list(function(coll4253) {
    coll4253 = coll4253.reverse();
    function processOne269() {
      var item;
      item = coll4253.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll4253.length > 0) processOne269(); else rest269();
      
    }
    function rest269() {
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
    if(coll4253.length > 0) processOne269(); else rest269();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll4254) {
    coll4254 = coll4254.reverse();
    function processOne270() {
      var item;
      item = coll4254.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll4254.length > 0) processOne270(); else rest270();
      
    }
    function rest270() {
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
    if(coll4254.length > 0) processOne270(); else rest270();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll4255) {
    coll4255 = coll4255.reverse();
    function processOne271() {
      var item;
      item = coll4255.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll4255.length > 0) processOne271(); else rest271();
      
    }
    function rest271() {
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
    if(coll4255.length > 0) processOne271(); else rest271();
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