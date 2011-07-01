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
    var tmp3206 = result__;
    var result__ = tmp3206;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp3207 = result__;
      var result__ = tmp3207;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp3208 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll297) {
    coll297 = coll297.reverse();
    function processOne111() {
      var i;
      i = coll297.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp3209 = result__;
        
        if(coll297.length > 0) processOne111(); else rest111();
        
      });
    }
    function rest111() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll297.length > 0) processOne111(); else rest111();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll298) {
    coll298 = coll298.reverse();
    function processOne112() {
      var i;
      i = coll298.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp3210 = result__;
          
          if(coll298.length > 0) processOne112(); else rest112();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp3210 = result__;
            
            if(coll298.length > 0) processOne112(); else rest112();
            
          });
        }
      }
    }
    function rest112() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll298.length > 0) processOne112(); else rest112();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll299) {
    coll299 = coll299.reverse();
    function processOne113() {
      var i;
      i = coll299.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp3211 = result__;
        
        if(coll299.length > 0) processOne113(); else rest113();
        
      });
    }
    function rest113() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll299.length > 0) processOne113(); else rest113();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root3645 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3173 = $("<span>");
  root3645.append(nodes3173);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3646 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3219 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3118 = mobl.ref(result__);
    
    var nodes3174 = $("<span>");
    root3646.append(nodes3174);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3118, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3647 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3175 = $("<span>");
      root3647.append(nodes3175);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3648 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3648); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3175;
        nodes3175 = node.contents();
        oldNodes.replaceWith(nodes3175);
      }));
      callback(root3647); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3174;
      nodes3174 = node.contents();
      oldNodes.replaceWith(nodes3174);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3218 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3119 = mobl.ref(result__);
    
    var nodes3176 = $("<span>");
    root3646.append(nodes3176);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3119, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3649 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3177 = $("<span>");
      root3649.append(nodes3177);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3650 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3650); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3177;
        nodes3177 = node.contents();
        oldNodes.replaceWith(nodes3177);
      }));
      callback(root3649); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3176;
      nodes3176 = node.contents();
      oldNodes.replaceWith(nodes3176);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3217 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3120 = mobl.ref(result__);
    
    var nodes3178 = $("<span>");
    root3646.append(nodes3178);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3120, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3651 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3179 = $("<span>");
      root3651.append(nodes3179);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3652 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3652); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3179;
        nodes3179 = node.contents();
        oldNodes.replaceWith(nodes3179);
      }));
      callback(root3651); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3178;
      nodes3178 = node.contents();
      oldNodes.replaceWith(nodes3178);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3216 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3121 = mobl.ref(result__);
    
    var nodes3180 = $("<span>");
    root3646.append(nodes3180);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3121, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3653 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3181 = $("<span>");
      root3653.append(nodes3181);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3654 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3654); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3181;
        nodes3181 = node.contents();
        oldNodes.replaceWith(nodes3181);
      }));
      callback(root3653); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3180;
      nodes3180 = node.contents();
      oldNodes.replaceWith(nodes3180);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3215 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3122 = mobl.ref(result__);
    
    var nodes3182 = $("<span>");
    root3646.append(nodes3182);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3122, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3655 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3183 = $("<span>");
      root3655.append(nodes3183);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3656 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3656); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3183;
        nodes3183 = node.contents();
        oldNodes.replaceWith(nodes3183);
      }));
      callback(root3655); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3182;
      nodes3182 = node.contents();
      oldNodes.replaceWith(nodes3182);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3214 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3123 = mobl.ref(result__);
    
    var nodes3184 = $("<span>");
    root3646.append(nodes3184);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3123, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3185 = $("<span>");
      root3657.append(nodes3185);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3658 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3658); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3185;
        nodes3185 = node.contents();
        oldNodes.replaceWith(nodes3185);
      }));
      callback(root3657); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3184;
      nodes3184 = node.contents();
      oldNodes.replaceWith(nodes3184);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3213 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3124 = mobl.ref(result__);
    
    var nodes3186 = $("<span>");
    root3646.append(nodes3186);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3124, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3659 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3187 = $("<span>");
      root3659.append(nodes3187);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3660 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3660); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3187;
        nodes3187 = node.contents();
        oldNodes.replaceWith(nodes3187);
      }));
      callback(root3659); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3186;
      nodes3186 = node.contents();
      oldNodes.replaceWith(nodes3186);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3212 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3125 = mobl.ref(result__);
    
    var nodes3188 = $("<span>");
    root3646.append(nodes3188);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3125, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3661 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3189 = $("<span>");
      root3661.append(nodes3189);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3662 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3662); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3189;
        nodes3189 = node.contents();
        oldNodes.replaceWith(nodes3189);
      }));
      callback(root3661); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3188;
      nodes3188 = node.contents();
      oldNodes.replaceWith(nodes3188);
    }));
    callback(root3646); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3173;
    nodes3173 = node.contents();
    oldNodes.replaceWith(nodes3173);
  }));
  callback(root3645); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root3663 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes3190 = $("<span>");
  root3663.append(nodes3190);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3664 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3127 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3126 = mobl.ref(result__);
    
    var nodes3191 = $("<span>");
    root3664.append(nodes3191);
    subs__.addSub((ui.backButton)(tmp3126, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3127, function(_, callback) {
      var root3665 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3665); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3191;
      nodes3191 = node.contents();
      oldNodes.replaceWith(nodes3191);
    }));
    callback(root3664); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3190;
    nodes3190 = node.contents();
    oldNodes.replaceWith(nodes3190);
  }));
  var nodes3192 = $("<span>");
  root3663.append(nodes3192);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3666 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp3227 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3128 = mobl.ref(result__);
    
    var nodes3193 = $("<span>");
    root3666.append(nodes3193);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3128, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3667 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3194 = $("<span>");
      root3667.append(nodes3194);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3668 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3668); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3194;
        nodes3194 = node.contents();
        oldNodes.replaceWith(nodes3194);
      }));
      callback(root3667); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3193;
      nodes3193 = node.contents();
      oldNodes.replaceWith(nodes3193);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp3226 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3129 = mobl.ref(result__);
    
    var nodes3195 = $("<span>");
    root3666.append(nodes3195);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3129, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3669 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3196 = $("<span>");
      root3669.append(nodes3196);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3670 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3670); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3196;
        nodes3196 = node.contents();
        oldNodes.replaceWith(nodes3196);
      }));
      callback(root3669); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3195;
      nodes3195 = node.contents();
      oldNodes.replaceWith(nodes3195);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp3225 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3130 = mobl.ref(result__);
    
    var nodes3197 = $("<span>");
    root3666.append(nodes3197);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3130, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3671 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3198 = $("<span>");
      root3671.append(nodes3198);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3672 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3672); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3198;
        nodes3198 = node.contents();
        oldNodes.replaceWith(nodes3198);
      }));
      callback(root3671); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3197;
      nodes3197 = node.contents();
      oldNodes.replaceWith(nodes3197);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp3224 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3131 = mobl.ref(result__);
    
    var nodes3199 = $("<span>");
    root3666.append(nodes3199);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3131, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3673 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3200 = $("<span>");
      root3673.append(nodes3200);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3674); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3200;
        nodes3200 = node.contents();
        oldNodes.replaceWith(nodes3200);
      }));
      callback(root3673); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3199;
      nodes3199 = node.contents();
      oldNodes.replaceWith(nodes3199);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp3223 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3132 = mobl.ref(result__);
    
    var nodes3201 = $("<span>");
    root3666.append(nodes3201);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3132, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3675 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3202 = $("<span>");
      root3675.append(nodes3202);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3676 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3676); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3202;
        nodes3202 = node.contents();
        oldNodes.replaceWith(nodes3202);
      }));
      callback(root3675); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3201;
      nodes3201 = node.contents();
      oldNodes.replaceWith(nodes3201);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp3222 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3133 = mobl.ref(result__);
    
    var nodes3203 = $("<span>");
    root3666.append(nodes3203);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3133, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3677 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3204 = $("<span>");
      root3677.append(nodes3204);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3678 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3678); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3204;
        nodes3204 = node.contents();
        oldNodes.replaceWith(nodes3204);
      }));
      callback(root3677); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3203;
      nodes3203 = node.contents();
      oldNodes.replaceWith(nodes3203);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp3221 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3134 = mobl.ref(result__);
    
    var nodes3205 = $("<span>");
    root3666.append(nodes3205);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3134, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3679 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3206 = $("<span>");
      root3679.append(nodes3206);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3680 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3680); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3206;
        nodes3206 = node.contents();
        oldNodes.replaceWith(nodes3206);
      }));
      callback(root3679); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3205;
      nodes3205 = node.contents();
      oldNodes.replaceWith(nodes3205);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp3220 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3135 = mobl.ref(result__);
    
    var nodes3207 = $("<span>");
    root3666.append(nodes3207);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3135, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3681 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3208 = $("<span>");
      root3681.append(nodes3208);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3682 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3682); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3208;
        nodes3208 = node.contents();
        oldNodes.replaceWith(nodes3208);
      }));
      callback(root3681); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3207;
      nodes3207 = node.contents();
      oldNodes.replaceWith(nodes3207);
    }));
    callback(root3666); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3192;
    nodes3192 = node.contents();
    oldNodes.replaceWith(nodes3192);
  }));
  callback(root3663); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root3683 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3209 = $("<span>");
  root3683.append(nodes3209);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3684 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3137 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3136 = mobl.ref(result__);
    
    var nodes3210 = $("<span>");
    root3684.append(nodes3210);
    subs__.addSub((ui.backButton)(tmp3136, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3137, function(_, callback) {
      var root3685 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3685); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3210;
      nodes3210 = node.contents();
      oldNodes.replaceWith(nodes3210);
    }));
    callback(root3684); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3209;
    nodes3209 = node.contents();
    oldNodes.replaceWith(nodes3209);
  }));
  var nodes3211 = $("<span>");
  root3683.append(nodes3211);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3686 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp3232 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3138 = mobl.ref(result__);
    
    var nodes3212 = $("<span>");
    root3686.append(nodes3212);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3138, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3687 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3213 = $("<span>");
      root3687.append(nodes3213);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3688 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3688); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3213;
        nodes3213 = node.contents();
        oldNodes.replaceWith(nodes3213);
      }));
      callback(root3687); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3212;
      nodes3212 = node.contents();
      oldNodes.replaceWith(nodes3212);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp3231 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3139 = mobl.ref(result__);
    
    var nodes3214 = $("<span>");
    root3686.append(nodes3214);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3139, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3689 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3215 = $("<span>");
      root3689.append(nodes3215);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3690 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3690); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3215;
        nodes3215 = node.contents();
        oldNodes.replaceWith(nodes3215);
      }));
      callback(root3689); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3214;
      nodes3214 = node.contents();
      oldNodes.replaceWith(nodes3214);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp3230 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3140 = mobl.ref(result__);
    
    var nodes3216 = $("<span>");
    root3686.append(nodes3216);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3140, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3217 = $("<span>");
      root3691.append(nodes3217);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3692 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3692); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3217;
        nodes3217 = node.contents();
        oldNodes.replaceWith(nodes3217);
      }));
      callback(root3691); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3216;
      nodes3216 = node.contents();
      oldNodes.replaceWith(nodes3216);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp3229 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3141 = mobl.ref(result__);
    
    var nodes3218 = $("<span>");
    root3686.append(nodes3218);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3141, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3693 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3219 = $("<span>");
      root3693.append(nodes3219);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3694 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3694); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3219;
        nodes3219 = node.contents();
        oldNodes.replaceWith(nodes3219);
      }));
      callback(root3693); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3218;
      nodes3218 = node.contents();
      oldNodes.replaceWith(nodes3218);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp3228 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3142 = mobl.ref(result__);
    
    var nodes3220 = $("<span>");
    root3686.append(nodes3220);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3142, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3695 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3221 = $("<span>");
      root3695.append(nodes3221);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3696 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3696); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3221;
        nodes3221 = node.contents();
        oldNodes.replaceWith(nodes3221);
      }));
      callback(root3695); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3220;
      nodes3220 = node.contents();
      oldNodes.replaceWith(nodes3220);
    }));
    callback(root3686); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3211;
    nodes3211 = node.contents();
    oldNodes.replaceWith(nodes3211);
  }));
  callback(root3683); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root3697 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3222 = $("<span>");
  root3697.append(nodes3222);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3698 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3144 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3143 = mobl.ref(result__);
    
    var nodes3223 = $("<span>");
    root3698.append(nodes3223);
    subs__.addSub((ui.backButton)(tmp3143, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3144, function(_, callback) {
      var root3699 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3699); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3223;
      nodes3223 = node.contents();
      oldNodes.replaceWith(nodes3223);
    }));
    callback(root3698); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3222;
    nodes3222 = node.contents();
    oldNodes.replaceWith(nodes3222);
  }));
  var nodes3224 = $("<span>");
  root3697.append(nodes3224);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3700 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp3235 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3145 = mobl.ref(result__);
    
    var nodes3225 = $("<span>");
    root3700.append(nodes3225);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3145, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3701 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3226 = $("<span>");
      root3701.append(nodes3226);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3702 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3702); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3226;
        nodes3226 = node.contents();
        oldNodes.replaceWith(nodes3226);
      }));
      callback(root3701); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3225;
      nodes3225 = node.contents();
      oldNodes.replaceWith(nodes3225);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp3234 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3146 = mobl.ref(result__);
    
    var nodes3227 = $("<span>");
    root3700.append(nodes3227);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3146, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3703 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3228 = $("<span>");
      root3703.append(nodes3228);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3704 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3704); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3228;
        nodes3228 = node.contents();
        oldNodes.replaceWith(nodes3228);
      }));
      callback(root3703); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3227;
      nodes3227 = node.contents();
      oldNodes.replaceWith(nodes3227);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp3233 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3147 = mobl.ref(result__);
    
    var nodes3229 = $("<span>");
    root3700.append(nodes3229);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3147, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3705 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3230 = $("<span>");
      root3705.append(nodes3230);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3706 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3706); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3230;
        nodes3230 = node.contents();
        oldNodes.replaceWith(nodes3230);
      }));
      callback(root3705); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3229;
      nodes3229 = node.contents();
      oldNodes.replaceWith(nodes3229);
    }));
    callback(root3700); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3224;
    nodes3224 = node.contents();
    oldNodes.replaceWith(nodes3224);
  }));
  callback(root3697); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root3707 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3231 = $("<span>");
  root3707.append(nodes3231);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3708 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3149 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3148 = mobl.ref(result__);
    
    var nodes3232 = $("<span>");
    root3708.append(nodes3232);
    subs__.addSub((ui.backButton)(tmp3148, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3149, function(_, callback) {
      var root3709 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3709); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3232;
      nodes3232 = node.contents();
      oldNodes.replaceWith(nodes3232);
    }));
    callback(root3708); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3231;
    nodes3231 = node.contents();
    oldNodes.replaceWith(nodes3231);
  }));
  var nodes3233 = $("<span>");
  root3707.append(nodes3233);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3710 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp3239 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3150 = mobl.ref(result__);
    
    var nodes3234 = $("<span>");
    root3710.append(nodes3234);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3150, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3711 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3235 = $("<span>");
      root3711.append(nodes3235);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3712 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3712); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3235;
        nodes3235 = node.contents();
        oldNodes.replaceWith(nodes3235);
      }));
      callback(root3711); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3234;
      nodes3234 = node.contents();
      oldNodes.replaceWith(nodes3234);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp3238 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3151 = mobl.ref(result__);
    
    var nodes3236 = $("<span>");
    root3710.append(nodes3236);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3151, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3713 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3237 = $("<span>");
      root3713.append(nodes3237);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3714 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3714); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3237;
        nodes3237 = node.contents();
        oldNodes.replaceWith(nodes3237);
      }));
      callback(root3713); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3236;
      nodes3236 = node.contents();
      oldNodes.replaceWith(nodes3236);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp3237 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3152 = mobl.ref(result__);
    
    var nodes3238 = $("<span>");
    root3710.append(nodes3238);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3152, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3715 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3239 = $("<span>");
      root3715.append(nodes3239);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3716 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3716); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3239;
        nodes3239 = node.contents();
        oldNodes.replaceWith(nodes3239);
      }));
      callback(root3715); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3238;
      nodes3238 = node.contents();
      oldNodes.replaceWith(nodes3238);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp3236 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3153 = mobl.ref(result__);
    
    var nodes3240 = $("<span>");
    root3710.append(nodes3240);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3153, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3717 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3241 = $("<span>");
      root3717.append(nodes3241);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3718 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3718); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3241;
        nodes3241 = node.contents();
        oldNodes.replaceWith(nodes3241);
      }));
      callback(root3717); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3240;
      nodes3240 = node.contents();
      oldNodes.replaceWith(nodes3240);
    }));
    callback(root3710); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3233;
    nodes3233 = node.contents();
    oldNodes.replaceWith(nodes3233);
  }));
  callback(root3707); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root3719 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3242 = $("<span>");
  root3719.append(nodes3242);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3720 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3155 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3154 = mobl.ref(result__);
    
    var nodes3243 = $("<span>");
    root3720.append(nodes3243);
    subs__.addSub((ui.backButton)(tmp3154, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3155, function(_, callback) {
      var root3721 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3721); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3243;
      nodes3243 = node.contents();
      oldNodes.replaceWith(nodes3243);
    }));
    callback(root3720); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3242;
    nodes3242 = node.contents();
    oldNodes.replaceWith(nodes3242);
  }));
  var nodes3244 = $("<span>");
  root3719.append(nodes3244);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3722 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp3241 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3156 = mobl.ref(result__);
    
    var nodes3245 = $("<span>");
    root3722.append(nodes3245);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3156, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3723 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3246 = $("<span>");
      root3723.append(nodes3246);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3724 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3724); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3246;
        nodes3246 = node.contents();
        oldNodes.replaceWith(nodes3246);
      }));
      callback(root3723); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3245;
      nodes3245 = node.contents();
      oldNodes.replaceWith(nodes3245);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp3240 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3157 = mobl.ref(result__);
    
    var nodes3247 = $("<span>");
    root3722.append(nodes3247);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3157, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3725 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3248 = $("<span>");
      root3725.append(nodes3248);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3726 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3726); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3248;
        nodes3248 = node.contents();
        oldNodes.replaceWith(nodes3248);
      }));
      callback(root3725); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3247;
      nodes3247 = node.contents();
      oldNodes.replaceWith(nodes3247);
    }));
    callback(root3722); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3244;
    nodes3244 = node.contents();
    oldNodes.replaceWith(nodes3244);
  }));
  callback(root3719); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root3727 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3249 = $("<span>");
  root3727.append(nodes3249);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3728 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3159 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3158 = mobl.ref(result__);
    
    var nodes3250 = $("<span>");
    root3728.append(nodes3250);
    subs__.addSub((ui.backButton)(tmp3158, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3159, function(_, callback) {
      var root3729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3729); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3250;
      nodes3250 = node.contents();
      oldNodes.replaceWith(nodes3250);
    }));
    callback(root3728); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3249;
    nodes3249 = node.contents();
    oldNodes.replaceWith(nodes3249);
  }));
  var nodes3251 = $("<span>");
  root3727.append(nodes3251);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3730 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp3246 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3160 = mobl.ref(result__);
    
    var nodes3252 = $("<span>");
    root3730.append(nodes3252);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3160, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3731 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3253 = $("<span>");
      root3731.append(nodes3253);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3732 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3732); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3253;
        nodes3253 = node.contents();
        oldNodes.replaceWith(nodes3253);
      }));
      callback(root3731); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3252;
      nodes3252 = node.contents();
      oldNodes.replaceWith(nodes3252);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp3245 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3161 = mobl.ref(result__);
    
    var nodes3254 = $("<span>");
    root3730.append(nodes3254);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3161, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3733 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3255 = $("<span>");
      root3733.append(nodes3255);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3734 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3734); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3255;
        nodes3255 = node.contents();
        oldNodes.replaceWith(nodes3255);
      }));
      callback(root3733); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3254;
      nodes3254 = node.contents();
      oldNodes.replaceWith(nodes3254);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp3244 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3162 = mobl.ref(result__);
    
    var nodes3256 = $("<span>");
    root3730.append(nodes3256);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3162, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3735 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3257 = $("<span>");
      root3735.append(nodes3257);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3736 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3736); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3257;
        nodes3257 = node.contents();
        oldNodes.replaceWith(nodes3257);
      }));
      callback(root3735); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3256;
      nodes3256 = node.contents();
      oldNodes.replaceWith(nodes3256);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp3243 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3163 = mobl.ref(result__);
    
    var nodes3258 = $("<span>");
    root3730.append(nodes3258);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3163, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3737 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3259 = $("<span>");
      root3737.append(nodes3259);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3738 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3738); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3259;
        nodes3259 = node.contents();
        oldNodes.replaceWith(nodes3259);
      }));
      callback(root3737); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3258;
      nodes3258 = node.contents();
      oldNodes.replaceWith(nodes3258);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp3242 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3164 = mobl.ref(result__);
    
    var nodes3260 = $("<span>");
    root3730.append(nodes3260);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3164, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3739 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3261 = $("<span>");
      root3739.append(nodes3261);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3740 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3740); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3261;
        nodes3261 = node.contents();
        oldNodes.replaceWith(nodes3261);
      }));
      callback(root3739); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3260;
      nodes3260 = node.contents();
      oldNodes.replaceWith(nodes3260);
    }));
    callback(root3730); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3251;
    nodes3251 = node.contents();
    oldNodes.replaceWith(nodes3251);
  }));
  callback(root3727); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root3741 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3262 = $("<span>");
  root3741.append(nodes3262);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3742 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3166 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3165 = mobl.ref(result__);
    
    var nodes3263 = $("<span>");
    root3742.append(nodes3263);
    subs__.addSub((ui.backButton)(tmp3165, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3166, function(_, callback) {
      var root3743 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3743); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3263;
      nodes3263 = node.contents();
      oldNodes.replaceWith(nodes3263);
    }));
    callback(root3742); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3262;
    nodes3262 = node.contents();
    oldNodes.replaceWith(nodes3262);
  }));
  var nodes3264 = $("<span>");
  root3741.append(nodes3264);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3744 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp3249 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3167 = mobl.ref(result__);
    
    var nodes3265 = $("<span>");
    root3744.append(nodes3265);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3167, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3745 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3266 = $("<span>");
      root3745.append(nodes3266);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3746 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3746); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3266;
        nodes3266 = node.contents();
        oldNodes.replaceWith(nodes3266);
      }));
      callback(root3745); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3265;
      nodes3265 = node.contents();
      oldNodes.replaceWith(nodes3265);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp3248 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3168 = mobl.ref(result__);
    
    var nodes3267 = $("<span>");
    root3744.append(nodes3267);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3168, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3747 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3268 = $("<span>");
      root3747.append(nodes3268);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3748 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3748); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3268;
        nodes3268 = node.contents();
        oldNodes.replaceWith(nodes3268);
      }));
      callback(root3747); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3267;
      nodes3267 = node.contents();
      oldNodes.replaceWith(nodes3267);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp3247 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3169 = mobl.ref(result__);
    
    var nodes3269 = $("<span>");
    root3744.append(nodes3269);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3169, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3749 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3270 = $("<span>");
      root3749.append(nodes3270);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3750 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3750); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3270;
        nodes3270 = node.contents();
        oldNodes.replaceWith(nodes3270);
      }));
      callback(root3749); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3269;
      nodes3269 = node.contents();
      oldNodes.replaceWith(nodes3269);
    }));
    callback(root3744); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3264;
    nodes3264 = node.contents();
    oldNodes.replaceWith(nodes3264);
  }));
  callback(root3741); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root3751 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3271 = $("<span>");
  root3751.append(nodes3271);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3752 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3171 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3170 = mobl.ref(result__);
    
    var nodes3272 = $("<span>");
    root3752.append(nodes3272);
    subs__.addSub((ui.backButton)(tmp3170, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3171, function(_, callback) {
      var root3753 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3753); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3272;
      nodes3272 = node.contents();
      oldNodes.replaceWith(nodes3272);
    }));
    callback(root3752); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3271;
    nodes3271 = node.contents();
    oldNodes.replaceWith(nodes3271);
  }));
  var nodes3273 = $("<span>");
  root3751.append(nodes3273);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3754 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp3250 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3172 = mobl.ref(result__);
    
    var nodes3274 = $("<span>");
    root3754.append(nodes3274);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3172, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3755 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3275 = $("<span>");
      root3755.append(nodes3275);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3756 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3756); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3275;
        nodes3275 = node.contents();
        oldNodes.replaceWith(nodes3275);
      }));
      callback(root3755); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3274;
      nodes3274 = node.contents();
      oldNodes.replaceWith(nodes3274);
    }));
    callback(root3754); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3273;
    nodes3273 = node.contents();
    oldNodes.replaceWith(nodes3273);
  }));
  callback(root3751); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root3757 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3276 = $("<span>");
  root3757.append(nodes3276);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3758 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp3263 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3173 = mobl.ref(result__);
    
    var nodes3277 = $("<span>");
    root3758.append(nodes3277);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3173, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3759 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3278 = $("<span>");
      root3759.append(nodes3278);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3760 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3760); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3278;
        nodes3278 = node.contents();
        oldNodes.replaceWith(nodes3278);
      }));
      callback(root3759); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3277;
      nodes3277 = node.contents();
      oldNodes.replaceWith(nodes3277);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp3262 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3174 = mobl.ref(result__);
    
    var nodes3279 = $("<span>");
    root3758.append(nodes3279);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3174, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3761 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3280 = $("<span>");
      root3761.append(nodes3280);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3762 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3762); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3280;
        nodes3280 = node.contents();
        oldNodes.replaceWith(nodes3280);
      }));
      callback(root3761); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3279;
      nodes3279 = node.contents();
      oldNodes.replaceWith(nodes3279);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp3261 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3175 = mobl.ref(result__);
    
    var nodes3281 = $("<span>");
    root3758.append(nodes3281);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3175, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3763 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3282 = $("<span>");
      root3763.append(nodes3282);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3764 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3764); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3282;
        nodes3282 = node.contents();
        oldNodes.replaceWith(nodes3282);
      }));
      callback(root3763); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3281;
      nodes3281 = node.contents();
      oldNodes.replaceWith(nodes3281);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp3260 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3176 = mobl.ref(result__);
    
    var nodes3283 = $("<span>");
    root3758.append(nodes3283);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3176, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3765 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3284 = $("<span>");
      root3765.append(nodes3284);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3766 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3766); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3284;
        nodes3284 = node.contents();
        oldNodes.replaceWith(nodes3284);
      }));
      callback(root3765); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3283;
      nodes3283 = node.contents();
      oldNodes.replaceWith(nodes3283);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp3259 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3177 = mobl.ref(result__);
    
    var nodes3285 = $("<span>");
    root3758.append(nodes3285);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3177, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3767 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3286 = $("<span>");
      root3767.append(nodes3286);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3768 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3768); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3286;
        nodes3286 = node.contents();
        oldNodes.replaceWith(nodes3286);
      }));
      callback(root3767); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3285;
      nodes3285 = node.contents();
      oldNodes.replaceWith(nodes3285);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp3258 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3178 = mobl.ref(result__);
    
    var nodes3287 = $("<span>");
    root3758.append(nodes3287);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3178, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3769 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3288 = $("<span>");
      root3769.append(nodes3288);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3770 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3770); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3288;
        nodes3288 = node.contents();
        oldNodes.replaceWith(nodes3288);
      }));
      callback(root3769); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3287;
      nodes3287 = node.contents();
      oldNodes.replaceWith(nodes3287);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp3257 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3179 = mobl.ref(result__);
    
    var nodes3289 = $("<span>");
    root3758.append(nodes3289);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3179, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3290 = $("<span>");
      root3771.append(nodes3290);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3772 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3772); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3290;
        nodes3290 = node.contents();
        oldNodes.replaceWith(nodes3290);
      }));
      callback(root3771); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3289;
      nodes3289 = node.contents();
      oldNodes.replaceWith(nodes3289);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp3256 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3180 = mobl.ref(result__);
    
    var nodes3291 = $("<span>");
    root3758.append(nodes3291);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3180, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3773 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3292 = $("<span>");
      root3773.append(nodes3292);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3774 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3774); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3292;
        nodes3292 = node.contents();
        oldNodes.replaceWith(nodes3292);
      }));
      callback(root3773); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3291;
      nodes3291 = node.contents();
      oldNodes.replaceWith(nodes3291);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp3255 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3181 = mobl.ref(result__);
    
    var nodes3293 = $("<span>");
    root3758.append(nodes3293);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3181, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3775 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3294 = $("<span>");
      root3775.append(nodes3294);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3776 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3776); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3294;
        nodes3294 = node.contents();
        oldNodes.replaceWith(nodes3294);
      }));
      callback(root3775); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3293;
      nodes3293 = node.contents();
      oldNodes.replaceWith(nodes3293);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp3254 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3182 = mobl.ref(result__);
    
    var nodes3295 = $("<span>");
    root3758.append(nodes3295);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3182, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3777 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3296 = $("<span>");
      root3777.append(nodes3296);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3778 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3778); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3296;
        nodes3296 = node.contents();
        oldNodes.replaceWith(nodes3296);
      }));
      callback(root3777); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3295;
      nodes3295 = node.contents();
      oldNodes.replaceWith(nodes3295);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp3253 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3183 = mobl.ref(result__);
    
    var nodes3297 = $("<span>");
    root3758.append(nodes3297);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3183, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3779 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3298 = $("<span>");
      root3779.append(nodes3298);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3780 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3780); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3298;
        nodes3298 = node.contents();
        oldNodes.replaceWith(nodes3298);
      }));
      callback(root3779); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3297;
      nodes3297 = node.contents();
      oldNodes.replaceWith(nodes3297);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp3252 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3184 = mobl.ref(result__);
    
    var nodes3299 = $("<span>");
    root3758.append(nodes3299);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3184, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3781 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3300 = $("<span>");
      root3781.append(nodes3300);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3782 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3782); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3300;
        nodes3300 = node.contents();
        oldNodes.replaceWith(nodes3300);
      }));
      callback(root3781); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3299;
      nodes3299 = node.contents();
      oldNodes.replaceWith(nodes3299);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp3251 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3185 = mobl.ref(result__);
    
    var nodes3301 = $("<span>");
    root3758.append(nodes3301);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3185, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3783 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3302 = $("<span>");
      root3783.append(nodes3302);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3784 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3784); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3302;
        nodes3302 = node.contents();
        oldNodes.replaceWith(nodes3302);
      }));
      callback(root3783); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3301;
      nodes3301 = node.contents();
      oldNodes.replaceWith(nodes3301);
    }));
    callback(root3758); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3276;
    nodes3276 = node.contents();
    oldNodes.replaceWith(nodes3276);
  }));
  callback(root3757); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root3785 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3303 = $("<span>");
  root3785.append(nodes3303);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3786 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp3269 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3186 = mobl.ref(result__);
    
    var nodes3304 = $("<span>");
    root3786.append(nodes3304);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3186, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3787 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3305 = $("<span>");
      root3787.append(nodes3305);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3788 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3788); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3305;
        nodes3305 = node.contents();
        oldNodes.replaceWith(nodes3305);
      }));
      callback(root3787); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3304;
      nodes3304 = node.contents();
      oldNodes.replaceWith(nodes3304);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp3268 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3187 = mobl.ref(result__);
    
    var nodes3306 = $("<span>");
    root3786.append(nodes3306);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3187, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3789 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3307 = $("<span>");
      root3789.append(nodes3307);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3790 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3790); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3307;
        nodes3307 = node.contents();
        oldNodes.replaceWith(nodes3307);
      }));
      callback(root3789); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3306;
      nodes3306 = node.contents();
      oldNodes.replaceWith(nodes3306);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp3267 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3188 = mobl.ref(result__);
    
    var nodes3308 = $("<span>");
    root3786.append(nodes3308);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3188, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3791 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3309 = $("<span>");
      root3791.append(nodes3309);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3792 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3792); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3309;
        nodes3309 = node.contents();
        oldNodes.replaceWith(nodes3309);
      }));
      callback(root3791); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3308;
      nodes3308 = node.contents();
      oldNodes.replaceWith(nodes3308);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp3266 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3189 = mobl.ref(result__);
    
    var nodes3310 = $("<span>");
    root3786.append(nodes3310);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3189, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3311 = $("<span>");
      root3793.append(nodes3311);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3794 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3794); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3311;
        nodes3311 = node.contents();
        oldNodes.replaceWith(nodes3311);
      }));
      callback(root3793); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3310;
      nodes3310 = node.contents();
      oldNodes.replaceWith(nodes3310);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp3265 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3190 = mobl.ref(result__);
    
    var nodes3312 = $("<span>");
    root3786.append(nodes3312);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3190, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3795 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3313 = $("<span>");
      root3795.append(nodes3313);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3796); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3313;
        nodes3313 = node.contents();
        oldNodes.replaceWith(nodes3313);
      }));
      callback(root3795); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3312;
      nodes3312 = node.contents();
      oldNodes.replaceWith(nodes3312);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp3264 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3191 = mobl.ref(result__);
    
    var nodes3314 = $("<span>");
    root3786.append(nodes3314);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3191, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3315 = $("<span>");
      root3797.append(nodes3315);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3798); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3315;
        nodes3315 = node.contents();
        oldNodes.replaceWith(nodes3315);
      }));
      callback(root3797); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3314;
      nodes3314 = node.contents();
      oldNodes.replaceWith(nodes3314);
    }));
    callback(root3786); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3303;
    nodes3303 = node.contents();
    oldNodes.replaceWith(nodes3303);
  }));
  callback(root3785); return subs__;
  
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
  var root3799 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node464 = $("<div>");
  
  var ref444 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref444.get() !== null) {
    node464.attr('class', ref444.get());
    subs__.addSub(ref444.addEventListener('change', function(_, ref, val) {
      node464.attr('class', val);
    }));
    
  }
  subs__.addSub(ref444.rebind());
  
  var val191 = onclick.get();
  if(val191 !== null) {
    subs__.addSub(mobl.domBind(node464, 'tap', val191));
  }
  
  
  var node465 = $("<div>");
  
  var ref443 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref443.get() !== null) {
    node465.attr('class', ref443.get());
    subs__.addSub(ref443.addEventListener('change', function(_, ref, val) {
      node465.attr('class', val);
    }));
    
  }
  subs__.addSub(ref443.rebind());
  
  
  var node466 = $("<div>");
  
  var ref441 = text;
  node466.text(""+ref441.get());
  var ignore78 = false;
  subs__.addSub(ref441.addEventListener('change', function(_, ref, val) {
    if(ignore78) return;
    node466.text(""+val);
  }));
  subs__.addSub(ref441.rebind());
  
  
  var ref442 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref442.get() !== null) {
    node466.attr('class', ref442.get());
    subs__.addSub(ref442.addEventListener('change', function(_, ref, val) {
      node466.attr('class', val);
    }));
    
  }
  subs__.addSub(ref442.rebind());
  
  node465.append(node466);
  node464.append(node465);
  var nodes3316 = $("<span>");
  node464.append(nodes3316);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl166();
  }));
  
  function renderControl166() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3800 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3800); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3316;
      nodes3316 = node.contents();
      oldNodes.replaceWith(nodes3316);
    }));
  }
  renderControl166();
  root3799.append(node464);
  callback(root3799); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp3270 = result__;
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
  mobl.$("[id^='MathJax-Element-']").each(function(callback) {
             var __this = this;
             var result__ = mobl.$(__this).remove();
             if(callback && callback.apply) callback(); return;
           });
};


