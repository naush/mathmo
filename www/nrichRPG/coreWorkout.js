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
    var tmp2711 = result__;
    var result__ = tmp2711;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp2712 = result__;
      var result__ = tmp2712;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp2713 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll279) {
    coll279 = coll279.reverse();
    function processOne93() {
      var i;
      i = coll279.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp2714 = result__;
        
        if(coll279.length > 0) processOne93(); else rest93();
        
      });
    }
    function rest93() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll279.length > 0) processOne93(); else rest93();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll280) {
    coll280 = coll280.reverse();
    function processOne94() {
      var i;
      i = coll280.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp2715 = result__;
          
          if(coll280.length > 0) processOne94(); else rest94();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp2715 = result__;
            
            if(coll280.length > 0) processOne94(); else rest94();
            
          });
        }
      }
    }
    function rest94() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll280.length > 0) processOne94(); else rest94();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll281) {
    coll281 = coll281.reverse();
    function processOne95() {
      var i;
      i = coll281.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp2716 = result__;
        
        if(coll281.length > 0) processOne95(); else rest95();
        
      });
    }
    function rest95() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll281.length > 0) processOne95(); else rest95();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root3111 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2681 = $("<span>");
  root3111.append(nodes2681);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3112 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2724 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2623 = mobl.ref(result__);
    
    var nodes2682 = $("<span>");
    root3112.append(nodes2682);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2623, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3113 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2683 = $("<span>");
      root3113.append(nodes2683);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3114 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3114); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2683;
        nodes2683 = node.contents();
        oldNodes.replaceWith(nodes2683);
      }));
      callback(root3113); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2682;
      nodes2682 = node.contents();
      oldNodes.replaceWith(nodes2682);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2723 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2624 = mobl.ref(result__);
    
    var nodes2684 = $("<span>");
    root3112.append(nodes2684);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2624, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3115 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2685 = $("<span>");
      root3115.append(nodes2685);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3116); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2685;
        nodes2685 = node.contents();
        oldNodes.replaceWith(nodes2685);
      }));
      callback(root3115); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2684;
      nodes2684 = node.contents();
      oldNodes.replaceWith(nodes2684);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2722 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2625 = mobl.ref(result__);
    
    var nodes2686 = $("<span>");
    root3112.append(nodes2686);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2625, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3117 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2687 = $("<span>");
      root3117.append(nodes2687);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3118 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3118); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2687;
        nodes2687 = node.contents();
        oldNodes.replaceWith(nodes2687);
      }));
      callback(root3117); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2686;
      nodes2686 = node.contents();
      oldNodes.replaceWith(nodes2686);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2721 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2626 = mobl.ref(result__);
    
    var nodes2688 = $("<span>");
    root3112.append(nodes2688);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2626, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3119 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2689 = $("<span>");
      root3119.append(nodes2689);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3120 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3120); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2689;
        nodes2689 = node.contents();
        oldNodes.replaceWith(nodes2689);
      }));
      callback(root3119); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2688;
      nodes2688 = node.contents();
      oldNodes.replaceWith(nodes2688);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2720 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2627 = mobl.ref(result__);
    
    var nodes2690 = $("<span>");
    root3112.append(nodes2690);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2627, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3121 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2691 = $("<span>");
      root3121.append(nodes2691);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3122 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3122); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2691;
        nodes2691 = node.contents();
        oldNodes.replaceWith(nodes2691);
      }));
      callback(root3121); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2690;
      nodes2690 = node.contents();
      oldNodes.replaceWith(nodes2690);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2719 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2628 = mobl.ref(result__);
    
    var nodes2692 = $("<span>");
    root3112.append(nodes2692);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2628, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3123 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2693 = $("<span>");
      root3123.append(nodes2693);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3124 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3124); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2693;
        nodes2693 = node.contents();
        oldNodes.replaceWith(nodes2693);
      }));
      callback(root3123); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2692;
      nodes2692 = node.contents();
      oldNodes.replaceWith(nodes2692);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2718 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2629 = mobl.ref(result__);
    
    var nodes2694 = $("<span>");
    root3112.append(nodes2694);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2629, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3125 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2695 = $("<span>");
      root3125.append(nodes2695);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3126 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3126); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2695;
        nodes2695 = node.contents();
        oldNodes.replaceWith(nodes2695);
      }));
      callback(root3125); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2694;
      nodes2694 = node.contents();
      oldNodes.replaceWith(nodes2694);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2717 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2630 = mobl.ref(result__);
    
    var nodes2696 = $("<span>");
    root3112.append(nodes2696);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2630, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3127 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2697 = $("<span>");
      root3127.append(nodes2697);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3128 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3128); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2697;
        nodes2697 = node.contents();
        oldNodes.replaceWith(nodes2697);
      }));
      callback(root3127); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2696;
      nodes2696 = node.contents();
      oldNodes.replaceWith(nodes2696);
    }));
    callback(root3112); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2681;
    nodes2681 = node.contents();
    oldNodes.replaceWith(nodes2681);
  }));
  callback(root3111); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root3129 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes2698 = $("<span>");
  root3129.append(nodes2698);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3130 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2632 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2631 = mobl.ref(result__);
    
    var nodes2699 = $("<span>");
    root3130.append(nodes2699);
    subs__.addSub((ui.backButton)(tmp2631, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2632, function(_, callback) {
      var root3131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3131); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2699;
      nodes2699 = node.contents();
      oldNodes.replaceWith(nodes2699);
    }));
    callback(root3130); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2698;
    nodes2698 = node.contents();
    oldNodes.replaceWith(nodes2698);
  }));
  var nodes2700 = $("<span>");
  root3129.append(nodes2700);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3132 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp2732 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2633 = mobl.ref(result__);
    
    var nodes2701 = $("<span>");
    root3132.append(nodes2701);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2633, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3133 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2702 = $("<span>");
      root3133.append(nodes2702);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3134 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3134); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2702;
        nodes2702 = node.contents();
        oldNodes.replaceWith(nodes2702);
      }));
      callback(root3133); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2701;
      nodes2701 = node.contents();
      oldNodes.replaceWith(nodes2701);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp2731 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2634 = mobl.ref(result__);
    
    var nodes2703 = $("<span>");
    root3132.append(nodes2703);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2634, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2704 = $("<span>");
      root3135.append(nodes2704);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3136 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3136); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2704;
        nodes2704 = node.contents();
        oldNodes.replaceWith(nodes2704);
      }));
      callback(root3135); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2703;
      nodes2703 = node.contents();
      oldNodes.replaceWith(nodes2703);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp2730 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2635 = mobl.ref(result__);
    
    var nodes2705 = $("<span>");
    root3132.append(nodes2705);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2635, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3137 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2706 = $("<span>");
      root3137.append(nodes2706);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3138 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3138); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2706;
        nodes2706 = node.contents();
        oldNodes.replaceWith(nodes2706);
      }));
      callback(root3137); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2705;
      nodes2705 = node.contents();
      oldNodes.replaceWith(nodes2705);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp2729 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2636 = mobl.ref(result__);
    
    var nodes2707 = $("<span>");
    root3132.append(nodes2707);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2636, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3139 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2708 = $("<span>");
      root3139.append(nodes2708);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3140 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3140); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2708;
        nodes2708 = node.contents();
        oldNodes.replaceWith(nodes2708);
      }));
      callback(root3139); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2707;
      nodes2707 = node.contents();
      oldNodes.replaceWith(nodes2707);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp2728 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2637 = mobl.ref(result__);
    
    var nodes2709 = $("<span>");
    root3132.append(nodes2709);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2637, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3141 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2710 = $("<span>");
      root3141.append(nodes2710);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3142); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2710;
        nodes2710 = node.contents();
        oldNodes.replaceWith(nodes2710);
      }));
      callback(root3141); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2709;
      nodes2709 = node.contents();
      oldNodes.replaceWith(nodes2709);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp2727 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2638 = mobl.ref(result__);
    
    var nodes2711 = $("<span>");
    root3132.append(nodes2711);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2638, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3143 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2712 = $("<span>");
      root3143.append(nodes2712);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3144); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2712;
        nodes2712 = node.contents();
        oldNodes.replaceWith(nodes2712);
      }));
      callback(root3143); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2711;
      nodes2711 = node.contents();
      oldNodes.replaceWith(nodes2711);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp2726 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2639 = mobl.ref(result__);
    
    var nodes2713 = $("<span>");
    root3132.append(nodes2713);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2639, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3145 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2714 = $("<span>");
      root3145.append(nodes2714);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3146 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3146); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2714;
        nodes2714 = node.contents();
        oldNodes.replaceWith(nodes2714);
      }));
      callback(root3145); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2713;
      nodes2713 = node.contents();
      oldNodes.replaceWith(nodes2713);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp2725 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2640 = mobl.ref(result__);
    
    var nodes2715 = $("<span>");
    root3132.append(nodes2715);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2640, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3147 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2716 = $("<span>");
      root3147.append(nodes2716);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3148 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3148); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2716;
        nodes2716 = node.contents();
        oldNodes.replaceWith(nodes2716);
      }));
      callback(root3147); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2715;
      nodes2715 = node.contents();
      oldNodes.replaceWith(nodes2715);
    }));
    callback(root3132); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2700;
    nodes2700 = node.contents();
    oldNodes.replaceWith(nodes2700);
  }));
  callback(root3129); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root3149 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2717 = $("<span>");
  root3149.append(nodes2717);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3150 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2642 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2641 = mobl.ref(result__);
    
    var nodes2718 = $("<span>");
    root3150.append(nodes2718);
    subs__.addSub((ui.backButton)(tmp2641, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2642, function(_, callback) {
      var root3151 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3151); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2718;
      nodes2718 = node.contents();
      oldNodes.replaceWith(nodes2718);
    }));
    callback(root3150); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2717;
    nodes2717 = node.contents();
    oldNodes.replaceWith(nodes2717);
  }));
  var nodes2719 = $("<span>");
  root3149.append(nodes2719);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3152 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp2737 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2643 = mobl.ref(result__);
    
    var nodes2720 = $("<span>");
    root3152.append(nodes2720);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2643, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3153 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2721 = $("<span>");
      root3153.append(nodes2721);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3154 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3154); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2721;
        nodes2721 = node.contents();
        oldNodes.replaceWith(nodes2721);
      }));
      callback(root3153); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2720;
      nodes2720 = node.contents();
      oldNodes.replaceWith(nodes2720);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp2736 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2644 = mobl.ref(result__);
    
    var nodes2722 = $("<span>");
    root3152.append(nodes2722);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2644, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3155 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2723 = $("<span>");
      root3155.append(nodes2723);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3156 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3156); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2723;
        nodes2723 = node.contents();
        oldNodes.replaceWith(nodes2723);
      }));
      callback(root3155); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2722;
      nodes2722 = node.contents();
      oldNodes.replaceWith(nodes2722);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp2735 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2645 = mobl.ref(result__);
    
    var nodes2724 = $("<span>");
    root3152.append(nodes2724);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2645, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3157 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2725 = $("<span>");
      root3157.append(nodes2725);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3158 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3158); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2725;
        nodes2725 = node.contents();
        oldNodes.replaceWith(nodes2725);
      }));
      callback(root3157); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2724;
      nodes2724 = node.contents();
      oldNodes.replaceWith(nodes2724);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp2734 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2646 = mobl.ref(result__);
    
    var nodes2726 = $("<span>");
    root3152.append(nodes2726);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2646, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3159 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2727 = $("<span>");
      root3159.append(nodes2727);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3160 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3160); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2727;
        nodes2727 = node.contents();
        oldNodes.replaceWith(nodes2727);
      }));
      callback(root3159); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2726;
      nodes2726 = node.contents();
      oldNodes.replaceWith(nodes2726);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp2733 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2647 = mobl.ref(result__);
    
    var nodes2728 = $("<span>");
    root3152.append(nodes2728);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2647, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3161 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2729 = $("<span>");
      root3161.append(nodes2729);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3162 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3162); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2729;
        nodes2729 = node.contents();
        oldNodes.replaceWith(nodes2729);
      }));
      callback(root3161); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2728;
      nodes2728 = node.contents();
      oldNodes.replaceWith(nodes2728);
    }));
    callback(root3152); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2719;
    nodes2719 = node.contents();
    oldNodes.replaceWith(nodes2719);
  }));
  callback(root3149); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root3163 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2730 = $("<span>");
  root3163.append(nodes2730);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3164 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2649 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2648 = mobl.ref(result__);
    
    var nodes2731 = $("<span>");
    root3164.append(nodes2731);
    subs__.addSub((ui.backButton)(tmp2648, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2649, function(_, callback) {
      var root3165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3165); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2731;
      nodes2731 = node.contents();
      oldNodes.replaceWith(nodes2731);
    }));
    callback(root3164); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2730;
    nodes2730 = node.contents();
    oldNodes.replaceWith(nodes2730);
  }));
  var nodes2732 = $("<span>");
  root3163.append(nodes2732);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3166 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp2740 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2650 = mobl.ref(result__);
    
    var nodes2733 = $("<span>");
    root3166.append(nodes2733);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2650, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2734 = $("<span>");
      root3167.append(nodes2734);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3168 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3168); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2734;
        nodes2734 = node.contents();
        oldNodes.replaceWith(nodes2734);
      }));
      callback(root3167); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2733;
      nodes2733 = node.contents();
      oldNodes.replaceWith(nodes2733);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp2739 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2651 = mobl.ref(result__);
    
    var nodes2735 = $("<span>");
    root3166.append(nodes2735);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2651, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3169 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2736 = $("<span>");
      root3169.append(nodes2736);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3170 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3170); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2736;
        nodes2736 = node.contents();
        oldNodes.replaceWith(nodes2736);
      }));
      callback(root3169); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2735;
      nodes2735 = node.contents();
      oldNodes.replaceWith(nodes2735);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp2738 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2652 = mobl.ref(result__);
    
    var nodes2737 = $("<span>");
    root3166.append(nodes2737);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2652, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3171 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2738 = $("<span>");
      root3171.append(nodes2738);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3172 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3172); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2738;
        nodes2738 = node.contents();
        oldNodes.replaceWith(nodes2738);
      }));
      callback(root3171); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2737;
      nodes2737 = node.contents();
      oldNodes.replaceWith(nodes2737);
    }));
    callback(root3166); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2732;
    nodes2732 = node.contents();
    oldNodes.replaceWith(nodes2732);
  }));
  callback(root3163); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root3173 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2739 = $("<span>");
  root3173.append(nodes2739);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3174 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2654 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2653 = mobl.ref(result__);
    
    var nodes2740 = $("<span>");
    root3174.append(nodes2740);
    subs__.addSub((ui.backButton)(tmp2653, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2654, function(_, callback) {
      var root3175 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3175); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2740;
      nodes2740 = node.contents();
      oldNodes.replaceWith(nodes2740);
    }));
    callback(root3174); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2739;
    nodes2739 = node.contents();
    oldNodes.replaceWith(nodes2739);
  }));
  var nodes2741 = $("<span>");
  root3173.append(nodes2741);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp2744 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2655 = mobl.ref(result__);
    
    var nodes2742 = $("<span>");
    root3176.append(nodes2742);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2655, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2743 = $("<span>");
      root3177.append(nodes2743);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3178 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3178); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2743;
        nodes2743 = node.contents();
        oldNodes.replaceWith(nodes2743);
      }));
      callback(root3177); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2742;
      nodes2742 = node.contents();
      oldNodes.replaceWith(nodes2742);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp2743 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2656 = mobl.ref(result__);
    
    var nodes2744 = $("<span>");
    root3176.append(nodes2744);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2656, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2745 = $("<span>");
      root3179.append(nodes2745);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3180 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3180); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2745;
        nodes2745 = node.contents();
        oldNodes.replaceWith(nodes2745);
      }));
      callback(root3179); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2744;
      nodes2744 = node.contents();
      oldNodes.replaceWith(nodes2744);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp2742 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2657 = mobl.ref(result__);
    
    var nodes2746 = $("<span>");
    root3176.append(nodes2746);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2657, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3181 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2747 = $("<span>");
      root3181.append(nodes2747);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3182 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3182); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2747;
        nodes2747 = node.contents();
        oldNodes.replaceWith(nodes2747);
      }));
      callback(root3181); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2746;
      nodes2746 = node.contents();
      oldNodes.replaceWith(nodes2746);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp2741 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2658 = mobl.ref(result__);
    
    var nodes2748 = $("<span>");
    root3176.append(nodes2748);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2658, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2749 = $("<span>");
      root3183.append(nodes2749);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3184); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2749;
        nodes2749 = node.contents();
        oldNodes.replaceWith(nodes2749);
      }));
      callback(root3183); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2748;
      nodes2748 = node.contents();
      oldNodes.replaceWith(nodes2748);
    }));
    callback(root3176); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2741;
    nodes2741 = node.contents();
    oldNodes.replaceWith(nodes2741);
  }));
  callback(root3173); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root3185 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2750 = $("<span>");
  root3185.append(nodes2750);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3186 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2660 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2659 = mobl.ref(result__);
    
    var nodes2751 = $("<span>");
    root3186.append(nodes2751);
    subs__.addSub((ui.backButton)(tmp2659, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2660, function(_, callback) {
      var root3187 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3187); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2751;
      nodes2751 = node.contents();
      oldNodes.replaceWith(nodes2751);
    }));
    callback(root3186); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2750;
    nodes2750 = node.contents();
    oldNodes.replaceWith(nodes2750);
  }));
  var nodes2752 = $("<span>");
  root3185.append(nodes2752);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3188 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp2746 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2661 = mobl.ref(result__);
    
    var nodes2753 = $("<span>");
    root3188.append(nodes2753);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2661, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3189 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2754 = $("<span>");
      root3189.append(nodes2754);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3190 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3190); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2754;
        nodes2754 = node.contents();
        oldNodes.replaceWith(nodes2754);
      }));
      callback(root3189); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2753;
      nodes2753 = node.contents();
      oldNodes.replaceWith(nodes2753);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp2745 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2662 = mobl.ref(result__);
    
    var nodes2755 = $("<span>");
    root3188.append(nodes2755);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2662, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3191 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2756 = $("<span>");
      root3191.append(nodes2756);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3192 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3192); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2756;
        nodes2756 = node.contents();
        oldNodes.replaceWith(nodes2756);
      }));
      callback(root3191); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2755;
      nodes2755 = node.contents();
      oldNodes.replaceWith(nodes2755);
    }));
    callback(root3188); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2752;
    nodes2752 = node.contents();
    oldNodes.replaceWith(nodes2752);
  }));
  callback(root3185); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root3193 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2757 = $("<span>");
  root3193.append(nodes2757);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3194 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2664 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2663 = mobl.ref(result__);
    
    var nodes2758 = $("<span>");
    root3194.append(nodes2758);
    subs__.addSub((ui.backButton)(tmp2663, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2664, function(_, callback) {
      var root3195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3195); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2758;
      nodes2758 = node.contents();
      oldNodes.replaceWith(nodes2758);
    }));
    callback(root3194); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2757;
    nodes2757 = node.contents();
    oldNodes.replaceWith(nodes2757);
  }));
  var nodes2759 = $("<span>");
  root3193.append(nodes2759);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3196 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp2751 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2665 = mobl.ref(result__);
    
    var nodes2760 = $("<span>");
    root3196.append(nodes2760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2665, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2761 = $("<span>");
      root3197.append(nodes2761);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3198 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3198); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2761;
        nodes2761 = node.contents();
        oldNodes.replaceWith(nodes2761);
      }));
      callback(root3197); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2760;
      nodes2760 = node.contents();
      oldNodes.replaceWith(nodes2760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp2750 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2666 = mobl.ref(result__);
    
    var nodes2762 = $("<span>");
    root3196.append(nodes2762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2666, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3199 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2763 = $("<span>");
      root3199.append(nodes2763);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3200 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3200); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2763;
        nodes2763 = node.contents();
        oldNodes.replaceWith(nodes2763);
      }));
      callback(root3199); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2762;
      nodes2762 = node.contents();
      oldNodes.replaceWith(nodes2762);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp2749 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2667 = mobl.ref(result__);
    
    var nodes2764 = $("<span>");
    root3196.append(nodes2764);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2667, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2765 = $("<span>");
      root3201.append(nodes2765);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3202 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3202); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2765;
        nodes2765 = node.contents();
        oldNodes.replaceWith(nodes2765);
      }));
      callback(root3201); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2764;
      nodes2764 = node.contents();
      oldNodes.replaceWith(nodes2764);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp2748 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2668 = mobl.ref(result__);
    
    var nodes2766 = $("<span>");
    root3196.append(nodes2766);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2668, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2767 = $("<span>");
      root3203.append(nodes2767);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3204 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3204); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2767;
        nodes2767 = node.contents();
        oldNodes.replaceWith(nodes2767);
      }));
      callback(root3203); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2766;
      nodes2766 = node.contents();
      oldNodes.replaceWith(nodes2766);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp2747 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2669 = mobl.ref(result__);
    
    var nodes2768 = $("<span>");
    root3196.append(nodes2768);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2669, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2769 = $("<span>");
      root3205.append(nodes2769);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3206 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3206); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2769;
        nodes2769 = node.contents();
        oldNodes.replaceWith(nodes2769);
      }));
      callback(root3205); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2768;
      nodes2768 = node.contents();
      oldNodes.replaceWith(nodes2768);
    }));
    callback(root3196); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2759;
    nodes2759 = node.contents();
    oldNodes.replaceWith(nodes2759);
  }));
  callback(root3193); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root3207 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2770 = $("<span>");
  root3207.append(nodes2770);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3208 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2671 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2670 = mobl.ref(result__);
    
    var nodes2771 = $("<span>");
    root3208.append(nodes2771);
    subs__.addSub((ui.backButton)(tmp2670, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2671, function(_, callback) {
      var root3209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3209); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2771;
      nodes2771 = node.contents();
      oldNodes.replaceWith(nodes2771);
    }));
    callback(root3208); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2770;
    nodes2770 = node.contents();
    oldNodes.replaceWith(nodes2770);
  }));
  var nodes2772 = $("<span>");
  root3207.append(nodes2772);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3210 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp2754 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2672 = mobl.ref(result__);
    
    var nodes2773 = $("<span>");
    root3210.append(nodes2773);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2672, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2774 = $("<span>");
      root3211.append(nodes2774);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3212 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3212); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2774;
        nodes2774 = node.contents();
        oldNodes.replaceWith(nodes2774);
      }));
      callback(root3211); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2773;
      nodes2773 = node.contents();
      oldNodes.replaceWith(nodes2773);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp2753 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2673 = mobl.ref(result__);
    
    var nodes2775 = $("<span>");
    root3210.append(nodes2775);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2673, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2776 = $("<span>");
      root3213.append(nodes2776);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3214 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3214); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2776;
        nodes2776 = node.contents();
        oldNodes.replaceWith(nodes2776);
      }));
      callback(root3213); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2775;
      nodes2775 = node.contents();
      oldNodes.replaceWith(nodes2775);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp2752 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2674 = mobl.ref(result__);
    
    var nodes2777 = $("<span>");
    root3210.append(nodes2777);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2674, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2778 = $("<span>");
      root3215.append(nodes2778);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3216); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2778;
        nodes2778 = node.contents();
        oldNodes.replaceWith(nodes2778);
      }));
      callback(root3215); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2777;
      nodes2777 = node.contents();
      oldNodes.replaceWith(nodes2777);
    }));
    callback(root3210); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2772;
    nodes2772 = node.contents();
    oldNodes.replaceWith(nodes2772);
  }));
  callback(root3207); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root3217 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2779 = $("<span>");
  root3217.append(nodes2779);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3218 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2676 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2675 = mobl.ref(result__);
    
    var nodes2780 = $("<span>");
    root3218.append(nodes2780);
    subs__.addSub((ui.backButton)(tmp2675, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2676, function(_, callback) {
      var root3219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3219); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2780;
      nodes2780 = node.contents();
      oldNodes.replaceWith(nodes2780);
    }));
    callback(root3218); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2779;
    nodes2779 = node.contents();
    oldNodes.replaceWith(nodes2779);
  }));
  var nodes2781 = $("<span>");
  root3217.append(nodes2781);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3220 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp2755 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2677 = mobl.ref(result__);
    
    var nodes2782 = $("<span>");
    root3220.append(nodes2782);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2677, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2783 = $("<span>");
      root3221.append(nodes2783);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3222 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3222); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2783;
        nodes2783 = node.contents();
        oldNodes.replaceWith(nodes2783);
      }));
      callback(root3221); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2782;
      nodes2782 = node.contents();
      oldNodes.replaceWith(nodes2782);
    }));
    callback(root3220); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2781;
    nodes2781 = node.contents();
    oldNodes.replaceWith(nodes2781);
  }));
  callback(root3217); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root3223 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2784 = $("<span>");
  root3223.append(nodes2784);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3224 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp2768 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2678 = mobl.ref(result__);
    
    var nodes2785 = $("<span>");
    root3224.append(nodes2785);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2678, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2786 = $("<span>");
      root3225.append(nodes2786);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3226 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3226); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2786;
        nodes2786 = node.contents();
        oldNodes.replaceWith(nodes2786);
      }));
      callback(root3225); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2785;
      nodes2785 = node.contents();
      oldNodes.replaceWith(nodes2785);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp2767 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2679 = mobl.ref(result__);
    
    var nodes2787 = $("<span>");
    root3224.append(nodes2787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2679, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2788 = $("<span>");
      root3227.append(nodes2788);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3228); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2788;
        nodes2788 = node.contents();
        oldNodes.replaceWith(nodes2788);
      }));
      callback(root3227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2787;
      nodes2787 = node.contents();
      oldNodes.replaceWith(nodes2787);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp2766 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2680 = mobl.ref(result__);
    
    var nodes2789 = $("<span>");
    root3224.append(nodes2789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2680, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2790 = $("<span>");
      root3229.append(nodes2790);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3230 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3230); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2790;
        nodes2790 = node.contents();
        oldNodes.replaceWith(nodes2790);
      }));
      callback(root3229); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2789;
      nodes2789 = node.contents();
      oldNodes.replaceWith(nodes2789);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp2765 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2681 = mobl.ref(result__);
    
    var nodes2791 = $("<span>");
    root3224.append(nodes2791);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2681, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2792 = $("<span>");
      root3231.append(nodes2792);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3232 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3232); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2792;
        nodes2792 = node.contents();
        oldNodes.replaceWith(nodes2792);
      }));
      callback(root3231); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2791;
      nodes2791 = node.contents();
      oldNodes.replaceWith(nodes2791);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp2764 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2682 = mobl.ref(result__);
    
    var nodes2793 = $("<span>");
    root3224.append(nodes2793);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2682, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2794 = $("<span>");
      root3233.append(nodes2794);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3234); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2794;
        nodes2794 = node.contents();
        oldNodes.replaceWith(nodes2794);
      }));
      callback(root3233); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2793;
      nodes2793 = node.contents();
      oldNodes.replaceWith(nodes2793);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp2763 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2683 = mobl.ref(result__);
    
    var nodes2795 = $("<span>");
    root3224.append(nodes2795);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2683, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2796 = $("<span>");
      root3235.append(nodes2796);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3236 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3236); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2796;
        nodes2796 = node.contents();
        oldNodes.replaceWith(nodes2796);
      }));
      callback(root3235); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2795;
      nodes2795 = node.contents();
      oldNodes.replaceWith(nodes2795);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp2762 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2684 = mobl.ref(result__);
    
    var nodes2797 = $("<span>");
    root3224.append(nodes2797);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2684, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2798 = $("<span>");
      root3237.append(nodes2798);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3238 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3238); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2798;
        nodes2798 = node.contents();
        oldNodes.replaceWith(nodes2798);
      }));
      callback(root3237); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2797;
      nodes2797 = node.contents();
      oldNodes.replaceWith(nodes2797);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp2761 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2685 = mobl.ref(result__);
    
    var nodes2799 = $("<span>");
    root3224.append(nodes2799);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2685, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2800 = $("<span>");
      root3239.append(nodes2800);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3240 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3240); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2800;
        nodes2800 = node.contents();
        oldNodes.replaceWith(nodes2800);
      }));
      callback(root3239); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2799;
      nodes2799 = node.contents();
      oldNodes.replaceWith(nodes2799);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp2760 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2686 = mobl.ref(result__);
    
    var nodes2801 = $("<span>");
    root3224.append(nodes2801);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2686, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2802 = $("<span>");
      root3241.append(nodes2802);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2802;
        nodes2802 = node.contents();
        oldNodes.replaceWith(nodes2802);
      }));
      callback(root3241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2801;
      nodes2801 = node.contents();
      oldNodes.replaceWith(nodes2801);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp2759 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2687 = mobl.ref(result__);
    
    var nodes2803 = $("<span>");
    root3224.append(nodes2803);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2687, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2804 = $("<span>");
      root3243.append(nodes2804);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2804;
        nodes2804 = node.contents();
        oldNodes.replaceWith(nodes2804);
      }));
      callback(root3243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2803;
      nodes2803 = node.contents();
      oldNodes.replaceWith(nodes2803);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp2758 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2688 = mobl.ref(result__);
    
    var nodes2805 = $("<span>");
    root3224.append(nodes2805);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2688, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2806 = $("<span>");
      root3245.append(nodes2806);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2806;
        nodes2806 = node.contents();
        oldNodes.replaceWith(nodes2806);
      }));
      callback(root3245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2805;
      nodes2805 = node.contents();
      oldNodes.replaceWith(nodes2805);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp2757 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2689 = mobl.ref(result__);
    
    var nodes2807 = $("<span>");
    root3224.append(nodes2807);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2689, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2808 = $("<span>");
      root3247.append(nodes2808);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2808;
        nodes2808 = node.contents();
        oldNodes.replaceWith(nodes2808);
      }));
      callback(root3247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2807;
      nodes2807 = node.contents();
      oldNodes.replaceWith(nodes2807);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp2756 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2690 = mobl.ref(result__);
    
    var nodes2809 = $("<span>");
    root3224.append(nodes2809);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2690, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3249 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2810 = $("<span>");
      root3249.append(nodes2810);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3250); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2810;
        nodes2810 = node.contents();
        oldNodes.replaceWith(nodes2810);
      }));
      callback(root3249); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2809;
      nodes2809 = node.contents();
      oldNodes.replaceWith(nodes2809);
    }));
    callback(root3224); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2784;
    nodes2784 = node.contents();
    oldNodes.replaceWith(nodes2784);
  }));
  callback(root3223); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root3251 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2811 = $("<span>");
  root3251.append(nodes2811);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3252 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp2774 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2691 = mobl.ref(result__);
    
    var nodes2812 = $("<span>");
    root3252.append(nodes2812);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2691, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2813 = $("<span>");
      root3253.append(nodes2813);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3254 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3254); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2813;
        nodes2813 = node.contents();
        oldNodes.replaceWith(nodes2813);
      }));
      callback(root3253); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2812;
      nodes2812 = node.contents();
      oldNodes.replaceWith(nodes2812);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp2773 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2692 = mobl.ref(result__);
    
    var nodes2814 = $("<span>");
    root3252.append(nodes2814);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2692, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2815 = $("<span>");
      root3255.append(nodes2815);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3256); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2815;
        nodes2815 = node.contents();
        oldNodes.replaceWith(nodes2815);
      }));
      callback(root3255); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2814;
      nodes2814 = node.contents();
      oldNodes.replaceWith(nodes2814);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp2772 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2693 = mobl.ref(result__);
    
    var nodes2816 = $("<span>");
    root3252.append(nodes2816);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2693, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2817 = $("<span>");
      root3257.append(nodes2817);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2817;
        nodes2817 = node.contents();
        oldNodes.replaceWith(nodes2817);
      }));
      callback(root3257); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2816;
      nodes2816 = node.contents();
      oldNodes.replaceWith(nodes2816);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp2771 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2694 = mobl.ref(result__);
    
    var nodes2818 = $("<span>");
    root3252.append(nodes2818);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2694, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2819 = $("<span>");
      root3259.append(nodes2819);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3260 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3260); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2819;
        nodes2819 = node.contents();
        oldNodes.replaceWith(nodes2819);
      }));
      callback(root3259); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2818;
      nodes2818 = node.contents();
      oldNodes.replaceWith(nodes2818);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp2770 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2695 = mobl.ref(result__);
    
    var nodes2820 = $("<span>");
    root3252.append(nodes2820);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2695, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2821 = $("<span>");
      root3261.append(nodes2821);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3262 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3262); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2821;
        nodes2821 = node.contents();
        oldNodes.replaceWith(nodes2821);
      }));
      callback(root3261); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2820;
      nodes2820 = node.contents();
      oldNodes.replaceWith(nodes2820);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp2769 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2696 = mobl.ref(result__);
    
    var nodes2822 = $("<span>");
    root3252.append(nodes2822);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2696, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2823 = $("<span>");
      root3263.append(nodes2823);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3264 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3264); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2823;
        nodes2823 = node.contents();
        oldNodes.replaceWith(nodes2823);
      }));
      callback(root3263); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2822;
      nodes2822 = node.contents();
      oldNodes.replaceWith(nodes2822);
    }));
    callback(root3252); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2811;
    nodes2811 = node.contents();
    oldNodes.replaceWith(nodes2811);
  }));
  callback(root3251); return subs__;
  
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
  var root3265 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node437 = $("<div>");
  
  var ref426 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref426.get() !== null) {
    node437.attr('class', ref426.get());
    subs__.addSub(ref426.addEventListener('change', function(_, ref, val) {
      node437.attr('class', val);
    }));
    
  }
  subs__.addSub(ref426.rebind());
  
  var val188 = onclick.get();
  if(val188 !== null) {
    subs__.addSub(mobl.domBind(node437, 'tap', val188));
  }
  
  
  var node438 = $("<div>");
  
  var ref425 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref425.get() !== null) {
    node438.attr('class', ref425.get());
    subs__.addSub(ref425.addEventListener('change', function(_, ref, val) {
      node438.attr('class', val);
    }));
    
  }
  subs__.addSub(ref425.rebind());
  
  
  var node439 = $("<div>");
  
  var ref423 = text;
  node439.text(""+ref423.get());
  var ignore75 = false;
  subs__.addSub(ref423.addEventListener('change', function(_, ref, val) {
    if(ignore75) return;
    node439.text(""+val);
  }));
  subs__.addSub(ref423.rebind());
  
  
  var ref424 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref424.get() !== null) {
    node439.attr('class', ref424.get());
    subs__.addSub(ref424.addEventListener('change', function(_, ref, val) {
      node439.attr('class', val);
    }));
    
  }
  subs__.addSub(ref424.rebind());
  
  node438.append(node439);
  node437.append(node438);
  var nodes2824 = $("<span>");
  node437.append(nodes2824);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl163();
  }));
  
  function renderControl163() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3266 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3266); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2824;
      nodes2824 = node.contents();
      oldNodes.replaceWith(nodes2824);
    }));
  }
  renderControl163();
  root3265.append(node437);
  callback(root3265); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp2775 = result__;
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

