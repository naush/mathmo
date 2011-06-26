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
    var tmp17143 = result__;
    var result__ = tmp17143;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp17144 = result__;
      var result__ = tmp17144;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp17145 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll978) {
    coll978 = coll978.reverse();
    function processOne612() {
      var i;
      i = coll978.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp17146 = result__;
        
        if(coll978.length > 0) processOne612(); else rest612();
        
      });
    }
    function rest612() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll978.length > 0) processOne612(); else rest612();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll979) {
    coll979 = coll979.reverse();
    function processOne613() {
      var i;
      i = coll979.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp17147 = result__;
          
          if(coll979.length > 0) processOne613(); else rest613();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp17147 = result__;
            
            if(coll979.length > 0) processOne613(); else rest613();
            
          });
        }
      }
    }
    function rest613() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll979.length > 0) processOne613(); else rest613();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll980) {
    coll980 = coll980.reverse();
    function processOne614() {
      var i;
      i = coll980.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp17148 = result__;
        
        if(coll980.length > 0) processOne614(); else rest614();
        
      });
    }
    function rest614() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll980.length > 0) processOne614(); else rest614();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root18788 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17187 = $("<span>");
  root18788.append(nodes17187);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18789 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17156 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17055 = mobl.ref(result__);
    
    var nodes17188 = $("<span>");
    root18789.append(nodes17188);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17055, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18790 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17189 = $("<span>");
      root18790.append(nodes17189);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18791 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18791); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17189;
        nodes17189 = node.contents();
        oldNodes.replaceWith(nodes17189);
      }));
      callback(root18790); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17188;
      nodes17188 = node.contents();
      oldNodes.replaceWith(nodes17188);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17155 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17056 = mobl.ref(result__);
    
    var nodes17190 = $("<span>");
    root18789.append(nodes17190);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17056, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18792 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17191 = $("<span>");
      root18792.append(nodes17191);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18793 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18793); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17191;
        nodes17191 = node.contents();
        oldNodes.replaceWith(nodes17191);
      }));
      callback(root18792); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17190;
      nodes17190 = node.contents();
      oldNodes.replaceWith(nodes17190);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17154 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17057 = mobl.ref(result__);
    
    var nodes17192 = $("<span>");
    root18789.append(nodes17192);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17057, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18794 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17193 = $("<span>");
      root18794.append(nodes17193);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18795 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18795); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17193;
        nodes17193 = node.contents();
        oldNodes.replaceWith(nodes17193);
      }));
      callback(root18794); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17192;
      nodes17192 = node.contents();
      oldNodes.replaceWith(nodes17192);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17153 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17058 = mobl.ref(result__);
    
    var nodes17194 = $("<span>");
    root18789.append(nodes17194);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17058, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18796 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17195 = $("<span>");
      root18796.append(nodes17195);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18797 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18797); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17195;
        nodes17195 = node.contents();
        oldNodes.replaceWith(nodes17195);
      }));
      callback(root18796); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17194;
      nodes17194 = node.contents();
      oldNodes.replaceWith(nodes17194);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17152 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17059 = mobl.ref(result__);
    
    var nodes17196 = $("<span>");
    root18789.append(nodes17196);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17059, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18798 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17197 = $("<span>");
      root18798.append(nodes17197);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18799 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18799); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17197;
        nodes17197 = node.contents();
        oldNodes.replaceWith(nodes17197);
      }));
      callback(root18798); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17196;
      nodes17196 = node.contents();
      oldNodes.replaceWith(nodes17196);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17151 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17060 = mobl.ref(result__);
    
    var nodes17198 = $("<span>");
    root18789.append(nodes17198);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17060, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18800 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17199 = $("<span>");
      root18800.append(nodes17199);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18801 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18801); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17199;
        nodes17199 = node.contents();
        oldNodes.replaceWith(nodes17199);
      }));
      callback(root18800); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17198;
      nodes17198 = node.contents();
      oldNodes.replaceWith(nodes17198);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17150 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17061 = mobl.ref(result__);
    
    var nodes17200 = $("<span>");
    root18789.append(nodes17200);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17061, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18802 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17201 = $("<span>");
      root18802.append(nodes17201);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18803 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18803); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17201;
        nodes17201 = node.contents();
        oldNodes.replaceWith(nodes17201);
      }));
      callback(root18802); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17200;
      nodes17200 = node.contents();
      oldNodes.replaceWith(nodes17200);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp17149 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17062 = mobl.ref(result__);
    
    var nodes17202 = $("<span>");
    root18789.append(nodes17202);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17062, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18804 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17203 = $("<span>");
      root18804.append(nodes17203);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18805 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18805); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17203;
        nodes17203 = node.contents();
        oldNodes.replaceWith(nodes17203);
      }));
      callback(root18804); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17202;
      nodes17202 = node.contents();
      oldNodes.replaceWith(nodes17202);
    }));
    callback(root18789); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17187;
    nodes17187 = node.contents();
    oldNodes.replaceWith(nodes17187);
  }));
  callback(root18788); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root18806 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes17204 = $("<span>");
  root18806.append(nodes17204);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18807 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17064 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17063 = mobl.ref(result__);
    
    var nodes17205 = $("<span>");
    root18807.append(nodes17205);
    subs__.addSub((ui.backButton)(tmp17063, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17064, function(_, callback) {
      var root18808 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18808); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17205;
      nodes17205 = node.contents();
      oldNodes.replaceWith(nodes17205);
    }));
    callback(root18807); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17204;
    nodes17204 = node.contents();
    oldNodes.replaceWith(nodes17204);
  }));
  var nodes17206 = $("<span>");
  root18806.append(nodes17206);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18809 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp17164 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17065 = mobl.ref(result__);
    
    var nodes17207 = $("<span>");
    root18809.append(nodes17207);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17065, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18810 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17208 = $("<span>");
      root18810.append(nodes17208);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18811 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18811); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17208;
        nodes17208 = node.contents();
        oldNodes.replaceWith(nodes17208);
      }));
      callback(root18810); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17207;
      nodes17207 = node.contents();
      oldNodes.replaceWith(nodes17207);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp17163 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17066 = mobl.ref(result__);
    
    var nodes17209 = $("<span>");
    root18809.append(nodes17209);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17066, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18812 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17210 = $("<span>");
      root18812.append(nodes17210);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18813 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18813); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17210;
        nodes17210 = node.contents();
        oldNodes.replaceWith(nodes17210);
      }));
      callback(root18812); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17209;
      nodes17209 = node.contents();
      oldNodes.replaceWith(nodes17209);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp17162 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17067 = mobl.ref(result__);
    
    var nodes17211 = $("<span>");
    root18809.append(nodes17211);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17067, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18814 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17212 = $("<span>");
      root18814.append(nodes17212);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18815 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18815); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17212;
        nodes17212 = node.contents();
        oldNodes.replaceWith(nodes17212);
      }));
      callback(root18814); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17211;
      nodes17211 = node.contents();
      oldNodes.replaceWith(nodes17211);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp17161 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17068 = mobl.ref(result__);
    
    var nodes17213 = $("<span>");
    root18809.append(nodes17213);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17068, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18816 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17214 = $("<span>");
      root18816.append(nodes17214);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18817 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18817); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17214;
        nodes17214 = node.contents();
        oldNodes.replaceWith(nodes17214);
      }));
      callback(root18816); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17213;
      nodes17213 = node.contents();
      oldNodes.replaceWith(nodes17213);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp17160 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17069 = mobl.ref(result__);
    
    var nodes17215 = $("<span>");
    root18809.append(nodes17215);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17069, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18818 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17216 = $("<span>");
      root18818.append(nodes17216);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18819 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18819); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17216;
        nodes17216 = node.contents();
        oldNodes.replaceWith(nodes17216);
      }));
      callback(root18818); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17215;
      nodes17215 = node.contents();
      oldNodes.replaceWith(nodes17215);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp17159 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17070 = mobl.ref(result__);
    
    var nodes17217 = $("<span>");
    root18809.append(nodes17217);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17070, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18820 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17218 = $("<span>");
      root18820.append(nodes17218);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18821 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18821); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17218;
        nodes17218 = node.contents();
        oldNodes.replaceWith(nodes17218);
      }));
      callback(root18820); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17217;
      nodes17217 = node.contents();
      oldNodes.replaceWith(nodes17217);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp17158 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17071 = mobl.ref(result__);
    
    var nodes17219 = $("<span>");
    root18809.append(nodes17219);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17071, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18822 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17220 = $("<span>");
      root18822.append(nodes17220);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18823 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18823); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17220;
        nodes17220 = node.contents();
        oldNodes.replaceWith(nodes17220);
      }));
      callback(root18822); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17219;
      nodes17219 = node.contents();
      oldNodes.replaceWith(nodes17219);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp17157 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17072 = mobl.ref(result__);
    
    var nodes17221 = $("<span>");
    root18809.append(nodes17221);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17072, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18824 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17222 = $("<span>");
      root18824.append(nodes17222);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18825 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18825); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17222;
        nodes17222 = node.contents();
        oldNodes.replaceWith(nodes17222);
      }));
      callback(root18824); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17221;
      nodes17221 = node.contents();
      oldNodes.replaceWith(nodes17221);
    }));
    callback(root18809); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17206;
    nodes17206 = node.contents();
    oldNodes.replaceWith(nodes17206);
  }));
  callback(root18806); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root18826 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17223 = $("<span>");
  root18826.append(nodes17223);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18827 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17074 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17073 = mobl.ref(result__);
    
    var nodes17224 = $("<span>");
    root18827.append(nodes17224);
    subs__.addSub((ui.backButton)(tmp17073, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17074, function(_, callback) {
      var root18828 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18828); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17224;
      nodes17224 = node.contents();
      oldNodes.replaceWith(nodes17224);
    }));
    callback(root18827); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17223;
    nodes17223 = node.contents();
    oldNodes.replaceWith(nodes17223);
  }));
  var nodes17225 = $("<span>");
  root18826.append(nodes17225);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18829 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp17169 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17075 = mobl.ref(result__);
    
    var nodes17226 = $("<span>");
    root18829.append(nodes17226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17075, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18830 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17227 = $("<span>");
      root18830.append(nodes17227);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18831 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18831); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17227;
        nodes17227 = node.contents();
        oldNodes.replaceWith(nodes17227);
      }));
      callback(root18830); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17226;
      nodes17226 = node.contents();
      oldNodes.replaceWith(nodes17226);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp17168 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17076 = mobl.ref(result__);
    
    var nodes17228 = $("<span>");
    root18829.append(nodes17228);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17076, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18832 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17229 = $("<span>");
      root18832.append(nodes17229);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18833 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18833); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17229;
        nodes17229 = node.contents();
        oldNodes.replaceWith(nodes17229);
      }));
      callback(root18832); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17228;
      nodes17228 = node.contents();
      oldNodes.replaceWith(nodes17228);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp17167 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17077 = mobl.ref(result__);
    
    var nodes17230 = $("<span>");
    root18829.append(nodes17230);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17077, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18834 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17231 = $("<span>");
      root18834.append(nodes17231);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18835 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18835); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17231;
        nodes17231 = node.contents();
        oldNodes.replaceWith(nodes17231);
      }));
      callback(root18834); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17230;
      nodes17230 = node.contents();
      oldNodes.replaceWith(nodes17230);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp17166 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17078 = mobl.ref(result__);
    
    var nodes17232 = $("<span>");
    root18829.append(nodes17232);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17078, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18836 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17233 = $("<span>");
      root18836.append(nodes17233);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18837 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18837); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17233;
        nodes17233 = node.contents();
        oldNodes.replaceWith(nodes17233);
      }));
      callback(root18836); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17232;
      nodes17232 = node.contents();
      oldNodes.replaceWith(nodes17232);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp17165 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17079 = mobl.ref(result__);
    
    var nodes17234 = $("<span>");
    root18829.append(nodes17234);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17079, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18838 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17235 = $("<span>");
      root18838.append(nodes17235);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18839 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18839); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17235;
        nodes17235 = node.contents();
        oldNodes.replaceWith(nodes17235);
      }));
      callback(root18838); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17234;
      nodes17234 = node.contents();
      oldNodes.replaceWith(nodes17234);
    }));
    callback(root18829); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17225;
    nodes17225 = node.contents();
    oldNodes.replaceWith(nodes17225);
  }));
  callback(root18826); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root18840 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17236 = $("<span>");
  root18840.append(nodes17236);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18841 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17081 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17080 = mobl.ref(result__);
    
    var nodes17237 = $("<span>");
    root18841.append(nodes17237);
    subs__.addSub((ui.backButton)(tmp17080, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17081, function(_, callback) {
      var root18842 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18842); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17237;
      nodes17237 = node.contents();
      oldNodes.replaceWith(nodes17237);
    }));
    callback(root18841); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17236;
    nodes17236 = node.contents();
    oldNodes.replaceWith(nodes17236);
  }));
  var nodes17238 = $("<span>");
  root18840.append(nodes17238);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18843 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp17172 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17082 = mobl.ref(result__);
    
    var nodes17239 = $("<span>");
    root18843.append(nodes17239);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17082, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18844 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17240 = $("<span>");
      root18844.append(nodes17240);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18845 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18845); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17240;
        nodes17240 = node.contents();
        oldNodes.replaceWith(nodes17240);
      }));
      callback(root18844); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17239;
      nodes17239 = node.contents();
      oldNodes.replaceWith(nodes17239);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp17171 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17083 = mobl.ref(result__);
    
    var nodes17241 = $("<span>");
    root18843.append(nodes17241);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17083, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18846 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17242 = $("<span>");
      root18846.append(nodes17242);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18847 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18847); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17242;
        nodes17242 = node.contents();
        oldNodes.replaceWith(nodes17242);
      }));
      callback(root18846); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17241;
      nodes17241 = node.contents();
      oldNodes.replaceWith(nodes17241);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp17170 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17084 = mobl.ref(result__);
    
    var nodes17243 = $("<span>");
    root18843.append(nodes17243);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17084, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18848 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17244 = $("<span>");
      root18848.append(nodes17244);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18849 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18849); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17244;
        nodes17244 = node.contents();
        oldNodes.replaceWith(nodes17244);
      }));
      callback(root18848); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17243;
      nodes17243 = node.contents();
      oldNodes.replaceWith(nodes17243);
    }));
    callback(root18843); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17238;
    nodes17238 = node.contents();
    oldNodes.replaceWith(nodes17238);
  }));
  callback(root18840); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root18850 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17245 = $("<span>");
  root18850.append(nodes17245);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18851 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17086 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17085 = mobl.ref(result__);
    
    var nodes17246 = $("<span>");
    root18851.append(nodes17246);
    subs__.addSub((ui.backButton)(tmp17085, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17086, function(_, callback) {
      var root18852 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18852); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17246;
      nodes17246 = node.contents();
      oldNodes.replaceWith(nodes17246);
    }));
    callback(root18851); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17245;
    nodes17245 = node.contents();
    oldNodes.replaceWith(nodes17245);
  }));
  var nodes17247 = $("<span>");
  root18850.append(nodes17247);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18853 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp17176 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17087 = mobl.ref(result__);
    
    var nodes17248 = $("<span>");
    root18853.append(nodes17248);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17087, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18854 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17249 = $("<span>");
      root18854.append(nodes17249);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18855 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18855); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17249;
        nodes17249 = node.contents();
        oldNodes.replaceWith(nodes17249);
      }));
      callback(root18854); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17248;
      nodes17248 = node.contents();
      oldNodes.replaceWith(nodes17248);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp17175 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17088 = mobl.ref(result__);
    
    var nodes17250 = $("<span>");
    root18853.append(nodes17250);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17088, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18856 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17251 = $("<span>");
      root18856.append(nodes17251);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18857 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18857); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17251;
        nodes17251 = node.contents();
        oldNodes.replaceWith(nodes17251);
      }));
      callback(root18856); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17250;
      nodes17250 = node.contents();
      oldNodes.replaceWith(nodes17250);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp17174 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17089 = mobl.ref(result__);
    
    var nodes17252 = $("<span>");
    root18853.append(nodes17252);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17089, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18858 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17253 = $("<span>");
      root18858.append(nodes17253);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18859 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18859); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17253;
        nodes17253 = node.contents();
        oldNodes.replaceWith(nodes17253);
      }));
      callback(root18858); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17252;
      nodes17252 = node.contents();
      oldNodes.replaceWith(nodes17252);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp17173 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17090 = mobl.ref(result__);
    
    var nodes17254 = $("<span>");
    root18853.append(nodes17254);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17090, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18860 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17255 = $("<span>");
      root18860.append(nodes17255);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18861 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18861); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17255;
        nodes17255 = node.contents();
        oldNodes.replaceWith(nodes17255);
      }));
      callback(root18860); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17254;
      nodes17254 = node.contents();
      oldNodes.replaceWith(nodes17254);
    }));
    callback(root18853); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17247;
    nodes17247 = node.contents();
    oldNodes.replaceWith(nodes17247);
  }));
  callback(root18850); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root18862 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17256 = $("<span>");
  root18862.append(nodes17256);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18863 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17092 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17091 = mobl.ref(result__);
    
    var nodes17257 = $("<span>");
    root18863.append(nodes17257);
    subs__.addSub((ui.backButton)(tmp17091, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17092, function(_, callback) {
      var root18864 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18864); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17257;
      nodes17257 = node.contents();
      oldNodes.replaceWith(nodes17257);
    }));
    callback(root18863); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17256;
    nodes17256 = node.contents();
    oldNodes.replaceWith(nodes17256);
  }));
  var nodes17258 = $("<span>");
  root18862.append(nodes17258);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18865 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp17178 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17093 = mobl.ref(result__);
    
    var nodes17259 = $("<span>");
    root18865.append(nodes17259);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17093, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18866 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17260 = $("<span>");
      root18866.append(nodes17260);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18867 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18867); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17260;
        nodes17260 = node.contents();
        oldNodes.replaceWith(nodes17260);
      }));
      callback(root18866); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17259;
      nodes17259 = node.contents();
      oldNodes.replaceWith(nodes17259);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp17177 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17094 = mobl.ref(result__);
    
    var nodes17261 = $("<span>");
    root18865.append(nodes17261);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17094, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18868 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17262 = $("<span>");
      root18868.append(nodes17262);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18869 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18869); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17262;
        nodes17262 = node.contents();
        oldNodes.replaceWith(nodes17262);
      }));
      callback(root18868); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17261;
      nodes17261 = node.contents();
      oldNodes.replaceWith(nodes17261);
    }));
    callback(root18865); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17258;
    nodes17258 = node.contents();
    oldNodes.replaceWith(nodes17258);
  }));
  callback(root18862); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root18870 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17263 = $("<span>");
  root18870.append(nodes17263);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18871 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17096 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17095 = mobl.ref(result__);
    
    var nodes17264 = $("<span>");
    root18871.append(nodes17264);
    subs__.addSub((ui.backButton)(tmp17095, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17096, function(_, callback) {
      var root18872 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18872); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17264;
      nodes17264 = node.contents();
      oldNodes.replaceWith(nodes17264);
    }));
    callback(root18871); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17263;
    nodes17263 = node.contents();
    oldNodes.replaceWith(nodes17263);
  }));
  var nodes17265 = $("<span>");
  root18870.append(nodes17265);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18873 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp17183 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17097 = mobl.ref(result__);
    
    var nodes17266 = $("<span>");
    root18873.append(nodes17266);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17097, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18874 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17267 = $("<span>");
      root18874.append(nodes17267);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18875); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17267;
        nodes17267 = node.contents();
        oldNodes.replaceWith(nodes17267);
      }));
      callback(root18874); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17266;
      nodes17266 = node.contents();
      oldNodes.replaceWith(nodes17266);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp17182 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17098 = mobl.ref(result__);
    
    var nodes17268 = $("<span>");
    root18873.append(nodes17268);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17098, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18876 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17269 = $("<span>");
      root18876.append(nodes17269);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18877); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17269;
        nodes17269 = node.contents();
        oldNodes.replaceWith(nodes17269);
      }));
      callback(root18876); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17268;
      nodes17268 = node.contents();
      oldNodes.replaceWith(nodes17268);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp17181 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17099 = mobl.ref(result__);
    
    var nodes17270 = $("<span>");
    root18873.append(nodes17270);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17099, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18878 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17271 = $("<span>");
      root18878.append(nodes17271);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18879 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18879); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17271;
        nodes17271 = node.contents();
        oldNodes.replaceWith(nodes17271);
      }));
      callback(root18878); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17270;
      nodes17270 = node.contents();
      oldNodes.replaceWith(nodes17270);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp17180 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17100 = mobl.ref(result__);
    
    var nodes17272 = $("<span>");
    root18873.append(nodes17272);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17100, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18880 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17273 = $("<span>");
      root18880.append(nodes17273);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18881 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18881); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17273;
        nodes17273 = node.contents();
        oldNodes.replaceWith(nodes17273);
      }));
      callback(root18880); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17272;
      nodes17272 = node.contents();
      oldNodes.replaceWith(nodes17272);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp17179 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17101 = mobl.ref(result__);
    
    var nodes17274 = $("<span>");
    root18873.append(nodes17274);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17101, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18882 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17275 = $("<span>");
      root18882.append(nodes17275);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18883 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18883); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17275;
        nodes17275 = node.contents();
        oldNodes.replaceWith(nodes17275);
      }));
      callback(root18882); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17274;
      nodes17274 = node.contents();
      oldNodes.replaceWith(nodes17274);
    }));
    callback(root18873); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17265;
    nodes17265 = node.contents();
    oldNodes.replaceWith(nodes17265);
  }));
  callback(root18870); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root18884 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17276 = $("<span>");
  root18884.append(nodes17276);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18885 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17103 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17102 = mobl.ref(result__);
    
    var nodes17277 = $("<span>");
    root18885.append(nodes17277);
    subs__.addSub((ui.backButton)(tmp17102, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17103, function(_, callback) {
      var root18886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18886); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17277;
      nodes17277 = node.contents();
      oldNodes.replaceWith(nodes17277);
    }));
    callback(root18885); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17276;
    nodes17276 = node.contents();
    oldNodes.replaceWith(nodes17276);
  }));
  var nodes17278 = $("<span>");
  root18884.append(nodes17278);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18887 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp17186 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17104 = mobl.ref(result__);
    
    var nodes17279 = $("<span>");
    root18887.append(nodes17279);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17104, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18888 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17280 = $("<span>");
      root18888.append(nodes17280);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18889 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18889); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17280;
        nodes17280 = node.contents();
        oldNodes.replaceWith(nodes17280);
      }));
      callback(root18888); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17279;
      nodes17279 = node.contents();
      oldNodes.replaceWith(nodes17279);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp17185 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17105 = mobl.ref(result__);
    
    var nodes17281 = $("<span>");
    root18887.append(nodes17281);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17105, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18890 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17282 = $("<span>");
      root18890.append(nodes17282);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18891 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18891); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17282;
        nodes17282 = node.contents();
        oldNodes.replaceWith(nodes17282);
      }));
      callback(root18890); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17281;
      nodes17281 = node.contents();
      oldNodes.replaceWith(nodes17281);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp17184 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17106 = mobl.ref(result__);
    
    var nodes17283 = $("<span>");
    root18887.append(nodes17283);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17106, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18892 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17284 = $("<span>");
      root18892.append(nodes17284);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18893 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18893); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17284;
        nodes17284 = node.contents();
        oldNodes.replaceWith(nodes17284);
      }));
      callback(root18892); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17283;
      nodes17283 = node.contents();
      oldNodes.replaceWith(nodes17283);
    }));
    callback(root18887); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17278;
    nodes17278 = node.contents();
    oldNodes.replaceWith(nodes17278);
  }));
  callback(root18884); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root18894 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17285 = $("<span>");
  root18894.append(nodes17285);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root18895 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp17108 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp17107 = mobl.ref(result__);
    
    var nodes17286 = $("<span>");
    root18895.append(nodes17286);
    subs__.addSub((ui.backButton)(tmp17107, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp17108, function(_, callback) {
      var root18896 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18896); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17286;
      nodes17286 = node.contents();
      oldNodes.replaceWith(nodes17286);
    }));
    callback(root18895); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17285;
    nodes17285 = node.contents();
    oldNodes.replaceWith(nodes17285);
  }));
  var nodes17287 = $("<span>");
  root18894.append(nodes17287);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18897 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp17187 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17109 = mobl.ref(result__);
    
    var nodes17288 = $("<span>");
    root18897.append(nodes17288);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17109, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18898 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17289 = $("<span>");
      root18898.append(nodes17289);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18899 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18899); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17289;
        nodes17289 = node.contents();
        oldNodes.replaceWith(nodes17289);
      }));
      callback(root18898); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17288;
      nodes17288 = node.contents();
      oldNodes.replaceWith(nodes17288);
    }));
    callback(root18897); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17287;
    nodes17287 = node.contents();
    oldNodes.replaceWith(nodes17287);
  }));
  callback(root18894); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root18900 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17290 = $("<span>");
  root18900.append(nodes17290);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18901 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp17200 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17110 = mobl.ref(result__);
    
    var nodes17291 = $("<span>");
    root18901.append(nodes17291);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17110, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18902 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17292 = $("<span>");
      root18902.append(nodes17292);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18903 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18903); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17292;
        nodes17292 = node.contents();
        oldNodes.replaceWith(nodes17292);
      }));
      callback(root18902); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17291;
      nodes17291 = node.contents();
      oldNodes.replaceWith(nodes17291);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp17199 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17111 = mobl.ref(result__);
    
    var nodes17293 = $("<span>");
    root18901.append(nodes17293);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17111, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18904 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17294 = $("<span>");
      root18904.append(nodes17294);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18905 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18905); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17294;
        nodes17294 = node.contents();
        oldNodes.replaceWith(nodes17294);
      }));
      callback(root18904); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17293;
      nodes17293 = node.contents();
      oldNodes.replaceWith(nodes17293);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp17198 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17112 = mobl.ref(result__);
    
    var nodes17295 = $("<span>");
    root18901.append(nodes17295);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17112, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18906 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17296 = $("<span>");
      root18906.append(nodes17296);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18907 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18907); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17296;
        nodes17296 = node.contents();
        oldNodes.replaceWith(nodes17296);
      }));
      callback(root18906); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17295;
      nodes17295 = node.contents();
      oldNodes.replaceWith(nodes17295);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp17197 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17113 = mobl.ref(result__);
    
    var nodes17297 = $("<span>");
    root18901.append(nodes17297);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17113, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18908 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17298 = $("<span>");
      root18908.append(nodes17298);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18909 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18909); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17298;
        nodes17298 = node.contents();
        oldNodes.replaceWith(nodes17298);
      }));
      callback(root18908); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17297;
      nodes17297 = node.contents();
      oldNodes.replaceWith(nodes17297);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp17196 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17114 = mobl.ref(result__);
    
    var nodes17299 = $("<span>");
    root18901.append(nodes17299);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17114, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18910 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17300 = $("<span>");
      root18910.append(nodes17300);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18911 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18911); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17300;
        nodes17300 = node.contents();
        oldNodes.replaceWith(nodes17300);
      }));
      callback(root18910); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17299;
      nodes17299 = node.contents();
      oldNodes.replaceWith(nodes17299);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp17195 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17115 = mobl.ref(result__);
    
    var nodes17301 = $("<span>");
    root18901.append(nodes17301);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17115, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18912 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17302 = $("<span>");
      root18912.append(nodes17302);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18913 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18913); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17302;
        nodes17302 = node.contents();
        oldNodes.replaceWith(nodes17302);
      }));
      callback(root18912); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17301;
      nodes17301 = node.contents();
      oldNodes.replaceWith(nodes17301);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp17194 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17116 = mobl.ref(result__);
    
    var nodes17303 = $("<span>");
    root18901.append(nodes17303);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17116, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18914 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17304 = $("<span>");
      root18914.append(nodes17304);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18915 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18915); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17304;
        nodes17304 = node.contents();
        oldNodes.replaceWith(nodes17304);
      }));
      callback(root18914); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17303;
      nodes17303 = node.contents();
      oldNodes.replaceWith(nodes17303);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp17193 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17117 = mobl.ref(result__);
    
    var nodes17305 = $("<span>");
    root18901.append(nodes17305);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17117, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18916 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17306 = $("<span>");
      root18916.append(nodes17306);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18917 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18917); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17306;
        nodes17306 = node.contents();
        oldNodes.replaceWith(nodes17306);
      }));
      callback(root18916); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17305;
      nodes17305 = node.contents();
      oldNodes.replaceWith(nodes17305);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp17192 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17118 = mobl.ref(result__);
    
    var nodes17307 = $("<span>");
    root18901.append(nodes17307);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17118, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18918 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17308 = $("<span>");
      root18918.append(nodes17308);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18919 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18919); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17308;
        nodes17308 = node.contents();
        oldNodes.replaceWith(nodes17308);
      }));
      callback(root18918); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17307;
      nodes17307 = node.contents();
      oldNodes.replaceWith(nodes17307);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp17191 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17119 = mobl.ref(result__);
    
    var nodes17309 = $("<span>");
    root18901.append(nodes17309);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17119, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18920 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17310 = $("<span>");
      root18920.append(nodes17310);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18921 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18921); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17310;
        nodes17310 = node.contents();
        oldNodes.replaceWith(nodes17310);
      }));
      callback(root18920); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17309;
      nodes17309 = node.contents();
      oldNodes.replaceWith(nodes17309);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp17190 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17120 = mobl.ref(result__);
    
    var nodes17311 = $("<span>");
    root18901.append(nodes17311);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17120, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18922 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17312 = $("<span>");
      root18922.append(nodes17312);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18923 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18923); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17312;
        nodes17312 = node.contents();
        oldNodes.replaceWith(nodes17312);
      }));
      callback(root18922); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17311;
      nodes17311 = node.contents();
      oldNodes.replaceWith(nodes17311);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp17189 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17121 = mobl.ref(result__);
    
    var nodes17313 = $("<span>");
    root18901.append(nodes17313);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17121, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18924 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17314 = $("<span>");
      root18924.append(nodes17314);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18925 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18925); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17314;
        nodes17314 = node.contents();
        oldNodes.replaceWith(nodes17314);
      }));
      callback(root18924); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17313;
      nodes17313 = node.contents();
      oldNodes.replaceWith(nodes17313);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp17188 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17122 = mobl.ref(result__);
    
    var nodes17315 = $("<span>");
    root18901.append(nodes17315);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17122, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18926 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17316 = $("<span>");
      root18926.append(nodes17316);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18927 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18927); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17316;
        nodes17316 = node.contents();
        oldNodes.replaceWith(nodes17316);
      }));
      callback(root18926); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17315;
      nodes17315 = node.contents();
      oldNodes.replaceWith(nodes17315);
    }));
    callback(root18901); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17290;
    nodes17290 = node.contents();
    oldNodes.replaceWith(nodes17290);
  }));
  callback(root18900); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root18928 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes17317 = $("<span>");
  root18928.append(nodes17317);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18929 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp17206 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17123 = mobl.ref(result__);
    
    var nodes17318 = $("<span>");
    root18929.append(nodes17318);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17123, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18930 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17319 = $("<span>");
      root18930.append(nodes17319);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18931 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18931); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17319;
        nodes17319 = node.contents();
        oldNodes.replaceWith(nodes17319);
      }));
      callback(root18930); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17318;
      nodes17318 = node.contents();
      oldNodes.replaceWith(nodes17318);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp17205 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17124 = mobl.ref(result__);
    
    var nodes17320 = $("<span>");
    root18929.append(nodes17320);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17124, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18932 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17321 = $("<span>");
      root18932.append(nodes17321);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18933 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18933); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17321;
        nodes17321 = node.contents();
        oldNodes.replaceWith(nodes17321);
      }));
      callback(root18932); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17320;
      nodes17320 = node.contents();
      oldNodes.replaceWith(nodes17320);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp17204 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17125 = mobl.ref(result__);
    
    var nodes17322 = $("<span>");
    root18929.append(nodes17322);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17125, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18934 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17323 = $("<span>");
      root18934.append(nodes17323);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18935 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18935); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17323;
        nodes17323 = node.contents();
        oldNodes.replaceWith(nodes17323);
      }));
      callback(root18934); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17322;
      nodes17322 = node.contents();
      oldNodes.replaceWith(nodes17322);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp17203 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17126 = mobl.ref(result__);
    
    var nodes17324 = $("<span>");
    root18929.append(nodes17324);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17126, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18936 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17325 = $("<span>");
      root18936.append(nodes17325);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18937 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18937); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17325;
        nodes17325 = node.contents();
        oldNodes.replaceWith(nodes17325);
      }));
      callback(root18936); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17324;
      nodes17324 = node.contents();
      oldNodes.replaceWith(nodes17324);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp17202 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17127 = mobl.ref(result__);
    
    var nodes17326 = $("<span>");
    root18929.append(nodes17326);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17127, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18938 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17327 = $("<span>");
      root18938.append(nodes17327);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18939 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18939); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17327;
        nodes17327 = node.contents();
        oldNodes.replaceWith(nodes17327);
      }));
      callback(root18938); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17326;
      nodes17326 = node.contents();
      oldNodes.replaceWith(nodes17326);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp17201 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17128 = mobl.ref(result__);
    
    var nodes17328 = $("<span>");
    root18929.append(nodes17328);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17128, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root18940 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17329 = $("<span>");
      root18940.append(nodes17329);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18941 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18941); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17329;
        nodes17329 = node.contents();
        oldNodes.replaceWith(nodes17329);
      }));
      callback(root18940); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17328;
      nodes17328 = node.contents();
      oldNodes.replaceWith(nodes17328);
    }));
    callback(root18929); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17317;
    nodes17317 = node.contents();
    oldNodes.replaceWith(nodes17317);
  }));
  callback(root18928); return subs__;
  
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
  var root18942 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1268 = $("<div>");
  
  var ref877 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref877.get() !== null) {
    node1268.attr('class', ref877.get());
    subs__.addSub(ref877.addEventListener('change', function(_, ref, val) {
      node1268.attr('class', val);
    }));
    
  }
  subs__.addSub(ref877.rebind());
  
  var val293 = onclick.get();
  if(val293 !== null) {
    subs__.addSub(mobl.domBind(node1268, 'tap', val293));
  }
  
  
  var node1269 = $("<div>");
  
  var ref876 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref876.get() !== null) {
    node1269.attr('class', ref876.get());
    subs__.addSub(ref876.addEventListener('change', function(_, ref, val) {
      node1269.attr('class', val);
    }));
    
  }
  subs__.addSub(ref876.rebind());
  
  
  var node1270 = $("<div>");
  
  var ref874 = text;
  node1270.text(""+ref874.get());
  var ignore182 = false;
  subs__.addSub(ref874.addEventListener('change', function(_, ref, val) {
    if(ignore182) return;
    node1270.text(""+val);
  }));
  subs__.addSub(ref874.rebind());
  
  
  var ref875 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref875.get() !== null) {
    node1270.attr('class', ref875.get());
    subs__.addSub(ref875.addEventListener('change', function(_, ref, val) {
      node1270.attr('class', val);
    }));
    
  }
  subs__.addSub(ref875.rebind());
  
  node1269.append(node1270);
  node1268.append(node1269);
  var nodes17330 = $("<span>");
  node1268.append(nodes17330);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl233();
  }));
  
  function renderControl233() {
    subs__.addSub((elements)(function(elements, callback) {
      var root18943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18943); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17330;
      nodes17330 = node.contents();
      oldNodes.replaceWith(nodes17330);
    }));
  }
  renderControl233();
  root18942.append(node1268);
  callback(root18942); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp17207 = result__;
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
  var root18944 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp17131 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp17131.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp17131.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp17131.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes17331 = $("<span>");
  root18944.append(nodes17331);
  subs__.addSub((mobl.block)(tmp17131, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root18945 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp17129 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp17129.set("A" + number.get() + ". ");
    }));
    
    var nodes17332 = $("<span>");
    root18945.append(nodes17332);
    subs__.addSub((mobl.label)(tmp17129, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root18946 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18946); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17332;
      nodes17332 = node.contents();
      oldNodes.replaceWith(nodes17332);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp17130 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp17130.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1271 = $("<span>");
    root18945.append(node1271);
    var condSubs441 = new mobl.CompSubscription();
    subs__.addSub(condSubs441);
    var oldValue441;
    var renderCond441 = function() {
      var value685 = tmp17130.get();
      if(oldValue441 === value685) return;
      oldValue441 = value685;
      var subs__ = condSubs441;
      subs__.unsubscribe();
      node1271.empty();
      if(value685) {
        
        var node1272 = $("<span>");
        
        var ref878 = mobl.ref("A" + number.get());
        if(ref878.get() !== null) {
          node1272.attr('id', ref878.get());
          subs__.addSub(ref878.addEventListener('change', function(_, ref, val) {
            node1272.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1272.attr('id', "A" + number.get());
          }));
          
        }
        subs__.addSub(ref878.rebind());
        
        var nodes17333 = $("<span>");
        node1272.append(nodes17333);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root18947 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root18947); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17333;
          nodes17333 = node.contents();
          oldNodes.replaceWith(nodes17333);
        }));
        node1271.append(node1272);
        
        
        
      } else {
        
        var node1273 = $("<span>");
        
        var ref879 = mobl.ref("A" + number.get());
        if(ref879.get() !== null) {
          node1273.attr('id', ref879.get());
          subs__.addSub(ref879.addEventListener('change', function(_, ref, val) {
            node1273.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1273.attr('id', "A" + number.get());
          }));
          
        }
        subs__.addSub(ref879.rebind());
        
        var nodes17334 = $("<span>");
        node1273.append(nodes17334);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root18948 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root18948); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17334;
          nodes17334 = node.contents();
          oldNodes.replaceWith(nodes17334);
        }));
        node1271.append(node1273);
        
        
        
      }
    };
    renderCond441();
    subs__.addSub(tmp17130.addEventListener('change', function() {
      renderCond441();
    }));
    
    callback(root18945); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17331;
    nodes17331 = node.contents();
    oldNodes.replaceWith(nodes17331);
  }));
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   var result__ = mobl.$("#A" + number.get()).children("span:first").html();
                   qa.get().answer = result__;
                   if(callback && callback.apply) callback(); return;
                 };
  var tmp17135 = mobl.ref(result__);
  
  var nodes17335 = $("<span>");
  root18944.append(nodes17335);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), tmp17135, mobl.ref(null), function(_, callback) {
    var root18949 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1274 = $("<span>");
    node1274.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp17209 = result__;
      var tmp17132 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp17208 = result__;
          var result__ = tmp17208;
          tmp17132.set(result__);
          
        });
      }));
      
      var nodes17339 = $("<span>");
      node1274.append(nodes17339);
      subs__.addSub((mobl.html)(tmp17132, function(_, callback) {
        var root18953 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18953); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17339;
        nodes17339 = node.contents();
        oldNodes.replaceWith(nodes17339);
      }));
      root18949.append(node1274);
      var nodes17336 = $("<span>");
      root18949.append(nodes17336);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18950 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18950); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17336;
        nodes17336 = node.contents();
        oldNodes.replaceWith(nodes17336);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp17133 = mobl.ref(result__);
      
      var nodes17337 = $("<span>");
      root18949.append(nodes17337);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp17133, function(_, callback) {
        var root18951 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18951); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17337;
        nodes17337 = node.contents();
        oldNodes.replaceWith(nodes17337);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp17134 = mobl.ref(result__);
      
      var nodes17338 = $("<span>");
      root18949.append(nodes17338);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp17134, function(_, callback) {
        var root18952 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18952); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17338;
        nodes17338 = node.contents();
        oldNodes.replaceWith(nodes17338);
      }));
      callback(root18949); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17335;
    nodes17335 = node.contents();
    oldNodes.replaceWith(nodes17335);
  }));
  callback(root18944); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp17210 = result__;
    var result__ = tmp17210;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp17211 = result__;
        var result__ = tmp17211;
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
  var root18954 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp17219 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp17137 = mobl.ref(result__);
  
  var nodes17340 = $("<span>");
  root18954.append(nodes17340);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp17137, function(_, callback) {
    var root18955 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp17212 = result__;
                       var result__ = tmp17212;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp17213 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp17136 = mobl.ref(result__);
    
    var nodes17341 = $("<span>");
    root18955.append(nodes17341);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp17136, function(_, callback) {
      var root18956 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root18956); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes17341;
      nodes17341 = node.contents();
      oldNodes.replaceWith(nodes17341);
    }));
    callback(root18955); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17340;
    nodes17340 = node.contents();
    oldNodes.replaceWith(nodes17340);
  }));
  var nodes17342 = $("<span>");
  root18954.append(nodes17342);
  subs__.addSub((ui.group)(function(_, callback) {
    var root18957 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp17218 = result__;
                       var result__ = mobl.$("#Q" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17140 = mobl.ref(result__);
    
    var nodes17343 = $("<span>");
    root18957.append(nodes17343);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp17140, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root18958 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp17138 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp17138.set("Q" + number.get() + ". ");
      }));
      
      var nodes17344 = $("<span>");
      root18958.append(nodes17344);
      subs__.addSub((mobl.html)(tmp17138, function(_, callback) {
        var root18959 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18959); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17344;
        nodes17344 = node.contents();
        oldNodes.replaceWith(nodes17344);
      }));
      
      var node1275 = $("<span>");
      
      var ref880 = mobl.ref("Q" + number.get());
      if(ref880.get() !== null) {
        node1275.attr('id', ref880.get());
        subs__.addSub(ref880.addEventListener('change', function(_, ref, val) {
          node1275.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1275.attr('id', "Q" + number.get());
        }));
        
      }
      subs__.addSub(ref880.rebind());
      
      var nodes17346 = $("<span>");
      node1275.append(nodes17346);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root18961 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root18961); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17346;
        nodes17346 = node.contents();
        oldNodes.replaceWith(nodes17346);
      }));
      root18958.append(node1275);
      
      var node1276 = $("<span>");
      node1276.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp17215 = result__;
        var tmp17139 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp17214 = result__;
            var result__ = tmp17214;
            tmp17139.set(result__);
            
          });
        }));
        
        var nodes17345 = $("<span>");
        node1276.append(nodes17345);
        subs__.addSub((mobl.html)(tmp17139, function(_, callback) {
          var root18960 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root18960); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17345;
          nodes17345 = node.contents();
          oldNodes.replaceWith(nodes17345);
        }));
        root18958.append(node1276);
        callback(root18958); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17343;
      nodes17343 = node.contents();
      oldNodes.replaceWith(nodes17343);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp17217 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17142 = mobl.ref(result__);
    
    var nodes17347 = $("<span>");
    root18957.append(nodes17347);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17142, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root18962 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes17348 = $("<span>");
      root18962.append(nodes17348);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root18963 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp17216 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp17141 = mobl.ref(result__);
        
        var nodes17349 = $("<span>");
        root18963.append(nodes17349);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp17141, function(_, callback) {
          var root18964 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root18964); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes17349;
          nodes17349 = node.contents();
          oldNodes.replaceWith(nodes17349);
        }));
        callback(root18963); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes17348;
        nodes17348 = node.contents();
        oldNodes.replaceWith(nodes17348);
      }));
      
      var node1277 = $("<span>");
      root18962.append(node1277);
      var condSubs442 = new mobl.CompSubscription();
      subs__.addSub(condSubs442);
      var oldValue442;
      var renderCond442 = function() {
        var value686 = qa.get().done;
        if(oldValue442 === value686) return;
        oldValue442 = value686;
        var subs__ = condSubs442;
        subs__.unsubscribe();
        node1277.empty();
        if(value686) {
          var nodes17350 = $("<span>");
          node1277.append(nodes17350);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root18965 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root18965); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes17350;
            nodes17350 = node.contents();
            oldNodes.replaceWith(nodes17350);
          }));
          
          
        } else {
          
        }
      };
      renderCond442();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond442();
      }));
      
      callback(root18962); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes17347;
      nodes17347 = node.contents();
      oldNodes.replaceWith(nodes17347);
    }));
    callback(root18957); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17342;
    nodes17342 = node.contents();
    oldNodes.replaceWith(nodes17342);
  }));
  callback(root18954); return subs__;
  
  
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
  qas.list(function(coll981) {
    coll981 = coll981.reverse();
    function processOne615() {
      var item;
      item = coll981.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll981.length > 0) processOne615(); else rest615();
      
    }
    function rest615() {
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
    if(coll981.length > 0) processOne615(); else rest615();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll982) {
    coll982 = coll982.reverse();
    function processOne616() {
      var item;
      item = coll982.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll982.length > 0) processOne616(); else rest616();
      
    }
    function rest616() {
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
    if(coll982.length > 0) processOne616(); else rest616();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll983) {
    coll983 = coll983.reverse();
    function processOne617() {
      var item;
      item = coll983.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll983.length > 0) processOne617(); else rest617();
      
    }
    function rest617() {
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
    if(coll983.length > 0) processOne617(); else rest617();
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