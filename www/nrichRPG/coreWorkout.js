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
    var tmp13618 = result__;
    var result__ = tmp13618;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp13619 = result__;
      var result__ = tmp13619;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp13620 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll852) {
    coll852 = coll852.reverse();
    function processOne486() {
      var i;
      i = coll852.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp13621 = result__;
        
        if(coll852.length > 0) processOne486(); else rest486();
        
      });
    }
    function rest486() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll852.length > 0) processOne486(); else rest486();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll853) {
    coll853 = coll853.reverse();
    function processOne487() {
      var i;
      i = coll853.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp13622 = result__;
          
          if(coll853.length > 0) processOne487(); else rest487();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp13622 = result__;
            
            if(coll853.length > 0) processOne487(); else rest487();
            
          });
        }
      }
    }
    function rest487() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll853.length > 0) processOne487(); else rest487();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll854) {
    coll854 = coll854.reverse();
    function processOne488() {
      var i;
      i = coll854.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp13623 = result__;
        
        if(coll854.length > 0) processOne488(); else rest488();
        
      });
    }
    function rest488() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll854.length > 0) processOne488(); else rest488();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root14986 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes13679 = $("<span>");
  root14986.append(nodes13679);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14987 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13631 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13526 = mobl.ref(result__);
    
    var nodes13680 = $("<span>");
    root14987.append(nodes13680);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13526, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14988 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13681 = $("<span>");
      root14988.append(nodes13681);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14989 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14989); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13681;
        nodes13681 = node.contents();
        oldNodes.replaceWith(nodes13681);
      }));
      callback(root14988); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13680;
      nodes13680 = node.contents();
      oldNodes.replaceWith(nodes13680);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13630 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13527 = mobl.ref(result__);
    
    var nodes13682 = $("<span>");
    root14987.append(nodes13682);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13527, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14990 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13683 = $("<span>");
      root14990.append(nodes13683);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14991 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14991); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13683;
        nodes13683 = node.contents();
        oldNodes.replaceWith(nodes13683);
      }));
      callback(root14990); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13682;
      nodes13682 = node.contents();
      oldNodes.replaceWith(nodes13682);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13629 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13528 = mobl.ref(result__);
    
    var nodes13684 = $("<span>");
    root14987.append(nodes13684);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13528, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14992 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13685 = $("<span>");
      root14992.append(nodes13685);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14993 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14993); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13685;
        nodes13685 = node.contents();
        oldNodes.replaceWith(nodes13685);
      }));
      callback(root14992); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13684;
      nodes13684 = node.contents();
      oldNodes.replaceWith(nodes13684);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13628 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13529 = mobl.ref(result__);
    
    var nodes13686 = $("<span>");
    root14987.append(nodes13686);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13529, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14994 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13687 = $("<span>");
      root14994.append(nodes13687);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14995 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14995); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13687;
        nodes13687 = node.contents();
        oldNodes.replaceWith(nodes13687);
      }));
      callback(root14994); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13686;
      nodes13686 = node.contents();
      oldNodes.replaceWith(nodes13686);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13627 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13530 = mobl.ref(result__);
    
    var nodes13688 = $("<span>");
    root14987.append(nodes13688);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13530, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14996 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13689 = $("<span>");
      root14996.append(nodes13689);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14997 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14997); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13689;
        nodes13689 = node.contents();
        oldNodes.replaceWith(nodes13689);
      }));
      callback(root14996); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13688;
      nodes13688 = node.contents();
      oldNodes.replaceWith(nodes13688);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13626 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13531 = mobl.ref(result__);
    
    var nodes13690 = $("<span>");
    root14987.append(nodes13690);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13531, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14998 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13691 = $("<span>");
      root14998.append(nodes13691);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14999 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14999); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13691;
        nodes13691 = node.contents();
        oldNodes.replaceWith(nodes13691);
      }));
      callback(root14998); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13690;
      nodes13690 = node.contents();
      oldNodes.replaceWith(nodes13690);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13625 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13532 = mobl.ref(result__);
    
    var nodes13692 = $("<span>");
    root14987.append(nodes13692);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13532, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15000 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13693 = $("<span>");
      root15000.append(nodes13693);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15001 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15001); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13693;
        nodes13693 = node.contents();
        oldNodes.replaceWith(nodes13693);
      }));
      callback(root15000); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13692;
      nodes13692 = node.contents();
      oldNodes.replaceWith(nodes13692);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13624 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13533 = mobl.ref(result__);
    
    var nodes13694 = $("<span>");
    root14987.append(nodes13694);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13533, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15002 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13695 = $("<span>");
      root15002.append(nodes13695);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15003 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15003); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13695;
        nodes13695 = node.contents();
        oldNodes.replaceWith(nodes13695);
      }));
      callback(root15002); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13694;
      nodes13694 = node.contents();
      oldNodes.replaceWith(nodes13694);
    }));
    callback(root14987); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13679;
    nodes13679 = node.contents();
    oldNodes.replaceWith(nodes13679);
  }));
  callback(root14986); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root15004 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes13696 = $("<span>");
  root15004.append(nodes13696);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15005 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13535 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13534 = mobl.ref(result__);
    
    var nodes13697 = $("<span>");
    root15005.append(nodes13697);
    subs__.addSub((ui.backButton)(tmp13534, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13535, function(_, callback) {
      var root15006 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15006); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13697;
      nodes13697 = node.contents();
      oldNodes.replaceWith(nodes13697);
    }));
    callback(root15005); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13696;
    nodes13696 = node.contents();
    oldNodes.replaceWith(nodes13696);
  }));
  var nodes13698 = $("<span>");
  root15004.append(nodes13698);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15007 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp13639 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13536 = mobl.ref(result__);
    
    var nodes13699 = $("<span>");
    root15007.append(nodes13699);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13536, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13700 = $("<span>");
      root15008.append(nodes13700);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15009 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15009); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13700;
        nodes13700 = node.contents();
        oldNodes.replaceWith(nodes13700);
      }));
      callback(root15008); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13699;
      nodes13699 = node.contents();
      oldNodes.replaceWith(nodes13699);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp13638 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13537 = mobl.ref(result__);
    
    var nodes13701 = $("<span>");
    root15007.append(nodes13701);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13537, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15010 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13702 = $("<span>");
      root15010.append(nodes13702);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15011 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15011); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13702;
        nodes13702 = node.contents();
        oldNodes.replaceWith(nodes13702);
      }));
      callback(root15010); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13701;
      nodes13701 = node.contents();
      oldNodes.replaceWith(nodes13701);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp13637 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13538 = mobl.ref(result__);
    
    var nodes13703 = $("<span>");
    root15007.append(nodes13703);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13538, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15012 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13704 = $("<span>");
      root15012.append(nodes13704);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15013 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15013); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13704;
        nodes13704 = node.contents();
        oldNodes.replaceWith(nodes13704);
      }));
      callback(root15012); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13703;
      nodes13703 = node.contents();
      oldNodes.replaceWith(nodes13703);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp13636 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13539 = mobl.ref(result__);
    
    var nodes13705 = $("<span>");
    root15007.append(nodes13705);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13539, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15014 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13706 = $("<span>");
      root15014.append(nodes13706);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15015 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15015); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13706;
        nodes13706 = node.contents();
        oldNodes.replaceWith(nodes13706);
      }));
      callback(root15014); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13705;
      nodes13705 = node.contents();
      oldNodes.replaceWith(nodes13705);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp13635 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13540 = mobl.ref(result__);
    
    var nodes13707 = $("<span>");
    root15007.append(nodes13707);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13540, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15016 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13708 = $("<span>");
      root15016.append(nodes13708);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15017 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15017); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13708;
        nodes13708 = node.contents();
        oldNodes.replaceWith(nodes13708);
      }));
      callback(root15016); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13707;
      nodes13707 = node.contents();
      oldNodes.replaceWith(nodes13707);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp13634 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13541 = mobl.ref(result__);
    
    var nodes13709 = $("<span>");
    root15007.append(nodes13709);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13541, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15018 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13710 = $("<span>");
      root15018.append(nodes13710);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15019 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15019); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13710;
        nodes13710 = node.contents();
        oldNodes.replaceWith(nodes13710);
      }));
      callback(root15018); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13709;
      nodes13709 = node.contents();
      oldNodes.replaceWith(nodes13709);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp13633 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13542 = mobl.ref(result__);
    
    var nodes13711 = $("<span>");
    root15007.append(nodes13711);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13542, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15020 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13712 = $("<span>");
      root15020.append(nodes13712);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15021 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15021); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13712;
        nodes13712 = node.contents();
        oldNodes.replaceWith(nodes13712);
      }));
      callback(root15020); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13711;
      nodes13711 = node.contents();
      oldNodes.replaceWith(nodes13711);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp13632 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13543 = mobl.ref(result__);
    
    var nodes13713 = $("<span>");
    root15007.append(nodes13713);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13543, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13714 = $("<span>");
      root15022.append(nodes13714);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15023 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15023); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13714;
        nodes13714 = node.contents();
        oldNodes.replaceWith(nodes13714);
      }));
      callback(root15022); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13713;
      nodes13713 = node.contents();
      oldNodes.replaceWith(nodes13713);
    }));
    callback(root15007); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13698;
    nodes13698 = node.contents();
    oldNodes.replaceWith(nodes13698);
  }));
  callback(root15004); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root15024 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13715 = $("<span>");
  root15024.append(nodes13715);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15025 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13545 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13544 = mobl.ref(result__);
    
    var nodes13716 = $("<span>");
    root15025.append(nodes13716);
    subs__.addSub((ui.backButton)(tmp13544, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13545, function(_, callback) {
      var root15026 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15026); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13716;
      nodes13716 = node.contents();
      oldNodes.replaceWith(nodes13716);
    }));
    callback(root15025); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13715;
    nodes13715 = node.contents();
    oldNodes.replaceWith(nodes13715);
  }));
  var nodes13717 = $("<span>");
  root15024.append(nodes13717);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15027 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp13644 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13546 = mobl.ref(result__);
    
    var nodes13718 = $("<span>");
    root15027.append(nodes13718);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13546, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15028 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13719 = $("<span>");
      root15028.append(nodes13719);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15029 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15029); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13719;
        nodes13719 = node.contents();
        oldNodes.replaceWith(nodes13719);
      }));
      callback(root15028); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13718;
      nodes13718 = node.contents();
      oldNodes.replaceWith(nodes13718);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp13643 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13547 = mobl.ref(result__);
    
    var nodes13720 = $("<span>");
    root15027.append(nodes13720);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13547, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15030 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13721 = $("<span>");
      root15030.append(nodes13721);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15031 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15031); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13721;
        nodes13721 = node.contents();
        oldNodes.replaceWith(nodes13721);
      }));
      callback(root15030); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13720;
      nodes13720 = node.contents();
      oldNodes.replaceWith(nodes13720);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp13642 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13548 = mobl.ref(result__);
    
    var nodes13722 = $("<span>");
    root15027.append(nodes13722);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13548, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15032 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13723 = $("<span>");
      root15032.append(nodes13723);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15033 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15033); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13723;
        nodes13723 = node.contents();
        oldNodes.replaceWith(nodes13723);
      }));
      callback(root15032); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13722;
      nodes13722 = node.contents();
      oldNodes.replaceWith(nodes13722);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp13641 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13549 = mobl.ref(result__);
    
    var nodes13724 = $("<span>");
    root15027.append(nodes13724);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13549, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15034 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13725 = $("<span>");
      root15034.append(nodes13725);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15035 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15035); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13725;
        nodes13725 = node.contents();
        oldNodes.replaceWith(nodes13725);
      }));
      callback(root15034); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13724;
      nodes13724 = node.contents();
      oldNodes.replaceWith(nodes13724);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp13640 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13550 = mobl.ref(result__);
    
    var nodes13726 = $("<span>");
    root15027.append(nodes13726);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13550, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15036 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13727 = $("<span>");
      root15036.append(nodes13727);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15037 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15037); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13727;
        nodes13727 = node.contents();
        oldNodes.replaceWith(nodes13727);
      }));
      callback(root15036); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13726;
      nodes13726 = node.contents();
      oldNodes.replaceWith(nodes13726);
    }));
    callback(root15027); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13717;
    nodes13717 = node.contents();
    oldNodes.replaceWith(nodes13717);
  }));
  callback(root15024); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root15038 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13728 = $("<span>");
  root15038.append(nodes13728);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15039 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13552 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13551 = mobl.ref(result__);
    
    var nodes13729 = $("<span>");
    root15039.append(nodes13729);
    subs__.addSub((ui.backButton)(tmp13551, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13552, function(_, callback) {
      var root15040 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15040); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13729;
      nodes13729 = node.contents();
      oldNodes.replaceWith(nodes13729);
    }));
    callback(root15039); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13728;
    nodes13728 = node.contents();
    oldNodes.replaceWith(nodes13728);
  }));
  var nodes13730 = $("<span>");
  root15038.append(nodes13730);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15041 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp13647 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13553 = mobl.ref(result__);
    
    var nodes13731 = $("<span>");
    root15041.append(nodes13731);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13553, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15042 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13732 = $("<span>");
      root15042.append(nodes13732);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15043 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15043); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13732;
        nodes13732 = node.contents();
        oldNodes.replaceWith(nodes13732);
      }));
      callback(root15042); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13731;
      nodes13731 = node.contents();
      oldNodes.replaceWith(nodes13731);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp13646 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13554 = mobl.ref(result__);
    
    var nodes13733 = $("<span>");
    root15041.append(nodes13733);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13554, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15044 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13734 = $("<span>");
      root15044.append(nodes13734);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15045 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15045); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13734;
        nodes13734 = node.contents();
        oldNodes.replaceWith(nodes13734);
      }));
      callback(root15044); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13733;
      nodes13733 = node.contents();
      oldNodes.replaceWith(nodes13733);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp13645 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13555 = mobl.ref(result__);
    
    var nodes13735 = $("<span>");
    root15041.append(nodes13735);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13555, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15046 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13736 = $("<span>");
      root15046.append(nodes13736);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15047 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15047); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13736;
        nodes13736 = node.contents();
        oldNodes.replaceWith(nodes13736);
      }));
      callback(root15046); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13735;
      nodes13735 = node.contents();
      oldNodes.replaceWith(nodes13735);
    }));
    callback(root15041); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13730;
    nodes13730 = node.contents();
    oldNodes.replaceWith(nodes13730);
  }));
  callback(root15038); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root15048 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13737 = $("<span>");
  root15048.append(nodes13737);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15049 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13557 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13556 = mobl.ref(result__);
    
    var nodes13738 = $("<span>");
    root15049.append(nodes13738);
    subs__.addSub((ui.backButton)(tmp13556, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13557, function(_, callback) {
      var root15050 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15050); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13738;
      nodes13738 = node.contents();
      oldNodes.replaceWith(nodes13738);
    }));
    callback(root15049); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13737;
    nodes13737 = node.contents();
    oldNodes.replaceWith(nodes13737);
  }));
  var nodes13739 = $("<span>");
  root15048.append(nodes13739);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15051 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp13651 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13558 = mobl.ref(result__);
    
    var nodes13740 = $("<span>");
    root15051.append(nodes13740);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13558, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15052 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13741 = $("<span>");
      root15052.append(nodes13741);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15053 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15053); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13741;
        nodes13741 = node.contents();
        oldNodes.replaceWith(nodes13741);
      }));
      callback(root15052); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13740;
      nodes13740 = node.contents();
      oldNodes.replaceWith(nodes13740);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp13650 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13559 = mobl.ref(result__);
    
    var nodes13742 = $("<span>");
    root15051.append(nodes13742);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13559, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13743 = $("<span>");
      root15054.append(nodes13743);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15055 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15055); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13743;
        nodes13743 = node.contents();
        oldNodes.replaceWith(nodes13743);
      }));
      callback(root15054); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13742;
      nodes13742 = node.contents();
      oldNodes.replaceWith(nodes13742);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp13649 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13560 = mobl.ref(result__);
    
    var nodes13744 = $("<span>");
    root15051.append(nodes13744);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13560, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13745 = $("<span>");
      root15056.append(nodes13745);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15057 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15057); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13745;
        nodes13745 = node.contents();
        oldNodes.replaceWith(nodes13745);
      }));
      callback(root15056); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13744;
      nodes13744 = node.contents();
      oldNodes.replaceWith(nodes13744);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp13648 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13561 = mobl.ref(result__);
    
    var nodes13746 = $("<span>");
    root15051.append(nodes13746);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13561, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15058 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13747 = $("<span>");
      root15058.append(nodes13747);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15059 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15059); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13747;
        nodes13747 = node.contents();
        oldNodes.replaceWith(nodes13747);
      }));
      callback(root15058); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13746;
      nodes13746 = node.contents();
      oldNodes.replaceWith(nodes13746);
    }));
    callback(root15051); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13739;
    nodes13739 = node.contents();
    oldNodes.replaceWith(nodes13739);
  }));
  callback(root15048); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root15060 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13748 = $("<span>");
  root15060.append(nodes13748);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15061 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13563 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13562 = mobl.ref(result__);
    
    var nodes13749 = $("<span>");
    root15061.append(nodes13749);
    subs__.addSub((ui.backButton)(tmp13562, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13563, function(_, callback) {
      var root15062 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15062); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13749;
      nodes13749 = node.contents();
      oldNodes.replaceWith(nodes13749);
    }));
    callback(root15061); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13748;
    nodes13748 = node.contents();
    oldNodes.replaceWith(nodes13748);
  }));
  var nodes13750 = $("<span>");
  root15060.append(nodes13750);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15063 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp13653 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13564 = mobl.ref(result__);
    
    var nodes13751 = $("<span>");
    root15063.append(nodes13751);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13564, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15064 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13752 = $("<span>");
      root15064.append(nodes13752);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15065 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15065); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13752;
        nodes13752 = node.contents();
        oldNodes.replaceWith(nodes13752);
      }));
      callback(root15064); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13751;
      nodes13751 = node.contents();
      oldNodes.replaceWith(nodes13751);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp13652 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13565 = mobl.ref(result__);
    
    var nodes13753 = $("<span>");
    root15063.append(nodes13753);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13565, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15066 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13754 = $("<span>");
      root15066.append(nodes13754);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15067 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15067); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13754;
        nodes13754 = node.contents();
        oldNodes.replaceWith(nodes13754);
      }));
      callback(root15066); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13753;
      nodes13753 = node.contents();
      oldNodes.replaceWith(nodes13753);
    }));
    callback(root15063); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13750;
    nodes13750 = node.contents();
    oldNodes.replaceWith(nodes13750);
  }));
  callback(root15060); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root15068 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13755 = $("<span>");
  root15068.append(nodes13755);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15069 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13567 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13566 = mobl.ref(result__);
    
    var nodes13756 = $("<span>");
    root15069.append(nodes13756);
    subs__.addSub((ui.backButton)(tmp13566, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13567, function(_, callback) {
      var root15070 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15070); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13756;
      nodes13756 = node.contents();
      oldNodes.replaceWith(nodes13756);
    }));
    callback(root15069); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13755;
    nodes13755 = node.contents();
    oldNodes.replaceWith(nodes13755);
  }));
  var nodes13757 = $("<span>");
  root15068.append(nodes13757);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15071 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp13658 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13568 = mobl.ref(result__);
    
    var nodes13758 = $("<span>");
    root15071.append(nodes13758);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13568, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15072 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13759 = $("<span>");
      root15072.append(nodes13759);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15073 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15073); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13759;
        nodes13759 = node.contents();
        oldNodes.replaceWith(nodes13759);
      }));
      callback(root15072); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13758;
      nodes13758 = node.contents();
      oldNodes.replaceWith(nodes13758);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp13657 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13569 = mobl.ref(result__);
    
    var nodes13760 = $("<span>");
    root15071.append(nodes13760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13569, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15074 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13761 = $("<span>");
      root15074.append(nodes13761);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15075 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15075); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13761;
        nodes13761 = node.contents();
        oldNodes.replaceWith(nodes13761);
      }));
      callback(root15074); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13760;
      nodes13760 = node.contents();
      oldNodes.replaceWith(nodes13760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp13656 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13570 = mobl.ref(result__);
    
    var nodes13762 = $("<span>");
    root15071.append(nodes13762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13570, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15076 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13763 = $("<span>");
      root15076.append(nodes13763);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15077 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15077); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13763;
        nodes13763 = node.contents();
        oldNodes.replaceWith(nodes13763);
      }));
      callback(root15076); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13762;
      nodes13762 = node.contents();
      oldNodes.replaceWith(nodes13762);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp13655 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13571 = mobl.ref(result__);
    
    var nodes13764 = $("<span>");
    root15071.append(nodes13764);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13571, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15078 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13765 = $("<span>");
      root15078.append(nodes13765);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15079 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15079); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13765;
        nodes13765 = node.contents();
        oldNodes.replaceWith(nodes13765);
      }));
      callback(root15078); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13764;
      nodes13764 = node.contents();
      oldNodes.replaceWith(nodes13764);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp13654 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13572 = mobl.ref(result__);
    
    var nodes13766 = $("<span>");
    root15071.append(nodes13766);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13572, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15080 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13767 = $("<span>");
      root15080.append(nodes13767);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15081 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15081); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13767;
        nodes13767 = node.contents();
        oldNodes.replaceWith(nodes13767);
      }));
      callback(root15080); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13766;
      nodes13766 = node.contents();
      oldNodes.replaceWith(nodes13766);
    }));
    callback(root15071); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13757;
    nodes13757 = node.contents();
    oldNodes.replaceWith(nodes13757);
  }));
  callback(root15068); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root15082 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13768 = $("<span>");
  root15082.append(nodes13768);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15083 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13574 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13573 = mobl.ref(result__);
    
    var nodes13769 = $("<span>");
    root15083.append(nodes13769);
    subs__.addSub((ui.backButton)(tmp13573, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13574, function(_, callback) {
      var root15084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15084); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13769;
      nodes13769 = node.contents();
      oldNodes.replaceWith(nodes13769);
    }));
    callback(root15083); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13768;
    nodes13768 = node.contents();
    oldNodes.replaceWith(nodes13768);
  }));
  var nodes13770 = $("<span>");
  root15082.append(nodes13770);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15085 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp13661 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13575 = mobl.ref(result__);
    
    var nodes13771 = $("<span>");
    root15085.append(nodes13771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13575, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15086 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13772 = $("<span>");
      root15086.append(nodes13772);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15087 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15087); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13772;
        nodes13772 = node.contents();
        oldNodes.replaceWith(nodes13772);
      }));
      callback(root15086); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13771;
      nodes13771 = node.contents();
      oldNodes.replaceWith(nodes13771);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp13660 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13576 = mobl.ref(result__);
    
    var nodes13773 = $("<span>");
    root15085.append(nodes13773);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13576, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15088 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13774 = $("<span>");
      root15088.append(nodes13774);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15089 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15089); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13774;
        nodes13774 = node.contents();
        oldNodes.replaceWith(nodes13774);
      }));
      callback(root15088); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13773;
      nodes13773 = node.contents();
      oldNodes.replaceWith(nodes13773);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp13659 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13577 = mobl.ref(result__);
    
    var nodes13775 = $("<span>");
    root15085.append(nodes13775);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13577, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15090 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13776 = $("<span>");
      root15090.append(nodes13776);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15091 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15091); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13776;
        nodes13776 = node.contents();
        oldNodes.replaceWith(nodes13776);
      }));
      callback(root15090); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13775;
      nodes13775 = node.contents();
      oldNodes.replaceWith(nodes13775);
    }));
    callback(root15085); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13770;
    nodes13770 = node.contents();
    oldNodes.replaceWith(nodes13770);
  }));
  callback(root15082); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root15092 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13777 = $("<span>");
  root15092.append(nodes13777);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15093 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13579 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13578 = mobl.ref(result__);
    
    var nodes13778 = $("<span>");
    root15093.append(nodes13778);
    subs__.addSub((ui.backButton)(tmp13578, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13579, function(_, callback) {
      var root15094 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15094); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13778;
      nodes13778 = node.contents();
      oldNodes.replaceWith(nodes13778);
    }));
    callback(root15093); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13777;
    nodes13777 = node.contents();
    oldNodes.replaceWith(nodes13777);
  }));
  var nodes13779 = $("<span>");
  root15092.append(nodes13779);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15095 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp13662 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13580 = mobl.ref(result__);
    
    var nodes13780 = $("<span>");
    root15095.append(nodes13780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13580, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15096 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13781 = $("<span>");
      root15096.append(nodes13781);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15097 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15097); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13781;
        nodes13781 = node.contents();
        oldNodes.replaceWith(nodes13781);
      }));
      callback(root15096); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13780;
      nodes13780 = node.contents();
      oldNodes.replaceWith(nodes13780);
    }));
    callback(root15095); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13779;
    nodes13779 = node.contents();
    oldNodes.replaceWith(nodes13779);
  }));
  callback(root15092); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root15098 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes13782 = $("<span>");
  root15098.append(nodes13782);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15099 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp13675 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13581 = mobl.ref(result__);
    
    var nodes13783 = $("<span>");
    root15099.append(nodes13783);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13581, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13784 = $("<span>");
      root15100.append(nodes13784);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15101 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15101); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13784;
        nodes13784 = node.contents();
        oldNodes.replaceWith(nodes13784);
      }));
      callback(root15100); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13783;
      nodes13783 = node.contents();
      oldNodes.replaceWith(nodes13783);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp13674 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13582 = mobl.ref(result__);
    
    var nodes13785 = $("<span>");
    root15099.append(nodes13785);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13582, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13786 = $("<span>");
      root15102.append(nodes13786);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15103 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15103); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13786;
        nodes13786 = node.contents();
        oldNodes.replaceWith(nodes13786);
      }));
      callback(root15102); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13785;
      nodes13785 = node.contents();
      oldNodes.replaceWith(nodes13785);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp13673 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13583 = mobl.ref(result__);
    
    var nodes13787 = $("<span>");
    root15099.append(nodes13787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13583, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13788 = $("<span>");
      root15104.append(nodes13788);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15105 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15105); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13788;
        nodes13788 = node.contents();
        oldNodes.replaceWith(nodes13788);
      }));
      callback(root15104); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13787;
      nodes13787 = node.contents();
      oldNodes.replaceWith(nodes13787);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp13672 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13584 = mobl.ref(result__);
    
    var nodes13789 = $("<span>");
    root15099.append(nodes13789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13584, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15106 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13790 = $("<span>");
      root15106.append(nodes13790);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15107 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15107); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13790;
        nodes13790 = node.contents();
        oldNodes.replaceWith(nodes13790);
      }));
      callback(root15106); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13789;
      nodes13789 = node.contents();
      oldNodes.replaceWith(nodes13789);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp13671 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13585 = mobl.ref(result__);
    
    var nodes13791 = $("<span>");
    root15099.append(nodes13791);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13585, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13792 = $("<span>");
      root15108.append(nodes13792);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15109 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15109); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13792;
        nodes13792 = node.contents();
        oldNodes.replaceWith(nodes13792);
      }));
      callback(root15108); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13791;
      nodes13791 = node.contents();
      oldNodes.replaceWith(nodes13791);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp13670 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13586 = mobl.ref(result__);
    
    var nodes13793 = $("<span>");
    root15099.append(nodes13793);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13586, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15110 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13794 = $("<span>");
      root15110.append(nodes13794);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15111 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15111); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13794;
        nodes13794 = node.contents();
        oldNodes.replaceWith(nodes13794);
      }));
      callback(root15110); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13793;
      nodes13793 = node.contents();
      oldNodes.replaceWith(nodes13793);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp13669 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13587 = mobl.ref(result__);
    
    var nodes13795 = $("<span>");
    root15099.append(nodes13795);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13587, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15112 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13796 = $("<span>");
      root15112.append(nodes13796);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15113 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15113); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13796;
        nodes13796 = node.contents();
        oldNodes.replaceWith(nodes13796);
      }));
      callback(root15112); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13795;
      nodes13795 = node.contents();
      oldNodes.replaceWith(nodes13795);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp13668 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13588 = mobl.ref(result__);
    
    var nodes13797 = $("<span>");
    root15099.append(nodes13797);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13588, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13798 = $("<span>");
      root15114.append(nodes13798);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15115 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15115); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13798;
        nodes13798 = node.contents();
        oldNodes.replaceWith(nodes13798);
      }));
      callback(root15114); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13797;
      nodes13797 = node.contents();
      oldNodes.replaceWith(nodes13797);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp13667 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13589 = mobl.ref(result__);
    
    var nodes13799 = $("<span>");
    root15099.append(nodes13799);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13589, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15116 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13800 = $("<span>");
      root15116.append(nodes13800);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15117); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13800;
        nodes13800 = node.contents();
        oldNodes.replaceWith(nodes13800);
      }));
      callback(root15116); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13799;
      nodes13799 = node.contents();
      oldNodes.replaceWith(nodes13799);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp13666 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13590 = mobl.ref(result__);
    
    var nodes13801 = $("<span>");
    root15099.append(nodes13801);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13590, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15118 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13802 = $("<span>");
      root15118.append(nodes13802);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15119 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15119); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13802;
        nodes13802 = node.contents();
        oldNodes.replaceWith(nodes13802);
      }));
      callback(root15118); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13801;
      nodes13801 = node.contents();
      oldNodes.replaceWith(nodes13801);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp13665 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13591 = mobl.ref(result__);
    
    var nodes13803 = $("<span>");
    root15099.append(nodes13803);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13591, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15120 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13804 = $("<span>");
      root15120.append(nodes13804);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15121 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15121); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13804;
        nodes13804 = node.contents();
        oldNodes.replaceWith(nodes13804);
      }));
      callback(root15120); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13803;
      nodes13803 = node.contents();
      oldNodes.replaceWith(nodes13803);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp13664 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13592 = mobl.ref(result__);
    
    var nodes13805 = $("<span>");
    root15099.append(nodes13805);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13592, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15122 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13806 = $("<span>");
      root15122.append(nodes13806);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15123 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15123); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13806;
        nodes13806 = node.contents();
        oldNodes.replaceWith(nodes13806);
      }));
      callback(root15122); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13805;
      nodes13805 = node.contents();
      oldNodes.replaceWith(nodes13805);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp13663 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13593 = mobl.ref(result__);
    
    var nodes13807 = $("<span>");
    root15099.append(nodes13807);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13593, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15124 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13808 = $("<span>");
      root15124.append(nodes13808);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15125 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15125); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13808;
        nodes13808 = node.contents();
        oldNodes.replaceWith(nodes13808);
      }));
      callback(root15124); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13807;
      nodes13807 = node.contents();
      oldNodes.replaceWith(nodes13807);
    }));
    callback(root15099); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13782;
    nodes13782 = node.contents();
    oldNodes.replaceWith(nodes13782);
  }));
  callback(root15098); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root15126 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes13809 = $("<span>");
  root15126.append(nodes13809);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15127 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp13681 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13594 = mobl.ref(result__);
    
    var nodes13810 = $("<span>");
    root15127.append(nodes13810);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13594, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15128 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13811 = $("<span>");
      root15128.append(nodes13811);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15129 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15129); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13811;
        nodes13811 = node.contents();
        oldNodes.replaceWith(nodes13811);
      }));
      callback(root15128); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13810;
      nodes13810 = node.contents();
      oldNodes.replaceWith(nodes13810);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp13680 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13595 = mobl.ref(result__);
    
    var nodes13812 = $("<span>");
    root15127.append(nodes13812);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13595, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15130 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13813 = $("<span>");
      root15130.append(nodes13813);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15131 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15131); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13813;
        nodes13813 = node.contents();
        oldNodes.replaceWith(nodes13813);
      }));
      callback(root15130); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13812;
      nodes13812 = node.contents();
      oldNodes.replaceWith(nodes13812);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp13679 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13596 = mobl.ref(result__);
    
    var nodes13814 = $("<span>");
    root15127.append(nodes13814);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13596, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15132 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13815 = $("<span>");
      root15132.append(nodes13815);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15133 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15133); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13815;
        nodes13815 = node.contents();
        oldNodes.replaceWith(nodes13815);
      }));
      callback(root15132); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13814;
      nodes13814 = node.contents();
      oldNodes.replaceWith(nodes13814);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp13678 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13597 = mobl.ref(result__);
    
    var nodes13816 = $("<span>");
    root15127.append(nodes13816);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13597, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15134 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13817 = $("<span>");
      root15134.append(nodes13817);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15135 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15135); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13817;
        nodes13817 = node.contents();
        oldNodes.replaceWith(nodes13817);
      }));
      callback(root15134); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13816;
      nodes13816 = node.contents();
      oldNodes.replaceWith(nodes13816);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp13677 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13598 = mobl.ref(result__);
    
    var nodes13818 = $("<span>");
    root15127.append(nodes13818);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13598, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15136 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13819 = $("<span>");
      root15136.append(nodes13819);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15137 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15137); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13819;
        nodes13819 = node.contents();
        oldNodes.replaceWith(nodes13819);
      }));
      callback(root15136); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13818;
      nodes13818 = node.contents();
      oldNodes.replaceWith(nodes13818);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp13676 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13599 = mobl.ref(result__);
    
    var nodes13820 = $("<span>");
    root15127.append(nodes13820);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13599, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15138 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13821 = $("<span>");
      root15138.append(nodes13821);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15139 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15139); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13821;
        nodes13821 = node.contents();
        oldNodes.replaceWith(nodes13821);
      }));
      callback(root15138); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13820;
      nodes13820 = node.contents();
      oldNodes.replaceWith(nodes13820);
    }));
    callback(root15127); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13809;
    nodes13809 = node.contents();
    oldNodes.replaceWith(nodes13809);
  }));
  callback(root15126); return subs__;
  
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
  var root15140 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1037 = $("<div>");
  
  var ref740 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref740.get() !== null) {
    node1037.attr('class', ref740.get());
    subs__.addSub(ref740.addEventListener('change', function(_, ref, val) {
      node1037.attr('class', val);
    }));
    
  }
  subs__.addSub(ref740.rebind());
  
  var val272 = onclick.get();
  if(val272 !== null) {
    subs__.addSub(mobl.domBind(node1037, 'tap', val272));
  }
  
  
  var node1038 = $("<div>");
  
  var ref739 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref739.get() !== null) {
    node1038.attr('class', ref739.get());
    subs__.addSub(ref739.addEventListener('change', function(_, ref, val) {
      node1038.attr('class', val);
    }));
    
  }
  subs__.addSub(ref739.rebind());
  
  
  var node1039 = $("<div>");
  
  var ref737 = text;
  node1039.text(""+ref737.get());
  var ignore158 = false;
  subs__.addSub(ref737.addEventListener('change', function(_, ref, val) {
    if(ignore158) return;
    node1039.text(""+val);
  }));
  subs__.addSub(ref737.rebind());
  
  
  var ref738 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref738.get() !== null) {
    node1039.attr('class', ref738.get());
    subs__.addSub(ref738.addEventListener('change', function(_, ref, val) {
      node1039.attr('class', val);
    }));
    
  }
  subs__.addSub(ref738.rebind());
  
  node1038.append(node1039);
  node1037.append(node1038);
  var nodes13822 = $("<span>");
  node1037.append(nodes13822);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl212();
  }));
  
  function renderControl212() {
    subs__.addSub((elements)(function(elements, callback) {
      var root15141 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15141); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13822;
      nodes13822 = node.contents();
      oldNodes.replaceWith(nodes13822);
    }));
  }
  renderControl212();
  root15140.append(node1037);
  callback(root15140); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp13682 = result__;
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
  var root15142 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1040 = $("<span>");
  root15142.append(node1040);
  var condSubs383 = new mobl.CompSubscription();
  subs__.addSub(condSubs383);
  var oldValue383;
  var renderCond383 = function() {
    var value627 = qa.get().correct;
    if(oldValue383 === value627) return;
    oldValue383 = value627;
    var subs__ = condSubs383;
    subs__.unsubscribe();
    node1040.empty();
    if(value627) {
      var nodes13823 = $("<span>");
      node1040.append(nodes13823);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15143 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp13603 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp13603.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1041 = $("<span>");
        root15143.append(node1041);
        var condSubs384 = new mobl.CompSubscription();
        subs__.addSub(condSubs384);
        var oldValue384;
        var renderCond384 = function() {
          var value628 = tmp13603.get();
          if(oldValue384 === value628) return;
          oldValue384 = value628;
          var subs__ = condSubs384;
          subs__.unsubscribe();
          node1041.empty();
          if(value628) {
            var result__ = "A" + number.get() + ". ";
            var tmp13600 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp13600.set("A" + number.get() + ". ");
            }));
            
            var nodes13824 = $("<span>");
            node1041.append(nodes13824);
            subs__.addSub((mobl.label)(tmp13600, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15144 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15144); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13824;
              nodes13824 = node.contents();
              oldNodes.replaceWith(nodes13824);
            }));
            
            var node1042 = $("<span>");
            
            var ref741 = mobl.ref("A" + number.get());
            if(ref741.get() !== null) {
              node1042.attr('id', ref741.get());
              subs__.addSub(ref741.addEventListener('change', function(_, ref, val) {
                node1042.attr('id', val);
              }));
              subs__.addSub(number.addEventListener('change', function() {
                node1042.attr('id', "A" + number.get());
              }));
              
            }
            subs__.addSub(ref741.rebind());
            
            var ref742 = mobl.ref(qa, 'answer');
            node1042.text(""+ref742.get());
            var ignore159 = false;
            subs__.addSub(ref742.addEventListener('change', function(_, ref, val) {
              if(ignore159) return;
              node1042.text(""+val);
            }));
            subs__.addSub(ref742.rebind());
            
            
            node1041.append(node1042);
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp13601 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp13601.set("A" + number.get() + ". ");
            }));
            
            var nodes13825 = $("<span>");
            node1041.append(nodes13825);
            subs__.addSub((mobl.label)(tmp13601, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15145 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15145); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13825;
              nodes13825 = node.contents();
              oldNodes.replaceWith(nodes13825);
            }));
            var nodes13826 = $("<span>");
            node1041.append(nodes13826);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root15146 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15146); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13826;
              nodes13826 = node.contents();
              oldNodes.replaceWith(nodes13826);
            }));
            
            var node1043 = $("<span>");
            node1043.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp13684 = result__;
              var tmp13602 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp13683 = result__;
                  var result__ = tmp13683;
                  tmp13602.set(result__);
                  
                });
              }));
              
              var nodes13827 = $("<span>");
              node1043.append(nodes13827);
              subs__.addSub((mobl.html)(tmp13602, function(_, callback) {
                var root15147 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root15147); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes13827;
                nodes13827 = node.contents();
                oldNodes.replaceWith(nodes13827);
              }));
              node1041.append(node1043);
              
              
            });
            
            
            
          }
        };
        renderCond384();
        subs__.addSub(tmp13603.addEventListener('change', function() {
          renderCond384();
        }));
        
        callback(root15143); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13823;
        nodes13823 = node.contents();
        oldNodes.replaceWith(nodes13823);
      }));
      
      
    } else {
      var nodes13828 = $("<span>");
      node1040.append(nodes13828);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15148 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp13607 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp13607.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1044 = $("<span>");
        root15148.append(node1044);
        var condSubs385 = new mobl.CompSubscription();
        subs__.addSub(condSubs385);
        var oldValue385;
        var renderCond385 = function() {
          var value629 = tmp13607.get();
          if(oldValue385 === value629) return;
          oldValue385 = value629;
          var subs__ = condSubs385;
          subs__.unsubscribe();
          node1044.empty();
          if(value629) {
            var result__ = "A" + number.get() + ". ";
            var tmp13604 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp13604.set("A" + number.get() + ". ");
            }));
            
            var nodes13829 = $("<span>");
            node1044.append(nodes13829);
            subs__.addSub((mobl.label)(tmp13604, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15149 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15149); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13829;
              nodes13829 = node.contents();
              oldNodes.replaceWith(nodes13829);
            }));
            
            var node1045 = $("<span>");
            
            var ref743 = mobl.ref("A" + number.get());
            if(ref743.get() !== null) {
              node1045.attr('id', ref743.get());
              subs__.addSub(ref743.addEventListener('change', function(_, ref, val) {
                node1045.attr('id', val);
              }));
              subs__.addSub(number.addEventListener('change', function() {
                node1045.attr('id', "A" + number.get());
              }));
              
            }
            subs__.addSub(ref743.rebind());
            
            var ref744 = mobl.ref(qa, 'answer');
            node1045.text(""+ref744.get());
            var ignore160 = false;
            subs__.addSub(ref744.addEventListener('change', function(_, ref, val) {
              if(ignore160) return;
              node1045.text(""+val);
            }));
            subs__.addSub(ref744.rebind());
            
            
            node1044.append(node1045);
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp13605 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp13605.set("A" + number.get() + ". ");
            }));
            
            var nodes13830 = $("<span>");
            node1044.append(nodes13830);
            subs__.addSub((mobl.label)(tmp13605, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15150 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15150); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13830;
              nodes13830 = node.contents();
              oldNodes.replaceWith(nodes13830);
            }));
            var nodes13831 = $("<span>");
            node1044.append(nodes13831);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root15151 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15151); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13831;
              nodes13831 = node.contents();
              oldNodes.replaceWith(nodes13831);
            }));
            
            var node1046 = $("<span>");
            node1046.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp13686 = result__;
              var tmp13606 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp13685 = result__;
                  var result__ = tmp13685;
                  tmp13606.set(result__);
                  
                });
              }));
              
              var nodes13832 = $("<span>");
              node1046.append(nodes13832);
              subs__.addSub((mobl.html)(tmp13606, function(_, callback) {
                var root15152 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root15152); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes13832;
                nodes13832 = node.contents();
                oldNodes.replaceWith(nodes13832);
              }));
              node1044.append(node1046);
              
              
            });
            
            
            
          }
        };
        renderCond385();
        subs__.addSub(tmp13607.addEventListener('change', function() {
          renderCond385();
        }));
        
        callback(root15148); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13828;
        nodes13828 = node.contents();
        oldNodes.replaceWith(nodes13828);
      }));
      
      
    }
  };
  renderCond383();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond383();
  }));
  
  var nodes13833 = $("<span>");
  root15142.append(nodes13833);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root15153 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1047 = $("<span>");
    node1047.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp13688 = result__;
      var tmp13608 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp13687 = result__;
          var result__ = tmp13687;
          tmp13608.set(result__);
          
        });
      }));
      
      var nodes13837 = $("<span>");
      node1047.append(nodes13837);
      subs__.addSub((mobl.html)(tmp13608, function(_, callback) {
        var root15157 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15157); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13837;
        nodes13837 = node.contents();
        oldNodes.replaceWith(nodes13837);
      }));
      root15153.append(node1047);
      var nodes13834 = $("<span>");
      root15153.append(nodes13834);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15154 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15154); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13834;
        nodes13834 = node.contents();
        oldNodes.replaceWith(nodes13834);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp13609 = mobl.ref(result__);
      
      var nodes13835 = $("<span>");
      root15153.append(nodes13835);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp13609, function(_, callback) {
        var root15155 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15155); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13835;
        nodes13835 = node.contents();
        oldNodes.replaceWith(nodes13835);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp13610 = mobl.ref(result__);
      
      var nodes13836 = $("<span>");
      root15153.append(nodes13836);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp13610, function(_, callback) {
        var root15156 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15156); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13836;
        nodes13836 = node.contents();
        oldNodes.replaceWith(nodes13836);
      }));
      callback(root15153); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13833;
    nodes13833 = node.contents();
    oldNodes.replaceWith(nodes13833);
  }));
  callback(root15142); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp13689 = result__;
    var result__ = tmp13689;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp13690 = result__;
        var result__ = tmp13690;
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
  var root15158 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp13698 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp13612 = mobl.ref(result__);
  
  var nodes13838 = $("<span>");
  root15158.append(nodes13838);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp13612, function(_, callback) {
    var root15159 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp13691 = result__;
                       var result__ = tmp13691;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp13692 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp13611 = mobl.ref(result__);
    
    var nodes13839 = $("<span>");
    root15159.append(nodes13839);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp13611, function(_, callback) {
      var root15160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15160); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13839;
      nodes13839 = node.contents();
      oldNodes.replaceWith(nodes13839);
    }));
    callback(root15159); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13838;
    nodes13838 = node.contents();
    oldNodes.replaceWith(nodes13838);
  }));
  var nodes13840 = $("<span>");
  root15158.append(nodes13840);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15161 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp13697 = result__;
                       var result__ = mobl.$("#Q" + number.get()).html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13615 = mobl.ref(result__);
    
    var nodes13841 = $("<span>");
    root15161.append(nodes13841);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp13615, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root15162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp13613 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp13613.set("Q" + number.get() + ". ");
      }));
      
      var nodes13842 = $("<span>");
      root15162.append(nodes13842);
      subs__.addSub((mobl.html)(tmp13613, function(_, callback) {
        var root15163 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15163); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13842;
        nodes13842 = node.contents();
        oldNodes.replaceWith(nodes13842);
      }));
      
      var node1048 = $("<span>");
      
      var ref745 = mobl.ref("Q" + number.get());
      if(ref745.get() !== null) {
        node1048.attr('id', ref745.get());
        subs__.addSub(ref745.addEventListener('change', function(_, ref, val) {
          node1048.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1048.attr('id', "Q" + number.get());
        }));
        
      }
      subs__.addSub(ref745.rebind());
      
      var ref746 = mobl.ref(qa, 'question');
      node1048.text(""+ref746.get());
      var ignore161 = false;
      subs__.addSub(ref746.addEventListener('change', function(_, ref, val) {
        if(ignore161) return;
        node1048.text(""+val);
      }));
      subs__.addSub(ref746.rebind());
      
      
      root15162.append(node1048);
      
      var node1049 = $("<span>");
      node1049.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp13694 = result__;
        var tmp13614 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp13693 = result__;
            var result__ = tmp13693;
            tmp13614.set(result__);
            
          });
        }));
        
        var nodes13843 = $("<span>");
        node1049.append(nodes13843);
        subs__.addSub((mobl.html)(tmp13614, function(_, callback) {
          var root15164 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root15164); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes13843;
          nodes13843 = node.contents();
          oldNodes.replaceWith(nodes13843);
        }));
        root15162.append(node1049);
        callback(root15162); return subs__;
        
      });
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13841;
      nodes13841 = node.contents();
      oldNodes.replaceWith(nodes13841);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp13696 = result__;
                       var result__ = mobl.$("#A" + number.get()).html();
                       qa.get().answer = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13617 = mobl.ref(result__);
    
    var nodes13844 = $("<span>");
    root15161.append(nodes13844);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13617, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root15165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13845 = $("<span>");
      root15165.append(nodes13845);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15166 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp13695 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp13616 = mobl.ref(result__);
        
        var nodes13846 = $("<span>");
        root15166.append(nodes13846);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp13616, function(_, callback) {
          var root15167 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root15167); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes13846;
          nodes13846 = node.contents();
          oldNodes.replaceWith(nodes13846);
        }));
        callback(root15166); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13845;
        nodes13845 = node.contents();
        oldNodes.replaceWith(nodes13845);
      }));
      
      var node1050 = $("<span>");
      root15165.append(node1050);
      var condSubs386 = new mobl.CompSubscription();
      subs__.addSub(condSubs386);
      var oldValue386;
      var renderCond386 = function() {
        var value630 = qa.get().done;
        if(oldValue386 === value630) return;
        oldValue386 = value630;
        var subs__ = condSubs386;
        subs__.unsubscribe();
        node1050.empty();
        if(value630) {
          var nodes13847 = $("<span>");
          node1050.append(nodes13847);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root15168 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root15168); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes13847;
            nodes13847 = node.contents();
            oldNodes.replaceWith(nodes13847);
          }));
          
          
        } else {
          
        }
      };
      renderCond386();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond386();
      }));
      
      callback(root15165); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13844;
      nodes13844 = node.contents();
      oldNodes.replaceWith(nodes13844);
    }));
    callback(root15161); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13840;
    nodes13840 = node.contents();
    oldNodes.replaceWith(nodes13840);
  }));
  callback(root15158); return subs__;
  
  
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
  qas.list(function(coll855) {
    coll855 = coll855.reverse();
    function processOne489() {
      var item;
      item = coll855.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll855.length > 0) processOne489(); else rest489();
      
    }
    function rest489() {
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
    if(coll855.length > 0) processOne489(); else rest489();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll856) {
    coll856 = coll856.reverse();
    function processOne490() {
      var item;
      item = coll856.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll856.length > 0) processOne490(); else rest490();
      
    }
    function rest490() {
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
    if(coll856.length > 0) processOne490(); else rest490();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll857) {
    coll857 = coll857.reverse();
    function processOne491() {
      var item;
      item = coll857.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll857.length > 0) processOne491(); else rest491();
      
    }
    function rest491() {
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
    if(coll857.length > 0) processOne491(); else rest491();
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