nrichRPG.coreWorkout.answerBlock = function(qa, number, elements, callback) {
  var root3801 = $("<span>");
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
  var tmp3195 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp3194 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp3194.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp3194.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp3194.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes3317 = $("<span>");
  root3801.append(nodes3317);
  subs__.addSub((mobl.block)(tmp3194, mobl.ref(null), tmp3195, mobl.ref(null), function(_, callback) {
    var root3802 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp3192 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp3192.set("A" + number.get() + ". ");
    }));
    
    var nodes3318 = $("<span>");
    root3802.append(nodes3318);
    subs__.addSub((mobl.label)(tmp3192, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3803 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3803); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3318;
      nodes3318 = node.contents();
      oldNodes.replaceWith(nodes3318);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp3193 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp3193.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node467 = $("<span>");
    root3802.append(node467);
    var condSubs102 = new mobl.CompSubscription();
    subs__.addSub(condSubs102);
    var oldValue102;
    var renderCond102 = function() {
      var value226 = tmp3193.get();
      if(oldValue102 === value226) return;
      oldValue102 = value226;
      var subs__ = condSubs102;
      subs__.unsubscribe();
      node467.empty();
      if(value226) {
        
        var node468 = $("<span>");
        
        var ref445 = mobl.ref("answer-block-" + number.get());
        if(ref445.get() !== null) {
          node468.attr('id', ref445.get());
          subs__.addSub(ref445.addEventListener('change', function(_, ref, val) {
            node468.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node468.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref445.rebind());
        
        var nodes3319 = $("<span>");
        node468.append(nodes3319);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root3804 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3804); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3319;
          nodes3319 = node.contents();
          oldNodes.replaceWith(nodes3319);
        }));
        node467.append(node468);
        
        
        
      } else {
        var nodes3320 = $("<span>");
        node467.append(nodes3320);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root3805 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3805); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3320;
          nodes3320 = node.contents();
          oldNodes.replaceWith(nodes3320);
        }));
        
        
      }
    };
    renderCond102();
    subs__.addSub(tmp3193.addEventListener('change', function() {
      renderCond102();
    }));
    
    callback(root3802); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3317;
    nodes3317 = node.contents();
    oldNodes.replaceWith(nodes3317);
  }));
  var nodes3321 = $("<span>");
  root3801.append(nodes3321);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root3806 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node469 = $("<span>");
    node469.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp3272 = result__;
      var tmp3196 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp3271 = result__;
          var result__ = tmp3271;
          tmp3196.set(result__);
          
        });
      }));
      
      var nodes3325 = $("<span>");
      node469.append(nodes3325);
      subs__.addSub((mobl.html)(tmp3196, function(_, callback) {
        var root3810 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3810); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3325;
        nodes3325 = node.contents();
        oldNodes.replaceWith(nodes3325);
      }));
      root3806.append(node469);
      var nodes3322 = $("<span>");
      root3806.append(nodes3322);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3807 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3807); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3322;
        nodes3322 = node.contents();
        oldNodes.replaceWith(nodes3322);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3197 = mobl.ref(result__);
      
      var nodes3323 = $("<span>");
      root3806.append(nodes3323);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3197, function(_, callback) {
        var root3808 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3808); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3323;
        nodes3323 = node.contents();
        oldNodes.replaceWith(nodes3323);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3198 = mobl.ref(result__);
      
      var nodes3324 = $("<span>");
      root3806.append(nodes3324);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3198, function(_, callback) {
        var root3809 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3809); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3324;
        nodes3324 = node.contents();
        oldNodes.replaceWith(nodes3324);
      }));
      callback(root3806); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3321;
    nodes3321 = node.contents();
    oldNodes.replaceWith(nodes3321);
  }));
  callback(root3801); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp3273 = result__;
    var result__ = tmp3273;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp3274 = result__;
        var result__ = tmp3274;
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
  var root3811 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp3282 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp3200 = mobl.ref(result__);
  
  var nodes3326 = $("<span>");
  root3811.append(nodes3326);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp3200, function(_, callback) {
    var root3812 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp3275 = result__;
                       var result__ = tmp3275;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp3276 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp3199 = mobl.ref(result__);
    
    var nodes3327 = $("<span>");
    root3812.append(nodes3327);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp3199, function(_, callback) {
      var root3813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3813); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3327;
      nodes3327 = node.contents();
      oldNodes.replaceWith(nodes3327);
    }));
    callback(root3812); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3326;
    nodes3326 = node.contents();
    oldNodes.replaceWith(nodes3326);
  }));
  var nodes3328 = $("<span>");
  root3811.append(nodes3328);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3814 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp3281 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3203 = mobl.ref(result__);
    
    var nodes3329 = $("<span>");
    root3814.append(nodes3329);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp3203, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root3815 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp3201 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp3201.set("Q" + number.get() + ". ");
      }));
      
      var nodes3330 = $("<span>");
      root3815.append(nodes3330);
      subs__.addSub((mobl.html)(tmp3201, function(_, callback) {
        var root3816 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3816); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3330;
        nodes3330 = node.contents();
        oldNodes.replaceWith(nodes3330);
      }));
      
      var node470 = $("<span>");
      
      var ref446 = mobl.ref("question-block-" + number.get());
      if(ref446.get() !== null) {
        node470.attr('id', ref446.get());
        subs__.addSub(ref446.addEventListener('change', function(_, ref, val) {
          node470.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node470.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref446.rebind());
      
      var nodes3332 = $("<span>");
      node470.append(nodes3332);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root3818 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3818); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3332;
        nodes3332 = node.contents();
        oldNodes.replaceWith(nodes3332);
      }));
      root3815.append(node470);
      
      var node471 = $("<span>");
      node471.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp3278 = result__;
        var tmp3202 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp3277 = result__;
            var result__ = tmp3277;
            tmp3202.set(result__);
            
          });
        }));
        
        var nodes3331 = $("<span>");
        node471.append(nodes3331);
        subs__.addSub((mobl.html)(tmp3202, function(_, callback) {
          var root3817 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3817); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3331;
          nodes3331 = node.contents();
          oldNodes.replaceWith(nodes3331);
        }));
        root3815.append(node471);
        callback(root3815); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3329;
      nodes3329 = node.contents();
      oldNodes.replaceWith(nodes3329);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp3280 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3205 = mobl.ref(result__);
    
    var nodes3333 = $("<span>");
    root3814.append(nodes3333);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3205, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root3819 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3334 = $("<span>");
      root3819.append(nodes3334);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3820 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp3279 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp3204 = mobl.ref(result__);
        
        var nodes3335 = $("<span>");
        root3820.append(nodes3335);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp3204, function(_, callback) {
          var root3821 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3821); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3335;
          nodes3335 = node.contents();
          oldNodes.replaceWith(nodes3335);
        }));
        callback(root3820); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3334;
        nodes3334 = node.contents();
        oldNodes.replaceWith(nodes3334);
      }));
      
      var node472 = $("<span>");
      root3819.append(node472);
      var condSubs103 = new mobl.CompSubscription();
      subs__.addSub(condSubs103);
      var oldValue103;
      var renderCond103 = function() {
        var value227 = qa.get().done;
        if(oldValue103 === value227) return;
        oldValue103 = value227;
        var subs__ = condSubs103;
        subs__.unsubscribe();
        node472.empty();
        if(value227) {
          var nodes3336 = $("<span>");
          node472.append(nodes3336);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root3822 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root3822); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3336;
            nodes3336 = node.contents();
            oldNodes.replaceWith(nodes3336);
          }));
          
          
        } else {
          
        }
      };
      renderCond103();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond103();
      }));
      
      callback(root3819); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3333;
      nodes3333 = node.contents();
      oldNodes.replaceWith(nodes3333);
    }));
    callback(root3814); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3328;
    nodes3328 = node.contents();
    oldNodes.replaceWith(nodes3328);
  }));
  callback(root3811); return subs__;
  
  
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
  qas.list(function(coll300) {
    coll300 = coll300.reverse();
    function processOne114() {
      var item;
      item = coll300.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll300.length > 0) processOne114(); else rest114();
      
    }
    function rest114() {
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
    if(coll300.length > 0) processOne114(); else rest114();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll301) {
    coll301 = coll301.reverse();
    function processOne115() {
      var item;
      item = coll301.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll301.length > 0) processOne115(); else rest115();
      
    }
    function rest115() {
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
    if(coll301.length > 0) processOne115(); else rest115();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll302) {
    coll302 = coll302.reverse();
    function processOne116() {
      var item;
      item = coll302.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll302.length > 0) processOne116(); else rest116();
      
    }
    function rest116() {
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
    if(coll302.length > 0) processOne116(); else rest116();
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