nrichRPG.coreWorkout.removeMathJaxIncidentElements = function() {
   var __this = this;
  mobl.$("span").remove(".MathJax_Preview");
  mobl.$("script[id^='MathJax-Element-']").each(function(callback) {
             var __this = this;
             var result__ = mobl.$(__this).remove;
             if(callback && callback.apply) callback(); return;
           });
};


nrichRPG.coreWorkout.answerBlock = function(qa, number, elements, callback) {
  var root3267 = $("<span>");
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
  var tmp2700 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp2699 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp2699.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp2699.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp2699.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes2825 = $("<span>");
  root3267.append(nodes2825);
  subs__.addSub((mobl.block)(tmp2699, mobl.ref(null), tmp2700, mobl.ref(null), function(_, callback) {
    var root3268 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp2697 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp2697.set("A" + number.get() + ". ");
    }));
    
    var nodes2826 = $("<span>");
    root3268.append(nodes2826);
    subs__.addSub((mobl.label)(tmp2697, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3269); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2826;
      nodes2826 = node.contents();
      oldNodes.replaceWith(nodes2826);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp2698 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp2698.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node440 = $("<span>");
    root3268.append(node440);
    var condSubs96 = new mobl.CompSubscription();
    subs__.addSub(condSubs96);
    var oldValue96;
    var renderCond96 = function() {
      var value220 = tmp2698.get();
      if(oldValue96 === value220) return;
      oldValue96 = value220;
      var subs__ = condSubs96;
      subs__.unsubscribe();
      node440.empty();
      if(value220) {
        
        var node441 = $("<span>");
        
        var ref427 = mobl.ref("answer-block-" + number.get());
        if(ref427.get() !== null) {
          node441.attr('id', ref427.get());
          subs__.addSub(ref427.addEventListener('change', function(_, ref, val) {
            node441.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node441.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref427.rebind());
        
        var nodes2827 = $("<span>");
        node441.append(nodes2827);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root3270 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3270); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2827;
          nodes2827 = node.contents();
          oldNodes.replaceWith(nodes2827);
        }));
        node440.append(node441);
        
        
        
      } else {
        var nodes2828 = $("<span>");
        node440.append(nodes2828);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root3271 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3271); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2828;
          nodes2828 = node.contents();
          oldNodes.replaceWith(nodes2828);
        }));
        
        
      }
    };
    renderCond96();
    subs__.addSub(tmp2698.addEventListener('change', function() {
      renderCond96();
    }));
    
    callback(root3268); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2825;
    nodes2825 = node.contents();
    oldNodes.replaceWith(nodes2825);
  }));
  var nodes2829 = $("<span>");
  root3267.append(nodes2829);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root3272 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node442 = $("<span>");
    node442.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp2777 = result__;
      var tmp2701 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp2776 = result__;
          var result__ = tmp2776;
          tmp2701.set(result__);
          
        });
      }));
      
      var nodes2833 = $("<span>");
      node442.append(nodes2833);
      subs__.addSub((mobl.html)(tmp2701, function(_, callback) {
        var root3276 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3276); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2833;
        nodes2833 = node.contents();
        oldNodes.replaceWith(nodes2833);
      }));
      root3272.append(node442);
      var nodes2830 = $("<span>");
      root3272.append(nodes2830);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3273 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3273); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2830;
        nodes2830 = node.contents();
        oldNodes.replaceWith(nodes2830);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2702 = mobl.ref(result__);
      
      var nodes2831 = $("<span>");
      root3272.append(nodes2831);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2702, function(_, callback) {
        var root3274 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3274); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2831;
        nodes2831 = node.contents();
        oldNodes.replaceWith(nodes2831);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2703 = mobl.ref(result__);
      
      var nodes2832 = $("<span>");
      root3272.append(nodes2832);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2703, function(_, callback) {
        var root3275 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3275); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2832;
        nodes2832 = node.contents();
        oldNodes.replaceWith(nodes2832);
      }));
      callback(root3272); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2829;
    nodes2829 = node.contents();
    oldNodes.replaceWith(nodes2829);
  }));
  callback(root3267); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp2778 = result__;
    var result__ = tmp2778;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp2779 = result__;
        var result__ = tmp2779;
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
  var root3277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp2787 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp2705 = mobl.ref(result__);
  
  var nodes2834 = $("<span>");
  root3277.append(nodes2834);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp2705, function(_, callback) {
    var root3278 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp2780 = result__;
                       var result__ = tmp2780;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp2781 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp2704 = mobl.ref(result__);
    
    var nodes2835 = $("<span>");
    root3278.append(nodes2835);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp2704, function(_, callback) {
      var root3279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3279); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2835;
      nodes2835 = node.contents();
      oldNodes.replaceWith(nodes2835);
    }));
    callback(root3278); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2834;
    nodes2834 = node.contents();
    oldNodes.replaceWith(nodes2834);
  }));
  var nodes2836 = $("<span>");
  root3277.append(nodes2836);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3280 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp2786 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2708 = mobl.ref(result__);
    
    var nodes2837 = $("<span>");
    root3280.append(nodes2837);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp2708, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root3281 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp2706 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp2706.set("Q" + number.get() + ". ");
      }));
      
      var nodes2838 = $("<span>");
      root3281.append(nodes2838);
      subs__.addSub((mobl.html)(tmp2706, function(_, callback) {
        var root3282 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3282); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2838;
        nodes2838 = node.contents();
        oldNodes.replaceWith(nodes2838);
      }));
      
      var node443 = $("<span>");
      
      var ref428 = mobl.ref("question-block-" + number.get());
      if(ref428.get() !== null) {
        node443.attr('id', ref428.get());
        subs__.addSub(ref428.addEventListener('change', function(_, ref, val) {
          node443.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node443.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref428.rebind());
      
      var nodes2840 = $("<span>");
      node443.append(nodes2840);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root3284 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3284); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2840;
        nodes2840 = node.contents();
        oldNodes.replaceWith(nodes2840);
      }));
      root3281.append(node443);
      
      var node444 = $("<span>");
      node444.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp2783 = result__;
        var tmp2707 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp2782 = result__;
            var result__ = tmp2782;
            tmp2707.set(result__);
            
          });
        }));
        
        var nodes2839 = $("<span>");
        node444.append(nodes2839);
        subs__.addSub((mobl.html)(tmp2707, function(_, callback) {
          var root3283 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3283); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2839;
          nodes2839 = node.contents();
          oldNodes.replaceWith(nodes2839);
        }));
        root3281.append(node444);
        callback(root3281); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2837;
      nodes2837 = node.contents();
      oldNodes.replaceWith(nodes2837);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp2785 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2710 = mobl.ref(result__);
    
    var nodes2841 = $("<span>");
    root3280.append(nodes2841);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2710, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root3285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2842 = $("<span>");
      root3285.append(nodes2842);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3286 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp2784 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp2709 = mobl.ref(result__);
        
        var nodes2843 = $("<span>");
        root3286.append(nodes2843);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp2709, function(_, callback) {
          var root3287 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3287); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2843;
          nodes2843 = node.contents();
          oldNodes.replaceWith(nodes2843);
        }));
        callback(root3286); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2842;
        nodes2842 = node.contents();
        oldNodes.replaceWith(nodes2842);
      }));
      
      var node445 = $("<span>");
      root3285.append(node445);
      var condSubs97 = new mobl.CompSubscription();
      subs__.addSub(condSubs97);
      var oldValue97;
      var renderCond97 = function() {
        var value221 = qa.get().done;
        if(oldValue97 === value221) return;
        oldValue97 = value221;
        var subs__ = condSubs97;
        subs__.unsubscribe();
        node445.empty();
        if(value221) {
          var nodes2844 = $("<span>");
          node445.append(nodes2844);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root3288 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root3288); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2844;
            nodes2844 = node.contents();
            oldNodes.replaceWith(nodes2844);
          }));
          
          
        } else {
          
        }
      };
      renderCond97();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond97();
      }));
      
      callback(root3285); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2841;
      nodes2841 = node.contents();
      oldNodes.replaceWith(nodes2841);
    }));
    callback(root3280); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2836;
    nodes2836 = node.contents();
    oldNodes.replaceWith(nodes2836);
  }));
  callback(root3277); return subs__;
  
  
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
  qas.list(function(coll282) {
    coll282 = coll282.reverse();
    function processOne96() {
      var item;
      item = coll282.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll282.length > 0) processOne96(); else rest96();
      
    }
    function rest96() {
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
    if(coll282.length > 0) processOne96(); else rest96();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll283) {
    coll283 = coll283.reverse();
    function processOne97() {
      var item;
      item = coll283.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll283.length > 0) processOne97(); else rest97();
      
    }
    function rest97() {
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
    if(coll283.length > 0) processOne97(); else rest97();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll284) {
    coll284 = coll284.reverse();
    function processOne98() {
      var item;
      item = coll284.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll284.length > 0) processOne98(); else rest98();
      
    }
    function rest98() {
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
    if(coll284.length > 0) processOne98(); else rest98();
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