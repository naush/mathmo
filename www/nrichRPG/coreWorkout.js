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
    var tmp12926 = result__;
    var result__ = tmp12926;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp12927 = result__;
      var result__ = tmp12927;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp12928 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll828) {
    coll828 = coll828.reverse();
    function processOne462() {
      var i;
      i = coll828.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp12929 = result__;
        
        if(coll828.length > 0) processOne462(); else rest462();
        
      });
    }
    function rest462() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll828.length > 0) processOne462(); else rest462();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll829) {
    coll829 = coll829.reverse();
    function processOne463() {
      var i;
      i = coll829.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp12930 = result__;
          
          if(coll829.length > 0) processOne463(); else rest463();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp12930 = result__;
            
            if(coll829.length > 0) processOne463(); else rest463();
            
          });
        }
      }
    }
    function rest463() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll829.length > 0) processOne463(); else rest463();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll830) {
    coll830 = coll830.reverse();
    function processOne464() {
      var i;
      i = coll830.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp12931 = result__;
        
        if(coll830.length > 0) processOne464(); else rest464();
        
      });
    }
    function rest464() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll830.length > 0) processOne464(); else rest464();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root14243 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes12992 = $("<span>");
  root14243.append(nodes12992);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14244 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp12939 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12834 = mobl.ref(result__);
    
    var nodes12993 = $("<span>");
    root14244.append(nodes12993);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12834, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12994 = $("<span>");
      root14245.append(nodes12994);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12994;
        nodes12994 = node.contents();
        oldNodes.replaceWith(nodes12994);
      }));
      callback(root14245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12993;
      nodes12993 = node.contents();
      oldNodes.replaceWith(nodes12993);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp12938 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12835 = mobl.ref(result__);
    
    var nodes12995 = $("<span>");
    root14244.append(nodes12995);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12835, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12996 = $("<span>");
      root14247.append(nodes12996);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12996;
        nodes12996 = node.contents();
        oldNodes.replaceWith(nodes12996);
      }));
      callback(root14247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12995;
      nodes12995 = node.contents();
      oldNodes.replaceWith(nodes12995);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp12937 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12836 = mobl.ref(result__);
    
    var nodes12997 = $("<span>");
    root14244.append(nodes12997);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12836, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14249 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12998 = $("<span>");
      root14249.append(nodes12998);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14250); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12998;
        nodes12998 = node.contents();
        oldNodes.replaceWith(nodes12998);
      }));
      callback(root14249); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12997;
      nodes12997 = node.contents();
      oldNodes.replaceWith(nodes12997);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp12936 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12837 = mobl.ref(result__);
    
    var nodes12999 = $("<span>");
    root14244.append(nodes12999);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12837, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13000 = $("<span>");
      root14251.append(nodes13000);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14252); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13000;
        nodes13000 = node.contents();
        oldNodes.replaceWith(nodes13000);
      }));
      callback(root14251); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12999;
      nodes12999 = node.contents();
      oldNodes.replaceWith(nodes12999);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp12935 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12838 = mobl.ref(result__);
    
    var nodes13001 = $("<span>");
    root14244.append(nodes13001);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12838, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13002 = $("<span>");
      root14253.append(nodes13002);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14254 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14254); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13002;
        nodes13002 = node.contents();
        oldNodes.replaceWith(nodes13002);
      }));
      callback(root14253); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13001;
      nodes13001 = node.contents();
      oldNodes.replaceWith(nodes13001);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp12934 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12839 = mobl.ref(result__);
    
    var nodes13003 = $("<span>");
    root14244.append(nodes13003);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12839, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13004 = $("<span>");
      root14255.append(nodes13004);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14256); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13004;
        nodes13004 = node.contents();
        oldNodes.replaceWith(nodes13004);
      }));
      callback(root14255); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13003;
      nodes13003 = node.contents();
      oldNodes.replaceWith(nodes13003);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp12933 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12840 = mobl.ref(result__);
    
    var nodes13005 = $("<span>");
    root14244.append(nodes13005);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12840, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13006 = $("<span>");
      root14257.append(nodes13006);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13006;
        nodes13006 = node.contents();
        oldNodes.replaceWith(nodes13006);
      }));
      callback(root14257); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13005;
      nodes13005 = node.contents();
      oldNodes.replaceWith(nodes13005);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp12932 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12841 = mobl.ref(result__);
    
    var nodes13007 = $("<span>");
    root14244.append(nodes13007);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12841, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13008 = $("<span>");
      root14259.append(nodes13008);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14260 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14260); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13008;
        nodes13008 = node.contents();
        oldNodes.replaceWith(nodes13008);
      }));
      callback(root14259); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13007;
      nodes13007 = node.contents();
      oldNodes.replaceWith(nodes13007);
    }));
    callback(root14244); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes12992;
    nodes12992 = node.contents();
    oldNodes.replaceWith(nodes12992);
  }));
  callback(root14243); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root14261 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes13009 = $("<span>");
  root14261.append(nodes13009);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14262 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp12843 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp12842 = mobl.ref(result__);
    
    var nodes13010 = $("<span>");
    root14262.append(nodes13010);
    subs__.addSub((ui.backButton)(tmp12842, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp12843, function(_, callback) {
      var root14263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14263); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13010;
      nodes13010 = node.contents();
      oldNodes.replaceWith(nodes13010);
    }));
    callback(root14262); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13009;
    nodes13009 = node.contents();
    oldNodes.replaceWith(nodes13009);
  }));
  var nodes13011 = $("<span>");
  root14261.append(nodes13011);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14264 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp12947 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12844 = mobl.ref(result__);
    
    var nodes13012 = $("<span>");
    root14264.append(nodes13012);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12844, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13013 = $("<span>");
      root14265.append(nodes13013);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14266 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14266); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13013;
        nodes13013 = node.contents();
        oldNodes.replaceWith(nodes13013);
      }));
      callback(root14265); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13012;
      nodes13012 = node.contents();
      oldNodes.replaceWith(nodes13012);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp12946 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12845 = mobl.ref(result__);
    
    var nodes13014 = $("<span>");
    root14264.append(nodes13014);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12845, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13015 = $("<span>");
      root14267.append(nodes13015);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14268 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14268); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13015;
        nodes13015 = node.contents();
        oldNodes.replaceWith(nodes13015);
      }));
      callback(root14267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13014;
      nodes13014 = node.contents();
      oldNodes.replaceWith(nodes13014);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp12945 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12846 = mobl.ref(result__);
    
    var nodes13016 = $("<span>");
    root14264.append(nodes13016);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12846, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13017 = $("<span>");
      root14269.append(nodes13017);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13017;
        nodes13017 = node.contents();
        oldNodes.replaceWith(nodes13017);
      }));
      callback(root14269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13016;
      nodes13016 = node.contents();
      oldNodes.replaceWith(nodes13016);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp12944 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12847 = mobl.ref(result__);
    
    var nodes13018 = $("<span>");
    root14264.append(nodes13018);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12847, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13019 = $("<span>");
      root14271.append(nodes13019);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13019;
        nodes13019 = node.contents();
        oldNodes.replaceWith(nodes13019);
      }));
      callback(root14271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13018;
      nodes13018 = node.contents();
      oldNodes.replaceWith(nodes13018);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp12943 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12848 = mobl.ref(result__);
    
    var nodes13020 = $("<span>");
    root14264.append(nodes13020);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12848, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14273 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13021 = $("<span>");
      root14273.append(nodes13021);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14274 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14274); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13021;
        nodes13021 = node.contents();
        oldNodes.replaceWith(nodes13021);
      }));
      callback(root14273); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13020;
      nodes13020 = node.contents();
      oldNodes.replaceWith(nodes13020);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp12942 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12849 = mobl.ref(result__);
    
    var nodes13022 = $("<span>");
    root14264.append(nodes13022);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12849, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13023 = $("<span>");
      root14275.append(nodes13023);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14276 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14276); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13023;
        nodes13023 = node.contents();
        oldNodes.replaceWith(nodes13023);
      }));
      callback(root14275); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13022;
      nodes13022 = node.contents();
      oldNodes.replaceWith(nodes13022);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp12941 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12850 = mobl.ref(result__);
    
    var nodes13024 = $("<span>");
    root14264.append(nodes13024);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12850, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14277 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13025 = $("<span>");
      root14277.append(nodes13025);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14278 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14278); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13025;
        nodes13025 = node.contents();
        oldNodes.replaceWith(nodes13025);
      }));
      callback(root14277); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13024;
      nodes13024 = node.contents();
      oldNodes.replaceWith(nodes13024);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp12940 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12851 = mobl.ref(result__);
    
    var nodes13026 = $("<span>");
    root14264.append(nodes13026);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12851, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13027 = $("<span>");
      root14279.append(nodes13027);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13027;
        nodes13027 = node.contents();
        oldNodes.replaceWith(nodes13027);
      }));
      callback(root14279); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13026;
      nodes13026 = node.contents();
      oldNodes.replaceWith(nodes13026);
    }));
    callback(root14264); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13011;
    nodes13011 = node.contents();
    oldNodes.replaceWith(nodes13011);
  }));
  callback(root14261); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root14281 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13028 = $("<span>");
  root14281.append(nodes13028);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14282 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp12853 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp12852 = mobl.ref(result__);
    
    var nodes13029 = $("<span>");
    root14282.append(nodes13029);
    subs__.addSub((ui.backButton)(tmp12852, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp12853, function(_, callback) {
      var root14283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14283); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13029;
      nodes13029 = node.contents();
      oldNodes.replaceWith(nodes13029);
    }));
    callback(root14282); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13028;
    nodes13028 = node.contents();
    oldNodes.replaceWith(nodes13028);
  }));
  var nodes13030 = $("<span>");
  root14281.append(nodes13030);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14284 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp12952 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12854 = mobl.ref(result__);
    
    var nodes13031 = $("<span>");
    root14284.append(nodes13031);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12854, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13032 = $("<span>");
      root14285.append(nodes13032);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14286 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14286); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13032;
        nodes13032 = node.contents();
        oldNodes.replaceWith(nodes13032);
      }));
      callback(root14285); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13031;
      nodes13031 = node.contents();
      oldNodes.replaceWith(nodes13031);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp12951 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12855 = mobl.ref(result__);
    
    var nodes13033 = $("<span>");
    root14284.append(nodes13033);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12855, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13034 = $("<span>");
      root14287.append(nodes13034);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14288 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14288); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13034;
        nodes13034 = node.contents();
        oldNodes.replaceWith(nodes13034);
      }));
      callback(root14287); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13033;
      nodes13033 = node.contents();
      oldNodes.replaceWith(nodes13033);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp12950 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12856 = mobl.ref(result__);
    
    var nodes13035 = $("<span>");
    root14284.append(nodes13035);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12856, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13036 = $("<span>");
      root14289.append(nodes13036);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14290 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14290); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13036;
        nodes13036 = node.contents();
        oldNodes.replaceWith(nodes13036);
      }));
      callback(root14289); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13035;
      nodes13035 = node.contents();
      oldNodes.replaceWith(nodes13035);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp12949 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12857 = mobl.ref(result__);
    
    var nodes13037 = $("<span>");
    root14284.append(nodes13037);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12857, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13038 = $("<span>");
      root14291.append(nodes13038);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14292 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14292); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13038;
        nodes13038 = node.contents();
        oldNodes.replaceWith(nodes13038);
      }));
      callback(root14291); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13037;
      nodes13037 = node.contents();
      oldNodes.replaceWith(nodes13037);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp12948 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12858 = mobl.ref(result__);
    
    var nodes13039 = $("<span>");
    root14284.append(nodes13039);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12858, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13040 = $("<span>");
      root14293.append(nodes13040);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14294 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14294); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13040;
        nodes13040 = node.contents();
        oldNodes.replaceWith(nodes13040);
      }));
      callback(root14293); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13039;
      nodes13039 = node.contents();
      oldNodes.replaceWith(nodes13039);
    }));
    callback(root14284); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13030;
    nodes13030 = node.contents();
    oldNodes.replaceWith(nodes13030);
  }));
  callback(root14281); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root14295 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13041 = $("<span>");
  root14295.append(nodes13041);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp12860 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp12859 = mobl.ref(result__);
    
    var nodes13042 = $("<span>");
    root14296.append(nodes13042);
    subs__.addSub((ui.backButton)(tmp12859, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp12860, function(_, callback) {
      var root14297 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14297); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13042;
      nodes13042 = node.contents();
      oldNodes.replaceWith(nodes13042);
    }));
    callback(root14296); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13041;
    nodes13041 = node.contents();
    oldNodes.replaceWith(nodes13041);
  }));
  var nodes13043 = $("<span>");
  root14295.append(nodes13043);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14298 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp12955 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12861 = mobl.ref(result__);
    
    var nodes13044 = $("<span>");
    root14298.append(nodes13044);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12861, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13045 = $("<span>");
      root14299.append(nodes13045);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14300); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13045;
        nodes13045 = node.contents();
        oldNodes.replaceWith(nodes13045);
      }));
      callback(root14299); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13044;
      nodes13044 = node.contents();
      oldNodes.replaceWith(nodes13044);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp12954 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12862 = mobl.ref(result__);
    
    var nodes13046 = $("<span>");
    root14298.append(nodes13046);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12862, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13047 = $("<span>");
      root14301.append(nodes13047);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14302 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14302); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13047;
        nodes13047 = node.contents();
        oldNodes.replaceWith(nodes13047);
      }));
      callback(root14301); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13046;
      nodes13046 = node.contents();
      oldNodes.replaceWith(nodes13046);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp12953 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12863 = mobl.ref(result__);
    
    var nodes13048 = $("<span>");
    root14298.append(nodes13048);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12863, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13049 = $("<span>");
      root14303.append(nodes13049);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14304 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14304); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13049;
        nodes13049 = node.contents();
        oldNodes.replaceWith(nodes13049);
      }));
      callback(root14303); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13048;
      nodes13048 = node.contents();
      oldNodes.replaceWith(nodes13048);
    }));
    callback(root14298); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13043;
    nodes13043 = node.contents();
    oldNodes.replaceWith(nodes13043);
  }));
  callback(root14295); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root14305 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13050 = $("<span>");
  root14305.append(nodes13050);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp12865 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp12864 = mobl.ref(result__);
    
    var nodes13051 = $("<span>");
    root14306.append(nodes13051);
    subs__.addSub((ui.backButton)(tmp12864, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp12865, function(_, callback) {
      var root14307 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14307); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13051;
      nodes13051 = node.contents();
      oldNodes.replaceWith(nodes13051);
    }));
    callback(root14306); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13050;
    nodes13050 = node.contents();
    oldNodes.replaceWith(nodes13050);
  }));
  var nodes13052 = $("<span>");
  root14305.append(nodes13052);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14308 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp12959 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12866 = mobl.ref(result__);
    
    var nodes13053 = $("<span>");
    root14308.append(nodes13053);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12866, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14309 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13054 = $("<span>");
      root14309.append(nodes13054);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14310 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14310); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13054;
        nodes13054 = node.contents();
        oldNodes.replaceWith(nodes13054);
      }));
      callback(root14309); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13053;
      nodes13053 = node.contents();
      oldNodes.replaceWith(nodes13053);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp12958 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12867 = mobl.ref(result__);
    
    var nodes13055 = $("<span>");
    root14308.append(nodes13055);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12867, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14311 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13056 = $("<span>");
      root14311.append(nodes13056);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14312 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14312); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13056;
        nodes13056 = node.contents();
        oldNodes.replaceWith(nodes13056);
      }));
      callback(root14311); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13055;
      nodes13055 = node.contents();
      oldNodes.replaceWith(nodes13055);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp12957 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12868 = mobl.ref(result__);
    
    var nodes13057 = $("<span>");
    root14308.append(nodes13057);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12868, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14313 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13058 = $("<span>");
      root14313.append(nodes13058);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14314 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14314); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13058;
        nodes13058 = node.contents();
        oldNodes.replaceWith(nodes13058);
      }));
      callback(root14313); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13057;
      nodes13057 = node.contents();
      oldNodes.replaceWith(nodes13057);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp12956 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12869 = mobl.ref(result__);
    
    var nodes13059 = $("<span>");
    root14308.append(nodes13059);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12869, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13060 = $("<span>");
      root14315.append(nodes13060);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14316 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14316); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13060;
        nodes13060 = node.contents();
        oldNodes.replaceWith(nodes13060);
      }));
      callback(root14315); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13059;
      nodes13059 = node.contents();
      oldNodes.replaceWith(nodes13059);
    }));
    callback(root14308); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13052;
    nodes13052 = node.contents();
    oldNodes.replaceWith(nodes13052);
  }));
  callback(root14305); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root14317 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13061 = $("<span>");
  root14317.append(nodes13061);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14318 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp12871 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp12870 = mobl.ref(result__);
    
    var nodes13062 = $("<span>");
    root14318.append(nodes13062);
    subs__.addSub((ui.backButton)(tmp12870, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp12871, function(_, callback) {
      var root14319 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14319); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13062;
      nodes13062 = node.contents();
      oldNodes.replaceWith(nodes13062);
    }));
    callback(root14318); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13061;
    nodes13061 = node.contents();
    oldNodes.replaceWith(nodes13061);
  }));
  var nodes13063 = $("<span>");
  root14317.append(nodes13063);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14320 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp12961 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12872 = mobl.ref(result__);
    
    var nodes13064 = $("<span>");
    root14320.append(nodes13064);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12872, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14321 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13065 = $("<span>");
      root14321.append(nodes13065);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14322 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14322); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13065;
        nodes13065 = node.contents();
        oldNodes.replaceWith(nodes13065);
      }));
      callback(root14321); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13064;
      nodes13064 = node.contents();
      oldNodes.replaceWith(nodes13064);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp12960 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12873 = mobl.ref(result__);
    
    var nodes13066 = $("<span>");
    root14320.append(nodes13066);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12873, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14323 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13067 = $("<span>");
      root14323.append(nodes13067);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14324 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14324); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13067;
        nodes13067 = node.contents();
        oldNodes.replaceWith(nodes13067);
      }));
      callback(root14323); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13066;
      nodes13066 = node.contents();
      oldNodes.replaceWith(nodes13066);
    }));
    callback(root14320); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13063;
    nodes13063 = node.contents();
    oldNodes.replaceWith(nodes13063);
  }));
  callback(root14317); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root14325 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13068 = $("<span>");
  root14325.append(nodes13068);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14326 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp12875 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp12874 = mobl.ref(result__);
    
    var nodes13069 = $("<span>");
    root14326.append(nodes13069);
    subs__.addSub((ui.backButton)(tmp12874, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp12875, function(_, callback) {
      var root14327 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14327); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13069;
      nodes13069 = node.contents();
      oldNodes.replaceWith(nodes13069);
    }));
    callback(root14326); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13068;
    nodes13068 = node.contents();
    oldNodes.replaceWith(nodes13068);
  }));
  var nodes13070 = $("<span>");
  root14325.append(nodes13070);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14328 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp12966 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12876 = mobl.ref(result__);
    
    var nodes13071 = $("<span>");
    root14328.append(nodes13071);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12876, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14329 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13072 = $("<span>");
      root14329.append(nodes13072);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14330 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14330); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13072;
        nodes13072 = node.contents();
        oldNodes.replaceWith(nodes13072);
      }));
      callback(root14329); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13071;
      nodes13071 = node.contents();
      oldNodes.replaceWith(nodes13071);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp12965 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12877 = mobl.ref(result__);
    
    var nodes13073 = $("<span>");
    root14328.append(nodes13073);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12877, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14331 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13074 = $("<span>");
      root14331.append(nodes13074);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14332 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14332); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13074;
        nodes13074 = node.contents();
        oldNodes.replaceWith(nodes13074);
      }));
      callback(root14331); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13073;
      nodes13073 = node.contents();
      oldNodes.replaceWith(nodes13073);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp12964 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12878 = mobl.ref(result__);
    
    var nodes13075 = $("<span>");
    root14328.append(nodes13075);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12878, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14333 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13076 = $("<span>");
      root14333.append(nodes13076);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14334 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14334); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13076;
        nodes13076 = node.contents();
        oldNodes.replaceWith(nodes13076);
      }));
      callback(root14333); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13075;
      nodes13075 = node.contents();
      oldNodes.replaceWith(nodes13075);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp12963 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12879 = mobl.ref(result__);
    
    var nodes13077 = $("<span>");
    root14328.append(nodes13077);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12879, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14335 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13078 = $("<span>");
      root14335.append(nodes13078);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14336 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14336); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13078;
        nodes13078 = node.contents();
        oldNodes.replaceWith(nodes13078);
      }));
      callback(root14335); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13077;
      nodes13077 = node.contents();
      oldNodes.replaceWith(nodes13077);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp12962 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12880 = mobl.ref(result__);
    
    var nodes13079 = $("<span>");
    root14328.append(nodes13079);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12880, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14337 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13080 = $("<span>");
      root14337.append(nodes13080);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14338 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14338); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13080;
        nodes13080 = node.contents();
        oldNodes.replaceWith(nodes13080);
      }));
      callback(root14337); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13079;
      nodes13079 = node.contents();
      oldNodes.replaceWith(nodes13079);
    }));
    callback(root14328); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13070;
    nodes13070 = node.contents();
    oldNodes.replaceWith(nodes13070);
  }));
  callback(root14325); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root14339 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13081 = $("<span>");
  root14339.append(nodes13081);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14340 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp12882 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp12881 = mobl.ref(result__);
    
    var nodes13082 = $("<span>");
    root14340.append(nodes13082);
    subs__.addSub((ui.backButton)(tmp12881, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp12882, function(_, callback) {
      var root14341 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14341); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13082;
      nodes13082 = node.contents();
      oldNodes.replaceWith(nodes13082);
    }));
    callback(root14340); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13081;
    nodes13081 = node.contents();
    oldNodes.replaceWith(nodes13081);
  }));
  var nodes13083 = $("<span>");
  root14339.append(nodes13083);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14342 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp12969 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12883 = mobl.ref(result__);
    
    var nodes13084 = $("<span>");
    root14342.append(nodes13084);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12883, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14343 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13085 = $("<span>");
      root14343.append(nodes13085);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14344 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14344); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13085;
        nodes13085 = node.contents();
        oldNodes.replaceWith(nodes13085);
      }));
      callback(root14343); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13084;
      nodes13084 = node.contents();
      oldNodes.replaceWith(nodes13084);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp12968 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12884 = mobl.ref(result__);
    
    var nodes13086 = $("<span>");
    root14342.append(nodes13086);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12884, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14345 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13087 = $("<span>");
      root14345.append(nodes13087);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14346 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14346); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13087;
        nodes13087 = node.contents();
        oldNodes.replaceWith(nodes13087);
      }));
      callback(root14345); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13086;
      nodes13086 = node.contents();
      oldNodes.replaceWith(nodes13086);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp12967 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12885 = mobl.ref(result__);
    
    var nodes13088 = $("<span>");
    root14342.append(nodes13088);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12885, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14347 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13089 = $("<span>");
      root14347.append(nodes13089);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14348 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14348); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13089;
        nodes13089 = node.contents();
        oldNodes.replaceWith(nodes13089);
      }));
      callback(root14347); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13088;
      nodes13088 = node.contents();
      oldNodes.replaceWith(nodes13088);
    }));
    callback(root14342); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13083;
    nodes13083 = node.contents();
    oldNodes.replaceWith(nodes13083);
  }));
  callback(root14339); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root14349 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes13090 = $("<span>");
  root14349.append(nodes13090);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14350 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp12887 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp12886 = mobl.ref(result__);
    
    var nodes13091 = $("<span>");
    root14350.append(nodes13091);
    subs__.addSub((ui.backButton)(tmp12886, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp12887, function(_, callback) {
      var root14351 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14351); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13091;
      nodes13091 = node.contents();
      oldNodes.replaceWith(nodes13091);
    }));
    callback(root14350); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13090;
    nodes13090 = node.contents();
    oldNodes.replaceWith(nodes13090);
  }));
  var nodes13092 = $("<span>");
  root14349.append(nodes13092);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14352 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp12970 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12888 = mobl.ref(result__);
    
    var nodes13093 = $("<span>");
    root14352.append(nodes13093);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12888, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14353 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13094 = $("<span>");
      root14353.append(nodes13094);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14354 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14354); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13094;
        nodes13094 = node.contents();
        oldNodes.replaceWith(nodes13094);
      }));
      callback(root14353); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13093;
      nodes13093 = node.contents();
      oldNodes.replaceWith(nodes13093);
    }));
    callback(root14352); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13092;
    nodes13092 = node.contents();
    oldNodes.replaceWith(nodes13092);
  }));
  callback(root14349); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root14355 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes13095 = $("<span>");
  root14355.append(nodes13095);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14356 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp12983 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12889 = mobl.ref(result__);
    
    var nodes13096 = $("<span>");
    root14356.append(nodes13096);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12889, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14357 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13097 = $("<span>");
      root14357.append(nodes13097);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14358 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14358); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13097;
        nodes13097 = node.contents();
        oldNodes.replaceWith(nodes13097);
      }));
      callback(root14357); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13096;
      nodes13096 = node.contents();
      oldNodes.replaceWith(nodes13096);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp12982 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12890 = mobl.ref(result__);
    
    var nodes13098 = $("<span>");
    root14356.append(nodes13098);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12890, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14359 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13099 = $("<span>");
      root14359.append(nodes13099);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14360 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14360); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13099;
        nodes13099 = node.contents();
        oldNodes.replaceWith(nodes13099);
      }));
      callback(root14359); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13098;
      nodes13098 = node.contents();
      oldNodes.replaceWith(nodes13098);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp12981 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12891 = mobl.ref(result__);
    
    var nodes13100 = $("<span>");
    root14356.append(nodes13100);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12891, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14361 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13101 = $("<span>");
      root14361.append(nodes13101);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14362 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14362); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13101;
        nodes13101 = node.contents();
        oldNodes.replaceWith(nodes13101);
      }));
      callback(root14361); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13100;
      nodes13100 = node.contents();
      oldNodes.replaceWith(nodes13100);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp12980 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12892 = mobl.ref(result__);
    
    var nodes13102 = $("<span>");
    root14356.append(nodes13102);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12892, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14363 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13103 = $("<span>");
      root14363.append(nodes13103);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14364 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14364); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13103;
        nodes13103 = node.contents();
        oldNodes.replaceWith(nodes13103);
      }));
      callback(root14363); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13102;
      nodes13102 = node.contents();
      oldNodes.replaceWith(nodes13102);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp12979 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12893 = mobl.ref(result__);
    
    var nodes13104 = $("<span>");
    root14356.append(nodes13104);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12893, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14365 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13105 = $("<span>");
      root14365.append(nodes13105);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14366 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14366); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13105;
        nodes13105 = node.contents();
        oldNodes.replaceWith(nodes13105);
      }));
      callback(root14365); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13104;
      nodes13104 = node.contents();
      oldNodes.replaceWith(nodes13104);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp12978 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12894 = mobl.ref(result__);
    
    var nodes13106 = $("<span>");
    root14356.append(nodes13106);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12894, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14367 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13107 = $("<span>");
      root14367.append(nodes13107);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14368 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14368); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13107;
        nodes13107 = node.contents();
        oldNodes.replaceWith(nodes13107);
      }));
      callback(root14367); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13106;
      nodes13106 = node.contents();
      oldNodes.replaceWith(nodes13106);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp12977 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12895 = mobl.ref(result__);
    
    var nodes13108 = $("<span>");
    root14356.append(nodes13108);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12895, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14369 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13109 = $("<span>");
      root14369.append(nodes13109);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14370 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14370); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13109;
        nodes13109 = node.contents();
        oldNodes.replaceWith(nodes13109);
      }));
      callback(root14369); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13108;
      nodes13108 = node.contents();
      oldNodes.replaceWith(nodes13108);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp12976 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12896 = mobl.ref(result__);
    
    var nodes13110 = $("<span>");
    root14356.append(nodes13110);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12896, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14371 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13111 = $("<span>");
      root14371.append(nodes13111);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14372 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14372); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13111;
        nodes13111 = node.contents();
        oldNodes.replaceWith(nodes13111);
      }));
      callback(root14371); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13110;
      nodes13110 = node.contents();
      oldNodes.replaceWith(nodes13110);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp12975 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12897 = mobl.ref(result__);
    
    var nodes13112 = $("<span>");
    root14356.append(nodes13112);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12897, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14373 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13113 = $("<span>");
      root14373.append(nodes13113);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14374 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14374); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13113;
        nodes13113 = node.contents();
        oldNodes.replaceWith(nodes13113);
      }));
      callback(root14373); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13112;
      nodes13112 = node.contents();
      oldNodes.replaceWith(nodes13112);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp12974 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12898 = mobl.ref(result__);
    
    var nodes13114 = $("<span>");
    root14356.append(nodes13114);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12898, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14375 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13115 = $("<span>");
      root14375.append(nodes13115);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14376 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14376); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13115;
        nodes13115 = node.contents();
        oldNodes.replaceWith(nodes13115);
      }));
      callback(root14375); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13114;
      nodes13114 = node.contents();
      oldNodes.replaceWith(nodes13114);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp12973 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12899 = mobl.ref(result__);
    
    var nodes13116 = $("<span>");
    root14356.append(nodes13116);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12899, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14377 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13117 = $("<span>");
      root14377.append(nodes13117);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14378 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14378); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13117;
        nodes13117 = node.contents();
        oldNodes.replaceWith(nodes13117);
      }));
      callback(root14377); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13116;
      nodes13116 = node.contents();
      oldNodes.replaceWith(nodes13116);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp12972 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12900 = mobl.ref(result__);
    
    var nodes13118 = $("<span>");
    root14356.append(nodes13118);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12900, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14379 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13119 = $("<span>");
      root14379.append(nodes13119);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14380 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14380); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13119;
        nodes13119 = node.contents();
        oldNodes.replaceWith(nodes13119);
      }));
      callback(root14379); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13118;
      nodes13118 = node.contents();
      oldNodes.replaceWith(nodes13118);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp12971 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12901 = mobl.ref(result__);
    
    var nodes13120 = $("<span>");
    root14356.append(nodes13120);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12901, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14381 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13121 = $("<span>");
      root14381.append(nodes13121);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14382 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14382); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13121;
        nodes13121 = node.contents();
        oldNodes.replaceWith(nodes13121);
      }));
      callback(root14381); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13120;
      nodes13120 = node.contents();
      oldNodes.replaceWith(nodes13120);
    }));
    callback(root14356); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13095;
    nodes13095 = node.contents();
    oldNodes.replaceWith(nodes13095);
  }));
  callback(root14355); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root14383 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes13122 = $("<span>");
  root14383.append(nodes13122);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14384 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp12989 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12902 = mobl.ref(result__);
    
    var nodes13123 = $("<span>");
    root14384.append(nodes13123);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12902, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14385 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13124 = $("<span>");
      root14385.append(nodes13124);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14386 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14386); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13124;
        nodes13124 = node.contents();
        oldNodes.replaceWith(nodes13124);
      }));
      callback(root14385); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13123;
      nodes13123 = node.contents();
      oldNodes.replaceWith(nodes13123);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp12988 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12903 = mobl.ref(result__);
    
    var nodes13125 = $("<span>");
    root14384.append(nodes13125);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12903, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14387 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13126 = $("<span>");
      root14387.append(nodes13126);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14388 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14388); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13126;
        nodes13126 = node.contents();
        oldNodes.replaceWith(nodes13126);
      }));
      callback(root14387); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13125;
      nodes13125 = node.contents();
      oldNodes.replaceWith(nodes13125);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp12987 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12904 = mobl.ref(result__);
    
    var nodes13127 = $("<span>");
    root14384.append(nodes13127);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12904, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14389 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13128 = $("<span>");
      root14389.append(nodes13128);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14390 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14390); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13128;
        nodes13128 = node.contents();
        oldNodes.replaceWith(nodes13128);
      }));
      callback(root14389); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13127;
      nodes13127 = node.contents();
      oldNodes.replaceWith(nodes13127);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp12986 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12905 = mobl.ref(result__);
    
    var nodes13129 = $("<span>");
    root14384.append(nodes13129);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12905, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14391 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13130 = $("<span>");
      root14391.append(nodes13130);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14392 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14392); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13130;
        nodes13130 = node.contents();
        oldNodes.replaceWith(nodes13130);
      }));
      callback(root14391); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13129;
      nodes13129 = node.contents();
      oldNodes.replaceWith(nodes13129);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp12985 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12906 = mobl.ref(result__);
    
    var nodes13131 = $("<span>");
    root14384.append(nodes13131);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12906, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14393 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13132 = $("<span>");
      root14393.append(nodes13132);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14394 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14394); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13132;
        nodes13132 = node.contents();
        oldNodes.replaceWith(nodes13132);
      }));
      callback(root14393); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13131;
      nodes13131 = node.contents();
      oldNodes.replaceWith(nodes13131);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp12984 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12907 = mobl.ref(result__);
    
    var nodes13133 = $("<span>");
    root14384.append(nodes13133);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12907, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14395 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13134 = $("<span>");
      root14395.append(nodes13134);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14396 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14396); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13134;
        nodes13134 = node.contents();
        oldNodes.replaceWith(nodes13134);
      }));
      callback(root14395); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13133;
      nodes13133 = node.contents();
      oldNodes.replaceWith(nodes13133);
    }));
    callback(root14384); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13122;
    nodes13122 = node.contents();
    oldNodes.replaceWith(nodes13122);
  }));
  callback(root14383); return subs__;
  
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
  var root14397 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node985 = $("<div>");
  
  var ref715 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref715.get() !== null) {
    node985.attr('class', ref715.get());
    subs__.addSub(ref715.addEventListener('change', function(_, ref, val) {
      node985.attr('class', val);
    }));
    
  }
  subs__.addSub(ref715.rebind());
  
  var val268 = onclick.get();
  if(val268 !== null) {
    subs__.addSub(mobl.domBind(node985, 'tap', val268));
  }
  
  
  var node986 = $("<div>");
  
  var ref714 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref714.get() !== null) {
    node986.attr('class', ref714.get());
    subs__.addSub(ref714.addEventListener('change', function(_, ref, val) {
      node986.attr('class', val);
    }));
    
  }
  subs__.addSub(ref714.rebind());
  
  
  var node987 = $("<div>");
  
  var ref712 = text;
  node987.text(""+ref712.get());
  var ignore153 = false;
  subs__.addSub(ref712.addEventListener('change', function(_, ref, val) {
    if(ignore153) return;
    node987.text(""+val);
  }));
  subs__.addSub(ref712.rebind());
  
  
  var ref713 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref713.get() !== null) {
    node987.attr('class', ref713.get());
    subs__.addSub(ref713.addEventListener('change', function(_, ref, val) {
      node987.attr('class', val);
    }));
    
  }
  subs__.addSub(ref713.rebind());
  
  node986.append(node987);
  node985.append(node986);
  var nodes13135 = $("<span>");
  node985.append(nodes13135);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl208();
  }));
  
  function renderControl208() {
    subs__.addSub((elements)(function(elements, callback) {
      var root14398 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14398); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13135;
      nodes13135 = node.contents();
      oldNodes.replaceWith(nodes13135);
    }));
  }
  renderControl208();
  root14397.append(node985);
  callback(root14397); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp12990 = result__;
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
  var root14399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node988 = $("<span>");
  root14399.append(node988);
  var condSubs367 = new mobl.CompSubscription();
  subs__.addSub(condSubs367);
  var oldValue367;
  var renderCond367 = function() {
    var value611 = qa.get().correct;
    if(oldValue367 === value611) return;
    oldValue367 = value611;
    var subs__ = condSubs367;
    subs__.unsubscribe();
    node988.empty();
    if(value611) {
      var nodes13136 = $("<span>");
      node988.append(nodes13136);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14400 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp12911 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp12911.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node989 = $("<span>");
        root14400.append(node989);
        var condSubs368 = new mobl.CompSubscription();
        subs__.addSub(condSubs368);
        var oldValue368;
        var renderCond368 = function() {
          var value612 = tmp12911.get();
          if(oldValue368 === value612) return;
          oldValue368 = value612;
          var subs__ = condSubs368;
          subs__.unsubscribe();
          node989.empty();
          if(value612) {
            var result__ = "A" + number.get() + ". ";
            var tmp12908 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp12908.set("A" + number.get() + ". ");
            }));
            
            var nodes13137 = $("<span>");
            node989.append(nodes13137);
            subs__.addSub((mobl.label)(tmp12908, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14401 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14401); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13137;
              nodes13137 = node.contents();
              oldNodes.replaceWith(nodes13137);
            }));
            var nodes13138 = $("<span>");
            node989.append(nodes13138);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root14402 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14402); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13138;
              nodes13138 = node.contents();
              oldNodes.replaceWith(nodes13138);
            }));
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp12909 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp12909.set("A" + number.get() + ". ");
            }));
            
            var nodes13139 = $("<span>");
            node989.append(nodes13139);
            subs__.addSub((mobl.label)(tmp12909, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14403 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14403); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13139;
              nodes13139 = node.contents();
              oldNodes.replaceWith(nodes13139);
            }));
            var nodes13140 = $("<span>");
            node989.append(nodes13140);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root14404 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14404); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13140;
              nodes13140 = node.contents();
              oldNodes.replaceWith(nodes13140);
            }));
            
            var node990 = $("<span>");
            node990.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp12992 = result__;
              var tmp12910 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp12991 = result__;
                  var result__ = tmp12991;
                  tmp12910.set(result__);
                  
                });
              }));
              
              var nodes13141 = $("<span>");
              node990.append(nodes13141);
              subs__.addSub((mobl.html)(tmp12910, function(_, callback) {
                var root14405 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root14405); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes13141;
                nodes13141 = node.contents();
                oldNodes.replaceWith(nodes13141);
              }));
              node989.append(node990);
              
              
            });
            
            
            
          }
        };
        renderCond368();
        subs__.addSub(tmp12911.addEventListener('change', function() {
          renderCond368();
        }));
        
        callback(root14400); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13136;
        nodes13136 = node.contents();
        oldNodes.replaceWith(nodes13136);
      }));
      
      
    } else {
      var nodes13142 = $("<span>");
      node988.append(nodes13142);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14406 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp12915 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp12915.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node991 = $("<span>");
        root14406.append(node991);
        var condSubs369 = new mobl.CompSubscription();
        subs__.addSub(condSubs369);
        var oldValue369;
        var renderCond369 = function() {
          var value613 = tmp12915.get();
          if(oldValue369 === value613) return;
          oldValue369 = value613;
          var subs__ = condSubs369;
          subs__.unsubscribe();
          node991.empty();
          if(value613) {
            var result__ = "A" + number.get() + ". ";
            var tmp12912 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp12912.set("A" + number.get() + ". ");
            }));
            
            var nodes13143 = $("<span>");
            node991.append(nodes13143);
            subs__.addSub((mobl.label)(tmp12912, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14407 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14407); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13143;
              nodes13143 = node.contents();
              oldNodes.replaceWith(nodes13143);
            }));
            var nodes13144 = $("<span>");
            node991.append(nodes13144);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root14408 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14408); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13144;
              nodes13144 = node.contents();
              oldNodes.replaceWith(nodes13144);
            }));
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp12913 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp12913.set("A" + number.get() + ". ");
            }));
            
            var nodes13145 = $("<span>");
            node991.append(nodes13145);
            subs__.addSub((mobl.label)(tmp12913, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14409 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14409); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13145;
              nodes13145 = node.contents();
              oldNodes.replaceWith(nodes13145);
            }));
            var nodes13146 = $("<span>");
            node991.append(nodes13146);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root14410 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14410); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes13146;
              nodes13146 = node.contents();
              oldNodes.replaceWith(nodes13146);
            }));
            
            var node992 = $("<span>");
            node992.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp12994 = result__;
              var tmp12914 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp12993 = result__;
                  var result__ = tmp12993;
                  tmp12914.set(result__);
                  
                });
              }));
              
              var nodes13147 = $("<span>");
              node992.append(nodes13147);
              subs__.addSub((mobl.html)(tmp12914, function(_, callback) {
                var root14411 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root14411); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes13147;
                nodes13147 = node.contents();
                oldNodes.replaceWith(nodes13147);
              }));
              node991.append(node992);
              
              
            });
            
            
            
          }
        };
        renderCond369();
        subs__.addSub(tmp12915.addEventListener('change', function() {
          renderCond369();
        }));
        
        callback(root14406); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13142;
        nodes13142 = node.contents();
        oldNodes.replaceWith(nodes13142);
      }));
      
      
    }
  };
  renderCond367();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond367();
  }));
  
  var nodes13148 = $("<span>");
  root14399.append(nodes13148);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root14412 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node993 = $("<span>");
    node993.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp12996 = result__;
      var tmp12916 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp12995 = result__;
          var result__ = tmp12995;
          tmp12916.set(result__);
          
        });
      }));
      
      var nodes13152 = $("<span>");
      node993.append(nodes13152);
      subs__.addSub((mobl.html)(tmp12916, function(_, callback) {
        var root14416 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14416); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13152;
        nodes13152 = node.contents();
        oldNodes.replaceWith(nodes13152);
      }));
      root14412.append(node993);
      var nodes13149 = $("<span>");
      root14412.append(nodes13149);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14413 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14413); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13149;
        nodes13149 = node.contents();
        oldNodes.replaceWith(nodes13149);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp12917 = mobl.ref(result__);
      
      var nodes13150 = $("<span>");
      root14412.append(nodes13150);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp12917, function(_, callback) {
        var root14414 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14414); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13150;
        nodes13150 = node.contents();
        oldNodes.replaceWith(nodes13150);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp12918 = mobl.ref(result__);
      
      var nodes13151 = $("<span>");
      root14412.append(nodes13151);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp12918, function(_, callback) {
        var root14415 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14415); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13151;
        nodes13151 = node.contents();
        oldNodes.replaceWith(nodes13151);
      }));
      callback(root14412); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13148;
    nodes13148 = node.contents();
    oldNodes.replaceWith(nodes13148);
  }));
  callback(root14399); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp12997 = result__;
    var result__ = tmp12997;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp12998 = result__;
        var result__ = tmp12998;
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
  var root14417 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp13006 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp12920 = mobl.ref(result__);
  
  var nodes13153 = $("<span>");
  root14417.append(nodes13153);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp12920, function(_, callback) {
    var root14418 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp12999 = result__;
                       var result__ = tmp12999;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp13000 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp12919 = mobl.ref(result__);
    
    var nodes13154 = $("<span>");
    root14418.append(nodes13154);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp12919, function(_, callback) {
      var root14419 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14419); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes13154;
      nodes13154 = node.contents();
      oldNodes.replaceWith(nodes13154);
    }));
    callback(root14418); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13153;
    nodes13153 = node.contents();
    oldNodes.replaceWith(nodes13153);
  }));
  var nodes13155 = $("<span>");
  root14417.append(nodes13155);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14420 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp13005 = result__;
                       var result__ = mobl.$("#Q" + number.get()).html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12923 = mobl.ref(result__);
    
    var nodes13156 = $("<span>");
    root14420.append(nodes13156);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp12923, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root14421 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp12921 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp12921.set("Q" + number.get() + ". ");
      }));
      
      var nodes13157 = $("<span>");
      root14421.append(nodes13157);
      subs__.addSub((mobl.html)(tmp12921, function(_, callback) {
        var root14422 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14422); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13157;
        nodes13157 = node.contents();
        oldNodes.replaceWith(nodes13157);
      }));
      
      var node994 = $("<span>");
      
      var ref716 = mobl.ref("Q" + number.get());
      if(ref716.get() !== null) {
        node994.attr('id', ref716.get());
        subs__.addSub(ref716.addEventListener('change', function(_, ref, val) {
          node994.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node994.attr('id', "Q" + number.get());
        }));
        
      }
      subs__.addSub(ref716.rebind());
      
      var nodes13159 = $("<span>");
      node994.append(nodes13159);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root14424 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14424); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13159;
        nodes13159 = node.contents();
        oldNodes.replaceWith(nodes13159);
      }));
      root14421.append(node994);
      
      var node995 = $("<span>");
      node995.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp13002 = result__;
        var tmp12922 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp13001 = result__;
            var result__ = tmp13001;
            tmp12922.set(result__);
            
          });
        }));
        
        var nodes13158 = $("<span>");
        node995.append(nodes13158);
        subs__.addSub((mobl.html)(tmp12922, function(_, callback) {
          var root14423 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14423); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes13158;
          nodes13158 = node.contents();
          oldNodes.replaceWith(nodes13158);
        }));
        root14421.append(node995);
        callback(root14421); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13156;
      nodes13156 = node.contents();
      oldNodes.replaceWith(nodes13156);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp13004 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12925 = mobl.ref(result__);
    
    var nodes13160 = $("<span>");
    root14420.append(nodes13160);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12925, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root14425 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes13161 = $("<span>");
      root14425.append(nodes13161);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14426 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp13003 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp12924 = mobl.ref(result__);
        
        var nodes13162 = $("<span>");
        root14426.append(nodes13162);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp12924, function(_, callback) {
          var root14427 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14427); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes13162;
          nodes13162 = node.contents();
          oldNodes.replaceWith(nodes13162);
        }));
        callback(root14426); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes13161;
        nodes13161 = node.contents();
        oldNodes.replaceWith(nodes13161);
      }));
      
      var node996 = $("<span>");
      root14425.append(node996);
      var condSubs370 = new mobl.CompSubscription();
      subs__.addSub(condSubs370);
      var oldValue370;
      var renderCond370 = function() {
        var value614 = qa.get().done;
        if(oldValue370 === value614) return;
        oldValue370 = value614;
        var subs__ = condSubs370;
        subs__.unsubscribe();
        node996.empty();
        if(value614) {
          var nodes13163 = $("<span>");
          node996.append(nodes13163);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root14428 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root14428); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes13163;
            nodes13163 = node.contents();
            oldNodes.replaceWith(nodes13163);
          }));
          
          
        } else {
          
        }
      };
      renderCond370();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond370();
      }));
      
      callback(root14425); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13160;
      nodes13160 = node.contents();
      oldNodes.replaceWith(nodes13160);
    }));
    callback(root14420); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes13155;
    nodes13155 = node.contents();
    oldNodes.replaceWith(nodes13155);
  }));
  callback(root14417); return subs__;
  
  
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
  qas.list(function(coll831) {
    coll831 = coll831.reverse();
    function processOne465() {
      var item;
      item = coll831.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll831.length > 0) processOne465(); else rest465();
      
    }
    function rest465() {
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
    if(coll831.length > 0) processOne465(); else rest465();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll832) {
    coll832 = coll832.reverse();
    function processOne466() {
      var item;
      item = coll832.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll832.length > 0) processOne466(); else rest466();
      
    }
    function rest466() {
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
    if(coll832.length > 0) processOne466(); else rest466();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll833) {
    coll833 = coll833.reverse();
    function processOne467() {
      var item;
      item = coll833.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll833.length > 0) processOne467(); else rest467();
      
    }
    function rest467() {
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
    if(coll833.length > 0) processOne467(); else rest467();
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