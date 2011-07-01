mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl.ui');
mobl.provides('plot');
mobl.provides('ui');
mobl.provides('mathJAX');
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
    var tmp8093 = result__;
    var result__ = tmp8093;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp8094 = result__;
      var result__ = tmp8094;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp8095 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1005) {
    coll1005 = coll1005.reverse();
    function processOne297() {
      var i;
      i = coll1005.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp8096 = result__;
        
        if(coll1005.length > 0) processOne297(); else rest297();
        
      });
    }
    function rest297() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1005.length > 0) processOne297(); else rest297();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1006) {
    coll1006 = coll1006.reverse();
    function processOne298() {
      var i;
      i = coll1006.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp8097 = result__;
          
          if(coll1006.length > 0) processOne298(); else rest298();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp8097 = result__;
            
            if(coll1006.length > 0) processOne298(); else rest298();
            
          });
        }
      }
    }
    function rest298() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1006.length > 0) processOne298(); else rest298();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1007) {
    coll1007 = coll1007.reverse();
    function processOne299() {
      var i;
      i = coll1007.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp8098 = result__;
        
        if(coll1007.length > 0) processOne299(); else rest299();
        
      });
    }
    function rest299() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1007.length > 0) processOne299(); else rest299();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root9439 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8141 = $("<span>");
  root9439.append(nodes8141);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9440 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8106 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8005 = mobl.ref(result__);
    
    var nodes8142 = $("<span>");
    root9440.append(nodes8142);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8005, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8143 = $("<span>");
      root9441.append(nodes8143);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9442 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9442); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8143;
        nodes8143 = node.contents();
        oldNodes.replaceWith(nodes8143);
      }));
      callback(root9441); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8142;
      nodes8142 = node.contents();
      oldNodes.replaceWith(nodes8142);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8105 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8006 = mobl.ref(result__);
    
    var nodes8144 = $("<span>");
    root9440.append(nodes8144);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8006, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9443 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8145 = $("<span>");
      root9443.append(nodes8145);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9444 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9444); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8145;
        nodes8145 = node.contents();
        oldNodes.replaceWith(nodes8145);
      }));
      callback(root9443); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8144;
      nodes8144 = node.contents();
      oldNodes.replaceWith(nodes8144);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8104 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8007 = mobl.ref(result__);
    
    var nodes8146 = $("<span>");
    root9440.append(nodes8146);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8007, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9445 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8147 = $("<span>");
      root9445.append(nodes8147);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9446 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9446); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8147;
        nodes8147 = node.contents();
        oldNodes.replaceWith(nodes8147);
      }));
      callback(root9445); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8146;
      nodes8146 = node.contents();
      oldNodes.replaceWith(nodes8146);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8103 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8008 = mobl.ref(result__);
    
    var nodes8148 = $("<span>");
    root9440.append(nodes8148);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8008, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9447 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8149 = $("<span>");
      root9447.append(nodes8149);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9448 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9448); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8149;
        nodes8149 = node.contents();
        oldNodes.replaceWith(nodes8149);
      }));
      callback(root9447); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8148;
      nodes8148 = node.contents();
      oldNodes.replaceWith(nodes8148);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8102 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8009 = mobl.ref(result__);
    
    var nodes8150 = $("<span>");
    root9440.append(nodes8150);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8009, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9449 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8151 = $("<span>");
      root9449.append(nodes8151);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9450 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9450); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8151;
        nodes8151 = node.contents();
        oldNodes.replaceWith(nodes8151);
      }));
      callback(root9449); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8150;
      nodes8150 = node.contents();
      oldNodes.replaceWith(nodes8150);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8101 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8010 = mobl.ref(result__);
    
    var nodes8152 = $("<span>");
    root9440.append(nodes8152);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8010, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9451 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8153 = $("<span>");
      root9451.append(nodes8153);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9452 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9452); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8153;
        nodes8153 = node.contents();
        oldNodes.replaceWith(nodes8153);
      }));
      callback(root9451); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8152;
      nodes8152 = node.contents();
      oldNodes.replaceWith(nodes8152);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8100 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8011 = mobl.ref(result__);
    
    var nodes8154 = $("<span>");
    root9440.append(nodes8154);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8011, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9453 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8155 = $("<span>");
      root9453.append(nodes8155);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9454 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9454); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8155;
        nodes8155 = node.contents();
        oldNodes.replaceWith(nodes8155);
      }));
      callback(root9453); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8154;
      nodes8154 = node.contents();
      oldNodes.replaceWith(nodes8154);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8099 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8012 = mobl.ref(result__);
    
    var nodes8156 = $("<span>");
    root9440.append(nodes8156);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8012, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9455 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8157 = $("<span>");
      root9455.append(nodes8157);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9456 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9456); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8157;
        nodes8157 = node.contents();
        oldNodes.replaceWith(nodes8157);
      }));
      callback(root9455); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8156;
      nodes8156 = node.contents();
      oldNodes.replaceWith(nodes8156);
    }));
    callback(root9440); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8141;
    nodes8141 = node.contents();
    oldNodes.replaceWith(nodes8141);
  }));
  callback(root9439); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root9457 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes8158 = $("<span>");
  root9457.append(nodes8158);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9458 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8014 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8013 = mobl.ref(result__);
    
    var nodes8159 = $("<span>");
    root9458.append(nodes8159);
    subs__.addSub((ui.backButton)(tmp8013, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8014, function(_, callback) {
      var root9459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8159;
      nodes8159 = node.contents();
      oldNodes.replaceWith(nodes8159);
    }));
    callback(root9458); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8158;
    nodes8158 = node.contents();
    oldNodes.replaceWith(nodes8158);
  }));
  var nodes8160 = $("<span>");
  root9457.append(nodes8160);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9460 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp8114 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8015 = mobl.ref(result__);
    
    var nodes8161 = $("<span>");
    root9460.append(nodes8161);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8015, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9461 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8162 = $("<span>");
      root9461.append(nodes8162);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9462 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9462); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8162;
        nodes8162 = node.contents();
        oldNodes.replaceWith(nodes8162);
      }));
      callback(root9461); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8161;
      nodes8161 = node.contents();
      oldNodes.replaceWith(nodes8161);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp8113 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8016 = mobl.ref(result__);
    
    var nodes8163 = $("<span>");
    root9460.append(nodes8163);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8016, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9463 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8164 = $("<span>");
      root9463.append(nodes8164);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9464 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9464); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8164;
        nodes8164 = node.contents();
        oldNodes.replaceWith(nodes8164);
      }));
      callback(root9463); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8163;
      nodes8163 = node.contents();
      oldNodes.replaceWith(nodes8163);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp8112 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8017 = mobl.ref(result__);
    
    var nodes8165 = $("<span>");
    root9460.append(nodes8165);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8017, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9465 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8166 = $("<span>");
      root9465.append(nodes8166);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9466 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9466); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8166;
        nodes8166 = node.contents();
        oldNodes.replaceWith(nodes8166);
      }));
      callback(root9465); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8165;
      nodes8165 = node.contents();
      oldNodes.replaceWith(nodes8165);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp8111 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8018 = mobl.ref(result__);
    
    var nodes8167 = $("<span>");
    root9460.append(nodes8167);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8018, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9467 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8168 = $("<span>");
      root9467.append(nodes8168);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9468 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9468); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8168;
        nodes8168 = node.contents();
        oldNodes.replaceWith(nodes8168);
      }));
      callback(root9467); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8167;
      nodes8167 = node.contents();
      oldNodes.replaceWith(nodes8167);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp8110 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8019 = mobl.ref(result__);
    
    var nodes8169 = $("<span>");
    root9460.append(nodes8169);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8019, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9469 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8170 = $("<span>");
      root9469.append(nodes8170);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9470 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9470); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8170;
        nodes8170 = node.contents();
        oldNodes.replaceWith(nodes8170);
      }));
      callback(root9469); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8169;
      nodes8169 = node.contents();
      oldNodes.replaceWith(nodes8169);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp8109 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8020 = mobl.ref(result__);
    
    var nodes8171 = $("<span>");
    root9460.append(nodes8171);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8020, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9471 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8172 = $("<span>");
      root9471.append(nodes8172);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9472 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9472); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8172;
        nodes8172 = node.contents();
        oldNodes.replaceWith(nodes8172);
      }));
      callback(root9471); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8171;
      nodes8171 = node.contents();
      oldNodes.replaceWith(nodes8171);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp8108 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8021 = mobl.ref(result__);
    
    var nodes8173 = $("<span>");
    root9460.append(nodes8173);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8021, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9473 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8174 = $("<span>");
      root9473.append(nodes8174);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9474 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9474); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8174;
        nodes8174 = node.contents();
        oldNodes.replaceWith(nodes8174);
      }));
      callback(root9473); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8173;
      nodes8173 = node.contents();
      oldNodes.replaceWith(nodes8173);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp8107 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8022 = mobl.ref(result__);
    
    var nodes8175 = $("<span>");
    root9460.append(nodes8175);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8022, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9475 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8176 = $("<span>");
      root9475.append(nodes8176);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9476 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9476); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8176;
        nodes8176 = node.contents();
        oldNodes.replaceWith(nodes8176);
      }));
      callback(root9475); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8175;
      nodes8175 = node.contents();
      oldNodes.replaceWith(nodes8175);
    }));
    callback(root9460); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8160;
    nodes8160 = node.contents();
    oldNodes.replaceWith(nodes8160);
  }));
  callback(root9457); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root9477 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8177 = $("<span>");
  root9477.append(nodes8177);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9478 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8024 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8023 = mobl.ref(result__);
    
    var nodes8178 = $("<span>");
    root9478.append(nodes8178);
    subs__.addSub((ui.backButton)(tmp8023, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8024, function(_, callback) {
      var root9479 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9479); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8178;
      nodes8178 = node.contents();
      oldNodes.replaceWith(nodes8178);
    }));
    callback(root9478); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8177;
    nodes8177 = node.contents();
    oldNodes.replaceWith(nodes8177);
  }));
  var nodes8179 = $("<span>");
  root9477.append(nodes8179);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9480 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp8119 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8025 = mobl.ref(result__);
    
    var nodes8180 = $("<span>");
    root9480.append(nodes8180);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8025, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9481 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8181 = $("<span>");
      root9481.append(nodes8181);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9482 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9482); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8181;
        nodes8181 = node.contents();
        oldNodes.replaceWith(nodes8181);
      }));
      callback(root9481); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8180;
      nodes8180 = node.contents();
      oldNodes.replaceWith(nodes8180);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp8118 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8026 = mobl.ref(result__);
    
    var nodes8182 = $("<span>");
    root9480.append(nodes8182);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8026, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9483 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8183 = $("<span>");
      root9483.append(nodes8183);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9484 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9484); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8183;
        nodes8183 = node.contents();
        oldNodes.replaceWith(nodes8183);
      }));
      callback(root9483); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8182;
      nodes8182 = node.contents();
      oldNodes.replaceWith(nodes8182);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp8117 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8027 = mobl.ref(result__);
    
    var nodes8184 = $("<span>");
    root9480.append(nodes8184);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8027, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9485 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8185 = $("<span>");
      root9485.append(nodes8185);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9486 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9486); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8185;
        nodes8185 = node.contents();
        oldNodes.replaceWith(nodes8185);
      }));
      callback(root9485); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8184;
      nodes8184 = node.contents();
      oldNodes.replaceWith(nodes8184);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp8116 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8028 = mobl.ref(result__);
    
    var nodes8186 = $("<span>");
    root9480.append(nodes8186);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8028, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9487 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8187 = $("<span>");
      root9487.append(nodes8187);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9488 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9488); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8187;
        nodes8187 = node.contents();
        oldNodes.replaceWith(nodes8187);
      }));
      callback(root9487); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8186;
      nodes8186 = node.contents();
      oldNodes.replaceWith(nodes8186);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp8115 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8029 = mobl.ref(result__);
    
    var nodes8188 = $("<span>");
    root9480.append(nodes8188);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8029, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9489 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8189 = $("<span>");
      root9489.append(nodes8189);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9490 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9490); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8189;
        nodes8189 = node.contents();
        oldNodes.replaceWith(nodes8189);
      }));
      callback(root9489); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8188;
      nodes8188 = node.contents();
      oldNodes.replaceWith(nodes8188);
    }));
    callback(root9480); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8179;
    nodes8179 = node.contents();
    oldNodes.replaceWith(nodes8179);
  }));
  callback(root9477); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root9491 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8190 = $("<span>");
  root9491.append(nodes8190);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9492 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8031 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8030 = mobl.ref(result__);
    
    var nodes8191 = $("<span>");
    root9492.append(nodes8191);
    subs__.addSub((ui.backButton)(tmp8030, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8031, function(_, callback) {
      var root9493 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9493); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8191;
      nodes8191 = node.contents();
      oldNodes.replaceWith(nodes8191);
    }));
    callback(root9492); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8190;
    nodes8190 = node.contents();
    oldNodes.replaceWith(nodes8190);
  }));
  var nodes8192 = $("<span>");
  root9491.append(nodes8192);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9494 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp8122 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8032 = mobl.ref(result__);
    
    var nodes8193 = $("<span>");
    root9494.append(nodes8193);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8032, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9495 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8194 = $("<span>");
      root9495.append(nodes8194);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9496 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9496); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8194;
        nodes8194 = node.contents();
        oldNodes.replaceWith(nodes8194);
      }));
      callback(root9495); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8193;
      nodes8193 = node.contents();
      oldNodes.replaceWith(nodes8193);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp8121 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8033 = mobl.ref(result__);
    
    var nodes8195 = $("<span>");
    root9494.append(nodes8195);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8033, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9497 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8196 = $("<span>");
      root9497.append(nodes8196);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9498 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9498); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8196;
        nodes8196 = node.contents();
        oldNodes.replaceWith(nodes8196);
      }));
      callback(root9497); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8195;
      nodes8195 = node.contents();
      oldNodes.replaceWith(nodes8195);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp8120 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8034 = mobl.ref(result__);
    
    var nodes8197 = $("<span>");
    root9494.append(nodes8197);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8034, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9499 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8198 = $("<span>");
      root9499.append(nodes8198);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9500 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9500); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8198;
        nodes8198 = node.contents();
        oldNodes.replaceWith(nodes8198);
      }));
      callback(root9499); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8197;
      nodes8197 = node.contents();
      oldNodes.replaceWith(nodes8197);
    }));
    callback(root9494); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8192;
    nodes8192 = node.contents();
    oldNodes.replaceWith(nodes8192);
  }));
  callback(root9491); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root9501 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8199 = $("<span>");
  root9501.append(nodes8199);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9502 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8036 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8035 = mobl.ref(result__);
    
    var nodes8200 = $("<span>");
    root9502.append(nodes8200);
    subs__.addSub((ui.backButton)(tmp8035, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8036, function(_, callback) {
      var root9503 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9503); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8200;
      nodes8200 = node.contents();
      oldNodes.replaceWith(nodes8200);
    }));
    callback(root9502); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8199;
    nodes8199 = node.contents();
    oldNodes.replaceWith(nodes8199);
  }));
  var nodes8201 = $("<span>");
  root9501.append(nodes8201);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9504 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp8126 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8037 = mobl.ref(result__);
    
    var nodes8202 = $("<span>");
    root9504.append(nodes8202);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8037, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9505 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8203 = $("<span>");
      root9505.append(nodes8203);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9506 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9506); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8203;
        nodes8203 = node.contents();
        oldNodes.replaceWith(nodes8203);
      }));
      callback(root9505); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8202;
      nodes8202 = node.contents();
      oldNodes.replaceWith(nodes8202);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp8125 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8038 = mobl.ref(result__);
    
    var nodes8204 = $("<span>");
    root9504.append(nodes8204);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8038, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9507 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8205 = $("<span>");
      root9507.append(nodes8205);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9508 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9508); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8205;
        nodes8205 = node.contents();
        oldNodes.replaceWith(nodes8205);
      }));
      callback(root9507); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8204;
      nodes8204 = node.contents();
      oldNodes.replaceWith(nodes8204);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp8124 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8039 = mobl.ref(result__);
    
    var nodes8206 = $("<span>");
    root9504.append(nodes8206);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8039, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9509 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8207 = $("<span>");
      root9509.append(nodes8207);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9510 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9510); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8207;
        nodes8207 = node.contents();
        oldNodes.replaceWith(nodes8207);
      }));
      callback(root9509); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8206;
      nodes8206 = node.contents();
      oldNodes.replaceWith(nodes8206);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp8123 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8040 = mobl.ref(result__);
    
    var nodes8208 = $("<span>");
    root9504.append(nodes8208);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8040, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9511 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8209 = $("<span>");
      root9511.append(nodes8209);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9512 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9512); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8209;
        nodes8209 = node.contents();
        oldNodes.replaceWith(nodes8209);
      }));
      callback(root9511); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8208;
      nodes8208 = node.contents();
      oldNodes.replaceWith(nodes8208);
    }));
    callback(root9504); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8201;
    nodes8201 = node.contents();
    oldNodes.replaceWith(nodes8201);
  }));
  callback(root9501); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root9513 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8210 = $("<span>");
  root9513.append(nodes8210);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9514 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8042 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8041 = mobl.ref(result__);
    
    var nodes8211 = $("<span>");
    root9514.append(nodes8211);
    subs__.addSub((ui.backButton)(tmp8041, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8042, function(_, callback) {
      var root9515 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9515); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8211;
      nodes8211 = node.contents();
      oldNodes.replaceWith(nodes8211);
    }));
    callback(root9514); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8210;
    nodes8210 = node.contents();
    oldNodes.replaceWith(nodes8210);
  }));
  var nodes8212 = $("<span>");
  root9513.append(nodes8212);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9516 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp8128 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8043 = mobl.ref(result__);
    
    var nodes8213 = $("<span>");
    root9516.append(nodes8213);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8043, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9517 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8214 = $("<span>");
      root9517.append(nodes8214);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9518 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9518); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8214;
        nodes8214 = node.contents();
        oldNodes.replaceWith(nodes8214);
      }));
      callback(root9517); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8213;
      nodes8213 = node.contents();
      oldNodes.replaceWith(nodes8213);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp8127 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8044 = mobl.ref(result__);
    
    var nodes8215 = $("<span>");
    root9516.append(nodes8215);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8044, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9519 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8216 = $("<span>");
      root9519.append(nodes8216);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9520 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9520); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8216;
        nodes8216 = node.contents();
        oldNodes.replaceWith(nodes8216);
      }));
      callback(root9519); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8215;
      nodes8215 = node.contents();
      oldNodes.replaceWith(nodes8215);
    }));
    callback(root9516); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8212;
    nodes8212 = node.contents();
    oldNodes.replaceWith(nodes8212);
  }));
  callback(root9513); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root9521 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8217 = $("<span>");
  root9521.append(nodes8217);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9522 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8046 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8045 = mobl.ref(result__);
    
    var nodes8218 = $("<span>");
    root9522.append(nodes8218);
    subs__.addSub((ui.backButton)(tmp8045, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8046, function(_, callback) {
      var root9523 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9523); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8218;
      nodes8218 = node.contents();
      oldNodes.replaceWith(nodes8218);
    }));
    callback(root9522); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8217;
    nodes8217 = node.contents();
    oldNodes.replaceWith(nodes8217);
  }));
  var nodes8219 = $("<span>");
  root9521.append(nodes8219);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9524 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp8133 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8047 = mobl.ref(result__);
    
    var nodes8220 = $("<span>");
    root9524.append(nodes8220);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8047, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9525 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8221 = $("<span>");
      root9525.append(nodes8221);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9526 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9526); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8221;
        nodes8221 = node.contents();
        oldNodes.replaceWith(nodes8221);
      }));
      callback(root9525); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8220;
      nodes8220 = node.contents();
      oldNodes.replaceWith(nodes8220);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp8132 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8048 = mobl.ref(result__);
    
    var nodes8222 = $("<span>");
    root9524.append(nodes8222);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8048, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9527 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8223 = $("<span>");
      root9527.append(nodes8223);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9528 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9528); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8223;
        nodes8223 = node.contents();
        oldNodes.replaceWith(nodes8223);
      }));
      callback(root9527); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8222;
      nodes8222 = node.contents();
      oldNodes.replaceWith(nodes8222);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp8131 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8049 = mobl.ref(result__);
    
    var nodes8224 = $("<span>");
    root9524.append(nodes8224);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8049, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9529 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8225 = $("<span>");
      root9529.append(nodes8225);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9530 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9530); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8225;
        nodes8225 = node.contents();
        oldNodes.replaceWith(nodes8225);
      }));
      callback(root9529); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8224;
      nodes8224 = node.contents();
      oldNodes.replaceWith(nodes8224);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp8130 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8050 = mobl.ref(result__);
    
    var nodes8226 = $("<span>");
    root9524.append(nodes8226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8050, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9531 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8227 = $("<span>");
      root9531.append(nodes8227);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9532 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9532); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8227;
        nodes8227 = node.contents();
        oldNodes.replaceWith(nodes8227);
      }));
      callback(root9531); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8226;
      nodes8226 = node.contents();
      oldNodes.replaceWith(nodes8226);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp8129 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8051 = mobl.ref(result__);
    
    var nodes8228 = $("<span>");
    root9524.append(nodes8228);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8051, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9533 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8229 = $("<span>");
      root9533.append(nodes8229);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9534 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9534); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8229;
        nodes8229 = node.contents();
        oldNodes.replaceWith(nodes8229);
      }));
      callback(root9533); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8228;
      nodes8228 = node.contents();
      oldNodes.replaceWith(nodes8228);
    }));
    callback(root9524); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8219;
    nodes8219 = node.contents();
    oldNodes.replaceWith(nodes8219);
  }));
  callback(root9521); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root9535 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8230 = $("<span>");
  root9535.append(nodes8230);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9536 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8053 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8052 = mobl.ref(result__);
    
    var nodes8231 = $("<span>");
    root9536.append(nodes8231);
    subs__.addSub((ui.backButton)(tmp8052, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8053, function(_, callback) {
      var root9537 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9537); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8231;
      nodes8231 = node.contents();
      oldNodes.replaceWith(nodes8231);
    }));
    callback(root9536); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8230;
    nodes8230 = node.contents();
    oldNodes.replaceWith(nodes8230);
  }));
  var nodes8232 = $("<span>");
  root9535.append(nodes8232);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9538 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp8136 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8054 = mobl.ref(result__);
    
    var nodes8233 = $("<span>");
    root9538.append(nodes8233);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8054, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9539 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8234 = $("<span>");
      root9539.append(nodes8234);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9540 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9540); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8234;
        nodes8234 = node.contents();
        oldNodes.replaceWith(nodes8234);
      }));
      callback(root9539); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8233;
      nodes8233 = node.contents();
      oldNodes.replaceWith(nodes8233);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp8135 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8055 = mobl.ref(result__);
    
    var nodes8235 = $("<span>");
    root9538.append(nodes8235);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8055, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9541 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8236 = $("<span>");
      root9541.append(nodes8236);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9542 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9542); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8236;
        nodes8236 = node.contents();
        oldNodes.replaceWith(nodes8236);
      }));
      callback(root9541); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8235;
      nodes8235 = node.contents();
      oldNodes.replaceWith(nodes8235);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp8134 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8056 = mobl.ref(result__);
    
    var nodes8237 = $("<span>");
    root9538.append(nodes8237);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8056, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9543 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8238 = $("<span>");
      root9543.append(nodes8238);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9544 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9544); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8238;
        nodes8238 = node.contents();
        oldNodes.replaceWith(nodes8238);
      }));
      callback(root9543); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8237;
      nodes8237 = node.contents();
      oldNodes.replaceWith(nodes8237);
    }));
    callback(root9538); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8232;
    nodes8232 = node.contents();
    oldNodes.replaceWith(nodes8232);
  }));
  callback(root9535); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root9545 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes8239 = $("<span>");
  root9545.append(nodes8239);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9546 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8058 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8057 = mobl.ref(result__);
    
    var nodes8240 = $("<span>");
    root9546.append(nodes8240);
    subs__.addSub((ui.backButton)(tmp8057, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8058, function(_, callback) {
      var root9547 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9547); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8240;
      nodes8240 = node.contents();
      oldNodes.replaceWith(nodes8240);
    }));
    callback(root9546); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8239;
    nodes8239 = node.contents();
    oldNodes.replaceWith(nodes8239);
  }));
  var nodes8241 = $("<span>");
  root9545.append(nodes8241);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9548 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp8137 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8059 = mobl.ref(result__);
    
    var nodes8242 = $("<span>");
    root9548.append(nodes8242);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8059, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9549 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8243 = $("<span>");
      root9549.append(nodes8243);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9550 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9550); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8243;
        nodes8243 = node.contents();
        oldNodes.replaceWith(nodes8243);
      }));
      callback(root9549); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8242;
      nodes8242 = node.contents();
      oldNodes.replaceWith(nodes8242);
    }));
    callback(root9548); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8241;
    nodes8241 = node.contents();
    oldNodes.replaceWith(nodes8241);
  }));
  callback(root9545); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root9551 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8244 = $("<span>");
  root9551.append(nodes8244);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9552 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp8150 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8060 = mobl.ref(result__);
    
    var nodes8245 = $("<span>");
    root9552.append(nodes8245);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8060, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9553 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8246 = $("<span>");
      root9553.append(nodes8246);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9554 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9554); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8246;
        nodes8246 = node.contents();
        oldNodes.replaceWith(nodes8246);
      }));
      callback(root9553); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8245;
      nodes8245 = node.contents();
      oldNodes.replaceWith(nodes8245);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp8149 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8061 = mobl.ref(result__);
    
    var nodes8247 = $("<span>");
    root9552.append(nodes8247);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8061, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9555 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8248 = $("<span>");
      root9555.append(nodes8248);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9556 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9556); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8248;
        nodes8248 = node.contents();
        oldNodes.replaceWith(nodes8248);
      }));
      callback(root9555); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8247;
      nodes8247 = node.contents();
      oldNodes.replaceWith(nodes8247);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp8148 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8062 = mobl.ref(result__);
    
    var nodes8249 = $("<span>");
    root9552.append(nodes8249);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8062, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9557 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8250 = $("<span>");
      root9557.append(nodes8250);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9558 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9558); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8250;
        nodes8250 = node.contents();
        oldNodes.replaceWith(nodes8250);
      }));
      callback(root9557); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8249;
      nodes8249 = node.contents();
      oldNodes.replaceWith(nodes8249);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp8147 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8063 = mobl.ref(result__);
    
    var nodes8251 = $("<span>");
    root9552.append(nodes8251);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8063, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9559 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8252 = $("<span>");
      root9559.append(nodes8252);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9560 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9560); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8252;
        nodes8252 = node.contents();
        oldNodes.replaceWith(nodes8252);
      }));
      callback(root9559); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8251;
      nodes8251 = node.contents();
      oldNodes.replaceWith(nodes8251);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp8146 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8064 = mobl.ref(result__);
    
    var nodes8253 = $("<span>");
    root9552.append(nodes8253);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8064, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9561 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8254 = $("<span>");
      root9561.append(nodes8254);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9562 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9562); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8254;
        nodes8254 = node.contents();
        oldNodes.replaceWith(nodes8254);
      }));
      callback(root9561); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8253;
      nodes8253 = node.contents();
      oldNodes.replaceWith(nodes8253);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp8145 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8065 = mobl.ref(result__);
    
    var nodes8255 = $("<span>");
    root9552.append(nodes8255);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8065, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9563 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8256 = $("<span>");
      root9563.append(nodes8256);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9564 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9564); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8256;
        nodes8256 = node.contents();
        oldNodes.replaceWith(nodes8256);
      }));
      callback(root9563); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8255;
      nodes8255 = node.contents();
      oldNodes.replaceWith(nodes8255);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp8144 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8066 = mobl.ref(result__);
    
    var nodes8257 = $("<span>");
    root9552.append(nodes8257);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8066, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9565 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8258 = $("<span>");
      root9565.append(nodes8258);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9566 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9566); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8258;
        nodes8258 = node.contents();
        oldNodes.replaceWith(nodes8258);
      }));
      callback(root9565); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8257;
      nodes8257 = node.contents();
      oldNodes.replaceWith(nodes8257);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp8143 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8067 = mobl.ref(result__);
    
    var nodes8259 = $("<span>");
    root9552.append(nodes8259);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8067, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9567 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8260 = $("<span>");
      root9567.append(nodes8260);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9568 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9568); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8260;
        nodes8260 = node.contents();
        oldNodes.replaceWith(nodes8260);
      }));
      callback(root9567); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8259;
      nodes8259 = node.contents();
      oldNodes.replaceWith(nodes8259);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp8142 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8068 = mobl.ref(result__);
    
    var nodes8261 = $("<span>");
    root9552.append(nodes8261);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8068, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9569 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8262 = $("<span>");
      root9569.append(nodes8262);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9570 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9570); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8262;
        nodes8262 = node.contents();
        oldNodes.replaceWith(nodes8262);
      }));
      callback(root9569); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8261;
      nodes8261 = node.contents();
      oldNodes.replaceWith(nodes8261);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp8141 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8069 = mobl.ref(result__);
    
    var nodes8263 = $("<span>");
    root9552.append(nodes8263);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8069, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9571 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8264 = $("<span>");
      root9571.append(nodes8264);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9572 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9572); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8264;
        nodes8264 = node.contents();
        oldNodes.replaceWith(nodes8264);
      }));
      callback(root9571); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8263;
      nodes8263 = node.contents();
      oldNodes.replaceWith(nodes8263);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp8140 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8070 = mobl.ref(result__);
    
    var nodes8265 = $("<span>");
    root9552.append(nodes8265);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8070, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9573 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8266 = $("<span>");
      root9573.append(nodes8266);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9574 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9574); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8266;
        nodes8266 = node.contents();
        oldNodes.replaceWith(nodes8266);
      }));
      callback(root9573); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8265;
      nodes8265 = node.contents();
      oldNodes.replaceWith(nodes8265);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp8139 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8071 = mobl.ref(result__);
    
    var nodes8267 = $("<span>");
    root9552.append(nodes8267);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8071, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9575 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8268 = $("<span>");
      root9575.append(nodes8268);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9576 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9576); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8268;
        nodes8268 = node.contents();
        oldNodes.replaceWith(nodes8268);
      }));
      callback(root9575); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8267;
      nodes8267 = node.contents();
      oldNodes.replaceWith(nodes8267);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp8138 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8072 = mobl.ref(result__);
    
    var nodes8269 = $("<span>");
    root9552.append(nodes8269);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8072, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9577 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8270 = $("<span>");
      root9577.append(nodes8270);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9578 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9578); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8270;
        nodes8270 = node.contents();
        oldNodes.replaceWith(nodes8270);
      }));
      callback(root9577); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8269;
      nodes8269 = node.contents();
      oldNodes.replaceWith(nodes8269);
    }));
    callback(root9552); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8244;
    nodes8244 = node.contents();
    oldNodes.replaceWith(nodes8244);
  }));
  callback(root9551); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root9579 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8271 = $("<span>");
  root9579.append(nodes8271);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9580 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp8156 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8073 = mobl.ref(result__);
    
    var nodes8272 = $("<span>");
    root9580.append(nodes8272);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8073, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9581 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8273 = $("<span>");
      root9581.append(nodes8273);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9582 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9582); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8273;
        nodes8273 = node.contents();
        oldNodes.replaceWith(nodes8273);
      }));
      callback(root9581); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8272;
      nodes8272 = node.contents();
      oldNodes.replaceWith(nodes8272);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp8155 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8074 = mobl.ref(result__);
    
    var nodes8274 = $("<span>");
    root9580.append(nodes8274);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8074, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9583 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8275 = $("<span>");
      root9583.append(nodes8275);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9584 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9584); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8275;
        nodes8275 = node.contents();
        oldNodes.replaceWith(nodes8275);
      }));
      callback(root9583); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8274;
      nodes8274 = node.contents();
      oldNodes.replaceWith(nodes8274);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp8154 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8075 = mobl.ref(result__);
    
    var nodes8276 = $("<span>");
    root9580.append(nodes8276);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8075, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9585 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8277 = $("<span>");
      root9585.append(nodes8277);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9586 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9586); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8277;
        nodes8277 = node.contents();
        oldNodes.replaceWith(nodes8277);
      }));
      callback(root9585); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8276;
      nodes8276 = node.contents();
      oldNodes.replaceWith(nodes8276);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp8153 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8076 = mobl.ref(result__);
    
    var nodes8278 = $("<span>");
    root9580.append(nodes8278);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8076, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9587 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8279 = $("<span>");
      root9587.append(nodes8279);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9588 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9588); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8279;
        nodes8279 = node.contents();
        oldNodes.replaceWith(nodes8279);
      }));
      callback(root9587); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8278;
      nodes8278 = node.contents();
      oldNodes.replaceWith(nodes8278);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp8152 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8077 = mobl.ref(result__);
    
    var nodes8280 = $("<span>");
    root9580.append(nodes8280);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8077, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9589 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8281 = $("<span>");
      root9589.append(nodes8281);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9590 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9590); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8281;
        nodes8281 = node.contents();
        oldNodes.replaceWith(nodes8281);
      }));
      callback(root9589); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8280;
      nodes8280 = node.contents();
      oldNodes.replaceWith(nodes8280);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp8151 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8078 = mobl.ref(result__);
    
    var nodes8282 = $("<span>");
    root9580.append(nodes8282);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8078, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9591 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8283 = $("<span>");
      root9591.append(nodes8283);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9592 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9592); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8283;
        nodes8283 = node.contents();
        oldNodes.replaceWith(nodes8283);
      }));
      callback(root9591); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8282;
      nodes8282 = node.contents();
      oldNodes.replaceWith(nodes8282);
    }));
    callback(root9580); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8271;
    nodes8271 = node.contents();
    oldNodes.replaceWith(nodes8271);
  }));
  callback(root9579); return subs__;
  
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
  var root9593 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1404 = $("<div>");
  
  var ref1372 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref1372.get() !== null) {
    node1404.attr('class', ref1372.get());
    subs__.addSub(ref1372.addEventListener('change', function(_, ref, val) {
      node1404.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1372.rebind());
  
  var val627 = onclick.get();
  if(val627 !== null) {
    subs__.addSub(mobl.domBind(node1404, 'tap', val627));
  }
  
  
  var node1405 = $("<div>");
  
  var ref1371 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref1371.get() !== null) {
    node1405.attr('class', ref1371.get());
    subs__.addSub(ref1371.addEventListener('change', function(_, ref, val) {
      node1405.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1371.rebind());
  
  
  var node1406 = $("<div>");
  
  var ref1369 = text;
  node1406.text(""+ref1369.get());
  var ignore256 = false;
  subs__.addSub(ref1369.addEventListener('change', function(_, ref, val) {
    if(ignore256) return;
    node1406.text(""+val);
  }));
  subs__.addSub(ref1369.rebind());
  
  
  var ref1370 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1370.get() !== null) {
    node1406.attr('class', ref1370.get());
    subs__.addSub(ref1370.addEventListener('change', function(_, ref, val) {
      node1406.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1370.rebind());
  
  node1405.append(node1406);
  node1404.append(node1405);
  var nodes8284 = $("<span>");
  node1404.append(nodes8284);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl540();
  }));
  
  function renderControl540() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9594 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9594); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8284;
      nodes8284 = node.contents();
      oldNodes.replaceWith(nodes8284);
    }));
  }
  renderControl540();
  root9593.append(node1404);
  callback(root9593); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp8157 = result__;
    var result__ = qa.done && qa.answer == "%GRAPH%";
    if(result__) {
      var result__ = mobl.JSON.parse(qa.plotData);
      var jsonData = result__;
      var result__ = plot.lineChart("corePlotArea", jsonData);
      if(callback && callback.apply) callback(); return;
    } else {
      {
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
  var root9595 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                   var result__ = qa.get().answer != "%GRAPH%";
                   if(result__) {
                     var result__ = mobl.$("#answer-block-" + number.get()).children("span:first").html();
                     qa.get().answerHtml = result__;
                     if(callback && callback.apply) callback(); return;
                   } else {
                     {
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp8083 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp8082 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp8082.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp8082.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp8082.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes8285 = $("<span>");
  root9595.append(nodes8285);
  subs__.addSub((mobl.block)(tmp8082, mobl.ref(null), tmp8083, mobl.ref(null), function(_, callback) {
    var root9596 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp8079 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp8079.set("A" + number.get() + ". ");
    }));
    
    var nodes8286 = $("<span>");
    root9596.append(nodes8286);
    subs__.addSub((mobl.label)(tmp8079, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9597 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9597); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8286;
      nodes8286 = node.contents();
      oldNodes.replaceWith(nodes8286);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp8081 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp8081.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1407 = $("<span>");
    root9596.append(node1407);
    var condSubs346 = new mobl.CompSubscription();
    subs__.addSub(condSubs346);
    var oldValue346;
    var renderCond346 = function() {
      var value818 = tmp8081.get();
      if(oldValue346 === value818) return;
      oldValue346 = value818;
      var subs__ = condSubs346;
      subs__.unsubscribe();
      node1407.empty();
      if(value818) {
        
        var node1408 = $("<span>");
        
        var ref1373 = mobl.ref("answer-block-" + number.get());
        if(ref1373.get() !== null) {
          node1408.attr('id', ref1373.get());
          subs__.addSub(ref1373.addEventListener('change', function(_, ref, val) {
            node1408.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1408.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref1373.rebind());
        
        var result__ = nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp8080 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp8080.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp8080.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes8287 = $("<span>");
        node1408.append(nodes8287);
        subs__.addSub((mobl.html)(tmp8080, function(_, callback) {
          var root9598 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9598); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8287;
          nodes8287 = node.contents();
          oldNodes.replaceWith(nodes8287);
        }));
        node1407.append(node1408);
        
        
        
      } else {
        var nodes8288 = $("<span>");
        node1407.append(nodes8288);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root9599 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9599); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8288;
          nodes8288 = node.contents();
          oldNodes.replaceWith(nodes8288);
        }));
        
        
      }
    };
    renderCond346();
    subs__.addSub(tmp8081.addEventListener('change', function() {
      renderCond346();
    }));
    
    callback(root9596); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8285;
    nodes8285 = node.contents();
    oldNodes.replaceWith(nodes8285);
  }));
  var nodes8289 = $("<span>");
  root9595.append(nodes8289);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9600 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes8290 = $("<span>");
    root9600.append(nodes8290);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9601 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9601); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8290;
      nodes8290 = node.contents();
      oldNodes.replaceWith(nodes8290);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8084 = mobl.ref(result__);
    
    var nodes8291 = $("<span>");
    root9600.append(nodes8291);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp8084, function(_, callback) {
      var root9602 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9602); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8291;
      nodes8291 = node.contents();
      oldNodes.replaceWith(nodes8291);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8085 = mobl.ref(result__);
    
    var nodes8292 = $("<span>");
    root9600.append(nodes8292);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp8085, function(_, callback) {
      var root9603 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9603); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8292;
      nodes8292 = node.contents();
      oldNodes.replaceWith(nodes8292);
    }));
    callback(root9600); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8289;
    nodes8289 = node.contents();
    oldNodes.replaceWith(nodes8289);
  }));
  callback(root9595); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp8158 = result__;
    var result__ = tmp8158;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp8159 = result__;
        var result__ = tmp8159;
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

