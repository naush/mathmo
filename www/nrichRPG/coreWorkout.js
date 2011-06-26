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
    var tmp20111 = result__;
    var result__ = tmp20111;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp20112 = result__;
      var result__ = tmp20112;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp20113 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1086) {
    coll1086 = coll1086.reverse();
    function processOne720() {
      var i;
      i = coll1086.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp20114 = result__;
        
        if(coll1086.length > 0) processOne720(); else rest720();
        
      });
    }
    function rest720() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1086.length > 0) processOne720(); else rest720();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1087) {
    coll1087 = coll1087.reverse();
    function processOne721() {
      var i;
      i = coll1087.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp20115 = result__;
          
          if(coll1087.length > 0) processOne721(); else rest721();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp20115 = result__;
            
            if(coll1087.length > 0) processOne721(); else rest721();
            
          });
        }
      }
    }
    function rest721() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1087.length > 0) processOne721(); else rest721();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1088) {
    coll1088 = coll1088.reverse();
    function processOne722() {
      var i;
      i = coll1088.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp20116 = result__;
        
        if(coll1088.length > 0) processOne722(); else rest722();
        
      });
    }
    function rest722() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1088.length > 0) processOne722(); else rest722();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root21992 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes20139 = $("<span>");
  root21992.append(nodes20139);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21993 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp20124 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20023 = mobl.ref(result__);
    
    var nodes20140 = $("<span>");
    root21993.append(nodes20140);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20023, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21994 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20141 = $("<span>");
      root21994.append(nodes20141);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21995 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21995); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20141;
        nodes20141 = node.contents();
        oldNodes.replaceWith(nodes20141);
      }));
      callback(root21994); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20140;
      nodes20140 = node.contents();
      oldNodes.replaceWith(nodes20140);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp20123 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20024 = mobl.ref(result__);
    
    var nodes20142 = $("<span>");
    root21993.append(nodes20142);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20024, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21996 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20143 = $("<span>");
      root21996.append(nodes20143);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21997 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21997); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20143;
        nodes20143 = node.contents();
        oldNodes.replaceWith(nodes20143);
      }));
      callback(root21996); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20142;
      nodes20142 = node.contents();
      oldNodes.replaceWith(nodes20142);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp20122 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20025 = mobl.ref(result__);
    
    var nodes20144 = $("<span>");
    root21993.append(nodes20144);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20025, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root21998 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20145 = $("<span>");
      root21998.append(nodes20145);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root21999 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root21999); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20145;
        nodes20145 = node.contents();
        oldNodes.replaceWith(nodes20145);
      }));
      callback(root21998); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20144;
      nodes20144 = node.contents();
      oldNodes.replaceWith(nodes20144);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp20121 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20026 = mobl.ref(result__);
    
    var nodes20146 = $("<span>");
    root21993.append(nodes20146);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20026, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22000 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20147 = $("<span>");
      root22000.append(nodes20147);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22001 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22001); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20147;
        nodes20147 = node.contents();
        oldNodes.replaceWith(nodes20147);
      }));
      callback(root22000); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20146;
      nodes20146 = node.contents();
      oldNodes.replaceWith(nodes20146);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp20120 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20027 = mobl.ref(result__);
    
    var nodes20148 = $("<span>");
    root21993.append(nodes20148);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20027, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22002 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20149 = $("<span>");
      root22002.append(nodes20149);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22003 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22003); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20149;
        nodes20149 = node.contents();
        oldNodes.replaceWith(nodes20149);
      }));
      callback(root22002); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20148;
      nodes20148 = node.contents();
      oldNodes.replaceWith(nodes20148);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp20119 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20028 = mobl.ref(result__);
    
    var nodes20150 = $("<span>");
    root21993.append(nodes20150);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20028, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22004 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20151 = $("<span>");
      root22004.append(nodes20151);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22005 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22005); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20151;
        nodes20151 = node.contents();
        oldNodes.replaceWith(nodes20151);
      }));
      callback(root22004); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20150;
      nodes20150 = node.contents();
      oldNodes.replaceWith(nodes20150);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp20118 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20029 = mobl.ref(result__);
    
    var nodes20152 = $("<span>");
    root21993.append(nodes20152);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20029, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22006 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20153 = $("<span>");
      root22006.append(nodes20153);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22007 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22007); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20153;
        nodes20153 = node.contents();
        oldNodes.replaceWith(nodes20153);
      }));
      callback(root22006); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20152;
      nodes20152 = node.contents();
      oldNodes.replaceWith(nodes20152);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp20117 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20030 = mobl.ref(result__);
    
    var nodes20154 = $("<span>");
    root21993.append(nodes20154);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20030, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20155 = $("<span>");
      root22008.append(nodes20155);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22009 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22009); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20155;
        nodes20155 = node.contents();
        oldNodes.replaceWith(nodes20155);
      }));
      callback(root22008); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20154;
      nodes20154 = node.contents();
      oldNodes.replaceWith(nodes20154);
    }));
    callback(root21993); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20139;
    nodes20139 = node.contents();
    oldNodes.replaceWith(nodes20139);
  }));
  callback(root21992); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root22010 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes20156 = $("<span>");
  root22010.append(nodes20156);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root22011 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp20032 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp20031 = mobl.ref(result__);
    
    var nodes20157 = $("<span>");
    root22011.append(nodes20157);
    subs__.addSub((ui.backButton)(tmp20031, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20032, function(_, callback) {
      var root22012 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22012); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20157;
      nodes20157 = node.contents();
      oldNodes.replaceWith(nodes20157);
    }));
    callback(root22011); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20156;
    nodes20156 = node.contents();
    oldNodes.replaceWith(nodes20156);
  }));
  var nodes20158 = $("<span>");
  root22010.append(nodes20158);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22013 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp20132 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20033 = mobl.ref(result__);
    
    var nodes20159 = $("<span>");
    root22013.append(nodes20159);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20033, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22014 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20160 = $("<span>");
      root22014.append(nodes20160);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22015 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22015); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20160;
        nodes20160 = node.contents();
        oldNodes.replaceWith(nodes20160);
      }));
      callback(root22014); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20159;
      nodes20159 = node.contents();
      oldNodes.replaceWith(nodes20159);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp20131 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20034 = mobl.ref(result__);
    
    var nodes20161 = $("<span>");
    root22013.append(nodes20161);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20034, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22016 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20162 = $("<span>");
      root22016.append(nodes20162);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22017 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22017); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20162;
        nodes20162 = node.contents();
        oldNodes.replaceWith(nodes20162);
      }));
      callback(root22016); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20161;
      nodes20161 = node.contents();
      oldNodes.replaceWith(nodes20161);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp20130 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20035 = mobl.ref(result__);
    
    var nodes20163 = $("<span>");
    root22013.append(nodes20163);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20035, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22018 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20164 = $("<span>");
      root22018.append(nodes20164);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22019 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22019); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20164;
        nodes20164 = node.contents();
        oldNodes.replaceWith(nodes20164);
      }));
      callback(root22018); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20163;
      nodes20163 = node.contents();
      oldNodes.replaceWith(nodes20163);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp20129 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20036 = mobl.ref(result__);
    
    var nodes20165 = $("<span>");
    root22013.append(nodes20165);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20036, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22020 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20166 = $("<span>");
      root22020.append(nodes20166);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22021 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22021); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20166;
        nodes20166 = node.contents();
        oldNodes.replaceWith(nodes20166);
      }));
      callback(root22020); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20165;
      nodes20165 = node.contents();
      oldNodes.replaceWith(nodes20165);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp20128 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20037 = mobl.ref(result__);
    
    var nodes20167 = $("<span>");
    root22013.append(nodes20167);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20037, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20168 = $("<span>");
      root22022.append(nodes20168);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22023 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22023); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20168;
        nodes20168 = node.contents();
        oldNodes.replaceWith(nodes20168);
      }));
      callback(root22022); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20167;
      nodes20167 = node.contents();
      oldNodes.replaceWith(nodes20167);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp20127 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20038 = mobl.ref(result__);
    
    var nodes20169 = $("<span>");
    root22013.append(nodes20169);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20038, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22024 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20170 = $("<span>");
      root22024.append(nodes20170);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22025 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22025); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20170;
        nodes20170 = node.contents();
        oldNodes.replaceWith(nodes20170);
      }));
      callback(root22024); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20169;
      nodes20169 = node.contents();
      oldNodes.replaceWith(nodes20169);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp20126 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20039 = mobl.ref(result__);
    
    var nodes20171 = $("<span>");
    root22013.append(nodes20171);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20039, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22026 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20172 = $("<span>");
      root22026.append(nodes20172);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22027 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22027); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20172;
        nodes20172 = node.contents();
        oldNodes.replaceWith(nodes20172);
      }));
      callback(root22026); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20171;
      nodes20171 = node.contents();
      oldNodes.replaceWith(nodes20171);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp20125 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20040 = mobl.ref(result__);
    
    var nodes20173 = $("<span>");
    root22013.append(nodes20173);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20040, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22028 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20174 = $("<span>");
      root22028.append(nodes20174);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22029 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22029); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20174;
        nodes20174 = node.contents();
        oldNodes.replaceWith(nodes20174);
      }));
      callback(root22028); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20173;
      nodes20173 = node.contents();
      oldNodes.replaceWith(nodes20173);
    }));
    callback(root22013); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20158;
    nodes20158 = node.contents();
    oldNodes.replaceWith(nodes20158);
  }));
  callback(root22010); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root22030 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes20175 = $("<span>");
  root22030.append(nodes20175);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root22031 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp20042 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp20041 = mobl.ref(result__);
    
    var nodes20176 = $("<span>");
    root22031.append(nodes20176);
    subs__.addSub((ui.backButton)(tmp20041, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20042, function(_, callback) {
      var root22032 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22032); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20176;
      nodes20176 = node.contents();
      oldNodes.replaceWith(nodes20176);
    }));
    callback(root22031); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20175;
    nodes20175 = node.contents();
    oldNodes.replaceWith(nodes20175);
  }));
  var nodes20177 = $("<span>");
  root22030.append(nodes20177);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22033 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp20137 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20043 = mobl.ref(result__);
    
    var nodes20178 = $("<span>");
    root22033.append(nodes20178);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20043, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22034 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20179 = $("<span>");
      root22034.append(nodes20179);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22035 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22035); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20179;
        nodes20179 = node.contents();
        oldNodes.replaceWith(nodes20179);
      }));
      callback(root22034); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20178;
      nodes20178 = node.contents();
      oldNodes.replaceWith(nodes20178);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp20136 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20044 = mobl.ref(result__);
    
    var nodes20180 = $("<span>");
    root22033.append(nodes20180);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20044, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22036 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20181 = $("<span>");
      root22036.append(nodes20181);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22037 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22037); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20181;
        nodes20181 = node.contents();
        oldNodes.replaceWith(nodes20181);
      }));
      callback(root22036); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20180;
      nodes20180 = node.contents();
      oldNodes.replaceWith(nodes20180);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp20135 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20045 = mobl.ref(result__);
    
    var nodes20182 = $("<span>");
    root22033.append(nodes20182);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20045, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22038 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20183 = $("<span>");
      root22038.append(nodes20183);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22039 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22039); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20183;
        nodes20183 = node.contents();
        oldNodes.replaceWith(nodes20183);
      }));
      callback(root22038); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20182;
      nodes20182 = node.contents();
      oldNodes.replaceWith(nodes20182);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp20134 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20046 = mobl.ref(result__);
    
    var nodes20184 = $("<span>");
    root22033.append(nodes20184);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20046, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22040 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20185 = $("<span>");
      root22040.append(nodes20185);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22041 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22041); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20185;
        nodes20185 = node.contents();
        oldNodes.replaceWith(nodes20185);
      }));
      callback(root22040); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20184;
      nodes20184 = node.contents();
      oldNodes.replaceWith(nodes20184);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp20133 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20047 = mobl.ref(result__);
    
    var nodes20186 = $("<span>");
    root22033.append(nodes20186);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20047, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22042 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20187 = $("<span>");
      root22042.append(nodes20187);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22043 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22043); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20187;
        nodes20187 = node.contents();
        oldNodes.replaceWith(nodes20187);
      }));
      callback(root22042); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20186;
      nodes20186 = node.contents();
      oldNodes.replaceWith(nodes20186);
    }));
    callback(root22033); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20177;
    nodes20177 = node.contents();
    oldNodes.replaceWith(nodes20177);
  }));
  callback(root22030); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root22044 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes20188 = $("<span>");
  root22044.append(nodes20188);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root22045 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp20049 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp20048 = mobl.ref(result__);
    
    var nodes20189 = $("<span>");
    root22045.append(nodes20189);
    subs__.addSub((ui.backButton)(tmp20048, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20049, function(_, callback) {
      var root22046 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22046); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20189;
      nodes20189 = node.contents();
      oldNodes.replaceWith(nodes20189);
    }));
    callback(root22045); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20188;
    nodes20188 = node.contents();
    oldNodes.replaceWith(nodes20188);
  }));
  var nodes20190 = $("<span>");
  root22044.append(nodes20190);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22047 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp20140 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20050 = mobl.ref(result__);
    
    var nodes20191 = $("<span>");
    root22047.append(nodes20191);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20050, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22048 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20192 = $("<span>");
      root22048.append(nodes20192);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22049 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22049); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20192;
        nodes20192 = node.contents();
        oldNodes.replaceWith(nodes20192);
      }));
      callback(root22048); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20191;
      nodes20191 = node.contents();
      oldNodes.replaceWith(nodes20191);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp20139 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20051 = mobl.ref(result__);
    
    var nodes20193 = $("<span>");
    root22047.append(nodes20193);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20051, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22050 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20194 = $("<span>");
      root22050.append(nodes20194);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22051 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22051); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20194;
        nodes20194 = node.contents();
        oldNodes.replaceWith(nodes20194);
      }));
      callback(root22050); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20193;
      nodes20193 = node.contents();
      oldNodes.replaceWith(nodes20193);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp20138 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20052 = mobl.ref(result__);
    
    var nodes20195 = $("<span>");
    root22047.append(nodes20195);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20052, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22052 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20196 = $("<span>");
      root22052.append(nodes20196);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22053 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22053); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20196;
        nodes20196 = node.contents();
        oldNodes.replaceWith(nodes20196);
      }));
      callback(root22052); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20195;
      nodes20195 = node.contents();
      oldNodes.replaceWith(nodes20195);
    }));
    callback(root22047); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20190;
    nodes20190 = node.contents();
    oldNodes.replaceWith(nodes20190);
  }));
  callback(root22044); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root22054 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes20197 = $("<span>");
  root22054.append(nodes20197);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root22055 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp20054 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp20053 = mobl.ref(result__);
    
    var nodes20198 = $("<span>");
    root22055.append(nodes20198);
    subs__.addSub((ui.backButton)(tmp20053, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20054, function(_, callback) {
      var root22056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22056); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20198;
      nodes20198 = node.contents();
      oldNodes.replaceWith(nodes20198);
    }));
    callback(root22055); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20197;
    nodes20197 = node.contents();
    oldNodes.replaceWith(nodes20197);
  }));
  var nodes20199 = $("<span>");
  root22054.append(nodes20199);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22057 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp20144 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20055 = mobl.ref(result__);
    
    var nodes20200 = $("<span>");
    root22057.append(nodes20200);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20055, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22058 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20201 = $("<span>");
      root22058.append(nodes20201);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22059 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22059); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20201;
        nodes20201 = node.contents();
        oldNodes.replaceWith(nodes20201);
      }));
      callback(root22058); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20200;
      nodes20200 = node.contents();
      oldNodes.replaceWith(nodes20200);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp20143 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20056 = mobl.ref(result__);
    
    var nodes20202 = $("<span>");
    root22057.append(nodes20202);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20056, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22060 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20203 = $("<span>");
      root22060.append(nodes20203);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22061 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22061); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20203;
        nodes20203 = node.contents();
        oldNodes.replaceWith(nodes20203);
      }));
      callback(root22060); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20202;
      nodes20202 = node.contents();
      oldNodes.replaceWith(nodes20202);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp20142 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20057 = mobl.ref(result__);
    
    var nodes20204 = $("<span>");
    root22057.append(nodes20204);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20057, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22062 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20205 = $("<span>");
      root22062.append(nodes20205);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22063 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22063); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20205;
        nodes20205 = node.contents();
        oldNodes.replaceWith(nodes20205);
      }));
      callback(root22062); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20204;
      nodes20204 = node.contents();
      oldNodes.replaceWith(nodes20204);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp20141 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20058 = mobl.ref(result__);
    
    var nodes20206 = $("<span>");
    root22057.append(nodes20206);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20058, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22064 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20207 = $("<span>");
      root22064.append(nodes20207);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22065 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22065); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20207;
        nodes20207 = node.contents();
        oldNodes.replaceWith(nodes20207);
      }));
      callback(root22064); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20206;
      nodes20206 = node.contents();
      oldNodes.replaceWith(nodes20206);
    }));
    callback(root22057); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20199;
    nodes20199 = node.contents();
    oldNodes.replaceWith(nodes20199);
  }));
  callback(root22054); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root22066 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes20208 = $("<span>");
  root22066.append(nodes20208);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root22067 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp20060 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp20059 = mobl.ref(result__);
    
    var nodes20209 = $("<span>");
    root22067.append(nodes20209);
    subs__.addSub((ui.backButton)(tmp20059, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20060, function(_, callback) {
      var root22068 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22068); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20209;
      nodes20209 = node.contents();
      oldNodes.replaceWith(nodes20209);
    }));
    callback(root22067); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20208;
    nodes20208 = node.contents();
    oldNodes.replaceWith(nodes20208);
  }));
  var nodes20210 = $("<span>");
  root22066.append(nodes20210);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22069 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp20146 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20061 = mobl.ref(result__);
    
    var nodes20211 = $("<span>");
    root22069.append(nodes20211);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20061, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22070 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20212 = $("<span>");
      root22070.append(nodes20212);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22071 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22071); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20212;
        nodes20212 = node.contents();
        oldNodes.replaceWith(nodes20212);
      }));
      callback(root22070); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20211;
      nodes20211 = node.contents();
      oldNodes.replaceWith(nodes20211);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp20145 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20062 = mobl.ref(result__);
    
    var nodes20213 = $("<span>");
    root22069.append(nodes20213);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20062, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22072 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20214 = $("<span>");
      root22072.append(nodes20214);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22073 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22073); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20214;
        nodes20214 = node.contents();
        oldNodes.replaceWith(nodes20214);
      }));
      callback(root22072); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20213;
      nodes20213 = node.contents();
      oldNodes.replaceWith(nodes20213);
    }));
    callback(root22069); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20210;
    nodes20210 = node.contents();
    oldNodes.replaceWith(nodes20210);
  }));
  callback(root22066); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root22074 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes20215 = $("<span>");
  root22074.append(nodes20215);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root22075 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp20064 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp20063 = mobl.ref(result__);
    
    var nodes20216 = $("<span>");
    root22075.append(nodes20216);
    subs__.addSub((ui.backButton)(tmp20063, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20064, function(_, callback) {
      var root22076 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22076); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20216;
      nodes20216 = node.contents();
      oldNodes.replaceWith(nodes20216);
    }));
    callback(root22075); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20215;
    nodes20215 = node.contents();
    oldNodes.replaceWith(nodes20215);
  }));
  var nodes20217 = $("<span>");
  root22074.append(nodes20217);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22077 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp20151 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20065 = mobl.ref(result__);
    
    var nodes20218 = $("<span>");
    root22077.append(nodes20218);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20065, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22078 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20219 = $("<span>");
      root22078.append(nodes20219);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22079 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22079); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20219;
        nodes20219 = node.contents();
        oldNodes.replaceWith(nodes20219);
      }));
      callback(root22078); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20218;
      nodes20218 = node.contents();
      oldNodes.replaceWith(nodes20218);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp20150 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20066 = mobl.ref(result__);
    
    var nodes20220 = $("<span>");
    root22077.append(nodes20220);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20066, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22080 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20221 = $("<span>");
      root22080.append(nodes20221);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22081 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22081); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20221;
        nodes20221 = node.contents();
        oldNodes.replaceWith(nodes20221);
      }));
      callback(root22080); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20220;
      nodes20220 = node.contents();
      oldNodes.replaceWith(nodes20220);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp20149 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20067 = mobl.ref(result__);
    
    var nodes20222 = $("<span>");
    root22077.append(nodes20222);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20067, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22082 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20223 = $("<span>");
      root22082.append(nodes20223);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22083 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22083); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20223;
        nodes20223 = node.contents();
        oldNodes.replaceWith(nodes20223);
      }));
      callback(root22082); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20222;
      nodes20222 = node.contents();
      oldNodes.replaceWith(nodes20222);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp20148 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20068 = mobl.ref(result__);
    
    var nodes20224 = $("<span>");
    root22077.append(nodes20224);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20068, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20225 = $("<span>");
      root22084.append(nodes20225);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22085 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22085); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20225;
        nodes20225 = node.contents();
        oldNodes.replaceWith(nodes20225);
      }));
      callback(root22084); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20224;
      nodes20224 = node.contents();
      oldNodes.replaceWith(nodes20224);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp20147 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20069 = mobl.ref(result__);
    
    var nodes20226 = $("<span>");
    root22077.append(nodes20226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20069, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22086 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20227 = $("<span>");
      root22086.append(nodes20227);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22087 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22087); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20227;
        nodes20227 = node.contents();
        oldNodes.replaceWith(nodes20227);
      }));
      callback(root22086); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20226;
      nodes20226 = node.contents();
      oldNodes.replaceWith(nodes20226);
    }));
    callback(root22077); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20217;
    nodes20217 = node.contents();
    oldNodes.replaceWith(nodes20217);
  }));
  callback(root22074); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root22088 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes20228 = $("<span>");
  root22088.append(nodes20228);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root22089 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp20071 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp20070 = mobl.ref(result__);
    
    var nodes20229 = $("<span>");
    root22089.append(nodes20229);
    subs__.addSub((ui.backButton)(tmp20070, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20071, function(_, callback) {
      var root22090 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22090); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20229;
      nodes20229 = node.contents();
      oldNodes.replaceWith(nodes20229);
    }));
    callback(root22089); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20228;
    nodes20228 = node.contents();
    oldNodes.replaceWith(nodes20228);
  }));
  var nodes20230 = $("<span>");
  root22088.append(nodes20230);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22091 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp20154 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20072 = mobl.ref(result__);
    
    var nodes20231 = $("<span>");
    root22091.append(nodes20231);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20072, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22092 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20232 = $("<span>");
      root22092.append(nodes20232);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22093 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22093); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20232;
        nodes20232 = node.contents();
        oldNodes.replaceWith(nodes20232);
      }));
      callback(root22092); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20231;
      nodes20231 = node.contents();
      oldNodes.replaceWith(nodes20231);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp20153 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20073 = mobl.ref(result__);
    
    var nodes20233 = $("<span>");
    root22091.append(nodes20233);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20073, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22094 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20234 = $("<span>");
      root22094.append(nodes20234);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22095 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22095); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20234;
        nodes20234 = node.contents();
        oldNodes.replaceWith(nodes20234);
      }));
      callback(root22094); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20233;
      nodes20233 = node.contents();
      oldNodes.replaceWith(nodes20233);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp20152 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20074 = mobl.ref(result__);
    
    var nodes20235 = $("<span>");
    root22091.append(nodes20235);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20074, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22096 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20236 = $("<span>");
      root22096.append(nodes20236);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22097 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22097); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20236;
        nodes20236 = node.contents();
        oldNodes.replaceWith(nodes20236);
      }));
      callback(root22096); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20235;
      nodes20235 = node.contents();
      oldNodes.replaceWith(nodes20235);
    }));
    callback(root22091); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20230;
    nodes20230 = node.contents();
    oldNodes.replaceWith(nodes20230);
  }));
  callback(root22088); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root22098 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes20237 = $("<span>");
  root22098.append(nodes20237);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root22099 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp20076 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp20075 = mobl.ref(result__);
    
    var nodes20238 = $("<span>");
    root22099.append(nodes20238);
    subs__.addSub((ui.backButton)(tmp20075, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp20076, function(_, callback) {
      var root22100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22100); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20238;
      nodes20238 = node.contents();
      oldNodes.replaceWith(nodes20238);
    }));
    callback(root22099); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20237;
    nodes20237 = node.contents();
    oldNodes.replaceWith(nodes20237);
  }));
  var nodes20239 = $("<span>");
  root22098.append(nodes20239);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22101 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp20155 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20077 = mobl.ref(result__);
    
    var nodes20240 = $("<span>");
    root22101.append(nodes20240);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20077, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20241 = $("<span>");
      root22102.append(nodes20241);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22103 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22103); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20241;
        nodes20241 = node.contents();
        oldNodes.replaceWith(nodes20241);
      }));
      callback(root22102); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20240;
      nodes20240 = node.contents();
      oldNodes.replaceWith(nodes20240);
    }));
    callback(root22101); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20239;
    nodes20239 = node.contents();
    oldNodes.replaceWith(nodes20239);
  }));
  callback(root22098); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root22104 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes20242 = $("<span>");
  root22104.append(nodes20242);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22105 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp20168 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20078 = mobl.ref(result__);
    
    var nodes20243 = $("<span>");
    root22105.append(nodes20243);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20078, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22106 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20244 = $("<span>");
      root22106.append(nodes20244);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22107 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22107); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20244;
        nodes20244 = node.contents();
        oldNodes.replaceWith(nodes20244);
      }));
      callback(root22106); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20243;
      nodes20243 = node.contents();
      oldNodes.replaceWith(nodes20243);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp20167 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20079 = mobl.ref(result__);
    
    var nodes20245 = $("<span>");
    root22105.append(nodes20245);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20079, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20246 = $("<span>");
      root22108.append(nodes20246);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22109 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22109); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20246;
        nodes20246 = node.contents();
        oldNodes.replaceWith(nodes20246);
      }));
      callback(root22108); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20245;
      nodes20245 = node.contents();
      oldNodes.replaceWith(nodes20245);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp20166 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20080 = mobl.ref(result__);
    
    var nodes20247 = $("<span>");
    root22105.append(nodes20247);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20080, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22110 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20248 = $("<span>");
      root22110.append(nodes20248);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22111 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22111); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20248;
        nodes20248 = node.contents();
        oldNodes.replaceWith(nodes20248);
      }));
      callback(root22110); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20247;
      nodes20247 = node.contents();
      oldNodes.replaceWith(nodes20247);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp20165 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20081 = mobl.ref(result__);
    
    var nodes20249 = $("<span>");
    root22105.append(nodes20249);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20081, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22112 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20250 = $("<span>");
      root22112.append(nodes20250);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22113 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22113); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20250;
        nodes20250 = node.contents();
        oldNodes.replaceWith(nodes20250);
      }));
      callback(root22112); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20249;
      nodes20249 = node.contents();
      oldNodes.replaceWith(nodes20249);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp20164 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20082 = mobl.ref(result__);
    
    var nodes20251 = $("<span>");
    root22105.append(nodes20251);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20082, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20252 = $("<span>");
      root22114.append(nodes20252);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22115 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22115); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20252;
        nodes20252 = node.contents();
        oldNodes.replaceWith(nodes20252);
      }));
      callback(root22114); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20251;
      nodes20251 = node.contents();
      oldNodes.replaceWith(nodes20251);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp20163 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20083 = mobl.ref(result__);
    
    var nodes20253 = $("<span>");
    root22105.append(nodes20253);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20083, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22116 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20254 = $("<span>");
      root22116.append(nodes20254);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22117); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20254;
        nodes20254 = node.contents();
        oldNodes.replaceWith(nodes20254);
      }));
      callback(root22116); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20253;
      nodes20253 = node.contents();
      oldNodes.replaceWith(nodes20253);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp20162 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20084 = mobl.ref(result__);
    
    var nodes20255 = $("<span>");
    root22105.append(nodes20255);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20084, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22118 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20256 = $("<span>");
      root22118.append(nodes20256);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22119 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22119); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20256;
        nodes20256 = node.contents();
        oldNodes.replaceWith(nodes20256);
      }));
      callback(root22118); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20255;
      nodes20255 = node.contents();
      oldNodes.replaceWith(nodes20255);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp20161 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20085 = mobl.ref(result__);
    
    var nodes20257 = $("<span>");
    root22105.append(nodes20257);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20085, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22120 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20258 = $("<span>");
      root22120.append(nodes20258);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22121 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22121); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20258;
        nodes20258 = node.contents();
        oldNodes.replaceWith(nodes20258);
      }));
      callback(root22120); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20257;
      nodes20257 = node.contents();
      oldNodes.replaceWith(nodes20257);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp20160 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20086 = mobl.ref(result__);
    
    var nodes20259 = $("<span>");
    root22105.append(nodes20259);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20086, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22122 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20260 = $("<span>");
      root22122.append(nodes20260);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22123 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22123); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20260;
        nodes20260 = node.contents();
        oldNodes.replaceWith(nodes20260);
      }));
      callback(root22122); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20259;
      nodes20259 = node.contents();
      oldNodes.replaceWith(nodes20259);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp20159 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20087 = mobl.ref(result__);
    
    var nodes20261 = $("<span>");
    root22105.append(nodes20261);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20087, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22124 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20262 = $("<span>");
      root22124.append(nodes20262);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22125 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22125); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20262;
        nodes20262 = node.contents();
        oldNodes.replaceWith(nodes20262);
      }));
      callback(root22124); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20261;
      nodes20261 = node.contents();
      oldNodes.replaceWith(nodes20261);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp20158 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20088 = mobl.ref(result__);
    
    var nodes20263 = $("<span>");
    root22105.append(nodes20263);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20088, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22126 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20264 = $("<span>");
      root22126.append(nodes20264);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22127 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22127); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20264;
        nodes20264 = node.contents();
        oldNodes.replaceWith(nodes20264);
      }));
      callback(root22126); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20263;
      nodes20263 = node.contents();
      oldNodes.replaceWith(nodes20263);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp20157 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20089 = mobl.ref(result__);
    
    var nodes20265 = $("<span>");
    root22105.append(nodes20265);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20089, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22128 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20266 = $("<span>");
      root22128.append(nodes20266);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22129 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22129); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20266;
        nodes20266 = node.contents();
        oldNodes.replaceWith(nodes20266);
      }));
      callback(root22128); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20265;
      nodes20265 = node.contents();
      oldNodes.replaceWith(nodes20265);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp20156 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20090 = mobl.ref(result__);
    
    var nodes20267 = $("<span>");
    root22105.append(nodes20267);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20090, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22130 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20268 = $("<span>");
      root22130.append(nodes20268);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22131 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22131); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20268;
        nodes20268 = node.contents();
        oldNodes.replaceWith(nodes20268);
      }));
      callback(root22130); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20267;
      nodes20267 = node.contents();
      oldNodes.replaceWith(nodes20267);
    }));
    callback(root22105); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20242;
    nodes20242 = node.contents();
    oldNodes.replaceWith(nodes20242);
  }));
  callback(root22104); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root22132 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes20269 = $("<span>");
  root22132.append(nodes20269);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22133 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp20174 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20091 = mobl.ref(result__);
    
    var nodes20270 = $("<span>");
    root22133.append(nodes20270);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20091, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22134 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20271 = $("<span>");
      root22134.append(nodes20271);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22135 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22135); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20271;
        nodes20271 = node.contents();
        oldNodes.replaceWith(nodes20271);
      }));
      callback(root22134); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20270;
      nodes20270 = node.contents();
      oldNodes.replaceWith(nodes20270);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp20173 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20092 = mobl.ref(result__);
    
    var nodes20272 = $("<span>");
    root22133.append(nodes20272);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20092, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22136 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20273 = $("<span>");
      root22136.append(nodes20273);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22137 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22137); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20273;
        nodes20273 = node.contents();
        oldNodes.replaceWith(nodes20273);
      }));
      callback(root22136); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20272;
      nodes20272 = node.contents();
      oldNodes.replaceWith(nodes20272);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp20172 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20093 = mobl.ref(result__);
    
    var nodes20274 = $("<span>");
    root22133.append(nodes20274);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20093, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22138 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20275 = $("<span>");
      root22138.append(nodes20275);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22139 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22139); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20275;
        nodes20275 = node.contents();
        oldNodes.replaceWith(nodes20275);
      }));
      callback(root22138); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20274;
      nodes20274 = node.contents();
      oldNodes.replaceWith(nodes20274);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp20171 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20094 = mobl.ref(result__);
    
    var nodes20276 = $("<span>");
    root22133.append(nodes20276);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20094, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22140 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20277 = $("<span>");
      root22140.append(nodes20277);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22141 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22141); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20277;
        nodes20277 = node.contents();
        oldNodes.replaceWith(nodes20277);
      }));
      callback(root22140); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20276;
      nodes20276 = node.contents();
      oldNodes.replaceWith(nodes20276);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp20170 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20095 = mobl.ref(result__);
    
    var nodes20278 = $("<span>");
    root22133.append(nodes20278);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20095, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22142 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20279 = $("<span>");
      root22142.append(nodes20279);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22143 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22143); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20279;
        nodes20279 = node.contents();
        oldNodes.replaceWith(nodes20279);
      }));
      callback(root22142); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20278;
      nodes20278 = node.contents();
      oldNodes.replaceWith(nodes20278);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp20169 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20096 = mobl.ref(result__);
    
    var nodes20280 = $("<span>");
    root22133.append(nodes20280);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20096, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22144 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20281 = $("<span>");
      root22144.append(nodes20281);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22145 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22145); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20281;
        nodes20281 = node.contents();
        oldNodes.replaceWith(nodes20281);
      }));
      callback(root22144); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20280;
      nodes20280 = node.contents();
      oldNodes.replaceWith(nodes20280);
    }));
    callback(root22133); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20269;
    nodes20269 = node.contents();
    oldNodes.replaceWith(nodes20269);
  }));
  callback(root22132); return subs__;
  
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
  var root22146 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1432 = $("<div>");
  
  var ref987 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref987.get() !== null) {
    node1432.attr('class', ref987.get());
    subs__.addSub(ref987.addEventListener('change', function(_, ref, val) {
      node1432.attr('class', val);
    }));
    
  }
  subs__.addSub(ref987.rebind());
  
  var val311 = onclick.get();
  if(val311 !== null) {
    subs__.addSub(mobl.domBind(node1432, 'tap', val311));
  }
  
  
  var node1433 = $("<div>");
  
  var ref986 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref986.get() !== null) {
    node1433.attr('class', ref986.get());
    subs__.addSub(ref986.addEventListener('change', function(_, ref, val) {
      node1433.attr('class', val);
    }));
    
  }
  subs__.addSub(ref986.rebind());
  
  
  var node1434 = $("<div>");
  
  var ref984 = text;
  node1434.text(""+ref984.get());
  var ignore200 = false;
  subs__.addSub(ref984.addEventListener('change', function(_, ref, val) {
    if(ignore200) return;
    node1434.text(""+val);
  }));
  subs__.addSub(ref984.rebind());
  
  
  var ref985 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref985.get() !== null) {
    node1434.attr('class', ref985.get());
    subs__.addSub(ref985.addEventListener('change', function(_, ref, val) {
      node1434.attr('class', val);
    }));
    
  }
  subs__.addSub(ref985.rebind());
  
  node1433.append(node1434);
  node1432.append(node1433);
  var nodes20282 = $("<span>");
  node1432.append(nodes20282);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl251();
  }));
  
  function renderControl251() {
    subs__.addSub((elements)(function(elements, callback) {
      var root22147 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22147); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20282;
      nodes20282 = node.contents();
      oldNodes.replaceWith(nodes20282);
    }));
  }
  renderControl251();
  root22146.append(node1432);
  callback(root22146); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp20175 = result__;
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
  var root22148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
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
  var tmp20100 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp20099 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp20099.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp20099.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp20099.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes20283 = $("<span>");
  root22148.append(nodes20283);
  subs__.addSub((mobl.block)(tmp20099, mobl.ref(null), tmp20100, mobl.ref(null), function(_, callback) {
    var root22149 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp20097 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp20097.set("A" + number.get() + ". ");
    }));
    
    var nodes20284 = $("<span>");
    root22149.append(nodes20284);
    subs__.addSub((mobl.label)(tmp20097, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root22150 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22150); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20284;
      nodes20284 = node.contents();
      oldNodes.replaceWith(nodes20284);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp20098 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp20098.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1435 = $("<span>");
    root22149.append(node1435);
    var condSubs477 = new mobl.CompSubscription();
    subs__.addSub(condSubs477);
    var oldValue477;
    var renderCond477 = function() {
      var value721 = tmp20098.get();
      if(oldValue477 === value721) return;
      oldValue477 = value721;
      var subs__ = condSubs477;
      subs__.unsubscribe();
      node1435.empty();
      if(value721) {
        
        var node1436 = $("<span>");
        
        var ref988 = mobl.ref("answer-block-" + number.get());
        if(ref988.get() !== null) {
          node1436.attr('id', ref988.get());
          subs__.addSub(ref988.addEventListener('change', function(_, ref, val) {
            node1436.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1436.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref988.rebind());
        
        var nodes20285 = $("<span>");
        node1436.append(nodes20285);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root22151 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root22151); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes20285;
          nodes20285 = node.contents();
          oldNodes.replaceWith(nodes20285);
        }));
        node1435.append(node1436);
        
        
        
      } else {
        var nodes20286 = $("<span>");
        node1435.append(nodes20286);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root22152 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root22152); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes20286;
          nodes20286 = node.contents();
          oldNodes.replaceWith(nodes20286);
        }));
        
        
      }
    };
    renderCond477();
    subs__.addSub(tmp20098.addEventListener('change', function() {
      renderCond477();
    }));
    
    callback(root22149); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20283;
    nodes20283 = node.contents();
    oldNodes.replaceWith(nodes20283);
  }));
  var nodes20287 = $("<span>");
  root22148.append(nodes20287);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root22153 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1437 = $("<span>");
    node1437.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp20177 = result__;
      var tmp20101 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp20176 = result__;
          var result__ = tmp20176;
          tmp20101.set(result__);
          
        });
      }));
      
      var nodes20291 = $("<span>");
      node1437.append(nodes20291);
      subs__.addSub((mobl.html)(tmp20101, function(_, callback) {
        var root22157 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22157); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20291;
        nodes20291 = node.contents();
        oldNodes.replaceWith(nodes20291);
      }));
      root22153.append(node1437);
      var nodes20288 = $("<span>");
      root22153.append(nodes20288);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22154 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22154); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20288;
        nodes20288 = node.contents();
        oldNodes.replaceWith(nodes20288);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp20102 = mobl.ref(result__);
      
      var nodes20289 = $("<span>");
      root22153.append(nodes20289);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp20102, function(_, callback) {
        var root22155 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22155); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20289;
        nodes20289 = node.contents();
        oldNodes.replaceWith(nodes20289);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp20103 = mobl.ref(result__);
      
      var nodes20290 = $("<span>");
      root22153.append(nodes20290);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp20103, function(_, callback) {
        var root22156 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22156); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20290;
        nodes20290 = node.contents();
        oldNodes.replaceWith(nodes20290);
      }));
      callback(root22153); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20287;
    nodes20287 = node.contents();
    oldNodes.replaceWith(nodes20287);
  }));
  callback(root22148); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp20178 = result__;
    var result__ = tmp20178;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp20179 = result__;
        var result__ = tmp20179;
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
  var root22158 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp20187 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp20105 = mobl.ref(result__);
  
  var nodes20292 = $("<span>");
  root22158.append(nodes20292);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp20105, function(_, callback) {
    var root22159 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp20180 = result__;
                       var result__ = tmp20180;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp20181 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp20104 = mobl.ref(result__);
    
    var nodes20293 = $("<span>");
    root22159.append(nodes20293);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp20104, function(_, callback) {
      var root22160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root22160); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes20293;
      nodes20293 = node.contents();
      oldNodes.replaceWith(nodes20293);
    }));
    callback(root22159); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20292;
    nodes20292 = node.contents();
    oldNodes.replaceWith(nodes20292);
  }));
  var nodes20294 = $("<span>");
  root22158.append(nodes20294);
  subs__.addSub((ui.group)(function(_, callback) {
    var root22161 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp20186 = result__;
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20108 = mobl.ref(result__);
    
    var nodes20295 = $("<span>");
    root22161.append(nodes20295);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp20108, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root22162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp20106 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp20106.set("Q" + number.get() + ". ");
      }));
      
      var nodes20296 = $("<span>");
      root22162.append(nodes20296);
      subs__.addSub((mobl.html)(tmp20106, function(_, callback) {
        var root22163 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22163); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20296;
        nodes20296 = node.contents();
        oldNodes.replaceWith(nodes20296);
      }));
      
      var node1438 = $("<span>");
      
      var ref989 = mobl.ref("question-block-" + number.get());
      if(ref989.get() !== null) {
        node1438.attr('id', ref989.get());
        subs__.addSub(ref989.addEventListener('change', function(_, ref, val) {
          node1438.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1438.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref989.rebind());
      
      var nodes20298 = $("<span>");
      node1438.append(nodes20298);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root22165 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root22165); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes20298;
        nodes20298 = node.contents();
        oldNodes.replaceWith(nodes20298);
      }));
      root22162.append(node1438);
      
      var node1439 = $("<span>");
      node1439.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp20183 = result__;
        var tmp20107 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp20182 = result__;
            var result__ = tmp20182;
            tmp20107.set(result__);
            
          });
        }));
        
        var nodes20297 = $("<span>");
        node1439.append(nodes20297);
        subs__.addSub((mobl.html)(tmp20107, function(_, callback) {
          var root22164 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root22164); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes20297;
          nodes20297 = node.contents();
          oldNodes.replaceWith(nodes20297);
        }));
        root22162.append(node1439);
        callback(root22162); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20295;
      nodes20295 = node.contents();
      oldNodes.replaceWith(nodes20295);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp20185 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp20110 = mobl.ref(result__);
    
    var nodes20299 = $("<span>");
    root22161.append(nodes20299);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp20110, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root22166 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes20300 = $("<span>");
      root22166.append(nodes20300);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root22167 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp20184 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp20109 = mobl.ref(result__);
        
        var nodes20301 = $("<span>");
        root22167.append(nodes20301);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp20109, function(_, callback) {
          var root22168 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root22168); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes20301;
          nodes20301 = node.contents();
          oldNodes.replaceWith(nodes20301);
        }));
        callback(root22167); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes20300;
        nodes20300 = node.contents();
        oldNodes.replaceWith(nodes20300);
      }));
      
      var node1440 = $("<span>");
      root22166.append(node1440);
      var condSubs478 = new mobl.CompSubscription();
      subs__.addSub(condSubs478);
      var oldValue478;
      var renderCond478 = function() {
        var value722 = qa.get().done;
        if(oldValue478 === value722) return;
        oldValue478 = value722;
        var subs__ = condSubs478;
        subs__.unsubscribe();
        node1440.empty();
        if(value722) {
          var nodes20302 = $("<span>");
          node1440.append(nodes20302);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root22169 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root22169); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes20302;
            nodes20302 = node.contents();
            oldNodes.replaceWith(nodes20302);
          }));
          
          
        } else {
          
        }
      };
      renderCond478();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond478();
      }));
      
      callback(root22166); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20299;
      nodes20299 = node.contents();
      oldNodes.replaceWith(nodes20299);
    }));
    callback(root22161); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes20294;
    nodes20294 = node.contents();
    oldNodes.replaceWith(nodes20294);
  }));
  callback(root22158); return subs__;
  
  
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
  qas.list(function(coll1089) {
    coll1089 = coll1089.reverse();
    function processOne723() {
      var item;
      item = coll1089.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1089.length > 0) processOne723(); else rest723();
      
    }
    function rest723() {
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
    if(coll1089.length > 0) processOne723(); else rest723();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1090) {
    coll1090 = coll1090.reverse();
    function processOne724() {
      var item;
      item = coll1090.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1090.length > 0) processOne724(); else rest724();
      
    }
    function rest724() {
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
    if(coll1090.length > 0) processOne724(); else rest724();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1091) {
    coll1091 = coll1091.reverse();
    function processOne725() {
      var item;
      item = coll1091.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1091.length > 0) processOne725(); else rest725();
      
    }
    function rest725() {
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
    if(coll1091.length > 0) processOne725(); else rest725();
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