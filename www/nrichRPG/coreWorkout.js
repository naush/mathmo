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
    var tmp9191 = result__;
    var result__ = tmp9191;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp9192 = result__;
      var result__ = tmp9192;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp9193 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1275) {
    coll1275 = coll1275.reverse();
    function processOne339() {
      var i;
      i = coll1275.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp9194 = result__;
        
        if(coll1275.length > 0) processOne339(); else rest339();
        
      });
    }
    function rest339() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1275.length > 0) processOne339(); else rest339();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1276) {
    coll1276 = coll1276.reverse();
    function processOne340() {
      var i;
      i = coll1276.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp9195 = result__;
          
          if(coll1276.length > 0) processOne340(); else rest340();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp9195 = result__;
            
            if(coll1276.length > 0) processOne340(); else rest340();
            
          });
        }
      }
    }
    function rest340() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1276.length > 0) processOne340(); else rest340();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1277) {
    coll1277 = coll1277.reverse();
    function processOne341() {
      var i;
      i = coll1277.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp9196 = result__;
        
        if(coll1277.length > 0) processOne341(); else rest341();
        
      });
    }
    function rest341() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1277.length > 0) processOne341(); else rest341();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root10811 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9247 = $("<span>");
  root10811.append(nodes9247);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10812 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9204 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9103 = mobl.ref(result__);
    
    var nodes9248 = $("<span>");
    root10812.append(nodes9248);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9103, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9249 = $("<span>");
      root10813.append(nodes9249);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10814 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10814); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9249;
        nodes9249 = node.contents();
        oldNodes.replaceWith(nodes9249);
      }));
      callback(root10813); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9248;
      nodes9248 = node.contents();
      oldNodes.replaceWith(nodes9248);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9203 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9104 = mobl.ref(result__);
    
    var nodes9250 = $("<span>");
    root10812.append(nodes9250);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9104, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10815 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9251 = $("<span>");
      root10815.append(nodes9251);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10816 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10816); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9251;
        nodes9251 = node.contents();
        oldNodes.replaceWith(nodes9251);
      }));
      callback(root10815); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9250;
      nodes9250 = node.contents();
      oldNodes.replaceWith(nodes9250);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9202 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9105 = mobl.ref(result__);
    
    var nodes9252 = $("<span>");
    root10812.append(nodes9252);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9105, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10817 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9253 = $("<span>");
      root10817.append(nodes9253);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10818 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10818); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9253;
        nodes9253 = node.contents();
        oldNodes.replaceWith(nodes9253);
      }));
      callback(root10817); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9252;
      nodes9252 = node.contents();
      oldNodes.replaceWith(nodes9252);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9201 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9106 = mobl.ref(result__);
    
    var nodes9254 = $("<span>");
    root10812.append(nodes9254);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9106, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10819 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9255 = $("<span>");
      root10819.append(nodes9255);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10820 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10820); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9255;
        nodes9255 = node.contents();
        oldNodes.replaceWith(nodes9255);
      }));
      callback(root10819); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9254;
      nodes9254 = node.contents();
      oldNodes.replaceWith(nodes9254);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9200 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9107 = mobl.ref(result__);
    
    var nodes9256 = $("<span>");
    root10812.append(nodes9256);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9107, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9257 = $("<span>");
      root10821.append(nodes9257);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10822 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10822); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9257;
        nodes9257 = node.contents();
        oldNodes.replaceWith(nodes9257);
      }));
      callback(root10821); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9256;
      nodes9256 = node.contents();
      oldNodes.replaceWith(nodes9256);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9199 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9108 = mobl.ref(result__);
    
    var nodes9258 = $("<span>");
    root10812.append(nodes9258);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9108, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10823 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9259 = $("<span>");
      root10823.append(nodes9259);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10824 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10824); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9259;
        nodes9259 = node.contents();
        oldNodes.replaceWith(nodes9259);
      }));
      callback(root10823); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9258;
      nodes9258 = node.contents();
      oldNodes.replaceWith(nodes9258);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9198 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9109 = mobl.ref(result__);
    
    var nodes9260 = $("<span>");
    root10812.append(nodes9260);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9109, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10825 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9261 = $("<span>");
      root10825.append(nodes9261);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10826); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9261;
        nodes9261 = node.contents();
        oldNodes.replaceWith(nodes9261);
      }));
      callback(root10825); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9260;
      nodes9260 = node.contents();
      oldNodes.replaceWith(nodes9260);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp9197 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9110 = mobl.ref(result__);
    
    var nodes9262 = $("<span>");
    root10812.append(nodes9262);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9110, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10827 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9263 = $("<span>");
      root10827.append(nodes9263);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10828 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10828); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9263;
        nodes9263 = node.contents();
        oldNodes.replaceWith(nodes9263);
      }));
      callback(root10827); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9262;
      nodes9262 = node.contents();
      oldNodes.replaceWith(nodes9262);
    }));
    callback(root10812); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9247;
    nodes9247 = node.contents();
    oldNodes.replaceWith(nodes9247);
  }));
  callback(root10811); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root10829 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes9264 = $("<span>");
  root10829.append(nodes9264);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10830 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9112 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9111 = mobl.ref(result__);
    
    var nodes9265 = $("<span>");
    root10830.append(nodes9265);
    subs__.addSub((ui.backButton)(tmp9111, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9112, function(_, callback) {
      var root10831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10831); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9265;
      nodes9265 = node.contents();
      oldNodes.replaceWith(nodes9265);
    }));
    callback(root10830); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9264;
    nodes9264 = node.contents();
    oldNodes.replaceWith(nodes9264);
  }));
  var nodes9266 = $("<span>");
  root10829.append(nodes9266);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10832 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp9212 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9113 = mobl.ref(result__);
    
    var nodes9267 = $("<span>");
    root10832.append(nodes9267);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9113, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9268 = $("<span>");
      root10833.append(nodes9268);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10834); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9268;
        nodes9268 = node.contents();
        oldNodes.replaceWith(nodes9268);
      }));
      callback(root10833); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9267;
      nodes9267 = node.contents();
      oldNodes.replaceWith(nodes9267);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp9211 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9114 = mobl.ref(result__);
    
    var nodes9269 = $("<span>");
    root10832.append(nodes9269);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9114, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9270 = $("<span>");
      root10835.append(nodes9270);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10836 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10836); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9270;
        nodes9270 = node.contents();
        oldNodes.replaceWith(nodes9270);
      }));
      callback(root10835); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9269;
      nodes9269 = node.contents();
      oldNodes.replaceWith(nodes9269);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp9210 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9115 = mobl.ref(result__);
    
    var nodes9271 = $("<span>");
    root10832.append(nodes9271);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9115, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10837 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9272 = $("<span>");
      root10837.append(nodes9272);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10838 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10838); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9272;
        nodes9272 = node.contents();
        oldNodes.replaceWith(nodes9272);
      }));
      callback(root10837); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9271;
      nodes9271 = node.contents();
      oldNodes.replaceWith(nodes9271);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp9209 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9116 = mobl.ref(result__);
    
    var nodes9273 = $("<span>");
    root10832.append(nodes9273);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9116, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10839 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9274 = $("<span>");
      root10839.append(nodes9274);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10840 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10840); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9274;
        nodes9274 = node.contents();
        oldNodes.replaceWith(nodes9274);
      }));
      callback(root10839); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9273;
      nodes9273 = node.contents();
      oldNodes.replaceWith(nodes9273);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp9208 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9117 = mobl.ref(result__);
    
    var nodes9275 = $("<span>");
    root10832.append(nodes9275);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9117, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10841 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9276 = $("<span>");
      root10841.append(nodes9276);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10842 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10842); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9276;
        nodes9276 = node.contents();
        oldNodes.replaceWith(nodes9276);
      }));
      callback(root10841); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9275;
      nodes9275 = node.contents();
      oldNodes.replaceWith(nodes9275);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp9207 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9118 = mobl.ref(result__);
    
    var nodes9277 = $("<span>");
    root10832.append(nodes9277);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9118, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9278 = $("<span>");
      root10843.append(nodes9278);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10844 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10844); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9278;
        nodes9278 = node.contents();
        oldNodes.replaceWith(nodes9278);
      }));
      callback(root10843); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9277;
      nodes9277 = node.contents();
      oldNodes.replaceWith(nodes9277);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp9206 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9119 = mobl.ref(result__);
    
    var nodes9279 = $("<span>");
    root10832.append(nodes9279);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9119, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10845 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9280 = $("<span>");
      root10845.append(nodes9280);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10846 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10846); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9280;
        nodes9280 = node.contents();
        oldNodes.replaceWith(nodes9280);
      }));
      callback(root10845); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9279;
      nodes9279 = node.contents();
      oldNodes.replaceWith(nodes9279);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp9205 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9120 = mobl.ref(result__);
    
    var nodes9281 = $("<span>");
    root10832.append(nodes9281);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9120, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9282 = $("<span>");
      root10847.append(nodes9282);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10848 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10848); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9282;
        nodes9282 = node.contents();
        oldNodes.replaceWith(nodes9282);
      }));
      callback(root10847); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9281;
      nodes9281 = node.contents();
      oldNodes.replaceWith(nodes9281);
    }));
    callback(root10832); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9266;
    nodes9266 = node.contents();
    oldNodes.replaceWith(nodes9266);
  }));
  callback(root10829); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root10849 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9283 = $("<span>");
  root10849.append(nodes9283);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10850 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9122 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9121 = mobl.ref(result__);
    
    var nodes9284 = $("<span>");
    root10850.append(nodes9284);
    subs__.addSub((ui.backButton)(tmp9121, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9122, function(_, callback) {
      var root10851 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10851); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9284;
      nodes9284 = node.contents();
      oldNodes.replaceWith(nodes9284);
    }));
    callback(root10850); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9283;
    nodes9283 = node.contents();
    oldNodes.replaceWith(nodes9283);
  }));
  var nodes9285 = $("<span>");
  root10849.append(nodes9285);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10852 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp9217 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9123 = mobl.ref(result__);
    
    var nodes9286 = $("<span>");
    root10852.append(nodes9286);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9123, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10853 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9287 = $("<span>");
      root10853.append(nodes9287);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10854 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10854); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9287;
        nodes9287 = node.contents();
        oldNodes.replaceWith(nodes9287);
      }));
      callback(root10853); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9286;
      nodes9286 = node.contents();
      oldNodes.replaceWith(nodes9286);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp9216 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9124 = mobl.ref(result__);
    
    var nodes9288 = $("<span>");
    root10852.append(nodes9288);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9124, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9289 = $("<span>");
      root10855.append(nodes9289);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10856 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10856); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9289;
        nodes9289 = node.contents();
        oldNodes.replaceWith(nodes9289);
      }));
      callback(root10855); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9288;
      nodes9288 = node.contents();
      oldNodes.replaceWith(nodes9288);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp9215 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9125 = mobl.ref(result__);
    
    var nodes9290 = $("<span>");
    root10852.append(nodes9290);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9125, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10857 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9291 = $("<span>");
      root10857.append(nodes9291);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10858 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10858); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9291;
        nodes9291 = node.contents();
        oldNodes.replaceWith(nodes9291);
      }));
      callback(root10857); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9290;
      nodes9290 = node.contents();
      oldNodes.replaceWith(nodes9290);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp9214 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9126 = mobl.ref(result__);
    
    var nodes9292 = $("<span>");
    root10852.append(nodes9292);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9126, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9293 = $("<span>");
      root10859.append(nodes9293);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10860 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10860); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9293;
        nodes9293 = node.contents();
        oldNodes.replaceWith(nodes9293);
      }));
      callback(root10859); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9292;
      nodes9292 = node.contents();
      oldNodes.replaceWith(nodes9292);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp9213 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9127 = mobl.ref(result__);
    
    var nodes9294 = $("<span>");
    root10852.append(nodes9294);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9127, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10861 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9295 = $("<span>");
      root10861.append(nodes9295);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10862 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10862); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9295;
        nodes9295 = node.contents();
        oldNodes.replaceWith(nodes9295);
      }));
      callback(root10861); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9294;
      nodes9294 = node.contents();
      oldNodes.replaceWith(nodes9294);
    }));
    callback(root10852); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9285;
    nodes9285 = node.contents();
    oldNodes.replaceWith(nodes9285);
  }));
  callback(root10849); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root10863 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9296 = $("<span>");
  root10863.append(nodes9296);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10864 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9129 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9128 = mobl.ref(result__);
    
    var nodes9297 = $("<span>");
    root10864.append(nodes9297);
    subs__.addSub((ui.backButton)(tmp9128, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9129, function(_, callback) {
      var root10865 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10865); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9297;
      nodes9297 = node.contents();
      oldNodes.replaceWith(nodes9297);
    }));
    callback(root10864); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9296;
    nodes9296 = node.contents();
    oldNodes.replaceWith(nodes9296);
  }));
  var nodes9298 = $("<span>");
  root10863.append(nodes9298);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10866 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp9220 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9130 = mobl.ref(result__);
    
    var nodes9299 = $("<span>");
    root10866.append(nodes9299);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9130, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10867 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9300 = $("<span>");
      root10867.append(nodes9300);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10868 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10868); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9300;
        nodes9300 = node.contents();
        oldNodes.replaceWith(nodes9300);
      }));
      callback(root10867); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9299;
      nodes9299 = node.contents();
      oldNodes.replaceWith(nodes9299);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp9219 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9131 = mobl.ref(result__);
    
    var nodes9301 = $("<span>");
    root10866.append(nodes9301);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9131, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9302 = $("<span>");
      root10869.append(nodes9302);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10870); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9302;
        nodes9302 = node.contents();
        oldNodes.replaceWith(nodes9302);
      }));
      callback(root10869); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9301;
      nodes9301 = node.contents();
      oldNodes.replaceWith(nodes9301);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp9218 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9132 = mobl.ref(result__);
    
    var nodes9303 = $("<span>");
    root10866.append(nodes9303);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9132, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9304 = $("<span>");
      root10871.append(nodes9304);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10872 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10872); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9304;
        nodes9304 = node.contents();
        oldNodes.replaceWith(nodes9304);
      }));
      callback(root10871); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9303;
      nodes9303 = node.contents();
      oldNodes.replaceWith(nodes9303);
    }));
    callback(root10866); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9298;
    nodes9298 = node.contents();
    oldNodes.replaceWith(nodes9298);
  }));
  callback(root10863); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root10873 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9305 = $("<span>");
  root10873.append(nodes9305);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10874 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9134 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9133 = mobl.ref(result__);
    
    var nodes9306 = $("<span>");
    root10874.append(nodes9306);
    subs__.addSub((ui.backButton)(tmp9133, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9134, function(_, callback) {
      var root10875 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10875); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9306;
      nodes9306 = node.contents();
      oldNodes.replaceWith(nodes9306);
    }));
    callback(root10874); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9305;
    nodes9305 = node.contents();
    oldNodes.replaceWith(nodes9305);
  }));
  var nodes9307 = $("<span>");
  root10873.append(nodes9307);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10876 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp9224 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9135 = mobl.ref(result__);
    
    var nodes9308 = $("<span>");
    root10876.append(nodes9308);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9135, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10877 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9309 = $("<span>");
      root10877.append(nodes9309);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10878 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10878); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9309;
        nodes9309 = node.contents();
        oldNodes.replaceWith(nodes9309);
      }));
      callback(root10877); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9308;
      nodes9308 = node.contents();
      oldNodes.replaceWith(nodes9308);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp9223 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9136 = mobl.ref(result__);
    
    var nodes9310 = $("<span>");
    root10876.append(nodes9310);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9136, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9311 = $("<span>");
      root10879.append(nodes9311);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10880 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10880); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9311;
        nodes9311 = node.contents();
        oldNodes.replaceWith(nodes9311);
      }));
      callback(root10879); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9310;
      nodes9310 = node.contents();
      oldNodes.replaceWith(nodes9310);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp9222 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9137 = mobl.ref(result__);
    
    var nodes9312 = $("<span>");
    root10876.append(nodes9312);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9137, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9313 = $("<span>");
      root10881.append(nodes9313);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9313;
        nodes9313 = node.contents();
        oldNodes.replaceWith(nodes9313);
      }));
      callback(root10881); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9312;
      nodes9312 = node.contents();
      oldNodes.replaceWith(nodes9312);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp9221 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9138 = mobl.ref(result__);
    
    var nodes9314 = $("<span>");
    root10876.append(nodes9314);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9138, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9315 = $("<span>");
      root10883.append(nodes9315);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9315;
        nodes9315 = node.contents();
        oldNodes.replaceWith(nodes9315);
      }));
      callback(root10883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9314;
      nodes9314 = node.contents();
      oldNodes.replaceWith(nodes9314);
    }));
    callback(root10876); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9307;
    nodes9307 = node.contents();
    oldNodes.replaceWith(nodes9307);
  }));
  callback(root10873); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root10885 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9316 = $("<span>");
  root10885.append(nodes9316);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10886 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9140 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9139 = mobl.ref(result__);
    
    var nodes9317 = $("<span>");
    root10886.append(nodes9317);
    subs__.addSub((ui.backButton)(tmp9139, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9140, function(_, callback) {
      var root10887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10887); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9317;
      nodes9317 = node.contents();
      oldNodes.replaceWith(nodes9317);
    }));
    callback(root10886); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9316;
    nodes9316 = node.contents();
    oldNodes.replaceWith(nodes9316);
  }));
  var nodes9318 = $("<span>");
  root10885.append(nodes9318);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10888 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp9226 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9141 = mobl.ref(result__);
    
    var nodes9319 = $("<span>");
    root10888.append(nodes9319);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9141, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9320 = $("<span>");
      root10889.append(nodes9320);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10890 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10890); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9320;
        nodes9320 = node.contents();
        oldNodes.replaceWith(nodes9320);
      }));
      callback(root10889); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9319;
      nodes9319 = node.contents();
      oldNodes.replaceWith(nodes9319);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp9225 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9142 = mobl.ref(result__);
    
    var nodes9321 = $("<span>");
    root10888.append(nodes9321);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9142, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10891 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9322 = $("<span>");
      root10891.append(nodes9322);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10892 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10892); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9322;
        nodes9322 = node.contents();
        oldNodes.replaceWith(nodes9322);
      }));
      callback(root10891); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9321;
      nodes9321 = node.contents();
      oldNodes.replaceWith(nodes9321);
    }));
    callback(root10888); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9318;
    nodes9318 = node.contents();
    oldNodes.replaceWith(nodes9318);
  }));
  callback(root10885); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root10893 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9323 = $("<span>");
  root10893.append(nodes9323);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10894 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9144 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9143 = mobl.ref(result__);
    
    var nodes9324 = $("<span>");
    root10894.append(nodes9324);
    subs__.addSub((ui.backButton)(tmp9143, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9144, function(_, callback) {
      var root10895 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10895); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9324;
      nodes9324 = node.contents();
      oldNodes.replaceWith(nodes9324);
    }));
    callback(root10894); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9323;
    nodes9323 = node.contents();
    oldNodes.replaceWith(nodes9323);
  }));
  var nodes9325 = $("<span>");
  root10893.append(nodes9325);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10896 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp9231 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9145 = mobl.ref(result__);
    
    var nodes9326 = $("<span>");
    root10896.append(nodes9326);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9145, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10897 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9327 = $("<span>");
      root10897.append(nodes9327);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10898 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10898); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9327;
        nodes9327 = node.contents();
        oldNodes.replaceWith(nodes9327);
      }));
      callback(root10897); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9326;
      nodes9326 = node.contents();
      oldNodes.replaceWith(nodes9326);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp9230 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9146 = mobl.ref(result__);
    
    var nodes9328 = $("<span>");
    root10896.append(nodes9328);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9146, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10899 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9329 = $("<span>");
      root10899.append(nodes9329);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10900 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10900); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9329;
        nodes9329 = node.contents();
        oldNodes.replaceWith(nodes9329);
      }));
      callback(root10899); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9328;
      nodes9328 = node.contents();
      oldNodes.replaceWith(nodes9328);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp9229 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9147 = mobl.ref(result__);
    
    var nodes9330 = $("<span>");
    root10896.append(nodes9330);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9147, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10901 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9331 = $("<span>");
      root10901.append(nodes9331);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10902 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10902); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9331;
        nodes9331 = node.contents();
        oldNodes.replaceWith(nodes9331);
      }));
      callback(root10901); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9330;
      nodes9330 = node.contents();
      oldNodes.replaceWith(nodes9330);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp9228 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9148 = mobl.ref(result__);
    
    var nodes9332 = $("<span>");
    root10896.append(nodes9332);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9148, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10903 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9333 = $("<span>");
      root10903.append(nodes9333);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10904 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10904); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9333;
        nodes9333 = node.contents();
        oldNodes.replaceWith(nodes9333);
      }));
      callback(root10903); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9332;
      nodes9332 = node.contents();
      oldNodes.replaceWith(nodes9332);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp9227 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9149 = mobl.ref(result__);
    
    var nodes9334 = $("<span>");
    root10896.append(nodes9334);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9149, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9335 = $("<span>");
      root10905.append(nodes9335);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10906 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10906); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9335;
        nodes9335 = node.contents();
        oldNodes.replaceWith(nodes9335);
      }));
      callback(root10905); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9334;
      nodes9334 = node.contents();
      oldNodes.replaceWith(nodes9334);
    }));
    callback(root10896); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9325;
    nodes9325 = node.contents();
    oldNodes.replaceWith(nodes9325);
  }));
  callback(root10893); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root10907 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9336 = $("<span>");
  root10907.append(nodes9336);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10908 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9151 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9150 = mobl.ref(result__);
    
    var nodes9337 = $("<span>");
    root10908.append(nodes9337);
    subs__.addSub((ui.backButton)(tmp9150, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9151, function(_, callback) {
      var root10909 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10909); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9337;
      nodes9337 = node.contents();
      oldNodes.replaceWith(nodes9337);
    }));
    callback(root10908); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9336;
    nodes9336 = node.contents();
    oldNodes.replaceWith(nodes9336);
  }));
  var nodes9338 = $("<span>");
  root10907.append(nodes9338);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10910 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp9234 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9152 = mobl.ref(result__);
    
    var nodes9339 = $("<span>");
    root10910.append(nodes9339);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9152, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10911 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9340 = $("<span>");
      root10911.append(nodes9340);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10912 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10912); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9340;
        nodes9340 = node.contents();
        oldNodes.replaceWith(nodes9340);
      }));
      callback(root10911); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9339;
      nodes9339 = node.contents();
      oldNodes.replaceWith(nodes9339);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp9233 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9153 = mobl.ref(result__);
    
    var nodes9341 = $("<span>");
    root10910.append(nodes9341);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9153, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10913 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9342 = $("<span>");
      root10913.append(nodes9342);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10914 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10914); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9342;
        nodes9342 = node.contents();
        oldNodes.replaceWith(nodes9342);
      }));
      callback(root10913); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9341;
      nodes9341 = node.contents();
      oldNodes.replaceWith(nodes9341);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp9232 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9154 = mobl.ref(result__);
    
    var nodes9343 = $("<span>");
    root10910.append(nodes9343);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9154, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10915 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9344 = $("<span>");
      root10915.append(nodes9344);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10916 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10916); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9344;
        nodes9344 = node.contents();
        oldNodes.replaceWith(nodes9344);
      }));
      callback(root10915); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9343;
      nodes9343 = node.contents();
      oldNodes.replaceWith(nodes9343);
    }));
    callback(root10910); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9338;
    nodes9338 = node.contents();
    oldNodes.replaceWith(nodes9338);
  }));
  callback(root10907); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root10917 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes9345 = $("<span>");
  root10917.append(nodes9345);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10918 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9156 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp9155 = mobl.ref(result__);
    
    var nodes9346 = $("<span>");
    root10918.append(nodes9346);
    subs__.addSub((ui.backButton)(tmp9155, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9156, function(_, callback) {
      var root10919 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10919); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9346;
      nodes9346 = node.contents();
      oldNodes.replaceWith(nodes9346);
    }));
    callback(root10918); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9345;
    nodes9345 = node.contents();
    oldNodes.replaceWith(nodes9345);
  }));
  var nodes9347 = $("<span>");
  root10917.append(nodes9347);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10920 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp9235 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9157 = mobl.ref(result__);
    
    var nodes9348 = $("<span>");
    root10920.append(nodes9348);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9157, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10921 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9349 = $("<span>");
      root10921.append(nodes9349);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10922 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10922); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9349;
        nodes9349 = node.contents();
        oldNodes.replaceWith(nodes9349);
      }));
      callback(root10921); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9348;
      nodes9348 = node.contents();
      oldNodes.replaceWith(nodes9348);
    }));
    callback(root10920); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9347;
    nodes9347 = node.contents();
    oldNodes.replaceWith(nodes9347);
  }));
  callback(root10917); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root10923 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9350 = $("<span>");
  root10923.append(nodes9350);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10924 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp9248 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9158 = mobl.ref(result__);
    
    var nodes9351 = $("<span>");
    root10924.append(nodes9351);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9158, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10925 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9352 = $("<span>");
      root10925.append(nodes9352);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10926 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10926); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9352;
        nodes9352 = node.contents();
        oldNodes.replaceWith(nodes9352);
      }));
      callback(root10925); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9351;
      nodes9351 = node.contents();
      oldNodes.replaceWith(nodes9351);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp9247 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9159 = mobl.ref(result__);
    
    var nodes9353 = $("<span>");
    root10924.append(nodes9353);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9159, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10927 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9354 = $("<span>");
      root10927.append(nodes9354);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10928 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10928); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9354;
        nodes9354 = node.contents();
        oldNodes.replaceWith(nodes9354);
      }));
      callback(root10927); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9353;
      nodes9353 = node.contents();
      oldNodes.replaceWith(nodes9353);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp9246 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9160 = mobl.ref(result__);
    
    var nodes9355 = $("<span>");
    root10924.append(nodes9355);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9160, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10929 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9356 = $("<span>");
      root10929.append(nodes9356);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10930 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10930); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9356;
        nodes9356 = node.contents();
        oldNodes.replaceWith(nodes9356);
      }));
      callback(root10929); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9355;
      nodes9355 = node.contents();
      oldNodes.replaceWith(nodes9355);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp9245 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9161 = mobl.ref(result__);
    
    var nodes9357 = $("<span>");
    root10924.append(nodes9357);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9161, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10931 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9358 = $("<span>");
      root10931.append(nodes9358);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10932 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10932); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9358;
        nodes9358 = node.contents();
        oldNodes.replaceWith(nodes9358);
      }));
      callback(root10931); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9357;
      nodes9357 = node.contents();
      oldNodes.replaceWith(nodes9357);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp9244 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9162 = mobl.ref(result__);
    
    var nodes9359 = $("<span>");
    root10924.append(nodes9359);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9162, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10933 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9360 = $("<span>");
      root10933.append(nodes9360);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10934 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10934); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9360;
        nodes9360 = node.contents();
        oldNodes.replaceWith(nodes9360);
      }));
      callback(root10933); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9359;
      nodes9359 = node.contents();
      oldNodes.replaceWith(nodes9359);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp9243 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9163 = mobl.ref(result__);
    
    var nodes9361 = $("<span>");
    root10924.append(nodes9361);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9163, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10935 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9362 = $("<span>");
      root10935.append(nodes9362);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10936 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10936); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9362;
        nodes9362 = node.contents();
        oldNodes.replaceWith(nodes9362);
      }));
      callback(root10935); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9361;
      nodes9361 = node.contents();
      oldNodes.replaceWith(nodes9361);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp9242 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9164 = mobl.ref(result__);
    
    var nodes9363 = $("<span>");
    root10924.append(nodes9363);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9164, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10937 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9364 = $("<span>");
      root10937.append(nodes9364);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10938 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10938); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9364;
        nodes9364 = node.contents();
        oldNodes.replaceWith(nodes9364);
      }));
      callback(root10937); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9363;
      nodes9363 = node.contents();
      oldNodes.replaceWith(nodes9363);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp9241 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9165 = mobl.ref(result__);
    
    var nodes9365 = $("<span>");
    root10924.append(nodes9365);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9165, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10939 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9366 = $("<span>");
      root10939.append(nodes9366);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10940 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10940); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9366;
        nodes9366 = node.contents();
        oldNodes.replaceWith(nodes9366);
      }));
      callback(root10939); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9365;
      nodes9365 = node.contents();
      oldNodes.replaceWith(nodes9365);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp9240 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9166 = mobl.ref(result__);
    
    var nodes9367 = $("<span>");
    root10924.append(nodes9367);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9166, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10941 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9368 = $("<span>");
      root10941.append(nodes9368);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10942 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10942); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9368;
        nodes9368 = node.contents();
        oldNodes.replaceWith(nodes9368);
      }));
      callback(root10941); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9367;
      nodes9367 = node.contents();
      oldNodes.replaceWith(nodes9367);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp9239 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9167 = mobl.ref(result__);
    
    var nodes9369 = $("<span>");
    root10924.append(nodes9369);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9167, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9370 = $("<span>");
      root10943.append(nodes9370);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10944 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10944); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9370;
        nodes9370 = node.contents();
        oldNodes.replaceWith(nodes9370);
      }));
      callback(root10943); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9369;
      nodes9369 = node.contents();
      oldNodes.replaceWith(nodes9369);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp9238 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9168 = mobl.ref(result__);
    
    var nodes9371 = $("<span>");
    root10924.append(nodes9371);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9168, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10945 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9372 = $("<span>");
      root10945.append(nodes9372);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10946 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10946); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9372;
        nodes9372 = node.contents();
        oldNodes.replaceWith(nodes9372);
      }));
      callback(root10945); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9371;
      nodes9371 = node.contents();
      oldNodes.replaceWith(nodes9371);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp9237 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9169 = mobl.ref(result__);
    
    var nodes9373 = $("<span>");
    root10924.append(nodes9373);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9169, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10947 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9374 = $("<span>");
      root10947.append(nodes9374);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10948 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10948); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9374;
        nodes9374 = node.contents();
        oldNodes.replaceWith(nodes9374);
      }));
      callback(root10947); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9373;
      nodes9373 = node.contents();
      oldNodes.replaceWith(nodes9373);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp9236 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9170 = mobl.ref(result__);
    
    var nodes9375 = $("<span>");
    root10924.append(nodes9375);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9170, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9376 = $("<span>");
      root10949.append(nodes9376);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10950 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10950); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9376;
        nodes9376 = node.contents();
        oldNodes.replaceWith(nodes9376);
      }));
      callback(root10949); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9375;
      nodes9375 = node.contents();
      oldNodes.replaceWith(nodes9375);
    }));
    callback(root10924); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9350;
    nodes9350 = node.contents();
    oldNodes.replaceWith(nodes9350);
  }));
  callback(root10923); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root10951 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9377 = $("<span>");
  root10951.append(nodes9377);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10952 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp9254 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9171 = mobl.ref(result__);
    
    var nodes9378 = $("<span>");
    root10952.append(nodes9378);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9171, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9379 = $("<span>");
      root10953.append(nodes9379);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10954 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10954); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9379;
        nodes9379 = node.contents();
        oldNodes.replaceWith(nodes9379);
      }));
      callback(root10953); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9378;
      nodes9378 = node.contents();
      oldNodes.replaceWith(nodes9378);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp9253 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9172 = mobl.ref(result__);
    
    var nodes9380 = $("<span>");
    root10952.append(nodes9380);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9172, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10955 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9381 = $("<span>");
      root10955.append(nodes9381);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10956 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10956); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9381;
        nodes9381 = node.contents();
        oldNodes.replaceWith(nodes9381);
      }));
      callback(root10955); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9380;
      nodes9380 = node.contents();
      oldNodes.replaceWith(nodes9380);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp9252 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9173 = mobl.ref(result__);
    
    var nodes9382 = $("<span>");
    root10952.append(nodes9382);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9173, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10957 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9383 = $("<span>");
      root10957.append(nodes9383);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10958 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10958); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9383;
        nodes9383 = node.contents();
        oldNodes.replaceWith(nodes9383);
      }));
      callback(root10957); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9382;
      nodes9382 = node.contents();
      oldNodes.replaceWith(nodes9382);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp9251 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9174 = mobl.ref(result__);
    
    var nodes9384 = $("<span>");
    root10952.append(nodes9384);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9174, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10959 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9385 = $("<span>");
      root10959.append(nodes9385);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10960 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10960); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9385;
        nodes9385 = node.contents();
        oldNodes.replaceWith(nodes9385);
      }));
      callback(root10959); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9384;
      nodes9384 = node.contents();
      oldNodes.replaceWith(nodes9384);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp9250 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9175 = mobl.ref(result__);
    
    var nodes9386 = $("<span>");
    root10952.append(nodes9386);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9175, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10961 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9387 = $("<span>");
      root10961.append(nodes9387);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10962 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10962); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9387;
        nodes9387 = node.contents();
        oldNodes.replaceWith(nodes9387);
      }));
      callback(root10961); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9386;
      nodes9386 = node.contents();
      oldNodes.replaceWith(nodes9386);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp9249 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9176 = mobl.ref(result__);
    
    var nodes9388 = $("<span>");
    root10952.append(nodes9388);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9176, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10963 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9389 = $("<span>");
      root10963.append(nodes9389);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10964 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10964); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9389;
        nodes9389 = node.contents();
        oldNodes.replaceWith(nodes9389);
      }));
      callback(root10963); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9388;
      nodes9388 = node.contents();
      oldNodes.replaceWith(nodes9388);
    }));
    callback(root10952); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9377;
    nodes9377 = node.contents();
    oldNodes.replaceWith(nodes9377);
  }));
  callback(root10951); return subs__;
  
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
  var root10965 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1762 = $("<div>");
  
  var ref1732 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref1732.get() !== null) {
    node1762.attr('class', ref1732.get());
    subs__.addSub(ref1732.addEventListener('change', function(_, ref, val) {
      node1762.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1732.rebind());
  
  var val805 = onclick.get();
  if(val805 !== null) {
    subs__.addSub(mobl.domBind(node1762, 'tap', val805));
  }
  
  
  var node1763 = $("<div>");
  
  var ref1731 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref1731.get() !== null) {
    node1763.attr('class', ref1731.get());
    subs__.addSub(ref1731.addEventListener('change', function(_, ref, val) {
      node1763.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1731.rebind());
  
  
  var node1764 = $("<div>");
  
  var ref1729 = text;
  node1764.text(""+ref1729.get());
  var ignore326 = false;
  subs__.addSub(ref1729.addEventListener('change', function(_, ref, val) {
    if(ignore326) return;
    node1764.text(""+val);
  }));
  subs__.addSub(ref1729.rebind());
  
  
  var ref1730 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1730.get() !== null) {
    node1764.attr('class', ref1730.get());
    subs__.addSub(ref1730.addEventListener('change', function(_, ref, val) {
      node1764.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1730.rebind());
  
  node1763.append(node1764);
  node1762.append(node1763);
  var nodes9390 = $("<span>");
  node1762.append(nodes9390);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl694();
  }));
  
  function renderControl694() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10966 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10966); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9390;
      nodes9390 = node.contents();
      oldNodes.replaceWith(nodes9390);
    }));
  }
  renderControl694();
  root10965.append(node1762);
  callback(root10965); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp9255 = result__;
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
  var root10967 = $("<span>");
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
  var tmp9181 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp9180 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp9180.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp9180.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp9180.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes9391 = $("<span>");
  root10967.append(nodes9391);
  subs__.addSub((mobl.block)(tmp9180, mobl.ref(null), tmp9181, mobl.ref(null), function(_, callback) {
    var root10968 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp9177 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp9177.set("A" + number.get() + ". ");
    }));
    
    var nodes9392 = $("<span>");
    root10968.append(nodes9392);
    subs__.addSub((mobl.label)(tmp9177, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10969); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9392;
      nodes9392 = node.contents();
      oldNodes.replaceWith(nodes9392);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp9179 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp9179.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node1765 = $("<span>");
    root10968.append(node1765);
    var condSubs438 = new mobl.CompSubscription();
    subs__.addSub(condSubs438);
    var oldValue438;
    var renderCond438 = function() {
      var value1062 = tmp9179.get();
      if(oldValue438 === value1062) return;
      oldValue438 = value1062;
      var subs__ = condSubs438;
      subs__.unsubscribe();
      node1765.empty();
      if(value1062) {
        
        var node1766 = $("<span>");
        
        var ref1733 = mobl.ref("answer-block-" + number.get());
        if(ref1733.get() !== null) {
          node1766.attr('id', ref1733.get());
          subs__.addSub(ref1733.addEventListener('change', function(_, ref, val) {
            node1766.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node1766.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref1733.rebind());
        
        var result__ = nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp9178 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp9178.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp9178.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes9393 = $("<span>");
        node1766.append(nodes9393);
        subs__.addSub((mobl.html)(tmp9178, function(_, callback) {
          var root10970 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10970); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9393;
          nodes9393 = node.contents();
          oldNodes.replaceWith(nodes9393);
        }));
        node1765.append(node1766);
        
        
        
      } else {
        var nodes9394 = $("<span>");
        node1765.append(nodes9394);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root10971 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10971); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9394;
          nodes9394 = node.contents();
          oldNodes.replaceWith(nodes9394);
        }));
        
        
      }
    };
    renderCond438();
    subs__.addSub(tmp9179.addEventListener('change', function() {
      renderCond438();
    }));
    
    callback(root10968); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9391;
    nodes9391 = node.contents();
    oldNodes.replaceWith(nodes9391);
  }));
  var nodes9395 = $("<span>");
  root10967.append(nodes9395);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10972 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes9396 = $("<span>");
    root10972.append(nodes9396);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10973); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9396;
      nodes9396 = node.contents();
      oldNodes.replaceWith(nodes9396);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9182 = mobl.ref(result__);
    
    var nodes9397 = $("<span>");
    root10972.append(nodes9397);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp9182, function(_, callback) {
      var root10974 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10974); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9397;
      nodes9397 = node.contents();
      oldNodes.replaceWith(nodes9397);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9183 = mobl.ref(result__);
    
    var nodes9398 = $("<span>");
    root10972.append(nodes9398);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp9183, function(_, callback) {
      var root10975 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10975); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9398;
      nodes9398 = node.contents();
      oldNodes.replaceWith(nodes9398);
    }));
    callback(root10972); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9395;
    nodes9395 = node.contents();
    oldNodes.replaceWith(nodes9395);
  }));
  callback(root10967); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp9256 = result__;
    var result__ = tmp9256;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp9257 = result__;
        var result__ = tmp9257;
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
  var root10976 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp9267 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp9185 = mobl.ref(result__);
  
  var nodes9399 = $("<span>");
  root10976.append(nodes9399);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp9185, function(_, callback) {
    var root10977 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp9260 = result__;
                       var result__ = tmp9260;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp9261 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp9184 = mobl.ref(result__);
    
    var nodes9400 = $("<span>");
    root10977.append(nodes9400);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp9184, function(_, callback) {
      var root10978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10978); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9400;
      nodes9400 = node.contents();
      oldNodes.replaceWith(nodes9400);
    }));
    mobl.sleep(100, function(result__) {
      var tmp9258 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp9259 = result__;
        callback(root10977); return subs__;
      });
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9399;
    nodes9399 = node.contents();
    oldNodes.replaceWith(nodes9399);
  }));
  var nodes9401 = $("<span>");
  root10976.append(nodes9401);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10979 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.alert("Calling renderMaths()!");
                     mathJAX.renderMaths(function(result__) {
                       var tmp9264 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9188 = mobl.ref(result__);
    
    var nodes9402 = $("<span>");
    root10979.append(nodes9402);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp9188, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root10980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp9186 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp9186.set("Q" + number.get() + ". ");
      }));
      
      var nodes9403 = $("<span>");
      root10980.append(nodes9403);
      subs__.addSub((mobl.html)(tmp9186, function(_, callback) {
        var root10981 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10981); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9403;
        nodes9403 = node.contents();
        oldNodes.replaceWith(nodes9403);
      }));
      
      var node1767 = $("<span>");
      
      var ref1734 = mobl.ref("question-block-" + number.get());
      if(ref1734.get() !== null) {
        node1767.attr('id', ref1734.get());
        subs__.addSub(ref1734.addEventListener('change', function(_, ref, val) {
          node1767.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1767.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref1734.rebind());
      
      var result__ = nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp9187 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp9187.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp9187.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes9404 = $("<span>");
      node1767.append(nodes9404);
      subs__.addSub((mobl.html)(tmp9187, function(_, callback) {
        var root10982 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10982); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes9404;
        nodes9404 = node.contents();
        oldNodes.replaceWith(nodes9404);
      }));
      root10980.append(node1767);
      callback(root10980); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9402;
      nodes9402 = node.contents();
      oldNodes.replaceWith(nodes9402);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp9263 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp9190 = mobl.ref(result__);
    
    var nodes9405 = $("<span>");
    root10979.append(nodes9405);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp9190, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root10983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes9406 = $("<span>");
      root10983.append(nodes9406);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10984 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp9262 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp9189 = mobl.ref(result__);
        
        var nodes9407 = $("<span>");
        root10984.append(nodes9407);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp9189, function(_, callback) {
          var root10985 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10985); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes9407;
          nodes9407 = node.contents();
          oldNodes.replaceWith(nodes9407);
        }));
        callback(root10984); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes9406;
        nodes9406 = node.contents();
        oldNodes.replaceWith(nodes9406);
      }));
      
      var node1768 = $("<span>");
      root10983.append(node1768);
      var condSubs439 = new mobl.CompSubscription();
      subs__.addSub(condSubs439);
      var oldValue439;
      var renderCond439 = function() {
        var value1063 = qa.get().done;
        if(oldValue439 === value1063) return;
        oldValue439 = value1063;
        var subs__ = condSubs439;
        subs__.unsubscribe();
        node1768.empty();
        if(value1063) {
          var nodes9408 = $("<span>");
          node1768.append(nodes9408);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root10986 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root10986); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes9408;
            nodes9408 = node.contents();
            oldNodes.replaceWith(nodes9408);
          }));
          
          
        } else {
          
        }
      };
      renderCond439();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond439();
      }));
      
      callback(root10983); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9405;
      nodes9405 = node.contents();
      oldNodes.replaceWith(nodes9405);
    }));
    callback(root10979); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes9401;
    nodes9401 = node.contents();
    oldNodes.replaceWith(nodes9401);
  }));
  mobl.sleep(100, function(result__) {
    var tmp9265 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp9266 = result__;
      callback(root10976); return subs__;
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
  qas.list(function(coll1278) {
    coll1278 = coll1278.reverse();
    function processOne342() {
      var item;
      item = coll1278.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1278.length > 0) processOne342(); else rest342();
      
    }
    function rest342() {
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
    if(coll1278.length > 0) processOne342(); else rest342();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1279) {
    coll1279 = coll1279.reverse();
    function processOne343() {
      var item;
      item = coll1279.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1279.length > 0) processOne343(); else rest343();
      
    }
    function rest343() {
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
    if(coll1279.length > 0) processOne343(); else rest343();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1280) {
    coll1280 = coll1280.reverse();
    function processOne344() {
      var item;
      item = coll1280.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1280.length > 0) processOne344(); else rest344();
      
    }
    function rest344() {
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
    if(coll1280.length > 0) processOne344(); else rest344();
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