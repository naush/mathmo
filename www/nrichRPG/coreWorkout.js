mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl.ui');
mobl.provides('mathJAX');
mobl.provides('plot');
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
    var tmp1243 = result__;
    var result__ = tmp1243;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1244 = result__;
      var result__ = tmp1244;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1245 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll72) {
    coll72 = coll72.reverse();
    function processOne40() {
      var i;
      i = coll72.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp1246 = result__;
        
        if(coll72.length > 0) processOne40(); else rest40();
        
      });
    }
    function rest40() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll72.length > 0) processOne40(); else rest40();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root2502 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2181 = $("<span>");
  root2502.append(nodes2181);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2503 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1254 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1206 = mobl.ref(result__);
    
    var nodes2182 = $("<span>");
    root2503.append(nodes2182);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1206, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2504 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2183 = $("<span>");
      root2504.append(nodes2183);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2505 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2505); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2183;
        nodes2183 = node.contents();
        oldNodes.replaceWith(nodes2183);
      }));
      callback(root2504); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2182;
      nodes2182 = node.contents();
      oldNodes.replaceWith(nodes2182);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1253 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1207 = mobl.ref(result__);
    
    var nodes2184 = $("<span>");
    root2503.append(nodes2184);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1207, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2185 = $("<span>");
      root2506.append(nodes2185);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2507 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2507); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2185;
        nodes2185 = node.contents();
        oldNodes.replaceWith(nodes2185);
      }));
      callback(root2506); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2184;
      nodes2184 = node.contents();
      oldNodes.replaceWith(nodes2184);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1252 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1208 = mobl.ref(result__);
    
    var nodes2186 = $("<span>");
    root2503.append(nodes2186);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1208, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2187 = $("<span>");
      root2508.append(nodes2187);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2509 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2509); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2187;
        nodes2187 = node.contents();
        oldNodes.replaceWith(nodes2187);
      }));
      callback(root2508); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2186;
      nodes2186 = node.contents();
      oldNodes.replaceWith(nodes2186);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1251 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1209 = mobl.ref(result__);
    
    var nodes2188 = $("<span>");
    root2503.append(nodes2188);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1209, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2510 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2189 = $("<span>");
      root2510.append(nodes2189);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2511 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2511); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2189;
        nodes2189 = node.contents();
        oldNodes.replaceWith(nodes2189);
      }));
      callback(root2510); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2188;
      nodes2188 = node.contents();
      oldNodes.replaceWith(nodes2188);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1250 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1210 = mobl.ref(result__);
    
    var nodes2190 = $("<span>");
    root2503.append(nodes2190);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1210, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2512 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2191 = $("<span>");
      root2512.append(nodes2191);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2513 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2513); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2191;
        nodes2191 = node.contents();
        oldNodes.replaceWith(nodes2191);
      }));
      callback(root2512); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2190;
      nodes2190 = node.contents();
      oldNodes.replaceWith(nodes2190);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1249 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1211 = mobl.ref(result__);
    
    var nodes2192 = $("<span>");
    root2503.append(nodes2192);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1211, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2514 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2193 = $("<span>");
      root2514.append(nodes2193);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2515 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2515); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2193;
        nodes2193 = node.contents();
        oldNodes.replaceWith(nodes2193);
      }));
      callback(root2514); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2192;
      nodes2192 = node.contents();
      oldNodes.replaceWith(nodes2192);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1248 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1212 = mobl.ref(result__);
    
    var nodes2194 = $("<span>");
    root2503.append(nodes2194);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1212, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2195 = $("<span>");
      root2516.append(nodes2195);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2517 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2517); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2195;
        nodes2195 = node.contents();
        oldNodes.replaceWith(nodes2195);
      }));
      callback(root2516); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2194;
      nodes2194 = node.contents();
      oldNodes.replaceWith(nodes2194);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1247 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1213 = mobl.ref(result__);
    
    var nodes2196 = $("<span>");
    root2503.append(nodes2196);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1213, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2518 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2197 = $("<span>");
      root2518.append(nodes2197);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2519 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2519); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2197;
        nodes2197 = node.contents();
        oldNodes.replaceWith(nodes2197);
      }));
      callback(root2518); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2196;
      nodes2196 = node.contents();
      oldNodes.replaceWith(nodes2196);
    }));
    callback(root2503); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2181;
    nodes2181 = node.contents();
    oldNodes.replaceWith(nodes2181);
  }));
  callback(root2502); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.topicMapForId = function(tid) {
   var __this = this;
  var map = new mobl.Map();
  
  if(tid.indexOf("C", 0) == 0) {
    nrichRPG.coreWorkout.initCoreTopicMap(map);
  } else if(tid.indexOf("F", 0) == 0) {
    nrichRPG.coreWorkout.initFurtherTopicMap(map);
  } else if(tid.indexOf("S", 0) == 0) {
    nrichRPG.coreWorkout.initStatsTopicMap(map);
  } else {
    mobl.alert("invalid topi id " + tid);
  }
  return map;
};

