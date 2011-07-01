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
    var tmp9600 = result__;
    var result__ = tmp9600;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp9601 = result__;
      var result__ = tmp9601;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp9602 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1359) {
    coll1359 = coll1359.reverse();
    function processOne357() {
      var i;
      i = coll1359.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp9603 = result__;
        
        if(coll1359.length > 0) processOne357(); else rest357();
        
      });
    }
    function rest357() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1359.length > 0) processOne357(); else rest357();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1360) {
    coll1360 = coll1360.reverse();
    function processOne358() {
      var i;
      i = coll1360.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp9604 = result__;
          
          if(coll1360.length > 0) processOne358(); else rest358();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp9604 = result__;
            
            if(coll1360.length > 0) processOne358(); else rest358();
            
          });
        }
      }
    }
    function rest358() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1360.length > 0) processOne358(); else rest358();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1361) {
    coll1361 = coll1361.reverse();
    function processOne359() {
      var i;
      i = coll1361.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp9605 = result__;
        
        if(coll1361.length > 0) processOne359(); else rest359();
        
      });
    }
    function rest359() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1361.length > 0) processOne359(); else rest359();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root11415 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9697 = $("<span>");
  root11415.append(nodes9697);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11416 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9613 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9512 = mobl.ref(result__);
    
    var nodes9698 = $("<span>");
    root11416.append(nodes9698);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9512, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11417 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9699 = $("<span>");
      root11417.append(nodes9699);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11418 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11418); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9699;
        nodes9699 = node.contents();
        oldNodes.replaceWith(nodes9699);
      }));
      callback(root11417); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9698;
      nodes9698 = node.contents();
      oldNodes.replaceWith(nodes9698);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9612 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9513 = mobl.ref(result__);
    
    var nodes9700 = $("<span>");
    root11416.append(nodes9700);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9513, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11419 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9701 = $("<span>");
      root11419.append(nodes9701);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11420 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11420); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9701;
        nodes9701 = node.contents();
        oldNodes.replaceWith(nodes9701);
      }));
      callback(root11419); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9700;
      nodes9700 = node.contents();
      oldNodes.replaceWith(nodes9700);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9611 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9514 = mobl.ref(result__);
    
    var nodes9702 = $("<span>");
    root11416.append(nodes9702);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9514, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11421 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9703 = $("<span>");
      root11421.append(nodes9703);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11422 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11422); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9703;
        nodes9703 = node.contents();
        oldNodes.replaceWith(nodes9703);
      }));
      callback(root11421); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9702;
      nodes9702 = node.contents();
      oldNodes.replaceWith(nodes9702);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9610 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9515 = mobl.ref(result__);
    
    var nodes9704 = $("<span>");
    root11416.append(nodes9704);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9515, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11423 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9705 = $("<span>");
      root11423.append(nodes9705);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11424 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11424); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9705;
        nodes9705 = node.contents();
        oldNodes.replaceWith(nodes9705);
      }));
      callback(root11423); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9704;
      nodes9704 = node.contents();
      oldNodes.replaceWith(nodes9704);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9609 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9516 = mobl.ref(result__);
    
    var nodes9706 = $("<span>");
    root11416.append(nodes9706);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9516, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11425 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9707 = $("<span>");
      root11425.append(nodes9707);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11426 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11426); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9707;
        nodes9707 = node.contents();
        oldNodes.replaceWith(nodes9707);
      }));
      callback(root11425); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9706;
      nodes9706 = node.contents();
      oldNodes.replaceWith(nodes9706);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9608 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9517 = mobl.ref(result__);
    
    var nodes9708 = $("<span>");
    root11416.append(nodes9708);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9517, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11427 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9709 = $("<span>");
      root11427.append(nodes9709);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11428 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11428); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9709;
        nodes9709 = node.contents();
        oldNodes.replaceWith(nodes9709);
      }));
      callback(root11427); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9708;
      nodes9708 = node.contents();
      oldNodes.replaceWith(nodes9708);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9607 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9518 = mobl.ref(result__);
    
    var nodes9710 = $("<span>");
    root11416.append(nodes9710);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9518, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11429 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9711 = $("<span>");
      root11429.append(nodes9711);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11430 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11430); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9711;
        nodes9711 = node.contents();
        oldNodes.replaceWith(nodes9711);
      }));
      callback(root11429); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9710;
      nodes9710 = node.contents();
      oldNodes.replaceWith(nodes9710);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9606 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9519 = mobl.ref(result__);
    
    var nodes9712 = $("<span>");
    root11416.append(nodes9712);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9519, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11431 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9713 = $("<span>");
      root11431.append(nodes9713);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11432 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11432); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9713;
        nodes9713 = node.contents();
        oldNodes.replaceWith(nodes9713);
      }));
      callback(root11431); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9712;
      nodes9712 = node.contents();
      oldNodes.replaceWith(nodes9712);
    }));
    callback(root11416); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9697;
    nodes9697 = node.contents();
    oldNodes.replaceWith(nodes9697);
  }));
  callback(root11415); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root11433 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes9714 = $("<span>");
  root11433.append(nodes9714);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11434 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9521 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9520 = mobl.ref(result__);
    
    var nodes9715 = $("<span>");
    root11434.append(nodes9715);
    subs__.addSub((ui.backButton)(tmp9520, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9521, function(_, callback) {
      var root11435 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11435); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9715;
      nodes9715 = node.contents();
      oldNodes.replaceWith(nodes9715);
    }));
    callback(root11434); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9714;
    nodes9714 = node.contents();
    oldNodes.replaceWith(nodes9714);
  }));
  var nodes9716 = $("<span>");
  root11433.append(nodes9716);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11436 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp9621 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9522 = mobl.ref(result__);
    
    var nodes9717 = $("<span>");
    root11436.append(nodes9717);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9522, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11437 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9718 = $("<span>");
      root11437.append(nodes9718);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11438 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11438); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9718;
        nodes9718 = node.contents();
        oldNodes.replaceWith(nodes9718);
      }));
      callback(root11437); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9717;
      nodes9717 = node.contents();
      oldNodes.replaceWith(nodes9717);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp9620 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9523 = mobl.ref(result__);
    
    var nodes9719 = $("<span>");
    root11436.append(nodes9719);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9523, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11439 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9720 = $("<span>");
      root11439.append(nodes9720);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11440 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11440); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9720;
        nodes9720 = node.contents();
        oldNodes.replaceWith(nodes9720);
      }));
      callback(root11439); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9719;
      nodes9719 = node.contents();
      oldNodes.replaceWith(nodes9719);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp9619 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9524 = mobl.ref(result__);
    
    var nodes9721 = $("<span>");
    root11436.append(nodes9721);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9524, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9722 = $("<span>");
      root11441.append(nodes9722);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11442 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11442); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9722;
        nodes9722 = node.contents();
        oldNodes.replaceWith(nodes9722);
      }));
      callback(root11441); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9721;
      nodes9721 = node.contents();
      oldNodes.replaceWith(nodes9721);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp9618 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9525 = mobl.ref(result__);
    
    var nodes9723 = $("<span>");
    root11436.append(nodes9723);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9525, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11443 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9724 = $("<span>");
      root11443.append(nodes9724);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11444 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11444); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9724;
        nodes9724 = node.contents();
        oldNodes.replaceWith(nodes9724);
      }));
      callback(root11443); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9723;
      nodes9723 = node.contents();
      oldNodes.replaceWith(nodes9723);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp9617 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9526 = mobl.ref(result__);
    
    var nodes9725 = $("<span>");
    root11436.append(nodes9725);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9526, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11445 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9726 = $("<span>");
      root11445.append(nodes9726);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11446 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11446); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9726;
        nodes9726 = node.contents();
        oldNodes.replaceWith(nodes9726);
      }));
      callback(root11445); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9725;
      nodes9725 = node.contents();
      oldNodes.replaceWith(nodes9725);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp9616 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9527 = mobl.ref(result__);
    
    var nodes9727 = $("<span>");
    root11436.append(nodes9727);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9527, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11447 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9728 = $("<span>");
      root11447.append(nodes9728);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11448 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11448); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9728;
        nodes9728 = node.contents();
        oldNodes.replaceWith(nodes9728);
      }));
      callback(root11447); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9727;
      nodes9727 = node.contents();
      oldNodes.replaceWith(nodes9727);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp9615 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9528 = mobl.ref(result__);
    
    var nodes9729 = $("<span>");
    root11436.append(nodes9729);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9528, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11449 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9730 = $("<span>");
      root11449.append(nodes9730);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11450 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11450); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9730;
        nodes9730 = node.contents();
        oldNodes.replaceWith(nodes9730);
      }));
      callback(root11449); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9729;
      nodes9729 = node.contents();
      oldNodes.replaceWith(nodes9729);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp9614 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9529 = mobl.ref(result__);
    
    var nodes9731 = $("<span>");
    root11436.append(nodes9731);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9529, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11451 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9732 = $("<span>");
      root11451.append(nodes9732);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11452 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11452); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9732;
        nodes9732 = node.contents();
        oldNodes.replaceWith(nodes9732);
      }));
      callback(root11451); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9731;
      nodes9731 = node.contents();
      oldNodes.replaceWith(nodes9731);
    }));
    callback(root11436); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9716;
    nodes9716 = node.contents();
    oldNodes.replaceWith(nodes9716);
  }));
  callback(root11433); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root11453 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9733 = $("<span>");
  root11453.append(nodes9733);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11454 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9531 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9530 = mobl.ref(result__);
    
    var nodes9734 = $("<span>");
    root11454.append(nodes9734);
    subs__.addSub((ui.backButton)(tmp9530, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9531, function(_, callback) {
      var root11455 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11455); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9734;
      nodes9734 = node.contents();
      oldNodes.replaceWith(nodes9734);
    }));
    callback(root11454); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9733;
    nodes9733 = node.contents();
    oldNodes.replaceWith(nodes9733);
  }));
  var nodes9735 = $("<span>");
  root11453.append(nodes9735);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11456 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp9626 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9532 = mobl.ref(result__);
    
    var nodes9736 = $("<span>");
    root11456.append(nodes9736);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9532, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9737 = $("<span>");
      root11457.append(nodes9737);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11458 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11458); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9737;
        nodes9737 = node.contents();
        oldNodes.replaceWith(nodes9737);
      }));
      callback(root11457); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9736;
      nodes9736 = node.contents();
      oldNodes.replaceWith(nodes9736);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp9625 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9533 = mobl.ref(result__);
    
    var nodes9738 = $("<span>");
    root11456.append(nodes9738);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9533, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9739 = $("<span>");
      root11459.append(nodes9739);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11460 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11460); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9739;
        nodes9739 = node.contents();
        oldNodes.replaceWith(nodes9739);
      }));
      callback(root11459); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9738;
      nodes9738 = node.contents();
      oldNodes.replaceWith(nodes9738);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp9624 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9534 = mobl.ref(result__);
    
    var nodes9740 = $("<span>");
    root11456.append(nodes9740);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9534, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11461 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9741 = $("<span>");
      root11461.append(nodes9741);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11462 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11462); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9741;
        nodes9741 = node.contents();
        oldNodes.replaceWith(nodes9741);
      }));
      callback(root11461); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9740;
      nodes9740 = node.contents();
      oldNodes.replaceWith(nodes9740);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp9623 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9535 = mobl.ref(result__);
    
    var nodes9742 = $("<span>");
    root11456.append(nodes9742);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9535, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11463 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9743 = $("<span>");
      root11463.append(nodes9743);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11464 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11464); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9743;
        nodes9743 = node.contents();
        oldNodes.replaceWith(nodes9743);
      }));
      callback(root11463); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9742;
      nodes9742 = node.contents();
      oldNodes.replaceWith(nodes9742);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp9622 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9536 = mobl.ref(result__);
    
    var nodes9744 = $("<span>");
    root11456.append(nodes9744);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9536, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11465 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9745 = $("<span>");
      root11465.append(nodes9745);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11466 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11466); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9745;
        nodes9745 = node.contents();
        oldNodes.replaceWith(nodes9745);
      }));
      callback(root11465); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9744;
      nodes9744 = node.contents();
      oldNodes.replaceWith(nodes9744);
    }));
    callback(root11456); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9735;
    nodes9735 = node.contents();
    oldNodes.replaceWith(nodes9735);
  }));
  callback(root11453); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root11467 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9746 = $("<span>");
  root11467.append(nodes9746);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11468 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9538 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9537 = mobl.ref(result__);
    
    var nodes9747 = $("<span>");
    root11468.append(nodes9747);
    subs__.addSub((ui.backButton)(tmp9537, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9538, function(_, callback) {
      var root11469 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11469); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9747;
      nodes9747 = node.contents();
      oldNodes.replaceWith(nodes9747);
    }));
    callback(root11468); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9746;
    nodes9746 = node.contents();
    oldNodes.replaceWith(nodes9746);
  }));
  var nodes9748 = $("<span>");
  root11467.append(nodes9748);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11470 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp9629 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9539 = mobl.ref(result__);
    
    var nodes9749 = $("<span>");
    root11470.append(nodes9749);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9539, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11471 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9750 = $("<span>");
      root11471.append(nodes9750);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11472 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11472); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9750;
        nodes9750 = node.contents();
        oldNodes.replaceWith(nodes9750);
      }));
      callback(root11471); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9749;
      nodes9749 = node.contents();
      oldNodes.replaceWith(nodes9749);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp9628 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9540 = mobl.ref(result__);
    
    var nodes9751 = $("<span>");
    root11470.append(nodes9751);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9540, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11473 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9752 = $("<span>");
      root11473.append(nodes9752);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11474 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11474); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9752;
        nodes9752 = node.contents();
        oldNodes.replaceWith(nodes9752);
      }));
      callback(root11473); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9751;
      nodes9751 = node.contents();
      oldNodes.replaceWith(nodes9751);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp9627 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9541 = mobl.ref(result__);
    
    var nodes9753 = $("<span>");
    root11470.append(nodes9753);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9541, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11475 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9754 = $("<span>");
      root11475.append(nodes9754);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11476 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11476); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9754;
        nodes9754 = node.contents();
        oldNodes.replaceWith(nodes9754);
      }));
      callback(root11475); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9753;
      nodes9753 = node.contents();
      oldNodes.replaceWith(nodes9753);
    }));
    callback(root11470); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9748;
    nodes9748 = node.contents();
    oldNodes.replaceWith(nodes9748);
  }));
  callback(root11467); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root11477 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9755 = $("<span>");
  root11477.append(nodes9755);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11478 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9543 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9542 = mobl.ref(result__);
    
    var nodes9756 = $("<span>");
    root11478.append(nodes9756);
    subs__.addSub((ui.backButton)(tmp9542, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9543, function(_, callback) {
      var root11479 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11479); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9756;
      nodes9756 = node.contents();
      oldNodes.replaceWith(nodes9756);
    }));
    callback(root11478); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9755;
    nodes9755 = node.contents();
    oldNodes.replaceWith(nodes9755);
  }));
  var nodes9757 = $("<span>");
  root11477.append(nodes9757);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11480 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp9633 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9544 = mobl.ref(result__);
    
    var nodes9758 = $("<span>");
    root11480.append(nodes9758);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9544, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11481 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9759 = $("<span>");
      root11481.append(nodes9759);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11482 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11482); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9759;
        nodes9759 = node.contents();
        oldNodes.replaceWith(nodes9759);
      }));
      callback(root11481); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9758;
      nodes9758 = node.contents();
      oldNodes.replaceWith(nodes9758);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp9632 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9545 = mobl.ref(result__);
    
    var nodes9760 = $("<span>");
    root11480.append(nodes9760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9545, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11483 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9761 = $("<span>");
      root11483.append(nodes9761);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11484 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11484); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9761;
        nodes9761 = node.contents();
        oldNodes.replaceWith(nodes9761);
      }));
      callback(root11483); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9760;
      nodes9760 = node.contents();
      oldNodes.replaceWith(nodes9760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp9631 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9546 = mobl.ref(result__);
    
    var nodes9762 = $("<span>");
    root11480.append(nodes9762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9546, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11485 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9763 = $("<span>");
      root11485.append(nodes9763);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11486 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11486); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9763;
        nodes9763 = node.contents();
        oldNodes.replaceWith(nodes9763);
      }));
      callback(root11485); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9762;
      nodes9762 = node.contents();
      oldNodes.replaceWith(nodes9762);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp9630 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9547 = mobl.ref(result__);
    
    var nodes9764 = $("<span>");
    root11480.append(nodes9764);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9547, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11487 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9765 = $("<span>");
      root11487.append(nodes9765);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11488 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11488); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9765;
        nodes9765 = node.contents();
        oldNodes.replaceWith(nodes9765);
      }));
      callback(root11487); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9764;
      nodes9764 = node.contents();
      oldNodes.replaceWith(nodes9764);
    }));
    callback(root11480); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9757;
    nodes9757 = node.contents();
    oldNodes.replaceWith(nodes9757);
  }));
  callback(root11477); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root11489 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9766 = $("<span>");
  root11489.append(nodes9766);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11490 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9549 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9548 = mobl.ref(result__);
    
    var nodes9767 = $("<span>");
    root11490.append(nodes9767);
    subs__.addSub((ui.backButton)(tmp9548, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9549, function(_, callback) {
      var root11491 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11491); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9767;
      nodes9767 = node.contents();
      oldNodes.replaceWith(nodes9767);
    }));
    callback(root11490); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9766;
    nodes9766 = node.contents();
    oldNodes.replaceWith(nodes9766);
  }));
  var nodes9768 = $("<span>");
  root11489.append(nodes9768);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11492 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp9635 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9550 = mobl.ref(result__);
    
    var nodes9769 = $("<span>");
    root11492.append(nodes9769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9550, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11493 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9770 = $("<span>");
      root11493.append(nodes9770);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11494 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11494); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9770;
        nodes9770 = node.contents();
        oldNodes.replaceWith(nodes9770);
      }));
      callback(root11493); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9769;
      nodes9769 = node.contents();
      oldNodes.replaceWith(nodes9769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp9634 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9551 = mobl.ref(result__);
    
    var nodes9771 = $("<span>");
    root11492.append(nodes9771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9551, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11495 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9772 = $("<span>");
      root11495.append(nodes9772);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11496 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11496); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9772;
        nodes9772 = node.contents();
        oldNodes.replaceWith(nodes9772);
      }));
      callback(root11495); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9771;
      nodes9771 = node.contents();
      oldNodes.replaceWith(nodes9771);
    }));
    callback(root11492); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9768;
    nodes9768 = node.contents();
    oldNodes.replaceWith(nodes9768);
  }));
  callback(root11489); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root11497 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9773 = $("<span>");
  root11497.append(nodes9773);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11498 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9553 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9552 = mobl.ref(result__);
    
    var nodes9774 = $("<span>");
    root11498.append(nodes9774);
    subs__.addSub((ui.backButton)(tmp9552, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9553, function(_, callback) {
      var root11499 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11499); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9774;
      nodes9774 = node.contents();
      oldNodes.replaceWith(nodes9774);
    }));
    callback(root11498); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9773;
    nodes9773 = node.contents();
    oldNodes.replaceWith(nodes9773);
  }));
  var nodes9775 = $("<span>");
  root11497.append(nodes9775);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11500 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp9640 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9554 = mobl.ref(result__);
    
    var nodes9776 = $("<span>");
    root11500.append(nodes9776);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9554, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11501 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9777 = $("<span>");
      root11501.append(nodes9777);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11502 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11502); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9777;
        nodes9777 = node.contents();
        oldNodes.replaceWith(nodes9777);
      }));
      callback(root11501); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9776;
      nodes9776 = node.contents();
      oldNodes.replaceWith(nodes9776);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp9639 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9555 = mobl.ref(result__);
    
    var nodes9778 = $("<span>");
    root11500.append(nodes9778);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9555, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11503 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9779 = $("<span>");
      root11503.append(nodes9779);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11504 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11504); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9779;
        nodes9779 = node.contents();
        oldNodes.replaceWith(nodes9779);
      }));
      callback(root11503); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9778;
      nodes9778 = node.contents();
      oldNodes.replaceWith(nodes9778);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp9638 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9556 = mobl.ref(result__);
    
    var nodes9780 = $("<span>");
    root11500.append(nodes9780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9556, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11505 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9781 = $("<span>");
      root11505.append(nodes9781);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11506 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11506); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9781;
        nodes9781 = node.contents();
        oldNodes.replaceWith(nodes9781);
      }));
      callback(root11505); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9780;
      nodes9780 = node.contents();
      oldNodes.replaceWith(nodes9780);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp9637 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9557 = mobl.ref(result__);
    
    var nodes9782 = $("<span>");
    root11500.append(nodes9782);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9557, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11507 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9783 = $("<span>");
      root11507.append(nodes9783);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11508 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11508); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9783;
        nodes9783 = node.contents();
        oldNodes.replaceWith(nodes9783);
      }));
      callback(root11507); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9782;
      nodes9782 = node.contents();
      oldNodes.replaceWith(nodes9782);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp9636 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9558 = mobl.ref(result__);
    
    var nodes9784 = $("<span>");
    root11500.append(nodes9784);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9558, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11509 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9785 = $("<span>");
      root11509.append(nodes9785);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11510 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11510); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9785;
        nodes9785 = node.contents();
        oldNodes.replaceWith(nodes9785);
      }));
      callback(root11509); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9784;
      nodes9784 = node.contents();
      oldNodes.replaceWith(nodes9784);
    }));
    callback(root11500); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9775;
    nodes9775 = node.contents();
    oldNodes.replaceWith(nodes9775);
  }));
  callback(root11497); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root11511 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9786 = $("<span>");
  root11511.append(nodes9786);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11512 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9560 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9559 = mobl.ref(result__);
    
    var nodes9787 = $("<span>");
    root11512.append(nodes9787);
    subs__.addSub((ui.backButton)(tmp9559, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9560, function(_, callback) {
      var root11513 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11513); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9787;
      nodes9787 = node.contents();
      oldNodes.replaceWith(nodes9787);
    }));
    callback(root11512); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9786;
    nodes9786 = node.contents();
    oldNodes.replaceWith(nodes9786);
  }));
  var nodes9788 = $("<span>");
  root11511.append(nodes9788);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11514 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp9643 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9561 = mobl.ref(result__);
    
    var nodes9789 = $("<span>");
    root11514.append(nodes9789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9561, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11515 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9790 = $("<span>");
      root11515.append(nodes9790);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11516 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11516); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9790;
        nodes9790 = node.contents();
        oldNodes.replaceWith(nodes9790);
      }));
      callback(root11515); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9789;
      nodes9789 = node.contents();
      oldNodes.replaceWith(nodes9789);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp9642 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9562 = mobl.ref(result__);
    
    var nodes9791 = $("<span>");
    root11514.append(nodes9791);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9562, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11517 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9792 = $("<span>");
      root11517.append(nodes9792);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11518 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11518); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9792;
        nodes9792 = node.contents();
        oldNodes.replaceWith(nodes9792);
      }));
      callback(root11517); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9791;
      nodes9791 = node.contents();
      oldNodes.replaceWith(nodes9791);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp9641 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9563 = mobl.ref(result__);
    
    var nodes9793 = $("<span>");
    root11514.append(nodes9793);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9563, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11519 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9794 = $("<span>");
      root11519.append(nodes9794);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11520 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11520); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9794;
        nodes9794 = node.contents();
        oldNodes.replaceWith(nodes9794);
      }));
      callback(root11519); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9793;
      nodes9793 = node.contents();
      oldNodes.replaceWith(nodes9793);
    }));
    callback(root11514); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9788;
    nodes9788 = node.contents();
    oldNodes.replaceWith(nodes9788);
  }));
  callback(root11511); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root11521 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9795 = $("<span>");
  root11521.append(nodes9795);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11522 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9565 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9564 = mobl.ref(result__);
    
    var nodes9796 = $("<span>");
    root11522.append(nodes9796);
    subs__.addSub((ui.backButton)(tmp9564, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9565, function(_, callback) {
      var root11523 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11523); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9796;
      nodes9796 = node.contents();
      oldNodes.replaceWith(nodes9796);
    }));
    callback(root11522); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9795;
    nodes9795 = node.contents();
    oldNodes.replaceWith(nodes9795);
  }));
  var nodes9797 = $("<span>");
  root11521.append(nodes9797);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11524 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp9644 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9566 = mobl.ref(result__);
    
    var nodes9798 = $("<span>");
    root11524.append(nodes9798);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9566, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11525 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9799 = $("<span>");
      root11525.append(nodes9799);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11526 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11526); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9799;
        nodes9799 = node.contents();
        oldNodes.replaceWith(nodes9799);
      }));
      callback(root11525); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9798;
      nodes9798 = node.contents();
      oldNodes.replaceWith(nodes9798);
    }));
    callback(root11524); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9797;
    nodes9797 = node.contents();
    oldNodes.replaceWith(nodes9797);
  }));
  callback(root11521); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root11527 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9800 = $("<span>");
  root11527.append(nodes9800);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11528 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp9657 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9567 = mobl.ref(result__);
    
    var nodes9801 = $("<span>");
    root11528.append(nodes9801);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9567, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11529 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9802 = $("<span>");
      root11529.append(nodes9802);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11530 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11530); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9802;
        nodes9802 = node.contents();
        oldNodes.replaceWith(nodes9802);
      }));
      callback(root11529); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9801;
      nodes9801 = node.contents();
      oldNodes.replaceWith(nodes9801);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp9656 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9568 = mobl.ref(result__);
    
    var nodes9803 = $("<span>");
    root11528.append(nodes9803);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9568, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11531 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9804 = $("<span>");
      root11531.append(nodes9804);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11532 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11532); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9804;
        nodes9804 = node.contents();
        oldNodes.replaceWith(nodes9804);
      }));
      callback(root11531); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9803;
      nodes9803 = node.contents();
      oldNodes.replaceWith(nodes9803);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp9655 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9569 = mobl.ref(result__);
    
    var nodes9805 = $("<span>");
    root11528.append(nodes9805);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9569, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11533 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9806 = $("<span>");
      root11533.append(nodes9806);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11534 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11534); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9806;
        nodes9806 = node.contents();
        oldNodes.replaceWith(nodes9806);
      }));
      callback(root11533); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9805;
      nodes9805 = node.contents();
      oldNodes.replaceWith(nodes9805);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp9654 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9570 = mobl.ref(result__);
    
    var nodes9807 = $("<span>");
    root11528.append(nodes9807);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9570, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11535 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9808 = $("<span>");
      root11535.append(nodes9808);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11536 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11536); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9808;
        nodes9808 = node.contents();
        oldNodes.replaceWith(nodes9808);
      }));
      callback(root11535); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9807;
      nodes9807 = node.contents();
      oldNodes.replaceWith(nodes9807);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp9653 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9571 = mobl.ref(result__);
    
    var nodes9809 = $("<span>");
    root11528.append(nodes9809);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9571, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11537 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9810 = $("<span>");
      root11537.append(nodes9810);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11538 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11538); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9810;
        nodes9810 = node.contents();
        oldNodes.replaceWith(nodes9810);
      }));
      callback(root11537); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9809;
      nodes9809 = node.contents();
      oldNodes.replaceWith(nodes9809);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp9652 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9572 = mobl.ref(result__);
    
    var nodes9811 = $("<span>");
    root11528.append(nodes9811);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9572, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11539 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9812 = $("<span>");
      root11539.append(nodes9812);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11540 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11540); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9812;
        nodes9812 = node.contents();
        oldNodes.replaceWith(nodes9812);
      }));
      callback(root11539); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9811;
      nodes9811 = node.contents();
      oldNodes.replaceWith(nodes9811);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp9651 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9573 = mobl.ref(result__);
    
    var nodes9813 = $("<span>");
    root11528.append(nodes9813);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9573, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11541 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9814 = $("<span>");
      root11541.append(nodes9814);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11542 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11542); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9814;
        nodes9814 = node.contents();
        oldNodes.replaceWith(nodes9814);
      }));
      callback(root11541); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9813;
      nodes9813 = node.contents();
      oldNodes.replaceWith(nodes9813);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp9650 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9574 = mobl.ref(result__);
    
    var nodes9815 = $("<span>");
    root11528.append(nodes9815);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9574, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11543 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9816 = $("<span>");
      root11543.append(nodes9816);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11544 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11544); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9816;
        nodes9816 = node.contents();
        oldNodes.replaceWith(nodes9816);
      }));
      callback(root11543); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9815;
      nodes9815 = node.contents();
      oldNodes.replaceWith(nodes9815);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp9649 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9575 = mobl.ref(result__);
    
    var nodes9817 = $("<span>");
    root11528.append(nodes9817);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9575, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11545 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9818 = $("<span>");
      root11545.append(nodes9818);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11546 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11546); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9818;
        nodes9818 = node.contents();
        oldNodes.replaceWith(nodes9818);
      }));
      callback(root11545); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9817;
      nodes9817 = node.contents();
      oldNodes.replaceWith(nodes9817);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp9648 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9576 = mobl.ref(result__);
    
    var nodes9819 = $("<span>");
    root11528.append(nodes9819);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9576, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11547 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9820 = $("<span>");
      root11547.append(nodes9820);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11548 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11548); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9820;
        nodes9820 = node.contents();
        oldNodes.replaceWith(nodes9820);
      }));
      callback(root11547); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9819;
      nodes9819 = node.contents();
      oldNodes.replaceWith(nodes9819);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp9647 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9577 = mobl.ref(result__);
    
    var nodes9821 = $("<span>");
    root11528.append(nodes9821);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9577, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11549 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9822 = $("<span>");
      root11549.append(nodes9822);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11550 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11550); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9822;
        nodes9822 = node.contents();
        oldNodes.replaceWith(nodes9822);
      }));
      callback(root11549); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9821;
      nodes9821 = node.contents();
      oldNodes.replaceWith(nodes9821);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp9646 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9578 = mobl.ref(result__);
    
    var nodes9823 = $("<span>");
    root11528.append(nodes9823);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9578, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11551 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9824 = $("<span>");
      root11551.append(nodes9824);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11552 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11552); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9824;
        nodes9824 = node.contents();
        oldNodes.replaceWith(nodes9824);
      }));
      callback(root11551); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9823;
      nodes9823 = node.contents();
      oldNodes.replaceWith(nodes9823);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp9645 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9579 = mobl.ref(result__);
    
    var nodes9825 = $("<span>");
    root11528.append(nodes9825);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9579, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11553 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9826 = $("<span>");
      root11553.append(nodes9826);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11554 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11554); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9826;
        nodes9826 = node.contents();
        oldNodes.replaceWith(nodes9826);
      }));
      callback(root11553); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9825;
      nodes9825 = node.contents();
      oldNodes.replaceWith(nodes9825);
    }));
    callback(root11528); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9800;
    nodes9800 = node.contents();
    oldNodes.replaceWith(nodes9800);
  }));
  callback(root11527); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root11555 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9827 = $("<span>");
  root11555.append(nodes9827);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11556 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp9663 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9580 = mobl.ref(result__);
    
    var nodes9828 = $("<span>");
    root11556.append(nodes9828);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9580, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11557 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9829 = $("<span>");
      root11557.append(nodes9829);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11558 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11558); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9829;
        nodes9829 = node.contents();
        oldNodes.replaceWith(nodes9829);
      }));
      callback(root11557); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9828;
      nodes9828 = node.contents();
      oldNodes.replaceWith(nodes9828);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp9662 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9581 = mobl.ref(result__);
    
    var nodes9830 = $("<span>");
    root11556.append(nodes9830);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9581, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11559 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9831 = $("<span>");
      root11559.append(nodes9831);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11560 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11560); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9831;
        nodes9831 = node.contents();
        oldNodes.replaceWith(nodes9831);
      }));
      callback(root11559); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9830;
      nodes9830 = node.contents();
      oldNodes.replaceWith(nodes9830);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp9661 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9582 = mobl.ref(result__);
    
    var nodes9832 = $("<span>");
    root11556.append(nodes9832);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9582, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11561 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9833 = $("<span>");
      root11561.append(nodes9833);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11562 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11562); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9833;
        nodes9833 = node.contents();
        oldNodes.replaceWith(nodes9833);
      }));
      callback(root11561); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9832;
      nodes9832 = node.contents();
      oldNodes.replaceWith(nodes9832);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp9660 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9583 = mobl.ref(result__);
    
    var nodes9834 = $("<span>");
    root11556.append(nodes9834);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9583, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11563 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9835 = $("<span>");
      root11563.append(nodes9835);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11564 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11564); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9835;
        nodes9835 = node.contents();
        oldNodes.replaceWith(nodes9835);
      }));
      callback(root11563); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9834;
      nodes9834 = node.contents();
      oldNodes.replaceWith(nodes9834);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp9659 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9584 = mobl.ref(result__);
    
    var nodes9836 = $("<span>");
    root11556.append(nodes9836);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9584, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11565 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9837 = $("<span>");
      root11565.append(nodes9837);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11566 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11566); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9837;
        nodes9837 = node.contents();
        oldNodes.replaceWith(nodes9837);
      }));
      callback(root11565); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9836;
      nodes9836 = node.contents();
      oldNodes.replaceWith(nodes9836);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp9658 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9585 = mobl.ref(result__);
    
    var nodes9838 = $("<span>");
    root11556.append(nodes9838);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9585, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11567 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9839 = $("<span>");
      root11567.append(nodes9839);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11568 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11568); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9839;
        nodes9839 = node.contents();
        oldNodes.replaceWith(nodes9839);
      }));
      callback(root11567); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9838;
      nodes9838 = node.contents();
      oldNodes.replaceWith(nodes9838);
    }));
    callback(root11556); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9827;
    nodes9827 = node.contents();
    oldNodes.replaceWith(nodes9827);
  }));
  callback(root11555); return subs__;
  
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
  var root11569 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1981 = $("<div>");
  
  var ref1962 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref1962.get() !== null) {
    node1981.attr('class', ref1962.get());
    subs__.addSub(ref1962.addEventListener('change', function(_, ref, val) {
      node1981.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1962.rebind());
  
  var val922 = onclick.get();
  if(val922 !== null) {
    subs__.addSub(mobl.domBind(node1981, 'tap', val922));
  }
  
  
  var node1982 = $("<div>");
  
  var ref1961 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref1961.get() !== null) {
    node1982.attr('class', ref1961.get());
    subs__.addSub(ref1961.addEventListener('change', function(_, ref, val) {
      node1982.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1961.rebind());
  
  
  var node1983 = $("<div>");
  
  var ref1959 = text;
  node1983.text(""+ref1959.get());
  var ignore371 = false;
  subs__.addSub(ref1959.addEventListener('change', function(_, ref, val) {
    if(ignore371) return;
    node1983.text(""+val);
  }));
  subs__.addSub(ref1959.rebind());
  
  
  var ref1960 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1960.get() !== null) {
    node1983.attr('class', ref1960.get());
    subs__.addSub(ref1960.addEventListener('change', function(_, ref, val) {
      node1983.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1960.rebind());
  
  node1982.append(node1983);
  node1981.append(node1982);
  var nodes9840 = $("<span>");
  node1981.append(nodes9840);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl791();
  }));
  
  function renderControl791() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11570 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11570); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9840;
      nodes9840 = node.contents();
      oldNodes.replaceWith(nodes9840);
    }));
  }
  renderControl791();
  root11569.append(node1981);
  callback(root11569); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp9664 = result__;
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
  var root11571 = $("<span>");
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
  var tmp9590 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp9589 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp9589.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp9589.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp9589.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes9841 = $("<span>");
  root11571.append(nodes9841);
  subs__.addSub((mobl.block)(tmp9589, mobl.ref(null), tmp9590, mobl.ref(null), function(_, callback) {
    var root11572 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp9586 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp9586.set("A" + number.get() + ". ");
    }));
    
    var nodes9842 = $("<span>");
    root11572.append(nodes9842);
    subs__.addSub((mobl.label)(tmp9586, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root11573 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11573); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9842;
      nodes9842 = node.contents();
      oldNodes.replaceWith(nodes9842);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp9588 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp9588.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1984 = $("<span>");
    root11572.append(node1984);
    var condSubs492 = new mobl.CompSubscription();
    subs__.addSub(condSubs492);
    var oldValue492;
    var renderCond492 = function() {
      var value1160 = tmp9588.get();
      if(oldValue492 === value1160) return;
      oldValue492 = value1160;
      var subs__ = condSubs492;
      subs__.unsubscribe();
      node1984.empty();
      if(value1160) {
        
        var node1985 = $("<span>");
        
        var ref1963 = mobl.ref("answer-block-" + number.get());
        if(ref1963.get() !== null) {
          node1985.attr('id', ref1963.get());
          subs__.addSub(ref1963.addEventListener('change', function(_, ref, val) {
            node1985.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1985.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref1963.rebind());
        
        var result__ = nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp9587 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp9587.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp9587.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes9843 = $("<span>");
        node1985.append(nodes9843);
        subs__.addSub((mobl.html)(tmp9587, function(_, callback) {
          var root11574 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11574); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9843;
          nodes9843 = node.contents();
          oldNodes.replaceWith(nodes9843);
        }));
        node1984.append(node1985);
        
        
        
      } else {
        var nodes9844 = $("<span>");
        node1984.append(nodes9844);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root11575 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11575); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9844;
          nodes9844 = node.contents();
          oldNodes.replaceWith(nodes9844);
        }));
        
        
      }
    };
    renderCond492();
    subs__.addSub(tmp9588.addEventListener('change', function() {
      renderCond492();
    }));
    
    callback(root11572); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9841;
    nodes9841 = node.contents();
    oldNodes.replaceWith(nodes9841);
  }));
  var nodes9845 = $("<span>");
  root11571.append(nodes9845);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root11576 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes9846 = $("<span>");
    root11576.append(nodes9846);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root11577 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11577); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9846;
      nodes9846 = node.contents();
      oldNodes.replaceWith(nodes9846);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9591 = mobl.ref(result__);
    
    var nodes9847 = $("<span>");
    root11576.append(nodes9847);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp9591, function(_, callback) {
      var root11578 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11578); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9847;
      nodes9847 = node.contents();
      oldNodes.replaceWith(nodes9847);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9592 = mobl.ref(result__);
    
    var nodes9848 = $("<span>");
    root11576.append(nodes9848);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp9592, function(_, callback) {
      var root11579 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11579); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9848;
      nodes9848 = node.contents();
      oldNodes.replaceWith(nodes9848);
    }));
    callback(root11576); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9845;
    nodes9845 = node.contents();
    oldNodes.replaceWith(nodes9845);
  }));
  callback(root11571); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp9665 = result__;
    var result__ = tmp9665;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp9666 = result__;
        var result__ = tmp9666;
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
  var root11580 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp9676 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp9594 = mobl.ref(result__);
  
  var nodes9849 = $("<span>");
  root11580.append(nodes9849);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp9594, function(_, callback) {
    var root11581 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp9669 = result__;
                       var result__ = tmp9669;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp9670 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp9593 = mobl.ref(result__);
    
    var nodes9850 = $("<span>");
    root11581.append(nodes9850);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp9593, function(_, callback) {
      var root11582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11582); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9850;
      nodes9850 = node.contents();
      oldNodes.replaceWith(nodes9850);
    }));
    mobl.sleep(100, function(result__) {
      var tmp9667 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp9668 = result__;
        callback(root11581); return subs__;
      });
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9849;
    nodes9849 = node.contents();
    oldNodes.replaceWith(nodes9849);
  }));
  var nodes9851 = $("<span>");
  root11580.append(nodes9851);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11583 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp9673 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9597 = mobl.ref(result__);
    
    var nodes9852 = $("<span>");
    root11583.append(nodes9852);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp9597, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root11584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp9595 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp9595.set("Q" + number.get() + ". ");
      }));
      
      var nodes9853 = $("<span>");
      root11584.append(nodes9853);
      subs__.addSub((mobl.html)(tmp9595, function(_, callback) {
        var root11585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9853;
        nodes9853 = node.contents();
        oldNodes.replaceWith(nodes9853);
      }));
      
      var node1986 = $("<span>");
      
      var ref1964 = mobl.ref("question-block-" + number.get());
      if(ref1964.get() !== null) {
        node1986.attr('id', ref1964.get());
        subs__.addSub(ref1964.addEventListener('change', function(_, ref, val) {
          node1986.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1986.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref1964.rebind());
      
      var result__ = nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp9596 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp9596.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp9596.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes9854 = $("<span>");
      node1986.append(nodes9854);
      subs__.addSub((mobl.html)(tmp9596, function(_, callback) {
        var root11586 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11586); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9854;
        nodes9854 = node.contents();
        oldNodes.replaceWith(nodes9854);
      }));
      root11584.append(node1986);
      callback(root11584); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9852;
      nodes9852 = node.contents();
      oldNodes.replaceWith(nodes9852);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp9672 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9599 = mobl.ref(result__);
    
    var nodes9855 = $("<span>");
    root11583.append(nodes9855);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9599, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root11587 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9856 = $("<span>");
      root11587.append(nodes9856);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11588 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp9671 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp9598 = mobl.ref(result__);
        
        var nodes9857 = $("<span>");
        root11588.append(nodes9857);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp9598, function(_, callback) {
          var root11589 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11589); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9857;
          nodes9857 = node.contents();
          oldNodes.replaceWith(nodes9857);
        }));
        callback(root11588); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9856;
        nodes9856 = node.contents();
        oldNodes.replaceWith(nodes9856);
      }));
      
      var node1987 = $("<span>");
      root11587.append(node1987);
      var condSubs493 = new mobl.CompSubscription();
      subs__.addSub(condSubs493);
      var oldValue493;
      var renderCond493 = function() {
        var value1161 = qa.get().done;
        if(oldValue493 === value1161) return;
        oldValue493 = value1161;
        var subs__ = condSubs493;
        subs__.unsubscribe();
        node1987.empty();
        if(value1161) {
          var nodes9858 = $("<span>");
          node1987.append(nodes9858);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root11590 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root11590); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes9858;
            nodes9858 = node.contents();
            oldNodes.replaceWith(nodes9858);
          }));
          
          
        } else {
          
        }
      };
      renderCond493();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond493();
      }));
      
      callback(root11587); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9855;
      nodes9855 = node.contents();
      oldNodes.replaceWith(nodes9855);
    }));
    callback(root11583); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9851;
    nodes9851 = node.contents();
    oldNodes.replaceWith(nodes9851);
  }));
  mobl.sleep(100, function(result__) {
    var tmp9674 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp9675 = result__;
      callback(root11580); return subs__;
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
  qas.list(function(coll1362) {
    coll1362 = coll1362.reverse();
    function processOne360() {
      var item;
      item = coll1362.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1362.length > 0) processOne360(); else rest360();
      
    }
    function rest360() {
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
    if(coll1362.length > 0) processOne360(); else rest360();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1363) {
    coll1363 = coll1363.reverse();
    function processOne361() {
      var item;
      item = coll1363.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1363.length > 0) processOne361(); else rest361();
      
    }
    function rest361() {
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
    if(coll1363.length > 0) processOne361(); else rest361();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1364) {
    coll1364 = coll1364.reverse();
    function processOne362() {
      var item;
      item = coll1364.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1364.length > 0) processOne362(); else rest362();
      
    }
    function rest362() {
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
    if(coll1364.length > 0) processOne362(); else rest362();
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