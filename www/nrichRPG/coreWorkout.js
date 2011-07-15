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
    var tmp8478 = result__;
    var result__ = tmp8478;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp8479 = result__;
      var result__ = tmp8479;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp8480 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll199) {
    coll199 = coll199.reverse();
    function processOne122() {
      var i;
      i = coll199.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp8481 = result__;
        
        if(coll199.length > 0) processOne122(); else rest122();
        
      });
    }
    function rest122() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll199.length > 0) processOne122(); else rest122();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root17002 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14919 = $("<span>");
  root17002.append(nodes14919);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17003 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8489 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8441 = mobl.ref(result__);
    
    var nodes14920 = $("<span>");
    root17003.append(nodes14920);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8441, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root17004 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14921 = $("<span>");
      root17004.append(nodes14921);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17005 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17005); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14921;
        nodes14921 = node.contents();
        oldNodes.replaceWith(nodes14921);
      }));
      callback(root17004); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14920;
      nodes14920 = node.contents();
      oldNodes.replaceWith(nodes14920);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8488 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8442 = mobl.ref(result__);
    
    var nodes14922 = $("<span>");
    root17003.append(nodes14922);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8442, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root17006 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14923 = $("<span>");
      root17006.append(nodes14923);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17007 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17007); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14923;
        nodes14923 = node.contents();
        oldNodes.replaceWith(nodes14923);
      }));
      callback(root17006); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14922;
      nodes14922 = node.contents();
      oldNodes.replaceWith(nodes14922);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8487 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8443 = mobl.ref(result__);
    
    var nodes14924 = $("<span>");
    root17003.append(nodes14924);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8443, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root17008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14925 = $("<span>");
      root17008.append(nodes14925);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17009 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17009); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14925;
        nodes14925 = node.contents();
        oldNodes.replaceWith(nodes14925);
      }));
      callback(root17008); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14924;
      nodes14924 = node.contents();
      oldNodes.replaceWith(nodes14924);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8486 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8444 = mobl.ref(result__);
    
    var nodes14926 = $("<span>");
    root17003.append(nodes14926);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8444, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root17010 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14927 = $("<span>");
      root17010.append(nodes14927);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17011 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17011); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14927;
        nodes14927 = node.contents();
        oldNodes.replaceWith(nodes14927);
      }));
      callback(root17010); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14926;
      nodes14926 = node.contents();
      oldNodes.replaceWith(nodes14926);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8485 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8445 = mobl.ref(result__);
    
    var nodes14928 = $("<span>");
    root17003.append(nodes14928);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8445, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root17012 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14929 = $("<span>");
      root17012.append(nodes14929);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17013 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17013); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14929;
        nodes14929 = node.contents();
        oldNodes.replaceWith(nodes14929);
      }));
      callback(root17012); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14928;
      nodes14928 = node.contents();
      oldNodes.replaceWith(nodes14928);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8484 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8446 = mobl.ref(result__);
    
    var nodes14930 = $("<span>");
    root17003.append(nodes14930);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8446, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root17014 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14931 = $("<span>");
      root17014.append(nodes14931);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17015 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17015); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14931;
        nodes14931 = node.contents();
        oldNodes.replaceWith(nodes14931);
      }));
      callback(root17014); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14930;
      nodes14930 = node.contents();
      oldNodes.replaceWith(nodes14930);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8483 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8447 = mobl.ref(result__);
    
    var nodes14932 = $("<span>");
    root17003.append(nodes14932);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8447, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root17016 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14933 = $("<span>");
      root17016.append(nodes14933);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17017 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17017); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14933;
        nodes14933 = node.contents();
        oldNodes.replaceWith(nodes14933);
      }));
      callback(root17016); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14932;
      nodes14932 = node.contents();
      oldNodes.replaceWith(nodes14932);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp8482 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8448 = mobl.ref(result__);
    
    var nodes14934 = $("<span>");
    root17003.append(nodes14934);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8448, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root17018 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14935 = $("<span>");
      root17018.append(nodes14935);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17019 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17019); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14935;
        nodes14935 = node.contents();
        oldNodes.replaceWith(nodes14935);
      }));
      callback(root17018); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14934;
      nodes14934 = node.contents();
      oldNodes.replaceWith(nodes14934);
    }));
    callback(root17003); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14919;
    nodes14919 = node.contents();
    oldNodes.replaceWith(nodes14919);
  }));
  callback(root17002); return subs__;
  
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
    var tmp8490 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root17020 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp8449 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp8449.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp8449.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes14936 = $("<span>");
  root17020.append(nodes14936);
  subs__.addSub((mobl.label)(tmp8449, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root17021 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17021); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14936;
    nodes14936 = node.contents();
    oldNodes.replaceWith(nodes14936);
  }));
  callback(root17020); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root17022 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp8491 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp8450 = mobl.ref(result__);
  
  var nodes14937 = $("<span>");
  root17022.append(nodes14937);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8450, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root17023 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14938 = $("<span>");
    root17023.append(nodes14938);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root17024 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17024); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14938;
      nodes14938 = node.contents();
      oldNodes.replaceWith(nodes14938);
    }));
    callback(root17023); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14937;
    nodes14937 = node.contents();
    oldNodes.replaceWith(nodes14937);
  }));
  callback(root17022); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root17025 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes14939 = $("<span>");
  root17025.append(nodes14939);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root17026 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8452 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8451 = mobl.ref(result__);
    
    var nodes14940 = $("<span>");
    root17026.append(nodes14940);
    subs__.addSub((ui.backButton)(tmp8451, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8452, function(_, callback) {
      var root17027 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17027); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14940;
      nodes14940 = node.contents();
      oldNodes.replaceWith(nodes14940);
    }));
    callback(root17026); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14939;
    nodes14939 = node.contents();
    oldNodes.replaceWith(nodes14939);
  }));
  var nodes14941 = $("<span>");
  root17025.append(nodes14941);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17028 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14942 = $("<span>");
    root17028.append(nodes14942);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root17029 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17029); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14942;
      nodes14942 = node.contents();
      oldNodes.replaceWith(nodes14942);
    }));
    var nodes14943 = $("<span>");
    root17028.append(nodes14943);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root17030 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17030); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14943;
      nodes14943 = node.contents();
      oldNodes.replaceWith(nodes14943);
    }));
    var nodes14944 = $("<span>");
    root17028.append(nodes14944);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root17031 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17031); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14944;
      nodes14944 = node.contents();
      oldNodes.replaceWith(nodes14944);
    }));
    var nodes14945 = $("<span>");
    root17028.append(nodes14945);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root17032 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17032); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14945;
      nodes14945 = node.contents();
      oldNodes.replaceWith(nodes14945);
    }));
    var nodes14946 = $("<span>");
    root17028.append(nodes14946);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root17033 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17033); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14946;
      nodes14946 = node.contents();
      oldNodes.replaceWith(nodes14946);
    }));
    var nodes14947 = $("<span>");
    root17028.append(nodes14947);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root17034 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17034); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14947;
      nodes14947 = node.contents();
      oldNodes.replaceWith(nodes14947);
    }));
    var nodes14948 = $("<span>");
    root17028.append(nodes14948);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root17035 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17035); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14948;
      nodes14948 = node.contents();
      oldNodes.replaceWith(nodes14948);
    }));
    callback(root17028); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14941;
    nodes14941 = node.contents();
    oldNodes.replaceWith(nodes14941);
  }));
  callback(root17025); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root17036 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14949 = $("<span>");
  root17036.append(nodes14949);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root17037 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8454 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8453 = mobl.ref(result__);
    
    var nodes14950 = $("<span>");
    root17037.append(nodes14950);
    subs__.addSub((ui.backButton)(tmp8453, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8454, function(_, callback) {
      var root17038 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17038); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14950;
      nodes14950 = node.contents();
      oldNodes.replaceWith(nodes14950);
    }));
    callback(root17037); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14949;
    nodes14949 = node.contents();
    oldNodes.replaceWith(nodes14949);
  }));
  var nodes14951 = $("<span>");
  root17036.append(nodes14951);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17039 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14952 = $("<span>");
    root17039.append(nodes14952);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root17040 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17040); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14952;
      nodes14952 = node.contents();
      oldNodes.replaceWith(nodes14952);
    }));
    var nodes14953 = $("<span>");
    root17039.append(nodes14953);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root17041 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17041); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14953;
      nodes14953 = node.contents();
      oldNodes.replaceWith(nodes14953);
    }));
    var nodes14954 = $("<span>");
    root17039.append(nodes14954);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root17042 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17042); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14954;
      nodes14954 = node.contents();
      oldNodes.replaceWith(nodes14954);
    }));
    var nodes14955 = $("<span>");
    root17039.append(nodes14955);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root17043 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17043); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14955;
      nodes14955 = node.contents();
      oldNodes.replaceWith(nodes14955);
    }));
    var nodes14956 = $("<span>");
    root17039.append(nodes14956);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root17044 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17044); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14956;
      nodes14956 = node.contents();
      oldNodes.replaceWith(nodes14956);
    }));
    callback(root17039); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14951;
    nodes14951 = node.contents();
    oldNodes.replaceWith(nodes14951);
  }));
  callback(root17036); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root17045 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14957 = $("<span>");
  root17045.append(nodes14957);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root17046 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8456 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8455 = mobl.ref(result__);
    
    var nodes14958 = $("<span>");
    root17046.append(nodes14958);
    subs__.addSub((ui.backButton)(tmp8455, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8456, function(_, callback) {
      var root17047 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17047); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14958;
      nodes14958 = node.contents();
      oldNodes.replaceWith(nodes14958);
    }));
    callback(root17046); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14957;
    nodes14957 = node.contents();
    oldNodes.replaceWith(nodes14957);
  }));
  var nodes14959 = $("<span>");
  root17045.append(nodes14959);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17048 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14960 = $("<span>");
    root17048.append(nodes14960);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root17049 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17049); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14960;
      nodes14960 = node.contents();
      oldNodes.replaceWith(nodes14960);
    }));
    var nodes14961 = $("<span>");
    root17048.append(nodes14961);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root17050 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17050); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14961;
      nodes14961 = node.contents();
      oldNodes.replaceWith(nodes14961);
    }));
    var nodes14962 = $("<span>");
    root17048.append(nodes14962);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root17051 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17051); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14962;
      nodes14962 = node.contents();
      oldNodes.replaceWith(nodes14962);
    }));
    callback(root17048); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14959;
    nodes14959 = node.contents();
    oldNodes.replaceWith(nodes14959);
  }));
  callback(root17045); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root17052 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14963 = $("<span>");
  root17052.append(nodes14963);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root17053 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8458 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8457 = mobl.ref(result__);
    
    var nodes14964 = $("<span>");
    root17053.append(nodes14964);
    subs__.addSub((ui.backButton)(tmp8457, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8458, function(_, callback) {
      var root17054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17054); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14964;
      nodes14964 = node.contents();
      oldNodes.replaceWith(nodes14964);
    }));
    callback(root17053); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14963;
    nodes14963 = node.contents();
    oldNodes.replaceWith(nodes14963);
  }));
  var nodes14965 = $("<span>");
  root17052.append(nodes14965);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17055 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14966 = $("<span>");
    root17055.append(nodes14966);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root17056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17056); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14966;
      nodes14966 = node.contents();
      oldNodes.replaceWith(nodes14966);
    }));
    var nodes14967 = $("<span>");
    root17055.append(nodes14967);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root17057 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17057); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14967;
      nodes14967 = node.contents();
      oldNodes.replaceWith(nodes14967);
    }));
    var nodes14968 = $("<span>");
    root17055.append(nodes14968);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root17058 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17058); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14968;
      nodes14968 = node.contents();
      oldNodes.replaceWith(nodes14968);
    }));
    var nodes14969 = $("<span>");
    root17055.append(nodes14969);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root17059 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17059); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14969;
      nodes14969 = node.contents();
      oldNodes.replaceWith(nodes14969);
    }));
    callback(root17055); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14965;
    nodes14965 = node.contents();
    oldNodes.replaceWith(nodes14965);
  }));
  callback(root17052); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root17060 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14970 = $("<span>");
  root17060.append(nodes14970);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root17061 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8460 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8459 = mobl.ref(result__);
    
    var nodes14971 = $("<span>");
    root17061.append(nodes14971);
    subs__.addSub((ui.backButton)(tmp8459, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8460, function(_, callback) {
      var root17062 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17062); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14971;
      nodes14971 = node.contents();
      oldNodes.replaceWith(nodes14971);
    }));
    callback(root17061); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14970;
    nodes14970 = node.contents();
    oldNodes.replaceWith(nodes14970);
  }));
  var nodes14972 = $("<span>");
  root17060.append(nodes14972);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17063 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14973 = $("<span>");
    root17063.append(nodes14973);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root17064 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17064); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14973;
      nodes14973 = node.contents();
      oldNodes.replaceWith(nodes14973);
    }));
    var nodes14974 = $("<span>");
    root17063.append(nodes14974);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root17065 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17065); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14974;
      nodes14974 = node.contents();
      oldNodes.replaceWith(nodes14974);
    }));
    callback(root17063); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14972;
    nodes14972 = node.contents();
    oldNodes.replaceWith(nodes14972);
  }));
  callback(root17060); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root17066 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14975 = $("<span>");
  root17066.append(nodes14975);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root17067 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8462 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8461 = mobl.ref(result__);
    
    var nodes14976 = $("<span>");
    root17067.append(nodes14976);
    subs__.addSub((ui.backButton)(tmp8461, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8462, function(_, callback) {
      var root17068 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17068); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14976;
      nodes14976 = node.contents();
      oldNodes.replaceWith(nodes14976);
    }));
    callback(root17067); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14975;
    nodes14975 = node.contents();
    oldNodes.replaceWith(nodes14975);
  }));
  var nodes14977 = $("<span>");
  root17066.append(nodes14977);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17069 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14978 = $("<span>");
    root17069.append(nodes14978);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root17070 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17070); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14978;
      nodes14978 = node.contents();
      oldNodes.replaceWith(nodes14978);
    }));
    var nodes14979 = $("<span>");
    root17069.append(nodes14979);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root17071 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17071); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14979;
      nodes14979 = node.contents();
      oldNodes.replaceWith(nodes14979);
    }));
    var nodes14980 = $("<span>");
    root17069.append(nodes14980);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root17072 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17072); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14980;
      nodes14980 = node.contents();
      oldNodes.replaceWith(nodes14980);
    }));
    var nodes14981 = $("<span>");
    root17069.append(nodes14981);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root17073 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17073); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14981;
      nodes14981 = node.contents();
      oldNodes.replaceWith(nodes14981);
    }));
    var nodes14982 = $("<span>");
    root17069.append(nodes14982);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root17074 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17074); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14982;
      nodes14982 = node.contents();
      oldNodes.replaceWith(nodes14982);
    }));
    callback(root17069); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14977;
    nodes14977 = node.contents();
    oldNodes.replaceWith(nodes14977);
  }));
  callback(root17066); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root17075 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14983 = $("<span>");
  root17075.append(nodes14983);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root17076 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8464 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8463 = mobl.ref(result__);
    
    var nodes14984 = $("<span>");
    root17076.append(nodes14984);
    subs__.addSub((ui.backButton)(tmp8463, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8464, function(_, callback) {
      var root17077 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17077); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14984;
      nodes14984 = node.contents();
      oldNodes.replaceWith(nodes14984);
    }));
    callback(root17076); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14983;
    nodes14983 = node.contents();
    oldNodes.replaceWith(nodes14983);
  }));
  var nodes14985 = $("<span>");
  root17075.append(nodes14985);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17078 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14986 = $("<span>");
    root17078.append(nodes14986);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root17079 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17079); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14986;
      nodes14986 = node.contents();
      oldNodes.replaceWith(nodes14986);
    }));
    var nodes14987 = $("<span>");
    root17078.append(nodes14987);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root17080 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17080); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14987;
      nodes14987 = node.contents();
      oldNodes.replaceWith(nodes14987);
    }));
    var nodes14988 = $("<span>");
    root17078.append(nodes14988);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root17081 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17081); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14988;
      nodes14988 = node.contents();
      oldNodes.replaceWith(nodes14988);
    }));
    callback(root17078); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14985;
    nodes14985 = node.contents();
    oldNodes.replaceWith(nodes14985);
  }));
  callback(root17075); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root17082 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14989 = $("<span>");
  root17082.append(nodes14989);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root17083 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8466 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8465 = mobl.ref(result__);
    
    var nodes14990 = $("<span>");
    root17083.append(nodes14990);
    subs__.addSub((ui.backButton)(tmp8465, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8466, function(_, callback) {
      var root17084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17084); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14990;
      nodes14990 = node.contents();
      oldNodes.replaceWith(nodes14990);
    }));
    callback(root17083); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14989;
    nodes14989 = node.contents();
    oldNodes.replaceWith(nodes14989);
  }));
  var nodes14991 = $("<span>");
  root17082.append(nodes14991);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17085 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14992 = $("<span>");
    root17085.append(nodes14992);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root17086 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17086); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14992;
      nodes14992 = node.contents();
      oldNodes.replaceWith(nodes14992);
    }));
    callback(root17085); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14991;
    nodes14991 = node.contents();
    oldNodes.replaceWith(nodes14991);
  }));
  callback(root17082); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root17087 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14993 = $("<span>");
  root17087.append(nodes14993);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17088 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14994 = $("<span>");
    root17088.append(nodes14994);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root17089 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17089); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14994;
      nodes14994 = node.contents();
      oldNodes.replaceWith(nodes14994);
    }));
    var nodes14995 = $("<span>");
    root17088.append(nodes14995);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root17090 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17090); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14995;
      nodes14995 = node.contents();
      oldNodes.replaceWith(nodes14995);
    }));
    var nodes14996 = $("<span>");
    root17088.append(nodes14996);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root17091 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17091); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14996;
      nodes14996 = node.contents();
      oldNodes.replaceWith(nodes14996);
    }));
    var nodes14997 = $("<span>");
    root17088.append(nodes14997);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root17092 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17092); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14997;
      nodes14997 = node.contents();
      oldNodes.replaceWith(nodes14997);
    }));
    var nodes14998 = $("<span>");
    root17088.append(nodes14998);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root17093 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17093); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14998;
      nodes14998 = node.contents();
      oldNodes.replaceWith(nodes14998);
    }));
    var nodes14999 = $("<span>");
    root17088.append(nodes14999);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root17094 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17094); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14999;
      nodes14999 = node.contents();
      oldNodes.replaceWith(nodes14999);
    }));
    var nodes15000 = $("<span>");
    root17088.append(nodes15000);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root17095 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17095); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15000;
      nodes15000 = node.contents();
      oldNodes.replaceWith(nodes15000);
    }));
    var nodes15001 = $("<span>");
    root17088.append(nodes15001);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root17096 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17096); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15001;
      nodes15001 = node.contents();
      oldNodes.replaceWith(nodes15001);
    }));
    var nodes15002 = $("<span>");
    root17088.append(nodes15002);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root17097 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17097); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15002;
      nodes15002 = node.contents();
      oldNodes.replaceWith(nodes15002);
    }));
    var nodes15003 = $("<span>");
    root17088.append(nodes15003);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root17098 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17098); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15003;
      nodes15003 = node.contents();
      oldNodes.replaceWith(nodes15003);
    }));
    var nodes15004 = $("<span>");
    root17088.append(nodes15004);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root17099 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17099); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15004;
      nodes15004 = node.contents();
      oldNodes.replaceWith(nodes15004);
    }));
    var nodes15005 = $("<span>");
    root17088.append(nodes15005);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root17100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17100); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15005;
      nodes15005 = node.contents();
      oldNodes.replaceWith(nodes15005);
    }));
    var nodes15006 = $("<span>");
    root17088.append(nodes15006);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root17101 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17101); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15006;
      nodes15006 = node.contents();
      oldNodes.replaceWith(nodes15006);
    }));
    callback(root17088); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14993;
    nodes14993 = node.contents();
    oldNodes.replaceWith(nodes14993);
  }));
  callback(root17087); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root17102 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes15007 = $("<span>");
  root17102.append(nodes15007);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17103 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes15008 = $("<span>");
    root17103.append(nodes15008);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root17104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17104); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15008;
      nodes15008 = node.contents();
      oldNodes.replaceWith(nodes15008);
    }));
    var nodes15009 = $("<span>");
    root17103.append(nodes15009);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root17105 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17105); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15009;
      nodes15009 = node.contents();
      oldNodes.replaceWith(nodes15009);
    }));
    var nodes15010 = $("<span>");
    root17103.append(nodes15010);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root17106 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17106); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15010;
      nodes15010 = node.contents();
      oldNodes.replaceWith(nodes15010);
    }));
    var nodes15011 = $("<span>");
    root17103.append(nodes15011);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root17107 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17107); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15011;
      nodes15011 = node.contents();
      oldNodes.replaceWith(nodes15011);
    }));
    var nodes15012 = $("<span>");
    root17103.append(nodes15012);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root17108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17108); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15012;
      nodes15012 = node.contents();
      oldNodes.replaceWith(nodes15012);
    }));
    var nodes15013 = $("<span>");
    root17103.append(nodes15013);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root17109 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17109); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15013;
      nodes15013 = node.contents();
      oldNodes.replaceWith(nodes15013);
    }));
    callback(root17103); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15007;
    nodes15007 = node.contents();
    oldNodes.replaceWith(nodes15007);
  }));
  callback(root17102); return subs__;
  
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
  var root17110 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node899 = $("<div>");
  
  var ref777 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref777.get() !== null) {
    node899.attr('class', ref777.get());
    subs__.addSub(ref777.addEventListener('change', function(_, ref, val) {
      node899.attr('class', val);
    }));
    
  }
  subs__.addSub(ref777.rebind());
  
  var val130 = onclick.get();
  if(val130 !== null) {
    subs__.addSub(mobl.domBind(node899, 'tap', val130));
  }
  
  
  var node900 = $("<div>");
  
  var ref776 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref776.get() !== null) {
    node900.attr('class', ref776.get());
    subs__.addSub(ref776.addEventListener('change', function(_, ref, val) {
      node900.attr('class', val);
    }));
    
  }
  subs__.addSub(ref776.rebind());
  
  
  var node901 = $("<div>");
  
  var ref774 = text;
  node901.text(""+ref774.get());
  var ignore130 = false;
  subs__.addSub(ref774.addEventListener('change', function(_, ref, val) {
    if(ignore130) return;
    node901.text(""+val);
  }));
  subs__.addSub(ref774.rebind());
  
  
  var ref775 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref775.get() !== null) {
    node901.attr('class', ref775.get());
    subs__.addSub(ref775.addEventListener('change', function(_, ref, val) {
      node901.attr('class', val);
    }));
    
  }
  subs__.addSub(ref775.rebind());
  
  node900.append(node901);
  node899.append(node900);
  var nodes15014 = $("<span>");
  node899.append(nodes15014);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl131();
  }));
  
  function renderControl131() {
    subs__.addSub((elements)(function(elements, callback) {
      var root17111 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17111); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15014;
      nodes15014 = node.contents();
      oldNodes.replaceWith(nodes15014);
    }));
  }
  renderControl131();
  root17110.append(node899);
  callback(root17110); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp8492 = result__;
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
    var tmp8493 = result__;
    var result__ = tmp8493;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root17112 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp8499 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp8470 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp8469 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp8469.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes15015 = $("<span>");
  root17112.append(nodes15015);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp8469, tmp8470, function(_, callback) {
    var root17113 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp8496 = result__;
                       var result__ = tmp8496;
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
                             var tmp8497 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp8467 = mobl.ref(result__);
    
    var nodes15016 = $("<span>");
    root17113.append(nodes15016);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp8467, function(_, callback) {
      var root17114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17114); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15016;
      nodes15016 = node.contents();
      oldNodes.replaceWith(nodes15016);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp8494 = result__;
                       var result__ = tmp8494;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp8495 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp8468 = mobl.ref(result__);
    
    var nodes15017 = $("<span>");
    root17113.append(nodes15017);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp8468, function(_, callback) {
      var root17115 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17115); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes15017;
      nodes15017 = node.contents();
      oldNodes.replaceWith(nodes15017);
    }));
    callback(root17113); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15015;
    nodes15015 = node.contents();
    oldNodes.replaceWith(nodes15015);
  }));
  var nodes15018 = $("<span>");
  root17112.append(nodes15018);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17116 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp8498 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8473 = mobl.ref(result__);
    
    var nodes15019 = $("<span>");
    root17116.append(nodes15019);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp8473, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root17117 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp8471 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp8471.set("Q" + number.get() + ". ");
      }));
      
      var nodes15020 = $("<span>");
      root17117.append(nodes15020);
      subs__.addSub((mobl.html)(tmp8471, function(_, callback) {
        var root17118 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17118); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15020;
        nodes15020 = node.contents();
        oldNodes.replaceWith(nodes15020);
      }));
      
      var node902 = $("<span>");
      
      var ref778 = mobl.ref("question-block-" + number.get());
      if(ref778.get() !== null) {
        node902.attr('id', ref778.get());
        subs__.addSub(ref778.addEventListener('change', function(_, ref, val) {
          node902.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node902.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref778.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp8472 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp8472.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp8472.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes15021 = $("<span>");
      node902.append(nodes15021);
      subs__.addSub((mobl.html)(tmp8472, function(_, callback) {
        var root17119 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17119); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15021;
        nodes15021 = node.contents();
        oldNodes.replaceWith(nodes15021);
      }));
      root17117.append(node902);
      callback(root17117); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15019;
      nodes15019 = node.contents();
      oldNodes.replaceWith(nodes15019);
    }));
    var nodes15022 = $("<span>");
    root17116.append(nodes15022);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root17120 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes15023 = $("<span>");
      root17120.append(nodes15023);
      subs__.addSub((nrichRPG.coreWorkout.makeChoices)(qa, function(_, callback) {
        var root17121 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17121); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes15023;
        nodes15023 = node.contents();
        oldNodes.replaceWith(nodes15023);
      }));
      callback(root17120); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15022;
      nodes15022 = node.contents();
      oldNodes.replaceWith(nodes15022);
    }));
    callback(root17116); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15018;
    nodes15018 = node.contents();
    oldNodes.replaceWith(nodes15018);
  }));
  callback(root17112); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.correctChoice = mobl.ref(-1);