nrichRPG.coreWorkout.topicName = function(tid) {
   var __this = this;
  return nrichRPG.coreWorkout.topicMapForId(tid).get(tid);
};

nrichRPG.coreWorkout.topicAdded = function(tid, callback) {
  var __this = this;
  nrichRPG.coreWorkout.makeQA(tid, function(result__) {
    var tmp1255 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root2520 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp1214 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp1214.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp1214.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes2198 = $("<span>");
  root2520.append(nodes2198);
  subs__.addSub((mobl.label)(tmp1214, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2521 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2521); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2198;
    nodes2198 = node.contents();
    oldNodes.replaceWith(nodes2198);
  }));
  callback(root2520); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root2522 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp1256 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1215 = mobl.ref(result__);
  
  var nodes2199 = $("<span>");
  root2522.append(nodes2199);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1215, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root2523 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2200 = $("<span>");
    root2523.append(nodes2200);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root2524 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2524); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2200;
      nodes2200 = node.contents();
      oldNodes.replaceWith(nodes2200);
    }));
    callback(root2523); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2199;
    nodes2199 = node.contents();
    oldNodes.replaceWith(nodes2199);
  }));
  callback(root2522); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root2525 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes2201 = $("<span>");
  root2525.append(nodes2201);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2526 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1217 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1216 = mobl.ref(result__);
    
    var nodes2202 = $("<span>");
    root2526.append(nodes2202);
    subs__.addSub((ui.backButton)(tmp1216, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1217, function(_, callback) {
      var root2527 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2527); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2202;
      nodes2202 = node.contents();
      oldNodes.replaceWith(nodes2202);
    }));
    callback(root2526); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2201;
    nodes2201 = node.contents();
    oldNodes.replaceWith(nodes2201);
  }));
  var nodes2203 = $("<span>");
  root2525.append(nodes2203);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2528 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2204 = $("<span>");
    root2528.append(nodes2204);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root2529 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2529); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2204;
      nodes2204 = node.contents();
      oldNodes.replaceWith(nodes2204);
    }));
    var nodes2205 = $("<span>");
    root2528.append(nodes2205);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root2530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2530); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2205;
      nodes2205 = node.contents();
      oldNodes.replaceWith(nodes2205);
    }));
    var nodes2206 = $("<span>");
    root2528.append(nodes2206);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root2531 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2531); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2206;
      nodes2206 = node.contents();
      oldNodes.replaceWith(nodes2206);
    }));
    var nodes2207 = $("<span>");
    root2528.append(nodes2207);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root2532 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2532); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2207;
      nodes2207 = node.contents();
      oldNodes.replaceWith(nodes2207);
    }));
    var nodes2208 = $("<span>");
    root2528.append(nodes2208);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root2533 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2533); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2208;
      nodes2208 = node.contents();
      oldNodes.replaceWith(nodes2208);
    }));
    var nodes2209 = $("<span>");
    root2528.append(nodes2209);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root2534 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2534); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2209;
      nodes2209 = node.contents();
      oldNodes.replaceWith(nodes2209);
    }));
    var nodes2210 = $("<span>");
    root2528.append(nodes2210);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root2535 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2535); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2210;
      nodes2210 = node.contents();
      oldNodes.replaceWith(nodes2210);
    }));
    callback(root2528); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2203;
    nodes2203 = node.contents();
    oldNodes.replaceWith(nodes2203);
  }));
  callback(root2525); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root2536 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2211 = $("<span>");
  root2536.append(nodes2211);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2537 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1219 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1218 = mobl.ref(result__);
    
    var nodes2212 = $("<span>");
    root2537.append(nodes2212);
    subs__.addSub((ui.backButton)(tmp1218, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1219, function(_, callback) {
      var root2538 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2538); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2212;
      nodes2212 = node.contents();
      oldNodes.replaceWith(nodes2212);
    }));
    callback(root2537); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2211;
    nodes2211 = node.contents();
    oldNodes.replaceWith(nodes2211);
  }));
  var nodes2213 = $("<span>");
  root2536.append(nodes2213);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2539 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2214 = $("<span>");
    root2539.append(nodes2214);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root2540 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2540); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2214;
      nodes2214 = node.contents();
      oldNodes.replaceWith(nodes2214);
    }));
    var nodes2215 = $("<span>");
    root2539.append(nodes2215);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root2541 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2541); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2215;
      nodes2215 = node.contents();
      oldNodes.replaceWith(nodes2215);
    }));
    var nodes2216 = $("<span>");
    root2539.append(nodes2216);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root2542 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2542); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2216;
      nodes2216 = node.contents();
      oldNodes.replaceWith(nodes2216);
    }));
    var nodes2217 = $("<span>");
    root2539.append(nodes2217);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root2543 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2543); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2217;
      nodes2217 = node.contents();
      oldNodes.replaceWith(nodes2217);
    }));
    var nodes2218 = $("<span>");
    root2539.append(nodes2218);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root2544 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2544); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2218;
      nodes2218 = node.contents();
      oldNodes.replaceWith(nodes2218);
    }));
    callback(root2539); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2213;
    nodes2213 = node.contents();
    oldNodes.replaceWith(nodes2213);
  }));
  callback(root2536); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root2545 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2219 = $("<span>");
  root2545.append(nodes2219);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2546 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1221 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1220 = mobl.ref(result__);
    
    var nodes2220 = $("<span>");
    root2546.append(nodes2220);
    subs__.addSub((ui.backButton)(tmp1220, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1221, function(_, callback) {
      var root2547 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2547); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2220;
      nodes2220 = node.contents();
      oldNodes.replaceWith(nodes2220);
    }));
    callback(root2546); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2219;
    nodes2219 = node.contents();
    oldNodes.replaceWith(nodes2219);
  }));
  var nodes2221 = $("<span>");
  root2545.append(nodes2221);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2548 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2222 = $("<span>");
    root2548.append(nodes2222);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root2549 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2549); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2222;
      nodes2222 = node.contents();
      oldNodes.replaceWith(nodes2222);
    }));
    var nodes2223 = $("<span>");
    root2548.append(nodes2223);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root2550 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2550); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2223;
      nodes2223 = node.contents();
      oldNodes.replaceWith(nodes2223);
    }));
    var nodes2224 = $("<span>");
    root2548.append(nodes2224);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root2551 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2551); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2224;
      nodes2224 = node.contents();
      oldNodes.replaceWith(nodes2224);
    }));
    callback(root2548); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2221;
    nodes2221 = node.contents();
    oldNodes.replaceWith(nodes2221);
  }));
  callback(root2545); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root2552 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2225 = $("<span>");
  root2552.append(nodes2225);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2553 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1223 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1222 = mobl.ref(result__);
    
    var nodes2226 = $("<span>");
    root2553.append(nodes2226);
    subs__.addSub((ui.backButton)(tmp1222, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1223, function(_, callback) {
      var root2554 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2554); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2226;
      nodes2226 = node.contents();
      oldNodes.replaceWith(nodes2226);
    }));
    callback(root2553); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2225;
    nodes2225 = node.contents();
    oldNodes.replaceWith(nodes2225);
  }));
  var nodes2227 = $("<span>");
  root2552.append(nodes2227);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2555 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2228 = $("<span>");
    root2555.append(nodes2228);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root2556 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2556); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2228;
      nodes2228 = node.contents();
      oldNodes.replaceWith(nodes2228);
    }));
    var nodes2229 = $("<span>");
    root2555.append(nodes2229);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root2557 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2557); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2229;
      nodes2229 = node.contents();
      oldNodes.replaceWith(nodes2229);
    }));
    var nodes2230 = $("<span>");
    root2555.append(nodes2230);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root2558 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2558); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2230;
      nodes2230 = node.contents();
      oldNodes.replaceWith(nodes2230);
    }));
    var nodes2231 = $("<span>");
    root2555.append(nodes2231);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root2559 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2559); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2231;
      nodes2231 = node.contents();
      oldNodes.replaceWith(nodes2231);
    }));
    callback(root2555); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2227;
    nodes2227 = node.contents();
    oldNodes.replaceWith(nodes2227);
  }));
  callback(root2552); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root2560 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2232 = $("<span>");
  root2560.append(nodes2232);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2561 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1225 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1224 = mobl.ref(result__);
    
    var nodes2233 = $("<span>");
    root2561.append(nodes2233);
    subs__.addSub((ui.backButton)(tmp1224, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1225, function(_, callback) {
      var root2562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2562); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2233;
      nodes2233 = node.contents();
      oldNodes.replaceWith(nodes2233);
    }));
    callback(root2561); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2232;
    nodes2232 = node.contents();
    oldNodes.replaceWith(nodes2232);
  }));
  var nodes2234 = $("<span>");
  root2560.append(nodes2234);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2563 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2235 = $("<span>");
    root2563.append(nodes2235);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root2564 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2564); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2235;
      nodes2235 = node.contents();
      oldNodes.replaceWith(nodes2235);
    }));
    var nodes2236 = $("<span>");
    root2563.append(nodes2236);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root2565 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2565); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2236;
      nodes2236 = node.contents();
      oldNodes.replaceWith(nodes2236);
    }));
    callback(root2563); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2234;
    nodes2234 = node.contents();
    oldNodes.replaceWith(nodes2234);
  }));
  callback(root2560); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root2566 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2237 = $("<span>");
  root2566.append(nodes2237);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2567 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1227 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1226 = mobl.ref(result__);
    
    var nodes2238 = $("<span>");
    root2567.append(nodes2238);
    subs__.addSub((ui.backButton)(tmp1226, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1227, function(_, callback) {
      var root2568 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2568); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2238;
      nodes2238 = node.contents();
      oldNodes.replaceWith(nodes2238);
    }));
    callback(root2567); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2237;
    nodes2237 = node.contents();
    oldNodes.replaceWith(nodes2237);
  }));
  var nodes2239 = $("<span>");
  root2566.append(nodes2239);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2569 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2240 = $("<span>");
    root2569.append(nodes2240);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root2570 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2570); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2240;
      nodes2240 = node.contents();
      oldNodes.replaceWith(nodes2240);
    }));
    var nodes2241 = $("<span>");
    root2569.append(nodes2241);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root2571 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2571); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2241;
      nodes2241 = node.contents();
      oldNodes.replaceWith(nodes2241);
    }));
    var nodes2242 = $("<span>");
    root2569.append(nodes2242);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root2572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2572); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2242;
      nodes2242 = node.contents();
      oldNodes.replaceWith(nodes2242);
    }));
    var nodes2243 = $("<span>");
    root2569.append(nodes2243);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root2573 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2573); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2243;
      nodes2243 = node.contents();
      oldNodes.replaceWith(nodes2243);
    }));
    var nodes2244 = $("<span>");
    root2569.append(nodes2244);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root2574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2574); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2244;
      nodes2244 = node.contents();
      oldNodes.replaceWith(nodes2244);
    }));
    callback(root2569); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2239;
    nodes2239 = node.contents();
    oldNodes.replaceWith(nodes2239);
  }));
  callback(root2566); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root2575 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2245 = $("<span>");
  root2575.append(nodes2245);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2576 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1229 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1228 = mobl.ref(result__);
    
    var nodes2246 = $("<span>");
    root2576.append(nodes2246);
    subs__.addSub((ui.backButton)(tmp1228, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1229, function(_, callback) {
      var root2577 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2577); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2246;
      nodes2246 = node.contents();
      oldNodes.replaceWith(nodes2246);
    }));
    callback(root2576); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2245;
    nodes2245 = node.contents();
    oldNodes.replaceWith(nodes2245);
  }));
  var nodes2247 = $("<span>");
  root2575.append(nodes2247);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2578 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2248 = $("<span>");
    root2578.append(nodes2248);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root2579 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2579); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2248;
      nodes2248 = node.contents();
      oldNodes.replaceWith(nodes2248);
    }));
    var nodes2249 = $("<span>");
    root2578.append(nodes2249);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root2580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2580); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2249;
      nodes2249 = node.contents();
      oldNodes.replaceWith(nodes2249);
    }));
    var nodes2250 = $("<span>");
    root2578.append(nodes2250);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root2581 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2581); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2250;
      nodes2250 = node.contents();
      oldNodes.replaceWith(nodes2250);
    }));
    callback(root2578); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2247;
    nodes2247 = node.contents();
    oldNodes.replaceWith(nodes2247);
  }));
  callback(root2575); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root2582 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2251 = $("<span>");
  root2582.append(nodes2251);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2583 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1231 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1230 = mobl.ref(result__);
    
    var nodes2252 = $("<span>");
    root2583.append(nodes2252);
    subs__.addSub((ui.backButton)(tmp1230, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1231, function(_, callback) {
      var root2584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2584); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2252;
      nodes2252 = node.contents();
      oldNodes.replaceWith(nodes2252);
    }));
    callback(root2583); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2251;
    nodes2251 = node.contents();
    oldNodes.replaceWith(nodes2251);
  }));
  var nodes2253 = $("<span>");
  root2582.append(nodes2253);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2585 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2254 = $("<span>");
    root2585.append(nodes2254);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root2586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2586); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2254;
      nodes2254 = node.contents();
      oldNodes.replaceWith(nodes2254);
    }));
    callback(root2585); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2253;
    nodes2253 = node.contents();
    oldNodes.replaceWith(nodes2253);
  }));
  callback(root2582); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root2587 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2255 = $("<span>");
  root2587.append(nodes2255);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2588 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2256 = $("<span>");
    root2588.append(nodes2256);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root2589 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2589); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2256;
      nodes2256 = node.contents();
      oldNodes.replaceWith(nodes2256);
    }));
    var nodes2257 = $("<span>");
    root2588.append(nodes2257);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root2590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2590); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2257;
      nodes2257 = node.contents();
      oldNodes.replaceWith(nodes2257);
    }));
    var nodes2258 = $("<span>");
    root2588.append(nodes2258);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root2591 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2591); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2258;
      nodes2258 = node.contents();
      oldNodes.replaceWith(nodes2258);
    }));
    var nodes2259 = $("<span>");
    root2588.append(nodes2259);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root2592 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2592); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2259;
      nodes2259 = node.contents();
      oldNodes.replaceWith(nodes2259);
    }));
    var nodes2260 = $("<span>");
    root2588.append(nodes2260);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root2593 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2593); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2260;
      nodes2260 = node.contents();
      oldNodes.replaceWith(nodes2260);
    }));
    var nodes2261 = $("<span>");
    root2588.append(nodes2261);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root2594 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2594); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2261;
      nodes2261 = node.contents();
      oldNodes.replaceWith(nodes2261);
    }));
    var nodes2262 = $("<span>");
    root2588.append(nodes2262);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root2595 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2595); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2262;
      nodes2262 = node.contents();
      oldNodes.replaceWith(nodes2262);
    }));
    var nodes2263 = $("<span>");
    root2588.append(nodes2263);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root2596 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2596); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2263;
      nodes2263 = node.contents();
      oldNodes.replaceWith(nodes2263);
    }));
    var nodes2264 = $("<span>");
    root2588.append(nodes2264);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root2597 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2597); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2264;
      nodes2264 = node.contents();
      oldNodes.replaceWith(nodes2264);
    }));
    var nodes2265 = $("<span>");
    root2588.append(nodes2265);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root2598 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2598); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2265;
      nodes2265 = node.contents();
      oldNodes.replaceWith(nodes2265);
    }));
    var nodes2266 = $("<span>");
    root2588.append(nodes2266);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root2599 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2599); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2266;
      nodes2266 = node.contents();
      oldNodes.replaceWith(nodes2266);
    }));
    var nodes2267 = $("<span>");
    root2588.append(nodes2267);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root2600 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2600); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2267;
      nodes2267 = node.contents();
      oldNodes.replaceWith(nodes2267);
    }));
    var nodes2268 = $("<span>");
    root2588.append(nodes2268);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root2601 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2601); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2268;
      nodes2268 = node.contents();
      oldNodes.replaceWith(nodes2268);
    }));
    callback(root2588); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2255;
    nodes2255 = node.contents();
    oldNodes.replaceWith(nodes2255);
  }));
  callback(root2587); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root2602 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2269 = $("<span>");
  root2602.append(nodes2269);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2603 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2270 = $("<span>");
    root2603.append(nodes2270);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root2604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2604); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2270;
      nodes2270 = node.contents();
      oldNodes.replaceWith(nodes2270);
    }));
    var nodes2271 = $("<span>");
    root2603.append(nodes2271);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root2605 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2605); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2271;
      nodes2271 = node.contents();
      oldNodes.replaceWith(nodes2271);
    }));
    var nodes2272 = $("<span>");
    root2603.append(nodes2272);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root2606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2606); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2272;
      nodes2272 = node.contents();
      oldNodes.replaceWith(nodes2272);
    }));
    var nodes2273 = $("<span>");
    root2603.append(nodes2273);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root2607 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2607); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2273;
      nodes2273 = node.contents();
      oldNodes.replaceWith(nodes2273);
    }));
    var nodes2274 = $("<span>");
    root2603.append(nodes2274);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root2608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2608); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2274;
      nodes2274 = node.contents();
      oldNodes.replaceWith(nodes2274);
    }));
    var nodes2275 = $("<span>");
    root2603.append(nodes2275);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root2609 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2609); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2275;
      nodes2275 = node.contents();
      oldNodes.replaceWith(nodes2275);
    }));
    callback(root2603); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2269;
    nodes2269 = node.contents();
    oldNodes.replaceWith(nodes2269);
  }));
  callback(root2602); return subs__;
  
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
  var root2610 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node100 = $("<div>");
  
  var ref103 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref103.get() !== null) {
    node100.attr('class', ref103.get());
    subs__.addSub(ref103.addEventListener('change', function(_, ref, val) {
      node100.attr('class', val);
    }));
    
  }
  subs__.addSub(ref103.rebind());
  
  var val20 = onclick.get();
  if(val20 !== null) {
    subs__.addSub(mobl.domBind(node100, 'tap', val20));
  }
  
  
  var node101 = $("<div>");
  
  var ref102 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref102.get() !== null) {
    node101.attr('class', ref102.get());
    subs__.addSub(ref102.addEventListener('change', function(_, ref, val) {
      node101.attr('class', val);
    }));
    
  }
  subs__.addSub(ref102.rebind());
  
  
  var node102 = $("<div>");
  
  var ref100 = text;
  node102.text(""+ref100.get());
  var ignore20 = false;
  subs__.addSub(ref100.addEventListener('change', function(_, ref, val) {
    if(ignore20) return;
    node102.text(""+val);
  }));
  subs__.addSub(ref100.rebind());
  
  
  var ref101 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref101.get() !== null) {
    node102.attr('class', ref101.get());
    subs__.addSub(ref101.addEventListener('change', function(_, ref, val) {
      node102.attr('class', val);
    }));
    
  }
  subs__.addSub(ref101.rebind());
  
  node101.append(node102);
  node100.append(node101);
  var nodes2276 = $("<span>");
  node100.append(nodes2276);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2611 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2611); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2276;
      nodes2276 = node.contents();
      oldNodes.replaceWith(nodes2276);
    }));
  }
  renderControl20();
  root2610.append(node100);
  callback(root2610); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp1257 = result__;
    var result__ = plot.renderPlot("corePlotArea", qa);
    if(callback && callback.apply) callback(); return;
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

nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1258 = result__;
    var result__ = tmp1258;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root2612 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1264 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1235 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp1234 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1234.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes2277 = $("<span>");
  root2612.append(nodes2277);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp1234, tmp1235, function(_, callback) {
    var root2613 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1261 = result__;
                       var result__ = tmp1261;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2 == null;
                       if(result__) {
                         var result__ = ui.hideCurrent();
                         if(callback && callback.apply) callback(); return;
                       } else {
                         {
                           var result__ = qa2;
                           qa.set(result__);
                           nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                             var tmp1262 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp1232 = mobl.ref(result__);
    
    var nodes2278 = $("<span>");
    root2613.append(nodes2278);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp1232, function(_, callback) {
      var root2614 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2614); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2278;
      nodes2278 = node.contents();
      oldNodes.replaceWith(nodes2278);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp1259 = result__;
                       var result__ = tmp1259;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp1260 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp1233 = mobl.ref(result__);
    
    var nodes2279 = $("<span>");
    root2613.append(nodes2279);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp1233, function(_, callback) {
      var root2615 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2615); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2279;
      nodes2279 = node.contents();
      oldNodes.replaceWith(nodes2279);
    }));
    callback(root2613); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2277;
    nodes2277 = node.contents();
    oldNodes.replaceWith(nodes2277);
  }));
  var nodes2280 = $("<span>");
  root2612.append(nodes2280);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2616 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1263 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1238 = mobl.ref(result__);
    
    var nodes2281 = $("<span>");
    root2616.append(nodes2281);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1238, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2617 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp1236 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp1236.set("Q" + number.get() + ". ");
      }));
      
      var nodes2282 = $("<span>");
      root2617.append(nodes2282);
      subs__.addSub((mobl.html)(tmp1236, function(_, callback) {
        var root2618 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2618); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2282;
        nodes2282 = node.contents();
        oldNodes.replaceWith(nodes2282);
      }));
      
      var node103 = $("<span>");
      
      var ref104 = mobl.ref("question-block-" + number.get());
      if(ref104.get() !== null) {
        node103.attr('id', ref104.get());
        subs__.addSub(ref104.addEventListener('change', function(_, ref, val) {
          node103.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node103.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref104.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp1237 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp1237.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp1237.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes2283 = $("<span>");
      node103.append(nodes2283);
      subs__.addSub((mobl.html)(tmp1237, function(_, callback) {
        var root2619 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2619); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2283;
        nodes2283 = node.contents();
        oldNodes.replaceWith(nodes2283);
      }));
      root2617.append(node103);
      callback(root2617); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2281;
      nodes2281 = node.contents();
      oldNodes.replaceWith(nodes2281);
    }));
    var nodes2284 = $("<span>");
    root2616.append(nodes2284);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2620 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2285 = $("<span>");
      root2620.append(nodes2285);
      subs__.addSub((nrichRPG.coreWorkout.makeChoices)(qa, number, function(_, callback) {
        var root2621 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2621); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2285;
        nodes2285 = node.contents();
        oldNodes.replaceWith(nodes2285);
      }));
      callback(root2620); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2284;
      nodes2284 = node.contents();
      oldNodes.replaceWith(nodes2284);
    }));
    callback(root2616); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2280;
    nodes2280 = node.contents();
    oldNodes.replaceWith(nodes2280);
  }));
  callback(root2612); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.choiceItemStyle = function(choiceNumber, questionNumber, currentChoice, correctChoice) {
   var __this = this;
  var encodedChoiceNumber = choiceNumber + questionNumber * 4;
  
  var encodedCorrectChoice = correctChoice + questionNumber * 4;
  
  return encodedChoiceNumber == currentChoice ? (currentChoice == encodedCorrectChoice ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle;
};


nrichRPG.coreWorkout.makeChoices = function(qa, number, elements, callback) {
  var root2622 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var currentChoice = mobl.ref(-1);
  var nodes2286 = $("<span>");
  root2622.append(nodes2286);
  subs__.addSub((mobl.block)(mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2623 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = nrichRPG.coreWorkout.generateChoices(qa.get());
    var tmp1242 = mobl.ref(result__);
    subs__.addSub(qa.addEventListener('change', function() {
      tmp1242.set(nrichRPG.coreWorkout.generateChoices(qa.get()));
    }));
    
    
    var node104 = mobl.loadingSpan();
    root2623.append(node104);
    var list20;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList20 = function() {
      var subs__ = listSubs__;
      list20 = tmp1242.get();
      list20.list(function(results20) {
        node104.empty();
        for(var i457 = 0; i457 < results20.length; i457++) {
          (function() {
            var iternode20 = $("<span>");
            node104.append(iternode20);
            var order;var correctChoice;var answer;
            order = mobl.ref(mobl.ref(mobl.ref(results20), i457), "_1");correctChoice = mobl.ref(mobl.ref(mobl.ref(results20), i457), "_2");answer = mobl.ref(mobl.ref(mobl.ref(results20), i457), "_3");
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = order.get() + number.get() * 4;
                             currentChoice.set(result__);
                             var result__ = mobl.alert(correctChoice.get());
                             var result__ = currentChoice.get() == correctChoice.get() + number.get() * 4;
                             if(result__) {
                               var result__ = true;
                               qa.get().done = result__;
                               var result__ = true;
                               qa.get().correct = result__;
                               if(callback && callback.apply) callback(); return;
                             } else {
                               {
                                 var result__ = false;
                                 qa.get().correct = result__;
                                 if(callback && callback.apply) callback(); return;
                               }
                             }
                           };
            var tmp1241 = mobl.ref(result__);
            
            var result__ = nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get());
            var tmp1240 = mobl.ref(result__);
            subs__.addSub(order.addEventListener('change', function() {
              tmp1240.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(number.addEventListener('change', function() {
              tmp1240.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(currentChoice.addEventListener('change', function() {
              tmp1240.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(correctChoice.addEventListener('change', function() {
              tmp1240.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            
            var nodes2287 = $("<span>");
            iternode20.append(nodes2287);
            subs__.addSub((ui.item)(tmp1240, mobl.ref(ui.itemPushedStyle), tmp1241, mobl.ref(null), mobl.ref(true), function(_, callback) {
              var root2624 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = "Choice " + order.get() + ".";
              var tmp1239 = mobl.ref(result__);
              subs__.addSub(order.addEventListener('change', function() {
                tmp1239.set("Choice " + order.get() + ".");
              }));
              
              var nodes2288 = $("<span>");
              root2624.append(nodes2288);
              subs__.addSub((mobl.html)(tmp1239, function(_, callback) {
                var root2625 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2625); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2288;
                nodes2288 = node.contents();
                oldNodes.replaceWith(nodes2288);
              }));
              var nodes2289 = $("<span>");
              root2624.append(nodes2289);
              subs__.addSub((mobl.html)(answer, function(_, callback) {
                var root2626 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2626); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2289;
                nodes2289 = node.contents();
                oldNodes.replaceWith(nodes2289);
              }));
              callback(root2624); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2287;
              nodes2287 = node.contents();
              oldNodes.replaceWith(nodes2287);
            }));
            
            var oldNodes = iternode20;
            iternode20 = iternode20.contents();
            oldNodes.replaceWith(iternode20);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list20.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
        subs__.addSub(tmp1242.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
      });
    };
    renderList20();
    
    callback(root2623); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2286;
    nodes2286 = node.contents();
    oldNodes.replaceWith(nodes2286);
  }));
  callback(root2622); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.generateChoices = function(qa) {
   var __this = this;
  var correctChoice = mobl.random(3) + 1;
  
  var choices = [];
  
  var coll73 = mobl.range(1, 5);
  var length20 = coll73.length;
  for(var i458 = 0; i458 < length20; i458++) {
    var index;
    index = coll73.get(i458);
    if(index == correctChoice) {
      choices.push(new mobl.Tuple(index, correctChoice, qa.answer));
    } else {
      var problem = nrichRPG.coreWorkout.makeProblem(qa.topic);
      
      var answer = problem.get(1);
      
      if(problem.length > 2) {
        answer = problem.get(2);
      } else {
        
      }
      choices.push(new mobl.Tuple(index, correctChoice, answer));
    }
  }
  return choices;
};

nrichRPG.coreWorkout.max = mobl.ref(0);
nrichRPG.coreWorkout.makeQA = function(tid, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  nrichRPG.questionAnswer.QA.all().list(function(coll74) {
    coll74 = coll74.reverse();
    function processOne41() {
      var item;
      item = coll74.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll74.length > 0) processOne41(); else rest41();
      
    }
    function rest41() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeProblem(tid);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = tid;
      qa.topic = result__;
      var result__ = q_and_A.length > 2;
      if(result__) {
        var result__ = q_and_A.get(2);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        var result__ = qa;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          var result__ = qa;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll74.length > 0) processOne41(); else rest41();
  });
  
};

(function(__ns) {
__ns.coreTopicNames = {
                        "C1": "Partial fractions",
                        "C2": "Binomial theorem",
                        "C3": "Polynomial integration",
                        "C4": "Trig integration",
                        "C5": "Scalar products",
                        "C6": "3D Lines",
                        "C7": "Inequalities",
                        "C8": "Arithmetic progressions",
                        "C9": "Factor theorem",
                        "C10": "Quadratics",
                        "C11": "Completing the square",
                        "C12": "Binomial expansion",
                        "C13": "Logarithms",
                        "C14": "Stationary points",
                        "C15": "Triangles",
                        "C16": "Circles",
                        "C17": "Trig equations",
                        "C18": "Vector equations",
                        "C19": "Implicit differentiation",
                        "C20": "The chain rule",
                        "C21": "The product rule",
                        "C22": "The quotient rule",
                        "C23": "Geometric progressions",
                        "C24": "Modulus function",
                        "C25": "Transforms of functions",
                        "C26": "Composition of functions",
                        "C27": "Parametric functions",
                        "C270": "Implicit functions",
                        "C28": "Integration",
                        "C29": "Differential equations",
                        "C30": "Powers"
                      };
__ns.furtherTopicNames = {
                           "F1": "Complex Arithmetic",
                           "F2": "Modulus Argument",
                           "F3a": "2nd order DEs",
                           "F4": "Rank 2 matrices",
                           "F5": "Taylor Series",
                           "F6": "Polar Coordinates",
                           "F7": "Rank 3 matrices",
                           "F8": "Further vectors",
                           "F9": "Newton-Raphson",
                           "F10": "Further inequalities",
                           "F11": "Integration by substitution",
                           "F12": "Figures of revolution",
                           "F13": "Matrix transformations"
                         };
__ns.statsTopicNames = {
                         'S1': "Discrete Distributions",
                         'S2': "Continuous Distributions",
                         'S3': "Hypothesis Testing",
                         'S4': "Confidence Intervals",
                         'S5': "Chi Squared",
                         'S6': "Product Moments"
                       };
__ns.initCoreTopicMap = function(map) {
                          map.data = __ns.coreTopicNames;
                        };
__ns.initFurtherTopicMap = function(map) {
                             map.data = __ns.furtherTopicNames;
                           };
__ns.initStatsTopicMap = function(map) {
                           map.data = __ns.statsTopicNames;
                         };
__ns.makers = {
                "C1": makePartial,
                "C2": makeBinomial2,
                "C3": makePolyInt,
                "C4": makeTrigInt,
                "C5": makeVector,
                "C6": makeLines,
                "C7": makeIneq,
                "C8": makeAP,
                "C9": makeFactor,
                "C10": makeQuadratic,
                "C11": makeComplete,
                "C12": makeBinExp,
                "C13": makeLog,
                "C14": makeStationary,
                "C15": makeTriangle,
                "C16": makeCircle,
                "C17": makeSolvingTrig,
                "C18": makeVectorEq,
                "C19": makeImplicit,
                "C20": makeChainRule,
                "C21": makeProductRule,
                "C22": makeQuotientRule,
                "C23": makeGP,
                "C24": makeModulus,
                "C25": makeTransformation,
                "C26": makeComposition,
                "C27": makeParametric,
                "C270": makeImplicitFunction,
                "C28": makeIntegration,
                "C29": makeDE,
                "C30": makePowers,
                "F1": makeCArithmetic,
                "F2": makeCPolar,
                "F3a": makeDETwoHard,
                "F4": makeMatrix2,
                "F5": makeTaylor,
                "F6": makePolarSketch,
                "F7": makeMatrix3,
                "F8": makeFurtherVector,
                "F9": makeNewtonRaphson,
                "F10": makeFurtherIneq,
                "F11": makeSubstInt,
                "F12": makeRevolution,
                "F13": makeMatXforms,
                'S1': makeDiscreteDistn,
                'S2': makeContinDistn,
                'S3': makeHypTest,
                'S4': makeConfidInt,
                'S5': makeChiSquare,
                'S6': makeProductMoment
              };
__ns.makeProblem = function(tid) {
                     return __ns.makers[tid]();
                   };
}(nrichRPG.coreWorkout));