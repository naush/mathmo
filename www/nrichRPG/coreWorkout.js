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
    var tmp615 = result__;
    var result__ = tmp615;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp616 = result__;
      var result__ = tmp616;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp617 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll36) {
    coll36 = coll36.reverse();
    function processOne18() {
      var i;
      i = coll36.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp618 = result__;
        
        if(coll36.length > 0) processOne18(); else rest18();
        
      });
    }
    function rest18() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll36.length > 0) processOne18(); else rest18();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll37) {
    coll37 = coll37.reverse();
    function processOne19() {
      var i;
      i = coll37.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp619 = result__;
          
          if(coll37.length > 0) processOne19(); else rest19();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp619 = result__;
            
            if(coll37.length > 0) processOne19(); else rest19();
            
          });
        }
      }
    }
    function rest19() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll37.length > 0) processOne19(); else rest19();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll38) {
    coll38 = coll38.reverse();
    function processOne20() {
      var i;
      i = coll38.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp620 = result__;
        
        if(coll38.length > 0) processOne20(); else rest20();
        
      });
    }
    function rest20() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll38.length > 0) processOne20(); else rest20();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root557 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes510 = $("<span>");
  root557.append(nodes510);
  subs__.addSub((ui.group)(function(_, callback) {
    var root558 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp628 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp527 = mobl.ref(result__);
    
    var nodes511 = $("<span>");
    root558.append(nodes511);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp527, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root559 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes512 = $("<span>");
      root559.append(nodes512);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root560 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root560); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes512;
        nodes512 = node.contents();
        oldNodes.replaceWith(nodes512);
      }));
      callback(root559); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes511;
      nodes511 = node.contents();
      oldNodes.replaceWith(nodes511);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp627 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp528 = mobl.ref(result__);
    
    var nodes513 = $("<span>");
    root558.append(nodes513);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp528, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root561 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes514 = $("<span>");
      root561.append(nodes514);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root562 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root562); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes514;
        nodes514 = node.contents();
        oldNodes.replaceWith(nodes514);
      }));
      callback(root561); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes513;
      nodes513 = node.contents();
      oldNodes.replaceWith(nodes513);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp626 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp529 = mobl.ref(result__);
    
    var nodes515 = $("<span>");
    root558.append(nodes515);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp529, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root563 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes516 = $("<span>");
      root563.append(nodes516);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root564 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root564); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes516;
        nodes516 = node.contents();
        oldNodes.replaceWith(nodes516);
      }));
      callback(root563); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes515;
      nodes515 = node.contents();
      oldNodes.replaceWith(nodes515);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp625 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp530 = mobl.ref(result__);
    
    var nodes517 = $("<span>");
    root558.append(nodes517);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp530, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root565 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes518 = $("<span>");
      root565.append(nodes518);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root566 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root566); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes518;
        nodes518 = node.contents();
        oldNodes.replaceWith(nodes518);
      }));
      callback(root565); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes517;
      nodes517 = node.contents();
      oldNodes.replaceWith(nodes517);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp624 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp531 = mobl.ref(result__);
    
    var nodes519 = $("<span>");
    root558.append(nodes519);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp531, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root567 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes520 = $("<span>");
      root567.append(nodes520);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root568 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root568); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes520;
        nodes520 = node.contents();
        oldNodes.replaceWith(nodes520);
      }));
      callback(root567); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes519;
      nodes519 = node.contents();
      oldNodes.replaceWith(nodes519);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp623 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp532 = mobl.ref(result__);
    
    var nodes521 = $("<span>");
    root558.append(nodes521);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp532, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root569 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes522 = $("<span>");
      root569.append(nodes522);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root570 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root570); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes522;
        nodes522 = node.contents();
        oldNodes.replaceWith(nodes522);
      }));
      callback(root569); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes521;
      nodes521 = node.contents();
      oldNodes.replaceWith(nodes521);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp622 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp533 = mobl.ref(result__);
    
    var nodes523 = $("<span>");
    root558.append(nodes523);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp533, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root571 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes524 = $("<span>");
      root571.append(nodes524);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root572 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root572); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes524;
        nodes524 = node.contents();
        oldNodes.replaceWith(nodes524);
      }));
      callback(root571); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes523;
      nodes523 = node.contents();
      oldNodes.replaceWith(nodes523);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp621 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp534 = mobl.ref(result__);
    
    var nodes525 = $("<span>");
    root558.append(nodes525);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp534, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root573 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes526 = $("<span>");
      root573.append(nodes526);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root574 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root574); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes526;
        nodes526 = node.contents();
        oldNodes.replaceWith(nodes526);
      }));
      callback(root573); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes525;
      nodes525 = node.contents();
      oldNodes.replaceWith(nodes525);
    }));
    callback(root558); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes510;
    nodes510 = node.contents();
    oldNodes.replaceWith(nodes510);
  }));
  callback(root557); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root575 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes527 = $("<span>");
  root575.append(nodes527);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root576 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp536 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp535 = mobl.ref(result__);
    
    var nodes528 = $("<span>");
    root576.append(nodes528);
    subs__.addSub((ui.backButton)(tmp535, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp536, function(_, callback) {
      var root577 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root577); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes528;
      nodes528 = node.contents();
      oldNodes.replaceWith(nodes528);
    }));
    callback(root576); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes527;
    nodes527 = node.contents();
    oldNodes.replaceWith(nodes527);
  }));
  var nodes529 = $("<span>");
  root575.append(nodes529);
  subs__.addSub((ui.group)(function(_, callback) {
    var root578 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp636 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp537 = mobl.ref(result__);
    
    var nodes530 = $("<span>");
    root578.append(nodes530);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp537, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root579 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes531 = $("<span>");
      root579.append(nodes531);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root580 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root580); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes531;
        nodes531 = node.contents();
        oldNodes.replaceWith(nodes531);
      }));
      callback(root579); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes530;
      nodes530 = node.contents();
      oldNodes.replaceWith(nodes530);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp635 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp538 = mobl.ref(result__);
    
    var nodes532 = $("<span>");
    root578.append(nodes532);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp538, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root581 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes533 = $("<span>");
      root581.append(nodes533);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root582 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root582); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes533;
        nodes533 = node.contents();
        oldNodes.replaceWith(nodes533);
      }));
      callback(root581); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes532;
      nodes532 = node.contents();
      oldNodes.replaceWith(nodes532);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp634 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp539 = mobl.ref(result__);
    
    var nodes534 = $("<span>");
    root578.append(nodes534);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp539, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root583 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes535 = $("<span>");
      root583.append(nodes535);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root584 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root584); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes535;
        nodes535 = node.contents();
        oldNodes.replaceWith(nodes535);
      }));
      callback(root583); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes534;
      nodes534 = node.contents();
      oldNodes.replaceWith(nodes534);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp633 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp540 = mobl.ref(result__);
    
    var nodes536 = $("<span>");
    root578.append(nodes536);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp540, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root585 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes537 = $("<span>");
      root585.append(nodes537);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root586 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root586); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes537;
        nodes537 = node.contents();
        oldNodes.replaceWith(nodes537);
      }));
      callback(root585); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes536;
      nodes536 = node.contents();
      oldNodes.replaceWith(nodes536);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp632 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp541 = mobl.ref(result__);
    
    var nodes538 = $("<span>");
    root578.append(nodes538);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp541, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root587 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes539 = $("<span>");
      root587.append(nodes539);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root588 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root588); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes539;
        nodes539 = node.contents();
        oldNodes.replaceWith(nodes539);
      }));
      callback(root587); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes538;
      nodes538 = node.contents();
      oldNodes.replaceWith(nodes538);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp631 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp542 = mobl.ref(result__);
    
    var nodes540 = $("<span>");
    root578.append(nodes540);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp542, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root589 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes541 = $("<span>");
      root589.append(nodes541);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root590 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root590); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes541;
        nodes541 = node.contents();
        oldNodes.replaceWith(nodes541);
      }));
      callback(root589); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes540;
      nodes540 = node.contents();
      oldNodes.replaceWith(nodes540);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp630 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp543 = mobl.ref(result__);
    
    var nodes542 = $("<span>");
    root578.append(nodes542);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp543, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root591 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes543 = $("<span>");
      root591.append(nodes543);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root592 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root592); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes543;
        nodes543 = node.contents();
        oldNodes.replaceWith(nodes543);
      }));
      callback(root591); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes542;
      nodes542 = node.contents();
      oldNodes.replaceWith(nodes542);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp629 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp544 = mobl.ref(result__);
    
    var nodes544 = $("<span>");
    root578.append(nodes544);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp544, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root593 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes545 = $("<span>");
      root593.append(nodes545);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root594 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root594); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes545;
        nodes545 = node.contents();
        oldNodes.replaceWith(nodes545);
      }));
      callback(root593); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes544;
      nodes544 = node.contents();
      oldNodes.replaceWith(nodes544);
    }));
    callback(root578); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes529;
    nodes529 = node.contents();
    oldNodes.replaceWith(nodes529);
  }));
  callback(root575); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root595 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes546 = $("<span>");
  root595.append(nodes546);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root596 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp546 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp545 = mobl.ref(result__);
    
    var nodes547 = $("<span>");
    root596.append(nodes547);
    subs__.addSub((ui.backButton)(tmp545, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp546, function(_, callback) {
      var root597 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root597); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes547;
      nodes547 = node.contents();
      oldNodes.replaceWith(nodes547);
    }));
    callback(root596); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes546;
    nodes546 = node.contents();
    oldNodes.replaceWith(nodes546);
  }));
  var nodes548 = $("<span>");
  root595.append(nodes548);
  subs__.addSub((ui.group)(function(_, callback) {
    var root598 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp641 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp547 = mobl.ref(result__);
    
    var nodes549 = $("<span>");
    root598.append(nodes549);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp547, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root599 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes550 = $("<span>");
      root599.append(nodes550);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root600 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root600); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes550;
        nodes550 = node.contents();
        oldNodes.replaceWith(nodes550);
      }));
      callback(root599); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes549;
      nodes549 = node.contents();
      oldNodes.replaceWith(nodes549);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp640 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp548 = mobl.ref(result__);
    
    var nodes551 = $("<span>");
    root598.append(nodes551);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp548, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root601 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes552 = $("<span>");
      root601.append(nodes552);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root602 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root602); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes552;
        nodes552 = node.contents();
        oldNodes.replaceWith(nodes552);
      }));
      callback(root601); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes551;
      nodes551 = node.contents();
      oldNodes.replaceWith(nodes551);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp639 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp549 = mobl.ref(result__);
    
    var nodes553 = $("<span>");
    root598.append(nodes553);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp549, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root603 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes554 = $("<span>");
      root603.append(nodes554);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root604 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root604); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes554;
        nodes554 = node.contents();
        oldNodes.replaceWith(nodes554);
      }));
      callback(root603); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes553;
      nodes553 = node.contents();
      oldNodes.replaceWith(nodes553);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp638 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp550 = mobl.ref(result__);
    
    var nodes555 = $("<span>");
    root598.append(nodes555);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp550, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root605 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes556 = $("<span>");
      root605.append(nodes556);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root606 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root606); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes556;
        nodes556 = node.contents();
        oldNodes.replaceWith(nodes556);
      }));
      callback(root605); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes555;
      nodes555 = node.contents();
      oldNodes.replaceWith(nodes555);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp637 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp551 = mobl.ref(result__);
    
    var nodes557 = $("<span>");
    root598.append(nodes557);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp551, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root607 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes558 = $("<span>");
      root607.append(nodes558);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root608 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root608); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes558;
        nodes558 = node.contents();
        oldNodes.replaceWith(nodes558);
      }));
      callback(root607); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes557;
      nodes557 = node.contents();
      oldNodes.replaceWith(nodes557);
    }));
    callback(root598); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes548;
    nodes548 = node.contents();
    oldNodes.replaceWith(nodes548);
  }));
  callback(root595); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root609 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes559 = $("<span>");
  root609.append(nodes559);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root610 = $("<span>");
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
    
    var nodes560 = $("<span>");
    root610.append(nodes560);
    subs__.addSub((ui.backButton)(tmp552, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp553, function(_, callback) {
      var root611 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root611); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes560;
      nodes560 = node.contents();
      oldNodes.replaceWith(nodes560);
    }));
    callback(root610); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes559;
    nodes559 = node.contents();
    oldNodes.replaceWith(nodes559);
  }));
  var nodes561 = $("<span>");
  root609.append(nodes561);
  subs__.addSub((ui.group)(function(_, callback) {
    var root612 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp644 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp554 = mobl.ref(result__);
    
    var nodes562 = $("<span>");
    root612.append(nodes562);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp554, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root613 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes563 = $("<span>");
      root613.append(nodes563);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root614 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root614); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes563;
        nodes563 = node.contents();
        oldNodes.replaceWith(nodes563);
      }));
      callback(root613); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes562;
      nodes562 = node.contents();
      oldNodes.replaceWith(nodes562);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp643 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp555 = mobl.ref(result__);
    
    var nodes564 = $("<span>");
    root612.append(nodes564);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp555, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root615 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes565 = $("<span>");
      root615.append(nodes565);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root616 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root616); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes565;
        nodes565 = node.contents();
        oldNodes.replaceWith(nodes565);
      }));
      callback(root615); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes564;
      nodes564 = node.contents();
      oldNodes.replaceWith(nodes564);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp642 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp556 = mobl.ref(result__);
    
    var nodes566 = $("<span>");
    root612.append(nodes566);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp556, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root617 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes567 = $("<span>");
      root617.append(nodes567);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root618 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root618); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes567;
        nodes567 = node.contents();
        oldNodes.replaceWith(nodes567);
      }));
      callback(root617); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes566;
      nodes566 = node.contents();
      oldNodes.replaceWith(nodes566);
    }));
    callback(root612); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes561;
    nodes561 = node.contents();
    oldNodes.replaceWith(nodes561);
  }));
  callback(root609); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root619 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes568 = $("<span>");
  root619.append(nodes568);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root620 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp558 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp557 = mobl.ref(result__);
    
    var nodes569 = $("<span>");
    root620.append(nodes569);
    subs__.addSub((ui.backButton)(tmp557, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp558, function(_, callback) {
      var root621 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root621); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes569;
      nodes569 = node.contents();
      oldNodes.replaceWith(nodes569);
    }));
    callback(root620); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes568;
    nodes568 = node.contents();
    oldNodes.replaceWith(nodes568);
  }));
  var nodes570 = $("<span>");
  root619.append(nodes570);
  subs__.addSub((ui.group)(function(_, callback) {
    var root622 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp648 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp559 = mobl.ref(result__);
    
    var nodes571 = $("<span>");
    root622.append(nodes571);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp559, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root623 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes572 = $("<span>");
      root623.append(nodes572);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root624 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root624); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes572;
        nodes572 = node.contents();
        oldNodes.replaceWith(nodes572);
      }));
      callback(root623); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes571;
      nodes571 = node.contents();
      oldNodes.replaceWith(nodes571);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp647 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp560 = mobl.ref(result__);
    
    var nodes573 = $("<span>");
    root622.append(nodes573);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp560, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root625 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes574 = $("<span>");
      root625.append(nodes574);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root626 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root626); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes574;
        nodes574 = node.contents();
        oldNodes.replaceWith(nodes574);
      }));
      callback(root625); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes573;
      nodes573 = node.contents();
      oldNodes.replaceWith(nodes573);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp646 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp561 = mobl.ref(result__);
    
    var nodes575 = $("<span>");
    root622.append(nodes575);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp561, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root627 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes576 = $("<span>");
      root627.append(nodes576);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root628 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root628); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes576;
        nodes576 = node.contents();
        oldNodes.replaceWith(nodes576);
      }));
      callback(root627); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes575;
      nodes575 = node.contents();
      oldNodes.replaceWith(nodes575);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp645 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp562 = mobl.ref(result__);
    
    var nodes577 = $("<span>");
    root622.append(nodes577);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp562, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root629 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes578 = $("<span>");
      root629.append(nodes578);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root630 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root630); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes578;
        nodes578 = node.contents();
        oldNodes.replaceWith(nodes578);
      }));
      callback(root629); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes577;
      nodes577 = node.contents();
      oldNodes.replaceWith(nodes577);
    }));
    callback(root622); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes570;
    nodes570 = node.contents();
    oldNodes.replaceWith(nodes570);
  }));
  callback(root619); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root631 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes579 = $("<span>");
  root631.append(nodes579);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root632 = $("<span>");
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
    
    var nodes580 = $("<span>");
    root632.append(nodes580);
    subs__.addSub((ui.backButton)(tmp563, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp564, function(_, callback) {
      var root633 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root633); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes580;
      nodes580 = node.contents();
      oldNodes.replaceWith(nodes580);
    }));
    callback(root632); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes579;
    nodes579 = node.contents();
    oldNodes.replaceWith(nodes579);
  }));
  var nodes581 = $("<span>");
  root631.append(nodes581);
  subs__.addSub((ui.group)(function(_, callback) {
    var root634 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp650 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp565 = mobl.ref(result__);
    
    var nodes582 = $("<span>");
    root634.append(nodes582);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp565, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root635 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes583 = $("<span>");
      root635.append(nodes583);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root636 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root636); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes583;
        nodes583 = node.contents();
        oldNodes.replaceWith(nodes583);
      }));
      callback(root635); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes582;
      nodes582 = node.contents();
      oldNodes.replaceWith(nodes582);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp649 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp566 = mobl.ref(result__);
    
    var nodes584 = $("<span>");
    root634.append(nodes584);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp566, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root637 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes585 = $("<span>");
      root637.append(nodes585);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root638 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root638); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes585;
        nodes585 = node.contents();
        oldNodes.replaceWith(nodes585);
      }));
      callback(root637); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes584;
      nodes584 = node.contents();
      oldNodes.replaceWith(nodes584);
    }));
    callback(root634); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes581;
    nodes581 = node.contents();
    oldNodes.replaceWith(nodes581);
  }));
  callback(root631); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root639 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes586 = $("<span>");
  root639.append(nodes586);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root640 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp568 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp567 = mobl.ref(result__);
    
    var nodes587 = $("<span>");
    root640.append(nodes587);
    subs__.addSub((ui.backButton)(tmp567, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp568, function(_, callback) {
      var root641 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root641); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes587;
      nodes587 = node.contents();
      oldNodes.replaceWith(nodes587);
    }));
    callback(root640); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes586;
    nodes586 = node.contents();
    oldNodes.replaceWith(nodes586);
  }));
  var nodes588 = $("<span>");
  root639.append(nodes588);
  subs__.addSub((ui.group)(function(_, callback) {
    var root642 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp655 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp569 = mobl.ref(result__);
    
    var nodes589 = $("<span>");
    root642.append(nodes589);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp569, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes590 = $("<span>");
      root643.append(nodes590);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root644 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root644); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes590;
        nodes590 = node.contents();
        oldNodes.replaceWith(nodes590);
      }));
      callback(root643); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes589;
      nodes589 = node.contents();
      oldNodes.replaceWith(nodes589);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp654 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp570 = mobl.ref(result__);
    
    var nodes591 = $("<span>");
    root642.append(nodes591);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp570, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root645 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes592 = $("<span>");
      root645.append(nodes592);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root646 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root646); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes592;
        nodes592 = node.contents();
        oldNodes.replaceWith(nodes592);
      }));
      callback(root645); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes591;
      nodes591 = node.contents();
      oldNodes.replaceWith(nodes591);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp653 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp571 = mobl.ref(result__);
    
    var nodes593 = $("<span>");
    root642.append(nodes593);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp571, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root647 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes594 = $("<span>");
      root647.append(nodes594);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root648 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root648); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes594;
        nodes594 = node.contents();
        oldNodes.replaceWith(nodes594);
      }));
      callback(root647); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes593;
      nodes593 = node.contents();
      oldNodes.replaceWith(nodes593);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp652 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp572 = mobl.ref(result__);
    
    var nodes595 = $("<span>");
    root642.append(nodes595);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp572, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root649 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes596 = $("<span>");
      root649.append(nodes596);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root650 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root650); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes596;
        nodes596 = node.contents();
        oldNodes.replaceWith(nodes596);
      }));
      callback(root649); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes595;
      nodes595 = node.contents();
      oldNodes.replaceWith(nodes595);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp651 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp573 = mobl.ref(result__);
    
    var nodes597 = $("<span>");
    root642.append(nodes597);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp573, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root651 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes598 = $("<span>");
      root651.append(nodes598);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root652 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root652); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes598;
        nodes598 = node.contents();
        oldNodes.replaceWith(nodes598);
      }));
      callback(root651); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes597;
      nodes597 = node.contents();
      oldNodes.replaceWith(nodes597);
    }));
    callback(root642); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes588;
    nodes588 = node.contents();
    oldNodes.replaceWith(nodes588);
  }));
  callback(root639); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root653 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes599 = $("<span>");
  root653.append(nodes599);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root654 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp575 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp574 = mobl.ref(result__);
    
    var nodes600 = $("<span>");
    root654.append(nodes600);
    subs__.addSub((ui.backButton)(tmp574, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp575, function(_, callback) {
      var root655 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root655); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes600;
      nodes600 = node.contents();
      oldNodes.replaceWith(nodes600);
    }));
    callback(root654); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes599;
    nodes599 = node.contents();
    oldNodes.replaceWith(nodes599);
  }));
  var nodes601 = $("<span>");
  root653.append(nodes601);
  subs__.addSub((ui.group)(function(_, callback) {
    var root656 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp658 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp576 = mobl.ref(result__);
    
    var nodes602 = $("<span>");
    root656.append(nodes602);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp576, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes603 = $("<span>");
      root657.append(nodes603);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root658 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root658); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes603;
        nodes603 = node.contents();
        oldNodes.replaceWith(nodes603);
      }));
      callback(root657); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes602;
      nodes602 = node.contents();
      oldNodes.replaceWith(nodes602);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp657 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp577 = mobl.ref(result__);
    
    var nodes604 = $("<span>");
    root656.append(nodes604);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp577, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root659 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes605 = $("<span>");
      root659.append(nodes605);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root660 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root660); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes605;
        nodes605 = node.contents();
        oldNodes.replaceWith(nodes605);
      }));
      callback(root659); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes604;
      nodes604 = node.contents();
      oldNodes.replaceWith(nodes604);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp656 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp578 = mobl.ref(result__);
    
    var nodes606 = $("<span>");
    root656.append(nodes606);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp578, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root661 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes607 = $("<span>");
      root661.append(nodes607);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root662 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root662); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes607;
        nodes607 = node.contents();
        oldNodes.replaceWith(nodes607);
      }));
      callback(root661); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes606;
      nodes606 = node.contents();
      oldNodes.replaceWith(nodes606);
    }));
    callback(root656); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes601;
    nodes601 = node.contents();
    oldNodes.replaceWith(nodes601);
  }));
  callback(root653); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root663 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes608 = $("<span>");
  root663.append(nodes608);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root664 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp580 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp579 = mobl.ref(result__);
    
    var nodes609 = $("<span>");
    root664.append(nodes609);
    subs__.addSub((ui.backButton)(tmp579, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp580, function(_, callback) {
      var root665 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root665); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes609;
      nodes609 = node.contents();
      oldNodes.replaceWith(nodes609);
    }));
    callback(root664); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes608;
    nodes608 = node.contents();
    oldNodes.replaceWith(nodes608);
  }));
  var nodes610 = $("<span>");
  root663.append(nodes610);
  subs__.addSub((ui.group)(function(_, callback) {
    var root666 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp659 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp581 = mobl.ref(result__);
    
    var nodes611 = $("<span>");
    root666.append(nodes611);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp581, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root667 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes612 = $("<span>");
      root667.append(nodes612);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root668 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root668); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes612;
        nodes612 = node.contents();
        oldNodes.replaceWith(nodes612);
      }));
      callback(root667); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes611;
      nodes611 = node.contents();
      oldNodes.replaceWith(nodes611);
    }));
    callback(root666); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes610;
    nodes610 = node.contents();
    oldNodes.replaceWith(nodes610);
  }));
  callback(root663); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root669 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes613 = $("<span>");
  root669.append(nodes613);
  subs__.addSub((ui.group)(function(_, callback) {
    var root670 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp672 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp582 = mobl.ref(result__);
    
    var nodes614 = $("<span>");
    root670.append(nodes614);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp582, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root671 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes615 = $("<span>");
      root671.append(nodes615);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root672 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root672); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes615;
        nodes615 = node.contents();
        oldNodes.replaceWith(nodes615);
      }));
      callback(root671); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes614;
      nodes614 = node.contents();
      oldNodes.replaceWith(nodes614);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp671 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp583 = mobl.ref(result__);
    
    var nodes616 = $("<span>");
    root670.append(nodes616);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp583, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root673 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes617 = $("<span>");
      root673.append(nodes617);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root674); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes617;
        nodes617 = node.contents();
        oldNodes.replaceWith(nodes617);
      }));
      callback(root673); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes616;
      nodes616 = node.contents();
      oldNodes.replaceWith(nodes616);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp670 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp584 = mobl.ref(result__);
    
    var nodes618 = $("<span>");
    root670.append(nodes618);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp584, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root675 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes619 = $("<span>");
      root675.append(nodes619);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root676 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root676); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes619;
        nodes619 = node.contents();
        oldNodes.replaceWith(nodes619);
      }));
      callback(root675); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes618;
      nodes618 = node.contents();
      oldNodes.replaceWith(nodes618);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp669 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp585 = mobl.ref(result__);
    
    var nodes620 = $("<span>");
    root670.append(nodes620);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp585, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root677 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes621 = $("<span>");
      root677.append(nodes621);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root678 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root678); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes621;
        nodes621 = node.contents();
        oldNodes.replaceWith(nodes621);
      }));
      callback(root677); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes620;
      nodes620 = node.contents();
      oldNodes.replaceWith(nodes620);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp668 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp586 = mobl.ref(result__);
    
    var nodes622 = $("<span>");
    root670.append(nodes622);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp586, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root679 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes623 = $("<span>");
      root679.append(nodes623);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root680 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root680); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes623;
        nodes623 = node.contents();
        oldNodes.replaceWith(nodes623);
      }));
      callback(root679); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes622;
      nodes622 = node.contents();
      oldNodes.replaceWith(nodes622);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp667 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp587 = mobl.ref(result__);
    
    var nodes624 = $("<span>");
    root670.append(nodes624);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp587, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root681 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes625 = $("<span>");
      root681.append(nodes625);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root682 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root682); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes625;
        nodes625 = node.contents();
        oldNodes.replaceWith(nodes625);
      }));
      callback(root681); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes624;
      nodes624 = node.contents();
      oldNodes.replaceWith(nodes624);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp666 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp588 = mobl.ref(result__);
    
    var nodes626 = $("<span>");
    root670.append(nodes626);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp588, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root683 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes627 = $("<span>");
      root683.append(nodes627);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root684 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root684); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes627;
        nodes627 = node.contents();
        oldNodes.replaceWith(nodes627);
      }));
      callback(root683); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes626;
      nodes626 = node.contents();
      oldNodes.replaceWith(nodes626);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp665 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp589 = mobl.ref(result__);
    
    var nodes628 = $("<span>");
    root670.append(nodes628);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp589, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root685 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes629 = $("<span>");
      root685.append(nodes629);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root686 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root686); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes629;
        nodes629 = node.contents();
        oldNodes.replaceWith(nodes629);
      }));
      callback(root685); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes628;
      nodes628 = node.contents();
      oldNodes.replaceWith(nodes628);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp664 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp590 = mobl.ref(result__);
    
    var nodes630 = $("<span>");
    root670.append(nodes630);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp590, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root687 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes631 = $("<span>");
      root687.append(nodes631);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root688 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root688); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes631;
        nodes631 = node.contents();
        oldNodes.replaceWith(nodes631);
      }));
      callback(root687); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes630;
      nodes630 = node.contents();
      oldNodes.replaceWith(nodes630);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp663 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp591 = mobl.ref(result__);
    
    var nodes632 = $("<span>");
    root670.append(nodes632);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp591, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root689 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes633 = $("<span>");
      root689.append(nodes633);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root690 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root690); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes633;
        nodes633 = node.contents();
        oldNodes.replaceWith(nodes633);
      }));
      callback(root689); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes632;
      nodes632 = node.contents();
      oldNodes.replaceWith(nodes632);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp662 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp592 = mobl.ref(result__);
    
    var nodes634 = $("<span>");
    root670.append(nodes634);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp592, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes635 = $("<span>");
      root691.append(nodes635);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root692 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root692); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes635;
        nodes635 = node.contents();
        oldNodes.replaceWith(nodes635);
      }));
      callback(root691); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes634;
      nodes634 = node.contents();
      oldNodes.replaceWith(nodes634);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp661 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp593 = mobl.ref(result__);
    
    var nodes636 = $("<span>");
    root670.append(nodes636);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp593, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root693 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes637 = $("<span>");
      root693.append(nodes637);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root694 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root694); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes637;
        nodes637 = node.contents();
        oldNodes.replaceWith(nodes637);
      }));
      callback(root693); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes636;
      nodes636 = node.contents();
      oldNodes.replaceWith(nodes636);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp660 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp594 = mobl.ref(result__);
    
    var nodes638 = $("<span>");
    root670.append(nodes638);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp594, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root695 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes639 = $("<span>");
      root695.append(nodes639);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root696 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root696); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes639;
        nodes639 = node.contents();
        oldNodes.replaceWith(nodes639);
      }));
      callback(root695); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes638;
      nodes638 = node.contents();
      oldNodes.replaceWith(nodes638);
    }));
    callback(root670); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes613;
    nodes613 = node.contents();
    oldNodes.replaceWith(nodes613);
  }));
  callback(root669); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root697 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes640 = $("<span>");
  root697.append(nodes640);
  subs__.addSub((ui.group)(function(_, callback) {
    var root698 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp678 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp595 = mobl.ref(result__);
    
    var nodes641 = $("<span>");
    root698.append(nodes641);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp595, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root699 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes642 = $("<span>");
      root699.append(nodes642);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root700 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root700); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes642;
        nodes642 = node.contents();
        oldNodes.replaceWith(nodes642);
      }));
      callback(root699); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes641;
      nodes641 = node.contents();
      oldNodes.replaceWith(nodes641);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp677 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp596 = mobl.ref(result__);
    
    var nodes643 = $("<span>");
    root698.append(nodes643);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp596, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root701 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes644 = $("<span>");
      root701.append(nodes644);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root702 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root702); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes644;
        nodes644 = node.contents();
        oldNodes.replaceWith(nodes644);
      }));
      callback(root701); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes643;
      nodes643 = node.contents();
      oldNodes.replaceWith(nodes643);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp676 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp597 = mobl.ref(result__);
    
    var nodes645 = $("<span>");
    root698.append(nodes645);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp597, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root703 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes646 = $("<span>");
      root703.append(nodes646);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root704 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root704); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes646;
        nodes646 = node.contents();
        oldNodes.replaceWith(nodes646);
      }));
      callback(root703); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes645;
      nodes645 = node.contents();
      oldNodes.replaceWith(nodes645);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp675 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp598 = mobl.ref(result__);
    
    var nodes647 = $("<span>");
    root698.append(nodes647);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp598, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root705 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes648 = $("<span>");
      root705.append(nodes648);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root706 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root706); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes648;
        nodes648 = node.contents();
        oldNodes.replaceWith(nodes648);
      }));
      callback(root705); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes647;
      nodes647 = node.contents();
      oldNodes.replaceWith(nodes647);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp674 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp599 = mobl.ref(result__);
    
    var nodes649 = $("<span>");
    root698.append(nodes649);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp599, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root707 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes650 = $("<span>");
      root707.append(nodes650);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root708 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root708); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes650;
        nodes650 = node.contents();
        oldNodes.replaceWith(nodes650);
      }));
      callback(root707); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes649;
      nodes649 = node.contents();
      oldNodes.replaceWith(nodes649);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp673 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp600 = mobl.ref(result__);
    
    var nodes651 = $("<span>");
    root698.append(nodes651);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp600, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root709 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes652 = $("<span>");
      root709.append(nodes652);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root710 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root710); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes652;
        nodes652 = node.contents();
        oldNodes.replaceWith(nodes652);
      }));
      callback(root709); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes651;
      nodes651 = node.contents();
      oldNodes.replaceWith(nodes651);
    }));
    callback(root698); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes640;
    nodes640 = node.contents();
    oldNodes.replaceWith(nodes640);
  }));
  callback(root697); return subs__;
  
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
  var root711 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node22 = $("<div>");
  
  var ref22 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref22.get() !== null) {
    node22.attr('class', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
      node22.attr('class', val);
    }));
    
  }
  subs__.addSub(ref22.rebind());
  
  var val3 = onclick.get();
  if(val3 !== null) {
    subs__.addSub(mobl.domBind(node22, 'tap', val3));
  }
  
  
  var node23 = $("<div>");
  
  var ref21 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref21.get() !== null) {
    node23.attr('class', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      node23.attr('class', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  
  var node24 = $("<div>");
  
  var ref19 = text;
  node24.text(""+ref19.get());
  var ignore3 = false;
  subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    node24.text(""+val);
  }));
  subs__.addSub(ref19.rebind());
  
  
  var ref20 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref20.get() !== null) {
    node24.attr('class', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node24.attr('class', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  node23.append(node24);
  node22.append(node23);
  var nodes653 = $("<span>");
  node22.append(nodes653);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl3();
  }));
  
  function renderControl3() {
    subs__.addSub((elements)(function(elements, callback) {
      var root712 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root712); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes653;
      nodes653 = node.contents();
      oldNodes.replaceWith(nodes653);
    }));
  }
  renderControl3();
  root711.append(node22);
  callback(root711); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp679 = result__;
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
  var root713 = $("<span>");
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
                       var result__ = mobl.$("#plot-wrapper").children("span:first").html();
                       qa.get().plotHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp605 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp604 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp604.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp604.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp604.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes654 = $("<span>");
  root713.append(nodes654);
  subs__.addSub((mobl.block)(tmp604, mobl.ref(null), tmp605, mobl.ref(null), function(_, callback) {
    var root714 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp601 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp601.set("A" + number.get() + ". ");
    }));
    
    var nodes655 = $("<span>");
    root714.append(nodes655);
    subs__.addSub((mobl.label)(tmp601, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root715 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root715); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes655;
      nodes655 = node.contents();
      oldNodes.replaceWith(nodes655);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp603 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp603.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node25 = $("<span>");
    root714.append(node25);
    var condSubs6 = new mobl.CompSubscription();
    subs__.addSub(condSubs6);
    var oldValue6;
    var renderCond6 = function() {
      var value18 = tmp603.get();
      if(oldValue6 === value18) return;
      oldValue6 = value18;
      var subs__ = condSubs6;
      subs__.unsubscribe();
      node25.empty();
      if(value18) {
        
        var node26 = $("<span>");
        
        var ref23 = mobl.ref("answer-block-" + number.get());
        if(ref23.get() !== null) {
          node26.attr('id', ref23.get());
          subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
            node26.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node26.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref23.rebind());
        
        var result__ = plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp602 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp602.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp602.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes656 = $("<span>");
        node26.append(nodes656);
        subs__.addSub((mobl.html)(tmp602, function(_, callback) {
          var root716 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root716); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes656;
          nodes656 = node.contents();
          oldNodes.replaceWith(nodes656);
        }));
        node25.append(node26);
        
        
        
      } else {
        var nodes657 = $("<span>");
        node25.append(nodes657);
        subs__.addSub((plot.plot)(qa, mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root717 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root717); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes657;
          nodes657 = node.contents();
          oldNodes.replaceWith(nodes657);
        }));
        
        
      }
    };
    renderCond6();
    subs__.addSub(tmp603.addEventListener('change', function() {
      renderCond6();
    }));
    
    callback(root714); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes654;
    nodes654 = node.contents();
    oldNodes.replaceWith(nodes654);
  }));
  var nodes658 = $("<span>");
  root713.append(nodes658);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root718 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes659 = $("<span>");
    root718.append(nodes659);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root719 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root719); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes659;
      nodes659 = node.contents();
      oldNodes.replaceWith(nodes659);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp606 = mobl.ref(result__);
    
    var nodes660 = $("<span>");
    root718.append(nodes660);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp606, function(_, callback) {
      var root720 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root720); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes660;
      nodes660 = node.contents();
      oldNodes.replaceWith(nodes660);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp607 = mobl.ref(result__);
    
    var nodes661 = $("<span>");
    root718.append(nodes661);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp607, function(_, callback) {
      var root721 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root721); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes661;
      nodes661 = node.contents();
      oldNodes.replaceWith(nodes661);
    }));
    callback(root718); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes658;
    nodes658 = node.contents();
    oldNodes.replaceWith(nodes658);
  }));
  callback(root713); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp680 = result__;
    var result__ = tmp680;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root722 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp690 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp609 = mobl.ref(result__);
  
  var nodes662 = $("<span>");
  root722.append(nodes662);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp609, function(_, callback) {
    var root723 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp683 = result__;
                       var result__ = tmp683;
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
                             var tmp684 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp608 = mobl.ref(result__);
    
    var nodes663 = $("<span>");
    root723.append(nodes663);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp608, function(_, callback) {
      var root724 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root724); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes663;
      nodes663 = node.contents();
      oldNodes.replaceWith(nodes663);
    }));
    mobl.sleep(100, function(result__) {
      var tmp681 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp682 = result__;
        callback(root723); return subs__;
      });
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes662;
    nodes662 = node.contents();
    oldNodes.replaceWith(nodes662);
  }));
  var nodes664 = $("<span>");
  root722.append(nodes664);
  subs__.addSub((ui.group)(function(_, callback) {
    var root725 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp687 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp612 = mobl.ref(result__);
    
    var nodes665 = $("<span>");
    root725.append(nodes665);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp612, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root726 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp610 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp610.set("Q" + number.get() + ". ");
      }));
      
      var nodes666 = $("<span>");
      root726.append(nodes666);
      subs__.addSub((mobl.html)(tmp610, function(_, callback) {
        var root727 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root727); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes666;
        nodes666 = node.contents();
        oldNodes.replaceWith(nodes666);
      }));
      
      var node27 = $("<span>");
      
      var ref24 = mobl.ref("question-block-" + number.get());
      if(ref24.get() !== null) {
        node27.attr('id', ref24.get());
        subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
          node27.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node27.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref24.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp611 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp611.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp611.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes667 = $("<span>");
      node27.append(nodes667);
      subs__.addSub((mobl.html)(tmp611, function(_, callback) {
        var root728 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root728); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes667;
        nodes667 = node.contents();
        oldNodes.replaceWith(nodes667);
      }));
      root726.append(node27);
      callback(root726); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes665;
      nodes665 = node.contents();
      oldNodes.replaceWith(nodes665);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp686 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp614 = mobl.ref(result__);
    
    var nodes668 = $("<span>");
    root725.append(nodes668);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp614, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes669 = $("<span>");
      root729.append(nodes669);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root730 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp685 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp613 = mobl.ref(result__);
        
        var nodes670 = $("<span>");
        root730.append(nodes670);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp613, function(_, callback) {
          var root731 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root731); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes670;
          nodes670 = node.contents();
          oldNodes.replaceWith(nodes670);
        }));
        callback(root730); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes669;
        nodes669 = node.contents();
        oldNodes.replaceWith(nodes669);
      }));
      
      var node28 = $("<span>");
      root729.append(node28);
      var condSubs7 = new mobl.CompSubscription();
      subs__.addSub(condSubs7);
      var oldValue7;
      var renderCond7 = function() {
        var value19 = qa.get().done;
        if(oldValue7 === value19) return;
        oldValue7 = value19;
        var subs__ = condSubs7;
        subs__.unsubscribe();
        node28.empty();
        if(value19) {
          var nodes671 = $("<span>");
          node28.append(nodes671);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root732 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root732); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes671;
            nodes671 = node.contents();
            oldNodes.replaceWith(nodes671);
          }));
          
          
        } else {
          
        }
      };
      renderCond7();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond7();
      }));
      
      callback(root729); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes668;
      nodes668 = node.contents();
      oldNodes.replaceWith(nodes668);
    }));
    callback(root725); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes664;
    nodes664 = node.contents();
    oldNodes.replaceWith(nodes664);
  }));
  mobl.sleep(100, function(result__) {
    var tmp688 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp689 = result__;
      callback(root722); return subs__;
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
  qas.list(function(coll39) {
    coll39 = coll39.reverse();
    function processOne21() {
      var item;
      item = coll39.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll39.length > 0) processOne21(); else rest21();
      
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
    if(coll39.length > 0) processOne21(); else rest21();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll40) {
    coll40 = coll40.reverse();
    function processOne22() {
      var item;
      item = coll40.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll40.length > 0) processOne22(); else rest22();
      
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
    if(coll40.length > 0) processOne22(); else rest22();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll41) {
    coll41 = coll41.reverse();
    function processOne23() {
      var item;
      item = coll41.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll41.length > 0) processOne23(); else rest23();
      
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
    if(coll41.length > 0) processOne23(); else rest23();
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