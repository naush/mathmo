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
    var tmp278 = result__;
    var result__ = tmp278;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp279 = result__;
      var result__ = tmp279;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp281 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll90) {
    coll90 = coll90.reverse();
    function processOne6() {
      var i;
      i = coll90.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp282 = result__;
        
        if(coll90.length > 0) processOne6(); else rest6();
        
      });
    }
    function rest6() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll90.length > 0) processOne6(); else rest6();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll91) {
    coll91 = coll91.reverse();
    function processOne7() {
      var i;
      i = coll91.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp283 = result__;
          
          if(coll91.length > 0) processOne7(); else rest7();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp283 = result__;
            
            if(coll91.length > 0) processOne7(); else rest7();
            
          });
        }
      }
    }
    function rest7() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll91.length > 0) processOne7(); else rest7();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll92) {
    coll92 = coll92.reverse();
    function processOne8() {
      var i;
      i = coll92.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp284 = result__;
        
        if(coll92.length > 0) processOne8(); else rest8();
        
      });
    }
    function rest8() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll92.length > 0) processOne8(); else rest8();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root174 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes161 = $("<span>");
  root174.append(nodes161);
  subs__.addSub((ui.group)(function(_, callback) {
    var root175 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp293 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp175 = mobl.ref(result__);
    
    var nodes162 = $("<span>");
    root175.append(nodes162);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp175, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root176 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes163 = $("<span>");
      root176.append(nodes163);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root177 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root177); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes163;
        nodes163 = node.contents();
        oldNodes.replaceWith(nodes163);
      }));
      callback(root176); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes162;
      nodes162 = node.contents();
      oldNodes.replaceWith(nodes162);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp292 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp176 = mobl.ref(result__);
    
    var nodes164 = $("<span>");
    root175.append(nodes164);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp176, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root178 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes165 = $("<span>");
      root178.append(nodes165);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root179 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root179); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes165;
        nodes165 = node.contents();
        oldNodes.replaceWith(nodes165);
      }));
      callback(root178); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes164;
      nodes164 = node.contents();
      oldNodes.replaceWith(nodes164);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp291 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp177 = mobl.ref(result__);
    
    var nodes166 = $("<span>");
    root175.append(nodes166);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp177, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root180 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes167 = $("<span>");
      root180.append(nodes167);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root181 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root181); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes167;
        nodes167 = node.contents();
        oldNodes.replaceWith(nodes167);
      }));
      callback(root180); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes166;
      nodes166 = node.contents();
      oldNodes.replaceWith(nodes166);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp289 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp178 = mobl.ref(result__);
    
    var nodes168 = $("<span>");
    root175.append(nodes168);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp178, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root182 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes169 = $("<span>");
      root182.append(nodes169);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root183 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root183); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes169;
        nodes169 = node.contents();
        oldNodes.replaceWith(nodes169);
      }));
      callback(root182); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes168;
      nodes168 = node.contents();
      oldNodes.replaceWith(nodes168);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp288 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp179 = mobl.ref(result__);
    
    var nodes170 = $("<span>");
    root175.append(nodes170);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp179, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root184 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes171 = $("<span>");
      root184.append(nodes171);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root185 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root185); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes171;
        nodes171 = node.contents();
        oldNodes.replaceWith(nodes171);
      }));
      callback(root184); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes170;
      nodes170 = node.contents();
      oldNodes.replaceWith(nodes170);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp287 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp181 = mobl.ref(result__);
    
    var nodes172 = $("<span>");
    root175.append(nodes172);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp181, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root186 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes173 = $("<span>");
      root186.append(nodes173);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root187 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root187); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes173;
        nodes173 = node.contents();
        oldNodes.replaceWith(nodes173);
      }));
      callback(root186); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes172;
      nodes172 = node.contents();
      oldNodes.replaceWith(nodes172);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp286 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp182 = mobl.ref(result__);
    
    var nodes174 = $("<span>");
    root175.append(nodes174);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp182, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root188 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes175 = $("<span>");
      root188.append(nodes175);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root189 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root189); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes175;
        nodes175 = node.contents();
        oldNodes.replaceWith(nodes175);
      }));
      callback(root188); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes174;
      nodes174 = node.contents();
      oldNodes.replaceWith(nodes174);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp285 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp183 = mobl.ref(result__);
    
    var nodes176 = $("<span>");
    root175.append(nodes176);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp183, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root190 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes177 = $("<span>");
      root190.append(nodes177);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root191 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root191); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes177;
        nodes177 = node.contents();
        oldNodes.replaceWith(nodes177);
      }));
      callback(root190); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes176;
      nodes176 = node.contents();
      oldNodes.replaceWith(nodes176);
    }));
    callback(root175); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes161;
    nodes161 = node.contents();
    oldNodes.replaceWith(nodes161);
  }));
  callback(root174); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root192 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes178 = $("<span>");
  root192.append(nodes178);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root193 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp185 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp184 = mobl.ref(result__);
    
    var nodes179 = $("<span>");
    root193.append(nodes179);
    subs__.addSub((ui.backButton)(tmp184, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp185, function(_, callback) {
      var root194 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root194); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes179;
      nodes179 = node.contents();
      oldNodes.replaceWith(nodes179);
    }));
    callback(root193); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes178;
    nodes178 = node.contents();
    oldNodes.replaceWith(nodes178);
  }));
  var nodes180 = $("<span>");
  root192.append(nodes180);
  subs__.addSub((ui.group)(function(_, callback) {
    var root195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp301 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp186 = mobl.ref(result__);
    
    var nodes181 = $("<span>");
    root195.append(nodes181);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp186, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root196 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes182 = $("<span>");
      root196.append(nodes182);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root197 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root197); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes182;
        nodes182 = node.contents();
        oldNodes.replaceWith(nodes182);
      }));
      callback(root196); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes181;
      nodes181 = node.contents();
      oldNodes.replaceWith(nodes181);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp300 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp187 = mobl.ref(result__);
    
    var nodes183 = $("<span>");
    root195.append(nodes183);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp187, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root198 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes184 = $("<span>");
      root198.append(nodes184);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root199 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root199); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes184;
        nodes184 = node.contents();
        oldNodes.replaceWith(nodes184);
      }));
      callback(root198); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes183;
      nodes183 = node.contents();
      oldNodes.replaceWith(nodes183);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp299 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp188 = mobl.ref(result__);
    
    var nodes185 = $("<span>");
    root195.append(nodes185);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp188, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root200 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes186 = $("<span>");
      root200.append(nodes186);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root201 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root201); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes186;
        nodes186 = node.contents();
        oldNodes.replaceWith(nodes186);
      }));
      callback(root200); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes185;
      nodes185 = node.contents();
      oldNodes.replaceWith(nodes185);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp298 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp189 = mobl.ref(result__);
    
    var nodes187 = $("<span>");
    root195.append(nodes187);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp189, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root202 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes188 = $("<span>");
      root202.append(nodes188);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root203 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root203); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes188;
        nodes188 = node.contents();
        oldNodes.replaceWith(nodes188);
      }));
      callback(root202); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes187;
      nodes187 = node.contents();
      oldNodes.replaceWith(nodes187);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp297 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp191 = mobl.ref(result__);
    
    var nodes189 = $("<span>");
    root195.append(nodes189);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp191, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root204 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes190 = $("<span>");
      root204.append(nodes190);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root205 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root205); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes190;
        nodes190 = node.contents();
        oldNodes.replaceWith(nodes190);
      }));
      callback(root204); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes189;
      nodes189 = node.contents();
      oldNodes.replaceWith(nodes189);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp296 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp192 = mobl.ref(result__);
    
    var nodes191 = $("<span>");
    root195.append(nodes191);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp192, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root206 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes192 = $("<span>");
      root206.append(nodes192);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root207 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root207); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes192;
        nodes192 = node.contents();
        oldNodes.replaceWith(nodes192);
      }));
      callback(root206); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes191;
      nodes191 = node.contents();
      oldNodes.replaceWith(nodes191);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp295 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp193 = mobl.ref(result__);
    
    var nodes193 = $("<span>");
    root195.append(nodes193);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp193, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root208 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes194 = $("<span>");
      root208.append(nodes194);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root209 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root209); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes194;
        nodes194 = node.contents();
        oldNodes.replaceWith(nodes194);
      }));
      callback(root208); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes193;
      nodes193 = node.contents();
      oldNodes.replaceWith(nodes193);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp294 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp194 = mobl.ref(result__);
    
    var nodes195 = $("<span>");
    root195.append(nodes195);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp194, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root210 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes196 = $("<span>");
      root210.append(nodes196);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root211 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root211); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes196;
        nodes196 = node.contents();
        oldNodes.replaceWith(nodes196);
      }));
      callback(root210); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes195;
      nodes195 = node.contents();
      oldNodes.replaceWith(nodes195);
    }));
    callback(root195); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes180;
    nodes180 = node.contents();
    oldNodes.replaceWith(nodes180);
  }));
  callback(root192); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root212 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes197 = $("<span>");
  root212.append(nodes197);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root213 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp196 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp195 = mobl.ref(result__);
    
    var nodes198 = $("<span>");
    root213.append(nodes198);
    subs__.addSub((ui.backButton)(tmp195, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp196, function(_, callback) {
      var root214 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root214); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes198;
      nodes198 = node.contents();
      oldNodes.replaceWith(nodes198);
    }));
    callback(root213); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes197;
    nodes197 = node.contents();
    oldNodes.replaceWith(nodes197);
  }));
  var nodes199 = $("<span>");
  root212.append(nodes199);
  subs__.addSub((ui.group)(function(_, callback) {
    var root215 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp306 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp197 = mobl.ref(result__);
    
    var nodes200 = $("<span>");
    root215.append(nodes200);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp197, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root216 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes201 = $("<span>");
      root216.append(nodes201);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root217 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root217); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes201;
        nodes201 = node.contents();
        oldNodes.replaceWith(nodes201);
      }));
      callback(root216); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes200;
      nodes200 = node.contents();
      oldNodes.replaceWith(nodes200);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp305 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp198 = mobl.ref(result__);
    
    var nodes202 = $("<span>");
    root215.append(nodes202);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp198, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes203 = $("<span>");
      root218.append(nodes203);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root219 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root219); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes203;
        nodes203 = node.contents();
        oldNodes.replaceWith(nodes203);
      }));
      callback(root218); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes202;
      nodes202 = node.contents();
      oldNodes.replaceWith(nodes202);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp304 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp199 = mobl.ref(result__);
    
    var nodes204 = $("<span>");
    root215.append(nodes204);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp199, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root220 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes205 = $("<span>");
      root220.append(nodes205);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root221 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root221); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes205;
        nodes205 = node.contents();
        oldNodes.replaceWith(nodes205);
      }));
      callback(root220); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes204;
      nodes204 = node.contents();
      oldNodes.replaceWith(nodes204);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp303 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp200 = mobl.ref(result__);
    
    var nodes206 = $("<span>");
    root215.append(nodes206);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp200, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root222 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes207 = $("<span>");
      root222.append(nodes207);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root223 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root223); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes207;
        nodes207 = node.contents();
        oldNodes.replaceWith(nodes207);
      }));
      callback(root222); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes206;
      nodes206 = node.contents();
      oldNodes.replaceWith(nodes206);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp302 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp201 = mobl.ref(result__);
    
    var nodes208 = $("<span>");
    root215.append(nodes208);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp201, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root224 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes209 = $("<span>");
      root224.append(nodes209);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root225 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root225); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes209;
        nodes209 = node.contents();
        oldNodes.replaceWith(nodes209);
      }));
      callback(root224); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes208;
      nodes208 = node.contents();
      oldNodes.replaceWith(nodes208);
    }));
    callback(root215); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes199;
    nodes199 = node.contents();
    oldNodes.replaceWith(nodes199);
  }));
  callback(root212); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root226 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes210 = $("<span>");
  root226.append(nodes210);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root227 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp203 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp202 = mobl.ref(result__);
    
    var nodes211 = $("<span>");
    root227.append(nodes211);
    subs__.addSub((ui.backButton)(tmp202, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp203, function(_, callback) {
      var root228 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root228); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes211;
      nodes211 = node.contents();
      oldNodes.replaceWith(nodes211);
    }));
    callback(root227); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes210;
    nodes210 = node.contents();
    oldNodes.replaceWith(nodes210);
  }));
  var nodes212 = $("<span>");
  root226.append(nodes212);
  subs__.addSub((ui.group)(function(_, callback) {
    var root229 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp309 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp204 = mobl.ref(result__);
    
    var nodes213 = $("<span>");
    root229.append(nodes213);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp204, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root230 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes214 = $("<span>");
      root230.append(nodes214);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root231 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root231); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes214;
        nodes214 = node.contents();
        oldNodes.replaceWith(nodes214);
      }));
      callback(root230); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes213;
      nodes213 = node.contents();
      oldNodes.replaceWith(nodes213);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp308 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp205 = mobl.ref(result__);
    
    var nodes215 = $("<span>");
    root229.append(nodes215);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp205, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes216 = $("<span>");
      root232.append(nodes216);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root233 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root233); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes216;
        nodes216 = node.contents();
        oldNodes.replaceWith(nodes216);
      }));
      callback(root232); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes215;
      nodes215 = node.contents();
      oldNodes.replaceWith(nodes215);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp307 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp206 = mobl.ref(result__);
    
    var nodes217 = $("<span>");
    root229.append(nodes217);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp206, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root234 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes218 = $("<span>");
      root234.append(nodes218);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root235 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root235); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes218;
        nodes218 = node.contents();
        oldNodes.replaceWith(nodes218);
      }));
      callback(root234); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes217;
      nodes217 = node.contents();
      oldNodes.replaceWith(nodes217);
    }));
    callback(root229); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes212;
    nodes212 = node.contents();
    oldNodes.replaceWith(nodes212);
  }));
  callback(root226); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root236 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes219 = $("<span>");
  root236.append(nodes219);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root237 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp208 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp207 = mobl.ref(result__);
    
    var nodes220 = $("<span>");
    root237.append(nodes220);
    subs__.addSub((ui.backButton)(tmp207, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp208, function(_, callback) {
      var root238 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root238); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes220;
      nodes220 = node.contents();
      oldNodes.replaceWith(nodes220);
    }));
    callback(root237); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes219;
    nodes219 = node.contents();
    oldNodes.replaceWith(nodes219);
  }));
  var nodes221 = $("<span>");
  root236.append(nodes221);
  subs__.addSub((ui.group)(function(_, callback) {
    var root239 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp314 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp209 = mobl.ref(result__);
    
    var nodes222 = $("<span>");
    root239.append(nodes222);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp209, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root240 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes223 = $("<span>");
      root240.append(nodes223);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root241 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root241); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes223;
        nodes223 = node.contents();
        oldNodes.replaceWith(nodes223);
      }));
      callback(root240); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes222;
      nodes222 = node.contents();
      oldNodes.replaceWith(nodes222);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp313 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp211 = mobl.ref(result__);
    
    var nodes224 = $("<span>");
    root239.append(nodes224);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp211, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root242 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes225 = $("<span>");
      root242.append(nodes225);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root243 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root243); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes225;
        nodes225 = node.contents();
        oldNodes.replaceWith(nodes225);
      }));
      callback(root242); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes224;
      nodes224 = node.contents();
      oldNodes.replaceWith(nodes224);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp312 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp212 = mobl.ref(result__);
    
    var nodes226 = $("<span>");
    root239.append(nodes226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp212, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root244 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes227 = $("<span>");
      root244.append(nodes227);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root245 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root245); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes227;
        nodes227 = node.contents();
        oldNodes.replaceWith(nodes227);
      }));
      callback(root244); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes226;
      nodes226 = node.contents();
      oldNodes.replaceWith(nodes226);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp311 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp213 = mobl.ref(result__);
    
    var nodes228 = $("<span>");
    root239.append(nodes228);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp213, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root246 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes229 = $("<span>");
      root246.append(nodes229);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root247 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root247); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes229;
        nodes229 = node.contents();
        oldNodes.replaceWith(nodes229);
      }));
      callback(root246); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes228;
      nodes228 = node.contents();
      oldNodes.replaceWith(nodes228);
    }));
    callback(root239); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes221;
    nodes221 = node.contents();
    oldNodes.replaceWith(nodes221);
  }));
  callback(root236); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root248 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes230 = $("<span>");
  root248.append(nodes230);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root249 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp215 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp214 = mobl.ref(result__);
    
    var nodes231 = $("<span>");
    root249.append(nodes231);
    subs__.addSub((ui.backButton)(tmp214, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp215, function(_, callback) {
      var root250 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root250); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes231;
      nodes231 = node.contents();
      oldNodes.replaceWith(nodes231);
    }));
    callback(root249); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes230;
    nodes230 = node.contents();
    oldNodes.replaceWith(nodes230);
  }));
  var nodes232 = $("<span>");
  root248.append(nodes232);
  subs__.addSub((ui.group)(function(_, callback) {
    var root251 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp316 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp216 = mobl.ref(result__);
    
    var nodes233 = $("<span>");
    root251.append(nodes233);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp216, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root252 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes234 = $("<span>");
      root252.append(nodes234);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root253 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root253); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes234;
        nodes234 = node.contents();
        oldNodes.replaceWith(nodes234);
      }));
      callback(root252); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes233;
      nodes233 = node.contents();
      oldNodes.replaceWith(nodes233);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp315 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp217 = mobl.ref(result__);
    
    var nodes235 = $("<span>");
    root251.append(nodes235);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp217, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root254 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes236 = $("<span>");
      root254.append(nodes236);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root255 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root255); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes236;
        nodes236 = node.contents();
        oldNodes.replaceWith(nodes236);
      }));
      callback(root254); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes235;
      nodes235 = node.contents();
      oldNodes.replaceWith(nodes235);
    }));
    callback(root251); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes232;
    nodes232 = node.contents();
    oldNodes.replaceWith(nodes232);
  }));
  callback(root248); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root256 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes237 = $("<span>");
  root256.append(nodes237);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root257 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp219 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp218 = mobl.ref(result__);
    
    var nodes238 = $("<span>");
    root257.append(nodes238);
    subs__.addSub((ui.backButton)(tmp218, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp219, function(_, callback) {
      var root258 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root258); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes238;
      nodes238 = node.contents();
      oldNodes.replaceWith(nodes238);
    }));
    callback(root257); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes237;
    nodes237 = node.contents();
    oldNodes.replaceWith(nodes237);
  }));
  var nodes239 = $("<span>");
  root256.append(nodes239);
  subs__.addSub((ui.group)(function(_, callback) {
    var root259 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp322 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp221 = mobl.ref(result__);
    
    var nodes240 = $("<span>");
    root259.append(nodes240);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp221, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root260 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes241 = $("<span>");
      root260.append(nodes241);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root261 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root261); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes241;
        nodes241 = node.contents();
        oldNodes.replaceWith(nodes241);
      }));
      callback(root260); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes240;
      nodes240 = node.contents();
      oldNodes.replaceWith(nodes240);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp321 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp222 = mobl.ref(result__);
    
    var nodes242 = $("<span>");
    root259.append(nodes242);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp222, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root262 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes243 = $("<span>");
      root262.append(nodes243);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root263 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root263); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes243;
        nodes243 = node.contents();
        oldNodes.replaceWith(nodes243);
      }));
      callback(root262); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes242;
      nodes242 = node.contents();
      oldNodes.replaceWith(nodes242);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp319 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp223 = mobl.ref(result__);
    
    var nodes244 = $("<span>");
    root259.append(nodes244);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp223, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root264 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes245 = $("<span>");
      root264.append(nodes245);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root265 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root265); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes245;
        nodes245 = node.contents();
        oldNodes.replaceWith(nodes245);
      }));
      callback(root264); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes244;
      nodes244 = node.contents();
      oldNodes.replaceWith(nodes244);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp318 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp224 = mobl.ref(result__);
    
    var nodes246 = $("<span>");
    root259.append(nodes246);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp224, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root266 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes247 = $("<span>");
      root266.append(nodes247);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root267 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root267); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes247;
        nodes247 = node.contents();
        oldNodes.replaceWith(nodes247);
      }));
      callback(root266); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes246;
      nodes246 = node.contents();
      oldNodes.replaceWith(nodes246);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp317 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp225 = mobl.ref(result__);
    
    var nodes248 = $("<span>");
    root259.append(nodes248);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp225, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root268 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes249 = $("<span>");
      root268.append(nodes249);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root269 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root269); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes249;
        nodes249 = node.contents();
        oldNodes.replaceWith(nodes249);
      }));
      callback(root268); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes248;
      nodes248 = node.contents();
      oldNodes.replaceWith(nodes248);
    }));
    callback(root259); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes239;
    nodes239 = node.contents();
    oldNodes.replaceWith(nodes239);
  }));
  callback(root256); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root270 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes250 = $("<span>");
  root270.append(nodes250);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root271 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp227 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp226 = mobl.ref(result__);
    
    var nodes251 = $("<span>");
    root271.append(nodes251);
    subs__.addSub((ui.backButton)(tmp226, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp227, function(_, callback) {
      var root272 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root272); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes251;
      nodes251 = node.contents();
      oldNodes.replaceWith(nodes251);
    }));
    callback(root271); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes250;
    nodes250 = node.contents();
    oldNodes.replaceWith(nodes250);
  }));
  var nodes252 = $("<span>");
  root270.append(nodes252);
  subs__.addSub((ui.group)(function(_, callback) {
    var root273 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp325 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp228 = mobl.ref(result__);
    
    var nodes253 = $("<span>");
    root273.append(nodes253);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp228, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root274 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes254 = $("<span>");
      root274.append(nodes254);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root275 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root275); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes254;
        nodes254 = node.contents();
        oldNodes.replaceWith(nodes254);
      }));
      callback(root274); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes253;
      nodes253 = node.contents();
      oldNodes.replaceWith(nodes253);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp324 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp229 = mobl.ref(result__);
    
    var nodes255 = $("<span>");
    root273.append(nodes255);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp229, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root276 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes256 = $("<span>");
      root276.append(nodes256);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root277 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root277); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes256;
        nodes256 = node.contents();
        oldNodes.replaceWith(nodes256);
      }));
      callback(root276); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes255;
      nodes255 = node.contents();
      oldNodes.replaceWith(nodes255);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp323 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp231 = mobl.ref(result__);
    
    var nodes257 = $("<span>");
    root273.append(nodes257);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp231, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root278 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes258 = $("<span>");
      root278.append(nodes258);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root279 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root279); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes258;
        nodes258 = node.contents();
        oldNodes.replaceWith(nodes258);
      }));
      callback(root278); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes257;
      nodes257 = node.contents();
      oldNodes.replaceWith(nodes257);
    }));
    callback(root273); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes252;
    nodes252 = node.contents();
    oldNodes.replaceWith(nodes252);
  }));
  callback(root270); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root280 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes259 = $("<span>");
  root280.append(nodes259);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root281 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp233 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp232 = mobl.ref(result__);
    
    var nodes260 = $("<span>");
    root281.append(nodes260);
    subs__.addSub((ui.backButton)(tmp232, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp233, function(_, callback) {
      var root282 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root282); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes260;
      nodes260 = node.contents();
      oldNodes.replaceWith(nodes260);
    }));
    callback(root281); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes259;
    nodes259 = node.contents();
    oldNodes.replaceWith(nodes259);
  }));
  var nodes261 = $("<span>");
  root280.append(nodes261);
  subs__.addSub((ui.group)(function(_, callback) {
    var root283 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp326 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp234 = mobl.ref(result__);
    
    var nodes262 = $("<span>");
    root283.append(nodes262);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp234, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root284 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes263 = $("<span>");
      root284.append(nodes263);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root285 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root285); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes263;
        nodes263 = node.contents();
        oldNodes.replaceWith(nodes263);
      }));
      callback(root284); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes262;
      nodes262 = node.contents();
      oldNodes.replaceWith(nodes262);
    }));
    callback(root283); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes261;
    nodes261 = node.contents();
    oldNodes.replaceWith(nodes261);
  }));
  callback(root280); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root286 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes264 = $("<span>");
  root286.append(nodes264);
  subs__.addSub((ui.group)(function(_, callback) {
    var root287 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp341 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp235 = mobl.ref(result__);
    
    var nodes265 = $("<span>");
    root287.append(nodes265);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp235, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root288 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes266 = $("<span>");
      root288.append(nodes266);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root289 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root289); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes266;
        nodes266 = node.contents();
        oldNodes.replaceWith(nodes266);
      }));
      callback(root288); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes265;
      nodes265 = node.contents();
      oldNodes.replaceWith(nodes265);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp339 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp236 = mobl.ref(result__);
    
    var nodes267 = $("<span>");
    root287.append(nodes267);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp236, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root290 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes268 = $("<span>");
      root290.append(nodes268);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root291 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root291); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes268;
        nodes268 = node.contents();
        oldNodes.replaceWith(nodes268);
      }));
      callback(root290); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes267;
      nodes267 = node.contents();
      oldNodes.replaceWith(nodes267);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp338 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp237 = mobl.ref(result__);
    
    var nodes269 = $("<span>");
    root287.append(nodes269);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp237, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root292 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes270 = $("<span>");
      root292.append(nodes270);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root293 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root293); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes270;
        nodes270 = node.contents();
        oldNodes.replaceWith(nodes270);
      }));
      callback(root292); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes269;
      nodes269 = node.contents();
      oldNodes.replaceWith(nodes269);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp337 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp238 = mobl.ref(result__);
    
    var nodes271 = $("<span>");
    root287.append(nodes271);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp238, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root294 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes272 = $("<span>");
      root294.append(nodes272);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root295 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root295); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes272;
        nodes272 = node.contents();
        oldNodes.replaceWith(nodes272);
      }));
      callback(root294); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes271;
      nodes271 = node.contents();
      oldNodes.replaceWith(nodes271);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp336 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp239 = mobl.ref(result__);
    
    var nodes273 = $("<span>");
    root287.append(nodes273);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp239, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root296 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes274 = $("<span>");
      root296.append(nodes274);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root297 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root297); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes274;
        nodes274 = node.contents();
        oldNodes.replaceWith(nodes274);
      }));
      callback(root296); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes273;
      nodes273 = node.contents();
      oldNodes.replaceWith(nodes273);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp335 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp241 = mobl.ref(result__);
    
    var nodes275 = $("<span>");
    root287.append(nodes275);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp241, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root298 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes276 = $("<span>");
      root298.append(nodes276);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root299 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root299); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes276;
        nodes276 = node.contents();
        oldNodes.replaceWith(nodes276);
      }));
      callback(root298); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes275;
      nodes275 = node.contents();
      oldNodes.replaceWith(nodes275);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp334 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp242 = mobl.ref(result__);
    
    var nodes277 = $("<span>");
    root287.append(nodes277);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp242, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root300 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes278 = $("<span>");
      root300.append(nodes278);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root301 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root301); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes278;
        nodes278 = node.contents();
        oldNodes.replaceWith(nodes278);
      }));
      callback(root300); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes277;
      nodes277 = node.contents();
      oldNodes.replaceWith(nodes277);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp333 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp243 = mobl.ref(result__);
    
    var nodes279 = $("<span>");
    root287.append(nodes279);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp243, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root302 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes280 = $("<span>");
      root302.append(nodes280);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root303 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root303); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes280;
        nodes280 = node.contents();
        oldNodes.replaceWith(nodes280);
      }));
      callback(root302); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes279;
      nodes279 = node.contents();
      oldNodes.replaceWith(nodes279);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp332 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp244 = mobl.ref(result__);
    
    var nodes281 = $("<span>");
    root287.append(nodes281);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp244, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root304 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes282 = $("<span>");
      root304.append(nodes282);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root305 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root305); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes282;
        nodes282 = node.contents();
        oldNodes.replaceWith(nodes282);
      }));
      callback(root304); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes281;
      nodes281 = node.contents();
      oldNodes.replaceWith(nodes281);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp331 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp245 = mobl.ref(result__);
    
    var nodes283 = $("<span>");
    root287.append(nodes283);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp245, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root306 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes284 = $("<span>");
      root306.append(nodes284);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root307 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root307); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes284;
        nodes284 = node.contents();
        oldNodes.replaceWith(nodes284);
      }));
      callback(root306); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes283;
      nodes283 = node.contents();
      oldNodes.replaceWith(nodes283);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp329 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp246 = mobl.ref(result__);
    
    var nodes285 = $("<span>");
    root287.append(nodes285);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp246, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root308 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes286 = $("<span>");
      root308.append(nodes286);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root309); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes286;
        nodes286 = node.contents();
        oldNodes.replaceWith(nodes286);
      }));
      callback(root308); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes285;
      nodes285 = node.contents();
      oldNodes.replaceWith(nodes285);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp328 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp247 = mobl.ref(result__);
    
    var nodes287 = $("<span>");
    root287.append(nodes287);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp247, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root310 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes288 = $("<span>");
      root310.append(nodes288);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root311 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root311); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes288;
        nodes288 = node.contents();
        oldNodes.replaceWith(nodes288);
      }));
      callback(root310); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes287;
      nodes287 = node.contents();
      oldNodes.replaceWith(nodes287);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp327 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp248 = mobl.ref(result__);
    
    var nodes289 = $("<span>");
    root287.append(nodes289);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp248, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root312 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes290 = $("<span>");
      root312.append(nodes290);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root313 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root313); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes290;
        nodes290 = node.contents();
        oldNodes.replaceWith(nodes290);
      }));
      callback(root312); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes289;
      nodes289 = node.contents();
      oldNodes.replaceWith(nodes289);
    }));
    callback(root287); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes264;
    nodes264 = node.contents();
    oldNodes.replaceWith(nodes264);
  }));
  callback(root286); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root314 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes291 = $("<span>");
  root314.append(nodes291);
  subs__.addSub((ui.group)(function(_, callback) {
    var root315 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp347 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp249 = mobl.ref(result__);
    
    var nodes292 = $("<span>");
    root315.append(nodes292);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp249, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root316 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes293 = $("<span>");
      root316.append(nodes293);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root317 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root317); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes293;
        nodes293 = node.contents();
        oldNodes.replaceWith(nodes293);
      }));
      callback(root316); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes292;
      nodes292 = node.contents();
      oldNodes.replaceWith(nodes292);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp346 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp251 = mobl.ref(result__);
    
    var nodes294 = $("<span>");
    root315.append(nodes294);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp251, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root318 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes295 = $("<span>");
      root318.append(nodes295);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root319 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root319); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes295;
        nodes295 = node.contents();
        oldNodes.replaceWith(nodes295);
      }));
      callback(root318); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes294;
      nodes294 = node.contents();
      oldNodes.replaceWith(nodes294);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp345 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp252 = mobl.ref(result__);
    
    var nodes296 = $("<span>");
    root315.append(nodes296);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp252, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root320 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes297 = $("<span>");
      root320.append(nodes297);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root321 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root321); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes297;
        nodes297 = node.contents();
        oldNodes.replaceWith(nodes297);
      }));
      callback(root320); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes296;
      nodes296 = node.contents();
      oldNodes.replaceWith(nodes296);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp344 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp253 = mobl.ref(result__);
    
    var nodes298 = $("<span>");
    root315.append(nodes298);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp253, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root322 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes299 = $("<span>");
      root322.append(nodes299);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root323 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root323); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes299;
        nodes299 = node.contents();
        oldNodes.replaceWith(nodes299);
      }));
      callback(root322); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes298;
      nodes298 = node.contents();
      oldNodes.replaceWith(nodes298);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp343 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp254 = mobl.ref(result__);
    
    var nodes300 = $("<span>");
    root315.append(nodes300);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp254, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes301 = $("<span>");
      root324.append(nodes301);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root325 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root325); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes301;
        nodes301 = node.contents();
        oldNodes.replaceWith(nodes301);
      }));
      callback(root324); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes300;
      nodes300 = node.contents();
      oldNodes.replaceWith(nodes300);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp342 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp255 = mobl.ref(result__);
    
    var nodes302 = $("<span>");
    root315.append(nodes302);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp255, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root326 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes303 = $("<span>");
      root326.append(nodes303);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root327 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root327); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes303;
        nodes303 = node.contents();
        oldNodes.replaceWith(nodes303);
      }));
      callback(root326); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes302;
      nodes302 = node.contents();
      oldNodes.replaceWith(nodes302);
    }));
    callback(root315); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes291;
    nodes291 = node.contents();
    oldNodes.replaceWith(nodes291);
  }));
  callback(root314); return subs__;
  
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
  var root328 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node9 = $("<div>");
  
  var ref7 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref7.get() !== null) {
    node9.attr('class', ref7.get());
    subs__.addSub(ref7.addEventListener('change', function(_, ref, val) {
      node9.attr('class', val);
    }));
    
  }
  subs__.addSub(ref7.rebind());
  
  var val1 = onclick.get();
  if(val1 !== null) {
    subs__.addSub(mobl.domBind(node9, 'tap', val1));
  }
  
  
  var node10 = $("<div>");
  
  var ref6 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref6.get() !== null) {
    node10.attr('class', ref6.get());
    subs__.addSub(ref6.addEventListener('change', function(_, ref, val) {
      node10.attr('class', val);
    }));
    
  }
  subs__.addSub(ref6.rebind());
  
  
  var node11 = $("<div>");
  
  var ref4 = text;
  node11.text(""+ref4.get());
  var ignore1 = false;
  subs__.addSub(ref4.addEventListener('change', function(_, ref, val) {
    if(ignore1) return;
    node11.text(""+val);
  }));
  subs__.addSub(ref4.rebind());
  
  
  var ref5 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref5.get() !== null) {
    node11.attr('class', ref5.get());
    subs__.addSub(ref5.addEventListener('change', function(_, ref, val) {
      node11.attr('class', val);
    }));
    
  }
  subs__.addSub(ref5.rebind());
  
  node10.append(node11);
  node9.append(node10);
  var nodes304 = $("<span>");
  node9.append(nodes304);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1();
  }));
  
  function renderControl1() {
    subs__.addSub((elements)(function(elements, callback) {
      var root329 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root329); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes304;
      nodes304 = node.contents();
      oldNodes.replaceWith(nodes304);
    }));
  }
  renderControl1();
  root328.append(node9);
  callback(root328); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp348 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp349 = result__;
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
  var root330 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12 = $("<span>");
  root330.append(node12);
  var condSubs3 = new mobl.CompSubscription();
  subs__.addSub(condSubs3);
  var oldValue3;
  var renderCond3 = function() {
    var value59 = qa.get().correct;
    if(oldValue3 === value59) return;
    oldValue3 = value59;
    var subs__ = condSubs3;
    subs__.unsubscribe();
    node12.empty();
    if(value59) {
      var nodes305 = $("<span>");
      node12.append(nodes305);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root331 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp259 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp259.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node13 = $("<span>");
        root331.append(node13);
        var condSubs4 = new mobl.CompSubscription();
        subs__.addSub(condSubs4);
        var oldValue4;
        var renderCond4 = function() {
          var value60 = tmp259.get();
          if(oldValue4 === value60) return;
          oldValue4 = value60;
          var subs__ = condSubs4;
          subs__.unsubscribe();
          node13.empty();
          if(value60) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp256 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp256.set("A" + qa.get().number + ". ");
            }));
            
            var nodes306 = $("<span>");
            node13.append(nodes306);
            subs__.addSub((mobl.label)(tmp256, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root332 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root332); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes306;
              nodes306 = node.contents();
              oldNodes.replaceWith(nodes306);
            }));
            var nodes307 = $("<span>");
            node13.append(nodes307);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root333 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root333); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes307;
              nodes307 = node.contents();
              oldNodes.replaceWith(nodes307);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp257 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp257.set("A" + qa.get().number + ". ");
            }));
            
            var nodes308 = $("<span>");
            node13.append(nodes308);
            subs__.addSub((mobl.label)(tmp257, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root334 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root334); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes308;
              nodes308 = node.contents();
              oldNodes.replaceWith(nodes308);
            }));
            var nodes309 = $("<span>");
            node13.append(nodes309);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root335 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root335); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes309;
              nodes309 = node.contents();
              oldNodes.replaceWith(nodes309);
            }));
            
            var node14 = $("<span>");
            node14.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp352 = result__;
              var tmp258 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp351 = result__;
                  var result__ = tmp351;
                  tmp258.set(result__);
                  
                });
              }));
              
              var nodes310 = $("<span>");
              node14.append(nodes310);
              subs__.addSub((mobl.html)(tmp258, function(_, callback) {
                var root336 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root336); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes310;
                nodes310 = node.contents();
                oldNodes.replaceWith(nodes310);
              }));
              node13.append(node14);
              
              
            });
            
            
            
          }
        };
        renderCond4();
        subs__.addSub(tmp259.addEventListener('change', function() {
          renderCond4();
        }));
        
        callback(root331); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes305;
        nodes305 = node.contents();
        oldNodes.replaceWith(nodes305);
      }));
      
      
    } else {
      var nodes311 = $("<span>");
      node12.append(nodes311);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root337 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp264 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp264.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node15 = $("<span>");
        root337.append(node15);
        var condSubs5 = new mobl.CompSubscription();
        subs__.addSub(condSubs5);
        var oldValue5;
        var renderCond5 = function() {
          var value61 = tmp264.get();
          if(oldValue5 === value61) return;
          oldValue5 = value61;
          var subs__ = condSubs5;
          subs__.unsubscribe();
          node15.empty();
          if(value61) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp261 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp261.set("A" + qa.get().number + ". ");
            }));
            
            var nodes312 = $("<span>");
            node15.append(nodes312);
            subs__.addSub((mobl.label)(tmp261, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root338 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root338); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes312;
              nodes312 = node.contents();
              oldNodes.replaceWith(nodes312);
            }));
            var nodes313 = $("<span>");
            node15.append(nodes313);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root339 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root339); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes313;
              nodes313 = node.contents();
              oldNodes.replaceWith(nodes313);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp262 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp262.set("A" + qa.get().number + ". ");
            }));
            
            var nodes314 = $("<span>");
            node15.append(nodes314);
            subs__.addSub((mobl.label)(tmp262, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root340 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root340); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes314;
              nodes314 = node.contents();
              oldNodes.replaceWith(nodes314);
            }));
            var nodes315 = $("<span>");
            node15.append(nodes315);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root341 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root341); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes315;
              nodes315 = node.contents();
              oldNodes.replaceWith(nodes315);
            }));
            
            var node16 = $("<span>");
            node16.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp354 = result__;
              var tmp263 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp353 = result__;
                  var result__ = tmp353;
                  tmp263.set(result__);
                  
                });
              }));
              
              var nodes316 = $("<span>");
              node16.append(nodes316);
              subs__.addSub((mobl.html)(tmp263, function(_, callback) {
                var root342 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root342); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes316;
                nodes316 = node.contents();
                oldNodes.replaceWith(nodes316);
              }));
              node15.append(node16);
              
              
            });
            
            
            
          }
        };
        renderCond5();
        subs__.addSub(tmp264.addEventListener('change', function() {
          renderCond5();
        }));
        
        callback(root337); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes311;
        nodes311 = node.contents();
        oldNodes.replaceWith(nodes311);
      }));
      
      
    }
  };
  renderCond3();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond3();
  }));
  
  var nodes317 = $("<span>");
  root330.append(nodes317);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root343 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node17 = $("<span>");
    node17.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp356 = result__;
      var tmp265 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp355 = result__;
          var result__ = tmp355;
          tmp265.set(result__);
          
        });
      }));
      
      var nodes321 = $("<span>");
      node17.append(nodes321);
      subs__.addSub((mobl.html)(tmp265, function(_, callback) {
        var root347 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root347); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes321;
        nodes321 = node.contents();
        oldNodes.replaceWith(nodes321);
      }));
      root343.append(node17);
      var nodes318 = $("<span>");
      root343.append(nodes318);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root344 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root344); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes318;
        nodes318 = node.contents();
        oldNodes.replaceWith(nodes318);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp266 = mobl.ref(result__);
      
      var nodes319 = $("<span>");
      root343.append(nodes319);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp266, function(_, callback) {
        var root345 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root345); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes319;
        nodes319 = node.contents();
        oldNodes.replaceWith(nodes319);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp267 = mobl.ref(result__);
      
      var nodes320 = $("<span>");
      root343.append(nodes320);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp267, function(_, callback) {
        var root346 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root346); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes320;
        nodes320 = node.contents();
        oldNodes.replaceWith(nodes320);
      }));
      callback(root343); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes317;
    nodes317 = node.contents();
    oldNodes.replaceWith(nodes317);
  }));
  callback(root330); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp357 = result__;
    var result__ = tmp357;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp358 = result__;
        var result__ = tmp358;
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
  var root348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node18 = $("<span>");
  
  var ref8 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref8.get() !== null) {
    node18.attr('style', ref8.get());
    subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
      node18.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node18.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node18.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref8.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp268 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp268.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp268.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes322 = $("<span>");
  node18.append(nodes322);
  subs__.addSub((mobl.html)(tmp268, function(_, callback) {
    var root349 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root349); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes322;
    nodes322 = node.contents();
    oldNodes.replaceWith(nodes322);
  }));
  root348.append(node18);
  callback(root348); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root350 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp367 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp272 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp271 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp271.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes323 = $("<span>");
  root350.append(nodes323);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp271, tmp272, function(_, callback) {
    var root351 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp359 = result__;
                       var result__ = tmp359;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp361 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp269 = mobl.ref(result__);
    
    var nodes324 = $("<span>");
    root351.append(nodes324);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp269, function(_, callback) {
      var root352 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root352); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes324;
      nodes324 = node.contents();
      oldNodes.replaceWith(nodes324);
    }));
    callback(root351); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes323;
    nodes323 = node.contents();
    oldNodes.replaceWith(nodes323);
  }));
  var nodes325 = $("<span>");
  root350.append(nodes325);
  subs__.addSub((ui.group)(function(_, callback) {
    var root353 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp366 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp275 = mobl.ref(result__);
    
    var nodes326 = $("<span>");
    root353.append(nodes326);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp275, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root354 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp273 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp273.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp273.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes327 = $("<span>");
      root354.append(nodes327);
      subs__.addSub((mobl.html)(tmp273, function(_, callback) {
        var root355 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root355); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes327;
        nodes327 = node.contents();
        oldNodes.replaceWith(nodes327);
      }));
      
      var node19 = $("<span>");
      node19.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp363 = result__;
        var tmp274 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp362 = result__;
            var result__ = tmp362;
            tmp274.set(result__);
            
          });
        }));
        
        var nodes328 = $("<span>");
        node19.append(nodes328);
        subs__.addSub((mobl.html)(tmp274, function(_, callback) {
          var root356 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root356); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes328;
          nodes328 = node.contents();
          oldNodes.replaceWith(nodes328);
        }));
        root354.append(node19);
        callback(root354); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes326;
      nodes326 = node.contents();
      oldNodes.replaceWith(nodes326);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp365 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp277 = mobl.ref(result__);
    
    var nodes329 = $("<span>");
    root353.append(nodes329);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp277, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root357 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes330 = $("<span>");
      root357.append(nodes330);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root358 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp364 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp276 = mobl.ref(result__);
        
        var nodes331 = $("<span>");
        root358.append(nodes331);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp276, function(_, callback) {
          var root359 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root359); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes331;
          nodes331 = node.contents();
          oldNodes.replaceWith(nodes331);
        }));
        callback(root358); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes330;
        nodes330 = node.contents();
        oldNodes.replaceWith(nodes330);
      }));
      
      var node20 = $("<span>");
      root357.append(node20);
      var condSubs6 = new mobl.CompSubscription();
      subs__.addSub(condSubs6);
      var oldValue6;
      var renderCond6 = function() {
        var value62 = qa.get().done;
        if(oldValue6 === value62) return;
        oldValue6 = value62;
        var subs__ = condSubs6;
        subs__.unsubscribe();
        node20.empty();
        if(value62) {
          var nodes332 = $("<span>");
          node20.append(nodes332);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root360 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root360); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes332;
            nodes332 = node.contents();
            oldNodes.replaceWith(nodes332);
          }));
          
          
        } else {
          
        }
      };
      renderCond6();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond6();
      }));
      
      callback(root357); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes329;
      nodes329 = node.contents();
      oldNodes.replaceWith(nodes329);
    }));
    callback(root353); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes325;
    nodes325 = node.contents();
    oldNodes.replaceWith(nodes325);
  }));
  callback(root350); return subs__;
  
  
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
  qas.list(function(coll93) {
    coll93 = coll93.reverse();
    function processOne9() {
      var item;
      item = coll93.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll93.length > 0) processOne9(); else rest9();
      
    }
    function rest9() {
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
    if(coll93.length > 0) processOne9(); else rest9();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll94) {
    coll94 = coll94.reverse();
    function processOne10() {
      var item;
      item = coll94.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll94.length > 0) processOne10(); else rest10();
      
    }
    function rest10() {
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
    if(coll94.length > 0) processOne10(); else rest10();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll95) {
    coll95 = coll95.reverse();
    function processOne11() {
      var item;
      item = coll95.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll95.length > 0) processOne11(); else rest11();
      
    }
    function rest11() {
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
    if(coll95.length > 0) processOne11(); else rest11();
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