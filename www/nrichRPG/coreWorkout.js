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
    var tmp604 = result__;
    var result__ = tmp604;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp605 = result__;
      var result__ = tmp605;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp606 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll18) {
    coll18 = coll18.reverse();
    function processOne18() {
      var i;
      i = coll18.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp607 = result__;
        
        if(coll18.length > 0) processOne18(); else rest18();
        
      });
    }
    function rest18() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll18.length > 0) processOne18(); else rest18();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll19) {
    coll19 = coll19.reverse();
    function processOne19() {
      var i;
      i = coll19.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp608 = result__;
          
          if(coll19.length > 0) processOne19(); else rest19();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp608 = result__;
            
            if(coll19.length > 0) processOne19(); else rest19();
            
          });
        }
      }
    }
    function rest19() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll19.length > 0) processOne19(); else rest19();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll20) {
    coll20 = coll20.reverse();
    function processOne20() {
      var i;
      i = coll20.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp609 = result__;
        
        if(coll20.length > 0) processOne20(); else rest20();
        
      });
    }
    function rest20() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll20.length > 0) processOne20(); else rest20();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root540 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes492 = $("<span>");
  root540.append(nodes492);
  subs__.addSub((ui.group)(function(_, callback) {
    var root541 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp617 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp516 = mobl.ref(result__);
    
    var nodes493 = $("<span>");
    root541.append(nodes493);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp516, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root542 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes494 = $("<span>");
      root542.append(nodes494);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root543 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root543); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes494;
        nodes494 = node.contents();
        oldNodes.replaceWith(nodes494);
      }));
      callback(root542); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes493;
      nodes493 = node.contents();
      oldNodes.replaceWith(nodes493);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp616 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp517 = mobl.ref(result__);
    
    var nodes495 = $("<span>");
    root541.append(nodes495);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp517, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root544 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes496 = $("<span>");
      root544.append(nodes496);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root545 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root545); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes496;
        nodes496 = node.contents();
        oldNodes.replaceWith(nodes496);
      }));
      callback(root544); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes495;
      nodes495 = node.contents();
      oldNodes.replaceWith(nodes495);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp615 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp518 = mobl.ref(result__);
    
    var nodes497 = $("<span>");
    root541.append(nodes497);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp518, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root546 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes498 = $("<span>");
      root546.append(nodes498);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root547 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root547); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes498;
        nodes498 = node.contents();
        oldNodes.replaceWith(nodes498);
      }));
      callback(root546); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes497;
      nodes497 = node.contents();
      oldNodes.replaceWith(nodes497);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp614 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp519 = mobl.ref(result__);
    
    var nodes499 = $("<span>");
    root541.append(nodes499);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp519, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root548 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes500 = $("<span>");
      root548.append(nodes500);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root549 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root549); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes500;
        nodes500 = node.contents();
        oldNodes.replaceWith(nodes500);
      }));
      callback(root548); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes499;
      nodes499 = node.contents();
      oldNodes.replaceWith(nodes499);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp613 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp520 = mobl.ref(result__);
    
    var nodes501 = $("<span>");
    root541.append(nodes501);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp520, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root550 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes502 = $("<span>");
      root550.append(nodes502);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root551 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root551); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes502;
        nodes502 = node.contents();
        oldNodes.replaceWith(nodes502);
      }));
      callback(root550); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes501;
      nodes501 = node.contents();
      oldNodes.replaceWith(nodes501);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp612 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp521 = mobl.ref(result__);
    
    var nodes503 = $("<span>");
    root541.append(nodes503);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp521, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root552 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes504 = $("<span>");
      root552.append(nodes504);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root553 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root553); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes504;
        nodes504 = node.contents();
        oldNodes.replaceWith(nodes504);
      }));
      callback(root552); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes503;
      nodes503 = node.contents();
      oldNodes.replaceWith(nodes503);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp611 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp522 = mobl.ref(result__);
    
    var nodes505 = $("<span>");
    root541.append(nodes505);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp522, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root554 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes506 = $("<span>");
      root554.append(nodes506);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root555 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root555); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes506;
        nodes506 = node.contents();
        oldNodes.replaceWith(nodes506);
      }));
      callback(root554); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes505;
      nodes505 = node.contents();
      oldNodes.replaceWith(nodes505);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp610 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp523 = mobl.ref(result__);
    
    var nodes507 = $("<span>");
    root541.append(nodes507);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp523, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root556 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes508 = $("<span>");
      root556.append(nodes508);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root557 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root557); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes508;
        nodes508 = node.contents();
        oldNodes.replaceWith(nodes508);
      }));
      callback(root556); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes507;
      nodes507 = node.contents();
      oldNodes.replaceWith(nodes507);
    }));
    callback(root541); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes492;
    nodes492 = node.contents();
    oldNodes.replaceWith(nodes492);
  }));
  callback(root540); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root558 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes509 = $("<span>");
  root558.append(nodes509);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root559 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp525 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp524 = mobl.ref(result__);
    
    var nodes510 = $("<span>");
    root559.append(nodes510);
    subs__.addSub((ui.backButton)(tmp524, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp525, function(_, callback) {
      var root560 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root560); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes510;
      nodes510 = node.contents();
      oldNodes.replaceWith(nodes510);
    }));
    callback(root559); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes509;
    nodes509 = node.contents();
    oldNodes.replaceWith(nodes509);
  }));
  var nodes511 = $("<span>");
  root558.append(nodes511);
  subs__.addSub((ui.group)(function(_, callback) {
    var root561 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp625 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp526 = mobl.ref(result__);
    
    var nodes512 = $("<span>");
    root561.append(nodes512);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp526, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes513 = $("<span>");
      root562.append(nodes513);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root563 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root563); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes513;
        nodes513 = node.contents();
        oldNodes.replaceWith(nodes513);
      }));
      callback(root562); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes512;
      nodes512 = node.contents();
      oldNodes.replaceWith(nodes512);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp624 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp527 = mobl.ref(result__);
    
    var nodes514 = $("<span>");
    root561.append(nodes514);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp527, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root564 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes515 = $("<span>");
      root564.append(nodes515);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root565 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root565); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes515;
        nodes515 = node.contents();
        oldNodes.replaceWith(nodes515);
      }));
      callback(root564); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes514;
      nodes514 = node.contents();
      oldNodes.replaceWith(nodes514);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp623 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp528 = mobl.ref(result__);
    
    var nodes516 = $("<span>");
    root561.append(nodes516);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp528, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes517 = $("<span>");
      root566.append(nodes517);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root567 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root567); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes517;
        nodes517 = node.contents();
        oldNodes.replaceWith(nodes517);
      }));
      callback(root566); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes516;
      nodes516 = node.contents();
      oldNodes.replaceWith(nodes516);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp622 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp529 = mobl.ref(result__);
    
    var nodes518 = $("<span>");
    root561.append(nodes518);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp529, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root568 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes519 = $("<span>");
      root568.append(nodes519);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root569 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root569); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes519;
        nodes519 = node.contents();
        oldNodes.replaceWith(nodes519);
      }));
      callback(root568); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes518;
      nodes518 = node.contents();
      oldNodes.replaceWith(nodes518);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp621 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp530 = mobl.ref(result__);
    
    var nodes520 = $("<span>");
    root561.append(nodes520);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp530, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root570 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes521 = $("<span>");
      root570.append(nodes521);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root571 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root571); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes521;
        nodes521 = node.contents();
        oldNodes.replaceWith(nodes521);
      }));
      callback(root570); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes520;
      nodes520 = node.contents();
      oldNodes.replaceWith(nodes520);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp620 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp531 = mobl.ref(result__);
    
    var nodes522 = $("<span>");
    root561.append(nodes522);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp531, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes523 = $("<span>");
      root572.append(nodes523);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root573 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root573); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes523;
        nodes523 = node.contents();
        oldNodes.replaceWith(nodes523);
      }));
      callback(root572); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes522;
      nodes522 = node.contents();
      oldNodes.replaceWith(nodes522);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp619 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp532 = mobl.ref(result__);
    
    var nodes524 = $("<span>");
    root561.append(nodes524);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp532, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes525 = $("<span>");
      root574.append(nodes525);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root575 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root575); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes525;
        nodes525 = node.contents();
        oldNodes.replaceWith(nodes525);
      }));
      callback(root574); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes524;
      nodes524 = node.contents();
      oldNodes.replaceWith(nodes524);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp618 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp533 = mobl.ref(result__);
    
    var nodes526 = $("<span>");
    root561.append(nodes526);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp533, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root576 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes527 = $("<span>");
      root576.append(nodes527);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root577 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root577); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes527;
        nodes527 = node.contents();
        oldNodes.replaceWith(nodes527);
      }));
      callback(root576); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes526;
      nodes526 = node.contents();
      oldNodes.replaceWith(nodes526);
    }));
    callback(root561); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes511;
    nodes511 = node.contents();
    oldNodes.replaceWith(nodes511);
  }));
  callback(root558); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root578 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes528 = $("<span>");
  root578.append(nodes528);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root579 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp535 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp534 = mobl.ref(result__);
    
    var nodes529 = $("<span>");
    root579.append(nodes529);
    subs__.addSub((ui.backButton)(tmp534, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp535, function(_, callback) {
      var root580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root580); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes529;
      nodes529 = node.contents();
      oldNodes.replaceWith(nodes529);
    }));
    callback(root579); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes528;
    nodes528 = node.contents();
    oldNodes.replaceWith(nodes528);
  }));
  var nodes530 = $("<span>");
  root578.append(nodes530);
  subs__.addSub((ui.group)(function(_, callback) {
    var root581 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp630 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp536 = mobl.ref(result__);
    
    var nodes531 = $("<span>");
    root581.append(nodes531);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp536, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes532 = $("<span>");
      root582.append(nodes532);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root583 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root583); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes532;
        nodes532 = node.contents();
        oldNodes.replaceWith(nodes532);
      }));
      callback(root582); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes531;
      nodes531 = node.contents();
      oldNodes.replaceWith(nodes531);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp629 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp537 = mobl.ref(result__);
    
    var nodes533 = $("<span>");
    root581.append(nodes533);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp537, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes534 = $("<span>");
      root584.append(nodes534);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes534;
        nodes534 = node.contents();
        oldNodes.replaceWith(nodes534);
      }));
      callback(root584); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes533;
      nodes533 = node.contents();
      oldNodes.replaceWith(nodes533);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp628 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp538 = mobl.ref(result__);
    
    var nodes535 = $("<span>");
    root581.append(nodes535);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp538, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes536 = $("<span>");
      root586.append(nodes536);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root587 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root587); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes536;
        nodes536 = node.contents();
        oldNodes.replaceWith(nodes536);
      }));
      callback(root586); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes535;
      nodes535 = node.contents();
      oldNodes.replaceWith(nodes535);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp627 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp539 = mobl.ref(result__);
    
    var nodes537 = $("<span>");
    root581.append(nodes537);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp539, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root588 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes538 = $("<span>");
      root588.append(nodes538);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root589 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root589); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes538;
        nodes538 = node.contents();
        oldNodes.replaceWith(nodes538);
      }));
      callback(root588); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes537;
      nodes537 = node.contents();
      oldNodes.replaceWith(nodes537);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp626 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp540 = mobl.ref(result__);
    
    var nodes539 = $("<span>");
    root581.append(nodes539);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp540, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes540 = $("<span>");
      root590.append(nodes540);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root591 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root591); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes540;
        nodes540 = node.contents();
        oldNodes.replaceWith(nodes540);
      }));
      callback(root590); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes539;
      nodes539 = node.contents();
      oldNodes.replaceWith(nodes539);
    }));
    callback(root581); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes530;
    nodes530 = node.contents();
    oldNodes.replaceWith(nodes530);
  }));
  callback(root578); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root592 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes541 = $("<span>");
  root592.append(nodes541);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root593 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp542 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp541 = mobl.ref(result__);
    
    var nodes542 = $("<span>");
    root593.append(nodes542);
    subs__.addSub((ui.backButton)(tmp541, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp542, function(_, callback) {
      var root594 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root594); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes542;
      nodes542 = node.contents();
      oldNodes.replaceWith(nodes542);
    }));
    callback(root593); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes541;
    nodes541 = node.contents();
    oldNodes.replaceWith(nodes541);
  }));
  var nodes543 = $("<span>");
  root592.append(nodes543);
  subs__.addSub((ui.group)(function(_, callback) {
    var root595 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp633 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp543 = mobl.ref(result__);
    
    var nodes544 = $("<span>");
    root595.append(nodes544);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp543, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root596 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes545 = $("<span>");
      root596.append(nodes545);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root597 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root597); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes545;
        nodes545 = node.contents();
        oldNodes.replaceWith(nodes545);
      }));
      callback(root596); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes544;
      nodes544 = node.contents();
      oldNodes.replaceWith(nodes544);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp632 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp544 = mobl.ref(result__);
    
    var nodes546 = $("<span>");
    root595.append(nodes546);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp544, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root598 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes547 = $("<span>");
      root598.append(nodes547);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root599 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root599); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes547;
        nodes547 = node.contents();
        oldNodes.replaceWith(nodes547);
      }));
      callback(root598); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes546;
      nodes546 = node.contents();
      oldNodes.replaceWith(nodes546);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp631 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp545 = mobl.ref(result__);
    
    var nodes548 = $("<span>");
    root595.append(nodes548);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp545, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root600 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes549 = $("<span>");
      root600.append(nodes549);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root601 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root601); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes549;
        nodes549 = node.contents();
        oldNodes.replaceWith(nodes549);
      }));
      callback(root600); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes548;
      nodes548 = node.contents();
      oldNodes.replaceWith(nodes548);
    }));
    callback(root595); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes543;
    nodes543 = node.contents();
    oldNodes.replaceWith(nodes543);
  }));
  callback(root592); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root602 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes550 = $("<span>");
  root602.append(nodes550);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root603 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp547 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp546 = mobl.ref(result__);
    
    var nodes551 = $("<span>");
    root603.append(nodes551);
    subs__.addSub((ui.backButton)(tmp546, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp547, function(_, callback) {
      var root604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root604); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes551;
      nodes551 = node.contents();
      oldNodes.replaceWith(nodes551);
    }));
    callback(root603); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes550;
    nodes550 = node.contents();
    oldNodes.replaceWith(nodes550);
  }));
  var nodes552 = $("<span>");
  root602.append(nodes552);
  subs__.addSub((ui.group)(function(_, callback) {
    var root605 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp637 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp548 = mobl.ref(result__);
    
    var nodes553 = $("<span>");
    root605.append(nodes553);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp548, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes554 = $("<span>");
      root606.append(nodes554);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root607 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root607); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes554;
        nodes554 = node.contents();
        oldNodes.replaceWith(nodes554);
      }));
      callback(root606); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes553;
      nodes553 = node.contents();
      oldNodes.replaceWith(nodes553);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp636 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp549 = mobl.ref(result__);
    
    var nodes555 = $("<span>");
    root605.append(nodes555);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp549, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes556 = $("<span>");
      root608.append(nodes556);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes556;
        nodes556 = node.contents();
        oldNodes.replaceWith(nodes556);
      }));
      callback(root608); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes555;
      nodes555 = node.contents();
      oldNodes.replaceWith(nodes555);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp635 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp550 = mobl.ref(result__);
    
    var nodes557 = $("<span>");
    root605.append(nodes557);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp550, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes558 = $("<span>");
      root610.append(nodes558);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root611 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root611); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes558;
        nodes558 = node.contents();
        oldNodes.replaceWith(nodes558);
      }));
      callback(root610); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes557;
      nodes557 = node.contents();
      oldNodes.replaceWith(nodes557);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp634 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp551 = mobl.ref(result__);
    
    var nodes559 = $("<span>");
    root605.append(nodes559);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp551, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root612 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes560 = $("<span>");
      root612.append(nodes560);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root613 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root613); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes560;
        nodes560 = node.contents();
        oldNodes.replaceWith(nodes560);
      }));
      callback(root612); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes559;
      nodes559 = node.contents();
      oldNodes.replaceWith(nodes559);
    }));
    callback(root605); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes552;
    nodes552 = node.contents();
    oldNodes.replaceWith(nodes552);
  }));
  callback(root602); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root614 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes561 = $("<span>");
  root614.append(nodes561);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root615 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp553 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp552 = mobl.ref(result__);
    
    var nodes562 = $("<span>");
    root615.append(nodes562);
    subs__.addSub((ui.backButton)(tmp552, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp553, function(_, callback) {
      var root616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root616); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes562;
      nodes562 = node.contents();
      oldNodes.replaceWith(nodes562);
    }));
    callback(root615); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes561;
    nodes561 = node.contents();
    oldNodes.replaceWith(nodes561);
  }));
  var nodes563 = $("<span>");
  root614.append(nodes563);
  subs__.addSub((ui.group)(function(_, callback) {
    var root617 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp639 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp554 = mobl.ref(result__);
    
    var nodes564 = $("<span>");
    root617.append(nodes564);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp554, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root618 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes565 = $("<span>");
      root618.append(nodes565);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root619 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root619); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes565;
        nodes565 = node.contents();
        oldNodes.replaceWith(nodes565);
      }));
      callback(root618); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes564;
      nodes564 = node.contents();
      oldNodes.replaceWith(nodes564);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp638 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp555 = mobl.ref(result__);
    
    var nodes566 = $("<span>");
    root617.append(nodes566);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp555, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root620 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes567 = $("<span>");
      root620.append(nodes567);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root621 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root621); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes567;
        nodes567 = node.contents();
        oldNodes.replaceWith(nodes567);
      }));
      callback(root620); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes566;
      nodes566 = node.contents();
      oldNodes.replaceWith(nodes566);
    }));
    callback(root617); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes563;
    nodes563 = node.contents();
    oldNodes.replaceWith(nodes563);
  }));
  callback(root614); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root622 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes568 = $("<span>");
  root622.append(nodes568);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root623 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp557 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp556 = mobl.ref(result__);
    
    var nodes569 = $("<span>");
    root623.append(nodes569);
    subs__.addSub((ui.backButton)(tmp556, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp557, function(_, callback) {
      var root624 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root624); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes569;
      nodes569 = node.contents();
      oldNodes.replaceWith(nodes569);
    }));
    callback(root623); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes568;
    nodes568 = node.contents();
    oldNodes.replaceWith(nodes568);
  }));
  var nodes570 = $("<span>");
  root622.append(nodes570);
  subs__.addSub((ui.group)(function(_, callback) {
    var root625 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp644 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp558 = mobl.ref(result__);
    
    var nodes571 = $("<span>");
    root625.append(nodes571);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp558, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root626 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes572 = $("<span>");
      root626.append(nodes572);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root627 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root627); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes572;
        nodes572 = node.contents();
        oldNodes.replaceWith(nodes572);
      }));
      callback(root626); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes571;
      nodes571 = node.contents();
      oldNodes.replaceWith(nodes571);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp643 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp559 = mobl.ref(result__);
    
    var nodes573 = $("<span>");
    root625.append(nodes573);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp559, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root628 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes574 = $("<span>");
      root628.append(nodes574);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root629 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root629); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes574;
        nodes574 = node.contents();
        oldNodes.replaceWith(nodes574);
      }));
      callback(root628); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes573;
      nodes573 = node.contents();
      oldNodes.replaceWith(nodes573);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp642 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp560 = mobl.ref(result__);
    
    var nodes575 = $("<span>");
    root625.append(nodes575);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp560, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root630 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes576 = $("<span>");
      root630.append(nodes576);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root631 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root631); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes576;
        nodes576 = node.contents();
        oldNodes.replaceWith(nodes576);
      }));
      callback(root630); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes575;
      nodes575 = node.contents();
      oldNodes.replaceWith(nodes575);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp641 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp561 = mobl.ref(result__);
    
    var nodes577 = $("<span>");
    root625.append(nodes577);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp561, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root632 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes578 = $("<span>");
      root632.append(nodes578);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root633 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root633); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes578;
        nodes578 = node.contents();
        oldNodes.replaceWith(nodes578);
      }));
      callback(root632); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes577;
      nodes577 = node.contents();
      oldNodes.replaceWith(nodes577);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp640 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp562 = mobl.ref(result__);
    
    var nodes579 = $("<span>");
    root625.append(nodes579);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp562, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root634 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes580 = $("<span>");
      root634.append(nodes580);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root635 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root635); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes580;
        nodes580 = node.contents();
        oldNodes.replaceWith(nodes580);
      }));
      callback(root634); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes579;
      nodes579 = node.contents();
      oldNodes.replaceWith(nodes579);
    }));
    callback(root625); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes570;
    nodes570 = node.contents();
    oldNodes.replaceWith(nodes570);
  }));
  callback(root622); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root636 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes581 = $("<span>");
  root636.append(nodes581);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root637 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp564 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp563 = mobl.ref(result__);
    
    var nodes582 = $("<span>");
    root637.append(nodes582);
    subs__.addSub((ui.backButton)(tmp563, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp564, function(_, callback) {
      var root638 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root638); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes582;
      nodes582 = node.contents();
      oldNodes.replaceWith(nodes582);
    }));
    callback(root637); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes581;
    nodes581 = node.contents();
    oldNodes.replaceWith(nodes581);
  }));
  var nodes583 = $("<span>");
  root636.append(nodes583);
  subs__.addSub((ui.group)(function(_, callback) {
    var root639 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp647 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp565 = mobl.ref(result__);
    
    var nodes584 = $("<span>");
    root639.append(nodes584);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp565, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root640 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes585 = $("<span>");
      root640.append(nodes585);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root641 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root641); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes585;
        nodes585 = node.contents();
        oldNodes.replaceWith(nodes585);
      }));
      callback(root640); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes584;
      nodes584 = node.contents();
      oldNodes.replaceWith(nodes584);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp646 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp566 = mobl.ref(result__);
    
    var nodes586 = $("<span>");
    root639.append(nodes586);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp566, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root642 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes587 = $("<span>");
      root642.append(nodes587);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root643 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root643); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes587;
        nodes587 = node.contents();
        oldNodes.replaceWith(nodes587);
      }));
      callback(root642); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes586;
      nodes586 = node.contents();
      oldNodes.replaceWith(nodes586);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp645 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp567 = mobl.ref(result__);
    
    var nodes588 = $("<span>");
    root639.append(nodes588);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp567, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root644 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes589 = $("<span>");
      root644.append(nodes589);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root645 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root645); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes589;
        nodes589 = node.contents();
        oldNodes.replaceWith(nodes589);
      }));
      callback(root644); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes588;
      nodes588 = node.contents();
      oldNodes.replaceWith(nodes588);
    }));
    callback(root639); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes583;
    nodes583 = node.contents();
    oldNodes.replaceWith(nodes583);
  }));
  callback(root636); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root646 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes590 = $("<span>");
  root646.append(nodes590);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root647 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp569 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp568 = mobl.ref(result__);
    
    var nodes591 = $("<span>");
    root647.append(nodes591);
    subs__.addSub((ui.backButton)(tmp568, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp569, function(_, callback) {
      var root648 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root648); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes591;
      nodes591 = node.contents();
      oldNodes.replaceWith(nodes591);
    }));
    callback(root647); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes590;
    nodes590 = node.contents();
    oldNodes.replaceWith(nodes590);
  }));
  var nodes592 = $("<span>");
  root646.append(nodes592);
  subs__.addSub((ui.group)(function(_, callback) {
    var root649 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp648 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp570 = mobl.ref(result__);
    
    var nodes593 = $("<span>");
    root649.append(nodes593);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp570, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root650 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes594 = $("<span>");
      root650.append(nodes594);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root651 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root651); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes594;
        nodes594 = node.contents();
        oldNodes.replaceWith(nodes594);
      }));
      callback(root650); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes593;
      nodes593 = node.contents();
      oldNodes.replaceWith(nodes593);
    }));
    callback(root649); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes592;
    nodes592 = node.contents();
    oldNodes.replaceWith(nodes592);
  }));
  callback(root646); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root652 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes595 = $("<span>");
  root652.append(nodes595);
  subs__.addSub((ui.group)(function(_, callback) {
    var root653 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp661 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp571 = mobl.ref(result__);
    
    var nodes596 = $("<span>");
    root653.append(nodes596);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp571, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root654 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes597 = $("<span>");
      root654.append(nodes597);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root655 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root655); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes597;
        nodes597 = node.contents();
        oldNodes.replaceWith(nodes597);
      }));
      callback(root654); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes596;
      nodes596 = node.contents();
      oldNodes.replaceWith(nodes596);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp660 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp572 = mobl.ref(result__);
    
    var nodes598 = $("<span>");
    root653.append(nodes598);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp572, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root656 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes599 = $("<span>");
      root656.append(nodes599);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root657 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root657); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes599;
        nodes599 = node.contents();
        oldNodes.replaceWith(nodes599);
      }));
      callback(root656); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes598;
      nodes598 = node.contents();
      oldNodes.replaceWith(nodes598);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp659 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp573 = mobl.ref(result__);
    
    var nodes600 = $("<span>");
    root653.append(nodes600);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp573, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes601 = $("<span>");
      root658.append(nodes601);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root659 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root659); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes601;
        nodes601 = node.contents();
        oldNodes.replaceWith(nodes601);
      }));
      callback(root658); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes600;
      nodes600 = node.contents();
      oldNodes.replaceWith(nodes600);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp658 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp574 = mobl.ref(result__);
    
    var nodes602 = $("<span>");
    root653.append(nodes602);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp574, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root660 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes603 = $("<span>");
      root660.append(nodes603);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root661 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root661); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes603;
        nodes603 = node.contents();
        oldNodes.replaceWith(nodes603);
      }));
      callback(root660); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes602;
      nodes602 = node.contents();
      oldNodes.replaceWith(nodes602);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp657 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp575 = mobl.ref(result__);
    
    var nodes604 = $("<span>");
    root653.append(nodes604);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp575, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root662 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes605 = $("<span>");
      root662.append(nodes605);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root663 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root663); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes605;
        nodes605 = node.contents();
        oldNodes.replaceWith(nodes605);
      }));
      callback(root662); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes604;
      nodes604 = node.contents();
      oldNodes.replaceWith(nodes604);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp656 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp576 = mobl.ref(result__);
    
    var nodes606 = $("<span>");
    root653.append(nodes606);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp576, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root664 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes607 = $("<span>");
      root664.append(nodes607);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root665 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root665); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes607;
        nodes607 = node.contents();
        oldNodes.replaceWith(nodes607);
      }));
      callback(root664); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes606;
      nodes606 = node.contents();
      oldNodes.replaceWith(nodes606);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp655 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp577 = mobl.ref(result__);
    
    var nodes608 = $("<span>");
    root653.append(nodes608);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp577, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root666 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes609 = $("<span>");
      root666.append(nodes609);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root667 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root667); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes609;
        nodes609 = node.contents();
        oldNodes.replaceWith(nodes609);
      }));
      callback(root666); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes608;
      nodes608 = node.contents();
      oldNodes.replaceWith(nodes608);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp654 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp578 = mobl.ref(result__);
    
    var nodes610 = $("<span>");
    root653.append(nodes610);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp578, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root668 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes611 = $("<span>");
      root668.append(nodes611);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root669 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root669); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes611;
        nodes611 = node.contents();
        oldNodes.replaceWith(nodes611);
      }));
      callback(root668); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes610;
      nodes610 = node.contents();
      oldNodes.replaceWith(nodes610);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp653 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp579 = mobl.ref(result__);
    
    var nodes612 = $("<span>");
    root653.append(nodes612);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp579, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root670 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes613 = $("<span>");
      root670.append(nodes613);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root671 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root671); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes613;
        nodes613 = node.contents();
        oldNodes.replaceWith(nodes613);
      }));
      callback(root670); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes612;
      nodes612 = node.contents();
      oldNodes.replaceWith(nodes612);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp652 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp580 = mobl.ref(result__);
    
    var nodes614 = $("<span>");
    root653.append(nodes614);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp580, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root672 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes615 = $("<span>");
      root672.append(nodes615);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root673 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root673); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes615;
        nodes615 = node.contents();
        oldNodes.replaceWith(nodes615);
      }));
      callback(root672); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes614;
      nodes614 = node.contents();
      oldNodes.replaceWith(nodes614);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp651 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp581 = mobl.ref(result__);
    
    var nodes616 = $("<span>");
    root653.append(nodes616);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp581, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root674 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes617 = $("<span>");
      root674.append(nodes617);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root675 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root675); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes617;
        nodes617 = node.contents();
        oldNodes.replaceWith(nodes617);
      }));
      callback(root674); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes616;
      nodes616 = node.contents();
      oldNodes.replaceWith(nodes616);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp650 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp582 = mobl.ref(result__);
    
    var nodes618 = $("<span>");
    root653.append(nodes618);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp582, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root676 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes619 = $("<span>");
      root676.append(nodes619);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root677 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root677); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes619;
        nodes619 = node.contents();
        oldNodes.replaceWith(nodes619);
      }));
      callback(root676); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes618;
      nodes618 = node.contents();
      oldNodes.replaceWith(nodes618);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp649 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp583 = mobl.ref(result__);
    
    var nodes620 = $("<span>");
    root653.append(nodes620);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp583, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root678 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes621 = $("<span>");
      root678.append(nodes621);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root679 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root679); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes621;
        nodes621 = node.contents();
        oldNodes.replaceWith(nodes621);
      }));
      callback(root678); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes620;
      nodes620 = node.contents();
      oldNodes.replaceWith(nodes620);
    }));
    callback(root653); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes595;
    nodes595 = node.contents();
    oldNodes.replaceWith(nodes595);
  }));
  callback(root652); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root680 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes622 = $("<span>");
  root680.append(nodes622);
  subs__.addSub((ui.group)(function(_, callback) {
    var root681 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp667 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp584 = mobl.ref(result__);
    
    var nodes623 = $("<span>");
    root681.append(nodes623);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp584, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root682 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes624 = $("<span>");
      root682.append(nodes624);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root683 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root683); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes624;
        nodes624 = node.contents();
        oldNodes.replaceWith(nodes624);
      }));
      callback(root682); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes623;
      nodes623 = node.contents();
      oldNodes.replaceWith(nodes623);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp666 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp585 = mobl.ref(result__);
    
    var nodes625 = $("<span>");
    root681.append(nodes625);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp585, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root684 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes626 = $("<span>");
      root684.append(nodes626);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root685 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root685); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes626;
        nodes626 = node.contents();
        oldNodes.replaceWith(nodes626);
      }));
      callback(root684); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes625;
      nodes625 = node.contents();
      oldNodes.replaceWith(nodes625);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp665 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp586 = mobl.ref(result__);
    
    var nodes627 = $("<span>");
    root681.append(nodes627);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp586, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root686 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes628 = $("<span>");
      root686.append(nodes628);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root687 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root687); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes628;
        nodes628 = node.contents();
        oldNodes.replaceWith(nodes628);
      }));
      callback(root686); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes627;
      nodes627 = node.contents();
      oldNodes.replaceWith(nodes627);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp664 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp587 = mobl.ref(result__);
    
    var nodes629 = $("<span>");
    root681.append(nodes629);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp587, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root688 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes630 = $("<span>");
      root688.append(nodes630);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root689 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root689); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes630;
        nodes630 = node.contents();
        oldNodes.replaceWith(nodes630);
      }));
      callback(root688); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes629;
      nodes629 = node.contents();
      oldNodes.replaceWith(nodes629);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp663 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp588 = mobl.ref(result__);
    
    var nodes631 = $("<span>");
    root681.append(nodes631);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp588, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root690 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes632 = $("<span>");
      root690.append(nodes632);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root691 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root691); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes632;
        nodes632 = node.contents();
        oldNodes.replaceWith(nodes632);
      }));
      callback(root690); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes631;
      nodes631 = node.contents();
      oldNodes.replaceWith(nodes631);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp662 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp589 = mobl.ref(result__);
    
    var nodes633 = $("<span>");
    root681.append(nodes633);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp589, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root692 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes634 = $("<span>");
      root692.append(nodes634);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root693 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root693); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes634;
        nodes634 = node.contents();
        oldNodes.replaceWith(nodes634);
      }));
      callback(root692); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes633;
      nodes633 = node.contents();
      oldNodes.replaceWith(nodes633);
    }));
    callback(root681); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes622;
    nodes622 = node.contents();
    oldNodes.replaceWith(nodes622);
  }));
  callback(root680); return subs__;
  
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
  var root694 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node30 = $("<div>");
  
  var ref33 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref33.get() !== null) {
    node30.attr('class', ref33.get());
    subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
      node30.attr('class', val);
    }));
    
  }
  subs__.addSub(ref33.rebind());
  
  var val3 = onclick.get();
  if(val3 !== null) {
    subs__.addSub(mobl.domBind(node30, 'tap', val3));
  }
  
  
  var node31 = $("<div>");
  
  var ref32 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref32.get() !== null) {
    node31.attr('class', ref32.get());
    subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
      node31.attr('class', val);
    }));
    
  }
  subs__.addSub(ref32.rebind());
  
  
  var node32 = $("<div>");
  
  var ref30 = text;
  node32.text(""+ref30.get());
  var ignore3 = false;
  subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    node32.text(""+val);
  }));
  subs__.addSub(ref30.rebind());
  
  
  var ref31 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref31.get() !== null) {
    node32.attr('class', ref31.get());
    subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
      node32.attr('class', val);
    }));
    
  }
  subs__.addSub(ref31.rebind());
  
  node31.append(node32);
  node30.append(node31);
  var nodes635 = $("<span>");
  node30.append(nodes635);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl3();
  }));
  
  function renderControl3() {
    subs__.addSub((elements)(function(elements, callback) {
      var root695 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root695); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes635;
      nodes635 = node.contents();
      oldNodes.replaceWith(nodes635);
    }));
  }
  renderControl3();
  root694.append(node30);
  callback(root694); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp668 = result__;
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
  var root696 = $("<span>");
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
                       var result__ = mobl.$("#plot-wrapper").html();
                       qa.get().plotHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp594 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp593 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp593.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp593.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp593.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes636 = $("<span>");
  root696.append(nodes636);
  subs__.addSub((mobl.block)(tmp593, mobl.ref(null), tmp594, mobl.ref(null), function(_, callback) {
    var root697 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp590 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp590.set("A" + number.get() + ". ");
    }));
    
    var nodes637 = $("<span>");
    root697.append(nodes637);
    subs__.addSub((mobl.label)(tmp590, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root698 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root698); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes637;
      nodes637 = node.contents();
      oldNodes.replaceWith(nodes637);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp592 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp592.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node33 = $("<span>");
    root697.append(node33);
    var condSubs6 = new mobl.CompSubscription();
    subs__.addSub(condSubs6);
    var oldValue6;
    var renderCond6 = function() {
      var value6 = tmp592.get();
      if(oldValue6 === value6) return;
      oldValue6 = value6;
      var subs__ = condSubs6;
      subs__.unsubscribe();
      node33.empty();
      if(value6) {
        
        var node34 = $("<span>");
        
        var ref34 = mobl.ref("answer-block-" + number.get());
        if(ref34.get() !== null) {
          node34.attr('id', ref34.get());
          subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
            node34.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node34.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref34.rebind());
        
        var result__ = plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp591 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp591.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp591.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes638 = $("<span>");
        node34.append(nodes638);
        subs__.addSub((mobl.html)(tmp591, function(_, callback) {
          var root699 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root699); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes638;
          nodes638 = node.contents();
          oldNodes.replaceWith(nodes638);
        }));
        node33.append(node34);
        
        
        
      } else {
        var nodes639 = $("<span>");
        node33.append(nodes639);
        subs__.addSub((plot.plot)(qa, mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root700 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root700); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes639;
          nodes639 = node.contents();
          oldNodes.replaceWith(nodes639);
        }));
        
        
      }
    };
    renderCond6();
    subs__.addSub(tmp592.addEventListener('change', function() {
      renderCond6();
    }));
    
    callback(root697); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes636;
    nodes636 = node.contents();
    oldNodes.replaceWith(nodes636);
  }));
  var nodes640 = $("<span>");
  root696.append(nodes640);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root701 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes641 = $("<span>");
    root701.append(nodes641);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root702 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root702); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes641;
      nodes641 = node.contents();
      oldNodes.replaceWith(nodes641);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp595 = mobl.ref(result__);
    
    var nodes642 = $("<span>");
    root701.append(nodes642);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp595, function(_, callback) {
      var root703 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root703); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes642;
      nodes642 = node.contents();
      oldNodes.replaceWith(nodes642);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp596 = mobl.ref(result__);
    
    var nodes643 = $("<span>");
    root701.append(nodes643);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp596, function(_, callback) {
      var root704 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root704); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes643;
      nodes643 = node.contents();
      oldNodes.replaceWith(nodes643);
    }));
    callback(root701); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes640;
    nodes640 = node.contents();
    oldNodes.replaceWith(nodes640);
  }));
  callback(root696); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp669 = result__;
    var result__ = tmp669;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp670 = result__;
        var result__ = tmp670;
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
  var root705 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp680 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp598 = mobl.ref(result__);
  
  var nodes644 = $("<span>");
  root705.append(nodes644);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp598, function(_, callback) {
    var root706 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp673 = result__;
                       var result__ = tmp673;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp674 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp597 = mobl.ref(result__);
    
    var nodes645 = $("<span>");
    root706.append(nodes645);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp597, function(_, callback) {
      var root707 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root707); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes645;
      nodes645 = node.contents();
      oldNodes.replaceWith(nodes645);
    }));
    mobl.sleep(100, function(result__) {
      var tmp671 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp672 = result__;
        callback(root706); return subs__;
      });
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes644;
    nodes644 = node.contents();
    oldNodes.replaceWith(nodes644);
  }));
  var nodes646 = $("<span>");
  root705.append(nodes646);
  subs__.addSub((ui.group)(function(_, callback) {
    var root708 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp677 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp601 = mobl.ref(result__);
    
    var nodes647 = $("<span>");
    root708.append(nodes647);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp601, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root709 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp599 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp599.set("Q" + number.get() + ". ");
      }));
      
      var nodes648 = $("<span>");
      root709.append(nodes648);
      subs__.addSub((mobl.html)(tmp599, function(_, callback) {
        var root710 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root710); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes648;
        nodes648 = node.contents();
        oldNodes.replaceWith(nodes648);
      }));
      
      var node35 = $("<span>");
      
      var ref35 = mobl.ref("question-block-" + number.get());
      if(ref35.get() !== null) {
        node35.attr('id', ref35.get());
        subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
          node35.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node35.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref35.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp600 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp600.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp600.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes649 = $("<span>");
      node35.append(nodes649);
      subs__.addSub((mobl.html)(tmp600, function(_, callback) {
        var root711 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root711); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes649;
        nodes649 = node.contents();
        oldNodes.replaceWith(nodes649);
      }));
      root709.append(node35);
      callback(root709); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes647;
      nodes647 = node.contents();
      oldNodes.replaceWith(nodes647);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp676 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp603 = mobl.ref(result__);
    
    var nodes650 = $("<span>");
    root708.append(nodes650);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp603, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root712 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes651 = $("<span>");
      root712.append(nodes651);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root713 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp675 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp602 = mobl.ref(result__);
        
        var nodes652 = $("<span>");
        root713.append(nodes652);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp602, function(_, callback) {
          var root714 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root714); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes652;
          nodes652 = node.contents();
          oldNodes.replaceWith(nodes652);
        }));
        callback(root713); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes651;
        nodes651 = node.contents();
        oldNodes.replaceWith(nodes651);
      }));
      
      var node36 = $("<span>");
      root712.append(node36);
      var condSubs7 = new mobl.CompSubscription();
      subs__.addSub(condSubs7);
      var oldValue7;
      var renderCond7 = function() {
        var value7 = qa.get().done;
        if(oldValue7 === value7) return;
        oldValue7 = value7;
        var subs__ = condSubs7;
        subs__.unsubscribe();
        node36.empty();
        if(value7) {
          var nodes653 = $("<span>");
          node36.append(nodes653);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root715 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root715); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes653;
            nodes653 = node.contents();
            oldNodes.replaceWith(nodes653);
          }));
          
          
        } else {
          
        }
      };
      renderCond7();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond7();
      }));
      
      callback(root712); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes650;
      nodes650 = node.contents();
      oldNodes.replaceWith(nodes650);
    }));
    callback(root708); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes646;
    nodes646 = node.contents();
    oldNodes.replaceWith(nodes646);
  }));
  mobl.sleep(100, function(result__) {
    var tmp678 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp679 = result__;
      callback(root705); return subs__;
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
  qas.list(function(coll21) {
    coll21 = coll21.reverse();
    function processOne21() {
      var item;
      item = coll21.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll21.length > 0) processOne21(); else rest21();
      
    }
    function rest21() {
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
    if(coll21.length > 0) processOne21(); else rest21();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll22) {
    coll22 = coll22.reverse();
    function processOne22() {
      var item;
      item = coll22.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll22.length > 0) processOne22(); else rest22();
      
    }
    function rest22() {
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
    if(coll22.length > 0) processOne22(); else rest22();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll23) {
    coll23 = coll23.reverse();
    function processOne23() {
      var item;
      item = coll23.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll23.length > 0) processOne23(); else rest23();
      
    }
    function rest23() {
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
    if(coll23.length > 0) processOne23(); else rest23();
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