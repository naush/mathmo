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
    var tmp10601 = result__;
    var result__ = tmp10601;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp10602 = result__;
      var result__ = tmp10602;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp10603 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll669) {
    coll669 = coll669.reverse();
    function processOne381() {
      var i;
      i = coll669.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp10604 = result__;
        
        if(coll669.length > 0) processOne381(); else rest381();
        
      });
    }
    function rest381() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll669.length > 0) processOne381(); else rest381();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll670) {
    coll670 = coll670.reverse();
    function processOne382() {
      var i;
      i = coll670.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp10605 = result__;
          
          if(coll670.length > 0) processOne382(); else rest382();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp10605 = result__;
            
            if(coll670.length > 0) processOne382(); else rest382();
            
          });
        }
      }
    }
    function rest382() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll670.length > 0) processOne382(); else rest382();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll671) {
    coll671 = coll671.reverse();
    function processOne383() {
      var i;
      i = coll671.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp10606 = result__;
        
        if(coll671.length > 0) processOne383(); else rest383();
        
      });
    }
    function rest383() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll671.length > 0) processOne383(); else rest383();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root11705 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10677 = $("<span>");
  root11705.append(nodes10677);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11706 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp10614 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10509 = mobl.ref(result__);
    
    var nodes10678 = $("<span>");
    root11706.append(nodes10678);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10509, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11707 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10679 = $("<span>");
      root11707.append(nodes10679);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11708 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11708); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10679;
        nodes10679 = node.contents();
        oldNodes.replaceWith(nodes10679);
      }));
      callback(root11707); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10678;
      nodes10678 = node.contents();
      oldNodes.replaceWith(nodes10678);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp10613 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10510 = mobl.ref(result__);
    
    var nodes10680 = $("<span>");
    root11706.append(nodes10680);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10510, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11709 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10681 = $("<span>");
      root11709.append(nodes10681);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11710 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11710); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10681;
        nodes10681 = node.contents();
        oldNodes.replaceWith(nodes10681);
      }));
      callback(root11709); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10680;
      nodes10680 = node.contents();
      oldNodes.replaceWith(nodes10680);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp10612 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10511 = mobl.ref(result__);
    
    var nodes10682 = $("<span>");
    root11706.append(nodes10682);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10511, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11711 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10683 = $("<span>");
      root11711.append(nodes10683);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11712 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11712); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10683;
        nodes10683 = node.contents();
        oldNodes.replaceWith(nodes10683);
      }));
      callback(root11711); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10682;
      nodes10682 = node.contents();
      oldNodes.replaceWith(nodes10682);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp10611 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10512 = mobl.ref(result__);
    
    var nodes10684 = $("<span>");
    root11706.append(nodes10684);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10512, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11713 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10685 = $("<span>");
      root11713.append(nodes10685);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11714 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11714); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10685;
        nodes10685 = node.contents();
        oldNodes.replaceWith(nodes10685);
      }));
      callback(root11713); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10684;
      nodes10684 = node.contents();
      oldNodes.replaceWith(nodes10684);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp10610 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10513 = mobl.ref(result__);
    
    var nodes10686 = $("<span>");
    root11706.append(nodes10686);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10513, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11715 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10687 = $("<span>");
      root11715.append(nodes10687);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11716 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11716); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10687;
        nodes10687 = node.contents();
        oldNodes.replaceWith(nodes10687);
      }));
      callback(root11715); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10686;
      nodes10686 = node.contents();
      oldNodes.replaceWith(nodes10686);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp10609 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10514 = mobl.ref(result__);
    
    var nodes10688 = $("<span>");
    root11706.append(nodes10688);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10514, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11717 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10689 = $("<span>");
      root11717.append(nodes10689);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11718 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11718); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10689;
        nodes10689 = node.contents();
        oldNodes.replaceWith(nodes10689);
      }));
      callback(root11717); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10688;
      nodes10688 = node.contents();
      oldNodes.replaceWith(nodes10688);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp10608 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10515 = mobl.ref(result__);
    
    var nodes10690 = $("<span>");
    root11706.append(nodes10690);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10515, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11719 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10691 = $("<span>");
      root11719.append(nodes10691);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11720 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11720); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10691;
        nodes10691 = node.contents();
        oldNodes.replaceWith(nodes10691);
      }));
      callback(root11719); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10690;
      nodes10690 = node.contents();
      oldNodes.replaceWith(nodes10690);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp10607 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10516 = mobl.ref(result__);
    
    var nodes10692 = $("<span>");
    root11706.append(nodes10692);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10516, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11721 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10693 = $("<span>");
      root11721.append(nodes10693);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11722 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11722); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10693;
        nodes10693 = node.contents();
        oldNodes.replaceWith(nodes10693);
      }));
      callback(root11721); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10692;
      nodes10692 = node.contents();
      oldNodes.replaceWith(nodes10692);
    }));
    callback(root11706); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10677;
    nodes10677 = node.contents();
    oldNodes.replaceWith(nodes10677);
  }));
  callback(root11705); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root11723 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes10694 = $("<span>");
  root11723.append(nodes10694);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11724 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10518 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10517 = mobl.ref(result__);
    
    var nodes10695 = $("<span>");
    root11724.append(nodes10695);
    subs__.addSub((ui.backButton)(tmp10517, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10518, function(_, callback) {
      var root11725 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11725); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10695;
      nodes10695 = node.contents();
      oldNodes.replaceWith(nodes10695);
    }));
    callback(root11724); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10694;
    nodes10694 = node.contents();
    oldNodes.replaceWith(nodes10694);
  }));
  var nodes10696 = $("<span>");
  root11723.append(nodes10696);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11726 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp10622 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10519 = mobl.ref(result__);
    
    var nodes10697 = $("<span>");
    root11726.append(nodes10697);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10519, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11727 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10698 = $("<span>");
      root11727.append(nodes10698);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11728 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11728); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10698;
        nodes10698 = node.contents();
        oldNodes.replaceWith(nodes10698);
      }));
      callback(root11727); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10697;
      nodes10697 = node.contents();
      oldNodes.replaceWith(nodes10697);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp10621 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10520 = mobl.ref(result__);
    
    var nodes10699 = $("<span>");
    root11726.append(nodes10699);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10520, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10700 = $("<span>");
      root11729.append(nodes10700);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11730 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11730); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10700;
        nodes10700 = node.contents();
        oldNodes.replaceWith(nodes10700);
      }));
      callback(root11729); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10699;
      nodes10699 = node.contents();
      oldNodes.replaceWith(nodes10699);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp10620 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10521 = mobl.ref(result__);
    
    var nodes10701 = $("<span>");
    root11726.append(nodes10701);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10521, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11731 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10702 = $("<span>");
      root11731.append(nodes10702);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11732 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11732); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10702;
        nodes10702 = node.contents();
        oldNodes.replaceWith(nodes10702);
      }));
      callback(root11731); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10701;
      nodes10701 = node.contents();
      oldNodes.replaceWith(nodes10701);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp10619 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10522 = mobl.ref(result__);
    
    var nodes10703 = $("<span>");
    root11726.append(nodes10703);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10522, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11733 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10704 = $("<span>");
      root11733.append(nodes10704);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11734 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11734); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10704;
        nodes10704 = node.contents();
        oldNodes.replaceWith(nodes10704);
      }));
      callback(root11733); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10703;
      nodes10703 = node.contents();
      oldNodes.replaceWith(nodes10703);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp10618 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10523 = mobl.ref(result__);
    
    var nodes10705 = $("<span>");
    root11726.append(nodes10705);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10523, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11735 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10706 = $("<span>");
      root11735.append(nodes10706);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11736 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11736); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10706;
        nodes10706 = node.contents();
        oldNodes.replaceWith(nodes10706);
      }));
      callback(root11735); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10705;
      nodes10705 = node.contents();
      oldNodes.replaceWith(nodes10705);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp10617 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10524 = mobl.ref(result__);
    
    var nodes10707 = $("<span>");
    root11726.append(nodes10707);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10524, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11737 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10708 = $("<span>");
      root11737.append(nodes10708);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11738 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11738); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10708;
        nodes10708 = node.contents();
        oldNodes.replaceWith(nodes10708);
      }));
      callback(root11737); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10707;
      nodes10707 = node.contents();
      oldNodes.replaceWith(nodes10707);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp10616 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10525 = mobl.ref(result__);
    
    var nodes10709 = $("<span>");
    root11726.append(nodes10709);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10525, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11739 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10710 = $("<span>");
      root11739.append(nodes10710);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11740 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11740); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10710;
        nodes10710 = node.contents();
        oldNodes.replaceWith(nodes10710);
      }));
      callback(root11739); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10709;
      nodes10709 = node.contents();
      oldNodes.replaceWith(nodes10709);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp10615 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10526 = mobl.ref(result__);
    
    var nodes10711 = $("<span>");
    root11726.append(nodes10711);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10526, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11741 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10712 = $("<span>");
      root11741.append(nodes10712);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11742 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11742); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10712;
        nodes10712 = node.contents();
        oldNodes.replaceWith(nodes10712);
      }));
      callback(root11741); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10711;
      nodes10711 = node.contents();
      oldNodes.replaceWith(nodes10711);
    }));
    callback(root11726); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10696;
    nodes10696 = node.contents();
    oldNodes.replaceWith(nodes10696);
  }));
  callback(root11723); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root11743 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10713 = $("<span>");
  root11743.append(nodes10713);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11744 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10528 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10527 = mobl.ref(result__);
    
    var nodes10714 = $("<span>");
    root11744.append(nodes10714);
    subs__.addSub((ui.backButton)(tmp10527, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10528, function(_, callback) {
      var root11745 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11745); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10714;
      nodes10714 = node.contents();
      oldNodes.replaceWith(nodes10714);
    }));
    callback(root11744); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10713;
    nodes10713 = node.contents();
    oldNodes.replaceWith(nodes10713);
  }));
  var nodes10715 = $("<span>");
  root11743.append(nodes10715);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11746 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp10627 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10529 = mobl.ref(result__);
    
    var nodes10716 = $("<span>");
    root11746.append(nodes10716);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10529, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11747 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10717 = $("<span>");
      root11747.append(nodes10717);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11748 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11748); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10717;
        nodes10717 = node.contents();
        oldNodes.replaceWith(nodes10717);
      }));
      callback(root11747); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10716;
      nodes10716 = node.contents();
      oldNodes.replaceWith(nodes10716);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp10626 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10530 = mobl.ref(result__);
    
    var nodes10718 = $("<span>");
    root11746.append(nodes10718);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10530, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11749 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10719 = $("<span>");
      root11749.append(nodes10719);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11750 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11750); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10719;
        nodes10719 = node.contents();
        oldNodes.replaceWith(nodes10719);
      }));
      callback(root11749); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10718;
      nodes10718 = node.contents();
      oldNodes.replaceWith(nodes10718);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp10625 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10531 = mobl.ref(result__);
    
    var nodes10720 = $("<span>");
    root11746.append(nodes10720);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10531, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11751 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10721 = $("<span>");
      root11751.append(nodes10721);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11752 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11752); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10721;
        nodes10721 = node.contents();
        oldNodes.replaceWith(nodes10721);
      }));
      callback(root11751); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10720;
      nodes10720 = node.contents();
      oldNodes.replaceWith(nodes10720);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp10624 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10532 = mobl.ref(result__);
    
    var nodes10722 = $("<span>");
    root11746.append(nodes10722);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10532, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11753 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10723 = $("<span>");
      root11753.append(nodes10723);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11754 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11754); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10723;
        nodes10723 = node.contents();
        oldNodes.replaceWith(nodes10723);
      }));
      callback(root11753); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10722;
      nodes10722 = node.contents();
      oldNodes.replaceWith(nodes10722);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp10623 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10533 = mobl.ref(result__);
    
    var nodes10724 = $("<span>");
    root11746.append(nodes10724);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10533, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11755 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10725 = $("<span>");
      root11755.append(nodes10725);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11756 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11756); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10725;
        nodes10725 = node.contents();
        oldNodes.replaceWith(nodes10725);
      }));
      callback(root11755); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10724;
      nodes10724 = node.contents();
      oldNodes.replaceWith(nodes10724);
    }));
    callback(root11746); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10715;
    nodes10715 = node.contents();
    oldNodes.replaceWith(nodes10715);
  }));
  callback(root11743); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root11757 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10726 = $("<span>");
  root11757.append(nodes10726);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11758 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10535 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10534 = mobl.ref(result__);
    
    var nodes10727 = $("<span>");
    root11758.append(nodes10727);
    subs__.addSub((ui.backButton)(tmp10534, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10535, function(_, callback) {
      var root11759 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11759); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10727;
      nodes10727 = node.contents();
      oldNodes.replaceWith(nodes10727);
    }));
    callback(root11758); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10726;
    nodes10726 = node.contents();
    oldNodes.replaceWith(nodes10726);
  }));
  var nodes10728 = $("<span>");
  root11757.append(nodes10728);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11760 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp10630 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10536 = mobl.ref(result__);
    
    var nodes10729 = $("<span>");
    root11760.append(nodes10729);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10536, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11761 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10730 = $("<span>");
      root11761.append(nodes10730);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11762 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11762); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10730;
        nodes10730 = node.contents();
        oldNodes.replaceWith(nodes10730);
      }));
      callback(root11761); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10729;
      nodes10729 = node.contents();
      oldNodes.replaceWith(nodes10729);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp10629 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10537 = mobl.ref(result__);
    
    var nodes10731 = $("<span>");
    root11760.append(nodes10731);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10537, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11763 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10732 = $("<span>");
      root11763.append(nodes10732);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11764 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11764); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10732;
        nodes10732 = node.contents();
        oldNodes.replaceWith(nodes10732);
      }));
      callback(root11763); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10731;
      nodes10731 = node.contents();
      oldNodes.replaceWith(nodes10731);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp10628 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10538 = mobl.ref(result__);
    
    var nodes10733 = $("<span>");
    root11760.append(nodes10733);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10538, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11765 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10734 = $("<span>");
      root11765.append(nodes10734);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11766 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11766); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10734;
        nodes10734 = node.contents();
        oldNodes.replaceWith(nodes10734);
      }));
      callback(root11765); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10733;
      nodes10733 = node.contents();
      oldNodes.replaceWith(nodes10733);
    }));
    callback(root11760); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10728;
    nodes10728 = node.contents();
    oldNodes.replaceWith(nodes10728);
  }));
  callback(root11757); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root11767 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10735 = $("<span>");
  root11767.append(nodes10735);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11768 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10540 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10539 = mobl.ref(result__);
    
    var nodes10736 = $("<span>");
    root11768.append(nodes10736);
    subs__.addSub((ui.backButton)(tmp10539, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10540, function(_, callback) {
      var root11769 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11769); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10736;
      nodes10736 = node.contents();
      oldNodes.replaceWith(nodes10736);
    }));
    callback(root11768); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10735;
    nodes10735 = node.contents();
    oldNodes.replaceWith(nodes10735);
  }));
  var nodes10737 = $("<span>");
  root11767.append(nodes10737);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11770 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp10634 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10541 = mobl.ref(result__);
    
    var nodes10738 = $("<span>");
    root11770.append(nodes10738);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10541, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10739 = $("<span>");
      root11771.append(nodes10739);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11772 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11772); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10739;
        nodes10739 = node.contents();
        oldNodes.replaceWith(nodes10739);
      }));
      callback(root11771); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10738;
      nodes10738 = node.contents();
      oldNodes.replaceWith(nodes10738);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp10633 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10542 = mobl.ref(result__);
    
    var nodes10740 = $("<span>");
    root11770.append(nodes10740);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10542, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11773 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10741 = $("<span>");
      root11773.append(nodes10741);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11774 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11774); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10741;
        nodes10741 = node.contents();
        oldNodes.replaceWith(nodes10741);
      }));
      callback(root11773); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10740;
      nodes10740 = node.contents();
      oldNodes.replaceWith(nodes10740);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp10632 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10543 = mobl.ref(result__);
    
    var nodes10742 = $("<span>");
    root11770.append(nodes10742);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10543, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11775 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10743 = $("<span>");
      root11775.append(nodes10743);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11776 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11776); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10743;
        nodes10743 = node.contents();
        oldNodes.replaceWith(nodes10743);
      }));
      callback(root11775); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10742;
      nodes10742 = node.contents();
      oldNodes.replaceWith(nodes10742);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp10631 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10544 = mobl.ref(result__);
    
    var nodes10744 = $("<span>");
    root11770.append(nodes10744);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10544, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11777 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10745 = $("<span>");
      root11777.append(nodes10745);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11778 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11778); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10745;
        nodes10745 = node.contents();
        oldNodes.replaceWith(nodes10745);
      }));
      callback(root11777); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10744;
      nodes10744 = node.contents();
      oldNodes.replaceWith(nodes10744);
    }));
    callback(root11770); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10737;
    nodes10737 = node.contents();
    oldNodes.replaceWith(nodes10737);
  }));
  callback(root11767); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root11779 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10746 = $("<span>");
  root11779.append(nodes10746);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11780 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10546 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10545 = mobl.ref(result__);
    
    var nodes10747 = $("<span>");
    root11780.append(nodes10747);
    subs__.addSub((ui.backButton)(tmp10545, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10546, function(_, callback) {
      var root11781 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11781); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10747;
      nodes10747 = node.contents();
      oldNodes.replaceWith(nodes10747);
    }));
    callback(root11780); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10746;
    nodes10746 = node.contents();
    oldNodes.replaceWith(nodes10746);
  }));
  var nodes10748 = $("<span>");
  root11779.append(nodes10748);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11782 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp10636 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10547 = mobl.ref(result__);
    
    var nodes10749 = $("<span>");
    root11782.append(nodes10749);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10547, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11783 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10750 = $("<span>");
      root11783.append(nodes10750);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11784 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11784); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10750;
        nodes10750 = node.contents();
        oldNodes.replaceWith(nodes10750);
      }));
      callback(root11783); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10749;
      nodes10749 = node.contents();
      oldNodes.replaceWith(nodes10749);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp10635 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10548 = mobl.ref(result__);
    
    var nodes10751 = $("<span>");
    root11782.append(nodes10751);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10548, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11785 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10752 = $("<span>");
      root11785.append(nodes10752);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11786 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11786); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10752;
        nodes10752 = node.contents();
        oldNodes.replaceWith(nodes10752);
      }));
      callback(root11785); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10751;
      nodes10751 = node.contents();
      oldNodes.replaceWith(nodes10751);
    }));
    callback(root11782); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10748;
    nodes10748 = node.contents();
    oldNodes.replaceWith(nodes10748);
  }));
  callback(root11779); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root11787 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10753 = $("<span>");
  root11787.append(nodes10753);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11788 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10550 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10549 = mobl.ref(result__);
    
    var nodes10754 = $("<span>");
    root11788.append(nodes10754);
    subs__.addSub((ui.backButton)(tmp10549, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10550, function(_, callback) {
      var root11789 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11789); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10754;
      nodes10754 = node.contents();
      oldNodes.replaceWith(nodes10754);
    }));
    callback(root11788); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10753;
    nodes10753 = node.contents();
    oldNodes.replaceWith(nodes10753);
  }));
  var nodes10755 = $("<span>");
  root11787.append(nodes10755);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11790 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp10641 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10551 = mobl.ref(result__);
    
    var nodes10756 = $("<span>");
    root11790.append(nodes10756);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10551, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11791 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10757 = $("<span>");
      root11791.append(nodes10757);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11792 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11792); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10757;
        nodes10757 = node.contents();
        oldNodes.replaceWith(nodes10757);
      }));
      callback(root11791); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10756;
      nodes10756 = node.contents();
      oldNodes.replaceWith(nodes10756);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp10640 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10552 = mobl.ref(result__);
    
    var nodes10758 = $("<span>");
    root11790.append(nodes10758);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10552, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10759 = $("<span>");
      root11793.append(nodes10759);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11794 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11794); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10759;
        nodes10759 = node.contents();
        oldNodes.replaceWith(nodes10759);
      }));
      callback(root11793); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10758;
      nodes10758 = node.contents();
      oldNodes.replaceWith(nodes10758);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp10639 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10553 = mobl.ref(result__);
    
    var nodes10760 = $("<span>");
    root11790.append(nodes10760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10553, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11795 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10761 = $("<span>");
      root11795.append(nodes10761);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11796); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10761;
        nodes10761 = node.contents();
        oldNodes.replaceWith(nodes10761);
      }));
      callback(root11795); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10760;
      nodes10760 = node.contents();
      oldNodes.replaceWith(nodes10760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp10638 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10554 = mobl.ref(result__);
    
    var nodes10762 = $("<span>");
    root11790.append(nodes10762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10554, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10763 = $("<span>");
      root11797.append(nodes10763);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11798); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10763;
        nodes10763 = node.contents();
        oldNodes.replaceWith(nodes10763);
      }));
      callback(root11797); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10762;
      nodes10762 = node.contents();
      oldNodes.replaceWith(nodes10762);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp10637 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10555 = mobl.ref(result__);
    
    var nodes10764 = $("<span>");
    root11790.append(nodes10764);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10555, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11799 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10765 = $("<span>");
      root11799.append(nodes10765);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11800 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11800); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10765;
        nodes10765 = node.contents();
        oldNodes.replaceWith(nodes10765);
      }));
      callback(root11799); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10764;
      nodes10764 = node.contents();
      oldNodes.replaceWith(nodes10764);
    }));
    callback(root11790); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10755;
    nodes10755 = node.contents();
    oldNodes.replaceWith(nodes10755);
  }));
  callback(root11787); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root11801 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10766 = $("<span>");
  root11801.append(nodes10766);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11802 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10557 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10556 = mobl.ref(result__);
    
    var nodes10767 = $("<span>");
    root11802.append(nodes10767);
    subs__.addSub((ui.backButton)(tmp10556, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10557, function(_, callback) {
      var root11803 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11803); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10767;
      nodes10767 = node.contents();
      oldNodes.replaceWith(nodes10767);
    }));
    callback(root11802); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10766;
    nodes10766 = node.contents();
    oldNodes.replaceWith(nodes10766);
  }));
  var nodes10768 = $("<span>");
  root11801.append(nodes10768);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11804 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp10644 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10558 = mobl.ref(result__);
    
    var nodes10769 = $("<span>");
    root11804.append(nodes10769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10558, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11805 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10770 = $("<span>");
      root11805.append(nodes10770);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11806 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11806); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10770;
        nodes10770 = node.contents();
        oldNodes.replaceWith(nodes10770);
      }));
      callback(root11805); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10769;
      nodes10769 = node.contents();
      oldNodes.replaceWith(nodes10769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp10643 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10559 = mobl.ref(result__);
    
    var nodes10771 = $("<span>");
    root11804.append(nodes10771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10559, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11807 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10772 = $("<span>");
      root11807.append(nodes10772);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11808 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11808); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10772;
        nodes10772 = node.contents();
        oldNodes.replaceWith(nodes10772);
      }));
      callback(root11807); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10771;
      nodes10771 = node.contents();
      oldNodes.replaceWith(nodes10771);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp10642 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10560 = mobl.ref(result__);
    
    var nodes10773 = $("<span>");
    root11804.append(nodes10773);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10560, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10774 = $("<span>");
      root11809.append(nodes10774);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11810 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11810); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10774;
        nodes10774 = node.contents();
        oldNodes.replaceWith(nodes10774);
      }));
      callback(root11809); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10773;
      nodes10773 = node.contents();
      oldNodes.replaceWith(nodes10773);
    }));
    callback(root11804); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10768;
    nodes10768 = node.contents();
    oldNodes.replaceWith(nodes10768);
  }));
  callback(root11801); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root11811 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10775 = $("<span>");
  root11811.append(nodes10775);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11812 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10562 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10561 = mobl.ref(result__);
    
    var nodes10776 = $("<span>");
    root11812.append(nodes10776);
    subs__.addSub((ui.backButton)(tmp10561, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10562, function(_, callback) {
      var root11813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11813); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10776;
      nodes10776 = node.contents();
      oldNodes.replaceWith(nodes10776);
    }));
    callback(root11812); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10775;
    nodes10775 = node.contents();
    oldNodes.replaceWith(nodes10775);
  }));
  var nodes10777 = $("<span>");
  root11811.append(nodes10777);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11814 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp10645 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10563 = mobl.ref(result__);
    
    var nodes10778 = $("<span>");
    root11814.append(nodes10778);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10563, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11815 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10779 = $("<span>");
      root11815.append(nodes10779);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11816 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11816); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10779;
        nodes10779 = node.contents();
        oldNodes.replaceWith(nodes10779);
      }));
      callback(root11815); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10778;
      nodes10778 = node.contents();
      oldNodes.replaceWith(nodes10778);
    }));
    callback(root11814); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10777;
    nodes10777 = node.contents();
    oldNodes.replaceWith(nodes10777);
  }));
  callback(root11811); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root11817 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10780 = $("<span>");
  root11817.append(nodes10780);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11818 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp10658 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10564 = mobl.ref(result__);
    
    var nodes10781 = $("<span>");
    root11818.append(nodes10781);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10564, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11819 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10782 = $("<span>");
      root11819.append(nodes10782);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11820 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11820); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10782;
        nodes10782 = node.contents();
        oldNodes.replaceWith(nodes10782);
      }));
      callback(root11819); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10781;
      nodes10781 = node.contents();
      oldNodes.replaceWith(nodes10781);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp10657 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10565 = mobl.ref(result__);
    
    var nodes10783 = $("<span>");
    root11818.append(nodes10783);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10565, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10784 = $("<span>");
      root11821.append(nodes10784);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11822 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11822); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10784;
        nodes10784 = node.contents();
        oldNodes.replaceWith(nodes10784);
      }));
      callback(root11821); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10783;
      nodes10783 = node.contents();
      oldNodes.replaceWith(nodes10783);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp10656 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10566 = mobl.ref(result__);
    
    var nodes10785 = $("<span>");
    root11818.append(nodes10785);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10566, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11823 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10786 = $("<span>");
      root11823.append(nodes10786);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11824 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11824); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10786;
        nodes10786 = node.contents();
        oldNodes.replaceWith(nodes10786);
      }));
      callback(root11823); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10785;
      nodes10785 = node.contents();
      oldNodes.replaceWith(nodes10785);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp10655 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10567 = mobl.ref(result__);
    
    var nodes10787 = $("<span>");
    root11818.append(nodes10787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10567, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11825 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10788 = $("<span>");
      root11825.append(nodes10788);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11826); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10788;
        nodes10788 = node.contents();
        oldNodes.replaceWith(nodes10788);
      }));
      callback(root11825); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10787;
      nodes10787 = node.contents();
      oldNodes.replaceWith(nodes10787);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp10654 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10568 = mobl.ref(result__);
    
    var nodes10789 = $("<span>");
    root11818.append(nodes10789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10568, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11827 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10790 = $("<span>");
      root11827.append(nodes10790);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11828 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11828); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10790;
        nodes10790 = node.contents();
        oldNodes.replaceWith(nodes10790);
      }));
      callback(root11827); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10789;
      nodes10789 = node.contents();
      oldNodes.replaceWith(nodes10789);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp10653 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10569 = mobl.ref(result__);
    
    var nodes10791 = $("<span>");
    root11818.append(nodes10791);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10569, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11829 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10792 = $("<span>");
      root11829.append(nodes10792);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11830 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11830); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10792;
        nodes10792 = node.contents();
        oldNodes.replaceWith(nodes10792);
      }));
      callback(root11829); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10791;
      nodes10791 = node.contents();
      oldNodes.replaceWith(nodes10791);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp10652 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10570 = mobl.ref(result__);
    
    var nodes10793 = $("<span>");
    root11818.append(nodes10793);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10570, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10794 = $("<span>");
      root11831.append(nodes10794);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11832 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11832); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10794;
        nodes10794 = node.contents();
        oldNodes.replaceWith(nodes10794);
      }));
      callback(root11831); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10793;
      nodes10793 = node.contents();
      oldNodes.replaceWith(nodes10793);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp10651 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10571 = mobl.ref(result__);
    
    var nodes10795 = $("<span>");
    root11818.append(nodes10795);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10571, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10796 = $("<span>");
      root11833.append(nodes10796);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11834); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10796;
        nodes10796 = node.contents();
        oldNodes.replaceWith(nodes10796);
      }));
      callback(root11833); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10795;
      nodes10795 = node.contents();
      oldNodes.replaceWith(nodes10795);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp10650 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10572 = mobl.ref(result__);
    
    var nodes10797 = $("<span>");
    root11818.append(nodes10797);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10572, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10798 = $("<span>");
      root11835.append(nodes10798);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11836 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11836); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10798;
        nodes10798 = node.contents();
        oldNodes.replaceWith(nodes10798);
      }));
      callback(root11835); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10797;
      nodes10797 = node.contents();
      oldNodes.replaceWith(nodes10797);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp10649 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10573 = mobl.ref(result__);
    
    var nodes10799 = $("<span>");
    root11818.append(nodes10799);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10573, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11837 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10800 = $("<span>");
      root11837.append(nodes10800);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11838 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11838); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10800;
        nodes10800 = node.contents();
        oldNodes.replaceWith(nodes10800);
      }));
      callback(root11837); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10799;
      nodes10799 = node.contents();
      oldNodes.replaceWith(nodes10799);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp10648 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10574 = mobl.ref(result__);
    
    var nodes10801 = $("<span>");
    root11818.append(nodes10801);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10574, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11839 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10802 = $("<span>");
      root11839.append(nodes10802);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11840 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11840); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10802;
        nodes10802 = node.contents();
        oldNodes.replaceWith(nodes10802);
      }));
      callback(root11839); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10801;
      nodes10801 = node.contents();
      oldNodes.replaceWith(nodes10801);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp10647 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10575 = mobl.ref(result__);
    
    var nodes10803 = $("<span>");
    root11818.append(nodes10803);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10575, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11841 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10804 = $("<span>");
      root11841.append(nodes10804);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11842 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11842); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10804;
        nodes10804 = node.contents();
        oldNodes.replaceWith(nodes10804);
      }));
      callback(root11841); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10803;
      nodes10803 = node.contents();
      oldNodes.replaceWith(nodes10803);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp10646 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10576 = mobl.ref(result__);
    
    var nodes10805 = $("<span>");
    root11818.append(nodes10805);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10576, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10806 = $("<span>");
      root11843.append(nodes10806);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11844 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11844); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10806;
        nodes10806 = node.contents();
        oldNodes.replaceWith(nodes10806);
      }));
      callback(root11843); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10805;
      nodes10805 = node.contents();
      oldNodes.replaceWith(nodes10805);
    }));
    callback(root11818); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10780;
    nodes10780 = node.contents();
    oldNodes.replaceWith(nodes10780);
  }));
  callback(root11817); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root11845 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10807 = $("<span>");
  root11845.append(nodes10807);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11846 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp10664 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10577 = mobl.ref(result__);
    
    var nodes10808 = $("<span>");
    root11846.append(nodes10808);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10577, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10809 = $("<span>");
      root11847.append(nodes10809);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11848 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11848); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10809;
        nodes10809 = node.contents();
        oldNodes.replaceWith(nodes10809);
      }));
      callback(root11847); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10808;
      nodes10808 = node.contents();
      oldNodes.replaceWith(nodes10808);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp10663 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10578 = mobl.ref(result__);
    
    var nodes10810 = $("<span>");
    root11846.append(nodes10810);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10578, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11849 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10811 = $("<span>");
      root11849.append(nodes10811);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11850 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11850); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10811;
        nodes10811 = node.contents();
        oldNodes.replaceWith(nodes10811);
      }));
      callback(root11849); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10810;
      nodes10810 = node.contents();
      oldNodes.replaceWith(nodes10810);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp10662 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10579 = mobl.ref(result__);
    
    var nodes10812 = $("<span>");
    root11846.append(nodes10812);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10579, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11851 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10813 = $("<span>");
      root11851.append(nodes10813);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11852 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11852); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10813;
        nodes10813 = node.contents();
        oldNodes.replaceWith(nodes10813);
      }));
      callback(root11851); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10812;
      nodes10812 = node.contents();
      oldNodes.replaceWith(nodes10812);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp10661 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10580 = mobl.ref(result__);
    
    var nodes10814 = $("<span>");
    root11846.append(nodes10814);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10580, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11853 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10815 = $("<span>");
      root11853.append(nodes10815);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11854 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11854); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10815;
        nodes10815 = node.contents();
        oldNodes.replaceWith(nodes10815);
      }));
      callback(root11853); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10814;
      nodes10814 = node.contents();
      oldNodes.replaceWith(nodes10814);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp10660 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10581 = mobl.ref(result__);
    
    var nodes10816 = $("<span>");
    root11846.append(nodes10816);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10581, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10817 = $("<span>");
      root11855.append(nodes10817);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11856 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11856); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10817;
        nodes10817 = node.contents();
        oldNodes.replaceWith(nodes10817);
      }));
      callback(root11855); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10816;
      nodes10816 = node.contents();
      oldNodes.replaceWith(nodes10816);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp10659 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10582 = mobl.ref(result__);
    
    var nodes10818 = $("<span>");
    root11846.append(nodes10818);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10582, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root11857 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10819 = $("<span>");
      root11857.append(nodes10819);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11858 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11858); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10819;
        nodes10819 = node.contents();
        oldNodes.replaceWith(nodes10819);
      }));
      callback(root11857); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10818;
      nodes10818 = node.contents();
      oldNodes.replaceWith(nodes10818);
    }));
    callback(root11846); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10807;
    nodes10807 = node.contents();
    oldNodes.replaceWith(nodes10807);
  }));
  callback(root11845); return subs__;
  
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
  var root11859 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node766 = $("<div>");
  
  var ref586 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref586.get() !== null) {
    node766.attr('class', ref586.get());
    subs__.addSub(ref586.addEventListener('change', function(_, ref, val) {
      node766.attr('class', val);
    }));
    
  }
  subs__.addSub(ref586.rebind());
  
  var val221 = onclick.get();
  if(val221 !== null) {
    subs__.addSub(mobl.domBind(node766, 'tap', val221));
  }
  
  
  var node767 = $("<div>");
  
  var ref585 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref585.get() !== null) {
    node767.attr('class', ref585.get());
    subs__.addSub(ref585.addEventListener('change', function(_, ref, val) {
      node767.attr('class', val);
    }));
    
  }
  subs__.addSub(ref585.rebind());
  
  
  var node768 = $("<div>");
  
  var ref583 = text;
  node768.text(""+ref583.get());
  var ignore128 = false;
  subs__.addSub(ref583.addEventListener('change', function(_, ref, val) {
    if(ignore128) return;
    node768.text(""+val);
  }));
  subs__.addSub(ref583.rebind());
  
  
  var ref584 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref584.get() !== null) {
    node768.attr('class', ref584.get());
    subs__.addSub(ref584.addEventListener('change', function(_, ref, val) {
      node768.attr('class', val);
    }));
    
  }
  subs__.addSub(ref584.rebind());
  
  node767.append(node768);
  node766.append(node767);
  var nodes10820 = $("<span>");
  node766.append(nodes10820);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl166();
  }));
  
  function renderControl166() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11860 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11860); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10820;
      nodes10820 = node.contents();
      oldNodes.replaceWith(nodes10820);
    }));
  }
  renderControl166();
  root11859.append(node766);
  callback(root11859); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp10665 = result__;
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
  var root11861 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node769 = $("<span>");
  root11861.append(node769);
  var condSubs301 = new mobl.CompSubscription();
  subs__.addSub(condSubs301);
  var oldValue301;
  var renderCond301 = function() {
    var value493 = qa.get().correct;
    if(oldValue301 === value493) return;
    oldValue301 = value493;
    var subs__ = condSubs301;
    subs__.unsubscribe();
    node769.empty();
    if(value493) {
      var nodes10821 = $("<span>");
      node769.append(nodes10821);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11862 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp10586 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp10586.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node770 = $("<span>");
        root11862.append(node770);
        var condSubs302 = new mobl.CompSubscription();
        subs__.addSub(condSubs302);
        var oldValue302;
        var renderCond302 = function() {
          var value494 = tmp10586.get();
          if(oldValue302 === value494) return;
          oldValue302 = value494;
          var subs__ = condSubs302;
          subs__.unsubscribe();
          node770.empty();
          if(value494) {
            var result__ = "A" + number.get() + ". ";
            var tmp10583 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp10583.set("A" + number.get() + ". ");
            }));
            
            var nodes10822 = $("<span>");
            node770.append(nodes10822);
            subs__.addSub((mobl.label)(tmp10583, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11863 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11863); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10822;
              nodes10822 = node.contents();
              oldNodes.replaceWith(nodes10822);
            }));
            var nodes10823 = $("<span>");
            node770.append(nodes10823);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root11864 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11864); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10823;
              nodes10823 = node.contents();
              oldNodes.replaceWith(nodes10823);
            }));
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp10584 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp10584.set("A" + number.get() + ". ");
            }));
            
            var nodes10824 = $("<span>");
            node770.append(nodes10824);
            subs__.addSub((mobl.label)(tmp10584, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11865 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11865); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10824;
              nodes10824 = node.contents();
              oldNodes.replaceWith(nodes10824);
            }));
            var nodes10825 = $("<span>");
            node770.append(nodes10825);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root11866 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11866); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10825;
              nodes10825 = node.contents();
              oldNodes.replaceWith(nodes10825);
            }));
            
            var node771 = $("<span>");
            node771.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp10667 = result__;
              var tmp10585 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp10666 = result__;
                  var result__ = tmp10666;
                  tmp10585.set(result__);
                  
                });
              }));
              
              var nodes10826 = $("<span>");
              node771.append(nodes10826);
              subs__.addSub((mobl.html)(tmp10585, function(_, callback) {
                var root11867 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11867); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10826;
                nodes10826 = node.contents();
                oldNodes.replaceWith(nodes10826);
              }));
              node770.append(node771);
              
              
            });
            
            
            
          }
        };
        renderCond302();
        subs__.addSub(tmp10586.addEventListener('change', function() {
          renderCond302();
        }));
        
        callback(root11862); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10821;
        nodes10821 = node.contents();
        oldNodes.replaceWith(nodes10821);
      }));
      
      
    } else {
      var nodes10827 = $("<span>");
      node769.append(nodes10827);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11868 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp10590 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp10590.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node772 = $("<span>");
        root11868.append(node772);
        var condSubs303 = new mobl.CompSubscription();
        subs__.addSub(condSubs303);
        var oldValue303;
        var renderCond303 = function() {
          var value495 = tmp10590.get();
          if(oldValue303 === value495) return;
          oldValue303 = value495;
          var subs__ = condSubs303;
          subs__.unsubscribe();
          node772.empty();
          if(value495) {
            var result__ = "A" + number.get() + ". ";
            var tmp10587 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp10587.set("A" + number.get() + ". ");
            }));
            
            var nodes10828 = $("<span>");
            node772.append(nodes10828);
            subs__.addSub((mobl.label)(tmp10587, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11869 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11869); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10828;
              nodes10828 = node.contents();
              oldNodes.replaceWith(nodes10828);
            }));
            var nodes10829 = $("<span>");
            node772.append(nodes10829);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root11870 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11870); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10829;
              nodes10829 = node.contents();
              oldNodes.replaceWith(nodes10829);
            }));
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp10588 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp10588.set("A" + number.get() + ". ");
            }));
            
            var nodes10830 = $("<span>");
            node772.append(nodes10830);
            subs__.addSub((mobl.label)(tmp10588, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11871 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11871); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10830;
              nodes10830 = node.contents();
              oldNodes.replaceWith(nodes10830);
            }));
            var nodes10831 = $("<span>");
            node772.append(nodes10831);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root11872 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11872); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10831;
              nodes10831 = node.contents();
              oldNodes.replaceWith(nodes10831);
            }));
            
            var node773 = $("<span>");
            node773.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp10669 = result__;
              var tmp10589 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp10668 = result__;
                  var result__ = tmp10668;
                  tmp10589.set(result__);
                  
                });
              }));
              
              var nodes10832 = $("<span>");
              node773.append(nodes10832);
              subs__.addSub((mobl.html)(tmp10589, function(_, callback) {
                var root11873 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11873); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10832;
                nodes10832 = node.contents();
                oldNodes.replaceWith(nodes10832);
              }));
              node772.append(node773);
              
              
            });
            
            
            
          }
        };
        renderCond303();
        subs__.addSub(tmp10590.addEventListener('change', function() {
          renderCond303();
        }));
        
        callback(root11868); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10827;
        nodes10827 = node.contents();
        oldNodes.replaceWith(nodes10827);
      }));
      
      
    }
  };
  renderCond301();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond301();
  }));
  
  var nodes10833 = $("<span>");
  root11861.append(nodes10833);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root11874 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node774 = $("<span>");
    node774.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp10671 = result__;
      var tmp10591 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp10670 = result__;
          var result__ = tmp10670;
          tmp10591.set(result__);
          
        });
      }));
      
      var nodes10837 = $("<span>");
      node774.append(nodes10837);
      subs__.addSub((mobl.html)(tmp10591, function(_, callback) {
        var root11878 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11878); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10837;
        nodes10837 = node.contents();
        oldNodes.replaceWith(nodes10837);
      }));
      root11874.append(node774);
      var nodes10834 = $("<span>");
      root11874.append(nodes10834);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11875); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10834;
        nodes10834 = node.contents();
        oldNodes.replaceWith(nodes10834);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp10592 = mobl.ref(result__);
      
      var nodes10835 = $("<span>");
      root11874.append(nodes10835);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp10592, function(_, callback) {
        var root11876 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11876); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10835;
        nodes10835 = node.contents();
        oldNodes.replaceWith(nodes10835);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp10593 = mobl.ref(result__);
      
      var nodes10836 = $("<span>");
      root11874.append(nodes10836);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp10593, function(_, callback) {
        var root11877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11877); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10836;
        nodes10836 = node.contents();
        oldNodes.replaceWith(nodes10836);
      }));
      callback(root11874); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10833;
    nodes10833 = node.contents();
    oldNodes.replaceWith(nodes10833);
  }));
  callback(root11861); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp10672 = result__;
    var result__ = tmp10672;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp10673 = result__;
        var result__ = tmp10673;
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
  var root11879 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp10681 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp10595 = mobl.ref(result__);
  
  var nodes10838 = $("<span>");
  root11879.append(nodes10838);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp10595, function(_, callback) {
    var root11880 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp10674 = result__;
                       var result__ = tmp10674;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp10675 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp10594 = mobl.ref(result__);
    
    var nodes10839 = $("<span>");
    root11880.append(nodes10839);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp10594, function(_, callback) {
      var root11881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11881); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10839;
      nodes10839 = node.contents();
      oldNodes.replaceWith(nodes10839);
    }));
    callback(root11880); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10838;
    nodes10838 = node.contents();
    oldNodes.replaceWith(nodes10838);
  }));
  var nodes10840 = $("<span>");
  root11879.append(nodes10840);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11882 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp10680 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10598 = mobl.ref(result__);
    
    var nodes10841 = $("<span>");
    root11882.append(nodes10841);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp10598, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root11883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". " + qa.get().question;
      var tmp10596 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp10596.set("Q" + number.get() + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp10596.set("Q" + number.get() + ". " + qa.get().question);
      }));
      
      var nodes10842 = $("<span>");
      root11883.append(nodes10842);
      subs__.addSub((mobl.html)(tmp10596, function(_, callback) {
        var root11884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10842;
        nodes10842 = node.contents();
        oldNodes.replaceWith(nodes10842);
      }));
      
      var node775 = $("<span>");
      node775.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp10677 = result__;
        var tmp10597 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp10676 = result__;
            var result__ = tmp10676;
            tmp10597.set(result__);
            
          });
        }));
        
        var nodes10843 = $("<span>");
        node775.append(nodes10843);
        subs__.addSub((mobl.html)(tmp10597, function(_, callback) {
          var root11885 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11885); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10843;
          nodes10843 = node.contents();
          oldNodes.replaceWith(nodes10843);
        }));
        root11883.append(node775);
        callback(root11883); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10841;
      nodes10841 = node.contents();
      oldNodes.replaceWith(nodes10841);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp10679 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp10600 = mobl.ref(result__);
    
    var nodes10844 = $("<span>");
    root11882.append(nodes10844);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10600, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root11886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10845 = $("<span>");
      root11886.append(nodes10845);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11887 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp10678 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp10599 = mobl.ref(result__);
        
        var nodes10846 = $("<span>");
        root11887.append(nodes10846);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp10599, function(_, callback) {
          var root11888 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11888); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10846;
          nodes10846 = node.contents();
          oldNodes.replaceWith(nodes10846);
        }));
        callback(root11887); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10845;
        nodes10845 = node.contents();
        oldNodes.replaceWith(nodes10845);
      }));
      
      var node776 = $("<span>");
      root11886.append(node776);
      var condSubs304 = new mobl.CompSubscription();
      subs__.addSub(condSubs304);
      var oldValue304;
      var renderCond304 = function() {
        var value496 = qa.get().done;
        if(oldValue304 === value496) return;
        oldValue304 = value496;
        var subs__ = condSubs304;
        subs__.unsubscribe();
        node776.empty();
        if(value496) {
          var nodes10847 = $("<span>");
          node776.append(nodes10847);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root11889 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root11889); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes10847;
            nodes10847 = node.contents();
            oldNodes.replaceWith(nodes10847);
          }));
          
          
        } else {
          
        }
      };
      renderCond304();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond304();
      }));
      
      callback(root11886); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10844;
      nodes10844 = node.contents();
      oldNodes.replaceWith(nodes10844);
    }));
    callback(root11882); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10840;
    nodes10840 = node.contents();
    oldNodes.replaceWith(nodes10840);
  }));
  callback(root11879); return subs__;
  
  
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
  qas.list(function(coll672) {
    coll672 = coll672.reverse();
    function processOne384() {
      var item;
      item = coll672.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll672.length > 0) processOne384(); else rest384();
      
    }
    function rest384() {
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
    if(coll672.length > 0) processOne384(); else rest384();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll673) {
    coll673 = coll673.reverse();
    function processOne385() {
      var item;
      item = coll673.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll673.length > 0) processOne385(); else rest385();
      
    }
    function rest385() {
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
    if(coll673.length > 0) processOne385(); else rest385();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll674) {
    coll674 = coll674.reverse();
    function processOne386() {
      var item;
      item = coll674.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll674.length > 0) processOne386(); else rest386();
      
    }
    function rest386() {
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
    if(coll674.length > 0) processOne386(); else rest386();
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