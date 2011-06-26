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
    var tmp19617 = result__;
    var result__ = tmp19617;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp19618 = result__;
      var result__ = tmp19618;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp19619 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1068) {
    coll1068 = coll1068.reverse();
    function processOne702() {
      var i;
      i = coll1068.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp19620 = result__;
        
        if(coll1068.length > 0) processOne702(); else rest702();
        
      });
    }
    function rest702() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1068.length > 0) processOne702(); else rest702();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1069) {
    coll1069 = coll1069.reverse();
    function processOne703() {
      var i;
      i = coll1069.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp19621 = result__;
          
          if(coll1069.length > 0) processOne703(); else rest703();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp19621 = result__;
            
            if(coll1069.length > 0) processOne703(); else rest703();
            
          });
        }
      }
    }
    function rest703() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1069.length > 0) processOne703(); else rest703();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1070) {
    coll1070 = coll1070.reverse();
    function processOne704() {
      var i;
      i = coll1070.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp19622 = result__;
        
        if(coll1070.length > 0) processOne704(); else rest704();
        
      });
    }
    function rest704() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1070.length > 0) processOne704(); else rest704();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root21458 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19647 = $("<span>");
  root21458.append(nodes19647);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21459 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp19630 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19529 = mobl.ref(result__);
    
    var nodes19648 = $("<span>");
    root21459.append(nodes19648);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19529, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19649 = $("<span>");
      root21460.append(nodes19649);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21461 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21461); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19649;
        nodes19649 = node.contents();
        oldNodes.replaceWith(nodes19649);
      }));
      callback(root21460); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19648;
      nodes19648 = node.contents();
      oldNodes.replaceWith(nodes19648);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp19629 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19530 = mobl.ref(result__);
    
    var nodes19650 = $("<span>");
    root21459.append(nodes19650);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19530, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21462 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19651 = $("<span>");
      root21462.append(nodes19651);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21463 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21463); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19651;
        nodes19651 = node.contents();
        oldNodes.replaceWith(nodes19651);
      }));
      callback(root21462); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19650;
      nodes19650 = node.contents();
      oldNodes.replaceWith(nodes19650);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp19628 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19531 = mobl.ref(result__);
    
    var nodes19652 = $("<span>");
    root21459.append(nodes19652);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19531, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21464 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19653 = $("<span>");
      root21464.append(nodes19653);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21465 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21465); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19653;
        nodes19653 = node.contents();
        oldNodes.replaceWith(nodes19653);
      }));
      callback(root21464); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19652;
      nodes19652 = node.contents();
      oldNodes.replaceWith(nodes19652);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp19627 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19532 = mobl.ref(result__);
    
    var nodes19654 = $("<span>");
    root21459.append(nodes19654);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19532, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21466 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19655 = $("<span>");
      root21466.append(nodes19655);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21467 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21467); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19655;
        nodes19655 = node.contents();
        oldNodes.replaceWith(nodes19655);
      }));
      callback(root21466); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19654;
      nodes19654 = node.contents();
      oldNodes.replaceWith(nodes19654);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp19626 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19533 = mobl.ref(result__);
    
    var nodes19656 = $("<span>");
    root21459.append(nodes19656);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19533, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21468 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19657 = $("<span>");
      root21468.append(nodes19657);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21469 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21469); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19657;
        nodes19657 = node.contents();
        oldNodes.replaceWith(nodes19657);
      }));
      callback(root21468); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19656;
      nodes19656 = node.contents();
      oldNodes.replaceWith(nodes19656);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp19625 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19534 = mobl.ref(result__);
    
    var nodes19658 = $("<span>");
    root21459.append(nodes19658);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19534, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21470 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19659 = $("<span>");
      root21470.append(nodes19659);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21471 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21471); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19659;
        nodes19659 = node.contents();
        oldNodes.replaceWith(nodes19659);
      }));
      callback(root21470); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19658;
      nodes19658 = node.contents();
      oldNodes.replaceWith(nodes19658);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp19624 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19535 = mobl.ref(result__);
    
    var nodes19660 = $("<span>");
    root21459.append(nodes19660);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19535, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21472 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19661 = $("<span>");
      root21472.append(nodes19661);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21473 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21473); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19661;
        nodes19661 = node.contents();
        oldNodes.replaceWith(nodes19661);
      }));
      callback(root21472); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19660;
      nodes19660 = node.contents();
      oldNodes.replaceWith(nodes19660);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp19623 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19536 = mobl.ref(result__);
    
    var nodes19662 = $("<span>");
    root21459.append(nodes19662);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19536, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21474 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19663 = $("<span>");
      root21474.append(nodes19663);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21475 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21475); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19663;
        nodes19663 = node.contents();
        oldNodes.replaceWith(nodes19663);
      }));
      callback(root21474); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19662;
      nodes19662 = node.contents();
      oldNodes.replaceWith(nodes19662);
    }));
    callback(root21459); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19647;
    nodes19647 = node.contents();
    oldNodes.replaceWith(nodes19647);
  }));
  callback(root21458); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root21476 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes19664 = $("<span>");
  root21476.append(nodes19664);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root21477 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp19538 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19537 = mobl.ref(result__);
    
    var nodes19665 = $("<span>");
    root21477.append(nodes19665);
    subs__.addSub((ui.backButton)(tmp19537, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19538, function(_, callback) {
      var root21478 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21478); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19665;
      nodes19665 = node.contents();
      oldNodes.replaceWith(nodes19665);
    }));
    callback(root21477); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19664;
    nodes19664 = node.contents();
    oldNodes.replaceWith(nodes19664);
  }));
  var nodes19666 = $("<span>");
  root21476.append(nodes19666);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21479 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp19638 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19539 = mobl.ref(result__);
    
    var nodes19667 = $("<span>");
    root21479.append(nodes19667);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19539, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21480 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19668 = $("<span>");
      root21480.append(nodes19668);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21481 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21481); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19668;
        nodes19668 = node.contents();
        oldNodes.replaceWith(nodes19668);
      }));
      callback(root21480); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19667;
      nodes19667 = node.contents();
      oldNodes.replaceWith(nodes19667);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp19637 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19540 = mobl.ref(result__);
    
    var nodes19669 = $("<span>");
    root21479.append(nodes19669);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19540, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21482 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19670 = $("<span>");
      root21482.append(nodes19670);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21483 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21483); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19670;
        nodes19670 = node.contents();
        oldNodes.replaceWith(nodes19670);
      }));
      callback(root21482); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19669;
      nodes19669 = node.contents();
      oldNodes.replaceWith(nodes19669);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp19636 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19541 = mobl.ref(result__);
    
    var nodes19671 = $("<span>");
    root21479.append(nodes19671);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19541, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21484 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19672 = $("<span>");
      root21484.append(nodes19672);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21485 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21485); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19672;
        nodes19672 = node.contents();
        oldNodes.replaceWith(nodes19672);
      }));
      callback(root21484); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19671;
      nodes19671 = node.contents();
      oldNodes.replaceWith(nodes19671);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp19635 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19542 = mobl.ref(result__);
    
    var nodes19673 = $("<span>");
    root21479.append(nodes19673);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19542, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21486 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19674 = $("<span>");
      root21486.append(nodes19674);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21487 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21487); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19674;
        nodes19674 = node.contents();
        oldNodes.replaceWith(nodes19674);
      }));
      callback(root21486); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19673;
      nodes19673 = node.contents();
      oldNodes.replaceWith(nodes19673);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp19634 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19543 = mobl.ref(result__);
    
    var nodes19675 = $("<span>");
    root21479.append(nodes19675);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19543, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19676 = $("<span>");
      root21488.append(nodes19676);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21489 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21489); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19676;
        nodes19676 = node.contents();
        oldNodes.replaceWith(nodes19676);
      }));
      callback(root21488); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19675;
      nodes19675 = node.contents();
      oldNodes.replaceWith(nodes19675);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp19633 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19544 = mobl.ref(result__);
    
    var nodes19677 = $("<span>");
    root21479.append(nodes19677);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19544, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21490 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19678 = $("<span>");
      root21490.append(nodes19678);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21491 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21491); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19678;
        nodes19678 = node.contents();
        oldNodes.replaceWith(nodes19678);
      }));
      callback(root21490); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19677;
      nodes19677 = node.contents();
      oldNodes.replaceWith(nodes19677);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp19632 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19545 = mobl.ref(result__);
    
    var nodes19679 = $("<span>");
    root21479.append(nodes19679);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19545, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21492 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19680 = $("<span>");
      root21492.append(nodes19680);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21493 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21493); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19680;
        nodes19680 = node.contents();
        oldNodes.replaceWith(nodes19680);
      }));
      callback(root21492); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19679;
      nodes19679 = node.contents();
      oldNodes.replaceWith(nodes19679);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp19631 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19546 = mobl.ref(result__);
    
    var nodes19681 = $("<span>");
    root21479.append(nodes19681);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19546, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21494 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19682 = $("<span>");
      root21494.append(nodes19682);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21495 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21495); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19682;
        nodes19682 = node.contents();
        oldNodes.replaceWith(nodes19682);
      }));
      callback(root21494); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19681;
      nodes19681 = node.contents();
      oldNodes.replaceWith(nodes19681);
    }));
    callback(root21479); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19666;
    nodes19666 = node.contents();
    oldNodes.replaceWith(nodes19666);
  }));
  callback(root21476); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root21496 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes19683 = $("<span>");
  root21496.append(nodes19683);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root21497 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp19548 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19547 = mobl.ref(result__);
    
    var nodes19684 = $("<span>");
    root21497.append(nodes19684);
    subs__.addSub((ui.backButton)(tmp19547, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19548, function(_, callback) {
      var root21498 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21498); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19684;
      nodes19684 = node.contents();
      oldNodes.replaceWith(nodes19684);
    }));
    callback(root21497); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19683;
    nodes19683 = node.contents();
    oldNodes.replaceWith(nodes19683);
  }));
  var nodes19685 = $("<span>");
  root21496.append(nodes19685);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21499 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp19643 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19549 = mobl.ref(result__);
    
    var nodes19686 = $("<span>");
    root21499.append(nodes19686);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19549, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21500 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19687 = $("<span>");
      root21500.append(nodes19687);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21501 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21501); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19687;
        nodes19687 = node.contents();
        oldNodes.replaceWith(nodes19687);
      }));
      callback(root21500); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19686;
      nodes19686 = node.contents();
      oldNodes.replaceWith(nodes19686);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp19642 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19550 = mobl.ref(result__);
    
    var nodes19688 = $("<span>");
    root21499.append(nodes19688);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19550, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21502 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19689 = $("<span>");
      root21502.append(nodes19689);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21503 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21503); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19689;
        nodes19689 = node.contents();
        oldNodes.replaceWith(nodes19689);
      }));
      callback(root21502); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19688;
      nodes19688 = node.contents();
      oldNodes.replaceWith(nodes19688);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp19641 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19551 = mobl.ref(result__);
    
    var nodes19690 = $("<span>");
    root21499.append(nodes19690);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19551, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21504 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19691 = $("<span>");
      root21504.append(nodes19691);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21505 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21505); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19691;
        nodes19691 = node.contents();
        oldNodes.replaceWith(nodes19691);
      }));
      callback(root21504); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19690;
      nodes19690 = node.contents();
      oldNodes.replaceWith(nodes19690);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp19640 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19552 = mobl.ref(result__);
    
    var nodes19692 = $("<span>");
    root21499.append(nodes19692);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19552, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19693 = $("<span>");
      root21506.append(nodes19693);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21507 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21507); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19693;
        nodes19693 = node.contents();
        oldNodes.replaceWith(nodes19693);
      }));
      callback(root21506); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19692;
      nodes19692 = node.contents();
      oldNodes.replaceWith(nodes19692);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp19639 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19553 = mobl.ref(result__);
    
    var nodes19694 = $("<span>");
    root21499.append(nodes19694);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19553, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19695 = $("<span>");
      root21508.append(nodes19695);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21509 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21509); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19695;
        nodes19695 = node.contents();
        oldNodes.replaceWith(nodes19695);
      }));
      callback(root21508); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19694;
      nodes19694 = node.contents();
      oldNodes.replaceWith(nodes19694);
    }));
    callback(root21499); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19685;
    nodes19685 = node.contents();
    oldNodes.replaceWith(nodes19685);
  }));
  callback(root21496); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root21510 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes19696 = $("<span>");
  root21510.append(nodes19696);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root21511 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp19555 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19554 = mobl.ref(result__);
    
    var nodes19697 = $("<span>");
    root21511.append(nodes19697);
    subs__.addSub((ui.backButton)(tmp19554, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19555, function(_, callback) {
      var root21512 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21512); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19697;
      nodes19697 = node.contents();
      oldNodes.replaceWith(nodes19697);
    }));
    callback(root21511); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19696;
    nodes19696 = node.contents();
    oldNodes.replaceWith(nodes19696);
  }));
  var nodes19698 = $("<span>");
  root21510.append(nodes19698);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21513 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp19646 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19556 = mobl.ref(result__);
    
    var nodes19699 = $("<span>");
    root21513.append(nodes19699);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19556, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21514 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19700 = $("<span>");
      root21514.append(nodes19700);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21515 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21515); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19700;
        nodes19700 = node.contents();
        oldNodes.replaceWith(nodes19700);
      }));
      callback(root21514); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19699;
      nodes19699 = node.contents();
      oldNodes.replaceWith(nodes19699);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp19645 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19557 = mobl.ref(result__);
    
    var nodes19701 = $("<span>");
    root21513.append(nodes19701);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19557, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19702 = $("<span>");
      root21516.append(nodes19702);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21517 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21517); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19702;
        nodes19702 = node.contents();
        oldNodes.replaceWith(nodes19702);
      }));
      callback(root21516); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19701;
      nodes19701 = node.contents();
      oldNodes.replaceWith(nodes19701);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp19644 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19558 = mobl.ref(result__);
    
    var nodes19703 = $("<span>");
    root21513.append(nodes19703);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19558, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21518 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19704 = $("<span>");
      root21518.append(nodes19704);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21519 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21519); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19704;
        nodes19704 = node.contents();
        oldNodes.replaceWith(nodes19704);
      }));
      callback(root21518); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19703;
      nodes19703 = node.contents();
      oldNodes.replaceWith(nodes19703);
    }));
    callback(root21513); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19698;
    nodes19698 = node.contents();
    oldNodes.replaceWith(nodes19698);
  }));
  callback(root21510); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root21520 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes19705 = $("<span>");
  root21520.append(nodes19705);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root21521 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp19560 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19559 = mobl.ref(result__);
    
    var nodes19706 = $("<span>");
    root21521.append(nodes19706);
    subs__.addSub((ui.backButton)(tmp19559, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19560, function(_, callback) {
      var root21522 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21522); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19706;
      nodes19706 = node.contents();
      oldNodes.replaceWith(nodes19706);
    }));
    callback(root21521); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19705;
    nodes19705 = node.contents();
    oldNodes.replaceWith(nodes19705);
  }));
  var nodes19707 = $("<span>");
  root21520.append(nodes19707);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21523 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp19650 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19561 = mobl.ref(result__);
    
    var nodes19708 = $("<span>");
    root21523.append(nodes19708);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19561, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21524 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19709 = $("<span>");
      root21524.append(nodes19709);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21525 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21525); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19709;
        nodes19709 = node.contents();
        oldNodes.replaceWith(nodes19709);
      }));
      callback(root21524); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19708;
      nodes19708 = node.contents();
      oldNodes.replaceWith(nodes19708);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp19649 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19562 = mobl.ref(result__);
    
    var nodes19710 = $("<span>");
    root21523.append(nodes19710);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19562, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21526 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19711 = $("<span>");
      root21526.append(nodes19711);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21527 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21527); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19711;
        nodes19711 = node.contents();
        oldNodes.replaceWith(nodes19711);
      }));
      callback(root21526); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19710;
      nodes19710 = node.contents();
      oldNodes.replaceWith(nodes19710);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp19648 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19563 = mobl.ref(result__);
    
    var nodes19712 = $("<span>");
    root21523.append(nodes19712);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19563, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21528 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19713 = $("<span>");
      root21528.append(nodes19713);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21529 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21529); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19713;
        nodes19713 = node.contents();
        oldNodes.replaceWith(nodes19713);
      }));
      callback(root21528); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19712;
      nodes19712 = node.contents();
      oldNodes.replaceWith(nodes19712);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp19647 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19564 = mobl.ref(result__);
    
    var nodes19714 = $("<span>");
    root21523.append(nodes19714);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19564, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19715 = $("<span>");
      root21530.append(nodes19715);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21531 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21531); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19715;
        nodes19715 = node.contents();
        oldNodes.replaceWith(nodes19715);
      }));
      callback(root21530); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19714;
      nodes19714 = node.contents();
      oldNodes.replaceWith(nodes19714);
    }));
    callback(root21523); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19707;
    nodes19707 = node.contents();
    oldNodes.replaceWith(nodes19707);
  }));
  callback(root21520); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root21532 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes19716 = $("<span>");
  root21532.append(nodes19716);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root21533 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp19566 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19565 = mobl.ref(result__);
    
    var nodes19717 = $("<span>");
    root21533.append(nodes19717);
    subs__.addSub((ui.backButton)(tmp19565, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19566, function(_, callback) {
      var root21534 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21534); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19717;
      nodes19717 = node.contents();
      oldNodes.replaceWith(nodes19717);
    }));
    callback(root21533); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19716;
    nodes19716 = node.contents();
    oldNodes.replaceWith(nodes19716);
  }));
  var nodes19718 = $("<span>");
  root21532.append(nodes19718);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21535 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp19652 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19567 = mobl.ref(result__);
    
    var nodes19719 = $("<span>");
    root21535.append(nodes19719);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19567, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21536 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19720 = $("<span>");
      root21536.append(nodes19720);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21537 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21537); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19720;
        nodes19720 = node.contents();
        oldNodes.replaceWith(nodes19720);
      }));
      callback(root21536); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19719;
      nodes19719 = node.contents();
      oldNodes.replaceWith(nodes19719);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp19651 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19568 = mobl.ref(result__);
    
    var nodes19721 = $("<span>");
    root21535.append(nodes19721);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19568, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21538 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19722 = $("<span>");
      root21538.append(nodes19722);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21539 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21539); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19722;
        nodes19722 = node.contents();
        oldNodes.replaceWith(nodes19722);
      }));
      callback(root21538); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19721;
      nodes19721 = node.contents();
      oldNodes.replaceWith(nodes19721);
    }));
    callback(root21535); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19718;
    nodes19718 = node.contents();
    oldNodes.replaceWith(nodes19718);
  }));
  callback(root21532); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root21540 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes19723 = $("<span>");
  root21540.append(nodes19723);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root21541 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp19570 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19569 = mobl.ref(result__);
    
    var nodes19724 = $("<span>");
    root21541.append(nodes19724);
    subs__.addSub((ui.backButton)(tmp19569, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19570, function(_, callback) {
      var root21542 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21542); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19724;
      nodes19724 = node.contents();
      oldNodes.replaceWith(nodes19724);
    }));
    callback(root21541); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19723;
    nodes19723 = node.contents();
    oldNodes.replaceWith(nodes19723);
  }));
  var nodes19725 = $("<span>");
  root21540.append(nodes19725);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21543 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp19657 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19571 = mobl.ref(result__);
    
    var nodes19726 = $("<span>");
    root21543.append(nodes19726);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19571, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21544 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19727 = $("<span>");
      root21544.append(nodes19727);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21545 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21545); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19727;
        nodes19727 = node.contents();
        oldNodes.replaceWith(nodes19727);
      }));
      callback(root21544); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19726;
      nodes19726 = node.contents();
      oldNodes.replaceWith(nodes19726);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp19656 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19572 = mobl.ref(result__);
    
    var nodes19728 = $("<span>");
    root21543.append(nodes19728);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19572, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21546 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19729 = $("<span>");
      root21546.append(nodes19729);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21547 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21547); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19729;
        nodes19729 = node.contents();
        oldNodes.replaceWith(nodes19729);
      }));
      callback(root21546); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19728;
      nodes19728 = node.contents();
      oldNodes.replaceWith(nodes19728);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp19655 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19573 = mobl.ref(result__);
    
    var nodes19730 = $("<span>");
    root21543.append(nodes19730);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19573, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21548 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19731 = $("<span>");
      root21548.append(nodes19731);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21549 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21549); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19731;
        nodes19731 = node.contents();
        oldNodes.replaceWith(nodes19731);
      }));
      callback(root21548); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19730;
      nodes19730 = node.contents();
      oldNodes.replaceWith(nodes19730);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp19654 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19574 = mobl.ref(result__);
    
    var nodes19732 = $("<span>");
    root21543.append(nodes19732);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19574, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21550 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19733 = $("<span>");
      root21550.append(nodes19733);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21551 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21551); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19733;
        nodes19733 = node.contents();
        oldNodes.replaceWith(nodes19733);
      }));
      callback(root21550); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19732;
      nodes19732 = node.contents();
      oldNodes.replaceWith(nodes19732);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp19653 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19575 = mobl.ref(result__);
    
    var nodes19734 = $("<span>");
    root21543.append(nodes19734);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19575, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21552 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19735 = $("<span>");
      root21552.append(nodes19735);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21553 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21553); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19735;
        nodes19735 = node.contents();
        oldNodes.replaceWith(nodes19735);
      }));
      callback(root21552); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19734;
      nodes19734 = node.contents();
      oldNodes.replaceWith(nodes19734);
    }));
    callback(root21543); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19725;
    nodes19725 = node.contents();
    oldNodes.replaceWith(nodes19725);
  }));
  callback(root21540); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root21554 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes19736 = $("<span>");
  root21554.append(nodes19736);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root21555 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp19577 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19576 = mobl.ref(result__);
    
    var nodes19737 = $("<span>");
    root21555.append(nodes19737);
    subs__.addSub((ui.backButton)(tmp19576, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19577, function(_, callback) {
      var root21556 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21556); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19737;
      nodes19737 = node.contents();
      oldNodes.replaceWith(nodes19737);
    }));
    callback(root21555); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19736;
    nodes19736 = node.contents();
    oldNodes.replaceWith(nodes19736);
  }));
  var nodes19738 = $("<span>");
  root21554.append(nodes19738);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21557 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp19660 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19578 = mobl.ref(result__);
    
    var nodes19739 = $("<span>");
    root21557.append(nodes19739);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19578, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21558 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19740 = $("<span>");
      root21558.append(nodes19740);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21559 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21559); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19740;
        nodes19740 = node.contents();
        oldNodes.replaceWith(nodes19740);
      }));
      callback(root21558); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19739;
      nodes19739 = node.contents();
      oldNodes.replaceWith(nodes19739);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp19659 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19579 = mobl.ref(result__);
    
    var nodes19741 = $("<span>");
    root21557.append(nodes19741);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19579, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21560 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19742 = $("<span>");
      root21560.append(nodes19742);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21561 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21561); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19742;
        nodes19742 = node.contents();
        oldNodes.replaceWith(nodes19742);
      }));
      callback(root21560); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19741;
      nodes19741 = node.contents();
      oldNodes.replaceWith(nodes19741);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp19658 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19580 = mobl.ref(result__);
    
    var nodes19743 = $("<span>");
    root21557.append(nodes19743);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19580, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19744 = $("<span>");
      root21562.append(nodes19744);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21563 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21563); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19744;
        nodes19744 = node.contents();
        oldNodes.replaceWith(nodes19744);
      }));
      callback(root21562); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19743;
      nodes19743 = node.contents();
      oldNodes.replaceWith(nodes19743);
    }));
    callback(root21557); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19738;
    nodes19738 = node.contents();
    oldNodes.replaceWith(nodes19738);
  }));
  callback(root21554); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root21564 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes19745 = $("<span>");
  root21564.append(nodes19745);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root21565 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp19582 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19581 = mobl.ref(result__);
    
    var nodes19746 = $("<span>");
    root21565.append(nodes19746);
    subs__.addSub((ui.backButton)(tmp19581, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp19582, function(_, callback) {
      var root21566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21566); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19746;
      nodes19746 = node.contents();
      oldNodes.replaceWith(nodes19746);
    }));
    callback(root21565); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19745;
    nodes19745 = node.contents();
    oldNodes.replaceWith(nodes19745);
  }));
  var nodes19747 = $("<span>");
  root21564.append(nodes19747);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21567 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp19661 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19583 = mobl.ref(result__);
    
    var nodes19748 = $("<span>");
    root21567.append(nodes19748);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19583, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21568 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19749 = $("<span>");
      root21568.append(nodes19749);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21569 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21569); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19749;
        nodes19749 = node.contents();
        oldNodes.replaceWith(nodes19749);
      }));
      callback(root21568); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19748;
      nodes19748 = node.contents();
      oldNodes.replaceWith(nodes19748);
    }));
    callback(root21567); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19747;
    nodes19747 = node.contents();
    oldNodes.replaceWith(nodes19747);
  }));
  callback(root21564); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root21570 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19750 = $("<span>");
  root21570.append(nodes19750);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21571 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp19674 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19584 = mobl.ref(result__);
    
    var nodes19751 = $("<span>");
    root21571.append(nodes19751);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19584, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19752 = $("<span>");
      root21572.append(nodes19752);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21573 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21573); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19752;
        nodes19752 = node.contents();
        oldNodes.replaceWith(nodes19752);
      }));
      callback(root21572); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19751;
      nodes19751 = node.contents();
      oldNodes.replaceWith(nodes19751);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp19673 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19585 = mobl.ref(result__);
    
    var nodes19753 = $("<span>");
    root21571.append(nodes19753);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19585, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19754 = $("<span>");
      root21574.append(nodes19754);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21575 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21575); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19754;
        nodes19754 = node.contents();
        oldNodes.replaceWith(nodes19754);
      }));
      callback(root21574); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19753;
      nodes19753 = node.contents();
      oldNodes.replaceWith(nodes19753);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp19672 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19586 = mobl.ref(result__);
    
    var nodes19755 = $("<span>");
    root21571.append(nodes19755);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19586, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21576 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19756 = $("<span>");
      root21576.append(nodes19756);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21577 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21577); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19756;
        nodes19756 = node.contents();
        oldNodes.replaceWith(nodes19756);
      }));
      callback(root21576); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19755;
      nodes19755 = node.contents();
      oldNodes.replaceWith(nodes19755);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp19671 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19587 = mobl.ref(result__);
    
    var nodes19757 = $("<span>");
    root21571.append(nodes19757);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19587, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21578 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19758 = $("<span>");
      root21578.append(nodes19758);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21579 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21579); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19758;
        nodes19758 = node.contents();
        oldNodes.replaceWith(nodes19758);
      }));
      callback(root21578); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19757;
      nodes19757 = node.contents();
      oldNodes.replaceWith(nodes19757);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp19670 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19588 = mobl.ref(result__);
    
    var nodes19759 = $("<span>");
    root21571.append(nodes19759);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19588, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19760 = $("<span>");
      root21580.append(nodes19760);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21581 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21581); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19760;
        nodes19760 = node.contents();
        oldNodes.replaceWith(nodes19760);
      }));
      callback(root21580); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19759;
      nodes19759 = node.contents();
      oldNodes.replaceWith(nodes19759);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp19669 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19589 = mobl.ref(result__);
    
    var nodes19761 = $("<span>");
    root21571.append(nodes19761);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19589, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19762 = $("<span>");
      root21582.append(nodes19762);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21583 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21583); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19762;
        nodes19762 = node.contents();
        oldNodes.replaceWith(nodes19762);
      }));
      callback(root21582); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19761;
      nodes19761 = node.contents();
      oldNodes.replaceWith(nodes19761);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp19668 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19590 = mobl.ref(result__);
    
    var nodes19763 = $("<span>");
    root21571.append(nodes19763);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19590, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19764 = $("<span>");
      root21584.append(nodes19764);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19764;
        nodes19764 = node.contents();
        oldNodes.replaceWith(nodes19764);
      }));
      callback(root21584); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19763;
      nodes19763 = node.contents();
      oldNodes.replaceWith(nodes19763);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp19667 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19591 = mobl.ref(result__);
    
    var nodes19765 = $("<span>");
    root21571.append(nodes19765);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19591, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19766 = $("<span>");
      root21586.append(nodes19766);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21587 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21587); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19766;
        nodes19766 = node.contents();
        oldNodes.replaceWith(nodes19766);
      }));
      callback(root21586); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19765;
      nodes19765 = node.contents();
      oldNodes.replaceWith(nodes19765);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp19666 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19592 = mobl.ref(result__);
    
    var nodes19767 = $("<span>");
    root21571.append(nodes19767);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19592, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21588 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19768 = $("<span>");
      root21588.append(nodes19768);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21589 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21589); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19768;
        nodes19768 = node.contents();
        oldNodes.replaceWith(nodes19768);
      }));
      callback(root21588); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19767;
      nodes19767 = node.contents();
      oldNodes.replaceWith(nodes19767);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp19665 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19593 = mobl.ref(result__);
    
    var nodes19769 = $("<span>");
    root21571.append(nodes19769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19593, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19770 = $("<span>");
      root21590.append(nodes19770);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21591 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21591); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19770;
        nodes19770 = node.contents();
        oldNodes.replaceWith(nodes19770);
      }));
      callback(root21590); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19769;
      nodes19769 = node.contents();
      oldNodes.replaceWith(nodes19769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp19664 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19594 = mobl.ref(result__);
    
    var nodes19771 = $("<span>");
    root21571.append(nodes19771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19594, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21592 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19772 = $("<span>");
      root21592.append(nodes19772);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21593 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21593); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19772;
        nodes19772 = node.contents();
        oldNodes.replaceWith(nodes19772);
      }));
      callback(root21592); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19771;
      nodes19771 = node.contents();
      oldNodes.replaceWith(nodes19771);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp19663 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19595 = mobl.ref(result__);
    
    var nodes19773 = $("<span>");
    root21571.append(nodes19773);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19595, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21594 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19774 = $("<span>");
      root21594.append(nodes19774);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21595 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21595); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19774;
        nodes19774 = node.contents();
        oldNodes.replaceWith(nodes19774);
      }));
      callback(root21594); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19773;
      nodes19773 = node.contents();
      oldNodes.replaceWith(nodes19773);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp19662 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19596 = mobl.ref(result__);
    
    var nodes19775 = $("<span>");
    root21571.append(nodes19775);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19596, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21596 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19776 = $("<span>");
      root21596.append(nodes19776);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21597 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21597); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19776;
        nodes19776 = node.contents();
        oldNodes.replaceWith(nodes19776);
      }));
      callback(root21596); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19775;
      nodes19775 = node.contents();
      oldNodes.replaceWith(nodes19775);
    }));
    callback(root21571); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19750;
    nodes19750 = node.contents();
    oldNodes.replaceWith(nodes19750);
  }));
  callback(root21570); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root21598 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes19777 = $("<span>");
  root21598.append(nodes19777);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21599 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp19680 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19597 = mobl.ref(result__);
    
    var nodes19778 = $("<span>");
    root21599.append(nodes19778);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19597, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21600 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19779 = $("<span>");
      root21600.append(nodes19779);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21601 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21601); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19779;
        nodes19779 = node.contents();
        oldNodes.replaceWith(nodes19779);
      }));
      callback(root21600); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19778;
      nodes19778 = node.contents();
      oldNodes.replaceWith(nodes19778);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp19679 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19598 = mobl.ref(result__);
    
    var nodes19780 = $("<span>");
    root21599.append(nodes19780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19598, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21602 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19781 = $("<span>");
      root21602.append(nodes19781);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21603 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21603); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19781;
        nodes19781 = node.contents();
        oldNodes.replaceWith(nodes19781);
      }));
      callback(root21602); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19780;
      nodes19780 = node.contents();
      oldNodes.replaceWith(nodes19780);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp19678 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19599 = mobl.ref(result__);
    
    var nodes19782 = $("<span>");
    root21599.append(nodes19782);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19599, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19783 = $("<span>");
      root21604.append(nodes19783);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21605 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21605); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19783;
        nodes19783 = node.contents();
        oldNodes.replaceWith(nodes19783);
      }));
      callback(root21604); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19782;
      nodes19782 = node.contents();
      oldNodes.replaceWith(nodes19782);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp19677 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19600 = mobl.ref(result__);
    
    var nodes19784 = $("<span>");
    root21599.append(nodes19784);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19600, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19785 = $("<span>");
      root21606.append(nodes19785);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21607 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21607); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19785;
        nodes19785 = node.contents();
        oldNodes.replaceWith(nodes19785);
      }));
      callback(root21606); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19784;
      nodes19784 = node.contents();
      oldNodes.replaceWith(nodes19784);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp19676 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19601 = mobl.ref(result__);
    
    var nodes19786 = $("<span>");
    root21599.append(nodes19786);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19601, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19787 = $("<span>");
      root21608.append(nodes19787);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19787;
        nodes19787 = node.contents();
        oldNodes.replaceWith(nodes19787);
      }));
      callback(root21608); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19786;
      nodes19786 = node.contents();
      oldNodes.replaceWith(nodes19786);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp19675 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19602 = mobl.ref(result__);
    
    var nodes19788 = $("<span>");
    root21599.append(nodes19788);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19602, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19789 = $("<span>");
      root21610.append(nodes19789);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21611 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21611); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19789;
        nodes19789 = node.contents();
        oldNodes.replaceWith(nodes19789);
      }));
      callback(root21610); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19788;
      nodes19788 = node.contents();
      oldNodes.replaceWith(nodes19788);
    }));
    callback(root21599); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19777;
    nodes19777 = node.contents();
    oldNodes.replaceWith(nodes19777);
  }));
  callback(root21598); return subs__;
  
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
  var root21612 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1405 = $("<div>");
  
  var ref969 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref969.get() !== null) {
    node1405.attr('class', ref969.get());
    subs__.addSub(ref969.addEventListener('change', function(_, ref, val) {
      node1405.attr('class', val);
    }));
    
  }
  subs__.addSub(ref969.rebind());
  
  var val308 = onclick.get();
  if(val308 !== null) {
    subs__.addSub(mobl.domBind(node1405, 'tap', val308));
  }
  
  
  var node1406 = $("<div>");
  
  var ref968 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref968.get() !== null) {
    node1406.attr('class', ref968.get());
    subs__.addSub(ref968.addEventListener('change', function(_, ref, val) {
      node1406.attr('class', val);
    }));
    
  }
  subs__.addSub(ref968.rebind());
  
  
  var node1407 = $("<div>");
  
  var ref966 = text;
  node1407.text(""+ref966.get());
  var ignore197 = false;
  subs__.addSub(ref966.addEventListener('change', function(_, ref, val) {
    if(ignore197) return;
    node1407.text(""+val);
  }));
  subs__.addSub(ref966.rebind());
  
  
  var ref967 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref967.get() !== null) {
    node1407.attr('class', ref967.get());
    subs__.addSub(ref967.addEventListener('change', function(_, ref, val) {
      node1407.attr('class', val);
    }));
    
  }
  subs__.addSub(ref967.rebind());
  
  node1406.append(node1407);
  node1405.append(node1406);
  var nodes19790 = $("<span>");
  node1405.append(nodes19790);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl248();
  }));
  
  function renderControl248() {
    subs__.addSub((elements)(function(elements, callback) {
      var root21613 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21613); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19790;
      nodes19790 = node.contents();
      oldNodes.replaceWith(nodes19790);
    }));
  }
  renderControl248();
  root21612.append(node1405);
  callback(root21612); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp19681 = result__;
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
  var root21614 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp19605 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp19605.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp19605.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp19605.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes19791 = $("<span>");
  root21614.append(nodes19791);
  subs__.addSub((mobl.block)(tmp19605, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root21615 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp19603 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp19603.set("A" + number.get() + ". ");
    }));
    
    var nodes19792 = $("<span>");
    root21615.append(nodes19792);
    subs__.addSub((mobl.label)(tmp19603, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root21616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21616); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19792;
      nodes19792 = node.contents();
      oldNodes.replaceWith(nodes19792);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp19604 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp19604.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1408 = $("<span>");
    root21615.append(node1408);
    var condSubs471 = new mobl.CompSubscription();
    subs__.addSub(condSubs471);
    var oldValue471;
    var renderCond471 = function() {
      var value715 = tmp19604.get();
      if(oldValue471 === value715) return;
      oldValue471 = value715;
      var subs__ = condSubs471;
      subs__.unsubscribe();
      node1408.empty();
      if(value715) {
        
        var node1409 = $("<span>");
        
        var ref970 = mobl.ref("answer-block-" + number.get());
        if(ref970.get() !== null) {
          node1409.attr('id', ref970.get());
          subs__.addSub(ref970.addEventListener('change', function(_, ref, val) {
            node1409.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1409.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref970.rebind());
        
        var nodes19793 = $("<span>");
        node1409.append(nodes19793);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root21617 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root21617); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19793;
          nodes19793 = node.contents();
          oldNodes.replaceWith(nodes19793);
        }));
        node1408.append(node1409);
        
        
        
      } else {
        var nodes19794 = $("<span>");
        node1408.append(nodes19794);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root21618 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root21618); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19794;
          nodes19794 = node.contents();
          oldNodes.replaceWith(nodes19794);
        }));
        
        
      }
    };
    renderCond471();
    subs__.addSub(tmp19604.addEventListener('change', function() {
      renderCond471();
    }));
    
    callback(root21615); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19791;
    nodes19791 = node.contents();
    oldNodes.replaceWith(nodes19791);
  }));
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
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
  var tmp19609 = mobl.ref(result__);
  
  var nodes19795 = $("<span>");
  root21614.append(nodes19795);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), tmp19609, mobl.ref(null), function(_, callback) {
    var root21619 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1410 = $("<span>");
    node1410.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp19683 = result__;
      var tmp19606 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp19682 = result__;
          var result__ = tmp19682;
          tmp19606.set(result__);
          
        });
      }));
      
      var nodes19799 = $("<span>");
      node1410.append(nodes19799);
      subs__.addSub((mobl.html)(tmp19606, function(_, callback) {
        var root21623 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21623); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19799;
        nodes19799 = node.contents();
        oldNodes.replaceWith(nodes19799);
      }));
      root21619.append(node1410);
      var nodes19796 = $("<span>");
      root21619.append(nodes19796);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21620 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21620); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19796;
        nodes19796 = node.contents();
        oldNodes.replaceWith(nodes19796);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp19607 = mobl.ref(result__);
      
      var nodes19797 = $("<span>");
      root21619.append(nodes19797);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp19607, function(_, callback) {
        var root21621 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21621); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19797;
        nodes19797 = node.contents();
        oldNodes.replaceWith(nodes19797);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp19608 = mobl.ref(result__);
      
      var nodes19798 = $("<span>");
      root21619.append(nodes19798);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp19608, function(_, callback) {
        var root21622 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21622); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19798;
        nodes19798 = node.contents();
        oldNodes.replaceWith(nodes19798);
      }));
      callback(root21619); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19795;
    nodes19795 = node.contents();
    oldNodes.replaceWith(nodes19795);
  }));
  callback(root21614); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp19684 = result__;
    var result__ = tmp19684;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp19685 = result__;
        var result__ = tmp19685;
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
  var root21624 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp19693 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp19611 = mobl.ref(result__);
  
  var nodes19800 = $("<span>");
  root21624.append(nodes19800);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp19611, function(_, callback) {
    var root21625 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp19686 = result__;
                       var result__ = tmp19686;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp19687 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp19610 = mobl.ref(result__);
    
    var nodes19801 = $("<span>");
    root21625.append(nodes19801);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp19610, function(_, callback) {
      var root21626 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21626); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes19801;
      nodes19801 = node.contents();
      oldNodes.replaceWith(nodes19801);
    }));
    callback(root21625); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19800;
    nodes19800 = node.contents();
    oldNodes.replaceWith(nodes19800);
  }));
  var nodes19802 = $("<span>");
  root21624.append(nodes19802);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21627 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp19692 = result__;
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19614 = mobl.ref(result__);
    
    var nodes19803 = $("<span>");
    root21627.append(nodes19803);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp19614, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root21628 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp19612 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp19612.set("Q" + number.get() + ". ");
      }));
      
      var nodes19804 = $("<span>");
      root21628.append(nodes19804);
      subs__.addSub((mobl.html)(tmp19612, function(_, callback) {
        var root21629 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21629); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19804;
        nodes19804 = node.contents();
        oldNodes.replaceWith(nodes19804);
      }));
      
      var node1411 = $("<span>");
      
      var ref971 = mobl.ref("question-block-" + number.get());
      if(ref971.get() !== null) {
        node1411.attr('id', ref971.get());
        subs__.addSub(ref971.addEventListener('change', function(_, ref, val) {
          node1411.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1411.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref971.rebind());
      
      var nodes19806 = $("<span>");
      node1411.append(nodes19806);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root21631 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21631); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes19806;
        nodes19806 = node.contents();
        oldNodes.replaceWith(nodes19806);
      }));
      root21628.append(node1411);
      
      var node1412 = $("<span>");
      node1412.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp19689 = result__;
        var tmp19613 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp19688 = result__;
            var result__ = tmp19688;
            tmp19613.set(result__);
            
          });
        }));
        
        var nodes19805 = $("<span>");
        node1412.append(nodes19805);
        subs__.addSub((mobl.html)(tmp19613, function(_, callback) {
          var root21630 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root21630); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19805;
          nodes19805 = node.contents();
          oldNodes.replaceWith(nodes19805);
        }));
        root21628.append(node1412);
        callback(root21628); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19803;
      nodes19803 = node.contents();
      oldNodes.replaceWith(nodes19803);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp19691 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp19616 = mobl.ref(result__);
    
    var nodes19807 = $("<span>");
    root21627.append(nodes19807);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp19616, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root21632 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes19808 = $("<span>");
      root21632.append(nodes19808);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21633 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp19690 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp19615 = mobl.ref(result__);
        
        var nodes19809 = $("<span>");
        root21633.append(nodes19809);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp19615, function(_, callback) {
          var root21634 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root21634); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes19809;
          nodes19809 = node.contents();
          oldNodes.replaceWith(nodes19809);
        }));
        callback(root21633); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes19808;
        nodes19808 = node.contents();
        oldNodes.replaceWith(nodes19808);
      }));
      
      var node1413 = $("<span>");
      root21632.append(node1413);
      var condSubs472 = new mobl.CompSubscription();
      subs__.addSub(condSubs472);
      var oldValue472;
      var renderCond472 = function() {
        var value716 = qa.get().done;
        if(oldValue472 === value716) return;
        oldValue472 = value716;
        var subs__ = condSubs472;
        subs__.unsubscribe();
        node1413.empty();
        if(value716) {
          var nodes19810 = $("<span>");
          node1413.append(nodes19810);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root21635 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root21635); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes19810;
            nodes19810 = node.contents();
            oldNodes.replaceWith(nodes19810);
          }));
          
          
        } else {
          
        }
      };
      renderCond472();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond472();
      }));
      
      callback(root21632); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19807;
      nodes19807 = node.contents();
      oldNodes.replaceWith(nodes19807);
    }));
    callback(root21627); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19802;
    nodes19802 = node.contents();
    oldNodes.replaceWith(nodes19802);
  }));
  callback(root21624); return subs__;
  
  
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
  qas.list(function(coll1071) {
    coll1071 = coll1071.reverse();
    function processOne705() {
      var item;
      item = coll1071.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1071.length > 0) processOne705(); else rest705();
      
    }
    function rest705() {
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
    if(coll1071.length > 0) processOne705(); else rest705();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1072) {
    coll1072 = coll1072.reverse();
    function processOne706() {
      var item;
      item = coll1072.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1072.length > 0) processOne706(); else rest706();
      
    }
    function rest706() {
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
    if(coll1072.length > 0) processOne706(); else rest706();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1073) {
    coll1073 = coll1073.reverse();
    function processOne707() {
      var item;
      item = coll1073.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1073.length > 0) processOne707(); else rest707();
      
    }
    function rest707() {
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
    if(coll1073.length > 0) processOne707(); else rest707();
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