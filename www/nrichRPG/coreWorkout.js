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
    var tmp3551 = result__;
    var result__ = tmp3551;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp3552 = result__;
      var result__ = tmp3552;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp3553 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll2525) {
    coll2525 = coll2525.reverse();
    function processOne155() {
      var i;
      i = coll2525.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp3554 = result__;
        
        if(coll2525.length > 0) processOne155(); else rest155();
        
      });
    }
    function rest155() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll2525.length > 0) processOne155(); else rest155();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll2526) {
    coll2526 = coll2526.reverse();
    function processOne156() {
      var i;
      i = coll2526.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp3555 = result__;
          
          if(coll2526.length > 0) processOne156(); else rest156();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp3555 = result__;
            
            if(coll2526.length > 0) processOne156(); else rest156();
            
          });
        }
      }
    }
    function rest156() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll2526.length > 0) processOne156(); else rest156();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll2527) {
    coll2527 = coll2527.reverse();
    function processOne157() {
      var i;
      i = coll2527.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp3556 = result__;
        
        if(coll2527.length > 0) processOne157(); else rest157();
        
      });
    }
    function rest157() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll2527.length > 0) processOne157(); else rest157();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root4750 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3715 = $("<span>");
  root4750.append(nodes3715);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4751 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3564 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3457 = mobl.ref(result__);
    
    var nodes3716 = $("<span>");
    root4751.append(nodes3716);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3457, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4752 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3717 = $("<span>");
      root4752.append(nodes3717);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4753 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4753); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3717;
        nodes3717 = node.contents();
        oldNodes.replaceWith(nodes3717);
      }));
      callback(root4752); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3716;
      nodes3716 = node.contents();
      oldNodes.replaceWith(nodes3716);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3563 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3458 = mobl.ref(result__);
    
    var nodes3718 = $("<span>");
    root4751.append(nodes3718);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3458, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4754 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3719 = $("<span>");
      root4754.append(nodes3719);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4755 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4755); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3719;
        nodes3719 = node.contents();
        oldNodes.replaceWith(nodes3719);
      }));
      callback(root4754); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3718;
      nodes3718 = node.contents();
      oldNodes.replaceWith(nodes3718);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3562 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3459 = mobl.ref(result__);
    
    var nodes3720 = $("<span>");
    root4751.append(nodes3720);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3459, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4756 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3721 = $("<span>");
      root4756.append(nodes3721);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4757 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4757); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3721;
        nodes3721 = node.contents();
        oldNodes.replaceWith(nodes3721);
      }));
      callback(root4756); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3720;
      nodes3720 = node.contents();
      oldNodes.replaceWith(nodes3720);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3561 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3460 = mobl.ref(result__);
    
    var nodes3722 = $("<span>");
    root4751.append(nodes3722);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3460, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4758 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3723 = $("<span>");
      root4758.append(nodes3723);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4759 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4759); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3723;
        nodes3723 = node.contents();
        oldNodes.replaceWith(nodes3723);
      }));
      callback(root4758); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3722;
      nodes3722 = node.contents();
      oldNodes.replaceWith(nodes3722);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3560 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3461 = mobl.ref(result__);
    
    var nodes3724 = $("<span>");
    root4751.append(nodes3724);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3461, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4760 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3725 = $("<span>");
      root4760.append(nodes3725);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4761 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4761); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3725;
        nodes3725 = node.contents();
        oldNodes.replaceWith(nodes3725);
      }));
      callback(root4760); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3724;
      nodes3724 = node.contents();
      oldNodes.replaceWith(nodes3724);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3559 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3462 = mobl.ref(result__);
    
    var nodes3726 = $("<span>");
    root4751.append(nodes3726);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3462, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4762 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3727 = $("<span>");
      root4762.append(nodes3727);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4763 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4763); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3727;
        nodes3727 = node.contents();
        oldNodes.replaceWith(nodes3727);
      }));
      callback(root4762); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3726;
      nodes3726 = node.contents();
      oldNodes.replaceWith(nodes3726);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3558 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3463 = mobl.ref(result__);
    
    var nodes3728 = $("<span>");
    root4751.append(nodes3728);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3463, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4764 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3729 = $("<span>");
      root4764.append(nodes3729);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4765 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4765); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3729;
        nodes3729 = node.contents();
        oldNodes.replaceWith(nodes3729);
      }));
      callback(root4764); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3728;
      nodes3728 = node.contents();
      oldNodes.replaceWith(nodes3728);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3557 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3464 = mobl.ref(result__);
    
    var nodes3730 = $("<span>");
    root4751.append(nodes3730);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3464, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4766 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3731 = $("<span>");
      root4766.append(nodes3731);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4767 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4767); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3731;
        nodes3731 = node.contents();
        oldNodes.replaceWith(nodes3731);
      }));
      callback(root4766); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3730;
      nodes3730 = node.contents();
      oldNodes.replaceWith(nodes3730);
    }));
    callback(root4751); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3715;
    nodes3715 = node.contents();
    oldNodes.replaceWith(nodes3715);
  }));
  callback(root4750); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root4768 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes3732 = $("<span>");
  root4768.append(nodes3732);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4769 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3466 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3465 = mobl.ref(result__);
    
    var nodes3733 = $("<span>");
    root4769.append(nodes3733);
    subs__.addSub((ui.backButton)(tmp3465, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3466, function(_, callback) {
      var root4770 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4770); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3733;
      nodes3733 = node.contents();
      oldNodes.replaceWith(nodes3733);
    }));
    callback(root4769); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3732;
    nodes3732 = node.contents();
    oldNodes.replaceWith(nodes3732);
  }));
  var nodes3734 = $("<span>");
  root4768.append(nodes3734);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4771 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp3572 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3467 = mobl.ref(result__);
    
    var nodes3735 = $("<span>");
    root4771.append(nodes3735);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3467, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4772 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3736 = $("<span>");
      root4772.append(nodes3736);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4773 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4773); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3736;
        nodes3736 = node.contents();
        oldNodes.replaceWith(nodes3736);
      }));
      callback(root4772); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3735;
      nodes3735 = node.contents();
      oldNodes.replaceWith(nodes3735);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp3571 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3468 = mobl.ref(result__);
    
    var nodes3737 = $("<span>");
    root4771.append(nodes3737);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3468, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4774 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3738 = $("<span>");
      root4774.append(nodes3738);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4775 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4775); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3738;
        nodes3738 = node.contents();
        oldNodes.replaceWith(nodes3738);
      }));
      callback(root4774); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3737;
      nodes3737 = node.contents();
      oldNodes.replaceWith(nodes3737);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp3570 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3469 = mobl.ref(result__);
    
    var nodes3739 = $("<span>");
    root4771.append(nodes3739);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3469, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4776 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3740 = $("<span>");
      root4776.append(nodes3740);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4777 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4777); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3740;
        nodes3740 = node.contents();
        oldNodes.replaceWith(nodes3740);
      }));
      callback(root4776); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3739;
      nodes3739 = node.contents();
      oldNodes.replaceWith(nodes3739);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp3569 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3470 = mobl.ref(result__);
    
    var nodes3741 = $("<span>");
    root4771.append(nodes3741);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3470, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4778 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3742 = $("<span>");
      root4778.append(nodes3742);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4779 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4779); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3742;
        nodes3742 = node.contents();
        oldNodes.replaceWith(nodes3742);
      }));
      callback(root4778); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3741;
      nodes3741 = node.contents();
      oldNodes.replaceWith(nodes3741);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp3568 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3471 = mobl.ref(result__);
    
    var nodes3743 = $("<span>");
    root4771.append(nodes3743);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3471, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4780 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3744 = $("<span>");
      root4780.append(nodes3744);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4781 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4781); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3744;
        nodes3744 = node.contents();
        oldNodes.replaceWith(nodes3744);
      }));
      callback(root4780); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3743;
      nodes3743 = node.contents();
      oldNodes.replaceWith(nodes3743);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp3567 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3472 = mobl.ref(result__);
    
    var nodes3745 = $("<span>");
    root4771.append(nodes3745);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3472, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4782 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3746 = $("<span>");
      root4782.append(nodes3746);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4783 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4783); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3746;
        nodes3746 = node.contents();
        oldNodes.replaceWith(nodes3746);
      }));
      callback(root4782); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3745;
      nodes3745 = node.contents();
      oldNodes.replaceWith(nodes3745);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp3566 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3473 = mobl.ref(result__);
    
    var nodes3747 = $("<span>");
    root4771.append(nodes3747);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3473, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4784 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3748 = $("<span>");
      root4784.append(nodes3748);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4785 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4785); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3748;
        nodes3748 = node.contents();
        oldNodes.replaceWith(nodes3748);
      }));
      callback(root4784); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3747;
      nodes3747 = node.contents();
      oldNodes.replaceWith(nodes3747);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp3565 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3474 = mobl.ref(result__);
    
    var nodes3749 = $("<span>");
    root4771.append(nodes3749);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3474, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4786 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3750 = $("<span>");
      root4786.append(nodes3750);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4787 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4787); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3750;
        nodes3750 = node.contents();
        oldNodes.replaceWith(nodes3750);
      }));
      callback(root4786); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3749;
      nodes3749 = node.contents();
      oldNodes.replaceWith(nodes3749);
    }));
    callback(root4771); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3734;
    nodes3734 = node.contents();
    oldNodes.replaceWith(nodes3734);
  }));
  callback(root4768); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root4788 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3751 = $("<span>");
  root4788.append(nodes3751);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4789 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3476 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3475 = mobl.ref(result__);
    
    var nodes3752 = $("<span>");
    root4789.append(nodes3752);
    subs__.addSub((ui.backButton)(tmp3475, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3476, function(_, callback) {
      var root4790 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4790); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3752;
      nodes3752 = node.contents();
      oldNodes.replaceWith(nodes3752);
    }));
    callback(root4789); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3751;
    nodes3751 = node.contents();
    oldNodes.replaceWith(nodes3751);
  }));
  var nodes3753 = $("<span>");
  root4788.append(nodes3753);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4791 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp3577 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3477 = mobl.ref(result__);
    
    var nodes3754 = $("<span>");
    root4791.append(nodes3754);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3477, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4792 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3755 = $("<span>");
      root4792.append(nodes3755);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4793 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4793); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3755;
        nodes3755 = node.contents();
        oldNodes.replaceWith(nodes3755);
      }));
      callback(root4792); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3754;
      nodes3754 = node.contents();
      oldNodes.replaceWith(nodes3754);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp3576 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3478 = mobl.ref(result__);
    
    var nodes3756 = $("<span>");
    root4791.append(nodes3756);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3478, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4794 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3757 = $("<span>");
      root4794.append(nodes3757);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4795 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4795); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3757;
        nodes3757 = node.contents();
        oldNodes.replaceWith(nodes3757);
      }));
      callback(root4794); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3756;
      nodes3756 = node.contents();
      oldNodes.replaceWith(nodes3756);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp3575 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3479 = mobl.ref(result__);
    
    var nodes3758 = $("<span>");
    root4791.append(nodes3758);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3479, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4796 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3759 = $("<span>");
      root4796.append(nodes3759);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4797 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4797); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3759;
        nodes3759 = node.contents();
        oldNodes.replaceWith(nodes3759);
      }));
      callback(root4796); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3758;
      nodes3758 = node.contents();
      oldNodes.replaceWith(nodes3758);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp3574 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3480 = mobl.ref(result__);
    
    var nodes3760 = $("<span>");
    root4791.append(nodes3760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3480, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4798 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3761 = $("<span>");
      root4798.append(nodes3761);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4799 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4799); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3761;
        nodes3761 = node.contents();
        oldNodes.replaceWith(nodes3761);
      }));
      callback(root4798); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3760;
      nodes3760 = node.contents();
      oldNodes.replaceWith(nodes3760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp3573 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3481 = mobl.ref(result__);
    
    var nodes3762 = $("<span>");
    root4791.append(nodes3762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3481, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4800 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3763 = $("<span>");
      root4800.append(nodes3763);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4801 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4801); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3763;
        nodes3763 = node.contents();
        oldNodes.replaceWith(nodes3763);
      }));
      callback(root4800); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3762;
      nodes3762 = node.contents();
      oldNodes.replaceWith(nodes3762);
    }));
    callback(root4791); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3753;
    nodes3753 = node.contents();
    oldNodes.replaceWith(nodes3753);
  }));
  callback(root4788); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root4802 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3764 = $("<span>");
  root4802.append(nodes3764);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4803 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3483 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3482 = mobl.ref(result__);
    
    var nodes3765 = $("<span>");
    root4803.append(nodes3765);
    subs__.addSub((ui.backButton)(tmp3482, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3483, function(_, callback) {
      var root4804 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4804); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3765;
      nodes3765 = node.contents();
      oldNodes.replaceWith(nodes3765);
    }));
    callback(root4803); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3764;
    nodes3764 = node.contents();
    oldNodes.replaceWith(nodes3764);
  }));
  var nodes3766 = $("<span>");
  root4802.append(nodes3766);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4805 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp3580 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3484 = mobl.ref(result__);
    
    var nodes3767 = $("<span>");
    root4805.append(nodes3767);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3484, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4806 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3768 = $("<span>");
      root4806.append(nodes3768);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4807 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4807); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3768;
        nodes3768 = node.contents();
        oldNodes.replaceWith(nodes3768);
      }));
      callback(root4806); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3767;
      nodes3767 = node.contents();
      oldNodes.replaceWith(nodes3767);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp3579 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3485 = mobl.ref(result__);
    
    var nodes3769 = $("<span>");
    root4805.append(nodes3769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3485, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4808 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3770 = $("<span>");
      root4808.append(nodes3770);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4809 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4809); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3770;
        nodes3770 = node.contents();
        oldNodes.replaceWith(nodes3770);
      }));
      callback(root4808); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3769;
      nodes3769 = node.contents();
      oldNodes.replaceWith(nodes3769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp3578 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3486 = mobl.ref(result__);
    
    var nodes3771 = $("<span>");
    root4805.append(nodes3771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3486, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4810 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3772 = $("<span>");
      root4810.append(nodes3772);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4811 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4811); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3772;
        nodes3772 = node.contents();
        oldNodes.replaceWith(nodes3772);
      }));
      callback(root4810); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3771;
      nodes3771 = node.contents();
      oldNodes.replaceWith(nodes3771);
    }));
    callback(root4805); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3766;
    nodes3766 = node.contents();
    oldNodes.replaceWith(nodes3766);
  }));
  callback(root4802); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root4812 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3773 = $("<span>");
  root4812.append(nodes3773);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4813 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3488 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3487 = mobl.ref(result__);
    
    var nodes3774 = $("<span>");
    root4813.append(nodes3774);
    subs__.addSub((ui.backButton)(tmp3487, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3488, function(_, callback) {
      var root4814 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4814); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3774;
      nodes3774 = node.contents();
      oldNodes.replaceWith(nodes3774);
    }));
    callback(root4813); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3773;
    nodes3773 = node.contents();
    oldNodes.replaceWith(nodes3773);
  }));
  var nodes3775 = $("<span>");
  root4812.append(nodes3775);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4815 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp3584 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3489 = mobl.ref(result__);
    
    var nodes3776 = $("<span>");
    root4815.append(nodes3776);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3489, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4816 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3777 = $("<span>");
      root4816.append(nodes3777);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4817 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4817); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3777;
        nodes3777 = node.contents();
        oldNodes.replaceWith(nodes3777);
      }));
      callback(root4816); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3776;
      nodes3776 = node.contents();
      oldNodes.replaceWith(nodes3776);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp3583 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3490 = mobl.ref(result__);
    
    var nodes3778 = $("<span>");
    root4815.append(nodes3778);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3490, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4818 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3779 = $("<span>");
      root4818.append(nodes3779);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4819 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4819); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3779;
        nodes3779 = node.contents();
        oldNodes.replaceWith(nodes3779);
      }));
      callback(root4818); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3778;
      nodes3778 = node.contents();
      oldNodes.replaceWith(nodes3778);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp3582 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3491 = mobl.ref(result__);
    
    var nodes3780 = $("<span>");
    root4815.append(nodes3780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3491, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4820 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3781 = $("<span>");
      root4820.append(nodes3781);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4821 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4821); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3781;
        nodes3781 = node.contents();
        oldNodes.replaceWith(nodes3781);
      }));
      callback(root4820); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3780;
      nodes3780 = node.contents();
      oldNodes.replaceWith(nodes3780);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp3581 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3492 = mobl.ref(result__);
    
    var nodes3782 = $("<span>");
    root4815.append(nodes3782);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3492, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4822 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3783 = $("<span>");
      root4822.append(nodes3783);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4823 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4823); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3783;
        nodes3783 = node.contents();
        oldNodes.replaceWith(nodes3783);
      }));
      callback(root4822); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3782;
      nodes3782 = node.contents();
      oldNodes.replaceWith(nodes3782);
    }));
    callback(root4815); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3775;
    nodes3775 = node.contents();
    oldNodes.replaceWith(nodes3775);
  }));
  callback(root4812); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root4824 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3784 = $("<span>");
  root4824.append(nodes3784);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4825 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3494 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3493 = mobl.ref(result__);
    
    var nodes3785 = $("<span>");
    root4825.append(nodes3785);
    subs__.addSub((ui.backButton)(tmp3493, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3494, function(_, callback) {
      var root4826 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4826); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3785;
      nodes3785 = node.contents();
      oldNodes.replaceWith(nodes3785);
    }));
    callback(root4825); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3784;
    nodes3784 = node.contents();
    oldNodes.replaceWith(nodes3784);
  }));
  var nodes3786 = $("<span>");
  root4824.append(nodes3786);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4827 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp3586 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3495 = mobl.ref(result__);
    
    var nodes3787 = $("<span>");
    root4827.append(nodes3787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3495, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4828 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3788 = $("<span>");
      root4828.append(nodes3788);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4829 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4829); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3788;
        nodes3788 = node.contents();
        oldNodes.replaceWith(nodes3788);
      }));
      callback(root4828); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3787;
      nodes3787 = node.contents();
      oldNodes.replaceWith(nodes3787);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp3585 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3496 = mobl.ref(result__);
    
    var nodes3789 = $("<span>");
    root4827.append(nodes3789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3496, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4830 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3790 = $("<span>");
      root4830.append(nodes3790);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4831 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4831); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3790;
        nodes3790 = node.contents();
        oldNodes.replaceWith(nodes3790);
      }));
      callback(root4830); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3789;
      nodes3789 = node.contents();
      oldNodes.replaceWith(nodes3789);
    }));
    callback(root4827); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3786;
    nodes3786 = node.contents();
    oldNodes.replaceWith(nodes3786);
  }));
  callback(root4824); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root4832 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3791 = $("<span>");
  root4832.append(nodes3791);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4833 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3498 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3497 = mobl.ref(result__);
    
    var nodes3792 = $("<span>");
    root4833.append(nodes3792);
    subs__.addSub((ui.backButton)(tmp3497, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3498, function(_, callback) {
      var root4834 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4834); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3792;
      nodes3792 = node.contents();
      oldNodes.replaceWith(nodes3792);
    }));
    callback(root4833); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3791;
    nodes3791 = node.contents();
    oldNodes.replaceWith(nodes3791);
  }));
  var nodes3793 = $("<span>");
  root4832.append(nodes3793);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4835 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp3591 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3499 = mobl.ref(result__);
    
    var nodes3794 = $("<span>");
    root4835.append(nodes3794);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3499, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4836 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3795 = $("<span>");
      root4836.append(nodes3795);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4837 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4837); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3795;
        nodes3795 = node.contents();
        oldNodes.replaceWith(nodes3795);
      }));
      callback(root4836); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3794;
      nodes3794 = node.contents();
      oldNodes.replaceWith(nodes3794);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp3590 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3500 = mobl.ref(result__);
    
    var nodes3796 = $("<span>");
    root4835.append(nodes3796);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3500, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4838 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3797 = $("<span>");
      root4838.append(nodes3797);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4839 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4839); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3797;
        nodes3797 = node.contents();
        oldNodes.replaceWith(nodes3797);
      }));
      callback(root4838); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3796;
      nodes3796 = node.contents();
      oldNodes.replaceWith(nodes3796);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp3589 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3501 = mobl.ref(result__);
    
    var nodes3798 = $("<span>");
    root4835.append(nodes3798);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3501, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4840 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3799 = $("<span>");
      root4840.append(nodes3799);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4841 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4841); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3799;
        nodes3799 = node.contents();
        oldNodes.replaceWith(nodes3799);
      }));
      callback(root4840); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3798;
      nodes3798 = node.contents();
      oldNodes.replaceWith(nodes3798);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp3588 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3502 = mobl.ref(result__);
    
    var nodes3800 = $("<span>");
    root4835.append(nodes3800);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3502, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4842 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3801 = $("<span>");
      root4842.append(nodes3801);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4843 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4843); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3801;
        nodes3801 = node.contents();
        oldNodes.replaceWith(nodes3801);
      }));
      callback(root4842); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3800;
      nodes3800 = node.contents();
      oldNodes.replaceWith(nodes3800);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp3587 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3503 = mobl.ref(result__);
    
    var nodes3802 = $("<span>");
    root4835.append(nodes3802);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3503, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4844 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3803 = $("<span>");
      root4844.append(nodes3803);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4845 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4845); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3803;
        nodes3803 = node.contents();
        oldNodes.replaceWith(nodes3803);
      }));
      callback(root4844); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3802;
      nodes3802 = node.contents();
      oldNodes.replaceWith(nodes3802);
    }));
    callback(root4835); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3793;
    nodes3793 = node.contents();
    oldNodes.replaceWith(nodes3793);
  }));
  callback(root4832); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root4846 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3804 = $("<span>");
  root4846.append(nodes3804);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4847 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3505 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3504 = mobl.ref(result__);
    
    var nodes3805 = $("<span>");
    root4847.append(nodes3805);
    subs__.addSub((ui.backButton)(tmp3504, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3505, function(_, callback) {
      var root4848 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4848); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3805;
      nodes3805 = node.contents();
      oldNodes.replaceWith(nodes3805);
    }));
    callback(root4847); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3804;
    nodes3804 = node.contents();
    oldNodes.replaceWith(nodes3804);
  }));
  var nodes3806 = $("<span>");
  root4846.append(nodes3806);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4849 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp3594 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3506 = mobl.ref(result__);
    
    var nodes3807 = $("<span>");
    root4849.append(nodes3807);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3506, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4850 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3808 = $("<span>");
      root4850.append(nodes3808);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4851 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4851); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3808;
        nodes3808 = node.contents();
        oldNodes.replaceWith(nodes3808);
      }));
      callback(root4850); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3807;
      nodes3807 = node.contents();
      oldNodes.replaceWith(nodes3807);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp3593 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3507 = mobl.ref(result__);
    
    var nodes3809 = $("<span>");
    root4849.append(nodes3809);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3507, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4852 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3810 = $("<span>");
      root4852.append(nodes3810);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4853 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4853); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3810;
        nodes3810 = node.contents();
        oldNodes.replaceWith(nodes3810);
      }));
      callback(root4852); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3809;
      nodes3809 = node.contents();
      oldNodes.replaceWith(nodes3809);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp3592 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3508 = mobl.ref(result__);
    
    var nodes3811 = $("<span>");
    root4849.append(nodes3811);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3508, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4854 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3812 = $("<span>");
      root4854.append(nodes3812);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4855 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4855); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3812;
        nodes3812 = node.contents();
        oldNodes.replaceWith(nodes3812);
      }));
      callback(root4854); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3811;
      nodes3811 = node.contents();
      oldNodes.replaceWith(nodes3811);
    }));
    callback(root4849); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3806;
    nodes3806 = node.contents();
    oldNodes.replaceWith(nodes3806);
  }));
  callback(root4846); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root4856 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3813 = $("<span>");
  root4856.append(nodes3813);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4857 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3510 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3509 = mobl.ref(result__);
    
    var nodes3814 = $("<span>");
    root4857.append(nodes3814);
    subs__.addSub((ui.backButton)(tmp3509, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3510, function(_, callback) {
      var root4858 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4858); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3814;
      nodes3814 = node.contents();
      oldNodes.replaceWith(nodes3814);
    }));
    callback(root4857); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3813;
    nodes3813 = node.contents();
    oldNodes.replaceWith(nodes3813);
  }));
  var nodes3815 = $("<span>");
  root4856.append(nodes3815);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4859 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp3595 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3511 = mobl.ref(result__);
    
    var nodes3816 = $("<span>");
    root4859.append(nodes3816);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3511, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4860 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3817 = $("<span>");
      root4860.append(nodes3817);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4861 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4861); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3817;
        nodes3817 = node.contents();
        oldNodes.replaceWith(nodes3817);
      }));
      callback(root4860); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3816;
      nodes3816 = node.contents();
      oldNodes.replaceWith(nodes3816);
    }));
    callback(root4859); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3815;
    nodes3815 = node.contents();
    oldNodes.replaceWith(nodes3815);
  }));
  callback(root4856); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root4862 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3818 = $("<span>");
  root4862.append(nodes3818);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4863 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp3608 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3512 = mobl.ref(result__);
    
    var nodes3819 = $("<span>");
    root4863.append(nodes3819);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3512, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4864 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3820 = $("<span>");
      root4864.append(nodes3820);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4865 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4865); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3820;
        nodes3820 = node.contents();
        oldNodes.replaceWith(nodes3820);
      }));
      callback(root4864); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3819;
      nodes3819 = node.contents();
      oldNodes.replaceWith(nodes3819);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp3607 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3513 = mobl.ref(result__);
    
    var nodes3821 = $("<span>");
    root4863.append(nodes3821);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3513, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4866 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3822 = $("<span>");
      root4866.append(nodes3822);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4867 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4867); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3822;
        nodes3822 = node.contents();
        oldNodes.replaceWith(nodes3822);
      }));
      callback(root4866); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3821;
      nodes3821 = node.contents();
      oldNodes.replaceWith(nodes3821);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp3606 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3514 = mobl.ref(result__);
    
    var nodes3823 = $("<span>");
    root4863.append(nodes3823);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3514, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4868 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3824 = $("<span>");
      root4868.append(nodes3824);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4869 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4869); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3824;
        nodes3824 = node.contents();
        oldNodes.replaceWith(nodes3824);
      }));
      callback(root4868); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3823;
      nodes3823 = node.contents();
      oldNodes.replaceWith(nodes3823);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp3605 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3515 = mobl.ref(result__);
    
    var nodes3825 = $("<span>");
    root4863.append(nodes3825);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3515, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4870 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3826 = $("<span>");
      root4870.append(nodes3826);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4871 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4871); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3826;
        nodes3826 = node.contents();
        oldNodes.replaceWith(nodes3826);
      }));
      callback(root4870); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3825;
      nodes3825 = node.contents();
      oldNodes.replaceWith(nodes3825);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp3604 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3516 = mobl.ref(result__);
    
    var nodes3827 = $("<span>");
    root4863.append(nodes3827);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3516, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4872 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3828 = $("<span>");
      root4872.append(nodes3828);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4873 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4873); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3828;
        nodes3828 = node.contents();
        oldNodes.replaceWith(nodes3828);
      }));
      callback(root4872); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3827;
      nodes3827 = node.contents();
      oldNodes.replaceWith(nodes3827);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp3603 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3517 = mobl.ref(result__);
    
    var nodes3829 = $("<span>");
    root4863.append(nodes3829);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3517, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4874 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3830 = $("<span>");
      root4874.append(nodes3830);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4875); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3830;
        nodes3830 = node.contents();
        oldNodes.replaceWith(nodes3830);
      }));
      callback(root4874); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3829;
      nodes3829 = node.contents();
      oldNodes.replaceWith(nodes3829);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp3602 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3518 = mobl.ref(result__);
    
    var nodes3831 = $("<span>");
    root4863.append(nodes3831);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3518, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4876 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3832 = $("<span>");
      root4876.append(nodes3832);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4877); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3832;
        nodes3832 = node.contents();
        oldNodes.replaceWith(nodes3832);
      }));
      callback(root4876); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3831;
      nodes3831 = node.contents();
      oldNodes.replaceWith(nodes3831);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp3601 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3519 = mobl.ref(result__);
    
    var nodes3833 = $("<span>");
    root4863.append(nodes3833);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3519, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4878 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3834 = $("<span>");
      root4878.append(nodes3834);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4879 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4879); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3834;
        nodes3834 = node.contents();
        oldNodes.replaceWith(nodes3834);
      }));
      callback(root4878); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3833;
      nodes3833 = node.contents();
      oldNodes.replaceWith(nodes3833);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp3600 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3520 = mobl.ref(result__);
    
    var nodes3835 = $("<span>");
    root4863.append(nodes3835);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3520, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4880 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3836 = $("<span>");
      root4880.append(nodes3836);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4881 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4881); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3836;
        nodes3836 = node.contents();
        oldNodes.replaceWith(nodes3836);
      }));
      callback(root4880); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3835;
      nodes3835 = node.contents();
      oldNodes.replaceWith(nodes3835);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp3599 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3521 = mobl.ref(result__);
    
    var nodes3837 = $("<span>");
    root4863.append(nodes3837);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3521, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4882 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3838 = $("<span>");
      root4882.append(nodes3838);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4883 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4883); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3838;
        nodes3838 = node.contents();
        oldNodes.replaceWith(nodes3838);
      }));
      callback(root4882); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3837;
      nodes3837 = node.contents();
      oldNodes.replaceWith(nodes3837);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp3598 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3522 = mobl.ref(result__);
    
    var nodes3839 = $("<span>");
    root4863.append(nodes3839);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3522, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4884 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3840 = $("<span>");
      root4884.append(nodes3840);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4885 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4885); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3840;
        nodes3840 = node.contents();
        oldNodes.replaceWith(nodes3840);
      }));
      callback(root4884); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3839;
      nodes3839 = node.contents();
      oldNodes.replaceWith(nodes3839);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp3597 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3523 = mobl.ref(result__);
    
    var nodes3841 = $("<span>");
    root4863.append(nodes3841);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3523, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3842 = $("<span>");
      root4886.append(nodes3842);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4887 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4887); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3842;
        nodes3842 = node.contents();
        oldNodes.replaceWith(nodes3842);
      }));
      callback(root4886); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3841;
      nodes3841 = node.contents();
      oldNodes.replaceWith(nodes3841);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp3596 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3524 = mobl.ref(result__);
    
    var nodes3843 = $("<span>");
    root4863.append(nodes3843);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3524, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4888 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3844 = $("<span>");
      root4888.append(nodes3844);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4889 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4889); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3844;
        nodes3844 = node.contents();
        oldNodes.replaceWith(nodes3844);
      }));
      callback(root4888); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3843;
      nodes3843 = node.contents();
      oldNodes.replaceWith(nodes3843);
    }));
    callback(root4863); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3818;
    nodes3818 = node.contents();
    oldNodes.replaceWith(nodes3818);
  }));
  callback(root4862); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root4890 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3845 = $("<span>");
  root4890.append(nodes3845);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4891 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp3614 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3525 = mobl.ref(result__);
    
    var nodes3846 = $("<span>");
    root4891.append(nodes3846);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3525, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4892 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3847 = $("<span>");
      root4892.append(nodes3847);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4893 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4893); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3847;
        nodes3847 = node.contents();
        oldNodes.replaceWith(nodes3847);
      }));
      callback(root4892); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3846;
      nodes3846 = node.contents();
      oldNodes.replaceWith(nodes3846);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp3613 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3526 = mobl.ref(result__);
    
    var nodes3848 = $("<span>");
    root4891.append(nodes3848);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3526, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4894 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3849 = $("<span>");
      root4894.append(nodes3849);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4895 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4895); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3849;
        nodes3849 = node.contents();
        oldNodes.replaceWith(nodes3849);
      }));
      callback(root4894); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3848;
      nodes3848 = node.contents();
      oldNodes.replaceWith(nodes3848);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp3612 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3527 = mobl.ref(result__);
    
    var nodes3850 = $("<span>");
    root4891.append(nodes3850);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3527, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4896 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3851 = $("<span>");
      root4896.append(nodes3851);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4897 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4897); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3851;
        nodes3851 = node.contents();
        oldNodes.replaceWith(nodes3851);
      }));
      callback(root4896); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3850;
      nodes3850 = node.contents();
      oldNodes.replaceWith(nodes3850);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp3611 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3528 = mobl.ref(result__);
    
    var nodes3852 = $("<span>");
    root4891.append(nodes3852);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3528, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4898 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3853 = $("<span>");
      root4898.append(nodes3853);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4899 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4899); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3853;
        nodes3853 = node.contents();
        oldNodes.replaceWith(nodes3853);
      }));
      callback(root4898); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3852;
      nodes3852 = node.contents();
      oldNodes.replaceWith(nodes3852);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp3610 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3529 = mobl.ref(result__);
    
    var nodes3854 = $("<span>");
    root4891.append(nodes3854);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3529, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4900 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3855 = $("<span>");
      root4900.append(nodes3855);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4901 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4901); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3855;
        nodes3855 = node.contents();
        oldNodes.replaceWith(nodes3855);
      }));
      callback(root4900); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3854;
      nodes3854 = node.contents();
      oldNodes.replaceWith(nodes3854);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp3609 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3530 = mobl.ref(result__);
    
    var nodes3856 = $("<span>");
    root4891.append(nodes3856);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3530, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4902 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3857 = $("<span>");
      root4902.append(nodes3857);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4903 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4903); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3857;
        nodes3857 = node.contents();
        oldNodes.replaceWith(nodes3857);
      }));
      callback(root4902); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3856;
      nodes3856 = node.contents();
      oldNodes.replaceWith(nodes3856);
    }));
    callback(root4891); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3845;
    nodes3845 = node.contents();
    oldNodes.replaceWith(nodes3845);
  }));
  callback(root4890); return subs__;
  
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
  var root4904 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1560 = $("<div>");
  
  var ref1512 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref1512.get() !== null) {
    node1560.attr('class', ref1512.get());
    subs__.addSub(ref1512.addEventListener('change', function(_, ref, val) {
      node1560.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1512.rebind());
  
  var val765 = onclick.get();
  if(val765 !== null) {
    subs__.addSub(mobl.domBind(node1560, 'tap', val765));
  }
  
  
  var node1561 = $("<div>");
  
  var ref1511 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref1511.get() !== null) {
    node1561.attr('class', ref1511.get());
    subs__.addSub(ref1511.addEventListener('change', function(_, ref, val) {
      node1561.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1511.rebind());
  
  
  var node1562 = $("<div>");
  
  var ref1509 = text;
  node1562.text(""+ref1509.get());
  var ignore297 = false;
  subs__.addSub(ref1509.addEventListener('change', function(_, ref, val) {
    if(ignore297) return;
    node1562.text(""+val);
  }));
  subs__.addSub(ref1509.rebind());
  
  
  var ref1510 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1510.get() !== null) {
    node1562.attr('class', ref1510.get());
    subs__.addSub(ref1510.addEventListener('change', function(_, ref, val) {
      node1562.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1510.rebind());
  
  node1561.append(node1562);
  node1560.append(node1561);
  var nodes3858 = $("<span>");
  node1560.append(nodes3858);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl611();
  }));
  
  function renderControl611() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4905); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3858;
      nodes3858 = node.contents();
      oldNodes.replaceWith(nodes3858);
    }));
  }
  renderControl611();
  root4904.append(node1560);
  callback(root4904); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp3615 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp3616 = result__;
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
  var root4906 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1563 = $("<span>");
  root4906.append(node1563);
  var condSubs384 = new mobl.CompSubscription();
  subs__.addSub(condSubs384);
  var oldValue384;
  var renderCond384 = function() {
    var value1964 = qa.get().correct;
    if(oldValue384 === value1964) return;
    oldValue384 = value1964;
    var subs__ = condSubs384;
    subs__.unsubscribe();
    node1563.empty();
    if(value1964) {
      var nodes3859 = $("<span>");
      node1563.append(nodes3859);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4907 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp3534 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp3534.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1564 = $("<span>");
        root4907.append(node1564);
        var condSubs385 = new mobl.CompSubscription();
        subs__.addSub(condSubs385);
        var oldValue385;
        var renderCond385 = function() {
          var value1965 = tmp3534.get();
          if(oldValue385 === value1965) return;
          oldValue385 = value1965;
          var subs__ = condSubs385;
          subs__.unsubscribe();
          node1564.empty();
          if(value1965) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp3531 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp3531.set("A" + qa.get().number + ". ");
            }));
            
            var nodes3860 = $("<span>");
            node1564.append(nodes3860);
            subs__.addSub((mobl.label)(tmp3531, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4908 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4908); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3860;
              nodes3860 = node.contents();
              oldNodes.replaceWith(nodes3860);
            }));
            var nodes3861 = $("<span>");
            node1564.append(nodes3861);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root4909 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4909); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3861;
              nodes3861 = node.contents();
              oldNodes.replaceWith(nodes3861);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp3532 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp3532.set("A" + qa.get().number + ". ");
            }));
            
            var nodes3862 = $("<span>");
            node1564.append(nodes3862);
            subs__.addSub((mobl.label)(tmp3532, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4910 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4910); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3862;
              nodes3862 = node.contents();
              oldNodes.replaceWith(nodes3862);
            }));
            var nodes3863 = $("<span>");
            node1564.append(nodes3863);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root4911 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4911); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3863;
              nodes3863 = node.contents();
              oldNodes.replaceWith(nodes3863);
            }));
            
            var node1565 = $("<span>");
            node1565.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp3618 = result__;
              var tmp3533 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp3617 = result__;
                  var result__ = tmp3617;
                  tmp3533.set(result__);
                  
                });
              }));
              
              var nodes3864 = $("<span>");
              node1565.append(nodes3864);
              subs__.addSub((mobl.html)(tmp3533, function(_, callback) {
                var root4912 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4912); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3864;
                nodes3864 = node.contents();
                oldNodes.replaceWith(nodes3864);
              }));
              node1564.append(node1565);
              
              
            });
            
            
            
          }
        };
        renderCond385();
        subs__.addSub(tmp3534.addEventListener('change', function() {
          renderCond385();
        }));
        
        callback(root4907); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3859;
        nodes3859 = node.contents();
        oldNodes.replaceWith(nodes3859);
      }));
      
      
    } else {
      var nodes3865 = $("<span>");
      node1563.append(nodes3865);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4913 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp3538 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp3538.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1566 = $("<span>");
        root4913.append(node1566);
        var condSubs386 = new mobl.CompSubscription();
        subs__.addSub(condSubs386);
        var oldValue386;
        var renderCond386 = function() {
          var value1966 = tmp3538.get();
          if(oldValue386 === value1966) return;
          oldValue386 = value1966;
          var subs__ = condSubs386;
          subs__.unsubscribe();
          node1566.empty();
          if(value1966) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp3535 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp3535.set("A" + qa.get().number + ". ");
            }));
            
            var nodes3866 = $("<span>");
            node1566.append(nodes3866);
            subs__.addSub((mobl.label)(tmp3535, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4914 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4914); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3866;
              nodes3866 = node.contents();
              oldNodes.replaceWith(nodes3866);
            }));
            var nodes3867 = $("<span>");
            node1566.append(nodes3867);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root4915 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4915); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3867;
              nodes3867 = node.contents();
              oldNodes.replaceWith(nodes3867);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp3536 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp3536.set("A" + qa.get().number + ". ");
            }));
            
            var nodes3868 = $("<span>");
            node1566.append(nodes3868);
            subs__.addSub((mobl.label)(tmp3536, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4916 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4916); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3868;
              nodes3868 = node.contents();
              oldNodes.replaceWith(nodes3868);
            }));
            var nodes3869 = $("<span>");
            node1566.append(nodes3869);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root4917 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4917); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3869;
              nodes3869 = node.contents();
              oldNodes.replaceWith(nodes3869);
            }));
            
            var node1567 = $("<span>");
            node1567.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp3620 = result__;
              var tmp3537 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp3619 = result__;
                  var result__ = tmp3619;
                  tmp3537.set(result__);
                  
                });
              }));
              
              var nodes3870 = $("<span>");
              node1567.append(nodes3870);
              subs__.addSub((mobl.html)(tmp3537, function(_, callback) {
                var root4918 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4918); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3870;
                nodes3870 = node.contents();
                oldNodes.replaceWith(nodes3870);
              }));
              node1566.append(node1567);
              
              
            });
            
            
            
          }
        };
        renderCond386();
        subs__.addSub(tmp3538.addEventListener('change', function() {
          renderCond386();
        }));
        
        callback(root4913); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3865;
        nodes3865 = node.contents();
        oldNodes.replaceWith(nodes3865);
      }));
      
      
    }
  };
  renderCond384();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond384();
  }));
  
  var nodes3871 = $("<span>");
  root4906.append(nodes3871);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root4919 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1568 = $("<span>");
    node1568.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp3622 = result__;
      var tmp3539 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp3621 = result__;
          var result__ = tmp3621;
          tmp3539.set(result__);
          
        });
      }));
      
      var nodes3875 = $("<span>");
      node1568.append(nodes3875);
      subs__.addSub((mobl.html)(tmp3539, function(_, callback) {
        var root4923 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4923); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3875;
        nodes3875 = node.contents();
        oldNodes.replaceWith(nodes3875);
      }));
      root4919.append(node1568);
      var nodes3872 = $("<span>");
      root4919.append(nodes3872);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4920 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4920); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3872;
        nodes3872 = node.contents();
        oldNodes.replaceWith(nodes3872);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3540 = mobl.ref(result__);
      
      var nodes3873 = $("<span>");
      root4919.append(nodes3873);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3540, function(_, callback) {
        var root4921 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4921); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3873;
        nodes3873 = node.contents();
        oldNodes.replaceWith(nodes3873);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3541 = mobl.ref(result__);
      
      var nodes3874 = $("<span>");
      root4919.append(nodes3874);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3541, function(_, callback) {
        var root4922 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4922); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3874;
        nodes3874 = node.contents();
        oldNodes.replaceWith(nodes3874);
      }));
      callback(root4919); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3871;
    nodes3871 = node.contents();
    oldNodes.replaceWith(nodes3871);
  }));
  callback(root4906); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp3623 = result__;
    var result__ = tmp3623;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp3624 = result__;
        var result__ = tmp3624;
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
  var root4924 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1569 = $("<span>");
  
  var ref1513 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref1513.get() !== null) {
    node1569.attr('style', ref1513.get());
    subs__.addSub(ref1513.addEventListener('change', function(_, ref, val) {
      node1569.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node1569.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node1569.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref1513.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp3542 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp3542.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp3542.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes3876 = $("<span>");
  node1569.append(nodes3876);
  subs__.addSub((mobl.html)(tmp3542, function(_, callback) {
    var root4925 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4925); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3876;
    nodes3876 = node.contents();
    oldNodes.replaceWith(nodes3876);
  }));
  root4924.append(node1569);
  callback(root4924); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root4926 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp3632 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp3545 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp3544 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp3544.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes3877 = $("<span>");
  root4926.append(nodes3877);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp3544, tmp3545, function(_, callback) {
    var root4927 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp3625 = result__;
                       var result__ = tmp3625;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp3626 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp3543 = mobl.ref(result__);
    
    var nodes3878 = $("<span>");
    root4927.append(nodes3878);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3543, function(_, callback) {
      var root4928 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4928); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3878;
      nodes3878 = node.contents();
      oldNodes.replaceWith(nodes3878);
    }));
    callback(root4927); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3877;
    nodes3877 = node.contents();
    oldNodes.replaceWith(nodes3877);
  }));
  var nodes3879 = $("<span>");
  root4926.append(nodes3879);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4929 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp3631 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3548 = mobl.ref(result__);
    
    var nodes3880 = $("<span>");
    root4929.append(nodes3880);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp3548, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root4930 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp3546 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp3546.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp3546.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes3881 = $("<span>");
      root4930.append(nodes3881);
      subs__.addSub((mobl.html)(tmp3546, function(_, callback) {
        var root4931 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4931); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3881;
        nodes3881 = node.contents();
        oldNodes.replaceWith(nodes3881);
      }));
      
      var node1570 = $("<span>");
      node1570.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp3628 = result__;
        var tmp3547 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp3627 = result__;
            var result__ = tmp3627;
            tmp3547.set(result__);
            
          });
        }));
        
        var nodes3882 = $("<span>");
        node1570.append(nodes3882);
        subs__.addSub((mobl.html)(tmp3547, function(_, callback) {
          var root4932 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4932); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3882;
          nodes3882 = node.contents();
          oldNodes.replaceWith(nodes3882);
        }));
        root4930.append(node1570);
        callback(root4930); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3880;
      nodes3880 = node.contents();
      oldNodes.replaceWith(nodes3880);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp3630 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3550 = mobl.ref(result__);
    
    var nodes3883 = $("<span>");
    root4929.append(nodes3883);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3550, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root4933 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3884 = $("<span>");
      root4933.append(nodes3884);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4934 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp3629 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp3549 = mobl.ref(result__);
        
        var nodes3885 = $("<span>");
        root4934.append(nodes3885);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp3549, function(_, callback) {
          var root4935 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4935); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3885;
          nodes3885 = node.contents();
          oldNodes.replaceWith(nodes3885);
        }));
        callback(root4934); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3884;
        nodes3884 = node.contents();
        oldNodes.replaceWith(nodes3884);
      }));
      
      var node1571 = $("<span>");
      root4933.append(node1571);
      var condSubs387 = new mobl.CompSubscription();
      subs__.addSub(condSubs387);
      var oldValue387;
      var renderCond387 = function() {
        var value1967 = qa.get().done;
        if(oldValue387 === value1967) return;
        oldValue387 = value1967;
        var subs__ = condSubs387;
        subs__.unsubscribe();
        node1571.empty();
        if(value1967) {
          var nodes3886 = $("<span>");
          node1571.append(nodes3886);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root4936 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4936); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3886;
            nodes3886 = node.contents();
            oldNodes.replaceWith(nodes3886);
          }));
          
          
        } else {
          
        }
      };
      renderCond387();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond387();
      }));
      
      callback(root4933); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3883;
      nodes3883 = node.contents();
      oldNodes.replaceWith(nodes3883);
    }));
    callback(root4929); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3879;
    nodes3879 = node.contents();
    oldNodes.replaceWith(nodes3879);
  }));
  callback(root4926); return subs__;
  
  
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
  qas.list(function(coll2528) {
    coll2528 = coll2528.reverse();
    function processOne158() {
      var item;
      item = coll2528.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll2528.length > 0) processOne158(); else rest158();
      
    }
    function rest158() {
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
    if(coll2528.length > 0) processOne158(); else rest158();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll2529) {
    coll2529 = coll2529.reverse();
    function processOne159() {
      var item;
      item = coll2529.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll2529.length > 0) processOne159(); else rest159();
      
    }
    function rest159() {
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
    if(coll2529.length > 0) processOne159(); else rest159();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll2530) {
    coll2530 = coll2530.reverse();
    function processOne160() {
      var item;
      item = coll2530.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll2530.length > 0) processOne160(); else rest160();
      
    }
    function rest160() {
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
    if(coll2530.length > 0) processOne160(); else rest160();
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