nrichRPG.coreWorkout.makeChoices = function(qa, elements, callback) {
  var root17122 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var currenctChoice = mobl.ref(-1);
  var nodes15024 = $("<span>");
  root17122.append(nodes15024);
  subs__.addSub((mobl.block)(mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root17123 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = nrichRPG.coreWorkout.generateChoices(qa.get());
    var tmp8477 = mobl.ref(result__);
    subs__.addSub(qa.addEventListener('change', function() {
      tmp8477.set(nrichRPG.coreWorkout.generateChoices(qa.get()));
    }));
    
    
    var node903 = mobl.loadingSpan();
    root17123.append(node903);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = tmp8477.get();
      list8.list(function(results8) {
        node903.empty();
        for(var i1255 = 0; i1255 < results8.length; i1255++) {
          (function() {
            var iternode8 = $("<span>");
            node903.append(iternode8);
            var order;var answer;
            order = mobl.ref(mobl.ref(mobl.ref(results8), i1255), "_1");answer = mobl.ref(mobl.ref(mobl.ref(results8), i1255), "_2");
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = order.get();
                             currenctChoice.set(result__);
                             var result__ = currenctChoice.get() == nrichRPG.coreWorkout.correctChoice.get();
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
            var tmp8476 = mobl.ref(result__);
            
            var result__ = order.get() == currenctChoice.get() ? (currenctChoice.get() == nrichRPG.coreWorkout.correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle;
            var tmp8475 = mobl.ref(result__);
            subs__.addSub(order.addEventListener('change', function() {
              tmp8475.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == nrichRPG.coreWorkout.correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(currenctChoice.addEventListener('change', function() {
              tmp8475.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == nrichRPG.coreWorkout.correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(nrichRPG.coreWorkout.correctChoice.addEventListener('change', function() {
              tmp8475.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == nrichRPG.coreWorkout.correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
              tmp8475.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == nrichRPG.coreWorkout.correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
              tmp8475.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == nrichRPG.coreWorkout.correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(mobl.ref(ui.itemStyle).addEventListener('change', function() {
              tmp8475.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == nrichRPG.coreWorkout.correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            
            var nodes15025 = $("<span>");
            iternode8.append(nodes15025);
            subs__.addSub((ui.item)(tmp8475, mobl.ref(ui.itemPushedStyle), tmp8476, mobl.ref(null), mobl.ref(true), function(_, callback) {
              var root17124 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = "Choice " + order.get() + ".";
              var tmp8474 = mobl.ref(result__);
              subs__.addSub(order.addEventListener('change', function() {
                tmp8474.set("Choice " + order.get() + ".");
              }));
              
              var nodes15026 = $("<span>");
              root17124.append(nodes15026);
              subs__.addSub((mobl.html)(tmp8474, function(_, callback) {
                var root17125 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root17125); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes15026;
                nodes15026 = node.contents();
                oldNodes.replaceWith(nodes15026);
              }));
              var nodes15027 = $("<span>");
              root17124.append(nodes15027);
              subs__.addSub((mobl.html)(answer, function(_, callback) {
                var root17126 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root17126); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes15027;
                nodes15027 = node.contents();
                oldNodes.replaceWith(nodes15027);
              }));
              callback(root17124); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes15025;
              nodes15025 = node.contents();
              oldNodes.replaceWith(nodes15025);
            }));
            
            var oldNodes = iternode8;
            iternode8 = iternode8.contents();
            oldNodes.replaceWith(iternode8);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list8.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
        subs__.addSub(tmp8477.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
      });
    };
    renderList8();
    
    callback(root17123); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes15024;
    nodes15024 = node.contents();
    oldNodes.replaceWith(nodes15024);
  }));
  callback(root17122); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.generateChoices = function(qa) {
   var __this = this;
  var randomIndex = mobl.random(4);
  
  nrichRPG.coreWorkout.correctChoice.set(randomIndex);
  var choices = [];
  
  var coll200 = mobl.range(1, 5);
  var length62 = coll200.length;
  for(var i1256 = 0; i1256 < length62; i1256++) {
    var index;
    index = coll200.get(i1256);
    if(index == randomIndex) {
      choices.push(new mobl.Tuple(index, qa.answer));
    } else {
      var problem = nrichRPG.coreWorkout.makeProblem(qa.topic);
      
      var answer = problem.get(1);
      
      if(problem.length > 2) {
        answer = problem.get(2);
      } else {
        
      }
      choices.push(new mobl.Tuple(index, answer));
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
  nrichRPG.questionAnswer.QA.all().list(function(coll201) {
    coll201 = coll201.reverse();
    function processOne123() {
      var item;
      item = coll201.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll201.length > 0) processOne123(); else rest123();
      
    }
    function rest123() {
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
    if(coll201.length > 0) processOne123(); else rest123();
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