nrichRPG.coreWorkout.blank = function(text) {
   var __this = this;
  return (text == null || text.toString() == "");
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root9604 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp8169 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp8087 = mobl.ref(result__);
  
  var nodes8293 = $("<span>");
  root9604.append(nodes8293);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp8087, function(_, callback) {
    var root9605 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp8162 = result__;
                       var result__ = tmp8162;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp8163 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp8086 = mobl.ref(result__);
    
    var nodes8294 = $("<span>");
    root9605.append(nodes8294);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp8086, function(_, callback) {
      var root9606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9606); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8294;
      nodes8294 = node.contents();
      oldNodes.replaceWith(nodes8294);
    }));
    mobl.sleep(100, function(result__) {
      var tmp8160 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp8161 = result__;
        callback(root9605); return subs__;
      });
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8293;
    nodes8293 = node.contents();
    oldNodes.replaceWith(nodes8293);
  }));
  var nodes8295 = $("<span>");
  root9604.append(nodes8295);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9607 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp8166 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8090 = mobl.ref(result__);
    
    var nodes8296 = $("<span>");
    root9607.append(nodes8296);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp8090, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root9608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp8088 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp8088.set("Q" + number.get() + ". ");
      }));
      
      var nodes8297 = $("<span>");
      root9608.append(nodes8297);
      subs__.addSub((mobl.html)(tmp8088, function(_, callback) {
        var root9609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8297;
        nodes8297 = node.contents();
        oldNodes.replaceWith(nodes8297);
      }));
      
      var node1409 = $("<span>");
      
      var ref1374 = mobl.ref("question-block-" + number.get());
      if(ref1374.get() !== null) {
        node1409.attr('id', ref1374.get());
        subs__.addSub(ref1374.addEventListener('change', function(_, ref, val) {
          node1409.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1409.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref1374.rebind());
      
      var result__ = nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp8089 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp8089.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp8089.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes8298 = $("<span>");
      node1409.append(nodes8298);
      subs__.addSub((mobl.html)(tmp8089, function(_, callback) {
        var root9610 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9610); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8298;
        nodes8298 = node.contents();
        oldNodes.replaceWith(nodes8298);
      }));
      root9608.append(node1409);
      callback(root9608); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8296;
      nodes8296 = node.contents();
      oldNodes.replaceWith(nodes8296);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp8165 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8092 = mobl.ref(result__);
    
    var nodes8299 = $("<span>");
    root9607.append(nodes8299);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8092, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root9611 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8300 = $("<span>");
      root9611.append(nodes8300);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9612 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp8164 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp8091 = mobl.ref(result__);
        
        var nodes8301 = $("<span>");
        root9612.append(nodes8301);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp8091, function(_, callback) {
          var root9613 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9613); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8301;
          nodes8301 = node.contents();
          oldNodes.replaceWith(nodes8301);
        }));
        callback(root9612); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8300;
        nodes8300 = node.contents();
        oldNodes.replaceWith(nodes8300);
      }));
      
      var node1410 = $("<span>");
      root9611.append(node1410);
      var condSubs347 = new mobl.CompSubscription();
      subs__.addSub(condSubs347);
      var oldValue347;
      var renderCond347 = function() {
        var value819 = qa.get().done;
        if(oldValue347 === value819) return;
        oldValue347 = value819;
        var subs__ = condSubs347;
        subs__.unsubscribe();
        node1410.empty();
        if(value819) {
          var nodes8302 = $("<span>");
          node1410.append(nodes8302);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root9614 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9614); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes8302;
            nodes8302 = node.contents();
            oldNodes.replaceWith(nodes8302);
          }));
          
          
        } else {
          
        }
      };
      renderCond347();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond347();
      }));
      
      callback(root9611); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8299;
      nodes8299 = node.contents();
      oldNodes.replaceWith(nodes8299);
    }));
    callback(root9607); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8295;
    nodes8295 = node.contents();
    oldNodes.replaceWith(nodes8295);
  }));
  mobl.sleep(100, function(result__) {
    var tmp8167 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp8168 = result__;
      callback(root9604); return subs__;
    });
  });
  
  
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
  qas.list(function(coll1008) {
    coll1008 = coll1008.reverse();
    function processOne300() {
      var item;
      item = coll1008.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1008.length > 0) processOne300(); else rest300();
      
    }
    function rest300() {
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
    if(coll1008.length > 0) processOne300(); else rest300();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1009) {
    coll1009 = coll1009.reverse();
    function processOne301() {
      var item;
      item = coll1009.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1009.length > 0) processOne301(); else rest301();
      
    }
    function rest301() {
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
    if(coll1009.length > 0) processOne301(); else rest301();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1010) {
    coll1010 = coll1010.reverse();
    function processOne302() {
      var item;
      item = coll1010.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1010.length > 0) processOne302(); else rest302();
      
    }
    function rest302() {
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
    if(coll1010.length > 0) processOne302(); else rest302();
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