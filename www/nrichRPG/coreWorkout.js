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
    var tmp7407 = result__;
    var result__ = tmp7407;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp7408 = result__;
      var result__ = tmp7408;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp7409 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll822) {
    coll822 = coll822.reverse();
    function processOne270() {
      var i;
      i = coll822.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp7410 = result__;
        
        if(coll822.length > 0) processOne270(); else rest270();
        
      });
    }
    function rest270() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll822.length > 0) processOne270(); else rest270();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll823) {
    coll823 = coll823.reverse();
    function processOne271() {
      var i;
      i = coll823.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp7411 = result__;
          
          if(coll823.length > 0) processOne271(); else rest271();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp7411 = result__;
            
            if(coll823.length > 0) processOne271(); else rest271();
            
          });
        }
      }
    }
    function rest271() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll823.length > 0) processOne271(); else rest271();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll824) {
    coll824 = coll824.reverse();
    function processOne272() {
      var i;
      i = coll824.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp7412 = result__;
        
        if(coll824.length > 0) processOne272(); else rest272();
        
      });
    }
    function rest272() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll824.length > 0) processOne272(); else rest272();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root8527 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7432 = $("<span>");
  root8527.append(nodes7432);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8528 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7420 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7319 = mobl.ref(result__);
    
    var nodes7433 = $("<span>");
    root8528.append(nodes7433);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7319, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8529 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7434 = $("<span>");
      root8529.append(nodes7434);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8530 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8530); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7434;
        nodes7434 = node.contents();
        oldNodes.replaceWith(nodes7434);
      }));
      callback(root8529); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7433;
      nodes7433 = node.contents();
      oldNodes.replaceWith(nodes7433);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7419 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7320 = mobl.ref(result__);
    
    var nodes7435 = $("<span>");
    root8528.append(nodes7435);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7320, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8531 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7436 = $("<span>");
      root8531.append(nodes7436);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8532 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8532); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7436;
        nodes7436 = node.contents();
        oldNodes.replaceWith(nodes7436);
      }));
      callback(root8531); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7435;
      nodes7435 = node.contents();
      oldNodes.replaceWith(nodes7435);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7418 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7321 = mobl.ref(result__);
    
    var nodes7437 = $("<span>");
    root8528.append(nodes7437);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7321, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8533 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7438 = $("<span>");
      root8533.append(nodes7438);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8534 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8534); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7438;
        nodes7438 = node.contents();
        oldNodes.replaceWith(nodes7438);
      }));
      callback(root8533); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7437;
      nodes7437 = node.contents();
      oldNodes.replaceWith(nodes7437);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7417 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7322 = mobl.ref(result__);
    
    var nodes7439 = $("<span>");
    root8528.append(nodes7439);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7322, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8535 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7440 = $("<span>");
      root8535.append(nodes7440);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8536 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8536); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7440;
        nodes7440 = node.contents();
        oldNodes.replaceWith(nodes7440);
      }));
      callback(root8535); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7439;
      nodes7439 = node.contents();
      oldNodes.replaceWith(nodes7439);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7416 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7323 = mobl.ref(result__);
    
    var nodes7441 = $("<span>");
    root8528.append(nodes7441);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7323, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8537 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7442 = $("<span>");
      root8537.append(nodes7442);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8538 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8538); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7442;
        nodes7442 = node.contents();
        oldNodes.replaceWith(nodes7442);
      }));
      callback(root8537); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7441;
      nodes7441 = node.contents();
      oldNodes.replaceWith(nodes7441);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7415 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7324 = mobl.ref(result__);
    
    var nodes7443 = $("<span>");
    root8528.append(nodes7443);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7324, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8539 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7444 = $("<span>");
      root8539.append(nodes7444);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8540 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8540); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7444;
        nodes7444 = node.contents();
        oldNodes.replaceWith(nodes7444);
      }));
      callback(root8539); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7443;
      nodes7443 = node.contents();
      oldNodes.replaceWith(nodes7443);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7414 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7325 = mobl.ref(result__);
    
    var nodes7445 = $("<span>");
    root8528.append(nodes7445);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7325, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8541 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7446 = $("<span>");
      root8541.append(nodes7446);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8542 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8542); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7446;
        nodes7446 = node.contents();
        oldNodes.replaceWith(nodes7446);
      }));
      callback(root8541); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7445;
      nodes7445 = node.contents();
      oldNodes.replaceWith(nodes7445);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7413 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7326 = mobl.ref(result__);
    
    var nodes7447 = $("<span>");
    root8528.append(nodes7447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7326, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8543 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7448 = $("<span>");
      root8543.append(nodes7448);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8544 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8544); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7448;
        nodes7448 = node.contents();
        oldNodes.replaceWith(nodes7448);
      }));
      callback(root8543); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7447;
      nodes7447 = node.contents();
      oldNodes.replaceWith(nodes7447);
    }));
    callback(root8528); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7432;
    nodes7432 = node.contents();
    oldNodes.replaceWith(nodes7432);
  }));
  callback(root8527); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root8545 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes7449 = $("<span>");
  root8545.append(nodes7449);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8546 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7328 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7327 = mobl.ref(result__);
    
    var nodes7450 = $("<span>");
    root8546.append(nodes7450);
    subs__.addSub((ui.backButton)(tmp7327, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7328, function(_, callback) {
      var root8547 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8547); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7450;
      nodes7450 = node.contents();
      oldNodes.replaceWith(nodes7450);
    }));
    callback(root8546); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7449;
    nodes7449 = node.contents();
    oldNodes.replaceWith(nodes7449);
  }));
  var nodes7451 = $("<span>");
  root8545.append(nodes7451);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8548 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp7428 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7329 = mobl.ref(result__);
    
    var nodes7452 = $("<span>");
    root8548.append(nodes7452);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7329, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8549 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7453 = $("<span>");
      root8549.append(nodes7453);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8550 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8550); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7453;
        nodes7453 = node.contents();
        oldNodes.replaceWith(nodes7453);
      }));
      callback(root8549); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7452;
      nodes7452 = node.contents();
      oldNodes.replaceWith(nodes7452);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp7427 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7330 = mobl.ref(result__);
    
    var nodes7454 = $("<span>");
    root8548.append(nodes7454);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7330, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8551 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7455 = $("<span>");
      root8551.append(nodes7455);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8552 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8552); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7455;
        nodes7455 = node.contents();
        oldNodes.replaceWith(nodes7455);
      }));
      callback(root8551); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7454;
      nodes7454 = node.contents();
      oldNodes.replaceWith(nodes7454);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp7426 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7331 = mobl.ref(result__);
    
    var nodes7456 = $("<span>");
    root8548.append(nodes7456);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7331, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8553 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7457 = $("<span>");
      root8553.append(nodes7457);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8554 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8554); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7457;
        nodes7457 = node.contents();
        oldNodes.replaceWith(nodes7457);
      }));
      callback(root8553); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7456;
      nodes7456 = node.contents();
      oldNodes.replaceWith(nodes7456);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp7425 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7332 = mobl.ref(result__);
    
    var nodes7458 = $("<span>");
    root8548.append(nodes7458);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7332, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8555 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7459 = $("<span>");
      root8555.append(nodes7459);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8556 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8556); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7459;
        nodes7459 = node.contents();
        oldNodes.replaceWith(nodes7459);
      }));
      callback(root8555); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7458;
      nodes7458 = node.contents();
      oldNodes.replaceWith(nodes7458);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp7424 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7333 = mobl.ref(result__);
    
    var nodes7460 = $("<span>");
    root8548.append(nodes7460);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7333, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8557 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7461 = $("<span>");
      root8557.append(nodes7461);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8558 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8558); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7461;
        nodes7461 = node.contents();
        oldNodes.replaceWith(nodes7461);
      }));
      callback(root8557); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7460;
      nodes7460 = node.contents();
      oldNodes.replaceWith(nodes7460);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp7423 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7334 = mobl.ref(result__);
    
    var nodes7462 = $("<span>");
    root8548.append(nodes7462);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7334, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8559 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7463 = $("<span>");
      root8559.append(nodes7463);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8560 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8560); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7463;
        nodes7463 = node.contents();
        oldNodes.replaceWith(nodes7463);
      }));
      callback(root8559); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7462;
      nodes7462 = node.contents();
      oldNodes.replaceWith(nodes7462);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp7422 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7335 = mobl.ref(result__);
    
    var nodes7464 = $("<span>");
    root8548.append(nodes7464);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7335, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8561 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7465 = $("<span>");
      root8561.append(nodes7465);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8562 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8562); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7465;
        nodes7465 = node.contents();
        oldNodes.replaceWith(nodes7465);
      }));
      callback(root8561); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7464;
      nodes7464 = node.contents();
      oldNodes.replaceWith(nodes7464);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp7421 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7336 = mobl.ref(result__);
    
    var nodes7466 = $("<span>");
    root8548.append(nodes7466);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7336, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8563 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7467 = $("<span>");
      root8563.append(nodes7467);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8564 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8564); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7467;
        nodes7467 = node.contents();
        oldNodes.replaceWith(nodes7467);
      }));
      callback(root8563); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7466;
      nodes7466 = node.contents();
      oldNodes.replaceWith(nodes7466);
    }));
    callback(root8548); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7451;
    nodes7451 = node.contents();
    oldNodes.replaceWith(nodes7451);
  }));
  callback(root8545); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root8565 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7468 = $("<span>");
  root8565.append(nodes7468);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8566 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7338 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7337 = mobl.ref(result__);
    
    var nodes7469 = $("<span>");
    root8566.append(nodes7469);
    subs__.addSub((ui.backButton)(tmp7337, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7338, function(_, callback) {
      var root8567 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8567); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7469;
      nodes7469 = node.contents();
      oldNodes.replaceWith(nodes7469);
    }));
    callback(root8566); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7468;
    nodes7468 = node.contents();
    oldNodes.replaceWith(nodes7468);
  }));
  var nodes7470 = $("<span>");
  root8565.append(nodes7470);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8568 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp7433 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7339 = mobl.ref(result__);
    
    var nodes7471 = $("<span>");
    root8568.append(nodes7471);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7339, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8569 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7472 = $("<span>");
      root8569.append(nodes7472);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8570 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8570); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7472;
        nodes7472 = node.contents();
        oldNodes.replaceWith(nodes7472);
      }));
      callback(root8569); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7471;
      nodes7471 = node.contents();
      oldNodes.replaceWith(nodes7471);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp7432 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7340 = mobl.ref(result__);
    
    var nodes7473 = $("<span>");
    root8568.append(nodes7473);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7340, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8571 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7474 = $("<span>");
      root8571.append(nodes7474);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8572 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8572); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7474;
        nodes7474 = node.contents();
        oldNodes.replaceWith(nodes7474);
      }));
      callback(root8571); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7473;
      nodes7473 = node.contents();
      oldNodes.replaceWith(nodes7473);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp7431 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7341 = mobl.ref(result__);
    
    var nodes7475 = $("<span>");
    root8568.append(nodes7475);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7341, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8573 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7476 = $("<span>");
      root8573.append(nodes7476);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8574 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8574); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7476;
        nodes7476 = node.contents();
        oldNodes.replaceWith(nodes7476);
      }));
      callback(root8573); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7475;
      nodes7475 = node.contents();
      oldNodes.replaceWith(nodes7475);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp7430 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7342 = mobl.ref(result__);
    
    var nodes7477 = $("<span>");
    root8568.append(nodes7477);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7342, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8575 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7478 = $("<span>");
      root8575.append(nodes7478);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8576 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8576); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7478;
        nodes7478 = node.contents();
        oldNodes.replaceWith(nodes7478);
      }));
      callback(root8575); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7477;
      nodes7477 = node.contents();
      oldNodes.replaceWith(nodes7477);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp7429 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7343 = mobl.ref(result__);
    
    var nodes7479 = $("<span>");
    root8568.append(nodes7479);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7343, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8577 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7480 = $("<span>");
      root8577.append(nodes7480);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8578 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8578); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7480;
        nodes7480 = node.contents();
        oldNodes.replaceWith(nodes7480);
      }));
      callback(root8577); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7479;
      nodes7479 = node.contents();
      oldNodes.replaceWith(nodes7479);
    }));
    callback(root8568); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7470;
    nodes7470 = node.contents();
    oldNodes.replaceWith(nodes7470);
  }));
  callback(root8565); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root8579 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7481 = $("<span>");
  root8579.append(nodes7481);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8580 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7345 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7344 = mobl.ref(result__);
    
    var nodes7482 = $("<span>");
    root8580.append(nodes7482);
    subs__.addSub((ui.backButton)(tmp7344, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7345, function(_, callback) {
      var root8581 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8581); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7482;
      nodes7482 = node.contents();
      oldNodes.replaceWith(nodes7482);
    }));
    callback(root8580); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7481;
    nodes7481 = node.contents();
    oldNodes.replaceWith(nodes7481);
  }));
  var nodes7483 = $("<span>");
  root8579.append(nodes7483);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8582 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp7436 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7346 = mobl.ref(result__);
    
    var nodes7484 = $("<span>");
    root8582.append(nodes7484);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7346, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8583 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7485 = $("<span>");
      root8583.append(nodes7485);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8584 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8584); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7485;
        nodes7485 = node.contents();
        oldNodes.replaceWith(nodes7485);
      }));
      callback(root8583); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7484;
      nodes7484 = node.contents();
      oldNodes.replaceWith(nodes7484);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp7435 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7347 = mobl.ref(result__);
    
    var nodes7486 = $("<span>");
    root8582.append(nodes7486);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7347, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8585 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7487 = $("<span>");
      root8585.append(nodes7487);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8586 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8586); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7487;
        nodes7487 = node.contents();
        oldNodes.replaceWith(nodes7487);
      }));
      callback(root8585); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7486;
      nodes7486 = node.contents();
      oldNodes.replaceWith(nodes7486);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp7434 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7348 = mobl.ref(result__);
    
    var nodes7488 = $("<span>");
    root8582.append(nodes7488);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7348, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8587 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7489 = $("<span>");
      root8587.append(nodes7489);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8588 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8588); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7489;
        nodes7489 = node.contents();
        oldNodes.replaceWith(nodes7489);
      }));
      callback(root8587); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7488;
      nodes7488 = node.contents();
      oldNodes.replaceWith(nodes7488);
    }));
    callback(root8582); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7483;
    nodes7483 = node.contents();
    oldNodes.replaceWith(nodes7483);
  }));
  callback(root8579); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root8589 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7490 = $("<span>");
  root8589.append(nodes7490);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8590 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7350 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7349 = mobl.ref(result__);
    
    var nodes7491 = $("<span>");
    root8590.append(nodes7491);
    subs__.addSub((ui.backButton)(tmp7349, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7350, function(_, callback) {
      var root8591 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8591); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7491;
      nodes7491 = node.contents();
      oldNodes.replaceWith(nodes7491);
    }));
    callback(root8590); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7490;
    nodes7490 = node.contents();
    oldNodes.replaceWith(nodes7490);
  }));
  var nodes7492 = $("<span>");
  root8589.append(nodes7492);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8592 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp7440 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7351 = mobl.ref(result__);
    
    var nodes7493 = $("<span>");
    root8592.append(nodes7493);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7351, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8593 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7494 = $("<span>");
      root8593.append(nodes7494);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8594 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8594); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7494;
        nodes7494 = node.contents();
        oldNodes.replaceWith(nodes7494);
      }));
      callback(root8593); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7493;
      nodes7493 = node.contents();
      oldNodes.replaceWith(nodes7493);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp7439 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7352 = mobl.ref(result__);
    
    var nodes7495 = $("<span>");
    root8592.append(nodes7495);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7352, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8595 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7496 = $("<span>");
      root8595.append(nodes7496);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8596 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8596); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7496;
        nodes7496 = node.contents();
        oldNodes.replaceWith(nodes7496);
      }));
      callback(root8595); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7495;
      nodes7495 = node.contents();
      oldNodes.replaceWith(nodes7495);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp7438 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7353 = mobl.ref(result__);
    
    var nodes7497 = $("<span>");
    root8592.append(nodes7497);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7353, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8597 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7498 = $("<span>");
      root8597.append(nodes7498);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8598 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8598); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7498;
        nodes7498 = node.contents();
        oldNodes.replaceWith(nodes7498);
      }));
      callback(root8597); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7497;
      nodes7497 = node.contents();
      oldNodes.replaceWith(nodes7497);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp7437 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7354 = mobl.ref(result__);
    
    var nodes7499 = $("<span>");
    root8592.append(nodes7499);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7354, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8599 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7500 = $("<span>");
      root8599.append(nodes7500);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8600 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8600); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7500;
        nodes7500 = node.contents();
        oldNodes.replaceWith(nodes7500);
      }));
      callback(root8599); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7499;
      nodes7499 = node.contents();
      oldNodes.replaceWith(nodes7499);
    }));
    callback(root8592); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7492;
    nodes7492 = node.contents();
    oldNodes.replaceWith(nodes7492);
  }));
  callback(root8589); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root8601 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7501 = $("<span>");
  root8601.append(nodes7501);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8602 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7356 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7355 = mobl.ref(result__);
    
    var nodes7502 = $("<span>");
    root8602.append(nodes7502);
    subs__.addSub((ui.backButton)(tmp7355, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7356, function(_, callback) {
      var root8603 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8603); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7502;
      nodes7502 = node.contents();
      oldNodes.replaceWith(nodes7502);
    }));
    callback(root8602); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7501;
    nodes7501 = node.contents();
    oldNodes.replaceWith(nodes7501);
  }));
  var nodes7503 = $("<span>");
  root8601.append(nodes7503);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8604 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp7442 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7357 = mobl.ref(result__);
    
    var nodes7504 = $("<span>");
    root8604.append(nodes7504);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7357, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8605 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7505 = $("<span>");
      root8605.append(nodes7505);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8606 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8606); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7505;
        nodes7505 = node.contents();
        oldNodes.replaceWith(nodes7505);
      }));
      callback(root8605); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7504;
      nodes7504 = node.contents();
      oldNodes.replaceWith(nodes7504);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp7441 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7358 = mobl.ref(result__);
    
    var nodes7506 = $("<span>");
    root8604.append(nodes7506);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7358, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8607 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7507 = $("<span>");
      root8607.append(nodes7507);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8608 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8608); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7507;
        nodes7507 = node.contents();
        oldNodes.replaceWith(nodes7507);
      }));
      callback(root8607); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7506;
      nodes7506 = node.contents();
      oldNodes.replaceWith(nodes7506);
    }));
    callback(root8604); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7503;
    nodes7503 = node.contents();
    oldNodes.replaceWith(nodes7503);
  }));
  callback(root8601); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root8609 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7508 = $("<span>");
  root8609.append(nodes7508);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8610 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7360 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7359 = mobl.ref(result__);
    
    var nodes7509 = $("<span>");
    root8610.append(nodes7509);
    subs__.addSub((ui.backButton)(tmp7359, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7360, function(_, callback) {
      var root8611 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8611); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7509;
      nodes7509 = node.contents();
      oldNodes.replaceWith(nodes7509);
    }));
    callback(root8610); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7508;
    nodes7508 = node.contents();
    oldNodes.replaceWith(nodes7508);
  }));
  var nodes7510 = $("<span>");
  root8609.append(nodes7510);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8612 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp7447 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7361 = mobl.ref(result__);
    
    var nodes7511 = $("<span>");
    root8612.append(nodes7511);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7361, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8613 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7512 = $("<span>");
      root8613.append(nodes7512);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8614 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8614); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7512;
        nodes7512 = node.contents();
        oldNodes.replaceWith(nodes7512);
      }));
      callback(root8613); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7511;
      nodes7511 = node.contents();
      oldNodes.replaceWith(nodes7511);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp7446 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7362 = mobl.ref(result__);
    
    var nodes7513 = $("<span>");
    root8612.append(nodes7513);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7362, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8615 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7514 = $("<span>");
      root8615.append(nodes7514);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8616 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8616); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7514;
        nodes7514 = node.contents();
        oldNodes.replaceWith(nodes7514);
      }));
      callback(root8615); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7513;
      nodes7513 = node.contents();
      oldNodes.replaceWith(nodes7513);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp7445 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7363 = mobl.ref(result__);
    
    var nodes7515 = $("<span>");
    root8612.append(nodes7515);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7363, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8617 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7516 = $("<span>");
      root8617.append(nodes7516);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8618 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8618); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7516;
        nodes7516 = node.contents();
        oldNodes.replaceWith(nodes7516);
      }));
      callback(root8617); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7515;
      nodes7515 = node.contents();
      oldNodes.replaceWith(nodes7515);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp7444 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7364 = mobl.ref(result__);
    
    var nodes7517 = $("<span>");
    root8612.append(nodes7517);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7364, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8619 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7518 = $("<span>");
      root8619.append(nodes7518);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8620 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8620); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7518;
        nodes7518 = node.contents();
        oldNodes.replaceWith(nodes7518);
      }));
      callback(root8619); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7517;
      nodes7517 = node.contents();
      oldNodes.replaceWith(nodes7517);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp7443 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7365 = mobl.ref(result__);
    
    var nodes7519 = $("<span>");
    root8612.append(nodes7519);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7365, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8621 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7520 = $("<span>");
      root8621.append(nodes7520);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8622 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8622); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7520;
        nodes7520 = node.contents();
        oldNodes.replaceWith(nodes7520);
      }));
      callback(root8621); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7519;
      nodes7519 = node.contents();
      oldNodes.replaceWith(nodes7519);
    }));
    callback(root8612); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7510;
    nodes7510 = node.contents();
    oldNodes.replaceWith(nodes7510);
  }));
  callback(root8609); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root8623 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7521 = $("<span>");
  root8623.append(nodes7521);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8624 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7367 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7366 = mobl.ref(result__);
    
    var nodes7522 = $("<span>");
    root8624.append(nodes7522);
    subs__.addSub((ui.backButton)(tmp7366, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7367, function(_, callback) {
      var root8625 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8625); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7522;
      nodes7522 = node.contents();
      oldNodes.replaceWith(nodes7522);
    }));
    callback(root8624); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7521;
    nodes7521 = node.contents();
    oldNodes.replaceWith(nodes7521);
  }));
  var nodes7523 = $("<span>");
  root8623.append(nodes7523);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8626 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp7450 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7368 = mobl.ref(result__);
    
    var nodes7524 = $("<span>");
    root8626.append(nodes7524);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7368, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8627 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7525 = $("<span>");
      root8627.append(nodes7525);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8628 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8628); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7525;
        nodes7525 = node.contents();
        oldNodes.replaceWith(nodes7525);
      }));
      callback(root8627); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7524;
      nodes7524 = node.contents();
      oldNodes.replaceWith(nodes7524);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp7449 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7369 = mobl.ref(result__);
    
    var nodes7526 = $("<span>");
    root8626.append(nodes7526);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7369, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8629 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7527 = $("<span>");
      root8629.append(nodes7527);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8630 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8630); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7527;
        nodes7527 = node.contents();
        oldNodes.replaceWith(nodes7527);
      }));
      callback(root8629); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7526;
      nodes7526 = node.contents();
      oldNodes.replaceWith(nodes7526);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp7448 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7370 = mobl.ref(result__);
    
    var nodes7528 = $("<span>");
    root8626.append(nodes7528);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7370, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8631 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7529 = $("<span>");
      root8631.append(nodes7529);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8632 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8632); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7529;
        nodes7529 = node.contents();
        oldNodes.replaceWith(nodes7529);
      }));
      callback(root8631); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7528;
      nodes7528 = node.contents();
      oldNodes.replaceWith(nodes7528);
    }));
    callback(root8626); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7523;
    nodes7523 = node.contents();
    oldNodes.replaceWith(nodes7523);
  }));
  callback(root8623); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root8633 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7530 = $("<span>");
  root8633.append(nodes7530);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8634 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7372 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7371 = mobl.ref(result__);
    
    var nodes7531 = $("<span>");
    root8634.append(nodes7531);
    subs__.addSub((ui.backButton)(tmp7371, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7372, function(_, callback) {
      var root8635 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8635); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7531;
      nodes7531 = node.contents();
      oldNodes.replaceWith(nodes7531);
    }));
    callback(root8634); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7530;
    nodes7530 = node.contents();
    oldNodes.replaceWith(nodes7530);
  }));
  var nodes7532 = $("<span>");
  root8633.append(nodes7532);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8636 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp7451 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7373 = mobl.ref(result__);
    
    var nodes7533 = $("<span>");
    root8636.append(nodes7533);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7373, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8637 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7534 = $("<span>");
      root8637.append(nodes7534);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8638 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8638); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7534;
        nodes7534 = node.contents();
        oldNodes.replaceWith(nodes7534);
      }));
      callback(root8637); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7533;
      nodes7533 = node.contents();
      oldNodes.replaceWith(nodes7533);
    }));
    callback(root8636); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7532;
    nodes7532 = node.contents();
    oldNodes.replaceWith(nodes7532);
  }));
  callback(root8633); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root8639 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7535 = $("<span>");
  root8639.append(nodes7535);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8640 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp7464 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7374 = mobl.ref(result__);
    
    var nodes7536 = $("<span>");
    root8640.append(nodes7536);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7374, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8641 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7537 = $("<span>");
      root8641.append(nodes7537);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8642 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8642); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7537;
        nodes7537 = node.contents();
        oldNodes.replaceWith(nodes7537);
      }));
      callback(root8641); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7536;
      nodes7536 = node.contents();
      oldNodes.replaceWith(nodes7536);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp7463 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7375 = mobl.ref(result__);
    
    var nodes7538 = $("<span>");
    root8640.append(nodes7538);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7375, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7539 = $("<span>");
      root8643.append(nodes7539);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8644 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8644); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7539;
        nodes7539 = node.contents();
        oldNodes.replaceWith(nodes7539);
      }));
      callback(root8643); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7538;
      nodes7538 = node.contents();
      oldNodes.replaceWith(nodes7538);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp7462 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7376 = mobl.ref(result__);
    
    var nodes7540 = $("<span>");
    root8640.append(nodes7540);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7376, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8645 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7541 = $("<span>");
      root8645.append(nodes7541);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8646 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8646); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7541;
        nodes7541 = node.contents();
        oldNodes.replaceWith(nodes7541);
      }));
      callback(root8645); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7540;
      nodes7540 = node.contents();
      oldNodes.replaceWith(nodes7540);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp7461 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7377 = mobl.ref(result__);
    
    var nodes7542 = $("<span>");
    root8640.append(nodes7542);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7377, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8647 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7543 = $("<span>");
      root8647.append(nodes7543);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8648 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8648); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7543;
        nodes7543 = node.contents();
        oldNodes.replaceWith(nodes7543);
      }));
      callback(root8647); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7542;
      nodes7542 = node.contents();
      oldNodes.replaceWith(nodes7542);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp7460 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7378 = mobl.ref(result__);
    
    var nodes7544 = $("<span>");
    root8640.append(nodes7544);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7378, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8649 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7545 = $("<span>");
      root8649.append(nodes7545);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8650 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8650); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7545;
        nodes7545 = node.contents();
        oldNodes.replaceWith(nodes7545);
      }));
      callback(root8649); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7544;
      nodes7544 = node.contents();
      oldNodes.replaceWith(nodes7544);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp7459 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7379 = mobl.ref(result__);
    
    var nodes7546 = $("<span>");
    root8640.append(nodes7546);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7379, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8651 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7547 = $("<span>");
      root8651.append(nodes7547);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8652 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8652); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7547;
        nodes7547 = node.contents();
        oldNodes.replaceWith(nodes7547);
      }));
      callback(root8651); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7546;
      nodes7546 = node.contents();
      oldNodes.replaceWith(nodes7546);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp7458 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7380 = mobl.ref(result__);
    
    var nodes7548 = $("<span>");
    root8640.append(nodes7548);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7380, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8653 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7549 = $("<span>");
      root8653.append(nodes7549);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8654 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8654); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7549;
        nodes7549 = node.contents();
        oldNodes.replaceWith(nodes7549);
      }));
      callback(root8653); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7548;
      nodes7548 = node.contents();
      oldNodes.replaceWith(nodes7548);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp7457 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7381 = mobl.ref(result__);
    
    var nodes7550 = $("<span>");
    root8640.append(nodes7550);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7381, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8655 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7551 = $("<span>");
      root8655.append(nodes7551);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8656 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8656); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7551;
        nodes7551 = node.contents();
        oldNodes.replaceWith(nodes7551);
      }));
      callback(root8655); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7550;
      nodes7550 = node.contents();
      oldNodes.replaceWith(nodes7550);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp7456 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7382 = mobl.ref(result__);
    
    var nodes7552 = $("<span>");
    root8640.append(nodes7552);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7382, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7553 = $("<span>");
      root8657.append(nodes7553);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8658 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8658); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7553;
        nodes7553 = node.contents();
        oldNodes.replaceWith(nodes7553);
      }));
      callback(root8657); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7552;
      nodes7552 = node.contents();
      oldNodes.replaceWith(nodes7552);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp7455 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7383 = mobl.ref(result__);
    
    var nodes7554 = $("<span>");
    root8640.append(nodes7554);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7383, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8659 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7555 = $("<span>");
      root8659.append(nodes7555);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8660 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8660); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7555;
        nodes7555 = node.contents();
        oldNodes.replaceWith(nodes7555);
      }));
      callback(root8659); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7554;
      nodes7554 = node.contents();
      oldNodes.replaceWith(nodes7554);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp7454 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7384 = mobl.ref(result__);
    
    var nodes7556 = $("<span>");
    root8640.append(nodes7556);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7384, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8661 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7557 = $("<span>");
      root8661.append(nodes7557);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8662 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8662); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7557;
        nodes7557 = node.contents();
        oldNodes.replaceWith(nodes7557);
      }));
      callback(root8661); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7556;
      nodes7556 = node.contents();
      oldNodes.replaceWith(nodes7556);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp7453 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7385 = mobl.ref(result__);
    
    var nodes7558 = $("<span>");
    root8640.append(nodes7558);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7385, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8663 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7559 = $("<span>");
      root8663.append(nodes7559);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8664 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8664); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7559;
        nodes7559 = node.contents();
        oldNodes.replaceWith(nodes7559);
      }));
      callback(root8663); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7558;
      nodes7558 = node.contents();
      oldNodes.replaceWith(nodes7558);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp7452 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7386 = mobl.ref(result__);
    
    var nodes7560 = $("<span>");
    root8640.append(nodes7560);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7386, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8665 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7561 = $("<span>");
      root8665.append(nodes7561);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8666 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8666); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7561;
        nodes7561 = node.contents();
        oldNodes.replaceWith(nodes7561);
      }));
      callback(root8665); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7560;
      nodes7560 = node.contents();
      oldNodes.replaceWith(nodes7560);
    }));
    callback(root8640); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7535;
    nodes7535 = node.contents();
    oldNodes.replaceWith(nodes7535);
  }));
  callback(root8639); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root8667 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7562 = $("<span>");
  root8667.append(nodes7562);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8668 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp7470 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7387 = mobl.ref(result__);
    
    var nodes7563 = $("<span>");
    root8668.append(nodes7563);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7387, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8669 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7564 = $("<span>");
      root8669.append(nodes7564);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8670 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8670); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7564;
        nodes7564 = node.contents();
        oldNodes.replaceWith(nodes7564);
      }));
      callback(root8669); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7563;
      nodes7563 = node.contents();
      oldNodes.replaceWith(nodes7563);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp7469 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7388 = mobl.ref(result__);
    
    var nodes7565 = $("<span>");
    root8668.append(nodes7565);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7388, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8671 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7566 = $("<span>");
      root8671.append(nodes7566);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8672 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8672); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7566;
        nodes7566 = node.contents();
        oldNodes.replaceWith(nodes7566);
      }));
      callback(root8671); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7565;
      nodes7565 = node.contents();
      oldNodes.replaceWith(nodes7565);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp7468 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7389 = mobl.ref(result__);
    
    var nodes7567 = $("<span>");
    root8668.append(nodes7567);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7389, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8673 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7568 = $("<span>");
      root8673.append(nodes7568);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8674); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7568;
        nodes7568 = node.contents();
        oldNodes.replaceWith(nodes7568);
      }));
      callback(root8673); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7567;
      nodes7567 = node.contents();
      oldNodes.replaceWith(nodes7567);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp7467 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7390 = mobl.ref(result__);
    
    var nodes7569 = $("<span>");
    root8668.append(nodes7569);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7390, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8675 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7570 = $("<span>");
      root8675.append(nodes7570);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8676 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8676); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7570;
        nodes7570 = node.contents();
        oldNodes.replaceWith(nodes7570);
      }));
      callback(root8675); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7569;
      nodes7569 = node.contents();
      oldNodes.replaceWith(nodes7569);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp7466 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7391 = mobl.ref(result__);
    
    var nodes7571 = $("<span>");
    root8668.append(nodes7571);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7391, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8677 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7572 = $("<span>");
      root8677.append(nodes7572);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8678 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8678); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7572;
        nodes7572 = node.contents();
        oldNodes.replaceWith(nodes7572);
      }));
      callback(root8677); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7571;
      nodes7571 = node.contents();
      oldNodes.replaceWith(nodes7571);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp7465 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7392 = mobl.ref(result__);
    
    var nodes7573 = $("<span>");
    root8668.append(nodes7573);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7392, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8679 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7574 = $("<span>");
      root8679.append(nodes7574);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8680 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8680); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7574;
        nodes7574 = node.contents();
        oldNodes.replaceWith(nodes7574);
      }));
      callback(root8679); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7573;
      nodes7573 = node.contents();
      oldNodes.replaceWith(nodes7573);
    }));
    callback(root8668); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7562;
    nodes7562 = node.contents();
    oldNodes.replaceWith(nodes7562);
  }));
  callback(root8667); return subs__;
  
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
  var root8681 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1115 = $("<div>");
  
  var ref1080 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref1080.get() !== null) {
    node1115.attr('class', ref1080.get());
    subs__.addSub(ref1080.addEventListener('change', function(_, ref, val) {
      node1115.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1080.rebind());
  
  var val480 = onclick.get();
  if(val480 !== null) {
    subs__.addSub(mobl.domBind(node1115, 'tap', val480));
  }
  
  
  var node1116 = $("<div>");
  
  var ref1079 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref1079.get() !== null) {
    node1116.attr('class', ref1079.get());
    subs__.addSub(ref1079.addEventListener('change', function(_, ref, val) {
      node1116.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1079.rebind());
  
  
  var node1117 = $("<div>");
  
  var ref1077 = text;
  node1117.text(""+ref1077.get());
  var ignore199 = false;
  subs__.addSub(ref1077.addEventListener('change', function(_, ref, val) {
    if(ignore199) return;
    node1117.text(""+val);
  }));
  subs__.addSub(ref1077.rebind());
  
  
  var ref1078 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1078.get() !== null) {
    node1117.attr('class', ref1078.get());
    subs__.addSub(ref1078.addEventListener('change', function(_, ref, val) {
      node1117.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1078.rebind());
  
  node1116.append(node1117);
  node1115.append(node1116);
  var nodes7575 = $("<span>");
  node1115.append(nodes7575);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl413();
  }));
  
  function renderControl413() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8682 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8682); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7575;
      nodes7575 = node.contents();
      oldNodes.replaceWith(nodes7575);
    }));
  }
  renderControl413();
  root8681.append(node1115);
  callback(root8681); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp7471 = result__;
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
  var root8683 = $("<span>");
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
  var tmp7397 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp7396 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp7396.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp7396.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp7396.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes7576 = $("<span>");
  root8683.append(nodes7576);
  subs__.addSub((mobl.block)(tmp7396, mobl.ref(null), tmp7397, mobl.ref(null), function(_, callback) {
    var root8684 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp7393 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp7393.set("A" + number.get() + ". ");
    }));
    
    var nodes7577 = $("<span>");
    root8684.append(nodes7577);
    subs__.addSub((mobl.label)(tmp7393, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8685 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8685); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7577;
      nodes7577 = node.contents();
      oldNodes.replaceWith(nodes7577);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp7395 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp7395.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1118 = $("<span>");
    root8684.append(node1118);
    var condSubs272 = new mobl.CompSubscription();
    subs__.addSub(condSubs272);
    var oldValue272;
    var renderCond272 = function() {
      var value640 = tmp7395.get();
      if(oldValue272 === value640) return;
      oldValue272 = value640;
      var subs__ = condSubs272;
      subs__.unsubscribe();
      node1118.empty();
      if(value640) {
        
        var node1119 = $("<span>");
        
        var ref1081 = mobl.ref("answer-block-" + number.get());
        if(ref1081.get() !== null) {
          node1119.attr('id', ref1081.get());
          subs__.addSub(ref1081.addEventListener('change', function(_, ref, val) {
            node1119.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1119.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref1081.rebind());
        
        var result__ = nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp7394 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp7394.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp7394.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes7578 = $("<span>");
        node1119.append(nodes7578);
        subs__.addSub((mobl.html)(tmp7394, function(_, callback) {
          var root8686 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8686); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7578;
          nodes7578 = node.contents();
          oldNodes.replaceWith(nodes7578);
        }));
        node1118.append(node1119);
        
        
        
      } else {
        var nodes7579 = $("<span>");
        node1118.append(nodes7579);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root8687 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8687); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7579;
          nodes7579 = node.contents();
          oldNodes.replaceWith(nodes7579);
        }));
        
        
      }
    };
    renderCond272();
    subs__.addSub(tmp7395.addEventListener('change', function() {
      renderCond272();
    }));
    
    callback(root8684); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7576;
    nodes7576 = node.contents();
    oldNodes.replaceWith(nodes7576);
  }));
  var nodes7580 = $("<span>");
  root8683.append(nodes7580);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8688 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes7581 = $("<span>");
    root8688.append(nodes7581);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8689 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8689); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7581;
      nodes7581 = node.contents();
      oldNodes.replaceWith(nodes7581);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7398 = mobl.ref(result__);
    
    var nodes7582 = $("<span>");
    root8688.append(nodes7582);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp7398, function(_, callback) {
      var root8690 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8690); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7582;
      nodes7582 = node.contents();
      oldNodes.replaceWith(nodes7582);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7399 = mobl.ref(result__);
    
    var nodes7583 = $("<span>");
    root8688.append(nodes7583);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp7399, function(_, callback) {
      var root8691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8691); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7583;
      nodes7583 = node.contents();
      oldNodes.replaceWith(nodes7583);
    }));
    callback(root8688); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7580;
    nodes7580 = node.contents();
    oldNodes.replaceWith(nodes7580);
  }));
  callback(root8683); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp7472 = result__;
    var result__ = tmp7472;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp7473 = result__;
        var result__ = tmp7473;
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
  var root8692 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp7479 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp7401 = mobl.ref(result__);
  
  var nodes7584 = $("<span>");
  root8692.append(nodes7584);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp7401, function(_, callback) {
    var root8693 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp7474 = result__;
                       var result__ = tmp7474;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp7475 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp7400 = mobl.ref(result__);
    
    var nodes7585 = $("<span>");
    root8693.append(nodes7585);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7400, function(_, callback) {
      var root8694 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8694); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7585;
      nodes7585 = node.contents();
      oldNodes.replaceWith(nodes7585);
    }));
    callback(root8693); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7584;
    nodes7584 = node.contents();
    oldNodes.replaceWith(nodes7584);
  }));
  var nodes7586 = $("<span>");
  root8692.append(nodes7586);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8695 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp7478 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7404 = mobl.ref(result__);
    
    var nodes7587 = $("<span>");
    root8695.append(nodes7587);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp7404, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root8696 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp7402 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp7402.set("Q" + number.get() + ". ");
      }));
      
      var nodes7588 = $("<span>");
      root8696.append(nodes7588);
      subs__.addSub((mobl.html)(tmp7402, function(_, callback) {
        var root8697 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8697); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7588;
        nodes7588 = node.contents();
        oldNodes.replaceWith(nodes7588);
      }));
      
      var node1120 = $("<span>");
      
      var ref1082 = mobl.ref("question-block-" + number.get());
      if(ref1082.get() !== null) {
        node1120.attr('id', ref1082.get());
        subs__.addSub(ref1082.addEventListener('change', function(_, ref, val) {
          node1120.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1120.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref1082.rebind());
      
      var result__ = nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp7403 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp7403.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp7403.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes7589 = $("<span>");
      node1120.append(nodes7589);
      subs__.addSub((mobl.html)(tmp7403, function(_, callback) {
        var root8698 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8698); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7589;
        nodes7589 = node.contents();
        oldNodes.replaceWith(nodes7589);
      }));
      root8696.append(node1120);
      callback(root8696); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7587;
      nodes7587 = node.contents();
      oldNodes.replaceWith(nodes7587);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp7477 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7406 = mobl.ref(result__);
    
    var nodes7590 = $("<span>");
    root8695.append(nodes7590);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7406, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root8699 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7591 = $("<span>");
      root8699.append(nodes7591);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8700 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp7476 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp7405 = mobl.ref(result__);
        
        var nodes7592 = $("<span>");
        root8700.append(nodes7592);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp7405, function(_, callback) {
          var root8701 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8701); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7592;
          nodes7592 = node.contents();
          oldNodes.replaceWith(nodes7592);
        }));
        callback(root8700); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7591;
        nodes7591 = node.contents();
        oldNodes.replaceWith(nodes7591);
      }));
      
      var node1121 = $("<span>");
      root8699.append(node1121);
      var condSubs273 = new mobl.CompSubscription();
      subs__.addSub(condSubs273);
      var oldValue273;
      var renderCond273 = function() {
        var value641 = qa.get().done;
        if(oldValue273 === value641) return;
        oldValue273 = value641;
        var subs__ = condSubs273;
        subs__.unsubscribe();
        node1121.empty();
        if(value641) {
          var nodes7593 = $("<span>");
          node1121.append(nodes7593);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root8702 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8702); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7593;
            nodes7593 = node.contents();
            oldNodes.replaceWith(nodes7593);
          }));
          
          
        } else {
          
        }
      };
      renderCond273();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond273();
      }));
      
      callback(root8699); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7590;
      nodes7590 = node.contents();
      oldNodes.replaceWith(nodes7590);
    }));
    callback(root8695); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7586;
    nodes7586 = node.contents();
    oldNodes.replaceWith(nodes7586);
  }));
  callback(root8692); return subs__;
  
  
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
  qas.list(function(coll825) {
    coll825 = coll825.reverse();
    function processOne273() {
      var item;
      item = coll825.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll825.length > 0) processOne273(); else rest273();
      
    }
    function rest273() {
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
    if(coll825.length > 0) processOne273(); else rest273();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll826) {
    coll826 = coll826.reverse();
    function processOne274() {
      var item;
      item = coll826.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll826.length > 0) processOne274(); else rest274();
      
    }
    function rest274() {
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
    if(coll826.length > 0) processOne274(); else rest274();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll827) {
    coll827 = coll827.reverse();
    function processOne275() {
      var item;
      item = coll827.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll827.length > 0) processOne275(); else rest275();
      
    }
    function rest275() {
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
    if(coll827.length > 0) processOne275(); else rest275();
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